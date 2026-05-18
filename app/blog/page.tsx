import type { Metadata } from "next";
import { ALL_ARTICLES } from "@/lib/articles";
import BlogList from "./BlogList";
import { itemListSchema } from "@/lib/jsonld";
import { BLOG_KEYWORDS } from "@/lib/seo-keywords";

export const metadata: Metadata = {
  title: "Visa & Immigration Blog — 10,000+ Guides for 2026",
  description:
    "Browse 10,000+ visa and immigration guides covering study visas, work permits, tourist visas, and PR pathways for 131 countries including USA, UK, Canada, Australia, and Germany.",
  alternates: { canonical: "https://www.visaprocessinfo.com/blog" },
  keywords: BLOG_KEYWORDS,
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-3">
          Visa &amp; Immigration Guides
        </h1>
        <p className="text-gray-600 max-w-2xl">
          {ALL_ARTICLES.length}+ free guides covering every visa type, country, and immigration scenario. Updated for {new Date().getFullYear()}.
        </p>
      </div>
      <BlogList articles={ALL_ARTICLES} />
    </div>
  );
}
