import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade US Stocks with PKR 15,000 | Small Account Guide Pakistan 2026',
  description: 'Start trading NVDA, TSLA, AAPL with just PKR 15,000 (~$50). Complete guide for Pakistani traders with small accounts using equity perpetuals.',
  keywords: [
    'trade stocks pkr 15000',
    'small account trading pakistan',
    'pkr 15000 investment',
    'trade us stocks pakistan',
    'equity perps small account',
    'pakistan stock trading small capital',
    'nvda trading pakistan',
    'tesla trading pakistan',
  ],
  openGraph: {
    title: 'Trade US Stocks with PKR 15,000 - Small Account Guide',
    description: 'Turn PKR 15,000 into a US stock trading portfolio. No minimums, 24/7 access.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-stocks-with-15000-pkr/',
  },
};

export default function TradeWith15000PKRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
