import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const baseUrl = 'https://ssj-ariel.github.io/';
const errors = [];

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    if (entry === '.git') return [];
    const absolute = join(directory, entry);
    return statSync(absolute).isDirectory() ? walk(absolute) : [absolute];
  });
}

function projectPath(file) {
  return relative(root, file).split(sep).join('/');
}

function capture(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? '';
}

function count(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

function textWordCount(html) {
  const text = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text ? text.split(' ').length : 0;
}

function expectedCanonical(file) {
  const path = projectPath(file);
  return path === 'index.html' ? baseUrl : `${baseUrl}${path}`;
}

function localTarget(file, rawUrl) {
  const url = rawUrl.trim();
  if (!url || url.startsWith('#') || /^(mailto:|tel:|javascript:|data:)/i.test(url)) return null;

  let pathname = url.split('#')[0].split('?')[0];
  if (/^https?:\/\//i.test(pathname)) {
    if (!pathname.startsWith(baseUrl)) return null;
    pathname = pathname.slice(baseUrl.length);
    return resolve(root, decodeURIComponent(pathname || 'index.html'));
  }

  if (pathname.startsWith('/')) return resolve(root, decodeURIComponent(pathname.slice(1) || 'index.html'));
  return resolve(dirname(file), decodeURIComponent(pathname));
}

const htmlFiles = walk(root).filter((file) => file.endsWith('.html'));
const indexable = [];
const titles = new Map();
const descriptions = new Map();

for (const file of htmlFiles) {
  const path = projectPath(file);
  const html = readFileSync(file, 'utf8');
  const isNoindex = /<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html);

  for (const match of html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      errors.push(`${path}: invalid JSON-LD (${error.message})`);
    }
  }
  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\balt=["'][^"']+["']/i.test(match[1])) errors.push(`${path}: image without useful alt text`);
  }

  if (!isNoindex && path !== '404.html') {
    indexable.push(file);
    const title = capture(html, /<title>([\s\S]*?)<\/title>/i);
    const description = capture(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    const canonical = capture(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    const h1Count = count(html, /<h1\b/gi);
    const headingLevels = [...html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));

    if (!title) errors.push(`${path}: missing title`);
    if (!description) errors.push(`${path}: missing meta description`);
    if (canonical !== expectedCanonical(file)) errors.push(`${path}: canonical is ${canonical || 'missing'}`);
    if (h1Count !== 1) errors.push(`${path}: expected one H1, found ${h1Count}`);
    for (let index = 1; index < headingLevels.length; index += 1) {
      if (headingLevels[index] > headingLevels[index - 1] + 1) {
        errors.push(`${path}: heading level jumps from H${headingLevels[index - 1]} to H${headingLevels[index]}`);
        break;
      }
    }
    if (!/adsbygoogle\.js\?client=ca-pub-7507181626477156/.test(html)) errors.push(`${path}: AdSense loader missing`);

    if (title) titles.set(title, [...(titles.get(title) ?? []), path]);
    if (description) descriptions.set(description, [...(descriptions.get(description) ?? []), path]);
  } else if (/adsbygoogle\.js\?client=ca-pub-7507181626477156/.test(html)) {
    errors.push(`${path}: noindex page still loads AdSense`);
  }

  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const target = localTarget(file, match[1]);
    if (target && !existsSync(target)) errors.push(`${path}: broken local reference ${match[1]}`);
  }
}

for (const [title, paths] of titles) {
  if (paths.length > 1) errors.push(`duplicate title "${title}": ${paths.join(', ')}`);
}
for (const [description, paths] of descriptions) {
  if (paths.length > 1) errors.push(`duplicate description "${description}": ${paths.join(', ')}`);
}

const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedUrls = indexable.map(expectedCanonical).sort();
const actualUrls = [...sitemapUrls].sort();
if (JSON.stringify(actualUrls) !== JSON.stringify(expectedUrls)) {
  const missing = expectedUrls.filter((url) => !actualUrls.includes(url));
  const extra = actualUrls.filter((url) => !expectedUrls.includes(url));
  if (missing.length) errors.push(`sitemap missing: ${missing.join(', ')}`);
  if (extra.length) errors.push(`sitemap contains non-indexable URLs: ${extra.join(', ')}`);
}

const adsTxt = readFileSync(join(root, 'ads.txt'), 'utf8').trim();
if (adsTxt !== 'google.com, pub-7507181626477156, DIRECT, f08c47fec0942fa0') errors.push('ads.txt does not match the AdSense publisher record');

const robotsTxt = readFileSync(join(root, 'robots.txt'), 'utf8');
if (!robotsTxt.includes('Sitemap: https://ssj-ariel.github.io/sitemap.xml')) errors.push('robots.txt does not declare the live sitemap');

const counts = indexable
  .map((file) => ({ path: projectPath(file), words: textWordCount(readFileSync(file, 'utf8')) }))
  .sort((a, b) => a.words - b.words);

console.log(`HTML pages: ${htmlFiles.length}`);
console.log(`Indexable pages: ${indexable.length}`);
console.log(`Noindex/404 pages: ${htmlFiles.length - indexable.length}`);
console.log(`Sitemap URLs: ${sitemapUrls.length}`);
console.log('Lowest visible word counts:');
for (const item of counts.slice(0, 10)) console.log(`  ${item.words.toString().padStart(4)}  ${item.path}`);

if (errors.length) {
  console.error(`\nValidation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log('\nValidation passed: metadata, canonicals, internal references, sitemap and ads.txt are consistent.');
}
