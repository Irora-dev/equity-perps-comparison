import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Are Equity Perpetuals? | Trade Stocks 24/7 With Leverage',
  description: 'Equity perpetuals let you trade NVDA, TSLA, AAPL 24/7 with up to 200x leverage. No broker needed. Learn how they work and start trading in 10 minutes.',
  keywords: [
    'equity perpetuals',
    'what are equity perps',
    'perpetual futures stocks',
    'trade stocks 24/7',
    'leveraged stock trading',
    'equity perps explained',
    'stock perpetuals',
    'perps trading guide',
  ],
  openGraph: {
    title: 'What Are Equity Perpetuals? | Trade Stocks 24/7',
    description: 'Trade NVDA, TSLA, AAPL around the clock with leverage. No broker required.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/what-are-equity-perpetuals/',
  },
};

export default function WhatAreEquityPerpetualsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
