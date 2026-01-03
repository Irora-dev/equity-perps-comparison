import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade US Stocks from Brazil | BRL to USDC Guide 2025',
  description: 'Brazilian guide to trading US stocks 24/7. Convert BRL to USDC with PIX, start with R$250. Access NVIDIA, Tesla, Apple from Brazil. Markets close at 5pm BRT.',
  keywords: ['trade US stocks Brazil', 'BRL to USDC', 'PIX crypto', 'Brazilian stock trading', 'Hyperliquid Brazil', 'investir acoes americanas', 'comprar acoes EUA do Brasil'],
  openGraph: {
    title: 'Trade US Stocks from Brazil | BRL to USDC Guide 2025',
    description: 'Brazilian guide to trading US stocks 24/7. Convert BRL to USDC with PIX, start with R$250. Access NVIDIA, Tesla, Apple from Brazil.',
    type: 'article',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade US Stocks from Brazil | BRL to USDC Guide 2025',
    description: 'Brazilian guide to trading US stocks 24/7. Convert BRL to USDC with PIX, start with R$250.',
  },
  alternates: {
    languages: {
      'en': '/blog/trade-us-stocks-from-brazil',
      'pt-BR': '/blog/trade-us-stocks-from-brazil',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Trade US Stocks from Brazil | Complete Guide 2025',
  description: 'Learn how to trade US stocks like NVIDIA, Tesla, and Apple from Brazil using PIX and USDC. Start with R$250, trade 24/7.',
  author: {
    '@type': 'Organization',
    name: 'Equity Perps',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Equity Perps',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://equityperps.com/blog/trade-us-stocks-from-brazil',
  },
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  inLanguage: ['en', 'pt-BR'],
  about: {
    '@type': 'Thing',
    name: 'Cryptocurrency Trading',
  },
  mentions: [
    { '@type': 'Thing', name: 'PIX' },
    { '@type': 'Thing', name: 'USDC' },
    { '@type': 'Thing', name: 'Binance P2P' },
    { '@type': 'Thing', name: 'Bybit P2P' },
    { '@type': 'Country', name: 'Brazil' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a US brokerage account to trade US stocks from Brazil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Equity perps are synthetic derivatives that track US stock prices. You trade with USDC on decentralized platforms - no US broker, no SSN, no complex foreign account paperwork or IOF taxes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is trading equity perps legal in Brazil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Equity perps exist in a regulatory gray area. They are decentralized derivatives not specifically regulated by the CVM (Brazilian SEC). You are responsible for reporting any trading profits for tax purposes to Receita Federal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I convert BRL to USDC in Brazil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The easiest way is Binance P2P or Bybit P2P with PIX - you buy USDC directly from other users with instant payment. PIX makes the process incredibly fast, usually completing in under 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum amount to start trading from Brazil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can start with as little as R$250 (~$50 USDC). Fractional trading means you can trade any US stock regardless of its price - no need to buy a full share.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods work for Brazilian traders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PIX is the fastest and most popular - it is instant, free, and available 24/7. You can also use PicPay and Mercado Pago. Bank transfers from Nubank, Itau, Bradesco, and Banco do Brasil work great too.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from XP, Rico, or Avenue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlike Brazilian brokers, equity perps offer: 24/7 trading (not just US market hours), up to 50x leverage, no KYC required, self-custody of funds, no IOF tax on international transfers, and easier short selling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the timezone advantage for Brazilian traders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'US markets close at 5pm BRT - perfect for trading after work. But with equity perps, you can trade anytime - react to after-hours earnings or trade on weekends when traditional markets are closed.',
      },
    },
  ],
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Trade US Stocks from Brazil',
  description: 'Step-by-step guide for Brazilian traders to access US stock markets using equity perpetuals and PIX payments.',
  totalTime: 'PT15M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'BRL',
    value: '250',
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Set Up Digital Wallet',
      text: 'Download and install Rabby wallet browser extension. Create a new wallet and securely store your 12-word recovery phrase.',
      url: 'https://rabby.io',
    },
    {
      '@type': 'HowToStep',
      name: 'Fund Wallet with USDC',
      text: 'Use Binance P2P or Bybit P2P to convert BRL to USDC using PIX instant payment. Withdraw USDC to your Rabby wallet on Arbitrum network.',
    },
    {
      '@type': 'HowToStep',
      name: 'Connect to Trading Platform',
      text: 'Go to app.hyperliquid.xyz, connect your Rabby wallet, and deposit USDC to start trading US stock perpetuals.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {children}
    </>
  );
}
