import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Trade Stocks With $100 | Small Account Trading Guide 2026',
  description: 'Learn how to trade stocks with just $100. Use leverage to control $1,000+ of stock exposure. Start trading NVDA, TSLA, AAPL with a small account.',
  keywords: [
    'trade stocks with 100 dollars',
    'small account trading',
    'how to trade stocks with little money',
    'best way to grow 100 dollars',
    'trading with small capital',
    'leverage trading for beginners',
    'grow small trading account',
    'trade stocks with 50 dollars',
    'minimum to start trading stocks',
    'fractional stock trading',
  ],
  openGraph: {
    title: 'How to Trade Stocks With $100',
    description: 'Turn $100 into $1,000+ of stock exposure with leverage. Small account trading guide.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-stocks-with-100/',
  },
};

export default function TradeStocksWith100Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
