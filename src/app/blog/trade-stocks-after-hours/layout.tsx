import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Trade Stocks After Hours | 24/7 Stock Trading Guide 2026',
  description: 'Learn how to trade stocks after hours, on weekends, and holidays. Trade NVDA, TSLA, AAPL anytime with equity perpetuals. No broker restrictions.',
  keywords: [
    'trade stocks after hours',
    'after hours trading',
    'pre-market trading',
    'extended hours stock trading',
    'how to trade stocks at night',
    'weekend stock trading',
    'trade stocks 24/7',
    'after hours trading for beginners',
    'overnight stock trading',
    'trade stocks outside market hours',
  ],
  openGraph: {
    title: 'How to Trade Stocks After Hours | 24/7 Trading',
    description: 'Trade NVDA, TSLA, AAPL at 2am, on weekends, anytime. No broker restrictions.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-stocks-after-hours/',
  },
};

export default function TradeStocksAfterHoursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
