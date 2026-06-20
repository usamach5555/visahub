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

// Tier C slug suffixes — noindexed pages excluded from sitemap
const TIER_C_SUFFIXES = [
  "-visa-interview-tips",
  "-visa-success-tips",
  "-visa-extension",
  "-visa-language-requirements",
];

function isTierCSlug(slug: string): boolean {
  return TIER_C_SUFFIXES.some((s) => slug.endsWith(s));
}

/** Build the complete ordered list of all sitemap entries (called fresh per request). */
export function getAllSitemapEntries(): SitemapEntry[] {
  // Stable per-family dates — no dynamic "today" noise that wastes crawl budget signals
  const D_STATIC   = "2026-06-01";
  const D_EDITORIAL = "2026-05-15";
  const D_ARTICLE   = "2025-09-01";
  const D_PROCESS   = "2025-10-15";
  const D_TIER_A    = "2025-11-01"; // hub, apply, how-to, details, requirements
  const D_TIER_B    = "2025-10-01"; // fees, documents, processing-time, rejection, checklist, faq, financial

  const editorialSlugs = getAllEditorialSlugs();
  const editorialPages: SitemapEntry[] = [
    { url: `${BASE}/guides`, lastModified: D_EDITORIAL, changeFrequency: "monthly", priority: 0.88 },
    ...editorialSlugs.map((slug) => ({
      url: `${BASE}/guides/${slug}`,
      lastModified: D_EDITORIAL,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
  ];

  const staticPages: SitemapEntry[] = [
    { url: BASE,                                     lastModified: D_STATIC, changeFrequency: "weekly",  priority: 1.00 },
    { url: `${BASE}/blog`,                           lastModified: D_STATIC, changeFrequency: "daily",   priority: 0.90 },
    { url: `${BASE}/tools`,                          lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/tools/eligibility-checker`,      lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/cost-calculator`,          lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/processing-time`,          lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/document-checklist`,       lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/country-comparison`,       lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/rejection-risk`,           lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/visa/study`,                     lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/work`,                      lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/tourist`,                   lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/immigration`,               lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/business`,                  lastModified: D_STATIC, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/about`,                          lastModified: D_STATIC, changeFrequency: "yearly",  priority: 0.40 },
    { url: `${BASE}/editorial-policy`,               lastModified: D_STATIC, changeFrequency: "yearly",  priority: 0.40 },
    { url: `${BASE}/privacy`,                        lastModified: D_STATIC, changeFrequency: "yearly",  priority: 0.20 },
    { url: `${BASE}/terms`,                          lastModified: D_STATIC, changeFrequency: "yearly",  priority: 0.20 },
    { url: `${BASE}/disclaimer`,                     lastModified: D_STATIC, changeFrequency: "yearly",  priority: 0.20 },
    { url: `${BASE}/contact`,                        lastModified: D_STATIC, changeFrequency: "yearly",  priority: 0.30 },
  ];

  const processPages: SitemapEntry[] = getAllProcessSlugs().map((slug) => ({
    url: `${BASE}/process/${slug}`,
    lastModified: D_PROCESS,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const articlePages: SitemapEntry[] = getAllSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: D_ARTICLE,
    changeFrequency: "monthly",
    priority: 0.60,
  }));

  // 10,000+ programmatic SEO pages — Tier C excluded (noindexed), sorted highest priority first
  const programmaticPages: SitemapEntry[] = generateAllProgrammaticSlugs()
    .filter((slug) => !isTierCSlug(slug))
    .map((slug) => {
      const priority = slugPriority(slug);
      // Tier A: high-intent pages (hub, apply, how-to, details, requirements, embassy)
      const isTimerA = priority >= 0.82;
      return {
        url: `${BASE}/${slug}`,
        lastModified: isTimerA ? D_TIER_A : D_TIER_B,
        changeFrequency: "monthly",
        priority,
      };
    })
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
