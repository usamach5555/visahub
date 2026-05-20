"use client";

import { useState, useMemo } from "react";
import { COUNTRIES_EXTENDED, type CountryExtended } from "@/data/countries-extended";

type VisaType = "study" | "work" | "business" | "visit" | "immigration";

const VISA_TYPES: { value: VisaType; label: string }[] = [
  { value: "study", label: "Study Visa" },
  { value: "work", label: "Work Visa" },
  { value: "business", label: "Business Visa" },
  { value: "visit", label: "Visit / Tourist Visa" },
  { value: "immigration", label: "Immigration / PR" },
];

const DIFFICULTY_ORDER: Record<string, number> = {
  Easy: 1,
  Moderate: 2,
  Complex: 3,
  Difficult: 4,
};

function parseDaysLower(s: string): number {
  const match = s.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 999;
}

function bestIndex(values: number[]): number {
  let min = Infinity;
  let idx = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] < min) {
      min = values[i];
      idx = i;
    }
  }
  return idx;
}

function DifficultyBadge({ level }: { level: string }) {
  const colorMap: Record<string, string> = {
    Easy: "bg-green-100 text-green-800",
    Moderate: "bg-yellow-100 text-yellow-800",
    Complex: "bg-orange-100 text-orange-800",
    Difficult: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colorMap[level] ?? "bg-gray-100 text-gray-800"}`}
    >
      {level}
    </span>
  );
}

export default function CountryComparisonTool() {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [visaType, setVisaType] = useState<VisaType>("study");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const selectedCountries: CountryExtended[] = useMemo(
    () => selectedSlugs.map((s) => COUNTRIES_EXTENDED.find((c) => c.slug === s)!).filter(Boolean),
    [selectedSlugs]
  );

  const filteredCountries = useMemo(() => {
    if (!searchTerm.trim()) return COUNTRIES_EXTENDED.filter((c) => !selectedSlugs.includes(c.slug));
    const q = searchTerm.toLowerCase();
    return COUNTRIES_EXTENDED.filter(
      (c) => !selectedSlugs.includes(c.slug) && (c.name.toLowerCase().includes(q) || c.region.toLowerCase().includes(q))
    );
  }, [searchTerm, selectedSlugs]);

  const addCountry = (slug: string) => {
    if (selectedSlugs.length >= 3) return;
    setSelectedSlugs((prev) => [...prev, slug]);
    setSearchTerm("");
    setShowDropdown(false);
  };

  const removeCountry = (slug: string) => {
    setSelectedSlugs((prev) => prev.filter((s) => s !== slug));
  };

  // Compute "best" indices for color-coding
  const analysis = useMemo(() => {
    if (selectedCountries.length < 2) return null;

    const fees = selectedCountries.map((c) => c.visaFees[visaType]);
    const processing = selectedCountries.map((c) => parseDaysLower(c.processingDays[visaType]));
    const difficulty = selectedCountries.map((c) => DIFFICULTY_ORDER[c.difficulty[visaType]] ?? 3);

    return {
      bestFeeIdx: bestIndex(fees),
      bestProcessIdx: bestIndex(processing),
      bestDifficultyIdx: bestIndex(difficulty),
      fees,
      processing,
      difficulty,
    };
  }, [selectedCountries, visaType]);

  const recommendation = useMemo(() => {
    if (!analysis || selectedCountries.length < 2) return null;
    const parts: string[] = [];
    const feeCountry = selectedCountries[analysis.bestFeeIdx].name;
    const processCountry = selectedCountries[analysis.bestProcessIdx].name;
    const diffCountry = selectedCountries[analysis.bestDifficultyIdx].name;

    parts.push(`${feeCountry} offers the lowest visa fee ($${analysis.fees[analysis.bestFeeIdx]})`);

    if (processCountry !== feeCountry) {
      parts.push(`${processCountry} has the fastest processing time`);
    } else {
      parts.push(`it also has the fastest processing time`);
    }

    if (diffCountry !== feeCountry && diffCountry !== processCountry) {
      parts.push(`${diffCountry} has the easiest application process`);
    }

    return `Based on your comparison, ${parts.join(", while ")}.`;
  }, [analysis, selectedCountries]);

  const cellHighlight = (rowIdx: number, bestIdx: number) =>
    selectedCountries.length >= 2 && rowIdx === bestIdx
      ? "bg-green-50 ring-2 ring-green-200 ring-inset"
      : "";

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-800 mb-2">
          Country Comparison Tool
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          Compare visa requirements, fees, and processing times side by side. Select 2-3 countries to get started.
        </p>
      </div>

      {/* Selection Area */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8 shadow-sm">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Country Selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Countries ({selectedSlugs.length}/3)
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder={selectedSlugs.length >= 3 ? "Maximum 3 countries selected" : "Search for a country..."}
                value={searchTerm}
                disabled={selectedSlugs.length >= 3}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
              {showDropdown && selectedSlugs.length < 3 && (
                <div className="absolute z-20 w-full mt-1 bg-white rounded-xl border border-gray-200 shadow-lg max-h-56 overflow-y-auto">
                  {filteredCountries.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-gray-400">No countries found</div>
                  ) : (
                    filteredCountries.slice(0, 12).map((c) => (
                      <button
                        key={c.slug}
                        onClick={() => addCountry(c.slug)}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-primary-50 transition-colors flex items-center gap-2"
                      >
                        <img
                          src={`https://flagcdn.com/20x15/${c.code}.png`}
                          alt=""
                          className="w-5 h-4 rounded-sm object-cover"
                        />
                        <span className="font-medium text-gray-800">{c.name}</span>
                        <span className="text-gray-400 text-xs ml-auto">{c.region}</span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
            {/* Selected Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedCountries.map((c) => (
                <span
                  key={c.slug}
                  className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-800 px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  <img
                    src={`https://flagcdn.com/20x15/${c.code}.png`}
                    alt=""
                    className="w-4 h-3 rounded-sm object-cover"
                  />
                  {c.name}
                  <button
                    onClick={() => removeCountry(c.slug)}
                    className="ml-1 text-primary-400 hover:text-red-500 transition-colors"
                    aria-label={`Remove ${c.name}`}
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Visa Type Selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Visa Type</label>
            <select
              value={visaType}
              onChange={(e) => setVisaType(e.target.value as VisaType)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
            >
              {VISA_TYPES.map((vt) => (
                <option key={vt.value} value={vt.value}>
                  {vt.label}
                </option>
              ))}
            </select>
            {/* Quick-switch buttons */}
            <div className="flex flex-wrap gap-2 mt-3">
              {VISA_TYPES.map((vt) => (
                <button
                  key={vt.value}
                  onClick={() => setVisaType(vt.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    visaType === vt.value
                      ? "bg-primary-800 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {vt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      {selectedCountries.length >= 2 && analysis && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto -mx-px">
          {/* Country Headers */}
          <div className="grid border-b border-gray-100 min-w-[480px]" style={{ gridTemplateColumns: `140px repeat(${selectedCountries.length}, 1fr)` }}>
            <div className="p-4 md:p-6 bg-gray-50 flex items-end">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Category</span>
            </div>
            {selectedCountries.map((c, idx) => (
              <div key={c.slug} className="p-4 md:p-6 text-center border-l border-gray-100">
                <img
                  src={`https://flagcdn.com/48x36/${c.code}.png`}
                  alt={c.name}
                  className="w-12 h-9 rounded mx-auto mb-2 shadow-sm object-cover"
                />
                <h3 className="font-bold text-primary-800 text-base md:text-lg">{c.name}</h3>
                <p className="text-xs text-gray-400">{c.capital} &middot; {c.region}</p>
              </div>
            ))}
          </div>

          {/* Rows */}
          {[
            {
              label: "Visa Fee",
              render: (c: CountryExtended, idx: number) => (
                <div className={`p-4 md:p-6 text-center border-l border-gray-100 transition-colors ${cellHighlight(idx, analysis.bestFeeIdx)}`}>
                  <span className="text-2xl font-extrabold text-gray-900">${c.visaFees[visaType]}</span>
                  <p className="text-xs text-gray-400 mt-1">{c.currency}</p>
                  {idx === analysis.bestFeeIdx && selectedCountries.length >= 2 && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">Lowest</span>
                  )}
                </div>
              ),
            },
            {
              label: "Processing Time",
              render: (c: CountryExtended, idx: number) => (
                <div className={`p-4 md:p-6 text-center border-l border-gray-100 transition-colors ${cellHighlight(idx, analysis.bestProcessIdx)}`}>
                  <span className="text-base font-bold text-gray-900">{c.processingDays[visaType]}</span>
                  {idx === analysis.bestProcessIdx && selectedCountries.length >= 2 && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">Fastest</span>
                  )}
                </div>
              ),
            },
            {
              label: "Difficulty",
              render: (c: CountryExtended, idx: number) => (
                <div className={`p-4 md:p-6 text-center border-l border-gray-100 transition-colors ${cellHighlight(idx, analysis.bestDifficultyIdx)}`}>
                  <DifficultyBadge level={c.difficulty[visaType]} />
                  {idx === analysis.bestDifficultyIdx && selectedCountries.length >= 2 && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">Easiest</span>
                  )}
                </div>
              ),
            },
            {
              label: "Language",
              render: (c: CountryExtended) => (
                <div className="p-4 md:p-6 text-center border-l border-gray-100">
                  <span className="text-sm font-medium text-gray-700">{c.languageRequirement}</span>
                </div>
              ),
            },
            {
              label: "Currency",
              render: (c: CountryExtended) => (
                <div className="p-4 md:p-6 text-center border-l border-gray-100">
                  <span className="text-sm font-semibold text-gray-800">{c.currency}</span>
                </div>
              ),
            },
            {
              label: "Key Facts",
              render: (c: CountryExtended) => (
                <div className="p-4 md:p-6 border-l border-gray-100">
                  <ul className="space-y-1.5">
                    {c.keyFacts.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-accent-500 mt-0.5 shrink-0">&#10003;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            },
            {
              label: "Popular For",
              render: (c: CountryExtended) => (
                <div className="p-4 md:p-6 border-l border-gray-100">
                  <div className="flex flex-wrap gap-1.5">
                    {c.popularFor.map((p, i) => (
                      <span
                        key={i}
                        className="inline-block px-2.5 py-1 rounded-lg bg-accent-50 text-accent-600 text-[11px] font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              label: "Embassy",
              render: (c: CountryExtended) => (
                <div className="p-4 md:p-6 text-center border-l border-gray-100">
                  <a
                    href={c.embassyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary-700 hover:text-primary-800 font-medium underline underline-offset-2 transition-colors"
                  >
                    Official Website
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ),
            },
          ].map((row, ri) => (
            <div
              key={ri}
              className={`grid ${ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-b border-gray-100 last:border-b-0`}
              style={{ gridTemplateColumns: `140px repeat(${selectedCountries.length}, 1fr)` }}
            >
              <div className="p-3 md:p-6 flex items-center bg-gray-50">
                <span className="text-xs sm:text-sm font-semibold text-gray-600">{row.label}</span>
              </div>
              {selectedCountries.map((c, idx) => (
                <div key={c.slug}>{row.render(c, idx)}</div>
              ))}
            </div>
          ))}
          </div>{/* close overflow-x-auto */}
        </div>
      )}

      {/* Recommendation Summary */}
      {recommendation && (
        <div className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-2xl p-6 md:p-8 text-white shadow-md mb-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Recommendation</h3>
              <p className="text-white/90 text-sm leading-relaxed">{recommendation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {selectedCountries.length < 2 && (
        <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-1">Select at least 2 countries to compare</h3>
          <p className="text-sm text-gray-400">
            Use the search above to add countries. You can compare up to 3 countries at once.
          </p>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {showDropdown && (
        <div className="fixed inset-0 z-10" onClick={() => setShowDropdown(false)} />
      )}
    </div>
  );
}
