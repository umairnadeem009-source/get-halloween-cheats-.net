import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * External checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  aion2Cheats: 'aion-2-cheats',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  gameAccounts: 'game-accounts',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Internal checkout path shown to users (hides external URL on hover). */
export function checkoutPath(product: CheckoutProduct = 'aion2Cheats'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Default product checkout redirect (replaces legacy Discord CTAs). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('aion2Cheats');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'skin-changer':
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'game-accounts':
    case 'ugc':
    case 'account-recovery':
      return checkoutPath('gameAccounts');
    case 'main':
    default:
      return checkoutPath('aion2Cheats');
  }
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Faion-2-cheats') || href.includes('/aion-2-cheats')) {
    return checkoutPath('aion2Cheats');
  }
  if (href.includes('%2Fskin-changer') || href.includes('/skin-changer')) {
    return checkoutPath('skinChanger');
  }
  if (href.includes('%2Fhwid-spoofer') || href.includes('/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fgame-accounts') || href.includes('/game-accounts')) {
    return checkoutPath('gameAccounts');
  }

  return href;
}
