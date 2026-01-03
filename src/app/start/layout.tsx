import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start Trading Stocks 24/7 | Personalized Setup Guide',
  description: 'Tell us what stock you want to trade and how - we\'ll show you exactly how to do it. Trade without a broker, 24/7, on weekends, from anywhere.',
  keywords: [
    'start trading stocks',
    'how to trade stocks',
    'trade stocks without broker',
    'trade stocks 24/7',
    'weekend stock trading',
    'stock trading guide',
    'personalized trading setup',
  ],
  openGraph: {
    title: 'Start Trading Stocks Your Way',
    description: 'Tell us what you want to trade and how. We\'ll show you exactly how to do it.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/start/',
  },
};

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
