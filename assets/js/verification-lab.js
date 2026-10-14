(function (global) {
  'use strict';

  var labels = Object.freeze({ supported: 'Respaldada', contradicted: 'Contradicha', unsupported: 'No demostrada' });
  var candidates = Object.freeze({
    a: Object.freeze([
      Object.freeze({ text: 'En septiembre de 2026 participaron 24 adultos distintos en el Club de Lectura Faro, coordinado por Nora Vega.', expected: 'supported', evidence: 'F1', explanation: 'F1 identifica 24 adultos distintos, el periodo y a Nora Vega. La paráfrasis conserva esos hechos.' }),
      Object.freeze({ text: 'Según las respuestas de esas mismas personas, la proporción que declaró terminar al menos un libro pasó de 50 % en agosto a 75 % en septiembre: 25 puntos porcentuales más.', expected: 'supported', evidence: 'F2–F3', explanation: 'F2–F3 mantienen las mismas personas y datos declarados. La resta 75 − 50 expresa 25 puntos porcentuales, no el cambio relativo.' }),
      Object.freeze({ text: 'El registro no permite atribuir el cambio al club; la propuesta de repetirlo durante tres meses aún no se había ejecutado al 2 de octubre.', expected: 'supported', evidence: 'F4–F5', explanation: 'F4 limita la atribución causal. F5 sitúa el seguimiento como una propuesta pendiente al 2 de octubre.' })
    ]),
    b: Object.freeze([
      Object.freeze({ text: 'Nora Vega registró a 30 adultos distintos en el Club de Lectura Faro durante septiembre de 2026.', expected: 'contradicted', evidence: 'F1', explanation: 'F1 cuenta 24 personas, no 30. Los demás detalles correctos no compensan la cifra incompatible.' }),
      Object.freeze({ text: 'Las respuestas de las mismas 24 personas situaron la proporción en 50 % en agosto y 75 % en septiembre.', expected: 'supported', evidence: 'F2–F3', explanation: 'F2–F3 respaldan esa frase. Clasifica cada afirmación por separado: este candidato también tiene una frase correcta.' }),
      Object.freeze({ text: 'El aumento fue de 50 puntos porcentuales y el seguimiento de tres meses terminó el 2 de octubre de 2026.', expected: 'contradicted', evidence: 'F3 y F5', explanation: 'Hay dos errores: F3 da 25 puntos porcentuales (50 % es el cambio relativo), y F5 dice que el seguimiento solo estaba propuesto.' })
    ]),
    c: Object.freeze([
      Object.freeze({ text: 'Entre agosto y septiembre, el número de participantes que dijo terminar al menos un libro pasó de 12 a 18 de un total de 24.', expected: 'supported', evidence: 'F2', explanation: 'F2 recoge 12 y 18 declaraciones entre las mismas 24 personas. “Dijo terminar” conserva el carácter declarado.' }),
      Object.freeze({ text: 'Las sesiones del Club de Lectura Faro causaron el aumento de 25 puntos porcentuales.', expected: 'unsupported', evidence: 'F4', explanation: 'F4 no identifica una causa: faltan grupo de comparación y asignación aleatoria, y hubo una feria. Esto no demuestra un efecto ni demuestra su ausencia.' }),
      Object.freeze({ text: 'Repetir este programa en cualquier barrio aumentará la lectura en la misma proporción.', expected: 'unsupported', evidence: 'F1–F5', explanation: 'La fuente no estudió otros barrios ni garantiza resultados futuros. La generalización necesita evidencia que este documento no contiene.' })
    ])
  });
  var criteria = Object.freeze({
    facts: 'Fidelidad de los hechos: vuelve a F1, F2 y F5; comprueba personas, fechas y el estado del seguimiento.',
    units: 'Unidades y cambio: vuelve a F3; diferencia 25 puntos porcentuales de 50 % relativo.',
    limits: 'Alcance de la evidencia: vuelve a F2 y F4; conserva la atribución a declaraciones y el límite causal.',
    traceability: 'Trazabilidad: indica F1–F5 junto a los hechos relevantes y elimina añadidos sin respaldo.'
  });

  function requireCandidate(candidateId) {
    if (!Object.prototype.hasOwnProperty.call(candidates, candidateId)) throw new RangeError('Candidato desconocido.');
    return candidates[candidateId];
  }

  // Clave cerrada para este ejercicio. No interpreta textos ni ejecuta un modelo de IA.
  function evaluateAnnotations(candidateId, answers) {
    var claims = requireCandidate(candidateId);
    if (!Array.isArray(answers) || answers.length !== claims.length) throw new TypeError('Se requieren tres clasificaciones.');
    answers.forEach(function (answer) {
      if (!Object.prototype.hasOwnProperty.call(labels, answer)) throw new RangeError('Clasificación desconocida.');
    });
    var results = claims.map(function (claim, index) {
      return { number: index + 1, selected: answers[index], expected: claim.expected, correct: answers[index] === claim.expected, evidence: claim.evidence, explanation: claim.explanation };
    });
    return { candidateId: candidateId, correct: results.filter(function (result) { return result.correct; }).length, total: claims.length, results: results };
  }

  // Solo suma las valoraciones que introduce la persona; no valida su resumen.
  function evaluateRubric(ratings) {
    if (!ratings || typeof ratings !== 'object') throw new TypeError('Falta la autoevaluación.');
    var results = Object.keys(criteria).map(function (key) {
      var score = ratings[key];
      if (!Number.isInteger(score) || score < 0 || score > 2) throw new RangeError('Cada criterio debe tener 0, 1 o 2 puntos.');
      return { key: key, score: score, feedback: criteria[key] };
    });
    return { score: results.reduce(function (sum, result) { return sum + result.score; }, 0), maxScore: 8, results: results, pending: results.filter(function (result) { return result.score < 2; }) };
  }

  function buildReviewReport(candidateId, annotation, revision, rubric) {
    requireCandidate(candidateId);
    var lines = ['IA FUTURE — Laboratorio de verificación', 'Fuente ficticia: Club de Lectura Faro, septiembre de 2026.', 'Material actualizado: 2026-10-14.', 'Candidato: ' + candidateId.toUpperCase(), ''];
    if (annotation) {
      lines.push('Clasificación: ' + annotation.correct + '/' + annotation.total + ' coincidencias con la clave.');
      annotation.results.forEach(function (result) {
        lines.push('Frase ' + result.number + ': elegí ' + labels[result.selected] + '; clave ' + labels[result.expected] + '. ' + result.evidence + ': ' + result.explanation);
      });
    } else lines.push('Clasificación: pendiente de comprobar.');
    lines.push('', 'Mi resumen:', String(revision || '').trim() || '(Sin resumen escrito)', '', 'Autoevaluación: ' + rubric.score + '/' + rubric.maxScore + '. Esta puntuación no verifica el texto.');
    rubric.results.forEach(function (result) { lines.push(result.score + '/2 — ' + result.feedback); });
    lines.push('', 'El ejercicio no ejecuta IA ni comprueba afirmaciones fuera de esta fuente.');
    return lines.join('\n');
  }

  var api = Object.freeze({ candidates: candidates, labels: labels, evaluateAnnotations: evaluateAnnotations, evaluateRubric: evaluateRubric, buildReviewReport: buildReviewReport });
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (global) global.VerificationLab = api;
  if (typeof document === 'undefined') return;

  function mount() {
    var annotationForm = document.getElementById('annotation-form');
    if (!annotationForm) return;
    var candidateSelect = document.getElementById('candidate-select');
    var fields = document.getElementById('claim-fields');
    var annotationFeedback = document.getElementById('annotation-feedback');
    var revisionForm = document.getElementById('revision-form');
    var revisionText = document.getElementById('revision-text');
    var revisionFeedback = document.getElementById('revision-feedback');
    var lastAnnotation = null;

    function appendText(parent, tag, text, className) {
      var element = document.createElement(tag);
      element.textContent = text;
      if (className) element.className = className;
      parent.appendChild(element);
      return element;
    }

    function renderClaims() {
      fields.replaceChildren();
      annotationFeedback.replaceChildren();
      lastAnnotation = null;
      candidates[candidateSelect.value].forEach(function (claim, index) {
        var fieldset = document.createElement('fieldset');
        appendText(fieldset, 'legend', 'Afirmación ' + (index + 1));
        appendText(fieldset, 'p', claim.text, 'lab-claim-text');
        var label = appendText(fieldset, 'label', 'Tu clasificación', 'lab-label');
        var select = document.createElement('select');
        select.id = 'claim-' + index;
        select.name = 'claim-' + index;
        select.required = true;
        label.htmlFor = select.id;
        var placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = 'Elige una clasificación';
        select.appendChild(placeholder);
        Object.keys(labels).forEach(function (key) {
          var option = document.createElement('option');
          option.value = key;
          option.textContent = labels[key];
          select.appendChild(option);
        });
        fieldset.appendChild(select);
        fields.appendChild(fieldset);
      });
    }

    function readRubric() {
      var ratings = {};
      Object.keys(criteria).forEach(function (key) { ratings[key] = Number(document.getElementById('rubric-' + key).value); });
      return evaluateRubric(ratings);
    }

    annotationForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var answers = candidates[candidateSelect.value].map(function (_claim, index) { return document.getElementById('claim-' + index).value; });
      lastAnnotation = evaluateAnnotations(candidateSelect.value, answers);
      annotationFeedback.replaceChildren();
      appendText(annotationFeedback, 'h3', lastAnnotation.correct + ' de ' + lastAnnotation.total + ' clasificaciones coinciden con la clave');
      var list = document.createElement('ol');
      lastAnnotation.results.forEach(function (result) {
        var item = document.createElement('li');
        appendText(item, 'strong', 'Frase ' + result.number + ': ' + (result.correct ? 'coincide' : 'revisar') + '. Clave: ' + labels[result.expected] + '.');
        appendText(item, 'p', result.evidence + ' — ' + result.explanation);
        list.appendChild(item);
      });
      annotationFeedback.appendChild(list);
      appendText(annotationFeedback, 'p', 'La clave comprueba estas frases conocidas. No juzga tu resumen libre ni determina si un texto fue escrito por una IA.', 'lab-small');
    });

    candidateSelect.addEventListener('change', renderClaims);
    fields.addEventListener('change', function () {
      lastAnnotation = null;
      if (annotationFeedback.childNodes.length) {
        annotationFeedback.replaceChildren();
        appendText(annotationFeedback, 'p', 'Cambiaste una clasificación. Comprueba de nuevo para actualizar el resultado.');
      }
    });

    revisionForm.addEventListener('submit', function (event) {
      event.preventDefault();
      revisionFeedback.replaceChildren();
      if (!revisionText.value.trim()) {
        appendText(revisionFeedback, 'p', 'Escribe un resumen antes de aplicar tu rúbrica. Puedes apoyarte en las soluciones y citar F1–F5.');
        revisionText.focus();
        return;
      }
      var result = readRubric();
      appendText(revisionFeedback, 'h3', 'Tu autoevaluación: ' + result.score + ' de ' + result.maxScore);
      appendText(revisionFeedback, 'p', 'Esta puntuación refleja los valores que elegiste. El laboratorio no ha comprobado el contenido de tu texto.');
      if (result.pending.length) {
        appendText(revisionFeedback, 'p', 'Criterios pendientes o parciales:');
        var list = document.createElement('ul');
        result.pending.forEach(function (item) { appendText(list, 'li', item.feedback); });
        revisionFeedback.appendChild(list);
      } else appendText(revisionFeedback, 'p', 'Marcaste todos los criterios como completos. Haz una última comparación frase por frase con F1–F5 antes de dar la revisión por terminada.');
    });
    revisionForm.addEventListener('input', function () { revisionFeedback.replaceChildren(); });
    revisionForm.addEventListener('change', function () { revisionFeedback.replaceChildren(); });

    document.getElementById('reset-lab').addEventListener('click', function () {
      annotationForm.reset();
      revisionForm.reset();
      revisionFeedback.replaceChildren();
      renderClaims();
      candidateSelect.focus();
    });

    document.getElementById('download-report').addEventListener('click', function () {
      var report = buildReviewReport(candidateSelect.value, lastAnnotation, revisionText.value, readRubric());
      var blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = 'ia-future-practica-verificacion.txt';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    });

    renderClaims();
    document.getElementById('interactivo').hidden = false;
    document.getElementById('revision-actions').hidden = false;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})(typeof window !== 'undefined' ? window : null);
