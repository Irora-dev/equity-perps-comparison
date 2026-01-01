import type { Metadata } from 'next';
import StockHub from '@/components/StockHub';

export const metadata: Metadata = {
  title: 'Equity Perps Stock Hub | Live Prices & Trading Data',
  description: 'Real-time prices and funding rates for 50+ equity perpetuals. Compare NVDA, TSLA, AAPL, and more across Hyperliquid, Ostium, and Lighter.',
  openGraph: {
    title: 'Equity Perps Stock Hub | Live Trading Data',
    description: 'Real-time prices and funding rates for 50+ equity perpetuals.',
  },
};

export default function StocksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Equity Perps Stock Hub",
            description: "Real-time prices and funding rates for 50+ equity perpetuals",
            publisher: {
              "@type": "Organization",
              name: "Compare Equity Perps",
              url: "https://compareequityperps.com"
            },
          }),
        }}
      />
      <StockHub />
    </>
  );
}
