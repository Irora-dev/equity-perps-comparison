import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade US Stocks from South Africa | Complete Guide 2026',
  description: 'How to trade NVDA, TSLA, AAPL from South Africa. Convert ZAR to USDC via Luno, VALR, SnapScan and start trading 24/7.',
  keywords: ['trade us stocks south africa', 'south africa stock trading', 'zar to usdc', 'luno usdc', 'valr crypto', 'equity perps south africa', 'snapsan crypto', 'capitec crypto'],
  openGraph: { title: 'Trade US Stocks from South Africa - Complete Guide', description: 'Access 50+ US stocks from South Africa. No US broker needed. Start with R900.', type: 'article' },
  alternates: { canonical: 'https://compareequityperps.com/blog/trade-us-stocks-from-south-africa/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Trade US Stocks from South Africa - Complete Guide 2026',
  description: 'Step-by-step guide for South African traders to access US stocks like NVIDIA, Tesla, and Apple using ZAR through decentralized platforms.',
  author: {
    '@type': 'Organization',
    name: 'Compare Equity Perps',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Compare Equity Perps',
    url: 'https://compareequityperps.com',
  },
  datePublished: '2026-01-04',
  dateModified: '2026-01-04',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://compareequityperps.com/blog/trade-us-stocks-from-south-africa/',
  },
  about: {
    '@type': 'Thing',
    name: 'US Stock Trading from South Africa',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a US brokerage account to trade US stocks from South Africa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You can trade synthetic US stocks with USDC on decentralized platforms without needing a US brokerage account or dealing with foreign exchange control issues.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert ZAR to USDC in South Africa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use Luno (most popular in SA), VALR, or Binance P2P with bank EFT, SnapScan, Zapper, or instant payment methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum amount to start trading US stocks from South Africa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can start with as little as R900 (approximately $50 USD). Fractional trading allows access to all US stocks without needing thousands of rands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods work for converting ZAR to USDC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bank EFT transfers from FNB, Standard Bank, Nedbank, Absa, Capitec, and Investec work well. Digital payment options include SnapScan, Zapper, PayFast, and Ozow.',
      },
    },
    {
      '@type': 'Question',
      name: 'What timezone considerations are there for South African traders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SAST (UTC+2) is close to European markets. US markets open at 4:30pm SAST. With equity perps, you can trade 24/7 regardless of traditional market hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there forex restrictions when trading US stocks from South Africa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Equity perps bypass traditional forex controls since you are not directly buying US shares. You convert ZAR to cryptocurrency (USDC) and trade synthetic assets.',
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
