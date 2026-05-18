/**
 * Centralized image system for VisaProcessInfo
 *
 * All images sourced from Unsplash (free tier, no API key required for direct CDN access).
 * Photo IDs are curated to match each country/region/visa-type theme.
 *
 * URL format: https://images.unsplash.com/photo-{ID}?w={W}&auto=format&q=75&fit=crop
 */

// ── Country-specific photo IDs (curated set for major destinations) ───────────

const COUNTRY_PHOTO_IDS: Record<string, string> = {
  "usa":             "1485738422979-f5c462b37559", // New York City skyline
  "uk":              "1513635269975-59663e0ac1ad", // London Bridge / Thames
  "canada":          "1550353175-a3611868086b",    // Canadian Rocky Mountains
  "australia":       "1523482580672-f109ba8cb9be", // Sydney Opera House
  "germany":         "1467912218720-b79bca5b65dc", // German cathedral / architecture
  "france":          "1502602822961-347406341c0f", // Eiffel Tower, Paris
  "uae":             "1512453979798-5ea266f8880c", // Dubai skyline at night
  "japan":           "1540959733332-eab4deabeeaf", // Tokyo cityscape
  "netherlands":     "1512470876302-7a506e7e3d65", // Amsterdam canals
  "singapore":       "1525625293386-3f8f99389edd", // Singapore Marina Bay
  "switzerland":     "1527668752968-14dc70a27c95", // Swiss Alps / mountain lake
  "italy":           "1529260830199-42c24126f198", // Italian coastal village
  "spain":           "1543783207-ec64e4d4f158",    // Spanish architecture
  "india":           "1524492412937-b28074a5d7da", // Taj Mahal, Agra
  "china":           "1508804552017-b21f7ca07f44", // Chinese landscape
  "new-zealand":     "1507699522086-f46b42a69a68", // New Zealand fiordland
  "ireland":         "1555990793-da11153b9d0d",    // Irish green countryside
  "portugal":        "1513735492246-483525079686", // Lisbon streets
  "south-korea":     "1538669715315-155ec38a86b2", // Seoul skyline
  "thailand":        "1552465011-b4e21bf6e79a",    // Thai temples / landscape
  "brazil":          "1483729558449-99ef09a8c88a", // Rio de Janeiro landscape
  "mexico":          "1518638150340-f706e86654de", // Mexican colonial architecture
  "turkey":          "1524231757912-21f4fe3a7200", // Istanbul / Blue Mosque
  "greece":          "1603565816030-6b389eeb23cb", // Greek island / Santorini
  "sweden":          "1504829906886-7d4fce15e2dc", // Scandinavian landscape
  "norway":          "1513506003901-1e6a35086659", // Norwegian fjord
  "austria":         "1506905925346-21bda4d32df4", // Austrian Alps / Vienna
  "denmark":         "1524673360337-be3d56f7b421", // Copenhagen
  "finland":         "1529347796977-5f03de20db2c", // Finnish nature / aurora
  "belgium":         "1467189386127-c4e5e31ee213", // Brussels / Belgium
  "poland":          "1541905693-f3e9d8e78463",    // Warsaw / Krakow
  "czech-republic":  "1519677100203-a0e668c92439", // Prague
  "hungary":         "1549572987-a3ede6da4f4a",    // Budapest
  "romania":         "1611621440736-1bb71c40b2c0", // Romania / Transylvania
  "south-africa":    "1516026672322-218a24c0c1e0", // Cape Town / Table Mountain
  "kenya":           "1516026672322-218a24c0c1e0", // African savannah
  "egypt":           "1539768942851-b78879ea9ad1", // Pyramids of Giza
  "morocco":         "1536086946659-a58cfbac85da", // Moroccan medina
  "nigeria":         "1580746738099-8eda7b90b4d0", // Nigerian landscape
  "indonesia":       "1518548419970-58e3b4079ab2", // Bali / Indonesian temple
  "malaysia":        "1596422846543-3b0e85f1df2f", // Kuala Lumpur / Petronas towers
  "philippines":     "1518509562399-e587c6ea8d8c", // Philippine islands
  "vietnam":         "1583417319070-4a2db29c0ae9", // Vietnam / Ha Long Bay
  "cambodia":        "1528360983277-13d401cdc186", // Angkor Wat, Cambodia
  "saudi-arabia":    "1503854628028-91f91e0c77be", // Saudi Arabia / modern city
  "qatar":           "1567696911688-4e3a1f1d07a2", // Doha skyline
  "kuwait":          "1512453979798-5ea266f8880c", // Gulf modern city (shared)
  "bahrain":         "1512453979798-5ea266f8880c", // Gulf (shared)
  "israel":          "1547036967-23d11aacaee0",    // Jerusalem
  "argentina":       "1501854140801-50d01698950b", // Buenos Aires / Andes
  "chile":           "1501854140801-50d01698950b", // Patagonia / Andes
  "colombia":        "1557511637-7e9fb9bd617a",    // Colombia landscape
  "peru":            "1526778548025-fa2f459cd5ce", // Machu Picchu
  "russia":          "1547526932-7ee0e7d48c81",    // Moscow / Red Square
  "ukraine":         "1519677100203-a0e668c92439", // Eastern European city
  "pakistan":        "1584971434554-d1f5bbfb03cc", // Pakistan landscape
  "bangladesh":      "1584971434554-d1f5bbfb03cc", // South Asian (shared)
  "sri-lanka":       "1518002054494-3a6f94352e9d", // Sri Lanka landscape
  "nepal":           "1516912481800-0f10ec08a13d", // Himalayas / Nepal
  "myanmar":         "1528360983277-13d401cdc186", // Buddhist temples
};

// ── Region-based fallback photo IDs ──────────────────────────────────────────

const REGION_PHOTO_IDS: Record<string, string> = {
  "North America":   "1485738422979-f5c462b37559", // American cityscape
  "Europe":          "1467912218720-b79bca5b65dc", // European architecture
  "Asia":            "1540959733332-eab4deabeeaf", // Asian city skyline
  "South Asia":      "1524492412937-b28074a5d7da", // South Asian landmark
  "Southeast Asia":  "1552465011-b4e21bf6e79a",    // Southeast Asian temple
  "Middle East":     "1512453979798-5ea266f8880c", // Gulf modern skyline
  "Africa":          "1516026672322-218a24c0c1e0", // African landscape
  "South America":   "1483729558449-99ef09a8c88a", // South American city
  "Central America": "1518638150340-f706e86654de", // Central American colonial
  "Oceania":         "1523482580672-f109ba8cb9be", // Oceanic landmark
  "Pacific":         "1507699522086-f46b42a69a68", // Pacific islands
  "Caribbean":       "1544551741-f6bb42df6261",    // Caribbean coastline
};

// ── Default fallback ─────────────────────────────────────────────────────────

const DEFAULT_PHOTO_ID = "1476514525405-8329922b25f5"; // airplane window / travel

// ── Visa-type themed images ───────────────────────────────────────────────────

const VISA_TYPE_PHOTO_IDS: Record<string, string> = {
  study:       "1523240795612-9a054b0db644", // student studying in library
  work:        "1521737604893-d14cc237f11d", // professional in modern office
  business:    "1507679799987-c73779587ccf", // business handshake / meeting
  visit:       "1476514525405-8329922b25f5", // airplane window / travel
  immigration: "1436491865332-7a369c3f4d69", // passport and travel documents
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildUrl(photoId: string, width = 1200, height = 630): string {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&auto=format&q=75&fit=crop`;
}

/**
 * Return the best available Unsplash image URL for a country.
 * Falls back to region, then default travel image.
 */
export function getCountryImageUrl(slug: string, region: string, width = 1200, height = 630): string {
  const id = COUNTRY_PHOTO_IDS[slug] ?? REGION_PHOTO_IDS[region] ?? DEFAULT_PHOTO_ID;
  return buildUrl(id, width, height);
}

/**
 * Return a themed image for a given visa type.
 */
export function getVisaTypeImageUrl(visaType: string, width = 1200, height = 630): string {
  const id = VISA_TYPE_PHOTO_IDS[visaType] ?? DEFAULT_PHOTO_ID;
  return buildUrl(id, width, height);
}

/**
 * Return a thumbnail-sized country image URL (for cards, lists, etc.)
 */
export function getCountryThumbnailUrl(slug: string, region: string): string {
  return getCountryImageUrl(slug, region, 640, 360);
}
