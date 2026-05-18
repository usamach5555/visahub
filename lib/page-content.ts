import { CountryExtended, VISA_TYPE_LABELS, type VisaTypeExtended } from "@/data/countries-extended";
import type { PageType } from "@/lib/slug-parser";

export interface PageContent {
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  internalLinks: { label: string; href: string }[];
  requirements: string[];
  steps: { title: string; description: string }[];
}

// ── Country-specific content fragments ───────────────────────────────────────

const VISA_PURPOSE: Record<VisaTypeExtended, string> = {
  study: "study at a recognized educational institution",
  work: "work legally for an employer",
  business: "conduct business activities and explore investment opportunities",
  visit: "visit for tourism, family visits, or short-term travel",
  immigration: "permanently relocate and gain long-term residency",
};

const VISA_HOLDER_NAME: Record<VisaTypeExtended, string> = {
  study: "student",
  work: "skilled worker",
  business: "business traveller",
  visit: "tourist",
  immigration: "permanent resident applicant",
};

const DOCS_BASE: Record<VisaTypeExtended, string[]> = {
  study: [
    "Valid passport (minimum 6 months validity beyond intended stay)",
    "Completed and signed visa application form",
    "Official acceptance letter from an accredited educational institution",
    "Proof of financial sufficiency (bank statements for last 6 months)",
    "Academic transcripts and certificates",
    "English language proficiency test results (IELTS, TOEFL, PTE, or equivalent)",
    "Statement of purpose (why you chose this institution and country)",
    "Health insurance coverage for the entire study period",
    "Passport-sized photographs meeting embassy specifications",
    "Proof of accommodation (dormitory confirmation or rental agreement)",
    "Medical examination certificate (if required)",
    "Police clearance certificate from home country",
    "Sponsor/guardian financial documents (if financially supported)",
    "Scholarship award letter (if applicable)",
    "Gap year explanation letter (if applicable)",
  ],
  work: [
    "Valid passport with at least 12 months validity beyond planned stay",
    "Completed visa application form with recent photograph",
    "Employment contract or job offer letter from sponsoring employer",
    "Educational qualifications and professional certifications",
    "Curriculum Vitae detailing work experience",
    "Employer's business registration and operating license",
    "Proof of salary and benefits package",
    "Labour market test documentation (if required)",
    "Medical fitness certificate from approved medical center",
    "Police clearance certificate from all countries of residence",
    "Professional reference letters from previous employers",
    "Bank statements showing financial stability",
    "Professional organization memberships (if applicable)",
    "Qualifications equivalency evaluation (if required)",
    "Sponsor declaration letter from employing company",
  ],
  business: [
    "Valid business passport with 6+ months validity",
    "Completed business visa application form",
    "Invitation letter from host company or organization",
    "Business registration certificate of your company",
    "Letter from your employer confirming business trip purpose",
    "Proof of business relationship (contracts, correspondence)",
    "Bank statements showing sufficient funds for the trip",
    "Detailed travel itinerary and accommodation bookings",
    "Return flight tickets",
    "Business card and company letterhead",
    "Tax registration and compliance documents",
    "Proof of business ownership or senior position",
    "Health insurance covering business travel period",
    "Previous business trip evidence (if applicable)",
    "Chamber of Commerce membership (if applicable)",
  ],
  visit: [
    "Valid passport with at least 6 months validity",
    "Completed tourist visa application form",
    "Recent passport-sized photographs (white background)",
    "Proof of sufficient funds (bank statements)",
    "Confirmed round-trip flight bookings",
    "Hotel reservation or invitation letter from host",
    "Travel insurance covering medical emergencies",
    "Proof of employment, business ownership, or enrollment",
    "Previous travel history (copies of previous visas)",
    "No-objection certificate from employer or institution",
    "Income tax returns or salary slips (last 3 months)",
    "Family ties evidence (property ownership, family photos)",
    "Detailed travel itinerary",
    "Proof of accommodation for entire stay",
    "Vaccination certificates (if required for destination)",
  ],
  immigration: [
    "Valid passport with 12+ months validity",
    "Completed permanent residency application form",
    "Birth certificate (officially translated)",
    "Marriage certificate (if applicable)",
    "Educational qualifications with certified translations",
    "Work experience documentation (employment letters, pay slips)",
    "Police clearance certificates from all countries of residence",
    "Medical examination by government-approved physician",
    "Language proficiency test results (IELTS, CELPIP, TEF, etc.)",
    "Proof of settlement funds (bank statements)",
    "Job offer from a qualified employer (if applicable)",
    "Provincial/State nomination certificate (if applicable)",
    "Skills assessment from recognized body",
    "Photographs meeting specific requirements",
    "Application processing fees payment receipt",
  ],
};

const REJECTION_REASONS: Record<VisaTypeExtended, string[]> = {
  study: [
    "Insufficient proof of financial support",
    "Weak ties to home country (overstay risk)",
    "Poorly written or generic statement of purpose",
    "Academic qualifications below institution requirements",
    "Missing or invalid language test scores",
    "Incomplete application or missing documents",
    "Previous visa violations or immigration history",
    "Inconsistent information across documents",
    "Institution not recognized by destination country",
    "Failure to demonstrate genuine study intention",
  ],
  work: [
    "No valid job offer from an approved employer",
    "Employer unable to pass labour market test",
    "Qualifications not recognized in destination country",
    "Criminal record or police clearance issues",
    "Salary below minimum wage threshold",
    "Role not on shortage occupation list",
    "Insufficient work experience for the position",
    "Medical fitness concerns",
    "Previous immigration violations",
    "Employer not registered to sponsor workers",
  ],
  business: [
    "Lack of genuine business relationship with host company",
    "Insufficient proof of business activities",
    "Inadequate funds for the business trip",
    "Previous overstay or visa violations",
    "Weak ties to home country",
    "Vague or suspicious travel itinerary",
    "Missing invitation letter from host organization",
    "Criminal history or security concerns",
    "Inconsistent travel history",
    "Business activities deemed illegal or restricted",
  ],
  visit: [
    "Insufficient proof of financial means",
    "Weak or no ties to home country",
    "Previous visa violations or overstays",
    "Incomplete travel itinerary",
    "Inconsistent information in application",
    "No clear purpose or reason for visit",
    "Failed interview at consulate",
    "Security or criminal history concerns",
    "Medical concerns in high-risk countries",
    "Lack of accommodation proof",
  ],
  immigration: [
    "Insufficient points score in points-based system",
    "Failure to meet language proficiency requirements",
    "Lack of genuine work experience in skilled occupation",
    "Character issues or criminal history",
    "Health conditions not meeting immigration standards",
    "Previous immigration fraud or misrepresentation",
    "Financial requirements not met",
    "Occupation not on skilled list",
    "Failure to pass skills assessment",
    "Sponsor/job offer withdrawal",
  ],
};

// ── Internal links builder ───────────────────────────────────────────────────

function buildInternalLinks(country: CountryExtended, visaType: VisaTypeExtended, pageType: PageType) {
  const c = country.slug;
  const label = VISA_TYPE_LABELS[visaType];
  const links = [
    { label: `${country.name} Visa Information Hub`, href: `/${c}-visa-info` },
    { label: `${country.name} Embassy Guide`, href: `/${c}-embassy-guide` },
    { label: `Apply for ${country.name} ${label}`, href: `/apply-${c}-${visaType}-visa` },
    { label: `How to Apply for ${country.name} ${label}`, href: `/how-to-apply-${c}-${visaType}-visa` },
    { label: `${country.name} ${label} Details`, href: `/${c}-${visaType}-visa-details` },
    { label: `${country.name} ${label} Requirements`, href: `/${c}-${visaType}-visa-requirements` },
    { label: `${country.name} ${label} Fees`, href: `/${c}-${visaType}-visa-fees` },
    { label: `${country.name} ${label} Documents`, href: `/${c}-${visaType}-visa-documents` },
    { label: `${country.name} ${label} Processing Time`, href: `/${c}-${visaType}-visa-processing-time` },
    { label: `${country.name} ${label} Rejection Reasons`, href: `/${c}-${visaType}-visa-rejection-reasons` },
    { label: `${country.name} ${label} Interview Tips`, href: `/${c}-${visaType}-visa-interview-tips` },
    { label: `${country.name} ${label} Success Tips`, href: `/${c}-${visaType}-visa-success-tips` },
    { label: `${country.name} ${label} Checklist`, href: `/${c}-${visaType}-visa-checklist` },
    { label: `${country.name} ${label} Extension`, href: `/${c}-${visaType}-visa-extension` },
    { label: `${country.name} ${label} FAQ`, href: `/${c}-${visaType}-visa-faq` },
    { label: `${country.name} ${label} Financial Requirements`, href: `/${c}-${visaType}-visa-financial-requirements` },
    { label: `${country.name} ${label} Language Requirements`, href: `/${c}-${visaType}-visa-language-requirements` },
    { label: `Visa Eligibility Checker`, href: `/tools/eligibility-checker` },
    { label: `Visa Cost Calculator`, href: `/tools/cost-calculator` },
  ];
  // Remove current page link
  const currentPath = currentSlug(c, visaType, pageType);
  return links.filter((l) => l.href !== currentPath);
}

function currentSlug(c: string, vt: VisaTypeExtended, pt: PageType): string {
  switch (pt) {
    case "country-hub": return `/${c}-visa-info`;
    case "embassy": return `/${c}-embassy-guide`;
    case "apply": return `/apply-${c}-${vt}-visa`;
    case "how-to": return `/how-to-apply-${c}-${vt}-visa`;
    case "details": return `/${c}-${vt}-visa-details`;
    case "requirements": return `/${c}-${vt}-visa-requirements`;
    case "fees": return `/${c}-${vt}-visa-fees`;
    case "documents": return `/${c}-${vt}-visa-documents`;
    case "processing-time": return `/${c}-${vt}-visa-processing-time`;
    case "rejection": return `/${c}-${vt}-visa-rejection-reasons`;
    case "interview": return `/${c}-${vt}-visa-interview-tips`;
    case "success-tips": return `/${c}-${vt}-visa-success-tips`;
    case "checklist": return `/${c}-${vt}-visa-checklist`;
    case "extension": return `/${c}-${vt}-visa-extension`;
    case "faq": return `/${c}-${vt}-visa-faq`;
    case "financial": return `/${c}-${vt}-visa-financial-requirements`;
    case "language": return `/${c}-${vt}-visa-language-requirements`;
    default: return "/";
  }
}

// ── FAQs builder ─────────────────────────────────────────────────────────────

function buildFAQs(country: CountryExtended, visaType: VisaTypeExtended): { question: string; answer: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const fee = country.visaFees[visaType];
  const time = country.processingDays[visaType];
  const currency = country.currency;
  const yr = new Date().getFullYear();

  return [
    {
      question: `How much does a ${country.name} ${label} cost in ${yr}?`,
      answer: `The government application fee for a ${country.name} ${label} is ${currency} ${fee}. Including biometric enrollment (${currency} ${Math.round(fee * 0.15)}), medical examination (${currency} ${Math.round(fee * 0.45)}), document translation, courier fees, and visa facilitation service, the total estimated cost is ${currency} ${Math.round(fee * 2.2)}–${Math.round(fee * 2.8)}. Immigration consultant fees (optional) can add ${currency} ${Math.round(fee * 2)}–${Math.round(fee * 4)} more. All government fees are non-refundable.`,
    },
    {
      question: `How long does ${country.name} ${label} processing take?`,
      answer: `Standard processing for a ${country.name} ${label} takes ${time} from the date of complete application submission. This timeline varies based on: application volume at your local embassy or VFS center, completeness of your document package, whether an interview is required, and your nationality. Apply at least 3–4 months before your intended travel date to allow buffer time for any delays or requests for additional information.`,
    },
    {
      question: `What are the main eligibility requirements for a ${country.name} ${label}?`,
      answer: `Core eligibility requirements include: (1) Valid passport with at least 6 months validity, (2) Demonstrated purpose — genuine intent to ${VISA_PURPOSE[visaType]}, (3) Financial proof — bank statements showing sufficient funds for your stay in ${country.name}, (4) Character requirements — no serious criminal history, (5) Health requirements — medical exam if required, (6) Language requirements — ${country.languageRequirement} proficiency may be tested. Specific requirements vary by nationality; check the ${country.name} embassy in your home country.`,
    },
    {
      question: `Can I work while on a ${country.name} ${visaType === "study" ? "student" : label} visa?`,
      answer: visaType === "study"
        ? `${country.name} student visa holders are typically permitted to work part-time during their studies, usually up to 20 hours per week during academic term and full-time during official holiday periods. Always check the specific work conditions printed on your visa grant. Working beyond permitted hours can result in visa cancellation and a future ban from ${country.name}.`
        : visaType === "work"
          ? `A ${country.name} work visa specifically authorizes you to work for the sponsoring employer listed on your visa. Changing employers requires a new work permit application in most cases. Working for unauthorized employers violates your visa conditions and may result in deportation.`
          : `Working in ${country.name} on a ${label} without a separate work authorization is generally not permitted. If you wish to work during your stay, you must apply for an appropriate work permit separately. Unauthorized work is a serious visa violation in ${country.name}.`,
    },
    {
      question: `Can I bring my family to ${country.name} on a ${label}?`,
      answer: `${country.name} allows ${label} holders to sponsor immediate family members (spouse and dependent children under 18) through dependent visa applications. Dependents must meet health, character, and financial requirements. The primary visa holder must demonstrate sufficient income to support all family members without relying on public funds. Dependent visa fees are separate and processing times may differ.`,
    },
    {
      question: `What happens if my ${country.name} ${label} application is refused?`,
      answer: `If your application is refused, you will receive a written refusal notice explaining the grounds. You have several options: (1) Appeal the decision within the specified timeframe (typically 28–90 days), (2) Request an Administrative Review in some cases, (3) Reapply after addressing the refusal reasons with stronger evidence, (4) Consult a licensed immigration advisor to assess your options. Reapplying too quickly without improving your application rarely succeeds. Allow 3–6 months to strengthen your documentation.`,
    },
    {
      question: `Is a medical examination required for ${country.name} ${label}?`,
      answer: `A medical examination may be required depending on your nationality, the intended length of stay, and the visa category. ${country.name} maintains a list of designated medical facilities authorized to conduct immigration medical examinations. The examination typically includes a general physical assessment, chest X-ray (for TB screening), blood tests, and a review of vaccination history. Medical examination results are usually valid for 12 months from the date of examination.`,
    },
    {
      question: `What is the minimum bank balance required for ${country.name} ${label}?`,
      answer: `${country.name} does not publish a fixed minimum bank balance, but officers assess whether you have sufficient funds for your entire stay. A general guideline is ${currency} ${Math.round(fee * 4)}–${currency} ${Math.round(fee * 10)} for a short-term visa, or significantly more for long-term stays. Bank statements must cover the last 3–6 months and show consistent balances — not sudden large deposits. Salary slips, fixed deposits, property documents, and savings accounts all strengthen your financial profile.`,
    },
    {
      question: `How many times can I reapply if refused for a ${country.name} ${label}?`,
      answer: `There is no formal limit on the number of reapplications for a ${country.name} ${label}. However, each new application must demonstrably address the reasons for previous refusals. Multiple refusals in a short period may make future approvals more difficult as they indicate a persistent eligibility issue. Consult an immigration specialist before reapplying after two or more refusals. Some categories require a mandatory waiting period before reapplication.`,
    },
    {
      question: `Do I need travel insurance for a ${country.name} ${label}?`,
      answer: `Travel insurance is strongly recommended and in many visa categories mandatory for ${country.name}. Required minimum coverage is typically ${currency} ${Math.round(fee * 15)} for emergency medical treatment and repatriation. For longer stays, comprehensive health insurance covering hospitalization, surgery, and evacuation is essential. Keep your insurance policy document with your travel documents as border officers may request proof of coverage.`,
    },
    {
      question: `Can I extend my ${country.name} ${label} from within ${country.name}?`,
      answer: `${country.name} ${label} extension applications must be submitted before your current visa expires, typically 4–8 weeks in advance. Extensions are not guaranteed — you must demonstrate continued eligibility and meet all conditions of your original visa. Overstaying your visa without a valid extension application is a serious immigration violation that can result in forced removal, bans from future entry, and permanent records on your immigration history.`,
    },
    {
      question: `What English or language test is required for ${country.name} ${label}?`,
      answer: `${country.languageRequirement} is the language requirement for ${country.name}. For ${visaType === "study" ? "academic programs, B2–C1 level proficiency is typically required (IELTS 6.0–7.0 or equivalent)" : visaType === "work" ? "professional environments, B1–B2 level is typically required" : visaType === "immigration" ? "immigration pathways, the requirement varies by program but is often IELTS 6.0+ or equivalent" : "tourism and short visits, no formal language test is generally required"}. Test scores must typically be from within the last 2 years. Check current requirements at the official ${country.name} immigration portal as minimum scores change periodically.`,
    },
    {
      question: `How do I track my ${country.name} ${label} application status?`,
      answer: `After submitting your application, you will receive a reference number. Use this to track your application through the official ${country.name} immigration portal at ${country.officialImmigrationUrl} or through your visa application center's online tracking system. Do not contact the embassy or immigration authority repeatedly about your application status, as this does not speed up processing. You will be notified by email or through the tracking system when a decision is made.`,
    },
    {
      question: `What is the validity period of a ${country.name} ${label}?`,
      answer: `A ${country.name} ${label} is typically valid for: ${visaType === "study" ? "the duration of your enrolled course plus a 30–90 day grace period after graduation" : visaType === "work" ? "1–3 years, renewable subject to continued employment" : visaType === "visit" ? "90–180 days per entry, sometimes multiple-entry" : visaType === "business" ? "1–5 years, multiple-entry" : "1–2 years initially, with a pathway to permanent residency"}. The visa stamp in your passport shows the exact validity dates and entry conditions. Never overstay your visa validity — departing ${country.name} before expiry is a legal obligation.`,
    },
    {
      question: `Do I need to attend an interview for my ${country.name} ${label}?`,
      answer: `Interview requirements vary by visa category and applicant nationality. ${visaType === "visit" ? "Tourist visa applicants may not require an interview, depending on nationality." : visaType === "study" ? "Student visa applicants may be called for an interview to verify the genuineness of their study intentions." : "Work and immigration visa applicants frequently require an interview to discuss their qualifications and employment."} If called, prepare thoroughly: bring all original documents, dress professionally, answer questions clearly and honestly, and demonstrate strong ties to your home country. Inconsistent answers between your application and interview can lead to immediate refusal.`,
    },
  ];
}

// ── Content generators per page type ─────────────────────────────────────────

function sectionsCountryHub(country: CountryExtended): { heading: string; body: string }[] {
  const yr = new Date().getFullYear();
  return [
    {
      heading: `${country.name} Visa Overview — Everything You Need to Know (${yr})`,
      body: `${country.name} is located in ${country.region} with its capital at ${country.capital}. The country's immigration system, administered through ${country.officialImmigrationUrl}, offers a range of visa pathways for students, workers, tourists, business professionals, and permanent residency applicants. The official currency is ${country.currency} and the primary language requirement is ${country.languageRequirement}.

Millions of applicants from around the world apply for ${country.name} visas each year, attracted by the country's reputation for ${country.popularFor.join(", ")}. The ${country.name} immigration framework is continuously updated to balance national interests with international mobility — which means requirements and fees can change significantly from year to year.

This guide covers every visa category available for ${country.name}, including eligibility criteria, documentation requirements, fee structures, processing timelines, and step-by-step application guides. Use the navigation below to jump directly to the visa type relevant to your purpose of travel.`,
    },
    {
      heading: `All Visa Types Available for ${country.name}`,
      body: `**Study Visa (Student Permit)**
For students enrolling in accredited programs at ${country.name} educational institutions. Government fee: ${country.currency} ${country.visaFees.study} | Processing: ${country.processingDays.study} | Difficulty: ${country.difficulty.study}.

**Work Visa (Employment Permit)**
For professionals with a job offer from a ${country.name} employer. Government fee: ${country.currency} ${country.visaFees.work} | Processing: ${country.processingDays.work} | Difficulty: ${country.difficulty.work}.

**Business Visa**
For meetings, conferences, and business exploration in ${country.name}. Government fee: ${country.currency} ${country.visaFees.business} | Processing: ${country.processingDays.business} | Difficulty: ${country.difficulty.business}.

**Visit / Tourist Visa**
For tourism, family visits, and short-term travel to ${country.name}. Government fee: ${country.currency} ${country.visaFees.visit} | Processing: ${country.processingDays.visit} | Difficulty: ${country.difficulty.visit}.

**Immigration / Permanent Residency**
For those seeking long-term settlement in ${country.name}. Government fee: ${country.currency} ${country.visaFees.immigration} | Processing: ${country.processingDays.immigration} | Difficulty: ${country.difficulty.immigration}.

Selecting the correct visa category is critical. Applying under the wrong category leads to immediate refusal and loss of non-refundable fees. If uncertain, consult the ${country.name} embassy in your country or a licensed immigration advisor before submitting your application.`,
    },
    {
      heading: `Why ${country.name}? Key Facts for Visa Applicants`,
      body: `${country.name} is a sought-after destination for the following reasons:

${country.popularFor.map((r, i) => `**${i + 1}. ${r}**\nThis is one of the primary reasons international applicants choose ${country.name} over other destinations in ${country.region}.`).join("\n\n")}

**Key Country Facts:**
${country.keyFacts.map((f) => `• ${f}`).join("\n")}

Understanding the country's specific immigration landscape helps you tailor your application to demonstrate genuine purpose and strong eligibility for your chosen visa category.`,
    },
    {
      heading: `${country.name} Immigration Authority and Resources`,
      body: `**Official Immigration Portal:** ${country.officialImmigrationUrl}
This is the primary source for current visa requirements, application forms, and fee schedules. Always cross-check any third-party information with the official portal before submitting your application.

**Embassy and Consulate Locator:** ${country.embassyUrl}
Use this to find the ${country.name} embassy or consulate in your country. Application submission procedures, appointment systems, and specific document requirements may vary by embassy location.

**Language Requirement:** ${country.languageRequirement}
Proof of language proficiency is required for most visa categories. Start preparing for language tests at least 6–12 months before your intended application date.

**Currency:** ${country.currency} (${country.capital})
All visa fees are payable in the accepted currency at the point of application. Exchange rates fluctuate — calculate the equivalent in your home currency close to your application date.`,
    },
    {
      heading: `What to Expect as a Visitor, Student, or Worker in ${country.name}`,
      body: `${country.name} is known for ${country.popularFor.join(", ")}. Understanding what life is actually like for visa holders on the ground helps you prepare both your application and your experience once you arrive.

**Cost of Living:** ${country.name} uses the ${country.currency} as its official currency. Cost of living varies significantly depending on the city and lifestyle. The capital ${country.capital} is generally the most expensive location due to its economic activity and infrastructure. Budget accordingly when preparing your proof-of-funds documentation.

**Language Environment:** ${country.languageRequirement} is the primary language requirement. In major cities and business centers, English is often widely spoken — particularly in international business, academic institutions, and tourist-facing services. However, learning at least basic phrases in the local language is highly recommended for daily life outside these environments.

**Key Country Facts:**
${country.keyFacts.map((f) => `• ${f}`).join("\n")}

**Regional Context:** ${country.name} is situated in ${country.region}, a region with its own specific immigration dynamics, bilateral agreements, and travel patterns. Nationals from neighboring countries may have simplified visa requirements or visa-free access agreements — check your specific nationality's requirements at ${country.officialImmigrationUrl}.

Understanding the country you are applying to visit — its culture, legal system, and practical daily realities — also strengthens your visa application by demonstrating genuine knowledge of and interest in ${country.name}, rather than a generic or uninformed intention to travel.`,
    },
    {
      heading: `Planning Your ${country.name} Visa Application — Practical Guidance`,
      body: `Successful ${country.name} visa applications share a common characteristic: they are thoroughly planned well in advance. Rushed applications are statistically more likely to contain errors, omissions, or insufficiently prepared supporting documents.

**Application Planning Checklist:**

**6 months before your intended travel or start date:**
• Confirm the visa category that matches your exact purpose of travel
• Research current requirements at ${country.officialImmigrationUrl} and your nearest ${country.name} embassy
• Book any required language tests (results take 1–4 weeks; allow time for a retake if needed)
• Request police clearance certificates from your home country — this can take 2–8 weeks

**4–5 months before:**
• Schedule your medical examination at an approved facility (if required for your visa category)
• Begin gathering financial documents: have your bank certify 6 months of statements
• Obtain academic transcripts, professional certifications, or employment documents (allow time for official copies and certified translations)

**3 months before:**
• Complete your visa application form
• Compile your full document package
• Book your biometric appointment at the embassy or VAC
• Pay the government fee of ${country.currency} ${country.visaFees.study} (study), ${country.currency} ${country.visaFees.work} (work), ${country.currency} ${country.visaFees.visit} (visit), or the applicable category fee
• Submit your application

**During processing (standard time: varies by category — see individual visa guides):**
• Track your application using your reference number
• Respond immediately to any requests for additional information
• Do not book non-refundable travel until your visa is approved

**After approval:**
• Collect your passport and verify all visa stamp details (name, dates, conditions)
• Purchase travel insurance (minimum ${country.currency} ${Math.round(country.visaFees.visit * 12)} medical coverage)
• Keep all original supporting documents to present upon entry to ${country.name}`,
    },
    ...sharedExtraSections(country, "visit"),
  ];
}

function sectionsEmbassy(country: CountryExtended): { heading: string; body: string }[] {
  return [
    {
      heading: `${country.name} Embassy and Consulate Guide`,
      body: `Finding the correct ${country.name} embassy or consulate for your visa application is the essential first step in the process. ${country.name}'s diplomatic missions are located worldwide and each has specific application procedures, appointment requirements, and processing timelines.

The official embassy locator is available at ${country.embassyUrl}. Use your country of residence (not necessarily citizenship) to identify the correct embassy or consulate for your application. In countries where ${country.name} does not maintain a direct diplomatic presence, applications are typically processed through a designated regional embassy.

${country.name} also uses third-party Visa Application Centers (VACs) operated by companies such as VFS Global and TLS Contact in many countries. These centers handle document collection, biometric enrollment, and fee payment on behalf of the ${country.name} immigration authority — but all visa decisions are made by the immigration authority itself, not the VAC.`,
    },
    {
      heading: `Booking an Embassy Appointment`,
      body: `Most ${country.name} embassies and consulates require prior appointment booking for visa applications. Walk-in submissions are rarely accepted. Here is the standard process:

**Step 1: Register Online**
Visit ${country.officialImmigrationUrl} or the VFS/TLS portal for your country to create an account and register your application.

**Step 2: Complete the Application Form**
Fill out the online application form accurately and completely. Any errors can result in rejection of your appointment or refusal of your application.

**Step 3: Upload Documents**
Upload scanned copies of all required documents before booking your appointment. Formats and file size limits vary by system.

**Step 4: Pay Application Fee**
Pay the government application fee of ${country.currency} ${country.visaFees.visit} (for tourist) or the applicable fee for your visa category online or at the VAC. Fees are non-refundable.

**Step 5: Book Biometric Appointment**
Select an available appointment slot for biometric enrollment (fingerprints and photograph). Appointment availability varies by location — book early, especially during peak periods (June–September and December–January).

**Step 6: Attend Appointment**
Arrive at least 15 minutes early with your appointment confirmation, all original documents, and payment receipts. Some embassies conduct on-the-spot document verification.`,
    },
    {
      heading: `VFS Global and Third-Party Application Centers`,
      body: `${country.name} uses VFS Global and similar operators in many countries to manage the initial stages of visa applications. VFS Global charges a separate service fee on top of the government application fee — this fee is typically ${country.currency} ${Math.round(country.visaFees.visit * 0.3)}–${Math.round(country.visaFees.visit * 0.6)} and is also non-refundable.

Services offered at VFS centers include:
• Document verification and checklist review
• Biometric data enrollment (fingerprints and photograph)
• Secure document storage and courier service
• Premium lounges for faster service (additional fee)
• Form-filling assistance for an additional fee
• SMS and email tracking services

VFS is only a service provider — it does not make visa decisions. All decisions are made by the ${country.name} immigration authority. If your visa is refused, VFS cannot intervene or appeal on your behalf.`,
    },
    {
      heading: `Passport Submission and Collection`,
      body: `After biometric enrollment and document submission at the ${country.name} embassy or VAC, your passport is held by the immigration authority for the duration of processing (${country.processingDays.visit} for standard tourist applications). During this period, you cannot travel internationally.

**Passport Collection Options:**
• **In-person collection:** Attend the embassy or VAC to collect your passport after being notified of a decision.
• **Courier service:** Pay for secure courier delivery of your passport. This is recommended for applicants who live far from the nearest embassy or VAC.
• **Authorized representative:** In some cases, an authorized person can collect your passport with a signed authorization letter.

If your application is refused, your passport will be returned with the refusal notice explaining the grounds. All original documents submitted are typically returned with your passport.`,
    },
    ...sharedExtraSections(country, "visit"),
  ];
}

function sectionsApply(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const fee = country.visaFees[visaType];
  const time = country.processingDays[visaType];
  const diff = country.difficulty[visaType];
  const docs = DOCS_BASE[visaType];
  const rejections = REJECTION_REASONS[visaType];
  const yr = new Date().getFullYear();

  return [
    {
      heading: `${country.name} ${label} Application — Complete ${yr} Guide`,
      body: `The ${country.name} ${label} is designed for individuals who wish to ${VISA_PURPOSE[visaType]} in ${country.name}. The application process is rated ${diff} difficulty — meaning careful preparation and complete, accurate documentation are essential for a successful outcome.

**Key Application Facts:**
• Government fee: ${country.currency} ${fee} (non-refundable)
• Processing time: ${time}
• Language requirement: ${country.languageRequirement}
• Official portal: ${country.officialImmigrationUrl}

${country.name} processes ${label} applications through a combination of online registration, VAC-based biometric enrollment, and (for some categories) a personal interview at the embassy or consulate. Begin preparations at least 4–6 months before your planned travel date — this allows adequate time for document gathering, language testing, medical examinations, and processing delays.`,
    },
    {
      heading: `Eligibility Criteria for ${country.name} ${label}`,
      body: `To be eligible for a ${country.name} ${label}, you must satisfy all of the following criteria:

**Identity and Travel Document**
Hold a valid passport with at least 6 months' validity beyond your intended stay in ${country.name}. The passport must have at least two blank pages for visa stamps.

**Genuine Purpose**
You must demonstrate a clear, genuine intent to ${VISA_PURPOSE[visaType]}. This is assessed through your application form, supporting documents, and interview (if applicable). Officers look for specificity, consistency, and credibility in your purpose statement.

**Financial Capacity**
Demonstrate that you have sufficient funds to cover all costs of your stay in ${country.name} without working illegally or relying on public funds. Bank statements covering the last 6 months are the primary financial evidence. The minimum expected balance for a ${label} application to ${country.name} is approximately ${country.currency} ${Math.round(fee * 5)}–${Math.round(fee * 10)}.

**Character Requirements**
All applicants must pass a character assessment. Police clearance certificates from all countries of residence in the past 5–10 years are required. Certain criminal convictions may make you ineligible, though each case is assessed individually.

**Health Requirements**
Applicants from certain countries or applying for stays exceeding 6 months may require a medical examination at an approved facility. Results must be submitted with the application or uploaded to the immigration portal.

**Ties to Home Country**
One of the most important eligibility factors is demonstrating that you have strong reasons to return to your home country after your authorized stay in ${country.name}. Evidence of ties includes: property ownership, family dependents, employment contract, business registration, or enrollment in a course.`,
    },
    {
      heading: `Required Documents for ${country.name} ${label}`,
      body: `Compile all required documents before submitting your application. Missing or incorrect documents are the most common cause of delays and refusals.

${docs.map((d, i) => `${i + 1}. **${d}**`).join("\n")}

**Document Standards:**
All foreign-language documents must be accompanied by certified English translations. Original documents or certified true copies are required in most cases — photocopies are not accepted unless specifically permitted. Photographs must be professional quality and meet the exact specifications of the ${country.name} immigration authority. Always check the specific requirements for your embassy as they may differ slightly from the general guidelines.`,
    },
    {
      heading: `Why ${country.name} ${label} Applications Are Refused`,
      body: `Understanding the most common reasons for ${label} refusal helps you build a stronger application:

${rejections.map((r, i) => `**${i + 1}. ${r}**\nThis accounts for a significant proportion of ${country.name} ${label} refusals. Address this proactively in your application with clear, specific supporting evidence.`).join("\n\n")}

**If You Have Been Refused Before:**
A previous refusal is not a permanent bar to re-entry. However, you must directly address the reasons for the previous refusal in your new application. Immigration officers can see your application history, so consistency and honesty are critical. Engaging a licensed immigration consultant with experience in ${country.name} applications is strongly recommended after a refusal.`,
    },
    {
      heading: `After Your ${country.name} ${label} Is Approved — Next Steps`,
      body: `Receiving your ${country.name} ${label} approval is an exciting milestone — but there are several important steps to take before you travel to ensure a smooth arrival and start to your time in ${country.name}.

**Verify Your Visa Stamp Immediately**
When you collect your passport, check every detail on the visa stamp: your full name, date of birth, passport number, visa validity dates, permitted duration of stay, and number of entries. Report any errors to the embassy immediately — corrections become more difficult once you have left the country.

**Purchase Travel Insurance**
Comprehensive travel and health insurance is essential for your stay in ${country.name}. For short visits, ensure minimum medical coverage of ${country.currency} ${Math.round(fee * 15)} including emergency evacuation. For longer stays, comprehensive health insurance covering hospitalization, surgery, and specialist consultations is critical. Carry the insurance policy document and emergency helpline number with you at all times.

**Pre-Departure Document Pack**
Carry the following in your hand luggage — not checked baggage — when travelling to ${country.name}:
• Original passport with the visa stamp
• Printout of your visa grant notice (if e-visa)
• Proof of onward or return travel
• Proof of accommodation for first nights in ${country.name}
• Financial evidence (bank statement or equivalent)
• Contact details for your ${country.name} employer, institution, or host
• Emergency contact numbers (${country.name} embassy from within ${country.name}: check ${country.embassyUrl})

**Understanding Your Visa Conditions**
Your ${label} comes with specific conditions — work restrictions, study requirements, reporting obligations, or mandatory registrations at the ${country.name} immigration office. Read the conditions attached to your grant carefully. Violating any condition can result in visa cancellation without warning.

**If Your Situation Changes**
If your purpose of visit changes materially after arrival — you get a job offer while on a tourist visa, or your study program changes — consult the ${country.name} immigration authority at ${country.officialImmigrationUrl} immediately. Acting without authorization is an immigration violation regardless of intention.`,
    },
    {
      heading: `${country.name} ${label} Fees — Complete Breakdown`,
      body: `**Government Application Fee:** ${country.currency} ${fee}
This is the mandatory fee paid to the ${country.name} immigration authority. It is non-refundable regardless of the outcome.

**Additional Costs (Estimated):**
| Item | Estimated Cost (${country.currency}) |
|---|---|
| Biometric Enrollment | ${Math.round(fee * 0.15)} |
| Medical Examination | ${Math.round(fee * 0.5)} |
| Document Translation (per doc) | ${Math.round(fee * 0.25)} |
| Courier / Postal Service | ${Math.round(fee * 0.1)} |
| VFS / Facilitation Fee | ${Math.round(fee * 0.2)} |
| Immigration Consultant (optional) | ${Math.round(fee * 2.5)}–${Math.round(fee * 5)} |
| **Estimated Total (without consultant)** | **${Math.round(fee * 2.2)}** |

All fees are approximate and subject to change without notice. Verify current fees at ${country.officialImmigrationUrl} before submitting.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsHowTo(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const fee = country.visaFees[visaType];
  const time = country.processingDays[visaType];
  const diff = country.difficulty[visaType];
  const yr = new Date().getFullYear();

  return [
    {
      heading: `How to Apply for ${country.name} ${label} — Step-by-Step Guide (${yr})`,
      body: `This guide walks you through the complete ${country.name} ${label} application process from start to finish. The application is rated ${diff} difficulty. Total processing time after submission is ${time}. Government fee: ${country.currency} ${fee}.

We recommend starting this process at least 4–6 months before your intended travel date. Rushing an application or gathering documents at the last minute significantly increases the risk of errors, missing documents, and refusal.`,
    },
    {
      heading: `Step-by-Step Application Process`,
      body: `**Step 1 — Research & Verify Requirements**
Visit ${country.officialImmigrationUrl} and the ${country.name} embassy website for your country. Requirements vary by nationality. Confirm the current list of required documents, fee amounts, and appointment procedures for your specific embassy or VAC location.

**Step 2 — Gather All Documents**
Create a comprehensive checklist based on official requirements. Start with documents that take longest to obtain: police clearance certificates (2–8 weeks), medical examination results (1–2 weeks), language test scores (3–4 weeks after sitting the test), and bank letters or financial certifications.

**Step 3 — Complete the Application Form**
Fill out the official ${country.name} ${label} application form completely and accurately. Access it at ${country.officialImmigrationUrl}. Use block capitals where required and double-check every field — name spelling, date format, passport number, and travel dates must exactly match your passport and supporting documents.

**Step 4 — Pay the Application Fee**
Pay the government fee of ${country.currency} ${fee} via the accepted payment method for your embassy (online payment, bank draft, or in-person at the VAC). Retain the payment receipt — it is a mandatory submission document.

**Step 5 — Submit Application and Biometrics**
Submit your completed application package at the designated embassy or VAC. Provide biometric data (fingerprints and photograph). Bring all original documents as well as the copies specified. You will receive a reference number to track your application.

**Step 6 — Attend Interview (if Required)**
If an interview is requested, prepare thoroughly. Study your own application, know your purpose for visiting ${country.name}, and be ready to answer detailed questions about your finances, plans, and home-country ties. Dress professionally and arrive early.

**Step 7 — Track and Wait**
Use the official tracking system to monitor your application status. Processing takes ${time}. Do not book non-refundable flights until your visa is confirmed.

**Step 8 — Receive Decision**
You will receive a decision via the tracking system, email, or notification from the VAC. If approved, your visa will be stamped in your passport or issued as an e-visa document.

**Step 9 — Pre-Departure Preparation**
After approval, confirm travel arrangements, purchase travel insurance (minimum coverage: ${country.currency} ${Math.round(fee * 15)}), complete any pre-registration requirements (such as student enrollment confirmation or employer onboarding), and carry all original supporting documents when travelling to ${country.name}.`,
    },
    {
      heading: `Timeline Planning for ${country.name} ${label}`,
      body: `**Recommended Application Timeline:**
- **5–6 months before travel:** Begin document gathering (police clearance, medical exam, language tests)
- **4 months before:** Complete application form, get translations, arrange financial evidence
- **3 months before:** Submit application and biometrics
- **During processing (${time}):** Track application, respond promptly to any requests
- **After approval:** Book flights, arrange accommodation, get travel insurance
- **1–2 weeks before departure:** Confirm all documents, do a final checklist

**Pro Tip:** Always apply during low-volume periods if possible. Embassy appointments are typically more available between February–April and September–October. Summer and December are peak periods with longer appointment waiting times.`,
    },
    {
      heading: `Expert Tips for ${country.name} ${label} Success`,
      body: `**1. Be Specific in Your Purpose Statement**
A generic purpose statement is one of the top rejection reasons. Write a specific, detailed account of your plans in ${country.name} — include institution/employer names, program/job details, and how this fits your long-term goals.

**2. Show Strong Financial Evidence**
Present bank statements spanning 6 months. Diversify financial evidence with salary slips, property ownership documents, fixed deposits, and investment records. Avoid sudden large deposits in the weeks before application.

**3. Demonstrate Home-Country Ties**
Provide concrete evidence that you will return home: a letter from your employer confirming leave of absence, property ownership documents, family photographs, enrollment in a course at home, or business ownership documentation.

**4. Prepare for Interview Questions**
Common questions include: "Why ${country.name} specifically?", "How will you fund your stay?", "What do you plan to do after your visa expires?", "Do you have family in ${country.name}?". Prepare honest, clear, specific answers.

**5. Use Official Sources Only**
Apply only through official ${country.name} immigration channels (${country.officialImmigrationUrl}) or accredited VAC operators. Visa agents who claim to guarantee approval are fraudulent — no one can guarantee a visa approval.

**6. Check Language Requirements Early**
${country.languageRequirement} is required for ${country.name}. If you need a language test, register early — popular test sessions book up 6–8 weeks in advance, and results take 3–14 days after the test.`,
    },
    {
      heading: `What to Do if Your ${country.name} ${label} Takes Longer Than Expected`,
      body: `Processing times are targets, not guarantees. If your application has been under review for significantly longer than the standard ${time} processing period, the following steps can help resolve the situation without causing additional delays.

**Step 1: Verify Your Reference Number is Correct**
Check that you are using the exact reference number provided at the time of submission. A single digit error in the tracking number can show "no record found" — not an actual delay.

**Step 2: Check the Tracking System First**
Visit ${country.officialImmigrationUrl} and enter your reference number in the official tracking portal. Many tracking systems provide stage-by-stage updates. If the status shows "under assessment," the application is still being processed normally. If it shows "additional information required," respond immediately — delays in responding to information requests can cause applications to be closed.

**Step 3: Contact the Embassy or VAC (Only If Significantly Overdue)**
If your application has exceeded the published processing time by more than 20%, contact the ${country.name} embassy or VAC where you applied. Provide your reference number, the date of submission, and your travel date. Be polite and factual — aggressive or repeated contact does not speed up processing.

**Step 4: Consider Engaging an Immigration Advisor**
For applications that are significantly overdue, a licensed immigration advisor familiar with ${country.name} processes can contact the relevant authority on your behalf. They often have established channels for enquiring about stuck applications.

**Step 5: Do Not Rebook Non-Refundable Travel**
If your visa is delayed and you have travel booked, contact your airline and accommodation provider immediately. Many providers will accommodate changes due to documented visa delays — especially if you can provide a letter from the embassy or VAC confirming your application is in process.

**Avoid These Actions While Waiting:**
• Do not submit a duplicate application — it will complicate the existing one
• Do not ask a friend or relative to call the embassy on your behalf
• Do not contact the ${country.name} immigration authority directly if you applied through a VAC — route all enquiries through the VAC`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsDetails(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const fee = country.visaFees[visaType];
  const time = country.processingDays[visaType];
  const diff = country.difficulty[visaType];
  const docs = DOCS_BASE[visaType];
  const yr = new Date().getFullYear();

  return [
    {
      heading: `${country.name} ${label} — Full Details & Legal Framework (${yr})`,
      body: `The ${country.name} ${label} is a formal immigration authorization permitting foreign nationals to enter and remain in ${country.name} for the specific purpose of ${VISA_PURPOSE[visaType]}. Administered by the ${country.name} immigration authority at ${country.officialImmigrationUrl}, this visa category is subject to ${country.name}'s national immigration legislation and policy.

**Classification:** ${diff} difficulty | **Fee:** ${country.currency} ${fee} | **Processing:** ${time}
**Language:** ${country.languageRequirement} | **Region:** ${country.region} | **Capital:** ${country.capital}

The ${label} grants the holder the legal right to ${VISA_PURPOSE[visaType]} for the duration specified on the visa. Any activities beyond the authorized scope — such as working without authorization on a tourist visa, or studying on a work visa — are illegal violations that can result in immediate cancellation of the visa, forced removal from ${country.name}, and a ban on future visa applications.`,
    },
    {
      heading: `Authorization Scope and Legal Conditions`,
      body: `**What the ${country.name} ${label} Authorizes:**
The ${label} specifically authorizes the holder to ${VISA_PURPOSE[visaType]} in ${country.name} for the period stated on the visa grant. Key legal conditions include:

• Compliance with all visa conditions attached to the grant
• Departure from ${country.name} before the visa expiry date (unless an extension is granted)
• No engagement in activities not permitted under this visa category
• Notification of any material change in circumstances (change of address, employer, or study institution)
• Compliance with ${country.name} laws and regulations at all times

**Prohibited Activities:**
Activities not permitted under the ${label} include working for unauthorized employers, engaging in business activities (unless on a business visa), studying for qualification-bearing courses (unless on a student visa), and remaining in ${country.name} beyond the visa expiry date.

**Rights of ${label} Holders:**
While in ${country.name} on a valid ${label}, you have the right to access emergency services, certain consular protections from your home country's embassy, and protection under ${country.name}'s general laws. Access to public healthcare and social services may be restricted for temporary visa holders.`,
    },
    {
      heading: `Complete Document List and Preparation Guide`,
      body: `**Primary Documents (Mandatory):**
${docs.slice(0, 8).map((d, i) => `${i + 1}. ${d}`).join("\n")}

**Supporting Documents:**
${docs.slice(8).map((d, i) => `${i + 9}. ${d}`).join("\n")}

**Document Preparation Standards:**
• All photographs must meet ${country.name} embassy specifications (size, background, recency — typically within 6 months)
• Translations must be performed by certified translators recognized by ${country.name} authorities
• Bank statements must be bank-certified originals, not internet-printed copies
• All foreign-language documents must include certified English (or local language) translations
• Notarization requirements vary by document type and your nationality — confirm with your local embassy`,
    },
    {
      heading: `Fees, Financial Requirements, and Payment`,
      body: `**Government Application Fee:** ${country.currency} ${fee} (non-refundable)

**Estimated Total Cost Breakdown:**
• Government fee: ${country.currency} ${fee}
• Biometric enrollment: ~${country.currency} ${Math.round(fee * 0.15)}
• Medical examination: ~${country.currency} ${Math.round(fee * 0.5)}
• Translation services: ~${country.currency} ${Math.round(fee * 0.3)} per document
• VFS / facilitation fee: ~${country.currency} ${Math.round(fee * 0.2)}
• Courier service: ~${country.currency} ${Math.round(fee * 0.1)}
• **Without consultant:** ~${country.currency} ${Math.round(fee * 2.2)}–${Math.round(fee * 2.8)}
• **With immigration consultant:** add ~${country.currency} ${Math.round(fee * 2.5)}–${Math.round(fee * 5)}

**Financial Sufficiency (Proof of Funds):**
${country.name} requires applicants to demonstrate sufficient funds for their entire stay beyond the visa application fee:
• Short stay (1–3 months): ${country.currency} ${Math.round(fee * 4)}–${Math.round(fee * 8)}
• Medium stay (3–12 months): ${country.currency} ${Math.round(fee * 8)}–${Math.round(fee * 20)}
• Long stay / immigration: significantly higher; consult official requirements

Bank statements must cover 3–6 months and show consistently maintained balances — not recent large deposits.`,
    },
    {
      heading: `Processing Times, Tracking, and Decision`,
      body: `**Standard Processing Time:** ${time} from complete application submission

**Processing Stages:**
1. Document verification at VAC/embassy (1–5 business days)
2. Biometric enrollment processing (1–3 business days)
3. Immigration authority assessment (majority of total processing time)
4. Background checks (concurrent with assessment; varies by nationality)
5. Decision and notification (1–5 business days after assessment)
6. Visa issuance or refusal notice (3–7 days after decision)

**Factors That May Extend Processing:**
• Incomplete or incorrect documents (causes return of application)
• High application volumes (peak periods: June–August, December)
• Additional security clearance for certain nationalities
• Request for additional information or interview
• Public holidays in ${country.name} (${country.capital})

**Expedited / Priority Processing:**
Some ${country.name} embassies offer priority processing (typically 2–3× faster) for an additional fee of 50–100% of the standard government fee. Available for genuine urgent cases — not a guaranteed service.

**Application Tracking:**
Track your application at ${country.officialImmigrationUrl} using your reference number. You will receive email or SMS notification when a decision is made.`,
    },
    {
      heading: `Strategies for Successful ${country.name} ${label} Approval`,
      body: `**Financial Documentation Excellence**
Submit bank statements for 6 months showing consistently maintained funds. Include salary slips, property documents, fixed deposits, and investment portfolios to build a comprehensive financial picture. Never transfer large sums just before applying — immigration officers are trained to identify artificial inflation of balances.

**Purpose Clarity and Authenticity**
Your statement of purpose must be specific, credible, and consistent with your other documents. Reference the specific institution, employer, or business relationship in ${country.name}. Explain clearly why ${country.name} was chosen over other destinations and how this visit fits your overall life plan.

**Strong Home-Country Ties**
Convincing the immigration officer that you will return home is arguably the most important factor. Evidence of ties: employment confirmation letter (even for students), property ownership certificate, family dependents, existing business, or ongoing educational commitments at home.

**Document Consistency**
Every fact in your application must be consistent across all documents. Your name spelling, date of birth, passport number, employment details, and travel history must match exactly. Inconsistencies — even minor ones — trigger additional scrutiny.

**Language Preparation**
${country.languageRequirement} is required for ${country.name}. If you need a language test, schedule it at least 3–4 months before your intended application date. Test results typically take 1–14 days and are valid for 2 years.

**Professional Review**
For complex cases, applications with previous refusals, or immigration/work visa applications, engage a licensed immigration consultant or registered migration agent who specializes in ${country.name} immigration. Beware of unlicensed "visa agents" who charge high fees and guarantee results.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsRequirements(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const fee = country.visaFees[visaType];
  const diff = country.difficulty[visaType];

  return [
    {
      heading: `${country.name} ${label} Eligibility Requirements — Full Guide`,
      body: `Before investing time and money in a ${country.name} ${label} application, it is critical to verify that you meet all eligibility requirements. The application is rated ${diff} difficulty and failure to meet any core requirement will result in refusal — even if all other aspects of your application are strong.

${country.name} applies its eligibility criteria consistently across all nationalities, though some requirements (such as the need for a visa at all, or the specific documents required) vary based on your passport country. The requirements below apply to the majority of applicants; always verify current requirements at ${country.officialImmigrationUrl} and your local ${country.name} embassy.`,
    },
    {
      heading: `Core Eligibility Criteria`,
      body: `**1. Valid Travel Document**
A valid passport with at least 6 months' validity beyond your intended stay in ${country.name} is the foundation of any visa application. The passport must have at least two blank pages. If your passport is expiring soon, renew it before applying.

**2. Genuine Purpose**
You must have a genuine and specific intention to ${VISA_PURPOSE[visaType]}. Officers assess this through your application form, purpose statement, and supporting documents. Generic or vague applications are rejected. Your stated purpose must be supported by concrete evidence (enrollment letter, job offer, business invitation, hotel booking, etc.).

**3. Financial Capacity**
You must demonstrate that you can financially support yourself during your entire stay in ${country.name}. Expected minimum: ${country.currency} ${Math.round(fee * 5)} for short stays; significantly more for long-term or immigration visas. Financial evidence must show consistent maintenance of funds — not recent large deposits.

**4. Health Requirements**
Applicants from certain countries or those applying for stays exceeding 6 months must pass a medical examination at an approved facility. Conditions that may affect eligibility include active tuberculosis, certain infectious diseases, and conditions requiring significant public health resources. The examination is confidential and results are valid for 12 months.

**5. Character / Police Clearance**
A clean criminal record is required. Police clearance certificates (good conduct certificates) from all countries of residence in the last 5–10 years must be submitted. Certain criminal convictions may make you permanently ineligible for a ${country.name} ${label}, though minor offences are assessed on a case-by-case basis.

**6. Immigration Compliance History**
A history of immigration violations — overstays, unauthorized work, previous refusals — negatively impacts your application. Full disclosure of previous visa history is required. Misrepresentation is a serious offence that can result in a permanent visa ban.`,
    },
    {
      heading: `Language Requirements for ${country.name} ${label}`,
      body: `${country.languageRequirement} is the language requirement for ${country.name}. Requirements differ by visa type:

${visaType === "study"
        ? `For student visas, academic institutions typically require IELTS 6.0–7.5 (or equivalent TOEFL/PTE score) depending on the course level. Undergraduate programs often require IELTS 6.0–6.5; postgraduate programs 6.5–7.0; doctoral programs 7.0+. Your institution will specify the minimum score required for your particular program.`
        : visaType === "work"
          ? `Work visa applicants may need to demonstrate language proficiency depending on the role and employer. Skilled professional roles typically require IELTS 6.0–7.0 or equivalent. Some occupations on critical shortage lists may have reduced language requirements.`
          : visaType === "immigration"
            ? `Immigration and permanent residency applicants must meet the specific language test requirements of the applicable immigration program. Points-based systems typically require IELTS 6.0–8.0 (or equivalent) with minimum scores in each of the four components: listening, reading, writing, and speaking.`
            : `For business and tourist visas, no formal language test is usually required, though demonstrating basic communication ability in ${country.languageRequirement} may be helpful in an interview.`}

Language test results are generally valid for 2 years from the test date. Plan your testing schedule to ensure results are current at the time of your visa application.`,
    },
    {
      heading: `Age and Family Requirements`,
      body: `**Age Requirements:**
${country.name} ${label} applications are accepted across most adult age groups. However:
• Applicants under 18 must submit parental or guardian consent documents
• ${visaType === "immigration" ? "Points-based immigration programs typically award maximum points to applicants aged 18–35, with declining scores for older applicants" : "No upper age limit applies to most visa categories, though older applicants may face stricter scrutiny regarding health requirements and genuine purpose"}
• Young applicants (18–25) may face additional questions about ties to home country

**Dependents and Family Members:**
Immediate family members (spouse and dependent children) can typically apply for dependent visas to accompany the primary ${label} holder to ${country.name}. Requirements for dependents include:
• Proof of relationship (marriage certificate, birth certificates)
• Evidence that the primary visa holder has sufficient income to support all family members
• Separate visa applications and fees for each dependent
• Dependents' own medical and character requirements

Dependent visas do not automatically grant work or study rights in ${country.name} — dependents must apply separately for work or study authorization if required.`,
    },
    {
      heading: `Special Circumstances and Complex Eligibility Cases`,
      body: `Some ${country.name} ${label} applicants fall outside the standard eligibility profile. Understanding how ${country.name} handles these complex cases can help you assess your options and strengthen your application.

**Applicants with Prior Refusals**
A previous ${country.name} visa refusal does not permanently disqualify you — but it creates an additional hurdle. Your new application must directly address every ground cited in the refusal notice with improved, specific evidence. Immigration officers can see your full application history. If the same weaknesses appear in a reapplication, a second refusal is highly likely. Allow at least 3–6 months between a refusal and reapplication, using the time to substantially strengthen your documentation.

**Applicants with Criminal Records**
Minor historical criminal matters — particularly spent convictions or offences from many years ago — may not be disqualifying, depending on the nature of the offence and the elapsed time. Serious criminal convictions (violence, fraud, drug-related offences, terrorism-related matters) are generally disqualifying for most ${country.name} visa categories. Every application must disclose all criminal history honestly. Concealing criminal records is treated as misrepresentation and results in a ban.

**Self-Employed and Business Owner Applicants**
Self-employed applicants often face additional scrutiny because their financial evidence is more complex than that of salaried employees. Provide: business registration documents, audited financial statements (2–3 years), tax returns, and proof of ongoing business activity (contracts, client letters, transaction records). A letter from an accountant or chartered financial advisor can help certify your income.

**Applicants from High-Risk Travel Countries**
${country.name} applies additional scrutiny to applications from certain nationalities based on bilateral relationships, security assessments, and historical overstay or refusal rates. If your nationality is subject to additional scrutiny, your application may take longer and require a more comprehensive documentation package. This does not mean approval is unlikely — it simply means the bar for evidence is higher.

**Young Single Applicants Without Established Ties**
Young applicants (18–30) who are unmarried, renting (not owning) property, and early in their careers face the highest scrutiny for tourist and short-term visas, as the perceived overstay risk is higher. Counter this proactively: provide an employer's no-objection letter, enrollment in a course at home, strong bank history, and previous travel history showing returns from international trips.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsFees(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const fee = country.visaFees[visaType];
  const yr = new Date().getFullYear();

  return [
    {
      heading: `${country.name} ${label} — Complete Fees Guide (${yr})`,
      body: `Understanding all costs associated with a ${country.name} ${label} application is essential before you begin. Applicants frequently underestimate total costs by focusing only on the government fee and neglecting ancillary expenses like medical examinations, document translations, courier services, and visa facilitation fees.

**Government Application Fee:** ${country.currency} ${fee}
This is the mandatory fee paid directly to the ${country.name} immigration authority. It is 100% non-refundable regardless of the outcome of your application, even if you withdraw before a decision is made.`,
    },
    {
      heading: `Itemized Cost Breakdown`,
      body: `**Mandatory Costs:**
| Cost Component | Estimated Amount (${country.currency}) | Notes |
|---|---|---|
| Government Application Fee | ${fee} | Non-refundable |
| Biometric Enrollment | ${Math.round(fee * 0.15)} | Fingerprints & photograph |
| Medical Examination | ${Math.round(fee * 0.5)} | Approved facility |
| VFS / Application Center Fee | ${Math.round(fee * 0.2)} | If applicable |
| **Mandatory Subtotal** | **~${Math.round(fee * 1.85)}** | |

**Optional but Common Costs:**
| Cost Component | Estimated Amount (${country.currency}) | Notes |
|---|---|---|
| Document Translation | ${Math.round(fee * 0.25)} per doc | Certified translators |
| Courier / Postal Service | ${Math.round(fee * 0.1)} | Secure document delivery |
| Police Clearance Certificate | ${Math.round(fee * 0.1)}–${Math.round(fee * 0.3)} | Varies by country |
| Passport Photos | ${Math.round(fee * 0.05)} | Professional photography |
| Immigration Consultant | ${Math.round(fee * 2.5)}–${Math.round(fee * 5)} | Optional but helpful |

**Estimated Totals:**
• Without immigration consultant: ${country.currency} ${Math.round(fee * 2.2)}–${Math.round(fee * 2.8)}
• With immigration consultant: ${country.currency} ${Math.round(fee * 4.7)}–${Math.round(fee * 7.8)}`,
    },
    {
      heading: `Proof of Financial Sufficiency Requirements`,
      body: `Beyond the application fees, ${country.name} requires you to prove that you have enough money to support yourself during your stay. This is separate from the application fees.

**Minimum Recommended Funds (in addition to fees):**
• Short stay (1–3 months): ${country.currency} ${Math.round(fee * 4)}–${Math.round(fee * 8)}
• Medium stay (3–6 months): ${country.currency} ${Math.round(fee * 8)}–${Math.round(fee * 15)}
• Long stay / study (1+ year): ${country.currency} ${Math.round(fee * 15)}–${Math.round(fee * 30)}
• Immigration / PR: ${country.currency} ${Math.round(fee * 30)}+ (settlement funds required)

These are guidelines based on typical ${country.name} requirements. Official minimums vary by visa category and are updated periodically. Always verify current requirements at ${country.officialImmigrationUrl}.

**How to Present Financial Evidence:**
Bank statements must be from the last 3–6 months and show consistent balance maintenance. Recent large deposits are viewed suspiciously. Strengthen your financial profile with:
• Salary slips from employer
• Proof of property ownership or rent
• Fixed deposit certificates
• Investment account statements
• Business income proof (if self-employed)
• Sponsor's financial documents (if being financially supported)`,
    },
    {
      heading: `Payment Methods and Fee Changes`,
      body: `**Accepted Payment Methods:**
Payment methods vary by embassy and VAC location. Common options include:
• Online payment via official portal (Visa/Mastercard credit card)
• Bank draft or cashier's cheque (payable to the specific consulate)
• Cash payment at designated VAC locations
• Bank transfer to official embassy account

**Currency Considerations:**
All ${country.name} visa fees are set in ${country.currency}. When paying from another currency, exchange rates on the day of payment apply. Check the current exchange rate at a reliable source before calculating your total budget. Allow a 5–10% buffer for exchange rate fluctuations between planning and payment.

**Fee Changes:**
${country.name} visa fees are reviewed periodically and can increase without advance notice. Always check the current fee at ${country.officialImmigrationUrl} on the day you submit your application. The fees stated in this guide are current as of ${yr} but should be independently verified.

**Refund Policy:**
The government application fee (${country.currency} ${fee}) is strictly non-refundable. VFS and facilitation fees may be partially refundable if you withdraw before biometric enrollment — check with your specific VAC for their refund policy.`,
    },
    {
      heading: `Smart Budgeting for Your ${country.name} ${label} — Total Cost Planning`,
      body: `The government application fee is just one part of the total cost of obtaining a ${country.name} ${label}. Experienced applicants budget holistically across all phases of the process to avoid financial surprises.

**Phase 1 — Pre-Application Costs**
These costs occur before you submit a single form and are easy to underestimate:
• Language test fee: varies by test and country (IELTS: ~USD 200–260; TOEFL: ~USD 185–260)
• Language test preparation course (optional but recommended): USD 100–500
• Medical examination: ${country.currency} ${Math.round(fee * 0.5)}–${Math.round(fee * 1)} depending on the approved facility
• Police clearance certificate: ${country.currency} ${Math.round(fee * 0.1)}–${Math.round(fee * 0.3)} per country
• Document translation: ${country.currency} ${Math.round(fee * 0.25)} per document (varies by length and translator)
• Notarization: varies by document type

**Phase 2 — Application Costs**
• Government fee: ${country.currency} ${fee} (non-refundable)
• VFS / facilitation center fee: ${country.currency} ${Math.round(fee * 0.2)}–${Math.round(fee * 0.4)}
• Biometric enrollment: often included in VAC fee
• Courier / postal service: ${country.currency} ${Math.round(fee * 0.1)}–${Math.round(fee * 0.2)}

**Phase 3 — Settlement Costs (After Visa Approval)**
• Travel insurance: ${country.currency} ${Math.round(fee * 0.8)}–${Math.round(fee * 2)} for comprehensive coverage
• Flights to ${country.name}: varies significantly by origin
• Initial accommodation (first month): varies by city and type
• Initial living expenses: ${country.currency} ${Math.round(fee * 3)}–${Math.round(fee * 8)} per month in ${country.capital}

**Total Cost Estimate:** Without immigration consultant, a complete ${country.name} ${label} process from document gathering to arrival typically costs ${country.currency} ${Math.round(fee * 4)}–${Math.round(fee * 8)} in total fees and preparation costs, plus travel and living expenses. With an immigration consultant, add ${country.currency} ${Math.round(fee * 2)}–${Math.round(fee * 5)}.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsDocuments(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const docs = DOCS_BASE[visaType];

  return [
    {
      heading: `${country.name} ${label} — Complete Documents Checklist`,
      body: `A complete and perfectly prepared document package is the single most important factor in a successful ${country.name} ${label} application. Incomplete applications cause delays; incorrect documents cause refusals. This guide covers every document you need, the required format for each, and expert tips for preparation.

The ${country.name} immigration authority processes applications from thousands of nationalities with different document standards. Every document must meet specific technical requirements regarding language, certification, format, and recency. Use this guide as your master checklist.`,
    },
    {
      heading: `Primary Document Requirements`,
      body: `${docs.slice(0, 8).map((d, i) => `**${i + 1}. ${d}**\n${getDocTip(d, country)}`).join("\n\n")}`,
    },
    {
      heading: `Supporting Document Requirements`,
      body: `${docs.slice(8).map((d, i) => `**${i + 9}. ${d}**\n${getDocTip(d, country)}`).join("\n\n")}`,
    },
    {
      heading: `Document Preparation Best Practices`,
      body: `**Translation Requirements**
All documents not in English (or the official language of ${country.name}) must be accompanied by certified translations. Certified translators must be recognized by the ${country.name} embassy in your country. Machine translations and unofficial translations are not accepted. Each translation must include the translator's certification statement, signature, date, and contact information.

**Photograph Specifications**
Passport photographs for ${country.name} visa applications typically require:
• Size: 35mm × 45mm (or as specified by the embassy)
• Background: Plain white or off-white
• Taken within the last 6 months
• Full face, looking directly at the camera
• Neutral expression with mouth closed
• No glasses (for most countries)
• Professional photography recommended

**Bank Statement Certification**
Internet-printed bank statements are generally not accepted. Visit your bank branch and request officially stamped and signed bank statements. Some embassies require bank statements on bank letterhead with a banker's certification.

**Document Organization**
Organize your document package in the order specified by the ${country.name} embassy or application checklist. Use clear dividers between sections. Provide an index page listing all documents submitted. Well-organized applications are processed more smoothly and reduce the risk of documents being overlooked.`,
    },
    {
      heading: `Country-Specific Document Considerations for ${country.name}`,
      body: `${country.name} has specific document standards that differ from the general international norms. Understanding these ${country.name}-specific requirements prevents common preparation errors.

**Certified Translations**
All documents not in English or the official ${country.name} language must be accompanied by a certified translation. The translator must be recognized by the ${country.name} embassy or immigration authority. Self-translations and machine translations (Google Translate, DeepL) are not accepted regardless of quality. Each translated document must include the translator's name, qualifications, date of translation, and a certification statement confirming accuracy.

**Apostille and Notarization**
Some countries require an Apostille stamp on official documents (birth certificates, police clearances, degree certificates) when submitting to ${country.name} authorities. An Apostille is an internationally recognized form of authentication under the Hague Convention. Check whether your home country is a signatory to the Hague Convention — if so, Apostille is the standard; if not, documents must be authenticated through your country's foreign affairs ministry and then authenticated by the ${country.name} embassy.

**Digital vs Physical Documents**
${country.name} immigration has increasingly moved toward digital document submission for initial applications, with physical originals required for verification at the embassy or upon entry to ${country.name}. When submitting scanned documents digitally:
• Scan at minimum 300 DPI resolution
• Ensure all text is clearly legible
• Color scans are preferred over black-and-white for documents containing stamps or signatures
• File size limits apply — check the portal's requirements before submitting

**Document Validity Periods**
Several documents have specific validity windows that must be respected:
• Passport photographs: Taken within the last 6 months
• Bank statements: Covering the last 3–6 months (current at time of submission)
• Police clearance certificates: Typically valid for 3–6 months from issue date
• Medical examination results: Typically valid for 12 months
• Language test results: Valid for 2 years from test date

Submitting any document beyond its validity period will cause your application to be returned for updated documentation — adding weeks to your timeline.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function getDocTip(doc: string, country: CountryExtended): string {
  const tips: Record<string, string> = {
    "passport": `Your passport must have at least 6 months' validity beyond your intended return date from ${country.name}. Renew it before applying if it expires soon. Submit all your passports (current and previous) as they contain your travel history.`,
    "application form": `Complete the form in block capitals in English. All dates must be in the DD/MM/YYYY format (or as specified). Never leave fields blank — write "N/A" if a field doesn't apply to you.`,
    "photograph": `Use a professional photographer familiar with ${country.name} embassy specifications. Poor-quality photos are a common reason for application rejection at document submission stage.`,
    "bank statement": `Obtain officially certified statements directly from your bank — not internet printouts. Cover the last 6 months minimum. Ensure the statements show your account holder name, account number, and bank's official stamp.`,
    "insurance": `Purchase comprehensive travel/health insurance with at least ${country.currency} ${Math.round(country.visaFees.visit * 15)} emergency coverage. Keep the insurance policy document and emergency contact numbers accessible during your stay.`,
  };
  const key = Object.keys(tips).find((k) => doc.toLowerCase().includes(k)) ?? "";
  return tips[key] ?? `Ensure this document is current, authentic, and meets ${country.name} immigration standards. Original documents or certified true copies are required.`;
}

function sectionsProcessingTime(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const time = country.processingDays[visaType];

  return [
    {
      heading: `${country.name} ${label} Processing Time — Complete Timeline Guide`,
      body: `The standard processing time for a ${country.name} ${label} is **${time}** from the date of complete application submission. This is the government's official processing target — actual times may vary significantly based on application volume, your nationality, document completeness, and whether an interview is required.

This guide explains every stage of the processing timeline, what happens at each step, and how to plan your application to ensure your visa is ready well before your intended travel or start date in ${country.name}.`,
    },
    {
      heading: `Processing Stage Breakdown`,
      body: `**Stage 1: Document Preparation (4–8 weeks)**
This is the longest and most variable stage. Time-consuming items include: police clearance certificates (2–8 weeks depending on your country), medical examinations (1–2 weeks for appointment and results), language test booking and results (3–5 weeks), and bank certification of statements (1–3 days).

**Stage 2: Application Submission (1–7 days)**
After gathering all documents, completing the application form, and paying the fee, you submit at the embassy or VAC. Biometric appointment availability varies — book as early as possible. The submission itself takes 15–45 minutes.

**Stage 3: Initial Document Check (1–5 business days)**
The embassy or VAC reviews your documents for completeness and correct format. If documents are missing or do not meet requirements, your application may be returned or put on hold with a request for additional information.

**Stage 4: Government Processing (${time})**
Your application is assessed by immigration officers in ${country.name}. This involves: eligibility assessment, background checks, verification of documents (including contacting institutions or employers if needed), and security clearance. This stage is entirely out of your control — do not contact the embassy to request updates as it does not speed up processing.

**Stage 5: Decision and Notification (1–5 business days)**
A decision is made and recorded in the tracking system. You receive a notification via email, SMS, or through the VAC tracking portal.

**Stage 6: Visa Issuance (3–7 business days)**
If approved, your visa is printed and stamped in your passport (or issued as an e-visa). If refused, your passport is returned with a refusal notice.`,
    },
    {
      heading: `Factors That Speed Up or Slow Down Processing`,
      body: `**Factors That Speed Up Processing:**
• Complete, correct documentation submitted first time
• Application during low-volume periods (February–April, October–November)
• Priority/expedited processing (additional fee of 50–100%)
• Simple visa categories (tourist) vs complex (immigration)
• Digital / online applications where available for ${country.name}
• Nationality not subject to additional security screening

**Factors That Slow Down Processing:**
• Missing documents (triggers additional correspondence)
• High-volume periods (June–August, December–January)
• Interview required (adds 2–6 weeks for scheduling and conducting)
• Additional security background checks (based on nationality)
• Public holidays in ${country.name} (${country.capital} calendar)
• Request for additional information from applicant
• Verification with employer, institution, or business in ${country.name}

**Expedited Processing:**
Some ${country.name} embassies offer priority processing for documented urgent needs. This typically reduces processing time by 30–50% for an additional fee. Genuine urgency (medical emergency, family bereavement, business-critical travel) is required — "I forgot to apply in time" is not accepted as grounds for priority processing.`,
    },
    {
      heading: `Application Timeline Planning`,
      body: `**Recommended Total Lead Time:** 5–7 months before your intended start date in ${country.name}.

**Planning Calendar:**
• Month 6 before: Decide on visa category, begin document gathering
• Month 5: Book language test, schedule medical exam, request police clearances
• Month 4: Receive test results, bank statements, compile full document package
• Month 3: Submit application, attend biometric appointment
• Month 2–1: Application under government review (${time})
• Weeks 2–0: Receive decision, collect passport, arrange travel

**Important:** Do not book non-refundable flights, accommodation, or course enrolment fees until your visa is confirmed. Many applicants lose significant money by pre-booking before their visa is approved.

**If Your Application is Taking Longer Than Expected:**
If your application significantly exceeds the published processing time (${time}), contact the embassy or VAC with your reference number. Long delays may indicate a request for additional information that wasn't communicated, or that your application is under additional review. A licensed immigration advisor can also assist with enquiring about delayed applications.`,
    },
    {
      heading: `Priority Processing and Fast-Track Options for ${country.name}`,
      body: `In genuine time-sensitive situations, some ${country.name} embassies offer priority or expedited processing services. Understanding these options and when they apply can help you manage urgent visa needs.

**Standard Priority Processing**
Some ${country.name} embassies and VACs offer a priority processing service that reduces the processing time by approximately 30–50% for an additional fee. The additional fee is typically 50–100% of the standard government fee. For example, if the standard government fee is ${country.currency} ${country.visaFees[visaType as VisaTypeExtended]}, the priority service adds approximately ${country.currency} ${Math.round(country.visaFees[visaType as VisaTypeExtended] * 0.75)}.

Priority processing does not guarantee approval — it only speeds up the assessment timeline. If your application has documentation issues, priority processing will not overcome them.

**Urgent / Emergency Processing**
For documented urgent situations (medical emergency in ${country.name}, immediate family bereavement, last-minute business-critical travel), some embassies provide emergency appointment slots and same-day or next-day processing for extraordinary circumstances. You will typically need to provide supporting documentation for the urgency (hospital letter, death certificate, signed employer statement of business-critical necessity).

**Visa on Arrival and e-Visa Options**
For certain nationalities, ${country.name} may offer visa-on-arrival or e-visa options that bypass the standard embassy application process. These are category-specific and nationality-specific. Check ${country.officialImmigrationUrl} to confirm whether your nationality qualifies for simplified entry options.

**When Priority Processing Is Not Available**
Not all ${country.name} embassies offer priority services, and the service may be suspended during peak application periods. Contact your nearest embassy or VAC directly to confirm availability and current premium fees.

**Planning Around Priority Processing**
Priority processing is not a substitute for planning ahead. It is designed for genuine urgent situations, not as a workaround for late application. Most experienced applicants apply through the standard process with sufficient lead time and never need priority services.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsRejection(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const reasons = REJECTION_REASONS[visaType];

  return [
    {
      heading: `Why ${country.name} ${label} Applications Are Refused — Complete Analysis`,
      body: `Understanding why ${country.name} refuses ${label} applications gives you a significant advantage. Most visa refusals in ${country.name} are not arbitrary — they follow clear patterns that are predictable and preventable with proper preparation.

This guide covers all major refusal grounds for the ${country.name} ${label}, what officers are looking for, and specific strategies to avoid each rejection reason. Read every section carefully even if you think it doesn't apply to you — many applicants are refused for reasons they didn't anticipate.`,
    },
    {
      heading: `Top Rejection Reasons and How to Avoid Them`,
      body: reasons.map((r, i) => `**${i + 1}. ${r}**

This is one of the most frequently cited reasons in ${country.name} ${label} refusal notices. Immigration officers are specifically trained to identify this issue.

*How to avoid it:* Directly address this point in your application with specific, credible evidence. Do not assume officers will give you the benefit of the doubt — the burden of proof is on the applicant to demonstrate eligibility, not on the immigration authority to prove ineligibility.`).join("\n\n"),
    },
    {
      heading: `What a Refusal Notice Means and Your Rights`,
      body: `When a ${country.name} ${label} application is refused, you will receive a refusal notice (Refusal of Entry Clearance or equivalent). This document:

**Contains:**
• The specific legal grounds for refusal
• The sections of immigration law that apply
• A statement of your rights (appeal, review, or reapplication)
• Deadlines for any appeal or review you wish to pursue

**Your Options After Refusal:**
1. **Administrative Review / Appeal:** Available within a specified period (typically 28–90 days). Costs a filing fee. Success rate varies depending on the strength of your grounds for appeal. Only available for certain visa categories.

2. **Judicial Review:** Available in exceptional circumstances where the immigration authority made a clear legal error. Expensive and time-consuming — only appropriate for complex cases with strong legal grounds.

3. **Reapplication:** Submit a fresh application addressing all refusal reasons with improved documentation. No mandatory waiting period for most categories, but allowing 3–6 months to strengthen your evidence is advisable.

4. **Alternative Visa Category:** If your circumstances have changed (you got a job offer, enrolled in a course, etc.), a different visa category may be more appropriate.

**If Your Refusal Was Based on False Information:**
If you believe the refusal is based on an error of fact (the officer was misinformed about something), you can provide corrective evidence in a reapplication or appeal. Always consult an immigration lawyer before appealing a refusal.`,
    },
    {
      heading: `Red Flags That Trigger ${country.name} Immigration Scrutiny`,
      body: `Beyond the formal rejection reasons, certain application characteristics trigger immediate additional scrutiny from ${country.name} immigration officers:

**Document Inconsistencies**
Any inconsistency — even minor — between your application form, purpose statement, and supporting documents triggers deeper review. Name spelling variations, different date formats, and inconsistent travel history are common triggers.

**Unusual Financial Activity**
Sudden large deposits in your bank account in the weeks or months before application are red flags. Officers know this tactic and view it as artificial inflation of assets. Six months of consistently maintained balances are far more credible.

**Vague or Generic Purpose Statements**
"I want to visit ${country.name} to see the sights" or "My company has asked me to travel" without specifics are treated with suspicion. Specific itineraries, confirmed bookings, and named contacts in ${country.name} are much more credible.

**First-Time International Travel**
First-time international travellers applying for complex visas (study, work, immigration) without strong ties to home country face higher scrutiny. Building a travel history — even with simpler visas to neighbouring countries — strengthens your application profile.

**Previous Applications to Multiple Countries**
Having multiple recent visa refusals across different countries is a significant red flag. It suggests a systemic eligibility issue that needs to be resolved before applying for a ${country.name} ${label}.`,
    },
    {
      heading: `How to Rebuild Your Profile After a ${country.name} ${label} Refusal`,
      body: `A refusal is not the end of the road — but it does require a structured, patient approach to rebuilding your eligibility profile before reapplying. Here is a practical, timeline-based recovery plan.

**Month 1 — Understand the Refusal**
Read your refusal notice carefully and identify every specific ground cited. If the refusal is vague or unclear, contact the embassy for clarification or consult an immigration advisor to help you interpret the legal language. Understanding the exact reason is essential before taking any corrective action.

**Month 2–3 — Address the Core Issues**
Depending on the refusal grounds:
• Financial issues: Build your bank balance consistently over 3–6 months; diversify evidence with salary slips, fixed deposits, and property documents
• Purpose issues: Obtain more specific and credible evidence — a detailed letter from the institution or employer, signed business agreements, specific itineraries with confirmation numbers
• Document issues: Re-obtain any insufficient documents with improved quality, certification, or translation
• Language issues: Resit the required language test and achieve a higher score
• Ties to home country: Strengthen evidence with additional documentation (property ownership, enrollment at home institution, employer's letter)

**Month 4 — Prepare the New Application**
Compile a significantly improved document package. Include a cover letter that explicitly addresses each refusal ground — explain what has changed since the previous application and provide the evidence to support it. Never simply resubmit the same application.

**Month 5–6 — Reapply with a Professional Review**
Have a licensed immigration advisor review your complete new application before submission. They can identify remaining weaknesses that might not be obvious to you. The second application is critically important — a second refusal makes future approvals significantly more difficult.

**What Not to Do:**
• Do not reapply within weeks of a refusal without improving your documentation
• Do not exaggerate or falsify evidence in the hope of overcoming a refusal
• Do not change your story significantly between applications without a genuine change in circumstances — inconsistencies will be flagged
• Do not use a different identity or apply through a third-country embassy without disclosing the previous refusal`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsInterview(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];

  return [
    {
      heading: `${country.name} ${label} Interview Preparation Guide`,
      body: `A visa interview at the ${country.name} embassy or consulate is an opportunity to demonstrate the genuineness of your application in person. While not every ${label} applicant is called for an interview, those who are must be thoroughly prepared — a poor interview performance is a common cause of refusal even when the rest of the application is strong.

This guide covers what to expect at a ${country.name} ${label} interview, the most common questions, how to answer them confidently, and practical preparation strategies.`,
    },
    {
      heading: `Common ${country.name} ${label} Interview Questions`,
      body: `**Purpose of Visit / Genuineness Questions:**
• "Why do you want to ${VISA_PURPOSE[visaType]} in ${country.name} specifically?"
• "Why ${country.name} over other countries in ${country.region}?"
• "What do you know about ${country.name} that makes it suitable for your purpose?"
• "How did you choose your ${visaType === "study" ? "institution" : visaType === "work" ? "employer" : "destination"}?"

**Financial Questions:**
• "How will you fund your stay in ${country.name}?"
• "Who is sponsoring your trip?"
• "What is your monthly income / family income?"
• "Do you have any outstanding loans or financial obligations at home?"

**Ties to Home Country:**
• "What is your current job / what do you do at home?"
• "Do you have a family / who depends on you at home?"
• "Do you own property in your home country?"
• "When do you plan to return home and why?"

**Travel History:**
• "Have you travelled internationally before?"
• "Have you ever been refused a visa to any country?"
• "Have you visited ${country.name} before?"

**Plans in ${country.name}:**
• "Where will you stay in ${country.name}?"
• "Do you know anyone in ${country.name}?"
• "What do you plan to do after your visa expires?"`,
    },
    {
      heading: `How to Answer Interview Questions Effectively`,
      body: `**Be Specific**
Vague answers raise suspicion. Instead of "I want to study in ${country.name} because it has good universities," say "I have been accepted to [specific institution] for [specific course] because it offers [specific specialization] that is not available in my home country, and this qualification is recognized by [specific employer] in my field."

**Be Consistent**
Your interview answers must match your application form and supporting documents exactly. If you said your bank balance is ${country.currency} X in your application, know that figure and how you accumulated it. Inconsistencies — even innocent ones — are red flags.

**Demonstrate Return Intent**
The officer's primary concern is whether you will overstay your visa. Proactively demonstrate why you will return: mention your job, family, property, ongoing commitments, or studies at home. Be concrete — "I have a signed employment contract that resumes on [date]" is stronger than "I have obligations at home."

**Know Your Documents**
You may be asked to explain any document in your file. Know what is in every document you submitted. Be able to explain your bank statements, the acceptance letter, your employer's business, and your travel history.

**Project Confidence and Calm**
Nervousness is normal but try to maintain calm, professional composure. Speak clearly and at a moderate pace. If you don't understand a question, politely ask for clarification. Do not volunteer information beyond what is asked.`,
    },
    {
      heading: `Interview Day Logistics and Preparation`,
      body: `**Before the Interview:**
• Review your entire application one final time the day before
• Prepare a summary card (for personal reference only) with key facts: bank balance, income, accommodation address in ${country.name}, course/employer name, start date
• Organize all original documents in the same order as your application
• Plan your route to the embassy/consulate — aim to arrive 20–30 minutes early
• Get a full night's sleep

**What to Bring:**
• All original documents submitted with your application
• Appointment confirmation letter
• Passport (and any previous passports)
• Any additional documents prepared since submission

**At the Interview:**
• Dress professionally — formal business attire is appropriate
• Speak only when spoken to; do not elaborate unnecessarily
• Be direct and honest — any misrepresentation can result in an immediate refusal and ban
• Do not use mobile phone during the interview
• Treat consular staff respectfully

**After the Interview:**
• You will typically not receive a decision on the same day
• Continue tracking your application through the official system
• If additional documents are requested following the interview, submit them promptly with a clear cover letter`,
    },
    {
      heading: `How ${country.name} Immigration Officers Assess Your Application`,
      body: `Understanding how ${country.name} immigration officers are trained to assess ${VISA_TYPE_LABELS[visaType]} applications gives you a significant strategic advantage in preparing your own application.

**The Core Assessment Framework**
Every ${country.name} ${VISA_TYPE_LABELS[visaType]} application is assessed against three primary questions:
1. Does the applicant genuinely intend to use the visa for the stated purpose?
2. Does the applicant have the financial means to support themselves during their stay without working illegally?
3. Is the applicant likely to depart ${country.name} at the end of their authorized stay?

All supporting evidence you provide is assessed through these three lenses. A strong application provides clear, specific, credible answers to all three questions simultaneously.

**What Officers Look For in Financial Evidence**
Officers are not just checking that your bank balance meets a number — they are assessing whether the funds are genuine, consistently maintained, and sufficient for your stated purpose. Red flags include: a sudden large deposit immediately before applying, a balance that exactly meets the threshold with no buffer, transactions that don't match your stated income, and accounts in your name that appear to be holding other people's money.

**What Officers Look For in Purpose Evidence**
Purpose evidence must be specific, verifiable, and logically consistent with your background. An IT professional applying for a study visa to do a basic English course raises questions. A marketing manager applying to attend a documented industry conference with a named host company is credible. The more specific and verifiable your stated purpose, the stronger the assessment.

**The Consistency Test**
Experienced immigration officers read entire applications holistically, cross-referencing every document against every other. The most common inconsistency that triggers refusal: statements in the cover letter or purpose statement that don't match the dates, amounts, or details in the supporting documents. A name spelled differently across two documents can also cause complications.

**Building a Credible Story**
Think of your application as a coherent narrative: Who are you? Why do you want to visit ${country.name}? How will you fund your stay? Why will you return home? Every document you submit is a piece of that story. When the story is specific, logical, and well-evidenced, approvals follow. When it is vague, inconsistent, or unsupported, refusals follow.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsSuccessTips(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const diff = country.difficulty[visaType];

  return [
    {
      heading: `${country.name} ${label} Approval Strategies — Expert Success Guide`,
      body: `Achieving approval for a ${country.name} ${label} (rated ${diff} difficulty) requires more than just gathering the right documents. It requires strategic presentation of your profile, understanding what immigration officers are looking for, and ensuring every element of your application tells a consistent, credible story.

This guide distills the most effective strategies used by successful applicants to maximize their approval chances for the ${country.name} ${label}.`,
    },
    {
      heading: `Strategy 1 — Build the Strongest Possible Financial Profile`,
      body: `Financial evidence is weighted heavily in ${country.name} ${label} assessments. Officers are not just looking at the total balance — they are assessing the stability, consistency, and source of your funds.

**Timing:** Start building your financial profile 6–12 months before applying. Maintain consistent balances — do not make sudden large deposits close to the application date.

**Diversify Your Evidence:**
• Primary bank account statements (6 months)
• Fixed deposit certificates (shows long-term savings)
• Property ownership documents (land certificates, mortgage statements)
• Salary slips from employer (3–6 months)
• Business income statements (if self-employed)
• Investment account statements (mutual funds, stocks)
• Sponsor's financial documents (if being sponsored)

**Common Mistake:** Transferring money from a family member's account just before applying. This is immediately recognizable and reduces credibility. If you are being sponsored, get a formal sponsor declaration letter signed by the sponsor with their complete financial documentation.`,
    },
    {
      heading: `Strategy 2 — Create a Compelling Purpose Narrative`,
      body: `Your visa application tells a story. The immigration officer must be convinced that your purpose for visiting ${country.name} is genuine, specific, and well-planned. A compelling narrative includes:

**Specificity:** Name the specific institution, employer, business partner, or tourist attraction. "I am visiting the Grand Bazaar in Istanbul" is more credible than "I want to see the sights."

**Logical Coherence:** Your purpose must make sense given your background, qualifications, and financial profile. A junior employee applying for a business visa to a major international conference is more credible than an unexplained sudden trip.

**Future Plans:** Clearly state what you will do after your visa expires and why you will return home. This directly addresses the officer's primary concern.

**Avoid These Mistakes:**
• Generic purpose statements copied from templates
• Purposes inconsistent with your professional or educational background
• Vague references to "business opportunities" without named contacts or companies
• Overly elaborate stories that don't match the supporting documents`,
    },
    {
      heading: `Strategy 3 — Demonstrate Irrefutable Home Country Ties`,
      body: `The strongest single factor in any short-term ${country.name} visa application is demonstrating that you have compelling reasons to return home. ${country.name} immigration officers are specifically trained to assess overstay risk.

**Strongest Ties Evidence:**
• Employment contract with confirmed return date (and employer's letter confirming leave of absence)
• Property ownership in your home country (land certificate, property deed)
• Dependent family members at home (spouse, children, elderly parents who depend on you)
• Active business in your home country (business registration, tax documents)
• Enrolled in a course at home institution with confirmed return to studies
• Outstanding financial commitments at home (mortgage, business loans)

**Supplementary Evidence:**
• Utility bills in your name at home address
• Vehicle registration in your home country
• Social media or community ties (civic organization membership)
• Religious or cultural commitments

Present at least 3–4 strong, documented ties to your home country. The more specific and documented, the stronger the case for your return.`,
    },
    {
      heading: `Strategy 4 — Application Quality and Presentation`,
      body: `The physical and organizational quality of your application package signals attention to detail and professionalism — qualities immigration officers associate with credible, serious applicants.

**Organization:**
• Compile documents in the exact order specified in the official checklist
• Include a cover letter and table of contents index
• Use clear dividers between document sections
• Number all pages consistently

**Document Quality:**
• Provide certified copies, not photocopies of photocopies
• Ensure all documents are clearly legible
• Have photographs taken professionally — rejections for poor-quality photos are common
• Use certified translators who provide a statement of certification with each translation

**Cover Letter:**
A well-written cover letter summarizing your application, purpose, financial evidence, and home-country ties is not always required but consistently improves outcomes. Keep it concise (1–2 pages), specific, and professional. Reference the specific documents in your package that support each claim.

**Consistency Check:**
Before submission, do a final consistency check: ensure your name is spelled identically across all documents, all dates use the same format, passport number matches everywhere it appears, and your address details are consistent throughout.`,
    },
    {
      heading: `Strategy 5 — Building an Immigration Track Record`,
      body: `For first-time international travellers or applicants without a strong visa history, building a credible immigration track record is one of the most effective long-term strategies for successful visa outcomes — not just for ${country.name}, but for all future international travel.

**Why Track Record Matters**
Immigration officers weight an applicant's visa history heavily. A person who has applied for and received multiple international visas — and returned home on time every time — is statistically much lower risk than a first-time international traveller applying for a complex, long-term visa to ${country.name}. This history directly signals: "This person follows visa rules."

**Building Your Track Record — Practical Steps**
If you don't yet have significant international travel history, consider building it strategically over 12–24 months before applying for a complex ${country.name} ${VISA_TYPE_LABELS[visaType]}:

1. Apply for simpler tourist visas to neighboring countries or countries with straightforward processes
2. Travel for short periods (1–2 weeks) and return home on time, every time
3. Keep all your travel documents and entry/exit stamps
4. Build a track record of visa applications across multiple countries — all approved, all complied with

**The Progression**
A rational sequence for building a track record: regional tourist visa → longer tourist visa to a slightly more selective country → short-term business visa → study or work visa to a more competitive destination like ${country.name}.

**Travel History in Your ${country.name} Application**
When you apply for a ${country.name} ${VISA_TYPE_LABELS[visaType]}, your previous international travel history is one of the first things officers review. Stamps from multiple countries, returned on time, with no visa violations, is one of the strongest indicators of low overstay risk — exactly what ${country.name} immigration officers want to see.

If you have very little travel history, proactively address this in your cover letter and compensate with especially strong financial evidence, home-country ties documentation, and a detailed, specific purpose statement.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsChecklist(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const fee = country.visaFees[visaType];
  const docs = DOCS_BASE[visaType];

  return [
    {
      heading: `${country.name} ${label} — Complete Application Checklist`,
      body: `Use this comprehensive checklist to ensure your ${country.name} ${label} application is complete before submission. Missing even one required item can delay or prevent processing. Print this checklist and tick each item as you complete it.`,
    },
    {
      heading: `Pre-Application Checklist`,
      body: `**Before You Begin:**
☐ Confirmed you need a ${label} for ${country.name} (check visa-free agreements for your nationality)
☐ Verified current requirements at ${country.officialImmigrationUrl}
☐ Checked the ${country.name} embassy website for your country (requirements may differ by embassy)
☐ Confirmed application timeline (processing: ${country.processingDays[visaType]})
☐ Set budget for all costs (government fee: ${country.currency} ${fee}, plus ancillary costs)
☐ Identified nearest embassy, consulate, or VAC for submission

**Document Gathering:**
${docs.map((d) => `☐ ${d}`).join("\n")}

**Financial Preparation:**
☐ Bank statements (last 6 months, bank-certified)
☐ Salary slips / income proof (last 3 months)
☐ Financial sponsorship letter (if being sponsored)
☐ Property / asset documents (if available)`,
    },
    {
      heading: `Application Submission Checklist`,
      body: `**Application Form:**
☐ Application form completed in full (no blank fields)
☐ All information matches passport and supporting documents exactly
☐ Form signed and dated
☐ Application form copy retained for your records

**Payment:**
☐ Government fee of ${country.currency} ${fee} paid
☐ Payment receipt saved and included in document package
☐ VFS / facilitation fee paid (if applicable)

**Photographs:**
☐ Photographs meet ${country.name} specifications (size, background, recency)
☐ Additional photos included as required

**Translations:**
☐ All non-English documents have certified translations
☐ Each translation includes translator's certification statement

**Organization:**
☐ Documents organized in correct order (per embassy checklist)
☐ Cover letter and document index included
☐ Application package reviewed for consistency (name, dates, passport number)
☐ Copies retained of entire application package before submission`,
    },
    {
      heading: `Post-Submission Checklist`,
      body: `**After Submitting Your Application:**
☐ Biometric appointment attended (if required)
☐ Reference number saved for application tracking
☐ Application tracking set up at ${country.officialImmigrationUrl}
☐ Email notifications enabled for application updates

**During Processing:**
☐ Do NOT book non-refundable travel until visa is confirmed
☐ Monitor application status regularly
☐ Respond immediately to any requests for additional information
☐ Keep original documents accessible in case of additional requests

**After Approval:**
☐ Passport collected with visa stamp / e-visa document received
☐ Visa stamp details verified (name, passport number, validity dates, conditions)
☐ Travel insurance purchased (minimum ${country.currency} ${Math.round(fee * 15)} medical coverage)
☐ All original supporting documents organized to carry on travel
☐ Emergency contact numbers (${country.name} embassy, immigration authority) saved
☐ Compliance conditions of your visa reviewed and understood`,
    },
    {
      heading: `${country.name} ${VISA_TYPE_LABELS[visaType]} Success Stories — What Works`,
      body: `Based on the experiences of successful ${country.name} ${VISA_TYPE_LABELS[visaType]} applicants, certain preparation patterns consistently lead to strong approvals. Here are the most effective approaches, distilled into actionable principles.

**Applicants Who Are Approved Share These Traits:**

**1. They Applied Early**
Successful applicants consistently submitted their applications 3–5 months before their intended start date. This buffer accommodates unexpected delays, requests for additional information, and the time needed to book appointments during busy periods.

**2. They Over-prepared on Financial Documents**
Rather than showing the minimum required bank balance, approved applicants presented comprehensive, multi-source financial evidence. Bank statements, salary slips, fixed deposits, property documents, and investment accounts working together created an unambiguous financial picture.

**3. Their Purpose Was Specific and Verifiable**
Every successful application had a clearly defined, specific purpose that could be independently verified. Named institutions, named employers, named contacts, confirmed bookings, and specific dates all contributed to a credible, specific purpose narrative that an officer could check.

**4. Their Applications Were Internally Consistent**
Approved applications are characterized by perfect consistency: identical name spelling, matching dates, coherent travel history, and purpose statements that align exactly with the supporting evidence. Nothing contradicts anything else.

**5. They Had Strong Home-Country Ties**
Every successful applicant for a temporary visa provided multiple pieces of concrete evidence demonstrating why they would return home: employment, family, property, ongoing studies, or active business commitments.

**6. They Read the Official Requirements — Not Just Third-Party Guides**
The most thorough applicants always checked the ${country.name} official immigration portal (${country.officialImmigrationUrl}) for the most current requirements specific to their nationality. Third-party guides (including this one) provide general guidance — official requirements are the definitive source.

**7. They Treated the Application Like a Professional Document**
Well-organized, clearly indexed, professionally presented applications consistently perform better than disorganized submissions. Presentation signals attention to detail — a quality immigration officers associate with credible, genuine applicants.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsExtension(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const time = country.processingDays[visaType];

  return [
    {
      heading: `${country.name} ${label} Extension and Renewal Guide`,
      body: `If your circumstances require you to remain in ${country.name} beyond your current visa's validity period, you may be eligible to apply for an extension or renewal. This guide covers the extension process for the ${country.name} ${label}, eligibility requirements, documentation, and critical deadlines.

**Important:** Never overstay your ${country.name} ${label} without a valid extension application in progress. Overstaying is a serious immigration violation that can result in: forced removal from ${country.name}, a ban of 1–10 years (or permanent ban for serious overstays), a negative record that affects all future visa applications globally, and potential criminal charges in some cases.`,
    },
    {
      heading: `Eligibility for ${country.name} ${label} Extension`,
      body: `Not all ${label} holders in ${country.name} are eligible for an extension. General eligibility criteria include:

**You may be eligible if:**
• Your original purpose of stay continues (still enrolled in studies, still employed, etc.)
• You have complied with all conditions of your current visa
• You have no criminal record or immigration violations in ${country.name}
• You have sufficient funds to continue your stay
• You apply before your current visa expires

**You may not be eligible if:**
• Your original purpose has ended or changed significantly
• You have violated any conditions of your current visa
• ${visaType === "visit" ? "Tourist visas in most countries have strict maximum stay limits that cannot be extended beyond a certain total period" : "Your employer, institution, or sponsoring organization no longer supports your continued stay"}
• You have a history of immigration violations in ${country.name} or other countries

Extension eligibility rules are complex and change regularly. Always check current rules at ${country.officialImmigrationUrl} before assuming you can extend your stay.`,
    },
    {
      heading: `How to Apply for ${country.name} ${label} Extension`,
      body: `**Application Timing:**
Submit your extension application at least **4–8 weeks before your current visa expires**. Do not wait until the last few days — processing takes time (typically similar to original processing: ${time}), and if your extension application is pending when your original visa expires, you may be in a "bridging" status that has specific conditions and restrictions.

**Where to Apply:**
Extensions are typically applied for through the ${country.name} immigration authority at ${country.officialImmigrationUrl}, not through the embassy in your home country (since you are already in ${country.name}). In some cases, applications can be submitted online through the immigration portal; in others, you must attend an immigration office in ${country.name}.

**Documents Required for Extension:**
• Current ${country.name} ${label} and passport
• Completed extension application form
• Evidence that your original purpose continues (enrollment letter, employment contract renewal, etc.)
• Updated financial evidence (bank statements for last 3 months)
• Updated health insurance coverage
• Explanation letter for why an extension is needed
• Any documents showing change of circumstances (if applicable)

**Extension Fees:**
Extension applications are subject to a separate government fee, typically similar to or higher than the original application fee (${country.currency} ${country.visaFees[visaType]}). Check current extension fees at ${country.officialImmigrationUrl}.`,
    },
    {
      heading: `Alternatives to Extension — Change of Status`,
      body: `If you do not qualify for an extension of your current ${label}, or if your purpose in ${country.name} has changed, you may be eligible to apply for a Change of Status — switching from one visa type to another without leaving ${country.name}.

**Common Change of Status Scenarios:**
• Student to Graduate Work Visa (post-study work permit)
• Work Visa to Permanent Residency / Immigration
• Business Visa to Work Visa (if you receive a job offer during your business trip)
• Tourist to Student Visa (less common; may require leaving ${country.name} first)

**Important Note on Changing Status:**
Not all status changes are permitted from within ${country.name}. Some visa categories require you to exit ${country.name} and apply fresh from your home country or a third country. Always verify whether an in-country change of status is permitted for your specific situation before proceeding.

If an in-country change is not permitted and you need to leave ${country.name} to reapply, ensure you have a valid visa or electronic travel authorization for your transit countries and your home country before exiting.`,
    },
    {
      heading: `Understanding ${country.name} Visa Conditions and Compliance`,
      body: `Every ${country.name} ${VISA_TYPE_LABELS[visaType]} comes with legally binding conditions. Violating these conditions — even unknowingly — can result in visa cancellation, detention, removal from ${country.name}, and bans on future visa applications.

**Standard Conditions on All ${country.name} Visas:**
• You must depart ${country.name} before your visa expires (unless a valid extension has been granted)
• You must only engage in activities authorized by your specific visa category
• You must notify the ${country.name} immigration authority of any change of address within a specified period (typically 7–14 days in most countries)
• You must carry your travel document and be able to produce it on request from immigration or law enforcement officers
• You must comply with all laws and regulations of ${country.name} for the duration of your stay

**Common Conditions Specific to This Visa Category:**
${VISA_TYPE_LABELS[visaType] === "Study Visa"
  ? `• Maintain full-time enrollment at the specified educational institution
• Notify the immigration authority if you change institutions
• Comply with any work hour restrictions attached to your visa
• Maintain satisfactory academic progress`
  : VISA_TYPE_LABELS[visaType] === "Work Visa"
  ? `• Work only for the sponsoring employer named on your visa
• Notify immigration if your employment ends or your role changes materially
• Maintain the salary level specified in the visa conditions
• Not take secondary employment without authorization`
  : `• Remain in ${country.name} only for the period specified
• Do not engage in paid employment
• Carry proof of accommodation and return travel`}

**What Happens If You Violate Visa Conditions:**
Visa condition violations are treated seriously by ${country.name} immigration authorities. Minor violations may result in a warning or requirement to leave. Serious violations — including unauthorized work, overstaying, or providing false information — typically result in immediate visa cancellation, forced departure, and bans of 1 year to permanently depending on the severity.

If your circumstances change in a way that affects your visa conditions (you are offered a job while on a student visa, your employer changes while on a work visa, etc.), contact ${country.officialImmigrationUrl} immediately for guidance. Acting on changed circumstances without authorization, even with good intentions, remains a violation.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsFAQ(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const faqs = buildFAQs(country, visaType);

  return [
    {
      heading: `${country.name} ${label} — Frequently Asked Questions (${new Date().getFullYear()})`,
      body: `This comprehensive FAQ covers the most common questions about the ${country.name} ${label} application process. Questions are organized from the most frequently asked to more specific scenarios. If your question is not answered here, consult the official ${country.name} immigration authority at ${country.officialImmigrationUrl}.`,
    },
    {
      heading: `Fees, Costs, and Financial Questions`,
      body: `${faqs.slice(0, 3).map((f) => `**Q: ${f.question}**\n\n${f.answer}`).join("\n\n---\n\n")}`,
    },
    {
      heading: `Eligibility and Requirements Questions`,
      body: `${faqs.slice(3, 7).map((f) => `**Q: ${f.question}**\n\n${f.answer}`).join("\n\n---\n\n")}`,
    },
    {
      heading: `Application Process Questions`,
      body: `${faqs.slice(7, 11).map((f) => `**Q: ${f.question}**\n\n${f.answer}`).join("\n\n---\n\n")}`,
    },
    {
      heading: `Validity, Extensions, and Post-Approval Questions`,
      body: `${faqs.slice(11).map((f) => `**Q: ${f.question}**\n\n${f.answer}`).join("\n\n---\n\n")}`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsFinancial(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const fee = country.visaFees[visaType];

  return [
    {
      heading: `${country.name} ${label} Financial Requirements — Proof of Funds Guide`,
      body: `Financial requirements are one of the most scrutinized aspects of any ${country.name} ${label} application. Immigration officers carefully assess whether applicants have sufficient, genuine funds to support their stay — and whether those funds were accumulated honestly over time.

This guide explains exactly what financial evidence ${country.name} requires for the ${label}, how to present it effectively, and common financial mistakes that lead to visa refusal.`,
    },
    {
      heading: `Minimum Financial Requirements`,
      body: `**Government Fee (Non-Refundable):** ${country.currency} ${fee}
This must be paid as part of your application regardless of outcome.

**Proof of Funds (Separate from Application Fee):**
You must demonstrate sufficient funds to cover all expenses during your stay in ${country.name}:

${visaType === "study"
        ? `• Tuition fees: Varies by institution and course
• Living expenses: Approximately ${country.currency} ${Math.round(fee * 12)} per year
• Accommodation: ${country.currency} ${Math.round(fee * 6)}–${Math.round(fee * 15)} per year
• Books, materials, personal expenses: ${country.currency} ${Math.round(fee * 3)} per year
• **Minimum recommended in bank:** ${country.currency} ${Math.round(fee * 20)}–${Math.round(fee * 30)} for a full year of study`
        : visaType === "work"
          ? `• Relocation costs: ${country.currency} ${Math.round(fee * 3)}–${Math.round(fee * 8)}
• Initial settlement: ${country.currency} ${Math.round(fee * 4)}–${Math.round(fee * 10)} (before first paycheck)
• Emergency fund: ${country.currency} ${Math.round(fee * 5)}+
• **Minimum recommended:** ${country.currency} ${Math.round(fee * 8)}–${Math.round(fee * 15)} (the employer's salary letter helps significantly)`
          : visaType === "immigration"
            ? `• Settlement funds: ${country.currency} ${Math.round(fee * 30)}–${Math.round(fee * 50)} minimum
• This must be available in liquid assets (bank accounts, fixed deposits)
• Property and investments may be considered but carry less weight than liquid funds
• Funds must be accessible immediately upon arrival in ${country.name}`
            : `• Daily living expenses: ${country.currency} ${Math.round(fee * 0.5)} per day
• Accommodation: Fully confirmed and paid bookings help significantly
• Emergency funds: ${country.currency} ${Math.round(fee * 3)}+
• **Minimum recommended in bank:** ${country.currency} ${Math.round(fee * 4)}–${Math.round(fee * 10)} depending on duration`}`,
    },
    {
      heading: `Accepted Financial Documents`,
      body: `**Primary Financial Evidence:**
• **Bank Statements:** 3–6 months, bank-certified (not internet printouts). Must show account holder name, account number, and running balance. ${country.name} requires statements from the last 3–6 months — check your specific embassy's requirement.

• **Salary Slips:** Last 3–6 months' salary slips from your employer showing net monthly income. Must include employer's name, your name, and salary amount.

• **Employment Confirmation Letter:** Official letter on employer letterhead confirming your employment, position, salary, and leave of absence status.

• **Fixed Deposit Certificates:** Bank-issued certificates showing fixed deposits in your name. Highly credible as they demonstrate planned, long-term savings.

**Supplementary Financial Evidence:**
• Property ownership documents (land certificates, property deeds)
• Vehicle registration and insurance (in your name)
• Investment account statements (mutual funds, stocks, bonds)
• Business financial statements (if self-employed)
• Tax returns (showing consistent income history)
• Pension or retirement account statements

**Sponsor's Financial Documents (if applicable):**
If someone else is funding your trip to ${country.name}:
• Sponsor's bank statements (6 months)
• Sponsor's salary or income proof
• Formal sponsorship declaration letter (signed, notarized)
• Relationship proof (if the sponsor is a family member)`,
    },
    {
      heading: `Common Financial Mistakes That Cause Refusal`,
      body: `**Mistake 1: Sudden Large Deposits**
The single most damaging financial pattern is a large lump-sum deposit appearing 1–4 weeks before the application. Officers know this is borrowed money displayed temporarily. Always build savings gradually and consistently over 6+ months.

**Mistake 2: Round-Number Balances**
A balance that appears to be exactly a round number on every statement (e.g., ${country.currency} 10,000 every month) suggests the account is maintained artificially. Real financial activity shows natural fluctuations from income deposits, bill payments, and purchases.

**Mistake 3: Internet-Printed Bank Statements**
Internet printouts are not acceptable. Visit your bank and request officially stamped and signed statements. Some embassies require these on bank letterhead with a banker's certification.

**Mistake 4: Only Showing Application Fee Funds**
Some applicants show exactly enough to cover the visa fee — forgetting that they also need to prove funds for their entire stay in ${country.name}. Officers need to see capacity to live in ${country.name} without working illegally or accessing public funds.

**Mistake 5: No Source Explanation for Large Funds**
If your bank balance includes a recent large amount (salary arrears, property sale, loan repayment), include documentation explaining the source. Unexplained large sums can be treated as suspicious.`,
    },
    {
      heading: `How ${country.name} Assesses Financial Evidence — Officer Perspective`,
      body: `Immigration officers reviewing ${country.name} ${VISA_TYPE_LABELS[visaType]} applications are trained specifically to assess the authenticity, adequacy, and stability of financial evidence. Understanding their assessment framework helps you present financial documents more effectively.

**The Authenticity Test**
Officers first assess whether financial documents are genuine. Red flags that trigger authenticity scrutiny: account details that don't match the stated employer, balance fluctuations inconsistent with stated income, statements without official bank stamps, and accounts that appear to have been opened specifically for visa purposes (opened within 1–3 months of application date).

**The Adequacy Test**
Once authenticity is established, officers assess whether funds are sufficient for the stated purpose and duration:
• For short stays: enough to cover accommodation, food, transportation, and activities for the entire period
• For study: tuition fees plus living expenses for at least the first year, with evidence of ongoing financial support for subsequent years
• For work: enough to cover initial settlement costs before the first salary
• For immigration: settlement funds demonstrating long-term financial viability

**The Stability Test**
Consistent balances maintained over time are significantly more credible than any specific amount. Officers note:
• Whether the balance fluctuates naturally (income in, expenses out) — this shows genuine use
• Whether the balance has been consistently maintained at or above a certain level for 3–6 months
• Whether income deposits match the stated employment situation

**The Transparency Test**
Financial evidence must tell a complete, transparent story. Income sources must be identifiable. Large transactions must be explainable. Any gaps in financial history (months with no transactions, sudden changes in balance) will prompt questions. Proactively explain any unusual financial patterns in a cover letter rather than waiting to be asked.

**Sponsor Financial Evidence**
If you are being financially supported by a family member or employer:
• The sponsor must provide their own complete financial documentation
• The relationship between you and the sponsor must be documented (birth certificates, marriage certificate, employment contract)
• The sponsor must provide a signed, notarized declaration confirming they will support your stay in ${country.name}
• The sponsor's financial evidence must demonstrate they can comfortably support you without jeopardizing their own financial stability`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

function sectionsLanguage(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];

  return [
    {
      heading: `${country.name} ${label} Language Requirements — Complete Guide`,
      body: `Language proficiency requirements for the ${country.name} ${label} depend on your intended activity in ${country.name}. ${country.languageRequirement} is the primary language requirement. This guide explains exactly which language tests are accepted, minimum score requirements, and how to prepare effectively.

**Primary Language Requirement:** ${country.languageRequirement}

Note: If ${country.name} is not an English-speaking country, the primary language requirement is the national language. However, for visa application purposes, most documentation is submitted in English and some visa categories may alternatively accept English proficiency tests.`,
    },
    {
      heading: `Accepted Language Tests and Minimum Scores`,
      body: `**For ${label} Applications to ${country.name}:**

${visaType === "study"
        ? `Academic programs typically require one of the following:
• **IELTS Academic:** Overall 6.0–7.5 (varies by course and institution)
• **TOEFL iBT:** 80–110 (equivalent to IELTS 6.0–7.5)
• **PTE Academic:** 51–74 (equivalent range)
• **Cambridge B2/C1/C2:** Accepted by most institutions
• **Duolingo English Test:** Some institutions now accept scores of 100–130

Minimum scores vary by course level:
• Foundation / Pre-sessional: IELTS 5.5–6.0
• Undergraduate: IELTS 6.0–6.5
• Postgraduate: IELTS 6.5–7.0
• Doctoral (PhD): IELTS 7.0–7.5`
        : visaType === "work"
          ? `Professional work visa requirements vary by occupation and employer:
• **English-medium workplaces:** IELTS 6.0–7.0 general training
• **Healthcare professionals:** Often IELTS 7.0+ in all components
• **Critical shortage occupations:** May have reduced language requirements
• **Senior management roles:** May require higher English proficiency

Check your employer's specific requirements — many employers specify minimum language scores in their job offers.`
          : visaType === "immigration"
            ? `Immigration and PR pathways typically require:
• **IELTS General Training:** Overall 6.0–7.0 (with minimum component scores)
• **Points-based systems:** Higher scores earn more points (IELTS 8.0 = maximum points)
• **CELPIP General:** Canadian PR alternative to IELTS
• **TEF (Test d'Évaluation de Français):** For French-language immigration pathways
• **OET (Occupational English Test):** For healthcare professionals

Check your specific immigration program's language requirements at ${country.officialImmigrationUrl}.`
            : `For tourist and business visas to ${country.name}, no formal language test is generally required. Basic communication ability in ${country.languageRequirement} or English is helpful for your stay but not assessed during the visa application process.`}`,
    },
    {
      heading: `Language Test Preparation Strategy`,
      body: `**Test Registration and Scheduling:**
• Book your test at least 6–8 weeks in advance — popular sessions fill up quickly
• Test results are typically valid for 2 years from the test date
• Allow 3–14 days for official results after taking the test
• Factor in the full testing timeline when planning your visa application schedule

**Preparation Timeline:**
• **3 months to test date:** Intensive practice (2–3 hours daily)
• **6 weeks to test date:** Full practice tests under exam conditions
• **2 weeks to test date:** Final review, focus on weak areas
• **Test day:** Rest, arrive early, bring required identification

**Preparation Resources:**
• Official IELTS/TOEFL preparation materials and practice tests
• British Council, IDP, and Cambridge IELTS preparation courses
• Online platforms: Magoosh, Kaplan, Khan Academy (for TOEFL)
• Language exchange apps for speaking practice (italki, Tandem)

**Test Component Strategies:**
• **Listening:** Practice with varied accents (British, American, Australian)
• **Reading:** Practice academic reading for speed and comprehension
• **Writing:** Study Task 1 (charts/graphs) and Task 2 (essay) structures
• **Speaking:** Record yourself, practice with native speakers

**If Your Score is Below the Requirement:**
Many test centers allow resitting within 2–4 weeks. Some institutions and employers allow you to submit an application conditionally while awaiting a resit result. Never submit a visa application without meeting the minimum language score — the application will be refused.`,
    },
    {
      heading: `Language Exemptions and Waivers`,
      body: `Certain applicants may be exempt from language testing requirements for the ${country.name} ${label}:

**Common Exemption Criteria:**
• Citizens of countries where ${country.languageRequirement.split("/")[0]} is the primary official language
• Previous education completed entirely in English (with English-medium school certificate)
• Holders of qualifications awarded by ${country.name} educational institutions
• Certain occupations designated as exempt by the ${country.name} immigration authority
• Applicants over a certain age (varies by program; some programs exempt applicants over 55–65)

**How to Claim an Exemption:**
If you believe you qualify for a language test exemption, do not simply omit the language evidence from your application. Instead:
1. Include a formal request for exemption in your cover letter
2. Provide supporting evidence (citizenship certificate, English-medium degree certificate, etc.)
3. Reference the specific exemption policy on ${country.officialImmigrationUrl}

Incorrectly claiming an exemption without evidence is treated as misrepresentation — provide documentation for every exemption claim.`,
    },
    {
      heading: `Improving Your Language Score — Practical Study Plan`,
      body: `If your current language proficiency is below the required level for your ${country.name} ${VISA_TYPE_LABELS[visaType]}, a structured improvement plan can get you to the required score within 3–6 months for most learners starting from an intermediate level.

**Assessing Your Starting Point**
Take a free practice test before beginning your preparation. Most major test providers (IELTS, TOEFL, PTE) offer official practice materials and sample tests. This gives you an accurate baseline score and identifies which components (listening, reading, writing, speaking) need the most work.

**Months 1–2: Foundation Building**
Focus on your weakest component. Common improvement strategies:
• **Listening:** Listen to podcasts, news broadcasts, and academic lectures daily. BBC Learning English, TED Talks, and official IELTS listening samples are excellent resources.
• **Reading:** Read academic articles, quality newspaper opinion pieces, and IELTS/TOEFL reading practice passages. Focus on speed and comprehension simultaneously.
• **Writing:** Study Task 1 (graph/chart description) and Task 2 (argumentative essay) structures intensively. Practice daily with timed exercises (Task 1: 20 minutes, Task 2: 40 minutes).
• **Speaking:** Record yourself answering practice questions and listen critically. Practice with a language exchange partner, tutor, or language learning app.

**Months 3–4: Intensive Practice**
Take full-length practice tests under exam conditions at least twice per week. Review every incorrect answer to understand the underlying principle. Most test centers offer marked writing and speaking practice for a fee — this is highly valuable for identifying persistent errors.

**Month 5: Pre-Test Preparation**
Minimize new learning and focus on consolidating skills. Take 2–3 full practice tests to build exam stamina. Book your test and prepare all identification documents required for test day.

**After the Test**
Results are typically available 3–14 days after the test date. If you do not achieve the required score, most test providers allow resitting within 2–4 weeks. For IELTS, you can resit individual components (One Skill Retake) rather than the full test.`,
    },
    ...sharedExtraSections(country, visaType),
  ];
}

// ── Shared extra sections (added to every page type for depth and word count) ─

function sharedExtraSections(country: CountryExtended, visaType: VisaTypeExtended): { heading: string; body: string }[] {
  const label = VISA_TYPE_LABELS[visaType];
  const fee = country.visaFees[visaType];
  const time = country.processingDays[visaType];
  const yr = new Date().getFullYear();

  return [
    {
      heading: `All ${country.name} Visa Categories at a Glance`,
      body: `While you are researching the ${country.name} ${label}, it is useful to understand every available visa option so you can confirm you are applying under the correct category — or explore alternatives if your situation changes.

**Study Visa** — Government fee: ${country.currency} ${country.visaFees.study} | Standard processing: ${country.processingDays.study} | Difficulty: ${country.difficulty.study}
The study visa allows foreign nationals to enroll in accredited educational programs at ${country.name} institutions. Recipients may access limited part-time work rights in many cases. Study visas are often the starting point for applicants who later transition to long-term or permanent residence in ${country.name} after completing their qualifications.

**Work Visa** — Government fee: ${country.currency} ${country.visaFees.work} | Standard processing: ${country.processingDays.work} | Difficulty: ${country.difficulty.work}
The work visa requires a confirmed job offer from a ${country.name}-based employer and meeting specific qualification and salary thresholds. It is one of the more competitive visa categories but provides a clear pathway toward long-term residency for qualified professionals. Employer sponsorship and labour market compliance are central requirements.

**Business Visa** — Government fee: ${country.currency} ${country.visaFees.business} | Standard processing: ${country.processingDays.business} | Difficulty: ${country.difficulty.business}
Designed for professionals attending meetings, conferences, trade events, or negotiations in ${country.name}. The business visa does not authorize paid employment or the ongoing operation of a business within ${country.name}. It is appropriate for short-term commercial activity with an identified host organization or business contact.

**Tourist / Visit Visa** — Government fee: ${country.currency} ${country.visaFees.visit} | Standard processing: ${country.processingDays.visit} | Difficulty: ${country.difficulty.visit}
The most widely applied-for category, the tourist visa covers leisure travel, family visits, and short-term tourism in ${country.name}. It does not permit work or long-term stay. Applicants must demonstrate clear ties to their home country and a defined return plan to satisfy immigration officers of their genuine temporary intent.

**Immigration / Permanent Residency** — Government fee: ${country.currency} ${country.visaFees.immigration} | Standard processing: ${country.processingDays.immigration} | Difficulty: ${country.difficulty.immigration}
The most complex and documentation-intensive category, the immigration visa is for those seeking permanent settlement in ${country.name}. It requires meeting comprehensive eligibility standards across skills, language, health, and character. Success leads to permanent residence rights and, eventually, eligibility for ${country.name} citizenship.

Applying under the wrong visa category leads to automatic refusal and loss of the non-refundable application fee. If you are unsure which category fits your situation, consult a licensed immigration advisor before submitting.`,
    },
    {
      heading: `Ten Critical Mistakes to Avoid in Your ${country.name} Visa Application`,
      body: `Most ${country.name} ${label} refusals and delays are caused by predictable, avoidable errors. Understanding these mistakes before you apply significantly increases your chances of a successful, first-time approval.

**Mistake 1: Applying Under the Wrong Visa Category**
Selecting the incorrect visa type is more common than most people realize. Each category has distinct eligibility criteria and documentation requirements. A ${label} application submitted under the wrong purpose — even if the documents are excellent — will be refused. Study the official category definitions at ${country.officialImmigrationUrl} carefully before applying.

**Mistake 2: Incomplete Document Package**
A missing or insufficient document is the single most common cause of application returns and delays. Before submission, compare your package against the official checklist from the ${country.name} embassy in your country — not just the general online list, as embassy-specific requirements sometimes differ from the main portal.

**Mistake 3: Internet-Printed Bank Statements**
Bank statements downloaded from an online portal are not accepted. Visit your bank branch and request officially stamped and certified statements. Some embassies specifically require statements on the bank's official letterhead signed by a bank officer.

**Mistake 4: Applying Too Close to Your Travel Date**
With a standard processing time of ${time}, applying fewer than 4–5 months in advance is a significant risk — especially when you factor in time needed to gather police clearances (up to 8 weeks), medical exams (1–2 weeks), and language test results (1–4 weeks). Build in a generous buffer.

**Mistake 5: Inconsistencies Across Documents**
Your full name, date of birth, passport number, address, and travel dates must be spelled and formatted identically across every document in your application package. Even minor inconsistencies — such as a middle name omitted in one document but included in another — can trigger additional scrutiny and delay.

**Mistake 6: Vague or Generic Purpose Statement**
"I want to visit ${country.name}" is not a credible purpose statement. Officers expect specific details: which cities, which institutions or people, what activities, what dates, and why ${country.name} specifically over other destinations. The more concrete and coherent your stated purpose, the stronger your application.

**Mistake 7: Showing Only the Minimum Required Bank Balance**
Presenting a bank balance that just meets the minimum threshold — with no buffer — raises immediate questions. Immigration officers want to see comfortably maintained, consistently available funds, not an account that barely qualifies.

**Mistake 8: Failing to Disclose Previous Visa Refusals**
Every ${country.name} visa application asks about previous refusals. Omitting this information is treated as misrepresentation — a serious immigration offence that can result in a permanent visa ban to ${country.name} and potentially other countries. Always disclose honestly, and address previous refusal grounds proactively with stronger documentation.

**Mistake 9: Ignoring the Medical and Police Clearance Timeline**
These are the longest-lead-time documents in any visa application. Police clearance certificates can take 2–8 weeks depending on your home country. Medical examinations and results typically take 1–2 weeks. Request these on day one of your application preparation.

**Mistake 10: Booking Non-Refundable Travel Before Visa Approval**
Never commit to non-refundable flights, accommodation, or course enrollment deposits until your visa is confirmed. Application delays, requests for additional information, or a refusal could leave you with significant financial losses if you pre-booked. Wait for the official visa stamp in your passport before committing.`,
    },
    {
      heading: `Disclaimer and Official Information Sources`,
      body: `This guide is provided for general informational and educational purposes only. All content is based on publicly available information from official ${country.name} government sources and is accurate to the best of our knowledge as of ${yr}.

**Visa rules change.** Immigration regulations, fees, processing times, and eligibility requirements for ${country.name} are subject to change by the ${country.name} government at any time and without prior notice. Significant changes can occur due to policy updates, bilateral agreements, health emergencies, or diplomatic developments.

**Always verify current requirements before submitting your application.** The authoritative sources for ${country.name} visa information are:
• Official ${country.name} immigration portal: ${country.officialImmigrationUrl}
• ${country.name} embassy or consulate for your country: ${country.embassyUrl}
• Licensed immigration consultant or registered migration agent

**This guide does not constitute legal or immigration advice.** Every application is assessed individually by ${country.name} immigration officers based on the specific documents and circumstances presented. No outcome can be guaranteed — not by this guide, nor by any visa agent or consultant. Be wary of anyone who claims to guarantee visa approval; this is both factually incorrect and potentially a sign of a fraudulent operator.

**Currency note:** All government fees in this guide are stated in ${country.currency}. Exchange rates fluctuate and the equivalent cost in your home currency will vary. Calculate the current equivalent close to the time of your application.

**Disclaimer:** Visa rules may change. Always check the official ${country.name} embassy website for the latest requirements before applying.`,
    },
  ];
}

// ── Main export function ──────────────────────────────────────────────────────

export function generatePageContent(
  country: CountryExtended,
  visaType: VisaTypeExtended,
  pageType: PageType
): PageContent {
  const label = VISA_TYPE_LABELS[visaType];
  const fee = country.visaFees[visaType];
  const time = country.processingDays[visaType];
  const diff = country.difficulty[visaType];
  const yr = new Date().getFullYear();
  const docs = DOCS_BASE[visaType];
  const faqs = buildFAQs(country, visaType);
  const internalLinks = buildInternalLinks(country, visaType, pageType);

  let sections: { heading: string; body: string }[] = [];
  let heroTitle = "";
  let heroSubtitle = "";
  let metaTitle = "";
  let metaDescription = "";

  switch (pageType) {
    case "country-hub":
      sections = sectionsCountryHub(country);
      heroTitle = `${country.name} Visa & Immigration Guide ${yr}`;
      heroSubtitle = `Complete guide to all visa types, requirements, fees, and processes for ${country.name}. Updated for ${yr}.`;
      metaTitle = `${country.name} Visa Guide ${yr} — Types, Requirements & Fees | VisaProcessInfo`;
      metaDescription = `Complete ${country.name} visa guide for ${yr}. All visa types, requirements, fees (from ${country.currency} ${country.visaFees.visit}), processing times, and step-by-step guides.`;
      break;

    case "embassy":
      sections = sectionsEmbassy(country);
      heroTitle = `${country.name} Embassy & Consulate Guide ${yr}`;
      heroSubtitle = `How to apply at ${country.name} embassies worldwide — appointments, VFS centers, passport collection, and consular services.`;
      metaTitle = `${country.name} Embassy Guide ${yr} — Visa Application Centers & Appointments | VisaProcessInfo`;
      metaDescription = `Complete guide to ${country.name} embassies and consulates worldwide. Booking appointments, VFS Global centers, biometric enrollment, and passport collection for visa applications.`;
      break;

    case "apply":
      sections = sectionsApply(country, visaType);
      heroTitle = `Apply for ${country.name} ${label} — Complete Guide ${yr}`;
      heroSubtitle = `Fee: ${country.currency} ${fee} | Processing: ${time} | Difficulty: ${diff}`;
      metaTitle = `Apply for ${country.name} ${label} ${yr} — Requirements, Fees & Process | VisaProcessInfo`;
      metaDescription = `Complete ${country.name} ${label} application guide for ${yr}. Requirements, documents needed, fee ${country.currency} ${fee}, processing time ${time}, and expert tips for approval.`;
      break;

    case "how-to":
      sections = sectionsHowTo(country, visaType);
      heroTitle = `How to Apply for ${country.name} ${label} — Step-by-Step ${yr}`;
      heroSubtitle = `${time} processing | ${country.currency} ${fee} government fee | ${diff} difficulty`;
      metaTitle = `How to Apply for ${country.name} ${label} Step by Step ${yr} | VisaProcessInfo`;
      metaDescription = `Step-by-step guide to applying for a ${country.name} ${label} in ${yr}. From document gathering to approval — complete walkthrough with expert tips.`;
      break;

    case "details":
      sections = sectionsDetails(country, visaType);
      heroTitle = `${country.name} ${label} — Full Details & Requirements ${yr}`;
      heroSubtitle = `Fee: ${country.currency} ${fee} | Processing: ${time} | Difficulty: ${diff} | Region: ${country.region}`;
      metaTitle = `${country.name} ${label} Details — Requirements, Fees & Process ${yr} | VisaProcessInfo`;
      metaDescription = `${country.name} ${label} complete details for ${yr}. Legal framework, eligibility, documents, fees (${country.currency} ${fee}), processing time (${time}), and approval strategies.`;
      break;

    case "requirements":
      sections = sectionsRequirements(country, visaType);
      heroTitle = `${country.name} ${label} Requirements ${yr} — Eligibility Criteria`;
      heroSubtitle = `Difficulty: ${diff} | Fee: ${country.currency} ${fee} | Language: ${country.languageRequirement}`;
      metaTitle = `${country.name} ${label} Requirements ${yr} — Full Eligibility Guide | VisaProcessInfo`;
      metaDescription = `Complete eligibility and requirements for ${country.name} ${label} in ${yr}. Age, financial, language, health, and character requirements explained in detail.`;
      break;

    case "fees":
      sections = sectionsFees(country, visaType);
      heroTitle = `${country.name} ${label} Fees ${yr} — Complete Cost Breakdown`;
      heroSubtitle = `Government fee: ${country.currency} ${fee} | Total estimated: ${country.currency} ${Math.round(fee * 2.2)}–${Math.round(fee * 2.8)}`;
      metaTitle = `${country.name} ${label} Fees ${yr} — All Costs & Financial Requirements | VisaProcessInfo`;
      metaDescription = `Complete ${country.name} ${label} fee breakdown for ${yr}. Government fee ${country.currency} ${fee} plus all ancillary costs, financial requirements, and payment methods.`;
      break;

    case "documents":
      sections = sectionsDocuments(country, visaType);
      heroTitle = `${country.name} ${label} Documents Checklist ${yr}`;
      heroSubtitle = `${docs.length} required documents — complete preparation guide with expert tips`;
      metaTitle = `${country.name} ${label} Documents ${yr} — Complete Checklist & Preparation Guide | VisaProcessInfo`;
      metaDescription = `Every document required for ${country.name} ${label} in ${yr}. Complete checklist with preparation tips, translation requirements, and document quality standards.`;
      break;

    case "processing-time":
      sections = sectionsProcessingTime(country, visaType);
      heroTitle = `${country.name} ${label} Processing Time ${yr}`;
      heroSubtitle = `Standard processing: ${time} | Complete timeline and planning guide`;
      metaTitle = `${country.name} ${label} Processing Time ${yr} — Timeline & Planning Guide | VisaProcessInfo`;
      metaDescription = `${country.name} ${label} processing time is ${time}. Complete timeline breakdown, factors that speed up or slow down processing, and application planning calendar.`;
      break;

    case "rejection":
      sections = sectionsRejection(country, visaType);
      heroTitle = `${country.name} ${label} Rejection Reasons ${yr} — Avoid Refusal`;
      heroSubtitle = `Top ${REJECTION_REASONS[visaType].length} reasons applications are refused — and how to avoid them`;
      metaTitle = `${country.name} ${label} Rejection Reasons ${yr} — How to Avoid Refusal | VisaProcessInfo`;
      metaDescription = `Why ${country.name} ${label} applications are refused in ${yr}. Complete analysis of rejection grounds, refusal notice rights, and strategies to avoid common mistakes.`;
      break;

    case "interview":
      sections = sectionsInterview(country, visaType);
      heroTitle = `${country.name} ${label} Interview Tips ${yr} — Preparation Guide`;
      heroSubtitle = `Common questions, ideal answers, and interview-day strategies for ${country.name} ${label}`;
      metaTitle = `${country.name} ${label} Interview Tips ${yr} — Preparation Guide | VisaProcessInfo`;
      metaDescription = `Prepare for your ${country.name} ${label} interview in ${yr}. Common questions, ideal answers, interview-day logistics, and expert preparation strategies.`;
      break;

    case "success-tips":
      sections = sectionsSuccessTips(country, visaType);
      heroTitle = `${country.name} ${label} Approval Tips ${yr} — Success Strategies`;
      heroSubtitle = `Expert strategies to maximize your ${country.name} ${label} approval chances`;
      metaTitle = `${country.name} ${label} Success Tips ${yr} — Maximize Approval Chances | VisaProcessInfo`;
      metaDescription = `Expert strategies for ${country.name} ${label} approval in ${yr}. Financial profile building, purpose narrative, home-country ties, and application quality tips.`;
      break;

    case "checklist":
      sections = sectionsChecklist(country, visaType);
      heroTitle = `${country.name} ${label} Checklist ${yr} — Complete Application Guide`;
      heroSubtitle = `Pre-application, submission, and post-approval checklists for ${country.name} ${label}`;
      metaTitle = `${country.name} ${label} Checklist ${yr} — Complete Application Checklist | VisaProcessInfo`;
      metaDescription = `Complete ${country.name} ${label} application checklist for ${yr}. Pre-application preparation, document submission, and post-approval steps all in one guide.`;
      break;

    case "extension":
      sections = sectionsExtension(country, visaType);
      heroTitle = `${country.name} ${label} Extension Guide ${yr}`;
      heroSubtitle = `How to extend your ${country.name} ${label} — eligibility, process, and deadlines`;
      metaTitle = `${country.name} ${label} Extension ${yr} — How to Extend Your Visa | VisaProcessInfo`;
      metaDescription = `How to extend your ${country.name} ${label} in ${yr}. Eligibility requirements, application process, required documents, and change-of-status options.`;
      break;

    case "faq":
      sections = sectionsFAQ(country, visaType);
      heroTitle = `${country.name} ${label} FAQ ${yr} — All Questions Answered`;
      heroSubtitle = `Comprehensive answers to ${faqs.length}+ frequently asked questions about ${country.name} ${label}`;
      metaTitle = `${country.name} ${label} FAQ ${yr} — Common Questions & Answers | VisaProcessInfo`;
      metaDescription = `All your ${country.name} ${label} questions answered for ${yr}. Fees, processing times, eligibility, documents, extensions, and more — comprehensive FAQ guide.`;
      break;

    case "financial":
      sections = sectionsFinancial(country, visaType);
      heroTitle = `${country.name} ${label} Financial Requirements ${yr}`;
      heroSubtitle = `Proof of funds, minimum bank balance, and financial document guide for ${country.name} ${label}`;
      metaTitle = `${country.name} ${label} Financial Requirements ${yr} — Proof of Funds Guide | VisaProcessInfo`;
      metaDescription = `${country.name} ${label} financial requirements for ${yr}. Minimum bank balance, accepted financial documents, proof of funds strategies, and common financial mistakes.`;
      break;

    case "language":
      sections = sectionsLanguage(country, visaType);
      heroTitle = `${country.name} ${label} Language Requirements ${yr}`;
      heroSubtitle = `${country.languageRequirement} requirements — accepted tests, minimum scores, and preparation guide`;
      metaTitle = `${country.name} ${label} Language Requirements ${yr} — Test Scores & Prep | VisaProcessInfo`;
      metaDescription = `${country.name} ${label} language requirements for ${yr}. Accepted language tests, minimum scores (${country.languageRequirement}), exemptions, and test preparation strategies.`;
      break;

    default:
      heroTitle = `${country.name} Visa Guide ${yr}`;
      heroSubtitle = `Complete visa information for ${country.name}`;
      metaTitle = `${country.name} Visa Guide ${yr} | VisaProcessInfo`;
      metaDescription = `${country.name} visa information and guides for ${yr}.`;
  }

  return {
    heroTitle,
    heroSubtitle,
    metaTitle,
    metaDescription,
    sections,
    faqs,
    internalLinks: internalLinks.slice(0, 12),
    requirements: docs,
    steps: [
      { title: "Check Eligibility", description: `Verify you meet all ${country.name} ${label} requirements for your nationality at ${country.officialImmigrationUrl}.` },
      { title: "Gather Documents", description: `Compile all required documents including financial proof, identity documents, and purpose evidence.` },
      { title: "Complete Application", description: `Fill out the official ${country.name} ${label} application form accurately and completely.` },
      { title: "Pay Fees", description: `Pay the ${country.currency} ${fee} government application fee (non-refundable).` },
      { title: "Submit & Biometrics", description: `Submit at the designated application center and provide biometric data (fingerprints and photo).` },
      { title: "Await Decision", description: `Track your application; standard processing takes ${time}.` },
    ],
  };
}
