import Link from "next/link";
import { GraduationCap, Briefcase, Plane, Home, BookOpen } from "lucide-react";
import { ArticleMeta } from "@/lib/articles";

function VisaIcon({ type }: { type: string }) {
  const cls = "w-5 h-5 text-primary-600";
  if (type === "study")       return <GraduationCap className={cls} />;
  if (type === "work")        return <Briefcase className={cls} />;
  if (type === "tourist")     return <Plane className={cls} />;
  if (type === "immigration") return <Home className={cls} />;
  return <BookOpen className={cls} />;
}

export default function RelatedArticles({ articles }: { articles: ArticleMeta[] }) {
  if (!articles.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
      <div className="grid gap-3">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <VisaIcon type={a.visaType} />
            </div>
            <div>
              <p className="font-medium text-gray-900 group-hover:text-primary-800 transition-colors text-sm leading-snug">
                {a.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {a.category} &middot; {a.readingTimeMinutes} min read
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
