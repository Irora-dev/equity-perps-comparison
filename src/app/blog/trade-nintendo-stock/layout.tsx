import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade Nintendo Stock | Nintendo Perpetuals on Trove Markets',
  description: 'Trade Nintendo (NTDOY) stock 24/7 with up to 5x leverage on Trove Markets. No KYC required, no Japanese brokerage needed. Trade around game releases and console announcements.',
  keywords: [
    'trade Nintendo stock',
    'Nintendo perpetuals',
    'NTDOY trading',
    'Nintendo stock 24/7',
    'trade Nintendo without broker',
    'Nintendo leverage trading',
    'Trove Markets Nintendo',
    'Nintendo equity perps',
    'trade Japanese stocks',
    'Nintendo Switch stock',
    'Nintendo trading no KYC',
    'weekend Nintendo trading',
  ],
  openGraph: {
    title: 'Trade Nintendo Stock 24/7 | Trove Markets',
    description: 'Trade Nintendo (NTDOY) perpetuals with 5x leverage. No Japanese brokerage needed, no KYC, 24/7 access.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-nintendo-stock/',
  },
};

export default function TradeNintendoStockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
