import { ArticleMeta, simpleHash } from "./articles";

// ─── Variant pools ────────────────────────────────────────────────────────────
// Picked deterministically by hash(slug) so each article gets consistent,
// unique-looking content while still being generated at build time.

// ── Intro (paragraph 1) ───────────────────────────────────────────────────────
const introP1Variants = [
  (a: ArticleMeta) =>
    `Planning to ${a.visaType === "tourist" ? "visit" : a.visaType === "study" ? "study in" : a.visaType === "work" ? "work in" : "immigrate to"} ${a.countryName}? You are in the right place. This comprehensive guide covers everything you need to know about the ${a.title.toLowerCase()} — from eligibility requirements and required documents to fees, processing times, and insider tips that improve your chances of approval. Whether you are applying for the first time or dealing with a previous refusal, this ${new Date().getFullYear()} guide is updated with the latest information from official government sources.`,
  (a: ArticleMeta) =>
    `The ${a.countryName} ${a.visaType} visa is one of the most sought-after travel authorizations in ${new Date().getFullYear()}. Thousands of applicants from around the world apply each year, but many face rejection due to incomplete documents or misunderstandings about the process. This guide is designed to walk you through every step — from gathering documents to the final approval stamp — so you can apply with confidence and clarity.`,
  (a: ArticleMeta) =>
    `Navigating the ${a.countryName} visa system can feel overwhelming, especially when requirements change frequently. This up-to-date ${new Date().getFullYear()} guide breaks down the entire process in plain language. You will learn exactly which documents to prepare, what fees to pay, how long to wait, and how to avoid the most common mistakes that lead to refusals.`,
  (a: ArticleMeta) =>
    `Getting a ${a.countryName} ${a.visaType} visa requires careful preparation, attention to detail, and a clear understanding of the immigration process. In this guide, our immigration editors have compiled everything applicants need to know for ${new Date().getFullYear()} — from the initial eligibility check to receiving your visa and travelling with confidence.`,
  (a: ArticleMeta) =>
    `Every year, thousands of applicants successfully obtain the ${a.countryName} ${a.visaType} visa and begin new chapters in their lives. But the process can be complicated if you do not know what to expect. This guide simplifies the ${a.title.toLowerCase()} process by breaking it down step by step, so you can submit a strong application the first time.`,
];

// ── Intro (paragraph 2 — provides context) ────────────────────────────────────
const introP2Variants = [
  (a: ArticleMeta) =>
    `The ${a.countryName} immigration system has specific requirements that vary depending on your nationality, the purpose of your visit, and the visa category you are applying for. Understanding these nuances before you begin your application can save you significant time and money. This guide focuses specifically on the ${a.visaType} visa category, explaining the rules, timelines, and document requirements in clear, actionable terms.`,
  (a: ArticleMeta) =>
    `Visa policies for ${a.countryName} are updated regularly, so relying on outdated information is one of the most common causes of avoidable rejections. We have compiled this guide using official government sources, embassy announcements, and immigration authority publications. Bookmark this page so you can refer back to it as you move through the application process.`,
  (a: ArticleMeta) =>
    `Many applicants underestimate the level of documentation required for a ${a.countryName} ${a.visaType} visa. Officials are trained to identify incomplete or inconsistent applications, and even minor errors can lead to delays or outright refusals. By following this guide carefully, you will have a clear checklist to work through and a much higher chance of first-attempt success.`,
  (a: ArticleMeta) =>
    `Whether you are a student, a working professional, a family member joining a loved one, or simply a traveller looking to explore ${a.countryName}, the visa process requires proper planning. This guide addresses the practical steps, financial requirements, and strategic tips that experienced immigration consultants routinely advise their clients — now available to you at no cost.`,
];

// ── Intro (paragraph 3 — what the reader will learn) ─────────────────────────
const introP3Variants = [
  (a: ArticleMeta) =>
    `By the end of this guide, you will know exactly what documents to prepare, how much to budget for fees, what to expect during biometrics and interviews, and how to track your application after submission. We also cover what to do if your application is refused and how to improve your chances on a reapplication. Let us get started.`,
  (a: ArticleMeta) =>
    `This guide is structured to take you through the ${a.countryName} ${a.visaType} visa process from start to finish. We cover eligibility criteria, the full document checklist, step-by-step application instructions, fee structures, processing timelines, and expert tips for maximising your approval chances. Read on to prepare a standout application.`,
  (a: ArticleMeta) =>
    `In the sections below, you will find a complete requirements checklist, a step-by-step application walkthrough, detailed fee information, typical processing timelines, and a curated list of the most common mistakes to avoid. We have also included a comprehensive FAQ section answering the questions most frequently asked by ${a.countryName} ${a.visaType} visa applicants.`,
];

// ── Eligibility section ───────────────────────────────────────────────────────
const eligibilityVariants = [
  (a: ArticleMeta) =>
    `Before beginning your application, confirm that you meet the core eligibility criteria for the ${a.countryName} ${a.visaType} visa. Applicants are generally required to hold a valid passport from an eligible country, demonstrate a clear and genuine purpose for their visit or stay, and show that they have sufficient financial resources to support themselves during their time in ${a.countryName}. Applicants with a history of previous visa refusals, criminal convictions, or overstays in any country may face additional scrutiny. If you are unsure about your eligibility, it is advisable to consult an accredited immigration advisor before submitting your application.`,
  (a: ArticleMeta) =>
    `Eligibility for the ${a.countryName} ${a.visaType} visa is determined by several factors, including your nationality, your intended purpose and duration of stay, your financial situation, and your immigration history. Nationals of certain countries may be exempt from visa requirements or may be eligible for a simplified process — always check the official ${a.countryName} embassy or consulate website for your specific nationality. Applicants who have been previously deported, refused entry, or overstayed a visa anywhere in the world are required to disclose this information and may need to provide additional documentation explaining the circumstances.`,
  (a: ArticleMeta) =>
    `Not every applicant qualifies for the ${a.countryName} ${a.visaType} visa. The key eligibility requirements include holding a valid travel document, demonstrating the genuine intention to leave ${a.countryName} at the end of your authorised stay (for temporary visas), having a clean immigration and criminal record, and meeting the financial threshold set by the immigration authorities. Some visa categories also require sponsorship from a registered employer, educational institution, or a permanent resident/citizen of ${a.countryName}. Make sure you meet all applicable criteria before investing time and money into the application.`,
];

// ── Requirements ──────────────────────────────────────────────────────────────
const requirementsVariants = [
  () => [
    "Valid passport with at least 6 months of remaining validity beyond your intended stay",
    "Completed and signed visa application form (errors or omissions may cause rejection)",
    "Recent passport-sized photographs meeting official specifications (size, background, recency)",
    "Proof of sufficient financial means — original bank statements for the last 3–6 months",
    "Accommodation proof — confirmed hotel bookings, rental agreement, or a host's invitation letter",
    "Comprehensive travel and medical insurance covering the full duration of your stay",
    "Medical examination certificate from an approved panel physician (if required for your category)",
    "Police clearance certificate / National Identity Document from your home country",
    "Proof of employment or enrolment (employment letter, payslips, or university admission letter)",
    "Evidence of previous travel history (old passports with visas, travel stamps, if applicable)",
  ],
  () => [
    "Current valid passport (must remain valid for at least 6 months after your planned departure date)",
    "Fully completed visa application form — every section must be filled in and the form must be signed",
    "Biometric-quality photographs with a plain white background, taken within the last 6 months",
    "Original bank statements or a letter of financial guarantee from a sponsor, covering full trip costs",
    "Confirmed return/onward travel tickets (or a detailed itinerary for long-term applications)",
    "Strong proof of ties to your home country: property ownership, employment contract, or family documents",
    "Valid travel insurance policy with emergency medical evacuation and repatriation coverage",
    "Purpose-specific documents: university offer letter (study), signed job contract (work), tour programme (tourist)",
    "Sponsor/guarantor documents if someone else is funding your stay or sponsoring your application",
  ],
  () => [
    "Machine-readable biometric passport valid for at least 6 months beyond your planned stay",
    "Official visa application form completed in English (or the required language) — no corrections or white-out",
    "Two recent colour photographs complying with official size and specification requirements",
    "Original bank statements or financial guarantee letter demonstrating adequate funds",
    "Evidence of accommodation arrangements for the full duration of stay",
    "Comprehensive travel and medical insurance policy (minimum coverage as specified by embassy)",
    "Detailed cover letter explaining the purpose, duration, and itinerary of your trip",
    "Supporting documents specific to your visa category (e.g., admission letter, employment contract, business registration)",
    "Completed medical questionnaire or health declaration form (if applicable)",
    "Sponsor affidavit and supporting documents if costs are being covered by a third party",
  ],
  () => [
    "Valid national passport with at least two blank pages and 6 months validity remaining",
    "Duly completed and ink-signed application form — digital forms must be printed before signing",
    "Passport-sized photographs: two copies, white background, no glasses, plain expression",
    "Bank statements for the last 6 months showing consistent balance and regular transactions",
    "Confirmed accommodation bookings or an official invitation letter from a host",
    "Return airline tickets or evidence of onward travel (for short-stay visas)",
    "Valid health/travel insurance for the full duration of stay in the destination country",
    "Employment or business documentation: salary slips, company registration, or leave approval letter",
    "Original school enrolment letter or examination certificate (for student applicants)",
    "Declaration of financial responsibility if a sponsor is paying for any part of the trip",
  ],
];

// ── Financial Requirements ────────────────────────────────────────────────────
const financialVariants = [
  (a: ArticleMeta) =>
    `Financial proof is one of the most scrutinised parts of any ${a.countryName} visa application. Immigration officials use bank statements and other financial documents to verify that you can support yourself during your stay without working illegally or becoming a burden on public funds. Your bank statements should cover at least the last 3–6 months and show a stable balance with regular inflows (salary, business income, or regular transfers). Large unexplained deposits made just before applying are a major red flag and can result in immediate rejection. The minimum required balance varies, but a general guideline is to show at least USD 50–100 per day of your planned stay, plus a buffer for emergencies. If you are being sponsored by someone else, your sponsor must provide an affidavit of support along with their own bank statements and proof of income.`,
  (a: ArticleMeta) =>
    `Demonstrating financial sufficiency is critical to a successful ${a.countryName} ${a.visaType} visa application. The immigration authority needs to be satisfied that you can fund your trip, accommodation, and living expenses without resorting to illegal employment or claiming public benefits. Bank statements should ideally reflect 3–6 months of consistent account activity, with an average balance that comfortably covers your anticipated expenses. If your income is irregular (freelance, self-employment, or seasonal), supplement your statements with tax returns, audited accounts, or a letter from an accountant. Students or dependants may submit their sponsor's financial documents along with a formal sponsorship declaration. Note that the specific minimum financial thresholds differ by visa category and duration of stay — always confirm the exact requirement from the official embassy website.`,
  (a: ArticleMeta) =>
    `Financial evidence is closely reviewed in all ${a.countryName} visa applications. Consular officers are trained to identify artificially inflated balances, borrowed funds, and inconsistent transaction patterns. To present the strongest financial case, maintain a stable bank balance for at least 90 days before applying, avoid large one-time deposits immediately before submitting your application, and ensure that your average monthly balance is sufficient to cover your intended period of stay. For reference, many ${a.countryName} visa categories require applicants to show between USD 1,500 and USD 5,000 in readily accessible funds. If you are self-employed, provide 12 months of business bank statements alongside your tax returns. Families applying together may combine their finances, but each applicant must still be individually listed in the financial documents.`,
];

// ── Processing Times ──────────────────────────────────────────────────────────
const processingVariants = [
  (a: ArticleMeta) =>
    `Processing times for the ${a.countryName} ${a.visaType} visa can vary significantly based on the season, the applicant's nationality, and how busy the embassy or visa application center is at the time of submission. In general, standard processing takes between 3 and 8 weeks from the date of biometric submission. During peak application periods — typically June to September and November to January — processing times can extend to 10–14 weeks. If you have time-sensitive travel plans, consider applying for priority or urgent processing if available; this service typically reduces the wait to 5–10 business days but costs significantly more. Always apply well in advance — immigration experts recommend submitting your application at least 2–3 months before your intended travel date to account for delays.`,
  (a: ArticleMeta) =>
    `The ${a.countryName} visa processing timeline depends on multiple factors including the volume of applications received, the complexity of your case, and whether additional documents or interviews are requested. Under normal circumstances, standard processing takes 4–10 weeks after biometrics. Applicants with straightforward cases and strong supporting documents tend to receive decisions faster. However, if your application is flagged for additional review — for example due to a previous refusal, security check, or missing documents — the timeline can extend considerably. Priority processing is available at most embassies and consulates for an extra fee, and typically guarantees a decision within 5–15 business days. Plan your application timeline carefully and do not book non-refundable travel until you hold a valid visa.`,
  (a: ArticleMeta) =>
    `Understanding ${a.countryName} visa processing timelines helps you plan your trip without unnecessary stress. Standard applications are typically processed within 3–10 weeks, though this varies by embassy, peak season, and individual circumstances. The processing clock starts from the date of your biometrics appointment, not the date you submit your forms online. After biometrics, the application goes to the processing center, where officers review your documents, run security checks, and may request additional information. If an interview is required, this adds further time to the process. Many embassies offer a premium or express service for applicants who need a faster decision — fees for this service range from USD 100 to USD 500 depending on the destination and application category.`,
];

// ── Steps ─────────────────────────────────────────────────────────────────────
const stepsVariants = [
  (a: ArticleMeta) => [
    { title: "Check eligibility and visa category", description: `Verify that you meet all eligibility criteria for the ${a.countryName} ${a.visaType} visa. Use the official government immigration portal to confirm you are applying under the correct visa category for your purpose of travel.` },
    { title: "Gather all required documents", description: "Collect every document on the official checklist before starting your application. Missing documents are the most common cause of delays and refusals. Ensure your passport is valid for at least 6 months beyond your planned return date." },
    { title: "Complete the application form", description: `Fill out the official visa application form carefully and accurately. Every detail must match your passport exactly. Any discrepancies — even minor ones like a different spelling of your name — can cause your application to be rejected.` },
    { title: "Pay the application fee", description: "Pay the required visa fee through the official payment channel. Keep the payment receipt safe, as you will need it at your biometrics appointment and it proves your application was formally submitted." },
    { title: "Book and attend your biometrics appointment", description: `Schedule a biometrics appointment at the nearest ${a.countryName} visa application center or embassy. Bring all original documents, your payment receipt, and a printed copy of your application form. Arrive 15 minutes early.` },
    { title: "Await a decision and track your application", description: "After biometrics, your application enters the review queue. Use the tracking reference number provided to monitor your application status online. Respond promptly if the embassy requests additional documents." },
    { title: "Collect your passport and travel", description: `Once approved, collect your passport from the visa application center and verify that all visa details are correct — particularly the visa type, validity dates, and number of permitted entries — before booking or confirming travel arrangements.` },
  ],
  (a: ArticleMeta) => [
    { title: "Research and confirm your visa type", description: `Not all visa categories have the same requirements. Confirm that the ${a.visaType} visa is the correct category for your specific purpose in ${a.countryName}. Applying under the wrong category is an instant rejection.` },
    { title: "Prepare your document package", description: "Methodically work through the official document checklist. Organise your documents in the recommended order, make additional photocopies, and get certified translations for any documents not in the required language." },
    { title: "Fill in and review your application form", description: "Complete every field of the application form truthfully and accurately. Once complete, review the form at least twice before signing. Common errors include incorrect passport numbers, typos in dates, and missing signatures." },
    { title: "Submit your application and pay fees", description: `Submit your application through the official ${a.countryName} embassy website or authorised application center. Pay all applicable fees (government fee + service fee + biometric fee) and retain proof of payment.` },
    { title: "Attend your scheduled appointment", description: "At your appointment, submit your documents, provide fingerprints and a photograph (biometrics), and if required, participate in a short interview. Be honest, calm, and concise when answering questions." },
    { title: "Monitor your application status", description: "Track your application using the reference number provided. Processing times vary — do not contact the embassy for status updates unless you have exceeded the stated processing timeframe or received a request for information." },
    { title: "Receive your visa and prepare for travel", description: "Upon approval, carefully review your visa vignette or stamp for accuracy. Ensure the visa type, validity, and permitted stay align with your travel plans. Keep your approval documents safely stored for reference at immigration." },
  ],
];

// ── Fees ──────────────────────────────────────────────────────────────────────
const feesVariants = [
  (a: ArticleMeta) =>
    `Visa fees for ${a.countryName} vary by nationality, visa type, and processing speed. The base government application fee for a ${a.visaType} visa typically ranges from USD 60 to USD 200 (or the equivalent in local currency at the time of payment). Priority or express processing, where available, may add an additional USD 100 to USD 400 on top of the standard fee. Biometric fees — which cover the cost of collecting your fingerprints and photograph — are usually charged separately at the visa application center and range from USD 10 to USD 35. Administrative service fees charged by VFS Global, BLS International, or similar third-party application centers typically add USD 20–60 per applicant. All visa fees are non-refundable, even if your application is refused. Always verify the exact fee on the official ${a.countryName} embassy website for your nationality before making payment, as fees are subject to change without advance notice.`,
  (a: ArticleMeta) =>
    `The cost of a ${a.countryName} ${a.visaType} visa in ${new Date().getFullYear()} depends on your nationality, the length and purpose of your stay, and your chosen processing speed. Standard government fees generally range between USD 75 and USD 250. If you apply through a visa application center (VFS Global, BLS International, TLScontact), expect additional service charges of USD 20–50 per application. Biometric collection, where required, adds a further USD 10–30. Express or priority processing can effectively double the base fee but reduces waiting time significantly. Many countries also charge a separate courier or document return fee if you want your passport returned by post rather than collected in person. It is important to note that all fees — government and service — are non-refundable regardless of the outcome of your application.`,
];

// ── Tips ──────────────────────────────────────────────────────────────────────
const tipsVariants = [
  (a: ArticleMeta) => [
    `Apply well in advance: Submit your ${a.countryName} ${a.visaType} visa application at least 8–12 weeks before your intended travel date. This gives ample time for processing and allows you to address any requests for additional information without rush.`,
    `Use the official document checklist: Download the current document checklist directly from the ${a.countryName} embassy or consulate website. Third-party checklists may be outdated or incomplete.`,
    `Maintain a healthy bank balance for at least 90 days: Consular officers pay close attention to the pattern of your financial history, not just the current balance. Avoid large unexplained deposits in the weeks leading up to your application.`,
    `Write a compelling and specific cover letter: A well-structured cover letter that clearly explains your purpose, itinerary, accommodation, and ties to your home country significantly strengthens your application. Generic cover letters are easy to spot and less effective.`,
    `Book refundable travel until you have your visa: Never purchase non-refundable airline tickets or accommodation before receiving your visa. Many applicants lose significant money by assuming approval before it is confirmed.`,
    `Double-check your photographs: Photograph specifications are strictly enforced. Even a slightly off-specification photograph — wrong size, background colour, or facial expression — can cause your application to be returned unprocessed.`,
  ],
  (a: ArticleMeta) => [
    `Start the process early: ${a.countryName} visa applications can take anywhere from a few weeks to several months. Applicants who begin collecting documents and preparing their application at least 3 months in advance consistently report smoother experiences.`,
    `Always use official channels: Submit your application only through the official ${a.countryName} embassy, consulate, or their officially designated application centers. Avoid unofficial intermediaries who charge extra fees for services that should be straightforward.`,
    `Prepare a thorough and organised document package: Present your documents in the order listed on the official checklist, with an index page if submitting a large package. A well-organised submission demonstrates attention to detail and respect for the process.`,
    `Be consistent across all documents: Every document — your application form, financial statements, travel tickets, accommodation bookings — must be consistent and tell the same story about your purpose and timeline of travel.`,
    `Disclose previous refusals honestly: If you have been refused a visa previously, do not attempt to hide it. Most countries share visa refusal data internationally. Honest disclosure with a proper explanation is far more effective than misrepresentation.`,
    `Prepare for your biometrics or interview appointment: Know your application details thoroughly. If an interview is required, practice clear, honest, and concise answers about your purpose of travel, ties to your home country, and financial situation.`,
  ],
];

// ── Mistakes ──────────────────────────────────────────────────────────────────
const mistakesVariants = [
  () => [
    "Submitting incomplete or unsigned application forms — every field must be completed, and the form must be physically or digitally signed",
    "Providing bank statements that show large, unexplained deposits made just before applying — this is a red flag for immigration officers",
    "Submitting photographs that do not meet specifications — wrong size, background colour, or taken more than 6 months ago",
    "Failing to provide a clear and convincing cover letter explaining the genuine purpose of your visit",
    "Applying too close to your travel date — always allow at least 8 weeks for standard processing, more during peak season",
    "Booking non-refundable flights or accommodation before receiving visa approval — this is a costly and avoidable mistake",
    "Ignoring travel insurance requirements or submitting a policy with insufficient coverage",
    "Misrepresenting information on your application — even small inaccuracies are grounds for rejection and may result in future bans",
  ],
  () => [
    "Not having documents translated by a certified translator when required — untranslated documents in a non-approved language are routinely rejected",
    "Submitting photocopies when originals are required — always check whether originals or certified copies are needed for each document",
    "Failing to demonstrate strong ties to your home country — without evidence that you will return home, officers may suspect overstay intent",
    "Purchasing non-refundable tickets before visa approval — wait until your visa is in hand before committing to travel bookings",
    "Providing financial evidence that is insufficient or does not reflect the cost of your planned trip",
    "Missing or expired documents — police clearance, medical certificates, and insurance policies all have expiry dates that must be checked",
    "Failing to attend a scheduled biometrics or interview appointment without prior notification — this typically results in application cancellation",
    "Using an intermediary who is not officially recognised — only deal with embassies, official consulates, and authorised application centers",
  ],
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
function buildFAQs(a: ArticleMeta): { question: string; answer: string }[] {
  const yr = new Date().getFullYear();
  return [
    {
      question: `What are the basic requirements for a ${a.countryName} ${a.visaType} visa in ${yr}?`,
      answer: `You generally need a valid passport with at least 6 months remaining validity, a completed and signed application form, recent passport-sized photographs, proof of sufficient financial means, accommodation evidence, travel insurance, and supporting documents specific to the ${a.visaType} category. The exact requirements vary by nationality — always verify on the official ${a.countryName} embassy website.`,
    },
    {
      question: `How long does the ${a.countryName} ${a.visaType} visa processing take in ${yr}?`,
      answer: `Standard processing typically takes 3–10 weeks from the date of your biometrics appointment. During peak periods (summer and year-end holidays) timelines can extend to 12–14 weeks. Priority processing is available at most embassies for an additional fee, usually reducing the wait to 5–10 business days. Apply well in advance to avoid travel disruptions.`,
    },
    {
      question: `Can I track my ${a.countryName} visa application status?`,
      answer: `Yes. After submitting your application, you will receive a reference or tracking number. You can use this to monitor your application status on the official embassy website or via the visa application center's (VFS Global, BLS International, etc.) online tracking portal. Do not contact the embassy for status updates until the standard processing period has elapsed.`,
    },
    {
      question: `Is it possible to get a ${a.countryName} ${a.visaType} visa with a previous refusal on my record?`,
      answer: `Yes, a previous refusal does not permanently disqualify you. However, you must disclose it and address the reasons for the refusal in your new application. Strengthen your submission with stronger financial evidence, a more detailed cover letter, additional supporting documents, and — where applicable — a formal explanation of the circumstances that led to the previous rejection.`,
    },
    {
      question: `How much does a ${a.countryName} ${a.visaType} visa cost in ${yr}?`,
      answer: `Government fees typically range from USD 75–250 depending on your nationality and visa category. Service fees charged by application centers add USD 20–60, biometric fees add USD 10–35, and priority processing adds USD 100–400 on top of the base fee. All fees are non-refundable. Verify the exact amounts on the official embassy website before making payment.`,
    },
    {
      question: `Do I need travel insurance for a ${a.countryName} ${a.visaType} visa?`,
      answer: `Most visa categories require valid travel and medical insurance covering your entire stay. The minimum required coverage is typically USD 30,000–50,000 for medical expenses and emergency repatriation. Make sure your policy is issued by a recognised insurer and clearly shows the covered period and geographical coverage area. Present the original policy document — not just a booking confirmation — at your appointment.`,
    },
    {
      question: `What happens if my ${a.countryName} visa application is refused?`,
      answer: `If your application is refused, you will receive a refusal letter outlining the reasons. Read it carefully. You may reapply after addressing the specific reasons — this often involves submitting stronger financial evidence, a more detailed cover letter, or additional supporting documents. There is no mandatory waiting period between applications in most cases, though reapplying too quickly without meaningful changes rarely results in a different outcome.`,
    },
    {
      question: `Can family members apply together for a ${a.countryName} ${a.visaType} visa?`,
      answer: `Yes, family members can submit their applications at the same time, but each individual must complete their own application form and pay their own fees. Combined financial evidence is generally acceptable for family applications, provided that the sponsoring member's income is clearly documented and sufficient to cover all applicants. Children under a certain age (typically 18) may follow slightly different documentation requirements.`,
    },
  ];
}

// ── Conclusion ────────────────────────────────────────────────────────────────
const conclusionP1Variants = [
  (a: ArticleMeta) =>
    `Applying for a ${a.countryName} ${a.visaType} visa in ${new Date().getFullYear()} is entirely manageable when you approach it with the right preparation. Start early, gather every required document before you begin your application form, ensure your financial evidence covers your full trip, and submit a complete, honest, and well-organised application package.`,
  (a: ArticleMeta) =>
    `Success with your ${a.countryName} ${a.visaType} visa application comes down to preparation, accuracy, and timing. By following the steps in this guide, maintaining strong financial evidence, and presenting a clear and truthful account of your purpose of travel, you significantly increase your chances of a positive outcome on the first attempt.`,
  (a: ArticleMeta) =>
    `Thousands of people obtain the ${a.countryName} ${a.visaType} visa every year by following the process carefully and submitting complete, well-documented applications. The most common reason for refusals is not failing to meet the criteria, but failing to prove that the criteria are met. A thorough, well-organised application is your single strongest tool.`,
];

const conclusionP2Variants = [
  (a: ArticleMeta) =>
    `If your application is refused, do not be discouraged. Carefully review the refusal letter, identify the specific objections raised, address each one with stronger supporting evidence, and reapply with a more comprehensive submission. With the right preparation, approval is achievable. We wish you every success with your ${a.countryName} ${a.visaType} visa application.`,
  (a: ArticleMeta) =>
    `Always refer to the official ${a.countryName} embassy or consulate website as your primary source of information, as requirements and fees can change. We recommend bookmarking this page and checking back periodically for updates. Good luck with your application — the effort you put into preparing a thorough submission today dramatically increases your chances of a smooth approval.`,
  (a: ArticleMeta) =>
    `Immigration rules evolve regularly, so stay informed by monitoring the official ${a.countryName} government immigration portal for any changes to requirements, fees, or processing times. If you found this guide helpful, share it with others planning to apply for the same visa category. We update our guides regularly to reflect the latest official policies.`,
];

// ─── Helper ───────────────────────────────────────────────────────────────────
function pick<T>(arr: T[], hash: number): T {
  return arr[Math.abs(hash) % arr.length];
}

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ArticleSection {
  type:
    | "intro"
    | "eligibility"
    | "requirements"
    | "financial"
    | "steps"
    | "processing"
    | "fees"
    | "tips"
    | "mistakes"
    | "faq"
    | "conclusion";
  content:
    | string
    | string[]
    | { question: string; answer: string }[]
    | { title: string; description: string }[];
}

// ─── Main builder ─────────────────────────────────────────────────────────────
export function buildArticleBody(article: ArticleMeta): ArticleSection[] {
  const h = simpleHash(article.slug);

  return [
    // ── Introduction (3 paragraphs) ─────────────────────────────────────────
    {
      type: "intro",
      content: [
        pick(introP1Variants, h)(article),
        pick(introP2Variants, h + 1)(article),
        pick(introP3Variants, h + 2)(article),
      ].join("\n\n"),
    },

    // ── Eligibility ─────────────────────────────────────────────────────────
    {
      type: "eligibility",
      content: pick(eligibilityVariants, h + 3)(article),
    },

    // ── Requirements Checklist ──────────────────────────────────────────────
    {
      type: "requirements",
      content: pick(requirementsVariants, h + 4)(),
    },

    // ── Financial Requirements ──────────────────────────────────────────────
    {
      type: "financial",
      content: pick(financialVariants, h + 5)(article),
    },

    // ── Step-by-step process ────────────────────────────────────────────────
    {
      type: "steps",
      content: pick(stepsVariants, h + 6)(article),
    },

    // ── Processing Times ────────────────────────────────────────────────────
    {
      type: "processing",
      content: pick(processingVariants, h + 7)(article),
    },

    // ── Fees ────────────────────────────────────────────────────────────────
    {
      type: "fees",
      content: pick(feesVariants, h + 8)(article),
    },

    // ── Success Tips ────────────────────────────────────────────────────────
    {
      type: "tips",
      content: pick(tipsVariants, h + 9)(article),
    },

    // ── Common Mistakes ─────────────────────────────────────────────────────
    {
      type: "mistakes",
      content: pick(mistakesVariants, h + 10)(),
    },

    // ── FAQ ─────────────────────────────────────────────────────────────────
    {
      type: "faq",
      content: buildFAQs(article),
    },

    // ── Conclusion (2 paragraphs) ───────────────────────────────────────────
    {
      type: "conclusion",
      content: [
        pick(conclusionP1Variants, h + 11)(article),
        pick(conclusionP2Variants, h + 12)(article),
      ].join("\n\n"),
    },
  ];
}
