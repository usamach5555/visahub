/**
 * index-policy.ts — which programmatic URLs exist, which are indexable,
 * and where everything else permanently redirects.
 *
 * Why: the site used to generate ~9,800 country × visa × topic pages and 500
 * template-spun blog posts. Those pages were ~90% identical apart from the
 * country name (Google: "scaled content abuse"), which drags the whole domain
 * down. We now keep:
 *   • one hub per country at /{country}-visa-info  (all 127 kept for users;
 *     only hubs with hand-written content are indexable)
 *   • one guide per country+visa combination that has hand-written content,
 *     at /apply-{country}-{visa}-visa
 * Every other old URL 308-redirects to the closest remaining page, so links
 * and any ranking signals are preserved.
 */
import { COUNTRY_OVERRIDES } from "@/lib/country-specific-content";
import { COUNTRIES_EXTENDED, VISA_TYPES_EXTENDED } from "@/data/countries-extended";
import type { ParsedSlug } from "@/lib/slug-parser";

const OVERRIDE_KEYS = Object.keys(COUNTRY_OVERRIDES);

/** "{country}-{visa}" combos that have real, hand-written content. */
export const CURATED_COMBOS = new Set(
  OVERRIDE_KEYS.filter((k) => !k.endsWith("-hub")),
);

/** Countries whose hub page is indexable (they have hand-written content). */
export const INDEXABLE_HUB_COUNTRIES = new Set(
  OVERRIDE_KEYS.map((k) => k.replace(/-(hub|study|work|business|visit|immigration)$/, "")),
);

export const hubPath = (country: string) => `/${country}-visa-info`;
export const guidePath = (country: string, visa: string) => `/apply-${country}-${visa}-visa`;

export type Decision =
  | { kind: "render"; indexable: boolean }
  | { kind: "redirect"; to: string };

export function decide(parsed: ParsedSlug): Decision {
  const { pageType, countrySlug, visaType } = parsed;
  if (pageType === "country-hub") {
    return { kind: "render", indexable: INDEXABLE_HUB_COUNTRIES.has(countrySlug) };
  }
  const combo = `${countrySlug}-${visaType}`;
  if (pageType === "apply" && CURATED_COMBOS.has(combo)) {
    return { kind: "render", indexable: true };
  }
  // Embassy guides and country-level pages → hub. Per-visa pages → the
  // curated guide when one exists, otherwise the country hub.
  if (pageType !== "embassy" && CURATED_COMBOS.has(combo)) {
    return { kind: "redirect", to: guidePath(countrySlug, visaType) };
  }
  return { kind: "redirect", to: hubPath(countrySlug) };
}

/** Slugs that are actually rendered (pre-built at build time). */
export function renderedSlugs(): string[] {
  const hubs = COUNTRIES_EXTENDED.map((c) => `${c.slug}-visa-info`);
  const guides = [...CURATED_COMBOS]
    .filter((combo) => {
      const vt = VISA_TYPES_EXTENDED.find((v) => combo.endsWith(`-${v}`));
      return !!vt;
    })
    .map((combo) => {
      const vt = VISA_TYPES_EXTENDED.find((v) => combo.endsWith(`-${v}`))!;
      return `apply-${combo.slice(0, -(vt.length + 1))}-${vt}-visa`;
    });
  return [...hubs, ...guides];
}

/** Slugs that belong in the sitemap (rendered AND indexable). */
export function sitemapSlugs(): string[] {
  return renderedSlugs().filter((s) => {
    if (s.endsWith("-visa-info")) return INDEXABLE_HUB_COUNTRIES.has(s.slice(0, -"-visa-info".length));
    return true;
  });
}
