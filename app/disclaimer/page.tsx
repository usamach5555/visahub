import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Disclaimer | Global Visa Guide Hub",
  description:
    "Full disclaimer for Global Visa Guide Hub. Our content is for general informational purposes only and does not constitute legal or immigration advice. Read before using this website.",
  alternates: { canonical: "https://globalvisaguidehub.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Disclaimer" }]} />
          <h1 className="text-4xl font-extrabold mt-4 mb-3">Disclaimer</h1>
          <p className="text-blue-100 text-lg">Last updated: January 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-8">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-900 font-semibold text-sm">
              ⚠ Important: The content on Global Visa Guide Hub is provided for general informational purposes
              only. It does not constitute legal advice, immigration advice, or a professional-client relationship
              of any kind. Always verify all information with official government sources before taking any action.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. General Information Only</h2>
            <p className="text-gray-700 leading-relaxed">
              Global Visa Guide Hub (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates this
              website to provide free, general information about visa and immigration processes for various
              countries worldwide. All information is provided in good faith. However, we make no representations
              or warranties of any kind — express, implied, statutory, or otherwise — regarding the accuracy,
              completeness, reliability, suitability, or availability of the information, products, services, or
              related graphics contained on this website for any purpose. Any reliance you place on such
              information is strictly at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Not Legal or Immigration Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Nothing on this website constitutes legal advice, immigration advice, or professional advice of any
              kind. Reading or using this website does not create a solicitor-client, lawyer-client, or
              consultant-client relationship between you and Global Visa Guide Hub or any of its contributors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Immigration law is complex and changes frequently. Individual circumstances vary significantly.
              The guides on this site present general information only and may not apply to your specific
              situation. We strongly recommend consulting a licensed immigration lawyer, a registered
              immigration adviser, or the relevant embassy/consulate directly for advice specific to your
              circumstances — especially for complex cases involving previous visa refusals, criminal records,
              medical inadmissibility, or permanent residency applications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. No Guarantee of Visa Approval</h2>
            <p className="text-gray-700 leading-relaxed">
              Following any guide, checklist, or advice on this website does not guarantee that your visa
              application will be approved. Visa and immigration decisions are made solely and exclusively by
              the relevant government authority — such as an embassy, high commission, consulate, or national
              immigration department — based on their assessment of your individual application and circumstances.
              Global Visa Guide Hub has no affiliation with, and no influence over, any government immigration
              authority, embassy, or consulate. We cannot intervene in, expedite, or influence any visa
              decision on your behalf.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Currency and Accuracy of Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Immigration policies, visa fees, document requirements, processing times, and eligibility
              criteria change frequently, often without public notice. While our editorial team reviews and
              updates guides regularly, we cannot guarantee that all information on this website is current
              at the exact time you access it.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Always verify all visa requirements, fees, and procedures directly with the official embassy
              website, the destination country&apos;s official immigration authority, or the visa application
              centre before submitting any application. Outdated information on our website does not
              constitute grounds for any claim against us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. External Links</h2>
            <p className="text-gray-700 leading-relaxed">
              This website contains links to external websites, including official government immigration
              portals, embassy websites, and related resources. These links are provided solely for your
              convenience. We have no control over the content, availability, accuracy, or security of those
              external sites. The inclusion of any link does not imply endorsement, recommendation, or
              approval by Global Visa Guide Hub of the linked site or any information, products, or services
              it provides. We accept no responsibility or liability for any loss or damage arising from your
              use of, or reliance on, any external linked website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by applicable law, Global Visa Guide Hub and its owners,
              contributors, editors, and affiliates shall not be liable for any direct, indirect, incidental,
              special, consequential, or punitive damages arising out of or related to your use of this
              website or reliance on any information provided herein, including but not limited to visa
              application fees paid, travel bookings made, employment opportunities missed, or any other
              financial or personal losses resulting from a visa refusal or delay. This limitation applies
              regardless of whether such damages are based on warranty, contract, tort, or any other legal
              theory.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. No Affiliation with Government Bodies</h2>
            <p className="text-gray-700 leading-relaxed">
              Global Visa Guide Hub is an independent, privately operated information website. We are not
              affiliated with, endorsed by, or in any way connected to any government, embassy, consulate,
              high commission, or official immigration authority — including but not limited to USCIS
              (USA), UK Home Office (UK), IRCC (Canada), Department of Home Affairs (Australia), BAMF
              (Germany), ICA (UAE), or any other immigration body. Our guides are compiled from publicly
              available information on official government websites and are presented for informational
              purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Changes to This Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update or modify this disclaimer at any time without prior notice.
              Changes will be effective immediately upon posting to this page. Your continued use of this
              website after any changes constitutes your acceptance of the revised disclaimer. We encourage
              you to review this page periodically.
            </p>
          </section>

          <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
            <Link href="/privacy" className="text-primary-700 hover:text-primary-900 underline">
              Privacy Policy
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
