import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const widths = [320, 400, 512, 640, 960];
const dirs = ['public/images/gameplay', 'public/images/blog', 'public/images/products'];

async function optimizePng(input) {
  const dir = path.dirname(input);
  const base = path.basename(input).replace(/\.png$/i, '');

  for (const width of widths) {
    const output = path.join(dir, `${base}-${width}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 90, effort: 5, smartSubsample: true })
      .toFile(output);
    console.log(`Wrote ${path.relative(root, output)}`);
  }
}

function walkPngs(relativeDir, onFile) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkPngs(path.relative(root, full), onFile);
      continue;
    }
    if (!/\.png$/i.test(entry.name) || /-\d+\.webp$/i.test(entry.name)) continue;
    onFile(full);
  }
}

async function optimizeDir(relativeDir) {
  const pending = [];
  walkPngs(relativeDir, (file) => pending.push(file));
  for (const input of pending) {
    await optimizePng(input);
  }
}

for (const dir of dirs) {
  await optimizeDir(dir);
}

console.log('Image optimization complete.');
