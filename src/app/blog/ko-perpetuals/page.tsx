import { getStockBySlug } from '@/data/stocks';
import StockPageTemplate from '@/components/StockPageTemplate';
import type { Metadata } from 'next';

const stock = getStockBySlug('ko-perpetuals')!;

export const metadata: Metadata = {
  title: `${stock.ticker} Perpetuals: Trade ${stock.name} Stock 24/7 with Leverage`,
  description: `Complete guide to trading ${stock.ticker} perpetual futures. Compare platforms, fees, funding rates, and liquidity for ${stock.name} perps.`,
  openGraph: {
    title: `${stock.ticker} Perpetuals Trading Guide`,
    description: `Trade ${stock.name} stock around the clock with leverage on decentralized platforms.`,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${stock.ticker} Perpetuals: Trade ${stock.name} Stock 24/7 with Leverage`,
            description: `Complete guide to trading ${stock.ticker} perpetual futures.`,
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://compareequityperps.com/blog/${stock.slug}` },
          }),
        }}
      />
      <StockPageTemplate stock={stock} />
    </>
  );
}
