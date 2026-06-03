import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  EDITORIAL_ARTICLES,
  getEditorialBySlug,
  getAllEditorialSlugs,
} from "@/data/editorial-articles";
import { breadcrumbSchema, articleSchema } from "@/lib/jsonld";
import AdSlot from "@/components/ads/AdSlot";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllEditorialSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getEditorialBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDescription,
    keywords: article.tags,
    alternates: { canonical: `https://www.visaprocessinfo.com/guides/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  "problem-solving": "Problem Solving",
  rejection: "Rejection Analysis",
  comparison: "Visa Comparison",
};

const CATEGORY_COLORS: Record<string, string> = {
  "problem-solving": "bg-blue-100 text-blue-800 border-blue-200",
  rejection: "bg-red-100 text-red-800 border-red-200",
  comparison: "bg-violet-100 text-violet-800 border-violet-200",
};

export default async function EditorialGuidePage({ params }: Props) {
  const { slug } = await params;
  const article = getEditorialBySlug(slug);
  if (!article) notFound();

  const relatedArticles = EDITORIAL_ARTICLES.filter(
    (a) => a.slug !== slug && a.category === article.category
  ).slice(0, 3);

  const articleLd = articleSchema({
    title: article.title,
    description: article.metaDescription,
    url: `https://www.visaprocessinfo.com/guides/${article.slug}`,
    publishedAt: article.publishedAt,
  });

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: "https://www.visaprocessinfo.com" },
    { name: "Visa Guides", url: "https://www.visaprocessinfo.com/guides" },
    { name: article.title, url: `https://www.visaprocessinfo.com/guides/${article.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white pt-24 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/guides" className="text-white/60 hover:text-white transition-colors">Visa Guides</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80 truncate max-w-xs">{article.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${CATEGORY_COLORS[article.category]}`}>
              {CATEGORY_LABELS[article.category]}
            </span>
            <span className="text-xs text-white/50">·</span>
            <span className="text-xs text-white/60">{article.readingTimeMinutes} min read</span>
            <span className="text-xs text-white/50">·</span>
            <span className="text-xs text-white/60">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4 max-w-3xl">
            {article.title}
          </h1>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl">
            {article.metaDescription}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <article className="lg:col-span-2">

            {/* Trust signals */}
            <div className="flex flex-wrap gap-2 text-xs mb-8">
              <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-3 py-1.5 font-medium">
                ✓ Researched from official government sources
              </span>
              <span className="flex items-center gap-1.5 bg-primary-50 text-primary-700 border border-primary-200 rounded-full px-3 py-1.5 font-medium">
                Reviewed by immigration editors
              </span>
            </div>

            {/* Article sections */}
            <div className="space-y-8">
              {article.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="text-xl font-bold text-primary-800 mb-3 pb-2 border-b border-gray-100">
                    {section.heading}
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                    {section.body.split("\n\n").map((para, pi) => {
                      // Render table blocks
                      if (para.startsWith("|")) {
                        const rows = para.trim().split("\n").filter((r) => !r.match(/^\|[-| ]+\|$/));
                        return (
                          <div key={pi} className="overflow-x-auto my-4">
                            <table className="text-xs w-full border-collapse">
                              <tbody>
                                {rows.map((row, ri) => (
                                  <tr key={ri} className={ri === 0 ? "bg-primary-50" : ri % 2 === 0 ? "bg-gray-50" : ""}>
                                    {row.split("|").filter((_, ci) => ci > 0 && ci < row.split("|").length - 1).map((cell, ci) => (
                                      ri === 0
                                        ? <th key={ci} className="border border-gray-200 px-3 py-2 text-left font-semibold text-primary-800">{cell.trim()}</th>
                                        : <td key={ci} className="border border-gray-200 px-3 py-2 text-gray-700">{cell.trim()}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                      // Render bullet lists
                      if (para.includes("\n- ") || para.startsWith("- ")) {
                        const lines = para.split("\n");
                        return (
                          <div key={pi} className="my-3">
                            {lines.map((line, li) =>
                              line.startsWith("- ") ? (
                                <div key={li} className="flex items-start gap-2 mb-1.5">
                                  <span className="text-primary-500 mt-1 shrink-0">•</span>
                                  <span dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                                </div>
                              ) : (
                                <p key={li} className="mb-2" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                              )
                            )}
                          </div>
                        );
                      }
                      // Numbered lists
                      if (para.match(/^\d+\./)) {
                        const lines = para.split("\n");
                        return (
                          <ol key={pi} className="my-3 space-y-2 list-decimal list-inside">
                            {lines.map((line, li) => (
                              <li key={li} className="text-gray-700" dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s*/, "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                            ))}
                          </ol>
                        );
                      }
                      // Normal paragraph
                      return (
                        <p key={pi} className="mb-3" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                      );
                    })}
                  </div>
                  {/* Ad after every 5th section */}
                  {i === 4 && (
                    <div className="mt-6">
                      <AdSlot slot="in-content" />
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>

            {/* Editorial disclaimer */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-lg mt-0.5">🛡️</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5">About This Guide</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    This guide was researched from official government immigration sources and reviewed by our editorial team. Immigration policies and requirements change frequently — always verify current requirements directly with official government portals before submitting any application. This guide does not constitute legal advice.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <Link href="/editorial-policy" className="text-xs text-primary-700 font-medium hover:underline">
                      Our editorial standards →
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="/contact" className="text-xs text-primary-700 font-medium hover:underline">
                      Report an inaccuracy →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related guides */}
            {relatedArticles.length > 0 && (
              <div className="mt-10">
                <h3 className="font-bold text-primary-800 mb-4 text-lg">Related Guides</h3>
                <div className="grid gap-4">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/guides/${rel.slug}`}
                      className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-sm transition-all"
                    >
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[rel.category]}`}>
                        {CATEGORY_LABELS[rel.category]}
                      </span>
                      <p className="font-semibold text-primary-800 mt-2 text-sm leading-snug">{rel.title}</p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{rel.metaDescription}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sticky top-20">
              <h3 className="font-bold text-primary-800 mb-4">Guide Info</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Category</dt>
                  <dd>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[article.category]}`}>
                      {CATEGORY_LABELS[article.category]}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Reading Time</dt>
                  <dd className="text-gray-900">{article.readingTimeMinutes} minutes</dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Published</dt>
                  <dd className="text-gray-900">
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Last Verified</dt>
                  <dd className="text-emerald-700 font-medium text-xs">
                    {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })} ✓
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500 text-xs uppercase tracking-wide mb-1">Content Type</dt>
                  <dd className="text-gray-900 text-xs">Expert editorial guide</dd>
                </div>
              </dl>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href="/editorial-policy" className="text-xs text-primary-600 hover:underline font-medium block mb-2">
                  📋 Our editorial standards →
                </Link>
                <Link href="/disclaimer" className="text-xs text-gray-500 hover:underline block">
                  Legal disclaimer →
                </Link>
              </div>
            </div>

            <AdSlot slot="sidebar" />

            {/* Browse all guides */}
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5">
              <h4 className="font-bold text-primary-800 mb-3 text-sm">Browse All Guides</h4>
              <div className="space-y-2">
                {(["problem-solving", "rejection", "comparison"] as const).map((cat) => (
                  <Link
                    key={cat}
                    href={`/guides?category=${cat}`}
                    className="block text-sm text-primary-700 hover:text-primary-900 hover:underline py-1"
                  >
                    {CATEGORY_LABELS[cat]} guides →
                  </Link>
                ))}
                <Link href="/guides" className="block text-sm font-semibold text-primary-700 hover:underline pt-1 border-t border-primary-200 mt-2">
                  All editorial guides →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
