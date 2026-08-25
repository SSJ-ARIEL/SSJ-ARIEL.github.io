# IA FUTURE - GitHub Pages

Sitio editorial estático sobre uso práctico de inteligencia artificial. El contenido indexable se limita a guías, comparativas y fichas que incluyen método, revisión humana, límites y fuentes primarias.

## Arquitectura editorial

- `index.html`: portada y rutas de aprendizaje.
- `noticias.html`: centro de guías revisadas.
- `catalogo.html`: catálogo filtrable; solo las fichas editoriales completas se indexan.
- `comparativas/`: pruebas reproducibles entre herramientas.
- `guias/`: métodos de estudio, autoría y creación.
- `ias/`: fichas prácticas de herramientas seleccionadas.
- `metodologia.html`: proceso de investigación, revisión y correcciones.
- `sitemap.xml`: contiene únicamente las páginas indexables.

Las páginas antiguas que duplican una intención o aún no tienen revisión suficiente permanecen accesibles con `noindex,follow` y sin el cargador de anuncios.

## Regenerar y validar

Requiere Node.js 20 o posterior.

```powershell
node tools/editorial-rebuild.mjs
node tools/validate-site.mjs
```

La validación comprueba títulos y descripciones únicos, un H1 por página, canonicals, referencias locales, correspondencia exacta con el sitemap, `ads.txt` y ausencia de AdSense en páginas `noindex`.

## Servicios

- AdSense: `ca-pub-7507181626477156`
- GA4: `G-RM2QTBG2B4` y `G-5FNFDXWJFY`
- Consentimiento: CookieYes se carga antes de los scripts publicitarios.
- `ads.txt`: debe publicarse en `https://ssj-ariel.github.io/ads.txt`.

## Publicar

GitHub Pages despliega la rama `main` desde la raíz. Después de publicar, comprueba `robots.txt`, `sitemap.xml`, `ads.txt` y varias páginas indexables en el dominio público antes de solicitar una revisión de AdSense.

## Independencia

Los nombres y marcas citados pertenecen a sus titulares. Los enlaces oficiales se utilizan como fuentes; IA FUTURE no implica afiliación con esas plataformas salvo indicación expresa.
