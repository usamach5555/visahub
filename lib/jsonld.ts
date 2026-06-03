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
      url: "https://www.visaprocessinfo.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "VisaProcessInfo",
      url: "https://www.visaprocessinfo.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.visaprocessinfo.com/icon.svg",
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
    url: "https://www.visaprocessinfo.com",
    description:
      "Comprehensive visa and immigration guides for students, workers, tourists, and immigrants worldwide.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.visaprocessinfo.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VisaProcessInfo",
    url: "https://www.visaprocessinfo.com",
    description:
      "Free visa and immigration guides for 131+ countries — study, work, tourist, and PR pathways.",
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 4,
    },
    knowsAbout: [
      "Visa Applications",
      "Immigration Law",
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
