/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Aion 2 Cheats | Private ESP, Radar & Soft Aim for PC',
    description:
      'Aion 2 cheats for Windows PC — player ESP, flight markers, gathering nodes, 2D radar, and optional soft aim. Weekly, monthly, and lifetime plans plus HWID, UGC, and skin tools.',
  },
  '/products/': {
    title: 'Aion 2 Products | Cheats, HWID Spoofer, UGC & Skins',
    description:
      'Shop Aion 2 private cheats, HWID Spoofer, UGC tool, and Skin Changer for the global Steam or PURPLE PC client. Compare plans from $15 weekly on getaion2cheats.net.',
  },
  '/products/aion-2-cheats/': {
    title: 'Buy Aion 2 Private Cheats | ESP, Flight Markers & Radar',
    description:
      'Buy Aion 2 private cheats with faction ESP, aerial markers, world boss overlays, gathering node ESP, 2D radar, and optional soft aim. $15 weekly, $35 monthly, or $150 lifetime USD.',
  },
  '/products/aion-2-cheats/hwid-spoofer/': {
    title: 'Buy Aion 2 HWID Spoofer | Hardware Flag Recovery',
    description:
      'HWID Spoofer for PC hardware flags — disk serial tools, MAC rotation, compatibility scan, and post-spoof verification. $15 weekly or $35 monthly USD before you relaunch Aion 2.',
  },
  '/products/aion-2-cheats/game-accounts/': {
    title: 'Buy Aion 2 UGC Tool | Ban Detection & Recovery',
    description:
      'Aion 2 UGC tool for restriction detection, live status checks, and supported recovery workflows. Weekly, monthly, and lifetime access from $15 USD on getaion2cheats.net.',
  },
  '/products/aion-2-cheats/skin-changer/': {
    title: 'Buy Aion 2 Skin Changer | Cosmetic Preview & Loadouts',
    description:
      'Skin Changer with live preview, loadout manager, restore tools, and patch compatibility checks for supported Aion 2 cosmetics. Plans from $15 weekly USD.',
  },
  '/products/aion-2-cheats/utilities/': {
    title: 'Compare Aion 2 Utilities | HWID, UGC Tool & Skin Changer',
    description:
      'Compare HWID Spoofer, UGC tool, and Skin Changer utilities — pick the tool that matches hardware flags, account restrictions, or cosmetics before checkout.',
  },
  '/blog/': {
    title: 'Aion 2 Guides & Updates | ESP, Radar & Compatibility',
    description:
      'Aion 2 guides on ESP, radar, flight combat, anti-cheat context, setup, and product updates for the global Steam and PURPLE PC client.',
  },
  '/forum/': {
    title: 'Aion 2 Cheats Forum | Setup, ESP & Patch Discussion',
    description:
      'Community forum for Aion 2 cheat setup, ESP tuning, flight combat, patch notes, and product questions before checkout on getaion2cheats.net.',
  },
  '/faq/': {
    title: 'Aion 2 Cheats FAQ | Plans, Compatibility & Risk',
    description:
      'Aion 2 cheats FAQ — weekly, monthly, and lifetime plans, Steam and PURPLE compatibility, HWID vs account bans, and loader setup before purchase.',
  },
  '/terms/': {
    title: 'Terms for Aion 2 Cheats | License & Refunds',
    description:
      'Terms for buying Aion 2 cheats on getaion2cheats.net — license use, delivery, refunds, and account risk.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Aion 2 Cheats',
    description:
      'How getaion2cheats.net uses analytics, cookies, and contact data when you browse guides or purchase Aion 2 products.',
  },
  '/about/': {
    title: 'About Aion 2 Cheats | PC ESP & Utilities',
    description:
      'About Aion 2 Cheats — private suite, utilities, and guides for the global Aion 2 PC client at getaion2cheats.net.',
  },
  '/support/': {
    title: 'Aion 2 Cheats Support | Setup & Checkout Help',
    description:
      'Support for Aion 2 loader setup, HWID spoofing, UGC and skin tools, and checkout questions at getaion2cheats.net.',
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
