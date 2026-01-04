import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'US Stock Market Hours in IST | Live Clock & Time Converter 2026',
  description: 'Real-time US market hours in Indian Standard Time (IST). Live clock showing pre-market (2:30 PM IST), regular hours (8:00 PM - 2:30 AM IST), and after-hours. Trade 24/7 with equity perps.',
  keywords: [
    'us market hours in ist',
    'us stock market time in india',
    'nyse opening time in india',
    'nasdaq hours ist',
    'when does us market open india',
    'us market timing india',
    'american stock market hours ist',
    'wall street hours india',
    'us market open time ist',
    'trade us stocks from india',
    'us market close time india',
    'pre market hours india',
  ],
  openGraph: {
    title: 'US Stock Market Hours in IST - Live Clock',
    description: 'Real-time US market hours converted to Indian Standard Time. Pre-market 2:30 PM, Regular 8:00 PM - 2:30 AM IST.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/us-market-hours-india/',
  },
};

export default function USMarketHoursIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'US Stock Market Hours in IST - Live Clock',
    description: 'Real-time converter showing US stock market trading hours in Indian Standard Time (IST). Includes pre-market, regular, and after-hours sessions.',
    url: 'https://compareequityperps.com/blog/us-market-hours-india/',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Live ET to IST time conversion',
      'Real-time market status indicator',
      'Countdown to market open/close',
      'US market holiday calendar',
      '24/7 trading with equity perps',
      'Hindi/English bilingual support',
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Indian traders interested in US stock markets',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What time does the US stock market open in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The US stock market opens at 8:00 PM IST (9:30 AM ET) for regular trading hours. Pre-market trading starts at 2:30 PM IST (4:00 AM ET). During US Daylight Saving Time (March-November), times shift 1 hour earlier.',
        },
      },
      {
        '@type': 'Question',
        name: 'What time does the US stock market close in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The US stock market closes at 2:30 AM IST (4:00 PM ET) for regular trading. After-hours trading continues until 6:30 AM IST (8:00 PM ET).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I trade US stocks during Indian market hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional US stock markets are closed during Indian market hours (9:15 AM - 3:30 PM IST). However, equity perpetuals allow you to trade US stock exposure 24/7, including during Indian daytime.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best time to trade US stocks from India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The first hour after US market open (8:00 PM - 9:00 PM IST) and last hour before close (1:30 AM - 2:30 AM IST) typically have the highest volatility and liquidity.',
        },
      },
    ],
  };

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
