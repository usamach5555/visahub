"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Countries", href: "/#countries" },
  { label: "Study Visa", href: "/visa/study" },
  { label: "Work Visa", href: "/visa/work" },
  { label: "Tourist Visa", href: "/visa/tourist" },
  { label: "Immigration", href: "/visa/immigration" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBase = scrolled
    ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    : "bg-transparent border-b border-white/10";

  const linkColor = scrolled ? "text-gray-700 hover:text-primary-800" : "text-white/90 hover:text-white";
  const logoColor = scrolled ? "text-primary-800" : "text-white";
  const accentColor = scrolled ? "text-accent-500" : "text-accent-400";
  const hamburgerColor = scrolled ? "text-gray-700" : "text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBase}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold transition-colors duration-300 ${scrolled ? "bg-primary-800 text-white" : "bg-white/20 text-white border border-white/30"}`}>
              🌐
            </div>
            <div className="hidden sm:block leading-tight">
              <span className={`font-extrabold text-base tracking-tight transition-colors duration-300 ${logoColor}`}>
                Global Visa{" "}
              </span>
              <span className={`font-extrabold text-base tracking-tight transition-colors duration-300 ${accentColor}`}>
                Guide Hub
              </span>
            </div>
            <span className={`sm:hidden font-extrabold text-base transition-colors duration-300 ${logoColor}`}>GVGH</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${linkColor} ${scrolled ? "hover:bg-primary-50" : "hover:bg-white/10"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/blog"
              className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md ${
                scrolled
                  ? "bg-primary-800 text-white hover:bg-primary-700"
                  : "bg-white text-primary-800 hover:bg-white/90"
              }`}
            >
              Free Guides →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${hamburgerColor} ${scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-4 pb-5 pt-3">
          <div className="space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-2.5 px-3 text-sm font-medium text-gray-700 hover:text-primary-800 hover:bg-primary-50 rounded-xl transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-primary-800 text-white font-semibold py-3 rounded-xl hover:bg-primary-700 transition-colors"
            >
              Browse Free Guides →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
