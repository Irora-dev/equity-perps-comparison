'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';
import { stocks, type StockData } from '@/data/stocks';
import ReferralButton from '@/components/ReferralButton';
import {
  fetchEquityMarketData,
  formatCurrency,
  formatPriceChange,
  formatFundingRate,
  type EquityMarketData,
} from '@/lib/api';

interface SEOStockPageTemplateProps {
  stock: StockData;
}

// Platform info for styling
const platformColors: Record<string, string> = {
  hyperliquid: '#3EEFC1',
  lighter: '#6366F1',
  ostium: '#10B981',
};

// Get related stocks (same sector or similar volatility)
function getRelatedStocks(currentStock: StockData, count: number = 5): StockData[] {
  return stocks
    .filter(s => s.ticker !== currentStock.ticker)
    .filter(s => s.sector === currentStock.sector || s.volatility === currentStock.volatility)
    .slice(0, count);
}

// Get best platform from live data
function getBestVenue(data: EquityMarketData | null): { platform: string; rate: number | null } | null {
  if (!data) return null;

  const rates: { platform: string; rate: number }[] = [];

  if (data.lighter?.fundingRate !== null && data.lighter?.fundingRate !== undefined) {
    rates.push({ platform: 'lighter', rate: data.lighter.fundingRate });
  }
  if (data.hyperliquid?.fundingRate !== null && data.hyperliquid?.fundingRate !== undefined) {
    rates.push({ platform: 'hyperliquid', rate: data.hyperliquid.fundingRate });
  }

  if (rates.length === 0) {
    // If no funding rates, return platform with best price availability
    if (data.hyperliquid?.price) return { platform: 'hyperliquid', rate: null };
    if (data.lighter?.price) return { platform: 'lighter', rate: null };
    if (data.ostium?.price) return { platform: 'ostium', rate: null };
    return null;
  }

  // Return lowest absolute funding rate
  return rates.reduce((min, curr) =>
    Math.abs(curr.rate) < Math.abs(min.rate) ? curr : min
  );
}

export default function SEOStockPageTemplate({ stock }: SEOStockPageTemplateProps) {
  const [marketData, setMarketData] = useState<EquityMarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const result = await fetchEquityMarketData(stock.ticker);
        if (mounted) {
          setMarketData(result);
          setLastUpdate(new Date());
          setLoading(false);
        }
      } catch {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [stock.ticker]);

  const bestVenue = getBestVenue(marketData);
  const bestPlatform = bestVenue ? platforms.find(p => p.id === bestVenue.platform) : null;
  const relatedStocks = getRelatedStocks(stock);

  const availablePlatforms = stock.platforms
    .filter(p => p.available)
    .map(p => {
      const platform = platforms.find(pl => pl.id === p.platformId);
      return platform ? { ...p, platform } : null;
    })
    .filter(Boolean) as { platform: typeof platforms[0]; leverage: string; fees: string; fundingRate: string; liquidity: string; available: boolean }[];

  // Get best price from live data
  const livePrice = marketData?.ostium?.price ?? marketData?.lighter?.price ?? marketData?.hyperliquid?.price ?? null;
  const liveChange = marketData?.ostium?.change24h ?? marketData?.hyperliquid?.change24h ?? null;

  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Back to Stocks */}
        <Link
          href="/stocks"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Stocks
        </Link>

        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-400">
            <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
            <li>/</li>
            <li><Link href="/stocks" className="hover:text-cyan-400">Stocks</Link></li>
            <li>/</li>
            <li className="text-white">{stock.ticker}</li>
          </ol>
        </nav>

        {/* SEO Hero Section */}
        <header className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trade {stock.name} ({stock.ticker}) Perpetuals
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {stock.description}
          </p>

          {/* Best Venue Highlight */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Current Best Venue</p>
              {loading ? (
                <div className="h-8 w-32 bg-gray-700 rounded animate-pulse"></div>
              ) : bestPlatform ? (
                <p className="text-2xl font-bold" style={{ color: platformColors[bestPlatform.id] || '#fff' }}>
                  {bestPlatform.name}
                </p>
              ) : (
                <p className="text-xl text-gray-300">Hyperliquid</p>
              )}
              {bestVenue?.rate !== null && bestVenue?.rate !== undefined && (
                <p className="text-gray-400 mt-2">
                  Funding Rate: <span className={bestVenue.rate < 0 ? 'text-green-400' : 'text-yellow-400'}>
                    {formatFundingRate(bestVenue.rate)}
                  </span>
                  {bestVenue.rate < 0 && <span className="text-green-400 ml-2">- You earn funding</span>}
                </p>
              )}
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Live Price</p>
              {loading ? (
                <div className="h-8 w-32 bg-gray-700 rounded animate-pulse"></div>
              ) : livePrice ? (
                <>
                  <p className="text-3xl font-bold text-white font-mono">{formatCurrency(livePrice)}</p>
                  {liveChange !== null && (
                    <p className={`text-lg font-mono mt-1 ${liveChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {formatPriceChange(liveChange)} (24h)
                    </p>
                  )}
                </>
              ) : (
                <p className="text-gray-400">Loading...</p>
              )}
            </div>
          </div>

          {/* Primary CTA */}
          {bestPlatform && (
            <div className="mt-6">
              <a
                href={bestPlatform.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white text-lg transition-all hover:scale-105"
                style={{ backgroundColor: platformColors[bestPlatform.id] || '#3EEFC1' }}
              >
                Trade {stock.ticker} on {bestPlatform.name}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          )}
        </header>

        {/* Live Comparison Table */}
        <section className="mb-12">
          <h2 id="compare" className="text-2xl font-bold text-white mb-4">
            Live Platform Comparison
          </h2>
          {lastUpdate && (
            <p className="text-gray-500 text-sm mb-4">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </p>
          )}

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-900/50 rounded-xl overflow-hidden">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Platform</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-medium">Price</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-medium">Funding (Ann.)</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-medium">Max Leverage</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-medium">24h Change</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {/* Hyperliquid */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">
                    <span className="font-semibold" style={{ color: '#3EEFC1' }}>Hyperliquid</span>
                  </td>
                  <td className="py-4 px-4 text-center text-white font-mono">
                    {loading ? (
                      <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span>
                    ) : marketData?.hyperliquid?.price ? (
                      formatCurrency(marketData.hyperliquid.price)
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center font-mono">
                    {loading ? (
                      <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span>
                    ) : marketData?.hyperliquid?.fundingRate !== null && marketData?.hyperliquid?.fundingRate !== undefined ? (
                      <span className={marketData.hyperliquid.fundingRate < 0 ? 'text-green-400' : 'text-yellow-400'}>
                        {formatFundingRate(marketData.hyperliquid.fundingRate)}
                      </span>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-white">50x</td>
                  <td className="py-4 px-4 text-center font-mono">
                    {loading ? (
                      <span className="inline-block w-12 h-4 bg-gray-700 rounded animate-pulse"></span>
                    ) : marketData?.hyperliquid?.change24h !== null && marketData?.hyperliquid?.change24h !== undefined ? (
                      <span className={marketData.hyperliquid.change24h >= 0 ? 'text-green-400' : 'text-red-400'}>
                        {formatPriceChange(marketData.hyperliquid.change24h)}
                      </span>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <a
                      href={platforms.find(p => p.id === 'hyperliquid')?.referralUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#3EEFC1] text-gray-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Trade
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>

                {/* Lighter */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">
                    <span className="font-semibold" style={{ color: '#6366F1' }}>Lighter</span>
                  </td>
                  <td className="py-4 px-4 text-center text-white font-mono">
                    {loading ? (
                      <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span>
                    ) : marketData?.lighter?.price ? (
                      formatCurrency(marketData.lighter.price)
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center font-mono">
                    {loading ? (
                      <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span>
                    ) : marketData?.lighter?.fundingRate !== null && marketData?.lighter?.fundingRate !== undefined ? (
                      <span className={marketData.lighter.fundingRate < 0 ? 'text-green-400' : 'text-yellow-400'}>
                        {formatFundingRate(marketData.lighter.fundingRate)}
                      </span>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-white">100x</td>
                  <td className="py-4 px-4 text-center font-mono">
                    {loading ? (
                      <span className="inline-block w-12 h-4 bg-gray-700 rounded animate-pulse"></span>
                    ) : marketData?.lighter?.change24h !== null && marketData?.lighter?.change24h !== undefined ? (
                      <span className={marketData.lighter.change24h >= 0 ? 'text-green-400' : 'text-red-400'}>
                        {formatPriceChange(marketData.lighter.change24h)}
                      </span>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <a
                      href={platforms.find(p => p.id === 'lighter')?.referralUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#6366F1] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Trade
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>

                {/* Ostium */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4">
                    <span className="font-semibold" style={{ color: '#10B981' }}>Ostium</span>
                  </td>
                  <td className="py-4 px-4 text-center text-white font-mono">
                    {loading ? (
                      <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span>
                    ) : marketData?.ostium?.price ? (
                      formatCurrency(marketData.ostium.price)
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center font-mono">
                    <span className="text-gray-500" title="Ostium uses rollover fees instead of funding rates">Rollover</span>
                  </td>
                  <td className="py-4 px-4 text-center text-white">100x</td>
                  <td className="py-4 px-4 text-center font-mono">
                    {loading ? (
                      <span className="inline-block w-12 h-4 bg-gray-700 rounded animate-pulse"></span>
                    ) : marketData?.ostium?.change24h !== null && marketData?.ostium?.change24h !== undefined ? (
                      <span className={marketData.ostium.change24h >= 0 ? 'text-green-400' : 'text-red-400'}>
                        {formatPriceChange(marketData.ostium.change24h)}
                      </span>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <a
                      href={platforms.find(p => p.id === 'ostium')?.referralUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#10B981] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Trade
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Written Analysis Section */}
        <section className="prose prose-invert max-w-none mb-12">
          <h2 id="analysis" className="text-2xl font-bold text-white mb-4">
            Where to Trade {stock.ticker} Perpetuals
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            {stock.name} perpetuals are available on {availablePlatforms.length} platform{availablePlatforms.length !== 1 ? 's' : ''}.
            {bestPlatform && (
              <> Based on current funding rates and liquidity, <strong className="text-white">{bestPlatform.name} offers the best conditions</strong> for both long and short positions.</>
            )}
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Funding Rate Analysis</h3>
          <p className="text-gray-300 leading-relaxed">
            {bestVenue?.rate !== null && bestVenue?.rate !== undefined ? (
              bestVenue.rate < 0 ? (
                <>
                  {bestPlatform?.name} currently has negative funding ({formatFundingRate(bestVenue.rate)}), meaning <strong className="text-green-400">long positions earn funding payments</strong>. This is favorable for traders holding long positions and indicates more shorts than longs in the market.
                </>
              ) : (
                <>
                  {bestPlatform?.name} currently has a funding rate of {formatFundingRate(bestVenue.rate)}. Positive funding means long positions pay shorts. Consider this cost when planning your position duration.
                </>
              )
            ) : (
              <>
                Funding rates vary based on market conditions and platform. Monitor live rates above to optimize your entry timing.
              </>
            )}
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Liquidity Considerations</h3>
          <p className="text-gray-300 leading-relaxed">
            For positions under $50K, all venues offer sufficient liquidity. For larger positions, Hyperliquid typically offers the deepest orderbook depth for {stock.ticker} perpetuals.
            {stock.volatility === 'very-high' && (
              <> Given {stock.ticker}&apos;s high volatility ({stock.avgDailyMove} average daily moves), ensure you have adequate margin to avoid liquidation during sharp price swings.</>
            )}
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Our Recommendation</h3>
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5 my-4 not-prose">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">For longs:</span>
                <span>{bestPlatform?.name || 'Hyperliquid'} {bestVenue?.rate !== null && bestVenue?.rate !== undefined && bestVenue.rate < 0 ? '(earn funding + best liquidity)' : '(best liquidity)'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">For shorts:</span>
                <span>Monitor funding rates - short when funding goes positive to earn payments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">Leverage:</span>
                <span>Start with 2x-5x for {stock.ticker}. {stock.volatility === 'very-high' || stock.volatility === 'high' ? 'Higher volatility warrants lower leverage.' : 'Stable stocks can handle slightly higher leverage.'}</span>
              </li>
            </ul>
          </div>

          {/* Trading Tips */}
          <h3 className="text-xl font-semibold text-white mt-8 mb-3">{stock.ticker} Trading Tips</h3>
          <ul className="space-y-2 text-gray-300">
            {stock.tradingTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cyan-400">*</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">
            Start Trading {stock.ticker} Perps
          </h3>
          <p className="text-gray-400 mb-6">
            Get started on {bestPlatform?.name || 'Hyperliquid'} with competitive fees and deep liquidity
          </p>
          <ReferralButton
            href={bestPlatform?.referralUrl || platforms.find(p => p.id === 'hyperliquid')?.referralUrl || '#'}
            platformName={bestPlatform?.name || 'Hyperliquid'}
            color={bestPlatform ? platformColors[bestPlatform.id] : '#3EEFC1'}
            location={`${stock.ticker.toLowerCase()}_seo_cta`}
          />
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How do I long {stock.name} onchain?</h3>
              <p className="text-gray-400">
                You can get leveraged long exposure to {stock.name} through perpetual futures on decentralized exchanges like {availablePlatforms.map(p => p.platform.name).join(' and ')}. Connect your wallet, deposit USDC, and open a long position on {stock.ticker}-PERP.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What&apos;s the funding rate on {stock.ticker} perps?</h3>
              <p className="text-gray-400">
                Funding rates vary by platform and change periodically. Check the live comparison table above for current rates. {bestVenue?.rate !== null && bestVenue?.rate !== undefined && `Currently, ${bestPlatform?.name} has a rate of ${formatFundingRate(bestVenue.rate)}.`}
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Can I short {stock.name} with crypto?</h3>
              <p className="text-gray-400">
                Yes. The same platforms that offer long exposure also let you short. Simply open a short position on {stock.ticker}-PERP to profit from price decreases.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What leverage is available for {stock.ticker} perps?</h3>
              <p className="text-gray-400">
                {availablePlatforms.map(p => `${p.platform.name} offers up to ${p.leverage}`).join('. ')}. We recommend starting with 2x-5x leverage for beginners.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Do I receive dividends on {stock.ticker} perpetuals?</h3>
              <p className="text-gray-400">
                No. When you hold {stock.ticker} perpetuals, you do not own actual {stock.name} shares and therefore do not receive dividend payments. You only profit from price movements.
              </p>
            </div>
          </div>
        </section>

        {/* Related Stocks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Similar Stocks</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {relatedStocks.map((relatedStock) => (
              <Link
                key={relatedStock.ticker}
                href={`/stocks/${relatedStock.ticker.toLowerCase()}`}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors text-center group"
              >
                <p className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                  {relatedStock.ticker}
                </p>
                <p className="text-gray-500 text-sm truncate">{relatedStock.name}</p>
                <p className="text-gray-600 text-xs mt-1">{relatedStock.sector}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/stocks"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Stocks
          </Link>
        </div>
      </article>
    </main>
  );
}
