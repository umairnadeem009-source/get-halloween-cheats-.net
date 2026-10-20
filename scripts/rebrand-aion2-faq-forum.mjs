/**
 * Rewrites faq.ts and forum.ts for Aion 2 (run once after manual faq structure exists).
 */
import fs from 'node:fs';

const faqPath = 'src/data/faq.ts';
let faq = fs.readFileSync(faqPath, 'utf8');
const faqReplacements = [
  ['Fortnite Elite', 'Aion 2 Private Cheats'],
  ['Lite tier (ESP wallhack & ESP)', 'Private suite (ESP & radar)'],
  ['Pro tier (scripts included)', 'Monthly plan'],
  ['Fortnite products', 'Aion 2 products'],
  ["productPath('elite')", 'PRODUCT_BASE'],
  ["productPath('ugc')", "productPath('game-accounts')"],
  ["productPath('unlock-all')", "productPath('skin-changer')"],
  ['Fortnite cheats', 'Aion 2 cheats'],
  ['fortnite cheats', 'Aion 2 cheats'],
  ['Fortnite', 'Aion 2'],
  ['fortnite-cheats.com', 'getaion2cheats.net'],
  ['Epic Games', 'Steam or PURPLE'],
  ['Easy Anti-Cheat', 'anti-cheat'],
  ['EAC', 'anti-cheat'],
  ['UGC', 'UGC tool'],
  ['Ranked', 'PvP'],
  ['Zero Build', 'open world'],
  ['Battle Royale', 'open world'],
  ["kind === 'tier'", "kind === 'main'"],
];
for (const [from, to] of faqReplacements) {
  faq = faq.split(from).join(to);
}
faq = faq.replace(
  "const elite = link('Aion 2 Private Cheats', PRODUCT_BASE);",
  "import { PRODUCT_BASE } from '../config/site';\nconst elite = link('Aion 2 Private Cheats', PRODUCT_BASE);",
);
if (!faq.includes("import { PRODUCT_BASE }")) {
  faq = faq.replace(
    "import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';",
    "import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';\nimport { PRODUCT_BASE } from '../config/site';",
  );
}
fs.writeFileSync(faqPath, faq);

let forum = fs.readFileSync('src/data/forum.ts', 'utf8');
const forumReplacements = [
  ['Fortnite', 'Aion 2'],
  ['fortnite', 'aion-2'],
  ['fortnite-cheats.com', 'getaion2cheats.net'],
  ['/blog/fortnite-', '/blog/aion-2-'],
  ['/blog/eac-bypass-fortnite-guide/', '/blog/aion-2-anti-cheat-bypass-explained/'],
  ['/blog/how-to-buy-fortnite-cheats-2026/', '/blog/aion-2-cheat-setup-guide/'],
  ['/blog/how-to-use-fortnite-cheat-codes/', '/blog/aion-2-cheat-setup-guide/'],
  ['Easy Anti-Cheat', 'anti-cheat'],
  ['Creative islands', 'Training zones'],
  ['Ranked', 'PvP'],
];
for (const [from, to] of forumReplacements) {
  forum = forum.split(from).join(to);
}
fs.writeFileSync('src/data/forum.ts', forum);
console.log('Updated faq.ts and forum.ts');
