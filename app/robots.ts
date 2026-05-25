import { MetadataRoute } from "next";

const BASE = "https://www.visaprocessinfo.com";

/**
 * robots.ts — served at /robots.txt
 *
 * IMPORTANT: Do NOT disallow /_next/ — Googlebot needs access to Next.js JS
 * bundles to render the page (required for full JavaScript rendering).
 * Blocking /_next/ causes "Indexed, though blocked by robots.txt" warnings.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Only block genuinely private/internal paths
        // /_next/ intentionally NOT blocked — Googlebot needs it for rendering
        disallow: ["/api/", "/admin/", "/studio/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
