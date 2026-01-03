import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade US Stocks from Vietnam | Complete Guide 2026',
  description: 'How to trade NVDA, TSLA, AAPL from Vietnam. Convert VND to USDC via MoMo, ZaloPay and start trading US stocks 24/7.',
  keywords: [
    'trade us stocks vietnam',
    'buy us stocks from vietnam',
    'vietnam stock trading',
    'trade nvidia vietnam',
    'trade tesla vietnam',
    'vnd to usdc',
    'momo crypto',
    'zalopay usdc',
    'equity perps vietnam',
  ],
  openGraph: {
    title: 'Trade US Stocks from Vietnam - Complete Guide',
    description: 'Access NVDA, TSLA, AAPL and 50+ US stocks from Vietnam. No US broker needed.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-us-stocks-from-vietnam/',
  },
};

export default function TradeUSStocksFromVietnamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
