import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

const relatedArticles = [
  {
    title: 'NVDA Perpetuals',
    href: '/blog/nvda-perpetuals',
    description: 'Complete guide to trading Nvidia perps.',
    category: 'guide' as const,
  },
  {
    title: 'TSLA Perpetuals',
    href: '/blog/tsla-perpetuals',
    description: 'Trade Tesla 24/7 with leverage.',
    category: 'guide' as const,
  },
  {
    title: 'Hyperliquid Review',
    href: '/blog/hyperliquid',
    description: 'Most equity perps in one place.',
    category: 'review' as const,
  },
  {
    title: 'What Are Equity Perpetuals',
    href: '/blog/what-are-equity-perpetuals',
    description: 'Beginner introduction to equity perps.',
    category: 'guide' as const,
  },
];

const faqs = [
  {
    question: "Which stock has the most liquidity in equity perps?",
    answer: "NVDA (Nvidia) typically has the deepest liquidity due to high trader interest in AI stocks. TSLA is a close second. Both offer tight spreads on Hyperliquid."
  },
  {
    question: "Can I trade all these stocks on one platform?",
    answer: "Hyperliquid offers all six of these stocks plus more. It's currently the platform with the most equity perps selection."
  },
  {
    question: "Why aren't more stocks available?",
    answer: "Adding equity perps requires reliable oracle data and sufficient trader demand. Platforms are cautious about listing to ensure proper price feeds and liquidity."
  },
];

export const metadata: Metadata = {
  title: 'Top 6 Most Traded Equity Perps Stocks',
  description: 'The most popular stocks to trade as perpetuals. NVDA, TSLA, AAPL, and more with volume and liquidity analysis.',
  openGraph: {
    title: 'Top 6 Most Traded Equity Perps',
    description: 'Which stocks have the most volume and liquidity in equity perpetuals?',
  },
};

export default function TopSixStocks() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;

  const stocks = [
    {
      rank: 1,
      ticker: 'NVDA',
      name: 'Nvidia',
      why: 'AI boom leader with extreme volatility and trader interest',
      avgDailyMove: '3-5%',
      leverage: 'Up to 50x',
      platforms: ['Hyperliquid', 'Lighter', 'Ostium'],
      tradingTip: 'Watch for GPU supply news and data center earnings',
    },
    {
      rank: 2,
      ticker: 'TSLA',
      name: 'Tesla',
      why: 'High retail interest, Elon tweets, and constant news flow',
      avgDailyMove: '2-4%',
      leverage: 'Up to 50x',
      platforms: ['Hyperliquid', 'Lighter', 'TradeXYZ'],
      tradingTip: 'Extreme volatility around earnings and delivery numbers',
    },
    {
      rank: 3,
      ticker: 'AAPL',
      name: 'Apple',
      why: 'World\'s largest company with deep liquidity',
      avgDailyMove: '1-2%',
      leverage: 'Up to 50x',
      platforms: ['Hyperliquid'],
      tradingTip: 'Lower volatility makes it good for beginners',
    },
    {
      rank: 4,
      ticker: 'META',
      name: 'Meta',
      why: 'Social media giant with AI and metaverse catalysts',
      avgDailyMove: '2-3%',
      leverage: 'Up to 50x',
      platforms: ['Hyperliquid'],
      tradingTip: 'Watch ad revenue trends and VR/AR announcements',
    },
    {
      rank: 5,
      ticker: 'COIN',
      name: 'Coinbase',
      why: 'Digital asset exchange stock that moves with Bitcoin',
      avgDailyMove: '3-6%',
      leverage: 'Up to 100x',
      platforms: ['Hyperliquid', 'Lighter'],
      tradingTip: 'Correlates with Bitcoin market sentiment',
    },
    {
      rank: 6,
      ticker: 'AMD',
      name: 'AMD',
      why: 'AI chip competitor to Nvidia with high volatility',
      avgDailyMove: '2-4%',
      leverage: 'Up to 50x',
      platforms: ['Hyperliquid'],
      tradingTip: 'Often moves with or against NVDA on AI news',
    },
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Top 6 Most Traded Equity Perps Stocks",
            description: "The most popular stocks to trade as perpetuals. NVDA, TSLA, AAPL, and more with volume and liquidity analysis.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/top-6-equity-perps-stocks" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Top 6 Stocks' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Market Analysis
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Top 6 Most Traded Equity Perps Stocks
          </h1>
          <p className="text-xl text-gray-400">
            Where the volume is. These stocks dominate equity perpetuals trading across all platforms.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Not all equity perps are created equal. These six stocks consistently show the highest
            volume, deepest liquidity, and tightest spreads. Trade where the action is.
          </p>

          {stocks.map((stock) => (
            <div key={stock.ticker} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white">#{stock.rank}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-white">{stock.ticker}</h2>
                    <span className="text-gray-400">{stock.name}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{stock.why}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-gray-500 text-xs">Avg Daily Move</p>
                      <p className="text-white font-semibold">{stock.avgDailyMove}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-gray-500 text-xs">Max Leverage</p>
                      <p className="text-white font-semibold">{stock.leverage}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 md:col-span-2">
                      <p className="text-gray-500 text-xs">Available On</p>
                      <p className="text-white font-semibold text-sm">{stock.platforms.join(', ')}</p>
                    </div>
                  </div>

                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                    <p className="text-cyan-400 text-xs font-semibold">TRADING TIP</p>
                    <p className="text-gray-300 text-sm">{stock.tradingTip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Trade All 6 Stocks in One Place
            </h3>
            <p className="text-gray-400 mb-6">
              Hyperliquid offers the most equity perps with the deepest liquidity
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="top_6_stocks_bottom"
            />
          </div>
        </div>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />

        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all guides
          </Link>
        </div>
      </article>
    </main>
  );
}
