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

  {
    slug: "germany-opportunity-card-requirements-funds",
    title: "Germany Opportunity Card (Chancenkarte): Requirements, Funds and Work Rules",
    metaDescription:
      "How to qualify for Germany's Opportunity Card job-search visa: the skilled-worker route or 6 points, German A1 or English B2, proof of funds of €1,091 a month (€13,092 a year), and the 20-hour part-time work allowance.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 6,
    tags: ["opportunity card germany", "chancenkarte", "germany job seeker visa", "points system", "proof of funds"],
    sources: [
      { label: "National visa for job search “Opportunity Card” (May 2026) — German Missions in the USA, germany.info", url: "https://www.germany.info/resource/blob/2663778/ab8cb2c068d1819dd3822b81231fe0b9/opportunity-card-data.pdf" },
      { label: "At a Glance: Job Search Opportunity Card — Make it in Germany", url: "https://www.make-it-in-germany.com/fileadmin/1_Rebrush_2022/a_Fachkraefte/PDF-Dateien/3_Visum_u_Aufenthalt/Visagrafik_EN/Chancenkarte_zur_Jobsuche_EN.pdf" },
      { label: "Opportunity card (Chancenkarte) — Service Berlin", url: "https://service.berlin.de/dienstleistung/354301/en/" },
    ],
    sections: [
      {
        heading: "What the Opportunity Card is",
        body: `The Opportunity Card (Chancenkarte) is a German **national visa for job search**. It lets qualified people from outside the EU come to Germany to look for work. It is issued for a **maximum of one year**.\n\nThe details below come from the German missions' May 2026 information sheet. Each embassy or consulate publishes its own appointment and payment instructions, so use the page for the mission that will handle your application.`,
      },
      {
        heading: "Who is eligible: two routes",
        body: `You need to meet **one** of these:\n\n- **Route 1, recognised skilled worker.** You hold a foreign qualification that is fully recognised in Germany, or a German university degree or vocational qualification.\n- **Route 2, points.** You reach **at least 6 points** and you have completed vocational or academic training that is recognised in the country where you obtained it. Vocational training must have required at least **two years**.\n\nOn the points route you also need **language proof**: German at CEFR level **A1** or English at CEFR level **B2**. Native speakers of English are usually exempt from English proof.\n\nThe mission's sheet does not print the points table or the age and experience criteria. It refers applicants to the official **Self-Check on make-it-in-germany.com**, which calculates your points.`,
      },
      {
        heading: "How much money you must show",
        body: `You must prove you can support yourself:\n\n| Requirement | Amount |\n|---|---|\n| Per month | €1,091 |\n| For at least one year | €13,092 |\n\nAccepted ways to show it include:\n\n- A **blocked account**.\n- **Three months of account statements** showing your name and address.\n- A formal **obligation letter** (declaration of commitment).\n- A **part-time work contract in Germany** of up to 20 hours per week.\n\nThis is a higher monthly figure than the student blocked account, which is separate.`,
      },
      {
        heading: "Working while you search",
        body: `On the Opportunity Card you may:\n\n- Look for work or for self-employment.\n- Hold one or more **part-time jobs totalling up to 20 hours per week**.\n- Do **job trials of up to two weeks per employer**.\n\nIf you find a qualifying job you then change to the appropriate work residence permit in Germany.`,
      },
      {
        heading: "Documents on the checklist",
        body: `- Completed and signed visa application and the signed declaration.\n- One recent biometric passport photo.\n- A signed passport valid at least **three months beyond** your intended stay, with at least two blank pages, issued (not extended) in the last 10 years.\n- Proof of your residence status in the country where you apply.\n- Proof of address.\n- **Qualification documents**: certificates, degrees, transcripts if the degree does not list courses, and recognition proof where required.\n- **Proof of funds** as above.\n- **Health insurance** covering entry into the Schengen area and your whole stay.\n\nThe mission asks that documents are not stapled and are submitted in the order of its list.`,
      },
      {
        heading: "What it costs",
        body: `The information sheet does not state an amount for the visa fee. It says the processing fee is paid at the appointment, in cash and/or by card depending on the mission, and that you should confirm the method and amount with the German mission before your appointment.`,
      },
      {
        heading: "How to apply",
        body: `1. Check your eligibility and score on the official Self-Check.\n2. Gather qualification and funds documents. Get foreign certificates checked for recognition if the route needs it.\n3. Book an appointment with the German mission responsible for you, or use the online application it offers.\n4. Submit your documents in order and pay the fee as the mission directs.\n\nBecause rules and fees for visas change, read the current instructions of your mission before you go.`,
      },
    ],
  },

  {
    slug: "canada-express-entry-how-it-works",
    title: "Canada Express Entry: How It Works, Programs and the CRS Score",
    metaDescription:
      "IRCC's Express Entry explained: the three programs (Canadian Experience Class, Federal Skilled Worker, Federal Skilled Trades), the four steps from profile to decision, how the CRS ranks candidates and the 60-day profile limit.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 5,
    tags: ["express entry", "canada pr", "CRS score", "skilled worker", "IRCC"],
    sources: [
      { label: "Immigrate through Express Entry — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" },
      { label: "Express Entry: Create your profile and enter the pool — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/create-profile.html" },
      { label: "Express Entry: Category-based selection — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations/category-based-selection.html" },
    ],
    sections: [
      {
        heading: "What Express Entry is",
        body: `Express Entry is the online system IRCC uses to manage applications for permanent residence from skilled workers. It is **not a separate visa**. It is the way three federal programs are managed:\n\n- **Canadian Experience Class**\n- **Federal Skilled Worker Program**\n- **Federal Skilled Trades Program**\n\nIf you qualify for more than one, IRCC considers you in that order. You cannot choose the program.`,
      },
      {
        heading: "The four steps",
        body: `1. **Create a profile and enter the pool.** You sign in to your IRCC secure account, enter your personal details and submit your profile. IRCC then determines which programs you qualify for.\n2. **Get invited.** Candidates with the highest scores are invited to apply in rounds.\n3. **Complete the application.** If you are invited, you submit a full application with your documents.\n4. **IRCC decides.** IRCC reviews the application and makes a decision.\n\nYou have **60 days to complete and submit your Express Entry profile** once you start. If you miss that, you must start again. Your information is saved, so you can exit and resume.`,
      },
      {
        heading: "What the CRS score is",
        body: `Your profile is ranked with the **Comprehensive Ranking System (CRS)**. It is based on factors such as your skills and work experience, and a valid job offer can improve your score. The people with the highest scores receive invitations.\n\nIRCC offers a tool to calculate your CRS score before you enter the pool. The cut-off in each invitation round changes, so look at the most recent round results rather than assuming a number.`,
      },
      {
        heading: "Category-based rounds",
        body: `Besides general rounds, IRCC runs **category-based selection** rounds that invite candidates with specific characteristics, such as certain work experience or language skills. IRCC publishes the categories and round details on its category-based selection page. Check it to see whether your background matches a category.`,
      },
      {
        heading: "Proof of funds and documents",
        body: `Prepare these documents early:\n\n- Language test results.\n- Education credentials, and an assessment if the education is from outside Canada.\n- Job offers, if you have any.\n- Police certificates.\n- **Proof of funds**.\n\nIRCC updates the required settlement funds every year, based on 50% of the low income cut-off totals, and notes that you may need to update your proof of funds in your profile to stay eligible. Check the current table on the IRCC site before you file, since the amounts depend on family size.`,
      },
      {
        heading: "Processing time and fees",
        body: `IRCC says processing time **varies by program** and links to its processing-time checker. We do not print a figure because it changes. The application fees for the principal applicant, a spouse and a dependent child are listed on IRCC's fee page, which you should read on the day you apply.\n\nA lawyer or consultant is not needed to submit an Express Entry profile. If you do hire someone, make sure they are authorised to represent you.`,
      },
    ],
  },

  {
    slug: "uae-golden-visa-requirements-categories",
    title: "UAE Golden Visa: Categories, Requirements and How Long It Lasts",
    metaDescription:
      "UAE Golden Visa explained from the government portal: 5 or 10 year residence for investors (AED 2 million), entrepreneurs, specialised talents, outstanding students and frontline heroes — and the benefits.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 5,
    tags: ["uae golden visa", "dubai golden visa", "long term residence", "investor visa", "uae residence"],
    sources: [
      { label: "Golden Visa — UAE Government portal (u.ae)", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa" },
      { label: "Federal Authority for Identity, Citizenship, Customs & Port Security (ICP)", url: "https://icp.gov.ae/en/" },
    ],
    sections: [
      {
        heading: "What the Golden Visa is",
        body: `The UAE Golden Visa is a **long-term residence visa for foreign talent**. The UAE government portal says it is valid for **5 or 10 years depending on the category**, and it does not need a sponsor. It is renewable.`,
      },
      {
        heading: "Categories at a glance",
        body: `| Category | Validity | Main requirement |\n|---|---|---|\n| Investors | 10 years for public investments, 5 years for real estate | Minimum capital of AED 2 million; own property, or put money into an establishment paying at least AED 250,000 in annual taxes |\n| Entrepreneurs | 5 years | Proof of an innovative or technical project, documents showing its value, and a letter from a business incubator or relevant emirate authority |\n| Exceptional talent or rare specialisations | 10 years | Varies by subcategory; may include recommendation letters, practical experience or accredited degrees |\n| Outstanding students | 5 years for high-school achievers, 10 years for top university students | Certificates of excellence and recommendation letters |\n| Humanitarian pioneers and frontline heroes | 10 years | Certificates of appreciation, proof of humanitarian contributions, or at least 5 years of service |`,
      },
      {
        heading: "Who counts as exceptional talent",
        body: `The portal lists doctors, scientists, inventors, creatives, executives, athletes, PhD holders and specialists in priority scientific and engineering fields as examples. The documents you need depend on the subcategory, for example a recommendation letter from the relevant authority or an accredited degree. Creative applicants can request a recommendation letter from the Ministry of Culture.`,
      },
      {
        heading: "What the visa gives you",
        body: `- A **renewable residence visa** valid for 5 or 10 years.\n- **No sponsor** needed.\n- You can stay **outside the UAE for longer than the usual six-month limit** without losing the visa.\n- You can **sponsor family members**, including your spouse and children.`,
      },
      {
        heading: "How to apply",
        body: `The portal does not give step-by-step instructions on that page. It points to these official digital services:\n\n- The **ICP eServices** dashboard for Golden Visa applications.\n- The **ICP eligibility checker**.\n- **GDRFA** Golden Visa services (the emirate-level residency authority).\n- The Ministry of Culture, for a recommendation letter for creatives.\n\nUse only these official channels. Third-party sites that promise a guaranteed Golden Visa are not the government, so check the web address before you enter any details or pay a fee.`,
      },
      {
        heading: "Check before you invest",
        body: `The investor thresholds and eligible property types are set by UAE authorities and can change. Read the current requirement on the ICP or GDRFA service page, and verify the exact value and ownership conditions with the authority before you buy property for the purpose of a visa.`,
      },
    ],
  },

  {
    slug: "spain-digital-nomad-visa-requirements",
    title: "Spain Digital Nomad Visa: Income Requirement, Documents and Processing",
    metaDescription:
      "The Spanish digital nomad (telework) visa: who qualifies, minimum income of 200% of the monthly minimum wage, the 20% Spanish-client limit, documents, validity of up to one year and the 10-day legal decision period.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 6,
    tags: ["spain digital nomad visa", "telework visa", "remote work visa", "spain residence", "digital nomad"],
    sources: [
      { label: "Digital Nomad Visa — Consulate General of Spain in London (Spanish Ministry of Foreign Affairs)", url: "https://www.exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Digital-Nomad-Visa.aspx" },
      { label: "Telework Visa (Digital Nomad Visa) — Consulate of Spain in Houston", url: "https://www.exteriores.gob.es/Consulados/houston/en/ServiciosConsulares/Paginas/Consular/TELEWORK-Visa-(Digital-Nomad-Visa)-.aspx" },
    ],
    sections: [
      {
        heading: "Who can apply",
        body: `Spain's telework visa, popularly called the digital nomad visa, is for people who work **remotely for a company outside Spain**, or who are self-employed, and who work **only through computer and telecommunication systems**.\n\nSelf-employed applicants may also work for a Spanish company, but that work must be **no more than 20% of their professional activity**.\n\nYou also need **either** a degree from a university or business school of recognised standing **or** at least **three years of work experience** in your current field. A spouse or unmarried partner, dependent children and dependent relatives in the ascending line can be included.`,
      },
      {
        heading: "Minimum income",
        body: `The consulate lists a minimum income of:\n\n- **200% of the Spanish monthly minimum wage (SMI)** for the main applicant.\n- **An extra 75% of the SMI** for the first family member.\n- **An extra 25% of the SMI** for each further family member.\n\nThe consulate page does not state a euro amount, and the minimum wage is updated each year. Look up the current SMI and multiply it yourself, then check the figure with your consulate before you apply.`,
      },
      {
        heading: "Work contract and employer documents",
        body: `- **Employees:** a company certificate stating the contract length, explicit consent to work remotely in Spain, and the salary.\n- **Self-employed:** a certificate stating the contract length and the terms for remote work in Spain.\n- Proof that you have worked for the foreign company for **at least three months** before applying.\n- A certificate of the company's creation date and business type, where the consulate asks for it.`,
      },
      {
        heading: "Other documents",
        body: `The London consulate's list includes:\n\n- A completed national visa application form and a recent passport photo.\n- A passport valid for **at least one year**, with two blank pages, issued in the last 10 years.\n- A **criminal record certificate**, generally no older than six months, with a declaration covering the last five years.\n- **Health insurance** covering the risks of Spain's public health system, or a registered S1 form.\n- A **NIE number**, which must be obtained before applying.\n- Degree or employment-history proof of three years of experience.\n- Family relationship documents where applicable.\n\nForeign documents must be legalised or apostilled and, where needed, officially translated into Spanish. Some items on this list are specific to people living in the UK, such as the UK residence permit and proof of residence in the consular district, so use the list from the consulate that covers your country.`,
      },
      {
        heading: "Decision time, validity and refusals",
        body: `The legal decision period is **10 days**, which can be extended if the consulate asks for an interview or more documents. The visa is valid for **up to one year**, or the length of the residence and work authorisation granted, whichever is shorter. Collect it within one month of notification.\n\nA refusal is notified in writing. You can ask the consulate to reconsider within **one month**, or appeal to the High Court of Justice of Madrid within **two months**.\n\nFees are paid at submission in the local currency and change over time. The consulate page links to its list instead of printing an amount.`,
      },
    ],
  },

  {
    slug: "visa-bank-statement-how-many-months",
    title: "How Many Months of Bank Statements Do Visa Offices Ask For?",
    metaDescription:
      "Canada asks for at least 6 months of bank statements for a tourist visa, Slovakia accepts a statement from the last 3 months, Germany's Opportunity Card accepts 3 months. What each official source says, and why rules differ.",
    category: "country-guide",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 4,
    tags: ["bank statement for visa", "proof of funds", "how many months", "visa documents", "financial evidence"],
    sources: [
      { label: "Apply for a visitor visa — IRCC (Canada)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html" },
      { label: "Foreign students in Slovakia — Ministry of Foreign and European Affairs, Slovakia", url: "https://www.mzv.sk/en/web/en/visa-and-services/foreign-students-in-slovakia" },
      { label: "National visa for job search “Opportunity Card” — German missions, germany.info", url: "https://www.germany.info/resource/blob/2663778/ab8cb2c068d1819dd3822b81231fe0b9/opportunity-card-data.pdf" },
    ],
    sections: [
      {
        heading: "There is no single rule",
        body: `There is no worldwide standard for how many months of bank statements a visa needs. Each country, and often each embassy or visa type, sets its own. The honest answer to "how many months of bank statement for a visa" is therefore: **whatever the visa office handling your application says**, and the number below is only what we have confirmed on official pages.`,
      },
      {
        heading: "What official pages say",
        body: `| Visa | What the official source asks | Source |\n|---|---|---|\n| Canada, visitor visa for tourism | Bank statements covering **at least 6 months** (recommended with a travel history, itinerary and employer letter) | IRCC |\n| Slovakia, study residence permit | A bank statement from the **last three months** in your name; documents from a sponsor must not be older than 90 days | Slovak Ministry of Foreign Affairs |\n| Germany, Opportunity Card | **Three months of account statements** showing your name and address, as one accepted way to prove funds | German missions |\n\nThe three cases above are different visas, so their numbers should not be compared like for like.`,
      },
      {
        heading: "What officers actually look at",
        body: `The number of months is a minimum. What the officer reads is:\n\n- **Regular income** that matches what you say you earn.\n- **A balance that covers the trip or course**, not a sudden large deposit.\n- **Your name and address** on the statement, and the bank's stamp or a downloaded statement that shows the account number clearly.\n- **Consistency** with your other documents, such as employer letters and tax records.\n\nA large deposit shortly before applying without an explanation is a common reason for questions.`,
      },
      {
        heading: "Tips",
        body: `1. Read the checklist for the exact visa and embassy you are using. Print the page date.\n2. Request statements up to the most recent full month, so they are not out of date by the time you apply.\n3. If you receive money from a sponsor, add a sponsor statement and proof of the relationship.\n4. If an unusual deposit appears, add a short written explanation with proof, for example a sale document.\n5. Keep scans legible and in the order the checklist gives.`,
      },
      {
        heading: "When the official page gives no number",
        body: `Some official pages simply say "proof of sufficient funds" without naming a period. In that case the number of months is up to the consulate. Ask it directly, or follow the tourist rule of thumb from similar official pages, usually three to six months, but make clear that this is a guess and not a rule.`,
      },
    ],
  },

  {
    slug: "ireland-short-stay-business-visa-c",
    title: "Ireland Business Visa (Short Stay C): Fee, Documents and Processing Time",
    metaDescription:
      "How to apply for Ireland's short stay (C) business visa: €60 single-entry fee, the 14-day work limit, the AVATS online process, 6 months of bank statements, and the roughly 8-week decision time.",
    category: "country-guide",
    publishedAt: "2026-10-25",
    lastVerified: "2026-10-25",
    readingTimeMinutes: 6,
    tags: ["ireland business visa", "short stay C visa", "AVATS", "irish visa fee", "ireland visa documents"],
    sources: [
      { label: "Short stay business visa — Immigration Service Delivery, Ireland", url: "https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-less-than-90-days/short-stay-business-visa/" },
      { label: "Giving your details on AVATS — Immigration Service Delivery", url: "https://www.irishimmigration.ie/coming-to-visit-ireland/giving-your-details-on-avats-for-a-visa-preclearance-application/" },
    ],
    sections: [
      {
        heading: "What the visa covers",
        body: `Ireland's short stay **business visa (type C)** is for travellers from visa-required countries who need to do job-related activities in Ireland for a short time. Each traveller needs their own visa, and applicants under 18 apply through a parent or legal guardian.\n\nThe key limit is time: the work must **start and end within a single 14-day period**. Work of **15 days or more** is not covered, and work in more than one 14-day period within 90 days needs separate permission through the **Atypical Working Scheme**. The visa also does not let you rely on Irish public services such as public hospitals.`,
      },
      {
        heading: "Fee",
        body: `| Visa | Fee |\n|---|---|\n| Single entry | €60 |\n| Multiple entry (approved only in limited circumstances) | €100 |\n\nExtra charges, such as consular fees, may apply, and the fee is **non-refundable**, even if the visa is refused.`,
      },
      {
        heading: "How to apply: AVATS in four steps",
        body: `1. **Create an online application in AVATS.** Choose visa type "Short Stay (C)", reason for travel "Business", and journey type single or multiple.\n2. **Note your Visa Application Transaction Number** and print the summary sheets.\n3. **Pay the fee** by the method your application office accepts.\n4. **Send your documents** to the office on your summary sheet within **30 days** of creating the AVATS application.\n\nApply about **three months before** you travel.`,
      },
      {
        heading: "Documents on the Irish checklist",
        body: `- Signed and dated AVATS summary sheets.\n- A signed **cover letter** stating your purpose, travel dates, family in the EU/EEA or Switzerland, and your commitments to follow the visa conditions, avoid public services and leave on time.\n- A **written invitation from each Irish host**, including a statement on who pays what.\n- Accommodation confirmations, or host letters with a utility bill dated within six months as proof of the host's address.\n- A **current passport valid at least six months** beyond your planned departure, plus copies of all previous passports.\n- Two passport photos, signed and labelled with your transaction number.\n- **Proof of funds**, for example an original, certified bank statement covering the **last six months**.\n- **Proof of ties** to your home country, such as employer letters, payslips, business records, or family and property documents.\n- Details and original letters for any past visa refusals.\n- Certified English or Irish translations of any other-language documents.\n\nDocuments must be originals unless the checklist says otherwise. Travel or medical insurance is required before you travel.`,
      },
      {
        heading: "How long it takes",
        body: `A decision is generally expected about **eight weeks** after your documents are received. The Dublin office publishes waiting times weekly on Tuesdays, so check that page before you plan a fixed meeting date.`,
      },
      {
        heading: "After approval, and if you are refused",
        body: `A visa lets you **travel** to Ireland but does not guarantee entry, and an immigration officer can still refuse you. Permission to stay can last up to **90 days**, shown on your landing stamp. Extensions are granted only in exceptional circumstances that arise after arrival.\n\nThe Irish site states that **refusals of this visa cannot be appealed**. You would need to submit a new application, so fix the problem named in the refusal before you reapply.`,
      },
    ],
  },

  {
    slug: "norway-visa-refused-appeal-process",
    title: "Norway Visa Refused: How to Appeal and the Deadlines That Apply",
    metaDescription:
      "If Norway refuses your visa: visa appeals go first to the embassy that refused you, UDI decides if it disagrees, and there is no further appeal. What UDI says about the 3-week limit, fee, documents and Schengen fee of €90.",
    category: "country-guide",
    publishedAt: "2026-10-25",
    lastVerified: "2026-10-25",
    readingTimeMinutes: 5,
    tags: ["norway visa rejection", "norway visa appeal", "UDI", "schengen visa refused", "norway visa fee"],
    sources: [
      { label: "Appealing a decision — Norwegian Directorate of Immigration (UDI)", url: "https://www.udi.no/en/word-definitions/appealing-a-decision/" },
      { label: "Visitor's visa — Norway in Canada (Norwegian foreign service)", url: "https://www.norway.no/en/canada/services-info/visitors-visa-res-permit/visitors-visa/" },
    ],
    sections: [
      {
        heading: "Visa refusals follow a different appeal route",
        body: `The Norwegian Directorate of Immigration (UDI) explains the general appeal process for residence permits and other cases, and then states that **visa refusals work differently**. An appeal of a visa decision goes **first to the Norwegian embassy or consulate that made the decision**. That mission will either **approve the visa** or **forward your appeal to UDI**.\n\nIf **UDI agrees with the refusal**, there is **no further appeal**. You can always apply again.`,
      },
      {
        heading: "The deadline",
        body: `UDI's general rule is that you must appeal **within three weeks** of receiving the decision letter. For a visa refusal, read your **refusal letter** closely: it states how and where to send the appeal, and the deadline that applies to your case. If the letter says three weeks, count from the day you or your representative received it.`,
      },
      {
        heading: "What an appeal must contain",
        body: `UDI says an appeal must be **in writing and signed**, in **Norwegian or English**, and should:\n\n- Name the decision you are contesting and say **how it should be changed**.\n- Give your **reasons**.\n- Include your **case reference numbers** shown on the decision letter.\n- Attach **any new information or documents**. Without new documents, an appeal is likely to be rejected.\n\nThere is **no fee** to appeal. If you cannot gather all documents in time, UDI says to file before the deadline, explain the delay, and you can get up to **two more weeks** to submit them.\n\nThe address or upload route for a visa appeal depends on the mission. If a Norwegian consulate refused you, send the appeal as its rejection letter says, by email or courier. If UDI refused you, upload the appeal through the UDI website.`,
      },
      {
        heading: "Or apply again",
        body: `Because a visa appeal is decided on the evidence you already gave plus anything new, many applicants do better by **fixing the weakness and reapplying**. The Norwegian pages do not list refusal reasons, but missing or inconsistent documents delay processing. Check the reasons ticked on your refusal letter and address each one.`,
      },
      {
        heading: "Fee, timing and rules for a new application",
        body: `The Schengen visa fee for Norway is **€90** for adults. Children under six pay nothing and children aged six to under 12 pay €45, and family members of EU/EEA citizens do not pay. A visa centre may add a service fee, for example VFS in Canada charges a service fee and a courier fee on top, so check the total at your own mission.\n\nOther rules stated on the Norwegian foreign service page:\n\n- A stay of up to **90 days in any 180-day period** across the Schengen area.\n- Apply up to **six months before** departure, ideally at least **four weeks** ahead and no later than 15 days before.\n- A passport valid at least **three months** past your Schengen departure.\n- Travel health insurance of at least **€30,000**, valid in all Schengen countries.\n- Processing usually takes up to **15 calendar days** after the consulate receives your application, and up to **45 days** if the case is sent to UDI.`,
      },
    ],
  },

  {
    slug: "mexico-visa-requirements-financial-proof",
    title: "Mexico Visa Requirements: Who Needs One, Fee and Financial Proof by Visa Type",
    metaDescription:
      "Who can enter Mexico without a visa, the US$56 consular fee, and the financial proof a Mexican consulate lists for tourist, work, temporary resident, permanent resident and student visas — with the validity and 30-day resident-card rule.",
    category: "country-guide",
    publishedAt: "2026-10-25",
    lastVerified: "2026-10-25",
    readingTimeMinutes: 7,
    tags: ["mexico visa", "mexico visa requirements", "mexico temporary resident visa", "mexico permanent residency", "mexican consulate"],
    sources: [
      { label: "Visas (English) — Consulate General of Mexico in Boston", url: "https://consulmex.sre.gob.mx/boston/index.php/visas-english" },
    ],
    sections: [
      {
        heading: "Important: one consulate's rules",
        body: `The figures below come from the **Consulate General of Mexico in Boston**, which publishes them for its own district. Mexican consulates can differ in appointment method, fee currency and financial amounts, and the page itself says requirements may change without notice. Use them as a worked example and confirm with the consulate that covers your place of residence.`,
      },
      {
        heading: "Who does not need a visa",
        body: `For tourism or unpaid activities for **up to 180 days**, no visa is needed if you:\n\n- hold an approved **APEC Business Travel Card**, or\n- are a citizen or permanent resident of the **US, Canada, Japan, the UK, a Schengen country, Chile or Colombia**, or\n- have a **valid visa** from one of those countries in your passport.\n\nThe consulate warns that some US documents, for example EAD cards, I-797 forms, Advance Parole and I-20 or DS-2019 forms, are **not accepted** for entry. Mexico does not apply a six-month passport-validity rule, but your passport, visas and residence cards must stay valid for the whole trip.`,
      },
      {
        heading: "Fees",
        body: `The consular fee is **US$56 in cash** for any visa type, and each reapplication needs a new payment. The **work visa** also requires a **US$313 immigration fee** in cash.\n\nThe page gives no general processing time for an initial visa. It does warn: **do not buy your flight ticket before you hold the visa**.`,
      },
      {
        heading: "Financial proof by visa type",
        body: `Amounts are as listed by the consulate. In most cases you choose at least one option.\n\n| Visa type | Financial proof options |\n|---|---|\n| Non-paid activities (tourist, business, transit), up to 180 days | Balance of US$4,500 over 3 months; or US$1,500 monthly income over 3 months plus a year of stable employment; or students with US$900 monthly income and transcripts |\n| Work (lucrative activities) | Employer must start the process with Mexico's immigration institute (INM) and obtain an authorisation number; you also need a contract or employer letter stating salary and position |\n| Temporary resident | US$75,100 balance over 12 months; or US$4,500 monthly income over 6 months plus a year of employment; or property in Mexico worth more than US$600,500; or marriage to a Mexican national. Remote workers need an original, signed employer letter |\n| Permanent resident | Only for retirees or pensioners, or those with a qualifying family tie. US$300,200 balance over 12 months; or US$7,500 monthly pension over 6 months; or being a parent of a Mexican citizen |\n| Student | Signed acceptance letter from the school; US$15,000 balance over 3 months; or income of US$1,500 over 3 months; or a full scholarship. The page lists an age limit of 25 or younger |`,
      },
      {
        heading: "Dependents, translations and minors",
        body: `- The primary applicant needs an extra **US$1,500** (after taxes) per dependent, plus a marriage or birth certificate.\n- Documents from other countries need an **apostille or legalisation** and an official Spanish translation.\n- Minors attend with a parent or guardian, or with a notarised authorisation.\n- Each family member needs a **separate appointment**.`,
      },
      {
        heading: "Validity and the 30-day resident-card step",
        body: `Residence visas (work, permanent, temporary, student) are valid for **six months and one entry**. After you enter Mexico you have **30 days** to get your resident card at an INM office. A visa issued to replace a lost resident card is likely valid for 30 days and one entry, as set by INM.`,
      },
      {
        heading: "If your visa is refused",
        body: `The consulate page does not describe an appeal. It says an appointment or document submission does not guarantee approval and that missing documents can cause delays or denial. To reapply you pay the fee again, so fix the missing proof first.\n\nThis page covers the consulate in Boston only. Appointments at that office are requested by email at least **three months** before travel and are not booked through the MiConsulado app, so follow the booking rules of your own consulate.`,
      },
    ],
  },

  {
    slug: "czech-employee-card-and-visa-fees",
    title: "Czech Republic Employee Card and Visa Fees: Requirements and Processing",
    metaDescription:
      "The Czech Employee Card for non-EU workers: vacancy reference number, documents, apply at a Czech mission, a 60-day legal decision time (up to 90) and the fees — €90 Schengen, CZK 2,500 long-stay, CZK 5,000 employee card.",
    category: "country-guide",
    publishedAt: "2026-10-25",
    lastVerified: "2026-10-25",
    readingTimeMinutes: 6,
    tags: ["czech employee card", "czech work visa", "czechia visa", "czech visa fees", "long stay visa"],
    sources: [
      { label: "Employee Card — Ministry of Foreign Affairs of the Czech Republic", url: "https://mzv.gov.cz/jnp/en/information_for_aliens/long_stay_visa/employment_card.html" },
      { label: "Visa Fees — Ministry of Foreign Affairs of the Czech Republic", url: "https://mzv.gov.cz/jnp/en/information_for_aliens/visa_fee_schedule/index.html" },
    ],
    sections: [
      {
        heading: "What the Employee Card is",
        body: `The **Employee Card** is the Czech work permit card for non-EU workers. It is **issued for a specific job position** and for employment lasting **more than three months**. Citizens of EU countries, Iceland, Liechtenstein, Norway and Switzerland do not need one, nor do family members as defined by Czech law or people with free access to the labour market. Shorter or seasonal work uses other visa types.\n\nYou also need a **vacancy reference number** from the central vacancies database run by the Labour Office. Each position open to foreign nationals shows a reference number beside the job title.`,
      },
      {
        heading: "Documents",
        body: `The Czech Ministry of Foreign Affairs lists:\n\n- A **passport** and a completed Employee Card application form.\n- **Two photos** and **biometric data** (fingerprints).\n- An **employment contract, work agreement or letter of intent** showing pay at or above the minimum wage and **at least 15 hours of work per week**.\n- An **employment permit**, if the position requires one.\n- **Proof of professional competence**, such as education or qualifications.\n- **Proof of accommodation** and a **criminal record extract**.\n- The fee.\n\nTravel medical insurance is needed only **after** the visa is approved. Applicants in the targeted economic migration programme may submit an employer's declaration instead of some documents.\n\nMost supporting documents must be **no older than 180 days**. Foreign public documents need an apostille or superlegalisation and a Czech translation. The passport and purpose-of-stay documents must be originals, and incomplete applications are not processed.`,
      },
      {
        heading: "Where to apply and how long it takes",
        body: `Apply **in person at the Czech diplomatic mission** with competence for your location, after booking an appointment (usually by email or phone). The mission forwards your application to the **Ministry of the Interior**, which decides it.\n\nThe **legal time limit is 60 days**, which can extend to **90 days** in exceptional cases or when the Labour Office must give an opinion.`,
      },
      {
        heading: "After approval",
        body: `If approved you receive a **single-entry long-stay visa valid for 60 days** so you can collect the card. Within that period you visit the local Ministry of the Interior branch, where biometrics are taken and the card is issued. The Czech page does not state how long the card itself is valid. You can apply to extend it at the local branch before it expires. The card also lets you move in the Schengen Area for up to 90 days in any 180-day period for non-gainful purposes.`,
      },
      {
        heading: "Czech visa fees",
        body: `Fees are paid when you **submit** the application, are **not refunded** if the visa is refused, and can be paid in cash, by card or by bank transfer in EUR or local currency.\n\n| Visa or card | Fee |\n|---|---|\n| Schengen visa (types C, A) | €90 |\n| Schengen visa, children 6 to 11 | €45 (under 6 free) |\n| Long-term visa or residence permit (type D) | CZK 2,500 |\n| Employee Card, Blue Card, intra-company transfer card or entrepreneurship visa | CZK 5,000 |\n\nA reduced Schengen fee of €35 applies to citizens of several countries, including Ukraine, Serbia, Georgia and Armenia. Some nationalities, such as Albania, Japan, South Africa and Turkey, have free long-term visas, and some pay different amounts. Check the Ministry's schedule for your nationality.`,
      },
    ],
  },

  {
    slug: "serbia-visa-requirements-how-to-apply",
    title: "Serbia Visa Requirements: Visa-Free Rules, Visa C and D, and How to Apply",
    metaDescription:
      "Serbia's Ministry of Foreign Affairs rules: who can enter visa-free with a Schengen, UK, EU or US visa, the difference between Visa C (90 days) and Visa D (90 to 180 days), applying online via welcometoserbia.gov.rs and the documents required.",
    category: "country-guide",
    publishedAt: "2026-10-25",
    lastVerified: "2026-10-25",
    readingTimeMinutes: 5,
    tags: ["serbia visa", "serbia tourist visa", "serbia visa requirements", "welcometoserbia", "visa C visa D"],
    sources: [
      { label: "Visa Requirements — Ministry of Foreign Affairs of the Republic of Serbia", url: "https://www.mfa.gov.rs/en/citizens/travel-serbia/visa-requirements" },
    ],
    sections: [
      {
        heading: "Visa-free entry with another visa",
        body: `Serbia's Ministry of Foreign Affairs says holders of **most national passports** can enter, transit and stay **without a Serbian visa** if they hold a **valid Schengen, UK, EU Member State or US visa**. People with a **residence permit** in the Schengen area, the EU or the US also qualify.\n\nVisa-free stays are limited to **90 days within any six-month period**, and the other visa or residence permit must still be valid. **Emergency travel documents** and travel documents issued under international conventions are excluded.\n\nCheck whether your nationality is eligible on the Ministry's page, since the rule applies to holders of most, not all, passports.`,
      },
      {
        heading: "Visa C and Visa D",
        body: `| Visa | For | Length |\n|---|---|---|\n| **Visa C (short stay)** | Tourism, business or other travel | Up to 90 days in any 180-day period; one, two or multiple entries |\n| **Visa D (long stay)** | Employment, education or family reunification | 90 to 180 days; generally needed by those who plan to apply for a temporary residence permit |`,
      },
      {
        heading: "How to apply",
        body: `You can apply:\n\n- **In person** at a Serbian embassy or consulate abroad, or\n- **Online** through **welcometoserbia.gov.rs**. Online applications need a registered account on **eid.gov.rs**.\n\nSince **23 April 2025**, Serbia also issues **Digital Travel Authorizations** to nationals of countries where the service is enabled. Applicants from other countries receive a visa sticker.`,
      },
      {
        heading: "Documents",
        body: `- A completed application form and a passport photo (3.5 × 4.5 cm).\n- A passport valid **at least 90 days beyond** your planned departure, with at least two consecutive blank pages, issued within the last 10 years.\n- The **visa fee**.\n- **Proof of the purpose** of your stay.\n- An **invitation letter**, depending on purpose: a certified one for a private visit, one from a Serbian company for business, or travel-agency payment proof for tourism.\n- Valid **travel medical insurance**.\n\nShort-stay applicants should also show **funds** for accommodation and living costs and evidence of **intent to leave** Serbia before the visa expires. A transit visa needs an entry visa for your next destination or documents explaining your onward travel. Missions may ask for extra documents, and incomplete applications are not accepted.`,
      },
      {
        heading: "Fees and processing time",
        body: `The Ministry's visa-requirements page does **not** list the visa fee or the processing time. Contact the nearest Serbian diplomatic mission for both, and be wary of sites that quote a price without a link to the Ministry or a Serbian mission.`,
      },
    ],
  },
];
