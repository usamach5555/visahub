"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { COUNTRIES } from "@/data/countries";
import { VISA_TYPES } from "@/data/visa-types";

const difficultyConfig = {
  Easy: { label: "Easy", className: "bg-emerald-100 text-emerald-700 border border-emerald-200" },
  Moderate: { label: "Moderate", className: "bg-amber-100 text-amber-700 border border-amber-200" },
  Complex: { label: "Complex", className: "bg-red-100 text-red-700 border border-red-200" },
};

export default function SearchFilter() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<string>("all");

  const filteredCountries = useMemo(() => {
    const q = query.toLowerCase();
    return COUNTRIES.filter((c) => {
      const matchesQuery =
        !q || c.name.toLowerCase().includes(q) || c.region.toLowerCase().includes(q);
      const matchesType =
        activeType === "all" || c.visaTypes.includes(activeType);
      return matchesQuery && matchesType;
    });
  }, [query, activeType]);

  return (
    <div>
      {/* Search input */}
      <div className="relative max-w-2xl mx-auto mb-6">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="search"
          placeholder="Search country or region…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400 text-sm"
        />
      </div>

      {/* Visa type filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[{ slug: "all", name: "All Countries", icon: "🌍" }, ...VISA_TYPES].map((v) => (
          <button
            key={v.slug}
            onClick={() => setActiveType(v.slug)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-150 ${
              activeType === v.slug
                ? "bg-primary-800 text-white border-primary-800 shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-800"
            }`}
          >
            {"icon" in v ? `${v.icon} ` : ""}{v.name}
          </button>
        ))}
      </div>

      {/* Country grid */}
      {filteredCountries.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No countries match your search.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {filteredCountries.map((c) => {
            const diff = difficultyConfig[c.difficulty];
            return (
              <Link
                key={c.slug}
                href={`/country/${c.slug}`}
                className="group flex flex-col items-center gap-2.5 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                {/* Flag image */}
                <div className="w-14 h-10 rounded-lg overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center bg-gray-50">
                  <Image
                    src={`https://flagcdn.com/w80/${c.code}.png`}
                    alt={`${c.name} flag`}
                    width={80}
                    height={56}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                {/* Name */}
                <span className="font-semibold text-gray-900 group-hover:text-primary-800 transition-colors text-xs sm:text-sm leading-tight">
                  {c.name}
                </span>
                {/* Region */}
                <span className="text-xs text-gray-400 -mt-1">{c.region}</span>
                {/* Difficulty badge */}
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${diff.className}`}>
                  {diff.label}
                </span>
                {/* Processing time */}
                <span className="text-xs text-gray-400">{c.processingTime}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
