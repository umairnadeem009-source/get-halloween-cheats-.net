/**
 * Replace blog + gameplay + product raster assets from user screenshots in assets/.
 * Keeps public/images/brand/ (logo/favicon) untouched.
 *
 * Run: node scripts/apply-user-screenshots.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const widths = [320, 400, 512, 640, 960];

const assetsDir = path.join(root, 'assets');
const assetFiles = fs
  .readdirSync(assetsDir)
  .filter((n) => /^XertrickPro.*\.png$/i.test(n))
  .sort()
  .map((n) => path.join(assetsDir, n));

if (assetFiles.length < 1) {
  console.error('No XertrickPro*.png files in assets/');
  process.exit(1);
}

console.log(`Using ${assetFiles.length} screenshot(s) from assets/`);

const GAMEPLAY_BASES = [
  'halloween-player-esp',
  'halloween-aimbot-combat',
  'halloween-radar-hack',
  'halloween-skin-changer',
  'halloween-auto-aim',
  'halloween-loot-radar',
  'halloween-thermal-esp',
  'halloween-build-fight-esp',
  'halloween-arena-wallhack',
  'halloween-spawn-island-esp',
  'halloween-long-range-esp',
  'halloween-chams-esp',
  'halloween-combat-esp',
];

const PRODUCT_EXPORTS = [
  { rel: 'products/skin-changer/skin-changer-emblem', index: 3 },
  { rel: 'products/game-accounts/ugc-tool-icon', index: 1 },
  { rel: 'products/hwid-spoofer/hwid-spoofer-icon', index: 5 },
  { rel: 'products/hwid-spoofer/phoenix-satano-chip', index: 6 },
  { rel: 'products/hwid-spoofer/phoenix-wh-satano-brand', index: 7 },
];

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
  return [...new Set([...postsTs.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]))];
}

function pickSource(index) {
  return assetFiles[index % assetFiles.length];
}

clearRasterDir('public/images/blog');
clearRasterDir('public/images/gameplay');
clearRasterDir('public/images/products');

for (let i = 0; i < GAMEPLAY_BASES.length; i++) {
  const base = GAMEPLAY_BASES[i];
  const outBase = path.join(root, 'public/images/gameplay', base);
  await writePngAndWebps(outBase, pickSource(i));
  console.log('gameplay', base, '<-', path.basename(pickSource(i)));
}

const slugs = extractBlogSlugs();
for (let i = 0; i < slugs.length; i++) {
  const outBase = path.join(root, 'public/images/blog', slugs[i]);
  await writePngAndWebps(outBase, pickSource(i));
  console.log('blog', slugs[i]);
}

for (const { rel, index } of PRODUCT_EXPORTS) {
  const outBase = path.join(root, 'public/images', rel);
  fs.mkdirSync(path.dirname(outBase), { recursive: true });
  await writePngAndWebps(outBase, pickSource(index));
  console.log('product', rel);
}

console.log(`Done: ${GAMEPLAY_BASES.length} gameplay + ${slugs.length} blog + ${PRODUCT_EXPORTS.length} product images.`);
