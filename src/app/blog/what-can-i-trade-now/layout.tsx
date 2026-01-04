import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Can I Trade Right Now? | Live Market Hours Tool 2026',
  description: 'See which markets are open right now. US, Asian, and European market hours with live clock. Trade stocks 24/7 with equity perpetuals when markets close.',
  keywords: [
    'what can I trade right now',
    'market hours',
    'stock market open',
    'is the market open',
    'trading hours today',
    'when does stock market open',
    'pre market hours',
    'after hours trading',
    'weekend stock trading',
    'asian market hours',
    'european market hours',
    '24/7 stock trading',
    'trade stocks anytime',
  ],
  openGraph: {
    title: 'What Can I Trade Right Now? | Live Market Hours',
    description: 'See which markets are open. Trade stocks 24/7 with equity perps when traditional markets close.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/what-can-i-trade-now/',
  },
};

export default function WhatCanITradeNowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
