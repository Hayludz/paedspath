import { h, icon, clear, $, toast } from './dom.js';
import { UNITS, unitById, topicMeta, ALL_TOPIC_IDS, loadVideos, loadIndex, collect, shuffle } from './data.js';
import { store, progress, bookmarks, notes, results, srs, streak, exportAll, importAll } from './store.js';
import { runQuiz } from './quiz.js';
import { runCards } from './cards.js';

const outlet = $('#outlet');
let cleanups = [];
const TOTAL = ALL_TOPIC_IDS.length;

/* ---------------- theme ---------------- */
const root = document.documentElement;
function applyTheme(t) { root.dataset.theme = t; try { localStorage.setItem('paeds.theme', t); } catch { /* ignore */ } }
(function initTheme() {
  let t; try { t = localStorage.getItem('paeds.theme'); } catch { /* ignore */ }
  applyTheme(t || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
})();
$('#theme').addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

/* ---------------- router ---------------- */
const routes = [
  [/^\/?$/, () => dashboard()],
  [/^\/units$/, () => unitsPage()],
  [/^\/unit\/(\w+)$/, id => unitPage(id)],
  [/^\/topic\/([\w-]+)$/, id => topicRoute(id)],
  [/^\/practise(?:\/(\w+))?$/, m => practisePage(m)],
  [/^\/cards$/, () => cardsPage()],
  [/^\/tools(?:\/(\w+))?$/, w => import('./tools.js').then(m => m.toolsView(outlet, w || 'weight'))],
  [/^\/investigations(?:\/(\w+))?$/, w => import('./investigations.js').then(m => m.investigationsView(outlet, w, cleanups))],
  [/^\/reference(?:\/(\w+))?$/, w => import('./reference.js').then(m => m.referenceView(outlet, w || 'vitals'))],
  [/^\/saved$/, () => savedPage()],
  [/^\/about$/, () => aboutPage()],
];

async function route() {
  const path = location.hash.replace(/^#/, '') || '/';
  cleanups.forEach(fn => { try { fn(); } catch { /* ignore */ } }); cleanups = [];
  clear(outlet);
  document.body.classList.remove('nav-open');
  let matched = false;
  for (const [re, fn] of routes) {
    const m = path.match(re);
    if (m) { matched = true; try { await fn(m[1]); } catch (e) { console.error(e); outlet.append(errorBox()); } break; }
  }
  if (!matched) outlet.append(h('div', { class: 'empty' }, icon('compass'), h('h2', null, 'Page not found'), h('a', { class: 'btn', href: '#/' }, 'Go home')));
  markNav(path);
  const title = $('h1', outlet);
  document.title = (title ? title.textContent + ' | ' : '') + 'PaedsPath';
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (title) { title.tabIndex = -1; title.focus({ preventScroll: true }); }
}
function errorBox() { return h('div', { class: 'empty' }, icon('warning-octagon'), h('h2', null, 'Something went wrong'), h('p', { class: 'muted' }, 'Reload the page and try again.'), h('a', { class: 'btn', href: '#/' }, 'Home')); }
window.addEventListener('hashchange', route);

function markNav(path) {
  const key = path.startsWith('/unit') || path === '/units' || path.startsWith('/topic') ? 'units' : path.split('/')[1] || 'home';
  document.querySelectorAll('[data-nav]').forEach(a => { const on = a.dataset.nav === key; a.classList.toggle('on', on); on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'); });
}

/* ---------------- helpers ---------------- */
const unitTopicIds = u => u.topics.map(t => t[0]);
const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
const ring = (p, label) => h('div', { class: 'ring', style: { '--p': p }, role: 'img', 'aria-label': `${label}: ${p}%` }, h('span', null, p + '%'));
const stat = (v, l, ic, id) => h('div', { class: 'stat' }, icon(ic), h('strong', { id }, String(v)), h('span', null, l));

function unitCard(u, i) {
  const done = progress.count(unitTopicIds(u));
  const p = pct(done, u.topics.length);
  return h('a', { class: 'ucard', href: '#/unit/' + u.id, style: { '--hue': (172 + i * 24) % 360 } },
    h('span', { class: 'uic' }, icon(u.icon)),
    h('h3', null, u.title),
    h('p', null, u.blurb),
    h('div', { class: 'umeta' }, h('span', null, `${u.topics.length} topics`), h('span', { class: 'upct' }, done ? `${done} done` : 'Not started')),
    h('div', { class: 'bar', 'aria-hidden': 'true' }, h('i', { style: { width: p + '%' } })));
}

/* ---------------- dashboard ---------------- */
async function dashboard() {
  const done = progress.count(ALL_TOPIC_IDS);
  const sk = streak();
  const dueCount = 0; // filled in once the card bank has loaded (below)
  const res = Object.values(results.all());
  const avg = res.length ? Math.round(res.reduce((a, r) => a + r.last, 0) / res.length) : 0;
  const last = store.get('last', null);
  const missed = results.missed().length;

  const hero = h('section', { class: 'hero' },
    h('div', { class: 'hero-copy' },
      h('h1', null, 'Paediatrics, from newborn to adolescent.'),
      h('p', { class: 'lede' }, `${TOTAL} topics across ${UNITS.length} units. Read, watch, test yourself, then revisit the cards that slip.`),
      h('button', { class: 'search-trigger', type: 'button', onclick: openSearch }, icon('magnifying-glass'), h('span', null, 'Search topics, signs, drugs'), h('kbd', null, 'Ctrl K'))),
    h('div', { class: 'hero-card' },
      h('div', { class: 'hc-top' }, ring(pct(done, TOTAL), 'Course progress'), h('div', null, h('strong', null, `${done} of ${TOTAL}`), h('span', { class: 'muted' }, 'topics completed'))),
      h('div', { class: 'stats' }, stat(sk.days, 'day streak', 'flame'), stat('-', 'cards due', 'cards', 'due-n'), stat(avg ? avg + '%' : '-', 'quiz average', 'target'))));

  const actions = h('section', { class: 'actions', 'aria-label': 'Quick actions' },
    last && topicMeta[last] ? h('a', { class: 'act primary', href: '#/topic/' + last }, icon('play-circle'), h('span', null, h('small', null, 'Continue'), topicMeta[last].title)) : h('a', { class: 'act primary', href: '#/topic/' + UNITS[0].topics[0][0] }, icon('play-circle'), h('span', null, h('small', null, 'Start here'), UNITS[0].topics[0][1])),
    h('a', { class: 'act', href: '#/cards' }, icon('cards'), h('span', null, h('small', null, 'Daily review'), h('span', { id: 'due-t' }, 'Spaced flashcards'))),
    h('a', { class: 'act', href: '#/practise' + (missed ? '/missed' : '') }, icon('list-checks'), h('span', null, h('small', null, missed ? 'Weak spots' : 'Practise'), missed ? `${missed} missed questions` : 'Mixed question bank')),
    h('a', { class: 'act', href: '#/investigations' }, icon('microscope'), h('span', null, h('small', null, 'Results explained'), 'Investigations')),
    h('a', { class: 'act', href: '#/tools' }, icon('calculator'), h('span', null, h('small', null, 'At the bedside'), 'Calculators & doses')));

  outlet.append(h('div', { class: 'page' }, hero, actions,
    h('section', null, h('div', { class: 'shead' }, h('h2', null, 'Units'), h('a', { href: '#/units', class: 'link' }, 'View as list')), h('div', { class: 'ugrid' }, UNITS.map(unitCard))),
    h('section', { class: 'tips' }, h('h2', null, 'How this works'),
      h('ol', null,
        h('li', null, h('strong', null, 'Learn. '), 'Every topic has structured notes, a comparison table where useful, red flags and exam pearls.'),
        h('li', null, h('strong', null, 'Watch. '), 'Each topic has a playlist of verified lectures. Change speed, loop a clip, add timestamp notes, or paste your own link.'),
        h('li', null, h('strong', null, 'Retrieve. '), 'Five questions and eight flashcards per topic. Cards come back on a spaced schedule.')))));
  dueCards().then(n => { const a = $('#due-n'), b = $('#due-t'); if (a) a.textContent = String(n); if (b) b.textContent = n ? `${n} cards due` : 'Learn new cards'; });
}

async function dueCards() {
  try {
    const { cards } = await collect(UNITS.map(u => u.id));
    const seen = srs.all();
    return cards.filter(c => seen[c.id] && srs.isDue(c.id, seen)).length;
  } catch { return 0; }
}

/* ---------------- units ---------------- */
function unitsPage() {
  outlet.append(h('div', { class: 'page' },
    h('header', { class: 'phead' }, h('h1', null, 'All units'), h('p', { class: 'lede' }, `${TOTAL} topics. Open any unit to see its topics, or jump straight in.`)),
    h('div', { class: 'ugrid' }, UNITS.map(unitCard))));
}

async function unitPage(id) {
  const u = unitById(id); if (!u) return outlet.append(h('div', { class: 'empty' }, h('h2', null, 'Unit not found')));
  const ids = unitTopicIds(u);
  const vids = await loadVideos();
  const done = progress.count(ids), res = results.all();
  const idx = UNITS.indexOf(u);
  outlet.append(h('div', { class: 'page' },
    h('header', { class: 'uhead', style: { '--hue': (172 + idx * 24) % 360 } },
      h('nav', { class: 'crumbs' }, h('a', { href: '#/units' }, 'Units')),
      h('div', { class: 'uh-row' }, h('span', { class: 'uic lg' }, icon(u.icon)), h('div', null, h('h1', null, u.title), h('p', { class: 'lede' }, u.blurb))),
      h('div', { class: 'row' },
        ring(pct(done, ids.length), 'Unit progress'),
        h('span', { class: 'muted' }, `${done} of ${ids.length} topics complete`),
        h('a', { class: 'btn', href: '#/practise/' + u.id }, icon('list-checks'), 'Unit quiz'),
        h('a', { class: 'btn ghost', href: '#/cards?unit=' + u.id }, icon('cards'), 'Unit flashcards'))),
    h('ol', { class: 'tlist' }, u.topics.map(([tid, title], i) => h('li', null,
      h('a', { href: '#/topic/' + tid, class: 'trow' + (progress.isDone(tid) ? ' done' : '') },
        h('span', { class: 'tnum' }, progress.isDone(tid) ? icon('check', 'ph-bold') : String(i + 1)),
        h('span', { class: 'ttl' }, title),
        h('span', { class: 'tmeta' },
          (vids[tid] || []).length ? h('span', { class: 'pill' }, icon('play-circle'), String(vids[tid].length)) : null,
          res[tid] ? h('span', { class: 'pill' }, res[tid].best + '%') : null,
          bookmarks.has(tid) ? icon('bookmark-simple', 'ph-fill') : null,
          icon('caret-right'))))))));
}

async function topicRoute(id) {
  store.set('last', id);
  const m = await import('./topic.js');
  await m.topicView(id, outlet, cleanups);
}

/* ---------------- practise ---------------- */
async function practisePage(arg) {
  const page = h('div', { class: 'page narrow' });
  outlet.append(page);
  const selected = new Set(arg && unitById(arg) ? [arg] : UNITS.map(u => u.id));
  let count = 10, mode = arg === 'missed' ? 'missed' : 'all';
  const stage = h('div', { class: 'quizbox big' });

  function setup() {
    clear(page);
    const chips = h('div', { class: 'chips', role: 'group', 'aria-label': 'Units' }, UNITS.map(u => h('button', { type: 'button', class: 'chip' + (selected.has(u.id) ? ' on' : ''), 'aria-pressed': String(selected.has(u.id)), onclick: e => { selected.has(u.id) ? selected.delete(u.id) : selected.add(u.id); e.currentTarget.classList.toggle('on'); e.currentTarget.setAttribute('aria-pressed', String(selected.has(u.id))); } }, u.title.split(' & ')[0].split(',')[0])));
    const counts = [10, 20, 40].map(n => h('button', { type: 'button', class: 'chip' + (count === n ? ' on' : ''), 'aria-pressed': String(count === n), onclick: () => { count = n; setup(); } }, n + ' questions'));
    const modes = [['all', 'Mixed'], ['missed', `Missed only (${results.missed().length})`]].map(([k, l]) => h('button', { type: 'button', class: 'chip' + (mode === k ? ' on' : ''), 'aria-pressed': String(mode === k), onclick: () => { mode = k; setup(); } }, l));
    page.append(
      h('header', { class: 'phead' }, h('h1', null, 'Practise'), h('p', { class: 'lede' }, 'Single-best-answer questions drawn from every topic. Options are shuffled each time.')),
      h('div', { class: 'panel' },
        h('h2', null, 'Units'), h('div', { class: 'row' }, h('button', { class: 'btn ghost sm', type: 'button', onclick: () => { UNITS.forEach(u => selected.add(u.id)); setup(); } }, 'Select all'), h('button', { class: 'btn ghost sm', type: 'button', onclick: () => { selected.clear(); setup(); } }, 'Clear')), chips,
        h('h2', null, 'Length'), h('div', { class: 'chips' }, counts),
        h('h2', null, 'Pool'), h('div', { class: 'chips' }, modes),
        h('button', { class: 'btn lg', type: 'button', onclick: start }, icon('play'), 'Start practice')),
      stage);
  }
  async function start() {
    if (!selected.size) return toast('Pick at least one unit');
    clear(stage);
    stage.append(h('div', { class: 'vskeleton tall' }));
    const { qs } = await collect([...selected]);
    let pool = qs;
    if (mode === 'missed') { const miss = new Set(results.missed()); pool = qs.filter(q => miss.has(q.key)); }
    if (!pool.length) { clear(stage); return stage.append(h('div', { class: 'empty small' }, icon('check-circle'), h('p', null, mode === 'missed' ? 'No missed questions yet. Nice.' : 'No questions available for that selection.'))); }
    const picked = shuffle(pool).slice(0, count);
    clear(stage);
    runQuiz(stage, picked, { label: 'Question', onDone: () => { clear(stage); } });
    stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  setup();
  if (arg && (unitById(arg) || arg === 'missed')) start();
}

/* ---------------- flashcards ---------------- */
async function cardsPage() {
  const page = h('div', { class: 'page narrow' });
  outlet.append(page);
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const { cards } = await collect(UNITS.map(u => u.id));
  const s = srs.all();
  const due = cards.filter(c => srs.isDue(c.id, s));
  const fresh = cards.filter(c => !s[c.id]).length;
  const stage = h('div', { class: 'quizbox big' });
  const begin = (list, opts) => { clear(stage); runCards(stage, shuffle(list), { ...opts, onDone: () => location.hash === '#/cards' ? route() : (location.hash = '#/cards') }); stage.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const unitSel = h('select', { id: 'cu', 'aria-label': 'Choose a unit' }, UNITS.map(u => h('option', { value: u.id, selected: u.id === params.get('unit') }, u.title)));
  page.append(
    h('header', { class: 'phead' }, h('h1', null, 'Flashcards'), h('p', { class: 'lede' }, 'Spaced repetition: cards you know return later, cards you miss return soon.')),
    h('div', { class: 'stats flat' }, stat(due.length, 'due or new', 'clock-counter-clockwise'), stat(fresh, 'not yet seen', 'cards'), stat(srs.mastered(), 'mastered', 'trophy')),
    h('div', { class: 'panel' },
      h('div', { class: 'row' },
        h('button', { class: 'btn lg', type: 'button', onclick: () => begin(due.slice(0, 30), {}) }, icon('play'), `Review ${Math.min(due.length, 30)} cards`),
        h('span', { class: 'muted' }, 'Sessions are capped at 30 cards.')),
      h('div', { class: 'row' }, h('label', { for: 'cu' }, 'Study a unit'), unitSel, h('button', { class: 'btn ghost', type: 'button', onclick: () => begin(cards.filter(c => unitTopicIds(unitById(unitSel.value)).includes(c.topicId)), {}) }, 'Start')),
      h('div', { class: 'row' }, h('button', { class: 'btn ghost', type: 'button', onclick: () => { const saved = new Set(bookmarks.all()); const l = cards.filter(c => saved.has(c.topicId)); l.length ? begin(l, {}) : toast('Save some topics first'); } }, icon('bookmark-simple'), 'Saved topics only'))),
    stage);
  if (params.get('unit') && unitById(params.get('unit'))) begin(cards.filter(c => unitTopicIds(unitById(params.get('unit'))).includes(c.topicId)), {});
}

/* ---------------- saved & notes ---------------- */
function savedPage() {
  const bm = bookmarks.all(), nt = notes.all();
  const link = tid => h('a', { class: 'trow', href: '#/topic/' + tid }, h('span', { class: 'ttl' }, topicMeta[tid].title), h('span', { class: 'tmeta' }, h('span', { class: 'muted' }, topicMeta[tid].unit.title), icon('caret-right')));
  outlet.append(h('div', { class: 'page narrow' },
    h('header', { class: 'phead' }, h('h1', null, 'Saved & notes')),
    h('section', null, h('h2', null, 'Saved topics'), bm.length ? h('div', { class: 'tlist' }, bm.filter(t => topicMeta[t]).map(link)) : h('p', { class: 'muted' }, 'Tap Save on any topic and it will appear here.')),
    h('section', null, h('h2', null, 'My notes'), Object.keys(nt).length ? h('div', { class: 'notelist' }, Object.entries(nt).filter(([t]) => topicMeta[t]).map(([t, text]) => h('article', { class: 'note' }, h('a', { href: '#/topic/' + t }, topicMeta[t].title), h('p', null, text)))) : h('p', { class: 'muted' }, 'Notes you write on topic pages are collected here.')),
    h('section', null, h('h2', null, 'Backup'), h('p', { class: 'muted' }, 'Everything is stored in this browser. Export a backup to move between devices.'),
      h('div', { class: 'row' },
        h('button', { class: 'btn', type: 'button', onclick: exportJson }, icon('download-simple'), 'Export'),
        h('label', { class: 'btn ghost' }, icon('upload-simple'), 'Import', h('input', { type: 'file', accept: 'application/json', hidden: true, onchange: importJson }))))));
}
function exportJson() {
  const url = URL.createObjectURL(new Blob([JSON.stringify(exportAll())], { type: 'application/json' }));
  const a = h('a', { href: url, download: 'paedspath-backup.json' }); document.body.append(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
async function importJson(e) {
  const f = e.target.files[0]; if (!f) return;
  try { importAll(JSON.parse(await f.text())); toast('Backup restored'); route(); } catch { toast('That file could not be read'); }
}

function aboutPage() {
  outlet.append(h('div', { class: 'page narrow' }, h('header', { class: 'phead' }, h('h1', null, 'About & safety')),
    h('div', { class: 'prose' },
      h('p', null, 'PaedsPath is a study aid for students and trainees. It is not a clinical decision tool and does not replace national or local guidelines, the BNFc, or senior advice.'),
      h('p', null, 'Doses and thresholds are summaries of standard references (WHO, NICE, APLS and major textbooks). Guidelines change: verify before acting.'),
      h('p', null, 'Videos are embedded from YouTube and other providers and belong to their creators. They are suggestions, not endorsements, and may be removed by their owners. You can hide any video or add your own links on every topic page.'),
      h('p', null, 'Your progress, notes and custom videos are stored only in this browser (local storage). Nothing is sent to a server.'))));
}

/* ---------------- search palette ---------------- */
const dlg = $('#search');
const sInput = $('#search-input'), sList = $('#search-results');
let idx = [];
async function openSearch() {
  if (!idx.length) idx = await loadIndex();
  dlg.showModal(); sInput.value = ''; renderResults(''); sInput.focus();
}
function renderResults(q) {
  clear(sList);
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  let hits = idx;
  if (terms.length) hits = idx.map(t => { const hay = t.h; let s = 0; for (const w of terms) { if (!hay.includes(w)) return null; s += t.t.toLowerCase().includes(w) ? 5 : 1; } return { ...t, s }; }).filter(Boolean).sort((a, b) => b.s - a.s);
  hits.slice(0, 12).forEach(t => sList.append(h('li', null, h('a', { href: '#/topic/' + t.id, onclick: () => dlg.close() }, h('strong', null, t.t), h('span', { class: 'muted' }, t.u)))));
  if (!hits.length) sList.append(h('li', { class: 'muted pad' }, 'No match. Try a symptom, drug or condition.'));
}
sInput.addEventListener('input', () => renderResults(sInput.value));
sInput.addEventListener('keydown', e => { if (e.key === 'Enter') sList.querySelector('a')?.click(); });
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
$('#search-open').addEventListener('click', openSearch);
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
  else if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
});
$('#menu').addEventListener('click', () => document.body.classList.toggle('nav-open'));
$('#scrim').addEventListener('click', () => document.body.classList.remove('nav-open'));

/* sidebar unit list */
const side = $('#unit-nav');
UNITS.forEach(u => side.append(h('li', null, h('a', { href: '#/unit/' + u.id, 'data-unit': u.id }, icon(u.icon), h('span', null, u.title)))));

route();
