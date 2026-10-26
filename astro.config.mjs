import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { isSitemapExcludedUrl, sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://gethalloweencheats.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/halloween-cheats/',
    '/cheats/lite/': '/products/halloween-cheats/',
    '/cheats/pro/': '/products/halloween-cheats/',
    '/cheats/elite/': '/products/halloween-cheats/',
    '/cheats/compare/': '/blog/halloween-cheat-feature-comparison/',
    '/products/fortnite-cheats/': '/products/halloween-cheats/',
    '/products/fortnite-cheats/elite/': '/products/halloween-cheats/',
    '/products/fortnite-cheats/lite/': '/products/halloween-cheats/',
    '/products/fortnite-cheats/pro/': '/products/halloween-cheats/',
    '/products/fortnite-cheats/utilities/': '/products/',
    '/products/fortnite-cheats/hwid-spoofer/': '/products/halloween-cheats/hwid-spoofer/',
    '/products/fortnite-cheats/ugc/': '/products/halloween-cheats/game-accounts/',
    '/products/fortnite-cheats/unlock-all/': '/products/halloween-cheats/skin-changer/',
    '/products/dota-2-cheats/': '/products/halloween-cheats/',
    '/products/dota-2-cheats/elite/': '/products/halloween-cheats/',
    '/products/dota-2-cheats/utilities/': '/products/',
    '/go/fortnite/': '/go/halloween-cheats/',
    '/go/ugc/': '/go/game-accounts/',
    '/contact/': '/support/',
    '/products/aion-2-cheats/': '/products/halloween-cheats/',
    '/products/aion-2-cheats/utilities/': '/products/halloween-cheats/utilities/',
    '/go/aion-2-cheats/': '/go/halloween-cheats/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !isSitemapExcludedUrl(page),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
