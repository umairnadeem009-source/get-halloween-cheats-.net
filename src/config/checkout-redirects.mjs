/** Checkout destinations keyed by internal product id (no affiliate codes in HTML). */
export const CHECKOUT_URLS = {
  aion2Cheats: 'https://levocheats.com/go/UMAIR?to=%2Faion-2-cheats',
  skinChanger: 'https://levocheats.com/go/UMAIR?to=%2Fskin-changer-cheats',
  hwidSpoofer: 'https://levocheats.com/go/UMAIR?to=%2Fhwid-spoofer',
  gameAccounts: 'https://levocheats.com/go/UMAIR?to=%2Fgame-accounts',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/aion-2-cheats', CHECKOUT_URLS.aion2Cheats],
  ['/go/aion-2-cheats/', CHECKOUT_URLS.aion2Cheats],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/game-accounts', CHECKOUT_URLS.gameAccounts],
  ['/go/game-accounts/', CHECKOUT_URLS.gameAccounts],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
