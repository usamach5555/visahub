import type { Metadata } from "next";
import CountryComparisonTool from "@/components/CountryComparisonTool";

export const metadata: Metadata = {
  title: "Country Comparison Tool — Compare Visa Requirements Side by Side",
  description: "Compare visa fees, processing times, difficulty levels, and requirements across 2-3 countries side by side. Make informed decisions about where to apply with our free comparison tool.",
  alternates: { canonical: "https://www.visaprocessinfo.com/tools/country-comparison" },
};

export default function CountryComparisonPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <span>Free Tool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Country Comparison Tool
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Compare visa fees, processing times, and requirements across multiple countries. See which destination offers the best visa conditions for your situation.
          </p>
        </div>
      </div>

      {/* Tool */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-primary-800 mb-6">Select Countries to Compare</h2>
          <CountryComparisonTool />
        </div>

        {/* Info Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { title: "Side-by-Side View", body: "Compare up to 3 countries at once across 8 key metrics including fees, processing times, difficulty levels, language requirements, and what each country is popular for." },
            { title: "Smart Highlights", body: "Our tool automatically highlights the best option in each category — lowest fee, fastest processing, easiest difficulty — so you can quickly identify the best fit." },
            { title: "Switch Visa Types", body: "Easily switch between study, work, business, tourist, and immigration visas without re-selecting your countries. Requirements and fees update instantly." },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
