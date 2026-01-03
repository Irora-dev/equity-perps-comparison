import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Convert PHP to USDC | Guide for Filipino Traders 2026',
  description: 'Step-by-step guide to convert Philippine Pesos (PHP) to USDC using Binance P2P, Coins.ph, GCash, and Maya. Best rates for Filipino traders.',
  keywords: [
    'convert php to usdc',
    'php to usdc',
    'buy usdc philippines',
    'gcash crypto',
    'maya usdc',
    'binance p2p philippines',
    'philippine peso to usdc',
    'buy crypto philippines',
    'coins.ph usdc',
  ],
  openGraph: {
    title: 'Convert PHP to USDC - Guide for Filipino Traders',
    description: 'Use GCash, Maya, or bank transfer to buy USDC. Step-by-step instructions.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/convert-php-to-usdc/',
  },
};

export default function ConvertPHPtoUSDCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
