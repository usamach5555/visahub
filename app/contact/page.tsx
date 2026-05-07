import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us | Global Visa Guide Hub",
  description:
    "Contact the Global Visa Guide Hub team for content corrections, partnership inquiries, advertising, or general questions about our visa and immigration guides.",
  alternates: { canonical: "https://globalvisaguidehub.com/contact" },
};

const TOPICS = [
  { icon: "✏️", title: "Content Correction", description: "Found an inaccuracy in one of our guides? Let us know so we can update it promptly." },
  { icon: "🤝", title: "Partnership & Guest Post", description: "Immigration professionals and legal firms interested in contributing content are welcome to reach out." },
  { icon: "📢", title: "Advertising", description: "For advertising, sponsored content, or media kit requests, contact our partnerships team." },
  { icon: "❓", title: "General Enquiries", description: "Questions about our website, how we work, or how to find a specific guide." },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <h1 className="text-4xl font-extrabold mt-4 mb-3">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Have a question, found an error in one of our guides, or want to work with us?
            We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="topic">
                    Topic
                  </label>
                  <select
                    id="topic"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="correction">Content Correction</option>
                    <option value="partnership">Partnership / Guest Post</option>
                    <option value="advertising">Advertising</option>
                    <option value="general">General Enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="subject">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Incorrect fee information on Canada study visa guide"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Please describe your question or request in detail. If reporting a content error, include the page URL and what the correct information should be."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-800 text-white font-semibold py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-sm"
                >
                  Send Message
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                ⚠ We do not provide personalised immigration advice. For advice specific to your situation,
                please consult a licensed immigration consultant or lawyer. We typically respond within 3–5 business days.
              </p>
            </div>
          </div>

          {/* Sidebar info */}
          <aside className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">📧</span>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">contact@globalvisaguidehub.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">🕐</span>
                  <div>
                    <p className="font-medium text-gray-900">Response Time</p>
                    <p className="text-gray-600">3–5 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">🌍</span>
                  <div>
                    <p className="font-medium text-gray-900">Coverage</p>
                    <p className="text-gray-600">15+ countries, 500+ guides</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-4">Reason for Contact</h3>
              <div className="space-y-3">
                {TOPICS.map((t) => (
                  <div key={t.title} className="flex items-start gap-2.5">
                    <span className="text-lg shrink-0 mt-0.5">{t.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-gray-900">{t.title}</p>
                      <p className="text-xs text-gray-500">{t.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl border border-primary-100 p-5">
              <h3 className="font-bold text-primary-900 mb-2 text-sm">Looking for visa information?</h3>
              <p className="text-xs text-primary-800 mb-3">
                Browse our free guides instead of contacting us — we cover 500+ visa topics.
              </p>
              <div className="space-y-1.5 text-sm">
                <Link href="/blog" className="flex items-center gap-1.5 text-primary-700 hover:text-primary-900">
                  📚 Browse all guides
                </Link>
                <Link href="/visa/study" className="flex items-center gap-1.5 text-primary-700 hover:text-primary-900">
                  🎓 Study visa guides
                </Link>
                <Link href="/visa/work" className="flex items-center gap-1.5 text-primary-700 hover:text-primary-900">
                  💼 Work visa guides
                </Link>
                <Link href="/process/study-visa-application" className="flex items-center gap-1.5 text-primary-700 hover:text-primary-900">
                  📋 Apply process guides
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
