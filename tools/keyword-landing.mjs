import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const base = "https://ssj-ariel.github.io";
const today = "2026-08-15";

function write(file, content) {
  fs.writeFileSync(path.join(root, file), content, "utf8");
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function json(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replaceAll("<", "\\u003c")}</script>`;
}

function head(meta, canonical, schema = []) {
  return `<!doctype html>
<html lang="es">
<head>
  <!-- Start cookieyes banner -->
  <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/63029c5cae366ef7f38f04401f9d9185/script.js"></script>
  <!-- End cookieyes banner -->
  <!-- Google AdSense -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7507181626477156"
     crossorigin="anonymous"></script>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RM2QTBG2B4"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-RM2QTBG2B4');
    gtag('config', 'G-5FNFDXWJFY');
  </script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}">
  <meta name="theme-color" content="#05060a">
  <meta property="og:title" content="${meta.ogTitle || meta.title}">
  <meta property="og:description" content="${meta.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <link rel="canonical" href="${canonical}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${meta.ogTitle || meta.title}">
  <meta name="twitter:description" content="${meta.description}">
  <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="assets/css/styles.css">
  <link rel="stylesheet" href="assets/css/legal.css">
  <link rel="stylesheet" href="assets/css/seo.css">
  ${schema.map(json).join("\n  ")}
</head>`;
}

function header(active = "") {
  const nav = [
    ["index.html", "Inicio", "index"],
    ["ia.html", "IA", "ia"],
    ["catalogo.html", "Catalogo", "catalogo"],
    ["prompts.html", "Prompts", "prompts"],
    ["ebooks.html", "Ebooks", "ebooks"],
    ["noticias.html", "Noticias", "noticias"],
    ["recursos.html", "Recursos", "recursos"]
  ].map(([href, label, key]) => `<a href="${href}"${key === active ? ' class="active"' : ""}>${label}</a>`).join("");
  return `<body>
<div class="page-transition" aria-hidden="true"></div>
<div class="site-shell">
<canvas class="particle-canvas" id="particleCanvas" aria-hidden="true"></canvas>
<header class="site-header"><a class="brand" href="index.html" aria-label="IA FUTURE inicio"><span class="brand-mark" aria-hidden="true"></span><span><strong>IA FUTURE</strong><small>Guia universitaria de inteligencia artificial</small></span></a><button class="nav-toggle" type="button" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button><nav class="main-nav" aria-label="Navegacion principal">${nav}</nav><a class="header-cta" href="catalogo.html">Herramientas IA</a></header>`;
}

function footer() {
  return `<footer class="site-footer"><div><strong>IA FUTURE</strong><p>Directorio educativo y prototipo academico sobre herramientas de inteligencia artificial. Los nombres, marcas, logotipos, favicons, productos y enlaces pertenecen a sus respectivos titulares.</p><div class="footer-links"><a href="ebooks.html">Ebooks</a><a href="sobre.html">Sobre IA FUTURE</a><a href="contacto.html">Contacto</a><a href="privacidad.html">Privacidad</a><a href="terminos.html">Terminos</a></div></div><a class="button ghost" href="#top">Volver arriba</a></footer>
</div>
<script src="assets/js/app.js"></script>
</body>
</html>
`;
}

function schemaFor(page, canonical) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.h1,
      description: page.description,
      url: canonical,
      dateModified: today,
      publisher: { "@type": "Organization", name: "IA FUTURE", url: base }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
    }
  ];
}

const pages = [
  {
    file: "herramientas-ia.html",
    active: "catalogo",
    title: "Herramientas de IA gratis y premium | IA FUTURE",
    h1: "Herramientas de IA para estudiar, crear y trabajar",
    description: "Directorio de herramientas de IA, inteligencia artificial, prompts, comparativas y guias para estudiantes, creadores y emprendedores.",
    eyebrow: "Herramientas de IA",
    intro: "Si alguien busca herramientas de IA, IA gratis o inteligencia artificial para estudiar, esta pagina explica rapidamente que ofrece IA FUTURE y enlaza al catalogo completo.",
    sections: [
      ["Que herramientas de IA encuentras aqui", "IA FUTURE organiza asistentes de texto, investigacion, imagen, video, presentaciones, escritura, productividad y programacion. La idea es que no tengas que adivinar que IA usar: eliges segun la tarea."],
      ["Para quien sirve IA FUTURE", "Sirve para estudiantes que quieren aprender mejor, creadores que necesitan prompts e imagenes, y personas que buscan comparar herramientas de inteligencia artificial antes de pagar."],
      ["Como empezar", "Empieza por el catalogo, filtra por categoria y abre la guia de cada herramienta. Luego usa las paginas de prompts, comparativas y ebooks para convertir el aprendizaje en resultados concretos."]
    ],
    actions: [["Explorar catalogo de IA", "catalogo.html"], ["Ver mejores IA gratis", "guias/mejores-ias-gratis-estudiantes-2026.html"]],
    faq: [
      ["Que son herramientas de IA?", "Son aplicaciones que usan inteligencia artificial para escribir, resumir, investigar, crear imagenes, hacer presentaciones, programar o automatizar tareas."],
      ["IA FUTURE tiene herramientas gratis?", "Si. El catalogo marca herramientas con version gratis o basica y tambien explica cuando conviene pagar."],
      ["Cual herramienta de IA debo usar primero?", "Para empezar, una IA conversacional como ChatGPT o Gemini, una de investigacion como Perplexity y una visual como Canva AI o Gamma."]
    ]
  },
  {
    file: "inteligencia-artificial.html",
    active: "ia",
    title: "Inteligencia artificial explicada para estudiantes | IA FUTURE",
    h1: "Inteligencia artificial: guia clara para empezar",
    description: "Aprende que es la inteligencia artificial, como funciona la IA, que herramientas existen y como usarla con criterio academico.",
    eyebrow: "Inteligencia artificial",
    intro: "La palabra IA es muy amplia. Esta pagina ayuda a Google y a los usuarios a entender que IA FUTURE es una guia educativa de inteligencia artificial aplicada.",
    sections: [
      ["Que es la inteligencia artificial", "La inteligencia artificial es un conjunto de sistemas capaces de reconocer patrones, generar texto, crear imagenes, analizar datos, responder preguntas y apoyar decisiones. No es magia: necesita contexto, datos y revision humana."],
      ["Por que importa aprender IA", "Aprender IA permite estudiar mejor, crear contenido, comparar fuentes, automatizar tareas y entender los limites de las herramientas digitales actuales."],
      ["IA aplicada en IA FUTURE", "IA FUTURE traduce la inteligencia artificial a casos concretos: herramientas, prompts, comparativas, guias, ebooks y recomendaciones para usar IA de forma responsable."]
    ],
    actions: [["Entender la IA", "ia.html"], ["Ver recursos eticos", "recursos.html"]],
    faq: [
      ["IA e inteligencia artificial son lo mismo?", "Si. IA es la abreviatura de inteligencia artificial."],
      ["La inteligencia artificial reemplaza al estudiante?", "No deberia. Sirve como apoyo para estudiar, estructurar ideas, practicar y revisar, pero el criterio final debe ser humano."],
      ["Donde aprendo IA desde cero?", "Puedes empezar por la pagina IA, luego revisar el catalogo y practicar con prompts concretos."]
    ]
  },
  {
    file: "prompts-ia.html",
    active: "prompts",
    title: "Prompts IA profesionales para estudiar y vender | IA FUTURE",
    h1: "Prompts IA profesionales listos para usar",
    description: "Aprende prompts IA para estudiar, investigar, escribir, crear imagenes, vender ebooks y mejorar resultados con inteligencia artificial.",
    eyebrow: "Prompts IA",
    intro: "Muchas personas buscan prompts IA, prompts para ChatGPT o prompts de inteligencia artificial. Esta pagina concentra esa intencion y la conecta con tus guias y ebooks.",
    sections: [
      ["Que es un prompt IA", "Un prompt IA es una instruccion que le das a una herramienta de inteligencia artificial. Los mejores prompts incluyen rol, contexto, objetivo, formato, restricciones y criterio de calidad."],
      ["Prompts para estudiar", "Puedes usar prompts para explicar temas, crear preguntas de examen, resumir textos, revisar ensayos y practicar antes de una entrega."],
      ["Prompts para vender y crear", "Los prompts tambien sirven para marketing, copywriting, SEO, guion, imagenes y venta de ebooks. IA FUTURE tiene ebooks pensados justo para ese uso."]
    ],
    actions: [["Copiar prompts gratis", "prompts.html"], ["Ver ebooks de prompts", "ebooks.html"]],
    faq: [
      ["Que significa prompts IA?", "Son instrucciones para pedirle a una inteligencia artificial que produzca una respuesta util y con formato claro."],
      ["Puedo usar prompts IA gratis?", "Si. Puedes usar prompts en herramientas con version gratis o basica, aunque cada plataforma tiene limites."],
      ["Los ebooks de IA FUTURE incluyen prompts?", "Si. Los ebooks y packs estan orientados a prompts profesionales, copywriting, marketing, SEO, guion y meta prompts."]
    ]
  },
  {
    file: "ia-future.html",
    active: "index",
    title: "IA FUTURE | Guia de IA, prompts e inteligencia artificial",
    h1: "IA FUTURE: guia de IA, prompts y herramientas",
    description: "IA FUTURE es una guia de inteligencia artificial con herramientas de IA, prompts, comparativas, ebooks y recursos para aprender mejor.",
    eyebrow: "IA FUTURE",
    intro: "Esta pagina refuerza la busqueda de marca: IA FUTURE, Future IA, IA Future y consultas relacionadas con inteligencia artificial.",
    sections: [
      ["Que es IA FUTURE", "IA FUTURE es una guia educativa de inteligencia artificial para estudiantes, creadores y personas que quieren entender herramientas de IA sin perder criterio."],
      ["Que puedes encontrar", "Encontraras catalogo de IA, guias de herramientas, comparativas, prompts, ebooks, recursos eticos y articulos pensados para atraer trafico desde Google."],
      ["Por que no basta buscar IA", "La palabra IA es muy competida. Por eso IA FUTURE trabaja tambien palabras relacionadas: herramientas de IA, prompts IA, inteligencia artificial para estudiantes y mejores IA gratis."]
    ],
    actions: [["Ir al inicio", "index.html"], ["Ver guias SEO", "noticias.html"]],
    faq: [
      ["IA FUTURE es una pagina sobre inteligencia artificial?", "Si. Es una guia sobre IA, herramientas, prompts, comparativas y recursos educativos."],
      ["Por que buscar IA FUTURE ayuda a encontrar la web?", "Porque es la marca del proyecto. A medida que Google indexe mas contenido, tambien puede aparecer por busquedas relacionadas."],
      ["IA FUTURE vende ebooks?", "Si. Tiene una tienda de ebooks y packs con compra manual por Gmail."]
    ]
  }
];

function pageHtml(page) {
  const canonical = `${base}/${page.file}`;
  const bodySections = page.sections.map(([h2, p]) => `<article class="deep-card reveal"><h2>${h2}</h2><p>${p}</p></article>`).join("");
  const actions = page.actions.map(([label, href], i) => `<a class="button ${i === 0 ? "primary" : "ghost"}" href="${href}">${label}</a>`).join("");
  const faq = page.faq.map(([q, a]) => `<article class="deep-card reveal"><h3>${q}</h3><p>${a}</p></article>`).join("");
  return `${head(page, canonical, schemaFor(page, canonical))}
${header(page.active)}
<main id="top">
  <section class="page-hero slim article-hero">
    <div class="page-hero-copy reveal">
      <nav class="breadcrumb" aria-label="Ruta"><a href="index.html">Inicio</a><span>/</span><span>${page.h1}</span></nav>
      <span class="eyebrow"><span></span> ${page.eyebrow}</span>
      <h1>${page.h1}</h1>
      <p>${page.intro}</p>
      <div class="hero-actions">${actions}</div>
    </div>
  </section>
  <section class="section compact">
    <div class="content-grid">${bodySections}</div>
  </section>
  <section class="section compact faq-section" id="faq">
    <div class="section-head reveal"><span>FAQ</span><h2>Preguntas frecuentes</h2><p>Respuestas cortas para usuarios que buscan IA, inteligencia artificial, herramientas o prompts.</p></div>
    <div class="content-grid">${faq}</div>
  </section>
</main>
${footer()}`;
}

for (const page of pages) {
  write(page.file, pageHtml(page));
}

function replaceOnce(text, from, to) {
  return text.includes(from) ? text.replace(from, to) : text;
}

let index = read("index.html");
index = replaceOnce(index, "<title>IA FUTURE | Guia futurista de inteligencias artificiales</title>", "<title>IA FUTURE | Herramientas de IA, prompts e inteligencia artificial</title>");
index = replaceOnce(index, 'content="Portada premium de IA FUTURE, guia universitaria sobre inteligencias artificiales emergentes, herramientas, prompts y aprendizaje responsable."', 'content="IA FUTURE es una guia de inteligencia artificial con herramientas de IA, prompts IA, comparativas, ebooks y recursos para estudiantes y creadores."');
index = replaceOnce(index, '<meta property="og:title" content="IA FUTURE | Guia futurista de inteligencias artificiales">', '<meta property="og:title" content="IA FUTURE | Herramientas de IA, prompts e inteligencia artificial">');
index = replaceOnce(index, '<meta name="twitter:title" content="IA FUTURE | Guia futurista de inteligencias artificiales">', '<meta name="twitter:title" content="IA FUTURE | Herramientas de IA, prompts e inteligencia artificial">');
index = replaceOnce(index, 'La guia futurista para estudiantes universitarios que quieren entender, comparar y dominar herramientas de inteligencia artificial con criterio profesional, etico y academico.', 'La guia de IA FUTURE para encontrar herramientas de IA, aprender inteligencia artificial, copiar prompts IA, comparar aplicaciones y estudiar con criterio profesional, etico y academico.');
index = replaceOnce(index, '<div class="hero-actions"><a class="button primary" href="catalogo.html">Explorar catalogo</a><a class="button ghost" href="ia.html">Entender la IA</a></div>', '<div class="hero-actions"><a class="button primary" href="herramientas-ia.html">Herramientas de IA</a><a class="button ghost" href="inteligencia-artificial.html">Inteligencia artificial</a><a class="button ghost" href="prompts-ia.html">Prompts IA</a></div>');
index = replaceOnce(index, '<div class="hero-metrics"><span><strong>17</strong>IAs con paginas propias</span><span><strong>5</strong>rutas de aprendizaje</span><span><strong>SEO</strong>estructura GitHub Pages</span><span><strong>Etica</strong>uso responsable</span></div>', '<div class="hero-metrics"><span><strong>17</strong>herramientas de IA</span><span><strong>IA</strong>inteligencia artificial</span><span><strong>Prompts</strong>guias y ebooks</span><span><strong>Future</strong>marca IA FUTURE</span></div>');
index = replaceOnce(index, '<a class="traffic-link reveal" href="guias/mejores-ias-gratis-estudiantes-2026.html"><strong>IA gratis para estudiantes</strong><span>Ranking 2026</span></a>', '<a class="traffic-link reveal" href="herramientas-ia.html"><strong>Herramientas de IA</strong><span>Directorio principal</span></a><a class="traffic-link reveal" href="inteligencia-artificial.html"><strong>Inteligencia artificial</strong><span>Guia base</span></a><a class="traffic-link reveal" href="prompts-ia.html"><strong>Prompts IA</strong><span>Prompts y ebooks</span></a><a class="traffic-link reveal" href="ia-future.html"><strong>IA FUTURE</strong><span>Marca principal</span></a><a class="traffic-link reveal" href="guias/mejores-ias-gratis-estudiantes-2026.html"><strong>IA gratis para estudiantes</strong><span>Ranking 2026</span></a>');
index = index.replace('"name":"IA FUTURE","url":"https://ssj-ariel.github.io/"', '"name":"IA FUTURE","alternateName":["IA Future","Future IA","herramientas de IA","prompts IA"],"url":"https://ssj-ariel.github.io/"');
write("index.html", index);

let ia = read("ia.html");
ia = replaceOnce(ia, "<title>Que es la IA | IA FUTURE</title>", "<title>IA e inteligencia artificial explicada | IA FUTURE</title>");
ia = replaceOnce(ia, '<meta property="og:title" content="Que es la IA | IA FUTURE">', '<meta property="og:title" content="IA e inteligencia artificial explicada | IA FUTURE">');
ia = replaceOnce(ia, '<meta name="twitter:title" content="Que es la IA | IA FUTURE">', '<meta name="twitter:title" content="IA e inteligencia artificial explicada | IA FUTURE">');
ia = replaceOnce(ia, 'Entiende la IA antes de usarla', 'IA e inteligencia artificial explicada desde cero');
write("ia.html", ia);

let catalog = read("catalogo.html");
catalog = replaceOnce(catalog, "<title>Catalogo de IAs | IA FUTURE</title>", "<title>Catalogo de herramientas de IA | IA FUTURE</title>");
catalog = replaceOnce(catalog, '<meta property="og:title" content="Catalogo de IAs | IA FUTURE">', '<meta property="og:title" content="Catalogo de herramientas de IA | IA FUTURE">');
catalog = replaceOnce(catalog, '<meta name="twitter:title" content="Catalogo de IAs | IA FUTURE">', '<meta name="twitter:title" content="Catalogo de herramientas de IA | IA FUTURE">');
write("catalogo.html", catalog);

let prompts = read("prompts.html");
prompts = replaceOnce(prompts, "<title>Prompts profesionales | IA FUTURE</title>", "<title>Prompts IA profesionales | IA FUTURE</title>");
prompts = replaceOnce(prompts, '<meta property="og:title" content="Prompts profesionales | IA FUTURE">', '<meta property="og:title" content="Prompts IA profesionales | IA FUTURE">');
prompts = replaceOnce(prompts, '<meta name="twitter:title" content="Prompts profesionales | IA FUTURE">', '<meta name="twitter:title" content="Prompts IA profesionales | IA FUTURE">');
write("prompts.html", prompts);

let sitemap = read("sitemap.xml");
const newUrls = pages.map(page => `  <url><loc>${base}/${page.file}</loc><lastmod>${today}</lastmod><priority>${page.file === "ia-future.html" ? "0.9" : "0.85"}</priority></url>`).join("\n");
if (!sitemap.includes(`${base}/herramientas-ia.html`)) {
  sitemap = sitemap.replace("</urlset>", `${newUrls}\n</urlset>`);
  write("sitemap.xml", sitemap);
}

console.log(`Keyword landing pages generated: ${pages.map(p => p.file).join(", ")}`);
