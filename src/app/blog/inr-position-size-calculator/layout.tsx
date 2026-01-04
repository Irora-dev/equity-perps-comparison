import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'INR to Position Size Calculator | Trade US Stocks from India 2026',
  description: 'Calculate how much you can trade with Indian Rupees. Convert INR to USDC and see position sizes with leverage for NVDA, TSLA, AAPL. Bilingual Hindi/English tool.',
  keywords: [
    'inr position size calculator',
    'rupee to usdc calculator',
    'trade us stocks india',
    'inr leverage calculator',
    'indian rupee trading calculator',
    'how much can i trade with rupees',
    'convert inr to trading position',
    'india stock trading calculator',
    'leverage trading india',
    'position size calculator india',
  ],
  openGraph: {
    title: 'INR to Position Size Calculator - Trade US Stocks from India',
    description: 'Convert your INR to USDC and see exactly how much you can trade with leverage. Bilingual Hindi/English tool.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/inr-position-size-calculator/',
  },
};

export default function INRPositionSizeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
