import type { Metadata } from "next";
import ProcessingTimeEstimator from "@/components/ProcessingTimeEstimator";

export const metadata: Metadata = {
  title: "Visa Processing Time Estimator — How Long Will Your Visa Take?",
  description: "Estimate your visa processing time for any country. See a full timeline from document preparation to decision, including embassy processing times for study, work, tourist, and business visas.",
  alternates: { canonical: "https://www.visaprocessinfo.com/tools/processing-time" },
};

export default function ProcessingTimePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <span>Free Tool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Visa Processing Time Estimator
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Find out how long your visa application will take from start to finish. Get a detailed timeline with embassy processing times for 131+ countries.
          </p>
        </div>
      </div>

      {/* Tool */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-primary-800 mb-6">Select Country and Visa Type</h2>
          <ProcessingTimeEstimator />
        </div>

        {/* Info Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { title: "How It Works", body: "Our tool uses official embassy data and historical processing patterns to estimate your visa timeline. Times are broken down into four phases: preparation, submission, processing, and decision." },
            { title: "Factors That Affect Time", body: "Processing times vary based on nationality, season, embassy workload, document completeness, and visa category. Peak seasons (summer, holidays) typically mean longer wait times." },
            { title: "Important Note", body: "These are estimated timelines based on standard processing. Actual times may vary. Always check the official embassy website for the most current processing time information." },
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
