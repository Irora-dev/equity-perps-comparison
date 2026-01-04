import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade Charizard Cards | ZARD Perpetuals on Trove Markets',
  description: 'Trade Charizard Pokemon card exposure with up to 5x leverage on Trove Markets. Get exposure to $100k+ Base Set Charizard prices without owning physical cards. ZARD index, 24/7 trading, no KYC.',
  keywords: [
    'trade charizard cards',
    'charizard perpetuals',
    'ZARD index',
    'trove markets charizard',
    'pokemon card trading',
    'charizard investment',
    'base set charizard',
    '1st edition charizard',
    'pokemon card perps',
    'collectibles perpetuals',
    'hyperliquid collectibles',
    'trade pokemon cards crypto',
  ],
  openGraph: {
    title: 'Trade Charizard Cards | ZARD Perpetuals on Trove Markets',
    description: 'Get leveraged exposure to Charizard card prices. Trade the ZARD index 24/7 with up to 5x leverage. No KYC required.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-charizard-cards/',
  },
};

export default function TradeCharizardCardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
