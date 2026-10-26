# gethalloweencheats.com — Launch QA Report

Generated after Halloween rebrand from Aion template. Git remote `origin` was renamed to **`template-upstream`** (novaxumair/get-aion2-cheats-.net) — add your new repo with `git remote add origin <url>` when ready.

---

## 1. Files changed (summary)

- **Config:** `site.ts`, `checkout.ts`, `checkout-redirects.mjs`, `pageSeo.ts`, `seo.ts`, `sitemap.ts`, `astro.config.mjs`, `wrangler.toml`, `public/robots.txt`, `public/_redirects`
- **Routes:** `src/pages/products/halloween-cheats/` (renamed from `aion-2-cheats/`)
- **Content:** `src/i18n/en.ts`, `src/data/products.ts`, `src/data/faq.ts`, `src/data/forum.ts`, `src/data/blog/posts.ts` (30 posts)
- **Scripts:** `check-legacy-brand.mjs`, `generate-halloween-posts.mjs`, `rebrand-halloween.mjs`, `fix-halloween-leftovers.mjs`
- **Assets:** `public/images/brand/logo.webp`, gameplay/blog WebP variants, 30 blog PNG seeds

---

## 2. Pages created / renamed

| Canonical path | Purpose |
|----------------|---------|
| `/` | Homepage (hero, features, products, why-us, workflow, blog, FAQ) |
| `/products/` | Product hub |
| `/products/halloween-cheats/` | Main private cheats |
| `/products/halloween-cheats/hwid-spoofer/` | HWID spoofer |
| `/products/halloween-cheats/game-accounts/` | Account / UGC tool |
| `/products/halloween-cheats/skin-changer/` | Skin changer |
| `/products/halloween-cheats/utilities/` | Utilities compare |
| `/blog/` + 30 slugs | Guides |
| `/forum/` + threads | Community |
| `/faq/`, `/support/`, `/about/`, legal | Support & trust |

Legacy **301** stubs: `/products/aion-2-cheats/*`, fortnite/dota/cheats paths → Halloween canonicals (excluded from sitemap).

---

## 3. Blog count & slugs (30)

`halloween-the-game-cheats-explained`, `best-halloween-cheat-features`, `halloween-survivor-esp-guide`, `halloween-michael-myers-esp-stalk-tracker`, `halloween-civilian-npc-object-esp`, `halloween-unlock-all-tools-explained`, `halloween-mod-menu-trainer-guide`, `halloween-skin-changer-cosmetics-guide`, `halloween-hwid-spoofer-guide`, `fix-anti-cheat-hardware-bans-halloween`, `halloween-account-unban-recovery`, `halloween-stream-proof-overlay`, `halloween-movement-speed-hacks`, `halloween-terror-radius-proximity-warning`, `halloween-combat-mode-hide-world-esp`, `halloween-cheat-feature-comparison`, `halloween-cheats-for-pc`, `halloween-cheats-faq`, `halloween-cheat-setup-guide`, `halloween-cheat-troubleshooting`, `halloween-anti-cheat-bypass-explained`, `halloween-botting-vs-private-cheats`, `halloween-custom-crosshair-radar-guides`, `halloween-safe-configuration-preset-sharing`, `halloween-free-cheats-vs-premium-private`, `halloween-game-trainer-overview-safety`, `halloween-item-household-weapon-esp`, `halloween-escape-route-objective-markers`, `halloween-teammate-health-held-item-tracker`, `halloween-advanced-optimization-performance`

---

## 4. Target keyword map (primary intent per URL)

| URL | Primary keyword cluster |
|-----|-------------------------|
| `/` | Halloween cheats / Halloween the game cheats |
| `/products/halloween-cheats/` | Buy Halloween cheats / Halloween private cheats |
| `/products/halloween-cheats/hwid-spoofer/` | Halloween spoofer / game spoofer |
| `/products/halloween-cheats/game-accounts/` | Account unban / unban account |
| `/products/halloween-cheats/skin-changer/` | Halloween skin changer |
| `/blog/halloween-mod-menu-trainer-guide/` | Halloween mod menu / trainer |
| `/blog/halloween-cheat-setup-guide/` | How to use Halloween cheats |
| `/faq/` | Halloween cheats FAQ |
| `/blog/halloween-free-cheats-vs-premium-private/` | Halloween free cheats vs premium |

---

## 5. Competitor summary (SERP)

| Competitor | Role |
|------------|------|
| WeMod, PLITCH, Fearless CE | Trainer/mod vocabulary, EAC context |
| madchad.net, privatecheatz.com, solarservices.cc, up-game.pro | Private Myers/survivor ESP, pricing, spoofer cross-sell |
| aion2cheats.org (structure only) | Hub + utilities + `/go/` checkout pattern |

---

## 6. Keyword gaps addressed

- Myers ESP, terror radius, stalk state (product + blogs)
- Survivor/teammate tracking
- Item & escape-route ESP
- Trainer vs private comparison posts
- EAC HWID workflow (honest risk, no “undetected forever”)
- Skin/unlock scope vs gameplay cheats

**Future linkable assets:** map/hiding guide, stalk timeline, cosmetics tier list, HWID whitepaper, patch tracker.

---

## 7. Technical SEO

- Unique titles/descriptions via `pageSeo.ts` per route
- Canonical apex: `https://gethalloweencheats.com`
- Trailing slash enforced
- `npm run build` → **SEO audit passed** (64 sitemap URLs)

---

## 8. Performance (production desktop Lighthouse, `127.0.0.1:3000`)

| Category | Score |
|----------|-------|
| Performance | 92 |
| Accessibility | 82 |
| Best Practices | 100 |
| SEO | 100 |

*Run mobile Lighthouse ×3 median after deploy for CWV baseline.*

---

## 9. Sitemap / robots

- `robots.txt`: Allow `/`, Disallow `/go/`, sitemaps on apex domain
- Split: pages, products, blog (31), forum (21) — **64 indexable URLs**

---

## 10. Canonical / www

- **Apex primary:** `https://gethalloweencheats.com` (no www in config)

---

## 11. Schema deployed

Organization, WebSite, FAQPage (home + blog FAQs), Product (no fabricated ratings), BlogPosting, DiscussionForumPosting on forum threads.

---

## 12. Broken links

- Internal product/blog links aligned to `/products/halloween-cheats/` and 30 blog slugs
- Forum `sourcePath` updated to existing blog URLs

---

## 13. Mobile responsiveness

- Template Starwind layout retained; verify manually on phone after deploy (sheet nav, Try Now CTA, product cards).

---

## 14. Affiliate CTA validation

| Internal path | External target |
|---------------|-----------------|
| `/go/halloween-cheats/` | `https://levocheats.com/go/UMAIR?to=%2Fhalloween-cheats` |
| `/go/hwid-spoofer/` | `…%2Fhwid-spoofer` |
| `/go/game-accounts/` | `…%2Fgame-accounts` |
| `/go/skin-changer/` | `…%2Fskin-changer-cheats` |

Navbar **Try Now** → `/go/halloween-cheats/`.

---

## 15. Branding prohibition audit

- `npm run build` runs `check-legacy-brand.mjs` — blocks Aion, Fortnite, Valheim, Zadeyo, Elyos, etc. in `src/` + public metadata
- Legacy image filenames under `public/images/gameplay/aion-2-*` remain on disk but are **not referenced** in src; optional cleanup later

---

## 16. Remaining opportunities

- Mobile a11y score (82) — review contrast / aria on carousel
- Replace placeholder blog/gameplay art with licensed Halloween: The Game screenshots
- Add `INDEXNOW_KEY` in env for post-deploy indexing
- Set `PUBLIC_GA_MEASUREMENT_ID` if using Analytics

---

## 17. Post-launch backlink roadmap

1. Publish linkable map / stalk timeline posts
2. Outreach to horror gaming editors (table below)
3. Monitor GSC queries: “Halloween the game cheats”, “Myers ESP”, “Halloween spoofer”

---

## 18. GSC / IndexNow handoff

1. Verify domain in Google Search Console (apex)
2. Submit `https://gethalloweencheats.com/sitemap.xml`
3. Set `INDEXNOW_KEY` and re-run build to ping IndexNow
4. Confirm Cloudflare `_headers` + `_redirects` deploy with `npm run deploy`

---

## Appendix A — Backlink prospects

| Website | URL | Relevance | Contact | Suggested article | Destination | Anchor concept |
|---------|-----|-----------|---------|-------------------|-------------|----------------|
| Horror Obsessive | horrorobsessive.com | Horror games | info@horrorobsessive.com / application form | “How terror radius mechanics shape Halloween: The Game” | `/blog/halloween-terror-radius-proximity-warning/` | Halloween stalk mechanics |
| Horror Fuel | horrorfuel.com | Horror + gaming | contact@horrorfuel.com (Guest pitch) | “Survival horror ESP ethics on PC” | `/blog/halloween-survivor-esp-guide/` | Halloween survivor awareness |
| HorrorFam | horrorfam.com | Horror games 700+ words | Guest guidelines page | “Mod menus vs private overlays in horror multiplayer” | `/blog/halloween-mod-menu-trainer-guide/` | Halloween mod menu guide |
| Adventure Gamers | adventuregamers.com | Horror adventure | editor via site | “Haddonfield map awareness for co-op horror” | Future map guide | Halloween hiding spots |

---

## Appendix B — Guest-post follow-up (short)

Subject: Re: Halloween: The Game piece for [Site]

Hi [Name],

Following up on my pitch about [topic] for Halloween: The Game — happy to shorten the angle or send a brief outline if that helps. The reference I had in mind is [one sentence]. No rush; if timing isn’t right, I’ll catch your next open call.

Thanks,  
[Your name]
