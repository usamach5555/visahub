"use client";

import { useState } from "react";
import { COUNTRIES_EXTENDED } from "@/data/countries-extended";

type VisaType = "study" | "work" | "business" | "visit" | "immigration";

interface TimelinePhase {
  label: string;
  range: string;
  minDays: number;
  maxDays: number;
  description: string;
}

const VISA_TYPE_LABELS: Record<VisaType, string> = {
  study: "Study Visa",
  work: "Work Visa",
  business: "Business Visa",
  visit: "Visit / Tourist Visa",
  immigration: "Immigration / PR",
};

function parseProcessingDays(raw: string): { min: number; max: number } {
  const normalized = raw.toLowerCase().trim();
  const rangeMatch = normalized.match(
    /(\d+)\s*[-–]\s*(\d+)\s*(days?|weeks?|months?)/
  );
  if (rangeMatch) {
    let min = parseInt(rangeMatch[1], 10);
    let max = parseInt(rangeMatch[2], 10);
    const unit = rangeMatch[3];
    if (unit.startsWith("week")) {
      min *= 7;
      max *= 7;
    } else if (unit.startsWith("month")) {
      min *= 30;
      max *= 30;
    }
    return { min, max };
  }
  const singleMatch = normalized.match(/(\d+)\s*(days?|weeks?|months?)/);
  if (singleMatch) {
    let val = parseInt(singleMatch[1], 10);
    const unit = singleMatch[2];
    if (unit.startsWith("week")) val *= 7;
    else if (unit.startsWith("month")) val *= 30;
    return { min: val, max: val };
  }
  return { min: 30, max: 90 };
}

function formatDayRange(min: number, max: number): string {
  if (min >= 30 && max >= 30 && min % 30 === 0 && max % 30 === 0) {
    const minM = min / 30;
    const maxM = max / 30;
    return minM === maxM
      ? `${minM} month${minM > 1 ? "s" : ""}`
      : `${minM}-${maxM} months`;
  }
  if (min >= 7 && max >= 7 && min % 7 === 0 && max % 7 === 0) {
    const minW = min / 7;
    const maxW = max / 7;
    return minW === maxW
      ? `${minW} week${minW > 1 ? "s" : ""}`
      : `${minW}-${maxW} weeks`;
  }
  return min === max ? `${min} days` : `${min}-${max} days`;
}

const TIPS = [
  {
    icon: "📅",
    title: "Apply during off-peak season",
    detail:
      "Avoid peak periods such as summer and major holidays when embassies experience high application volumes.",
  },
  {
    icon: "📋",
    title: "Submit complete documentation",
    detail:
      "Incomplete applications are the leading cause of delays. Double-check every requirement before submission.",
  },
  {
    icon: "⚡",
    title: "Use priority processing if available",
    detail:
      "Many countries offer expedited processing for an additional fee, often reducing wait times by 50% or more.",
  },
  {
    icon: "🔔",
    title: "Book biometrics early",
    detail:
      "Biometric appointments can fill up weeks in advance. Schedule yours as soon as you begin preparing your application.",
  },
  {
    icon: "✅",
    title: "Prepare certified translations ahead of time",
    detail:
      "Official document translations can take 5-10 business days. Start this process early to avoid bottlenecks.",
  },
];

export default function ProcessingTimeEstimator() {
  const [country, setCountry] = useState("");
  const [visaType, setVisaType] = useState<VisaType | "">("");
  const [result, setResult] = useState<{
    countryName: string;
    visaType: VisaType;
    phases: TimelinePhase[];
    totalMin: number;
    totalMax: number;
    difficulty: string;
  } | null>(null);

  const estimate = () => {
    if (!country || !visaType) return;
    const c = COUNTRIES_EXTENDED.find((x) => x.slug === country);
    if (!c) return;

    const processingRaw = c.processingDays[visaType];
    const parsed = parseProcessingDays(processingRaw);
    const difficulty = c.difficulty[visaType];

    const phases: TimelinePhase[] = [
      {
        label: "Document Preparation",
        range: "1-2 weeks",
        minDays: 7,
        maxDays: 14,
        description:
          "Gather, translate, and certify all required documents including financial statements, photos, and supporting letters.",
      },
      {
        label: "Application Submission",
        range: "1-3 days",
        minDays: 1,
        maxDays: 3,
        description:
          "Complete your application form, pay fees, and submit via the designated portal or visa application center.",
      },
      {
        label: "Processing by Embassy",
        range: processingRaw,
        minDays: parsed.min,
        maxDays: parsed.max,
        description:
          "The embassy reviews your application, conducts background checks, and may request additional documentation or an interview.",
      },
      {
        label: "Decision & Passport Return",
        range: "3-7 days",
        minDays: 3,
        maxDays: 7,
        description:
          "Once a decision is made, your passport with the visa (if approved) is returned via courier or collection.",
      },
    ];

    const totalMin = phases.reduce((sum, p) => sum + p.minDays, 0);
    const totalMax = phases.reduce((sum, p) => sum + p.maxDays, 0);

    setResult({
      countryName: c.name,
      visaType,
      phases,
      totalMin,
      totalMax,
      difficulty,
    });
  };

  const selectClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white";

  const difficultyColor = (d: string) => {
    if (d === "Easy") return "bg-green-100 text-green-800";
    if (d === "Moderate") return "bg-amber-100 text-amber-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Destination Country *
          </label>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setResult(null);
            }}
            className={selectClass}
          >
            <option value="">Select country</option>
            {COUNTRIES_EXTENDED.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Visa Type *
          </label>
          <select
            value={visaType}
            onChange={(e) => {
              setVisaType(e.target.value as VisaType);
              setResult(null);
            }}
            className={selectClass}
          >
            <option value="">Select visa type</option>
            <option value="study">Study Visa</option>
            <option value="work">Work Visa</option>
            <option value="business">Business Visa</option>
            <option value="visit">Visit / Tourist Visa</option>
            <option value="immigration">Immigration / PR</option>
          </select>
        </div>
      </div>

      <button
        onClick={estimate}
        className="w-full bg-primary-800 text-white font-bold py-4 rounded-2xl text-lg hover:bg-primary-700 transition-colors"
      >
        Estimate Processing Time
      </button>

      {result && (
        <div className="mt-8 space-y-6">
          {/* Summary header */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-white p-5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-white/70">
                  {result.countryName} —{" "}
                  {VISA_TYPE_LABELS[result.visaType]}
                </span>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyColor(result.difficulty)}`}
                >
                  {result.difficulty}
                </span>
              </div>
              <div className="text-3xl font-extrabold">
                {formatDayRange(result.totalMin, result.totalMax)}
              </div>
              <div className="text-white/70 text-sm mt-1">
                Total estimated timeline (start to finish)
              </div>
            </div>
          </div>

          {/* Visual timeline */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900 mb-5 uppercase tracking-wide">
              Timeline Breakdown
            </h3>
            <div className="relative">
              {result.phases.map((phase, i) => {
                const isLast = i === result.phases.length - 1;
                const widthPercent = Math.max(
                  ((phase.minDays + phase.maxDays) /
                    2 /
                    ((result.totalMin + result.totalMax) / 2)) *
                    100,
                  12
                );
                const isEmbassy = i === 2;

                return (
                  <div key={phase.label} className="flex gap-4 mb-0">
                    {/* Vertical line + dot */}
                    <div className="flex flex-col items-center w-8 shrink-0">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          isEmbassy
                            ? "border-accent-500 bg-accent-500"
                            : "border-primary-800 bg-primary-800"
                        } z-10`}
                      />
                      {!isLast && (
                        <div className="w-0.5 bg-gray-200 flex-1 min-h-[60px]" />
                      )}
                    </div>

                    {/* Phase content */}
                    <div className={`pb-6 flex-1 ${isLast ? "pb-0" : ""}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-gray-900">
                          {phase.label}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            isEmbassy
                              ? "bg-accent-500/10 text-accent-600"
                              : "bg-primary-800/10 text-primary-800"
                          }`}
                        >
                          {phase.range}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">
                        {phase.description}
                      </p>
                      {/* Bar */}
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            isEmbassy ? "bg-accent-500" : "bg-primary-800"
                          }`}
                          style={{ width: `${widthPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tips for faster processing */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
              Tips for Faster Processing
            </h3>
            <div className="space-y-3">
              {TIPS.map((tip) => (
                <div
                  key={tip.title}
                  className="flex gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg shrink-0 mt-0.5" aria-hidden="true">
                    {tip.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {tip.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{tip.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
            <div className="flex gap-2">
              <span className="text-amber-500 shrink-0 mt-0.5" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-amber-800">
                  Important Disclaimer
                </p>
                <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                  Processing times shown are estimates based on typical
                  timelines and may vary significantly depending on your
                  nationality, application completeness, embassy workload,
                  and time of year. Always check the official embassy or
                  immigration authority website for the most current
                  processing times. This tool is for informational purposes
                  only and does not constitute legal advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
