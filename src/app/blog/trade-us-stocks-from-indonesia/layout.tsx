import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade US Stocks from Indonesia | Complete Guide 2026',
  description: 'How to trade NVDA, TSLA, AAPL from Indonesia. Convert IDR to USDC via GoPay, OVO, Dana, or QRIS and start trading US stocks 24/7.',
  keywords: [
    'trade us stocks indonesia',
    'buy us stocks from indonesia',
    'indonesia stock trading',
    'trade nvidia indonesia',
    'trade tesla indonesia',
    'idr to usdc',
    'gopay crypto',
    'ovo usdc',
    'dana crypto',
    'equity perps indonesia',
    'binance p2p indonesia',
    'tokocrypto',
    'indodax usdc',
  ],
  openGraph: {
    title: 'Trade US Stocks from Indonesia - Complete Guide',
    description: 'Access NVDA, TSLA, AAPL and 50+ US stocks from Indonesia. No US broker needed.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-us-stocks-from-indonesia/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Trade US Stocks from Indonesia',
  description: 'Complete guide for Indonesian traders to access US stocks like NVIDIA, Tesla, and Apple using IDR through GoPay, OVO, Dana, and Indonesian banks.',
  author: {
    '@type': 'Organization',
    name: 'Compare Equity Perps',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Compare Equity Perps',
  },
  datePublished: '2026-01-04',
  dateModified: '2026-01-04',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://compareequityperps.com/blog/trade-us-stocks-from-indonesia/',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a US brokerage account to trade US stocks from Indonesia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You can trade synthetic US stocks with USDC on decentralized platforms. No KYC or US account required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert IDR to USDC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use Binance P2P, Tokocrypto, or Indodax. Pay with GoPay, OVO, Dana, QRIS, or bank transfer from BCA, Mandiri, BNI, or BRI.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum amount to start trading US stocks from Indonesia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can start with Rp800,000 (~$50 USD). Fractional trading gives access to all US stocks regardless of price.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods work for Indonesian traders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'E-wallets like GoPay, OVO, Dana, ShopeePay are most popular, plus QRIS and bank transfers from major Indonesian banks like BCA, Mandiri, BNI, and BRI.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I trade during US market hours from Indonesia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! US markets open at 9:30 PM WIB and close at 4:00 AM WIB. Plus, equity perps trade 24/7, so you can trade anytime.',
      },
    },
  ],
};

export default function TradeUSStocksFromIndonesiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
