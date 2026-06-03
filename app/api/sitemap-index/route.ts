/**
 * GET /api/sitemap-index  (rewritten from /sitemap.xml via next.config.mjs)
 *
 * Returns a Sitemap Index XML pointing to all sub-sitemaps.
 * Sub-sitemaps are at /api/sitemap/[id] to avoid conflict with
 * the app/sitemap.ts special Next.js file.
 */

import { NextResponse } from "next/server";
import { getSitemapCount } from "@/lib/sitemap-data";

export const dynamic = "force-dynamic";

const BASE = "https://www.visaprocessinfo.com";

export async function GET() {
  const numSitemaps = getSitemapCount();
  const now = new Date().toISOString();

  const sitemapEntries = Array.from({ length: numSitemaps }, (_, i) => `
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
