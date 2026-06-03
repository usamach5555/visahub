/**
 * app/sitemap.ts — Generates /sitemap/[id].xml via Next.js generateSitemaps().
 *
 * FIX: The original version used a module-level _cachedEntries variable.
 * When Next.js calls generateSitemaps() and sitemap({id}) in separate
 * execution contexts (Turbopack/serverless), the cache was null on the
 * second call, causing empty XML output.
 *
 * This version calls getAllSitemapEntries() fresh each time (no caching),
 * using lib/sitemap-data.ts which always recalculates from source data.
 */

import { MetadataRoute } from "next";
import { getAllSitemapEntries, URLS_PER_SITEMAP } from "@/lib/sitemap-data";

/**
 * Tell Next.js how many sub-sitemaps to generate.
 * Produces routes at /sitemap/0.xml, /sitemap/1.xml, etc.
 */
export async function generateSitemaps() {
  const entries = getAllSitemapEntries();
  const count = Math.max(1, Math.ceil(entries.length / URLS_PER_SITEMAP));
  return Array.from({ length: count }, (_, i) => ({ id: i }));
}

/**
 * Called once per sitemap ID. Recalculates data fresh — no module-level cache.
 */
export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const all = getAllSitemapEntries();
  const start = id * URLS_PER_SITEMAP;
  const end = start + URLS_PER_SITEMAP;
  return all.slice(start, end).map((entry) => ({
    url: entry.url,
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: entry.priority,
  }));
}
