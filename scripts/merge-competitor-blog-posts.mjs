/**
 * Merge blog listing exported from competitor HTML into src/data/blog/posts.ts.
 * Strips competitor domain references; keeps SEO titles/descriptions.
 *
 * Usage:
 *   node scripts/merge-competitor-blog-posts.mjs "<saved-blog-listing.html>" "<_files folder>"
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const htmlPath = process.argv[2];
const filesDir = process.argv[3];
const root = process.cwd();

if (!htmlPath || !filesDir) {
  console.error(
    'Usage: node scripts/merge-competitor-blog-posts.mjs "<listing.html>" "<listing_files folder>"',
  );
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

/** Curated from saved listing (titles + meta descriptions). */
const IMPORTED = [
  {
    tag: 'Guides',
    title: 'AION 2 cheats: what to review first',
    desc: 'A practical overview of AION 2 cheats on the global PC client, including ESP, flight markers, and plan choices.',
    slug: 'aion-2-cheats-explained',
    imageFile: 'aion2-lab-combat-400.webp',
    readMinutes: 8,
    ts: 1791763200000,
    featured: true,
  },
  {
    tag: 'Features',
    title: 'AION 2 player ESP: faction, class, and distance',
    desc: 'How player ESP presents nearby Daevas with faction, class, level, and distance information.',
    slug: 'aion-2-player-esp-guide',
    imageFile: 'aion2-player-esp-400.webp',
    readMinutes: 6,
    ts: 1791676800000,
  },
  {
    tag: 'Features',
    title: 'AION 2 soft aim options',
    desc: 'What soft aim is listed for, and why it should stay optional after you check status.',
    slug: 'aion-2-soft-aim-guide',
    imageFile: 'aion2-snaplines-400.webp',
    readMinutes: 5,
    ts: 1791590400000,
  },
  {
    tag: 'Features',
    title: 'AION 2 flight markers for aerial combat',
    desc: 'Aerial target ESP, altitude readouts, and sky contested zone highlights for AION 2 flight PvP.',
    slug: 'aion-2-flight-aerial-esp',
    imageFile: 'aion2-flight-view-400.webp',
    readMinutes: 6,
    ts: 1791504000000,
  },
  {
    tag: 'Features',
    title: 'AION 2 radar features',
    desc: 'How 2D radar complements ESP when you need nearby player, boss, and node cues.',
    slug: 'aion-2-radar-system-guide',
    imageFile: 'aion2-radar-map-400.webp',
    readMinutes: 5,
    ts: 1791417600000,
  },
  {
    tag: 'Features',
    title: 'AION 2 gathering node ESP',
    desc: 'Ore, herb, material, and chest markers from the current private Aion 2 suite listing.',
    slug: 'aion-2-gathering-node-esp',
    imageFile: 'aion2-dungeon-quest-400.webp',
    readMinutes: 5,
    ts: 1791331200000,
  },
  {
    tag: 'Features',
    title: 'AION 2 world and boss markers',
    desc: 'NPC, elite, world boss, dungeon, quest, and portal overlays for Atreia.',
    slug: 'aion-2-world-boss-esp',
    imageFile: 'aion2-safehaven-combat-400.webp',
    readMinutes: 6,
    ts: 1791244800000,
  },
  {
    tag: 'Setup',
    title: 'AION 2 cheats PC setup on Windows',
    desc: 'Windows PC requirements, Steam and PURPLE notes, and a conservative first-run configuration.',
    slug: 'aion-2-cheat-setup-guide',
    imageFile: 'aion2-lab-combat-400.webp',
    readMinutes: 7,
    ts: 1791158400000,
  },
  {
    tag: 'Updates',
    title: 'AION 2 anti-cheat and compatibility notes',
    desc: 'What published AION 2 anti-bot measures mean and how to treat status after a patch.',
    slug: 'aion-2-anti-cheat-bypass-explained',
    imageFile: 'aion2-radar-map-400.webp',
    readMinutes: 6,
    ts: 1791072000000,
  },
  {
    tag: 'Guides',
    title: 'AION 2 Cheats monthly vs lifetime plans',
    desc: 'Compare the $35 monthly plan and the $150 lifetime plan before checkout.',
    slug: 'aion-2-monthly-vs-lifetime-plans',
    imageFile: 'aion2-lab-combat-400.webp',
    readMinutes: 4,
    ts: 1790985600000,
  },
  {
    tag: 'Guides',
    title: 'AION 2 classes on the global PC build',
    desc: 'The eight launch classes on the global AION 2 client and how to confirm current gender rules.',
    slug: 'aion-2-classes-global-pc-build',
    imageFile: 'aion2-player-esp-400.webp',
    readMinutes: 6,
    ts: 1790899200000,
  },
  {
    tag: 'Guides',
    title: 'AION 2 gameplay guide: combat, flight, and factions',
    desc: 'A short AION 2 gameplay guide covering aerial combat, factions, and what to review before buying tools.',
    slug: 'aion-2-gameplay-combat-flight-factions',
    imageFile: 'aion2-flight-view-400.webp',
    readMinutes: 7,
    ts: 1790812800000,
  },
  {
    tag: 'Guides',
    title: 'AION 2 release date and global access',
    desc: 'When AION 2 opened globally on Steam and PURPLE, plus what that means for product compatibility.',
    slug: 'aion-2-release-date-global-access',
    imageFile: 'aion2-dungeon-quest-400.webp',
    readMinutes: 5,
    ts: 1790726400000,
  },
  {
    tag: 'Guides',
    title: 'AION 2 North America servers and regions',
    desc: 'North America server location notes for AION 2 and how regional access differs from Korea or Taiwan progress.',
    slug: 'aion-2-north-america-servers',
    imageFile: 'aion2-safehaven-combat-400.webp',
    readMinutes: 5,
    ts: 1790640000000,
  },
];

const DOMAIN_BLOCK = /aion2cheats\.org/gi;

function sanitize(text) {
  return text
    .replace(DOMAIN_BLOCK, 'getaion2cheats.net')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatDate(ts) {
  return new Date(ts).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function metaDescription(title, desc) {
  const d = sanitize(desc);
  return `${title} — ${d} Guides for Windows PC on getaion2cheats.net.`;
}

function bodyFor(entry) {
  const product = '[Aion 2 Private Cheats](/products/aion-2-cheats/)';
  const hwid = '[HWID Spoofer](/products/aion-2-cheats/hwid-spoofer/)';
  const accounts = '[UGC tool](/products/aion-2-cheats/game-accounts/)';
  const skin = '[Skin Changer](/products/aion-2-cheats/skin-changer/)';
  const faq = '[FAQ](/faq/)';
  const intro = sanitize(
    `${entry.desc} This article covers ${entry.title.toLowerCase()} for the global AION 2 PC client on Steam and PURPLE. Check compatibility on getaion2cheats.net before you buy or launch—patch days can change overlay behavior.`,
  );

  return [
    { type: 'p', text: intro },
    { type: 'h2', text: 'Overview and module checklist' },
    {
      type: 'p',
      text: sanitize(
        `Use this guide to understand how the topics in "${entry.title}" fit the private suite on Windows PC. Compare listed modules on ${product} before checkout, then save a conservative profile you can reuse after updates.`,
      ),
    },
    { type: 'h2', text: 'Recommended settings' },
    {
      type: 'ul',
      items: [
        'Cap max ESP distance until nameplates feel clean in crowded zones.',
        'Enable faction filters (Elyos / Asmodian / Balaur) before open-world PvP.',
        'Keep soft aim off until you confirm current status notes for your client build.',
        'Pair 2D radar with player ESP instead of maxing every world marker at once.',
        'Use combat mode to hide world ESP during focused fights.',
      ],
    },
    { type: 'h2', text: 'Related utilities' },
    {
      type: 'p',
      text: `Hardware flags may need ${hwid}. Account restrictions may need ${accounts}. Cosmetic previews use ${skin}. General purchase questions live in the ${faq} page.`,
    },
    { type: 'h2', text: 'Internal links worth reading next' },
    {
      type: 'p',
      text: 'Continue with [Player ESP guide](/blog/aion-2-player-esp-guide/), [Radar system guide](/blog/aion-2-radar-system-guide/), and [Setup guide](/blog/aion-2-cheat-setup-guide/) for a full first-week configuration path.',
    },
    {
      type: 'cta',
      title: 'Review plans and checkout',
      text: 'Compare Monthly and Lifetime access for the private Aion 2 suite, then finish checkout through our secure redirect.',
      href: '/go/aion-2-cheats/',
    },
    { type: 'h2', text: 'Quick FAQ' },
    { type: 'h3', text: 'Which platform is supported?' },
    {
      type: 'p',
      text: 'The listing targets Windows 10 and 11 on the global Steam or PURPLE PC client. Re-check Support notes after major patches.',
    },
    { type: 'h3', text: 'Can I use every module on day one?' },
    {
      type: 'p',
      text: 'Enable fewer toggles first—ESP and radar—then add soft aim or world markers once the HUD stays readable.',
    },
  ];
}

async function writeBlogImages() {
  const blogDir = path.join(root, 'public/images/blog');
  fs.mkdirSync(blogDir, { recursive: true });
  const widths = [320, 400, 512, 640, 960];

  for (const entry of IMPORTED) {
    const srcFile = path.join(filesDir, entry.imageFile);
    if (!fs.existsSync(srcFile)) {
      console.warn('Missing image', srcFile);
      continue;
    }
    const base = path.join(blogDir, entry.slug);
    const pngPath = `${base}.png`;
    await sharp(srcFile).resize(960, 960, { fit: 'inside', withoutEnlargement: true }).png().toFile(pngPath);
    for (const width of widths) {
      await sharp(pngPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 90 })
        .toFile(`${base}-${width}.webp`);
    }
    console.log('images', entry.slug);
  }
}

await writeBlogImages();

const importedPosts = IMPORTED.map((entry) => ({
  tag: entry.tag,
  title: entry.title,
  slug: entry.slug,
  image: `/images/blog/${entry.slug}.png`,
  desc: metaDescription(entry.title, entry.desc),
  date: formatDate(entry.ts),
  readTime: `${entry.readMinutes} min read`,
  featured: Boolean(entry.featured),
  body: bodyFor(entry),
}));

const importedSlugs = new Set(importedPosts.map((p) => p.slug));

// Load existing posts.ts exports via naive extract (keep supplemental articles).
const postsTs = fs.readFileSync(path.join(root, 'src/data/blog/posts.ts'), 'utf8');
const existingMatch = postsTs.match(/export const blogPosts: BlogPostFull\[\] = (\[[\s\S]*?\n\]);/);
if (!existingMatch) {
  console.error('Could not parse existing posts.ts');
  process.exit(1);
}

// eslint-disable-next-line no-eval
const existingPosts = eval(existingMatch[1]);
const supplemental = existingPosts.filter((p) => !importedSlugs.has(p.slug));
const merged = [...importedPosts, ...supplemental.map((p) => ({ ...p, featured: false }))];

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function blockToTs(block) {
  if (block.type === 'ul') {
    const items = block.items.map((x) => `"${esc(x)}"`).join(', ');
    return `{ type: 'ul', items: [${items}] }`;
  }
  if (block.type === 'cta') {
    return `{ type: 'cta', title: "${esc(block.title)}", text: "${esc(block.text)}", href: "${esc(block.href)}" }`;
  }
  return `{ type: '${block.type}', text: "${esc(block.text)}" }`;
}

let ts = `import type { BlogPostFull } from './types';

export const blogPosts: BlogPostFull[] = [
`;
for (const p of merged) {
  ts += `  {
    tag: "${esc(p.tag)}",
    title: "${esc(p.title)}",
    slug: "${esc(p.slug)}",
    image: "${esc(p.image)}",
    desc: "${esc(p.desc)}",
    date: "${esc(p.date)}",
    readTime: "${esc(p.readTime)}",
    featured: ${Boolean(p.featured)},
    body: [
${p.body.map((b) => `      ${blockToTs(b)},`).join('\n')}
    ],
  },
`;
}
ts += `];
`;

fs.writeFileSync(path.join(root, 'src/data/blog/posts.ts'), ts);
console.log(`Wrote ${importedPosts.length} imported + ${supplemental.length} supplemental posts.`);

// Blog index SEO from saved listing meta (no competitor domain).
const listingDesc =
  'Explore AION 2 guides, gameplay tips, class information, game updates, compatibility news, and product-related information.';
const pageSeoPath = path.join(root, 'src/config/pageSeo.ts');
let pageSeo = fs.readFileSync(pageSeoPath, 'utf8');
pageSeo = pageSeo.replace(
  /(\s+'\/blog\/': \{\s+title: ')[^']+(',\s+description:\s+\n\s+')([^']+)(')/,
  `$1AION 2 Guides and Updates | Aion 2 Cheats$2${listingDesc}$4`,
);
fs.writeFileSync(pageSeoPath, pageSeo);

console.log('Updated /blog/ page SEO.');
