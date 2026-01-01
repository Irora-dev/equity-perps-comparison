import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { stocks, getStockByTicker } from '@/data/stocks';
import { platforms } from '@/data/platforms';
import HowToTradeTemplate from '@/components/HowToTradeTemplate';

interface PageProps {
  params: Promise<{ ticker: string }>;
}

// Generate static params for all available stocks
export async function generateStaticParams() {
  const availableStocks = stocks.filter(stock =>
    stock.platforms.some(p => p.available)
  );

  return availableStocks.map((stock) => ({
    ticker: stock.ticker.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ticker } = await params;
  const stock = getStockByTicker(ticker);

  if (!stock) {
    return { title: 'Stock Not Found' };
  }

  const availablePlatforms = stock.platforms
    .filter(p => p.available)
    .map(p => platforms.find(pl => pl.id === p.platformId)?.name)
    .filter(Boolean);

  return {
    title: `How to Trade ${stock.name} (${stock.ticker}) 24/7 — Without a Broker`,
    description: `Trade ${stock.name} any time, any day with perpetual futures. No brokerage account needed. Compare funding rates on ${availablePlatforms.slice(0, 2).join(' & ')} and get started in minutes.`,
    keywords: [
      `how to trade ${stock.ticker} 24/7`,
      `trade ${stock.ticker} without a broker`,
      `${stock.ticker} perpetual futures`,
      `${stock.ticker} perps`,
      `how to trade ${stock.name.toLowerCase()} with leverage`,
      `long ${stock.ticker} with crypto`,
      `short ${stock.ticker} without borrowing`,
      `${stock.ticker} after hours trading`,
      `trade ${stock.ticker} on weekends`,
      `${stock.ticker} synthetic stock`,
      `${stock.name.toLowerCase()} decentralized trading`,
      `how to buy ${stock.ticker} with USDC`,
      `can I trade ${stock.ticker} 24/7`,
      `where to trade ${stock.ticker} perpetuals`,
    ],
    openGraph: {
      title: `How to Trade ${stock.name} (${stock.ticker}) 24/7`,
      description: `Trade ${stock.name} perpetuals around the clock. No broker needed.`,
      type: 'article',
      url: `https://compareequityperps.com/blog/trade-24-7/${stock.ticker.toLowerCase()}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `How to Trade ${stock.name} (${stock.ticker}) 24/7`,
      description: `Trade ${stock.name} perpetuals around the clock without a broker.`,
    },
    alternates: {
      canonical: `https://compareequityperps.com/blog/trade-24-7/${stock.ticker.toLowerCase()}/`,
    },
  };
}

export default async function HowToTradePage({ params }: PageProps) {
  const { ticker } = await params;
  const stock = getStockByTicker(ticker);

  if (!stock || !stock.platforms.some(p => p.available)) {
    notFound();
  }

  const availablePlatforms = stock.platforms
    .filter(p => p.available)
    .map(p => {
      const platform = platforms.find(pl => pl.id === p.platformId);
      return platform ? { ...p, platform } : null;
    })
    .filter(Boolean) as { platform: typeof platforms[0]; leverage: string; fees: string; fundingRate: string; liquidity: string; available: boolean }[];

  // HowTo schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Trade ${stock.name} (${stock.ticker}) 24/7`,
    "description": `Learn how to trade ${stock.name} perpetual futures around the clock without a brokerage account.`,
    "totalTime": "PT10M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Set up a wallet",
        "text": "Download Rabby or MetaMask and create a new wallet. Save your seed phrase securely."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Get USDC",
        "text": "Buy USDC from an exchange like Coinbase or use the platform's onramp to buy with card."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Connect to platform",
        "text": `Go to ${availablePlatforms[0]?.platform.name || 'your chosen platform'} and connect your wallet.`
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Deposit USDC",
        "text": "Deposit USDC to your trading account on the platform."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Open a position",
        "text": `Search for ${stock.ticker}-PERP, choose long or short, set your leverage, and open your position.`
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Crypto wallet (Rabby or MetaMask)"
      },
      {
        "@type": "HowToTool",
        "name": "USDC stablecoin"
      }
    ]
  };

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Can I really trade ${stock.name} 24/7?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Perpetual futures on decentralized exchanges trade around the clock, including weekends and holidays. There are no market hours."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a brokerage account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You just need a crypto wallet and USDC. No identity verification required on most decentralized platforms."
        }
      },
      {
        "@type": "Question",
        "name": `How much leverage can I use for ${stock.ticker}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Most platforms offer ${availablePlatforms[0]?.leverage || '20-50x'} leverage on ${stock.ticker} perps. We recommend starting with 2-5x until you're comfortable.`
        }
      },
      {
        "@type": "Question",
        "name": "What's the minimum to start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can start with as little as $10-50 on most platforms, though $100+ gives you more flexibility."
        }
      },
      {
        "@type": "Question",
        "name": "What if I get liquidated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If the price moves against you enough to hit your liquidation price, your position is automatically closed and you lose your margin. Always use stop-losses and appropriate leverage."
        }
      }
    ]
  };

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `How to Trade ${stock.name} (${stock.ticker}) 24/7 — Without a Broker`,
    "description": `Learn how to trade ${stock.name} perpetual futures around the clock without a brokerage account.`,
    "author": {
      "@type": "Organization",
      "name": "Compare Equity Perps"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Compare Equity Perps",
      "url": "https://compareequityperps.com"
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://compareequityperps.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://compareequityperps.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `How to Trade ${stock.ticker} 24/7`,
        "item": `https://compareequityperps.com/blog/trade-24-7/${stock.ticker.toLowerCase()}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HowToTradeTemplate stock={stock} />
    </>
  );
}
