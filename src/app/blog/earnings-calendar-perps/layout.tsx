import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Earnings Calendar for Equity Perps | Trade Earnings 24/7',
  description: 'Track upcoming earnings for stocks available as perpetuals. Trade NVDA, TSLA, AAPL, META earnings reactions instantly on Hyperliquid - no waiting for market open.',
  keywords: [
    'earnings calendar perps',
    'stock earnings perpetuals',
    'trade earnings 24/7',
    'NVDA earnings trading',
    'TSLA earnings perps',
    'earnings volatility trading',
    'pre-market earnings trade',
    'after-hours earnings',
    'equity perps earnings',
    'hyperliquid earnings',
    'earnings implied move',
    'earnings trading strategy',
  ],
  openGraph: {
    title: 'Earnings Calendar for Equity Perps - Trade Reactions Instantly',
    description: 'Upcoming earnings dates for stocks available as perps. Trade the reaction immediately on Hyperliquid - 24/7, no waiting for market open.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/earnings-calendar-perps/',
  },
};

export default function EarningsCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
