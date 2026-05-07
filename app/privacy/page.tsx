import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Global Visa Guide Hub",
  description:
    "Privacy Policy for Global Visa Guide Hub. Learn how we collect, use, and protect your personal data in accordance with GDPR and applicable privacy law.",
  alternates: { canonical: "https://globalvisaguidehub.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-4xl font-extrabold mt-4 mb-3">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">Last updated: January 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-8">

          <p className="text-gray-700 leading-relaxed">
            Global Visa Guide Hub (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is
            committed to protecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website. Please read
            this policy carefully. If you disagree with its terms, please discontinue use of the site.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <h3 className="font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you visit our website, we automatically collect certain information about your device
              and your visit, including your IP address (anonymised), browser type and version, operating
              system, referring URLs, pages visited, time and date of your visit, and time spent on pages.
              This information is collected through industry-standard analytics tools (such as Google
              Analytics) and does not personally identify you.
            </p>
            <h3 className="font-semibold text-gray-800 mb-2">Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed">
              If you contact us via our contact form, we collect the information you voluntarily submit,
              including your name, email address, and message content. We use this information solely
              to respond to your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                "Operate, maintain, and improve our website and content",
                "Analyse usage patterns to understand how visitors interact with our guides",
                "Respond to your enquiries and support requests",
                "Monitor and analyse trends, usage, and activities for editorial improvement",
                "Detect and prevent fraudulent or abusive activity",
                "Comply with legal obligations and enforce our Terms of Use",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent-500 shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use cookies and similar tracking technologies to enhance your browsing experience and
              to understand how visitors use our site. Cookies are small text files stored on your
              device by your browser. We use the following types of cookies:
            </p>
            <div className="space-y-3">
              {[
                { name: "Essential Cookies", desc: "Required for the website to function properly. These cannot be disabled." },
                { name: "Analytics Cookies", desc: "Help us understand how visitors interact with our website using tools such as Google Analytics (with IP anonymisation enabled)." },
                { name: "Advertising Cookies", desc: "Set by Google AdSense to display relevant advertisements. These may track your browsing across other websites." },
              ].map((c) => (
                <div key={c.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                  <p className="text-gray-600 text-sm mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-sm mt-3">
              You can control cookies through your browser settings. Disabling certain cookies may
              affect the functionality of the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Google AdSense and Advertising</h2>
            <p className="text-gray-700 leading-relaxed">
              We display advertisements through Google AdSense. Google, as a third-party vendor,
              uses cookies (including the DoubleClick cookie) to serve ads on our site based on your
              prior visits to our website and other sites on the internet. You may opt out of
              personalised advertising by visiting Google&apos;s{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline"
              >
                Ad Settings
              </a>{" "}
              page. Alternatively, you can opt out of third-party vendor cookies by visiting the{" "}
              <a
                href="https://www.networkadvertising.org/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline"
              >
                Network Advertising Initiative opt-out page
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website contains links to third-party websites, including official government
              immigration portals, embassy websites, and external resources. We are not responsible
              for the privacy practices of those external sites. We encourage you to review the
              privacy policies of any website you visit via a link from our pages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention and Security</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We retain analytics data in anonymised, aggregated form. Contact form submissions are
              retained only for as long as necessary to respond to your enquiry, after which they
              are deleted. We implement appropriate technical and organisational security measures
              to protect your information against unauthorised access, alteration, disclosure, or
              destruction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100%
              secure. While we strive to protect your information, we cannot guarantee its absolute
              security. In the event of a data breach that affects your rights and freedoms, we will
              notify affected parties as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights (GDPR / UK GDPR)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you are located in the European Economic Area (EEA) or the United Kingdom, you have
              certain rights under the General Data Protection Regulation (GDPR) or UK GDPR, including:
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                "The right to access personal data we hold about you",
                "The right to rectification of inaccurate personal data",
                "The right to erasure ('right to be forgotten')",
                "The right to restriction of processing",
                "The right to data portability",
                "The right to object to processing",
                "The right to withdraw consent at any time",
              ].map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <span className="text-primary-500 shrink-0 mt-0.5">→</span>
                  {right}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-sm mt-3">
              To exercise any of these rights, please contact us using the form on our{" "}
              <Link href="/contact" className="text-primary-700 underline">Contact page</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not directed at children under the age of 13. We do not knowingly
              collect personal information from children. If you believe we have inadvertently
              collected information from a child, please contact us immediately so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in law, our
              practices, or for other operational reasons. Changes will be posted on this page with
              an updated &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.
              Your continued use of the website after changes are posted constitutes your acceptance
              of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Policy or your
              personal data, please contact us at:{" "}
              <Link href="/contact" className="text-primary-700 underline">Contact page</Link> or
              via email at privacy@globalvisaguidehub.com.
            </p>
          </section>

          <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
            <Link href="/disclaimer" className="text-primary-700 hover:text-primary-900 underline">
              Disclaimer
            </Link>
            <Link href="/contact" className="text-primary-700 hover:text-primary-900 underline">
              Contact Us
            </Link>
            <Link href="/about" className="text-primary-700 hover:text-primary-900 underline">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
