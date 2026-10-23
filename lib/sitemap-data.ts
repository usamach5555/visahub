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

import { getAllProcessSlugs } from "@/data/processes";
import { sitemapSlugs } from "@/lib/index-policy";
import { SITE_URL } from "@/lib/site";
import { EDITORIAL_ARTICLES } from "@/data/editorial-articles";

export const BASE = SITE_URL;
export const URLS_PER_SITEMAP = 2500;

export interface SitemapEntry {
  url: string;
  lastModified: string;   // YYYY-MM-DD
  changeFrequency: string;
  priority: number;
}

// Single honest date for content that has no real per-item modification
// tracking (static pages, process guides, programmatic pages, and the
// sitemap index itself). Must match CONTENT_LAST_VERIFIED in
// app/[slug]/page.tsx. Update it when this content is next substantively
// changed — do not fabricate per-family variation or regenerate it on every
// request to simulate freshness; Google's spam guidance treats invented
// freshness signals as a red flag, and an honest static date is standard
// practice.
export const CONTENT_LAST_VERIFIED = "2026-10-23";

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

  // Only hubs with hand-written content and curated guides — template pages
  // are redirected (see lib/index-policy.ts) and must not be submitted.
  const programmaticPages: SitemapEntry[] = sitemapSlugs().map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: CONTENT_LAST_VERIFIED,
    changeFrequency: "monthly",
    priority: slug.endsWith("-visa-info") ? 0.9 : 0.85,
  }));

  return [
    ...editorialPages,
    ...staticPages,
    ...processPages,
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
