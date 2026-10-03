import { h, icon, clear, toast } from './dom.js';
import { loadTopic, loadVideos, topicMeta, UNITS } from './data.js';
import { progress, bookmarks, notes, results } from './store.js';
import { videoPanel } from './video.js';
import { runQuiz } from './quiz.js';
import { runCards } from './cards.js';

export async function topicView(id, outlet, cleanups) {
  const t = await loadTopic(id);
  if (!t) return outlet.append(notFound());
  const vids = (await loadVideos())[id] || [];

  const flat = UNITS.flatMap(u => u.topics.map(([tid]) => tid));
  const pos = flat.indexOf(id);
  const prev = flat[pos - 1], next = flat[pos + 1];

  const done = h('button', { class: 'btn', type: 'button', 'aria-pressed': String(progress.isDone(id)), onclick: () => { progress.toggle(id); syncDone(); toast(progress.isDone(id) ? 'Marked complete' : 'Marked incomplete'); } });
  const mark = h('button', { class: 'btn ghost', type: 'button', onclick: () => { bookmarks.toggle(id); syncMark(); } });
  function syncDone() { clear(done); done.append(icon(progress.isDone(id) ? 'check-circle' : 'circle', progress.isDone(id) ? 'ph-fill' : ''), progress.isDone(id) ? 'Completed' : 'Mark complete'); done.setAttribute('aria-pressed', String(progress.isDone(id))); done.classList.toggle('done', progress.isDone(id)); }
  function syncMark() { clear(mark); mark.append(icon('bookmark-simple', bookmarks.has(id) ? 'ph-fill' : ''), bookmarks.has(id) ? 'Saved' : 'Save'); }
  syncDone(); syncMark();

  const toc = [];
  const sec = (key, title, ic, ...kids) => { toc.push([key, title]); return h('section', { id: key, class: 'tsec' }, h('h2', null, icon(ic), title), ...kids); };

  const article = h('article', { class: 'tarticle' });

  /* hero */
  article.append(h('header', { class: 'thead' },
    h('nav', { class: 'crumbs', 'aria-label': 'Breadcrumb' }, h('a', { href: '#/units' }, 'Units'), icon('caret-right'), h('a', { href: '#/unit/' + t.unit.id }, t.unit.title)),
    h('h1', null, t.title),
    t.missing ? h('p', { class: 'callout warn' }, 'Notes for this topic are still being written. The videos below are ready to use.') : h('p', { class: 'lede' }, t.summary),
    h('div', { class: 'row' }, done, mark, results.all()[id] ? h('span', { class: 'pill' }, `Best quiz: ${results.all()[id].best}%`) : null)));

  if (t.objectives?.length) article.append(h('aside', { class: 'objectives', 'aria-label': 'Learning objectives' }, h('h2', null, icon('target'), 'By the end you should be able to'), h('ul', null, t.objectives.map(o => h('li', null, o)))));

  /* video */
  toc.push(['videos', 'Videos']);
  const vp = videoPanel(t, vids);
  article.append(vp);
  cleanups.push(() => vp.destroy());

  /* body sections */
  (t.sections || []).forEach((s, i) => {
    article.append(sec('s' + i, s.h, 'book-open-text',
      ...(s.p || []).map(p => h('p', null, p)),
      s.list?.length ? h('ul', { class: 'bul' }, s.list.map(li => h('li', null, li))) : null));
  });

  if (t.table) article.append(sec('table', t.table.title || 'Comparison', 'table',
    h('div', { class: 'tablewrap', tabindex: 0, role: 'region', 'aria-label': t.table.title || 'Table' },
      h('table', null, h('thead', null, h('tr', null, t.table.headers.map(c => h('th', { scope: 'col' }, c)))),
        h('tbody', null, t.table.rows.map(r => h('tr', null, r.map((c, i) => i === 0 ? h('th', { scope: 'row' }, c) : h('td', null, c)))))))));

  if (t.drugs?.length) article.append(sec('drugs', 'Drugs & doses', 'pill',
    h('div', { class: 'drugs' }, t.drugs.map(d => h('div', { class: 'drug' }, h('strong', null, d.name), h('code', null, d.dose), d.note ? h('span', { class: 'muted' }, d.note) : null))),
    h('p', { class: 'hint' }, 'For education only. Always check the current BNFc or local formulary before prescribing.')));

  if (t.keyPoints?.length) article.append(sec('key', 'High-yield points', 'lightbulb', h('ol', { class: 'keylist' }, t.keyPoints.map(k => h('li', null, k)))));
  if (t.redFlags?.length) article.append(h('section', { id: 'red', class: 'tsec redflags' }, h('h2', null, icon('warning-octagon'), 'Red flags'), h('ul', null, t.redFlags.map(r => h('li', null, r)))));
  if (t.redFlags?.length) toc.push(['red', 'Red flags']);
  if (t.mnemonics?.length) article.append(sec('mnem', 'Mnemonics', 'brain', h('div', { class: 'mnems' }, t.mnemonics.map(m => h('div', { class: 'mnem' }, h('strong', null, m.name), h('p', null, m.text))))));
  if (t.pearls?.length) article.append(sec('pearls', 'Exam & ward pearls', 'star', h('ul', { class: 'pearls' }, t.pearls.map(p => h('li', null, p)))));

  /* quiz */
  if (t.quiz?.length) {
    const box = h('div', { class: 'quizbox' });
    const start = h('button', { class: 'btn', type: 'button', onclick: () => { clear(box); runQuiz(box, t.quiz.map((q, i) => ({ ...q, key: `${id}#${i}`, topicId: id, topic: '' })), { onDone: () => { clear(box); box.append(start); } }); } }, icon('list-checks'), `Start ${t.quiz.length}-question quiz`);
    box.append(start);
    article.append(sec('quiz', 'Test yourself', 'list-checks', box));
  }

  /* cards */
  if (t.cards?.length) {
    const box = h('div', { class: 'quizbox' });
    const start = h('button', { class: 'btn', type: 'button', onclick: () => { clear(box); runCards(box, t.cards.map((c, i) => ({ ...c, id: `${id}#${i}`, topic: t.title })), { onDone: () => { clear(box); box.append(start); } }); } }, icon('cards'), `Review ${t.cards.length} flashcards`);
    box.append(start);
    article.append(sec('cards', 'Flashcards', 'cards', box));
  }

  /* notes */
  const ta = h('textarea', { class: 'notearea', rows: 5, placeholder: 'Your own notes, mnemonics, case reminders. Saved in this browser as you type.', 'aria-label': 'My notes for ' + t.title }, notes.get(id));
  let nt; const saved = h('span', { class: 'hint' }, '');
  ta.addEventListener('input', () => { clearTimeout(nt); nt = setTimeout(() => { notes.set(id, ta.value); saved.textContent = 'Saved'; }, 400); });
  article.append(sec('notes', 'My notes', 'note-pencil', ta, saved));

  /* prev / next */
  const pn = (tid, dir) => tid ? h('a', { class: 'pn ' + dir, href: '#/topic/' + tid }, dir === 'prev' ? icon('arrow-left') : null, h('span', null, h('small', null, dir === 'prev' ? 'Previous' : 'Next'), topicMeta[tid].title), dir === 'next' ? icon('arrow-right') : null) : h('span');
  article.append(h('nav', { class: 'pnav', 'aria-label': 'Topic navigation' }, pn(prev, 'prev'), pn(next, 'next')));

  /* toc */
  const tocEl = h('nav', { class: 'toc', 'aria-label': 'On this page' }, h('h2', null, 'On this page'), h('ul', null, toc.map(([k, n]) => h('li', null, h('a', { href: 'javascript:void(0)', 'data-t': k, onclick: e => { e.preventDefault(); document.getElementById(k)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }); } }, n)))));

  outlet.append(h('div', { class: 'tlayout' }, article, tocEl));

  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) tocEl.querySelectorAll('a').forEach(a => a.classList.toggle('on', a.dataset.t === e.target.id)); }), { rootMargin: '-20% 0px -70% 0px' });
  toc.forEach(([k]) => { const el = document.getElementById(k); if (el) io.observe(el); });
  cleanups.push(() => io.disconnect());
}

function notFound() {
  return h('div', { class: 'empty' }, icon('magnifying-glass'), h('h2', null, 'Topic not found'), h('a', { class: 'btn', href: '#/units' }, 'Browse all units'));
}
