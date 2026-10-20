# getaion2cheats.net — Launch QA Report (18 checkpoints)

Date: 2026-10-20

## 1. Files changed (summary)

- **Config:** `src/config/site.ts`, `checkout.ts`, `checkout-redirects.mjs`, `pageSeo.ts`, `seo.ts`, `astro.config.mjs`, `wrangler.toml`
- **Data:** `src/data/products.ts`, `src/data/blog/posts.ts` (30 posts), `src/data/faq.ts`, `src/data/forum.ts`, `src/i18n/en.ts`
- **Pages:** `src/pages/products/index.astro`, `src/pages/products/aion-2-cheats/*`, removed legacy `fortnite-cheats` routes
- **Components:** Header (logo + Try Now CTA), Footer, Blog, FAQ, Forum, product headers
- **Assets:** `public/images/brand/logo.webp`, renamed gameplay/blog images to `aion-2-*`, `public/robots.txt`, `site.webmanifest`
- **Docs:** `docs/seo/*`, `docs/search-console.md`, this report
- **Git:** remote renamed to `template-upstream` (no push to template repo)

## 2. Pages created

- `/` home
- `/products/` catalog hub (4 products)
- `/products/aion-2-cheats/` main private suite
- `/products/aion-2-cheats/hwid-spoofer/`, `game-accounts/`, `skin-changer/`, `utilities/`
- `/blog/` + **30** posts
- `/forum/` + discussions
- `/faq/`, `/support/`, `/about/`, `/terms/`, `/privacy/`, `/404/`

**Build output:** 64 indexable URLs in sitemap (after finalize-sitemap).

## 3. Blogs

30 Aion 2 articles in `src/data/blog/posts.ts` (generated via `scripts/generate-aion2-posts.mjs`), each with H2/H3 body, internal links, CTA, and end FAQ blocks.

## 4. Keyword map

Transactional: `/`, `/products/aion-2-cheats/`, `/products/`  
Feature: home `#features`, blog ESP/flight/radar/soft aim cluster  
Utilities: HWID, accounts, skin product pages + blogs 14–17  
Informational: botting vs cheats, anti-cheat, classic Aion queries in blogs 28–29  
See `docs/seo/keyword-gap.md`.

## 5. Competitors

Documented in `docs/seo/serp-competitors.md` — primary: aion2cheats.org, aion2cheats.com, howlcheats.com, plus Reddit/forums for informational SERPs.

## 6. Keyword gaps

See `docs/seo/keyword-gap.md` — remaining opportunities: faction resource guide, patch timeline page, deeper comparison vs bot-heavy competitors.

## 7. Technical SEO

- Canonical site: `https://getaion2cheats.net` in Astro config
- `robots.txt` + sitemap index + section sitemaps
- `pageSeo.ts` per-route titles/descriptions
- Trailing slash consistency
- Legacy 301s from template URLs (fortnite/dota paths) in `astro.config.mjs`, `_redirects`, `scripts/redirects.mjs`

## 8. Performance

- Static Astro build; hero LCP preload on home
- `optimize-images.mjs` + dist PNG prune (~20.7 MB saved)
- **Recommendation:** run Lighthouse on deployed URL with Cloudflare caching; target 90+ all categories

## 9. Sitemap

`npm run build` → `dist/sitemap.xml` (index), `sitemap-pages.xml` (6), `sitemap-products.xml` (6), `sitemap-blog.xml` (31), `sitemap-forum.xml` (21).

## 10. Canonicals

`BaseLayout` canonical URLs via `canonicalUrl()` — domain `getaion2cheats.net`.

## 11. Hreflang

English only: `hreflang="en"` + `x-default` in `BaseLayout.astro`.

## 12. Schema

JSON-LD: Organization, WebSite, Product, BreadcrumbList, FAQPage, Article/BlogPosting — no fabricated ratings.

## 13. Broken links

Production build completed without prerender errors. Re-check after deploy with a crawler.

## 14. Mobile responsiveness

Template responsive grid/carousel preserved; manual pass recommended on real devices.

## 15. Affiliate CTA validation

| Internal path | Affiliate destination |
|---------------|----------------------|
| `/go/aion-2-cheats/` | levocheats.com … `/aion-2-cheats` |
| `/go/hwid-spoofer/` | … `/hwid-spoofer` |
| `/go/game-accounts/` | … `/game-accounts` |
| `/go/skin-changer/` | … `/skin-changer-cheats` |

Navbar **Try Now** → `/go/aion-2-cheats/`.

## 16. Branding check

- **`src/` UI/content:** no Fortnite strings (verified grep)
- Logo self-hosted at `/images/brand/logo.webp` (no vendor name beside logo)
- Legacy dev scripts under `scripts/` still mention Fortnite for template history — **not deployed**

## 17. Remaining opportunities

- Dedicated `/status/` page (competitor pattern)
- Expand blog bodies beyond template generator for top 5 money pages
- IndexNow: set `INDEXNOW_KEY` env on deploy
- Favicon refresh from Aion logo (`scripts/make-favicon.mjs`)

## 18. Post-launch backlink roadmap

See `docs/seo/backlink-prospects.md`, `outreach-follow-up.md`, and `linkable-assets.md`. Prioritize MMORPG guest posts pointing to faction guide and HWID whitepaper.

---

**Deploy:** `npm run deploy` (Wrangler) after DNS for `getaion2cheats.net` points to Cloudflare. Submit sitemap in Search Console per `docs/search-console.md`.
