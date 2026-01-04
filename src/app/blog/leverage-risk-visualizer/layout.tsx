import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leverage Risk Visualizer | See How Fast You Can Get Liquidated',
  description: 'Interactive leverage risk calculator. Visualize liquidation prices, danger zones, and compare 5x vs 10x vs 20x leverage scenarios. Understand exactly how leverage amplifies risk.',
  keywords: [
    'leverage risk calculator',
    'liquidation visualizer',
    'leverage danger zone',
    'perpetual trading risk',
    'leverage comparison tool',
    'margin trading risk',
    'liquidation price calculator',
    'equity perps leverage',
    'trading risk assessment',
    'leverage impact visualizer',
  ],
  openGraph: {
    title: 'Leverage Risk Visualizer - See the Danger Before You Trade',
    description: 'Interactive tool to visualize how leverage impacts liquidation risk. Compare 5x, 10x, and 20x leverage scenarios side by side.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/leverage-risk-visualizer/',
  },
};

export default function LeverageRiskVisualizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
