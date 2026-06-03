import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Target, BadgeDollarSign, RefreshCw, Scale, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about VisaProcessInfo — your free, independent immigration information resource covering visa guides for 131+ countries. Our mission, team, and editorial standards.",
  alternates: { canonical: "https://www.visaprocessinfo.com/about" },
  keywords: [
    "about VisaProcessInfo", "visa guide team", "immigration experts",
    "visa information resource", "free visa guides", "immigration editorial standards",
    "visa guide mission", "immigration editorial standards",
    "independent visa information", "trusted visa resource", "visa guide history",
  ],
};

const STATS = [
  { value: "131+", label: "Countries Covered" },
  { value: "10,000+", label: "Free Visa Guides" },
  { value: "5", label: "Visa Categories" },
  { value: "2020", label: "Founded" },
];

const EDITORIAL_ROLES = [
  {
    initials: "RE",
    role: "Research & Editorial Team",
    bio: "Our research team compiles visa requirements directly from official government immigration portals, embassy websites, and statutory instruments. Every guide begins with primary source research — not other websites.",
  },
  {
    initials: "VV",
    role: "Verification & Accuracy Team",
    bio: "After initial research, our verification team cross-checks requirements against official embassy announcements, ministry publications, and legislative updates. Fee tables are verified against the official government source for each country.",
  },
  {
    initials: "CP",
    role: "Content & Policy Update Team",
    bio: "Immigration policies change frequently. Our content team monitors official notification channels for all 131+ covered countries and updates guides within 48 hours of confirmed policy changes.",
  },
  {
    initials: "QR",
    role: "Quality Review Team",
    bio: "All guides undergo a structured quality review before publication. Reviewers check factual accuracy, completeness of requirements, correct fee amounts in the destination country's currency, and clarity of instructions.",
  },
];

const VALUES = [
  {
    Icon: Target,
    title: "Accuracy First",
    description:
      "Every guide is researched from official government sources — embassy websites, immigration authority portals, and official legislation. We cite our sources and update guides when policies change.",
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
      "Immigration policies change frequently. Our editorial team reviews all guides quarterly and publishes urgent updates whenever a country announces a policy change that affects applicants.",
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
                  "Study visa guides for 131+ destination countries",
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
                desc: "Every guide begins with research from the official government immigration portal, embassy websites, and legislative documents for the relevant country and visa category.",
              },
              {
                step: "02",
                title: "Editorial Review",
                desc: "Our editorial team cross-checks requirements against multiple official sources, verifies that fees are in the correct currency, and confirms processing time estimates reflect current official guidance.",
              },
              {
                step: "03",
                title: "Accuracy Check",
                desc: "For complex areas (PR pathways, appeals, citizenship), editors perform additional verification against statutory instruments and official legislative sources before publication.",
              },
              {
                step: "04",
                title: "Publication & Monitoring",
                desc: "Published guides are monitored continuously via official government notification systems, reader feedback, and our professional network — updates are made within 48 hours of confirmed policy changes.",
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
            VisaProcessInfo is operated by a dedicated editorial team focused on immigration research and content accuracy. Our guides are produced through a structured four-stage process: primary source research, cross-verification, expert review, and regular policy monitoring. All content is attributed to the relevant functional team below, with every guide carrying a publication date and a last-verified date linked to the specific official source checked.
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
              The site grew organically through the pandemic years as countries reopened and international movement resumed. The editorial team expanded over time, with specialist researchers and editors covering different regions of the world with genuine professional expertise.
            </p>
            <p>
              Today, VisaProcessInfo publishes more than 10,000 individual visa guides covering 131+ destination countries across study, work, tourist, business, and permanent residency categories. Every guide is written or reviewed by someone with direct professional experience in that country&apos;s immigration system — not just researched from other websites. We believe this commitment to authentic expertise is what separates us from the majority of immigration information sites.
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
              Every guide published on VisaProcessInfo follows a strict research and verification process before it goes live. We are aware that immigration guides exist across the internet in various states of accuracy and currency, and we have deliberately built our editorial process to be as rigorous as possible given our team size and resources.
            </p>
            <p>
              <strong>Primary Sources First:</strong> Our research always begins with the official government source. For each country, this means the official immigration ministry or home office website, the specific embassy or consulate pages for the destination country, and any official legislative documents or statutory instruments that govern the visa category. We do not treat other immigration websites — including large, reputable ones — as primary sources. We go to the original government publication.
            </p>
            <p>
              <strong>Interpretation & Context Layer:</strong> After gathering information from official sources, our editors cross-reference requirements across multiple official documents — ministry websites, embassy pages, and statutory instruments — to ensure consistency. Where official guidance uses technical or ambiguous language, editors add context drawn from the official source text itself, not from third-party interpretations. Every factual claim in a guide must be traceable back to a specific official source.
            </p>
            <p>
              <strong>Reader Feedback Loop:</strong> We monitor reader feedback and correction submissions on every guide. Readers who notice outdated information, fee changes, or policy updates can submit corrections via our Contact page. Every correction report is reviewed by an editor within 48 hours. If a significant policy change is reported, we verify it against official sources and update the guide immediately, adding a &quot;last updated&quot; timestamp so readers can see how current the information is.
            </p>
            <p>
              <strong>Quarterly Review Cycle:</strong> All guides undergo a comprehensive quarterly review regardless of whether reader feedback has flagged any changes. During these reviews, editors revisit all official sources, check for policy updates, verify that fee information is current, and update processing time estimates based on current reports from applicants. Guides that cover categories with particularly volatile policies — such as the UK Skilled Worker Visa or Australia&apos;s SkillSelect points system — are reviewed monthly.
            </p>
            <p>
              <strong>Complexity Flags:</strong> Guides covering complex legal areas — permanent residency pathways, citizenship applications, visa refusal appeals — include explicit notices directing readers to seek professional legal advice. These guides carry additional caveats because the information requirements vary substantially by individual circumstances and cannot be fully addressed in a general guide.
            </p>
            <p>
              <strong>What We Do Not Do:</strong> We do not publish guides based purely on online research without professional verification. We do not accept payment to rush-publish guides for specific countries or visa types. We do not post &quot;quick guides&quot; that summarise official requirements without understanding the nuance behind them. If we cannot produce a guide that meets our quality standards for a given visa category or country, we do not publish a guide at all rather than publish something inaccurate.
            </p>
          </div>
        </section>

        {/* Countries We Cover */}
        <section>
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Why We Cover 131+ Countries</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Our coverage of 131+ destination countries was not chosen arbitrarily. Each country on our platform represents a meaningful immigration destination that receives a significant volume of applications from international students, workers, tourists, and permanent residency seekers. Our selection criteria balance global application volume, the complexity and importance of the immigration pathways available, and our editorial team&apos;s genuine expertise.
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
              Since launching in 2020, VisaProcessInfo has grown from a small blog into a comprehensive immigration information resource covering 131+ destination countries across five visa categories. Our guides are used by students, workers, tourists, and families navigating the visa application process.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
              {[
                { value: "131+", label: "Countries Covered" },
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
              We also take our responsibility seriously when things go wrong. When readers report that information in one of our guides contributed to an incorrect application, we investigate thoroughly. In the rare cases where this has occurred, we have updated the guide, published a correction notice, and reached out directly to the affected reader with personalised guidance where possible. Immigration decisions have life-changing consequences, and we do not take lightly the trust readers place in us.
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
              Immigration policy is one of the most rapidly changing areas of government regulation. In any given year, dozens of policy changes across our 131+ covered countries can affect visa requirements, fees, processing times, salary thresholds, English language score requirements, financial proof minimums, and dozens of other variables that directly affect applicants. Staying current requires a systematic approach.
            </p>
            <p>
              <strong>Official Source Monitoring:</strong> Our editorial team monitors official government notification channels and policy update pages for all covered countries. These include UKVI policy updates from the UK Home Office, IRCC operational bulletins from Immigration, Refugees and Citizenship Canada, USCIS policy updates from the US Citizenship and Immigration Services, and equivalent official channels for Germany&apos;s BAMF, Australia&apos;s Department of Home Affairs, and other covered countries. When an official policy update is published, we assess whether any of our guides require updating.
            </p>
            <p>
              <strong>Parliamentary and Legislative Monitoring:</strong> Major policy changes often begin as legislative proposals or immigration rule amendments before they take effect. We monitor immigration-related parliamentary debates, Home Office statements to Parliament, ministerial announcements, and gazette notices. This allows us to publish advance notice of upcoming changes so applicants can plan their applications accordingly — not just report on changes after they take effect.
            </p>
            <p>
              <strong>Consular Information Tracking:</strong> Embassy and consulate websites often publish updated processing times, fee schedules, and documentary requirements independently of central immigration ministry communications. Our editors monitor embassy-specific pages for all major source countries for our covered destinations. For example, the processing time for a UK Student Visa from the Pakistani High Commission in Islamabad may differ from processing times published centrally by UKVI, and applicants from Pakistan need to know the specific information for their country.
            </p>
            <p>
              <strong>Professional Network Intelligence:</strong> Our editorial team monitors immigration professional forums, legal updates, and practitioner communities across all covered countries. These sources often surface practical changes before official announcements are made — for example, when a consulate begins requesting a new document format that is not yet reflected in official guidance. We investigate and verify every such report against official sources before publishing any update.
            </p>
            <p>
              <strong>Reader-Reported Changes:</strong> Our readers are an important source of ground-level information. Applicants actively going through the visa process often notice changes to consular practices before they appear in official guidance. We have a dedicated feedback mechanism on every guide page for readers to report changes, discrepancies, or new information they have encountered during their application process.
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
            tourist, and business visas for 131+ countries.
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
