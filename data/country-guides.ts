import type { EditorialArticle } from "./editorial-articles";

/**
 * Country guides — every figure below was checked against the official source
 * listed in `sources` on `lastVerified`. Where an official figure could not be
 * confirmed we say so and link to the source instead of printing a number.
 */
export const COUNTRY_GUIDES: EditorialArticle[] = [
  {
    slug: "schengen-visa-fee-documents-timeline",
    title: "Schengen Visa Guide: Fee, Documents and How Early to Apply (2026)",
    metaDescription:
      "The Schengen short-stay visa fee is €90 for adults. What the EU Visa Code says about when to apply, how long a decision takes, which documents you need and the €30,000 insurance minimum.",
    category: "country-guide",
    publishedAt: "2026-10-23",
    lastVerified: "2026-10-23",
    readingTimeMinutes: 7,
    tags: ["schengen visa", "visa fee", "travel insurance", "short-stay visa", "europe"],
    sources: [
      { label: "EU Visa Code (Regulation 810/2009), consolidated text — EUR-Lex", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02009R0810-20240628" },
      { label: "Schengen visa fee increased as of 11 June 2024 — European Commission", url: "https://home-affairs.ec.europa.eu/news/schengen-visa-fee-increased-11-june-2024-2024-06-13_en" },
    ],
    sections: [
      {
        heading: "What a Schengen visa covers",
        body: `A Schengen short-stay visa lets you travel in the Schengen Area for tourism, business or family visits. The rules come from one EU law, the Visa Code (Regulation 810/2009), but each country's consulate or visa centre applies it, so small practical details differ from one embassy to another.\n\nThis guide sticks to what the Visa Code itself says. For anything specific to your nationality or the consulate you will use, check that consulate's page.`,
      },
      {
        heading: "How much the visa costs",
        body: `The fee changed on 11 June 2024. It is now:\n\n| Applicant | Fee |\n|---|---|\n| Adults | €90 |\n| Children aged 6 to under 12 | €45 |\n\nThe European Commission lists a small number of exceptions through visa facilitation agreements, for example Cabo Verde at €67.50 and some other agreements at €35. If your country has such an agreement, the consulate will show the lower fee.\n\nThe visa fee is paid to the consulate. If you apply through an external visa centre, that centre may add its own service fee, so read the total before you pay.`,
      },
      {
        heading: "When to apply",
        body: `Under Article 9 of the Visa Code you can lodge an application up to **six months** before your trip, and as a rule no later than **15 calendar days** before it. Appointment availability is often the real constraint, so do not leave it to the last fortnight.\n\nApply to the consulate of the country that is your **main destination**, meaning where you will spend the longest part of your stay. If you spend equal time in several countries, apply to the one you will enter first.`,
      },
      {
        heading: "How long a decision takes",
        body: `Article 23 sets a decision time of **15 calendar days** from the date your application is complete. In individual cases, for example when the consulate needs more checks, it can extend to **45 calendar days**.\n\nIn practice the clock starts when the application is admissible, not when you book the appointment, so plan on several weeks between your first appointment request and a passport in hand.`,
      },
      {
        heading: "Documents the Visa Code asks for",
        body: `Article 14 groups the supporting documents into four things you must show:\n\n- **The purpose of the trip** — an invitation letter, a conference registration, a hotel or tour booking.\n- **Accommodation, or means to pay for it** — hotel reservations or a host's letter.\n- **Sufficient means of subsistence** — bank statements, salary slips, sponsor documents.\n- **Your intention to leave before the visa expires** — employment, family, property or study ties at home.\n\nConsulates publish their own checklists on top of this, usually including a completed form, a recent photo, a passport valid beyond your return date and travel insurance. Use the consulate's list as the authority for what to attach.`,
      },
      {
        heading: "Travel insurance",
        body: `Article 15 requires travel medical insurance with a minimum cover of **€30,000** that is valid across all Schengen countries and for the whole stay, including repatriation for medical reasons. Check the dates on the policy against your itinerary, since a policy that ends a day early is a common reason for a request for more documents.`,
      },
      {
        heading: "Mistakes that slow applications down",
        body: `- Itinerary, hotel dates and flight dates that do not match each other.\n- Bank statements that show a large deposit just before applying with no explanation.\n- Applying to the wrong country's consulate.\n- A passport that is too close to expiry or has no free pages.\n\nIf an application is refused, the refusal letter must state the reason and explain how to appeal. Read it carefully before reapplying.`,
      },
    ],
  },

  {
    slug: "canada-study-permit-proof-of-funds",
    title: "Canada Study Permit: Proof of Funds Amounts for 2026",
    metaDescription:
      "IRCC's living-cost amounts for a Canadian study permit rise on 1 September 2026 — CAD $23,448 for one person. A breakdown by family size, what tuition and travel add, and the documents that count.",
    category: "country-guide",
    publishedAt: "2026-10-23",
    lastVerified: "2026-10-23",
    readingTimeMinutes: 6,
    tags: ["canada study permit", "proof of funds", "IRCC", "student visa", "financial requirement"],
    sources: [
      { label: "Proof of financial support — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html" },
      { label: "Study permit: get the right documents — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html" },
    ],
    sections: [
      {
        heading: "The short version",
        body: `For a study permit you must show that you can pay for **tuition, living expenses and return travel** for the first year. IRCC sets a fixed minimum for living expenses that depends on how many people are coming with you. Tuition is whatever your school charges, and travel is the cost of getting to and from Canada.\n\nThe living-cost minimum increased for applications made on or after **1 September 2026**.`,
      },
      {
        heading: "Living-cost amounts (outside Quebec)",
        body: `These are the first-year amounts published by IRCC. They do **not** include tuition or transportation.\n\n| People (including you) | Applied 1 Jan 2025 – 31 Aug 2026 | Applied on or after 1 Sep 2026 |\n|---|---|---|\n| 1 | CAD $22,895 | CAD $23,448 |\n| 2 | CAD $28,502 | CAD $29,192 |\n| 3 | CAD $35,040 | CAD $35,888 |\n| 4 | CAD $42,543 | CAD $43,572 |\n\nFor each additional family member beyond seven, add $6,318 (from 1 September 2026) or $6,170 (before that date).\n\nThe amount that applies depends on the date you apply, not the date you plan to travel.`,
      },
      {
        heading: "Working out your total",
        body: `Add three things:\n\n1. **Tuition** for the first year — taken from your school's fee schedule or acceptance letter.\n2. **Living costs** — the figure for your family size from the table above.\n3. **Transportation** — a realistic return fare to Canada for everyone travelling.\n\nExample for a single applicant applying after 1 September 2026 with first-year tuition of CAD $18,000 and a return fare of CAD $1,500: 18,000 + 23,448 + 1,500 = **CAD $42,948**. Your own tuition and fare will differ, so treat this only as an illustration of the method.`,
      },
      {
        heading: "Quebec works differently",
        body: `If you are going to study in Quebec you need a Quebec Acceptance Certificate (CAQ) instead of a provincial attestation letter, and the financial amounts are set by Quebec's immigration ministry rather than IRCC. IRCC's page does not list the Quebec figures, so use the ministry's current requirements for those.`,
      },
      {
        heading: "Other documents that go with the funds",
        body: `Proof of funds is only one part of the application. IRCC also asks for:\n\n- A **letter of acceptance** from a designated learning institution — always required.\n- A **provincial or territorial attestation letter (PAL/TAL)** — needed in most cases. You generally have to accept your offer and pay tuition, in part or in full, before the school can request one for you.\n\nIRCC's example of tuition evidence is a receipt from the school showing the first year's tuition and housing fees.`,
      },
      {
        heading: "What counts as proof",
        body: `IRCC's financial-support page lists the accepted documents. Typical examples are bank statements or a bank-confirmed deposit, a letter from the person paying for you with their own proof of income, and evidence of a scholarship or funded programme. Use the list on the IRCC page for your country, because the exact documents it accepts can vary.\n\nStatements that show money building up over time carry more weight than a single large deposit made shortly before applying.`,
      },
      {
        heading: "Before you apply",
        body: `Check the IRCC page again on the day you submit. The figures above were confirmed on 23 October 2026, and IRCC reviews them regularly. If you apply for a permit and your circumstances change, such as bringing a spouse, recalculate using the larger family-size row.`,
      },
    ],
  },

  {
    slug: "australia-student-visa-cost-genuine-student",
    title: "Australia Student Visa (Subclass 500): Cost and the Genuine Student Requirement",
    metaDescription:
      "The subclass 500 student visa charge is AUD 2,500 from 1 July 2026. What the Genuine Student requirement asks, how the four 150-word answers work, and what evidence to attach.",
    category: "country-guide",
    publishedAt: "2026-10-23",
    lastVerified: "2026-10-23",
    readingTimeMinutes: 7,
    tags: ["australia student visa", "subclass 500", "genuine student", "visa fee", "CoE"],
    sources: [
      { label: "Student Visa Application Charge increase — Study Australia (Australian Government)", url: "https://www.studyaustralia.gov.au/en/tools-and-resources/news/student-visa-application-charge-increase" },
      { label: "Genuine Student requirement — Department of Home Affairs", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/genuine-student-requirement" },
      { label: "Student visa (subclass 500) — Study Australia", url: "https://www.studyaustralia.gov.au/en_in/plan-your-move/your-guide-to-visas/student-visa-subclass-500.html" },
    ],
    sections: [
      {
        heading: "The cost",
        body: `The base Student visa application charge rose from **AUD 2,000 to AUD 2,500** on **1 July 2026**, according to Study Australia, the Australian Government's student information site. Some applicants, for example certain primary applicants from ASEAN and Pacific countries, keep a different charge, so use the Department of Home Affairs visa pricing estimator for your own situation.\n\nThe visa charge is not your whole cost. You will also need health cover for the length of your stay and a Confirmation of Enrolment from your provider before you can apply.`,
      },
      {
        heading: "Before you apply: the Confirmation of Enrolment",
        body: `You need a **Confirmation of Enrolment (CoE)** from your education provider to apply for a student visa. Applications made from inside Australia without a CoE are invalid. Get the CoE first and make sure the course name, dates and fees on it match what you describe in your visa application.`,
      },
      {
        heading: "What the Genuine Student requirement checks",
        body: `Since 23 March 2024 every student visa application is assessed against the **Genuine Student (GS) requirement**, which replaced the older Genuine Temporary Entrant test. The case officer must be satisfied that you are a genuine applicant for entry and stay as a student and that you understand studying is your main reason for applying.\n\nThe Department says it considers:\n\n- **Your situation at home** — why you are not studying something similar there, your personal ties, economic circumstances, and any military service or unrest.\n- **Your likely situation in Australia** — what you know about the course, the provider and life in Australia, and the research behind your choice.\n- **The value of the course** — how it fits your education so far and could help your employment at home or elsewhere.\n- **Your immigration history** — earlier visas, travel, refusals, cancellations and compliance.\n\nHaving plans for permanent residence in the future does not count against you.`,
      },
      {
        heading: "The four answers in the application form",
        body: `The Department prefers that you type your answers into the online form rather than upload a separate statement. The form asks four things:\n\n1. Your current circumstances, including family, community, employment and economic ties.\n2. Why you want to study this course with this provider, and what you understand about the course and about studying and living in Australia.\n3. How the course will benefit you.\n4. Any other relevant information.\n\nEach answer is limited to **150 words** and must be in English. Applicants who have held a student visa before, or who apply in Australia from another visa, answer one extra question.\n\nBecause 150 words is short, be specific. Name the course units that matter for your plans, say what job you intend to do, and point to the document that backs each claim.`,
      },
      {
        heading: "Evidence that supports your answers",
        body: `Attach documents to your ImmiAccount. The Department lists examples:\n\n- Previous study: transcripts, certificates, providers and length of study.\n- Your Australian study record, if any, including course changes and study gaps of more than two months in an academic year.\n- Current employment: employer details, dates, your position and a referee.\n- Home ties and finances: employment or business records for the 12 months before you apply, job offers after your studies, tax returns or bank statements.\n- Any military commitment or unrest that is a real reason to leave your country, with reasons and proof.\n\nStatements backed by evidence carry more weight than statements alone.`,
      },
      {
        heading: "Work rights and health cover",
        body: `Student visa holders can work up to **48 hours per fortnight** during term time. Masters by Research and Doctoral students have no hours limit. You must keep adequate health insurance for your whole stay.\n\nFor how much money you must show, use the Department's Document Checklist Tool for your own course and situation. It gives the current requirement for your case, and that is the figure to follow.`,
      },
      {
        heading: "Common reasons applications struggle",
        body: `- Answers that are generic and could be about any course.\n- A study plan that does not fit your past education or work, with no explanation.\n- Financial documents that do not clearly show where the money comes from.\n- Details in the form that do not match the CoE or your passport.\n\nRead the genuine-student page on the Home Affairs site and the ministerial direction it refers to before you write your answers.`,
      },
    ],
  },

  {
    slug: "germany-student-visa-blocked-account",
    title: "Germany Student Visa: How Much Must Be in the Blocked Account (2026)",
    metaDescription:
      "Germany's blocked account (Sperrkonto) requirement is €992 a month, or €11,904 for a year, in 2026. How it is set, how withdrawals work, and what the Opportunity Card requires.",
    category: "country-guide",
    publishedAt: "2026-10-23",
    lastVerified: "2026-10-23",
    readingTimeMinutes: 5,
    tags: ["germany student visa", "blocked account", "sperrkonto", "BAföG", "opportunity card"],
    sources: [
      { label: "Federal Foreign Office (Auswärtiges Amt)", url: "https://www.auswaertiges-amt.de/en" },
      { label: "Make it in Germany — official portal for skilled workers and students", url: "https://www.make-it-in-germany.com/en/" },
    ],
    sections: [
      {
        heading: "What the blocked account is",
        body: `To get a German national visa to study, you must show you can pay your living costs. The standard way is a **blocked account (Sperrkonto)**. You pay in the required amount before you travel. After you arrive in Germany, you can withdraw only a fixed monthly sum from it.\n\nGerman missions abroad also accept other proof, such as a formal declaration of commitment (Verpflichtungserklärung) from a person in Germany or a scholarship, but the blocked account is the most common route.`,
      },
      {
        heading: "How much you need in 2026",
        body: `The required amount follows the national BAföG rate, the standard monthly sum Germany uses for a student's living costs. It was raised to €992 per month in 2024 and has stayed at that level for 2025 and 2026 according to provider guidance.\n\n| Period | Amount |\n|---|---|\n| One month | €992 |\n| Twelve months (standard student visa) | €11,904 |\n\nEarlier amounts were €934 per month in 2023 and €861 in 2022, which is why older guides show lower totals.`,
      },
      {
        heading: "Opportunity Card applicants",
        body: `Applicants for the Opportunity Card (Chancenkarte) have a different threshold. Provider guidance puts it at **€1,091 per month**. Embassies and consulates can set a different figure depending on visa type or scholarship status, so confirm the amount with the mission that will handle your application.`,
      },
      {
        heading: "How to open one",
        body: `1. Choose a provider that your German mission recognises — your embassy or consulate lists accepted ones.\n2. Register online and receive the account details.\n3. Transfer the required amount, plus any provider setup fee, from your own bank.\n4. Download the confirmation letter and attach it to your visa application.\n5. After you arrive and register your address, complete the provider's activation steps so monthly payouts start.\n\nProviders charge their own setup and monthly fees, which are separate from the blocked amount.`,
      },
      {
        heading: "Why the amount matters for your visa",
        body: `If the blocked amount is lower than your embassy requires, the application can be delayed or refused. Always check the figure on the embassy page for your country on the day you open the account. If the BAföG rate is adjusted later, the requirement moves with it.\n\nKeep the blocked account confirmation together with your admission letter, health insurance proof and passport photos as one document set.`,
      },
      {
        heading: "Checking the figure yourself",
        body: `The figures on this page come from provider guidance that follows the Federal Foreign Office's blocked-amount rule. Because the number is set by Germany and updated from time to time, confirm it on your embassy's website before you transfer any money.`,
      },
    ],
  },

  {
    slug: "uk-standard-visitor-visa-fee-documents",
    title: "UK Standard Visitor Visa: Fees, Documents and When to Apply (2026)",
    metaDescription:
      "The UK Standard Visitor visa costs £135 for up to six months. Long-stay visitor visa prices, how early you can apply, what GOV.UK says to expect on timing, and the documents you will need.",
    category: "country-guide",
    publishedAt: "2026-10-23",
    lastVerified: "2026-10-23",
    readingTimeMinutes: 5,
    tags: ["uk visitor visa", "standard visitor", "uk visa fee", "long-term visitor visa", "gov.uk"],
    sources: [
      { label: "Apply for a Standard Visitor visa — GOV.UK", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
    ],
    sections: [
      {
        heading: "Who this is for",
        body: `The Standard Visitor visa covers tourism, visiting family and friends, many short business activities and some short courses. It is for stays of up to six months per visit. You cannot work in the UK or live there long term on it.\n\nThe prices and rules below come from the GOV.UK page for this visa, checked on 23 October 2026.`,
      },
      {
        heading: "Fees",
        body: `| Visa | Fee |\n|---|---|\n| Standard Visitor, up to 6 months | £135 |\n| Visit for medical reasons, up to 11 months | £234 |\n| Academics, up to 12 months | £234 |\n| Long-term visitor visa, 2 years | £506 |\n| Long-term visitor visa, 5 years | £903 |\n| Long-term visitor visa, 10 years | £1,128 |\n\nOn a long-term visa you can stay for up to six months per visit, but you can come and go during the validity period. Choose the longer visas only if you really expect to visit repeatedly.`,
      },
      {
        heading: "When to apply and how long it takes",
        body: `GOV.UK says the earliest you can apply is **three months before you travel**. You usually get a decision **within three weeks** of applying online, proving your identity and providing your documents.\n\nIf you travel for a fixed date such as a wedding or graduation, apply as early as the three-month window allows so a request for more evidence does not put the date at risk.`,
      },
      {
        heading: "What you need to provide",
        body: `GOV.UK lists these as required for everyone:\n\n- A passport or travel document valid for your whole stay.\n- Your travel dates, where you will stay, and what the trip is expected to cost.\n- Your current home address and how long you have lived there.\n- Your parents' names and dates of birth, if you know them.\n- Your annual income, if you have one.\n- Details of any criminal, civil or immigration offences.\n- Certified translations of any documents not in English or Welsh.\n\nDepending on your circumstances it may also ask for your travel history for the last 10 years, your employer's address and phone number, details of your partner, anyone paying for your trip or family in the UK, and a TB test certificate if you will stay more than six months.`,
      },
      {
        heading: "Preparing a convincing application",
        body: `The caseworker has to be satisfied that you will visit for the stated reason and leave at the end. Evidence that helps:\n\n- A clear itinerary and accommodation that matches your dates.\n- Bank statements for your own account that explain how you will pay.\n- Proof of ties at home such as a job, study, family or property.\n- If someone else is paying, their statement and proof of their finances.\n\nKeep every answer in the form consistent with the documents you attach.`,
      },
      {
        heading: "If your application is refused",
        body: `A refusal letter states the reason. Fix the specific problem it names before reapplying, because a new application with the same weaknesses usually gets the same result. For a step-by-step approach read our guide on what to do after a visa rejection.`,
      },
    ],
  },
];
