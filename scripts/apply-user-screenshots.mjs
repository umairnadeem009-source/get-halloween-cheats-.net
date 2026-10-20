/**
 * Replace all blog + gameplay raster assets from scripts/image-sources/ (11 files).
 * Deletes previous PNG/WebP/JPEG in those folders; keeps brand/ untouched.
 *
 * Run: node scripts/apply-user-screenshots.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const sourceDir = path.join(root, 'scripts/image-sources');
const widths = [320, 400, 512, 640, 960];

const SOURCE_FILES = {
  gather: '01-gather.png',
  gatherFlight: '02-gather-flight.png',
  grind: '03-grind.jpg',
  grindCombat: '04-grind-combat.jpg',
  grindUi: '05-grind-ui.jpg',
  safehavenCombat: '06-safehaven-combat.png',
  cohta: '07-cohta-dungeon.png',
  safehavenFlight: '08-safehaven-flight.png',
  bioLab: '09-bio-lab.png',
  safehavenSkills: '10-safehaven-skills.png',
  bossMap: '11-boss-map.png',
};

const GAMEPLAY_TARGETS = {
  'aion-2-player-esp': 'bossMap',
  'aion-2-aimbot-combat': 'safehavenSkills',
  'aion-2-radar-hack': 'bossMap',
  'aion-2-skin-changer': 'safehavenCombat',
  'aion-2-auto-aim': 'safehavenSkills',
  'aion-2-loot-radar': 'gather',
  'aion-2-thermal-esp': 'bossMap',
  'aion-2-build-fight-esp': 'safehavenFlight',
  'aion-2-arena-wallhack': 'cohta',
  'aion-2-spawn-island-esp': 'bioLab',
  'aion-2-long-range-esp': 'gatherFlight',
  'aion-2-chams-esp': 'grindCombat',
  'aion-2-combat-esp': 'bioLab',
};

/** Cycle order for blog card / article heroes. */
const BLOG_CYCLE = [
  'gather',
  'gatherFlight',
  'grind',
  'grindCombat',
  'grindUi',
  'safehavenCombat',
  'cohta',
  'safehavenFlight',
  'bioLab',
  'safehavenSkills',
  'bossMap',
];

function sourcePath(key) {
  const file = SOURCE_FILES[key];
  const full = path.join(sourceDir, file);
  if (!fs.existsSync(full)) {
    throw new Error(`Missing source image: ${full}`);
  }
  return full;
}

function clearRasterDir(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  for (const name of fs.readdirSync(dir)) {
    if (/\.(png|jpe?g|webp)$/i.test(name)) {
      fs.unlinkSync(path.join(dir, name));
    }
  }
}

async function writePngAndWebps(outBase, fromFile) {
  const pngPath = `${outBase}.png`;
  await sharp(fromFile)
    .rotate()
    .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 8 })
    .toFile(pngPath);
  for (const width of widths) {
    await sharp(pngPath)
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 90, effort: 5, smartSubsample: true })
      .toFile(`${outBase}-${width}.webp`);
  }
  return pngPath;
}

function extractBlogSlugs() {
  const postsTs = fs.readFileSync(path.join(root, 'src/data/blog/posts.ts'), 'utf8');
  const slugs = [...postsTs.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  return [...new Set(slugs)];
}

clearRasterDir('public/images/blog');
clearRasterDir('public/images/gameplay');

for (const [base, key] of Object.entries(GAMEPLAY_TARGETS)) {
  const outBase = path.join(root, 'public/images/gameplay', base);
  await writePngAndWebps(outBase, sourcePath(key));
  console.log('gameplay', base);
}

const slugs = extractBlogSlugs();
for (let i = 0; i < slugs.length; i++) {
  const key = BLOG_CYCLE[i % BLOG_CYCLE.length];
  const outBase = path.join(root, 'public/images/blog', slugs[i]);
  await writePngAndWebps(outBase, sourcePath(key));
  console.log('blog', slugs[i], '<-', key);
}

console.log(`Done: ${Object.keys(GAMEPLAY_TARGETS).length} gameplay + ${slugs.length} blog images.`);
