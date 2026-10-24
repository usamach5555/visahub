import type { EditorialArticle } from "./editorial-articles";

/**
 * Visa status updates — what is open, paused, closed or changing, and why.
 * These pages describe fast-moving situations. Each one states the date it was
 * checked, separates what an official source confirms from what is only
 * reported, and links to the sources read. Update `lastVerified` whenever a
 * page is re-checked.
 */
export const VISA_UPDATES: EditorialArticle[] = [
  {
    slug: "visa-updates-open-paused-closed-october-2026",
    title: "Visa Updates: What Is Open, Paused or Closed Right Now (October 2026)",
    metaDescription:
      "A dated overview of recent visa changes: the US 75-country immigrant visa pause, US consular suspensions, USCIS fee rises, China's new visa process in India, Turkmenistan's e-visa launch and unconfirmed reports about Qatar and Pakistan.",
    category: "visa-update",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 5,
    tags: ["visa news", "visa suspended", "visa updates 2026", "visa open", "visa closed"],
    sources: [
      { label: "Current Status of U.S. Visa Services By Country — Boundless (updated 14 Oct 2026)", url: "https://www.boundless.com/blog/us-embassy-and-consulate-statuses" },
      { label: "75-Country Immigrant Visa Pause Vacated: October 2026 Status — USAPedia", url: "https://usapedia24.com/en/guides/immigrant-visa-pause-75-countries/" },
      { label: "Turkmenistan launches e-Visa system on October 1, 2026 — VisasNews", url: "https://visasnews.com/en/turkmenistan-launches-e-visa-system-on-october-1-2026/" },
    ],
    sections: [
      {
        heading: "How to read this page",
        body: `Visa rules change quickly and often at short notice. This page is a **summary dated 24 October 2026** of changes we have read about, with the **reason given** for each and a plain label for how certain we are. The final word is always the official government or embassy page for your case, which we link where we could read it.\n\nLabels used below:\n\n- **Confirmed by court record or official notice** — we read a primary or near-primary report.\n- **Reported** — described by news sites or law-firm summaries but not read on an official page by us.\n- **Unconfirmed** — reported, but the governments involved have not confirmed it.`,
      },
      {
        heading: "Status table",
        body: `| Change | What it means | Status | Reason given |\n|---|---|---|---|\n| US 75-country immigrant visa suspension | Court vacated it on 21 Aug 2026; interviews reported to have resumed with delays; appeal pending | Reported | State Department argued public-charge risk; court found nationality-based refusals unlawful |\n| US consular posts with services suspended | Some posts paused all or most visa services | Reported | Security, outbreaks, staffing or local restrictions, depending on the post |\n| US immigration fee increases | USCIS fees rise 16 Oct 2026 and EB-5 fees rise 30 Nov 2026 | Reported | Inflation adjustments under H.R. 1; a new fee rule for EB-5 |\n| China visa process in India | From 26 Oct 2026 the embassy and Mumbai consulate process applications directly | Reported from an embassy announcement | Administrative restructuring |\n| Turkmenistan e-Visa | Launched 1 Oct 2026; eligible nationalities and fees not yet published | Reported | New online system |\n| Qatar visa on arrival for Pakistanis | Reported halt; Pakistan's Foreign Office denied a ban | Unconfirmed | No official reason stated |`,
      },
      {
        heading: "Where to read each in detail",
        body: `- **US immigrant visas:** see our page on the 75-country immigrant visa suspension and the court ruling.\n- **US visa services by country:** see the list of consular posts paused or closed.\n- **US fees:** see the page on USCIS fee changes in October and November 2026.\n- **China:** see the new China visa process for applicants in India.\n- **Turkmenistan:** see the Turkmenistan e-Visa launch page.\n- **Qatar and Pakistan:** see what is and is not confirmed.`,
      },
      {
        heading: "What to do if a visa you need is affected",
        body: `1. **Check the official source first** — the embassy or consulate that handles your application, or the government immigration website.\n2. **Look at the date.** A page last updated months ago may be out of date.\n3. **Keep records**: appointment confirmations, refusal letters and receipts. If a policy is later reversed, these help you ask for reconsideration.\n4. **Avoid paying anyone who promises to bypass a pause or closure.** No agent can reopen a suspended visa category.\n5. **Do not book non-refundable travel** until you hold the visa.`,
      },
    ],
  },

  {
    slug: "us-immigrant-visa-75-country-suspension-court-ruling",
    title: "US Immigrant Visa Suspension for 75 Countries: Court Ruling, Reason and Current Status",
    metaDescription:
      "The State Department suspended immigrant visa issuance for nationals of 75 countries from January 2026. A New York federal court vacated it on 21 August 2026. What was suspended, why, what has happened since, and who is still affected.",
    category: "visa-update",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 6,
    tags: ["immigrant visa pause", "75 countries", "US visa suspension", "court ruling", "public charge"],
    sources: [
      { label: "State Department pauses immigrant visa interviews following court ruling vacating 75-country suspension — Global Immigration Blog", url: "https://www.globalimmigrationblog.com/2026/08/state-department-pauses-immigrant-visa-interviews-following-court-ruling-vacating-75-country-suspension/" },
      { label: "US judge strikes down immigrant visa suspension affecting Pakistan, 74 other nations — The Nation (Pakistan), 23 Aug 2026", url: "https://www.nation.com.pk/23-Aug-2026/us-judge-strikes-immigrant-visa-suspension-affecting-pakistan-74-nations" },
      { label: "75-Country Immigrant Visa Pause Vacated: October 2026 Status — USAPedia", url: "https://usapedia24.com/en/guides/immigrant-visa-pause-75-countries/" },
      { label: "US Department of State — Visas", url: "https://travel.state.gov/content/travel/en/us-visas.html" },
    ],
    sections: [
      {
        heading: "Short answer",
        body: `**As of 24 October 2026 the 75-country immigrant visa suspension has been struck down by a federal court, but the government is appealing.** Secondary sources report that immigrant visa interviews have resumed with scheduling delays. This applies to **immigrant visas only** (people moving to the US permanently, mainly through family sponsorship), not to tourist, student or work visas.\n\nWe could not read the State Department's own notice on this because its page did not open, so treat the details below as **reported**, and confirm with the US embassy that handles your case.`,
      },
      {
        heading: "What was suspended and when",
        body: `According to reporting, a State Department policy suspended **immigrant visa issuance to nationals of 75 countries**, taking effect on **21 January 2026**. Pakistan was one of the 75 countries. During the suspension, applicants could still submit documents and attend interviews, but consular officers refused the visas under **INA Section 221(g)** based on nationality alone, according to the legal summary we read.`,
      },
      {
        heading: "The reason the government gave",
        body: `The State Department defended the policy by arguing that applicants from the listed countries faced a **high risk of becoming a "public charge"**, meaning someone who might rely on government resources in the US. The reporting we read does not quote a published official justification beyond that argument.`,
      },
      {
        heading: "The court ruling",
        body: `On **21 August 2026**, the US District Court for the Southern District of New York, in *Catholic Legal Immigration Network, Inc. v. Rubio*, vacated the policy and the refusals based solely on it. Judge Jeannette Vargas found it violated the Immigration and Nationality Act's ban on nationality-based discrimination and exceeded the Secretary of State's authority, calling it "patently unlawful" in the words reported by Pakistani media.\n\nRefusals that also rest on an **independent ground of ineligibility** were not vacated.`,
      },
      {
        heading: "What has happened since",
        body: `- Reports in late August said the State Department **paused immigrant visa interview appointments** so officers could be trained on updated public-charge guidance, with no end date announced. The same period's reports say the department then stated the 75-country pause was "no longer in effect" (28 August).\n- The government **appealed**. Secondary sources say a district court denied a stay on 25 September and the government asked the Second Circuit for an emergency stay on 28 September. As of 5 October that court had not ruled, so the ruling remained in force.\n- The court ordered refusals based solely on the suspension to be **reconsidered**. Consulates were reported to be reprocessing them, oldest first. The government reportedly counted more than **43,000** such refusals by 8 September.\n\nBecause a stay could reinstate the suspension during the appeal, the situation may have changed after the dates above.`,
      },
      {
        heading: "What this means if you are affected",
        body: `- A court vacating the policy **does not guarantee approval**. Officers still apply normal grounds such as public charge, document review and security checks.\n- If your case was refused solely because of your nationality, ask the consulate how it is handling reconsideration. Keep your refusal letter and case number.\n- Expect **scheduling delays**. Check your case in the National Visa Center portal and the embassy's appointment page.\n- A separate measure, **Presidential Proclamation 10998**, restricts certain nationalities from some visa categories and is not affected by this ruling, according to the summary we read. See our list of consular and nationality restrictions.\n\nThis is general information, not legal advice. For a specific case, talk to a licensed immigration attorney.`,
      },
    ],
  },

  {
    slug: "us-visa-services-paused-or-closed-by-country",
    title: "US Visa Services Paused or Closed by Country: List and Reasons (October 2026)",
    metaDescription:
      "Which US embassies and consulates have paused, suspended or limited visa services in October 2026, and the reasons reported — security, outbreaks, staffing — plus the countries covered by Proclamation 10998 restrictions.",
    category: "visa-update",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 6,
    tags: ["us embassy closed", "visa services suspended", "proclamation 10998", "us visa by country", "consular status"],
    sources: [
      { label: "Current Status of U.S. Visa Services By Country — Boundless (page updated 14 Oct 2026)", url: "https://www.boundless.com/blog/us-embassy-and-consulate-statuses" },
      { label: "US Department of State — Visas", url: "https://travel.state.gov/content/travel/en/us-visas.html" },
    ],
    sections: [
      {
        heading: "About this list",
        body: `This list summarises a status page by an immigration-services company, **Boundless**, last updated **14 October 2026**. It covers only some countries and reflects what that source reported, not an official State Department list. We could not open the State Department's own page, so **check the website of the specific US embassy** before you act. Status can change within days.`,
      },
      {
        heading: "All or most visa services paused or suspended",
        body: `| Country | Post | Status | Reason, as reported |\n|---|---|---|---|\n| Afghanistan | Kabul | All consular services suspended | Not stated |\n| Belarus | Minsk | All consular services suspended | Security concerns tied to Russia's invasion of Ukraine |\n| DR Congo | Kinshasa | Immigrant and nonimmigrant services paused since 18 May 2026 | Ebola outbreak |\n| Uganda | Kampala | Immigrant and nonimmigrant services paused since 18 May 2026 | Ebola outbreak |\n| Haiti | Port-au-Prince | Immigrant and nonimmigrant services paused | Safety concerns |\n| Libya | Libya | Immigrant and nonimmigrant services suspended | Not stated |\n| Russia | Moscow | All visa services suspended | Russian government restrictions |\n| Russia | Yekaterinburg, Vladivostok | Suspended | Critically low staffing |\n| Somalia | Somalia | Immigrant and nonimmigrant services suspended | Not stated |\n| Sudan | Khartoum | Embassy closed | Ongoing violence |\n| Venezuela | Caracas | Immigrant and nonimmigrant services suspended | Not stated |\n| Yemen | Sanaa | All consular services suspended until further notice | Not stated |\n| Syria, Iran, North Korea | None | No visa services, no US diplomatic presence | No US presence |`,
      },
      {
        heading: "Routine services moved or limited",
        body: `- **Eritrea, Niger, South Sudan, Zimbabwe:** routine visa services were moved to regional hubs from 1 August 2026, though some posts still offer limited nonimmigrant services.\n- **Lithuania (Vilnius):** no routine immigrant visas since 2 December 2024; cases go to Stockholm.\n- **Ukraine (Kyiv):** immigrant visas available; nonimmigrant services limited, with routine applicants directed to Warsaw or Krakow.\n- **Nigeria:** services continue, but B-1/B-2 applicants must post a bond of US$10,000 to US$20,000 from 21 January 2026, according to the source.\n- **China:** limited nonimmigrant interviews on specific days, and new rules for applicants under 14.\n- **Cuba:** immigrant visas resumed and some nonimmigrant categories offered, but not B-1/B-2.`,
      },
      {
        heading: "Reported as open or resumed",
        body: `The same source lists Brazil, Canada, Colombia (appointments may be limited), the Dominican Republic, India, Indonesia, Israel, Lebanon, Mexico, the Philippines, Thailand, the United Kingdom and Vietnam as open or resumed. "Open" does not mean easy: wait times can be long.`,
      },
      {
        heading: "Nationality-based restrictions: Proclamation 10998",
        body: `The source also describes a presidential proclamation, **effective 1 January 2026**, that restricts some nationalities regardless of where they apply:\n\n- **Full suspension of new immigrant and nonimmigrant visas:** Afghanistan, Burkina Faso, Burma, Chad, Republic of the Congo, Equatorial Guinea, Eritrea, Haiti, Iran, Laos, Libya, Mali, Niger, Sierra Leone, Somalia, South Sudan, Sudan, Syria, Yemen.\n- **Partial suspension (immigrant visas plus B-1/B-2, F, M and J):** Angola, Antigua and Barbuda, Benin, Burundi, Côte d'Ivoire, Cuba, Dominica, Gabon, The Gambia, Malawi, Mauritania, Nigeria, Senegal, Tanzania, Togo, Tonga, Venezuela, Zambia, Zimbabwe.\n- **Immigrant visas only:** Turkmenistan.\n\nVisas issued before 1 January 2026 are not revoked, according to the source, and the policy also applies to people using Palestinian Authority travel documents. Read the proclamation text and the embassy notice for exceptions that may apply.`,
      },
      {
        heading: "If your country is on the list",
        body: `Do not pay an agent who says they can "reopen" a closed post. Ask the embassy which post handles your category now, keep appointment emails and receipts, and re-check the embassy page before you travel to an interview. If your nationality is on the proclamation list, ask the embassy or an immigration attorney about exceptions before you apply, so you do not lose fees on an application that cannot proceed.`,
      },
    ],
  },

  {
    slug: "uscis-fee-changes-october-november-2026",
    title: "USCIS Fee Changes: 16 October and 30 November 2026",
    metaDescription:
      "USCIS fees rose on 16 October 2026 for asylum, parole, TPS and some work permits, and EB-5 fees nearly double from 30 November 2026. Old and new amounts, why they changed and who is affected.",
    category: "visa-update",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 4,
    tags: ["uscis fees 2026", "eb-5 fee increase", "tps fee", "i-131 fee", "immigration fees"],
    sources: [
      { label: "US visa and immigration fees increase: New USCIS charges effective October 16 — Business Today", url: "https://www.businesstoday.in/nri/visa/story/us-visa-and-immigration-fees-increase-new-uscis-charges-effective-october-16-559171-2026-10-02" },
      { label: "EB-5 Filing Fees Nearly Double — Mondaq", url: "https://www.mondaq.com/unitedstates/investment-immigration/1857570/eb-5-filing-fees-nearly-double-what-investors-must-know-before-november-30-2026" },
      { label: "USCIS — Fee Schedule", url: "https://www.uscis.gov/g-1055" },
    ],
    sections: [
      {
        heading: "What changed on 16 October 2026",
        body: `Business Today reports that USCIS raised several fees for applications postmarked **on or after 16 October 2026**. Applications sent with the old fee may be rejected. The increases are **inflation adjustments required under H.R. 1**, based on inflation between July 2025 and July 2026.\n\n| Application | Old fee | New fee |\n|---|---|---|\n| Annual Asylum Application Fee | $102 | $105 |\n| Form I-131, immigration parole | $1,020 | $1,050 |\n| Form I-765, initial work permit for certain asylum applicants, parole applicants or TPS beneficiaries | $560 | $570 |\n| Form I-821, Temporary Protected Status | $510 | $520 |\n\nThe affected groups are asylum applicants, people seeking immigration parole, TPS applicants and beneficiaries, and people applying for an initial work permit in those categories.`,
      },
      {
        heading: "EB-5 fees from 30 November 2026",
        body: `EB-5 investor filing fees are reported to rise for requests postmarked on or after **30 November 2026**. Law-firm commentary explains that a federal court stayed EB-5 fees in an earlier 2024 fee rule (*Moody v. Noem*, decided 12 November 2025) because DHS needed a program-specific fee study, and that a **final rule of 30 September 2026** sets the new schedule.\n\n| Filing or fee | Before 30 Nov 2026 | From 30 Nov 2026 |\n|---|---|---|\n| Form I-526 (standalone investor petition) | $3,675 | $7,615 |\n| Form I-526E (regional center petition) | $3,675 | $7,850 |\n| Integrity Fund Fee, per I-526E investor | $1,000 | $1,100 |\n| Form I-829 (remove conditions) | $3,750 | $5,000 |\n| Annual Integrity Fund Fee, regional centre with 20 or fewer investors | $10,000 | $11,000 |\n| Annual Integrity Fund Fee, regional centre with more than 20 investors | $20,000 | $22,000 |\n\nInvestment amounts do not change: $1,050,000 standard, or $800,000 in a targeted employment area or infrastructure project.`,
      },
      {
        heading: "What to do",
        body: `1. Check the **USCIS fee schedule (Form G-1055)** on the day you file. It is the authority for the exact fee for your form.\n2. Use the fee that applies to the **postmark date**, not the date you signed.\n3. Do not file an incomplete or weak case only to pay a lower fee. A rejected or denied case can cost more than the fee difference.\n4. Fees here are for USCIS filings. The visa application fee paid to the State Department is separate, see our guide to US visa application fees.\n\nThis is general information, not legal advice.`,
      },
    ],
  },

  {
    slug: "china-visa-india-new-process-26-october-2026",
    title: "China Visa in India: New Application Process From 26 October 2026",
    metaDescription:
      "From 26 October 2026 the Chinese Embassy in New Delhi and Consulate in Mumbai process visa applications directly, and the New Delhi visa application centre stops accepting new ones. What changes, the 30-day rule and the reason given.",
    category: "visa-update",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 4,
    tags: ["china visa india", "chinese visa application", "new delhi visa centre", "china embassy", "visa process change"],
    sources: [
      { label: "China introduces new visa application process in India from 26 October — Travel And Tour World", url: "https://www.travelandtourworld.com/news/article/4nsv2x4sngwq/" },
      { label: "Embassy of the People's Republic of China in India", url: "http://in.china-embassy.gov.cn/eng/" },
    ],
    sections: [
      {
        heading: "What is changing",
        body: `Travel And Tour World reports, citing an announcement by the Chinese Embassy in India on **22 October 2026**, that from **26 October 2026** the Embassy in New Delhi and the Consulate General in Mumbai will **process visa and consular legalisation applications directly**, replacing the outsourced visa application centres.\n\nThe **New Delhi Chinese Visa Application Centre will stop accepting new applications**. It will still let applicants collect processed passports and documents until **noon on Friday, 30 October**.`,
      },
      {
        heading: "The new steps, as reported",
        body: `1. Complete the **online form** and upload documents through the Chinese Ministry of Foreign Affairs platform. No fee is charged at this stage.\n2. After the online application is approved, you receive an **email**.\n3. Submit your **physical documents** to the relevant mission within **30 days** of that email.\n4. **Biometrics** may be required, depending on the visa type.\n\nThe report adds that the missions currently accept **only bank-issued demand drafts** for payment, and that the New Delhi centre waives its service fee for online applications submitted after 5 pm on 23 October, though the official Chinese visa fee still applies.`,
      },
      {
        heading: "Which mission handles your application",
        body: `- **Mumbai** covers Maharashtra and Karnataka.\n- **New Delhi** covers all other states and territories, including, temporarily, the states of the Kolkata consular district (West Bengal, Bihar, Jharkhand, Odisha and Chhattisgarh).`,
      },
      {
        heading: "Who is affected and why",
        body: `The change affects Indian travellers applying for tourist, business, student and other Chinese visas, and anyone needing consular legalisation. The report describes it as an **administrative restructuring**: the official notice frames it as facilitating visa and consular services and does not cite a change in eligibility or in relations between the countries.`,
      },
      {
        heading: "What to do",
        body: `Read the notice on the Chinese Embassy website before you start, and do not pay any agency for access to the new online platform. If you already submitted at the New Delhi centre, collect your documents before the cut-off. Because the details come from a news report of the announcement, confirm the steps and the payment method on the embassy page.`,
      },
    ],
  },

  {
    slug: "turkmenistan-e-visa-launch-october-2026",
    title: "Turkmenistan e-Visa: What We Know After the 1 October 2026 Launch",
    metaDescription:
      "Turkmenistan's State Migration Service announced an e-Visa system from 1 October 2026. What is reported, what is not yet published (eligible nationalities, fees, processing time), and the invitation-letter change.",
    category: "visa-update",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 3,
    tags: ["turkmenistan e visa", "turkmenistan visa", "invitation letter", "evisa launch", "central asia visa"],
    sources: [
      { label: "Turkmenistan launches e-Visa system on October 1, 2026 — VisasNews", url: "https://visasnews.com/en/turkmenistan-launches-e-visa-system-on-october-1-2026/" },
    ],
    sections: [
      {
        heading: "What was announced",
        body: `VisasNews reports that Turkmenistan's **State Migration Service announced on 30 September 2026** that its **e-Visa system would launch on 1 October 2026**.`,
      },
      {
        heading: "What is not yet published",
        body: `As of the report we read, these details had **not been published**:\n\n- **Which nationalities** can apply.\n- **Which visa categories** the system covers.\n- **The fee**.\n- **Processing time**.\n\nThe report says the portal's operating rules must be published before it is clear who qualifies. We therefore do not state any of these.`,
      },
      {
        heading: "The invitation letter change",
        body: `The report says 2025 amendments to Turkmenistan's migration law mean an **invitation does not need to be arranged or issued** to obtain an e-Visa. Previously tourists generally needed an invitation approved by the State Migration Service, usually arranged through a travel agency or organisation.`,
      },
      {
        heading: "Which website to use",
        body: `The announcements did not give a direct web address. VisasNews and another visa-news site identified **evisa.migration.gov.tm** as the likely application portal, but it was hard to access when the report was written. A separate page, **migration.gov.tm/evisa**, is for verifying issued e-Visas.\n\nBe careful with look-alike sites. Do not pay any fee until you are sure you are on the government's own domain, and check with a Turkmenistan embassy if you are unsure.`,
      },
      {
        heading: "US note",
        body: `Turkmenistan is also listed, in a summary of a separate US measure, as a country whose nationals face restrictions on US immigrant visas. That is unrelated to the e-Visa for visitors to Turkmenistan.`,
      },
    ],
  },

  {
    slug: "qatar-visa-on-arrival-pakistan-reports-unconfirmed",
    title: "Qatar and Pakistan: Reports of a Visa-on-Arrival Halt — What Is and Is Not Confirmed",
    metaDescription:
      "Pakistani media report that Qatar stopped issuing visas on arrival to Pakistanis and that Hayya applications are pending. Pakistan's Foreign Office says no ban has been notified. What is confirmed, what is not, and what travellers should check.",
    category: "visa-update",
    publishedAt: "2026-10-24",
    lastVerified: "2026-10-24",
    readingTimeMinutes: 4,
    tags: ["qatar visa pakistan", "visa on arrival halted", "hayya portal", "pakistan travel", "unconfirmed report"],
    sources: [
      { label: "Hayya applications pending: Qatar halts visa-on-arrival for Pakistanis — Business Recorder, 16 Sep 2026", url: "https://www.brecorder.com/news/40439678/hayya-applications-pending-qatar-halts-visa-on-arrival-for-pakistanis" },
    ],
    sections: [
      {
        heading: "What is reported",
        body: `Business Recorder reported on **16 September 2026** that **Qatar has stopped issuing visas on arrival to Pakistani nationals**, and that visa applications filed through the **Hayya web portal** have been **pending for months** without a decision. The report does not say when the halt began.`,
      },
      {
        heading: "What has not been confirmed",
        body: `- **No reason** was stated by the Qatari government in the report.\n- **Pakistan's Foreign Office has not confirmed** the change. Sources said Pakistan had not received any formal communication from Qatar, so it could not be described as an officially notified visa ban.\n- At the last briefing, spokesperson **Sajjad Haider Khan denied a visa ban**, saying visa decisions rest on each country's national interests and that relations with Qatar are excellent.\n- Pakistan's embassy in Doha and Qatar's mission in Islamabad **did not respond** to the newspaper's requests for comment.\n\nBecause of that, we describe this as **unconfirmed**. It may have been resolved or changed after the report date.`,
      },
      {
        heading: "Other effects the report mentions",
        body: `The report adds that the restrictions reportedly affect Pakistanis seeking **Finland residence permits**, which require in-person biometric verification at the VFS Global centre in Doha. Officials said the issue would be raised with Qatar through diplomatic channels to clarify the restrictions.`,
      },
      {
        heading: "What travellers should do",
        body: `1. **Do not rely on visa on arrival.** Check the Qatar government's visa service and your airline for your passport before you buy a ticket.\n2. If you applied on Hayya, keep your application number and screenshots, and use only the official portal.\n3. **Avoid paying agents** who promise a guaranteed Qatar visa during a period of uncertainty.\n4. **Do not book non-refundable travel** until the visa is approved.\n5. Re-check official pages and the Pakistan Foreign Office briefings for any later announcement.`,
      },
    ],
  },
];
