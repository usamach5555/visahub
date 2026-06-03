import { MetadataRoute } from "next";

const BASE = "https://www.visaprocessinfo.com";

/**
 * robots.ts — served at /robots.txt
 *
 * IMPORTANT: Do NOT disallow /_next/ — Googlebot needs access to Next.js JS
 * bundles to render the page (required for full JavaScript rendering).
 * Blocking /_next/ causes "Indexed, though blocked by robots.txt" warnings.
 *
 * Do NOT disallow /api/ — /api/sitemap-index is rewritten from /sitemap.xml
 * and must be accessible for Google to crawl the sitemap index.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Only block genuinely private/internal paths — NOT /api/ (sitemap needs it)
        disallow: ["/admin/", "/studio/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
