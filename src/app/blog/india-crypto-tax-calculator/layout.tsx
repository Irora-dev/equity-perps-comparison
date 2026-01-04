import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'India Crypto Tax Calculator 2026 | 30% Tax + 1% TDS Calculator',
  description: 'Calculate your crypto tax liability in India. Interactive calculator for 30% flat tax on gains and 1% TDS. Understand VDA taxation rules, no loss offset policy, and effective tax rates.',
  keywords: [
    'india crypto tax calculator',
    'crypto tax india',
    'vda tax calculator',
    '30 percent crypto tax india',
    '1 percent tds crypto',
    'bitcoin tax india',
    'cryptocurrency tax calculator india',
    'crypto gains tax india 2026',
    'virtual digital asset tax',
    'section 115bbh calculator',
    'crypto tax india hindi',
  ],
  openGraph: {
    title: 'India Crypto Tax Calculator - 30% Tax + 1% TDS',
    description: 'Calculate your cryptocurrency tax liability in India. Includes 30% flat tax on gains and 1% TDS on transactions.',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/india-crypto-tax-calculator/',
  },
};

export default function IndiaCryptoTaxCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
