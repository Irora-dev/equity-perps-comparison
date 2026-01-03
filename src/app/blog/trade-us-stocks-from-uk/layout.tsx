import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade US Stocks from the UK | GBP to USDC Guide 2025',
  description: 'UK guide to trading US stocks 24/7. Convert GBP to USDC with Faster Payments, start with just £40. Access NVIDIA, Tesla, Apple from the UK without a US brokerage.',
  keywords: ['trade US stocks UK', 'GBP to USDC', 'Faster Payments crypto', 'UK stock trading', 'Hyperliquid UK', 'trade US stocks from UK', 'UK equity perpetuals', 'after hours trading UK'],
  openGraph: {
    title: 'Trade US Stocks from the UK | 24/7 Access',
    description: 'UK guide to trading US stocks 24/7. Start with just £40. No US brokerage needed.',
    type: 'article',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade US Stocks from the UK | 24/7 Access',
    description: 'UK guide to trading US stocks 24/7. Start with just £40. No US brokerage needed.',
  },
  alternates: {
    canonical: 'https://equityperps.com/blog/trade-us-stocks-from-uk',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
