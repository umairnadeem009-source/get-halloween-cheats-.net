import fs from 'fs';

const htmlPath = process.argv[2];
if (!htmlPath) {
  console.error('Usage: node scripts/parse-competitor-blog-html.mjs <saved-blog-listing.html>');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

const cardRe =
  /data-blog-card="true"[^>]*data-tag="([^"]+)"[^>]*data-ts="(\d+)"[^>]*data-read-minutes="(\d+)"[^>]*data-search="([^"]+)"/g;

const cards = [];
for (const m of html.matchAll(cardRe)) {
  const search = m[4];
  let title = search;
  let desc = '';
  for (const sep of [
    ' How ',
    ' A practical ',
    ' The ',
    ' What ',
    ' Why ',
    ' When ',
    ' Before ',
    ' Patch ',
    ' Explore ',
    ' An ',
  ]) {
    const p = search.indexOf(sep);
    if (p > 8) {
      title = search.slice(0, p);
      desc = search.slice(p + 1);
      break;
    }
  }
  cards.push({
    tag: m[1],
    ts: Number(m[2]),
    readMinutes: Number(m[3]),
    title,
    desc,
    search,
  });
}

const slugRe = /href="https:\/\/aion2cheats\.org\/blog\/([^"/?]+)\/?"/g;
const slugs = [...new Set([...html.matchAll(slugRe)].map((m) => m[1]))];

const localImgs = [...new Set([...html.matchAll(/AION 2 Guides and Updates _ AION 2 Cheats_files\/(aion2-[^"]+\.webp)/g)].map((m) => m[1]))];

// Pair cards with nearest article link after each card block (fragile but works on saved HTML)
const articleLinks = [...html.matchAll(/href="https:\/\/aion2cheats\.org\/blog\/([^"/?]+)\/?"[^>]*>\s*Read/g)];
const paired = cards.map((c, i) => ({
  ...c,
  slug: articleLinks[i]?.[1] ?? null,
}));

console.log(JSON.stringify({ cardCount: cards.length, slugs, localImgs, paired }, null, 2));
