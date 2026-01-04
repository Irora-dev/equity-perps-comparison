import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Funding Rate Arbitrage Finder | Cross-Platform Equity Perps Strategy',
  description: 'Find funding rate arbitrage opportunities across equity perpetual platforms. Calculate potential profits from rate differentials between Hyperliquid, Lighter, Ostium, Avantis, and more.',
  keywords: [
    'funding rate arbitrage',
    'cross-platform arbitrage',
    'equity perps arbitrage',
    'funding rate differential',
    'arbitrage calculator',
    'delta neutral strategy',
    'funding rate spread',
    'perps arbitrage',
    'hyperliquid arbitrage',
    'lighter arbitrage',
  ],
  openGraph: {
    title: 'Funding Rate Arbitrage Finder | Cross-Platform Strategy',
    description: 'Discover cross-platform funding rate differentials and calculate potential arbitrage profits on equity perpetuals.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funding Rate Arbitrage Finder',
    description: 'Find and calculate funding rate arbitrage opportunities across equity perps platforms.',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/funding-rate-arbitrage/',
  },
};

export default function FundingRateArbitrageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
