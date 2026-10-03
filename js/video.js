import { h, icon, clear, fmtTime, toast } from './dom.js';
import { videos } from './store.js';

/* ---------- URL parsing ---------- */
export function parseVideoUrl(raw) {
  let url;
  try { url = new URL(raw.trim()); } catch { return null; }
  const host = url.hostname.replace(/^www\.|^m\./, '');
  const t = url.searchParams.get('t') || url.searchParams.get('start');
  const startSecs = t ? parseTimeParam(t) : 0;
  if (host === 'youtu.be') return yt(url.pathname.slice(1), startSecs);
  if (host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')) {
    const list = url.searchParams.get('list');
    if (url.pathname.startsWith('/embed/')) return yt(url.pathname.split('/')[2], startSecs);
    if (url.pathname.startsWith('/shorts/') || url.pathname.startsWith('/live/')) return yt(url.pathname.split('/')[2], startSecs);
    if (url.searchParams.get('v')) return yt(url.searchParams.get('v'), startSecs);
    if (list) return { type: 'ytlist', id: list, key: 'ytl:' + list, start: 0 };
  }
  if (host === 'vimeo.com' || host === 'player.vimeo.com') {
    const m = url.pathname.match(/(\d{5,})/);
    if (m) return { type: 'vimeo', id: m[1], key: 'vm:' + m[1], start: startSecs };
  }
  if (/\.(mp4|webm|ogv|m4v)(\?|$)/i.test(url.pathname + url.search)) return { type: 'file', id: url.href, key: 'file:' + url.href, start: startSecs };
  return null;
}
function yt(id, start) { return /^[\w-]{11}$/.test(id || '') ? { type: 'yt', id, key: 'yt:' + id, start } : null; }
function parseTimeParam(t) {
  if (/^\d+$/.test(t)) return +t;
  const m = t.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/);
  return m ? (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0) : 0;
}
export function parseClock(s) {
  s = String(s).trim(); if (!s) return 0;
  const p = s.split(':').map(Number);
  if (p.some(isNaN)) return 0;
  return p.reduce((a, n) => a * 60 + n, 0);
}

/* ---------- YouTube IFrame API ---------- */
let ytReady;
function loadYT() {
  if (window.YT?.Player) return Promise.resolve();
  return ytReady ||= new Promise((res, rej) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { prev?.(); res(); };
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api'; s.onerror = () => rej(new Error('yt api'));
    document.head.append(s);
  });
}

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

/* ---------- the video panel ---------- */
export function videoPanel(topic, curated) {
  const topicId = topic.id;
  const prefs = { ...videos.prefs() };
  let current = null; // item
  let adapter = null; // {time, seek, rate, pause, destroy, kind}
  let poll = null, tick = 0, io = null;

  const root = h('section', { class: 'vpanel', id: 'videos', 'aria-labelledby': 'vh' });
  const getItems = () => {
    const hidden = videos.hidden();
    const base = curated.map(v => ({ type: 'yt', id: v.id, key: 'yt:' + v.id, title: v.title, channel: v.channel, mins: v.mins, curated: true }));
    const mine = videos.custom(topicId).map(v => ({ ...v, custom: true }));
    return [...base, ...mine].map(v => ({ ...v, hidden: !!hidden[v.key] }));
  };

  /* --- layout --- */
  const head = h('div', { class: 'vhead' },
    h('h2', { id: 'vh' }, icon('play-circle'), ' Watch & learn'),
    h('a', { class: 'btn ghost sm', href: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(topic.title + ' paediatrics lecture'), target: '_blank', rel: 'noopener' }, icon('youtube-logo'), 'More on YouTube'));
  const slot = h('div', { class: 'vslot' });
  const stage = h('div', { class: 'vstage' });
  const mount = h('div', { class: 'vmount' });
  const miniClose = h('button', { class: 'vmini-close', type: 'button', 'aria-label': 'Close floating player', onclick: () => { stage.classList.remove('float'); floatDismissed = true; } }, icon('x'));
  stage.append(mount, miniClose);
  slot.append(stage);
  const nowBar = h('div', { class: 'vnow' });
  const ctl = h('div', { class: 'vctl', role: 'group', 'aria-label': 'Player customisation' });
  const clipRow = h('div', { class: 'vclip' });
  const stampBox = h('div', { class: 'vstamps' });
  const list = h('div', { class: 'vlist', role: 'list' });
  const addBox = h('form', { class: 'vadd', onsubmit: onAdd });
  const body = h('div', { class: 'vbody' }, slot, nowBar, ctl, clipRow, stampBox);
  root.append(head, h('div', { class: 'vgrid' }, body, h('div', { class: 'vside' }, list, addBox)));

  let floatDismissed = false;

  /* --- controls --- */
  function renderControls() {
    clear(ctl);
    const canCtl = adapter && adapter.kind !== 'vimeo';
    const speed = h('select', { id: 'vspeed', 'aria-label': 'Playback speed', disabled: !canCtl, onchange: e => { prefs.speed = +e.target.value; videos.setPrefs({ speed: prefs.speed }); adapter?.rate(prefs.speed); } },
      SPEEDS.map(s => h('option', { value: s, selected: s === prefs.speed }, s + 'x')));
    const tog = (label, ic, key, onToggle, enabled = true) => h('button', {
      type: 'button', class: 'chip' + (prefs[key] ? ' on' : ''), 'aria-pressed': String(!!prefs[key]), disabled: !enabled,
      onclick: () => { prefs[key] = !prefs[key]; videos.setPrefs({ [key]: prefs[key] }); onToggle?.(prefs[key]); renderControls(); },
    }, icon(ic), label);
    ctl.append(
      h('label', { class: 'chip sel', for: 'vspeed' }, icon('gauge'), 'Speed ', speed),
      tog('Loop', 'repeat', 'loop', null, canCtl),
      tog('Captions', 'closed-captioning', 'captions', () => current && play(current, adapter?.time() || 0), current?.type === 'yt'),
      tog('Theatre', 'arrows-out-simple', 'theatre', v => root.classList.toggle('theatre', v)),
      tog('Float on scroll', 'picture-in-picture', 'float', () => { floatDismissed = false; if (!prefs.float) stage.classList.remove('float'); }, true),
    );
    if (adapter?.kind === 'vimeo') ctl.append(h('p', { class: 'hint' }, 'Speed, loop and clip controls work for YouTube and direct video files. Vimeo uses its own controls.'));
    renderClip();
  }

  function renderClip() {
    clear(clipRow);
    if (!current || !adapter || adapter.kind === 'vimeo') return;
    const c = videos.clips(current.key);
    const sIn = h('input', { type: 'text', inputmode: 'numeric', placeholder: '0:00', value: c.start ? fmtTime(c.start) : '', 'aria-label': 'Clip start (m:ss)', size: 6 });
    const eIn = h('input', { type: 'text', inputmode: 'numeric', placeholder: 'end', value: c.end ? fmtTime(c.end) : '', 'aria-label': 'Clip end (m:ss)', size: 6 });
    const save = () => { const s = parseClock(sIn.value), e = parseClock(eIn.value); videos.setClip(current.key, { start: s, end: e && e > s ? e : 0 }); toast(s || e ? `Clip set: ${fmtTime(s)} to ${e ? fmtTime(e) : 'end'}` : 'Clip cleared'); };
    clipRow.append(
      h('span', { class: 'lbl' }, icon('timer'), 'Play only'),
      h('label', null, 'from ', sIn), h('button', { type: 'button', class: 'btn ghost sm', onclick: () => { sIn.value = fmtTime(adapter.time()); save(); } }, 'Now'),
      h('label', null, 'to ', eIn), h('button', { type: 'button', class: 'btn ghost sm', onclick: () => { eIn.value = fmtTime(adapter.time()); save(); } }, 'Now'),
      h('button', { type: 'button', class: 'btn sm', onclick: () => { save(); adapter.seek(parseClock(sIn.value)); } }, 'Apply'),
      h('button', { type: 'button', class: 'btn ghost sm', onclick: () => { sIn.value = ''; eIn.value = ''; save(); } }, 'Clear'));
  }

  function renderStamps() {
    clear(stampBox);
    if (!current) return;
    const items = videos.stamps(current.key);
    const input = h('input', { type: 'text', placeholder: 'Note at the current moment, e.g. "stridor at rest = severe"', 'aria-label': 'Timestamp note', maxlength: 160 });
    const add = () => { const text = input.value.trim(); if (!text || !adapter) return; videos.addStamp(current.key, { t: Math.floor(adapter.time()), text }); input.value = ''; renderStamps(); };
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); add(); } });
    stampBox.append(
      h('h3', null, icon('note-pencil'), 'Timestamp notes'),
      h('div', { class: 'stampadd' }, input, h('button', { type: 'button', class: 'btn sm', disabled: !adapter || adapter.kind === 'vimeo', onclick: add }, icon('plus'), 'Add at now')),
      items.length ? h('ul', { class: 'stamps' }, items.map((s, i) => h('li', null,
        h('button', { type: 'button', class: 'stamp-t', onclick: () => { adapter?.seek(s.t); adapter?.play?.(); }, 'aria-label': 'Jump to ' + fmtTime(s.t) }, fmtTime(s.t)),
        h('span', null, s.text),
        h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Delete note', onclick: () => { videos.removeStamp(current.key, i); renderStamps(); } }, icon('trash'))))) : h('p', { class: 'hint' }, 'Pause the video and add a note to bookmark an important moment.'));
  }

  /* --- playlist --- */
  function renderList() {
    clear(list);
    const items = getItems();
    const watched = videos.watched();
    list.append(h('h3', null, 'Playlist ', h('span', { class: 'muted' }, `${items.filter(i => !i.hidden).length} videos`)));
    if (!items.length) list.append(h('p', { class: 'hint' }, 'No videos found for this topic yet. Paste a link below to add your own.'));
    items.forEach(v => {
      const isCur = current?.key === v.key;
      list.append(h('div', { class: 'vitem' + (isCur ? ' cur' : '') + (v.hidden ? ' hid' : ''), role: 'listitem' },
        h('button', { type: 'button', class: 'vplay', onclick: () => { floatDismissed = false; play(v); }, 'aria-current': isCur ? 'true' : null },
          v.type === 'yt' ? h('img', { src: `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`, alt: '', loading: 'lazy', width: 128, height: 72 }) : h('span', { class: 'vthumb-ph' }, icon(v.type === 'file' ? 'film-strip' : 'play-circle')),
          h('span', { class: 'vmeta' },
            h('span', { class: 'vtitle' }, v.title || (v.type === 'ytlist' ? 'YouTube playlist' : v.type === 'vimeo' ? 'Vimeo video' : 'Video')),
            h('span', { class: 'vch' }, [v.channel || (v.custom ? 'Added by you' : ''), v.mins ? v.mins + ' min' : ''].filter(Boolean).join('  |  ')))),
        h('span', { class: 'vact' },
          h('button', { type: 'button', class: 'icon-btn' + (watched[v.key] ? ' on' : ''), title: 'Mark watched', 'aria-pressed': String(!!watched[v.key]), 'aria-label': 'Mark watched', onclick: () => { videos.toggleWatched(v.key); renderList(); } }, icon('check-circle')),
          v.custom
            ? h('button', { type: 'button', class: 'icon-btn', title: 'Remove', 'aria-label': 'Remove video', onclick: () => { videos.removeCustom(topicId, v.key); if (current?.key === v.key) { current = null; teardown(); } renderList(); init(); } }, icon('trash'))
            : h('button', { type: 'button', class: 'icon-btn', title: v.hidden ? 'Show' : 'Hide', 'aria-label': v.hidden ? 'Show video' : 'Hide video', onclick: () => { videos.toggleHidden(v.key); renderList(); } }, icon(v.hidden ? 'eye' : 'eye-slash')))));
    });
  }

  function renderAdd() {
    clear(addBox);
    const url = h('input', { type: 'url', required: true, placeholder: 'Paste a YouTube, Vimeo or .mp4 link', 'aria-label': 'Video URL', id: 'vurl' });
    const title = h('input', { type: 'text', placeholder: 'Title (optional)', 'aria-label': 'Video title', maxlength: 90 });
    addBox.append(h('h3', null, icon('plus'), 'Add your own video'), url, title,
      h('button', { class: 'btn', type: 'submit' }, 'Add to playlist'),
      h('p', { class: 'hint' }, 'Links are saved in this browser. YouTube start times (?t=90) and playlists are supported.'));
  }

  function onAdd(e) {
    e.preventDefault();
    const [urlEl, titleEl] = addBox.querySelectorAll('input');
    const p = parseVideoUrl(urlEl.value);
    if (!p) { toast('That link is not a supported video URL'); return; }
    if (getItems().some(i => i.key === p.key)) { toast('Already in the playlist'); return; }
    const item = { type: p.type, id: p.id, key: p.key, title: titleEl.value.trim() || '', start: p.start || 0 };
    videos.addCustom(topicId, item);
    urlEl.value = ''; titleEl.value = '';
    toast('Video added');
    renderList(); play({ ...item, custom: true });
  }

  /* --- playback --- */
  function teardown() {
    clearInterval(poll); poll = null;
    try { adapter?.destroy(); } catch { /* ignore */ }
    adapter = null; clear(mount);
  }

  async function play(item, resumeAt) {
    teardown();
    current = item; floatDismissed = false;
    renderList(); renderNow();
    const clip = videos.clips(item.key);
    const start = resumeAt != null ? resumeAt : (clip.start || item.start || (videos.pos(item.key) > 8 ? videos.pos(item.key) - 2 : 0));
    const holder = h('div', { class: 'vframe' }); mount.append(holder);

    if (item.type === 'yt' || item.type === 'ytlist') {
      holder.append(h('div', { class: 'vskeleton', 'aria-hidden': 'true' }));
      try { await loadYT(); } catch { holder.replaceChildren(fallback(item)); return; }
      if (current !== item) return;
      const target = h('div'); holder.replaceChildren(target);
      const vars = { rel: 0, modestbranding: 1, playsinline: 1, cc_load_policy: prefs.captions ? 1 : 0, start: Math.floor(start), origin: location.origin };
      if (item.type === 'ytlist') { vars.listType = 'playlist'; vars.list = item.id; }
      let player;
      const ready = new Promise(res => {
        player = new YT.Player(target, {
          host: 'https://www.youtube-nocookie.com', width: '100%', height: '100%',
          videoId: item.type === 'yt' ? item.id : undefined, playerVars: vars,
          events: {
            onReady: () => { player.setPlaybackRate(prefs.speed); res(); },
            onStateChange: ev => { if (ev.data === 0) { onEnded(); } },
            onError: () => { holder.replaceChildren(fallback(item)); },
          },
        });
      });
      adapter = {
        kind: 'yt', time: () => { try { return player.getCurrentTime() || 0; } catch { return 0; } },
        seek: t => player.seekTo(t, true), play: () => player.playVideo(), rate: r => player.setPlaybackRate(r),
        pause: () => player.pauseVideo(), destroy: () => player.destroy(),
      };
      await ready;
    } else if (item.type === 'vimeo') {
      holder.append(h('iframe', { src: `https://player.vimeo.com/video/${item.id}?dnt=1`, allow: 'autoplay; fullscreen; picture-in-picture', allowfullscreen: true, title: item.title || 'Vimeo video', loading: 'lazy' }));
      adapter = { kind: 'vimeo', time: () => 0, seek() {}, rate() {}, pause() {}, destroy() {} };
    } else if (item.type === 'file') {
      const v = h('video', { controls: true, playsinline: true, preload: 'metadata', src: item.id });
      v.addEventListener('loadedmetadata', () => { v.playbackRate = prefs.speed; if (start) v.currentTime = start; });
      v.addEventListener('ended', onEnded);
      v.addEventListener('error', () => holder.replaceChildren(fallback(item)));
      holder.append(v);
      adapter = { kind: 'file', time: () => v.currentTime, seek: t => { v.currentTime = t; }, play: () => v.play(), rate: r => { v.playbackRate = r; }, pause: () => v.pause(), destroy: () => { v.pause(); v.removeAttribute('src'); v.load(); } };
    }
    renderControls(); renderStamps();
    clearInterval(poll);
    poll = setInterval(() => {
      if (!adapter || adapter.kind === 'vimeo') return;
      const t = adapter.time(), clipNow = videos.clips(current.key);
      if (clipNow.end && t >= clipNow.end) { prefs.loop ? adapter.seek(clipNow.start || 0) : (adapter.pause(), adapter.seek(clipNow.end - 0.1)); }
      if (++tick % 6 === 0 && t > 5) videos.setPos(current.key, t);
    }, 500);
  }

  function onEnded() {
    if (!adapter) return;
    if (prefs.loop) { adapter.seek(videos.clips(current.key).start || 0); adapter.play?.(); }
    else { videos.setPos(current.key, 0); if (!videos.watched()[current.key]) { videos.toggleWatched(current.key); renderList(); } }
  }

  function fallback(item) {
    const href = item.type === 'file' ? item.id : item.type === 'vimeo' ? 'https://vimeo.com/' + item.id : 'https://www.youtube.com/watch?v=' + item.id;
    return h('div', { class: 'vfallback' }, icon('warning-octagon'), h('p', null, 'This video cannot be embedded here (owner restriction or no connection).'), h('a', { class: 'btn', href, target: '_blank', rel: 'noopener' }, 'Open in a new tab'));
  }

  function renderNow() {
    clear(nowBar);
    if (!current) return;
    nowBar.append(h('strong', null, current.title || 'Video'), current.channel ? h('span', { class: 'muted' }, ' ' + current.channel) : null);
  }

  /* --- floating mini-player when scrolled away --- */
  function watchFloat() {
    io?.disconnect();
    io = new IntersectionObserver(([en]) => {
      const away = !en.isIntersecting && en.boundingClientRect.top < 0;
      stage.classList.toggle('float', away && prefs.float && !floatDismissed && !!adapter);
    }, { threshold: 0.15 });
    io.observe(slot);
  }

  function init() {
    renderList(); renderAdd(); renderControls();
    const items = getItems().filter(i => !i.hidden);
    if (items.length && !current) { current = items[0]; renderNow(); renderStamps(); showPoster(items[0]); }
    else if (!items.length) { clear(mount); mount.append(h('div', { class: 'vempty' }, icon('film-strip'), h('p', null, 'No video yet for this topic.'), h('p', { class: 'hint' }, 'Paste a link in the box on the right or search YouTube.'))); }
  }

  // Lazy: show a poster; load the heavy iframe only on click (keeps pages fast)
  function showPoster(item) {
    clear(mount);
    mount.append(h('button', { type: 'button', class: 'vposter', onclick: () => play(item), 'aria-label': 'Play video: ' + (item.title || '') },
      item.type === 'yt' ? h('img', { src: `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`, alt: '' }) : null,
      h('span', { class: 'vplaybtn' }, icon('play', 'ph-fill'))));
  }
  watchFloat();
  if (prefs.theatre) root.classList.add('theatre');
  init();
  root.destroy = () => { teardown(); io?.disconnect(); };
  return root;
}
