"use client";

import { useState } from "react";
import { COUNTRIES_EXTENDED } from "@/data/countries-extended";

interface FormData {
  destinationCountry: string;
  visaType: string;
  passportCountry: string;
  monthlyIncome: string;
  bankBalance: string;
  previousRefusals: string;
  travelHistory: string;
  homeTies: string;
  purposeClarity: string;
  documentCompleteness: string;
}

interface RiskFactor {
  label: string;
  points: number;
  mitigation: string;
}

interface AnalysisResult {
  score: number;
  level: "Low Risk" | "Moderate Risk" | "High Risk" | "Very High Risk";
  factors: RiskFactor[];
}

function analyzeRisk(form: FormData): AnalysisResult {
  let score = 0;
  const factors: RiskFactor[] = [];

  const country = COUNTRIES_EXTENDED.find((c) => c.slug === form.destinationCountry);
  const countryName = country?.name || "your destination";
  const visaType = form.visaType as keyof typeof country.difficulty | undefined;
  const difficulty = country && visaType ? country.difficulty[visaType] : undefined;

  // --- Destination difficulty ---
  if (difficulty === "Complex") {
    score += 10;
    factors.push({
      label: `${countryName} has a complex ${form.visaType} visa process with strict requirements`,
      points: 10,
      mitigation: `Research ${countryName}'s specific documentation checklist thoroughly. Consider consulting an immigration lawyer who specializes in ${countryName} applications.`,
    });
  } else if (difficulty === "Moderate") {
    score += 5;
  }

  // --- Monthly income ---
  if (form.monthlyIncome === "under_500") {
    score += 20;
    factors.push({
      label: `Monthly income under $500 is insufficient for most ${countryName} visa categories`,
      points: 20,
      mitigation:
        "Provide evidence of additional income sources such as rental income, investments, or family sponsorship. If sponsored, include the sponsor's financial documents and a notarized sponsorship letter.",
    });
  } else if (form.monthlyIncome === "500_1500") {
    score += 12;
    factors.push({
      label: `Income of $500-$1,500/month may be considered low for ${countryName}`,
      points: 12,
      mitigation:
        "Supplement your application with savings statements, fixed deposits, and property valuations. A strong bank balance can offset a lower monthly income.",
    });
  } else if (form.monthlyIncome === "1500_3000") {
    score += 5;
  }

  // --- Bank balance ---
  if (form.bankBalance === "under_2000") {
    score += 15;
    factors.push({
      label: `Bank balance under $2,000 is a major red flag for visa officers reviewing ${countryName} applications`,
      points: 15,
      mitigation:
        "Build your bank balance over 3-6 months before applying. Avoid sudden large deposits as officers check transaction history. Show a consistent savings pattern with regular inflows.",
    });
  } else if (form.bankBalance === "2000_5000") {
    score += 10;
    factors.push({
      label: "Bank balance of $2,000-$5,000 may be insufficient depending on trip duration and destination",
      points: 10,
      mitigation:
        "Include additional financial evidence: fixed deposits, mutual funds, property ownership documents, or a sponsor's bank statements with a cover letter explaining your funding plan.",
    });
  } else if (form.bankBalance === "5000_15000") {
    score += 4;
  }

  // --- Previous refusals ---
  if (form.previousRefusals === "1") {
    score += 15;
    factors.push({
      label: "One previous visa refusal significantly increases scrutiny on your new application",
      points: 15,
      mitigation:
        "Address the exact reasons for the previous refusal in a cover letter. Show what has changed since the refusal (new job, higher savings, stronger ties). Never hide a previous refusal as embassies share data.",
    });
  } else if (form.previousRefusals === "2") {
    score += 25;
    factors.push({
      label: "Two previous refusals create a strong negative pattern that officers will closely examine",
      points: 25,
      mitigation:
        "Provide a detailed explanation letter addressing each refusal. Show substantial changes in circumstances. Consider applying to a different country first to build positive travel history, then reapply.",
    });
  } else if (form.previousRefusals === "3+") {
    score += 40;
    factors.push({
      label: "Three or more refusals make approval extremely difficult without major changes in circumstances",
      points: 40,
      mitigation:
        "Strongly consider hiring a licensed immigration consultant. Document every improvement in your profile since the last refusal. Build travel history to less restrictive countries first. Wait at least 6-12 months between applications.",
    });
  }

  // --- Travel history ---
  if (form.travelHistory === "none") {
    score += 10;
    factors.push({
      label: "No prior travel to developed countries means no compliance track record",
      points: 10,
      mitigation:
        "Start by visiting countries with easier visa processes (e.g., Thailand, Malaysia, Turkey) to build a travel history showing you return home as planned. Each successful trip strengthens future applications.",
    });
  } else if (form.travelHistory === "1_2") {
    score += 4;
  }

  // --- Ties to home country ---
  if (form.homeTies === "weak") {
    score += 15;
    factors.push({
      label: "Weak ties to your home country raise concern you may not return after your visa expires",
      points: 15,
      mitigation:
        "Strengthen demonstrable ties: maintain steady employment, acquire property or long-term leases, show family dependents who remain at home. Provide a letter from your employer confirming your position and approved leave.",
    });
  } else if (form.homeTies === "moderate") {
    score += 7;
    factors.push({
      label: "Moderate home ties may not fully reassure officers of your intent to return",
      points: 7,
      mitigation:
        "Document all ties clearly: employment contract, property deeds, family certificates, business registration. The more concrete evidence you provide, the stronger your case.",
    });
  }

  // --- Purpose clarity ---
  if (form.purposeClarity === "unclear") {
    score += 10;
    factors.push({
      label: "Unclear or poorly documented travel purpose is a common reason for visa denial",
      points: 10,
      mitigation:
        "Prepare a detailed itinerary, invitation letters, enrollment confirmations, or business meeting schedules. Officers need to see a specific, logical reason for your visit with supporting documentation.",
    });
  } else if (form.purposeClarity === "somewhat") {
    score += 5;
    factors.push({
      label: "Partially documented purpose may lead to additional questions or requests for information",
      points: 5,
      mitigation:
        "Strengthen your purpose documentation with hotel bookings, return flight tickets, detailed day-by-day itinerary, and any letters of invitation or enrollment confirmation.",
    });
  }

  // --- Document completeness ---
  if (form.documentCompleteness === "many_missing") {
    score += 15;
    factors.push({
      label: "Submitting an incomplete application often results in outright rejection without review",
      points: 15,
      mitigation:
        "Obtain the official document checklist from the embassy website. Do not submit until every required document is ready. Missing even one critical document (like a bank statement or employment letter) can cause rejection.",
    });
  } else if (form.documentCompleteness === "some_missing") {
    score += 8;
    factors.push({
      label: "Some missing documents weaken your application and may cause delays or refusal",
      points: 8,
      mitigation:
        "Cross-reference your documents against the embassy's checklist. Common overlooked items include: recent bank statements (last 3-6 months), passport-size photos meeting specific requirements, and notarized translations.",
    });
  }

  // Cap score at 100
  score = Math.min(100, score);

  // Determine level
  let level: AnalysisResult["level"];
  if (score <= 25) level = "Low Risk";
  else if (score <= 50) level = "Moderate Risk";
  else if (score <= 75) level = "High Risk";
  else level = "Very High Risk";

  // Sort factors by impact
  factors.sort((a, b) => b.points - a.points);

  return { score, level, factors: factors.slice(0, 5) };
}

function RiskGauge({ score, level }: { score: number; level: string }) {
  const getColor = () => {
    if (score <= 25) return { stroke: "#22c55e", text: "text-green-700", bg: "bg-green-50" };
    if (score <= 50) return { stroke: "#f59e0b", text: "text-amber-700", bg: "bg-amber-50" };
    if (score <= 75) return { stroke: "#f97316", text: "text-orange-700", bg: "bg-orange-50" };
    return { stroke: "#ef4444", text: "text-red-700", bg: "bg-red-50" };
  };
  const colors = getColor();
  const circumference = 2 * Math.PI * 50;
  const arcLength = (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        <svg className="w-40 h-40 -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke={colors.stroke}
            strokeWidth="10"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.8s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-extrabold ${colors.text}`}>{score}</span>
          <span className="text-xs font-semibold text-gray-400">/ 100</span>
        </div>
      </div>
      <div className={`mt-3 px-4 py-1.5 rounded-full text-sm font-bold ${colors.text} ${colors.bg}`}>
        {level}
      </div>
    </div>
  );
}

export default function RejectionRiskAnalyzer() {
  const [form, setForm] = useState<FormData>({
    destinationCountry: "",
    visaType: "",
    passportCountry: "",
    monthlyIncome: "",
    bankBalance: "",
    previousRefusals: "0",
    travelHistory: "",
    homeTies: "",
    purposeClarity: "",
    documentCompleteness: "",
  });
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setResult(null);
  };

  const handleAnalyze = () => {
    if (!form.destinationCountry || !form.visaType || !form.passportCountry) {
      alert("Please fill in the destination country, visa type, and passport country.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setResult(analyzeRisk(form));
      setLoading(false);
    }, 1000);
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Risk Assessment Tool
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          Visa Rejection Risk Analyzer
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Estimate your visa rejection risk before you apply. This tool identifies potential weak points in your profile
          and provides actionable strategies to strengthen your application.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Destination Country */}
          <div>
            <label className={labelClass}>Destination Country *</label>
            <select
              value={form.destinationCountry}
              onChange={(e) => update("destinationCountry", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select destination country</option>
              {COUNTRIES_EXTENDED.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Visa Type */}
          <div>
            <label className={labelClass}>Visa Type *</label>
            <select value={form.visaType} onChange={(e) => update("visaType", e.target.value)} className={fieldClass}>
              <option value="">Select visa type</option>
              <option value="study">Study Visa</option>
              <option value="work">Work Visa</option>
              <option value="business">Business Visa</option>
              <option value="visit">Visit / Tourist Visa</option>
              <option value="immigration">Immigration / PR</option>
            </select>
          </div>

          {/* Passport Country */}
          <div>
            <label className={labelClass}>Passport Country *</label>
            <input
              type="text"
              placeholder="Which country issued your passport?"
              value={form.passportCountry}
              onChange={(e) => update("passportCountry", e.target.value)}
              className={fieldClass}
            />
          </div>

          {/* Monthly Income */}
          <div>
            <label className={labelClass}>Monthly Income (USD)</label>
            <select
              value={form.monthlyIncome}
              onChange={(e) => update("monthlyIncome", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select income range</option>
              <option value="under_500">Under $500</option>
              <option value="500_1500">$500 - $1,500</option>
              <option value="1500_3000">$1,500 - $3,000</option>
              <option value="3000_5000">$3,000 - $5,000</option>
              <option value="5000_plus">$5,000+</option>
            </select>
          </div>

          {/* Bank Balance */}
          <div>
            <label className={labelClass}>Bank Balance (USD)</label>
            <select
              value={form.bankBalance}
              onChange={(e) => update("bankBalance", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select balance range</option>
              <option value="under_2000">Under $2,000</option>
              <option value="2000_5000">$2,000 - $5,000</option>
              <option value="5000_15000">$5,000 - $15,000</option>
              <option value="15000_30000">$15,000 - $30,000</option>
              <option value="30000_plus">$30,000+</option>
            </select>
          </div>

          {/* Previous Refusals */}
          <div>
            <label className={labelClass}>Previous Visa Refusals</label>
            <select
              value={form.previousRefusals}
              onChange={(e) => update("previousRefusals", e.target.value)}
              className={fieldClass}
            >
              <option value="0">No previous refusals</option>
              <option value="1">1 refusal</option>
              <option value="2">2 refusals</option>
              <option value="3+">3 or more refusals</option>
            </select>
          </div>

          {/* Travel History */}
          <div>
            <label className={labelClass}>Travel History (Developed Countries)</label>
            <select
              value={form.travelHistory}
              onChange={(e) => update("travelHistory", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select travel history</option>
              <option value="none">None</option>
              <option value="1_2">1-2 countries</option>
              <option value="3_5">3-5 countries</option>
              <option value="6_plus">6+ countries</option>
            </select>
          </div>

          {/* Ties to Home Country */}
          <div>
            <label className={labelClass}>Ties to Home Country</label>
            <select value={form.homeTies} onChange={(e) => update("homeTies", e.target.value)} className={fieldClass}>
              <option value="">Select strength of ties</option>
              <option value="strong">Strong (property, stable job, family dependents)</option>
              <option value="moderate">Moderate (job or family, but limited assets)</option>
              <option value="weak">Weak (no property, unstable employment, no dependents)</option>
            </select>
          </div>

          {/* Purpose Clarity */}
          <div>
            <label className={labelClass}>Purpose Clarity</label>
            <select
              value={form.purposeClarity}
              onChange={(e) => update("purposeClarity", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select clarity level</option>
              <option value="clear">Clear documented purpose</option>
              <option value="somewhat">Somewhat clear</option>
              <option value="unclear">Unclear or undocumented</option>
            </select>
          </div>

          {/* Document Completeness */}
          <div>
            <label className={labelClass}>Document Completeness</label>
            <select
              value={form.documentCompleteness}
              onChange={(e) => update("documentCompleteness", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select completeness</option>
              <option value="all_ready">All documents ready</option>
              <option value="some_missing">Some documents missing</option>
              <option value="many_missing">Many documents missing</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full mt-8 bg-red-600 text-white font-bold py-4 rounded-2xl text-lg hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Analyzing Risk Factors...
            </span>
          ) : (
            "Analyze My Rejection Risk"
          )}
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6 mb-8">
          {/* Score Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <RiskGauge score={result.score} level={result.level} />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  Your Rejection Risk Score: {result.score}/100
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {result.score <= 25 &&
                    "Your profile shows a low risk of rejection. You appear to meet the key criteria that visa officers evaluate. Ensure all documents are complete and accurate before submitting."}
                  {result.score > 25 &&
                    result.score <= 50 &&
                    "Your profile has some areas of concern that could draw additional scrutiny from visa officers. Review the risk factors below and address them before submitting your application."}
                  {result.score > 50 &&
                    result.score <= 75 &&
                    "Your profile has significant risk factors that frequently lead to visa rejection. Strongly consider addressing the issues identified below and potentially consulting an immigration professional before applying."}
                  {result.score > 75 &&
                    "Your profile carries very high rejection risk based on common assessment criteria. We strongly recommend working with a licensed immigration consultant and making substantial improvements to your profile before applying."}
                </p>
                {/* Risk bar */}
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      result.score <= 25
                        ? "bg-green-500"
                        : result.score <= 50
                        ? "bg-amber-500"
                        : result.score <= 75
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${result.score}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Low Risk</span>
                  <span>Moderate</span>
                  <span>High</span>
                  <span>Very High</span>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Factors */}
          {result.factors.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              <h3 className="text-lg font-extrabold text-gray-900 mb-1">Identified Risk Factors</h3>
              <p className="text-gray-500 text-xs mb-5">
                These are the specific areas that increase your rejection risk, ranked by impact.
              </p>
              <div className="space-y-4">
                {result.factors.map((factor, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="flex items-start gap-3 p-4 bg-red-50">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                          factor.points >= 20
                            ? "bg-red-500"
                            : factor.points >= 10
                            ? "bg-orange-500"
                            : "bg-amber-500"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{factor.label}</div>
                        <div className="text-xs text-red-600 font-semibold mt-0.5">
                          +{factor.points} risk points
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 border-t border-gray-200">
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <div className="text-xs font-bold text-green-800 uppercase mb-1">Mitigation Strategy</div>
                          <div className="text-sm text-green-900 leading-relaxed">{factor.mitigation}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.factors.length === 0 && (
            <div className="bg-green-50 rounded-2xl border border-green-200 p-6 text-center">
              <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-bold text-green-800 mb-1">No Major Risk Factors Identified</h3>
              <p className="text-sm text-green-700">
                Your profile does not show significant red flags. Ensure your documentation is complete and accurate
                before submitting your application.
              </p>
            </div>
          )}

          {/* What Immigration Officers Look For */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
            <h3 className="text-lg font-extrabold text-gray-900 mb-1">
              What Immigration Officers Look For
            </h3>
            <p className="text-gray-500 text-xs mb-5">
              Understanding how visa officers evaluate applications helps you prepare a stronger case.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-primary-800/5 border border-primary-800/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-bold text-sm text-gray-900">Financial Capacity</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Officers verify you can fund your stay without unauthorized employment. They review bank statements
                  for consistent balances (not sudden deposits), income proof, and sponsor finances if applicable. Show
                  3-6 months of steady financial history.
                </p>
              </div>

              <div className="rounded-xl bg-primary-800/5 border border-primary-800/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
                  </svg>
                  <h4 className="font-bold text-sm text-gray-900">Ties to Home Country</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Perhaps the most critical factor. Officers assess whether you have compelling reasons to return:
                  property ownership, ongoing employment, family obligations, or business interests. The stronger your
                  ties, the more confident they are you will not overstay.
                </p>
              </div>

              <div className="rounded-xl bg-primary-800/5 border border-primary-800/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <h4 className="font-bold text-sm text-gray-900">Purpose and Credibility</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Your stated purpose must be logical, specific, and well-documented. Vague plans raise suspicion.
                  Provide detailed itineraries, acceptance letters, employer invitations, or conference registrations
                  that clearly justify the trip duration and activities.
                </p>
              </div>

              <div className="rounded-xl bg-primary-800/5 border border-primary-800/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h4 className="font-bold text-sm text-gray-900">Immigration History</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Previous visa refusals, overstays, or violations are heavily weighted. A clean record of compliance
                  with visa conditions across countries is a strong positive signal. Past refusals must be explained
                  honestly as embassies share data through international databases.
                </p>
              </div>

              <div className="rounded-xl bg-primary-800/5 border border-primary-800/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h4 className="font-bold text-sm text-gray-900">Document Quality</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Complete, well-organized, and genuine documents create a positive impression. Officers are trained to
                  detect inconsistencies, forged documents, and inflated credentials. Ensure bank statements match declared
                  income and all translations are certified.
                </p>
              </div>

              <div className="rounded-xl bg-primary-800/5 border border-primary-800/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-bold text-sm text-gray-900">Country-Specific Factors</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Rejection rates vary by applicant nationality, destination country, and visa category. Some country
                  pairs have historically higher refusal rates. Research your specific corridor and ensure your application
                  addresses the known concerns for that route.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-400 text-center px-4">
            This tool provides an estimated risk assessment for educational purposes only. It does not guarantee any
            outcome. Actual visa decisions are made solely by immigration authorities based on a comprehensive review of
            your complete application, interview performance, and individual circumstances. For professional guidance,
            consult a licensed immigration consultant or attorney.
          </p>
        </div>
      )}
    </div>
  );
}
