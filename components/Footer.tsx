import Link from "next/link";
import { COUNTRIES } from "@/data/countries";
import { VISA_TYPES } from "@/data/visa-types";

const PROCESS_LINKS = [
  { label: "Apply for Study Visa", href: "/process/apply-study-visa" },
  { label: "Apply for Work Visa", href: "/process/apply-work-visa" },
  { label: "Visa Interview Prep", href: "/process/visa-interview-preparation" },
  { label: "Visa Rejection Appeal", href: "/process/visa-rejection-appeal" },
  { label: "Tourist Visa Guide", href: "/process/tourist-visa-application" },
  { label: "Biometrics & Health", href: "/process/biometrics-and-health-checks" },
  { label: "Embassy Interview", href: "/process/embassy-interview-prep" },
  { label: "PR Application Guide", href: "/process/pr-application" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-primary-700 rounded-xl flex items-center justify-center text-lg">🌐</div>
              <div>
                <span className="font-extrabold text-white text-base">Global Visa </span>
                <span className="font-extrabold text-accent-400 text-base">Guide Hub</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Your trusted source for visa and immigration information worldwide. Comprehensive guides for students, workers, tourists, and immigrants — completely free.
            </p>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Always verify requirements with official embassies and government sources before applying.
            </p>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Top Countries</h3>
            <ul className="space-y-2">
              {COUNTRIES.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link href={`/country/${c.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <span>{c.flag}</span>{c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Types + Legal Pages */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Visa Types</h3>
            <ul className="space-y-2 mb-6">
              {VISA_TYPES.map((v) => (
                <li key={v.slug}>
                  <Link href={`/visa/${v.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <span>{v.icon}</span>{v.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>📰</span>Visa Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Processes */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Apply Process</h3>
            <ul className="space-y-2">
              {PROCESS_LINKS.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Global Visa Guide Hub. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-gray-500">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
