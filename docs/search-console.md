# Search Console workflow (getaion2cheats.net)

Verify the domain at your DNS provider—no HTML meta tags in the repo.

## Setup (once)

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `getaion2cheats.net`.
2. Under **Sitemaps**, submit:
   - `https://getaion2cheats.net/sitemap.xml`
3. Optional child sitemaps:
   - `https://getaion2cheats.net/sitemap-pages.xml`
   - `https://getaion2cheats.net/sitemap-products.xml`
   - `https://getaion2cheats.net/sitemap-blog.xml`
   - `https://getaion2cheats.net/sitemap-forum.xml`
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
| buy / private cheats | `/products/aion-2-cheats/` |
| product catalog | `/products/` |
| ESP / setup guides | `/blog/` + specific post slugs |
