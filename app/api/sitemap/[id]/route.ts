/**
 * GET /api/sitemap/[id]
 *
 * Serves individual sitemap XML files.
 * Moved under /api/ to avoid conflict with app/sitemap.ts special file,
 * which was causing Next.js to block the /sitemap/[id] route.
 */

import { NextRequest, NextResponse } from "next/server";
import { getSitemapChunk, getSitemapCount } from "@/lib/sitemap-data";

export const dynamic = "force-dynamic";

function xmlEscape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: rawId } = await params;
  const id = parseInt(rawId, 10);
  const total = getSitemapCount();

  if (isNaN(id) || id < 0 || id >= total) {
    return new NextResponse(`Sitemap ${rawId} not found (total: ${total})`, { status: 404 });
  }

  const entries = getSitemapChunk(id);

  const urlNodes = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${xmlEscape(e.url)}</loc>\n    <lastmod>${e.lastModified}</lastmod>\n    <changefreq>${e.changeFrequency}</changefreq>\n    <priority>${e.priority.toFixed(2)}</priority>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlNodes}\n</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
