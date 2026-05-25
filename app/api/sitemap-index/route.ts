import { NextResponse } from "next/server";

/**
 * GET /api/sitemap-index  (rewritten from /sitemap.xml via next.config.mjs)
 *
 * Returns a Sitemap Index XML file pointing to all sub-sitemaps.
 * Next.js with generateSitemaps() creates /sitemap/0.xml, /sitemap/1.xml, etc.
 * The root /sitemap.xml is not auto-generated and the [slug] catch-all was
 * intercepting it → 404. This API route + a rewrite rule fixes that.
 */

const BASE = "https://www.visaprocessinfo.com";

// Must match the number returned by generateSitemaps() in app/sitemap.ts
// (total entries ÷ 2500, currently 5 sitemaps for ~10,600+ pages)
const NUM_SITEMAPS = 5;

export const revalidate = 3600; // Re-generate every hour

export async function GET() {
  const now = new Date().toISOString();

  const sitemapEntries = Array.from({ length: NUM_SITEMAPS }, (_, i) => `
  <sitemap>
    <loc>${BASE}/sitemap/${i}.xml</loc>
    <lastmod>${now}</lastmod>
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
