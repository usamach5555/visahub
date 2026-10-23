import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VisaProcessInfo is a free, independent visa information site launched in 2026. How we research guides, what we do not do, and how to report an error.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const PRINCIPLES = [
  {
    title: "Official sources first",
    body: "Every country page links to that country's own immigration authority. Rules, fees and processing times are set by governments and change often, so the official page is always the final word.",
  },
  {
    title: "No invented numbers",
    body: "Where we have not checked a fee against the official schedule, we say so and link to it instead of printing a guess.",
  },
  {
    title: "Corrections welcome",
    body: "If something is out of date, tell us. We check the report against the official source and update the page.",
  },
  {
    title: "Independent",
    body: "We are not a visa agency, law firm or government body, we do not take agency sponsorships, and nothing on this site is legal advice.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">About VisaProcessInfo</h1>
          <p className="text-lg text-white/90">
            A free, independent guide to visa and immigration processes — written to help you understand the steps and
            find the right official page.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-14 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-primary-800 mb-4">What this site is</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            VisaProcessInfo launched in 2026. It brings together, in plain language, how study, work, visit, business and
            permanent-residence visas work for 127 countries, plus free tools such as a document checklist and a
            processing-time estimator.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our most detailed guides cover the destinations people ask about most — the United States, United Kingdom,
            Canada, Australia, Germany and the UAE. Other country pages give an overview and point you to the official
            immigration authority for current requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary-800 mb-6">How we work</h2>
          <ul className="space-y-5">
            {PRINCIPLES.map((p) => (
              <li key={p.title} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-700 shrink-0 mt-1" aria-hidden />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-6">
            Read the full <Link href="/editorial-policy" className="text-primary-700 underline">editorial policy</Link>.
          </p>
        </section>

        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-amber-900 mb-2">Important</h2>
          <p className="text-amber-900 text-sm leading-relaxed">
            Visa decisions are made only by the relevant government. Always confirm requirements, fees and timelines on the
            official website before you apply or pay anything. For complex cases, speak to a registered immigration adviser
            or lawyer in the destination country.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Contact and corrections</h2>
          <p className="text-gray-700 leading-relaxed">
            Found an error or an outdated fee? Use the <Link href="/contact" className="text-primary-700 underline">contact page</Link> and
            include the link to the official source if you have it.
          </p>
        </section>
      </div>
    </>
  );
}
