import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const base = "https://ssj-ariel.github.io";
const today = "2026-08-15";

const guides = [
  {
    slug: "mejores-ias-gratis-estudiantes-2026",
    title: "Mejores IA gratis para estudiantes en 2026 | IA FUTURE",
    h1: "Mejores IA gratis para estudiantes en 2026",
    description: "Ranking de herramientas de inteligencia artificial gratis o con plan basico para estudiar, resumir, investigar, escribir y crear presentaciones.",
    category: "Ranking",
    summary: "Si estas empezando, no necesitas pagar desde el primer dia. La mejor estrategia es elegir una IA para entender temas, una para investigar, una para presentaciones y una para revisar textos.",
    sections: [
      ["La ruta recomendada", ["Empieza con ChatGPT o Gemini para estudiar conceptos, Perplexity para investigar con fuentes, Canva AI o Gamma para presentaciones y Grammarly o QuillBot para pulir textos.", "La clave no es usar diez herramientas a la vez. Es construir un flujo simple: entender, ordenar, crear, revisar y entregar."]],
      ["Herramientas destacadas", ["ChatGPT sirve para tutorias, explicaciones y borradores. Gemini encaja bien si ya usas el ecosistema de Google. Perplexity es fuerte cuando quieres respuestas con enlaces y contexto. Canva AI ayuda a convertir ideas en piezas visuales. Gamma acelera presentaciones."]],
      ["Como elegir sin perder tiempo", ["Si tu tarea es estudiar, prioriza una IA conversacional. Si necesitas citas o contexto actual, usa una IA de investigacion. Si debes exponer, usa una herramienta visual. Si vas a entregar texto, revisa claridad, citas y originalidad antes de enviarlo."]],
      ["Errores que bajan tu nota", ["Copiar una respuesta completa sin entenderla es el error mas comun. Tambien es peligroso inventar fuentes, subir datos personales, no verificar fechas o entregar un texto que no suena a ti. Usa IA como apoyo, no como reemplazo de criterio."]]
    ],
    links: [["Abrir catalogo de IAs", "../catalogo.html"], ["Ver prompts profesionales", "../prompts.html"]],
    faq: [
      ["Cual es la mejor IA gratis para estudiantes?", "Para empezar, ChatGPT o Gemini son buenas opciones generales. Si necesitas investigar con enlaces, Perplexity suele ser mas conveniente."],
      ["Necesito pagar para usar IA en la universidad?", "No al principio. Conviene probar planes gratis o basicos y pagar solo cuando una herramienta te ahorra tiempo varias veces por semana."],
      ["Puedo usar IA en tareas academicas?", "Depende de las reglas de tu institucion. Lo recomendable es usarla para estudiar, ordenar ideas y revisar, no para ocultar autoria."]
    ]
  },
  {
    slug: "mejores-ia-para-presentaciones",
    title: "Mejores IA para hacer presentaciones | IA FUTURE",
    h1: "Mejores IA para hacer presentaciones",
    description: "Comparativa practica de IA para crear presentaciones, diapositivas, guiones, imagenes y exposiciones universitarias.",
    category: "Presentaciones",
    summary: "Una buena presentacion no nace solo del diseno. Primero necesitas una idea clara, una estructura fuerte y luego una herramienta que convierta esa estructura en diapositivas.",
    sections: [
      ["La combinacion mas eficiente", ["Usa ChatGPT o Claude para crear el guion, Gamma para convertirlo en diapositivas, Canva para pulir diseno y DALL-E o Leonardo AI para crear imagenes de apoyo.", "Este flujo separa pensamiento de diseno. Asi evitas diapositivas bonitas pero vacias."]],
      ["Cuando usar Gamma", ["Gamma es util si necesitas una primera version rapida con estructura, titulos y bloques. Funciona mejor cuando ya tienes un esquema claro y le pides un numero de secciones concreto."]],
      ["Cuando usar Canva AI", ["Canva AI es mejor para pulir apariencia, portadas, iconos, colores y piezas visuales. Es ideal si vas a presentar en clase, redes o una propuesta simple."]],
      ["Checklist antes de presentar", ["Revisa que cada diapositiva tenga una sola idea, que las fuentes sean legibles, que no haya demasiado texto y que el cierre tenga una accion clara. Ensaya con un cronometro antes de exponer."]]
    ],
    links: [["Comparar Canva vs Gamma", "../comparativas/canva-vs-gamma.html"], ["Ver guia de Gamma", "../ias/gamma.html"]],
    faq: [
      ["Que IA hace presentaciones automaticamente?", "Gamma es una de las opciones mas directas para transformar un esquema en presentacion."],
      ["Canva AI sirve para estudiantes?", "Si. Sirve para mejorar portadas, diapositivas, imagenes, colores y formatos visuales."],
      ["Como evitar una presentacion generica?", "Da contexto: materia, publico, duracion, objetivo, tono, numero de diapositivas y criterio de evaluacion."]
    ]
  },
  {
    slug: "como-hacer-prompts-para-tareas-universitarias",
    title: "Como hacer prompts para tareas universitarias | IA FUTURE",
    h1: "Como hacer prompts para tareas universitarias",
    description: "Metodo claro para escribir prompts universitarios con rol, contexto, objetivo, restricciones, formato y criterio de calidad.",
    category: "Prompts",
    summary: "Un prompt profesional no es una frase larga. Es una instruccion con contexto, objetivo, limites y formato de salida.",
    sections: [
      ["La formula base", ["Usa esta estructura: rol, materia, nivel, objetivo, informacion disponible, restricciones, formato y criterio de evaluacion.", "Ejemplo: Actua como tutor universitario de economia. Explica inflacion para primer semestre, con ejemplos cotidianos, errores comunes y cinco preguntas de practica."]],
      ["Prompts para estudiar", ["Pide explicaciones por capas: resumen, desarrollo, ejemplo, ejercicio y correccion. Esto ayuda a entender antes de memorizar."]],
      ["Prompts para investigar", ["Pide preguntas de investigacion, conceptos clave, posibles fuentes y puntos que debes verificar manualmente. No pidas citas inventadas: pide pistas de busqueda y luego confirma."]],
      ["Prompts para entregar mejor", ["Antes de entregar, pide revision de claridad, estructura, coherencia, tono academico y posibles puntos debiles. La version final debe pasar por tu criterio."]]
    ],
    links: [["Ver biblioteca de ebooks", "../ebooks.html"], ["Copiar prompts listos", "../prompts.html"]],
    faq: [
      ["Que debe tener un buen prompt?", "Debe incluir rol, contexto, objetivo, formato, restricciones y criterio de calidad."],
      ["Los prompts largos son mejores?", "No siempre. Son mejores cuando aportan contexto util, no cuando agregan ruido."],
      ["Puedo vender prompts?", "Si creas prompts originales, utiles y bien empaquetados, puedes vender guias o packs. Deben aportar metodo, no solo frases sueltas."]
    ]
  },
  {
    slug: "ia-para-crear-imagenes-gratis",
    title: "IA para crear imagenes gratis | IA FUTURE",
    h1: "IA para crear imagenes gratis",
    description: "Guia para elegir herramientas de IA visual, crear prompts de imagen y evitar errores de derechos, marcas y calidad.",
    category: "Imagen",
    summary: "Las IA de imagen ayudan a crear portadas, moodboards, conceptos y material visual. Pero el resultado depende mucho de la descripcion.",
    sections: [
      ["Herramientas que conviene probar", ["DALL-E es practica para imagenes educativas y edicion guiada. Leonardo AI funciona bien para assets, estilos y variaciones. Midjourney destaca en arte conceptual y direccion visual. Canva AI ayuda a llevar la imagen a una pieza usable."]],
      ["Prompt visual basico", ["Describe sujeto, contexto, composicion, luz, paleta, estilo, formato y restricciones. Ejemplo: portada futurista de una guia de IA para estudiantes, robot elegante, luz azul y violeta, fondo limpio, sin texto."]],
      ["Errores frecuentes", ["No pidas demasiados elementos en una sola imagen. Evita marcas registradas, logos reales o personas privadas. Revisa manos, texto, rostros y detalles antes de publicar."]],
      ["Como usarlo para tu web", ["Usa imagenes para portadas de articulos, banners de ebooks, miniaturas de redes y fondos visuales. Mantener el estilo consistente ayuda a que IA FUTURE se reconozca."]]
    ],
    links: [["Ver guia de DALL-E", "../ias/dalle.html"], ["Ver guia de Leonardo AI", "../ias/leonardo.html"]],
    faq: [
      ["Que IA puedo usar para crear imagenes?", "DALL-E, Leonardo AI, Midjourney y Canva AI son opciones utiles segun el estilo y el flujo que necesites."],
      ["Puedo publicar imagenes creadas con IA?", "Revisa terminos de cada herramienta, derechos de uso, marcas y politicas de la plataforma donde vas a publicar."],
      ["Como hago mejores imagenes con IA?", "Describe sujeto, composicion, luz, estilo y restricciones. Luego genera variaciones y elige la mas estable."]
    ]
  },
  {
    slug: "mejores-ia-para-estudiar-y-resumir",
    title: "Mejores IA para estudiar y resumir textos | IA FUTURE",
    h1: "Mejores IA para estudiar y resumir textos",
    description: "Herramientas y metodo para resumir apuntes, entender lecturas, practicar examenes y estudiar con inteligencia artificial.",
    category: "Estudio",
    summary: "Resumir no es borrar palabras. Un buen resumen conserva ideas, relaciones, ejemplos y preguntas importantes.",
    sections: [
      ["Flujo de estudio con IA", ["Primero pide un mapa del tema. Luego un resumen por secciones. Despues solicita preguntas de practica y finalmente una evaluacion de tus respuestas.", "Este flujo convierte la IA en tutor, no en copiadora."]],
      ["Herramientas utiles", ["ChatGPT y Claude funcionan bien para explicaciones largas. Gemini es practico si trabajas con Google. QuillBot y Grammarly ayudan a revisar claridad y redaccion."]],
      ["Como evitar resumenes pobres", ["No pidas solo 'resume esto'. Indica nivel, materia, objetivo, extension, conceptos obligatorios y formato. Pide tambien dudas probables y errores comunes."]],
      ["Metodo de examen", ["Pide 10 preguntas de opcion multiple, 5 preguntas abiertas y una rubrica para corregirte. Responde antes de mirar la solucion."]]
    ],
    links: [["Ver guia de ChatGPT", "../ias/chatgpt.html"], ["Ver guia de Claude", "../ias/claude.html"]],
    faq: [
      ["Que IA resume mejor textos largos?", "Claude y ChatGPT suelen ser buenas opciones para lectura extensa, aunque siempre debes revisar el resultado."],
      ["Como estudio con IA sin copiar?", "Usala para explicar, preguntarte, corregirte y practicar. La respuesta final debe pasar por tu comprension."],
      ["La IA puede hacerme preguntas de examen?", "Si. Pidele preguntas por nivel, respuestas esperadas y explicacion de errores."]
    ]
  },
  {
    slug: "como-usar-ia-sin-plagio",
    title: "Como usar IA sin plagio en la universidad | IA FUTURE",
    h1: "Como usar IA sin plagio en la universidad",
    description: "Guia etica para usar inteligencia artificial en tareas, ensayos, investigaciones y presentaciones sin perder autoria.",
    category: "Etica",
    summary: "La IA puede ayudarte a aprender, pero no debe esconder plagio ni reemplazar tu responsabilidad academica.",
    sections: [
      ["Uso correcto", ["Usa IA para entender temas, crear esquemas, detectar dudas, practicar preguntas, revisar claridad y mejorar estructura. Eso fortalece tu aprendizaje."]],
      ["Uso riesgoso", ["Copiar respuestas completas, inventar citas, ocultar fuentes o entregar texto que no entiendes puede causarte problemas academicos."]],
      ["Como declarar el uso de IA", ["Si tu profesor lo pide, indica herramienta, finalidad y tipo de ayuda recibida. Por ejemplo: se uso IA para revisar claridad y generar preguntas de practica."]],
      ["Checklist antes de entregar", ["Verifica datos, revisa fuentes, elimina frases genericas, adapta el texto a tu voz, confirma reglas de tu institucion y guarda tu proceso de trabajo."]]
    ],
    links: [["Leer recursos y etica", "../recursos.html"], ["Ver prompts responsables", "../prompts.html"]],
    faq: [
      ["Usar IA siempre es plagio?", "No. Depende de las reglas, el uso y la transparencia. Usarla para estudiar o revisar no es lo mismo que copiar una respuesta final."],
      ["Debo decir que use IA?", "Si la rubrica o la institucion lo pide, si. La transparencia reduce riesgos."],
      ["La IA puede inventar fuentes?", "Si. Por eso debes verificar referencias, autores, fechas y enlaces antes de usar cualquier dato."]
    ]
  },
  {
    slug: "prompts-para-marketing-con-ia",
    title: "Prompts para marketing con IA | IA FUTURE",
    h1: "Prompts para marketing con IA",
    description: "Prompts y metodo para crear ofertas, anuncios, contenido, embudos simples y mensajes comerciales con inteligencia artificial.",
    category: "Marketing",
    summary: "La IA puede ayudar a vender mejor si primero entiendes cliente, problema, oferta y canal. Sin eso, solo produce frases bonitas.",
    sections: [
      ["Prompt de cliente ideal", ["Actua como estratega de marketing. Define cliente ideal para [producto], dolores, deseos, objeciones, palabras que usa y ofertas que podrian interesarle."]],
      ["Prompt de oferta", ["Crea 5 propuestas de valor para [producto]. Incluye promesa, beneficio, prueba, urgencia responsable y llamado a la accion. Evita exageraciones."]],
      ["Prompt de contenido", ["Genera 20 ideas de contenido para vender [producto] sin sonar invasivo. Divide por educacion, autoridad, historia, prueba social y oferta directa."]],
      ["Como vender ebooks", ["Para ebooks, lo mejor es mostrar problema, resultado esperado, tabla de contenido, precio simple y contacto directo. IA FUTURE ya tiene botones que abren Gmail con el pedido."]]
    ],
    links: [["Ver ebooks IA FUTURE", "../ebooks.html"], ["Comprar por Gmail", "https://mail.google.com/mail/?view=cm&fs=1&to=sabiasque496%40gmail.com&su=Pedido%20IA%20FUTURE%20-%20Informacion%20de%20ebooks&body=Hola%2C%20quiero%20mas%20informacion%20sobre%20los%20ebooks%20y%20packs%20de%20IA%20FUTURE."]],
    faq: [
      ["La IA puede crear anuncios?", "Si, pero necesitas darle producto, cliente, canal, tono, restricciones y objetivo."],
      ["Que prompt sirve para vender ebooks?", "Pide una oferta con problema, transformacion, contenido incluido, precio y llamado a la accion por correo."],
      ["Debo prometer resultados garantizados?", "No. Es mejor vender con claridad y evitar promesas exageradas."]
    ]
  },
  {
    slug: "como-vender-ebooks-con-ia",
    title: "Como vender ebooks con IA | IA FUTURE",
    h1: "Como vender ebooks con IA",
    description: "Estrategia sencilla para promocionar ebooks, crear ofertas, usar una web como vitrina y cerrar ventas por correo.",
    category: "Ebooks",
    summary: "Un ebook no se vende solo por estar publicado. Necesita una promesa clara, una pagina simple, contenido gratuito que atraiga visitas y seguimiento.",
    sections: [
      ["La oferta minima", ["Cada ebook debe responder: para quien es, que problema resuelve, que incluye, cuanto cuesta y como se entrega. IA FUTURE ya muestra precio y abre Gmail para coordinar venta manual."]],
      ["Contenido que atrae compradores", ["Publica guias relacionadas con el tema del ebook. Por ejemplo, si vendes prompts, crea articulos sobre prompts para estudio, marketing, SEO y guion."]],
      ["Packs con descuento", ["Los packs aumentan el valor promedio por venta. El pack completo debe sentirse como la opcion logica para quien quiere aprender todo el sistema."]],
      ["Seguimiento manual", ["Cuando llegue un correo, responde rapido, confirma metodo de pago, explica entrega y ofrece el pack si pidieron un solo ebook."]]
    ],
    links: [["Ver tienda de ebooks", "../ebooks.html"], ["Ver prompts para marketing", "prompts-para-marketing-con-ia.html"]],
    faq: [
      ["Puedo vender ebooks sin pasarela de pago?", "Si. Puedes usar una web como vitrina y cerrar por correo, transferencia u otro metodo manual."],
      ["Que precio conviene para ebooks pequenos?", "Un precio bajo como USD 2.99 reduce friccion. Los packs permiten vender mas valor."],
      ["Como consigo visitas para vender?", "Con articulos SEO, comparativas, redes sociales y enlaces internos hacia la tienda."]
    ]
  }
];

const comparisons = [
  {
    slug: "chatgpt-vs-gemini",
    title: "ChatGPT vs Gemini: cual conviene para estudiar | IA FUTURE",
    h1: "ChatGPT vs Gemini: cual conviene para estudiar",
    description: "Comparativa practica entre ChatGPT y Gemini para estudiantes: estudio, redaccion, investigacion, ecosistema Google y productividad.",
    tools: ["ChatGPT", "Gemini"],
    verdict: "Elige ChatGPT si quieres un asistente flexible para explicar, redactar y programar. Elige Gemini si trabajas mucho con Google y quieres integracion con ese ecosistema.",
    rows: [["Estudio", "Muy fuerte para explicar paso a paso", "Fuerte si ya trabajas con Google"], ["Redaccion", "Flexible para tono y estructura", "Bueno para borradores y resumenes"], ["Investigacion", "Requiere verificar fuentes", "Bueno con contexto web segun disponibilidad"], ["Productividad", "Amplio por conversacion y archivos", "Conveniente con herramientas Google"]],
    sections: [["Cuando usar ChatGPT", "Usalo para tutorias, explicaciones profundas, codigo, prompts complejos y revision de trabajos."], ["Cuando usar Gemini", "Usalo si ya trabajas con Gmail, Docs, Drive o buscas apoyo conectado al ecosistema de Google."], ["Recomendacion IA FUTURE", "Prueba ambos con la misma tarea real. El mejor no es el mas famoso, sino el que te da una respuesta verificable y facil de convertir en entrega."]],
    faq: [["ChatGPT es mejor que Gemini?", "Depende del uso. ChatGPT suele ser muy flexible; Gemini puede ser mas comodo si usas Google todos los dias."], ["Cual sirve mas para estudiantes?", "Ambos sirven. Lo importante es dar contexto, verificar datos y no copiar sin entender."], ["Puedo usar los dos?", "Si. Comparar respuestas ayuda a detectar errores y mejorar criterio."]]
  },
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude: diferencias para estudiar y escribir | IA FUTURE",
    h1: "ChatGPT vs Claude: diferencias para estudiar y escribir",
    description: "Comparativa entre ChatGPT y Claude para escritura larga, lectura extensa, analisis, estudio y revision academica.",
    tools: ["ChatGPT", "Claude"],
    verdict: "ChatGPT destaca por versatilidad y flujos amplios. Claude suele sentirse fuerte en lectura extensa, analisis cuidadoso y escritura larga.",
    rows: [["Lectura larga", "Bueno con documentos y resumenes", "Muy fuerte en analisis extenso"], ["Escritura", "Flexible en tonos y formatos", "Fuerte en estilo y coherencia"], ["Codigo", "Muy util para explicar y depurar", "Bueno para razonamiento y revision"], ["Estudio", "Tutor general muy completo", "Buen acompanante para comprender textos complejos"]],
    sections: [["Cuando usar ChatGPT", "Si necesitas un asistente todoterreno para estudiar, programar, crear prompts y producir borradores."], ["Cuando usar Claude", "Si tienes textos largos, ensayos, documentos densos o necesitas una revision muy cuidadosa."], ["Recomendacion IA FUTURE", "Para tareas importantes, usa uno para crear estructura y otro para criticarla. Esa comparacion mejora calidad."]],
    faq: [["Claude escribe mejor que ChatGPT?", "A veces se percibe mas natural en textos largos, pero depende del prompt y del objetivo."], ["Cual es mejor para codigo?", "ChatGPT suele ser muy practico para explicar, probar y depurar codigo."], ["Cual debo elegir?", "Elige segun tarea: versatilidad para ChatGPT, lectura cuidadosa para Claude."]]
  },
  {
    slug: "canva-vs-gamma",
    title: "Canva vs Gamma: mejor IA para presentaciones | IA FUTURE",
    h1: "Canva vs Gamma: mejor IA para presentaciones",
    description: "Compara Canva AI y Gamma para crear diapositivas, diseno visual, exposiciones universitarias y presentaciones rapidas.",
    tools: ["Canva AI", "Gamma"],
    verdict: "Gamma es mejor para generar una presentacion estructurada rapido. Canva AI es mejor para pulir diseno, piezas visuales y formato final.",
    rows: [["Primera version", "Buena si ya tienes diseno", "Muy rapida desde un esquema"], ["Diseno visual", "Muy fuerte", "Correcto y veloz"], ["Edicion manual", "Muy comoda", "Mas orientada al flujo generado"], ["Uso universitario", "Ideal para entregar visual pulido", "Ideal para crear borrador presentable"]],
    sections: [["Cuando usar Gamma", "Cuando tienes poco tiempo y necesitas pasar de idea a diapositivas con estructura."], ["Cuando usar Canva", "Cuando necesitas mejorar portada, imagenes, iconos, colores y estilo visual."], ["Flujo recomendado", "Crea estructura con ChatGPT, genera primera version en Gamma y termina el diseno en Canva."]],
    faq: [["Gamma reemplaza Canva?", "No del todo. Gamma acelera estructura; Canva pule diseno."], ["Cual uso para una exposicion?", "Gamma para borrador rapido y Canva para mejorar la version final."], ["Puedo combinar ambas?", "Si. Esa suele ser la mejor estrategia."]]
  },
  {
    slug: "perplexity-vs-chatgpt",
    title: "Perplexity vs ChatGPT: investigacion o conversacion | IA FUTURE",
    h1: "Perplexity vs ChatGPT: investigacion o conversacion",
    description: "Diferencias entre Perplexity y ChatGPT para investigar, estudiar, verificar fuentes y crear trabajos universitarios.",
    tools: ["Perplexity", "ChatGPT"],
    verdict: "Perplexity conviene cuando necesitas investigar con enlaces y contexto. ChatGPT conviene cuando necesitas conversar, aprender, redactar y transformar ideas.",
    rows: [["Fuentes", "Enfocado en enlaces y busqueda", "Debe verificarse segun respuesta"], ["Tutorias", "Menos conversacional", "Muy fuerte"], ["Sintesis", "Bueno con temas actuales", "Bueno para estructurar y explicar"], ["Trabajos", "Ideal para punto de partida", "Ideal para convertir investigacion en borrador"]],
    sections: [["Cuando usar Perplexity", "Para explorar un tema, conseguir fuentes iniciales y comparar informacion actual."], ["Cuando usar ChatGPT", "Para entender, ordenar, escribir, practicar y convertir datos en una estructura clara."], ["Flujo recomendado", "Investiga con Perplexity, guarda fuentes, luego usa ChatGPT para crear esquema, preguntas y borrador revisado."]],
    faq: [["Perplexity es mejor para investigar?", "Suele ser mas directo para busquedas con enlaces y contexto."], ["ChatGPT puede investigar?", "Puede ayudar, pero debes verificar informacion, fechas y fuentes."], ["Cual uso para una tarea?", "Usa Perplexity para encontrar contexto y ChatGPT para aprender y estructurar."]]
  }
];

function write(file, content) {
  const full = path.join(root, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf8");
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function relPath(file) {
  return file.replaceAll("\\", "/");
}

function urlFor(file) {
  const rel = relPath(file);
  if (rel === "index.html") return `${base}/`;
  return `${base}/${rel}`;
}

function jsonScript(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replaceAll("<", "\\u003c")}</script>`;
}

function head(prefix, meta, canonical, schema = []) {
  const schemaHtml = schema.map(jsonScript).join("\n  ");
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
  <meta property="og:type" content="${meta.type || "article"}">
  <meta property="og:url" content="${canonical}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${meta.ogTitle || meta.title}">
  <meta name="twitter:description" content="${meta.description}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="${prefix}assets/img/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${prefix}assets/css/styles.css">
  <link rel="stylesheet" href="${prefix}assets/css/legal.css">
  <link rel="stylesheet" href="${prefix}assets/css/seo.css">
  ${schemaHtml}
</head>`;
}

function header(prefix, active = "noticias") {
  const nav = [
    ["index.html", "Inicio", "index"],
    ["ia.html", "IA", "ia"],
    ["catalogo.html", "Catalogo", "catalogo"],
    ["prompts.html", "Prompts", "prompts"],
    ["ebooks.html", "Ebooks", "ebooks"],
    ["noticias.html", "Noticias", "noticias"],
    ["recursos.html", "Recursos", "recursos"]
  ].map(([href, label, key]) => `<a href="${prefix}${href}"${key === active ? ' class="active"' : ""}>${label}</a>`).join("");
  return `<body>
<div class="page-transition" aria-hidden="true"></div>
<div class="site-shell">
<canvas class="particle-canvas" id="particleCanvas" aria-hidden="true"></canvas>
<header class="site-header"><a class="brand" href="${prefix}index.html" aria-label="IA FUTURE inicio"><span class="brand-mark" aria-hidden="true"></span><span><strong>IA FUTURE</strong><small>Guia universitaria de inteligencia artificial</small></span></a><button class="nav-toggle" type="button" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button><nav class="main-nav" aria-label="Navegacion principal">${nav}</nav><a class="header-cta" href="${prefix}ebooks.html">Ebooks IA</a></header>`;
}

function footer(prefix) {
  return `<footer class="site-footer"><div><strong>IA FUTURE</strong><p>Directorio educativo y prototipo academico sobre herramientas de inteligencia artificial. Los nombres, marcas, logotipos, favicons, productos y enlaces pertenecen a sus respectivos titulares.</p><div class="footer-links"><a href="${prefix}ebooks.html">Ebooks</a><a href="${prefix}sobre.html">Sobre IA FUTURE</a><a href="${prefix}contacto.html">Contacto</a><a href="${prefix}privacidad.html">Privacidad</a><a href="${prefix}terminos.html">Terminos</a></div></div><a class="button ghost" href="#top">Volver arriba</a></footer>
</div>
<script src="${prefix}assets/js/app.js"></script>
</body>
</html>
`;
}

function breadcrumb(prefix, items) {
  return `<nav class="breadcrumb" aria-label="Ruta">${items.map(([label, href], i) => i === items.length - 1 ? `<span>${label}</span>` : `<a href="${prefix}${href}">${label}</a>`).join("<span>/</span>")}</nav>`;
}

function articleSchema(page, canonical) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.h1,
      description: page.description,
      author: { "@type": "Organization", name: "IA FUTURE" },
      publisher: { "@type": "Organization", name: "IA FUTURE", url: base },
      datePublished: today,
      dateModified: today,
      mainEntityOfPage: canonical
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Noticias", item: `${base}/noticias.html` },
        { "@type": "ListItem", position: 3, name: page.h1, item: canonical }
      ]
    }
  ];
}

function guidePage(page) {
  const canonical = `${base}/guias/${page.slug}.html`;
  const sections = page.sections.map(([h2, paragraphs]) => `<article class="deep-card reveal" id="${slugify(h2)}"><h2>${h2}</h2>${paragraphs.map(p => `<p>${p}</p>`).join("")}</article>`).join("\n");
  const toc = page.sections.map(([h2]) => `<a href="#${slugify(h2)}">${h2}</a>`).join("");
  const links = page.links.map(([label, href]) => `<a class="button ${href.startsWith("http") ? "ghost" : "primary"}" href="${href}"${href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`).join("");
  const faq = page.faq.map(([q, a]) => `<article class="deep-card reveal"><h3>${q}</h3><p>${a}</p></article>`).join("");
  return `${head("../", page, canonical, articleSchema(page, canonical))}
${header("../", "noticias")}
<main id="top">
  <section class="page-hero slim article-hero">
    <div class="page-hero-copy reveal">
      ${breadcrumb("../", [["Inicio", "index.html"], ["Noticias", "noticias.html"], [page.h1, ""]])}
      <span class="eyebrow"><span></span> ${page.category}</span>
      <h1>${page.h1}</h1>
      <p>${page.summary}</p>
      <div class="hero-actions">${links}</div>
    </div>
  </section>
  <section class="section compact">
    <div class="article-layout">
      <aside class="guide-index reveal"><strong>En esta guia</strong>${toc}<a href="#faq">Preguntas frecuentes</a></aside>
      <div class="article-main">${sections}</div>
    </div>
  </section>
  <section class="section compact faq-section" id="faq">
    <div class="section-head reveal"><span>FAQ</span><h2>Preguntas frecuentes</h2><p>Respuestas directas para usuarios que llegan desde Google.</p></div>
    <div class="content-grid">${faq}</div>
  </section>
</main>
${footer("../")}`;
}

function comparisonPage(page) {
  const canonical = `${base}/comparativas/${page.slug}.html`;
  const rowHtml = page.rows.map(([area, a, b]) => `<tr><th>${area}</th><td>${a}</td><td>${b}</td></tr>`).join("");
  const sections = page.sections.map(([h2, p]) => `<article class="deep-card reveal"><h2>${h2}</h2><p>${p}</p></article>`).join("");
  const faq = page.faq.map(([q, a]) => `<article class="deep-card reveal"><h3>${q}</h3><p>${a}</p></article>`).join("");
  const schema = articleSchema(page, canonical);
  return `${head("../", page, canonical, schema)}
${header("../", "noticias")}
<main id="top">
  <section class="page-hero slim article-hero">
    <div class="page-hero-copy reveal">
      ${breadcrumb("../", [["Inicio", "index.html"], ["Noticias", "noticias.html"], [page.h1, ""]])}
      <span class="eyebrow"><span></span> Comparativa</span>
      <h1>${page.h1}</h1>
      <p>${page.verdict}</p>
      <div class="hero-actions"><a class="button primary" href="../catalogo.html">Ver catalogo</a><a class="button ghost" href="../ebooks.html">Ver ebooks</a></div>
    </div>
  </section>
  <section class="section compact">
    <div class="comparison-table-wrap reveal">
      <table class="comparison-table">
        <thead><tr><th>Criterio</th><th>${page.tools[0]}</th><th>${page.tools[1]}</th></tr></thead>
        <tbody>${rowHtml}</tbody>
      </table>
    </div>
  </section>
  <section class="section compact">
    <div class="content-grid">${sections}</div>
  </section>
  <section class="section compact faq-section" id="faq">
    <div class="section-head reveal"><span>FAQ</span><h2>Preguntas frecuentes</h2><p>Respuesta rapida para decidir sin perder tiempo.</p></div>
    <div class="content-grid">${faq}</div>
  </section>
</main>
${footer("../")}`;
}

function slugify(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function newsHub() {
  const cards = [...guides.map(g => ({...g, href: `guias/${g.slug}.html`})), ...comparisons.map(c => ({...c, href: `comparativas/${c.slug}.html`, category: "Comparativa", summary: c.verdict}))];
  const cardHtml = cards.map((card, i) => `<a class="news-card ${i === 0 ? "large" : ""} reveal" href="${card.href}"><span>${card.category}</span><h3>${card.h1}</h3><p>${card.summary || card.description}</p></a>`).join("");
  const canonical = `${base}/noticias.html`;
  const schema = [{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guias y noticias de inteligencia artificial",
    description: "Guias SEO, comparativas y recursos de IA para estudiantes.",
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: cards.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.h1, url: `${base}/${c.href}` }))
    }
  }];
  return `${head("", {
    title: "Guias de IA, comparativas y noticias | IA FUTURE",
    h1: "Guias de IA, comparativas y noticias",
    description: "Articulos, rankings, comparativas y recursos para aprender inteligencia artificial, elegir herramientas y vender mejor con IA.",
    type: "website"
  }, canonical, schema)}
${header("", "noticias")}
<main id="top">
  <section class="page-hero slim">
    <div class="page-hero-copy reveal">
      <span class="eyebrow"><span></span> SEO y aprendizaje</span>
      <h1>Guias de IA, comparativas y noticias</h1>
      <p>Contenido pensado para resolver busquedas reales: mejores IAs, comparativas, prompts, estudio, presentaciones, imagenes y venta de ebooks.</p>
    </div>
  </section>
  <section class="section compact">
    <div class="section-head reveal"><span>Contenido popular</span><h2>Paginas creadas para atraer visitas desde Google.</h2><p>Cada guia responde una busqueda concreta y enlaza al catalogo, prompts o ebooks.</p></div>
    <div class="news-grid seo-news-grid">${cardHtml}</div>
  </section>
</main>
${footer("")}`;
}

function seoCss() {
  return `.breadcrumb{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:16px;color:var(--muted);font-size:13px}.breadcrumb a{color:var(--cyan);font-weight:800}.article-hero .page-hero-copy{max-width:900px}.article-layout{display:grid;grid-template-columns:240px minmax(0,1fr);gap:18px;align-items:start}.article-main{display:grid;gap:16px}.comparison-table-wrap{overflow:auto;border:1px solid var(--line);border-radius:8px;background:rgba(5,8,17,.74);box-shadow:0 18px 52px rgba(0,0,0,.24)}.comparison-table{width:100%;border-collapse:collapse;min-width:720px}.comparison-table th,.comparison-table td{border-bottom:1px solid rgba(214,230,255,.1);padding:16px;text-align:left;vertical-align:top;color:var(--muted)}.comparison-table th{color:#fff;background:rgba(255,255,255,.04)}.comparison-table thead th{color:#fff;font-size:14px}.seo-news-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.seo-news-grid .news-card{display:block}.faq-section .deep-card h3{font-size:20px}.article-main .deep-card p{font-size:16px}.traffic-links{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}.traffic-link{border:1px solid var(--line);border-radius:8px;background:rgba(255,255,255,.035);padding:14px;color:var(--muted)}.traffic-link strong{display:block;color:#fff;margin-bottom:4px}@media (max-width:1040px){.article-layout,.traffic-links{grid-template-columns:1fr}.seo-news-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (max-width:720px){.seo-news-grid{grid-template-columns:1fr}.comparison-table{min-width:620px}}`;
}

function addSeoToExisting() {
  const htmlFiles = listHtml();
  for (const file of htmlFiles) {
    let html = read(file);
    const prefix = file.includes("/") ? "../" : "";
    if (!html.includes("assets/css/seo.css")) {
      html = html.replace(`<link rel="stylesheet" href="${prefix}assets/css/legal.css">`, `<link rel="stylesheet" href="${prefix}assets/css/legal.css">\n  <link rel="stylesheet" href="${prefix}assets/css/seo.css">`);
    }
    if (file === "404.html" && !html.includes('name="robots"')) {
      html = html.replace('<meta name="theme-color" content="#05060a">', '<meta name="theme-color" content="#05060a">\n  <meta name="robots" content="noindex, follow">');
    }
    const canonical = urlFor(file);
    if (file !== "404.html" && !html.includes('rel="canonical"')) {
      html = html.replace('<meta property="og:type" content="website">', `<meta property="og:type" content="website">\n  <meta property="og:url" content="${canonical}">\n  <link rel="canonical" href="${canonical}">`);
    } else if (file !== "404.html" && !html.includes('property="og:url"')) {
      html = html.replace(/<link rel="canonical" href="[^"]+">/, `<meta property="og:url" content="${canonical}">\n  <link rel="canonical" href="${canonical}">`);
    }
    if (!html.includes('name="twitter:card"') && file !== "404.html") {
      const title = match(html, /<title>(.*?)<\/title>/s);
      const desc = match(html, /<meta name="description" content="([^"]*)"/s);
      html = html.replace(`  <link rel="canonical" href="${canonical}">`, `  <link rel="canonical" href="${canonical}">\n  <meta name="twitter:card" content="summary">\n  <meta name="twitter:title" content="${title}">\n  <meta name="twitter:description" content="${desc}">`);
    }
    write(file, html);
  }
}

function addFaqToIaPages() {
  const files = fs.readdirSync(path.join(root, "ias")).filter(f => f.endsWith(".html")).map(f => `ias/${f}`);
  for (const file of files) {
    let html = read(file);
    if (html.includes('class="section compact faq-section"')) continue;
    const name = match(html, /<h1>(.*?)<\/h1>/s).replace(/<[^>]+>/g, "");
    const faqSection = `<section class="section compact faq-section" id="faq"><div class="section-head reveal"><span>FAQ</span><h2>Preguntas frecuentes sobre ${name}</h2><p>Respuestas rapidas para decidir si esta herramienta encaja con tu forma de estudiar o crear.</p></div><div class="content-grid"><article class="deep-card reveal"><h3>${name} es gratis?</h3><p>Depende del plan vigente de la herramienta. Empieza siempre por la version gratis o basica si esta disponible y revisa limites antes de pagar.</p></article><article class="deep-card reveal"><h3>${name} sirve para estudiantes?</h3><p>Si, cuando se usa con una tarea clara, contexto academico y revision humana. La IA ayuda a ordenar ideas, practicar, crear borradores y mejorar resultados.</p></article><article class="deep-card reveal"><h3>Que debo revisar antes de usar ${name}?</h3><p>Verifica privacidad, fuentes, terminos, limites gratuitos, calidad de salida y reglas de tu institucion. No subas datos sensibles sin permiso.</p></article><article class="deep-card reveal"><h3>Como aprender ${name} mas rapido?</h3><p>Prueba un caso real, guarda buenos prompts, compara resultados y revisa la guia de IA FUTURE. Tambien puedes apoyarte en los ebooks de prompts.</p></article></div></section>`;
    html = html.replace("</main>", `${faqSection}</main>`);
    if (!html.includes("application/ld+json")) {
      const canonical = urlFor(file);
      const schema = [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            [`${name} es gratis?`, "Depende del plan vigente de la herramienta. Empieza por la version gratis o basica si esta disponible."],
            [`${name} sirve para estudiantes?`, "Si, cuando se usa con una tarea clara, contexto academico y revision humana."],
            [`Que debo revisar antes de usar ${name}?`, "Privacidad, fuentes, terminos, limites gratuitos, calidad de salida y reglas de tu institucion."],
            [`Como aprender ${name} mas rapido?`, "Prueba un caso real, guarda buenos prompts, compara resultados y revisa la guia de IA FUTURE."]
          ].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${base}/` },
            { "@type": "ListItem", position: 2, name: "Catalogo", item: `${base}/catalogo.html` },
            { "@type": "ListItem", position: 3, name, item: canonical }
          ]
        }
      ];
      html = html.replace("</head>", `  ${schema.map(jsonScript).join("\n  ")}\n</head>`);
    }
    write(file, html);
  }
}

function addHomeTrafficBlock() {
  let html = read("index.html");
  if (html.includes("Guias populares para atraer visitas")) return;
  const block = `<section class="section compact"><div class="section-head reveal"><span>Guias SEO</span><h2>Guias populares para atraer visitas.</h2><p>Contenido creado para responder busquedas reales y llevar usuarios al catalogo, prompts y ebooks.</p></div><div class="traffic-links"><a class="traffic-link reveal" href="guias/mejores-ias-gratis-estudiantes-2026.html"><strong>IA gratis para estudiantes</strong><span>Ranking 2026</span></a><a class="traffic-link reveal" href="comparativas/chatgpt-vs-gemini.html"><strong>ChatGPT vs Gemini</strong><span>Comparativa clara</span></a><a class="traffic-link reveal" href="guias/como-hacer-prompts-para-tareas-universitarias.html"><strong>Prompts universitarios</strong><span>Metodo practico</span></a><a class="traffic-link reveal" href="guias/como-vender-ebooks-con-ia.html"><strong>Vender ebooks con IA</strong><span>Estrategia simple</span></a></div></section>`;
  html = html.replace('<section class="section brand-section">', `${block}\n  <section class="section brand-section">`);
  write("index.html", html);
}

function addStructuredDataToCore() {
  const updates = {
    "index.html": [
      { "@context": "https://schema.org", "@type": "WebSite", name: "IA FUTURE", url: `${base}/`, potentialAction: { "@type": "SearchAction", target: `${base}/catalogo.html?q={search_term_string}`, "query-input": "required name=search_term_string" } },
      { "@context": "https://schema.org", "@type": "Organization", name: "IA FUTURE", url: `${base}/`, email: "sabiasque496@gmail.com" }
    ],
    "catalogo.html": [{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Catalogo de IAs", url: `${base}/catalogo.html`, description: "Catalogo de herramientas de inteligencia artificial para estudiantes." }],
    "ebooks.html": [{
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Ebooks IA FUTURE",
      itemListElement: [
        "Guia Maestra: Ingenieria de Prompts Profesionales",
        "Guia Maestra Vol. 2: Prompt de Copywriting",
        "Guia Maestra Vol. 3: Prompt de Marketing Estrategico",
        "Guia Maestra Vol. 4: Prompt del SEO",
        "Guia Maestra Vol. 5: Prompt de Guion Profesional",
        "Guia Maestra Vol. 6: Meta Prompt",
        "Programa de Alfabetizacion IA FUTURE 2026"
      ].map((name, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Product", name, offers: { "@type": "Offer", price: "2.99", priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${base}/ebooks.html` } } }))
    }]
  };
  for (const [file, data] of Object.entries(updates)) {
    let html = read(file);
    if (html.includes('"@type":"WebSite"') || html.includes('"@type":"CollectionPage"') || html.includes('"@type":"ItemList"')) continue;
    html = html.replace("</head>", `  ${data.map(jsonScript).join("\n  ")}\n</head>`);
    write(file, html);
  }
}

function listHtml() {
  const out = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
      const rel = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === ".git" || entry.name === "tools") continue;
        walk(rel);
      } else if (entry.name.endsWith(".html")) {
        out.push(relPath(rel));
      }
    }
  }
  walk("");
  return out.sort();
}

function sitemap() {
  const pages = listHtml().filter(file => file !== "404.html");
  const priority = file => file === "index.html" ? "1.0" : file === "ebooks.html" ? "0.9" : file.startsWith("guias/") || file.startsWith("comparativas/") ? "0.8" : "0.7";
  const body = pages.map(file => `  <url><loc>${urlFor(file)}</loc><lastmod>${today}</lastmod><priority>${priority(file)}</priority></url>`).join("\n");
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
}

function match(text, regex) {
  const m = text.match(regex);
  return m ? m[1] : "";
}

write("assets/css/seo.css", seoCss());
for (const guide of guides) write(`guias/${guide.slug}.html`, guidePage(guide));
for (const comparison of comparisons) write(`comparativas/${comparison.slug}.html`, comparisonPage(comparison));
write("noticias.html", newsHub());
addSeoToExisting();
addFaqToIaPages();
addHomeTrafficBlock();
addStructuredDataToCore();
sitemap();

console.log(`SEO upgrade generated ${guides.length} guides, ${comparisons.length} comparisons, and sitemap.`);
