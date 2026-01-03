import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PnL Simulator | Leverage Trading Calculator',
  description: 'Simulate your profit and loss with different leverage levels. See exactly how leverage amplifies gains and losses before risking real money.',
  keywords: [
    'pnl simulator',
    'leverage calculator',
    'trading simulator',
    'profit loss calculator',
    'perpetual trading calculator',
    'leverage trading risk',
    'position size calculator',
    'liquidation calculator',
  ],
  openGraph: {
    title: 'PnL Simulator - See How Leverage Affects Your Trades',
    description: 'Interactive tool to simulate profit and loss scenarios with different leverage levels.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/pnl-simulator/',
  },
};

export default function PnLSimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
