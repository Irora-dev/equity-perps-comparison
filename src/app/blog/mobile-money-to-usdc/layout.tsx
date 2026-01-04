import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Money to USDC Guide | M-Pesa, MTN MoMo, Airtel Money 2026',
  description: 'Convert African mobile money to USDC. Step-by-step guides for M-Pesa, MTN Mobile Money, Airtel Money, and Orange Money to crypto via Binance P2P and Yellow Card.',
  keywords: [
    'mpesa to usdc',
    'mtn momo to usdc',
    'airtel money crypto',
    'orange money usdc',
    'mobile money to crypto',
    'binance p2p africa',
    'yellow card crypto',
    'kenya crypto',
    'ghana crypto',
    'nigeria mobile money',
    'uganda crypto',
    'tanzania mpesa usdc',
  ],
  openGraph: {
    title: 'Mobile Money to USDC - Complete African Guide',
    description: 'Convert M-Pesa, MTN MoMo, Airtel Money to USDC. Best platforms and methods for African traders.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/mobile-money-to-usdc/',
  },
};

export default function MobileMoneyToUSDCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
