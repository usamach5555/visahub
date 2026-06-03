import type { Metadata } from "next";
import DocumentChecklistGenerator from "@/components/DocumentChecklistGenerator";

export const metadata: Metadata = {
  title: "Visa Document Checklist Generator — Complete Visa Documents List",
  description: "Generate a complete visa document checklist for any country and visa type. Track your progress, print or download your personalized checklist. Never miss a required document again.",
  alternates: { canonical: "https://www.visaprocessinfo.com/tools/document-checklist" },
};

export default function DocumentChecklistPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <span>Free Tool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Visa Document Checklist Generator
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Generate a personalized document checklist for your visa application. Track your preparation progress and make sure you have everything ready before submitting.
          </p>
        </div>
      </div>

      {/* Tool */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-primary-800 mb-6">Select Country and Visa Type</h2>
          <DocumentChecklistGenerator />
        </div>

        {/* Info Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { title: "Why Use This Tool?", body: "Missing even one document can delay your visa application by weeks or lead to refusal. Our checklist ensures you have every required document ready before you apply." },
            { title: "Track Your Progress", body: "Check off documents as you prepare them. The progress bar shows how close you are to having a complete application. Print your checklist to stay organized." },
            { title: "Country-Specific", body: "Each country has unique document requirements. Our checklists include country-specific notes like translation requirements, apostille needs, and attestation rules." },
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
