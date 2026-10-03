import { h, icon, clear } from './dom.js';
import { results } from './store.js';
import { shuffle } from './data.js';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

// Runs a single-best-answer quiz inside `root`. questions: [{q, options, answer, why, key, topicId, topic}]
export function runQuiz(root, questions, { onDone, shuffleOptions = true, label = 'Question' } = {}) {
  // shuffle option order per question so letters are not memorised
  const qs = questions.map(q => {
    if (!shuffleOptions) return { ...q, opts: q.options.map((t, i) => ({ t, i })) };
    return { ...q, opts: shuffle(q.options.map((t, i) => ({ t, i }))) };
  });
  let idx = 0, correct = 0;
  const wrong = [];
  const perTopic = {};

  function show() {
    clear(root);
    const q = qs[idx];
    const bar = h('div', { class: 'qbar', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': qs.length, 'aria-valuenow': idx }, h('i', { style: { width: (100 * idx / qs.length) + '%' } }));
    const fb = h('div', { class: 'qfb', role: 'status', 'aria-live': 'polite' });
    const next = h('button', { class: 'btn', type: 'button', hidden: true, onclick: () => { idx++; idx < qs.length ? show() : finish(); } }, idx === qs.length - 1 ? 'See results' : 'Next question', icon('arrow-right'));
    const btns = q.opts.map((o, n) => h('button', { type: 'button', class: 'qopt', onclick: () => pick(n) }, h('span', { class: 'ql' }, LETTERS[n]), h('span', null, o.t)));
    function pick(n) {
      if (root.dataset.locked === String(idx)) return;
      root.dataset.locked = String(idx);
      const ok = q.opts[n].i === q.answer;
      const rightN = q.opts.findIndex(o => o.i === q.answer);
      btns.forEach((b, i) => { b.disabled = true; if (i === rightN) b.classList.add('right'); else if (i === n) b.classList.add('wrong'); });
      perTopic[q.topicId || 't'] ||= { c: 0, n: 0 };
      perTopic[q.topicId || 't'].n++;
      if (ok) { correct++; perTopic[q.topicId || 't'].c++; if (q.key) results.clearMissed(q.key); }
      else { wrong.push(q); if (q.key) results.addMissed(q.key); }
      fb.className = 'qfb show ' + (ok ? 'ok' : 'no');
      fb.append(h('strong', null, ok ? 'Correct. ' : `Not quite. The answer is ${LETTERS[rightN]}. `), q.why || '');
      next.hidden = false; next.focus();
    }
    root.append(
      h('div', { class: 'qhead' }, h('span', { class: 'muted' }, `${label} ${idx + 1} of ${qs.length}`), q.topic ? h('span', { class: 'qtag' }, q.topic) : null),
      bar,
      h('p', { class: 'qtext' }, q.q),
      h('div', { class: 'qopts', role: 'group', 'aria-label': 'Answer options' }, btns),
      fb, next);
    root.onkeydown = e => {
      const k = e.key.toUpperCase(), n = LETTERS.indexOf(k);
      if (n >= 0 && n < btns.length && !btns[n].disabled) btns[n].click();
      else if ((e.key === 'Enter' || e.key === 'ArrowRight') && !next.hidden) next.click();
    };
    root.tabIndex = -1;
  }

  function finish() {
    Object.entries(perTopic).forEach(([tid, r]) => { if (tid !== 't') results.record(tid, r.c, r.n); });
    const pct = Math.round(100 * correct / qs.length);
    clear(root); root.onkeydown = null; delete root.dataset.locked;
    const msg = pct >= 85 ? 'Excellent recall.' : pct >= 60 ? 'Solid. Review the misses below.' : 'Keep going. Re-read the topic notes, then retry.';
    root.append(
      h('div', { class: 'qresult' },
        h('div', { class: 'ring big', style: { '--p': pct } }, h('span', null, pct + '%')),
        h('h3', null, `${correct} of ${qs.length} correct`), h('p', { class: 'muted' }, msg),
        h('div', { class: 'row' },
          h('button', { class: 'btn', type: 'button', onclick: () => { const rerun = wrong.length ? wrong : questions; runQuiz(root, rerun, { onDone, shuffleOptions, label }); } }, icon('repeat'), wrong.length ? 'Retry missed' : 'Retake'),
          onDone ? h('button', { class: 'btn ghost', type: 'button', onclick: () => onDone({ correct, total: qs.length, wrong }) }, 'Done') : null)),
      wrong.length ? h('div', { class: 'qreview' }, h('h4', null, 'Review'), wrong.map(q => h('details', null,
        h('summary', null, q.q),
        h('p', null, h('strong', null, 'Answer: '), q.options[q.answer]), h('p', { class: 'muted' }, q.why)))) : null);
    root.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  show();
}
