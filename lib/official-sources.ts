/**
 * Official immigration authority sources per country.
 * Used to inject verified, outbound citations into every article and country page.
 * This is a primary E-E-A-T signal for Google AdSense and Helpful Content.
 */

export interface OfficialSource {
  authority: string;       // Official name of the immigration body
  url: string;             // Direct URL to the immigration/visa page
  label: string;           // Short label for display
  country: string;         // Country slug
}

const OFFICIAL_SOURCES: Record<string, OfficialSource[]> = {
  usa: [
    { authority: "U.S. Citizenship and Immigration Services (USCIS)", url: "https://www.uscis.gov", label: "USCIS Official Site", country: "usa" },
    { authority: "U.S. Department of State — Visas", url: "https://travel.state.gov/content/travel/en/us-visas.html", label: "US Visa Portal", country: "usa" },
    { authority: "USCIS Fee Schedule", url: "https://www.uscis.gov/forms/filing-fees", label: "Official Fee Schedule", country: "usa" },
  ],
  canada: [
    { authority: "Immigration, Refugees and Citizenship Canada (IRCC)", url: "https://www.canada.ca/en/immigration-refugees-citizenship.html", label: "IRCC Official Site", country: "canada" },
    { authority: "Canada Visa Application Centre", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html", label: "Processing Times", country: "canada" },
    { authority: "Express Entry — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html", label: "Express Entry Portal", country: "canada" },
  ],
  uk: [
    { authority: "UK Visas and Immigration (UKVI) — GOV.UK", url: "https://www.gov.uk/browse/visas-immigration", label: "GOV.UK Visas & Immigration", country: "uk" },
    { authority: "UK Home Office — Visa Fees", url: "https://www.gov.uk/government/publications/visa-regulations-revised-table", label: "UK Visa Fee Table", country: "uk" },
    { authority: "UKVI Contact", url: "https://www.gov.uk/contact-ukvi-inside-uk", label: "Contact UKVI", country: "uk" },
  ],
  australia: [
    { authority: "Australian Department of Home Affairs", url: "https://immi.homeaffairs.gov.au", label: "Home Affairs Official Site", country: "australia" },
    { authority: "ImmiAccount — Australia Visa Applications", url: "https://online.immi.gov.au/lusc/login", label: "ImmiAccount Portal", country: "australia" },
    { authority: "Australia Visa Finder", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder", label: "Visa Finder Tool", country: "australia" },
  ],
  germany: [
    { authority: "Federal Office for Migration and Refugees (BAMF)", url: "https://www.bamf.de/EN/", label: "BAMF Official Site", country: "germany" },
    { authority: "German Foreign Office — Visa Information", url: "https://www.auswaertiges-amt.de/en/visa-service", label: "German Visa Service", country: "germany" },
    { authority: "Make it in Germany — Work Visa", url: "https://www.make-it-in-germany.com/en/visa-residence", label: "Make it in Germany", country: "germany" },
  ],
  france: [
    { authority: "France-Visas — Official French Visa Portal", url: "https://france-visas.gouv.fr/en/web/france-visas/", label: "France-Visas Portal", country: "france" },
    { authority: "French Ministry of the Interior — Immigration", url: "https://www.immigration.interieur.gouv.fr/Immigration", label: "French Immigration Ministry", country: "france" },
  ],
  sweden: [
    { authority: "Swedish Migration Agency (Migrationsverket)", url: "https://www.migrationsverket.se/English", label: "Migrationsverket", country: "sweden" },
    { authority: "Migrationsverket — Fees", url: "https://www.migrationsverket.se/English/Private-individuals/Paying-fees.html", label: "Swedish Visa Fees (SEK)", country: "sweden" },
  ],
  uae: [
    { authority: "UAE Federal Authority for Identity, Citizenship, Customs & Port Security (ICP)", url: "https://icp.gov.ae", label: "ICP Official Site", country: "uae" },
    { authority: "General Directorate of Residency and Foreigners Affairs (GDRFA) Dubai", url: "https://www.gdrfad.gov.ae", label: "GDRFA Dubai", country: "uae" },
    { authority: "UAE Ministry of Human Resources — Work Permits", url: "https://mohre.gov.ae/en/home.aspx", label: "MOHRE Work Permits", country: "uae" },
  ],
  "saudi-arabia": [
    { authority: "Saudi Arabia Ministry of Foreign Affairs — Visas", url: "https://www.mofa.gov.sa/en/ServicesAndInstructions/services/Individuals/Pages/Visa.aspx", label: "Saudi MFA Visas", country: "saudi-arabia" },
    { authority: "Saudi Arabia Ministry of Human Resources", url: "https://hrsd.gov.sa/en", label: "Saudi HRSD", country: "saudi-arabia" },
  ],
  japan: [
    { authority: "Japan Ministry of Foreign Affairs — Visa Information", url: "https://www.mofa.go.jp/j_info/visit/visa/index.html", label: "Japan MOFA Visas", country: "japan" },
    { authority: "Immigration Services Agency of Japan", url: "https://www.isa.go.jp/en/index.html", label: "Japan Immigration Agency", country: "japan" },
  ],
  "new-zealand": [
    { authority: "Immigration New Zealand (INZ)", url: "https://www.immigration.govt.nz", label: "Immigration New Zealand", country: "new-zealand" },
    { authority: "INZ Visa Fees", url: "https://www.immigration.govt.nz/new-zealand-visas/visa-fees-and-costs", label: "NZ Visa Fees", country: "new-zealand" },
  ],
  singapore: [
    { authority: "Immigration & Checkpoints Authority (ICA) Singapore", url: "https://www.ica.gov.sg", label: "ICA Singapore", country: "singapore" },
    { authority: "Ministry of Manpower — Employment Pass", url: "https://www.mom.gov.sg/passes-and-permits", label: "MOM Work Passes", country: "singapore" },
  ],
  netherlands: [
    { authority: "Immigration and Naturalisation Service (IND) Netherlands", url: "https://ind.nl/en", label: "IND Netherlands", country: "netherlands" },
    { authority: "Netherlands Worldwide — Visas", url: "https://www.netherlandsworldwide.nl/visas-residence-and-work", label: "Netherlands Worldwide", country: "netherlands" },
  ],
  norway: [
    { authority: "Norwegian Directorate of Immigration (UDI)", url: "https://www.udi.no/en/", label: "UDI Norway", country: "norway" },
  ],
  switzerland: [
    { authority: "State Secretariat for Migration (SEM) Switzerland", url: "https://www.sem.admin.ch/sem/en/home.html", label: "SEM Switzerland", country: "switzerland" },
  ],
  ireland: [
    { authority: "Irish Naturalisation and Immigration Service (INIS)", url: "https://www.irishimmigration.ie", label: "Irish Immigration Service", country: "ireland" },
  ],
  portugal: [
    { authority: "Agency for Integration, Migration and Asylum (AIMA) Portugal", url: "https://aima.gov.pt", label: "AIMA Portugal", country: "portugal" },
  ],
  spain: [
    { authority: "Spanish Ministry of Interior — Foreigners", url: "https://www.interior.gob.es/opencms/en/servicios-al-ciudadano/extranjeria/", label: "Spain Immigration", country: "spain" },
    { authority: "Spain Visa Application", url: "https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Visados.aspx", label: "Spanish Visa Portal", country: "spain" },
  ],
  italy: [
    { authority: "Italian Ministry of Foreign Affairs — Visas", url: "https://vistoperitalia.esteri.it/home/en", label: "Italy Visa Portal", country: "italy" },
  ],
  greece: [
    { authority: "Greek Ministry of Migration and Asylum", url: "https://migration.gov.gr/en/", label: "Greece Migration Ministry", country: "greece" },
    { authority: "Greece Visa Application Center", url: "https://www.visaforgreece.gr/en/", label: "Greece Visa Center", country: "greece" },
  ],
  india: [
    { authority: "Bureau of Immigration India", url: "https://boi.gov.in", label: "Bureau of Immigration India", country: "india" },
    { authority: "Indian Visa Online", url: "https://indianvisaonline.gov.in", label: "Indian Visa Portal", country: "india" },
  ],
  china: [
    { authority: "China Visa Application Service Center", url: "http://www.visaforchina.cn/", label: "China Visa Service Center", country: "china" },
    { authority: "National Immigration Administration China", url: "https://www.nia.gov.cn/n897453/index.html", label: "China NIA", country: "china" },
  ],
  "south-korea": [
    { authority: "Korea Immigration Service", url: "https://www.immigration.go.kr/immigration_eng/index.do", label: "Korea Immigration Service", country: "south-korea" },
    { authority: "Hi Korea — E-Government for Foreigners", url: "https://www.hikorea.go.kr/Main.pt", label: "Hi Korea Portal", country: "south-korea" },
  ],
  malaysia: [
    { authority: "Immigration Department of Malaysia", url: "https://www.imi.gov.my/index.php/en/", label: "Malaysia Immigration", country: "malaysia" },
  ],
  thailand: [
    { authority: "Thailand Immigration Bureau", url: "https://www.immigration.go.th", label: "Thailand Immigration", country: "thailand" },
  ],
  turkey: [
    { authority: "Turkey Ministry of Foreign Affairs — Visas", url: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa", label: "Turkey MFA Visas", country: "turkey" },
    { authority: "Turkey e-Visa Application", url: "https://www.evisa.gov.tr/en/", label: "Turkey e-Visa Portal", country: "turkey" },
  ],
  pakistan: [
    { authority: "Directorate General of Immigration & Passports Pakistan", url: "https://dgip.gov.pk", label: "Pakistan DGIP", country: "pakistan" },
    { authority: "Pakistan Online Visa System", url: "https://visa.nadra.gov.pk", label: "Pakistan Visa Portal", country: "pakistan" },
  ],
  brazil: [
    { authority: "Brazil Ministry of Foreign Affairs — Consular Portal", url: "https://formulario-mre.serpro.gov.br/visto/", label: "Brazil Consular Portal", country: "brazil" },
  ],
  mexico: [
    { authority: "Mexico National Migration Institute (INM)", url: "https://www.gob.mx/inm", label: "Mexico INM", country: "mexico" },
  ],
  "south-africa": [
    { authority: "Department of Home Affairs South Africa", url: "https://www.dha.gov.za", label: "SA Department of Home Affairs", country: "south-africa" },
  ],
  kenya: [
    { authority: "Kenya eCitizen Immigration", url: "https://www.ecitizen.go.ke", label: "Kenya eCitizen Portal", country: "kenya" },
  ],
  nigeria: [
    { authority: "Nigeria Immigration Service", url: "https://immigration.gov.ng", label: "Nigeria Immigration Service", country: "nigeria" },
  ],
  ghana: [
    { authority: "Ghana Immigration Service", url: "https://www.ghanaimmigration.org", label: "Ghana Immigration Service", country: "ghana" },
  ],
  egypt: [
    { authority: "Egypt e-Visa Portal", url: "https://www.visa2egypt.gov.eg", label: "Egypt e-Visa Portal", country: "egypt" },
  ],
  "sri-lanka": [
    { authority: "Sri Lanka Department of Immigration", url: "https://www.immigration.gov.lk", label: "Sri Lanka Immigration", country: "sri-lanka" },
    { authority: "Sri Lanka ETA", url: "https://www.eta.gov.lk", label: "Sri Lanka ETA Portal", country: "sri-lanka" },
  ],
  bangladesh: [
    { authority: "Bangladesh Department of Immigration & Passports", url: "https://www.dip.gov.bd", label: "Bangladesh Immigration", country: "bangladesh" },
  ],
  nepal: [
    { authority: "Nepal Department of Immigration", url: "https://www.immigration.gov.np", label: "Nepal Immigration Department", country: "nepal" },
  ],
  philippines: [
    { authority: "Philippines Bureau of Immigration", url: "https://immigration.gov.ph", label: "Philippines Bureau of Immigration", country: "philippines" },
  ],
  indonesia: [
    { authority: "Indonesia Directorate General of Immigration", url: "https://www.imigrasi.go.id", label: "Indonesia Immigration", country: "indonesia" },
    { authority: "Indonesia e-VOA", url: "https://evoa.imigrasi.go.id", label: "Indonesia e-VOA Portal", country: "indonesia" },
  ],
  vietnam: [
    { authority: "Vietnam Immigration Department", url: "https://immigration.gov.vn", label: "Vietnam Immigration", country: "vietnam" },
    { authority: "Vietnam e-Visa Portal", url: "https://evisa.xuatnhapcanh.gov.vn", label: "Vietnam e-Visa Portal", country: "vietnam" },
  ],
  poland: [
    { authority: "Poland Ministry of Foreign Affairs — Visas", url: "https://www.gov.pl/web/dyplomacja-en/visas", label: "Poland MFA Visas", country: "poland" },
  ],
  czechia: [
    { authority: "Czech Ministry of Interior — Foreigners", url: "https://www.mvcr.cz/mvcren/", label: "Czech MOI", country: "czechia" },
  ],
  austria: [
    { authority: "Austria Federal Ministry of Interior — Aliens Police", url: "https://www.bmi.gv.at/302/", label: "Austria MOI", country: "austria" },
  ],
  belgium: [
    { authority: "Belgium Immigration Office (DVZ/OE)", url: "https://dofi.ibz.be/en", label: "Belgium Immigration Office", country: "belgium" },
  ],
  denmark: [
    { authority: "Danish Immigration Service (SIRI/Styrelsen for International Rekruttering og Integration)", url: "https://www.nyidanmark.dk/en-GB", label: "New to Denmark Portal", country: "denmark" },
  ],
  finland: [
    { authority: "Finnish Immigration Service (Migri)", url: "https://migri.fi/en/frontpage", label: "Migri Finland", country: "finland" },
  ],
  qatar: [
    { authority: "Qatar Ministry of Interior — Immigration", url: "https://www.moi.gov.qa/en/immigration", label: "Qatar MOI Immigration", country: "qatar" },
    { authority: "Qatar Visa Center", url: "https://www.qatarvisacenter.com", label: "Qatar Visa Center", country: "qatar" },
  ],
  kuwait: [
    { authority: "Kuwait Ministry of Interior — Residency", url: "https://www.moi.gov.kw/en/immigration", label: "Kuwait MOI", country: "kuwait" },
  ],
  bahrain: [
    { authority: "Bahrain Nationality, Passports & Residence Affairs (NPRA)", url: "https://www.evisa.gov.bh", label: "Bahrain e-Visa Portal", country: "bahrain" },
  ],
  oman: [
    { authority: "Oman Royal Police — Expatriate Affairs", url: "https://evisa.rop.gov.om", label: "Oman e-Visa Portal", country: "oman" },
  ],
  russia: [
    { authority: "Russia Ministry of Foreign Affairs — Consular Services", url: "https://www.kdmid.ru/cons_services/information-for-foreigners/information-on-processing-russian-visas/", label: "Russia MFA Consular", country: "russia" },
  ],
  ukraine: [
    { authority: "Ukraine State Migration Service", url: "https://dmsu.gov.ua/en/", label: "Ukraine Migration Service", country: "ukraine" },
  ],
  "new-zealand": [
    { authority: "Immigration New Zealand", url: "https://www.immigration.govt.nz", label: "Immigration New Zealand", country: "new-zealand" },
  ],
};

/** Default fallback for countries without specific sources */
const DEFAULT_SOURCES: OfficialSource[] = [
  {
    authority: "Official Embassy or Consulate Website",
    url: "https://www.embassy-worldwide.com",
    label: "Find Your Country's Embassy",
    country: "default",
  },
  {
    authority: "IATA Travel Centre — Visa Requirements",
    url: "https://www.iatatravelcentre.com/passport-visa-health-travel-document-requirements.htm",
    label: "IATA Travel Requirements",
    country: "default",
  },
];

/**
 * Get official sources for a given country slug.
 * Returns country-specific sources if available, otherwise returns defaults.
 */
export function getOfficialSources(countrySlug: string): OfficialSource[] {
  const sources = OFFICIAL_SOURCES[countrySlug];
  if (sources && sources.length > 0) return sources;

  // Try common slug variations
  const normalized = countrySlug.toLowerCase().replace(/\s+/g, "-");
  const normalized2 = OFFICIAL_SOURCES[normalized];
  if (normalized2 && normalized2.length > 0) return normalized2;

  return DEFAULT_SOURCES;
}

export { OFFICIAL_SOURCES };
