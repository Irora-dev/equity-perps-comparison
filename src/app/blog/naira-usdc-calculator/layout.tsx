import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naira Real Rate Calculator | NGN to USDC Converter for Nigerian Traders 2026',
  description: 'Calculate the real value of your Naira. Compare CBN official rate vs parallel market rate. Find best P2P rates on Binance, Bybit for converting NGN to USDC.',
  keywords: [
    'naira to usdc calculator',
    'ngn usdc rate',
    'nigeria dollar rate calculator',
    'cbn rate vs parallel rate',
    'black market dollar rate nigeria',
    'binance p2p nigeria',
    'bybit p2p nigeria',
    'convert naira to usdc',
    'naira real rate',
    'nigeria forex rate calculator',
    'parallel market rate nigeria',
    'aboki fx rate',
  ],
  openGraph: {
    title: 'Naira Real Rate Calculator - CBN vs Parallel Market Rates',
    description: 'Calculate what your Naira is really worth. Compare official CBN rate vs parallel market. Find best P2P rates for Nigerian traders.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/naira-usdc-calculator/',
  },
};

export default function NairaUSDCCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
