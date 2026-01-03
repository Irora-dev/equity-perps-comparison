import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Short Stocks Without a Broker | Easy Short Selling Guide 2026',
  description: 'Learn how to short stocks without a broker. Short TSLA, NVDA, any stock instantly with no borrowing fees, no restrictions. Start in 10 minutes.',
  keywords: [
    'how to short stocks',
    'short stocks without broker',
    'shorting stocks for beginners',
    'easy way to short stocks',
    'short selling guide',
    'how to bet against a stock',
    'short stocks no margin account',
    'short selling without borrowing',
    'how to profit when stocks fall',
    'short TSLA',
    'short NVDA',
  ],
  openGraph: {
    title: 'How to Short Stocks Without a Broker',
    description: 'Short any stock instantly. No borrowing, no margin account, no broker approval.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/how-to-short-stocks/',
  },
};

export default function HowToShortStocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
