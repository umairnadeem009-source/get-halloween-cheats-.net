# gethalloweencheats.com

Halloween: The Game cheat-product site (Astro 7) — ESP, flight markers, radar, soft aim, HWID spoofer, UGC tool, and skin utilities for Windows PC.

**Domain:** `https://gethalloweencheats.com`

This project was bootstrapped from the levoredirect template. The read-only git remote is `template-upstream`. Do **not** push Aion-specific work to that remote unless you intentionally sync template updates.

## Commands

```bash
npm install
npm run dev          # http://localhost:4321
npm run build
npm run preview
npm run deploy       # Cloudflare Workers (wrangler)
npm run seo:audit    # after build — titles, canonicals, sitemap
```

## Cloudflare Workers (static assets)

- Build output lives in `dist/`; `wrangler.toml` serves it via `[assets]` with trailing-slash HTML.
- Edge redirects: `public/_redirects` (checkout `/go/*`, legacy Fortnite/Dota paths).
- Security/cache headers: `public/_headers`.
- Sitemaps: submit `https://gethalloweencheats.com/sitemap.xml` in Search Console (index points to section sitemaps).
- Set `INDEXNOW_KEY` and optional `PUBLIC_GA_MEASUREMENT_ID` in the Worker/environment for postbuild IndexNow and analytics.
```

## Checkout

Commercial CTAs use internal `/go/*/` paths; middleware redirects to Levocheats affiliate URLs (see `src/config/checkout-redirects.mjs`).
