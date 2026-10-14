# Mantener las guías de IA FUTURE

El sitio principal se publica desde la raíz de `SSJ-ARIEL.github.io`. Trabaja en este checkout; no copies contenido a las versiones antiguas para publicarlo en varios proyectos.

1. Modifica las páginas generadas desde `tools/editorial-rebuild.mjs`, `tools/editorial-examples.mjs` o `tools/comparison-examples.mjs`. Mantén directamente `laboratorio.html` y sus recursos.
2. Para una guía nueva, define una tarea concreta, incluye una entrada que el lector pueda consultar, desarrolla una solución de referencia y explica cómo detectar errores. Identifica los datos ficticios y distingue documentación de resultados medidos.
3. Regenera y valida:

```bash
node tools/editorial-rebuild.mjs
node tools/validate-site.mjs
node tools/test-verification-lab.mjs
```

4. Abre el sitio mediante un servidor estático. Revisa escritorio y móvil, contenido y menú sin JavaScript, cifras y fuentes de los ejemplos, y enlaces hacia páginas útiles.
5. Revisa el diff y publica el conjunto de fuentes y HTML. Comprueba después `ads.txt`, sitemap, contacto y varias guías en el dominio público antes de volver a solicitar la revisión de AdSense.

Los generadores `seo-upgrade.mjs` y `keyword-landing.mjs` son históricos y su ejecución está bloqueada. No amplíes el índice con variantes de una palabra clave ni atribuyas pruebas a una herramienta sin registrar entrada, salida, fecha y condiciones.

Publicidad y Analytics permanecen desactivados en `tools/site-config.json`. Mantén la verificación de cuenta, pero activa los servicios solamente tras integrar y comprobar el consentimiento correspondiente. Consulta los requisitos y la validación de servicios en el README.
