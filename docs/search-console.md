# Search Console workflow (gethalloweencheats.net)

Verify the domain at your DNS provider—no HTML meta tags in the repo.

## Setup (once)

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `gethalloweencheats.net`.
2. Under **Sitemaps**, submit:
   - `https://gethalloweencheats.net/sitemap.xml`
3. Optional child sitemaps:
   - `https://gethalloweencheats.net/sitemap-pages.xml`
   - `https://gethalloweencheats.net/sitemap-products.xml`
   - `https://gethalloweencheats.net/sitemap-blog.xml`
   - `https://gethalloweencheats.net/sitemap-forum.xml`
4. Repeat in [Bing Webmaster Tools](https://www.bing.com/webmasters) if you use Bing.

## Monthly tune (15 minutes)

1. Search Console → **Performance** → **Search results** (last 28 days).
2. Sort by **Impressions**; map queries to paths in [`src/config/pageSeo.ts`](../src/config/pageSeo.ts).
3. Adjust titles and descriptions naturally (keep titles under ~60 characters where possible).
4. Deploy and allow 1–2 weeks before judging CTR changes.

## Path cheat sheet

| Common query intent | Edit path in `pageSeo.ts` |
| ------------------- | ------------------------- |
| aion 2 cheats (broad) | `/` |
| buy / private cheats | `/products/halloween-cheats/` |
| product catalog | `/products/` |
| ESP / setup guides | `/blog/` + specific post slugs |
