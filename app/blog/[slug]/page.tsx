import { notFound, permanentRedirect } from "next/navigation";
import { getArticleBySlug } from "@/lib/articles";
import { getCountryBySlug } from "@/data/countries-extended";
import { CURATED_COMBOS, guidePath, hubPath } from "@/lib/index-policy";

/**
 * The 500 /blog/* posts were assembled from shared paragraph pools and were
 * near-duplicates of each other and of the country pages. They now
 * permanently redirect to the closest page with real content.
 */
interface Props {
  params: Promise<{ slug: string }>;
}

const VISA_ALIAS: Record<string, string> = { tourist: "visit" };

export default async function BlogPostRedirect({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const country = article.country && getCountryBySlug(article.country) ? article.country : null;
  if (!country) permanentRedirect("/guides");

  const visa = VISA_ALIAS[article.visaType] ?? article.visaType;
  if (CURATED_COMBOS.has(`${country}-${visa}`)) permanentRedirect(guidePath(country, visa));
  permanentRedirect(hubPath(country));
}
