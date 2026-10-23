/**
 * GET /api/sitemap-index  (rewritten from /sitemap.xml via next.config.mjs)
 *
 * Returns a Sitemap Index XML pointing to all sub-sitemaps.
 * Sub-sitemaps are at /api/sitemap/[id] to avoid conflict with
 * the app/sitemap.ts special Next.js file.
 */

import { NextResponse } from "next/server";
import { getSitemapCount, CONTENT_LAST_VERIFIED } from "@/lib/sitemap-data";

const BASE = "https://visaprocessinfo.com";

export async function GET() {
  const numSitemaps = getSitemapCount();
  // Honest, static lastmod — matches CONTENT_LAST_VERIFIED in lib/sitemap-data.ts.
  // Previously this used new Date().toISOString(), which made every sub-sitemap
  // look freshly modified on every single crawl regardless of whether anything
  // actually changed — an invented freshness signal search engines discount or
  // penalize. getSitemapCount() is a pure function of static data, so this
  // route has no runtime dependency requiring force-dynamic; removing it lets
  // Next.js serve this route statically.
  const lastmod = `${CONTENT_LAST_VERIFIED}T00:00:00Z`;

  const sitemapEntries = Array.from({ length: numSitemaps }, (_, i) => `
  <sitemap>
    <loc>${BASE}/sitemap/${i}.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapEntries}
</sitemapindex>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
