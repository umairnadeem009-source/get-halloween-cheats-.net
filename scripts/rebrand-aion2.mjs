/**
 * Bulk domain/path replacements for future template syncs.
 * Primary Aion 2 rebrand is complete in source; run after merging template-upstream.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const TEXT_EXTS = new Set(['.ts', '.tsx', '.astro', '.mjs', '.js', '.json', '.md', '.txt', '.css', '.webmanifest']);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.seo-baseline']);

const REPLACEMENTS = [
  ['fortnite-cheats.com', 'getaion2cheats.net'],
  ['Fortnite Cheats', 'Aion 2 Cheats'],
  ['/products/fortnite-cheats/', '/products/aion-2-cheats/'],
  ["checkoutPath('fortnite')", "checkoutPath('aion2Cheats')"],
  ['/go/fortnite/', '/go/aion-2-cheats/'],
];

function walk(dir, fn) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, fn);
    else fn(full);
  }
}

let files = 0;
walk(root, (file) => {
  const ext = path.extname(file);
  if (!TEXT_EXTS.has(ext)) return;
  if (file.includes('rebrand-fortnite.mjs') || file.includes('rebrand-aion2.mjs')) return;
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [from, to] of REPLACEMENTS) next = next.split(from).join(to);
  if (next !== text) {
    fs.writeFileSync(file, next);
    files += 1;
  }
});

console.log(`rebrand-aion2: updated ${files} file(s).`);
