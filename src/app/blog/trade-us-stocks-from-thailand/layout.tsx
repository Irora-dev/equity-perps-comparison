import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade US Stocks from Thailand | Complete Guide 2026',
  description: 'How to trade NVDA, TSLA, AAPL from Thailand. Convert THB to USDC via PromptPay or TrueMoney and start trading US stocks 24/7.',
  keywords: [
    'trade us stocks thailand',
    'buy us stocks from thailand',
    'thailand stock trading',
    'trade nvidia thailand',
    'trade tesla thailand',
    'thb to usdc',
    'promptpay crypto',
    'truemoney usdc',
    'equity perps thailand',
  ],
  openGraph: {
    title: 'Trade US Stocks from Thailand - Complete Guide',
    description: 'Access NVDA, TSLA, AAPL and 50+ US stocks from Thailand. No US broker needed.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-us-stocks-from-thailand/',
  },
};

export default function TradeUSStocksFromThailandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
