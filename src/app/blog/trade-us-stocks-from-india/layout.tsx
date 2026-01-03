import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Trade US Stocks from India | No Broker Account Needed 2026',
  description: 'Trade NVDA, TSLA, AAPL and 50+ US stocks from India without a US broker. Use INR, no KYC, 24/7 access. Step-by-step guide with Binance P2P and WazirX.',
  keywords: [
    'trade us stocks from india',
    'how to buy us stocks in india',
    'trade american stocks india',
    'us stock trading india',
    'trade nvidia from india',
    'trade tesla from india',
    'invest in us stocks from india without broker',
    'us stocks without liberalised remittance scheme',
    'trade us stocks without lrs',
    'inr to usdc',
    'buy us stocks with inr',
  ],
  openGraph: {
    title: 'Trade US Stocks from India - No Broker Needed',
    description: 'Access NVDA, TSLA, AAPL 24/7 from India. Convert INR to USDC and start trading in 15 minutes.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-us-stocks-from-india/',
  },
};

export default function TradeUSStocksFromIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
