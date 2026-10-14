# IA FUTURE - GitHub Pages

Sitio estático sobre uso práctico de inteligencia artificial. Las guías incluyen entradas ficticias, soluciones de referencia, límites y enlaces a documentación oficial. Las comparativas presentan criterios de elección y ejercicios; no se atribuyen resultados a pruebas de producto que no estén documentadas.

## Arquitectura editorial

- `index.html`: portada y rutas de aprendizaje.
- `noticias.html`: rutas de aprendizaje y ejercicios.
- `catalogo.html`: catálogo filtrable; solo las fichas editoriales completas se indexan.
- `comparativas/`: diferencias documentales y protocolos para comparar herramientas.
- `guias/`: métodos de estudio, autoría y creación.
- `ias/`: fichas prácticas de herramientas seleccionadas.
- `metodologia.html`: proceso de investigación, revisión y correcciones.
- `laboratorio.html`: ejercicio local para comprobar cifras, atribución y causalidad en resúmenes.
- `sitemap.xml`: contiene únicamente las páginas indexables.

Las páginas antiguas que duplican una intención o no aportan un ejercicio específico permanecen accesibles con `noindex,follow` y sin el cargador de anuncios.

## Regenerar y validar

Requiere Node.js 20 o posterior.

```powershell
node tools/editorial-rebuild.mjs
node tools/validate-site.mjs
node tools/test-verification-lab.mjs
```

La validación comprueba títulos y descripciones únicos, un H1 por página, canonicals, referencias locales, correspondencia exacta con el sitemap, `ads.txt`, ejemplos etiquetados y ausencia de AdSense en páginas `noindex`, soporte y laboratorio. También comprueba que el CSS no esconda el contenido hasta ejecutar JavaScript. Las pruebas del laboratorio cubren datos falsos, unidades, causalidad, rúbrica y conservación de soluciones en el HTML.

Los casos de guías y fichas se mantienen en `tools/editorial-examples.mjs`; los de comparativas, en `tools/comparison-examples.mjs`. `laboratorio.html` y sus recursos se mantienen directamente, sin regenerarlos. La fecha de actualización describe cambios de contenido; no certifica pruebas de producto ni una revisión humana del artículo.

`tools/editorial-rebuild.mjs` es el único generador editorial vigente. `tools/seo-upgrade.mjs` y `tools/keyword-landing.mjs` se conservan como archivos históricos con ejecución bloqueada: sus plantillas antiguas recreaban páginas duplicadas y scripts de servicios actualmente pausados. No deben utilizarse para publicar ni regenerar el sitio. CI comprueba que la generación vigente reproduce el HTML versionado.

## Servicios

- AdSense: `ca-pub-7507181626477156`; cuenta conservada para verificación mediante meta y `ads.txt`, carga de anuncios desactivada.
- GA4: `G-RM2QTBG2B4` y `G-5FNFDXWJFY`; identificadores conservados en `tools/site-config.json`, sin carga de Analytics ni eventos.
- Consentimiento: las páginas editoriales incluyen CookieYes; hay que comprobar su configuración y el bloqueo de cookies en el dominio publicado.
- `ads.txt`: debe publicarse en `https://ssj-ariel.github.io/ads.txt`.
- Contacto: `sabiasque496@gmail.com`; las consultas de privacidad no se dirigen a Issues públicos.
- Laboratorio: sin anuncios, analítica, conexiones externas ni persistencia de lo escrito; permite descargar la práctica localmente.

Los servicios permanecen pausados en `tools/site-config.json`. El generador rechaza habilitarlos por una bandera sin integración de consentimiento. Para activar monetización hay que confirmar la revisión del sitio, verificar la configuración aplicable de la plataforma de consentimiento e integrar la carga únicamente después del permiso correspondiente, en páginas editoriales útiles. Comprueba aceptar, rechazar, retirar consentimiento y ausencia de solicitudes de publicidad/analítica antes del permiso. Las páginas de soporte, errores y laboratorio deben continuar sin anuncios. La presencia de CookieYes no garantiza por sí sola esa configuración.

## Publicar

GitHub Pages despliega la rama `main` desde la raíz. Después de publicar, comprueba `robots.txt`, `sitemap.xml`, `ads.txt` y varias páginas indexables en el dominio público antes de solicitar una revisión de AdSense.

La aprobación depende de Google y del contenido realmente publicado. La validación técnica no garantiza aprobación ni sustituye comprobar el sitio en producción. El HTML y el menú móvil permanecen utilizables sin JavaScript.

## Independencia

Los nombres y marcas citados pertenecen a sus titulares. Los enlaces oficiales se utilizan como fuentes; IA FUTURE no implica afiliación con esas plataformas salvo indicación expresa.
