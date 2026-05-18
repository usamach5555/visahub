import { COUNTRIES_EXTENDED, VISA_TYPES_EXTENDED, type VisaTypeExtended } from "@/data/countries-extended";

export type PageType =
  | "country-hub"
  | "apply"
  | "how-to"
  | "details"
  | "requirements"
  | "fees"
  | "documents"
  | "processing-time"
  | "rejection"
  | "interview"
  | "success-tips"
  | "checklist"
  | "extension"
  | "faq"
  | "financial"
  | "language"
  | "embassy"
  | null;

export interface ParsedSlug {
  pageType: PageType;
  countrySlug: string;
  visaType: VisaTypeExtended;
  countryName: string;
}

const COUNTRY_SLUGS = new Set(COUNTRIES_EXTENDED.map((c) => c.slug));

/**
 * Visa-type-specific suffix patterns → pageType
 * All match the form: {country}-{visatype}-visa-{suffix}
 */
const VISA_SUFFIX_MAP: Record<string, PageType> = {
  "details": "details",
  "requirements": "requirements",
  "fees": "fees",
  "documents": "documents",
  "processing-time": "processing-time",
  "rejection-reasons": "rejection",
  "interview-tips": "interview",
  "success-tips": "success-tips",
  "checklist": "checklist",
  "extension": "extension",
  "faq": "faq",
  "financial-requirements": "financial",
  "language-requirements": "language",
};

/** Try to extract {country} and {visaType} from a segment like "usa-study" */
function parseCountryVisa(inner: string): { countrySlug: string; visaType: VisaTypeExtended } | null {
  for (const vt of VISA_TYPES_EXTENDED) {
    // visaType appears at the END: "usa-study" → country="usa", vt="study"
    if (inner.endsWith(`-${vt}`)) {
      const candidate = inner.slice(0, -(`-${vt}`.length));
      if (COUNTRY_SLUGS.has(candidate)) return { countrySlug: candidate, visaType: vt };
    }
    // visaType appears at the START: "study-usa" → unlikely but guard
    if (inner.startsWith(`${vt}-`)) {
      const candidate = inner.slice(`${vt}-`.length);
      if (COUNTRY_SLUGS.has(candidate)) return { countrySlug: candidate, visaType: vt };
    }
  }
  return null;
}

export function parseSlug(slug: string): ParsedSlug | null {
  // ── Pattern 1: {country}-visa-info → country-hub ──────────────────────────
  if (slug.endsWith("-visa-info")) {
    const countryPart = slug.slice(0, -"-visa-info".length);
    if (COUNTRY_SLUGS.has(countryPart)) {
      const country = COUNTRIES_EXTENDED.find((c) => c.slug === countryPart)!;
      // visaType="visit" is just a default; country-hub content ignores it
      return { pageType: "country-hub", countrySlug: countryPart, visaType: "visit", countryName: country.name };
    }
  }

  // ── Pattern 17: {country}-embassy-guide → embassy ─────────────────────────
  if (slug.endsWith("-embassy-guide")) {
    const countryPart = slug.slice(0, -"-embassy-guide".length);
    if (COUNTRY_SLUGS.has(countryPart)) {
      const country = COUNTRIES_EXTENDED.find((c) => c.slug === countryPart)!;
      return { pageType: "embassy", countrySlug: countryPart, visaType: "visit", countryName: country.name };
    }
  }

  // ── Pattern 2: apply-{country}-{visatype}-visa → apply ────────────────────
  if (slug.startsWith("apply-") && slug.endsWith("-visa")) {
    const inner = slug.slice("apply-".length, -"-visa".length);
    const parsed = parseCountryVisa(inner);
    if (parsed) {
      const country = COUNTRIES_EXTENDED.find((c) => c.slug === parsed.countrySlug)!;
      return { pageType: "apply", ...parsed, countryName: country.name };
    }
  }

  // ── Pattern 3: how-to-apply-{country}-{visatype}-visa → how-to ───────────
  if (slug.startsWith("how-to-apply-") && slug.endsWith("-visa")) {
    const inner = slug.slice("how-to-apply-".length, -"-visa".length);
    const parsed = parseCountryVisa(inner);
    if (parsed) {
      const country = COUNTRIES_EXTENDED.find((c) => c.slug === parsed.countrySlug)!;
      return { pageType: "how-to", ...parsed, countryName: country.name };
    }
  }

  // ── Patterns 4–16: {country}-{visatype}-visa-{suffix} ────────────────────
  for (const [suffix, pageType] of Object.entries(VISA_SUFFIX_MAP)) {
    const tail = `-visa-${suffix}`;
    if (slug.endsWith(tail)) {
      const inner = slug.slice(0, -tail.length); // e.g. "usa-study"
      const parsed = parseCountryVisa(inner);
      if (parsed) {
        const country = COUNTRIES_EXTENDED.find((c) => c.slug === parsed.countrySlug)!;
        return { pageType, ...parsed, countryName: country.name };
      }
    }
  }

  return null;
}

/** Generate every valid slug for static generation */
export function generateAllProgrammaticSlugs(): string[] {
  const slugs: string[] = [];

  for (const country of COUNTRIES_EXTENDED) {
    const c = country.slug;

    // Country-level pages (2 per country)
    slugs.push(`${c}-visa-info`);
    slugs.push(`${c}-embassy-guide`);

    // Per-visa-type pages (15 per visa type × 5 types = 75 per country)
    for (const vt of VISA_TYPES_EXTENDED) {
      slugs.push(`apply-${c}-${vt}-visa`);             // apply
      slugs.push(`how-to-apply-${c}-${vt}-visa`);      // how-to
      slugs.push(`${c}-${vt}-visa-details`);            // details
      slugs.push(`${c}-${vt}-visa-requirements`);       // requirements
      slugs.push(`${c}-${vt}-visa-fees`);               // fees
      slugs.push(`${c}-${vt}-visa-documents`);          // documents
      slugs.push(`${c}-${vt}-visa-processing-time`);   // processing-time
      slugs.push(`${c}-${vt}-visa-rejection-reasons`); // rejection
      slugs.push(`${c}-${vt}-visa-interview-tips`);    // interview
      slugs.push(`${c}-${vt}-visa-success-tips`);      // success-tips
      slugs.push(`${c}-${vt}-visa-checklist`);          // checklist
      slugs.push(`${c}-${vt}-visa-extension`);          // extension
      slugs.push(`${c}-${vt}-visa-faq`);               // faq
      slugs.push(`${c}-${vt}-visa-financial-requirements`); // financial
      slugs.push(`${c}-${vt}-visa-language-requirements`);  // language
    }
  }

  return slugs;
}
