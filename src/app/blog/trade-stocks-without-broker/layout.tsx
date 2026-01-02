import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade Stocks Without a Broker | 24/7 Stock Trading Guide 2026',
  description: 'Trade NVDA, TSLA, AAPL and 50+ stocks 24/7 without a broker. No account needed - start in 10 minutes. Trade on weekends, after hours, anytime.',
  keywords: [
    'trade stocks without broker',
    'no broker stock trading',
    'trade stocks 24/7',
    'weekend stock trading',
    'trade stocks with wallet',
    'stock trading no brokerage',
    'direct stock trading',
    'decentralized stock trading',
    'trade stocks without account',
    'broker-free stock trading',
    'self-custody stock trading',
    'trade stocks after hours',
  ],
  openGraph: {
    title: 'Trade Stocks Without a Broker | 24/7 Stock Trading',
    description: 'No brokerage account needed. Trade NVDA, TSLA, AAPL 24/7 with just a wallet.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-stocks-without-broker/',
  },
};

export default function TradeStocksWithoutBrokerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
