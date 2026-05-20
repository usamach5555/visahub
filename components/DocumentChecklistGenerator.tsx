"use client";

import { useState, useMemo } from "react";
import { COUNTRIES_EXTENDED, CountryExtended } from "@/data/countries-extended";

type VisaType = "study" | "work" | "business" | "visit" | "immigration";

interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

const VISA_TYPE_LABELS: Record<VisaType, string> = {
  study: "Study Visa",
  work: "Work Visa",
  business: "Business Visa",
  visit: "Visit / Tourist Visa",
  immigration: "Immigration / PR",
};

const VISA_TYPE_ICONS: Record<VisaType, string> = {
  study: "🎓",
  work: "💼",
  business: "🏢",
  visit: "✈️",
  immigration: "🏠",
};

function getDocumentChecklist(visaType: VisaType): ChecklistItem[] {
  const common: ChecklistItem[] = [
    { id: "passport", label: "Valid Passport", note: "Must be valid for at least 6 months beyond intended stay with 2+ blank pages" },
    { id: "photos", label: "Passport-sized Photographs", note: "Recent photos meeting embassy specifications (size, background color)" },
  ];

  const byType: Record<VisaType, ChecklistItem[]> = {
    study: [
      { id: "acceptance", label: "University Acceptance / Admission Letter", note: "Official letter from the educational institution confirming enrollment" },
      { id: "funds", label: "Proof of Funds / Bank Statements", note: "Usually 3-6 months of statements showing sufficient funds for tuition and living expenses" },
      { id: "transcripts", label: "Academic Transcripts & Certificates", note: "Original and attested copies of all educational qualifications" },
      { id: "language", label: "Language Test Results (IELTS / TOEFL / PTE)", note: "Scores must meet the minimum requirement of the university and immigration authority" },
      { id: "medical", label: "Medical Certificate / Health Examination", note: "From an approved panel physician; may include TB test and vaccinations" },
      { id: "insurance", label: "Travel / Health Insurance", note: "Coverage for the duration of your stay; some countries mandate minimum coverage amounts" },
      { id: "sop", label: "Statement of Purpose (SOP)", note: "Detailed essay explaining your study plans, goals, and reasons for choosing the country" },
      { id: "cv", label: "CV / Resume", note: "Updated curriculum vitae with education, work experience, and achievements" },
      { id: "sponsor", label: "Sponsor Letter (if applicable)", note: "If a sponsor is funding your education, include their financial documents and a signed letter" },
      { id: "police", label: "Police Clearance Certificate", note: "Certificate of good conduct from your home country and any country you lived in for 6+ months" },
    ],
    work: [
      { id: "joboffer", label: "Job Offer / Employment Contract", note: "Signed offer letter or contract from the employer in the destination country" },
      { id: "employer-sponsor", label: "Employer Sponsorship Letter", note: "Letter from the employer confirming they are sponsoring your work visa" },
      { id: "qualifications", label: "Qualification Certificates", note: "Degrees, diplomas, and professional certifications relevant to the job" },
      { id: "experience", label: "Professional Experience Letters", note: "Reference letters from previous employers confirming roles, duration, and responsibilities" },
      { id: "language", label: "Language Test Results", note: "If required by the country (e.g., IELTS for UK/Australia, TEF for Canada-French)" },
      { id: "medical", label: "Medical Certificate / Health Examination", note: "From an approved panel physician as per embassy requirements" },
      { id: "police", label: "Police Clearance Certificate", note: "From your home country and any country where you resided for an extended period" },
      { id: "insurance", label: "Travel / Health Insurance", note: "Coverage for initial period; employer may provide insurance after arrival" },
      { id: "financial", label: "Financial Proof / Bank Statements", note: "Evidence of funds to support yourself during the initial settlement period" },
      { id: "cv", label: "CV / Resume", note: "Detailed resume highlighting relevant professional experience" },
    ],
    business: [
      { id: "invitation", label: "Business Invitation Letter", note: "From the company or organization you are visiting in the destination country" },
      { id: "company-reg", label: "Company Registration Documents", note: "Proof of your company registration, incorporation, or business ownership" },
      { id: "financial-statements", label: "Company Financial Statements", note: "Audited financial records demonstrating business activity and stability" },
      { id: "itinerary", label: "Travel Itinerary / Business Plan", note: "Detailed schedule of meetings, conferences, or business activities" },
      { id: "hotel", label: "Hotel Booking / Accommodation Proof", note: "Confirmed reservations for the duration of your business trip" },
      { id: "return-flight", label: "Return Flight Booking", note: "Confirmed round-trip flight tickets showing your intention to return" },
      { id: "insurance", label: "Travel Insurance", note: "Comprehensive coverage including medical and trip cancellation" },
      { id: "bank", label: "Personal Bank Statements (3-6 months)", note: "Showing sufficient personal funds for the trip" },
    ],
    visit: [
      { id: "itinerary", label: "Travel Itinerary", note: "Day-by-day plan of your trip including places you intend to visit" },
      { id: "hotel", label: "Hotel Reservations / Accommodation Proof", note: "Confirmed bookings for your entire stay" },
      { id: "return-flight", label: "Return Flight Booking", note: "Confirmed tickets showing departure from the destination country" },
      { id: "bank", label: "Bank Statements (3-6 months)", note: "Demonstrating sufficient funds to cover all travel expenses" },
      { id: "employment", label: "Employment Letter / Leave Approval", note: "Letter from employer confirming your position, salary, and approved leave dates" },
      { id: "insurance", label: "Travel Insurance", note: "Comprehensive policy covering medical emergencies and trip disruptions" },
      { id: "invitation", label: "Invitation Letter (if visiting family/friends)", note: "From your host, including their ID/residency proof and relationship details" },
      { id: "sponsor-docs", label: "Sponsor Documents (if applicable)", note: "If someone else is funding your trip, include their financial documents and a sponsorship letter" },
    ],
    immigration: [
      { id: "language", label: "Language Test Results (IELTS / CELPIP / TEF / PTE)", note: "Scores valid within the last 2 years; minimum scores vary by program" },
      { id: "eca", label: "Education Credential Assessment (ECA)", note: "Assessment from a recognized body (e.g., WES) confirming your qualifications are equivalent" },
      { id: "experience", label: "Work Experience Letters", note: "Detailed reference letters from all employers for points-based systems" },
      { id: "police-all", label: "Police Clearance from All Countries Lived In", note: "Certificates from every country where you resided for 6+ months since age 18" },
      { id: "medical", label: "Medical Examination", note: "Comprehensive exam by an approved panel physician; includes X-ray and blood tests" },
      { id: "settlement-funds", label: "Proof of Settlement Funds", note: "Evidence of sufficient funds to settle (varies by country and family size)" },
      { id: "cv", label: "CV / Resume", note: "Comprehensive resume following the destination country format" },
      { id: "references", label: "Reference Letters", note: "Professional and personal references supporting your application" },
      { id: "birth-cert", label: "Birth Certificate", note: "Original or certified copy, translated if not in the destination country language" },
      { id: "marriage-cert", label: "Marriage Certificate (if applicable)", note: "If applying with spouse; include translated and notarized copies" },
    ],
  };

  return [...common, ...byType[visaType]];
}

function getCountryNotes(country: CountryExtended, visaType: VisaType): string[] {
  const notes: string[] = [];
  const name = country.name;
  const lang = country.languageRequirement;

  // Language-based notes
  if (country.slug === "germany") {
    notes.push("Germany requires many documents to be translated into German by a certified translator.");
    notes.push("A blocked account (Sperrkonto) with approximately €11,208 is required for student visas.");
  }
  if (country.slug === "france" || country.slug === "canada") {
    if (lang.toLowerCase().includes("french")) {
      notes.push(`${name} may require documents translated into French for French-language programs or Quebec immigration.`);
    }
  }
  if (country.slug === "japan") {
    notes.push("Japan requires a Certificate of Eligibility (CoE) issued by the Immigration Bureau before applying for a visa.");
    notes.push("Documents may need to be translated into Japanese.");
  }
  if (country.slug === "china") {
    notes.push("China requires documents to be notarized and authenticated by the Chinese embassy.");
  }
  if (country.slug === "uae") {
    notes.push("UAE work visas are typically sponsored by the employer; entry permits are issued before arrival.");
    notes.push("Documents may need to be attested by the Ministry of Foreign Affairs.");
  }

  // General notes based on visa type
  if (visaType === "study") {
    notes.push(`Check ${name}'s specific financial proof requirements as minimum fund amounts vary by institution and city.`);
  }
  if (visaType === "work") {
    notes.push(`${name} may require your qualifications to be recognized or validated by a local authority.`);
  }
  if (visaType === "immigration") {
    notes.push(`${name} immigration processing takes approximately ${country.processingDays.immigration}. Start gathering documents early.`);
  }

  // Visa fee note
  const fee = country.visaFees[visaType];
  if (fee > 0) {
    notes.push(`The approximate visa application fee for ${name} is ${country.currency} ${fee}. Fees are subject to change.`);
  }

  // Embassy note
  if (country.embassyUrl) {
    notes.push(`Always verify requirements on the official website: ${country.embassyUrl}`);
  }

  return notes;
}

export default function DocumentChecklistGenerator() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedVisaType, setSelectedVisaType] = useState<VisaType | "">("");
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [isGenerated, setIsGenerated] = useState(false);

  const country = useMemo(
    () => COUNTRIES_EXTENDED.find((c) => c.slug === selectedCountry),
    [selectedCountry]
  );

  const checklist = useMemo(() => {
    if (!selectedVisaType) return [];
    return getDocumentChecklist(selectedVisaType as VisaType);
  }, [selectedVisaType]);

  const countryNotes = useMemo(() => {
    if (!country || !selectedVisaType) return [];
    return getCountryNotes(country, selectedVisaType as VisaType);
  }, [country, selectedVisaType]);

  const progress = checklist.length > 0 ? Math.round((checkedItems.size / checklist.length) * 100) : 0;

  const handleGenerate = () => {
    if (selectedCountry && selectedVisaType) {
      setCheckedItems(new Set());
      setIsGenerated(true);
    }
  };

  const handleReset = () => {
    setSelectedCountry("");
    setSelectedVisaType("");
    setCheckedItems(new Set());
    setIsGenerated(false);
  };

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white";

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Document Checklist Generator
        </h2>
        <p className="text-gray-600 text-base">
          Generate a comprehensive, country-specific document checklist for your visa application.
          Track your preparation progress and never miss a required document.
        </p>
      </div>

      {/* Selection Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Country Select */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Destination Country
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setIsGenerated(false);
              }}
              className={inputClass}
            >
              <option value="">Select a country</option>
              {COUNTRIES_EXTENDED.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Visa Type Select */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Visa Type
            </label>
            <select
              value={selectedVisaType}
              onChange={(e) => {
                setSelectedVisaType(e.target.value as VisaType | "");
                setIsGenerated(false);
              }}
              className={inputClass}
            >
              <option value="">Select visa type</option>
              {(Object.keys(VISA_TYPE_LABELS) as VisaType[]).map((type) => (
                <option key={type} value={type}>
                  {VISA_TYPE_ICONS[type]} {VISA_TYPE_LABELS[type]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={!selectedCountry || !selectedVisaType}
          className={`w-full bg-primary-800 text-white font-bold py-4 rounded-2xl text-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Generate Document Checklist
        </button>
      </div>

      {/* Results */}
      {isGenerated && country && selectedVisaType && (
        <div className="space-y-6 print:space-y-4">
          {/* Summary Header */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {VISA_TYPE_ICONS[selectedVisaType as VisaType]}{" "}
                  {VISA_TYPE_LABELS[selectedVisaType as VisaType]} &mdash; {country.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Processing time: {country.processingDays[selectedVisaType as VisaType]} | Difficulty:{" "}
                  {country.difficulty[selectedVisaType as VisaType]}
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-primary-800">{progress}%</span>
                <p className="text-xs text-gray-500">
                  {checkedItems.size} of {checklist.length} documents ready
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${progress}%`,
                  backgroundColor:
                    progress === 100
                      ? "#22c55e"
                      : progress >= 50
                      ? "#f59e0b"
                      : "var(--color-accent-500, #f97316)",
                }}
              />
            </div>
            {progress === 100 && (
              <p className="text-green-600 font-semibold text-sm mt-2">
                All documents ready! You are prepared to submit your application.
              </p>
            )}
          </div>

          {/* Checklist */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Required Documents</h4>
            <ul className="space-y-3">
              {checklist.map((item, index) => (
                <li
                  key={item.id}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                    checkedItems.has(item.id)
                      ? "bg-green-50 border-green-200"
                      : "bg-gray-50 border-gray-100 hover:bg-gray-100"
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  {/* Checkbox */}
                  <div className="mt-0.5 flex-shrink-0">
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                        checkedItems.has(item.id)
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {checkedItems.has(item.id) && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                      <span
                        className={`text-sm font-semibold ${
                          checkedItems.has(item.id) ? "text-green-700 line-through" : "text-gray-800"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {item.note && (
                      <p className="text-xs text-gray-500 mt-1 ml-7">{item.note}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Country-Specific Notes */}
          {countryNotes.length > 0 && (
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 shadow-sm">
              <h4 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
                Country-Specific Notes for {country.name}
              </h4>
              <ul className="space-y-2">
                {countryNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-amber-900">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 bg-primary-800 text-white font-bold py-4 rounded-2xl text-lg hover:bg-primary-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print Checklist
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 bg-accent-500 text-white font-bold py-4 rounded-2xl text-lg hover:opacity-90 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download as PDF
            </button>
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 bg-white text-gray-700 font-bold py-4 rounded-2xl text-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Start Over
            </button>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 shadow-sm">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700">Disclaimer:</strong> This checklist is provided as a general
              guide for informational purposes only. Visa requirements vary by nationality, individual
              circumstances, and are subject to change without notice. Always verify the latest document
              requirements directly with the official embassy or consulate of{" "}
              <strong>{country.name}</strong>
              {country.embassyUrl && (
                <>
                  {" "}
                  at{" "}
                  <a
                    href={country.embassyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 underline hover:text-primary-800"
                  >
                    their official website
                  </a>
                </>
              )}
              . visaprocessinfo.com is not affiliated with any government body and does not guarantee visa
              approval. Consult a licensed immigration advisor for personalized guidance.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
