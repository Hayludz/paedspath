import { h, icon, clear } from './dom.js';
import { srs } from './store.js';

// Flashcard session with Leitner spaced repetition. cards: [{id, q, a, topic}]
export function runCards(root, cards, { onDone, onlyDue = false } = {}) {
  const sched = srs.all();
  let queue = onlyDue ? cards.filter(c => srs.isDue(c.id, sched)) : [...cards];
  const total = queue.length;
  let done = 0, flipped = false, again = 0;

  function finish() {
    clear(root); root.onkeydown = null;
    root.append(h('div', { class: 'qresult' },
      icon('trophy', 'big-ic'),
      h('h3', null, total ? 'Session complete' : 'Nothing due right now'),
      h('p', { class: 'muted' }, total ? `${total} cards reviewed, ${again} marked again.` : 'Come back tomorrow, or study a whole unit from the list.'),
      onDone ? h('button', { class: 'btn', type: 'button', onclick: onDone }, 'Back') : null));
  }

  function show() {
    if (!queue.length) return finish();
    clear(root);
    const c = queue[0]; flipped = false;
    const back = h('div', { class: 'cface back' }, h('span', { class: 'ctag' }, 'Answer'), h('p', null, c.a));
    const card = h('button', { type: 'button', class: 'card3d', 'aria-label': 'Flip card', 'aria-pressed': 'false', onclick: flip },
      h('div', { class: 'cface front' }, h('span', { class: 'ctag' }, c.topic || 'Question'), h('p', null, c.q), h('span', { class: 'chint' }, 'Tap or press Space to reveal')), back);
    const grade = h('div', { class: 'cgrade', hidden: true },
      h('button', { class: 'btn again', type: 'button', onclick: () => g(0) }, 'Again ', h('kbd', null, '1')),
      h('button', { class: 'btn', type: 'button', onclick: () => g(1) }, 'Good ', h('kbd', null, '2')),
      h('button', { class: 'btn easy', type: 'button', onclick: () => g(2) }, 'Easy ', h('kbd', null, '3')));
    function flip() { flipped = !flipped; card.classList.toggle('flipped', flipped); card.setAttribute('aria-pressed', String(flipped)); grade.hidden = !flipped; }
    function g(n) {
      srs.grade(c.id, n); queue.shift();
      if (n === 0) { again++; queue.splice(Math.min(3, queue.length), 0, c); } else done++;
      show();
    }
    root.append(
      h('div', { class: 'qhead' }, h('span', { class: 'muted' }, `${Math.min(done + 1, total)} of ${total}`), h('span', { class: 'qtag' }, `${queue.length} left`)),
      h('div', { class: 'qbar' }, h('i', { style: { width: (100 * done / total) + '%' } })),
      card, grade);
    root.tabIndex = -1; root.focus({ preventScroll: true });
    root.onkeydown = e => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
      else if (flipped && ['1', '2', '3'].includes(e.key)) g(+e.key - 1);
    };
  }
  show();
}
