/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Halloween Cheats | Myers ESP, Survivor Radar & PC Tools',
    description:
      'Halloween: The Game cheats for Windows PC — survivor and Myers ESP, item markers, HWID spoofer, account tools, and skin changer. Private suite from $15 weekly on gethalloweencheats.net.',
  },
  '/products/': {
    title: 'Halloween: The Game Products | Cheats, HWID Spoofer, UGC & Skins',
    description:
      'Shop Halloween private cheats, HWID Spoofer, UGC tool, and Skin Changer for the global Steam PC client. Compare plans from $15 weekly on gethalloweencheats.net.',
  },
  '/products/halloween-cheats/': {
    title: 'Buy Halloween Private Cheats | Myers & Survivor ESP',
    description:
      'Buy Halloween: The Game private cheats with Myers stalk tracking, survivor ESP, escape item markers, 2D radar, and optional aim assist. $15 weekly, $35 monthly, or $150 lifetime USD.',
  },
  '/products/halloween-cheats/hwid-spoofer/': {
    title: 'Buy Halloween: The Game HWID Spoofer | Hardware Flag Recovery',
    description:
      'HWID Spoofer for PC hardware flags — disk serial tools, MAC rotation, compatibility scan, and post-spoof verification. $15 weekly or $35 monthly USD before you relaunch Halloween: The Game.',
  },
  '/products/halloween-cheats/game-accounts/': {
    title: 'Buy Halloween: The Game UGC Tool | Ban Detection & Recovery',
    description:
      'Halloween: The Game UGC tool for restriction detection, live status checks, and supported recovery workflows. Weekly, monthly, and lifetime access from $15 USD on gethalloweencheats.net.',
  },
  '/products/halloween-cheats/skin-changer/': {
    title: 'Buy Halloween: The Game Skin Changer | Cosmetic Preview & Loadouts',
    description:
      'Skin Changer with live preview, loadout manager, restore tools, and patch compatibility checks for supported Halloween: The Game cosmetics. Plans from $15 weekly USD.',
  },
  '/products/halloween-cheats/utilities/': {
    title: 'Compare Halloween: The Game Utilities | HWID, UGC Tool & Skin Changer',
    description:
      'Compare HWID Spoofer, UGC tool, and Skin Changer utilities — pick the tool that matches hardware flags, account restrictions, or cosmetics before checkout.',
  },
  '/blog/': {
    title: 'Halloween Game Guides | ESP, Setup & Updates',
    description:
      'Halloween: The Game guides on survivor ESP, Myers stalk mechanics, mod menus, anti-cheat context, setup, and product updates for Steam PC.',
  },
  '/forum/': {
    title: 'Halloween Cheats Forum | Setup, ESP & Patch Discussion',
    description:
      'Community forum for Halloween: The Game cheat setup, ESP tuning, patch notes, spoofer questions, and product help before checkout on gethalloweencheats.net.',
  },
  '/faq/': {
    title: 'Halloween Cheats FAQ | Plans, Compatibility & Risk',
    description:
      'Halloween cheats FAQ — weekly, monthly, and lifetime plans, Steam compatibility, HWID vs account bans, and loader setup before purchase.',
  },
  '/terms/': {
    title: 'Terms for Halloween Cheats | License & Refunds',
    description:
      'Terms for buying Halloween cheats on gethalloweencheats.net — license use, delivery, refunds, and account risk.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Halloween Cheats',
    description:
      'How gethalloweencheats.net uses analytics, cookies, and contact data when you browse guides or purchase Halloween: The Game products.',
  },
  '/about/': {
    title: 'About Halloween Cheats | PC ESP & Utilities',
    description:
      'About Halloween Cheats — private suite, utilities, and guides for the global Halloween: The Game PC client at gethalloweencheats.net.',
  },
  '/support/': {
    title: 'Halloween Cheats Support | Setup & Checkout Help',
    description:
      'Support for Halloween: The Game loader setup, HWID spoofing, UGC and skin tools, and checkout questions at gethalloweencheats.net.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
