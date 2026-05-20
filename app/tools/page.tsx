import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Visa Tools — Calculator, Eligibility Checker, Document Checklist & More | VisaProcessInfo",
  description: "Free visa application tools: cost calculator, eligibility checker, processing time estimator, document checklist generator, country comparison tool, and rejection risk analyzer. Everything you need to prepare your visa application.",
  alternates: { canonical: "https://www.visaprocessinfo.com/tools" },
};

const tools = [
  {
    title: "Visa Eligibility Checker",
    description: "Check your visa approval chances based on your age, education, income, and travel history. Get a personalized score and improvement suggestions.",
    href: "/tools/eligibility-checker",
    color: "from-primary-800 to-primary-700",
    icon: "✓",
  },
  {
    title: "Visa Cost Calculator",
    description: "Calculate the total cost of your visa application including government fees, biometrics, medical exam, translations, and consultant fees.",
    href: "/tools/cost-calculator",
    color: "from-accent-600 to-accent-500",
    icon: "$",
  },
  {
    title: "Processing Time Estimator",
    description: "Estimate your total visa processing timeline from document preparation through to decision. See phase-by-phase breakdowns for 131+ countries.",
    href: "/tools/processing-time",
    color: "from-primary-800 to-primary-600",
    icon: "⏱",
  },
  {
    title: "Document Checklist Generator",
    description: "Generate a personalized document checklist for your visa type and country. Track your progress and never miss a required document.",
    href: "/tools/document-checklist",
    color: "from-primary-700 to-primary-600",
    icon: "📋",
  },
  {
    title: "Country Comparison Tool",
    description: "Compare visa fees, processing times, and requirements across 2-3 countries side by side. Find the best destination for your visa application.",
    href: "/tools/country-comparison",
    color: "from-indigo-700 to-indigo-500",
    icon: "⚖",
  },
  {
    title: "Rejection Risk Analyzer",
    description: "Identify weaknesses in your visa application before you submit. Get a risk score with specific strategies to improve your approval chances.",
    href: "/tools/rejection-risk",
    color: "from-red-700 to-red-500",
    icon: "⚠",
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <span>6 Free Tools</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Free Visa Application Tools
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to prepare a strong visa application. Calculate costs, check eligibility, generate checklists, compare countries, and assess your rejection risk — all for free.
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${tool.color} p-5 text-white`}>
                <span className="text-3xl">{tool.icon}</span>
              </div>
              <div className="p-5">
                <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary-800 transition-colors">
                  {tool.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
                <div className="mt-4 text-primary-700 font-semibold text-sm flex items-center gap-1">
                  Try Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Trust section */}
        <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-primary-800 mb-3">Why Use Our Tools?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our visa tools are built with data from official immigration sources covering 131+ countries.
            They are free, require no sign-up, and provide instant results to help you prepare the strongest possible application.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["100% Free", "No Sign-up Required", "131+ Countries", "Updated for 2026", "Instant Results"].map((badge) => (
              <span key={badge} className="bg-white border border-gray-200 rounded-full px-4 py-2 font-medium text-gray-700">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
