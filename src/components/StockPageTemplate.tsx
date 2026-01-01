'use client';

import Link from 'next/link';
import { platforms } from '@/data/platforms';
import type { StockData } from '@/data/stocks';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import RelatedArticles from '@/components/RelatedArticles';
import LiveMarketData, { LivePriceBadge } from '@/components/LiveMarketData';

interface StockPageTemplateProps {
  stock: StockData;
}

const volatilityColors = {
  'low': 'text-green-400',
  'medium': 'text-yellow-400',
  'high': 'text-orange-400',
  'very-high': 'text-red-400',
};

const volatilityLabels = {
  'low': 'Low',
  'medium': 'Medium',
  'high': 'High',
  'very-high': 'Very High',
};

const liquidityLabels = {
  'highest': 'Highest',
  'high': 'High',
  'medium': 'Medium',
  'growing': 'Growing',
};

export default function StockPageTemplate({ stock }: StockPageTemplateProps) {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;

  const tocItems = [
    { id: 'overview', title: `Why Trade ${stock.ticker}?` },
    { id: 'platforms', title: 'Platform Comparison' },
    { id: 'funding-rates', title: 'Funding Rates' },
    { id: 'trading-tips', title: 'Trading Tips' },
    { id: 'risks', title: 'Risks to Consider' },
  ];

  const relatedArticles = [
    {
      title: 'What Are Equity Perpetuals',
      href: '/blog/what-are-equity-perpetuals',
      description: 'Complete beginner guide to equity perps.',
      category: 'guide' as const,
    },
    {
      title: 'How Funding Rates Work',
      href: '/blog/how-funding-rates-work',
      description: 'Understanding position holding costs.',
      category: 'guide' as const,
    },
    {
      title: 'Hyperliquid Review',
      href: '/blog/hyperliquid',
      description: 'Most liquid equity perps platform.',
      category: 'review' as const,
    },
    {
      title: 'Liquidation Calculator',
      href: '/blog/liquidation-calculator',
      description: 'Calculate your liquidation price.',
      category: 'tool' as const,
    },
  ];

  const faqs = [
    {
      question: `What is ${stock.ticker} perpetual?`,
      answer: `${stock.ticker} perpetual is a derivative contract that tracks ${stock.name} stock price. Unlike traditional futures, it has no expiration date. You can go long (profit from price increases) or short (profit from price decreases) with leverage.`
    },
    {
      question: `Can I trade ${stock.ticker} perps 24/7?`,
      answer: `Yes, on platforms like Hyperliquid you can trade ${stock.ticker} perps around the clock, including weekends. However, liquidity is highest during US market hours (9:30 AM - 4 PM ET).`
    },
    {
      question: `What leverage is available for ${stock.ticker} perps?`,
      answer: `Leverage varies by platform. ${stock.platforms.map(p => {
        const platform = platforms.find(pl => pl.id === p.platformId);
        return platform ? `${platform.name} offers up to ${p.leverage}` : '';
      }).filter(Boolean).join(', ')}. We recommend starting with 2x-5x leverage for beginners.`
    },
    {
      question: `Do I receive dividends on ${stock.ticker} perps?`,
      answer: `No. When you hold ${stock.ticker} perpetuals, you do not own actual ${stock.name} shares and therefore do not receive dividend payments. You only profit from price movements.`
    },
    {
      question: `What are the funding rates for ${stock.ticker}?`,
      answer: `Funding rates vary by platform and market conditions. Typical rates range from 0.01% to 0.05% per funding period. Check each platform for current rates.`
    },
  ];

  const availablePlatforms = stock.platforms
    .filter(p => p.available)
    .map(p => {
      const platform = platforms.find(pl => pl.id === p.platformId);
      return platform ? { ...p, platform } : null;
    })
    .filter(Boolean) as { platform: typeof platforms[0]; leverage: string; fees: string; fundingRate: string; liquidity: string; available: boolean }[];

  const recommendedPlatform = availablePlatforms[0]?.platform || hyperliquid;

  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: `${stock.ticker} Perpetuals` }
        ]} />

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className={`inline-flex items-center gap-2 ${volatilityColors[stock.volatility]} text-sm font-medium`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              {stock.sector}
            </span>
            <LivePriceBadge ticker={stock.ticker} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {stock.ticker} Perpetuals
          </h1>
          <p className="text-xl text-gray-400">
            {stock.description}
          </p>
        </header>

        <TableOfContents items={tocItems} />

        <div className="prose prose-invert max-w-none">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-gray-500 text-xs mb-1">Ticker</p>
              <p className="text-white font-bold text-xl">{stock.ticker}</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-gray-500 text-xs mb-1">Avg Daily Move</p>
              <p className="text-white font-bold text-xl">{stock.avgDailyMove}</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-gray-500 text-xs mb-1">Volatility</p>
              <p className={`font-bold text-xl ${volatilityColors[stock.volatility]}`}>
                {volatilityLabels[stock.volatility]}
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-gray-500 text-xs mb-1">Market Cap</p>
              <p className="text-white font-bold text-xl">{stock.marketCap}</p>
            </div>
          </div>

          {/* Live Market Data */}
          <div className="my-8">
            <LiveMarketData ticker={stock.ticker} showDetailed={true} />
          </div>

          <h2 id="overview" className="text-2xl font-bold text-white mt-12 mb-4">
            Why Trade {stock.ticker} Perps?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <h3 className="text-green-400 font-semibold mb-2">Advantages</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>24/7 trading - react to news anytime</li>
                <li>Leverage up to {availablePlatforms[0]?.leverage || '50x'}</li>
                <li>Easy short selling without borrowing</li>
                <li>No PDT rule restrictions</li>
                <li>Self-custody of funds</li>
              </ul>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-2">Key Stats</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>Available on {availablePlatforms.length} platform{availablePlatforms.length !== 1 ? 's' : ''}</li>
                <li>Sector: {stock.sector}</li>
                <li>Avg move: {stock.avgDailyMove}</li>
                <li>Settlement: USDC</li>
              </ul>
            </div>
          </div>

          <h2 id="platforms" className="text-2xl font-bold text-white mt-12 mb-4">
            Where to Trade {stock.ticker} Perpetuals
          </h2>

          <p className="text-gray-300 mb-6">
            Compare platforms offering {stock.ticker} perpetuals with their leverage, fees, and liquidity:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Platform</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Max Leverage</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Fees</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Funding Rate</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Liquidity</th>
                </tr>
              </thead>
              <tbody>
                {availablePlatforms.map((item, i) => (
                  <tr key={item.platform.id} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4">
                      <Link href={`/blog/${item.platform.slug}`} className="font-semibold hover:text-cyan-400" style={{ color: item.platform.color }}>
                        {item.platform.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center text-white">{item.leverage}</td>
                    <td className="py-3 px-4 text-center text-white">{item.fees}</td>
                    <td className="py-3 px-4 text-center text-white">{item.fundingRate}</td>
                    <td className="py-3 px-4 text-center text-white">{liquidityLabels[item.liquidity as keyof typeof liquidityLabels]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {availablePlatforms.length === 0 && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 my-6">
              <p className="text-yellow-400 font-medium">
                {stock.ticker} perpetuals are coming soon to major platforms. Check back for updates.
              </p>
            </div>
          )}

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <h3 className="text-white font-semibold mb-3">Our Recommendation: {recommendedPlatform.name}</h3>
            <p className="text-gray-300 text-sm mb-4">
              For {stock.ticker} perps, we recommend {recommendedPlatform.name} for the best combination of
              liquidity, fees, and reliability.
            </p>
            <ReferralButton
              href={recommendedPlatform.referralUrl}
              platformName={recommendedPlatform.name}
              color={recommendedPlatform.color}
              location={`${stock.ticker.toLowerCase()}_perps_guide`}
            />
          </div>

          <h2 id="funding-rates" className="text-2xl font-bold text-white mt-12 mb-4">
            Funding Rates Comparison
          </h2>

          <p className="text-gray-300 mb-4">
            Funding rates are periodic payments between long and short positions to keep the perpetual price
            aligned with the spot price. Here&apos;s how rates compare across platforms:
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-5 my-6">
            {availablePlatforms.map((item) => (
              <div key={item.platform.id} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
                <span className="text-white font-medium">{item.platform.name}</span>
                <span className="text-cyan-400">{item.fundingRate}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm">
            Note: Funding rates are variable and change based on market conditions. Positive rates mean
            longs pay shorts; negative rates mean shorts pay longs.
          </p>

          <h2 id="trading-tips" className="text-2xl font-bold text-white mt-12 mb-4">
            Trading Tips for {stock.ticker}
          </h2>

          <div className="space-y-4 my-6">
            {stock.tradingTips.map((tip, index) => (
              <div key={index} className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 text-gray-900 text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-gray-300">{tip}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 id="risks" className="text-2xl font-bold text-white mt-12 mb-4">
            Risks to Consider
          </h2>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 my-6">
            <ul className="text-gray-300 text-sm space-y-2">
              <li><strong className="text-red-400">Liquidation Risk:</strong> High leverage can wipe out your position on adverse moves</li>
              <li><strong className="text-red-400">Funding Costs:</strong> Holding positions long-term incurs funding rate payments</li>
              <li><strong className="text-red-400">Oracle Risk:</strong> Price feeds can occasionally lag during high volatility</li>
              <li><strong className="text-red-400">Volatility:</strong> {stock.ticker} has {volatilityLabels[stock.volatility].toLowerCase()} volatility - size positions accordingly</li>
              <li><strong className="text-red-400">Gap Risk:</strong> Price can gap significantly when traditional markets open</li>
            </ul>
          </div>

          {stock.volatility === 'very-high' && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 my-6">
              <p className="text-yellow-400 font-medium flex items-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                High Volatility Warning
              </p>
              <p className="text-gray-300 text-sm">
                {stock.ticker} is a high-volatility stock. Use lower leverage than you would on more stable assets.
                Consider 2x-5x maximum leverage and always use stop-losses.
              </p>
            </div>
          )}

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Start Trading {stock.ticker} Perps
            </h3>
            <p className="text-gray-400 mb-6">
              Get started on {recommendedPlatform.name} with competitive fees and deep liquidity
            </p>
            <ReferralButton
              href={recommendedPlatform.referralUrl}
              platformName={recommendedPlatform.name}
              color={recommendedPlatform.color}
              location={`${stock.ticker.toLowerCase()}_perps_bottom`}
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
