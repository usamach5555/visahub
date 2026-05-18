import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/articles";
import { getAllProcessSlugs } from "@/data/processes";
import { generateAllProgrammaticSlugs } from "@/lib/slug-parser";

const BASE = "https://www.visaprocessinfo.com";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/tools/eligibility-checker`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/tools/cost-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
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

  // 10,087 programmatic SEO pages
  const programmaticPages: MetadataRoute.Sitemap = generateAllProgrammaticSlugs().map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slugPriority(slug),
  }));

  return [
    ...staticPages,
    ...programmaticPages,
    ...processPages,
    ...articlePages,
  ];
}
