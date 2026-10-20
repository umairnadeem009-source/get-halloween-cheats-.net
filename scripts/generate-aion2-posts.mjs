/**
 * Generates src/data/blog/posts.ts with 30 Aion 2 articles.
 * Run: node scripts/generate-aion2-posts.mjs
 */
import fs from 'node:fs';

const topics = [
  { slug: 'aion-2-cheats-explained', title: 'Aion 2 Cheats Explained', tag: 'Guides', intent: 'overview' },
  { slug: 'best-aion-2-cheat-features', title: 'Best Aion 2 Cheat Features', tag: 'Features', intent: 'features' },
  { slug: 'aion-2-esp-explained', title: 'Aion 2 ESP Explained', tag: 'Features', intent: 'esp' },
  { slug: 'aion-2-player-esp-guide', title: 'Aion 2 Player ESP Guide', tag: 'Guides', intent: 'player-esp' },
  { slug: 'aion-2-enemy-esp-guide', title: 'Aion 2 Enemy ESP Guide', tag: 'Guides', intent: 'enemy-esp' },
  { slug: 'aion-2-faction-esp-guide', title: 'Aion 2 Faction ESP Guide (Elyos vs Asmodian)', tag: 'Guides', intent: 'faction' },
  { slug: 'aion-2-gathering-node-esp', title: 'Aion 2 Gathering Node & Resource ESP', tag: 'Features', intent: 'nodes' },
  { slug: 'aion-2-world-boss-esp', title: 'Aion 2 World Boss ESP Explained', tag: 'Features', intent: 'bosses' },
  { slug: 'aion-2-flight-aerial-esp', title: 'Aion 2 Flight & Aerial Target ESP', tag: 'Features', intent: 'flight' },
  { slug: 'aion-2-radar-system-guide', title: 'Aion 2 Radar System Guide', tag: 'Guides', intent: 'radar' },
  { slug: 'aion-2-map-reveal-explained', title: 'Aion 2 Full Map Reveal Explained', tag: 'Features', intent: 'map' },
  { slug: 'aion-2-soft-aim-guide', title: 'Aion 2 Soft Aim & Aim Assist Guide', tag: 'Guides', intent: 'aim' },
  { slug: 'aion-2-visible-check-bone-selection', title: 'Aion 2 Visible Check & Bone Selection', tag: 'Guides', intent: 'aim-tech' },
  { slug: 'aion-2-hwid-spoofer-guide', title: 'Aion 2 HWID Spoofer Guide for PC Bans', tag: 'Setup', intent: 'hwid' },
  { slug: 'fix-anti-cheat-hardware-bans-aion-2', title: 'How to Fix Anti-Cheat Hardware Bans in Aion 2', tag: 'Setup', intent: 'hwid-fix' },
  { slug: 'aion-2-game-accounts-recovery', title: 'Aion 2 UGC Tool Recovery & Security', tag: 'Setup', intent: 'accounts' },
  { slug: 'aion-2-skin-changer-guide', title: 'Aion 2 Skin Changer & Custom Cosmetics Guide', tag: 'Guides', intent: 'skin' },
  { slug: 'aion-2-stream-proof-overlay', title: 'Aion 2 Stream-Proof Overlay Explained', tag: 'Features', intent: 'stream' },
  { slug: 'aion-2-movement-flight-speed', title: 'Aion 2 Movement & Flight Speed Hacks', tag: 'Features', intent: 'movement' },
  { slug: 'aion-2-pve-dungeon-portal-esp', title: 'Aion 2 PvE Dungeons & Portal ESP', tag: 'Guides', intent: 'pve' },
  { slug: 'aion-2-combat-mode-hide-world-esp', title: 'Aion 2 Combat Mode & Hide World ESP', tag: 'Features', intent: 'combat-mode' },
  { slug: 'aion-2-cheat-feature-comparison', title: 'Aion 2 Cheat Feature Comparison', tag: 'Guides', intent: 'compare' },
  { slug: 'aion-2-cheats-for-pc', title: 'Aion 2 Cheats for PC', tag: 'Guides', intent: 'pc' },
  { slug: 'aion-2-cheats-faq', title: 'Aion 2 Cheats FAQ', tag: 'FAQ', intent: 'faq' },
  { slug: 'aion-2-cheat-setup-guide', title: 'Aion 2 Cheat Setup Guide', tag: 'Setup', intent: 'setup' },
  { slug: 'aion-2-cheat-troubleshooting', title: 'Aion 2 Cheat Troubleshooting Guide', tag: 'Setup', intent: 'troubleshoot' },
  { slug: 'aion-2-anti-cheat-bypass-explained', title: 'Aion 2 Anti-Cheat Bypass Mechanics Explained', tag: 'Guides', intent: 'anticheat' },
  { slug: 'aion-2-botting-vs-private-cheats', title: 'Aion 2 Botting vs Private Cheats', tag: 'Guides', intent: 'botting' },
  { slug: 'aion-2-class-job-esp-optimization', title: 'Aion 2 Class & Job ESP Optimization', tag: 'Guides', intent: 'class' },
  { slug: 'aion-2-safe-configuration-guide', title: 'Aion 2 Safe Configuration & Preset Sharing Guide', tag: 'Setup', intent: 'config' },
];

const dates = [
  'Oct 20, 2026', 'Oct 19, 2026', 'Oct 18, 2026', 'Oct 17, 2026', 'Oct 16, 2026',
  'Oct 15, 2026', 'Oct 14, 2026', 'Oct 13, 2026', 'Oct 12, 2026', 'Oct 11, 2026',
  'Oct 10, 2026', 'Oct 9, 2026', 'Oct 8, 2026', 'Oct 7, 2026', 'Oct 6, 2026',
  'Oct 5, 2026', 'Oct 4, 2026', 'Oct 3, 2026', 'Oct 2, 2026', 'Oct 1, 2026',
  'Sep 30, 2026', 'Sep 29, 2026', 'Sep 28, 2026', 'Sep 27, 2026', 'Sep 26, 2026',
  'Sep 25, 2026', 'Sep 24, 2026', 'Sep 23, 2026', 'Sep 22, 2026', 'Sep 21, 2026',
];

function bodyFor(t) {
  const product = '[Aion 2 Private Cheats](/products/aion-2-cheats/)';
  const hwid = '[HWID Spoofer](/products/aion-2-cheats/hwid-spoofer/)';
  const accounts = '[UGC tool](/products/aion-2-cheats/game-accounts/)';
  const skin = '[Skin Changer](/products/aion-2-cheats/skin-changer/)';
  const faq = '[FAQ](/faq/)';
  const ctaHref = '/go/aion-2-cheats/';
  const intro = `This guide covers ${t.title.toLowerCase()} for the global Aion 2 PC client on Steam and PURPLE. Read compatibility notes on getaion2cheats.net before you buy or launch—patch days can change overlay behavior.`;
  return [
    { type: 'p', text: intro },
    { type: 'h2', text: 'What this module does in Aion 2' },
    {
      type: 'p',
      text: `Private overlays focus on readable ESP, flight markers, gathering nodes, and optional soft aim—not unverified farming bots. Compare listed modules on ${product} before checkout, then save a conservative profile you can reuse after updates.`,
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
      href: ctaHref,
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

const posts = topics.map((t, i) => ({
  tag: t.tag,
  title: t.title,
  slug: t.slug,
  image: `/images/blog/${t.slug}.png`,
  desc: `${t.title} for Windows PC: settings, risks, and links to the private Aion 2 cheat suite on getaion2cheats.net.`,
  date: dates[i],
  readTime: `${10 + (i % 6)} min read`,
  featured: i < 6,
  body: bodyFor(t),
}));

const out = `import type { BlogPostFull } from './types';

export const blogPosts: BlogPostFull[] = ${JSON.stringify(posts, null, 2)
  .replace(/"type":/g, 'type:')
  .replace(/"text":/g, 'text:')
  .replace(/"items":/g, 'items:')
  .replace(/"title":/g, 'title:')
  .replace(/"href":/g, 'href:')
  .replace(/"headers":/g, 'headers:')
  .replace(/"rows":/g, 'rows:')
  .replace(/"tag":/g, 'tag:')
  .replace(/"slug":/g, 'slug:')
  .replace(/"image":/g, 'image:')
  .replace(/"desc":/g, 'desc:')
  .replace(/"date":/g, 'date:')
  .replace(/"readTime":/g, 'readTime:')
  .replace(/"featured":/g, 'featured:')
  .replace(/"body":/g, 'body:')
  .replace(/"(\w+)":/g, '$1:')};
`;

// Fix JSON.stringify breaking - use manual format instead
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
for (const p of posts) {
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

fs.writeFileSync('src/data/blog/posts.ts', ts);
console.log(`Wrote ${posts.length} posts to src/data/blog/posts.ts`);
