import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { websiteSchema, organizationSchema } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

// Self-hosted Inter (variable, latin subset). Replaces the render-blocking
// Google Fonts @import: the font is preloaded from our own origin and a
// size-adjusted fallback avoids layout shift while it loads.
const inter = localFont({
  src: "./fonts/InterVariable-latin.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-inter",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | VisaProcessInfo",
    default: "VisaProcessInfo — Visa Guides for 127 Countries",
  },
  description:
    "Free visa and immigration guides for study, work, tourist and PR visas in 127 countries, with links to each country's official immigration site.",
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "hnBXp2VAGXmFk2-f-7kfvH7Xd7jwZaT-RZcxxbdVZWs",
  },
  openGraph: {
    siteName: "VisaProcessInfo",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=1200&h=630&auto=format&q=85&fit=crop",
        width: 1200,
        height: 630,
        alt: "VisaProcessInfo — Visa & Immigration Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@visaprocessinfo",
    images: ["https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=1200&h=630&auto=format&q=85&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* AdSense loads after the page is interactive so it no longer
            competes with the main content for bandwidth and CPU. */}
        <Script
          id="adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4441490689171176"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
