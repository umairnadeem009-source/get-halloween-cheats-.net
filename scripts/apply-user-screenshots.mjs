import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assetsDir =
  process.env.USER_SCREENSHOTS_DIR ??
  path.join(
    process.env.USERPROFILE ?? '',
    '.cursor',
    'projects',
    'c-Users-iamanigger-Desktop-website-get-halloween-cheats-net',
    'assets',
  );

const sources = [
  'Astro_Commander_-_Infinit_Police_Reinforcement_Che-5c4a728d-6944-42e5-928a-d2c568c95622.png',
  'Astro_Commander_-_Infinit_Police_Reinforcement_Che-373035ec-2fa6-4068-91ca-dcb1244707c7.png',
  'Astro_Commander_-_Infinit_Police_Reinforcement_Che-77467a38-8dc6-4912-a55e-df5c4b4033d5.jpg',
  'Astro_Commander_-_Infinit_Police_Reinforcement_Che-c2ee07bc-4846-4a5f-918c-2f3c0790e09f.png',
  'Astro_Commander_-_Infinit_Police_Reinforcement_Che-a8e9ffa8-9b69-4ccd-b061-b870c5c2c281.png',
  'Astro_Commander_-_Infinit_Police_Reinforcement_Che-c201f69d-d20a-4c42-896b-7c054c77552c.png',
  'Astro_Commander_-_Infinit_Police_Reinforcement_Che-909b49b7-73ed-4b9f-a438-650ca09b659d.png',
  'Astro_Commander_-_Infinit_Police_Reinforcement_Che-9899afa0-cee5-4e7f-87b1-41f4cb9e1465.png',
  'Astro_Commander_-_Infinit_Police_Reinforcement_Che-4e823c35-0f7d-4579-b19f-2bb91268f1d0.png',
  'Astro_Commander_-_Infinit_Police_Reinforcement_Che-241ecc03-10b3-489d-9eb2-7f16e03ea313.png',
];

const gameplayTargets = [
  'halloween-player-esp.png',
  'halloween-aimbot-combat.png',
  'halloween-radar-hack.png',
  'halloween-auto-aim.png',
  'halloween-loot-radar.png',
  'halloween-thermal-esp.png',
  'halloween-arena-wallhack.png',
  'halloween-spawn-island-esp.png',
  'halloween-long-range-esp.png',
  'halloween-combat-esp.png',
];

function clearDir(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return;
  }
  for (const entry of fs.readdirSync(dir)) {
    fs.unlinkSync(path.join(dir, entry));
  }
}

async function writePng(fromFile, toFile) {
  await sharp(fromFile).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(toFile);
}

async function main() {
  for (const name of sources) {
    const full = path.join(assetsDir, name);
    if (!fs.existsSync(full)) {
      throw new Error(`Missing screenshot: ${full}`);
    }
  }

  clearDir('public/images/gameplay');
  clearDir('public/images/blog');

  const gameplayDir = path.join(root, 'public/images/gameplay');
  for (let i = 0; i < gameplayTargets.length; i++) {
    const from = path.join(assetsDir, sources[i]);
    const to = path.join(gameplayDir, gameplayTargets[i]);
    await writePng(from, to);
    console.log(`Gameplay: ${gameplayTargets[i]}`);
  }

  const postsPath = path.join(root, 'src/data/blog/posts.ts');
  const postText = fs.readFileSync(postsPath, 'utf8');
  const blogNames = [...postText.matchAll(/\/images\/blog\/([^"]+\.png)/g)].map((m) => m[1]);
  const uniqueBlog = [...new Set(blogNames)];

  const blogDir = path.join(root, 'public/images/blog');
  for (let i = 0; i < uniqueBlog.length; i++) {
    const from = path.join(assetsDir, sources[i % sources.length]);
    const to = path.join(blogDir, uniqueBlog[i]);
    await writePng(from, to);
    console.log(`Blog: ${uniqueBlog[i]}`);
  }

  for (const legacy of ['public/images/hero-aion2-dark.jpg', 'public/images/hero-aion2-dark.webp']) {
    const full = path.join(root, legacy);
    if (fs.existsSync(full)) fs.unlinkSync(full);
  }

  console.log(`Done — ${gameplayTargets.length} gameplay + ${uniqueBlog.length} blog PNGs.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
