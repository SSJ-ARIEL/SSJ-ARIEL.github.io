import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, content) {
  fs.writeFileSync(path.join(root, file), content, "utf8");
}

function setHero(file, image, alt) {
  let html = read(file);
  const nested = file.includes("/");
  const src = `${nested ? "../" : ""}assets/img/${image}`;
  if (html.includes(src)) return;
  html = html.replace(
    /<section class="page-hero slim([^"]*)">\s*<div class="page-hero-copy reveal">/,
    `<section class="page-hero image-hero visual-hero$1"><img src="${src}" alt="${alt}" loading="eager"><div class="page-hero-copy reveal">`
  );
  write(file, html);
}

const heroMap = [
  ["herramientas-ia.html", "ai-tools-atlas.webp", "Atlas holografico de herramientas de IA para estudiar y crear"],
  ["inteligencia-artificial.html", "ai-learning-visual.webp", "Visual educativo de inteligencia artificial saliendo de un libro"],
  ["prompts-ia.html", "prompt-ebooks-showcase.webp", "Ebooks y tarjetas digitales de prompts IA"],
  ["ia-future.html", "ai-tools-atlas.webp", "Ecosistema visual de IA FUTURE y herramientas de inteligencia artificial"],
  ["noticias.html", "ai-tools-atlas.webp", "Guias y comparativas de inteligencia artificial en IA FUTURE"]
];

for (const item of heroMap) setHero(...item);

for (const file of fs.readdirSync(path.join(root, "comparativas")).filter(f => f.endsWith(".html"))) {
  setHero(`comparativas/${file}`, "ai-comparison-dashboard.webp", "Dashboard holografico para comparar herramientas de inteligencia artificial");
}

const guideImages = {
  "como-hacer-prompts-para-tareas-universitarias.html": ["prompt-ebooks-showcase.webp", "Guias digitales y tarjetas de prompts IA para estudiantes"],
  "prompts-para-marketing-con-ia.html": ["prompt-ebooks-showcase.webp", "Recursos digitales de prompts para marketing con IA"],
  "como-vender-ebooks-con-ia.html": ["prompt-ebooks-showcase.webp", "Coleccion de ebooks digitales y prompts de IA"],
  "mejores-ia-para-estudiar-y-resumir.html": ["ai-learning-visual.webp", "Aprendizaje de inteligencia artificial con mapa de conocimiento"],
  "como-usar-ia-sin-plagio.html": ["ai-learning-visual.webp", "Laboratorio educativo de IA y aprendizaje responsable"],
  "mejores-ias-gratis-estudiantes-2026.html": ["ai-tools-atlas.webp", "Mapa visual de herramientas de IA gratis para estudiantes"],
  "mejores-ia-para-presentaciones.html": ["ai-comparison-dashboard.webp", "Panel visual para elegir IA de presentaciones"],
  "ia-para-crear-imagenes-gratis.html": ["ai-tools-atlas.webp", "Ecosistema visual de IA para crear imagenes"]
};

for (const [file, [image, alt]] of Object.entries(guideImages)) {
  setHero(`guias/${file}`, image, alt);
}

let ebooks = read("ebooks.html");
ebooks = ebooks.replace("assets/img/catalog-atlas.webp", "assets/img/prompt-ebooks-showcase.webp");
ebooks = ebooks.replace("Catalogo digital futurista de ebooks IA FUTURE", "Coleccion futurista de ebooks y prompts IA FUTURE");
write("ebooks.html", ebooks);

let catalog = read("catalogo.html");
catalog = catalog.replace("assets/img/catalog-atlas.webp", "assets/img/ai-tools-atlas.webp");
catalog = catalog.replace("Atlas futurista de herramientas de IA", "Atlas holografico de herramientas de inteligencia artificial");
write("catalogo.html", catalog);

let ia = read("ia.html");
ia = ia.replace("assets/img/learning-lab.webp", "assets/img/ai-learning-visual.webp");
ia = ia.replace("Laboratorio futurista de aprendizaje con IA", "Visual educativo de inteligencia artificial y aprendizaje");
write("ia.html", ia);

let recursos = read("recursos.html");
recursos = recursos.replace("assets/img/learning-lab.webp", "assets/img/ai-learning-visual.webp");
recursos = recursos.replace("Recursos futuristas para aprender IA", "Recursos visuales para aprender inteligencia artificial con criterio");
write("recursos.html", recursos);

let index = read("index.html");
if (!index.includes("visual-showcase")) {
  const block = `<section class="section compact visual-showcase"><div class="section-head reveal"><span>Visuales IA FUTURE</span><h2>Aprende, compara y crea con una experiencia mas visual.</h2><p>Imagenes originales optimizadas en WebP para reforzar las rutas principales del sitio sin hacer lenta la carga.</p></div><div class="visual-grid"><a class="visual-tile reveal" href="herramientas-ia.html"><img src="assets/img/ai-tools-atlas.webp" alt="Atlas visual de herramientas de IA" loading="lazy"><strong>Herramientas de IA</strong><span>Explora el ecosistema</span></a><a class="visual-tile reveal" href="prompts-ia.html"><img src="assets/img/prompt-ebooks-showcase.webp" alt="Ebooks y prompts IA FUTURE" loading="lazy"><strong>Prompts IA</strong><span>Guias y ebooks</span></a><a class="visual-tile reveal" href="comparativas/chatgpt-vs-gemini.html"><img src="assets/img/ai-comparison-dashboard.webp" alt="Comparativa visual de herramientas de IA" loading="lazy"><strong>Comparativas</strong><span>Elige mejor</span></a></div></section>`;
  index = index.replace('<section class="section compact"><div class="section-head reveal"><span>Guias SEO</span>', `${block}\n  <section class="section compact"><div class="section-head reveal"><span>Guias SEO</span>`);
  write("index.html", index);
}

console.log("Generated WebP images placed across landing pages, guides, comparisons, ebooks, catalog and home.");
