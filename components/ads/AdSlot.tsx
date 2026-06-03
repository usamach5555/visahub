"use client";

import { useEffect } from "react";

interface AdSlotProps {
  slot: "banner" | "in-content" | "sidebar";
  className?: string;
}

/**
 * AdSense manual ad slots.
 *
 * SETUP REQUIRED:
 * 1. In your AdSense dashboard → Ads → Ad units, create three ad units:
 *    - Banner (leaderboard / horizontal banner)
 *    - In-Content (rectangle / square)
 *    - Sidebar (vertical / skyscraper)
 * 2. Replace the data-ad-slot values below with the real numeric slot IDs
 *    from your AdSense dashboard (e.g. "4892019472").
 * 3. The data-ad-client "ca-pub-4441490689171176" is already correct.
 *
 * The adsbygoogle.js script is loaded globally in app/layout.tsx.
 */

// ── Replace XXXXXXXXXX with your real AdSense slot IDs ──────────────────────
const SLOT_IDS: Record<AdSlotProps["slot"], string> = {
  banner:     "XXXXXXXXXX",   // ← replace with your Banner ad unit slot ID
  "in-content": "XXXXXXXXXX", // ← replace with your In-Content ad unit slot ID
  sidebar:    "XXXXXXXXXX",   // ← replace with your Sidebar ad unit slot ID
};

const PUB_ID = "ca-pub-4441490689171176";

// ── Dimensions for layout stability (CLS prevention) ────────────────────────
const DIMENSIONS: Record<AdSlotProps["slot"], string> = {
  banner:       "min-h-[90px] w-full",
  "in-content": "min-h-[250px] w-full",
  sidebar:      "min-h-[280px] w-full",
};

export default function AdSlot({ slot, className = "" }: AdSlotProps) {
  useEffect(() => {
    try {
      // Push the ad after the <ins> is mounted
      // @ts-expect-error adsbygoogle is injected by the Google script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Silently ignore errors (e.g. ad blocker present)
    }
  }, []);

  const slotId = SLOT_IDS[slot];
  const hasRealSlotId = slotId !== "XXXXXXXXXX";

  // Show placeholder until real slot IDs are configured
  if (!hasRealSlotId) {
    return (
      <div
        className={`bg-gray-100 border border-dashed border-gray-300 rounded flex items-center justify-center text-xs text-gray-400 ${DIMENSIONS[slot]} ${className}`}
        aria-label="Advertisement"
        aria-hidden="true"
      >
        <span className="select-none">Ad</span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${DIMENSIONS[slot]} ${className}`} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={PUB_ID}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
