// JSON-LD Schema generators for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Compare Equity Perps',
  url: 'https://compareequityperps.com',
  logo: 'https://compareequityperps.com/logo.png',
  description: 'Compare equity perpetual trading platforms. Find the best venues for trading stock perps with live funding rates.',
  sameAs: [],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Compare Equity Perps',
  url: 'https://compareequityperps.com',
  description: 'Compare equity perpetual trading platforms with live funding rates and fees.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://compareequityperps.com/stocks/{search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export function generateArticleSchema({
  title,
  description,
  slug,
  datePublished = '2025-01-01',
  dateModified = new Date().toISOString().split('T')[0],
}: {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `https://compareequityperps.com/blog/${slug}`,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: 'Compare Equity Perps',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Compare Equity Perps',
      logo: {
        '@type': 'ImageObject',
        url: 'https://compareequityperps.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://compareequityperps.com/blog/${slug}`,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToSchema({
  name,
  description,
  totalTime,
  steps,
}: {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateProductSchema({
  name,
  description,
  url,
  rating,
  reviewCount,
}: {
  name: string;
  description: string;
  url: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
    ...(rating && reviewCount && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating,
        reviewCount: reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };
}

export function generateFinancialProductSchema({
  name,
  description,
  url,
  provider,
}: {
  name: string;
  description: string;
  url: string;
  provider: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
  };
}
