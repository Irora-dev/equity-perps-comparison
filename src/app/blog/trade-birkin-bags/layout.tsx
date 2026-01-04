import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade Birkin Bags | Hermes Birkin Perpetuals on Trove Markets',
  description: 'Trade Hermes Birkin bag value with up to 5x leverage on Trove Markets. Access luxury asset perpetual futures 24/7, no KYC required. Birkin bags have outperformed S&P 500 historically.',
  keywords: [
    'trade birkin bags',
    'hermes birkin perpetuals',
    'birkin bag investment',
    'luxury asset trading',
    'trove markets',
    'birkin bag index',
    'luxury perpetual futures',
    'alternative asset trading',
    'birkin bag value',
    'hermes investment',
    'luxury goods trading',
    'hyperliquid birkin',
  ],
  openGraph: {
    title: 'Trade Birkin Bags - Hermes Birkin Perpetuals on Trove Markets',
    description: 'Trade Hermes Birkin bag value with up to 5x leverage. No $50k minimum, no storage costs, no KYC required.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-birkin-bags/',
  },
};

export default function TradeBirkinBagsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
