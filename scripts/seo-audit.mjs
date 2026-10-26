import fs from 'node:fs';
import path from 'node:path';
import { resolveDistDir } from './dist-dir.mjs';

const SITE = 'https://gethalloweencheats.com';
const dist = resolveDistDir();

const EXCLUDED_PREFIXES = [
  '/go/',
  '/cheats/',
  '/contact/',
  '/products/fortnite-cheats/',
  '/products/dota-2-cheats/',
];

function walkHtml(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_astro') continue;
      walkHtml(full, files);
      continue;
    }
    if (entry.name === 'index.html') files.push(full);
    if (entry.name === '404.html') files.push(full);
  }
  return files;
}

function pathnameFromFile(file) {
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404/';
  return `/${rel.replace(/index\.html$/, '')}`;
}

function isRedirectPage(html) {
  return html.includes('Redirecting to:') || html.includes('name="robots" content="noindex"');
}

function extractOne(html, pattern) {
  const matches = [...html.matchAll(pattern)];
  return matches.map((m) => m[1]?.trim()).filter(Boolean);
}

/** @type {string[]} */
const errors = [];
/** @type {string[]} */
const warnings = [];

const htmlFiles = walkHtml(dist);
const sitemapAll = path.join(dist, 'sitemap-all.xml');
const sitemapUrls = new Set();
if (fs.existsSync(sitemapAll)) {
  for (const match of fs.readFileSync(sitemapAll, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) {
    sitemapUrls.add(match[1].trim());
  }
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const pathname = pathnameFromFile(file);
  const rel = path.relative(dist, file);

  if (pathname === '/404/') continue;

  if (isRedirectPage(html)) {
    if (EXCLUDED_PREFIXES.some((p) => pathname.startsWith(p))) continue;
    const canonicals = extractOne(html, /<link rel="canonical" href="([^"]+)"/g);
    if (canonicals.length !== 1) {
      warnings.push(`${rel}: redirect page should have one canonical (${canonicals.length})`);
    }
    continue;
  }

  if (EXCLUDED_PREFIXES.some((p) => pathname.startsWith(p))) {
    errors.push(`${rel}: indexable HTML under excluded path ${pathname}`);
    continue;
  }

  const titles = extractOne(html, /<title>([^<]*)<\/title>/g);
  const descriptions = extractOne(html, /<meta name="description" content="([^"]*)"/g);
  const canonicals = extractOne(html, /<link rel="canonical" href="([^"]+)"/g);
  const robots = extractOne(html, /<meta name="robots" content="([^"]+)"/g);

  if (titles.length !== 1) errors.push(`${rel}: expected 1 <title>, found ${titles.length}`);
  if (descriptions.length !== 1) {
    errors.push(`${rel}: expected 1 meta description, found ${descriptions.length}`);
  }
  if (canonicals.length !== 1) errors.push(`${rel}: expected 1 canonical, found ${canonicals.length}`);

  const title = titles[0] ?? '';
  const description = descriptions[0] ?? '';
  const canonical = canonicals[0] ?? '';

  if (title.length < 20 || title.length > 65) {
    warnings.push(`${rel}: title length ${title.length} (target 20–65)`);
  }
  if (description.length < 70 || description.length > 165) {
    warnings.push(`${rel}: description length ${description.length} (target 70–160)`);
  }

  const expectedCanonical = `${SITE}${pathname === '/' ? '/' : pathname}`;
  if (canonical !== expectedCanonical) {
    errors.push(`${rel}: canonical ${canonical} !== ${expectedCanonical}`);
  }

  if (robots.some((r) => r.includes('noindex'))) {
    errors.push(`${rel}: unexpected noindex on indexable page`);
  }

  if (/fortnite|dota-2-cheats/i.test(title + description)) {
    errors.push(`${rel}: legacy game name in title or description`);
  }

  const pageUrl = expectedCanonical;
  if (!sitemapUrls.has(pageUrl) && pathname !== '/404/') {
    warnings.push(`${rel}: not listed in sitemap-all.xml (${pageUrl})`);
  }
}

for (const loc of sitemapUrls) {
  if (!loc.startsWith(SITE)) errors.push(`sitemap: non-site URL ${loc}`);
  if (EXCLUDED_PREFIXES.some((p) => new URL(loc).pathname.startsWith(p))) {
    errors.push(`sitemap: excluded path listed ${loc}`);
  }
  if (!loc.endsWith('/')) errors.push(`sitemap: missing trailing slash ${loc}`);
}

console.log(`SEO audit: ${htmlFiles.length} HTML files, ${sitemapUrls.size} sitemap URLs`);
for (const w of warnings.slice(0, 30)) console.warn(`  warn: ${w}`);
if (warnings.length > 30) console.warn(`  … ${warnings.length - 30} more warnings`);

if (errors.length) {
  for (const e of errors) console.error(`  error: ${e}`);
  console.error(`SEO audit failed with ${errors.length} error(s).`);
  process.exit(1);
}

console.log('SEO audit passed.');
