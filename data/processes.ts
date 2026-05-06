export interface ProcessStep {
  title: string;
  description: string;
  tips?: string[];
}

export interface ProcessGuide {
  slug: string;
  title: string;
  icon: string;
  metaDescription: string;
  introduction: string;
  targetAudience: string;
  timeRequired: string;
  costEstimate: string;
  steps: ProcessStep[];
  requiredDocuments: string[];
  commonMistakes: string[];
  faqs: { question: string; answer: string }[];
  conclusion: string;
  relatedProcesses: string[];
}

export const PROCESSES: ProcessGuide[] = [
  {
    slug: "study-visa-application",
    title: "How to Apply for a Study Visa: Complete Step-by-Step Guide 2026",
    icon: "🎓",
    metaDescription: "Complete guide to applying for a student/study visa in 2026. Step-by-step process, required documents, fees, timelines, and expert tips for a successful application.",
    introduction: "A study visa (also called a student visa or study permit) is a legal document that allows international students to enroll in and attend academic programs at recognized institutions abroad. Whether you are planning to study in Canada, the UK, Australia, Germany, or any other major destination, the study visa application process follows a similar universal framework — though each country has its own specific requirements, fees, and processing timelines. This comprehensive guide breaks down every step of the process, from the moment you receive your acceptance letter to the day you travel, so you can apply with complete confidence in 2026.",
    targetAudience: "International students admitted to a recognized college, university, language school, or vocational training program abroad.",
    timeRequired: "4–16 weeks (varies by country)",
    costEstimate: "USD 100–500 (government fees vary by country)",
    steps: [
      {
        title: "Receive Your Acceptance Letter",
        description: "Before you can apply for a study visa, you must have a formal acceptance letter (also called an offer letter, admission letter, or CAS — Confirmation of Acceptance for Studies in the UK) from a recognized educational institution. This is the most critical document in your application.",
        tips: [
          "Ensure the institution is officially accredited and recognized by the destination country's immigration authority",
          "Verify that your program start date gives you enough time to process the visa (at least 3–4 months)",
          "Keep both digital and printed copies of the acceptance letter",
        ],
      },
      {
        title: "Check Visa Requirements for Your Nationality",
        description: "Visa requirements differ significantly based on your nationality and the destination country. Some nationalities may need to apply in person at the embassy; others can apply fully online. Verify the exact requirements on the official immigration website of your destination country.",
        tips: [
          "Check whether your country has a bilateral visa agreement that simplifies the process",
          "Confirm the specific embassy or visa application center (VFS, BLS) that handles your nationality",
          "Verify if an English or local language translation of your documents is required",
        ],
      },
      {
        title: "Gather Required Documents",
        description: "Compile a complete document package before starting your application. Missing even one document is a leading cause of delays and rejections. Create a checklist and tick off each item.",
        tips: [
          "Get bank statements certified or stamped by your bank",
          "Ensure photographs exactly match the official size and specification requirements",
          "All documents in foreign languages must be officially translated",
        ],
      },
      {
        title: "Arrange Financial Proof",
        description: "You must demonstrate that you can financially support yourself throughout your studies. Requirements typically include 3–6 months of bank statements, scholarship award letters, or a sponsor's financial guarantee letter with their bank statements.",
        tips: [
          "Canada requires a GIC (Guaranteed Investment Certificate) for most nationalities",
          "Germany requires a blocked bank account with €11,208 (2026 figure)",
          "UK requires funds to have been held for at least 28 consecutive days",
          "Avoid large unexplained cash deposits just before the bank statement period",
        ],
      },
      {
        title: "Complete the Visa Application Form",
        description: "Fill out the official visa application form on the destination country's immigration portal. For most countries, this is an online form. Answer every question accurately and consistently with your supporting documents.",
        tips: [
          "Double-check that your name, date of birth, and passport number match your passport exactly",
          "Save your application reference number immediately",
          "Do not leave any section blank — write 'N/A' if a field does not apply to you",
        ],
      },
      {
        title: "Pay the Visa Application Fee",
        description: "Pay the required visa fee through the official payment portal. Fees are non-refundable even if your application is refused. Keep the payment receipt as proof.",
        tips: [
          "Use only the official government portal or authorized application center for payment",
          "Note that additional biometrics fees, VFS service charges, and courier fees may apply separately",
          "Fees may vary based on your nationality — check the fee schedule for your specific passport",
        ],
      },
      {
        title: "Submit Biometrics",
        description: "Most countries now require biometric data (fingerprints and a photograph) as part of the visa process. You must attend an in-person appointment at a designated visa application center (e.g., VFS Global, BLS International, or the embassy itself).",
        tips: [
          "Book your biometrics appointment as early as possible — slots fill up quickly",
          "Bring all original documents to the biometrics appointment",
          "Biometrics collected previously may be reused within a validity period for some countries",
        ],
      },
      {
        title: "Track Your Application and Wait",
        description: "After submission, use the reference number provided to track your application online. Processing times vary from 2 weeks (simple cases) to 4 months (complex cases or high-volume periods). Respond promptly to any requests for additional documentation.",
        tips: [
          "Do not book non-refundable travel arrangements until your visa is approved",
          "Check for emails in your spam/junk folder as important updates may be misrouted",
          "Contact the visa center only if the processing time has significantly exceeded the stated timeline",
        ],
      },
      {
        title: "Receive and Review Your Visa",
        description: "Once approved, your visa will be stamped in your passport or issued as an electronic visa letter. Carefully review all details before your departure — check the validity dates, permitted entries, and any conditions attached.",
        tips: [
          "Confirm the visa start date aligns with your course start date",
          "Note any conditions (e.g., 'no work permitted', part-time work limits)",
          "Keep multiple copies of your visa and supporting documents for your arrival",
        ],
      },
      {
        title: "Arrive and Complete Any Arrival Registration",
        description: "On arrival at your destination, present your passport and visa. Some countries (Germany, France, Italy) require you to register at a local authority (Ausländerbehörde, préfecture) within a few weeks of arrival to obtain your residence permit.",
        tips: [
          "Book your registration appointment before you travel if possible",
          "Carry printed copies of all your visa application documents for the border officer",
          "Enroll in your institution's international student orientation program",
        ],
      },
    ],
    requiredDocuments: [
      "Valid passport (minimum 6 months validity beyond intended stay)",
      "Acceptance/offer letter from the educational institution",
      "Completed visa application form",
      "Biometric passport photographs (as per specification)",
      "Bank statements (last 3–6 months, certified)",
      "Proof of tuition payment or scholarship award letter",
      "Language proficiency test results (IELTS, TOEFL, Duolingo, etc.) if applicable",
      "Health insurance coverage (minimum 12 months)",
      "Medical examination certificate from an approved panel physician",
      "Police clearance certificate (criminal record check)",
      "Proof of accommodation in the destination country",
      "Academic transcripts and previous degree certificates",
      "Statement of Purpose / Cover letter",
    ],
    commonMistakes: [
      "Applying too late — always apply at least 12 weeks before your course start date",
      "Bank statements showing sudden large deposits (raises fraud concerns)",
      "Photographs that don't meet official specifications (wrong size, background, or date)",
      "Incomplete application forms with blank fields",
      "Not translating documents into the required language",
      "Submitting photocopies where originals are required",
      "Booking non-refundable flights before visa approval",
      "Not disclosing previous visa refusals (mandatory in most application forms)",
    ],
    faqs: [
      {
        question: "Can I work while studying on a student visa?",
        answer: "Most countries allow limited part-time work during term time. Canada allows 20 hours/week off-campus during studies; Australia allows 48 hours per fortnight; UK allows 20 hours/week for degree-level students; Germany allows 120 full days or 240 half days per year. Always check the specific conditions on your visa.",
      },
      {
        question: "What happens if my course duration changes?",
        answer: "If your course is extended, you must apply for a study visa extension before your current visa expires. Contact your institution's international student office immediately — they can provide updated enrollment documentation.",
      },
      {
        question: "Can my family join me on a student visa?",
        answer: "Many countries allow dependants (spouse and children) to accompany students, though a separate dependent visa is usually required. UK and Canada allow dependants primarily for postgraduate students. Check the specific rules for your destination.",
      },
      {
        question: "What if my study visa application is refused?",
        answer: "Review the refusal letter carefully — it states the specific reason. Address those reasons with additional evidence and reapply. Common causes include insufficient financial proof, weak ties to home country, or incomplete documentation. There is generally no waiting period for reapplication.",
      },
      {
        question: "Can a student visa lead to permanent residency?",
        answer: "Yes, in many countries. Canada's Post-Graduation Work Permit (PGWP) leads directly into Express Entry. Australia's Temporary Graduate visa leads to PR pathways. Germany allows graduates to stay for 18 months job-seeking. These pathways are a major reason international students choose these destinations.",
      },
    ],
    conclusion: "Applying for a study visa is a detailed but entirely manageable process when you follow a structured approach. The key is to start early, gather all required documents, ensure your finances clearly meet the requirements, and submit a complete, honest application. Thousands of international students successfully navigate this process every year. With this guide, you have all the information you need to join them.",
    relatedProcesses: ["document-preparation-guide", "biometrics-enrollment", "embassy-interview-guide"],
  },
  {
    slug: "work-permit-application",
    title: "How to Apply for a Work Permit: Complete Guide 2026",
    icon: "💼",
    metaDescription: "Step-by-step guide to applying for a work permit or work visa in 2026. Requirements, employer sponsorship, processing times, and tips for approval.",
    introduction: "A work permit (also called a work visa or employment authorization) allows foreign nationals to legally work in another country. Whether you have a specific job offer or are applying through a points-based immigration system, understanding the work permit application process is essential before making your move. This guide covers the universal framework that applies to work permit applications in major destinations including Canada, the UK, Australia, Germany, the UAE, and more. Follow these steps carefully to maximize your chances of approval in 2026.",
    targetAudience: "Skilled professionals, engineers, healthcare workers, IT specialists, and other workers with a confirmed job offer or qualifying points profile.",
    timeRequired: "4–24 weeks (varies by country and category)",
    costEstimate: "USD 200–1,500 (varies widely by country and permit type)",
    steps: [
      {
        title: "Secure a Qualifying Job Offer",
        description: "In most countries, a formal job offer from a registered, licensed employer is the foundation of a work permit application. The employer must be an approved sponsor (UK Skilled Worker), an LMIA-approved employer (Canada), or a registered company (UAE, Germany).",
        tips: [
          "Ensure the employer is on the official register of approved sponsors for your destination country",
          "The salary offered must meet or exceed the occupation-specific minimum threshold",
          "Get the offer letter on company letterhead with job title, salary, start date, and duration",
        ],
      },
      {
        title: "Confirm Employer Sponsorship",
        description: "In many countries, your employer must take steps before you can apply. In the UK, they assign you a Certificate of Sponsorship (CoS). In Canada, they may need to complete a Labour Market Impact Assessment (LMIA). In the USA, they file an H-1B petition on your behalf.",
        tips: [
          "UK: Your employer must hold a valid Skilled Worker sponsor licence",
          "Canada: LMIA exemptions apply for intra-company transfers and CUSMA/USMCA workers",
          "USA: H-1B visas are subject to an annual lottery — explore O-1 or L-1 alternatives if applicable",
        ],
      },
      {
        title: "Verify Your Eligibility",
        description: "Check that you meet all personal eligibility criteria: age, education, language proficiency, work experience, and health/character requirements. Use the official points calculator if the country uses a points-based system.",
        tips: [
          "Canada Express Entry: calculate your CRS score at the official IRCC website",
          "Australia SkillSelect: assess your points total for your nominated occupation",
          "UK: verify your salary meets the Skilled Worker threshold for your SOC code",
        ],
      },
      {
        title: "Get Your Credentials Assessed",
        description: "Most countries require a formal Educational Credential Assessment (ECA) to verify that your foreign qualifications are equivalent to local standards. This is mandatory for Canada Express Entry and Australian SkillSelect applications.",
        tips: [
          "Canada: use WES, IQAS, ICES, or another IRCC-designated organization",
          "Australia: use the relevant skills assessing authority for your occupation (e.g., Engineers Australia, VETASSESS)",
          "Allow 4–12 weeks for credential assessment — factor this into your timeline",
        ],
      },
      {
        title: "Arrange Required Documentation",
        description: "Compile your complete document package: passport, employment contract, educational certificates, ECA report, language test results, police clearance, and medical examination.",
      },
      {
        title: "Submit Your Work Permit Application",
        description: "Apply online through the official immigration portal of your destination country (IRCC for Canada, UK Visas & Immigration, ImmiAccount for Australia, etc.). Upload all documents and pay the application fee.",
        tips: [
          "Create your account on the official portal early — avoid third-party impersonation sites",
          "Ensure all uploaded documents are clear, legible scans (PDF preferred)",
          "Keep a complete copy of your submitted application for your records",
        ],
      },
      {
        title: "Provide Biometrics",
        description: "Submit biometrics (fingerprints and photo) at an authorized visa application center. In Canada, biometrics are valid for 10 years; in the UK, they are collected at the application center as part of the process.",
      },
      {
        title: "Medical Examination",
        description: "Many work permit categories require a medical examination with an approved panel physician. Results are submitted directly to the immigration authority in most cases.",
        tips: [
          "Do not schedule your medical until you have been instructed to do so (some countries send a specific request)",
          "Canada: panel physician results are valid for 12 months",
          "Results go directly from the panel physician to the immigration authority in most systems",
        ],
      },
      {
        title: "Await Decision and Travel",
        description: "Processing times vary from 2 weeks (UAE) to 6+ months (USA H-1B cap cases). Track your application using the official portal. Once approved, review all visa conditions carefully before traveling.",
      },
    ],
    requiredDocuments: [
      "Valid passport (minimum 6 months beyond stay)",
      "Job offer/employment contract from an approved employer",
      "Employer sponsorship document (CoS, LMIA, etc.)",
      "Educational qualification certificates",
      "Educational Credential Assessment (ECA) report",
      "Professional experience reference letters",
      "Language test results (IELTS, CELPIP, PTE, etc.)",
      "Police clearance certificate",
      "Medical examination results",
      "Passport photographs",
      "Proof of settlement funds (if required)",
    ],
    commonMistakes: [
      "Applying without confirming the employer is an approved sponsor",
      "Not meeting the minimum salary threshold for the occupation",
      "Submitting unverified/uncertified educational documents",
      "Missing the language proficiency score requirement",
      "Not disclosing all previous immigration history",
      "Failing to complete the medical examination on time",
      "Accepting a job offer in a restricted occupation without checking eligibility",
    ],
    faqs: [
      {
        question: "Do I need a job offer before applying for a work permit?",
        answer: "In most cases, yes. However, Canada's Express Entry system allows applications without a prior offer (though an LMIA-supported offer adds 50–200 CRS points). Australia's SkillSelect also allows invitation-based applications, though an employer nomination adds significant advantage.",
      },
      {
        question: "How long does a work permit last?",
        answer: "Work permits are typically issued for 1–3 years and are renewable. The duration often matches the employment contract length. Canada's Post-Graduation Work Permit can last up to 3 years. UK Skilled Worker visas can be extended up to 5 years.",
      },
      {
        question: "Can I change employers on a work permit?",
        answer: "This depends on the country. In some countries (UAE, Saudi Arabia historically), the permit is tied to the employer. In Canada and Australia, open work permits allow you to work for any employer. In the UK, you typically need to apply for a new CoS if you change employers.",
      },
      {
        question: "Can my family join me on a work permit?",
        answer: "Yes. Most work permit holders can bring a spouse/partner and dependent children. In Canada and the UK, spouses of work permit holders may receive open work authorization. The family must apply for separate dependent visas.",
      },
      {
        question: "Can a work permit lead to permanent residency?",
        answer: "Absolutely. Work permit holders are among the strongest PR candidates. Canada's Express Entry, Australia's SkillSelect, and Germany's settlement permit all have streamlined pathways for those who have been working in the country for 1–5 years.",
      },
    ],
    conclusion: "Securing a work permit is one of the most significant steps toward building an international career. The process requires careful preparation, but with the right job offer, complete documents, and a well-prepared application, the path forward is clear. Start early, use official channels, and don't hesitate to seek professional advice for complex cases.",
    relatedProcesses: ["document-preparation-guide", "biometrics-enrollment", "pr-immigration-application"],
  },
  {
    slug: "tourist-visa-application",
    title: "How to Apply for a Tourist Visa: Step-by-Step Guide 2026",
    icon: "✈️",
    metaDescription: "Complete tourist visa application guide for 2026. Required documents, bank statement tips, booking requirements, and how to avoid rejection.",
    introduction: "A tourist visa (visitor visa) is the most commonly applied-for visa in the world, yet it also has one of the highest rejection rates — primarily because applicants underestimate the importance of properly demonstrating their intent to return home. Whether you are applying for a USA B-2 visa, a UK Standard Visitor Visa, a Schengen short-stay visa, or an Australia Tourist visa (subclass 600), the core requirements are similar. This guide walks you through the entire process, helping you prepare a strong, complete application that clearly communicates your genuine tourism intent.",
    targetAudience: "Travelers planning holidays, family visits, short-term tourism, or attending events in another country.",
    timeRequired: "1–8 weeks depending on country and nationality",
    costEstimate: "USD 30–200 (varies by country and nationality)",
    steps: [
      {
        title: "Check If You Need a Visa",
        description: "Before applying, check whether your nationality requires a visa, qualifies for visa-on-arrival, an e-visa, or visa-free access. Visa requirements depend entirely on bilateral agreements between your home country and the destination.",
        tips: [
          "Use the official embassy website or the IATA Travel Centre to check requirements",
          "The Schengen Area allows citizens of 60+ countries to travel visa-free for 90 days",
          "E-visa options (UAE, Turkey, Saudi Arabia) are faster and fully online",
        ],
      },
      {
        title: "Book Your Flights and Accommodation",
        description: "Secure your return flight tickets and hotel reservations before applying. These demonstrate you have a concrete travel plan and intend to return home. Note: book refundable tickets or only pay deposits until your visa is confirmed.",
        tips: [
          "Print confirmation emails for both flights and hotels",
          "For Schengen applications, book the first and last night of your stay definitively",
          "An invitation letter from a host can substitute for hotel bookings in some cases",
        ],
      },
      {
        title: "Prepare Your Financial Documents",
        description: "Tourist visa applicants must prove they have sufficient funds to cover their stay without needing to work illegally. Provide bank statements for the last 3–6 months showing a consistent balance.",
        tips: [
          "Schengen: typically requires €50–100 per day per person",
          "USA: no specific minimum, but evidence of financial stability is key",
          "UK: demonstrate sufficient funds to cover flights, accommodation, and daily expenses",
          "Avoid large unexplained cash deposits in the weeks before your statement period",
        ],
      },
      {
        title: "Demonstrate Strong Ties to Home Country",
        description: "The single biggest reason for tourist visa rejection is the consular officer's concern that you will overstay. Prove your intention to return by documenting your ties: employment letter, property ownership, family commitments, or enrolled studies.",
        tips: [
          "Employment letter on company letterhead stating your approved leave and return date",
          "Property ownership documents, mortgage statements",
          "Marriage certificate and proof of dependent children (if applicable)",
          "Any future enrolled education or financial commitments at home",
        ],
      },
      {
        title: "Get Travel Insurance",
        description: "Travel insurance is mandatory for Schengen visa applications (minimum €30,000 coverage for medical emergencies and repatriation). It is also strongly recommended for all other destinations.",
        tips: [
          "Ensure the policy is valid for the entire duration of your stay",
          "Policy must cover the entire Schengen Area, not just your main destination",
          "Purchase from a recognized insurer and obtain a policy document with your name",
        ],
      },
      {
        title: "Complete the Application Form",
        description: "Fill in the official visa application form for your destination. For Schengen, this is the standard Schengen application form; for the USA, it is the DS-160 online form; for the UK, the UKVI online form.",
        tips: [
          "Be precise about your planned itinerary — it should match your bookings",
          "Answer the purpose of visit question clearly (tourism, family visit, etc.)",
          "Do not exaggerate your financial position — be accurate and honest",
        ],
      },
      {
        title: "Submit Application and Biometrics",
        description: "Submit your complete application package at the embassy, consulate, or authorized visa application center (VFS Global, BLS International). Pay the fee and provide biometric data.",
      },
      {
        title: "Attend Embassy Interview (if required)",
        description: "The USA requires a mandatory in-person interview for B-1/B-2 visa applicants. Some other countries may call applicants for interviews in specific circumstances. Prepare honest, concise answers.",
        tips: [
          "USA DS-160: arrive 10–15 minutes early; bring all documents",
          "Be honest about your travel history, previous refusals, and financial situation",
          "Dress professionally and present yourself confidently",
        ],
      },
      {
        title: "Collect Your Visa and Travel",
        description: "Once approved, collect your passport with the visa stamp or receive your e-visa confirmation. Check all details: validity dates, number of entries (single/multiple), and duration of stay.",
      },
    ],
    requiredDocuments: [
      "Valid passport (minimum 3–6 months beyond return date)",
      "Completed visa application form",
      "Recent passport photographs (biometric quality)",
      "Return/onward flight tickets",
      "Hotel reservations or invitation letter from host",
      "Bank statements (last 3–6 months)",
      "Travel insurance policy document",
      "Employment letter / leave approval from employer",
      "Proof of accommodation (property documents, lease agreement)",
      "Previous travel history (old passports, visa copies — strengthens application)",
    ],
    commonMistakes: [
      "No proof of return flight — the consular officer must believe you will return",
      "Bank statement showing too-low balance or unexplained deposits",
      "No proof of ties to home country (no job, no property, no family)",
      "Applying too close to your travel date — allow at least 4 weeks",
      "Travelling to a country before your visa's start date",
      "Overstaying a previous visa — this severely impacts future applications",
      "Travel insurance with insufficient coverage for Schengen applications",
    ],
    faqs: [
      {
        question: "How far in advance should I apply for a tourist visa?",
        answer: "Apply 4–8 weeks before your travel date. For busy periods (summer, holidays), apply 10–12 weeks ahead. For the USA, schedule the interview as early as possible — appointment wait times can be months long.",
      },
      {
        question: "Can I extend my tourist visa once inside the country?",
        answer: "Some countries allow extensions (Australia, USA in some circumstances, Turkey). In the Schengen Area, extensions are granted only in exceptional circumstances (medical emergency, force majeure). Never overstay without authorization.",
      },
      {
        question: "Does a tourist visa refusal affect future applications?",
        answer: "Yes. Most visa applications ask you to declare previous refusals. A refusal is not automatically disqualifying but requires explanation. A strong subsequent application addressing the refusal reason significantly improves your chances.",
      },
      {
        question: "Can I visit multiple Schengen countries on one visa?",
        answer: "Yes. A Schengen short-stay visa allows you to visit all 27 Schengen member states. Apply at the embassy of the country where you will spend the most time (or the first country of entry if time is equal).",
      },
      {
        question: "What is the difference between a single-entry and multiple-entry visa?",
        answer: "A single-entry visa allows one entry into the country during its validity. A multiple-entry visa allows multiple entries within the validity period. Multiple-entry visas are typically issued to frequent travellers with a strong travel history.",
      },
    ],
    conclusion: "A tourist visa application is fundamentally about demonstrating three things: you have a genuine reason to visit, you have the means to support yourself, and you will leave when your authorized stay ends. Build your application around these three pillars, and approval is well within reach.",
    relatedProcesses: ["document-preparation-guide", "biometrics-enrollment", "visa-appeal-process"],
  },
  {
    slug: "pr-immigration-application",
    title: "How to Apply for Permanent Residency (PR): Complete Guide 2026",
    icon: "🏠",
    metaDescription: "Step-by-step guide to applying for permanent residency and immigration in 2026. Points calculators, required documents, processing times, and PR pathways.",
    introduction: "Permanent residency (PR) is the gateway to settling in a new country long-term — and eventually, to citizenship. Unlike temporary visas, PR grants you the right to live and work indefinitely without renewing your status every few years. The most popular PR pathways in 2026 include Canada's Express Entry, Australia's SkillSelect, Germany's settlement permit (Niederlassungserlaubnis), the UK's Indefinite Leave to Remain (ILR), and the UAE's Golden Visa. This guide gives you a comprehensive, step-by-step framework for navigating the PR application process, regardless of which country you are targeting.",
    targetAudience: "Skilled workers, graduates, and long-term residents seeking permanent settlement rights in their destination country.",
    timeRequired: "6 months – 3+ years (varies significantly by country and category)",
    costEstimate: "USD 500–3,000+ (varies widely by country)",
    steps: [
      { title: "Assess Your Eligibility", description: "Use the official points calculator or eligibility checker for your target country's PR program. For Canada Express Entry, calculate your CRS score. For Australia SkillSelect, calculate your points. For Germany, verify your residence and employment history meets the minimum threshold." },
      { title: "Improve Your Profile Score", description: "If your score falls short of the current cutoff, identify ways to improve it: retake language tests to achieve higher scores, gain additional work experience, secure a qualifying job offer (which adds points), or get nominated by a province/state.", tips: ["Canada: an LMIA-supported job offer adds 50–200 CRS points", "Australia: a nomination from a state/territory adds 5 points to your total", "Language: improving from IELTS 7 to 8 can add significant points in both Canada and Australia"] },
      { title: "Have Your Credentials Assessed", description: "An Educational Credential Assessment (ECA) is mandatory for most PR pathways. Choose the correct assessing body for your qualification and occupation." },
      { title: "Submit an Expression of Interest", description: "Register in the country's immigration pool (Express Entry pool for Canada, EOI in SkillSelect for Australia). Your profile is scored and ranked. Top-scoring candidates receive Invitations to Apply (ITA) in periodic draws." },
      { title: "Receive Invitation to Apply and Submit Full Application", description: "Once you receive an ITA, you typically have 60–90 days to submit a complete PR application. This is time-sensitive — begin preparing your document package in advance.", tips: ["Canada ITA window: 60 days to submit a complete application", "Begin medical and police clearance early as they have validity periods", "Engage a Regulated Canadian Immigration Consultant (RCIC) or Registered Migration Agent for complex cases"] },
      { title: "Complete Medical Examination", description: "Undergo a medical examination with an approved panel physician. Results are valid for 12 months and are submitted directly to the immigration authority." },
      { title: "Obtain Police Clearance Certificates", description: "Provide police clearance certificates from every country where you have lived for 6+ months since the age of 18. Processing can take several weeks for some countries." },
      { title: "Pay the Right of Permanent Residence Fee", description: "Canada charges a Right of Permanent Residence Fee (RPRF) of CAD 515 per adult applicant. Other countries have their own processing fees. Pay only through official portals." },
      { title: "Biometrics and Confirmation of PR", description: "Provide biometrics if required. For Canada, once approved, you will receive a Confirmation of Permanent Residence (COPR) document and a PR visa to enter the country (if applying from abroad)." },
      { title: "Land and Activate Your PR Status", description: "Enter the country before your PR visa expires to activate your permanent resident status. For countries where you are already resident, you will receive your PR card or residence permit." },
    ],
    requiredDocuments: [
      "Valid passport",
      "Educational Credential Assessment (ECA) report",
      "Language test results (IELTS, CELPIP, PTE, French TEF/TCF)",
      "Employment reference letters (confirming dates, title, hours, duties)",
      "Pay stubs and tax returns (proof of income)",
      "Police clearance certificates (from all countries of residence)",
      "Medical examination results from panel physician",
      "Proof of funds/settlement funds",
      "Job offer letter (if applicable)",
      "Marriage/civil union certificate (for spouse inclusion)",
      "Children's birth certificates (if including dependent children)",
    ],
    commonMistakes: [
      "Submitting employment reference letters that don't match your NOC/ANZSCO job description",
      "Language test scores that have expired (must be less than 2 years old)",
      "Missing police clearance certificates from countries of prior residence",
      "Failing to update your Express Entry profile when circumstances change",
      "Not meeting the residency obligation after receiving PR (Canada: 730 days in 5 years)",
      "Misrepresenting information — this leads to a finding of misrepresentation and a 5-year ban",
    ],
    faqs: [
      { question: "What is the difference between PR and citizenship?", answer: "Permanent residents can live and work indefinitely but cannot vote in national elections and must meet residency obligations to maintain status. Citizens have full rights including a passport. PR holders typically become eligible for citizenship after 3–5 years of residence." },
      { question: "How long does PR processing take?", answer: "Canada Express Entry (top programs): 6 months. Australia SkillSelect: 8–18 months. UK ILR: 6 months. Germany settlement permit: 4–8 weeks after meeting eligibility. UAE Golden Visa: 4–8 weeks." },
      { question: "Can I include my family in my PR application?", answer: "Yes. You can include your spouse/common-law partner and dependent children (typically under 22) in your PR application. Each included family member increases costs but is processed together." },
      { question: "What are the Canada CRS cutoff scores in 2026?", answer: "CRS cutoffs vary with each draw, typically ranging from 470–520 for Federal Skilled Worker draws. Provincial Nominee Program (PNP) draws often have lower cutoffs (700+ due to the 600-point bonus). Check the IRCC website for the most recent draw results." },
      { question: "Can I lose my permanent residency?", answer: "Yes. PR can be revoked if you: fail to meet residency obligations, are convicted of a serious crime, or obtained PR through misrepresentation. It is important to understand and comply with the conditions of your PR status." },
    ],
    conclusion: "Permanent residency represents a life-changing milestone. The process is detailed and sometimes slow, but it is systematic and navigable with the right preparation. Focus on your eligibility score, gather strong documentation, and submit a complete, accurate application. The investment in time and preparation pays dividends in decades of settled life in your new country.",
    relatedProcesses: ["work-permit-application", "document-preparation-guide", "biometrics-enrollment"],
  },
  {
    slug: "visa-appeal-process",
    title: "How to Appeal a Visa Refusal: Step-by-Step Guide 2026",
    icon: "⚖️",
    metaDescription: "Complete guide to appealing a visa refusal in 2026. How to understand refusal reasons, prepare a stronger application, and navigate the appeals process.",
    introduction: "Receiving a visa refusal can be deeply disappointing, but it is not necessarily the end of the road. Every year, thousands of applicants who were initially refused successfully obtain their visas on reconsideration or reapplication. The key is to understand exactly why your application was refused, address those specific weaknesses, and submit a stronger, more complete application. This guide walks you through the visa appeal and reapplication process for major destination countries, giving you the best chance of a successful outcome.",
    targetAudience: "Applicants who have received a visa refusal or rejection and want to appeal or reapply with a stronger case.",
    timeRequired: "2–6 months for formal appeals; 4–8 weeks for reapplication",
    costEstimate: "USD 50–500 (varies by country and appeal type)",
    steps: [
      { title: "Carefully Read the Refusal Letter", description: "The refusal letter (or email) contains the specific legal reason(s) for your rejection. This is the most important document in your appeal. Study every point listed and understand what evidence you failed to provide." },
      { title: "Determine If Appeal or Reapplication Is Appropriate", description: "Some countries offer a formal right of appeal (UK, Canada in some cases). Others only permit reapplication. Understand which route applies to you.", tips: ["UK: appeals are generally only available if the refusal involves human rights grounds; otherwise, Administrative Review applies", "Canada: most refusals can be appealed through the Immigration and Refugee Board (IRB) if based on misrepresentation", "USA: no formal appeal for tourist visa refusals; reapplication with new evidence is the route", "Schengen: appeals are filed with the issuing embassy; timelines vary by country"] },
      { title: "Obtain a Copy of Your Application File", description: "In some countries (Canada, UK), you can request your application file and officer's notes through a Freedom of Information / Access to Information request. This gives insight into exactly what the officer's concerns were." },
      { title: "Address Each Refusal Reason Specifically", description: "Create a point-by-point response to each stated reason. If refused for insufficient funds, provide stronger financial evidence. If refused for weak ties to home country, add more evidence of your employment, property, and family commitments." },
      { title: "Strengthen Your Application", description: "Do not simply resubmit the same application. Add new, stronger evidence: updated bank statements, a formal employment letter, additional travel history, property documents, or a well-crafted cover letter explaining your circumstances." },
      { title: "Write a Strong Cover Letter", description: "A cover letter directly addressing the refusal reasons is highly effective. Acknowledge the concern raised, provide the additional evidence, and clearly state why your application should be approved.", tips: ["Be factual and professional — never emotional or confrontational", "Reference the specific paragraph of the refusal letter you are addressing", "Ensure the cover letter is signed and dated"] },
      { title: "File the Appeal or Submit New Application", description: "For formal appeals, file within the stated deadline (typically 28 days for UK Administrative Review). For reapplication, gather all documents, pay the fee again, and submit through the appropriate portal." },
      { title: "Await the Decision", description: "Appeal timelines vary. UK Administrative Review: 28 days. Immigration tribunal appeals: several months. For reapplications, standard processing times apply." },
    ],
    requiredDocuments: [
      "Original refusal letter",
      "Copy of previously submitted application",
      "Cover letter addressing each refusal reason",
      "New/updated evidence addressing the deficiencies",
      "Updated bank statements",
      "Updated employment letter",
      "Additional proof of ties to home country",
      "Any new supporting documents not previously submitted",
    ],
    commonMistakes: [
      "Resubmitting the exact same application without addressing the refusal reasons",
      "Filing an appeal after the deadline has passed",
      "Being emotional or confrontational in the cover letter",
      "Not providing enough NEW evidence — more of the same is not sufficient",
      "Misunderstanding the type of review available (appeal vs. reapplication)",
      "Not disclosing the previous refusal on the new application form",
    ],
    faqs: [
      { question: "Can I reapply immediately after a refusal?", answer: "In most cases, yes — there is no mandatory waiting period. However, reapplying without addressing the refusal reasons is a waste of money and time. Take the time to build a significantly stronger application." },
      { question: "Does a refusal permanently affect my chances?", answer: "No, not permanently. However, refusals must be disclosed on future applications. A refusal followed by a strong reapplication that clearly addresses the issues is viewed quite differently from repeated refusals for the same reasons." },
      { question: "Should I hire a visa consultant for an appeal?", answer: "For complex cases involving misrepresentation findings, security concerns, or formal immigration tribunal appeals, a licensed consultant or immigration lawyer is strongly recommended. For straightforward refusals based on insufficient documentation, a strong self-prepared application is often sufficient." },
      { question: "What is an Administrative Review (UK)?", answer: "UK Administrative Review is a process where a different UKVI officer reviews a refusal decision for caseworker error. It does not consider new evidence — it only checks whether the original decision was correctly made under the Immigration Rules." },
      { question: "How do I get my application documents back after a refusal?", answer: "Visa application centers typically return your passport and original documents. Copies and supporting materials may or may not be returned. In the UK and Canada, you can submit an Access to Information request to obtain your application file." },
    ],
    conclusion: "A visa refusal is a setback, not a permanent barrier. With a clear understanding of the refusal reasons, targeted additional evidence, and a professional, well-structured reapplication, many applicants successfully reverse an initial refusal. Take the time to build your strongest possible case before reapplying.",
    relatedProcesses: ["document-preparation-guide", "tourist-visa-application", "study-visa-application"],
  },
  {
    slug: "document-preparation-guide",
    title: "Visa Document Preparation Guide: Complete Checklist 2026",
    icon: "📋",
    metaDescription: "Complete guide to preparing visa documents in 2026. What to include, how to organize, translation requirements, and tips to avoid rejection.",
    introduction: "One of the most common reasons for visa delays and rejections is incomplete or poorly prepared documentation. Yet document preparation is entirely within your control — it requires organization, attention to detail, and an understanding of what each document needs to demonstrate. This comprehensive guide covers how to prepare, organize, and present your visa document package for any visa type in 2026, whether you are applying for a tourist visa, student visa, work permit, or permanent residency.",
    targetAudience: "All visa applicants preparing their document package for any visa type or destination country.",
    timeRequired: "1–4 weeks to gather all documents",
    costEstimate: "USD 50–300 (translations, certifications, medical exams)",
    steps: [
      { title: "Create a Master Document Checklist", description: "Start with the official document checklist from the destination country's embassy or immigration authority website. Create a spreadsheet or printed list with every item, its status, and the deadline to obtain it." },
      { title: "Prepare Your Passport", description: "Ensure your passport has sufficient validity (most countries require 6 months beyond your intended stay) and enough blank pages (at least 2). If your passport is close to expiry, renew it before applying.", tips: ["Some countries accept 3 months validity — check the specific requirement", "Gather all old passports as they show travel history (strengthens applications)", "If your name has changed (marriage, etc.), carry supporting documentation"] },
      { title: "Get Correct Photographs", description: "Photographs must meet very specific requirements that differ by country. Wrong size, background, head position, or recency are among the most common causes of photo rejection.", tips: ["Use a professional photographer who is familiar with visa photo requirements", "Do not wear glasses (most countries no longer accept photos with glasses)", "White or off-white background is standard; check destination requirements", "Photos should typically be taken within the last 6 months"] },
      { title: "Prepare Financial Documents", description: "Bank statements must be official (stamped and signed by the bank), cover the required period (usually 3–6 months), and show a consistent balance without large unexplained deposits.", tips: ["Request certified/original bank statements directly from your bank branch", "Include savings accounts, fixed deposits, and investment statements", "A cover letter explaining your financial situation adds context", "For joint accounts, include proof of your relationship with the co-holder"] },
      { title: "Obtain Police Clearance Certificate", description: "Police Clearance Certificates (PCCs) or Criminal Record Checks are required for long-term visas and PR applications. Processing times vary significantly by country (2 days to 3 months).", tips: ["Apply for your PCC early — it is often the longest-lead-time document", "PCCs from countries where you lived for 6+ months after age 18 may be required", "USA: FBI Identity History Summary Check takes 2–3 months"] },
      { title: "Complete Medical Examination", description: "Medical exams must be done by an approved panel physician. Do not go to your family doctor — only approved physicians' results are accepted.", tips: ["Find your destination country's list of approved panel physicians on their immigration website", "Results are typically sent directly from the physician to the immigration authority", "Allow 2–3 weeks for medical results"] },
      { title: "Translate Documents", description: "All documents not in the official language of the destination country must be officially translated. For most countries, this means translation by a certified or sworn translator.", tips: ["Canada: translated documents must include a certified copy of the original AND a certified translation", "UK: documents must be translated by a professional translator who provides their name, signature, and confirmation of accuracy", "Germany: sworn translations (beglaubigte Übersetzungen) are required for official documents"] },
      { title: "Organize and Present Your Package", description: "Present your document package in a logical, easy-to-navigate order. Use dividers or labeled sections. A well-organized package creates a positive first impression and makes the officer's review easier." },
    ],
    requiredDocuments: [
      "Passport (current, plus all previous passports)",
      "Biometric photographs",
      "Completed and signed application form",
      "Bank statements (3–6 months, certified)",
      "Employment letter (position, salary, duration of employment, approved leave)",
      "Payslips (last 3 months)",
      "Educational certificates and transcripts",
      "Marriage certificate (if applicable)",
      "Birth certificates for dependent children",
      "Police Clearance Certificate",
      "Medical examination certificate (for long-term visas)",
      "Travel insurance policy",
      "Proof of accommodation",
      "Purpose-specific documents (acceptance letter, job offer, business registration, etc.)",
    ],
    commonMistakes: [
      "Submitting photocopies where originals are required (or vice versa)",
      "Using expired documents (PCCs, medical certificates, language tests all have validity periods)",
      "Providing uncertified translations",
      "Bank statements with large unexplained deposits immediately before the statement period",
      "Photographs that do not meet size or background specifications",
      "Not labeling documents in multi-document packages",
      "Submitting documents in the wrong order (leading to processing delays)",
    ],
    faqs: [
      { question: "How should I organize my visa documents?", answer: "Place documents in the order listed on the official checklist. Use a folder with dividers labeled with each document category. Place the application form on top, followed by your passport, photographs, and then supporting documents." },
      { question: "Do I need original documents or copies?", answer: "It depends on the document and country. Passports: originals required. Bank statements: originals or certified copies from the bank. Academic certificates: certified copies usually acceptable; originals may be required for verification. Always check the specific guidance." },
      { question: "How long does it take to gather all documents?", answer: "Allow 3–4 weeks minimum. Police clearance certificates and medical examinations are the longest-lead-time items. Bank statements must cover a specific recent period. Language test appointments may have waiting times." },
      { question: "Are digital/scanned documents accepted?", answer: "For online applications, high-quality scans (300 DPI or higher, PDF format preferred) are standard. For in-person submissions, originals or certified copies are required. Always check the specific portal guidance." },
      { question: "What is a 'certified true copy'?", answer: "A certified true copy is a photocopy of an original document that has been signed and stamped by a notary public, commissioner of oaths, or other authorized person to confirm it is a true and accurate copy of the original." },
    ],
    conclusion: "Document preparation is the foundation of any successful visa application. A complete, well-organized, and properly certified document package not only reduces the risk of rejection but also demonstrates to the visa officer that you are a serious, prepared applicant. Invest the time to do this right — it is the step most within your control.",
    relatedProcesses: ["study-visa-application", "work-permit-application", "tourist-visa-application"],
  },
  {
    slug: "biometrics-enrollment",
    title: "Biometrics Enrollment for Visa Applications: Complete Guide 2026",
    icon: "🔏",
    metaDescription: "Everything you need to know about biometrics enrollment for visa applications in 2026. What to expect, where to go, and how the process works.",
    introduction: "Biometrics — the collection of your fingerprints and a digital photograph — has become a standard part of visa applications for most major destination countries. Canada, UK, Australia, USA, and the Schengen Area all require biometric data from most applicants. If you have never provided biometrics before, or are unsure what to expect, this guide explains the entire process clearly: where to go, what happens, how long it takes, and how your data is used.",
    targetAudience: "All visa applicants required to submit biometric data as part of their application.",
    timeRequired: "15–30 minutes for the appointment itself; booking may require 1–4 weeks advance notice",
    costEstimate: "USD 10–85 (varies by country; often included in visa fee)",
    steps: [
      { title: "Check If Biometrics Are Required", description: "Not all applicants need to provide biometrics. Many countries exempt young children, seniors, and certain visa categories. Check the specific requirements for your nationality, age, and visa type.", tips: ["Canada: required for most applicants aged 14–79", "UK: required at most visa application centers as part of the application process", "USA: collected at the interview appointment at the embassy", "Schengen: required for all applicants aged 12+"] },
      { title: "Book Your Biometrics Appointment", description: "Biometrics must be provided at an authorized visa application center (VFS Global, BLS International, VisaMetric, or the embassy itself). Book your appointment as early as possible — slots fill up quickly, especially during peak periods.", tips: ["Canada: biometrics can be given at any IRCC-designated collection point worldwide", "UK: book through the UKVI website before attending a VFS center", "Ensure you book at a location that processes applications for your destination country"] },
      { title: "Prepare for Your Appointment", description: "You will need to bring specific documents to your biometrics appointment. Arrive on time with everything required to avoid having your appointment cancelled.", tips: ["Bring your valid passport", "Bring your biometrics instruction letter (Canada) or appointment confirmation", "Do not cut, clean, or treat your fingertips in any unusual way before the appointment", "Remove nail polish if you are concerned it may affect fingerprint quality"] },
      { title: "Attend the Appointment", description: "At the center, a trained officer will take a digital scan of your fingerprints (usually all 10 fingers) and a digital photograph. The process takes approximately 10–15 minutes. It is completely non-invasive.", tips: ["Inform the officer if you have a medical condition affecting your fingerprints", "The photograph will be taken without glasses; remove them before the appointment", "You will receive a receipt confirming your biometrics have been collected"] },
      { title: "Confirm Biometrics Are Linked to Your Application", description: "After submission, confirm that your biometrics have been successfully linked to your visa application on the relevant portal. In Canada, your online account will show biometrics as 'received'." },
      { title: "Biometrics Validity Periods", description: "Previously collected biometrics may be reused within their validity period, meaning you may not need to be re-enrolled for subsequent applications.", tips: ["Canada: biometrics are valid for 10 years from the date of collection", "UK: biometrics are collected fresh for each application", "EU Entry/Exit System (EES): biometrics collected at first border crossing are reused for subsequent entries"] },
    ],
    requiredDocuments: [
      "Valid passport or travel document",
      "Biometrics instruction letter (Canada) or appointment confirmation",
      "Application reference number",
      "Any additional documents requested by the specific application center",
    ],
    commonMistakes: [
      "Not booking an appointment early enough (centers can be fully booked weeks in advance)",
      "Attending the wrong visa application center (must match your destination country)",
      "Not bringing the required documents to the appointment (appointment gets cancelled)",
      "Assuming biometrics from a previous application are still valid without checking",
      "Cutting or treating fingertips before the appointment",
    ],
    faqs: [
      { question: "Is biometrics collection painful or intrusive?", answer: "No. It involves placing your fingers on a glass scanner and having a photograph taken. The entire process takes 10–15 minutes and is completely non-invasive." },
      { question: "What if my fingerprints are difficult to scan?", answer: "If you have a medical condition, injury, or worn fingerprints, inform the officer. They will note this in your file. Occupations involving heavy manual labor sometimes result in worn fingerprints — this is documented and does not disqualify you." },
      { question: "Do children need to provide biometrics?", answer: "Most countries exempt very young children. Canada exempts children under 14. The Schengen Area collects biometrics from children aged 12 and over. Check the specific rules for your destination." },
      { question: "Can I provide biometrics for multiple countries in one appointment?", answer: "No. Each country's biometrics must be collected separately at the relevant application center. A VFS Global center, for example, handles specific countries — confirm your center handles your destination." },
      { question: "What happens to my biometric data?", answer: "Your biometric data is stored securely and used to verify your identity at border crossings and for future immigration applications. Data is handled under the destination country's privacy laws. Canada retains biometrics for 10 years." },
    ],
    conclusion: "Biometrics enrollment is a quick, straightforward, and essential part of the modern visa application process. Book your appointment early, bring the correct documents, and approach it as a simple administrative step on your path to visa approval.",
    relatedProcesses: ["document-preparation-guide", "study-visa-application", "work-permit-application"],
  },
  {
    slug: "embassy-interview-guide",
    title: "Embassy Visa Interview Guide: How to Prepare and Succeed in 2026",
    icon: "🏛️",
    metaDescription: "Complete guide to preparing for a visa interview at an embassy or consulate in 2026. Common questions, tips, what to wear, and how to answer confidently.",
    introduction: "A visa interview is required for many visa categories — it is mandatory for all US non-immigrant visa applicants, and may be requested for UK, Schengen, and other applications at the consular officer's discretion. The interview is your opportunity to personally demonstrate your genuine intent, strong ties to your home country, and eligibility for the visa. With proper preparation, most applicants find the interview to be brief and straightforward. This guide prepares you for exactly what to expect and how to present yourself at your best.",
    targetAudience: "Visa applicants scheduled for an interview at an embassy, consulate, or visa application center.",
    timeRequired: "2–30 minutes for the interview itself; 1–2 weeks to prepare",
    costEstimate: "No additional cost (included in visa fee for most countries)",
    steps: [
      { title: "Confirm Your Appointment Details", description: "Double-check your appointment date, time, location, and the exact address of the embassy or consulate. Embassies often have separate entrances for visa applicants — verify in advance.", tips: ["Arrive 15–20 minutes before your appointment time", "Check if there are any restricted items (mobile phones, laptops) not permitted inside", "Plan your route and check parking/transit options in advance"] },
      { title: "Review Your Application Thoroughly", description: "Re-read every page of your submitted application form (DS-160 for USA, etc.). Know every answer you gave. If the officer asks you something and your verbal answer contradicts your form, it raises a red flag.", tips: ["Know your travel history: dates, countries, visa types", "Know your employment history: employer names, addresses, dates", "Know your financial details: approximate savings, monthly income"] },
      { title: "Prepare Your Documents Folder", description: "Bring a neatly organized folder with all your visa supporting documents, even if you already submitted them online. Having documents readily accessible shows preparedness and helps if the officer requests verification.", tips: ["Organize in the same order as the application checklist", "Use clear document wallets for different categories", "Include a printed copy of your appointment confirmation and application form"] },
      { title: "Anticipate Common Interview Questions", description: "While every interview is different, certain questions are consistently asked across visa categories. Prepare concise, honest answers for each.", tips: ["'Why do you want to visit/study/work in [country]?' — Be specific about your purpose", "'How long do you plan to stay?' — Your answer must match your visa application", "'What do you do back home?' — Employment, family, financial ties", "'Have you visited this country before?' — Know your travel history", "'Who is funding your trip/study?' — Be clear about your financial source"] },
      { title: "Dress Professionally", description: "First impressions matter. Dress in clean, professional, conservative clothing. Business casual is appropriate for most visa interviews.", tips: ["Avoid overly casual clothing (jeans, t-shirts, flip-flops)", "Conservative dress: collared shirt/blouse, trousers/skirt", "Grooming: be neat and presentable"] },
      { title: "Conduct the Interview", description: "Answer questions directly, clearly, and honestly. Keep answers concise — do not over-explain. If you do not understand a question, politely ask for clarification. Maintain calm, professional eye contact.", tips: ["Speak slowly and clearly if the interview is in a second language", "Do not volunteer unsolicited information", "Never lie or exaggerate — if you do not know an exact date or figure, say 'approximately'", "Show confidence without being confrontational"] },
      { title: "Handle Tough Questions Professionally", description: "If asked about a previous refusal, declared criminal record, or financial concern, answer factually and provide supporting documentation. Do not become defensive.", tips: ["Previous refusals: 'I was previously refused because of insufficient financial documentation. I have since gathered more comprehensive statements showing...'", "Stay calm — the interview is a fact-finding exercise, not an interrogation"] },
      { title: "After the Interview", description: "The officer will either approve, administratively process, or refuse your application at the interview. If approved, your passport will be retained for visa stamping. If put into administrative processing, you will be informed of next steps." },
    ],
    requiredDocuments: [
      "Valid passport and any old passports",
      "Appointment confirmation letter",
      "Completed application form (copy)",
      "Passport photographs",
      "All supporting documents used in the application",
      "Financial documents (bank statements, payslips)",
      "Purpose-specific documents (acceptance letter, job letter, hotel bookings, etc.)",
    ],
    commonMistakes: [
      "Arriving late — even by a few minutes you may be turned away",
      "Giving answers that contradict your application form",
      "Over-explaining or volunteering unnecessary information",
      "Appearing nervous to the point of seeming evasive",
      "Not bringing physical copies of documents you submitted online",
      "Using a phone during the interview or while in the waiting area (prohibited in most embassies)",
    ],
    faqs: [
      { question: "How long does a visa interview last?", answer: "Most visa interviews are brief — 3 to 10 minutes. US B-1/B-2 interviews are typically 2–5 minutes. Complex cases or student visa interviews may take 10–20 minutes. A short interview is generally a positive sign." },
      { question: "What happens if I fail the interview?", answer: "If refused, the officer gives you a refusal slip stating the grounds under immigration law. For the US, common grounds include Section 214(b) (failure to prove non-immigrant intent) or 221(g) (administrative processing). You can reapply with a stronger application." },
      { question: "Can I bring someone with me to the interview?", answer: "Generally, no. Interviews are individual. In some limited cases (very young children, elderly applicants who need assistance), an accompanying person may be permitted in the waiting area but not the interview room." },
      { question: "What if my English is not strong?", answer: "Most embassies have interview officers who speak multiple languages. You can request an interview in your language. Alternatively, prepare key phrases in English. Be honest about your language level — struggling through English is far better than appearing deceptive." },
      { question: "What does 'administrative processing' mean after a US visa interview?", answer: "Administrative processing (AP) means additional security or background checks are required. It is not a refusal. Processing can take 2 weeks to several months. You cannot do anything to speed it up — simply wait and respond promptly to any requests for additional information." },
    ],
    conclusion: "A visa interview is a conversation, not an interrogation. Most visa officers simply want to verify that your application is genuine and that you meet the requirements. With proper preparation, organized documents, and honest, confident answers, you are well-positioned for success.",
    relatedProcesses: ["document-preparation-guide", "tourist-visa-application", "visa-appeal-process"],
  },
];

export function getProcessBySlug(slug: string): ProcessGuide | undefined {
  return PROCESSES.find((p) => p.slug === slug);
}

export function getAllProcessSlugs(): string[] {
  return PROCESSES.map((p) => p.slug);
}
