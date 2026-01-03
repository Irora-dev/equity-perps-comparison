import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade US Stocks from Nigeria | Complete Guide 2026',
  description: 'How to trade NVDA, TSLA, AAPL from Nigeria. Convert NGN to USDC via Opay, Palmpay, Binance P2P and start trading 24/7. No US broker needed.',
  keywords: [
    'trade us stocks nigeria',
    'nigeria stock trading',
    'ngn to usdc',
    'opay crypto',
    'palmpay usdc',
    'equity perps nigeria',
    'buy us stocks in nigeria',
    'trade tesla from nigeria',
    'trade nvidia from nigeria',
    'binance p2p nigeria',
  ],
  openGraph: {
    title: 'Trade US Stocks from Nigeria - Complete Guide',
    description: 'Access 50+ US stocks from Nigeria. No US broker needed. Start with ~$30.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-us-stocks-from-nigeria/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
