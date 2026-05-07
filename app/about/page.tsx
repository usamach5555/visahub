import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Global Visa Guide Hub",
  description:
    "Learn about Global Visa Guide Hub — your free, independent immigration information resource covering visa guides for 15+ countries. Our mission, team, and editorial standards.",
  alternates: { canonical: "https://globalvisaguidehub.com/about" },
};

const STATS = [
  { value: "15+", label: "Countries Covered" },
  { value: "500+", label: "Free Visa Guides" },
  { value: "5", label: "Visa Categories" },
  { value: "2020", label: "Founded" },
];

const TEAM = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Immigration Editor",
    bio: "Former consular officer with 12 years of experience processing visa applications for the UK Home Office. Sarah founded Global Visa Guide Hub to make immigration information accessible to everyone.",
    flag: "🇬🇧",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Middle East & Gulf Region Editor",
    bio: "Immigration consultant specialising in UAE, Saudi Arabia, and Turkey immigration pathways. Ahmed has assisted over 2,000 families relocate to the Gulf region since 2015.",
    flag: "🇦🇪",
  },
  {
    name: "Priya Sharma",
    role: "South & Southeast Asia Editor",
    bio: "International student advisor and former visa application centre manager. Priya covers study visa pathways for students from South Asia applying to Canada, UK, and Australia.",
    flag: "🇨🇦",
  },
  {
    name: "Marco Rossi",
    role: "European Immigration Editor",
    bio: "Licensed immigration lawyer based in Milan with expertise in Schengen visas, EU Blue Card, and long-term EU residence permits. Marco updates all European country guides quarterly.",
    flag: "🇮🇹",
  },
];

const VALUES = [
  {
    icon: "🎯",
    title: "Accuracy First",
    description:
      "Every guide is researched from official government sources — embassy websites, immigration authority portals, and official legislation. We cite our sources and update guides when policies change.",
  },
  {
    icon: "🆓",
    title: "Always Free",
    description:
      "All our visa guides, checklists, and process walkthroughs are completely free. We are supported by advertising revenue, not by charging users for information that should be publicly available.",
  },
  {
    icon: "🔄",
    title: "Regularly Updated",
    description:
      "Immigration policies change frequently. Our editorial team reviews all guides quarterly and publishes urgent updates whenever a country announces a policy change that affects applicants.",
  },
  {
    icon: "⚖️",
    title: "Independent & Impartial",
    description:
      "We are not affiliated with any government, embassy, or immigration firm. Our guides are independent, unbiased, and written solely to help applicants understand their options.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span>🌍</span> Independent · Free · Trusted
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            About Global Visa Guide Hub
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            We are a team of former immigration officers, consular staff, and
            international student advisors committed to making visa information
            free, accurate, and easy to understand for everyone.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold text-primary-700">{s.value}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Mission */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Global Visa Guide Hub was founded in 2020 with a simple
                mission: to provide accurate, up-to-date, and free visa and
                immigration information to anyone who needs it — regardless of
                their background or budget.
              </p>
              <p>
                We believe that access to clear immigration information should
                not be a privilege. Every year, thousands of visa applications
                are rejected not because applicants are ineligible, but because
                they submitted the wrong documents, misunderstood a
                requirement, or applied using outdated information.
              </p>
              <p>
                Our guides are designed to eliminate that problem. Written by
                people with real-world immigration experience, each guide
                explains not just <em>what</em> to do, but <em>why</em> each
                step matters — helping applicants build stronger, more
                complete applications.
              </p>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-primary-900 mb-4 text-lg">What We Cover</h3>
              <ul className="space-y-3 text-sm text-primary-800">
                {[
                  "Study visa guides for 15+ destination countries",
                  "Work permit applications and employer sponsorship",
                  "Tourist and visitor visa requirements",
                  "Permanent residency and citizenship pathways",
                  "Business visa applications for corporate travellers",
                  "Visa interview preparation and biometrics",
                  "Visa rejection appeals and reapplication strategies",
                  "Country-specific immigration news and policy updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent-500 shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Editorial Standards</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                    {member.flag}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{member.name}</p>
                    <p className="text-sm text-primary-600">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer box */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h3 className="font-bold text-amber-900 mb-3 text-lg">Important Disclaimer</h3>
          <p className="text-sm text-amber-800 leading-relaxed">
            Global Visa Guide Hub provides <strong>general information only</strong> and
            does not constitute legal advice. Immigration laws change frequently.
            Always verify requirements directly with the relevant embassy, consulate,
            or official government immigration portal before submitting any application.
            For complex cases — including previous refusals, criminal records, or PR
            applications — we recommend consulting a licensed immigration lawyer or
            regulated adviser.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href="/disclaimer" className="text-amber-700 underline hover:text-amber-900">
              Read full disclaimer →
            </Link>
            <Link href="/privacy" className="text-amber-700 underline hover:text-amber-900">
              Privacy policy →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-br from-primary-900 to-primary-700 text-white rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-4">Start Exploring Visa Guides</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Browse 500+ free visa and immigration guides covering study, work,
            tourist, and business visas for 15+ countries.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="bg-white text-primary-800 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Browse All Guides
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
