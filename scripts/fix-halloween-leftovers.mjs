import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const dirs = ['src', 'public/robots.txt', 'public/site.webmanifest', 'public/_redirects'];

const REPLACEMENTS = [
  [/PURPLE client/gi, 'Steam PC'],
  [/Steam and PURPLE/gi, 'Steam'],
  [/Steam or PURPLE/gi, 'Steam'],
  [/global Steam or PURPLE/gi, 'Steam'],
  [/getaion2cheats\.net/g, 'gethalloweencheats.com'],
  [/AionMod_/g, 'HWC_Mod_'],
  [/daeva_runner/g, 'haddon_runner'],
  [/daeva_grind/g, 'survivor_main'],
  [/elyos_main/g, 'myers_fan'],
  [/asmodian_alt/g, 'shape_alt'],
  [/purple_rift/g, 'fog_walker'],
  [/Elyos and Asmodian/g, 'Survivor and Myers'],
  [/Elyos, Asmodian, and Balaur/g, 'survivors, Myers, and civilians'],
  [/Elyos \/ Asmodian \/ Balaur/g, 'survivor / Myers / civilian'],
  [/nearby Daevas/g, 'nearby survivors'],
  [/Daevas/g, 'survivors'],
  [/faction filters/gi, 'role filters'],
  [/flight markers/gi, 'stalk markers'],
  [/gathering nodes/gi, 'escape item markers'],
  [/soft aim/gi, 'aim assist'],
  [/aionSystemRequirements/g, 'pcSystemRequirements'],
  [/fix-anti-cheat-hardware-bans-aion-2/g, 'fix-anti-cheat-hardware-bans-halloween'],
  [/\/products\/aion-2-cheats\//g, '/products/halloween-cheats/'],
];

function walk(p, fn) {
  const st = fs.statSync(p);
  if (st.isFile()) return fn(p);
  for (const e of fs.readdirSync(p, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.git' || e.name === 'dist') continue;
    walk(path.join(p, e.name), fn);
  }
}

for (const d of dirs) {
  const full = path.join(root, d);
  if (!fs.existsSync(full)) continue;
  walk(full, (file) => {
    if (!/\.(ts|tsx|astro|mjs|js|json|txt|webmanifest|css|redirects)$/i.test(file) && !file.endsWith('_redirects')) return;
    if (file.includes('fix-halloween-leftovers')) return;
    let t = fs.readFileSync(file, 'utf8');
    let n = t;
    for (const [re, to] of REPLACEMENTS) n = n.replace(re, to);
    if (n !== t) fs.writeFileSync(file, n);
  });
}

// Blog placeholder images
const blogDir = path.join(root, 'public/images/blog');
const seed = path.join(root, 'public/images/gameplay/halloween-player-esp.png');
if (fs.existsSync(seed) && fs.existsSync(blogDir)) {
  const posts = fs.readFileSync(path.join(root, 'src/data/blog/posts.ts'), 'utf8');
  const slugs = [...posts.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
  for (const slug of slugs) {
    const dest = path.join(blogDir, `${slug}.png`);
    if (!fs.existsSync(dest)) fs.copyFileSync(seed, dest);
  }
}

console.log('fix-halloween-leftovers: done');
