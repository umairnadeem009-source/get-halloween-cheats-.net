import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_BASE, PRODUCTS_HUB } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'main' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const MAIN_PRODUCT_SLUG = 'main';

export const productRelatedBlogSlugs: Record<string, string[]> = {
  main: [
    'aion-2-cheats-explained',
    'aion-2-player-esp-guide',
    'aion-2-soft-aim-guide',
    'aion-2-cheat-setup-guide',
  ],
  'hwid-spoofer': [
    'aion-2-hwid-spoofer-guide',
    'fix-anti-cheat-hardware-bans-aion-2',
    'aion-2-anti-cheat-bypass-explained',
    'aion-2-cheat-troubleshooting',
  ],
  'game-accounts': [
    'aion-2-game-accounts-recovery',
    'aion-2-cheats-faq',
    'aion-2-cheat-setup-guide',
  ],
  'skin-changer': [
    'aion-2-skin-changer-guide',
    'aion-2-stream-proof-overlay',
    'aion-2-safe-configuration-guide',
  ],
};

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check compatibility',
    desc: 'Review current status notes on getaion2cheats.net and Support before purchase—especially after an Aion 2 client patch.',
  },
  {
    num: '02',
    title: 'Choose a plan or utility',
    desc: 'Pick Monthly or Lifetime for the private suite, or open HWID Spoofer, UGC tool, or Skin Changer if that matches your goal.',
  },
  {
    num: '03',
    title: 'Complete checkout',
    desc: 'Finish checkout through our secure redirect. Keep your order email for portal access and setup notes.',
  },
  {
    num: '04',
    title: 'Configure and save a profile',
    desc: 'Enable only the ESP, radar, and aim options you can read clearly. Save configs before flying into contested zones or PvP.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Aion 2 and anti-cheat systems receive frequent updates. Confirm module availability before you purchase or launch. Overlay behavior may differ in cinematics, instances, and spectator views after patches.';

const sharedLimitations =
  'Third-party software can conflict with published anti-bot measures and may lead to account action. You use this software at your own risk. Compatibility can change after game, anti-cheat, or Windows updates without notice.';

const aionSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access for loader setup.' },
  { icon: 'reqEpic', text: 'Global Aion 2 on PC through Steam or PURPLE with current patches applied.' },
  { icon: 'reqSettings', text: 'Intel or AMD CPU and GPU that meet the game’s published requirements.' },
  { icon: 'reqWifi', text: 'Stable internet for portal access, updates, and config sync.' },
  { icon: 'reqCpu', text: 'Optional Cloud DMA or AWS paths may be listed for full functionality—confirm in checkout notes.' },
];

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpHeroEsp: {
    src: `${gameplay}/aion-2-player-esp.png`,
    alt: 'Aion 2 player ESP overlay with faction-colored nameplates, class tags, and distance readouts',
    caption: 'Player ESP',
    captionDesc: 'Faction, class, level, and distance on nearby Daevas.',
  },
  gpScripts: {
    src: `${gameplay}/aion-2-aimbot-combat.png`,
    alt: 'Aion 2 soft aim overlay with FOV circle and skeleton ESP during aerial combat',
    caption: 'Soft aim',
    captionDesc: 'Optional aim assist with visible check and bone selection.',
  },
  gpZoomHack: {
    src: `${gameplay}/aion-2-radar-hack.png`,
    alt: 'Aion 2 2D radar beside ESP showing bosses, nodes, and faction markers',
    caption: '2D radar',
    captionDesc: 'Local awareness next to ESP without covering the whole screen.',
  },
  gpSkinChanger: {
    src: `${gameplay}/aion-2-skin-changer.png`,
    alt: 'Aion 2 cosmetic preview interface with outfit and weapon skin slots',
    caption: 'Cosmetics',
    captionDesc: 'Preview supported skins before applying loadouts.',
  },
  gpAutoKill: {
    src: `${gameplay}/aion-2-auto-aim.png`,
    alt: 'Aion 2 aim assist reticle with target line and head bone highlight',
    caption: 'Aim assist',
    captionDesc: 'Draw FOV, target line, and max aim distance controls.',
  },
  gpFarmBot: {
    src: `${gameplay}/aion-2-loot-radar.png`,
    alt: 'Aion 2 gathering node ESP highlighting ore, herbs, and chest markers',
    caption: 'Node ESP',
    captionDesc: 'Ore, herb, and material filters with distance caps.',
  },
  gpThermal: {
    src: `${gameplay}/aion-2-thermal-esp.png`,
    alt: 'Aion 2 world boss ESP with elite mob markers and health bars',
    caption: 'World ESP',
    captionDesc: 'World and dungeon boss markers with quest objective cues.',
  },
  gpBuildFight: {
    src: `${gameplay}/aion-2-build-fight-esp.png`,
    alt: 'Aion 2 flight ESP showing aerial targets, altitude, and wing state',
    caption: 'Flight ESP',
    captionDesc: 'Aerial targets, glide state, and sky zone highlights.',
  },
  gpArena: {
    src: `${gameplay}/aion-2-arena-wallhack.png`,
    alt: 'Aion 2 PvP ESP with Elyos and Asmodian faction filters in open world',
    caption: 'Faction ESP',
    captionDesc: 'Elyos, Asmodian, and Balaur filters with party ignore rules.',
  },
  gpSpawn: {
    src: `${gameplay}/aion-2-spawn-island-esp.png`,
    alt: 'Aion 2 portal and instance entrance markers with distance readouts',
    caption: 'Portal ESP',
    captionDesc: 'Instance entrances and portal markers for PvE routing.',
  },
  gpLongRange: {
    src: `${gameplay}/aion-2-long-range-esp.png`,
    alt: 'Aion 2 long-range ESP with view direction arrows and out-of-screen indicators',
    caption: 'Long range ESP',
    captionDesc: 'Max ESP distance, view direction, and off-screen arrows.',
  },
  gpChams: {
    src: `${gameplay}/aion-2-chams-esp.png`,
    alt: 'Aion 2 overlay combat mode hiding world ESP while keeping player readouts',
    caption: 'Combat mode',
    captionDesc: 'Hide world ESP during fights while keeping combat readouts.',
  },
  gpCombat: {
    src: `${gameplay}/aion-2-combat-esp.png`,
    alt: 'Aion 2 combat overlay with stream-proof HUD and custom crosshair',
    caption: 'Overlay options',
    captionDesc: 'Stream-proof overlay, custom crosshair, and color sets.',
  },
};

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return { src: item.src, alt: item.alt, caption: item.caption, captionDesc: item.captionDesc };
  });
}

const skinChangerProductImages: ProductSlide[] = [
  {
    src: '/images/products/skin-changer/skin-changer-emblem.png',
    alt: 'Skin Changer emblem with shield, stars, and crossed weapons',
    caption: 'Skin Changer',
    captionDesc: 'Skin library, live preview, loadout manager, and restore tools for supported cosmetics.',
  },
];

const ugcToolProductImages: ProductSlide[] = [
  {
    src: '/images/products/game-accounts/ugc-tool-icon.png',
    alt: 'Red gear and clock icon representing the Aion 2 UGC tool utility',
    caption: 'UGC tool',
    captionDesc: 'Restriction detection, live status checks, and supported recovery workflows.',
  },
];

const hwidSpooferProductImages: ProductSlide[] = [
  {
    src: '/images/products/hwid-spoofer/phoenix-satano-chip.png',
    alt: 'Phoenix Satano HWID spoofer branding on a stylized CPU and motherboard',
    caption: 'Phoenix Satano',
    captionDesc: 'Hardware-level profile tools for disk and MAC identifiers on Windows PC.',
  },
  {
    src: '/images/products/hwid-spoofer/phoenix-wh-satano-brand.png',
    alt: 'Phoenix WH-Satano logo on a dark background',
    caption: 'WH-Satano suite',
    captionDesc: 'Portal workflow, compatibility scan, and post-spoof verification steps.',
  },
  {
    src: '/images/products/hwid-spoofer/hwid-spoofer-icon.png',
    alt: 'Red CPU and gear icon representing HWID spoofer system utilities',
    caption: 'System utility',
    captionDesc: 'Disk serial tools, MAC rotation, and identifier diff reports after reboot.',
  },
];

const mainFullFeatures = [
  'Soft aim: aim key, FOV, smoothness, bone selection (head / chest / closest)',
  'Visible check, ignore friendly faction, ignore same party / alliance',
  'Draw FOV, draw target line, max aim distance',
  'Player ESP: full / corner boxes, skeleton, head circle, health bar',
  'Nameplate, class / job, level, faction (Elyos / Asmodian / Balaur)',
  'Distance, view direction, flying / grounded state, off-screen arrows',
  'Aerial target ESP, flight path markers, altitude readout',
  'Glide / wing state, sky contested zone highlights',
  'NPC / mob ESP, elite markers, world boss ESP, dungeon boss markers',
  'Quest objective markers, gathering node ESP, ore / herb / material filters',
  'Chest / loot object ESP, portal / instance entrance markers',
  '2D radar with faction color coding, boss and node markers, range and zoom',
  'Stream-proof overlay, combat mode (hide world ESP), custom crosshair',
  'Custom ESP colors, menu key, panic key, save / load configs',
];

const mainProduct: ProductPage = {
  slug: MAIN_PRODUCT_SLUG,
  kind: 'main',
  badge: 'Available',
  tier: 'Private suite',
  name: 'Aion 2 Private Cheats',
  title: 'Aion 2 Private Cheats',
  subtitle: 'Player ESP, flight markers, gathering nodes, radar, and optional soft aim for Windows PC.',
  desc: 'Private Aion 2 cheats with faction filters, aerial ESP, world boss markers, 2D radar, and configurable soft aim.',
  features: ['Player ESP', 'Soft aim', 'Flight markers', 'Gathering nodes', '2D radar', 'Saveable configs'],
  more: mainFullFeatures.length - 6,
  variant: 'popular',
  buyUrl: checkoutForSlug('main'),
  images: slide('gpHeroEsp', 'gpBuildFight', 'gpZoomHack', 'gpScripts'),
  overview: {
    title: 'Aion 2 private cheat suite',
    paragraphs: [
      'The main suite documents listed overlay tools for NC’s sky-battlefield MMORPG: player ESP, faction filters, flight markers, gathering nodes, 2D radar, and optional soft aim. Compare weekly, monthly, and lifetime plans before checkout.',
      'Start with conservative ESP and radar ranges, then enable soft aim only after you confirm current compatibility notes. Save profiles so you are not toggling every module each session.',
    ],
  },
  acquisition: acquisitionFor('Aion 2 Private Cheats'),
  goodToKnow: sharedGoodToKnow,
  limitations: sharedLimitations,
  fullFeatures: mainFullFeatures,
  systemRequirements: aionSystemRequirements,
  about: [
    { type: 'h2', text: 'Built for Aion 2 PC' },
    {
      type: 'p',
      text: 'Modules are described from the live product listing—ESP, flight markers, nodes, radar, and soft aim—without unverified automation extras. Re-check compatibility after every major client patch.',
    },
  ],
  body: [
    { type: 'h2', text: 'Modules you can inspect before checkout' },
    {
      type: 'p',
      text: 'Player ESP covers Elyos, Asmodian, and Balaur targets with class, level, and flying state. World overlays mark bosses, quests, and portals. Radar sits beside ESP so the HUD stays readable.',
    },
  ],
  relatedBlogSlugs: productRelatedBlogSlugs.main,
};

const utilityProducts: ProductPage[] = [
  {
    slug: 'hwid-spoofer',
    kind: 'utility',
    badge: 'Available',
    category: 'System utility',
    name: 'HWID Spoofer',
    title: 'Aion 2 HWID Spoofer',
    subtitle: 'Disk and MAC profile tools when hardware is flagged',
    desc: 'HWID Spoofer for PC hardware flags—disk serial tools, MAC rotation, compatibility scan, and post-spoof verification.',
    features: ['Disk serial tools', 'MAC rotation', 'Compatibility scan', 'Post-spoof verification'],
    more: 6,
    buyUrl: checkoutForSlug('hwid-spoofer'),
    images: hwidSpooferProductImages,
    overview: {
      title: 'HWID Spoofer for PC hardware flags',
      paragraphs: [
        'Use when anti-cheat flags PC hardware but the game account is still fine—new accounts fail on one PC but work on another. It does not fix account-only bans.',
        'Follow restore point, spoof, cold reboot, and verification steps before returning with a safer cheat profile.',
      ],
    },
    acquisition: acquisitionFor('HWID Spoofer'),
    goodToKnow:
      'Run the compatibility scan before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Aion 2 again.',
    limitations:
      'Spoofing does not help account-only cases. Never stack two spoof tools. You accept all risk from driver-level changes.',
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal guide before launching the game after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    body: [
      { type: 'h2', text: 'When you need it' },
      {
        type: 'p',
        text: 'Use after hardware-level anti-cheat flags. Pair with [UGC tool](/products/aion-2-cheats/game-accounts/) when the restriction is account-side instead.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['hwid-spoofer'],
  },
  {
    slug: 'game-accounts',
    kind: 'utility',
    badge: 'Available',
    category: 'Account tools',
    name: 'UGC tool',
    title: 'Aion 2 UGC tool',
    subtitle: 'Restriction detection and supported recovery workflows',
    desc: 'The Aion 2 UGC tool detects ban types, verifies live status, and runs supported remediation steps where authorized access exists.',
    features: ['Ban detection', 'Live status checks', 'One-click workflows', 'Detailed error reporting'],
    more: 6,
    buyUrl: checkoutForSlug('game-accounts'),
    images: ugcToolProductImages,
    overview: {
      title: 'UGC workspace utilities',
      paragraphs: [
        'Multi-game support with automatic restriction detection, temporary vs permanent ban handling, and live status verification after remediation attempts.',
        'Credentials stay protected—supported flows avoid collecting passwords or session tokens unnecessarily.',
      ],
    },
    acquisition: acquisitionFor('UGC tool'),
    goodToKnow:
      'Gather order email, platform details, and restriction screenshots before opening Support. Tools explain unsupported cases clearly.',
    limitations:
      'No tool guarantees restoration. Permanent bans may require a new account path. Results vary by restriction type.',
    fullFeatures: [
      'Multi-game support across listed platforms',
      'Automatic ban detection and restriction typing',
      'Account ban removal where authorized access exists',
      'Permanent and temporary ban handling with expiry readouts',
      'One-click operation for supported remediation actions',
      'Live status verification after actions complete',
      'Detailed error reporting for unsupported restrictions',
      'Automatic game detection for installed supported titles',
      'Secure operation without unnecessary credential collection',
    ],
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on getaion2cheats.net.' },
      { icon: 'reqShieldAccount', text: 'Account details and restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Support and status checks.' },
    ],
    body: [
      { type: 'h2', text: 'Realistic expectations' },
      {
        type: 'p',
        text: 'Organize evidence and follow portal workflows. Pair with [HWID Spoofer](/products/aion-2-cheats/hwid-spoofer/) when hardware is flagged.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['game-accounts'],
  },
  {
    slug: 'skin-changer',
    kind: 'utility',
    badge: 'Available',
    category: 'Cosmetic',
    name: 'Skin Changer',
    title: 'Aion 2 Skin Changer & Cosmetics',
    subtitle: 'Preview and apply supported cosmetic profiles',
    desc: 'Skin library, live preview, loadout manager, and restore tools for supported cosmetic changes from one interface.',
    features: ['Skin library', 'Live preview', 'Loadout manager', 'Restore & reset'],
    more: 6,
    buyUrl: checkoutForSlug('skin-changer'),
    images: skinChangerProductImages,
    overview: {
      title: 'Skin Changer and cosmetic utilities',
      paragraphs: [
        'Centralized skin library with game-specific compatibility profiles, custom import support, and preset sharing for supported titles including Aion 2.',
        'Restore original assets before patches—update compatibility checks flag outdated skin configurations after game updates.',
      ],
    },
    acquisition: acquisitionFor('Skin Changer'),
    goodToKnow:
      'Preview supported skins before applying. Export loadouts you actually use and reset to defaults before major patches.',
    limitations:
      'Other players may still see default assets depending on game mode and server validation. Cosmetic tools do not replace official store purchases.',
    fullFeatures: [
      'Multi-game support with compatibility profiles',
      'Centralized skin and outfit library',
      'Live skin preview before applying',
      'One-click apply for supported cosmetics',
      'Custom skin import for compatible assets',
      'Loadout manager with multiple saved configs',
      'Skin restore and reset to defaults',
      'Automatic game detection and version matching',
      'Update compatibility checks after patches',
      'Profile and preset import / export',
    ],
    systemRequirements: aionSystemRequirements,
    body: [
      { type: 'h2', text: 'Cosmetic workflow' },
      {
        type: 'p',
        text: 'Detect installation, pick a compatibility profile, preview combinations, then save presets. See the [Skin Changer guide](/blog/aion-2-skin-changer-guide/) for conservative first steps.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['skin-changer'],
  },
];

/** All catalog cards (main suite + utilities). */
export const productPages: ProductPage[] = [mainProduct, ...utilityProducts];

export const utilityPages = utilityProducts;

export function getMainProduct(): ProductPage {
  return mainProduct;
}

export function getProductPage(slug: string) {
  if (slug === MAIN_PRODUCT_SLUG) return mainProduct;
  return utilityProducts.find((p) => p.slug === slug);
}

export function getAllUtilitySlugs() {
  return utilityProducts.map((p) => p.slug);
}

/** @deprecated Single main suite — kept for legacy components. */
export const cheatPages = [mainProduct];

export function getCheatPage(slug: string) {
  if (slug === MAIN_PRODUCT_SLUG || slug === 'main') return mainProduct;
  return undefined;
}

export const heroSlides = slide(
  'gpHeroEsp',
  'gpScripts',
  'gpZoomHack',
  'gpBuildFight',
  'gpFarmBot',
  'gpThermal',
  'gpArena',
  'gpCombat',
  'gpLongRange',
  'gpChams',
  'gpSkinChanger',
  'gpAutoKill',
  'gpSpawn',
);

export const productHub = {
  path: PRODUCTS_HUB,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Aion 2 private cheats plus HWID Spoofer, UGC tool, and Skin Changer utilities for Windows PC.',
  buyUrl: checkoutPath('aion2Cheats'),
};
