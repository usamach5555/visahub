/**
 * Country-specific content overrides for top 20 high-traffic pages.
 * Keyed by "{countrySlug}-{visaType}" or "{countrySlug}-hub" for country hub pages.
 * These replace/extend the generic templates in page-content.ts.
 */

export interface ContentOverride {
  faqs?: { question: string; answer: string }[];
  rejectionReasons?: string[];
  extraSections?: { heading: string; body: string }[];
  officialSources?: { label: string; url: string }[];
}

export const COUNTRY_OVERRIDES: Record<string, ContentOverride> = {

  // ─── USA STUDY VISA ────────────────────────────────────────────────────────
  "usa-study": {
    officialSources: [
      { label: "US Student Visa (F-1) — State Department", url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" },
      { label: "SEVIS I-901 Fee Payment", url: "https://www.fmjfee.com/i901fee/index.html" },
      { label: "DS-160 Online Application Form", url: "https://ceac.state.gov/genniv/" },
      { label: "SEVP-Certified School Search", url: "https://studyinthestates.dhs.gov/school-search" },
      { label: "US Visa Interview Wait Times", url: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html" },
      { label: "OPT/CPT Work Authorization — USCIS", url: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors" },
      { label: "Check I-94 After Arrival", url: "https://i94.cbp.dhs.gov" },
    ],
    faqs: [
      {
        question: "What is the SEVIS fee and how much does it cost for an F-1 student visa?",
        answer: "The SEVIS (Student and Exchange Visitor Information System) I-901 fee is USD 350 for F-1 and M-1 student visa applicants (J-1 exchange visitors pay USD 220). Pay at fmjfee.com using your SEVIS ID number — the 11-digit number starting with 'N' printed on the top right of your Form I-20. Pay at least 3 business days before your visa interview so the payment appears in the US Embassy's SEVIS query system. Keep the printed I-901 receipt and bring it to your interview. The SEVIS fee is separate from and in addition to the USD 185 MRV visa application fee.",
      },
      {
        question: "What is the F-1 visa financial requirement — how much money do I need to show?",
        answer: "There is no fixed minimum, but you must demonstrate you can cover: (1) full tuition for your program (varies by university — typically USD 15,000–55,000 per year for private universities, USD 10,000–30,000 for public), (2) living expenses (approximately USD 12,000–20,000 per year depending on city), and (3) return travel. The I-20 your university issues shows the 'estimated cost of attendance' — this is the number the consular officer uses. Evidence: 6 months of original bank statements showing consistent balances, salary slips of sponsor, fixed deposit certificates, property documents, scholarship award letters. Sudden large deposits just before application are scrutinized heavily — funds must show a history of accumulation.",
      },
      {
        question: "What is the difference between an F-1 visa and a J-1 visa for students?",
        answer: "F-1 is the standard student visa for degree programs and English language courses at SEVP-certified institutions. J-1 is an exchange visitor visa used for government-sponsored programs, university exchange programs, and research positions — it carries a 2-year home residency requirement for many J-1 holders (meaning you must return home for 2 years before applying for an H-1B or immigrant visa). F-1 has no such requirement and is the preferred pathway for most international students planning to work in the US after graduation via OPT. F-1 SEVIS fee: USD 350. J-1 SEVIS fee: USD 220.",
      },
      {
        question: "Can I work in the US on an F-1 student visa?",
        answer: "F-1 students may work on campus up to 20 hours per week during academic term (full-time during official breaks) without any additional authorization. Off-campus work requires authorization: Curricular Practical Training (CPT) allows work directly related to your major during your studies — authorized by your university DSO, no USCIS filing required. Optional Practical Training (OPT) allows 12 months of work authorization after graduation (or during studies for pre-completion OPT). STEM degree holders can extend OPT by 24 additional months for a total of 36 months. Apply for OPT through USCIS (Form I-765) at least 90 days before your program end date — USCIS processing takes 3–5 months.",
      },
      {
        question: "What is the 214(b) refusal for US student visas and how do I avoid it?",
        answer: "Section 214(b) of the Immigration and Nationality Act presumes every nonimmigrant visa applicant intends to permanently immigrate to the US. The burden is on you to overcome this presumption by demonstrating strong ties to your home country. The most common reasons F-1 applications are refused under 214(b): no property or assets in your home country, no close family members remaining at home, no clear career plan requiring your return, prior US visa overstay by yourself or a family member, or a pending immigrant petition (I-130 filed by a US relative). Overcome it with: property deeds, family photos, employer letter confirming leave of absence and return, clear post-study career rationale specific to your home country.",
      },
      {
        question: "How long does it take to get a US F-1 student visa appointment?",
        answer: "Interview appointment wait times vary dramatically by country and consulate. As of 2026: India (all four consulates): 8–20 weeks. Nigeria (Lagos): 16–28 weeks. Pakistan (Islamabad): 10–20 weeks. Bangladesh (Dhaka): 12–20 weeks. Brazil (São Paulo): 4–10 weeks. Mexico (Mexico City): 2–6 weeks. Philippines (Manila): 4–10 weeks. China (Beijing/Shanghai): 4–12 weeks. UK, most EU countries: 1–4 weeks. Check real-time wait times at travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html. Apply for your appointment at least 5–6 months before your I-20 program start date if you are in a high-demand country.",
      },
      {
        question: "Can I change universities after getting an F-1 visa?",
        answer: "Yes. Transferring to a new SEVP-certified university on an F-1 visa is permitted. Process: your new university's DSO initiates the SEVIS transfer within 60 days of your program end date or graduation. Your SEVIS record moves to the new school. You do not need a new F-1 visa stamp unless you travel internationally — if your current visa is still valid and you re-enter the US on a valid I-20 from your new school, the existing visa is accepted. However, changing to a significantly different field of study or a lower academic level may require additional justification in future applications.",
      },
      {
        question: "What happens at the F-1 visa interview — what questions will I be asked?",
        answer: "F-1 visa interviews are typically 3–5 minutes. Officers focus on four areas: (1) Your study plan — why this specific university, why this specific program, what research shows you chose it carefully. (2) Financial capability — who is funding your studies, what is their income source, how long have those funds been maintained. (3) Non-immigrant intent — what are your plans after graduation, what career requires your return home. (4) Consistency — your answers must match your DS-160 exactly. Common questions: 'Why did you choose [university]?', 'What will you do after graduation?', 'Who is sponsoring your studies?', 'Have you been to the US before?', 'What was your GRE/GMAT/TOEFL score?'. Answer specifically — vague answers like 'good education' are red flags.",
      },
    ],
    rejectionReasons: [
      "Section 214(b) — Failed to demonstrate non-immigrant intent: no property, employment, or family ties to home country sufficient to ensure return",
      "SEVIS I-901 fee unpaid or payment not yet reflected in embassy system (allow 3 full business days minimum before interview)",
      "Interview answers inconsistent with DS-160 declarations — sponsor income, living situation, or travel history",
      "University is not SEVP-certified (verify at studyinthestates.dhs.gov/school-search before applying)",
      "Sponsor's income clearly insufficient to fund US tuition ($50,000–$80,000/year) plus living expenses without exceptional explanation",
      "Immigrant visa petition (I-130) filed by US relative creates documented immigrant intent contradicting F-1 non-immigrant purpose",
      "Prior US visa overstay — even a single day — permanently recorded in CBP database",
      "Program of study does not logically follow academic background with no credible career rationale",
      "Criminal record not disclosed on DS-160 or inconsistently described at interview",
      "Documents submitted as photocopies — US Embassy requires originals at interview window",
    ],
    extraSections: [
      {
        heading: "F-1 Visa Fees — Complete 2026 Cost Breakdown",
        body: `**Official Government Fees (non-refundable):**

| Fee | Amount | Where to Pay |
|---|---|---|
| SEVIS I-901 Fee | USD 350 | fmjfee.com |
| MRV Visa Application Fee | USD 185 | ustraveldocs.com |
| **Government Total** | **USD 535** | — |

**Additional Costs (vary by country):**

| Cost | Estimated Amount |
|---|---|
| VFS / OFC service charge | USD 15–45 |
| Biometric enrollment | Included in VFS fee (most countries) |
| Medical examination (if required) | USD 100–350 |
| Document translation (per document) | USD 20–80 |
| Courier (passport return) | USD 10–30 |
| Immigration consultant (optional) | USD 200–1,500 |
| **Total estimated range** | **USD 600–2,000** |

All fees are paid separately at different stages of the process. The SEVIS fee must be paid before scheduling your interview. The MRV fee must be paid before booking your appointment slot.`,
      },
      {
        heading: "F-1 vs J-1 Visa — Which Should You Apply For?",
        body: `Most international students apply for F-1, but understanding the difference is important:

| Feature | F-1 (Student) | J-1 (Exchange Visitor) |
|---|---|---|
| Who uses it | Most degree students, English programs | Government exchange, research, specific university programs |
| SEVIS fee | USD 350 | USD 220 |
| Post-study work | OPT: 12 months (+24 STEM extension) | J-1 Academic Training: up to 18 months |
| 2-year home residency rule | No | Yes, for many J-1 categories |
| Work during studies | On-campus (no auth needed), CPT/OPT off-campus | On-campus, Academic Training |
| Path to H-1B | Direct (no home residency) | Must get 212(e) waiver if home residency applies |
| Issued by | SEVP-certified school issues I-20 | Sponsor organization issues DS-2019 |

**Recommendation:** If you plan to work in the US after graduation, F-1 is almost always the better choice. J-1's 2-year home residency requirement (INA Section 212(e)) creates a barrier to H-1B and green card applications for many exchange visitors.`,
      },
      {
        heading: "US Student Visa Processing Times by Country (2026)",
        body: `Processing time has two components: (1) appointment wait time, and (2) post-interview processing. Most approvals happen at the interview window — the officer approves immediately. Administrative processing (221g) adds 2–12 weeks.

**Interview Wait Times (approximate, mid-2026):**

| Country | Wait Time | Notes |
|---|---|---|
| India | 8–20 weeks | Four consulates: New Delhi, Mumbai, Chennai, Hyderabad |
| Nigeria | 16–28 weeks | Lagos consulate — apply 6+ months early |
| Pakistan | 10–20 weeks | Islamabad and Karachi |
| Bangladesh | 12–20 weeks | Dhaka only |
| China | 4–12 weeks | Beijing, Shanghai, Guangzhou, Chengdu |
| Brazil | 4–10 weeks | São Paulo main hub |
| Mexico | 2–6 weeks | Multiple consulates |
| Philippines | 4–10 weeks | Manila |
| UK / EU | 1–4 weeks | Multiple locations |
| GCC countries | 2–6 weeks | Multiple US Embassies |

Check real-time wait times: travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html

**Recommendation:** Apply for your appointment at least 5 months before your I-20 program start date. Your I-20 can be issued up to 12 months before your program start date — request it as early as possible to allow time for application.`,
      },
    ],
  },

  // ─── USA WORK VISA ─────────────────────────────────────────────────────────
  "usa-work": {
    officialSources: [
      { label: "H-1B Specialty Occupation Visa — USCIS", url: "https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations" },
      { label: "H-1B Electronic Registration", url: "https://www.uscis.gov/forms/filing-guidance/h-1b-electronic-registration-process" },
      { label: "L-1 Intracompany Transferee Visa", url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/l-1a-intracompany-transferee-executive-or-manager" },
      { label: "O-1 Extraordinary Ability Visa", url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement" },
      { label: "PERM Labor Certification — DOL", url: "https://www.dol.gov/agencies/eta/foreign-labor/programs/permanent" },
      { label: "EB-2 National Interest Waiver", url: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2" },
      { label: "Prevailing Wage Determination", url: "https://www.dol.gov/agencies/eta/foreign-labor/wages" },
    ],
    faqs: [
      {
        question: "What is the H-1B lottery and what are my chances of being selected in 2026?",
        answer: "The H-1B visa has an annual cap of 85,000 visas (65,000 regular cap + 20,000 for US master's degree holders). Demand far exceeds supply — USCIS received approximately 470,000 unique registrations for FY2026, meaning overall lottery odds were roughly 18% for regular cap and 22% for master's cap. Process: your employer registers you in the electronic lottery (USCIS MyH-1B portal) during the registration window (typically first two weeks of March). If selected, your employer files the full H-1B petition. Registration fee: USD 215 per beneficiary (2024 rule). Petition fee: USD 730 (small employers) to USD 5,460 (large employers) plus premium processing USD 2,805 (optional, guarantees 15-business-day adjudication).",
      },
      {
        question: "What are the H-1B salary requirements for 2026?",
        answer: "H-1B employers must pay the higher of: (1) the actual wage paid to similar workers at the company, or (2) the prevailing wage for the occupation and location. The prevailing wage is determined by the Department of Labor based on OES wage data. It varies by occupation and geography — a Software Developer Level II position in San Francisco commands a prevailing wage of approximately USD 160,000–180,000, while the same position in rural Ohio may have a prevailing wage of USD 85,000–100,000. Paying below prevailing wage is an H-1B violation. Check prevailing wages at the DOL Foreign Labor Certification Data Center: flcdatacenter.com.",
      },
      {
        question: "What is the difference between H-1B, L-1, and O-1 work visas?",
        answer: "H-1B (Specialty Occupation): requires a US employer sponsor, a bachelor's degree or equivalent in the specialty, and subjects you to the annual lottery cap. Best for professional workers in tech, finance, engineering, medicine, etc. L-1 (Intracompany Transferee): requires you to have worked for the same company abroad for at least 1 year in the past 3 years. L-1A (managers/executives) leads to EB-1C green card. L-1B (specialized knowledge workers) does not qualify for EB-1C. No lottery. O-1 (Extraordinary Ability/Achievement): for individuals with extraordinary ability in sciences, arts, education, business, athletics, or extraordinary achievement in film/TV. Requires extensive documentation of awards, recognition, published work, high salary. No lottery, no annual cap. Difficult but powerful — no employer residency requirement for O-1A (sciences/business).",
      },
      {
        question: "What is the EB-2 National Interest Waiver (NIW) and who qualifies?",
        answer: "The EB-2 NIW allows professionals with advanced degrees or exceptional ability to petition for a US green card without an employer sponsor and without a PERM labor certification — by demonstrating that their work is in the national interest of the United States. Qualifications (Matter of Dhanasar, 2016 standard): (1) Your proposed endeavor has substantial merit and national importance, (2) You are well-positioned to advance that endeavor, (3) It would be beneficial to the US to waive job offer and labor certification requirements. Highly suited for: researchers with significant publications, STEM professionals with patent portfolios, physicians in underserved areas, entrepreneurs with documented business impact. Indian and Chinese nationals face multi-year waits due to per-country green card backlog — check the Visa Bulletin at travel.state.gov for current priority dates.",
      },
      {
        question: "Can I transfer my H-1B to a different employer?",
        answer: "Yes — H-1B portability allows you to start working for a new employer as soon as the new employer files an H-1B transfer petition (Form I-129), even before USCIS approves it, provided: your current H-1B is valid, the new petition is non-frivolous, and you are not in removal proceedings. This is one of the key advantages of H-1B status over other work visas. The new employer files the transfer petition; you do not need a new lottery selection if you already hold H-1B status. If you want to re-enter the US after traveling internationally during a transfer, make sure the original H-1B visa stamp is still valid or obtain a new stamp at a US Embassy.",
      },
      {
        question: "What is H-4 EAD and can my spouse work while I'm on H-1B?",
        answer: "H-4 EAD (Employment Authorization Document) allows spouses of H-1B holders to work in the US, but only when the H-1B primary holder has an approved I-140 immigrant petition (Form I-140, filed for employment-based green card). The H-4 EAD does not restrict occupation — spouses can work for any employer in any role. Apply using Form I-765 (Application for Employment Authorization). Processing: 3–6 months (or 15 business days with premium processing if filed concurrently with I-539). The H-4 EAD has been subject to regulatory challenges — confirm current status at uscis.gov before relying on this pathway.",
      },
    ],
    rejectionReasons: [
      "H-1B lottery not selected — the primary reason most H-1B candidates cannot obtain the visa in a given year (odds approximately 18% for regular cap)",
      "Job does not qualify as a 'specialty occupation' requiring a bachelor's degree in a specific field — USCIS scrutinizes IT consulting, business analyst, and marketing roles",
      "Employer failed to file Labor Condition Application (LCA) with Department of Labor before petition submission",
      "Offered salary below the prevailing wage for the occupation and work location as determined by DOL",
      "Employer is a staffing company placing the worker at a third-party client site — USCIS scrutinizes employer-employee relationship in these cases",
      "Educational credentials do not meet the 'bachelor's equivalent' standard for the specific position",
      "L-1 applicant did not work for the qualifying organization abroad for the required 1 year in the past 3 years",
      "O-1 petition lacked sufficient evidence of extraordinary ability — awards, publications, high salary comparators, critical role evidence",
      "PERM labor certification denied because US workers were available for the position during the recruitment period",
      "Change of status denied because applicant failed to maintain lawful status continuously between visas",
    ],
    extraSections: [
      {
        heading: "US Work Visa Comparison — H-1B vs L-1 vs O-1 vs TN",
        body: `| Feature | H-1B | L-1A/L-1B | O-1A/O-1B | TN (Canada/Mexico) |
|---|---|---|---|---|
| Annual cap | 85,000 | None | None | None |
| Lottery | Yes (March) | No | No | No |
| Employer required | Yes | Yes (same company) | Yes | Yes |
| Spouse work auth | H-4 EAD (if I-140 approved) | L-2 EAD | O-3 (no work) | TD (no work) |
| Duration | 3 years (6 max) | 3 years (7 max L-1A, 5 max L-1B) | 3 years (renewable) | 3 years (renewable) |
| Path to green card | EB-2 / EB-3 (with PERM) | EB-1C (L-1A managers) | EB-1A (extraordinary) | EB-2/EB-3 (with PERM) |
| Eligibility for Canada/Mexico nationals | Yes | Yes | Yes | Yes (TN only) |
| Typical processing | 3–6 months (15 days premium) | 3–6 months | 3–6 months | Same day at port of entry |

**TN Visa Note:** Canadian and Mexican nationals can obtain TN (Trade NAFTA/USMCA) status at the port of entry for qualifying professions (engineers, accountants, scientists, lawyers, etc.). No petition, no lottery, no waiting — but the role must match a TN profession category exactly.`,
      },
      {
        heading: "H-1B 2026 Fee Schedule (Official USCIS Fees)",
        body: `| Fee | Amount | Who Pays |
|---|---|---|
| I-129 Base Filing Fee (small employer, ≤25 FTE) | USD 730 | Employer |
| I-129 Base Filing Fee (large employer) | USD 730 | Employer |
| ACWIA Training Fee (1–25 FTE) | USD 750 | Employer |
| ACWIA Training Fee (26+ FTE) | USD 1,500 | Employer |
| Fraud Prevention and Detection Fee | USD 500 | Employer |
| USCIS Immigrant Fee (if cap-exempt) | USD 600 | Employer |
| Premium Processing Fee (optional, 15 business days) | USD 2,805 | Employer or employee |
| Electronic Registration Fee | USD 215 | Employer (per beneficiary) |
| **Typical total (large employer)** | **USD 4,330–7,135** | Employer (not payable by employee) |

Note: Under DOL regulations, H-1B workers generally cannot pay filing fees — doing so may constitute an illegal deduction from wages. The employer bears all petition costs.`,
      },
    ],
  },

  // ─── UK STUDY VISA ─────────────────────────────────────────────────────────
  "uk-study": {
    officialSources: [
      { label: "UK Student Visa — GOV.UK", url: "https://www.gov.uk/student-visa" },
      { label: "UK Visas & Immigration Fee Schedule", url: "https://www.gov.uk/government/publications/visa-regulations-revised-table" },
      { label: "NHS Immigration Health Surcharge Calculator", url: "https://www.gov.uk/healthcare-immigration-application" },
      { label: "Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "UKVI Approved English Test Providers", url: "https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt" },
      { label: "Graduate Route (post-study work)", url: "https://www.gov.uk/graduate-visa" },
      { label: "CAS (Confirmation of Acceptance for Studies) — UKVI", url: "https://www.gov.uk/guidance/confirm-acceptance-for-studies-guidance-for-sponsors" },
    ],
    faqs: [
      {
        question: "What is a CAS number and how do I get one for a UK student visa?",
        answer: "A CAS (Confirmation of Acceptance for Studies) is a unique 14-character reference number issued by your UK university through the UKVI Sponsorship Management System. Your university must be a UKVI-licensed Student sponsor to issue a CAS. The CAS confirms your unconditional offer, your course details, your tuition fee, and your English language qualification. You cannot apply for a UK Student visa without a CAS — it is the central document of your application. Universities typically issue CAS numbers 6–8 weeks before your course start date. Once issued, your CAS is valid for 6 months (you must submit your visa application within 6 months of CAS issuance). Include your CAS number on your online visa application.",
      },
      {
        question: "How much is the NHS Immigration Health Surcharge for UK student visa applicants?",
        answer: "The NHS Immigration Health Surcharge (IHS) is GBP 776 per year of your visa (as of 2024). It is paid upfront for the full duration of your visa when you submit your application online. Examples: 3-year undergraduate degree: GBP 776 × 3 = GBP 2,328. 1-year master's course: GBP 776 × 1 = GBP 776. 4-year degree with placement year: GBP 776 × 4 = GBP 3,104. The IHS gives you access to NHS healthcare on the same terms as UK residents — GP visits, hospital treatment, and prescriptions at UK resident rates. It is paid through the NHS Surcharge website during the visa application process. Children under 18 pay the same rate. Students on government scholarships covering healthcare may be exempt — check with your sponsor.",
      },
      {
        question: "What are the financial requirements for a UK student visa?",
        answer: "You must show you have held the required amount of money for a continuous period of 28 consecutive days (ending within 31 days of your application submission). The amounts for 2024–25: If studying in London: GBP 1,334 per month × 9 months = GBP 12,006 (for courses of 9+ months) or GBP 1,334 per month for shorter courses. If studying outside London: GBP 1,023 per month × 9 months = GBP 9,207. You must also cover your course fees if they have not already been paid or if your CAS does not confirm they have been paid. Acceptable evidence: personal or family bank statements showing the money held for 28 consecutive days. Funds can be in any currency — the GBP equivalent is assessed at the exchange rate on the closing date of your 28-day period.",
      },
      {
        question: "Can I work while studying in the UK on a student visa?",
        answer: "UK Student visa holders studying at degree level or above at a Higher Education Provider can work up to 20 hours per week during term time and full-time during official university vacations. Students at lower-level institutions (below degree level) are restricted to 10 hours per week. Work must not be as a self-employed person or entertainer, and work as a professional sportsperson is not permitted. After graduating, the Graduate Route visa allows 2 years of unrestricted work (3 years for PhD graduates) — you can apply from inside the UK without leaving. The Graduate Route is available to students who completed a degree at a Higher Education Provider with a valid Student visa.",
      },
      {
        question: "What IELTS score do I need for a UK student visa?",
        answer: "The English language requirement for a UK Student visa depends on your study level and institution. For UKVI purposes (the immigration requirement — separate from your university's academic requirement): minimum B2 level on the CEFR scale, equivalent to IELTS Academic 5.5 overall with no component below 5.5. Important distinction: UKVI requires IELTS for UKVI (the Secure English Language Test version) for most nationalities — this is a specific test variant different from standard IELTS Academic. Your university may require a higher score for academic purposes (typically IELTS 6.0–7.5 depending on program). Nationals of majority English-speaking countries (USA, Canada, Australia, New Zealand, etc.) are typically exempt from the language requirement. Check the UKVI-approved SELT (Secure English Language Test) providers at gov.uk.",
      },
      {
        question: "What is the Graduate Route visa and how do I apply after graduating from a UK university?",
        answer: "The Graduate Route is a post-study work visa allowing international graduates to remain in the UK to work or look for work for 2 years (3 years for PhD graduates). Eligibility: you must have successfully completed a degree, other graduate-level qualification, or PhD at a Higher Education Provider with a track record of compliance. Apply from inside the UK up to 3 months before your Student visa expires. Fee: GBP 822 (2024). NHS surcharge: GBP 776 per year (GBP 1,552 for 2 years, GBP 2,328 for 3 years). The Graduate Route does not require a job offer — you can work in any job at any salary level. After the Graduate Route, you can switch to a Skilled Worker visa if you have a qualifying job offer (minimum GBP 38,700 salary, or the going rate for the occupation).",
      },
      {
        question: "How long does a UK student visa take to process?",
        answer: "Standard processing time from outside the UK: 3 weeks (15 working days). Priority processing (available in most countries): 5 working days. Super Priority (available at selected UKVCAS locations): next working day. Processing is generally efficient — most straightforward applications are decided within the standard 3-week window. The processing clock starts when your biometric appointment is completed (not when you submit online). Apply no earlier than 3 months before your course start date and no earlier than 3 months before your CAS start date. During peak periods (July–September), additional volume can cause slight delays — apply early.",
      },
    ],
    rejectionReasons: [
      "CAS number invalid, expired (CAS expires 6 months from issue date), or course details inconsistent with application",
      "Financial evidence does not meet the 28-consecutive-day holding requirement — funds moved in or out of account during the 28-day window",
      "Financial amount insufficient — applicants frequently miscalculate by not including tuition fees that remain unpaid",
      "English language test not UKVI-approved (standard IELTS Academic not accepted — must be IELTS for UKVI or approved SELT)",
      "English language test score below B2 (IELTS 5.5 overall) or below 5.5 in any component",
      "University is not a licensed Student sponsor (UKVI licensed sponsors list at gov.uk/government/publications/register-of-licensed-sponsors-students)",
      "Previous UK visa refusal or overstay not declared — misrepresentation leads to mandatory ban",
      "Passport has less than 6 months validity beyond intended visa end date",
      "Criminal conviction not declared — even spent convictions may need to be disclosed depending on the country",
      "NHS surcharge payment failed or was not completed before submitting the application",
    ],
    extraSections: [
      {
        heading: "UK Student Visa — Complete Fee Breakdown 2024–2025",
        body: `| Fee Component | Amount | Notes |
|---|---|---|
| Visa application fee | GBP 490 | Paid online; non-refundable |
| NHS Immigration Health Surcharge | GBP 776 per year | Paid upfront for full visa duration |
| UKVCAS biometric appointment | GBP 0–200 | Standard appointments often free; enhanced locations cost more |
| Priority processing (optional) | GBP 250 extra | Reduces processing to 5 working days |
| Super Priority (optional) | GBP 800 extra | Next working day decision |
| IELTS for UKVI test | GBP 180–210 | If required for your nationality |
| **3-year degree example total** | **~GBP 3,018** | Visa fee + 3 years IHS (GBP 2,328) + biometrics |
| **1-year master's example total** | **~GBP 1,266** | Visa fee + 1 year IHS (GBP 776) + biometrics |

All fees are paid online through the UK Visas and Immigration (UKVI) application portal at apply.ukvisas.homeoffice.gov.uk. IHS is paid through the NHS Surcharge website (nhsbsa.nhs.uk/healthcare-immigration-application), linked from the visa application.`,
      },
      {
        heading: "UK Student Visa vs Graduate Route vs Skilled Worker — Pathway Comparison",
        body: `| Visa | When | Fee | Work Rights | Duration |
|---|---|---|---|---|
| Student Visa | Before arriving / studying | GBP 490 + IHS | 20 hrs/wk term-time, full-time holidays | Duration of course + 4 months |
| Graduate Route | After graduating (from inside UK) | GBP 822 + IHS | Unrestricted — any job, any salary | 2 years (3 for PhD) |
| Skilled Worker | After Graduate Route (job offer needed) | GBP 719–1,420 + IHS | Employer-specific | Up to 5 years, renewable |
| Indefinite Leave to Remain | After 5 years on qualifying visa | GBP 2,885 | Unrestricted | Permanent |

The standard pathway to UK settlement for international graduates: Student Visa → Graduate Route (2 years) → Skilled Worker Visa (3 years) → ILR after 5 continuous qualifying years. Citizenship (British naturalisation) requires 12 months ILR + 5 years total continuous UK residence.`,
      },
    ],
  },

  // ─── USA VISIT VISA ────────────────────────────────────────────────────────
  "usa-visit": {
    officialSources: [
      { label: "US Visitor Visa (B-1/B-2) — State Department", url: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html" },
      { label: "DS-160 Online Application", url: "https://ceac.state.gov/genniv/" },
      { label: "US Visa Appointment Wait Times", url: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html" },
      { label: "Interview Waiver (Drop Box) Eligibility", url: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/interview-waiver.html" },
      { label: "ESTA (Visa Waiver Program)", url: "https://esta.cbp.dhs.gov/" },
      { label: "Check I-94 Authorized Stay", url: "https://i94.cbp.dhs.gov" },
    ],
    faqs: [
      {
        question: "How long can I stay in the US on a B-2 tourist visa?",
        answer: "The B-2 visa stamp in your passport only shows when you can enter the US — it does not determine how long you can stay. Your authorized period of stay is determined by CBP (Customs and Border Protection) when you arrive and is recorded in your I-94 record. CBP typically grants up to 6 months (180 days) on a B-2 entry, but may grant less. Check your actual authorized stay at i94.cbp.dhs.gov within 24 hours of arrival. Overstaying your I-94 date — even by one day — creates a permanent record that can affect all future US visa applications.",
      },
      {
        question: "What is the 214(b) refusal for tourist visa applicants and how do I avoid it?",
        answer: "Section 214(b) of the US Immigration and Nationality Act presumes every B-2 applicant intends to immigrate permanently. You must prove otherwise. The most effective evidence of non-immigrant intent: property ownership in your home country, close family (spouse, children) remaining at home, stable employment with documented leave approval, business ownership, ongoing studies or academic enrollment. Common tourist visa refusal reasons: no property, no dependants, recently unemployed, vague travel purpose, prior US visa overstay, relative with pending I-130 immigration petition. A refusal under 214(b) is not a lifetime ban — you can reapply with stronger evidence.",
      },
      {
        question: "Am I eligible for the Visa Waiver Program (ESTA) instead of applying for a B-2 visa?",
        answer: "The Visa Waiver Program (VWP) allows citizens of 42 designated countries to travel to the US for up to 90 days for tourism or business without a visa, using ESTA authorization. Eligible countries include: UK, Germany, France, Australia, Japan, South Korea, Singapore, and most EU member states. ESTA authorization costs USD 21 and is applied for online at esta.cbp.dhs.gov. ESTA is denied if you have: visited Cuba, Iran, Iraq, Libya, North Korea, Somalia, Sudan, Syria, or Yemen since 2011; been arrested (even without conviction); overstayed a previous US admission; had a prior US visa refusal. If denied ESTA, you must apply for a B-2 visa. Check your eligibility at the official list before applying.",
      },
      {
        question: "What is interview waiver (drop box) eligibility for US B-2 visa applicants?",
        answer: "The US Embassy interview waiver program (informally called 'drop box') allows eligible applicants to submit their B-2 visa application documents at a designated drop box without attending an in-person interview. General eligibility: applicants who previously held a US nonimmigrant visa that was valid within the past 48 months (4 years). Additional conditions: the previous visa was the same category (B-1/B-2), no refusal since the last visa was issued, no arrest or conviction. Eligibility is ultimately determined by the US Embassy or Consulate — even if you appear eligible, you may be called for an interview. Processing after drop box submission: typically 3–5 business days. Check your country's specific embassy website for drop box procedures — they vary significantly by country.",
      },
      {
        question: "How much money do I need to show for a US B-2 tourist visa?",
        answer: "There is no official published minimum. Officers assess whether your financial profile is consistent with your stated purpose and duration of travel. General guideline: for a 2-week trip, showing USD 3,000–5,000 in accessible funds is typical. For a month-long visit, USD 5,000–10,000. For longer stays (3–6 months), USD 10,000–25,000. Critically: funds must be accessible (savings account, not fixed term deposits you cannot access), the balance must be consistent over at least 3–6 months (not a sudden deposit), and the source of funds must be explainable. Your financial profile should match your lifestyle — a person earning USD 50,000/year who shows USD 20,000 in savings is more credible than someone earning USD 15,000 showing USD 20,000.",
      },
    ],
    rejectionReasons: [
      "Section 214(b) — insufficient ties to home country: no property, dependants, employment, or business interests compelling return",
      "Previously overstayed a US visa or admission — even by a single day — permanently recorded in CBP/State Department systems",
      "Relative has a pending I-130 petition creating documented immigrant intent",
      "Vague travel purpose without specific plans, itinerary, or places to visit",
      "Financial profile inconsistent with stated travel duration — sudden large deposits, unexplained source of funds",
      "Previous US visa refusal declared inconsistently or prior refusal not disclosed",
      "Criminal arrest or conviction — even minor, even in another country — not declared on DS-160",
      "Prior travel to Cuba, Iran, Iraq, Libya, North Korea, Somalia, Sudan, Syria, or Yemen since 2011 (triggers ESTA disqualification and heightened scrutiny)",
      "Interview answers contradict DS-160 declarations — dates, sponsors, income, accommodation",
      "Passport valid for less than 6 months beyond intended stay date",
    ],
    extraSections: [
      {
        heading: "US B-2 Tourist Visa — Fee and Timeline Summary",
        body: `| Item | Cost | Timeline |
|---|---|---|
| DS-160 application | Free | Complete 2–4 weeks before appointment |
| MRV visa fee | USD 185 | Pay before scheduling appointment |
| Interview appointment wait | 0–28 weeks (varies by country) | Book as early as possible |
| Post-interview processing | Same day (most cases) or 2–12 weeks (221g) | — |
| Passport return after approval | 3–7 business days | Via courier |

**Interview wait times (mid-2026):**

| Country | Approximate Wait |
|---|---|
| India | 8–16 weeks |
| Nigeria | 14–24 weeks |
| Pakistan | 10–22 weeks |
| China | 4–10 weeks |
| Brazil | 3–8 weeks |
| Mexico | 1–4 weeks |
| UK / EU | 1–3 weeks |
| Saudi Arabia | 2–6 weeks |

Check real-time wait times at: travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html`,
      },
    ],
  },

  // ─── UK VISIT VISA ─────────────────────────────────────────────────────────
  "uk-visit": {
    officialSources: [
      { label: "UK Standard Visitor Visa — GOV.UK", url: "https://www.gov.uk/standard-visitor-visa" },
      { label: "UK Visa Application Online Portal", url: "https://apply.ukvisas.homeoffice.gov.uk/" },
      { label: "UK Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "Immigration Rules — Standard Visitor", url: "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-v-visitor-rules" },
      { label: "Financial Evidence Guidance", url: "https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents" },
    ],
    faqs: [
      {
        question: "What is the UK ETA (Electronic Travel Authorisation) and who needs it?",
        answer: "The UK ETA is a digital pre-travel permission required from 2024 for nationals of countries that do not need a visa to enter the UK but previously could enter without any prior permission. As of January 2025, ETA is required for: nationals of the Gulf Cooperation Council (UAE, Saudi Arabia, Qatar, Bahrain, Kuwait, Oman), Jordan, and nationals of many other countries on a rolling rollout. ETA fee: GBP 10. Apply via the UK ETA app or on GOV.UK. ETA allows multiple trips to the UK for up to 6 months each, valid for 2 years or until your passport expires. Nationals who need a Standard Visitor visa (most of South Asia, Africa, China, etc.) continue to apply for the full visa — ETA is not a visa.",
      },
      {
        question: "How much money do I need to show for a UK Standard Visitor visa?",
        answer: "The Home Office does not publish a specific minimum amount. The financial evidence must show: sufficient funds to cover all costs of your trip (accommodation, food, transport, any activities) without working or accessing public funds, and enough remaining funds at home to demonstrate genuine temporary intent. A general guide: for a 2-week visit, GBP 2,000–4,000 in accessible funds is reasonable. For longer stays, GBP 500–700 per week. Evidence: original 6-month bank statements showing consistent balance — not a recent large transfer. Salary slips, employment letters, and property documents reinforce your financial stability and ties to home. UK visitor visa officers heavily weight the 'genuine visitor' assessment — your financial evidence is one component alongside your travel history, employment, and family ties.",
      },
      {
        question: "Can I work in the UK on a Standard Visitor visa?",
        answer: "No. Working in the UK on a Standard Visitor visa is strictly prohibited. This includes freelance work, remote work for an overseas employer, and any paid activity. The only permitted 'business' activities are: attending meetings, conferences, and trade fairs as a visitor, taking a specific training course not available in your home country (if paid for by your overseas employer), and certain creative/entertainment activities under specific conditions. Remote working for your overseas company while visiting the UK is technically a violation of Standard Visitor conditions — you must have an appropriate work visa to do so. If you work illegally on a visitor visa, you can be removed from the UK, given a ban, and future visa applications will be significantly affected.",
      },
      {
        question: "How long can I stay in the UK on a Standard Visitor visa?",
        answer: "The Standard Visitor visa allows stays of up to 6 months per visit. The visa itself can be valid for 6 months, 2 years, 5 years, or 10 years (multi-entry). However, regardless of your visa validity period, you cannot stay for more than 6 months on any single visit. There is no official rule on how many times you can visit per year, but immigration officers assess whether your pattern of visits suggests you are effectively living in the UK — multiple back-to-back 6-month visits raise significant concerns. If visiting frequently, maintain clear evidence that your main life is in your home country (employment, family, property).",
      },
    ],
    rejectionReasons: [
      "Insufficient financial evidence — bank statements show recent large deposits or insufficient consistent balance for the stated trip duration",
      "Weak ties to home country — no property, no dependants, no stable employment or business in home country",
      "Previous UK visa refusal or overstay not declared — all prior UK immigration history must be accurately disclosed",
      "Purpose of visit unclear or inconsistent — stated tourism purpose with no plausible itinerary or knowledge of UK",
      "Income and financial situation inconsistent with the claimed ability to afford the trip",
      "Application submitted by an agent with errors or omissions the applicant did not verify",
      "Travel history suggests previous unauthorized work or overstay pattern in UK or other countries",
      "Criminal conviction not declared — UK requires disclosure of convictions even in other countries",
      "Visa application form errors — wrong dates, missing information, inconsistencies between sections",
      "Previous refusal for a UK visa or refusal by another country not disclosed honestly",
    ],
  },

  // ─── CANADA STUDY VISA ─────────────────────────────────────────────────────
  "canada-study": {
    officialSources: [
      { label: "Canada Study Permit — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html" },
      { label: "Student Direct Stream (SDS) — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/student-direct-stream.html" },
      { label: "Designated Learning Institutions (DLI) List", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html" },
      { label: "Post-Graduation Work Permit (PGWP)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html" },
      { label: "IRCC Processing Times", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" },
      { label: "CAQ for Quebec Students", url: "https://www.immigration-quebec.gouv.qc.ca/en/education/studying-quebec/application-caq-student.html" },
    ],
    faqs: [
      {
        question: "What is the Student Direct Stream (SDS) and how does it speed up my application?",
        answer: "The Student Direct Stream (SDS) is an expedited processing pathway for study permit applicants from 14 countries: India, China, Philippines, Vietnam, Pakistan, Morocco, Senegal, Antigua and Barbuda, Brazil, Colombia, Costa Rica, Peru, Saint Vincent and the Grenadines, and Trinidad and Tobago. SDS processing target: 20 calendar days (vs. 8–20 weeks for regular). SDS requirements: proof you have a GIC (Guaranteed Investment Certificate) of CAD 10,000 from a participating Canadian financial institution, full first-year tuition paid upfront, an acceptance letter from a DLI, language test showing CLB 7 (IELTS 6.0) or higher, and a valid medical examination. You apply online and must meet all SDS criteria — missing one criterion downgrades you to regular processing.",
      },
      {
        question: "What is a GIC (Guaranteed Investment Certificate) for Canadian study permit?",
        answer: "A GIC is a Guaranteed Investment Certificate — a Canadian bank deposit product used to demonstrate proof of financial support for living expenses during your studies. IRCC requires a minimum GIC of CAD 10,000 (for SDS applicants). The GIC must be purchased from a participating Canadian bank: CIBC, Scotiabank, BMO (Bank of Montreal), or others on the IRCC-approved list. Process: open the account remotely from your home country, transfer the funds, receive a GIC certificate letter to include with your study permit application. After arriving in Canada, the funds are released in installments for living expenses. The GIC satisfies the financial sufficiency requirement but you still need to show you can cover tuition (if not already paid upfront).",
      },
      {
        question: "What is the Post-Graduation Work Permit (PGWP) and how long can I work after graduation?",
        answer: "The PGWP allows international students who graduated from a DLI to work in Canada for up to 3 years after graduation. PGWP length: if your program was less than 8 months, no PGWP. 8 months to 2 years program: PGWP equals the length of the study program. 2 years or longer program: 3-year PGWP. Apply for PGWP within 180 days of receiving your final transcript or completion letter. PGWP is an open work permit — you can work for any employer anywhere in Canada. Many PGWP holders use their Canadian work experience to qualify for Express Entry (Canadian Experience Class) for permanent residency. Important: as of 2024, PGWP eligibility has been tightened — certain colleges with rapid enrollment growth may face DLI restrictions affecting PGWP eligibility. Verify your school's DLI status and PGWP eligibility before applying.",
      },
      {
        question: "Do I need a CAQ if I want to study in Quebec?",
        answer: "Yes. If you plan to study at a DLI in Quebec, you need a Certificat d'acceptation du Québec (CAQ) in addition to the federal study permit. The CAQ is issued by the Quebec Ministry of Immigration (MIFI) and confirms that the provincial government accepts your planned studies in Quebec. Apply for the CAQ first (processing: 20 business days) at immigration-quebec.gouv.qc.ca, then use your CAQ approval to apply for the federal study permit. CAQ fee: CAD 131. Note: CAQ is required regardless of whether your school is a CÉGEP, university, or private college in Quebec. Without a CAQ, IRCC will refuse a study permit for Quebec-based institutions.",
      },
      {
        question: "How many hours can international students work in Canada per week?",
        answer: "As of November 2024, international students with a valid study permit can work up to 24 hours per week off-campus during regular academic sessions (increased from 20 hours). During scheduled breaks (summer, winter), you can work full-time (unlimited hours). On-campus work has no hour restrictions. You must be a full-time student at a DLI and your study permit must not prohibit employment. Note: as of 2024, IRCC has implemented new limits — verify current rules at canada.ca as policy in this area has changed multiple times. Working more than the permitted hours is a violation of your study permit conditions and can affect future immigration applications including PGWP and PR.",
      },
    ],
    rejectionReasons: [
      "School is not a Designated Learning Institution (DLI) — verify at canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html",
      "Financial evidence insufficient — GIC not from an approved bank, or funds do not cover tuition plus living expenses (minimum CAD 20,635 for living expenses plus full tuition)",
      "Genuine student intent not demonstrated — officer not satisfied the applicant intends to study and leave Canada after graduation",
      "SDS requirement not fully met — missing GIC, language test below CLB 7, or medical exam not completed",
      "Quebec applicants missing CAQ — study permit for Quebec cannot be issued without a valid CAQ from MIFI",
      "Medical examination expired or not completed by an IRCC-designated physician",
      "Previous immigration violation in Canada or another country not disclosed",
      "Language test not from IRCC-approved testing body (for SDS: IELTS Academic, CELPIP General, TEF Canada, or TCF Canada)",
      "Acceptance letter from school not unconditional or missing required information (program start date, tuition fees, DLI number)",
      "Application submitted with missing documents — IRCC returns incomplete applications without refund of processing fee",
    ],
    extraSections: [
      {
        heading: "Canada Study Permit — Fee Breakdown 2024",
        body: `| Fee | Amount | Notes |
|---|---|---|
| Study permit application fee | CAD 150 | Non-refundable; paid online |
| Biometric fee (if required) | CAD 85 (individual) / CAD 170 (family) | Required for most applicants |
| GIC (Guaranteed Investment Certificate) | CAD 10,000 minimum | Refunded in installments after arrival |
| Medical examination | CAD 150–350 | At IRCC-designated physician |
| IELTS / CELPIP test | CAD 300–350 | If required |
| CAQ (Quebec only) | CAD 131 | Required for all Quebec institutions |
| **Total government fees (non-Quebec)** | **~CAD 585** | Visa fee + biometrics |
| **Total estimated out-of-pocket** | **~CAD 11,000–12,000** | Including GIC deposit |`,
      },
      {
        heading: "SDS vs Regular Study Permit Processing — Key Differences",
        body: `| Feature | Student Direct Stream (SDS) | Regular Processing |
|---|---|---|
| Processing time | ~20 calendar days | 8–20 weeks |
| Eligible countries | 14 countries including India, China, Philippines | All countries |
| GIC required | Yes — CAD 10,000 minimum | No (but financial proof still required) |
| Tuition paid upfront | Yes — full first year | No |
| Language requirement | CLB 7 minimum (IELTS 6.0+) | No specific minimum for non-SDS |
| Medical exam | Must be completed before applying | May be requested during processing |
| Application method | Online only | Online preferred |

**Recommendation:** If you are from an SDS-eligible country, always attempt to qualify for SDS. The 20-day processing vs. 20-week regular processing is a major practical advantage for planning your studies and travel.`,
      },
    ],
  },

  // ─── CANADA WORK VISA ──────────────────────────────────────────────────────
  "canada-work": {
    officialSources: [
      { label: "Canada Work Permit — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit.html" },
      { label: "LMIA (Labour Market Impact Assessment) — ESDC", url: "https://www.canada.ca/en/employment-social-development/services/foreign-workers.html" },
      { label: "LMIA-Exempt Work Permits (C-10, C-11)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/work-without-work-permit.html" },
      { label: "Global Talent Stream", url: "https://www.canada.ca/en/employment-social-development/services/foreign-workers/global-talent.html" },
      { label: "International Mobility Program", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/hire-foreign-worker/international-mobility-program.html" },
    ],
    faqs: [
      {
        question: "What is an LMIA and when does my employer need one?",
        answer: "A Labour Market Impact Assessment (LMIA) is a document from Employment and Social Development Canada (ESDC) confirming that a Canadian employer has genuinely tried to hire a Canadian citizen or permanent resident for the position, and no qualified Canadian was available. Most employer-specific work permits require a positive LMIA. LMIA fee: CAD 1,000 per position (paid by the employer — illegal for the employer to charge this to the employee). Processing: 10 business days (Global Talent Stream) to several months (standard stream). LMIA-exempt categories do not require this assessment — including intracompany transferees (C-12), significant benefit positions under free trade agreements (CUSMA/USMCA, CETA), and some IEC participants.",
      },
      {
        question: "What is the Global Talent Stream and how does it work?",
        answer: "The Global Talent Stream (GTS) is a fast-track work permit pathway for highly skilled foreign workers in specific technology and specialized fields. GTS processing target: 2 weeks for the work permit (one of the fastest employer-specific work permits in the world). Two categories: Category A — companies referred by a designated referring organization (economic development agencies) seeking unique and specialized talent. Category B — employers hiring for occupations on the Global Talent Occupations List (software engineers, data scientists, cloud architects, etc.). No traditional LMIA required for Category A (replaced by a GTS referral). Category B employers submit a modified LMIA with the GTS fee of CAD 1,000. Employers must comply with a Labour Market Benefits Plan committing to create or retain jobs for Canadians.",
      },
      {
        question: "Can I get an open work permit in Canada?",
        answer: "Open work permits allow you to work for any employer in Canada without being tied to a specific job. Types available: Post-Graduation Work Permit (PGWP) — for international graduates. Bridging Open Work Permit (BOWP) — for PR applicants waiting for a decision. Spousal/Partner Open Work Permit — for spouses of skilled workers and international students at degree-level institutions. International Experience Canada (IEC) Working Holiday — for youth from participating countries (18–35, depending on country), allows 1–2 years of open work authorization. Refugee claimants. Holders of certain protected person status. Open work permits do not restrict employer, job type, or location within Canada.",
      },
    ],
    rejectionReasons: [
      "LMIA not obtained by employer before applying — employer-specific work permits require a positive LMIA unless the position is LMIA-exempt",
      "Job offer letter does not match LMIA — any discrepancy in salary, position, hours, or location between the job offer and the LMIA is grounds for refusal",
      "Applicant does not meet the education or work experience requirements stated in the LMIA",
      "Applicant's nationality is not eligible for the exemption category being claimed (e.g., CUSMA eligibility is only for US and Mexican citizens)",
      "Medical examination required but not completed at an IRCC-designated physician before application",
      "Prior Canadian immigration violation — overstay, unauthorized work, or misrepresentation — creates strong presumption against approval",
      "Genuine temporary intent not demonstrated — officer believes applicant intends to remain in Canada beyond work permit period",
      "Global Talent Stream application missing Category A referral or Category B occupation not on the GTS Occupations List",
      "Work permit application fee not paid or paid incorrectly — CAD 155 base fee plus biometrics CAD 85",
      "Applicant is subject to an existing inadmissibility (health, criminality, misrepresentation) not resolved before applying",
    ],
  },

  // ─── CANADA VISIT VISA ─────────────────────────────────────────────────────
  "canada-visit": {
    officialSources: [
      { label: "Canada Visitor Visa (TRV) — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/visa.html" },
      { label: "eTA (Electronic Travel Authorization)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html" },
      { label: "Super Visa (Parents and Grandparents)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/parent-grandparent-super-visa.html" },
      { label: "IRCC Processing Times", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html" },
    ],
    faqs: [
      {
        question: "What is the difference between a Canada eTA and a Canada Visitor Visa (TRV)?",
        answer: "An eTA (Electronic Travel Authorization) is for nationals of countries that do not need a visa to visit Canada but must get electronic pre-clearance before flying. eTA cost: CAD 7. Apply online at canada.ca/eta. Processing: usually minutes to 72 hours. Valid for 5 years or until passport expiry. A TRV (Temporary Resident Visa) is the traditional visa sticker required for nationals whose countries are not visa-exempt. TRV fee: CAD 100. Processing: 2–8 weeks (varies by country and processing center). Both eTA and TRV allow stays of up to 6 months per visit. Neither guarantees entry — a CBSA officer at the port of entry determines your authorized stay.",
      },
      {
        question: "What is the Canada Super Visa for parents and grandparents?",
        answer: "The Super Visa allows parents and grandparents of Canadian citizens and permanent residents to visit Canada for up to 5 years per entry (extendable to a maximum of 7 years in-country), valid for up to 10 years. Standard visitor visas only allow 6 months per entry. Super Visa requirements: your Canadian child or grandchild must meet an income threshold (minimum income varies by family size — approximately CAD 36,000–80,000 depending on household size). Applicant must have private medical insurance from a Canadian or foreign insurer providing minimum CAD 100,000 coverage for at least 1 year. Processing: same as TRV (weeks to a few months). Super Visa is multi-entry. Parents/grandparents cannot work in Canada on a Super Visa.",
      },
      {
        question: "How much money do I need to show for a Canada visitor visa?",
        answer: "IRCC does not state a fixed minimum. Officers assess whether you have sufficient funds to cover accommodation, food, transport, and activities for the duration of your visit, plus enough financial stability in your home country to demonstrate you will leave Canada when your authorized stay ends. A practical guideline: CAD 100–150 per day of your planned stay is reasonable for most visits. For a 2-week visit, approximately CAD 1,400–2,100. For longer stays of 3–6 months, CAD 9,000–27,000. Evidence: 3–6 months of bank statements, employment letters with salary, property ownership, fixed deposits. If visiting family who will host you, their invitation letter and proof of their Canadian status and financial capacity can supplement your evidence.",
      },
    ],
    rejectionReasons: [
      "Insufficient financial proof — bank statements do not demonstrate consistent balance sufficient for the planned visit duration",
      "Weak ties to home country — no employment, no property, no dependants — creating doubt about intention to return",
      "Previous Canadian visitor visa overstay or unauthorized work in Canada",
      "Prior refusal for Canada or another major immigration country not disclosed honestly",
      "Application missing required documents — IRCC returns incomplete applications without processing",
      "Medical inadmissibility — health condition requiring excessive demands on Canadian health or social services",
      "Genuine temporary intent doubted — pattern of visits suggests applicant is effectively living in Canada",
      "Criminal inadmissibility — conviction for an offence that is equivalent to a Canadian indictable offence",
      "Relationship to Canadian host not plausible or invitation letter not credible",
      "eTA or TRV applied for by an ineligible applicant — some nationalities are not eligible for eTA and must apply for TRV",
    ],
  },

  // ─── CANADA IMMIGRATION / EXPRESS ENTRY ────────────────────────────────────
  "canada-immigration": {
    officialSources: [
      { label: "Express Entry — IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" },
      { label: "Comprehensive Ranking System (CRS) Calculator", url: "https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp" },
      { label: "Express Entry Draw History", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html" },
      { label: "Federal Skilled Worker Program (FSWP)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/federal-skilled-workers.html" },
      { label: "Canadian Experience Class (CEC)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/canadian-experience-class.html" },
      { label: "Provincial Nominee Programs (PNP)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" },
      { label: "NOC 2021 Occupation Codes", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/find-national-occupation-code.html" },
    ],
    faqs: [
      {
        question: "What CRS score do I need to receive an invitation in 2026?",
        answer: "CRS (Comprehensive Ranking System) draw cutoffs in 2026 vary by draw type. General draws (inviting all Express Entry programs): approximately 480–515. Canadian Experience Class (CEC) category-based draws: approximately 440–480. Federal Skilled Trades Program draws: approximately 420–460. French language proficiency draws: approximately 336–380 (significantly lower — French speakers are prioritized). Healthcare, STEM, and other category draws: approximately 430–500. PNP (Provincial Nominee Program): receiving a provincial nomination adds 600 CRS points, making selection virtually certain regardless of base score. Check recent draw results at the IRCC Express Entry draw history page to track current trends.",
      },
      {
        question: "What is the difference between FSWP, CEC, and FSTP in Express Entry?",
        answer: "Express Entry manages three federal programs: Federal Skilled Worker Program (FSWP) — for workers outside Canada with at least 1 year of continuous full-time (or equivalent) paid work experience in a NOC TEER 0, 1, 2, or 3 occupation. Language minimum: CLB 7 (IELTS 6.0 in each component). No Canadian experience required. Canadian Experience Class (CEC) — for workers who have at least 1 year of full-time Canadian work experience in a NOC TEER 0, 1, 2, or 3 occupation within the past 3 years. Language: CLB 7 (NOC TEER 0/1) or CLB 5 (NOC TEER 2/3). Federal Skilled Trades Program (FSTP) — for workers in eligible skilled trades (electricians, plumbers, welders, etc.). Requires job offer or union membership in Canada. Each program has slightly different eligibility rules — you can be eligible for more than one simultaneously.",
      },
      {
        question: "How does a Provincial Nominee Program (PNP) nomination boost my Express Entry?",
        answer: "Receiving a provincial nomination through a PNP stream linked to Express Entry adds 600 CRS points. Since the maximum base CRS score is approximately 1,200 (in theory) and competitive cutoffs are typically 450–520, a 600-point addition effectively guarantees an Invitation to Apply (ITA) in the very next draw. Process: provinces notify IRCC of their nomination through the Express Entry system. IRCC then invites the nominated candidate in the next general draw. Most nominees receive their ITA within days to weeks of provincial nomination. Popular PNP streams: Ontario's HCP (Human Capital Priorities) targeting Express Entry profiles, BC PNP Tech (tech workers), Alberta Accelerated Tech Pathway, Saskatchewan SINP, and Manitoba MPNP — each with different eligibility requirements.",
      },
      {
        question: "What documents do I need to submit after receiving an ITA?",
        answer: "After receiving an Invitation to Apply, you have 60 days to submit a complete application for permanent residence. Required documents include: valid passport (must be valid for the full processing period), language test results (IELTS, CELPIP, TEF Canada — must be from within the past 2 years), Educational Credential Assessment (ECA) from a designated body (WES, IQAS, ICES, etc.), employment records (reference letters, T4s, pay stubs, ROEs) covering your qualifying work experience, police clearance certificates from every country where you lived for 6+ months since age 18, medical examination results from an IRCC-designated physician (valid for 12 months), proof of settlement funds, photos meeting IRCC specifications, and civil documents (birth certificate, marriage certificate if applicable) with certified translations.",
      },
    ],
    rejectionReasons: [
      "CRS score below invitation cutoff — most common outcome, not a refusal but means no ITA in that draw period",
      "Work experience in NOC TEER 4 or 5 — these categories do not qualify for FSWP or CEC; only TEER 0, 1, 2, 3 qualify",
      "Educational credentials not assessed by an approved ECA body — WES, IQAS, ICES, PEBC, or other designated organizations only",
      "Language test not from an IRCC-accepted provider — only IELTS Academic/General, CELPIP General (English), and TEF Canada/TCF Canada (French)",
      "Misrepresentation on the application — false statements about work experience, education, or language scores result in a 5-year ban",
      "Medical inadmissibility — condition causing excessive demand on Canadian health or social services",
      "Criminal inadmissibility — conviction equivalent to a Canadian indictable offence (may require a Temporary Resident Permit or Criminal Rehabilitation application)",
      "Police certificates missing, expired (certificates expire 1 year from issuance), or not from all required countries",
      "Settlement funds insufficient — minimum funds required vary by family size (CAD 13,757 for 1 person, increasing per additional family member) for FSWP",
      "ITA application submitted after the 60-day deadline — expired ITAs are cancelled with no extension",
    ],
  },

  // ─── AUSTRALIA STUDY VISA ──────────────────────────────────────────────────
  "australia-study": {
    officialSources: [
      { label: "Student Visa (Subclass 500) — Home Affairs", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500" },
      { label: "Genuine Student Requirement (GSR)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500/genuine-student-requirement" },
      { label: "Overseas Student Health Cover (OSHC)", url: "https://www.studyaustralia.gov.au/english/live/insurance" },
      { label: "Subclass 485 Temporary Graduate Visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485" },
      { label: "AQF (Australian Qualifications Framework)", url: "https://www.aqf.edu.au/" },
      { label: "CRICOS (Provider Registration)", url: "https://www.cricos.education.gov.au/" },
    ],
    faqs: [
      {
        question: "What is the Genuine Student Requirement (GSR) for an Australian student visa?",
        answer: "The Genuine Student Requirement (GSR) replaced the previous Genuine Temporary Entrant (GTE) requirement in 2024. Under GSR, you must demonstrate that you are a genuine student whose primary purpose is to gain a quality education in Australia, and that your application is consistent with that intention. Officers assess: your immigration history, the value of your proposed studies to your future career and circumstances, your ties to your home country, and any other factors suggesting genuine student intent. GSR is assessed holistically — there is no checklist. Common ways to demonstrate GSR: detailed academic and career rationale, evidence of how the Australian qualification is valued in your home country's job market, strong personal statement linking the course to your career goals.",
      },
      {
        question: "What is the financial requirement for an Australian student visa?",
        answer: "As of 2024, Australian student visa applicants must demonstrate they have sufficient funds to cover: annual course tuition fees, living costs of AUD 29,710 per year (AUD 10,400 for a spouse or de facto partner, AUD 4,449 per child), and travel costs. Evidence: personal bank statements showing consistent funds, scholarship letters, financial support letters from parents or sponsors with their bank statements, payslips, tax returns. Funds must be genuinely available — not borrowed for application purposes. The AUD 29,710 living cost figure increased from previous years as part of 2024 policy changes — check the Home Affairs website for the current figure at application time.",
      },
      {
        question: "What is Overseas Student Health Cover (OSHC) and how much does it cost?",
        answer: "OSHC (Overseas Student Health Cover) is mandatory health insurance that all international students on a Subclass 500 visa must purchase for the entire duration of their student visa. It provides access to Medicare-equivalent services and must be purchased from an AHPRA-approved OSHC provider (Allianz Care, AHM, BUPA, Medibank, NIB) before arriving in Australia. Cost varies by provider and coverage level: approximately AUD 500–700 per year for a single student. Family cover (including dependants on the visa) costs AUD 1,500–2,500 per year. Your university may offer OSHC purchase through their portal — compare providers as prices and coverage differ. OSHC is a condition of your student visa — letting it lapse can put you in breach of visa conditions.",
      },
      {
        question: "How long can I stay and work in Australia after graduating?",
        answer: "The Subclass 485 Temporary Graduate visa allows international graduates to live and work in Australia after graduation. Two streams: Graduate Work stream (18 months) — for graduates in an occupation on the skilled occupation list. Post-Study Work stream — for bachelor's degree or higher graduates: 2 years (bachelor's), 3 years (honours/master's by coursework), 4 years (PhD), 5 years (bachelor's + master's or PhD from a regional area). Work rights during Subclass 500: since mid-2023, there is no cap on working hours for most student visa holders (the 40-hours-per-fortnight cap was removed). However, this may revert — verify current policy at immi.homeaffairs.gov.au before relying on it.",
      },
      {
        question: "Do I need to study at a CRICOS-registered institution for an Australian student visa?",
        answer: "Yes. Your institution and your specific course must be registered on CRICOS (Commonwealth Register of Institutions and Courses for Overseas Students) to be eligible for the Subclass 500 student visa. Check the CRICOS database at cricos.education.gov.au before enrolling. Studying at a non-CRICOS provider on a student visa is a visa condition violation. Your Confirmation of Enrollment (CoE) — issued by the CRICOS-registered institution — is a mandatory document for your visa application. The CoE shows your course, start date, duration, and tuition fees. You cannot apply for a student visa without a CoE.",
      },
    ],
    rejectionReasons: [
      "Genuine Student Requirement (GSR) not met — no credible academic rationale connecting proposed studies to career goals in home country",
      "Financial evidence insufficient — AUD 29,710 living cost plus full tuition not demonstrably available",
      "OSHC not purchased before visa grant — must have OSHC covering the full visa period",
      "Institution or course not CRICOS-registered — verify at cricos.education.gov.au before enrolling",
      "Confirmation of Enrollment (CoE) not provided or CoE details inconsistent with application",
      "English language test score below minimum — IELTS 5.5 overall (5.5 in each component) minimum for most courses",
      "Previous Australian visa overstay or condition breach — heavily weighted against approval",
      "Application made from inside Australia after current visa expired (must have lawful status when applying)",
      "Health requirement not met — chest X-ray or medical examination reveals condition causing public health concern",
      "Character requirement — criminal conviction for an offence resulting in a 12+ month sentence (whether or not imprisoned) leads to mandatory refusal",
    ],
    extraSections: [
      {
        heading: "Australia Student Visa (Subclass 500) — Fee Breakdown 2024",
        body: `| Fee | Amount (AUD) | Notes |
|---|---|---|
| Visa application charge | AUD 1,600 | Paid online, non-refundable |
| Additional applicant (18+) | AUD 1,600 | Per accompanying family member |
| Additional applicant (under 18) | AUD 400 | Per accompanying child |
| OSHC — single student (1 year) | AUD 500–700 | Mandatory health cover; varies by provider |
| Medical examination (if required) | AUD 300–450 | At Panel Physician |
| English language test | AUD 330–380 | IELTS, PTE, TOEFL, or Cambridge |
| Biometric collection (if required) | Varies by country | At Visa Application Centre |
| **Total estimated (single student, 1 year)** | **~AUD 2,400–2,900** | Visa fee + OSHC + test |`,
      },
    ],
  },

  // ─── AUSTRALIA WORK VISA ───────────────────────────────────────────────────
  "australia-work": {
    officialSources: [
      { label: "Temporary Skill Shortage (TSS 482) — Home Affairs", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482" },
      { label: "Employer Nomination Scheme (ENS 186) — Permanent", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186" },
      { label: "Skills Assessment Bodies", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/assess-skills" },
      { label: "Temporary Skilled Migration Income Threshold (TSMIT)", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" },
      { label: "Skilled Occupation Lists for TSS/ENS", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" },
    ],
    faqs: [
      {
        question: "What is the TSS 482 visa and what streams are available?",
        answer: "The Temporary Skill Shortage (Subclass 482) visa allows Australian employers to sponsor skilled overseas workers for positions they cannot fill with Australian workers. Three streams: Short-term stream — occupations on the Short-term Skilled Occupation List (STSOL); visa valid for up to 2 years (4 years for USA, Canada, France, Germany, Japan, or Ireland nationals under specific agreements); limited renewal options; no direct pathway to permanent residence. Medium-term stream — occupations on the Medium and Long-term Strategic Skills List (MLTSSL); visa valid for up to 4 years; can transition to ENS 186 permanent visa after 3 years. Labour Agreement stream — for employers with a specific Labour Agreement with the Australian government; tailored occupations and conditions.",
      },
      {
        question: "What is the TSMIT and what salary do I need to be paid on a TSS visa?",
        answer: "The Temporary Skilled Migration Income Threshold (TSMIT) is the minimum annual salary that TSS visa holders must be paid. As of July 2023, TSMIT is AUD 70,000 (increased from AUD 53,900). In addition to meeting TSMIT, employers must pay TSS visa holders at least the market salary rate for Australian workers in equivalent roles in the same location — whichever is higher. Employers who pay TSS holders below market salary rates violate the program conditions. If you are paid less than TSMIT, your sponsor loses their approved employer status. The TSMIT is indexed annually — check homeaffairs.gov.au for the current figure.",
      },
      {
        question: "What is the ENS 186 visa — the permanent employer-sponsored visa?",
        answer: "The Employer Nomination Scheme (Subclass 186) is a permanent residence visa for skilled workers nominated by an approved Australian employer. Three streams: Direct Entry stream — for workers outside Australia with a skills assessment and at least 3 years of relevant work experience. Temporary Residence Transition (TRT) stream — for TSS 482 holders who have worked for the same employer in the same occupation for at least 2 years (3 years if the position was in the Short-term stream with an exemption). Labour Agreement stream — for workers employed under a labour agreement. ENS 186 grants permanent residence directly — no subsequent PR application required. Occupation must be on an eligible list and the salary must meet or exceed TSMIT.",
      },
    ],
    rejectionReasons: [
      "Occupation not on an eligible skilled occupation list for the TSS stream applied for",
      "Salary offered below TSMIT (AUD 70,000) or below the market salary rate for Australian workers in the same role and location",
      "Employer not an approved TSS sponsor — must apply for Standard Business Sponsorship before nominating the worker",
      "Skills assessment not from the designated assessing body for the nominated occupation",
      "Applicant does not have 2 years of recent full-time relevant work experience as required",
      "English language requirements not met — IELTS 5.0 (or equivalent) in each component for most TSS streams",
      "Genuine nomination doubted — position does not appear to be a real vacancy or the employer appears to be a shell company",
      "Criminal conviction — character requirement: sentence of 12+ months results in mandatory refusal without a character waiver",
      "Health requirement not met — medical examination reveals condition of public health concern",
      "TRT stream application: applicant has not worked continuously for the nominating employer for the required 2–3 years",
    ],
  },

  // ─── AUSTRALIA IMMIGRATION (SKILLED) ──────────────────────────────────────
  "australia-immigration": {
    officialSources: [
      { label: "Skilled Independent Visa (Subclass 189)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189" },
      { label: "Skilled Nominated Visa (Subclass 190)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190" },
      { label: "SkillSelect — Expression of Interest", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect" },
      { label: "Points Calculator", url: "https://immi.homeaffairs.gov.au/help-support/tools/points-calculator" },
      { label: "Skilled Occupation List", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" },
      { label: "Skills Assessment Bodies", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/assess-skills" },
    ],
    faqs: [
      {
        question: "What points score do I need to receive an invitation for Australian permanent residence?",
        answer: "The minimum points to lodge an Expression of Interest (EOI) in SkillSelect is 65 points. However, in practice, invitations are issued to the highest-scoring candidates — the actual score needed to receive an invitation varies by occupation and draw. For Subclass 189 (Skilled Independent), competitive scores in recent invitation rounds: most occupations require 85–95 points to receive an invitation within 6–12 months. Some high-demand occupations invite at 65–75 points. For Subclass 190 (Skilled Nominated), state nomination adds 5 points and state cutoff scores are often lower than the federal 189 invitation scores. Use the points calculator at immi.homeaffairs.gov.au to calculate your exact score.",
      },
      {
        question: "What is the difference between Subclass 189 and Subclass 190?",
        answer: "Subclass 189 (Skilled Independent): awarded purely on merit based on your points score. No employer required, no state nomination required. You can live and work anywhere in Australia. Most competitive — highest points cutoffs. Subclass 190 (Skilled Nominated): requires a state or territory government to nominate you. Nomination adds 5 points to your score. You must commit to living in the nominating state or territory for at least 2 years after visa grant. Lower points cutoffs than 189 because states target occupations needed locally. Both grant permanent residence immediately — you can apply for Australian citizenship after 4 years of permanent residence (including at least 1 year of Australian citizenship immediately before applying).",
      },
      {
        question: "How are Australian immigration points calculated?",
        answer: "Points are awarded across multiple categories. Age (maximum 30 points): 25–32 years = 30 points; 18–24 or 33–39 = 25 points; 40–44 = 15 points; 45–49 = 0 points. English proficiency: Superior (IELTS 8+ all bands) = 20 points; Proficient (IELTS 7+ all bands) = 10 points; Competent (IELTS 6+ all bands) = 0 bonus (minimum required). Work experience in Australia (past 10 years): 8+ years = 20 points; 5–8 = 15 points; 3–5 = 10 points; 1–3 = 5 points. Overseas work experience (past 10 years): 8+ years = 15 points; 5–8 = 10 points; 3–5 = 5 points. Australian qualifications: PhD = 20 points; bachelor's/master's/diploma = 15 points. State nomination: +5 points. Partner skills: up to 10 points. Study in regional Australia: 5 points. Professional year: 5 points.",
      },
    ],
    rejectionReasons: [
      "Points score below the invitation cutoff for your occupation at the time of the invitation round",
      "Occupation not on the relevant skilled occupation list for Subclass 189 or 190 at time of application",
      "Skills assessment not from the designated body for your occupation, or assessment is outdated (skills assessments must generally be from within 3 years)",
      "English language score below the minimum — IELTS 6.0 (or equivalent) in all four components is the competent English requirement",
      "State nomination withdrawn before visa grant — if the nominating state withdraws its nomination (e.g., you leave the state), the Subclass 190 application may fail",
      "Age exceeds 45 at time of invitation — not eligible for points-tested skilled visa streams (except for some state and regional pathways)",
      "Misrepresentation in the EOI or visa application — providing false work experience, education, or language scores results in permanent record and 3-year bar",
      "Medical inadmissibility — health condition causing excessive demands on Australian health or social services",
      "Character requirement failure — substantial criminal record or association with criminal groups",
      "Application fee not paid or paid incorrectly — Subclass 189 visa application charge: AUD 4,640 (primary applicant)",
    ],
  },

  // ─── GERMANY VISIT VISA (SCHENGEN) ─────────────────────────────────────────
  "germany-visit": {
    officialSources: [
      { label: "Schengen Visa (Germany) — Federal Foreign Office", url: "https://www.auswaertiges-amt.de/en/visa-service/buerger/reiseplanung/visadokumentation/207824" },
      { label: "German Embassy Visa Application", url: "https://www.germany.info/us-en/service/visa" },
      { label: "Schengen Area Countries List — EU", url: "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area_en" },
      { label: "VFS Global Germany Visa Application", url: "https://www.vfsglobal.com/germany/" },
      { label: "Schengen Visa Application Form (Annex 1)", url: "https://home-affairs.ec.europa.eu/system/files/2020-09/schengen_visa_application_form_en.pdf" },
    ],
    faqs: [
      {
        question: "What is the 90/180-day Schengen rule and how does it work?",
        answer: "The 90/180-day rule is the fundamental limit of Schengen short-stay (Type C) visas. You may stay in the entire Schengen Area for a maximum of 90 days in any 180-day rolling period. The 180-day window is rolling — it does not reset on a fixed date. To calculate: take today as your reference point, count back 180 days, and add up all days you have been in the Schengen Area in that window. If the total is 90 or fewer, you can enter. If it is 90, you must leave and cannot re-enter until enough days have passed outside the zone. Important: the rule applies to the entire Schengen Area collectively — days in France, Germany, Spain, or any other Schengen country all count toward the same 90-day total. Use the EU's official Stay Calculator at ec.europa.eu/info/policies/justice-and-fundamental-rights/free-movement-eu-citizens/travel-documents-eu-nationals_en to calculate your remaining days.",
      },
      {
        question: "How many countries are in the Schengen Area and which ones?",
        answer: "As of 2024, there are 29 Schengen Area member states. EU members: Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden. Non-EU Schengen members: Iceland, Liechtenstein, Norway, Switzerland. New members: Romania and Bulgaria joined the Schengen Area in March 2024. Non-Schengen EU members: Ireland (has its own visa — the Irish Short Stay C visa) and Cyprus (uses its own national visa). A Schengen visa from any member state allows travel throughout the entire Schengen Area, not just the issuing country.",
      },
      {
        question: "What are the financial requirements for a Schengen visa application?",
        answer: "Each Schengen state sets its own guidelines, but the generally accepted minimum is EUR 45–100 per day of your stay in the Schengen Area. For Germany: EUR 45 per day is a commonly cited guideline. For a 14-day visit: approximately EUR 630–1,400 in accessible funds. Evidence: original bank statements from the last 3 months, payslips, employment letter, tax returns. If hosted by someone in the Schengen Area: a formal sponsor declaration (Verpflichtungserklärung for Germany — a legally binding support declaration filed at the local Ausländerbehörde) can supplement or replace personal financial proof. Travel insurance is mandatory: minimum EUR 30,000 coverage for medical emergencies and repatriation, valid throughout the Schengen Area.",
      },
      {
        question: "What is the difference between a Schengen Type C visa and a Type D national visa?",
        answer: "Type C (Short-Stay): the standard Schengen visa. Allows up to 90 days in any 180-day period. Used for tourism, visiting family, short business trips, attending events. Issued by the embassy of the main destination country (or first entry country if no clear main destination). Type D (Long-Stay National Visa): issued by individual Schengen states for stays exceeding 90 days — for work, study, language courses, research, family reunification. Each state issues its own Type D visa. A German Type D visa allows you to enter Germany for the long-stay purpose AND travel through other Schengen states for up to 90 days in the same 180-day period. You cannot get a Type D visa for tourism — it requires a specific long-stay purpose.",
      },
      {
        question: "Which country's Schengen embassy should I apply to?",
        answer: "Apply to the embassy or consulate of: (1) your main destination (the country where you will spend the most nights), OR (2) if stays are equal, the first Schengen country you will enter. Example: if you are spending 5 days in Germany, 5 days in France, and 5 days in Italy, and entering Germany first, apply to the German embassy. If traveling through multiple countries with no clear main destination, apply to the first country you will enter. Applying to the wrong embassy is one of the most common mistakes — it can delay processing or result in rejection. When in doubt, contact VFS Global or the embassy directly before submitting.",
      },
    ],
    rejectionReasons: [
      "No travel insurance or insurance below EUR 30,000 coverage — mandatory for all Schengen visa applications",
      "Financial proof insufficient — bank statements show insufficient daily funds (EUR 45 minimum per day) or recently inflated balance",
      "No confirmed round-trip travel bookings — cancellable online booking printouts from booking.com or similar are generally acceptable, but one-way tickets raise concerns",
      "Previous Schengen visa overstay — recorded in the Schengen Information System (SIS) and is grounds for refusal",
      "No accommodation proof for the entire Schengen stay — hotel bookings, Airbnb, or invitation letter from host",
      "Weak employment or business ties to home country — officer not satisfied you will return within the 90-day limit",
      "Purpose of travel vague or inconsistent — 'tourism' stated but no itinerary, no knowledge of destinations",
      "Application submitted too early (more than 6 months before travel) or too late (fewer than 15 days before travel)",
      "Photograph not meeting Schengen biometric specifications — white background, recent (within 6 months), 35mm × 45mm",
      "Criminal record not disclosed on application form — previous visa refusals by any Schengen state must also be declared",
    ],
    extraSections: [
      {
        heading: "Schengen Visa Fee Schedule 2024",
        body: `| Applicant Category | Fee |
|---|---|
| Adults | EUR 90 |
| Children (6–12 years) | EUR 45 |
| Children under 6 | Free |
| Service fee (VFS Global, typically) | EUR 30–60 |
| Travel insurance (mandatory) | EUR 15–50 for a 2-week trip |
| **Total estimated per adult** | **EUR 135–200** |

Fees are set by EU regulation and are the same at all Schengen member state embassies. VFS service fees vary by country. Fees are non-refundable. Some nationalities benefit from fee waivers under bilateral agreements with EU member states.

**Mandatory Travel Insurance Requirements:**
- Minimum coverage: EUR 30,000
- Must cover: medical emergencies, hospitalisation, repatriation, and death
- Must be valid: for the entire duration of your Schengen stay and in all Schengen states
- Accepted providers: any major insurer (Allianz, AXA, AIG, TravelGuard, etc.) — must show coverage amount clearly on the policy document`,
      },
    ],
  },

  // ─── GERMANY WORK VISA ─────────────────────────────────────────────────────
  "germany-work": {
    officialSources: [
      { label: "Working in Germany — Federal Foreign Office", url: "https://www.auswaertiges-amt.de/en/visa-service/buerger/reiseplanung/visadokumentation/207824" },
      { label: "EU Blue Card Germany — Federal Employment Agency", url: "https://www.make-it-in-germany.com/en/visa-residence/types/blue-card-eu" },
      { label: "Skilled Immigration Act 2023 — BMAS", url: "https://www.bmas.de/EN/Services/Press/press-releases/2023/skilled-immigration-act.html" },
      { label: "Opportunity Card (Chancenkarte) — Germany", url: "https://www.make-it-in-germany.com/en/visa-residence/types/opportunity-card" },
      { label: "Recognition of Foreign Qualifications", url: "https://www.anerkennung-in-deutschland.de/en/interest/worker/" },
      { label: "Make-it-in-Germany — Official Immigration Portal", url: "https://www.make-it-in-germany.com/en" },
    ],
    faqs: [
      {
        question: "What is the EU Blue Card for Germany and who qualifies?",
        answer: "The EU Blue Card is a work and residence permit for highly qualified non-EU nationals. It allows you to live and work in Germany and grants accelerated access to permanent residence (after 33 months with standard German — or 21 months with B1-level German proficiency). Eligibility: a recognized university degree (or equivalent) and a job offer in Germany with a salary at or above the Blue Card threshold. 2024 salary thresholds: general professions — gross annual salary of EUR 45,552. Shortage occupations (IT, STEM, doctors, engineers, nurses in some cases) — EUR 41,041 (a lower threshold to attract in-demand skills). The Blue Card covers your spouse automatically — spouses receive a residence permit allowing them to work without restriction.",
      },
      {
        question: "What changed under Germany's Skilled Immigration Act 2023?",
        answer: "The new Skilled Immigration Act (Fachkräfteeinwanderungsgesetz) came into force in November 2023, significantly expanding who can work in Germany. Key changes: (1) Vocational qualifications pathway expanded — skilled workers with a foreign vocational qualification recognized as equivalent to a German qualification can now get a work visa without a job offer if they have work experience. (2) Potential (Chancenkarte / Opportunity Card) — a new points-based temporary residence permit allowing qualified foreigners to enter Germany to look for work (requires meeting criteria on education, work experience, German skills, and age). (3) Facilitated recognition — a new 'recognition partnership' allows workers to come to Germany before their qualifications are formally recognized. (4) IT professionals — no formal degree required if equivalent knowledge demonstrated through professional experience. (5) Short-term employment expanded to 8 months per year for some roles.",
      },
      {
        question: "What is the Opportunity Card (Chancenkarte) and how do I apply?",
        answer: "The Chancenkarte (Opportunity Card) is a new German residence permit introduced in June 2024 allowing skilled workers from outside the EU to come to Germany for up to 1 year to look for work. It is points-based: you need at least 6 points from: recognized university or vocational degree (4 points each), German language skills at A1+ (1 point for A1, 3 points for B2+), English at B2+ (1 point), minimum 2 years of professional experience in the last 5 years (1 point), age 35 or under (1 point), previous legal stay in Germany (1 point). While on the Chancenkarte, you can work up to 20 hours per week in any job (trial employment). If you find a qualifying job, you switch to a work visa without leaving Germany. You need proof of financial means (minimum EUR 1,091 per month) and health insurance.",
      },
      {
        question: "Does my foreign degree need to be recognized in Germany before I can work there?",
        answer: "For EU Blue Card and most employment-based visas: your university degree must be recognized as equivalent to a German degree by the Central Office for Foreign Education (Anabin database / KMK). Use the anabin.kmk.org database to check whether your institution and degree appear. If not in the anabin database, you may need formal evaluation by the Deutsche Akademische Austauschdienst (DAAD) or anabin equivalent. Under the 2023 Skilled Immigration Act's recognition partnership: you can enter Germany and begin work before formal recognition is completed, provided your employer agrees to support the recognition process and you meet the basic equivalence criteria. IT professionals: no formal degree recognition required — employers can verify professional skills through interviews and work samples.",
      },
    ],
    rejectionReasons: [
      "Salary offer below the EU Blue Card threshold (EUR 45,552 general, EUR 41,041 shortage occupations for 2024)",
      "University degree not recognized in Germany — must appear in anabin database or receive individual assessment from KMK-designated authority",
      "Job offer from an employer who is not registered as a legitimate German business",
      "Application missing required labor market review from Federal Employment Agency (Bundesagentur für Arbeit) — required for many non-Blue Card work visas",
      "German language requirements not met — some visa categories require B1 or B2 German (Blue Card has no German requirement, but the Chancenkarte awards points for it)",
      "Chancenkarte points threshold not met — need minimum 6 points from the points system",
      "Qualifications not in a field that matches the job offer — degree in economics cannot support a visa for an engineering position",
      "Financial proof insufficient for Opportunity Card — must show EUR 1,091 per month of planned stay in Germany",
      "Health insurance not in place — proof of health insurance covering Germany is mandatory for all visa categories",
      "Previous German or Schengen visa refusal or overstay negatively impacts credibility of new application",
    ],
  },

  // ─── UAE WORK VISA ─────────────────────────────────────────────────────────
  "uae-work": {
    officialSources: [
      { label: "UAE Golden Visa — ICA", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa" },
      { label: "UAE Work Permit — MOHRE", url: "https://www.mohre.gov.ae/en/services/work-permits.aspx" },
      { label: "Federal Authority for Identity and Citizenship (ICA)", url: "https://icp.gov.ae/en/" },
      { label: "UAE Freezone Authorities Directory", url: "https://u.ae/en/information-and-services/business/types-of-businesses/free-zones" },
      { label: "UAE Labour Law (Federal Decree-Law 33/2021)", url: "https://u.ae/en/information-and-services/jobs/labour-law" },
    ],
    faqs: [
      {
        question: "What is the UAE Golden Visa and who qualifies?",
        answer: "The UAE Golden Visa is a long-term residence permit valid for 5 or 10 years, renewable indefinitely. It covers the visa holder and immediate family (spouse, children regardless of age, and one household manager). Eligible categories: Investors — property investment of AED 2 million+ or business investment of AED 2 million+. Entrepreneurs — startup founders with a project valued at AED 500,000+ or with government approval. Talented individuals — professionals in specific fields at the top of their field: doctors, engineers, scientists, artists, athletes. Outstanding students — students with a GPA of 3.75+ at UAE universities or top 100 world-ranked universities. Humanitarian leaders and frontline heroes — specific categories. Holders can live, work, and study in the UAE without employer sponsorship — the Golden Visa is not tied to an employer.",
      },
      {
        question: "What is the difference between a UAE Mainland work permit and a Free Zone work permit?",
        answer: "UAE Mainland (DED-licensed companies): issued through MOHRE (Ministry of Human Resources and Emiratisation). Allows you to work for companies anywhere in the UAE. Employees are covered by UAE Federal Labour Law (Federal Decree-Law 33/2021). Visa is sponsored by the employer through MOHRE. Free Zone (JAFZA, DIFC, DAFZA, Dubai Internet City, etc.): each free zone has its own authority and issues its own employment visas. Free zone employees are generally not subject to MOHRE regulations — they fall under the free zone authority's rules. Free zone work permits typically restrict employment to within that free zone or to businesses outside the UAE. Working outside the free zone in mainland UAE requires a NOC (No Objection Certificate) from the free zone authority.",
      },
      {
        question: "How does employer sponsorship (Kafala) work for UAE work visas?",
        answer: "The UAE's employment visa system operates on employer sponsorship: your employer applies for a work permit (from MOHRE for mainland, or free zone authority), then applies for an entry permit and residence visa on your behalf. Process: (1) Employer obtains MOHRE approval for the work permit. (2) Entry permit issued — allows you to enter UAE (typically valid 2 months). (3) Medical fitness test after arrival. (4) Emirates ID registration (biometrics). (5) Residence visa stamped in passport (valid 2 years standard, 3 years for specialists). The employer must be UAE-registered and approved to sponsor workers. Changing jobs requires the employer's consent (transfer of sponsorship) or the expiry/cancellation of your current visa. A 2022 law change removed the mandatory 'No Objection Certificate' from the previous employer for most cases — workers can change employers without NOC after serving minimum contract period.",
      },
      {
        question: "What is the WPS (Wages Protection System) in the UAE?",
        answer: "The Wages Protection System (WPS) is a mandatory electronic salary transfer system operated by MOHRE that ensures employees are paid on time and in full. Employers registered under MOHRE must pay salaries through UAE banks connected to the WPS. Salaries must be paid within 10 days of the due date. Non-compliant employers face: fines of AED 5,000–500,000, work permit bans, court action. For employees: if your employer has not paid your salary for 60+ days, you can file a complaint through the MOHRE smart app or call center. MOHRE may transfer your visa sponsorship to the Ministry of Human Resources during dispute resolution, protecting your legal status. WPS applies to mainland MOHRE-registered companies — free zone employment is not covered.",
      },
    ],
    rejectionReasons: [
      "Work permit not approved by MOHRE before entry — employees must not begin work before the work permit is in place",
      "Employer not registered with MOHRE or free zone authority as an approved sponsor",
      "Medical fitness test failed — UAE requires all workers to pass a medical test including HIV and TB screening (positivity results in visa cancellation and deportation)",
      "Educational qualifications not attested — degree must be attested by Ministry of Education and Ministry of Foreign Affairs of home country, then by UAE embassy in home country",
      "Criminal record — any conviction, particularly for drug-related offences, results in visa refusal",
      "Nationality restrictions — some nationalities face additional scrutiny or restrictions for UAE employment visas due to bilateral immigration policies",
      "Job category quota issues — UAE enforces Emiratisation (Nafis) quotas for certain private sector roles; if the employer has not met quotas, work permits for some categories may be restricted",
      "Free zone work permit used for mainland work — violation of free zone employment conditions leads to visa cancellation",
      "Overstay of previous UAE visit or work visa — UAE tracks entry/exit records precisely; overstays result in fines and potential bans",
      "Salary below minimum wage for specific professional categories (UAE sets minimum wages for some professions; general minimum wage is not universal but some roles have sector-specific minimums)",
    ],
  },

  // ─── UK WORK VISA ──────────────────────────────────────────────────────────
  "uk-work": {
    officialSources: [
      { label: "Skilled Worker Visa — GOV.UK", url: "https://www.gov.uk/skilled-worker-visa" },
      { label: "Certificate of Sponsorship (CoS) Guidance", url: "https://www.gov.uk/government/collections/sponsorship-information-for-employers-and-educators" },
      { label: "Shortage Occupation List (SOL) — Migration Advisory Committee", url: "https://www.gov.uk/government/publications/migration-advisory-committee-mac-report-review-of-the-shortage-occupation-list" },
      { label: "Salary Requirements for Skilled Worker Visa", url: "https://www.gov.uk/skilled-worker-visa/your-job" },
      { label: "UK Visa Fees Schedule", url: "https://www.gov.uk/government/publications/visa-regulations-revised-table" },
      { label: "Intra-Company Transfer Visa", url: "https://www.gov.uk/intra-company-transfer-worker-visa" },
    ],
    faqs: [
      {
        question: "What is the minimum salary for a UK Skilled Worker visa in 2024?",
        answer: "From April 2024, the general minimum salary for a Skilled Worker visa is GBP 38,700 per year (increased from GBP 26,200). This applies to most roles. The going rate for the specific occupation (set by the Home Office based on ONS data) must also be met — and you must be paid whichever is higher: GBP 38,700 or the going rate. Exceptions: Health and Care Worker roles have their own salary scales based on NHS pay bands. New entrant roles (workers under 26, recent graduates, switching from student visa) qualify for a 70% going rate threshold (but still minimum GBP 30,960). Workers in certain shortage occupations may have modified thresholds. Annual increases: the GBP 38,700 threshold increased significantly in 2024 — check the current Home Office salary tables before applying as these figures are updated.",
      },
      {
        question: "What is a Certificate of Sponsorship (CoS) and how does my employer get one?",
        answer: "A Certificate of Sponsorship (CoS) is a digital record — not a physical document — assigned to you by your UK employer confirming they are sponsoring your Skilled Worker visa. Your employer must be on the Register of Licensed Sponsors before they can issue a CoS. If your employer is not already licensed, they must apply to UKVI for a Sponsor Licence (processing: 8 weeks, fee: GBP 536 for small employers, GBP 1,476 for medium/large). Once your employer has a licence, they assign you a CoS reference number. You include this number in your visa application. The CoS contains your job details, salary, start date, and SOC code — all must match your visa application exactly. Any discrepancy between the CoS and your application can cause refusal.",
      },
      {
        question: "Can I switch to a Skilled Worker visa from inside the UK?",
        answer: "Yes — switching to a Skilled Worker visa from inside the UK is possible for most visa holders. Eligible to switch from: Student visa, Graduate visa, Skilled Worker visa (different employer), Intra-Company Transfer, Global Talent, and most other UK visas. Not eligible to switch from: Standard Visitor visa, Short-term study visa, Seasonal Worker visa. To switch, you must have a valid CoS from a licensed sponsor, meet all eligibility requirements, and apply before your current visa expires. You cannot switch from a Visitor visa — you must leave the UK and apply from abroad if currently on a visitor visa. Processing: 3 weeks standard, 5 working days priority (GBP 500 extra), or next working day super priority (GBP 800 extra).",
      },
      {
        question: "What is the Health and Care Worker visa and how is it different from Skilled Worker?",
        answer: "The Health and Care Worker visa is a sub-category of the Skilled Worker visa specifically for doctors, nurses, allied health professionals, and adult social care workers employed by the NHS, NHS supply chain, or CQC-regulated adult social care providers. Key differences: visa fee is waived (Health and Care Worker visa is free). NHS Immigration Health Surcharge is waived. Salary thresholds are based on NHS Agenda for Change pay bands (NHS Band 3–8 equivalent) rather than the general GBP 38,700 minimum. Processing: same as Skilled Worker (3 weeks standard). Scope: includes most NHS healthcare roles from Band 3 upwards and registered nurses. Adult social care roles in England added in 2022. Dependent family members must pay the IHS.",
      },
    ],
    rejectionReasons: [
      "Salary below GBP 38,700 (from April 2024) or below the going rate for the SOC code — whichever is higher",
      "Employer is not on the Register of Licensed Sponsors — verify at gov.uk/government/publications/register-of-licensed-sponsors-workers",
      "CoS reference number invalid, expired (CoS expires 3 months from assignment), or job details don't match the application",
      "SOC code on the CoS does not match an eligible Skilled Worker occupation at RQF Level 3 or above",
      "English language requirement not met — CEFR B1 level required; accepted tests: IELTS UKVI, LanguageCert, PTE Academic UKVI, Trinity College SELT, or degree taught/assessed in English",
      "Criminal conviction — immigration history must be disclosed; serious criminal history may trigger a mandatory refusal",
      "Maintenance requirement not met — applicants from outside the UK must show GBP 1,270 in their bank account held for 28 consecutive days before applying",
      "Switching from a Visitor visa — not permitted; must apply from outside the UK",
      "Role is not genuine — UKVI may scrutinize whether a small business genuinely needs to hire internationally for the specific role",
      "NHS surcharge payment failed — must be paid upfront for the full visa duration",
    ],
  },

  // ─── UK COUNTRY HUB ────────────────────────────────────────────────────────
  "uk-hub": {
    officialSources: [
      { label: "UK Visas and Immigration — GOV.UK", url: "https://www.gov.uk/browse/visas-immigration" },
      { label: "Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "UK Immigration Health Surcharge", url: "https://www.gov.uk/healthcare-immigration-application" },
      { label: "Indefinite Leave to Remain (ILR)", url: "https://www.gov.uk/indefinite-leave-to-remain" },
      { label: "British Citizenship Eligibility", url: "https://www.gov.uk/british-citizenship" },
      { label: "Electronic Travel Authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
    extraSections: [
      {
        heading: "All UK Visa Categories — Quick Reference 2024",
        body: `| Visa Type | Purpose | Duration | Fee (GBP) | NHS Surcharge |
|---|---|---|---|---|
| Standard Visitor | Tourism, family, short business | Up to 6 months | 115 (6 month) | None |
| Student Visa | Study at licensed institution | Course duration + 4 months | 490 | GBP 776/year |
| Graduate Route | Post-study work | 2 years (3 PhD) | 822 | GBP 776/year |
| Skilled Worker | Employment by licensed sponsor | Up to 5 years | 719–1,420 | GBP 1,035/year |
| Health & Care Worker | NHS / care sector employment | Up to 5 years | Free | Waived |
| Intra-Company Transfer | Same employer, UK branch | Up to 5 years | 719–1,420 | GBP 1,035/year |
| Global Talent | Exceptional talent/promise | Up to 5 years | 167 | GBP 1,035/year |
| Innovator Founder | Establish innovative business | 3 years | 1,486 | GBP 1,035/year |
| Family Visa (spouse/partner) | Join UK settled person | 2.5 years initial | 1,846 | GBP 1,035/year |
| Youth Mobility (Tier 5) | Working holiday for 18–30 | 2 years | 298 | GBP 1,035/year |

**Path to Settlement and Citizenship:**
Indefinite Leave to Remain (ILR): after 5 years on most qualifying visas (Skilled Worker, Global Talent, etc.) — fee GBP 2,885.
British Citizenship (naturalisation): 12 months after ILR, with 5 years total continuous residence — fee GBP 1,605.`,
      },
    ],
  },

  // ─── USA COUNTRY HUB ───────────────────────────────────────────────────────
  "usa-hub": {
    officialSources: [
      { label: "US Visa Types — State Department", url: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/all-visa-categories.html" },
      { label: "USCIS — US Citizenship and Immigration Services", url: "https://www.uscis.gov" },
      { label: "US Visa Appointment Wait Times", url: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html" },
      { label: "ESTA (Visa Waiver Program)", url: "https://esta.cbp.dhs.gov/" },
      { label: "Visa Bulletin (Green Card Priority Dates)", url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" },
      { label: "Check I-94 Authorized Stay", url: "https://i94.cbp.dhs.gov" },
    ],
    extraSections: [
      {
        heading: "All US Visa Categories — Quick Reference 2026",
        body: `**Nonimmigrant (Temporary) Visas:**

| Visa | Purpose | Duration | Key Requirement |
|---|---|---|---|
| B-1/B-2 | Tourism / Business | Up to 6 months | Show non-immigrant intent |
| F-1 | Student (academic) | Duration of status | I-20 from SEVP-certified school |
| J-1 | Exchange visitor | Program duration | DS-2019 from program sponsor |
| H-1B | Specialty occupation worker | 3 years (6 max) | Lottery, GBP 85,000 annual cap |
| L-1 | Intracompany transferee | 3–7 years | 1 year abroad with same company |
| O-1 | Extraordinary ability | 3 years | Extraordinary recognition in field |
| TN | NAFTA/USMCA (Canada, Mexico) | 3 years | TN-eligible occupation, border |
| E-2 | Treaty investor | 2 years, renewable | Investment in US business |
| K-1 | Fiancé(e) of US citizen | 90 days | Marry within 90 days of entry |

**Immigrant (Permanent) Visas:**

| Category | Who | Processing |
|---|---|---|
| EB-1 | Extraordinary ability, outstanding professors, multinational managers | Faster — no PERM required for EB-1A/EB-1B |
| EB-2 NIW | Professionals with national interest waiver | No PERM or employer needed |
| EB-2/EB-3 | Professionals and skilled workers | Requires PERM labor certification |
| EB-5 | Investors ($800K–$1.05M) | Direct path to green card |
| Family-based (IR-1/CR-1) | Spouses, parents, children of US citizens | Immediate relative: no waiting |

**ESTA Visa Waiver Program:**
Citizens of 42 countries can enter for 90 days without a visa via ESTA. Apply at esta.cbp.dhs.gov — cost USD 21. Valid 2 years. Not eligible if you have visited Cuba, Iran, Iraq, Libya, North Korea, Somalia, Sudan, Syria, or Yemen since March 1, 2011.`,
      },
    ],
  },

};
