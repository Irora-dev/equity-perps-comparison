import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { stocks, getStockByTicker } from '@/data/stocks';
import { platforms } from '@/data/platforms';
import SEOStockPageTemplate from '@/components/SEOStockPageTemplate';

interface PageProps {
  params: Promise<{ ticker: string }>;
}

export async function generateStaticParams() {
  return stocks.map((stock) => ({
    ticker: stock.ticker.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ticker } = await params;
  const stock = getStockByTicker(ticker);

  if (!stock) {
    return {
      title: 'Stock Not Found',
    };
  }

  const availablePlatforms = stock.platforms
    .filter(p => p.available)
    .map(p => platforms.find(pl => pl.id === p.platformId)?.name)
    .filter(Boolean);

  const platformList = availablePlatforms.join(', ');

  return {
    title: `Trade ${stock.name} (${stock.ticker}) Perpetuals | Best Rates & Venues Compared`,
    description: `Compare ${stock.name} (${stock.ticker}) perp funding rates across ${platformList}. Live data, lowest fees, instant access. Updated in real-time.`,
    keywords: [
      `${stock.ticker} perpetual`,
      `${stock.ticker} perps`,
      `trade ${stock.ticker} onchain`,
      `${stock.ticker} funding rate`,
      `long ${stock.ticker} onchain`,
      `${stock.ticker} synthetic`,
      `${stock.name.toLowerCase()} perpetual`,
      `short ${stock.ticker} onchain`,
      `${stock.ticker} hyperliquid`,
      `best place to trade ${stock.ticker} perps`,
    ],
    openGraph: {
      title: `Trade ${stock.name} (${stock.ticker}) Perpetuals`,
      description: `Compare ${stock.ticker} perp funding rates. Live data from ${platformList}.`,
      type: 'website',
      url: `https://compareequityperps.com/stocks/${stock.ticker.toLowerCase()}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Trade ${stock.name} (${stock.ticker}) Perpetuals`,
      description: `Compare ${stock.ticker} perp funding rates across top DEXs.`,
    },
    alternates: {
      canonical: `https://compareequityperps.com/stocks/${stock.ticker.toLowerCase()}/`,
    },
  };
}

export default async function StockPage({ params }: PageProps) {
  const { ticker } = await params;
  const stock = getStockByTicker(ticker);

  if (!stock) {
    notFound();
  }

  // Generate JSON-LD structured data
  const availablePlatforms = stock.platforms
    .filter(p => p.available)
    .map(p => {
      const platform = platforms.find(pl => pl.id === p.platformId);
      return platform ? { ...p, platform } : null;
    })
    .filter(Boolean) as { platform: typeof platforms[0]; leverage: string; fees: string; fundingRate: string; liquidity: string; available: boolean }[];

  // Product schema for the perpetual
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${stock.name} (${stock.ticker}) Perpetual Futures`,
    description: `Compare ${stock.name} perpetual futures across decentralized exchanges. ${stock.description}`,
    category: "Financial Instrument",
    brand: {
      "@type": "Organization",
      name: stock.name,
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: availablePlatforms.length,
      priceCurrency: "USD",
      offers: availablePlatforms.map(p => ({
        "@type": "Offer",
        seller: {
          "@type": "Organization",
          name: p.platform.name,
          url: p.platform.website,
        },
        description: `${stock.ticker} perpetuals with up to ${p.leverage} leverage`,
      })),
    },
  };

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How do I long ${stock.name} onchain?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can get leveraged long exposure to ${stock.name} through perpetual futures on decentralized exchanges like ${availablePlatforms.map(p => p.platform.name).join(' and ')}. Connect your wallet, deposit USDC, and open a long position on ${stock.ticker}-PERP.`,
        },
      },
      {
        "@type": "Question",
        name: `What's the funding rate on ${stock.ticker} perps?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Funding rates vary by platform and change periodically. Check the live comparison table above for current rates across all platforms offering ${stock.ticker} perpetuals.`,
        },
      },
      {
        "@type": "Question",
        name: `Can I short ${stock.name} with USDC?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. The same platforms that offer long exposure also let you short. Simply open a short position on ${stock.ticker}-PERP to profit from price decreases.`,
        },
      },
      {
        "@type": "Question",
        name: `What leverage is available for ${stock.ticker} perps?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: availablePlatforms.map(p => `${p.platform.name} offers up to ${p.leverage}`).join('. ') + '. We recommend starting with 2x-5x leverage for beginners.',
        },
      },
      {
        "@type": "Question",
        name: `Do I receive dividends on ${stock.ticker} perpetuals?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `No. When you hold ${stock.ticker} perpetuals, you do not own actual ${stock.name} shares and therefore do not receive dividend payments. You only profit from price movements.`,
        },
      },
    ],
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://compareequityperps.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Stocks",
        item: "https://compareequityperps.com/stocks",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${stock.ticker} Perpetuals`,
        item: `https://compareequityperps.com/stocks/${stock.ticker.toLowerCase()}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <SEOStockPageTemplate stock={stock} />
    </>
  );
}
