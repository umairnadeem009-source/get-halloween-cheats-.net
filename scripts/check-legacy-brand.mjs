import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

/** Scan user-facing source only (not dev rebrand scripts or redirect targets). */
const SCAN_DIRS = ['src', path.join('public', 'robots.txt'), path.join('public', 'site.webmanifest')];

const SKIP_PATH_PARTS = [
  `${path.sep}scripts${path.sep}`,
  'sitemap.ts',
  'check-legacy-brand.mjs',
  'seo-audit.mjs',
  'finalize-sitemap.mjs',
];

const ALLOWLIST_FILE_SUFFIX = ['types.ts', 'registry.ts', 'sectionIcons.ts'];

const FORBIDDEN = [
  { pattern: /\bfortnite\b/i, label: 'fortnite' },
  { pattern: /\bvalheim\b/i, label: 'valheim' },
  { pattern: /\bzadeyo\b/i, label: 'zadeyo' },
  { pattern: /\baion\b/i, label: 'aion' },
  { pattern: /getaion2cheats/i, label: 'getaion2cheats' },
  { pattern: /\bdota-2-cheats\b/i, label: 'dota-2-cheats' },
  { pattern: /fortnite-cheats\.com/i, label: 'fortnite-cheats.com' },
  { pattern: /dotacheats\.com/i, label: 'dotacheats.com' },
  { pattern: /\bEpic Games\b/i, label: 'Epic Games' },
  { pattern: /\bEpic account\b/i, label: 'Epic account' },
  { pattern: /\bEpic locker\b/i, label: 'Epic locker' },
  { pattern: /\bCreative island\b/i, label: 'Creative island' },
  { pattern: /\bstorm circle\b/i, label: 'storm circle' },
  { pattern: /\bbattle royale\b/i, label: 'battle royale' },
  { pattern: /\bLite vs Pro\b/i, label: 'Lite vs Pro' },
  { pattern: /\bElite tier\b/i, label: 'Elite tier' },
  { pattern: /\bPURPLE client\b/i, label: 'PURPLE client' },
  { pattern: /\bElyos\b/i, label: 'Elyos' },
  { pattern: /\bAsmodian\b/i, label: 'Asmodian' },
  { pattern: /\bDaeva\b/i, label: 'Daeva' },
  { pattern: /\bBalaur\b/i, label: 'Balaur' },
];

function shouldSkip(file) {
  const rel = path.relative(root, file);
  if (SKIP_PATH_PARTS.some((part) => rel.includes(part.replace(/\//g, path.sep)))) return true;
  if (ALLOWLIST_FILE_SUFFIX.some((suffix) => rel.endsWith(suffix))) return true;
  if (rel.includes(`${path.sep}config${path.sep}sitemap.ts`)) return true;
  return false;
}

function collectFiles(target) {
  const full = path.join(root, target);
  if (!fs.existsSync(full)) return [];
  const stat = fs.statSync(full);
  if (stat.isFile()) return [full];
  const out = [];
  for (const entry of fs.readdirSync(full, { withFileTypes: true })) {
    const p = path.join(full, entry.name);
    if (entry.isDirectory()) out.push(...collectFiles(path.relative(root, p)));
    else if (/\.(astro|ts|tsx|js|mjs|css|json|txt|webmanifest|svg)$/i.test(entry.name)) out.push(p);
  }
  return out;
}

const hits = [];
for (const dir of SCAN_DIRS) {
  for (const file of collectFiles(dir)) {
    if (shouldSkip(file)) continue;
    const text = fs.readFileSync(file, 'utf8');
    for (const rule of FORBIDDEN) {
      if (rule.pattern.test(text)) {
        hits.push({ file: path.relative(root, file), rule: rule.label });
      }
    }
  }
}

if (hits.length) {
  console.error('Legacy brand scan failed:');
  for (const hit of hits) {
    console.error(`  ${hit.file}: contains "${hit.rule}"`);
  }
  process.exit(1);
}

console.log('Legacy brand scan passed (src + public metadata).');
