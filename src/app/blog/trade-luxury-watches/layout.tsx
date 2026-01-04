import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade Luxury Watches | Watch Index Perpetuals on Trove Markets',
  description: 'Trade Rolex, Patek Philippe, and Audemars Piguet market values 24/7 with up to 5x leverage. No KYC required. Get exposure to luxury watch prices on Trove Markets.',
  keywords: [
    'trade luxury watches',
    'watch index perpetuals',
    'Trove Markets',
    'Rolex perpetuals',
    'Patek Philippe trading',
    'Audemars Piguet trading',
    'luxury watch index',
    'watch market trading',
    'trade Rolex online',
    'luxury watch derivatives',
    'watch perps',
    'decentralized watch trading',
    'Hyperliquid watches',
    'HIP-3 perpetuals',
    'no KYC watch trading',
    'luxury goods perpetuals',
  ],
  openGraph: {
    title: 'Trade Luxury Watches | Watch Index Perpetuals on Trove Markets',
    description: 'Get exposure to Rolex, Patek Philippe, and Audemars Piguet market values. Trade 24/7 with up to 5x leverage. No KYC required.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade Luxury Watch Value on Trove Markets',
    description: 'Trade the Watch Index 24/7 with up to 5x leverage. Rolex, Patek Philippe, Audemars Piguet exposure without owning physical watches.',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-luxury-watches/',
  },
};

export default function TradeLuxuryWatchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
