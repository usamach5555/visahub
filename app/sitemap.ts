import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/articles";
import { getAllProcessSlugs } from "@/data/processes";
import { generateAllProgrammaticSlugs } from "@/lib/slug-parser";

const BASE = "https://www.visaprocessinfo.com";

/**
 * SITEMAP INDEX — splits 10,000+ URLs into multiple smaller sitemaps.
 *
 * Google recommends ≤ 5,000 URLs per sitemap for efficient crawling.
 * Next.js App Router calls generateSitemaps() first to get an array of { id },
 * then calls sitemap({ id }) for each to produce individual sitemap XML files.
 * It automatically creates a /sitemap.xml index pointing to each sub-sitemap.
 */

const URLS_PER_SITEMAP = 2500;

/** Priority by slug suffix / prefix pattern */
function slugPriority(slug: string): number {
  if (slug.endsWith("-visa-info")) return 0.95;          // country hub
  if (slug.endsWith("-embassy-guide")) return 0.85;      // embassy guide
  if (slug.startsWith("apply-")) return 0.9;             // apply page
  if (slug.startsWith("how-to-apply-")) return 0.88;    // how-to page
  if (slug.endsWith("-visa-requirements")) return 0.82;
  if (slug.endsWith("-visa-documents")) return 0.82;
  if (slug.endsWith("-visa-fees")) return 0.80;
  if (slug.endsWith("-visa-processing-time")) return 0.78;
  if (slug.endsWith("-visa-checklist")) return 0.78;
  if (slug.endsWith("-visa-details")) return 0.80;
  if (slug.endsWith("-visa-faq")) return 0.75;
  if (slug.endsWith("-visa-rejection-reasons")) return 0.75;
  if (slug.endsWith("-visa-interview-tips")) return 0.72;
  if (slug.endsWith("-visa-success-tips")) return 0.72;
  if (slug.endsWith("-visa-extension")) return 0.70;
  if (slug.endsWith("-visa-financial-requirements")) return 0.68;
  if (slug.endsWith("-visa-language-requirements")) return 0.68;
  return 0.65;
}

/** Build the complete list of all sitemap entries, ordered by priority */
function getAllEntries(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE}/tools/eligibility-checker`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/cost-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/processing-time`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/document-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/country-comparison`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/rejection-risk`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const processPages: MetadataRoute.Sitemap = getAllProcessSlugs().map((slug) => ({
    url: `${BASE}/process/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const articlePages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 10,000+ programmatic SEO pages — sorted by priority (highest first)
  const programmaticPages: MetadataRoute.Sitemap = generateAllProgrammaticSlugs()
    .map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: slugPriority(slug),
    }))
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

  // Static + process + articles first (high value), then programmatic pages by priority
  return [
    ...staticPages,
    ...processPages,
    ...articlePages,
    ...programmaticPages,
  ];
}

/**
 * Generate sitemap index — Next.js creates /sitemap/0.xml, /sitemap/1.xml, etc.
 * and a /sitemap.xml index file linking to all of them.
 */
export async function generateSitemaps() {
  const totalEntries = getAllEntries().length;
  const numSitemaps = Math.ceil(totalEntries / URLS_PER_SITEMAP);

  return Array.from({ length: numSitemaps }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const allEntries = getAllEntries();
  const start = id * URLS_PER_SITEMAP;
  const end = start + URLS_PER_SITEMAP;

  return allEntries.slice(start, end);
}
