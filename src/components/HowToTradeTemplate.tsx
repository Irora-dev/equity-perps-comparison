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

interface HowToTradeTemplateProps {
  stock: StockData;
}

const platformColors: Record<string, string> = {
  hyperliquid: '#3EEFC1',
  lighter: '#6366F1',
  ostium: '#10B981',
};

// Get related stocks for internal linking
function getRelatedStocks(currentStock: StockData, count: number = 3): StockData[] {
  return stocks
    .filter(s => s.ticker !== currentStock.ticker && s.platforms.some(p => p.available))
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
    if (data.hyperliquid?.price) return { platform: 'hyperliquid', rate: null };
    if (data.lighter?.price) return { platform: 'lighter', rate: null };
    if (data.ostium?.price) return { platform: 'ostium', rate: null };
    return null;
  }
  // Return lowest funding rate (most negative = best for longs, you earn funding)
  return rates.reduce((best, curr) => curr.rate < best.rate ? curr : best);
}

export default function HowToTradeTemplate({ stock }: HowToTradeTemplateProps) {
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
    return () => { mounted = false; clearInterval(interval); };
  }, [stock.ticker]);

  const bestVenue = getBestVenue(marketData);
  const bestPlatform = bestVenue ? platforms.find(p => p.id === bestVenue.platform) : platforms.find(p => p.id === 'hyperliquid');
  const relatedStocks = getRelatedStocks(stock);
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const availablePlatforms = stock.platforms
    .filter(p => p.available)
    .map(p => {
      const platform = platforms.find(pl => pl.id === p.platformId);
      return platform ? { ...p, platform } : null;
    })
    .filter(Boolean) as { platform: typeof platforms[0]; leverage: string; fees: string; fundingRate: string; liquidity: string; available: boolean }[];

  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-400">
            <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-cyan-400">Blog</Link></li>
            <li>/</li>
            <li className="text-white">Trade {stock.ticker} 24/7</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <p className="text-cyan-400 text-sm font-medium mb-2">TRADING GUIDE</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How to Trade {stock.name} ({stock.ticker}) 24/7 — Without a Broker
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: {today} • 8 min read
          </p>
        </header>

        {/* Hero Section - Live Data */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Trade {stock.name} ({stock.ticker}) Perpetuals
          </h2>
          <p className="text-gray-400 mb-6">
            {stock.description}
          </p>

          {/* Best Venue and Live Price */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
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
                <p className="text-gray-400 text-sm mt-1">
                  Funding Rate: <span className={bestVenue.rate < 0 ? 'text-green-400' : 'text-yellow-400'}>
                    {formatFundingRate(bestVenue.rate)}
                  </span>
                </p>
              )}
            </div>

            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Live Price</p>
              {loading ? (
                <div className="h-8 w-32 bg-gray-700 rounded animate-pulse"></div>
              ) : (
                <>
                  <p className="text-2xl font-bold text-white font-mono">
                    {marketData?.ostium?.price || marketData?.lighter?.price || marketData?.hyperliquid?.price
                      ? formatCurrency(marketData?.ostium?.price ?? marketData?.lighter?.price ?? marketData?.hyperliquid?.price ?? 0)
                      : '—'}
                  </p>
                  {(marketData?.ostium?.change24h ?? marketData?.lighter?.change24h ?? marketData?.hyperliquid?.change24h) !== null && (
                    <p className={`text-sm font-mono mt-1 ${(marketData?.ostium?.change24h ?? marketData?.lighter?.change24h ?? marketData?.hyperliquid?.change24h ?? 0) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {formatPriceChange(marketData?.ostium?.change24h ?? marketData?.lighter?.change24h ?? marketData?.hyperliquid?.change24h ?? 0)} (24h)
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Primary CTA */}
          {bestPlatform && (
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
          )}
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          {/* What is [Stock]? */}
          <h2 id="what-is" className="text-2xl font-bold text-white mt-12 mb-4">What is {stock.name}?</h2>
          <p className="text-gray-300 leading-relaxed">
            {stock.name} ({stock.ticker}) is a leading company in the {stock.sector} sector. {stock.description}
          </p>
          <p className="text-gray-300 leading-relaxed">
            With a market cap of {stock.marketCap}, {stock.ticker} is one of the most actively traded stocks in the market.
            Its {stock.volatility === 'very-high' || stock.volatility === 'high' ? 'high volatility' : 'steady price action'} and
            average daily moves of {stock.avgDailyMove} make it attractive for traders looking for opportunities.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6 not-prose">
            <h3 className="text-white font-semibold mb-3">Key Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div><span className="text-gray-500">Market Cap:</span> <span className="text-white">{stock.marketCap}</span></div>
              <div><span className="text-gray-500">Sector:</span> <span className="text-white">{stock.sector}</span></div>
              <div><span className="text-gray-500">Avg Daily Move:</span> <span className="text-white">{stock.avgDailyMove}</span></div>
              <div><span className="text-gray-500">Volatility:</span> <span className="text-white capitalize">{stock.volatility.replace('-', ' ')}</span></div>
            </div>
          </div>

          {/* The Problem */}
          <h2 id="problem" className="text-2xl font-bold text-white mt-12 mb-4">The Problem with Traditional {stock.ticker} Trading</h2>
          <p className="text-gray-300 leading-relaxed">
            If you want to trade {stock.name} through a traditional brokerage, you&apos;re limited:
          </p>

          <div className="space-y-4 my-6 not-prose">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <h4 className="text-red-400 font-semibold mb-1">Market hours only</h4>
              <p className="text-gray-400 text-sm">US stock markets are open 9:30am–4:00pm ET, Monday to Friday. That&apos;s just 32.5 hours per week. {stock.name} news doesn&apos;t stop when markets close.</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <h4 className="text-red-400 font-semibold mb-1">Brokerage account required</h4>
              <p className="text-gray-400 text-sm">Opening a brokerage account means paperwork, identity verification, and in some countries, restrictions on US stock access entirely.</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <h4 className="text-red-400 font-semibold mb-1">Limited leverage</h4>
              <p className="text-gray-400 text-sm">Want to amplify your position? Margin accounts have strict requirements and limited leverage (typically 2x for stocks).</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <h4 className="text-red-400 font-semibold mb-1">Short selling restrictions</h4>
              <p className="text-gray-400 text-sm">Shorting requires borrowing shares, paying borrow fees, and dealing with potential short squeezes or forced buy-ins.</p>
            </div>
          </div>

          {/* The Solution */}
          <h2 id="solution" className="text-2xl font-bold text-white mt-12 mb-4">The Unlock: Trade {stock.ticker} 24/7 with Perpetual Futures</h2>
          <p className="text-gray-300 leading-relaxed">
            Perpetual futures (&quot;perps&quot;) solve all of these problems.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">What are perpetuals?</h3>
          <p className="text-gray-300 leading-relaxed">
            Perpetuals are futures contracts with no expiration date. They track the price of an underlying asset (in this case, {stock.ticker}) and let you go long or short with leverage. Originally created for BTC and ETH trading, perpetuals are now available for stocks, indices, commodities, and forex on decentralized exchanges.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Why trade {stock.ticker} perps?</h3>
          <div className="space-y-4 my-6 not-prose">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <h4 className="text-green-400 font-semibold mb-1">24/7/365 access</h4>
              <p className="text-gray-400 text-sm">Markets never close. Trade {stock.name} at 3am on a Sunday if you want. React to news instantly, no matter when it breaks.</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <h4 className="text-green-400 font-semibold mb-1">No brokerage account</h4>
              <p className="text-gray-400 text-sm">Connect a wallet, deposit USDC, and start trading. No forms, no waiting, no geographic restrictions.</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <h4 className="text-green-400 font-semibold mb-1">Built-in leverage</h4>
              <p className="text-gray-400 text-sm">Most platforms offer up to {availablePlatforms[0]?.leverage || '50x'} leverage on {stock.ticker} perps. Use responsibly — this cuts both ways.</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <h4 className="text-green-400 font-semibold mb-1">Easy shorting</h4>
              <p className="text-gray-400 text-sm">Short {stock.ticker} with one click. No borrowing shares, no borrow fees, no short squeeze risk from share recalls.</p>
            </div>
          </div>

          {/* Where to Trade */}
          <h2 id="where" className="text-2xl font-bold text-white mt-12 mb-4">Where to Trade {stock.ticker} Perpetuals</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {stock.ticker} perpetuals are available on several decentralized exchanges. Here&apos;s how they compare right now:
          </p>

          {/* Live Comparison Table */}
          <div className="overflow-x-auto my-8 not-prose">
            <table className="w-full border-collapse bg-gray-900/50 rounded-xl overflow-hidden">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Platform</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-medium">Price</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-medium">Funding (Ann.)</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-medium">Leverage</th>
                  <th className="py-4 px-4 text-center text-gray-400 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {/* Hyperliquid */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4"><span className="font-semibold" style={{ color: '#3EEFC1' }}>Hyperliquid</span></td>
                  <td className="py-4 px-4 text-center text-white font-mono">
                    {loading ? <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span> :
                      marketData?.hyperliquid?.price ? formatCurrency(marketData.hyperliquid.price) : <span className="text-gray-500">-</span>}
                  </td>
                  <td className="py-4 px-4 text-center font-mono">
                    {loading ? <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span> :
                      marketData?.hyperliquid?.fundingRate !== null && marketData?.hyperliquid?.fundingRate !== undefined ?
                        <span className={marketData.hyperliquid.fundingRate < 0 ? 'text-green-400' : 'text-yellow-400'}>{formatFundingRate(marketData.hyperliquid.fundingRate)}</span> :
                        <span className="text-gray-500">-</span>}
                  </td>
                  <td className="py-4 px-4 text-center text-white">50x</td>
                  <td className="py-4 px-4">
                    <a href={platforms.find(p => p.id === 'hyperliquid')?.referralUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#3EEFC1] text-gray-900 rounded-lg text-sm font-medium hover:opacity-90">
                      Trade <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </td>
                </tr>
                {/* Lighter */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4"><span className="font-semibold" style={{ color: '#6366F1' }}>Lighter</span></td>
                  <td className="py-4 px-4 text-center text-white font-mono">
                    {loading ? <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span> :
                      marketData?.lighter?.price ? formatCurrency(marketData.lighter.price) : <span className="text-gray-500">-</span>}
                  </td>
                  <td className="py-4 px-4 text-center font-mono">
                    {loading ? <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span> :
                      marketData?.lighter?.fundingRate !== null && marketData?.lighter?.fundingRate !== undefined ?
                        <span className={marketData.lighter.fundingRate < 0 ? 'text-green-400' : 'text-yellow-400'}>{formatFundingRate(marketData.lighter.fundingRate)}</span> :
                        <span className="text-gray-500">-</span>}
                  </td>
                  <td className="py-4 px-4 text-center text-white">100x</td>
                  <td className="py-4 px-4">
                    <a href={platforms.find(p => p.id === 'lighter')?.referralUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#6366F1] text-white rounded-lg text-sm font-medium hover:opacity-90">
                      Trade <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </td>
                </tr>
                {/* Ostium */}
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4"><span className="font-semibold" style={{ color: '#10B981' }}>Ostium</span></td>
                  <td className="py-4 px-4 text-center text-white font-mono">
                    {loading ? <span className="inline-block w-16 h-4 bg-gray-700 rounded animate-pulse"></span> :
                      marketData?.ostium?.price ? formatCurrency(marketData.ostium.price) : <span className="text-gray-500">-</span>}
                  </td>
                  <td className="py-4 px-4 text-center font-mono"><span className="text-gray-500">Rollover</span></td>
                  <td className="py-4 px-4 text-center text-white">100x</td>
                  <td className="py-4 px-4">
                    <a href={platforms.find(p => p.id === 'ostium')?.referralUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#10B981] text-white rounded-lg text-sm font-medium hover:opacity-90">
                      Trade <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            {lastUpdate && <p className="text-gray-500 text-xs mt-2">Data updates every 30 seconds. Last update: {lastUpdate.toLocaleTimeString()}</p>}
          </div>

          {/* Recommendation */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5 my-6 not-prose">
            <h3 className="text-white font-semibold mb-3">Our Recommendation</h3>
            <div className="space-y-3 text-sm">
              <div><strong className="text-cyan-400">Best overall:</strong> <span className="text-white">{bestPlatform?.name || 'Hyperliquid'}</span> — Best liquidity and lowest fees</div>
              <div><strong className="text-cyan-400">Best for beginners:</strong> <span className="text-white">Hyperliquid</span> — Clean UI, easy onboarding</div>
              {bestVenue?.rate !== null && bestVenue?.rate !== undefined && bestVenue.rate < 0 && (
                <div><strong className="text-green-400">Earning funding:</strong> <span className="text-white">{bestPlatform?.name}</span> — Longs currently earn {formatFundingRate(Math.abs(bestVenue.rate))}</div>
              )}
            </div>
          </div>

          {/* Understanding Funding */}
          <h2 id="funding" className="text-2xl font-bold text-white mt-12 mb-4">Understanding Funding Rates</h2>
          <p className="text-gray-300 leading-relaxed">
            Before you trade, understand how funding rates work — they&apos;re the main cost (or benefit) of holding a perp position.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">What is funding?</h3>
          <p className="text-gray-300 leading-relaxed">
            Funding is a periodic payment between long and short traders that keeps the perp price aligned with the spot price.
          </p>
          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong className="text-yellow-400">Positive funding:</strong> Longs pay shorts. This happens when there&apos;s more demand to go long.</li>
            <li><strong className="text-green-400">Negative funding:</strong> Shorts pay longs. This happens when there&apos;s more demand to go short.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">How much does funding cost?</h3>
          <p className="text-gray-300 leading-relaxed">
            If you hold a $10,000 long position and funding is +0.01% per 8 hours:
          </p>
          <ul className="text-gray-300 space-y-1 my-4">
            <li>Per 8h: $10,000 × 0.0001 = <strong className="text-white">$1.00</strong></li>
            <li>Per day: <strong className="text-white">$3.00</strong></li>
            <li>Per year: <strong className="text-white">~$1,095 (10.95% annualized)</strong></li>
          </ul>
          <p className="text-gray-400 text-sm">This is why comparing funding rates matters — it&apos;s a real cost that adds up.</p>

          {/* Step by Step */}
          <h2 id="how-to" className="text-2xl font-bold text-white mt-12 mb-4">How to Get Started: Step-by-Step</h2>

          <div className="space-y-6 my-8 not-prose">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-gray-900 font-bold flex items-center justify-center">1</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Set up a wallet</h4>
                  <p className="text-gray-400 text-sm">Download <a href="https://rabby.io" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Rabby Wallet</a>. Create a new wallet and <strong>save your seed phrase securely</strong>. Your wallet is your account — no email or password needed. <a href="/blog/wallet-setup-guide" className="text-cyan-400 hover:underline">Full setup guide →</a></p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-gray-900 font-bold flex items-center justify-center">2</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Get USDC</h4>
                  <p className="text-gray-400 text-sm">You need USDC (a stablecoin pegged to USD) to trade. Buy on Coinbase, Kraken, or Binance, then withdraw to your wallet. Or use the platform&apos;s built-in onramp to buy with card.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-gray-900 font-bold flex items-center justify-center">3</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Connect to the platform</h4>
                  <p className="text-gray-400 text-sm">Go to {bestPlatform?.name || 'Hyperliquid'}, click &quot;Connect Wallet&quot;, approve the connection, and deposit USDC to your trading account.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-gray-900 font-bold flex items-center justify-center">4</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Open a position</h4>
                  <p className="text-gray-400 text-sm">Search for &quot;{stock.ticker}-PERP&quot;, choose Long (bullish) or Short (bearish), set your position size and leverage, review the liquidation price, and click &quot;Open Position&quot;.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 text-gray-900 font-bold flex items-center justify-center">5</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Manage your position</h4>
                  <p className="text-gray-400 text-sm">Set a stop-loss to limit downside. Monitor funding rates. Close your position anytime by clicking &quot;Close&quot;.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 my-6 not-prose">
            <p className="text-yellow-400 font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Pro tip
            </p>
            <p className="text-gray-300 text-sm mt-1">Start with low leverage (2-3x) until you understand how liquidations work.</p>
          </div>

          {/* Trading Strategies */}
          <h2 id="strategies" className="text-2xl font-bold text-white mt-12 mb-4">{stock.ticker} Trading Strategies</h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Strategy 1: News Trading</h3>
          <p className="text-gray-300 leading-relaxed">
            {stock.name} moves on earnings, product announcements, and macro news. With 24/7 access, you can open positions immediately when news breaks, trade earnings reactions the moment they&apos;re released, and react to analyst upgrades/downgrades in real-time.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Strategy 2: Swing Trading</h3>
          <p className="text-gray-300 leading-relaxed">
            Use {stock.ticker}&apos;s {stock.volatility === 'very-high' || stock.volatility === 'high' ? 'high' : 'moderate'} volatility for multi-day trades. Identify support/resistance levels, enter with modest leverage (3-5x), set stop-loss below support, and take profit at resistance.
          </p>

          {/* Stock-specific tips */}
          <h3 className="text-xl font-semibold text-white mt-8 mb-3">{stock.ticker}-Specific Tips</h3>
          <ul className="space-y-2 text-gray-300">
            {stock.tradingTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cyan-400">•</span> {tip}
              </li>
            ))}
          </ul>

          {/* Risks */}
          <h2 id="risks" className="text-2xl font-bold text-white mt-12 mb-4">Risks to Understand</h2>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 my-6 not-prose">
            <ul className="space-y-3 text-sm">
              <li><strong className="text-red-400">Leverage amplifies losses:</strong> <span className="text-gray-300">{availablePlatforms[0]?.leverage || '20x'} leverage means a 5% move against you could wipe out your position. Use leverage carefully.</span></li>
              <li><strong className="text-red-400">Funding can be expensive:</strong> <span className="text-gray-300">High positive funding eats into profits. Check rates before holding long-term positions.</span></li>
              <li><strong className="text-red-400">Smart contract risk:</strong> <span className="text-gray-300">Decentralized platforms run on code. There&apos;s always some risk of bugs, though major platforms are audited.</span></li>
              <li><strong className="text-red-400">Not the actual stock:</strong> <span className="text-gray-300">You don&apos;t own {stock.name} shares. No voting rights, no dividends. You&apos;re trading a derivative.</span></li>
            </ul>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-2xl font-bold text-white mt-12 mb-4">Frequently Asked Questions</h2>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 my-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">Can I really trade {stock.name} 24/7?</h3>
            <p className="text-gray-400 text-sm">Yes. Perpetual futures on decentralized exchanges trade around the clock, including weekends and holidays. There are no market hours.</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">Do I need a brokerage account?</h3>
            <p className="text-gray-400 text-sm">No. You just need a self-custody wallet and USDC. No identity verification required on most decentralized platforms.</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">How much leverage can I use?</h3>
            <p className="text-gray-400 text-sm">{availablePlatforms.map(p => `${p.platform.name} offers up to ${p.leverage}`).join('. ')}. We recommend starting with 2-5x until you&apos;re comfortable.</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">What&apos;s the minimum to start?</h3>
            <p className="text-gray-400 text-sm">You can start with as little as $50 (₹4,000) on most platforms. No minimum deposits required on Hyperliquid.</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">What if I get liquidated?</h3>
            <p className="text-gray-400 text-sm">If the price moves against you enough to hit your liquidation price, your position is automatically closed and you lose your margin. Always use stop-losses.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-12">
          <h3 className="text-2xl font-bold text-white mb-2">Start Trading {stock.ticker} Today</h3>
          <p className="text-gray-400 mb-6">Ready to trade {stock.name} without limits?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ReferralButton
              href={bestPlatform?.referralUrl || '#'}
              platformName={bestPlatform?.name || 'Hyperliquid'}
              color={platformColors[bestPlatform?.id || 'hyperliquid'] || '#3EEFC1'}
              location={`how_to_trade_${stock.ticker.toLowerCase()}_cta`}
            />
            <Link
              href={`/stocks/${stock.ticker.toLowerCase()}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-600 transition-colors"
            >
              Compare All Venues
            </Link>
          </div>
        </div>

        {/* Related Guides */}
        <section className="my-12">
          <h2 className="text-xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedStocks.map((related) => (
              <Link
                key={related.ticker}
                href={`/blog/trade-24-7/${related.ticker.toLowerCase()}`}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors"
              >
                <p className="text-cyan-400 text-sm font-medium">Trading Guide</p>
                <p className="text-white font-semibold">How to Trade {related.ticker} 24/7</p>
                <p className="text-gray-500 text-sm mt-1">{related.sector}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <p className="text-gray-500 text-xs">
            <em>Disclaimer: This content is for informational purposes only and is not financial advice. Trading perpetual futures involves significant risk of loss. Only trade with funds you can afford to lose.</em>
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
