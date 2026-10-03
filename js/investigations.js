import { h, icon, clear } from './dom.js';
import { INVESTIGATIONS } from '../data/investigations.js';
import { loadVideos } from './data.js';
import { videoPanel } from './video.js';

const norm = s => String(s).toLowerCase();
const SHORT = { fbc: 'Blood count', inflam: 'Inflammatory', chem: 'Chemistry', gas: 'Blood gases', liver: 'Liver', coag: 'Clotting', urine: 'Urine', csf: 'CSF', stool: 'Gut', endo: 'Endocrine', micro: 'Infection', immuno: 'Immunology', ecg: 'ECG', cxr: 'Chest X-ray', abd: 'Abdo, renal & bone', neo: 'Newborn' };

function tableBlock(b, q) {
  const rows = q ? b.rows.filter(r => r.some(c => norm(c).includes(q))) : b.rows;
  if (!rows.length) return null;
  return h('section', { class: 'iblock' },
    h('h3', null, b.title),
    h('div', { class: 'tablewrap itable', tabindex: 0, role: 'region', 'aria-label': b.title },
      h('table', null,
        h('thead', null, h('tr', null, b.headers.map(c => h('th', { scope: 'col' }, c)))),
        h('tbody', null, rows.map(r => h('tr', null, r.map((c, i) => i === 0
          ? h('th', { scope: 'row', 'data-label': b.headers[0] }, c)
          : h('td', { 'data-label': b.headers[i] }, c))))))),
    b.note && !q ? h('p', { class: 'hint inote' }, icon('info'), ' ', b.note) : null);
}

function listBlock(b, q) {
  const items = q ? b.items.filter(i => norm(i).includes(q)) : b.items;
  if (!items.length) return null;
  return h('section', { class: 'iblock' }, h('h3', null, b.title), h('ul', { class: 'bul' }, items.map(i => h('li', null, i))));
}

export async function investigationsView(outlet, which, cleanups = []) {
  let q = '';
  const cat = INVESTIGATIONS.find(c => c.id === which) || INVESTIGATIONS[0];
  const body = h('div', { class: 'ibody', 'aria-live': 'polite' });
  const vids = (await loadVideos())['inv-' + cat.id] || [];
  let vp = null;
  const search = h('input', { type: 'search', id: 'isearch', placeholder: 'Search every table: e.g. "pyloric", "potassium", "target sign"', 'aria-label': 'Search investigations', autocomplete: 'off' });

  function render() {
    clear(body);
    const cats = q ? INVESTIGATIONS : [cat];
    let shown = 0;
    cats.forEach(c => {
      const blocks = c.blocks.map(b => b.type === 'list' ? listBlock(b, q) : tableBlock(b, q)).filter(Boolean);
      if (!blocks.length) return;
      shown += blocks.length;
      body.append(h('section', { class: 'icat' },
        h('header', { class: 'ihead' }, h('h2', null, icon(c.icon), c.title), q ? h('a', { class: 'link', href: '#/investigations/' + c.id }, 'Open section') : h('div', { class: 'row' }, h('p', { class: 'muted' }, c.blurb), vids.length ? h('button', { type: 'button', class: 'btn ghost sm', onclick: () => document.getElementById('videos')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }) }, icon('play-circle'), `${vids.length} videos`) : null)),
        ...blocks));
    });
    if (vp) { vp.destroy(); vp = null; }
    if (!q) { vp = videoPanel({ id: 'inv-' + cat.id, title: cat.title + ' investigations' }, vids); body.append(vp); }
    if (!shown) body.append(h('div', { class: 'empty small' }, icon('magnifying-glass'), h('p', null, 'No match. Try another term, such as a condition, test or sign.')));
  }

  search.addEventListener('input', () => { q = norm(search.value.trim()); tabs.hidden = !!q; render(); });
  const tabs = h('div', { class: 'tabs', role: 'tablist', 'aria-label': 'Investigation categories' },
    INVESTIGATIONS.map(c => h('a', { role: 'tab', 'aria-selected': String(c.id === cat.id), class: 'tab' + (c.id === cat.id ? ' on' : ''), href: '#/investigations/' + c.id }, SHORT[c.id] || c.title)));

  outlet.append(h('div', { class: 'page' },
    h('header', { class: 'phead' },
      h('h1', null, 'Investigations'),
      h('p', { class: 'lede' }, 'What is normal, what is abnormal, and what to do next. Ranges are approximate: your own laboratory ranges and local guidelines always take priority.')),
    h('div', { class: 'isearch' }, icon('magnifying-glass'), search),
    tabs, body));
  cleanups.push(() => vp?.destroy());
  render();
}
