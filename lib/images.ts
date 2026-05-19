/**
 * Centralized image system for VisaProcessInfo
 *
 * All images sourced from Unsplash (free CDN, no API key required).
 * Photo IDs are curated per country/region/visa-type.
 *
 * Quality upgraded to q=85 (was q=75) for HD visual presentation.
 * crop=entropy auto-selects the most visually interesting crop area.
 */

// ── Country-specific photo IDs ────────────────────────────────────────────────

const COUNTRY_PHOTO_IDS: Record<string, string> = {
  // North America
  "usa":             "1543716091-a840c05249ec",    // Empire State Building / NYC skyline
  "canada":          "1550353175-a3611868086b",    // Canadian Rocky Mountains
  "mexico":          "1518638150340-f706e86654de", // Mexico City / colonial

  // Europe
  "uk":              "1513635269975-59663e0ac1ad", // London Bridge / Thames
  "germany":         "1608322460360-009ddc765b99", // German cathedral
  "france":          "1511739001486-6bfe10ce785f", // Eiffel Tower, Paris
  "netherlands":     "1534351590666-13e3e96b5017", // Amsterdam canals
  "switzerland":     "1527668752968-14dc70a27c95", // Swiss Alps / mountain lake
  "italy":           "1529260830199-42c24126f198", // Amalfi coast
  "spain":           "1583422409516-2895a77efded",    // Barcelona / Sagrada Familia
  "portugal":        "1513735492246-483525079686", // Lisbon streets
  "ireland":         "1588417044404-ce4b91a74c7c",    // Irish green countryside
  "sweden":          "1509356843151-3e7d96241e11", // Swedish nature / Stockholm
  "norway":          "1504233529578-6d46baba6d34", // Norwegian fjord
  "austria":         "1506905925346-21bda4d32df4", // Austrian Alps / Vienna
  "denmark":         "1513622470522-26c3c8a854bc", // Copenhagen
  "finland":         "1528155124528-06c125d81e89", // Finnish aurora borealis
  "belgium":         "1467189386127-c4e5e31ee213", // Brussels / Grand Place
  "poland":          "1636903364559-0dfc358abd94",    // Warsaw / Krakow
  "czech-republic":  "1519677100203-a0e668c92439", // Prague old town
  "hungary":         "1751829972654-01ce2c729df5",    // Budapest Parliament
  "romania":         "1568053891507-168bcb54b854", // Romanian castle
  "greece":          "1603565816030-6b389eeb23cb", // Santorini blue domes
  "turkey":          "1524231757912-21f4fe3a7200", // Istanbul Blue Mosque
  "russia":          "1664019597420-da9184af1e9e",    // Moscow / Red Square
  "ukraine":         "1558618666-fcd25c85cd64",    // Kyiv city

  // Asia Pacific
  "japan":           "1540959733332-eab4deabeeaf", // Tokyo cityscape at dusk
  "south-korea":     "1532649097480-b67d52743b69", // Seoul skyline
  "china":           "1608037521277-154cd1b89191", // Chinese landscape / Great Wall
  "singapore":       "1525625293386-3f8f99389edd", // Singapore Marina Bay Sands
  "australia":       "1523482580672-f109ba8cb9be", // Sydney Opera House
  "new-zealand":     "1607972898676-c46aa392c2be", // New Zealand fiordland
  "indonesia":       "1518548419970-58e3b4079ab2", // Bali rice terraces / temple
  "malaysia":        "1764866557865-1f4e4060211f", // KL Petronas Towers
  "philippines":     "1518509562904-e7ef99cdcc86", // Philippine islands
  "vietnam":         "1669819894338-53ab7afc6958", // Ha Long Bay, Vietnam
  "thailand":        "1552465011-b4e21bf6e79a",    // Thai temple / landscape
  "cambodia":        "1528360983277-13d401cdc186", // Angkor Wat
  "myanmar":         "1556967789-e6512208cf68",    // Bagan temples, Myanmar

  // South Asia
  "india":           "1524492412937-b28074a5d7da", // Taj Mahal, Agra
  "nepal":           "1454496522488-7a8e488e8606", // Himalayas / Nepal
  "sri-lanka":       "1518002054494-3a6f94352e9d", // Sri Lanka landscape
  "bangladesh":      "1653932133705-851f4547eb2b", // Dhaka cityscape
  "pakistan":        "1633137120236-ab5c511f9b35",    // Lahore / Pakistan

  // Middle East
  "uae":             "1512453979798-5ea266f8880c", // Dubai skyline at night
  "saudi-arabia":    "1663900108404-a05e8bf82cda", // Riyadh skyline
  "qatar":           "1669815007479-494b3b51c2c3", // Doha skyline
  "kuwait":          "1567074994308-df304d5611db", // Kuwait City towers
  "bahrain":         "1611331225468-4d1055df92de", // Manama, Bahrain
  "israel":          "1547036967-23d11aacaee0",    // Jerusalem old city
  "jordan":          "1579606032821-4e6161c81bd3", // Petra, Jordan

  // Africa
  "south-africa":    "1580060839134-75a5edca2e99", // Cape Town / Table Mountain
  "kenya":           "1551632436-cbf8dd35adfa",    // Kenyan savannah / safari
  "egypt":           "1600520611035-84157ad4084d", // Pyramids of Giza
  "morocco":         "1727640567741-b10a932eb2a6", // Moroccan medina / riad
  "nigeria":         "1618828665347-d870c38c95c7", // Lagos / Nigeria skyline
  "ethiopia":        "1572888195250-3037a59d3578", // Ethiopian landscape
  "ghana":           "1568025848823-86404cd04ad1",    // Ghana / West Africa
  "tanzania":        "1525535816528-974e4b19eb51", // Kilimanjaro / Tanzania

  // Americas
  "brazil":          "1518639192441-8fce0a366e2e", // Rio / Christ the Redeemer
  "argentina":       "1501854140801-50d01698950b", // Buenos Aires / Patagonia
  "chile":           "1558517286-6b7b81953cb5", // Chilean Torres del Paine
  "colombia":        "1560957122-6b41ccfafb89",    // Cartagena, Colombia
  "peru":            "1526392060635-9d6019884377", // Machu Picchu

  // Central America & Caribbean
  "costa-rica":      "1500759285222-a95626b934cb", // Costa Rica rainforest
  "panama":          "1587759301533-ae42d7065a80",    // Panama City skyline
  "guatemala":       "1727659786863-f11c563d9ea9",    // Antigua Guatemala
  "cuba":            "1500759285222-a95626b934cb",  // Havana, Cuba
  "dominican-republic":"1696580436068-f19c26850e8b",   // Dominican Republic beach
  "jamaica":         "1696580436068-f19c26850e8b",     // Jamaican coast
  "honduras":        "1500759285222-a95626b934cb",  // Honduras nature
  "haiti":           "1696580436068-f19c26850e8b",     // Haiti coast
  "suriname":        "1518639192441-8fce0a366e2e",  // Suriname tropical

  // Additional Europe
  "luxembourg":      "1608322460360-009ddc765b99",  // Luxembourg cityscape
  "malta":           "1675773681806-5206f1a1680c",      // Maltese coast
  "cyprus":          "1675773681806-5206f1a1680c",      // Cyprus coast
  "estonia":         "1519677100203-a0e668c92439",   // Tallinn old town
  "bulgaria":        "1519677100203-a0e668c92439",   // Bulgarian architecture
  "serbia":          "1519677100203-a0e668c92439",   // Belgrade fortress
  "croatia":         "1588417044404-ce4b91a74c7c",      // Croatian coast
  "slovakia":        "1519677100203-a0e668c92439",   // Slovak castle
  "slovenia":        "1506905925346-21bda4d32df4",   // Bled lake, Slovenia
  "latvia":          "1519677100203-a0e668c92439",   // Riga old town
  "lithuania":       "1519677100203-a0e668c92439",   // Vilnius cathedral
  "north-macedonia": "1519677100203-a0e668c92439",   // Skopje
  "albania":         "1603565816030-6b389eeb23cb",   // Albanian coast
  "bosnia":          "1519677100203-a0e668c92439",   // Mostar bridge
  "montenegro":      "1588417044404-ce4b91a74c7c",      // Montenegrin coast
  "moldova":         "1519677100203-a0e668c92439",   // Moldova landscape
  "iceland":         "1509356843151-3e7d96241e11",   // Icelandic aurora
  "kosovo":          "1519677100203-a0e668c92439",   // Kosovo landscape

  // Additional Asia
  "georgia":         "1542871549-b0fc1efbace7",   // Tbilisi old town
  "armenia":         "1542871549-b0fc1efbace7",   // Armenian church
  "azerbaijan":      "1542871549-b0fc1efbace7",   // Baku flame towers
  "kazakhstan":      "1540959733332-eab4deabeeaf",   // Nur-Sultan
  "uzbekistan":      "1524492412937-b28074a5d7da",   // Samarkand
  "kyrgyzstan":      "1524492412937-b28074a5d7da",   // Kyrgyz mountains
  "tajikistan":      "1524492412937-b28074a5d7da",   // Pamir mountains
  "mongolia":        "1540959733332-eab4deabeeaf",   // Mongolian steppe
  "laos":            "1552465011-b4e21bf6e79a",      // Laos temples
  "brunei":          "1764866557865-1f4e4060211f",   // Brunei mosque
  "taiwan":          "1540959733332-eab4deabeeaf",   // Taipei 101
  "bhutan":          "1454496522488-7a8e488e8606",   // Bhutanese monastery
  "maldives":        "1514282401047-d79a71a590e8",   // Maldives ocean villas
  "fiji":            "1607972898676-c46aa392c2be",   // Fiji islands

  // Additional Middle East
  "oman":            "1512453979798-5ea266f8880c",   // Omani architecture
  "lebanon":         "1512453979798-5ea266f8880c",   // Beirut skyline

  // Additional Africa
  "rwanda":          "1551632436-cbf8dd35adfa",      // Rwanda hills
  "uganda":          "1551632436-cbf8dd35adfa",      // Uganda landscape
  "senegal":         "1618828665347-d870c38c95c7",   // Dakar
  "cameroon":        "1618828665347-d870c38c95c7",   // Cameroon landscape
  "namibia":         "1580060839134-75a5edca2e99",   // Namibian desert
  "botswana":        "1551632436-cbf8dd35adfa",      // Botswana wildlife
  "mozambique":      "1580060839134-75a5edca2e99",   // Mozambique coast
  "madagascar":      "1551632436-cbf8dd35adfa",      // Madagascar landscape
  "malawi":          "1551632436-cbf8dd35adfa",      // Malawi lake
  "mauritius":       "1514282401047-d79a71a590e8",   // Mauritius beach
  "tunisia":         "1600520611035-84157ad4084d",   // Tunisian architecture
  "algeria":         "1600520611035-84157ad4084d",   // Algerian coast
  "zimbabwe":        "1551632436-cbf8dd35adfa",      // Zimbabwe falls
  "zambia":          "1551632436-cbf8dd35adfa",      // Zambia landscape

  // Additional South America
  "ecuador":         "1526392060635-9d6019884377",   // Ecuadorian Andes
  "bolivia":         "1526392060635-9d6019884377",   // Salar de Uyuni
  "paraguay":        "1501854140801-50d01698950b",   // Paraguay landscape
  "venezuela":       "1518639192441-8fce0a366e2e",   // Venezuelan landscape

  // Pacific / Southeast Asia
  "papua-new-guinea":"1607972898676-c46aa392c2be",   // PNG landscape
  "east-timor":      "1518548419970-58e3b4079ab2",   // East Timor coast
};

// ── Region-based fallback photo IDs ──────────────────────────────────────────

const REGION_PHOTO_IDS: Record<string, string> = {
  "North America":   "1543716091-a840c05249ec",
  "Europe":          "1608322460360-009ddc765b99",
  "Asia":            "1540959733332-eab4deabeeaf",
  "South Asia":      "1524492412937-b28074a5d7da",
  "Southeast Asia":  "1552465011-b4e21bf6e79a",
  "Middle East":     "1512453979798-5ea266f8880c",
  "Africa":          "1580060839134-75a5edca2e99",
  "South America":   "1518639192441-8fce0a366e2e",
  "Central America": "1518638150340-f706e86654de",
  "Oceania":         "1523482580672-f109ba8cb9be",
  "Pacific":         "1607972898676-c46aa392c2be",
  "Caribbean":       "1696580436068-f19c26850e8b",
  "Eastern Europe":  "1519677100203-a0e668c92439",
  // Hybrid regions — countries like Turkey, Georgia, Azerbaijan
  "Europe/Asia":     "1524231757912-21f4fe3a7200", // Istanbul / Eurasian
  "Asia/Europe":     "1542871549-b0fc1efbace7", // Caucasus region
};

// ── Default fallback ─────────────────────────────────────────────────────────

const DEFAULT_PHOTO_ID = "1500835556837-99ac94a94552"; // airplane window / travel

/**
 * Lightweight base64 blur placeholder for hero images.
 * Provides a smooth blue-gradient shimmer while the HD image loads.
 * This prevents the "blank white flash" on slow connections.
 */
export const HERO_BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBmMWY1YyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzFlNDBlZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=";

// ── Visa-type themed images ───────────────────────────────────────────────────

const VISA_TYPE_PHOTO_IDS: Record<string, string> = {
  study:       "1523240795612-9a054b0db644", // student in university library
  work:        "1521737604893-d14cc237f11d", // professional in modern office
  business:    "1507679799987-c73779587ccf", // business meeting / handshake
  visit:       "1488646953014-85cb44e25828", // vibrant airport departure hall
  tourist:     "1507525428034-b723cf961d3e", // stunning beach destination sunset
  immigration: "1521791136064-7986c2920216", // professional handshake / new beginnings
};

// ── Process / how-to page images ─────────────────────────────────────────────

const PROCESS_PHOTO_IDS: Record<string, string> = {
  "study-visa":      "1523240795612-9a054b0db644", // student studying
  "work-visa":       "1521737604893-d14cc237f11d", // office professional
  "work-permit":     "1521737604893-d14cc237f11d", // office professional
  "tourist-visa":    "1500835556837-99ac94a94552", // airplane / travel
  "business-visa":   "1507679799987-c73779587ccf", // business meeting
  "pr-immigration":  "1553697388-94e804e2f0f6", // passport documents
  "interview":       "1573497620053-ea5300f94f21",    // visa interview
  "appeal":          "1589829545856-d10d557cf95f", // formal document / legal
  "rejection":       "1589829545856-d10d557cf95f", // formal document
  "biometrics":      "1585079374502-415f8516dcc3",    // fingerprint / identity
  "embassy":         "1555848962-6e79363ec58f", // embassy / govt building
  "immigration":     "1553697388-94e804e2f0f6", // passport & documents
  "default":         "1553697388-94e804e2f0f6", // passport & documents
};

// ── Section / body-content images (visual breaks between text sections) ──────

const SECTION_PHOTO_IDS: Record<string, string> = {
  // Page-type matches (from [slug] template pt values)
  "country-hub":     "1553697388-94e804e2f0f6",    // passport & world map
  "details":         "1642522029686-5485ea7e6042",    // documents on professional desk
  "apply":           "1434030216411-0b793f4b4173",    // person filling application form
  "how-to":          "1506784983877-45594efa4cbe",    // step-by-step process / planning
  "checklist":       "1484480974693-6ca0a78fb36b",    // organized checklist / planner
  "extension":       "1506784983877-45594efa4cbe",    // calendar / timeline
  "faq":             "1573497019940-1c28c88b4f3e",    // professional Q&A conversation
  "financial":       "1554224155-6726b3ff858f",       // currency / financial planning
  "language":        "1562774053-701939374585",    // education / learning
  "success-tips":    "1522202176988-66273c2fd55f",    // achievement / celebration
  "processing-time": "1506784983877-45594efa4cbe",    // clock / timeline concept
  // Keyword matches (from process slugs and visa types)
  "requirements":    "1642522029686-5485ea7e6042",    // checklist / documents on desk
  "documents":       "1544377193-33dcf4d68fb5",        // official documents & planner
  "fees":            "1554224155-6726b3ff858f",       // currency / financial planning
  "interview":       "1573497019940-1c28c88b4f3e",    // professional conversation
  "embassy":         "1555848962-6e79363ec58f",    // government / embassy building
  "application":     "1434030216411-0b793f4b4173",    // person filling form
  "rejection":       "1589829545856-d10d557cf95f",    // formal legal document
  "appeal":          "1589829545856-d10d557cf95f",    // legal process
  "biometric":       "1585079374502-415f8516dcc3",       // fingerprint / identity tech
  "immigration":     "1434030216411-0b793f4b4173",    // person completing immigration forms
  "pr-":             "1642522029686-5485ea7e6042",    // permanent residency checklist
  "tourist":         "1488646953014-85cb44e25828",    // airport / travel journey
  "study":           "1562774053-701939374585",    // university campus
  "work":            "1497366216548-37526070297c",    // modern office space
  "travel":          "1488646953014-85cb44e25828",    // airport / journey
  "education":       "1562774053-701939374585",    // university campus
  "legal":           "1589829545856-d10d557cf95f",    // legal documents / scales
  "success":         "1522202176988-66273c2fd55f",    // celebration / achievement
  "family":          "1511895426328-dc8714191300",    // family / togetherness
  "health":          "1576091160399-112ba8d25d1d",    // medical / health check
};

// ── Core builder ─────────────────────────────────────────────────────────────

/**
 * Build Unsplash CDN URL with HD quality.
 *
 * KEY DECISIONS:
 * - Default width 1920 (was 1200) — hero images span 100vw, so source must be
 *   large enough to avoid browser upscale blur on 1440px+ screens.
 * - auto=format lets Unsplash serve AVIF/WebP automatically — do NOT also set fm=webp
 *   as that forces WebP even when AVIF would be smaller/sharper.
 * - q=85 for crisp detail; crop=entropy auto-selects the most interesting region.
 */
function buildUrl(photoId: string, width = 1920, height = 1080): string {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&auto=format&q=85&fit=crop&crop=entropy`;
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Return the best Unsplash image URL for a country slug.
 * Falls back: country → region → default travel image.
 * Default 1920×1080 for full-width hero images (avoids upscale blur on 1440px+ screens).
 */
export function getCountryImageUrl(slug: string, region: string, width = 1920, height = 1080): string {
  const id = COUNTRY_PHOTO_IDS[slug] ?? REGION_PHOTO_IDS[region] ?? DEFAULT_PHOTO_ID;
  return buildUrl(id, width, height);
}

/**
 * Return a themed image for a given visa type.
 * Default 1920×1080 for full-width hero backgrounds.
 */
export function getVisaTypeImageUrl(visaType: string, width = 1920, height = 1080): string {
  const id = VISA_TYPE_PHOTO_IDS[visaType] ?? DEFAULT_PHOTO_ID;
  return buildUrl(id, width, height);
}

/**
 * Return a process-page hero image based on topic key.
 * Accepts strings like "study-visa-application", "embassy-interview-guide", etc.
 * Default 1920×1080 for full-width hero backgrounds.
 */
export function getProcessImageUrl(topic: string, width = 1920, height = 1080): string {
  for (const [key, id] of Object.entries(PROCESS_PHOTO_IDS)) {
    if (topic.includes(key)) return buildUrl(id, width, height);
  }
  return buildUrl(PROCESS_PHOTO_IDS.default, width, height);
}

/**
 * Return a section / body-content image based on topic keywords.
 * Used for visual breaks between text-heavy content sections.
 * Default 800×450 for in-content imagery (responsive, not full-width).
 *
 * Lookup priority: exact match → keyword includes → travel fallback
 */
export function getSectionImageUrl(topic: string, width = 800, height = 450): string {
  const lower = topic.toLowerCase();
  // 1. Exact match (for page types like "country-hub", "details", "apply")
  if (SECTION_PHOTO_IDS[lower]) return buildUrl(SECTION_PHOTO_IDS[lower], width, height);
  // 2. Keyword includes (for process slugs like "visa-interview-preparation")
  for (const [key, id] of Object.entries(SECTION_PHOTO_IDS)) {
    if (lower.includes(key)) return buildUrl(id, width, height);
  }
  // 3. Fallback to travel theme
  return buildUrl(SECTION_PHOTO_IDS.travel, width, height);
}

/**
 * Return a thumbnail-sized country image (for cards / lists).
 */
export function getCountryThumbnailUrl(slug: string, region: string): string {
  return getCountryImageUrl(slug, region, 640, 400);
}

/**
 * Return a thumbnail-sized visa-type image.
 */
export function getVisaTypeThumbnailUrl(visaType: string): string {
  return getVisaTypeImageUrl(visaType, 640, 400);
}
