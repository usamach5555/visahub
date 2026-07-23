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

import { ALL_ARTICLES } from "@/lib/articles";
import { getAllProcessSlugs } from "@/data/processes";
import { generateAllProgrammaticSlugs } from "@/lib/slug-parser";
import { EDITORIAL_ARTICLES } from "@/data/editorial-articles";

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

// Single honest date for content that has no real per-item modification
// tracking (static pages, process guides, programmatic pages, and the
// sitemap index itself). Must match CONTENT_LAST_VERIFIED in
// app/[slug]/page.tsx. Update it when this content is next substantively
// changed — do not fabricate per-family variation or regenerate it on every
// request to simulate freshness; Google's spam guidance treats invented
// freshness signals as a red flag, and an honest static date is standard
// practice.
export const CONTENT_LAST_VERIFIED = "2026-07-22";

/** Build the complete ordered list of all sitemap entries (called fresh per request). */
export function getAllSitemapEntries(): SitemapEntry[] {
  // Blog and guides articles carry a real, per-article publishedAt date —
  // use it directly instead of a single fabricated blanket date.
  const mostRecentEditorialDate = EDITORIAL_ARTICLES.reduce(
    (latest, a) => (a.publishedAt > latest ? a.publishedAt : latest),
    EDITORIAL_ARTICLES[0]?.publishedAt ?? CONTENT_LAST_VERIFIED,
  );
  const editorialPages: SitemapEntry[] = [
    { url: `${BASE}/guides`, lastModified: mostRecentEditorialDate, changeFrequency: "monthly", priority: 0.88 },
    ...EDITORIAL_ARTICLES.map((article) => ({
      url: `${BASE}/guides/${article.slug}`,
      lastModified: article.publishedAt,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
  ];

  const staticPages: SitemapEntry[] = [
    { url: BASE,                                     lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "weekly",  priority: 1.00 },
    { url: `${BASE}/blog`,                           lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "daily",   priority: 0.90 },
    { url: `${BASE}/tools`,                          lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/tools/eligibility-checker`,      lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/cost-calculator`,          lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/processing-time`,          lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/document-checklist`,       lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/country-comparison`,       lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/rejection-risk`,           lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/visa/study`,                     lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/work`,                      lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/tourist`,                   lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/immigration`,               lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/visa/business`,                  lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/about`,                          lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "yearly",  priority: 0.40 },
    { url: `${BASE}/editorial-policy`,               lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "yearly",  priority: 0.40 },
    { url: `${BASE}/privacy`,                        lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "yearly",  priority: 0.20 },
    { url: `${BASE}/terms`,                          lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "yearly",  priority: 0.20 },
    { url: `${BASE}/disclaimer`,                     lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "yearly",  priority: 0.20 },
    { url: `${BASE}/contact`,                        lastModified: CONTENT_LAST_VERIFIED, changeFrequency: "yearly",  priority: 0.30 },
  ];

  const processPages: SitemapEntry[] = getAllProcessSlugs().map((slug) => ({
    url: `${BASE}/process/${slug}`,
    lastModified: CONTENT_LAST_VERIFIED,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Blog articles carry a real, per-article publishedAt date — use it
  // directly instead of a single fabricated blanket date.
  const articlePages: SitemapEntry[] = ALL_ARTICLES.map((article) => ({
    url: `${BASE}/blog/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly",
    priority: 0.60,
  }));

  // 10,000+ programmatic SEO pages — Tier C excluded (noindexed), sorted highest priority first
  const programmaticPages: SitemapEntry[] = generateAllProgrammaticSlugs()
    .filter((slug) => !isTierCSlug(slug))
    .map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified: CONTENT_LAST_VERIFIED,
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
