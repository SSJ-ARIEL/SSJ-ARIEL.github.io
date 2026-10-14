import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

const require = createRequire(import.meta.url);
const { candidates, evaluateAnnotations, evaluateRubric, buildReviewReport } = require('../assets/js/verification-lab.js');

const correctParaphrase = evaluateAnnotations('a', ['supported', 'supported', 'supported']);
assert.equal(correctParaphrase.correct, 3, 'A conserva los datos y los límites.');
assert.deepEqual(correctParaphrase.results.map(({ evidence }) => evidence), ['F1', 'F2–F3', 'F4–F5']);

const factualErrors = evaluateAnnotations('b', ['contradicted', 'supported', 'contradicted']);
assert.equal(factualErrors.correct, 3, 'B mezcla una frase correcta con errores comprobables.');
assert.match(factualErrors.results[0].explanation, /24 personas, no 30/);
assert.match(factualErrors.results[2].explanation, /25 puntos porcentuales/);
assert.match(factualErrors.results[2].explanation, /solo estaba propuesto/);
assert.equal(evaluateAnnotations('b', ['supported', 'supported', 'supported']).correct, 1, 'Los datos plausibles pero falsos no pasan la clave.');

const unsupportedCausality = evaluateAnnotations('c', ['supported', 'unsupported', 'unsupported']);
assert.equal(unsupportedCausality.correct, 3, 'C mezcla un dato correcto con causa y generalización no demostradas.');
assert.equal(evaluateAnnotations('c', ['supported', 'contradicted', 'contradicted']).correct, 1, 'Falta de evidencia no demuestra falsedad.');
assert.match(unsupportedCausality.results[1].explanation, /ni demuestra su ausencia/);
assert.match(unsupportedCausality.results[2].explanation, /otros barrios/);

assert.throws(() => evaluateAnnotations('unknown', []), RangeError);
assert.throws(() => evaluateAnnotations('a', []), TypeError);
assert.throws(() => evaluateAnnotations('a', ['supported', 'maybe', 'supported']), RangeError);
assert.throws(() => evaluateAnnotations('__proto__', []), RangeError);
assert.throws(() => evaluateAnnotations('a', ['supported', 'constructor', 'supported']), RangeError);
const input = ['supported', 'supported', 'supported'];
evaluateAnnotations('a', input);
assert.deepEqual(input, ['supported', 'supported', 'supported'], 'La evaluación no modifica las respuestas.');
assert.ok(Object.isFrozen(candidates.a[0]));

const complete = evaluateRubric({ facts: 2, units: 2, limits: 2, traceability: 2 });
assert.equal(complete.score, 8);
assert.deepEqual(complete.pending, []);
const partial = evaluateRubric({ facts: 2, units: 1, limits: 0, traceability: 2 });
assert.equal(partial.score, 5);
assert.deepEqual(partial.pending.map(({ key }) => key), ['units', 'limits']);
assert.throws(() => evaluateRubric({ facts: 2, units: 1, limits: -1, traceability: 2 }), RangeError);
assert.throws(() => evaluateRubric({ facts: 2, units: 1, limits: 0 }), RangeError);
assert.throws(() => evaluateRubric({ facts: '2', units: 2, limits: 2, traceability: 2 }), RangeError);
assert.throws(() => evaluateRubric(null), TypeError);

const report = buildReviewReport('c', unsupportedCausality, 'Mi versión con fuentes F1–F5.', partial);
assert.match(report, /Clasificación: 3\/3/);
assert.match(report, /Mi versión con fuentes F1–F5/);
assert.match(report, /Autoevaluación: 5\/8/);
assert.match(report, /no verifica el texto/);
assert.match(buildReviewReport('a', null, '', complete), /pendiente de comprobar/);

const html = readFileSync(new URL('../laboratorio.html', import.meta.url), 'utf8');
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.match(html, /Fuente y candidatos ficticios/);
assert.match(html, /ca-pub-7507181626477156/);
assert.doesNotMatch(html, /adsbygoogle\.js|googletagmanager|cdn-cookieyes/);
for (const candidateId of Object.keys(candidates)) {
  assert.match(html, new RegExp(`id="candidate-${candidateId}"`));
  for (const claim of candidates[candidateId]) {
    assert.ok(html.includes(claim.text), `La afirmación de ${candidateId} está disponible sin JavaScript.`);
  }
}
assert.equal((html.match(/<details class="lab-solution"/g) || []).length, 4, 'Soluciones y ejemplo están en el HTML.');
assert.match(html, /El texto no se analiza automáticamente/);
const js = readFileSync(new URL('../assets/js/verification-lab.js', import.meta.url), 'utf8');
assert.doesNotMatch(js, /\bfetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|sendBeacon/, 'El ejercicio no envía ni persiste el texto.');

console.log('Laboratorio: paráfrasis, cifras falsas, causalidad, rúbrica y versión sin JS verificadas.');
