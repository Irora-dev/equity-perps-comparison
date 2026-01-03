import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade US Stocks with PHP 3,000 | Small Account Guide Philippines 2026',
  description: 'Start trading NVDA, TSLA, AAPL with just PHP 3,000 (~$50). Complete guide for Filipino traders with small accounts using equity perpetuals.',
  keywords: [
    'trade stocks php 3000',
    'small account trading philippines',
    'php 3000 investment',
    'trade us stocks philippines',
    'equity perps small account',
    'philippines stock trading small capital',
    'nvda trading philippines',
    'tesla trading philippines',
  ],
  openGraph: {
    title: 'Trade US Stocks with PHP 3,000 - Small Account Guide',
    description: 'Turn PHP 3,000 into a US stock trading portfolio. No minimums, 24/7 access.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-stocks-with-3000-php/',
  },
};

export default function TradeWith3000PHPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
