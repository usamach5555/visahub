import type { Metadata } from "next";
import Link from "next/link";
import SearchFilter from "@/components/SearchFilter";
import AdSlot from "@/components/ads/AdSlot";
import { VISA_TYPES } from "@/data/visa-types";
import { COUNTRIES } from "@/data/countries";
import { faqSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Global Visa Guide Hub — Visa & Immigration Guides for 15+ Countries",
  description:
    "Your ultimate resource for study visas, work visas, tourist visas, and immigration guides for USA, UK, Canada, Australia, Germany, and 10+ more countries. Updated for 2026.",
  alternates: { canonical: "https://globalvisaguidehub.com" },
};

const homeFaqs = [
  {
    question: "Which countries have the easiest visa process in 2026?",
    answer:
      "UAE, Turkey, and Saudi Arabia are among the easiest for tourist visas, with e-visa systems and fast processing. Netherlands also has streamlined skilled migrant pathways.",
  },
  {
    question: "How can I improve my chances of visa approval?",
    answer:
      "Submit a complete application with all required documents, ensure your financial statements show consistent balances, provide a clear cover letter explaining your purpose, and apply well in advance of your travel date.",
  },
  {
    question: "Do I need a visa consultant to apply?",
    answer:
      "Not necessarily. Many applicants successfully apply on their own using official embassy websites and comprehensive guides like those found on this website. However, for complex cases (previous refusals, PR applications), a licensed consultant can be helpful.",
  },
  {
    question: "Can a tourist visa lead to permanent residency?",
    answer:
      "In most cases, no. Tourist visas are strictly for temporary stays and do not create a pathway to PR. You would need to transition to a work or study permit and then apply for PR through the appropriate program.",
  },
  {
    question: "What is the difference between a visa and a permit?",
    answer:
      "A visa is an endorsement in your passport that allows you to enter a country. A permit (work permit, study permit, residence permit) authorizes you to stay, work, or study once inside the country. Some countries issue both separately.",
  },
];

const visaColors: Record<string, { from: string; to: string; badge: string; text: string }> = {
  study:       { from: "from-blue-600",   to: "to-indigo-700",  badge: "bg-blue-100 text-blue-800",   text: "text-blue-700" },
  work:        { from: "from-violet-600", to: "to-purple-700",  badge: "bg-violet-100 text-violet-800", text: "text-violet-700" },
  tourist:     { from: "from-sky-500",    to: "to-cyan-600",    badge: "bg-sky-100 text-sky-800",     text: "text-sky-700" },
  immigration: { from: "from-emerald-600",to: "to-teal-700",    badge: "bg-emerald-100 text-emerald-800", text: "text-emerald-700" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />

      {/* ─── FULL SCREEN COVER ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f5c] via-[#1E40AF] to-[#1d4ed8]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl" />

        {/* Hero content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-white mb-8">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            Updated for 2026 · 500+ Free Visa Guides
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 max-w-4xl">
            Your Complete
            <br />
            <span className="text-accent-400">Visa &amp; Immigration</span>
            <br />
            Guide Worldwide
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Study abroad, work overseas, travel the world, or settle permanently. Step-by-step guides for{" "}
            <span className="text-white font-semibold">15+ countries</span> — 100% free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="#countries"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-base"
            >
              Browse Countries
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold rounded-2xl backdrop-blur-sm transition-all duration-200 text-base"
            >
              Read Visa Guides
            </Link>
          </div>

          {/* Floating country flags strip */}
          <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
            {COUNTRIES.map((c) => (
              <Link
                key={c.slug}
                href={`/country/${c.slug}`}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3 py-1.5 text-sm text-white/90 hover:text-white transition-all duration-150 backdrop-blur-sm"
              >
                <span className="text-base">{c.flag}</span>
                <span className="font-medium hidden sm:inline">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats strip at bottom of cover */}
        <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "15+", label: "Countries Covered" },
                { value: "500+", label: "Visa Guides" },
                { value: "4", label: "Visa Categories" },
                { value: "Free", label: "Always Free" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold text-accent-400">{s.value}</div>
                  <div className="text-xs text-blue-200 mt-1 font-medium tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISA CATEGORIES ────────────────────────────────────────────────── */}
      <section id="visa-types" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              Visa Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Find the Right Visa for Your Goal
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Whether you want to study, work, travel, or settle — choose your category and get a complete guide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VISA_TYPES.map((v) => {
              const colors = visaColors[v.slug];
              return (
                <Link
                  key={v.slug}
                  href={`/visa/${v.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
                >
                  {/* Gradient top bar */}
                  <div className={`h-2 w-full bg-gradient-to-r ${colors.from} ${colors.to}`} />
                  <div className="p-6 bg-white group-hover:bg-gray-50 transition-colors">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 bg-gradient-to-br ${colors.from} ${colors.to} shadow-md`}>
                      {v.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{v.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                      {v.shortDescription}
                    </p>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-bold ${colors.text} group-hover:gap-2.5 transition-all`}>
                      Full Guide
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── AD BANNER ──────────────────────────────────────────────────────── */}
      <div className="bg-gray-50 border-y border-gray-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSlot slot="banner" />
        </div>
      </div>

      {/* ─── COUNTRY SEARCH & GRID ──────────────────────────────────────────── */}
      <section id="countries" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent-50 text-accent-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              15 Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Find Visa Information by Country
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Search and filter by destination country and visa type to find exactly what you need.
            </p>
          </div>
          <SearchFilter />
        </div>
      </section>

      {/* ─── HOW IT WORKS ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Apply for Any Visa in 4 Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", icon: "🔍", title: "Choose Country", desc: "Select your destination from 15 countries with detailed guides." },
              { step: "02", icon: "📋", title: "Check Requirements", desc: "Review the exact documents, fees, and eligibility for your visa type." },
              { step: "03", icon: "📝", title: "Prepare & Apply", desc: "Follow our step-by-step checklist and submit a complete application." },
              { step: "04", icon: "✈️", title: "Travel Confidently", desc: "Get your visa approved and travel with all the knowledge you need." },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                {/* Step connector line */}
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gray-100 hidden lg:block -z-0" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 border-2 border-primary-100 flex items-center justify-center text-3xl mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold text-primary-400 mb-1 tracking-widest">STEP {item.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-indigo-800 py-16">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-5xl mb-4">📚</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            500+ Free Visa Guides — Updated for 2026
          </h2>
          <p className="text-blue-200 text-base mb-8 max-w-xl mx-auto">
            From step-by-step application walkthroughs to country-specific fee breakdowns — we have every scenario covered.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Browse All Guides
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── SEO CONTENT ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
              In-Depth Resource
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Complete Visa &amp; Immigration Guide 2026
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything you need to know about applying for visas and immigrating to the world&apos;s top destinations.
            </p>
          </div>

          <article className="prose-article space-y-8">
            <div className="bg-primary-50 border-l-4 border-primary-600 rounded-r-xl p-5">
              <p className="text-gray-700 leading-relaxed">
                Applying for a visa is often the most stressful part of any international journey. The global immigration landscape changes constantly — governments update policies, introduce digital systems, and adjust fee structures every year. <strong>Global Visa Guide Hub</strong> provides accurate, easy-to-understand visa information for the world&apos;s most popular destination countries, all in one place and completely free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "🎓", title: "Study Visa", desc: "A study visa allows international students to live and study abroad. Countries like Canada, Australia, and the UK offer post-study work rights that can lead to permanent residency.", href: "/visa/study" },
                { icon: "💼", title: "Work Visa", desc: "Work visas authorize foreign nationals to be employed in another country — from employer-sponsored visas (USA H-1B, UK Skilled Worker) to points-based systems (Canada Express Entry).", href: "/visa/work" },
                { icon: "✈️", title: "Tourist Visa", desc: "Tourist visas allow temporary entry for leisure, sightseeing, and visiting family. The Schengen visa covers 27 European countries in a single application.", href: "/visa/tourist" },
                { icon: "🏠", title: "Permanent Residency", desc: "PR gives foreign nationals the right to live and work indefinitely. Canada's Express Entry, Australia's SkillSelect, and Germany's settlement permit are popular pathways.", href: "/visa/immigration" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group flex gap-4 p-5 bg-gray-50 hover:bg-primary-50 rounded-2xl border border-gray-100 hover:border-primary-200 transition-all duration-200">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-primary-800 mb-1 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-primary-800">How to Choose the Right Country</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Purpose", desc: "Each visa type has different requirements. Define your goal — study, work, visit, or settle — before choosing a destination." },
                { title: "Processing Time", desc: "UAE and Turkey process visas in days. USA and UK can take months. Plan your timeline carefully." },
                { title: "Cost of Living", desc: "Germany and Turkey are affordable. Switzerland and Norway are expensive. Financial requirements reflect this." },
                { title: "PR Pathway", desc: "Canada, Australia, and Germany have transparent routes from work/study visas to permanent residency." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-accent-500 font-bold text-lg shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-primary-800">Common Visa Mistakes to Avoid</h2>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <ul className="space-y-3">
                {[
                  "Incomplete or unsigned application forms",
                  "Unexplained large bank deposits that raise fraud concerns",
                  "Photographs that do not meet official size or background specifications",
                  "Applying too late — always allow at least 4–8 weeks before your travel date",
                  "Missing travel insurance (mandatory for Schengen and many other destinations)",
                  "Misrepresenting information — discrepancies cause immediate rejection",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-red-400 shrink-0 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary-800">Frequently Asked Questions</h2>
          </article>

          {/* FAQ */}
          <div className="mt-5 space-y-3">
            {homeFaqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-2xl overflow-hidden"
              >
                <summary className="px-5 py-4 font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between hover:bg-primary-50 transition-colors">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-primary-600 shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 py-4 text-sm text-gray-700 bg-primary-50 border-t border-gray-200 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POPULAR COUNTRIES STRIP ────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
            Explore All Destinations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
            {COUNTRIES.map((c) => (
              <Link
                key={c.slug}
                href={`/country/${c.slug}`}
                className="group flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200"
              >
                <span className="text-3xl">{c.flag}</span>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-primary-800 transition-colors text-center leading-tight">
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
