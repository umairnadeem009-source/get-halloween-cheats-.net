/**
 * Bulk rebrand Aion template → Halloween: The Game (gethalloweencheats.com).
 * Run from repo root: node scripts/rebrand-halloween.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const TEXT_EXTS = new Set(['.ts', '.tsx', '.astro', '.mjs', '.js', '.json', '.md', '.txt', '.css', '.webmanifest', '.toml']);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro', '.seo-baseline']);
const SKIP_FILES = new Set([
  'rebrand-halloween.mjs',
  'rebrand-aion2.mjs',
  'rebrand-fortnite.mjs',
  'generate-aion2-posts.mjs',
  '.competitor-blog-parsed.json',
]);

const REPLACEMENTS = [
  ['getaion2cheats.net', 'gethalloweencheats.com'],
  ['getaion2cheats-net', 'gethalloweencheats-com'],
  ["checkoutPath('aion2Cheats')", "checkoutPath('halloweenCheats')"],
  ['checkoutPath("aion2Cheats")', 'checkoutPath("halloweenCheats")'],
  ['aion2Cheats', 'halloweenCheats'],
  ['/go/aion-2-cheats/', '/go/halloween-cheats/'],
  ['/go/aion-2-cheats', '/go/halloween-cheats'],
  ['/products/aion-2-cheats/', '/products/halloween-cheats/'],
  ['/products/aion-2-cheats', '/products/halloween-cheats'],
  ['aion-2-cheats', 'halloween-cheats'],
  ['Aion 2 Cheats', 'Halloween Cheats'],
  ['Aion 2 Private Cheats', 'Halloween Private Cheats'],
  ['Aion 2 private cheats', 'Halloween private cheats'],
  ['Aion 2 cheats', 'Halloween cheats'],
  ['Aion 2 Cheats', 'Halloween Cheats'],
  ['Aion 2', 'Halloween: The Game'],
  ['AION 2', 'Halloween: The Game'],
  ['%2Faion-2-cheats', '%2Fhalloween-cheats'],
  ['/blog/aion-2-', '/blog/halloween-'],
  ['aion-2-', 'halloween-'],
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
  const base = path.basename(file);
  if (SKIP_FILES.has(base)) return;
  const ext = path.extname(file);
  if (!TEXT_EXTS.has(ext)) return;
  if (file.includes(`${path.sep}template-upstream`)) return;
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [from, to] of REPLACEMENTS) next = next.split(from).join(to);
  if (next !== text) {
    fs.writeFileSync(file, next);
    files += 1;
  }
});

console.log(`rebrand-halloween: updated ${files} file(s).`);
