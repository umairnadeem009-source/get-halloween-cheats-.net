/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/products', '/products/'],
  ['/cheats', '/products/halloween-cheats/'],
  ['/cheats/', '/products/halloween-cheats/'],
  ['/cheats/lite', '/products/halloween-cheats/'],
  ['/cheats/lite/', '/products/halloween-cheats/'],
  ['/cheats/pro', '/products/halloween-cheats/'],
  ['/cheats/pro/', '/products/halloween-cheats/'],
  ['/cheats/elite', '/products/halloween-cheats/'],
  ['/cheats/elite/', '/products/halloween-cheats/'],
  ['/cheats/compare', '/blog/halloween-cheat-feature-comparison/'],
  ['/cheats/compare/', '/blog/halloween-cheat-feature-comparison/'],
  ['/products/fortnite-cheats', '/products/halloween-cheats/'],
  ['/products/fortnite-cheats/', '/products/halloween-cheats/'],
  ['/products/fortnite-cheats/elite', '/products/halloween-cheats/'],
  ['/products/fortnite-cheats/elite/', '/products/halloween-cheats/'],
  ['/products/fortnite-cheats/ugc', '/products/halloween-cheats/game-accounts/'],
  ['/products/fortnite-cheats/ugc/', '/products/halloween-cheats/game-accounts/'],
  ['/products/fortnite-cheats/unlock-all', '/products/halloween-cheats/skin-changer/'],
  ['/products/fortnite-cheats/unlock-all/', '/products/halloween-cheats/skin-changer/'],
  ['/products/halloween-cheats/utilities', '/products/halloween-cheats/utilities/'],
  ['/products/dota-2-cheats', '/products/halloween-cheats/'],
  ['/products/dota-2-cheats/', '/products/halloween-cheats/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
