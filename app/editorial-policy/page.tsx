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
    content: `Every guide published on VisaProcessInfo begins with primary source research. We do not use other immigration websites as a source — we go directly to official government portals, embassy websites, ministry publications, and statutory instruments.

Primary sources we consult include:
• Official immigration ministry or home office websites for the destination country
• Embassy and consulate websites for specific source country requirements
• Official legislative documents, statutory instruments, and government gazettes
• Fee schedules published directly by immigration authorities
• Official processing time tools and dashboards (e.g. USCIS processing times, IRCC tools)

We do not publish a guide for a visa category until we have located and reviewed the official government source for that category. If official information is ambiguous or contradictory across government pages, we note this explicitly in the guide and link to both sources.`,
  },
  {
    id: "verification",
    title: "2. Verification Process",
    content: `After initial research, all guides go through a structured verification step before publication. Verification involves:

• Cross-checking requirements against at least two official sources where available
• Confirming that fee amounts are quoted in the correct currency for the destination country (e.g. SEK for Sweden, GBP for the UK, AED for the UAE — not converted to USD unless USD is the official fee currency)
• Verifying that processing time estimates reflect current official guidance, not historical averages
• Checking that any referenced application portal URLs are live and correct
• Reviewing the guide against any known recent policy changes in that country

Guides that do not pass verification are returned for revision before publication. We do not publish guides with known inaccuracies even if this means delaying publication.`,
  },
  {
    id: "citations",
    title: "3. Source Citation Policy",
    content: `Every guide on VisaProcessInfo includes an "Official Sources" section at the bottom of the page with direct hyperlinks to the government sources used to research the guide. This is non-negotiable — guides without outbound citations to official sources are not published.

We cite sources at the point of use within the guide text where space permits, and always in the dedicated sources section at the article end. Our citation standard is:

• Name of the government authority (e.g. "U.S. Citizenship and Immigration Services (USCIS)")
• Direct URL to the specific page referenced (not just the homepage)
• Date last verified

We update citations when official URLs change. If a government portal is restructured and links break, we update our guides within 5 business days of identifying the broken link.`,
  },
  {
    id: "updates",
    title: "4. Update & Review Policy",
    content: `Immigration policies change frequently. Our update policy is:

URGENT UPDATES (within 48 hours):
Policy changes that directly affect application requirements, fees, or processing procedures are updated within 48 hours of confirmation from official sources. We verify the change against the official source before publishing any update.

QUARTERLY REVIEWS:
All guides undergo a comprehensive quarterly review regardless of whether policy changes have been reported. During quarterly reviews, editors check all official sources, verify current fees, update processing times, and review reader-submitted corrections.

HIGH-VOLATILITY GUIDES (monthly review):
Guides covering rapidly changing immigration systems — including UK Skilled Worker Visa salary thresholds, Canada Express Entry CRS scores, Australia SkillSelect — are reviewed monthly or more frequently.

LAST VERIFIED DATE:
Every guide displays a "Last Verified" date and the specific official source verified at that date. This date is updated whenever the guide is reviewed and confirmed accurate, not only when content changes.`,
  },
  {
    id: "corrections",
    title: "5. Corrections Policy",
    content: `We take accuracy seriously. If information in one of our guides is incorrect, we want to know.

HOW TO REPORT AN ERROR:
Use the correction form on the Contact page, or email contact@visaprocessinfo.com with the subject line "Content Correction." Please include the guide URL, the specific information you believe is incorrect, and — where possible — a link to the official source showing the correct information.

OUR RESPONSE PROCESS:
All correction reports are reviewed within 48 hours. We verify the reported error against the official source before making any change. If the correction is confirmed, we update the guide, add a note to the guide's edit history, and respond to the reporter. If we determine the existing information is correct, we explain our reasoning.

CORRECTION TRANSPARENCY:
Significant corrections (where previously published information was materially inaccurate) are noted at the top of the guide with a brief explanation of what changed and when. We do not silently edit guides when significant errors are corrected.`,
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
    content: `VisaProcessInfo publishes visa and immigration guides covering 131+ destination countries across study, work, tourist, business, and permanent residency categories. Our coverage prioritises countries with significant application volumes from international applicants.

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
            How VisaProcessInfo researches, verifies, updates, and corrects its visa and immigration guides. Last reviewed: June 2026.
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
