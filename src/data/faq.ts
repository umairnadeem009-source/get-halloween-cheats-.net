import type { IconName } from '../components/icons/types';
import { PRODUCT_BASE } from '../config/site';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const mainSuite = link('Halloween Private Cheats', PRODUCT_BASE);
const utilitiesHub = link('utilities compare page', `${PRODUCT_BASE}utilities/`);
const productsHub = link('Halloween: The Game products', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const ugc = link('UGC tool', productPath('game-accounts'));
const skin = link('Skin Changer', productPath('skin-changer'));
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Halloween cheats are online?',
    a: a('The live status banner is on gethalloweencheats.net and in the Discord #status channel. Always check after a Halloween: The Game or anti-cheat update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Halloween: The Game.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party Halloween cheats?',
    a: a('Yes—any modification carries risk. anti-cheat and report systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Halloween: The Game via Steam Launcher on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists cheat tiers, ${hwid}, ${ugc}, and ${skin} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Halloween: The Game ESP wallhack / ESP?',
    a: `Player and world ESP show nearby survivors, bosses, escape item markers, portals, and flight targets on the ${mainSuite} overlay. Enable only what you can read during combat.`,
    scopes: ['main'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aim assist?',
    a: `ESP is read-only overlay information. Optional aim assist on ${mainSuite} assists targeting—you can leave aim modules off and run ESP plus radar only.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Can I use the suite for ESP only?',
    a: `Yes. ${mainSuite} lets you enable player ESP, 2D radar, node markers, and flight readouts without turning on aim assist. Save a profile after tuning distance caps.`,
    scopes: ['main'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Does the private suite include aim assist?',
    a: `Yes—${mainSuite} lists optional aim assist with FOV, smoothness, visible check, and bone selection. Start conservative before open-world or PvP.`,
    scopes: ['main'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do weekly, monthly, and lifetime plans differ?',
    a: `All three unlock the same ${mainSuite} modules—only access length changes ($15 weekly, $35 monthly, $150 lifetime USD). Pick duration at checkout on ${mainSuite}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Are utilities included with the private suite?',
    a: `${hwid}, ${ugc}, and ${skin} are separate utilities with their own checkout. Use the ${utilitiesHub} to choose the right tool.`,
    scopes: ['main'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${mainSuite} hides overlays from OBS and Discord capture in supported setups. Record a local test before going live.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected Halloween cheats guaranteed?',
    a: a('No. Undetected is current status on the product page—not a permanent guarantee. Stop if the build shows updating, testing, or detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP wallhack safer than aimbot?',
    a: a('ESP is quieter in replay than obvious bot patterns, but it is still a cheat. anti-cheat does not ignore overlays because you left aimbot off.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when fresh Halloween: The Game accounts fail instantly on one PC but work elsewhere—hardware enforcement. Not for account-only cases; see ${ugc} instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is the Halloween: The Game UGC tool?',
    a: `${ugc} detects restriction types, verifies live status, and runs supported remediation workflows where authorized access exists—not a guaranteed unban service.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does Skin Changer modify my Halloween: The Game wardrobe for other players?',
    a: `${skin} previews supported cosmetics locally on your client. Other players still see your real inventory. Buy it standalone on the Skin Changer product page.`,
    scopes: ['skin-changer'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the Steam folder?',
    a: `Halloween Cheats runs external with cloud config sync—no files injected into the Halloween: The Game directory. anti-cheat risk still applies. See ${productsHub}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog dev-console tips the same as the private suite?',
    a: `No. Developer-console articles cover practice instances only. Live PvP overlays come from ${mainSuite} and utilities on ${productsHub}.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to tier pages and ${productsHub}. Checkout runs through our secure partner—never paste loader files from random Discord DMs.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each cheat tier page includes a compare table. The ${faqPage} collects product, cheat and blog answers in one place.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should pick the weekly plan?',
    a: `Try the $15 weekly pass if you are testing compatibility or returning after a patch. Same ${mainSuite} modules as monthly and lifetime.`,
    scopes: ['main'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should pick the monthly plan?',
    a: `Most players choose the $35 monthly plan for ongoing access to ${mainSuite} ESP, radar, and optional aim assist on gethalloweencheats.net.`,
    scopes: ['main'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should pick lifetime?',
    a: `Lifetime ($150 USD) fits long-term main characters when you accept patch risk and want one-time checkout for ${mainSuite}.`,
    scopes: ['main'],
  },
  {
    id: 'eac-update',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after a anti-cheat update?',
    a: a('Check gethalloweencheats.net status and Discord #status. Do not launch until the banner shows online. Load conservative presets after any patch.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Open Discord after purchase with your order email, Windows version and Halloween: The Game client build. Staff walk through loader setup live.'),
  },
  {
    id: 'zero-build-ranked',
    topic: 'plans',
    icon: 'faqZoomRanked',
    q: 'Do modules work in open world and instances?',
    a: `Yes—${mainSuite} profiles apply in open world, PvP, and instances where modules are supported. Tune ESP distance and aim assist before faction fights.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Does the suite include 2D radar?',
    a: `2D radar ships on ${mainSuite} beside ESP so you can track nearby players, bosses, and nodes without covering the whole screen.`,
    scopes: ['main'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Does the suite include weapon and item ESP?',
    a: `Household weapons, healing items, phones, and escape objectives are part of ${mainSuite}—use distance caps so Haddonfield stays readable. No separate farming bot is listed.`,
    scopes: ['main'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Halloween cheats?',
    a: a('Private means per-user keys and maintained builds—not public zip packs. gethalloweencheats.net delivers the loader and configs through your portal after checkout.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat and blog answers—or read ${blog} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Halloween cheats FAQ',
  subtitle: 'Filter by cheat plans, ESP wallhack, aimbot, products, setup and guides.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'Cheat FAQ',
  title: 'Halloween cheats questions',
  subtitle: 'Straight answers on aimbot, ESP, bans and setup — see the full FAQ for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'main' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'eac-update'].includes(f.id),
  );

  const combined =
    kind === 'main'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I use dev-console codes in live PvP?',
      a: a('No. Developer-console commands only work in practice instances with cheats enabled. Live overlays require the private suite from gethalloweencheats.net.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which product matches this guide?',
      a: `ESP and radar guides → ${mainSuite}. Recovery topics → ${hwid} or ${ugc}. Cosmetic previews → ${skin}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in a quiet zone first?',
      a: a('Yes. Load conservative presets in a practice instance or quiet open-world area before PvP. Tune aim assist and ESP distance caps over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-eac',
      topic: 'blog',
      icon: 'faqBlogSecEac',
      q: 'Does this article guarantee undetected status?',
      a: a('No article replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${mainSuite}, utilities, and ${productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every Halloween: The Game update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('map-hack') || slug.includes('esp') || slug.includes('ward')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which product covers ESP from this article?',
      a: `${mainSuite} includes player ESP, escape item markers, world markers, and 2D radar on one overlay stack.`,
    });
  }
  if (slug.includes('script') || slug.includes('combo') || slug.includes('auto-combo')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which product includes aim assist from this article?',
      a: `Optional aim assist modules are listed on ${mainSuite}. You can disable aim features and run ESP-only profiles.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('eac')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace HWID or UGC tool products?',
      a: `Recovery guides complement ${hwid} and ${ugc}—read product pages for workflow scope and realistic outcomes.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

