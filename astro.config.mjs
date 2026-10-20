import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { isSitemapExcludedUrl, sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://getaion2cheats.net',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/aion-2-cheats/',
    '/cheats/lite/': '/products/aion-2-cheats/',
    '/cheats/pro/': '/products/aion-2-cheats/',
    '/cheats/elite/': '/products/aion-2-cheats/',
    '/cheats/compare/': '/blog/aion-2-cheat-feature-comparison/',
    '/products/fortnite-cheats/': '/products/aion-2-cheats/',
    '/products/fortnite-cheats/elite/': '/products/aion-2-cheats/',
    '/products/fortnite-cheats/lite/': '/products/aion-2-cheats/',
    '/products/fortnite-cheats/pro/': '/products/aion-2-cheats/',
    '/products/fortnite-cheats/utilities/': '/products/',
    '/products/fortnite-cheats/hwid-spoofer/': '/products/aion-2-cheats/hwid-spoofer/',
    '/products/fortnite-cheats/ugc/': '/products/aion-2-cheats/game-accounts/',
    '/products/fortnite-cheats/unlock-all/': '/products/aion-2-cheats/skin-changer/',
    '/products/dota-2-cheats/': '/products/aion-2-cheats/',
    '/products/dota-2-cheats/elite/': '/products/aion-2-cheats/',
    '/products/dota-2-cheats/utilities/': '/products/',
    '/go/fortnite/': '/go/aion-2-cheats/',
    '/go/ugc/': '/go/game-accounts/',
    '/contact/': '/support/',
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
