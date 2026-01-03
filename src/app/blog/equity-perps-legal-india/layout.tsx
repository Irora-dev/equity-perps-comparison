import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Trading Equity Perps Legal in India? | Regulatory Guide 2026',
  description: 'Understanding the legal status of equity perpetuals in India. SEBI regulations, tax implications, and what Indian traders need to know.',
  keywords: [
    'equity perps legal india',
    'is trading perps legal in india',
    'sebi crypto regulations',
    'trading us stocks india legal',
    'defi trading india',
    'crypto derivatives india',
    'perpetual trading india tax',
    'rbi crypto guidelines',
  ],
  openGraph: {
    title: 'Is Trading Equity Perps Legal in India?',
    description: 'Understanding regulations, taxes, and legal considerations for Indian traders.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/equity-perps-legal-india/',
  },
};

export default function EquityPerpsLegalIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
