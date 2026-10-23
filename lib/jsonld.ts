export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  authorName?: string;
  image?: string;
}

export function articleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: input.publishedAt,
    dateModified: input.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
    image: input.image ?? "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=1200&h=630&auto=format&q=85&fit=crop",
    author: {
      "@type": "Organization",
      name: "VisaProcessInfo Editorial Team",
      url: "https://visaprocessinfo.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "VisaProcessInfo",
      url: "https://visaprocessinfo.com",
      logo: {
        "@type": "ImageObject",
        url: "https://visaprocessinfo.com/icon.svg",
        width: 60,
        height: 60,
      },
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VisaProcessInfo",
    url: "https://visaprocessinfo.com",
    description:
      "Comprehensive visa and immigration guides for students, workers, tourists, and immigrants worldwide."
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VisaProcessInfo",
    url: "https://visaprocessinfo.com",
    description:
      "Free visa and immigration guides — study, work, tourist and permanent residence pathways, with links to official government sources.",
    knowsAbout: [
      "Visa Applications",
      "Study Abroad",
      "Work Permits",
      "Permanent Residency",
      "Tourist Visas",
      "Business Immigration",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    sameAs: [],
  };
}

export interface HowToStep {
  title: string;
  description: string;
}

export function howToSchema(name: string, description: string, steps: HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
}

export function itemListSchema(name: string, items: { name: string; url: string; position: number }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: item.url,
    })),
  };
}
