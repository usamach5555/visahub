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

  {
    slug: "canada-visitor-visa-fee-documents",
    title: "Canada Visitor Visa: Fees, Documents and How to Apply (2026)",
    metaDescription:
      "Canada's visitor visa costs CAD $100 plus $85 for biometrics. What IRCC asks for — passport validity, six months of bank statements, itinerary, invitation letter — and how to apply online.",
    category: "country-guide",
    publishedAt: "2026-10-23",
    lastVerified: "2026-10-23",
    readingTimeMinutes: 6,
    tags: ["canada visitor visa", "TRV", "biometrics fee", "IRCC", "tourist visa"],
    sources: [
      { label: "Apply for a visitor visa — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html" },
    ],
    sections: [
      {
        heading: "Visitor visa or eTA?",
        body: `Canada has two kinds of entry document for short visits. Travellers from visa-exempt countries need an **eTA**, while travellers from other countries need a **visitor visa**. Which one you need depends on your passport, and IRCC has a separate "who needs a visitor visa" tool to check it. This guide covers the visitor visa.`,
      },
      {
        heading: "What it costs",
        body: `IRCC lists these fees, paid at the end of the online application by credit or debit card:\n\n| Fee | Amount (CAD) |\n|---|---|\n| Visitor visa processing fee | $100 per person, or $500 for a family of 5 or more |\n| Biometrics fee | $85 per person, or up to $170 for a family, if you are eligible |\n\nSome applicants are exempt from some or all fees. If you are applying online for the first time you generally pay the biometrics fee together with the application.`,
      },
      {
        heading: "Documents everyone needs",
        body: `- A digital copy of a **valid passport or travel document**, including the biographical page and any pages with stamps or visas. IRCC says your passport should be valid for at least **six months beyond your travel date**.\n- Documents that match your purpose of travel, which your online checklist will list.\n\nFor a tourism visit IRCC recommends a travel history, an itinerary, **bank statements covering at least six months**, and a letter from your employer. If you are visiting because of a business purpose you may need an invitation letter from a Canadian company.`,
      },
      {
        heading: "Extra documents in some cases",
        body: `- If you are travelling with a minor child, a **consent letter** from the parent or parents who are not travelling, plus any other documents that apply.\n- If a family member or friend in Canada is inviting you, a letter of invitation and proof of your relationship.\n- Some visa offices ask for additional documents, so check the instructions for your local office.`,
      },
      {
        heading: "How to apply",
        body: `1. Gather your documents and scan them clearly.\n2. Create your IRCC application through the IRCC Portal, or the new version of the portal if you are 18 or older, applying alone, have never applied to IRCC before and are not using a representative.\n3. Answer the checklist questions and upload your documents.\n4. Pay the fees at the end.\n5. If biometrics are needed, wait for your instruction letter and book your appointment promptly.\n\nPaper applications are allowed only in specific cases, such as if a disability stops you applying online.`,
      },
      {
        heading: "Making your application clearer",
        body: `Officers decide whether you will leave Canada at the end of your stay, so the application should answer that directly. Describe what you will do, for how long and where you will stay. Bank statements should show regular income and a balance that covers the trip. Evidence of ties at home such as work, study, family or property helps.\n\nEvery document should agree with the answers you typed into the form.`,
      },
      {
        heading: "Avoid imitation sites",
        body: `Apply only through the IRCC website. Third-party sites that look official may charge extra for what is a government application you can submit yourself.`,
      },
    ],
  },

  {
    slug: "uk-eta-electronic-travel-authorisation",
    title: "UK ETA (Electronic Travel Authorisation): Who Needs It, Cost and How to Apply",
    metaDescription:
      "The UK ETA costs £20 and lets eligible visitors stay up to six months. Who needs one, who does not, why children need their own, and how to avoid sites that charge more.",
    category: "country-guide",
    publishedAt: "2026-10-23",
    lastVerified: "2026-10-23",
    readingTimeMinutes: 4,
    tags: ["uk eta", "electronic travel authorisation", "uk visit", "gov.uk", "travel to uk"],
    sources: [
      { label: "Electronic Travel Authorisation (ETA) — GOV.UK", url: "https://www.gov.uk/guidance/electronic-travel-authorisation-eta" },
    ],
    sections: [
      {
        heading: "What an ETA is",
        body: `An Electronic Travel Authorisation (ETA) is a digital permission to travel to the UK for short visits. It is linked to your passport. It is **not a visa**, and GOV.UK states that an ETA does not guarantee entry: border officers can still refuse you at the airport.`,
      },
      {
        heading: "Who needs one",
        body: `Most visitors need either an ETA or a visa, depending on nationality and the reason for travel. ETAs are generally for visitors from Europe, the USA, Australia, Canada and certain other countries. Travellers who need a visa for a UK visit apply for a visa instead, see our guide to the Standard Visitor visa.\n\nEveryone travelling needs their own ETA, **including babies and children**.\n\nYou do **not** need an ETA if you have a British or Irish passport, or permission to live, work or study in the UK. You do need one if you only pass through border control at a UK airport on the way to somewhere else.`,
      },
      {
        heading: "Cost and validity",
        body: `The fee is **£20** per person. An ETA lets you travel to the UK, Jersey, Guernsey or the Isle of Man for up to **six months** at a time. GOV.UK lets you check when your ETA expires after you apply.\n\nIt can be used for tourism, visiting family and certain other short-stay reasons.`,
      },
      {
        heading: "How to apply",
        body: `Use the "Apply for an ETA" service on GOV.UK. You can apply for other people, for example for your children or a travelling companion. Make sure the passport you use for the application is the one you travel with, since the ETA is tied to it.`,
      },
      {
        heading: "Avoid look-alike websites",
        body: `GOV.UK warns that other websites may charge more than £20 and that some imitate government services. Start from the GOV.UK address and check you are on a gov.uk page before you enter your passport details or pay.`,
      },
      {
        heading: "Allow time before you travel",
        body: `GOV.UK's guidance page does not state a processing time, so do not leave the application to the day before your flight. Apply well ahead and check the status of your ETA before you book non-refundable travel.`,
      },
    ],
  },

  {
    slug: "umrah-visa-nusuk-apply-directly",
    title: "Umrah Visa: Applying Directly on Nusuk or Through an Accredited Agent",
    metaDescription:
      "Pilgrims outside Saudi Arabia can apply for an Umrah visa directly on the Nusuk Umrah platform, or use an accredited agent. How it works, what the platform offers, and what to confirm yourself.",
    category: "country-guide",
    publishedAt: "2026-10-23",
    lastVerified: "2026-10-23",
    readingTimeMinutes: 4,
    tags: ["umrah visa", "nusuk", "saudi arabia visa", "umrah permit", "pilgrimage"],
    sources: [
      { label: "Ministry of Hajj and Umrah launches Nusuk Umrah service — Ministry of Hajj and Umrah", url: "https://haj.gov.sa/en/Media-Center/Ministry-News/Ministry-of-Hajj-and-Umrah-launches-Nusuk-Umrah-service-to-enable-pilgrims-from-outside-the-Kingdom" },
      { label: "Nusuk Umrah platform", url: "https://umrah.nusuk.sa/" },
      { label: "Ministry of Hajj and Umrah — FAQ", url: "https://haj.gov.sa/en/FAQ" },
    ],
    sections: [
      {
        heading: "Two official ways to apply",
        body: `Saudi Arabia's Ministry of Hajj and Umrah announced the **Nusuk Umrah** service on 19 August 2025. It lets pilgrims from outside the Kingdom **apply directly for an Umrah visa** at umrah.nusuk.sa, without an intermediary, and complete the process electronically from application to obtaining the entry visa.\n\nIt is one option among others. The platform also lists **accredited agents** in the pilgrim's own country, so you can still book through an agent if you prefer a package arranged for you.`,
      },
      {
        heading: "What the platform offers",
        body: `According to the Ministry:\n\n- You can choose **integrated packages** or **individual services** such as the visa, accommodation, transportation, enrichment tours and support services.\n- Packages can be customised.\n- The interface supports seven languages.\n- Several payment options are available.\n\nThat means you can buy only the visa and arrange the rest yourself, or buy a full package in one place.`,
      },
      {
        heading: "Steps to follow",
        body: `1. Go to umrah.nusuk.sa by typing the address yourself, not through an advertisement or message link.\n2. Create your account and enter your passport details exactly as printed.\n3. Choose the services you want: visa only, or a package.\n4. Pay on the platform and keep the confirmation.\n5. Follow the instructions on the platform to receive your visa and plan your travel dates.`,
      },
      {
        heading: "Choosing an agent safely",
        body: `If you go through an agent, use one listed as accredited on the official platform rather than one found through social media. Ask for the booking reference and check that the visa appears in your own Nusuk account or on your visa document before you pay the full balance.`,
      },
      {
        heading: "What you should confirm yourself",
        body: `Visa fees, how long you may stay, age and accompanying-person rules, and health requirements are set by the Saudi authorities and can change. The Ministry's FAQ page lists these questions but its answers on those points were not available when we checked, so we do not print numbers for them. Read the requirements on the Nusuk platform for your nationality on the day you apply.`,
      },
    ],
  },

  {
    slug: "uae-tourist-entry-visa-on-arrival-or-apply",
    title: "UAE Tourist Entry: Visa on Arrival or Apply in Advance? (2026)",
    metaDescription:
      "How tourists enter the UAE: visa-free for GCC citizens, 30- and 90-day visas on arrival for some nationalities, advance application through ICP for the rest. The six-month passport rule and how to avoid fake sites.",
    category: "country-guide",
    publishedAt: "2026-10-23",
    lastVerified: "2026-10-23",
    readingTimeMinutes: 5,
    tags: ["uae visa", "dubai tourist visa", "visa on arrival", "ICP", "passport validity"],
    sources: [
      { label: "Do you need an entry permit or a visa to enter the UAE? — UAE Government portal (u.ae)", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae" },
      { label: "Federal Authority for Identity, Citizenship, Customs & Port Security (ICP)", url: "https://icp.gov.ae/en/" },
    ],
    sections: [
      {
        heading: "The four ways tourists enter",
        body: `The UAE government's portal describes these main routes for visitors:\n\n- **Visa-free entry for GCC citizens.** No visa, permit or sponsorship is needed. You show a GCC passport or national ID card.\n- **30-day visa on arrival,** issued at the border, with a 10-day grace period for extension.\n- **90-day visa on arrival,** issued at the border.\n- **Special case for Indian citizens:** a 14-day visa on arrival for holders of a normal passport who also hold a valid US visit visa, US green card, UK residence visa or EU residence visa, valid for at least six months from arrival.\n\nEveryone else must **apply for a visa in advance**.`,
      },
      {
        heading: "Which one applies to you",
        body: `The UAE portal does not list on that page which nationalities qualify for which visa on arrival, and the eligibility lists change over time. Check your own nationality with the **UAE embassy in your country** or your airline before you book, and do not assume a friend's experience applies to your passport.`,
      },
      {
        heading: "Passport rule",
        body: `Your passport must be valid for at least **six months from the date you enter the UAE**. Renew before you travel rather than hoping it is accepted.`,
      },
      {
        heading: "Applying in advance through ICP",
        body: `For the visa-in-advance route, ICP says to open the **Issuance of a Visa** service and click Start Service, which takes you to the Smart Services Platform login. ICP also offers the **UAEICP smart app**. The service issues an entry permit for a set period for tourism, a visit or treatment.\n\nFor eligibility and the document list, ICP directs applicants to its FAQ page at icp.gov.ae/en/faq/, its customer centres, the virtual assistant on the site, or the call centre on 600522222 inside the UAE and +971 600 522222 from outside.`,
      },
      {
        heading: "Fake calls and counterfeit websites",
        body: `ICP warns that fake calls and counterfeit websites use its name. Use only the Smart Services Platform or the UAEICP smart app, and type the web address yourself. A travel agent can apply for you, but you should still receive a visa document with your own details that you can check against your passport.`,
      },
      {
        heading: "Before you fly",
        body: `- Carry the visa or permit confirmation, your return or onward ticket and proof of where you are staying.\n- Confirm the visa length covers your whole trip, including any day you may travel onward.\n- Read the airline's own entry check requirements, since airlines may refuse boarding if documents are incomplete.\n\nNo visa fees are listed on the UAE government pages we checked, so we do not quote any. Confirm the fee on ICP's platform before you pay.`,
      },
    ],
  },

  {
    slug: "us-visa-application-fees-by-category",
    title: "US Visa Application Fees by Category: B-1/B-2, Student, Work and More",
    metaDescription:
      "The State Department's visa application (MRV) fees: $185 for B-1/B-2 and student visas, $205 for H, L, O, P, Q and R, $315 for E, $265 for K. Plus what to check about additional fees before you pay.",
    category: "country-guide",
    publishedAt: "2026-10-23",
    lastVerified: "2026-10-23",
    readingTimeMinutes: 4,
    tags: ["us visa fee", "MRV fee", "B1/B2", "F-1 visa", "H-1B visa fee"],
    sources: [
      { label: "Fees for Visa Services — US Department of State", url: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/fees-visa-services.html" },
    ],
    sections: [
      {
        heading: "The application fee depends on the visa category",
        body: `Everyone who applies for a US nonimmigrant visa pays the visa application fee (often called the MRV fee) before the interview. The US Department of State lists these amounts. The fee is **non-refundable**, even if the visa is refused.\n\n| Visa category | Application fee |\n|---|---|\n| B-1/B-2 visitor | $185 |\n| F (student) and M (vocational) | $185 |\n| H, L, O, P, Q, R (petition-based work visas) | $205 |\n| E (treaty trader/investor, Australian professional specialty) | $315 |\n| TN/TD | $185 |\n| K (fiancé(e) or spouse of a US citizen) | $265 |`,
      },
      {
        heading: "Other charges that can apply",
        body: `The State Department fee page also lists:\n\n- A **$500 fraud prevention and detection fee** for L visas, charged to the principal applicant only.\n- A **$4,500 fee** for certain blanket L-1 petitioners.\n- **Visa issuance fees** (reciprocity fees) that vary by country and visa type. Check the State Department's Visa Reciprocity Tables for your nationality.\n\nStudents also pay the SEVIS I-901 fee separately, and employers pay petition fees to USCIS for work visas. Those are different from the application fee.`,
      },
      {
        heading: "A note on the visa integrity fee",
        body: `A US law passed in 2025 provides for an additional "visa integrity fee" on nonimmigrant visas. The State Department fee page we checked on 23 October 2026 does not mention it, so we cannot confirm from that page when it is collected or how much applies to each category. Before you pay anything, read the current fee page and your embassy's instructions, and budget for the possibility of an additional charge.`,
      },
      {
        heading: "How to pay safely",
        body: `Pay only through the payment method that the embassy or its official appointment site tells you to use. Keep the payment receipt, since you may need to show it. Do not pay anyone who contacts you offering to speed up an interview slot, because the State Department does not sell priority appointments.`,
      },
      {
        heading: "Does the fee include the interview?",
        body: `The fee covers the application and the interview slot, but not the visa itself being granted. If the visa is refused you must pay the fee again to reapply. Prepare carefully before you book so you only pay once.`,
      },
    ],
  },

  {
    slug: "slovakia-student-visa-residence-permit",
    title: "Slovakia Student Visa: National Visa, Residence Permit, Documents and Work Rules",
    metaDescription:
      "How non-EU students get to study in Slovakia: the national D visa versus the temporary residence permit for study, documents, how to show financial means, fees, the 30-day decision time and work limits.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 8,
    tags: ["slovakia student visa", "study in slovakia", "temporary residence for study", "national visa", "non-EU students"],
    sources: [
      { label: "Foreign students in Slovakia — Ministry of Foreign and European Affairs of the Slovak Republic", url: "https://www.mzv.sk/en/web/en/visa-and-services/foreign-students-in-slovakia" },
      { label: "Student in Slovakia — EU Immigration Portal, European Commission", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-slovakia_en" },
    ],
    sections: [
      {
        heading: "Two things people mix up",
        body: `Studying in Slovakia as a non-EU citizen usually involves two documents, and the Slovak Ministry of Foreign Affairs describes them separately:\n\n- A **national visa**, which lets you travel to Slovakia.\n- A **temporary residence permit for study**, which lets you live and study there for the length of your course.\n\nYou can go straight for the residence permit at a Slovak embassy, or enter on a national visa and apply for the permit at the Foreign Police in Slovakia. Which route you use depends on your embassy and your university, so ask both.`,
      },
      {
        heading: "Do you need a permit for the first 90 days?",
        body: `No study residence permit is needed for your first 90 days if you meet the Schengen Borders Code conditions for entry and report your arrival to the Foreign Police within three working days. For a full degree you will need the permit, because it covers your whole course.`,
      },
      {
        heading: "Option 1: The national visa",
        body: `The ministry lists these basic documents:\n\n- Completed national visa application form.\n- Passport valid for at least **90 days after you leave Slovakia**.\n- A 3 × 3.5 cm colour photo.\n- A document confirming the purpose of your stay, for example the admission letter.\n- Health insurance for at least the validity of the visa.\n\nSubmit it at the Slovak embassy responsible for your country of residence, or through an external service provider the ministry has designated. The embassy decides within **30 days**.\n\nFees listed by the ministry:\n\n| Visa purpose | Fee |\n|---|---|\n| Visa tied to a residence permit granted in Slovakia | €14 |\n| Visa to apply for a residence permit at the Foreign Police in Slovakia | €90 |\n| Other specified interests, such as treaty obligations | €50 |\n\nConfirm which fee applies to you with your embassy.`,
      },
      {
        heading: "Option 2: The temporary residence permit for study",
        body: `You can apply at a Slovak embassy for your citizenship or residence, where there is a personal interview, or at the Foreign Police if you are already in Slovakia on a valid legal basis. You must apply in person.\n\nDocuments:\n\n- A recent 3 × 3.5 cm colour photo and a valid travel document.\n- **Proof of admission** from an accredited Slovak institution (this one may be older than 90 days).\n- A **criminal record extract** from your home country and from any country where you stayed more than 90 days within six consecutive months in the past three years.\n- **Proof of financial security**.\n- Proof of accommodation, which is not required for university students.\n\nForeign documents need an apostille or superlegalisation and an official **Slovak translation**. Submit certified copies, since embassies and the Foreign Police do not return documents. Documents generally must not be more than 90 days old when you apply.`,
      },
      {
        heading: "How to prove you can pay",
        body: `The ministry accepts any one of these:\n\n- A **bank statement from the last three months** in your name.\n- A scholarship award confirmation.\n- A confirmation from the statutory body of a legal entity that it will fund your stay.\n- An **affidavit from a person who will support you**, with that person's bank statement from the last three months.\n\nNeither official page gives a minimum amount, so ask your embassy what balance it expects.`,
      },
      {
        heading: "Decision time, length and what you must do afterwards",
        body: `The Foreign Police decide within **30 days**. The permit is granted for the expected length of your studies, up to six years, and can be renewed for up to five years while you keep studying.\n\nAfter approval:\n\n- Arrive in Slovakia within **180 days** of the permit being granted.\n- Report your arrival to the Foreign Police within **three working days**.\n- Get **health insurance** within three working days of collecting your permit.\n- Submit a **medical certificate** (dated no more than 30 days earlier) within 30 days of collecting the permit.\n- Spend more than half of each calendar year in Slovakia, unless you are on mobility in another EU state.`,
      },
      {
        heading: "Work, renewal and after graduation",
        body: `University students may work up to **20 hours per week** without a work permit (the ministry describes this as up to 80 hours per month). Secondary and language students may work up to 10 hours per week. More than that means changing your residence purpose to employment.\n\nTo renew, apply in person before your current permit expires with a valid passport, a photo, proof of continued study, proof of financial means and a €10 fee. University graduates may renew for nine months to look for work or start a business, and have a 30-day protective period after studies end.\n\nA study permit does not lead directly to long-term residence. Study time counts as half, so you would first need another residence purpose.`,
      },
      {
        heading: "Checklist before you apply",
        body: `1. Admission letter from the university.\n2. Passport valid long enough, plus photos.\n3. Criminal record extract, apostilled and translated.\n4. Bank statements from the last three months, or your sponsor's affidavit and statements.\n5. Health insurance.\n6. Booking confirmed with your embassy or service provider. Some embassies take appointments only through the university, so ask early.`,
      },
    ],
  },

  {
    slug: "new-zealand-student-visa-extension-fee-funds",
    title: "New Zealand Student Visa: Extending, Fees, Funds and Processing Time",
    metaDescription:
      "Immigration New Zealand's fee-paying student visa: fee from NZD $850, NZD $20,000 a year in living funds, 80% of applications decided in 7 weeks, and how to extend by applying for a new student visa.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 6,
    tags: ["new zealand student visa", "student visa extension", "fee paying student visa", "nz visa processing time", "immigration new zealand"],
    sources: [
      { label: "Fee Paying Student Visa — Immigration New Zealand", url: "https://www.immigration.govt.nz/visas/fee-paying-student-visa/" },
      { label: "Student visa wait times — Immigration New Zealand", url: "https://www.immigration.govt.nz/process-to-apply/waiting-for-a-visa/processing-a-visa-application/how-long-it-takes-to-process-an-application/student-visa-wait-times/" },
    ],
    sections: [
      {
        heading: "Cost and processing time",
        body: `Immigration New Zealand lists the **fee-paying student visa** fee as starting from **NZD $850**. It states that **80% of applications are decided within 7 weeks**. Time varies through the year, so apply early and check the wait-times page on the day you apply.\n\nThe visa is normally issued for the period you have paid for, or until your passport expires if that is sooner, for up to **four years**. It can be shorter than your course.`,
      },
      {
        heading: "How to extend a student visa",
        body: `Immigration New Zealand does not describe a separate "extension" form. If you already hold a student visa you **apply for another student visa** and provide evidence of your **academic progress and attendance**. Start before your current visa expires.\n\nIf your passport is about to expire, renew it and then either apply for a new student visa or have the remaining balance of your visa transferred to the new passport.\n\nIf you apply from inside New Zealand you will normally receive **multiple-entry travel conditions**. Without them, leaving New Zealand ends your visa.`,
      },
      {
        heading: "Money you must show",
        body: `If you are paying for yourself, Immigration New Zealand requires living-cost funds of:\n\n| Study type | Funds |\n|---|---|\n| Tertiary, English language or other non-compulsory study (one year or more) | NZD $20,000 per year |\n| Same, for under one year | NZD $1,667 per month |\n| Compulsory education (Years 1 to 13) | NZD $17,000 per year, or $1,417 per month |\n\nYou must also have paid tuition for **one course or one year of study, whichever is shorter**, unless you are exempt, and have money for a **ticket out of New Zealand**, separate from living costs.`,
      },
      {
        heading: "Other requirements",
        body: `- An offer of place from an approved education provider that has signed the Pastoral Care Code of Practice 2021.\n- Good health and good character.\n- A genuine reason to study in New Zealand.\n- Acceptable medical and travel insurance for your whole stay.\n- Evidence that you can leave New Zealand at the end of your stay.\n- Children under 10 need a parent or legal guardian with them unless they live in an approved hostel.\n\nDependants cannot be included in your application.`,
      },
      {
        heading: "Working while you study",
        body: `You can work part-time up to **25 hours a week** during study. Full-time work during scheduled holidays depends on your visa conditions and requires a course valued at 120 credits. Ages 16 and 17 need written permission from a parent or guardian and the education provider. Practical work experience required by your course is in addition to these hours.`,
      },
      {
        heading: "Common reasons for delay",
        body: `- Applying close to the course start date in the busy intake.\n- Missing evidence of attendance or progress when extending.\n- Funds that are not clearly in your own name or a named sponsor's name.\n- A passport that will expire before your course ends.\n\nChecking your visa conditions and expiry in your online account before term ends gives you time to renew without a gap.`,
      },
    ],
  },

  {
    slug: "netherlands-highly-skilled-migrant-salary-2026",
    title: "Netherlands Work Permit 2026: Highly Skilled Migrant and EU Blue Card Salary Requirements",
    metaDescription:
      "The 2026 IND salary thresholds for the Dutch highly skilled migrant permit and EU Blue Card: €5,942 a month for age 30 or over, €4,357 under 30, €3,122 for recent graduates. A table and what counts as salary.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 5,
    tags: ["netherlands work permit", "highly skilled migrant", "EU blue card", "IND", "dutch work visa"],
    sources: [
      { label: "Required amounts (income requirements) — IND, Netherlands Immigration and Naturalisation Service", url: "https://ind.nl/en/required-amounts-income-requirements" },
      { label: "Highly skilled migrants — Government of the Netherlands", url: "https://www.government.nl/themes/migration-and-travel/immigration-to-the-netherlands/options-for-entrepreneurs-and-employees-from-abroad/highly-skilled-migrants" },
    ],
    sections: [
      {
        heading: "How the highly skilled migrant route works",
        body: `The Netherlands does not let an individual apply for a highly skilled migrant residence permit on their own. A **recognised Dutch employer sponsors you** and applies to the IND on your behalf. The main test is a **minimum gross monthly salary** that depends on your age and situation.\n\nThe IND publishes new amounts every year. The figures below are the **2026 amounts** on the IND's required-amounts page.`,
      },
      {
        heading: "2026 gross monthly salary requirements",
        body: `| Category | First permit | Extension, same employer | Change of employer |\n|---|---|---|---|\n| Highly skilled migrant, reduced salary criterion | €3,122 | €3,122 | €3,122 |\n| Highly skilled migrant, under 30 | €4,357 | €4,357 | €4,357 if still under 30, €5,942 if 30 or older |\n| Highly skilled migrant, 30 or older | €5,942 | €5,942 | €5,942 |\n| EU Blue Card | €5,942 | €5,942 | €5,942 |\n| EU Blue Card, reduced salary criterion | €4,754 | €4,754 | €4,754 |`,
      },
      {
        heading: "Who gets the reduced salary criterion",
        body: `The reduced criterion generally applies to **recent graduates, doctoral degree holders and researchers** who apply within **three years** of graduating, being promoted or finishing a research permit. Check the IND's page to see whether you qualify, since the conditions are specific.`,
      },
      {
        heading: "What counts as salary",
        body: `The IND counts certain fixed allowances toward the salary criterion, for example a thirteenth month paid in monthly instalments, but **holiday allowance is not counted**. Ask your employer to state the gross monthly figure in the contract in a way the IND will accept, since a salary that is only just below the threshold will be refused.\n\nThe IND page does not give amounts for intra-corporate transferees, so look them up separately if that is your route.`,
      },
      {
        heading: "What to do as a candidate",
        body: `1. Find employers that are **recognised sponsors**. The IND keeps a public register.\n2. Check the offer against the right row in the table for your age and category.\n3. Ask the employer to start the IND application.\n4. Gather your passport, degree documents and any proof the employer asks for.\n\nThe Dutch government also announced in July 2025 that it intends to tighten the highly skilled migrant scheme. Check the IND for changes before you rely on a figure.`,
      },
    ],
  },

  {
    slug: "italy-student-visa-universitaly-processing-time-funds",
    title: "Italian Student Visa 2026/27: Universitaly, Processing Time and Funds",
    metaDescription:
      "How the Italian national study visa (type D) works for 2026/27: pre-enrolment on Universitaly, applying between 6 months and 15 days before travel, up to 90 days processing, the 30 November 2026 deadline and funds.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 7,
    tags: ["italian student visa", "universitaly", "italy study visa", "visa processing time", "type D visa"],
    sources: [
      { label: "Student visa guidelines and university enrolment checklist 2026/27 — Embassy of Italy in Abu Dhabi", url: "https://ambabudhabi.esteri.it/wp-content/uploads/2026/07/GUIDELINES-and-UNIVERSITY-ENROLMENT-CHECKLIST-2026-27_rev2.pdf" },
      { label: "Study visas for 2025/26 — Embassy of Italy in Tel Aviv", url: "https://ambtelaviv.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/visti-studio-procedura-per-limmatricolazione-e-visti-anno-accademico-2025-2026/" },
      { label: "Universitaly portal", url: "https://www.universitaly.it/" },
    ],
    sections: [
      {
        heading: "Italian missions publish their own rules",
        body: `Italy's study visa (type D) is applied for at the Italian embassy or consulate in your country, and each mission publishes its own guidance. The figures below come from the 2026/27 guidelines of the **Embassy of Italy in Abu Dhabi** and the 2025/26 page of the **Embassy of Italy in Tel Aviv**. Some details differ between missions and between years, so always read the page for the consulate that will handle your application.`,
      },
      {
        heading: "Step 1: Pre-enrol on Universitaly",
        body: `Pre-enrolment is done online on **universitaly.it**. You can submit only **one pre-enrolment, for one university and one course**. After the university approves it, you receive an email telling you to contact the embassy. Only after that do you apply for the visa.\n\nTo pre-enrol you typically upload a passport copy, your qualification with the legalisation and Italian translation the university asks for, and a language certificate if the course requires one. Some courses, such as architecture, also need a separate admission exam.`,
      },
      {
        heading: "Step 2: Apply for the visa",
        body: `For 2026/27, the Abu Dhabi guidelines say:\n\n- Apply **no more than six months and no less than 15 days** before your planned travel date.\n- Students enrolling in a university course must submit the application by **30 November 2026**, even if they will attend classes online.\n- Processing can take **up to 90 calendar days**.\n\nThe 2025/26 Tel Aviv page asked students to apply at least 15 days before departure and to submit by 30 November 2025, and does not state a processing time. If you are asking how long the Italian student visa takes, the safest planning figure is the up-to-90-days published by the mission above, so apply as early as the window allows.`,
      },
      {
        heading: "Funds you must show",
        body: `The published minimum differs by mission and year:\n\n| Mission and year | Minimum funds shown |\n|---|---|\n| Abu Dhabi, 2026/27 | €10,179.85 per year |\n| Tel Aviv, 2025/26 | €534.41 per month, €6,947.33 per year |\n\nBoth also ask for separate proof of funds for repatriation or a return ticket. The Abu Dhabi guidelines add that only financial resources located in the UAE are accepted, which is a local rule, not a general one. Ask your consulate for the amount and the type of accounts it accepts before you move money.`,
      },
      {
        heading: "Documents most missions ask for",
        body: `- Signed visa application form and a passport photo.\n- Passport valid for at least 90 days beyond the visa period, with blank pages.\n- The **Universitaly admission letter** from your approved pre-enrolment.\n- Proof of funds, plus proof of repatriation funds.\n- **Proof of accommodation** in Italy (the Abu Dhabi list asks for a stay of at least 30 days).\n- **Health insurance** with full hospitalisation cover.\n- Proof that your qualification is genuine, such as a Declaration of Value, legalisation or a CIMEA verification, translated into Italian by a recognised translator.\n- Language proof if your course requires it. For 2026/27 the Abu Dhabi list asks B1 for Foundation courses taught in Italian, B2 for other Italian-taught courses and a B2 certificate for English-taught courses.\n- Any required admission test result, such as IMAT for medicine.`,
      },
      {
        heading: "After you arrive",
        body: `You must apply for a **residence permit** (permesso di soggiorno) at the local police headquarters within **eight days** of arriving in Italy, according to the Tel Aviv guidance. Keep your documents together for that appointment.\n\nVisa fees are not stated in the pages we checked for 2026/27, and the Tel Aviv fee was only valid until 30 September 2025, so confirm the current fee with your consulate.`,
      },
    ],
  },

  {
    slug: "belgium-student-visa-d-financial-requirements",
    title: "Belgium Student Visa (Visa D): Financial Requirements, Documents and Timeline",
    metaDescription:
      "The Belgian Visa D for higher-education students: at least €835 a month for scholarship or blocked-account proof, documents, applying up to 6 months ahead, and an example processing time of up to 2 weeks.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 5,
    tags: ["belgium student visa", "visa D", "blocked account belgium", "annex 32", "study in belgium"],
    sources: [
      { label: "D visa for students of higher education — Embassy of Belgium in Japan (Belgian federal diplomacy site)", url: "https://japan.diplomatie.belgium.be/en/travel-belgium/visa-belgium/types-visa/d-visa-students-higher-education-minimum-stay-91-days" },
      { label: "Student's pledge (annex 32) — Belgian diplomacy site", url: "https://unitedarabemirates.diplomatie.belgium.be/en/travel-belgium/visa-belgium/students-pledge-annex-32" },
    ],
    sections: [
      {
        heading: "Which visa",
        body: `Students going to Belgium for a higher-education course of more than 90 days need a **D visa (long stay)**. It is applied for at the Belgian embassy or consulate responsible for your place of residence, and each mission publishes its own checklist. The details below come from the Belgian embassy in Japan, which is part of the federal diplomacy website. Treat it as a worked example and check your own mission's list.`,
      },
      {
        heading: "How much money you must show",
        body: `The embassy page lists three ways to prove means of support:\n\n- A **grant or scholarship** covering at least **€835 per month**.\n- A **blocked account** held at the university, with an attestation from the institution. The page notes monthly repayments of at least €835 after you arrive, or proof of legal, ancillary paid income.\n- A **pledge of financial support** (the student's pledge, annex 32), in which someone commits to cover your costs.\n\nWhich of these your embassy accepts, and the exact amount, can differ, so ask the mission before you transfer money to a blocked account.`,
      },
      {
        heading: "Documents on the embassy list",
        body: `- Visa application form, printed from the online system and signed to match your passport.\n- Passport issued in the last 10 years, valid at least three months beyond the visa, with three blank consecutive pages.\n- Three passport photos meeting ICAO standards.\n- **Criminal record certificate** for applicants aged 18 or over, apostille-legalised.\n- **Medical certificate** with test results.\n- **Admission letter** from the university.\n- Enrolment certificate if you are studying now, or a graduation certificate if not.\n- **Proof of sufficient means** (above).\n- A CV.\n- Proof you paid the administration fee, for applicants aged 18 or over.\n- Travel health insurance is optional on that list, with a minimum cover of €30,000.\n\nCopies must be A4 and single-sided. Faxed or emailed documents are not accepted unless the embassy says otherwise.`,
      },
      {
        heading: "When to apply and how long it takes",
        body: `You can submit a complete application **up to six months before** the start of your studies. The Tokyo embassy page says a complete file takes **up to two weeks** to process. Other missions may differ, so allow extra time for document legalisation, which is usually the slowest part.\n\nAn online application form and an electronic appointment are required. Since 1 March 2025 that embassy accepts only electronic payments, not cash.`,
      },
      {
        heading: "Fees",
        body: `The embassy page does not print the visa fee amount. It notes the visa is free for some nationalities by agreement and links to a pricing page. The administration fee for the Belgian Immigration Office applies to applicants aged 18 or over. Read the pricing page for your mission before paying.`,
      },
    ],
  },

  {
    slug: "singapore-visit-visa-who-needs-apply-fees",
    title: "Singapore Visit Visa: Who Needs One, How to Apply and What the Fee Page Says",
    metaDescription:
      "ICA's rules for a Singapore entry visa: which passport holders need one, why you cannot apply at the immigration counter, how an agent or overseas mission applies for you, and what a visa does not guarantee.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 4,
    tags: ["singapore visa", "singapore visit visa", "ICA singapore", "singapore tourist visa fee", "entry visa"],
    sources: [
      { label: "Visa requirements — Immigration & Checkpoints Authority (ICA), Singapore", url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements" },
    ],
    sections: [
      {
        heading: "Do you need a visa?",
        body: `Singapore's Immigration & Checkpoints Authority (ICA) says you need an entry visa if your travel document was issued by one of the countries or places on its list. That list includes, among others, Afghanistan, Iraq, Pakistan, Russia, Syria and Yemen. You also need one if you travel on a refugee travel document, an alien's passport, a Palestinian Authority passport, a UAE temporary passport, a Hong Kong Document of Identity, a Macao Travel Permit or a PRC Travel Document.\n\nEvery traveller, of any age, must hold an **individually issued travel document**. Collective documents are not accepted.\n\nCheck ICA's visa-requirements page for your nationality, since the full list is long and changes.`,
      },
      {
        heading: "Transit instead of a full visa",
        body: `Some nationals, including certain Indian and Ukrainian passport holders and selected PRC nationals, may be eligible for a **Visa-Free Transit Facility** if they are only passing through Singapore. That is for transit, not for a holiday visit.`,
      },
      {
        heading: "How to apply",
        body: `ICA does **not** accept visa applications at immigration counters. Apply in advance:\n\n- If you have a **Local Contact** in Singapore with a Singpass or Corppass account, that person can apply for you online.\n- Otherwise, use an **authorised visa agent** appointed by a Singapore Overseas Mission, or apply through the **nearest Singapore Overseas Mission**.\n\nFor detailed procedures, check with the Singapore mission for your country.`,
      },
      {
        heading: "About the fee",
        body: `ICA's page does not state the visa fee, processing time or validity. Fees are set and collected through the application channel, so the amount can depend on whether you apply through a mission or an agent, and agents may add their own service charge. Ask the mission or the agent for a full written price before you pay, and be careful of sites that quote a price with no link to an official body.`,
      },
      {
        heading: "A visa does not guarantee entry",
        body: `ICA is clear on two points:\n\n- A Singapore entry visa is **not an immigration pass**. Having one does not guarantee entry.\n- How long you may stay is **not tied to the visa's validity**. An ICA officer sets your period of stay when you enter, and it appears on your electronic Visit Pass (e-Pass).\n\nIf you need to stay longer than the period you were given, you must apply for a **Short-Term Visit Pass (STVP) extension** before it ends.`,
      },
    ],
  },
];
