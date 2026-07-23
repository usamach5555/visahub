import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Target, BadgeDollarSign, RefreshCw, Scale, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about VisaProcessInfo — your free, independent immigration information resource covering visa guides for 127 countries. Our mission, team, and editorial standards.",
  alternates: { canonical: "https://www.visaprocessinfo.com/about" },
  keywords: [
    "about VisaProcessInfo", "visa guide team", "immigration experts",
    "visa information resource", "free visa guides", "immigration editorial standards",
    "visa guide mission", "immigration editorial standards",
    "independent visa information", "trusted visa resource", "visa guide history",
  ],
};

const STATS = [
  { value: "127", label: "Countries Covered" },
  { value: "10,000+", label: "Free Visa Guides" },
  { value: "5", label: "Visa Categories" },
  { value: "2020", label: "Founded" },
];

const EDITORIAL_ROLES = [
  {
    initials: "RE",
    role: "Research & Data Team",
    bio: "Our research team compiles visa fees, processing times, requirements, and application steps for each country directly from official government immigration portals and embassy websites, into a structured dataset that powers every guide for that country.",
  },
  {
    initials: "VV",
    role: "Verification & Accuracy Team",
    bio: "Each country's data is checked against the official government source before it goes live — correct currency for fees, current processing-time guidance, and working links to the official immigration portal and embassy.",
  },
  {
    initials: "CP",
    role: "Content & Policy Update Team",
    bio: "When we identify a policy or fee change for a country, we update that country's data. Because guides are generated from shared per-country data, the correction is reflected across every guide for that country and visa type.",
  },
  {
    initials: "QR",
    role: "Quality Review Team",
    bio: "Our page templates and long-form editorial articles are reviewed for factual accuracy, completeness, correct fee currency, and clarity before publication and whenever the underlying data changes.",
  },
];

const VALUES = [
  {
    Icon: Target,
    title: "Accuracy First",
    description:
      "Our guides are built from a per-country dataset researched from official government sources — embassy websites, immigration authority portals, and official fee schedules. We link to our sources and update the data when policies change.",
  },
  {
    Icon: BadgeDollarSign,
    title: "Always Free",
    description:
      "All our visa guides, checklists, and process walkthroughs are completely free. We are supported by advertising revenue, not by charging users for information that should be publicly available.",
  },
  {
    Icon: RefreshCw,
    title: "Regularly Updated",
    description:
      "Immigration policies change frequently. Because our guides are generated from a shared per-country dataset, updating a country's data propagates the change across every guide for that country and visa type in a single update.",
  },
  {
    Icon: Scale,
    title: "Independent & Impartial",
    description:
      "We are not affiliated with any government, embassy, or immigration firm. Our guides are independent, unbiased, and written solely to help applicants understand their options.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Globe className="w-4 h-4" /> Independent &middot; Free &middot; Trusted
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            About VisaProcessInfo
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            We are an independent editorial team committed to making visa and
            immigration information free, accurate, and easy to understand
            for everyone — researched from official government sources.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold text-primary-700">{s.value}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Mission */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                VisaProcessInfo was founded in 2020 with a simple
                mission: to provide accurate, up-to-date, and free visa and
                immigration information to anyone who needs it — regardless of
                their background or budget.
              </p>
              <p>
                We believe that access to clear immigration information should
                not be a privilege. Every year, thousands of visa applications
                are rejected not because applicants are ineligible, but because
                they submitted the wrong documents, misunderstood a
                requirement, or applied using outdated information.
              </p>
              <p>
                Our guides are designed to eliminate that problem. Written by
                people with real-world immigration experience, each guide
                explains not just <em>what</em> to do, but <em>why</em> each
                step matters — helping applicants build stronger, more
                complete applications.
              </p>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-primary-900 mb-4 text-lg">What We Cover</h3>
              <ul className="space-y-3 text-sm text-primary-800">
                {[
                  "Study visa guides for 127 destination countries",
                  "Work permit applications and employer sponsorship",
                  "Tourist and visitor visa requirements",
                  "Permanent residency and citizenship pathways",
                  "Business visa applications for corporate travellers",
                  "Visa interview preparation and biometrics",
                  "Visa rejection appeals and reapplication strategies",
                  "Country-specific immigration news and policy updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Our Editorial Standards</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-3">
                  <v.Icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Methodology */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Our Editorial Process</h2>
          <div className="relative">
            {[
              {
                step: "01",
                title: "Official Source Research",
                desc: "For each country, we research the official government immigration portal, embassy websites, and fee schedules, and compile the findings into a structured, per-country dataset.",
              },
              {
                step: "02",
                title: "Data Verification",
                desc: "That dataset is checked against the official sources for correct fee currency, current processing-time guidance, and working links to the official immigration portal and embassy.",
              },
              {
                step: "03",
                title: "Guide Generation",
                desc: "Verified country data is applied consistently across every visa type and guide format for that country, so every generated page reflects the same checked source data.",
              },
              {
                step: "04",
                title: "Monitoring & Corrections",
                desc: "We rely on reader reports and our own spot-checks to catch policy changes. A confirmed update to a country's data propagates automatically across every guide generated from it.",
              },
            ].map((item, i) => (
              <div key={item.step} className="flex gap-5 mb-6 last:mb-0">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 rounded-full bg-primary-800 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                    {item.step}
                  </div>
                  {i < 3 && <div className="w-0.5 flex-1 bg-primary-200 my-2" />}
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Team */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Our Editorial Team</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            VisaProcessInfo is operated by a small editorial team focused on immigration research and content accuracy. Our country and visa-type guides are produced through a structured pipeline: primary source research, data verification, and template-based guide generation, described below. Our long-form blog and editorial articles are separately researched and written as standalone pieces, each carrying its own publication date.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {EDITORIAL_ROLES.map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary-700">{member.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Transparency Notice:</strong> VisaProcessInfo is an independent digital publication. Our content is produced by a research and editorial team and reviewed for accuracy against official government sources. We do not claim professional legal status and all guides carry a disclaimer that they are not legal advice. For complex immigration cases, we always recommend consulting a licensed immigration lawyer or regulated adviser.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Story</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              VisaProcessInfo was created out of a recognition that the immigration information available online is often outdated, inaccurate, or written without any real understanding of how visa applications are actually evaluated. Thousands of visa applications are rejected every year not because applicants are ineligible, but because they relied on incorrect or outdated guidance — submitted wrong document formats, missed new financial requirements, or misunderstood a policy change that happened months earlier.
            </p>
            <p>
              The problem is not the applicants. It is the information ecosystem. The internet is flooded with immigration websites that recycle old content, use affiliate links to visa agencies, and are written by people with no first-hand knowledge of how consular officers actually evaluate applications. The gap between what applicants can easily find online and what they actually need to know is enormous — and for YMYL decisions like immigration, that gap has real consequences for people's lives.
            </p>
            <p>
              VisaProcessInfo was founded in early 2020 to close that gap. The timing was challenging — the COVID-19 pandemic created unprecedented disruption to international travel and visa processing worldwide. But it also created massive demand for clear, accurate, up-to-date information as millions of people needed to understand which visa categories were suspended, how processing times were affected, and what documentation requirements had changed.
            </p>
            <p>
              The site grew through the pandemic years as countries reopened and international movement resumed, expanding coverage country by country as we built out the underlying research for each destination.
            </p>
            <p>
              Today, VisaProcessInfo publishes guides covering 127 destination countries across study, work, tourist, business, and permanent residency categories. Our country and visa-type guides are generated from a structured dataset researched from official government sources for each country, applied consistently across every visa type and guide format — rather than each of the thousands of resulting pages being individually authored from scratch. Our long-form blog and editorial articles are separately researched and written as standalone pieces. We believe this combination — verified source data at scale, plus original long-form writing where it adds the most value — is a more honest description of how information sites at this scale actually work.
            </p>
            <p>
              Our funding model has also been carefully considered. We accept display advertising but do not sell sponsored content, do not accept payment from visa agencies or immigration lawyers for favourable mentions, and do not earn commissions from referrals to any service providers. This independence is non-negotiable for us. It means our readers can trust that every recommendation we make is based on what we believe is genuinely best for applicants — not what generates revenue for us.
            </p>
          </div>
        </section>

        {/* How We Research */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">How We Research and Verify Our Guides</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Our country and visa-type guides follow a data-first process: rather than researching and writing each of the thousands of resulting pages individually, we research and verify information once per country and reuse it consistently across every visa type and guide format for that country.
            </p>
            <p>
              <strong>Primary Sources First:</strong> Our research begins with the official government source. For each country, this means the official immigration ministry or home office website, the specific embassy or consulate pages for the destination country, and published fee schedules. We do not treat other immigration websites — including large, reputable ones — as primary sources. We go to the original government publication.
            </p>
            <p>
              <strong>Structured Data, Not Page-by-Page Rewriting:</strong> The requirements, fees, processing times, and application steps we gather for a country are stored as structured data and applied consistently across that country's guides. This means a correction or update only needs to be made once to take effect everywhere it's relevant, instead of being repeated — and potentially inconsistently applied — across dozens of individual pages.
            </p>
            <p>
              <strong>Reader Feedback Loop:</strong> We monitor reader feedback and correction submissions on every guide. Readers who notice outdated information, fee changes, or policy updates can submit corrections via our Contact page. We verify reported changes against official sources before updating our data.
            </p>
            <p>
              <strong>Ongoing Data Updates:</strong> We update a country's data when we identify that a policy, fee, or processing time has changed — through reader reports or our own periodic checks — rather than committing to a fixed review calendar across 127 countries and thousands of generated pages, which we don't think we could honestly guarantee.
            </p>
            <p>
              <strong>Complexity Flags:</strong> Guides covering complex legal areas — permanent residency pathways, citizenship applications, visa refusal appeals — include explicit notices directing readers to seek professional legal advice. These guides carry additional caveats because the information requirements vary substantially by individual circumstances and cannot be fully addressed in a general guide.
            </p>
            <p>
              <strong>What We Do Not Do:</strong> We do not accept payment to rush-publish guides for specific countries or visa types. We do not publish a guide for a country or visa category until we have located and verified the relevant official source information for it.
            </p>
          </div>
        </section>

        {/* Countries We Cover */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Why We Cover 127 Countries</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Our coverage of 127 destination countries was not chosen arbitrarily. Each country on our platform represents a meaningful immigration destination that receives a significant volume of applications from international students, workers, tourists, and permanent residency seekers. Our selection criteria balance global application volume and the complexity and importance of the immigration pathways available.
            </p>
            <p>
              <strong>English-speaking destinations — USA, UK, Canada, Australia:</strong> These four countries collectively receive millions of visa applications each year across all categories. They are the primary destinations for international students, skilled workers, and prospective permanent residents from South Asia, Southeast Asia, the Middle East, and Africa. The complexity and high stakes of their immigration systems — particularly points-based systems like Canada&apos;s Express Entry and Australia&apos;s SkillSelect — mean that applicants have the most to gain from expert, accurate guidance.
            </p>
            <p>
              <strong>European destinations — Germany, Netherlands, France, Italy, Sweden, Norway, Switzerland:</strong> Europe&apos;s Schengen Area is the world&apos;s most visited tourist destination, and European countries offer some of the most attractive immigration pathways for skilled professionals, particularly in Germany&apos;s rapidly expanding Skilled Immigration Act framework and the Netherlands&apos; Highly Skilled Migrant programme. The EU Blue Card creates a unified yet country-specific framework that requires nuanced explanation. Switzerland, while not an EU member, offers the world&apos;s highest average salaries and a unique immigration system under the Agreement on the Free Movement of Persons.
            </p>
            <p>
              <strong>Gulf region — UAE, Saudi Arabia:</strong> The UAE and Saudi Arabia are the two largest employment destinations in the Middle East and collectively host millions of expatriate workers. The UAE&apos;s Golden Visa, 10-year residency scheme for investors and skilled professionals, and the recent introduction of freelance work permits make it one of the most dynamic immigration landscapes in the world. Saudi Arabia&apos;s Vision 2030 economic transformation is creating unprecedented demand for skilled foreign workers and opening the country to tourism for the first time in its modern history.
            </p>
            <p>
              <strong>Asia Pacific — Japan, South Korea, Singapore, New Zealand, Australia:</strong> This region combines some of the world&apos;s most competitive economies with clear immigration pathways for skilled professionals and students. Singapore&apos;s Employment Pass, Japan&apos;s Highly Skilled Professional Visa, and New Zealand&apos;s Skilled Migrant Category attract top global talent and generate enormous information demand among applicants.
            </p>
            <p>
              We continue to expand our coverage as demand grows, guided by reader needs and the availability of reliable official source information for each destination country.
            </p>
          </div>
        </section>

        {/* Official Sources We Use */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Official Sources We Reference</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every guide on VisaProcessInfo is researched from official government sources. We never use other immigration websites as a primary source. Below are the primary authorities we reference for our most-visited destinations. Each guide page links directly to the relevant official source so readers can verify information independently.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { country: "United States", authority: "USCIS", url: "https://www.uscis.gov" },
              { country: "Canada", authority: "IRCC", url: "https://www.canada.ca/en/immigration-refugees-citizenship.html" },
              { country: "United Kingdom", authority: "GOV.UK / UKVI", url: "https://www.gov.uk/browse/visas-immigration" },
              { country: "Australia", authority: "Home Affairs", url: "https://immi.homeaffairs.gov.au" },
              { country: "Germany", authority: "BAMF", url: "https://www.bamf.de/EN/" },
              { country: "Sweden", authority: "Migrationsverket", url: "https://www.migrationsverket.se/English" },
              { country: "UAE", authority: "ICP / GDRFA", url: "https://icp.gov.ae" },
              { country: "France", authority: "France-Visas", url: "https://france-visas.gouv.fr/en/" },
              { country: "New Zealand", authority: "INZ", url: "https://www.immigration.govt.nz" },
              { country: "Japan", authority: "Japan MOFA", url: "https://www.mofa.go.jp/j_info/visit/visa/" },
              { country: "Singapore", authority: "ICA / MOM", url: "https://www.ica.gov.sg" },
              { country: "Netherlands", authority: "IND", url: "https://ind.nl/en" },
            ].map((s) => (
              <a
                key={s.country}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-sm transition-all group"
              >
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{s.country}</p>
                  <p className="text-xs text-primary-600 mt-0.5">{s.authority}</p>
                </div>
                <span className="text-gray-400 group-hover:text-primary-600 text-xs">↗</span>
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Each individual visa guide page contains a &quot;Official Sources&quot; section with direct links to the specific government page verified for that guide.
          </p>
        </section>

        {/* Reader Impact */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Impact</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Since launching in 2020, VisaProcessInfo has grown from a small blog into a comprehensive immigration information resource covering 127 destination countries across five visa categories. Our guides are used by students, workers, tourists, and families navigating the visa application process.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
              {[
                { value: "127", label: "Countries Covered" },
                { value: "10,000+", label: "Pages & Guides" },
                { value: "500+", label: "Blog Articles" },
                { value: "5", label: "Visa Categories" },
              ].map((stat) => (
                <div key={stat.label} className="bg-primary-50 rounded-xl p-4 text-center border border-primary-100">
                  <p className="text-3xl font-extrabold text-primary-700">{stat.value}</p>
                  <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <p>
              Our reader base spans students from South Asia applying for study visas to Canada, UK, and Australia; skilled professionals from Africa and the Middle East navigating work permit pathways to Europe; families in Southeast Asia applying for tourist visas to Schengen countries; and entrepreneurs exploring business visa and investor visa options across multiple destinations. This diversity reflects the genuinely global nature of international migration today.
            </p>
            <p>
              Our guides cover the full application process from start to finish — eligibility requirements, required documents, fees, processing times, and common mistakes to avoid. Every guide includes an Official Sources section with direct links to the government authority used to research it, so readers can verify requirements themselves.
            </p>
            <p>
              We also take our responsibility seriously when things go wrong. If a reader reports that information in one of our guides was inaccurate, we verify the report against the official source and correct the underlying data if the error is confirmed. Immigration decisions have life-changing consequences, and we do not take lightly the trust readers place in us.
            </p>
            <p>
              Looking ahead, our goals for the next three years include expanding to 150+ destination countries, launching guides in French and Spanish to serve non-English-speaking applicants, building an interactive visa eligibility checker tool, and establishing formal partnerships with official immigration authorities to receive direct policy update notifications. We are committed to remaining free, independent, and comprehensive — no paywalls, no subscription fees, no charges for information that should be publicly available to everyone.
            </p>
          </div>
        </section>

        {/* How We Stay Current */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">How We Stay Current with Immigration Policy Changes</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Immigration policy is one of the most rapidly changing areas of government regulation. In any given year, policy changes across our 127 covered countries can affect visa requirements, fees, processing times, and other variables that directly affect applicants. Because our guides are generated from a shared per-country dataset rather than written individually, staying current is primarily a data-maintenance problem, not a page-by-page one.
            </p>
            <p>
              <strong>Official Source Checks:</strong> When we compile or revisit a country's data, we check it against that country's official immigration portal and embassy pages — for example UKVI/GOV.UK for the UK, IRCC for Canada, USCIS for the US, or BAMF for Germany.
            </p>
            <p>
              <strong>Single-Point Updates:</strong> Because every guide for a country and visa type draws from the same underlying data, a confirmed change only needs to be corrected once. It then applies automatically across the country hub, application guide, fee guide, and every other page generated for that country — rather than requiring us to manually edit each page.
            </p>
            <p>
              <strong>Reader-Reported Changes:</strong> Our readers are an important source of ground-level information. Applicants actively going through the visa process may notice changes to requirements or processing times before we do. Readers can report changes, discrepancies, or new information via our Contact page, and we verify reported changes against the official source before updating our data.
            </p>
            <p>
              We do not claim to monitor every legislative proposal or consular practice change in real time across 127 countries — we think it's more honest to describe our process accurately: a maintained dataset, checked against official sources, corrected when we or our readers identify a change.
            </p>
          </div>
        </section>

        {/* Working With Us */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Working With Us</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              We are occasionally approached by organisations interested in collaborating with VisaProcessInfo. We welcome certain types of partnerships and decline others, based on whether the collaboration serves our readers&apos; interests.
            </p>
            <p>
              <strong>What We Welcome:</strong> We welcome factual corrections and information contributions from official government bodies and embassies — if an official representative believes information in one of our guides is inaccurate, we want to know. We accept guest contributions from licensed immigration lawyers and regulated consultants who want to share expertise on specific visa categories, provided the content is factual and does not promote their own services. We are open to discussions with universities, education agents, and language schools about providing accurate information about their services to our readers, provided this is disclosed as sponsored content and separated clearly from our editorial guides.
            </p>
            <p>
              <strong>What We Decline:</strong> We do not accept payment to improve the ranking or prominence of any visa agency, immigration firm, or application service within our editorial content. We do not participate in lead generation for immigration lawyers or consultants. We do not accept undisclosed sponsored content. We do not sell our email list or reader data. We do not allow advertising from services we believe are misleading or predatory towards visa applicants.
            </p>
            <p>
              If you are a journalist, researcher, or policymaker interested in our data on applicant information needs, or if you are an immigration professional interested in contributing expertise to our guides, please reach out through our contact page. We are a small team and cannot respond to every enquiry, but we read everything and respond to substantive professional approaches.
            </p>
          </div>
        </section>

        {/* Disclaimer box */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h3 className="font-bold text-amber-900 mb-3 text-lg">Important Disclaimer</h3>
          <p className="text-sm text-amber-800 leading-relaxed">
            VisaProcessInfo provides <strong>general information only</strong> and
            does not constitute legal advice. Immigration laws change frequently.
            Always verify requirements directly with the relevant embassy, consulate,
            or official government immigration portal before submitting any application.
            For complex cases — including previous refusals, criminal records, or PR
            applications — we recommend consulting a licensed immigration lawyer or
            regulated adviser.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href="/disclaimer" className="text-amber-700 underline hover:text-amber-900">
              Read full disclaimer →
            </Link>
            <Link href="/privacy" className="text-amber-700 underline hover:text-amber-900">
              Privacy policy →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-br from-primary-900 to-primary-700 text-white rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-4 text-white">Start Exploring Visa Guides</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Browse 10,000+ free visa and immigration guides covering study, work,
            tourist, and business visas for 127 countries.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="bg-white text-primary-800 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Browse All Guides
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
