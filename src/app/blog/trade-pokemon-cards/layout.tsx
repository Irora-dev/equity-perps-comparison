import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade Pokemon Cards | Pokemon Card Perpetuals on Trove Markets',
  description: 'Trade Pokemon card perpetual futures on Trove Markets with up to 5x leverage. Go long or short on the POKE index tracking graded Charizard, Pikachu, Mewtwo and more. 24/7 trading, no KYC, self-custody.',
  keywords: [
    'trade pokemon cards',
    'pokemon card perpetuals',
    'poke perps',
    'pokemon card index',
    'trove markets pokemon',
    'pokemon card futures',
    'pokemon card trading',
    'collectibles perpetuals',
    'graded pokemon cards',
    'charizard trading',
    'pokemon card investment',
    'hip-3 pokemon',
    'hyperliquid collectibles',
  ],
  openGraph: {
    title: 'Trade Pokemon Cards on Trove Markets',
    description: 'Trade the POKE index with up to 5x leverage. Long or short graded Pokemon cards 24/7 with no KYC.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-pokemon-cards/',
  },
};

export default function TradePokemonCardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
