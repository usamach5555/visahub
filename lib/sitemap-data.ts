/**
 * sitemap-data.ts — Shared sitemap data builder.
 *
 * Used by:
 *   - app/sitemap/[id]/route.ts  (individual sub-sitemaps)
 *   - app/api/sitemap-index/route.ts  (index counting)
 *
 * Replaces the module-level caching in app/sitemap.ts which was returning
 * empty arrays in production due to Next.js serverless cold-start behaviour.
 * Using an explicit API route (route.ts) is more reliable than the Next.js
 * special-file generateSitemaps() convention.
 */

import { getAllSlugs } from "@/lib/articles";
import { getAllProcessSlugs } from "@/data/processes";
import { generateAllProgrammaticSlugs } from "@/lib/slug-parser";
import { getAllEditorialSlugs } from "@/data/editorial-articles";

export const BASE = "https://www.visaprocessinfo.com";
export const URLS_PER_SITEMAP = 2500;

export interface SitemapEntry {
  url: string;
  lastModified: string;   // YYYY-MM-DD
  changeFrequency: string;
  priority: number;
}

function slugPriority(slug: string): number {
  if (slug.endsWith("-visa-info"))                   return 0.95;
  if (slug.endsWith("-embassy-guide"))               return 0.85;
  if (slug.startsWith("apply-"))                     return 0.90;
  if (slug.startsWith("how-to-apply-"))              return 0.88;
  if (slug.endsWith("-visa-requirements"))            return 0.82;
  if (slug.endsWith("-visa-documents"))               return 0.82;
  if (slug.endsWith("-visa-fees"))                    return 0.80;
  if (slug.endsWith("-visa-processing-time"))         return 0.78;
  if (slug.endsWith("-visa-checklist"))               return 0.78;
  if (slug.endsWith("-visa-details"))                 return 0.80;
  if (slug.endsWith("-visa-faq"))                     return 0.75;
  if (slug.endsWith("-visa-rejection-reasons"))       return 0.75;
  if (slug.endsWith("-visa-interview-tips"))          return 0.72;
  if (slug.endsWith("-visa-success-tips"))            return 0.72;
  if (slug.endsWith("-visa-extension"))               return 0.70;
  if (slug.endsWith("-visa-financial-requirements"))  return 0.68;
  if (slug.endsWith("-visa-language-requirements"))   return 0.68;
  return 0.65;
}

/** Build the complete ordered list of all sitemap entries (called fresh per request). */
export function getAllSitemapEntries(): SitemapEntry[] {
  const now = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  const editorialSlugs = getAllEditorialSlugs();
  const editorialPages: SitemapEntry[] = [
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    ...editorialSlugs.map((slug) => ({
      url: `${BASE}/guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
  ];

  const staticPages: SitemapEntry[] = [
    { url: BASE,                                     lastModified: now, changeFrequency: "weekly",  priority: 1.00 },
    { url: `${BASE}/blog`,                           lastModified: now, changeFrequency: "daily",   priority: 0.90 },
    { url: `${BASE}/tools`,                          lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/tools/eligibility-checker`,      lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/cost-calculator`,          lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/processing-time`,          lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/document-checklist`,       lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/country-comparison`,       lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/rejection-risk`,           lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/visa/study`,                     lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/work`,                      lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/tourist`,                   lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/immigration`,               lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/business`,                  lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/about`,                          lastModified: now, changeFrequency: "yearly",  priority: 0.40 },
    { url: `${BASE}/editorial-policy`,               lastModified: now, changeFrequency: "yearly",  priority: 0.40 },
    { url: `${BASE}/privacy`,                        lastModified: now, changeFrequency: "yearly",  priority: 0.20 },
    { url: `${BASE}/terms`,                          lastModified: now, changeFrequency: "yearly",  priority: 0.20 },
    { url: `${BASE}/disclaimer`,                     lastModified: now, changeFrequency: "yearly",  priority: 0.20 },
    { url: `${BASE}/contact`,                        lastModified: now, changeFrequency: "yearly",  priority: 0.30 },
  ];

  const processPages: SitemapEntry[] = getAllProcessSlugs().map((slug) => ({
    url: `${BASE}/process/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const articlePages: SitemapEntry[] = getAllSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.60,
  }));

  // 10,000+ programmatic SEO pages — sorted highest priority first
  const programmaticPages: SitemapEntry[] = generateAllProgrammaticSlugs()
    .map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: slugPriority(slug),
    }))
    .sort((a, b) => b.priority - a.priority);

  return [
    ...editorialPages,
    ...staticPages,
    ...processPages,
    ...articlePages,
    ...programmaticPages,
  ];
}

/** Return a single paginated chunk of sitemap entries. */
export function getSitemapChunk(id: number): SitemapEntry[] {
  const all = getAllSitemapEntries();
  const start = id * URLS_PER_SITEMAP;
  const end   = start + URLS_PER_SITEMAP;
  return all.slice(start, end);
}

/** Total number of sub-sitemaps needed. */
export function getSitemapCount(): number {
  return Math.ceil(getAllSitemapEntries().length / URLS_PER_SITEMAP);
}
