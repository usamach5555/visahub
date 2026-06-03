import type { Metadata } from "next";
import RejectionRiskAnalyzer from "@/components/RejectionRiskAnalyzer";

export const metadata: Metadata = {
  title: "Visa Rejection Risk Analyzer — Assess Your Application Risk",
  description: "Analyze your visa rejection risk before applying. Our tool identifies weak points in your application and provides specific strategies to reduce your chances of refusal.",
  alternates: { canonical: "https://www.visaprocessinfo.com/tools/rejection-risk" },
};

export default function RejectionRiskPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-red-900 to-red-700 text-white pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <span>Free Tool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Visa Rejection Risk Analyzer
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Identify potential weaknesses in your visa application before you submit. Get personalized risk assessment and actionable strategies to improve your approval chances.
          </p>
        </div>
      </div>

      {/* Tool */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-primary-800 mb-6">Enter Your Application Details</h2>
          <RejectionRiskAnalyzer />
        </div>

        {/* Info Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { title: "How It Works", body: "Our analyzer evaluates 10 key factors that immigration officers consider when reviewing visa applications. Each factor contributes to your overall risk score, helping you identify and address weaknesses." },
            { title: "Risk Factors Analyzed", body: "We assess financial capacity, home country ties, travel history, previous refusals, document completeness, purpose clarity, and destination-specific requirements to calculate your rejection risk." },
            { title: "Important Disclaimer", body: "This tool provides educational guidance only. Visa decisions are made by trained immigration officers who consider many additional factors. Use this as a preparation tool, not a guarantee of outcome." },
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
