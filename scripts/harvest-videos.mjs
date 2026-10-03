// Harvests real, embeddable YouTube videos per topic and verifies each with oEmbed.
// Usage: node scripts/harvest-videos.mjs [--only=topic-id] ; writes data/videos.json (resumable)
import { UNITS } from '../data/curriculum.js';
import fs from 'node:fs';

const OUT = new URL('../data/videos.json', import.meta.url);
const db = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
const only = (process.argv.find(a => a.startsWith('--only=')) || '').slice(7);

// Channels known for reliable medical teaching (soft preference, not a hard filter)
const TRUSTED = ['osmosis', 'armando', 'strong medicine', 'medical centric', 'najeeb', 'ninja nerd', 'khan academy', 'paediatrics', 'pediatrics', 'geeky medics', 'lecturio', 'speedpharmacology', 'zero to finals', 'dr. matt', 'medcram', 'who', 'rcpch', 'amboss', 'picmonic', 'sketchy', 'ali ', 'dr ', 'mrcpch', 'paeds', 'nhs', 'hospital', 'university', 'children'];
const BAD = ['reaction', 'shorts', 'prank', 'asmr', 'song', 'music video', 'trailer', 'tiktok', 'vlog'];

const sleep = ms => new Promise(r => setTimeout(r, ms));
const UA = { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36', 'accept-language': 'en-GB,en;q=0.9' };

function secs(t) { if (!t) return 0; const p = t.split(':').map(Number); return p.reduce((a, n) => a * 60 + n, 0); }

async function search(q) {
  const r = await fetch('https://www.youtube.com/results?hl=en&gl=GB&search_query=' + encodeURIComponent(q), { headers: UA });
  const html = await r.text();
  const m = html.match(/var ytInitialData = (\{.*?\});<\/script>/s);
  if (!m) return [];
  const data = JSON.parse(m[1]);
  const out = [];
  (function walk(o) {
    if (!o || typeof o !== 'object') return;
    if (o.videoRenderer) {
      const v = o.videoRenderer;
      out.push({
        id: v.videoId,
        title: v.title?.runs?.[0]?.text || '',
        channel: v.ownerText?.runs?.[0]?.text || '',
        len: secs(v.lengthText?.simpleText),
        views: parseInt((v.viewCountText?.simpleText || '0').replace(/[^0-9]/g, '')) || 0,
      });
      return;
    }
    for (const k in o) walk(o[k]);
  })(data);
  return out;
}

async function verify(id) {
  const r = await fetch('https://www.youtube.com/oembed?format=json&url=' + encodeURIComponent('https://www.youtube.com/watch?v=' + id));
  if (!r.ok) return null; // 401 = not embeddable, 404 = gone
  const j = await r.json();
  return { title: j.title, channel: j.author_name };
}

function score(v, topicWords) {
  let s = 0;
  const t = (v.title + ' ' + v.channel).toLowerCase();
  if (v.len < 150 || v.len > 3300) s -= 100;
  if (BAD.some(b => t.includes(b))) s -= 50;
  if (TRUSTED.some(b => v.channel.toLowerCase().includes(b))) s += 4;
  for (const w of topicWords) if (t.includes(w)) s += 2;
  s += Math.min(4, Math.log10(v.views + 1) - 3);
  return s;
}

const stop = new Set(['and', 'the', 'in', 'of', 'a', 'for', 'to', '&', 'children', 'child', 'disease', 'syndrome', 'beyond']);
for (const u of UNITS) {
  for (const [id, title] of u.topics) {
    if (only && id !== only) continue;
    if (db[id]?.length >= 3) continue;
    const clean = title.replace(/\(.*?\)/g, ' ').replace(/[&,]/g, ' ');
    const words = clean.toLowerCase().split(/\s+/).filter(w => w.length > 3 && !stop.has(w));
    const queries = [clean + ' paediatrics lecture', clean + ' pediatrics explained'];
    const seen = new Map();
    for (const q of queries) {
      try { for (const v of await search(q)) if (!seen.has(v.id)) seen.set(v.id, v); } catch (e) { console.log('search fail', id, e.message); }
      await sleep(400);
    }
    const ranked = [...seen.values()].map(v => ({ ...v, s: score(v, words) })).sort((a, b) => b.s - a.s);
    const picked = [];
    for (const v of ranked) {
      if (picked.length >= 4 || v.s < -10) break;
      const ok = await verify(v.id);
      await sleep(150);
      if (ok) picked.push({ id: v.id, title: ok.title, channel: ok.channel, mins: Math.round(v.len / 60) });
    }
    db[id] = picked;
    fs.writeFileSync(OUT, JSON.stringify(db, null, 1));
    console.log(id.padEnd(28), picked.length, picked.map(p => p.channel.slice(0, 18)).join(' | '));
  }
}
