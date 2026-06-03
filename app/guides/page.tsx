import type { Metadata } from "next";
import Link from "next/link";
import { EDITORIAL_ARTICLES } from "@/data/editorial-articles";

export const metadata: Metadata = {
  title: "Visa Guides — Expert Immigration Advice",
  description:
    "In-depth visa guides covering rejection analysis, problem-solving, and country comparisons. Expert immigration editorial content to help you apply with confidence.",
  alternates: { canonical: "https://www.visaprocessinfo.com/guides" },
};

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

const CATEGORY_ICONS: Record<string, string> = {
  "problem-solving": "🔧",
  rejection: "📋",
  comparison: "⚖️",
};

const categories = ["problem-solving", "rejection", "comparison"] as const;

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-28 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            Expert Visa Guides
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            In-Depth Visa &amp; Immigration Guides
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Editorial guides covering visa rejection analysis, problem-solving for complex cases, and head-to-head country comparisons — researched from official government sources.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((cat) => {
          const articles = EDITORIAL_ARTICLES.filter((a) => a.category === cat);
          return (
            <div key={cat} className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{CATEGORY_ICONS[cat]}</span>
                <div>
                  <h2 className="text-2xl font-bold text-primary-800">{CATEGORY_LABELS[cat]}</h2>
                  <p className="text-sm text-gray-500">{articles.length} guides</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/guides/${article.slug}`}
                    className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-300 hover:shadow-md transition-all group"
                  >
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${CATEGORY_COLORS[cat]}`}>
                      {CATEGORY_LABELS[cat]}
                    </span>
                    <h3 className="font-bold text-primary-800 mt-3 mb-2 text-sm leading-snug group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {article.metaDescription}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                      <span>{article.readingTimeMinutes} min read</span>
                      <span className="text-primary-600 font-medium group-hover:underline">Read guide →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
