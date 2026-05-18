import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { parseSlug, generateAllProgrammaticSlugs } from "@/lib/slug-parser";
import { generatePageContent } from "@/lib/page-content";
import { getCountryBySlug } from "@/data/countries-extended";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return generateAllProgrammaticSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return { title: "Page Not Found" };
  const country = getCountryBySlug(parsed.countrySlug);
  if (!country) return { title: "Page Not Found" };
  const content = generatePageContent(country, parsed.visaType, parsed.pageType);
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `https://www.visaprocessinfo.com/${slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://www.visaprocessinfo.com/${slug}`,
      type: "article",
      siteName: "VisaProcessInfo",
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

const PAGE_TYPE_BADGE: Record<string, string> = {
  "country-hub": "Country Hub",
  "embassy": "Embassy Guide",
  "apply": "Apply Guide",
  "how-to": "How-To Guide",
  "details": "Full Details",
  "requirements": "Requirements",
  "fees": "Fees Guide",
  "documents": "Documents",
  "processing-time": "Processing Time",
  "rejection": "Avoid Refusal",
  "interview": "Interview Tips",
  "success-tips": "Success Tips",
  "checklist": "Checklist",
  "extension": "Extension Guide",
  "faq": "FAQ",
  "financial": "Financial Guide",
  "language": "Language Guide",
};

const PAGE_TYPE_COLOR: Record<string, string> = {
  "country-hub": "from-primary-900 via-primary-800 to-primary-700",
  "embassy": "from-slate-900 via-slate-800 to-slate-700",
  "apply": "from-primary-900 via-primary-800 to-primary-700",
  "how-to": "from-indigo-900 via-indigo-800 to-indigo-700",
  "details": "from-primary-900 via-primary-800 to-primary-700",
  "requirements": "from-violet-900 via-violet-800 to-violet-700",
  "fees": "from-emerald-900 via-emerald-800 to-emerald-700",
  "documents": "from-blue-900 via-blue-800 to-blue-700",
  "processing-time": "from-amber-900 via-amber-800 to-amber-700",
  "rejection": "from-red-900 via-red-800 to-red-700",
  "interview": "from-purple-900 via-purple-800 to-purple-700",
  "success-tips": "from-teal-900 via-teal-800 to-teal-700",
  "checklist": "from-cyan-900 via-cyan-800 to-cyan-700",
  "extension": "from-orange-900 via-orange-800 to-orange-700",
  "faq": "from-primary-900 via-primary-800 to-primary-700",
  "financial": "from-green-900 via-green-800 to-green-700",
  "language": "from-pink-900 via-pink-800 to-pink-700",
};

export default async function ProgrammaticPage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  const country = getCountryBySlug(parsed.countrySlug);
  if (!country) notFound();

  const content = generatePageContent(country, parsed.visaType, parsed.pageType);
  const visaLabel = parsed.visaType.charAt(0).toUpperCase() + parsed.visaType.slice(1);
  const diff = country.difficulty[parsed.visaType];
  const pt = parsed.pageType ?? "details";

  const difficultyColor: Record<string, string> = {
    Easy: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    Moderate: "bg-amber-100 text-amber-700 border border-amber-200",
    Complex: "bg-red-100 text-red-700 border border-red-200",
  };

  const heroGradient = PAGE_TYPE_COLOR[pt] ?? "from-primary-900 via-primary-800 to-primary-700";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.heroTitle,
    description: content.metaDescription,
    author: { "@type": "Organization", name: "VisaProcessInfo", url: "https://www.visaprocessinfo.com" },
    publisher: { "@type": "Organization", name: "VisaProcessInfo", url: "https://www.visaprocessinfo.com", logo: { "@type": "ImageObject", url: "https://www.visaprocessinfo.com/favicon.ico" } },
    url: `https://www.visaprocessinfo.com/${slug}`,
    mainEntityOfPage: `https://www.visaprocessinfo.com/${slug}`,
    dateModified: new Date().toISOString(),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.visaprocessinfo.com" },
      { "@type": "ListItem", position: 2, name: country.name, item: `https://www.visaprocessinfo.com/${country.slug}-visa-info` },
      { "@type": "ListItem", position: 3, name: content.heroTitle, item: `https://www.visaprocessinfo.com/${slug}` },
    ],
  };

  const isCountryLevel = pt === "country-hub" || pt === "embassy";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ── */}
      <div className={`bg-gradient-to-br ${heroGradient} text-white pt-24 pb-16`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-6 flex flex-wrap items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${country.slug}-visa-info`} className="hover:text-white transition-colors">{country.name}</Link>
            {!isCountryLevel && (
              <>
                <span>/</span>
                <Link href={`/${country.slug}-${parsed.visaType}-visa-details`} className="hover:text-white transition-colors capitalize">{parsed.visaType} Visa</Link>
                <span>/</span>
                <span className="text-white/80">{PAGE_TYPE_BADGE[pt]}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
            <div className="w-20 h-14 rounded-xl overflow-hidden shadow-lg border-2 border-white/20 flex-shrink-0">
              <Image
                src={`https://flagcdn.com/w160/${country.code}.png`}
                alt={`${country.name} flag`}
                width={160}
                height={112}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full border border-white/30">
                  {PAGE_TYPE_BADGE[pt]}
                </span>
                {!isCountryLevel && (
                  <>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${difficultyColor[diff] ?? "bg-gray-100 text-gray-700"}`}>
                      {diff} Difficulty
                    </span>
                    <span className="text-xs font-bold bg-white/15 text-white/90 px-3 py-1 rounded-full border border-white/25">
                      {visaLabel} Visa
                    </span>
                  </>
                )}
                <span className="text-xs font-bold bg-white/15 text-white/90 px-3 py-1 rounded-full border border-white/25">
                  {country.region}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
                {content.heroTitle}
              </h1>
            </div>
          </div>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mb-6">
            {content.heroSubtitle}
          </p>

          {/* Stats bar — only for visa-specific pages */}
          {!isCountryLevel && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Government Fee", value: `${country.currency} ${country.visaFees[parsed.visaType]}` },
                { label: "Processing Time", value: country.processingDays[parsed.visaType] },
                { label: "Difficulty", value: diff },
                { label: "Capital", value: country.capital },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20">
                  <div className="text-xs text-white/60 mb-1">{stat.label}</div>
                  <div className="font-bold text-white text-sm">{stat.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Left Content Column ── */}
          <div className="lg:col-span-2 space-y-10">

            {/* Quick Facts Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h2 className="font-bold text-blue-900 text-lg mb-4">
                Quick Facts: {country.name} {!isCountryLevel ? `${visaLabel} Visa` : "Visa Overview"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Capital", value: country.capital },
                  { label: "Currency", value: country.currency },
                  { label: "Language Requirement", value: country.languageRequirement },
                  { label: "Region", value: country.region },
                  ...(!isCountryLevel ? [
                    { label: "Visa Fee", value: `${country.currency} ${country.visaFees[parsed.visaType]}` },
                    { label: "Processing Time", value: country.processingDays[parsed.visaType] },
                    { label: "Difficulty", value: diff },
                    { label: "Official Portal", value: country.officialImmigrationUrl.replace("https://", "").replace("www.", "") },
                  ] : [
                    { label: "Study Visa Fee", value: `${country.currency} ${country.visaFees.study}` },
                    { label: "Work Visa Fee", value: `${country.currency} ${country.visaFees.work}` },
                    { label: "Visit Visa Fee", value: `${country.currency} ${country.visaFees.visit}` },
                    { label: "Official Portal", value: country.officialImmigrationUrl.replace("https://", "").replace("www.", "") },
                  ]),
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">&#x2713;</span>
                    <div>
                      <span className="font-semibold text-blue-800 text-sm">{item.label}:</span>{" "}
                      <span className="text-blue-700 text-sm">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Sections */}
            {content.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  {section.heading}
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-3 text-[15px]">
                  {section.body.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: para
                          .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                          .replace(/\n/g, "<br/>")
                          .replace(/☐/g, '<span class="inline-block w-4 h-4 border-2 border-gray-400 rounded mr-2 align-middle flex-shrink-0"></span>'),
                      }}
                    />
                  ))}
                </div>
              </section>
            ))}

            {/* Application Steps (apply / how-to pages) */}
            {(pt === "apply" || pt === "how-to" || pt === "checklist") && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  Application Steps Overview
                </h2>
                <div className="space-y-4">
                  {content.steps.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="w-9 h-9 bg-primary-800 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{step.title}</div>
                        <div className="text-sm text-gray-600 leading-relaxed">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Documents Checklist */}
            {(pt === "apply" || pt === "details" || pt === "documents" || pt === "requirements" || pt === "checklist") && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  Required Documents Checklist
                </h2>
                <div className="space-y-2">
                  {content.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-primary-200 transition-colors">
                      <div className="w-5 h-5 rounded border-2 border-gray-300 flex-shrink-0 mt-0.5"></div>
                      <span className="text-sm text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ Accordion */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {content.faqs.map((faq, i) => (
                  <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-primary-50 transition-colors font-semibold text-gray-900 text-sm gap-3">
                      <span>{faq.question}</span>
                      <span className="text-gray-400 group-open:rotate-180 transition-transform duration-200 text-lg flex-shrink-0">&#x25BE;</span>
                    </summary>
                    <div className="p-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-white">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-6">

            {/* Eligibility Checker CTA */}
            <div className="bg-gradient-to-br from-primary-800 to-primary-700 text-white rounded-2xl p-5 shadow-lg">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-bold text-lg mb-1">Check Your Eligibility</h3>
              <p className="text-white/70 text-sm mb-4">
                Find out your chances of getting a {country.name} visa in under 2 minutes.
              </p>
              <Link
                href="/tools/eligibility-checker"
                className="block w-full bg-white text-primary-800 font-semibold text-sm py-2.5 rounded-xl text-center hover:bg-primary-50 transition-colors"
              >
                Free Eligibility Check →
              </Link>
            </div>

            {/* Cost Calculator CTA */}
            <div className="bg-accent-500 text-white rounded-2xl p-5 shadow-lg">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-bold text-lg mb-1">Calculate Visa Cost</h3>
              <p className="text-white/80 text-sm mb-4">
                Get a full fee breakdown for your {country.name} {!isCountryLevel ? `${visaLabel}` : ""} visa.
              </p>
              <Link
                href="/tools/cost-calculator"
                className="block w-full bg-white text-accent-700 font-semibold text-sm py-2.5 rounded-xl text-center hover:bg-accent-50 transition-colors"
              >
                Cost Calculator →
              </Link>
            </div>

            {/* Key Facts */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Why {country.name}?</h3>
              <ul className="space-y-2">
                {country.popularFor.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">&#x2713;</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Country Key Facts */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Key Facts</h3>
              <ul className="space-y-2">
                {country.keyFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary-600 mt-0.5 flex-shrink-0">&#x25CF;</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Internal Links */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Related Guides</h3>
              <ul className="space-y-1.5">
                {content.internalLinks.slice(0, 10).map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-700 hover:text-primary-900 hover:underline transition-colors block py-0.5"
                    >
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Resources */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <h3 className="font-bold text-amber-900 mb-3 text-sm">Official Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href={country.officialImmigrationUrl} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-amber-700 hover:text-amber-900 hover:underline">
                    🏛 Official Immigration Portal
                  </a>
                </li>
                <li>
                  <a href={country.embassyUrl} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-amber-700 hover:text-amber-900 hover:underline">
                    🌐 Embassy & Consulate Finder
                  </a>
                </li>
              </ul>
              <p className="text-xs text-amber-600 mt-3 leading-relaxed">
                Always verify current requirements at official sources before submitting your application.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Internal Links Bar ── */}
      <div className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Explore More {country.name} Visa Guides</h2>
          <p className="text-sm text-gray-500 mb-5">Complete guides for every aspect of your {country.name} visa journey.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {content.internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 hover:border-primary-300 hover:text-primary-800 hover:bg-primary-50 transition-all text-center font-medium leading-tight"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
