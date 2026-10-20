import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const src = process.argv[2];
const out = process.argv[3] ?? path.resolve('public');
const brandLabel = process.argv[4] ?? 'Aion 2 Cheats';

if (!src) {
  console.error('Usage: node scripts/make-favicon.mjs <source.png> [outDir] [ariaLabel]');
  process.exit(1);
}

const meta = await sharp(src).metadata();
console.log('source', meta.width, meta.height, meta.format);

/** Turn near-black pixels transparent (keeps gold emblem edges). */
async function loadTransparentPng() {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const threshold = 42;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= threshold && g <= threshold && b <= threshold) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: { width, height, channels: 4 } }).png();
}

const transparent = await loadTransparentPng();
const transparentBuf = await transparent.clone().toBuffer();

async function png(size) {
  return sharp(transparentBuf)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function webp(size) {
  return sharp(transparentBuf)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 92, alphaQuality: 100 })
    .toBuffer();
}

function pngSize(buf) {
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}

function encodeIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let o = 6;
  let dataOffset = headerSize;
  const parts = [header];

  for (const buf of pngBuffers) {
    const { w, h } = pngSize(buf);
    header.writeUInt8(w >= 256 ? 0 : w, o);
    header.writeUInt8(h >= 256 ? 0 : h, o + 1);
    header.writeUInt8(0, o + 2);
    header.writeUInt8(0, o + 3);
    header.writeUInt16LE(1, o + 4);
    header.writeUInt16LE(32, o + 6);
    header.writeUInt32LE(buf.length, o + 8);
    header.writeUInt32LE(dataOffset, o + 12);
    o += 16;
    dataOffset += buf.length;
    parts.push(buf);
  }

  return Buffer.concat(parts);
}

const files = {
  'favicon-16.png': 16,
  'favicon-32.png': 32,
  'favicon-48.png': 48,
  'favicon-192.png': 192,
  'apple-touch-icon.png': 180,
  'favicon-512.png': 512,
};

for (const [name, size] of Object.entries(files)) {
  const buf = await png(size);
  fs.writeFileSync(path.join(out, name), buf);
  console.log('wrote', name, buf.length);
}

const ico = encodeIco([await png(16), await png(32), await png(48)]);
fs.writeFileSync(path.join(out, 'favicon.ico'), ico);
console.log('wrote favicon.ico', ico.length);

const brandDir = path.join(out, 'images', 'brand');
fs.mkdirSync(brandDir, { recursive: true });

const logo512 = await png(512);
fs.writeFileSync(path.join(brandDir, 'logo.png'), logo512);
fs.writeFileSync(path.join(brandDir, 'logo.webp'), await webp(512));
console.log('wrote images/brand/logo.png + logo.webp');

const png128 = await png(128);
const b64 = png128.toString('base64');
const svg = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="${brandLabel}">`,
  `  <image href="data:image/png;base64,${b64}" width="128" height="128" />`,
  '</svg>',
  '',
].join('\n');

fs.writeFileSync(path.join(out, 'favicon.svg'), svg);
fs.writeFileSync(path.join(out, 'logo.svg'), svg);
console.log('wrote favicon.svg + logo.svg');
