// Static navigation data for the client-side Header — kept tiny on purpose so
// the full country/visa datasets are not bundled into every page's JavaScript.
export const NAV_COUNTRIES = [
  { slug: "usa", name: "United States", code: "us" },
  { slug: "uk", name: "United Kingdom", code: "gb" },
  { slug: "canada", name: "Canada", code: "ca" },
  { slug: "australia", name: "Australia", code: "au" },
  { slug: "germany", name: "Germany", code: "de" },
  { slug: "france", name: "France", code: "fr" },
  { slug: "uae", name: "United Arab Emirates", code: "ae" },
  { slug: "japan", name: "Japan", code: "jp" },
  { slug: "netherlands", name: "Netherlands", code: "nl" },
  { slug: "singapore", name: "Singapore", code: "sg" },
  { slug: "new-zealand", name: "New Zealand", code: "nz" },
  { slug: "ireland", name: "Ireland", code: "ie" },
];

export const NAV_VISA_TYPES = [
  { slug: "study", name: "Study Visa", shortDescription: "For international students enrolled in accredited programs" },
  { slug: "work", name: "Work Visa", shortDescription: "For professionals seeking employment abroad" },
  { slug: "tourist", name: "Tourist Visa", shortDescription: "For leisure travel, sightseeing, and visiting family" },
  { slug: "immigration", name: "Immigration & PR", shortDescription: "For permanent residency and long-term settlement" },
  { slug: "business", name: "Business Visa", shortDescription: "For entrepreneurs, investors, and professionals on business trips" },
];
