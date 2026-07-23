import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "VisaProcessInfo editorial policy: how we research, verify, and update visa guides. Our fact-checking process, correction policy, source standards, and update schedule.",
  alternates: { canonical: "https://www.visaprocessinfo.com/editorial-policy" },
};

const sections = [
  {
    id: "research",
    title: "1. Research Standards",
    content: `VisaProcessInfo's country and visa-type guides are built from a structured dataset compiled per destination country — covering visa fees, processing times, document requirements, application steps, and official contact points. This dataset is compiled directly from official sources:

• Official immigration ministry or home office websites for the destination country
• Embassy and consulate websites for specific source country requirements
• Fee schedules published directly by immigration authorities
• Official processing time tools and dashboards (e.g. USCIS processing times, IRCC tools)

Because each country's data is stored once and reused across every visa type and guide format for that country, a single sourcing pass covers all of the pages generated from it — rather than researching each individual page from scratch. Our long-form blog articles and editorial guides are separately researched and written as standalone pieces, each citing the official sources used.`,
  },
  {
    id: "verification",
    title: "2. Verification Process",
    content: `Because country-level guides are generated from a shared per-country dataset, verification happens at the data level rather than page-by-page. When we compile or update a country's data, we check:

• That fee amounts are quoted in the correct currency for the destination country (e.g. SEK for Sweden, GBP for the UK, AED for the UAE — not converted to USD unless USD is the official fee currency)
• That processing time estimates reflect current official guidance, not historical averages
• That referenced application portal and embassy URLs are correct
• Internal consistency across the visa types and guide formats generated from that data

A correction to a country's underlying data is reflected across every page that references it, which is why we prioritize getting the source data right over reviewing each generated page individually. Long-form blog and editorial articles are individually fact-checked against the official sources they cite before publication.`,
  },
  {
    id: "citations",
    title: "3. Source Citation Policy",
    content: `Every guide on VisaProcessInfo links to the destination country's official immigration portal and embassy resources in an "Official Resources" section. Guides without a path to an official source are not published.

Our citation standard is:

• Name of the government authority (e.g. "U.S. Citizenship and Immigration Services (USCIS)")
• A direct link to the relevant official immigration portal or embassy site

If you notice a broken or outdated official link, please report it via the Contact page — we prioritize fixing broken outbound links once we're made aware of them.`,
  },
  {
    id: "updates",
    title: "4. Update & Review Policy",
    content: `Immigration policies change frequently, and our update model is built around the shared per-country dataset described above rather than a fixed page-by-page review calendar:

DATA-LEVEL UPDATES:
When we identify a policy, fee, or processing-time change for a country, we update that country's entry in our dataset. Because every guide for that country and visa type is generated from the same data, the correction propagates automatically to every affected page — country hub, application guide, fee guide, FAQ, and so on — in a single update rather than requiring us to edit each page individually.

WHY WE DON'T PUBLISH A "LAST VERIFIED" DATE PER PAGE:
We previously displayed a "last verified" date on individual pages that updated automatically regardless of whether the underlying information had actually changed. We removed it because it did not reflect a real per-page review and could mislead readers about how current a specific page's content was. What we can accurately state is when our page-generation system and underlying data were last substantively updated — see the dates in our sitemap.

REPORTED CHANGES:
We prioritize verifying and updating our dataset when readers or our own monitoring surface a specific policy change, rather than promising a fixed review interval we cannot reliably guarantee across 127 countries and thousands of generated pages.`,
  },
  {
    id: "corrections",
    title: "5. Corrections Policy",
    content: `We take accuracy seriously. If information in one of our guides is incorrect, we want to know.

HOW TO REPORT AN ERROR:
Use the correction form on the Contact page, or email contact@visaprocessinfo.com with the subject line "Content Correction." Please include the guide URL, the specific information you believe is incorrect, and — where possible — a link to the official source showing the correct information.

OUR RESPONSE PROCESS:
We verify reported errors against the official source before making any change. Because most of our guides are generated from a shared per-country dataset, a confirmed correction is typically applied once to that country's data and takes effect across every page that references it. We respond to the reporter once we've reviewed the report.

CORRECTION TRANSPARENCY:
We aim to be straightforward about corrections: if you report an error and we confirm it, we fix the underlying data and let you know. We do not have a page-level edit-history feature at this time.`,
  },
  {
    id: "independence",
    title: "6. Independence & Conflicts of Interest",
    content: `VisaProcessInfo is funded by display advertising. We do not receive payment from visa agencies, immigration lawyers, application centers, or any third party to include, exclude, or favourably present their services in our editorial content.

What this means in practice:
• We do not accept sponsored content disguised as editorial guides
• We do not earn referral commissions from immigration consultants or lawyers
• We do not participate in lead generation for any immigration service provider
• We do not accept payment to prioritise coverage of specific countries or visa categories
• All advertising is clearly identified and separated from editorial content

If you identify advertising-editorial conflicts on our site, please report them through our Contact page.`,
  },
  {
    id: "disclaimer",
    title: "7. Legal Disclaimer",
    content: `The information published on VisaProcessInfo is for general informational purposes only. It does not constitute legal advice and should not be treated as a substitute for professional legal advice from a licensed immigration lawyer or regulated adviser.

Immigration laws change frequently. While we make every effort to ensure accuracy, we cannot guarantee that all information is current at the time of reading. Always verify requirements directly with the official embassy, consulate, or government immigration portal for your specific nationality and visa category before submitting any application.

For complex immigration cases — including those involving previous visa refusals, criminal records, deportation history, or permanent residency and citizenship applications — we strongly recommend consulting a licensed immigration lawyer or regulated adviser in the relevant jurisdiction.`,
  },
  {
    id: "scope",
    title: "8. Scope of Our Coverage",
    content: `VisaProcessInfo publishes visa and immigration guides covering 127 destination countries across study, work, tourist, business, and permanent residency categories. Our coverage prioritises countries with significant application volumes from international applicants.

We publish guides only where we can produce content that meets our research and verification standards. This means we do not publish guides for obscure or low-demand categories where we cannot locate sufficient official source information to produce an accurate, complete guide.

Our guides are written in English and are primarily designed for international applicants researching visa options. They do not cover domestic immigration procedures or processes that apply only to nationals of the destination country.`,
  },
];

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-28 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            📋 Transparency & Standards
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Editorial Policy
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            How VisaProcessInfo researches, verifies, updates, and corrects its visa and immigration guides. Last reviewed: July 2026.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Quick Nav */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">
          <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Contents</h2>
          <ul className="space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-primary-700 hover:underline text-sm">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id}>
              <h2 className="text-xl font-bold text-primary-800 mb-4 pb-2 border-b border-gray-200">
                {s.title}
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                {s.content}
              </div>
            </section>
          ))}
        </div>

        {/* Contact + Links */}
        <div className="mt-14 bg-primary-50 border border-primary-100 rounded-2xl p-6">
          <h2 className="font-bold text-primary-800 mb-3">Questions About Our Editorial Standards?</h2>
          <p className="text-sm text-gray-700 mb-4">
            If you have questions about how we research our guides, want to report a content error, or believe a guide contains inaccurate information, please contact our editorial team.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/contact" className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors font-medium">
              Contact Editorial Team →
            </Link>
            <Link href="/about" className="border border-primary-300 text-primary-700 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors font-medium">
              About VisaProcessInfo
            </Link>
            <Link href="/disclaimer" className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
