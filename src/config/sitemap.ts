import type { SitemapItem } from '@astrojs/sitemap';
import { blogPosts } from '../data/blog';
import { parseBlogDate } from '../utils/schema';
import { normalizeSeoPath } from './pageSeo';

const buildDate = new Date().toISOString();

/** Paths that must never appear in sitemaps (redirects, checkout, feeds). */
export const SITEMAP_EXCLUDED_PREFIXES = [
  '/go/',
  '/cheats/',
  '/contact/',
  '/products/fortnite-cheats/',
  '/products/dota-2-cheats/',
  '/products/aion-2-cheats/',
] as const;

export function isSitemapExcludedPathname(pathname: string): boolean {
  const path = normalizeSeoPath(pathname);
  if (path === '/404/' || path === '/rss.xml' || path === '/rss.xml/') return true;
  return SITEMAP_EXCLUDED_PREFIXES.some((prefix) => path.startsWith(prefix));
}

export function isSitemapExcludedUrl(pageUrl: string): boolean {
  try {
    return isSitemapExcludedPathname(new URL(pageUrl).pathname);
  } catch {
    return true;
  }
}

const blogLastmod = new Map(
  blogPosts.map((post) => [`/blog/${post.slug}/`, parseBlogDate(post.date)] as const),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (isSitemapExcludedPathname(path) || path.includes('/404')) {
    return undefined;
  }

  item.lastmod = buildDate;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/blog/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.8;
    item.changefreq = 'daily';
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.6;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    item.lastmod = blogLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (
    path === '/about/' ||
    path === '/support/' ||
    path === '/privacy/' ||
    path === '/terms/' ||
    path === '/faq/'
  ) {
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
