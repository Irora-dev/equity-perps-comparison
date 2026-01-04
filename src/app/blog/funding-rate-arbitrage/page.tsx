'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

// Sample funding rate data across platforms
const fundingRateData = [
  { asset: 'NVDA', hyperliquid: 0.0052, lighter: null, ostium: 0.0038, avantis: 0.0041, tradexyz: 0.0048 },
  { asset: 'TSLA', hyperliquid: 0.0078, lighter: null, ostium: 0.0045, avantis: 0.0089, tradexyz: 0.0065 },
  { asset: 'AAPL', hyperliquid: 0.0023, lighter: null, ostium: 0.0018, avantis: 0.0025, tradexyz: 0.0021 },
  { asset: 'COIN', hyperliquid: 0.0034, lighter: -0.0015, ostium: null, avantis: 0.0028, tradexyz: 0.0031 },
  { asset: 'HOOD', hyperliquid: 0.0045, lighter: -0.0022, ostium: null, avantis: 0.0038, tradexyz: 0.0042 },
  { asset: 'META', hyperliquid: 0.0031, lighter: null, ostium: 0.0025, avantis: 0.0029, tradexyz: 0.0028 },
  { asset: 'AMZN', hyperliquid: 0.0028, lighter: null, ostium: 0.0022, avantis: 0.0026, tradexyz: 0.0024 },
  { asset: 'GOOGL', hyperliquid: 0.0025, lighter: null, ostium: 0.0019, avantis: 0.0023, tradexyz: 0.0022 },
  { asset: 'AMD', hyperliquid: 0.0062, lighter: null, ostium: 0.0048, avantis: 0.0055, tradexyz: 0.0058 },
  { asset: 'MSFT', hyperliquid: 0.0018, lighter: null, ostium: 0.0015, avantis: 0.0016, tradexyz: 0.0017 },
  { asset: 'PLTR', hyperliquid: 0.0085, lighter: null, ostium: 0.0065, avantis: 0.0072, tradexyz: 0.0078 },
  { asset: 'SPY', hyperliquid: null, lighter: null, ostium: 0.0012, avantis: 0.0015, tradexyz: null },
  { asset: 'QQQ', hyperliquid: null, lighter: null, ostium: 0.0018, avantis: 0.0022, tradexyz: null },
];

interface ArbitrageOpportunity {
  asset: string;
  longPlatform: string;
  shortPlatform: string;
  longRate: number;
  shortRate: number;
  spread: number;
  annualizedYield: number;
}

const platformColors: Record<string, string> = {
  hyperliquid: '#00D1C4',
  lighter: '#8B5CF6',
  ostium: '#10B981',
  avantis: '#6366F1',
  tradexyz: '#3B82F6',
};

const platformNames: Record<string, string> = {
  hyperliquid: 'Hyperliquid',
  lighter: 'Lighter',
  ostium: 'Ostium',
  avantis: 'Avantis',
  tradexyz: 'TradeXYZ',
};

export default function FundingRateArbitrage() {
  const [positionSize, setPositionSize] = useState(10000);
  const [holdingPeriod, setHoldingPeriod] = useState<'8h' | 'day' | 'week' | 'month'>('day');
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  // Calculate arbitrage opportunities
  const arbitrageOpportunities = useMemo(() => {
    const opportunities: ArbitrageOpportunity[] = [];

    fundingRateData.forEach((data) => {
      const rates: { platform: string; rate: number }[] = [];

      if (data.hyperliquid !== null) rates.push({ platform: 'hyperliquid', rate: data.hyperliquid });
      if (data.lighter !== null) rates.push({ platform: 'lighter', rate: data.lighter });
      if (data.ostium !== null) rates.push({ platform: 'ostium', rate: data.ostium });
      if (data.avantis !== null) rates.push({ platform: 'avantis', rate: data.avantis });
      if (data.tradexyz !== null) rates.push({ platform: 'tradexyz', rate: data.tradexyz });

      if (rates.length < 2) return;

      // Find best long (most negative/lowest rate) and best short (most positive/highest rate)
      const sortedRates = [...rates].sort((a, b) => a.rate - b.rate);
      const bestLong = sortedRates[0];
      const bestShort = sortedRates[sortedRates.length - 1];

      const spread = bestShort.rate - bestLong.rate;
      if (spread > 0.001) { // Only show opportunities with > 0.01% spread
        const annualizedYield = spread * 3 * 365 * 100; // 3 funding periods per day, 365 days
        opportunities.push({
          asset: data.asset,
          longPlatform: bestLong.platform,
          shortPlatform: bestShort.platform,
          longRate: bestLong.rate,
          shortRate: bestShort.rate,
          spread,
          annualizedYield,
        });
      }
    });

    return opportunities.sort((a, b) => b.spread - a.spread);
  }, []);

  // Calculate earnings based on position size and holding period
  const calculateEarnings = (spread: number) => {
    const fundingPeriodsPerDay = 3; // Assuming 8-hour funding
    let periods: number;

    switch (holdingPeriod) {
      case '8h': periods = 1; break;
      case 'day': periods = fundingPeriodsPerDay; break;
      case 'week': periods = fundingPeriodsPerDay * 7; break;
      case 'month': periods = fundingPeriodsPerDay * 30; break;
    }

    return positionSize * spread * periods;
  };

  const formatRate = (rate: number | null) => {
    if (rate === null) return '-';
    const formatted = (rate * 100).toFixed(4);
    return rate >= 0 ? `+${formatted}%` : `${formatted}%`;
  };

  const getRateColor = (rate: number | null) => {
    if (rate === null) return 'text-gray-600';
    if (rate > 0.005) return 'text-green-400';
    if (rate > 0) return 'text-green-300';
    if (rate < -0.003) return 'text-red-400';
    return 'text-red-300';
  };

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');
  const lighter = platforms.find(p => p.id === 'lighter');

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Funding Rate Arbitrage Finder: Cross-Platform Equity Perps Strategy',
    description: 'Find funding rate arbitrage opportunities across equity perpetual platforms. Calculate potential profits from rate differentials between Hyperliquid, Lighter, Ostium, and more.',
    author: {
      '@type': 'Organization',
      name: 'Compare Equity Perps',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Compare Equity Perps',
      url: 'https://compareequityperps.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://compareequityperps.com/blog/funding-rate-arbitrage/',
    },
    datePublished: '2025-01-04',
    dateModified: new Date().toISOString().split('T')[0],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-300">Funding Rate Arbitrage</li>
            </ol>
          </nav>

          <header className="mb-12">
            <span className="text-green-400 text-sm font-medium">Advanced Strategy Tool</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
              Funding Rate Arbitrage Finder
            </h1>
            <p className="text-xl text-gray-400">
              Discover cross-platform funding rate differentials and calculate potential arbitrage profits.
            </p>
          </header>

          {/* What is Funding Rate Arbitrage */}
          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-white mb-3">What is Funding Rate Arbitrage?</h2>
            <p className="text-gray-300 mb-4">
              Funding rate arbitrage exploits rate differences between platforms. When funding rates differ significantly,
              you can <span className="text-green-400 font-medium">go long where rates are negative</span> (earn funding) and
              <span className="text-red-400 font-medium"> short where rates are positive</span> (earn funding). This creates
              a delta-neutral position that profits from the rate spread regardless of price movement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-cyan-400 font-medium mb-2">The Strategy</div>
                <ol className="space-y-1 text-gray-400">
                  <li>1. Find an asset with different funding rates across platforms</li>
                  <li>2. Go long on the platform with lower/negative funding</li>
                  <li>3. Go short on the platform with higher/positive funding</li>
                  <li>4. Collect the spread as profit every funding period</li>
                </ol>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-cyan-400 font-medium mb-2">Example</div>
                <p className="text-gray-400">
                  NVDA funding is <span className="text-green-400">+0.05%</span> on Hyperliquid but
                  <span className="text-red-400"> -0.02%</span> on Lighter. You short on Hyperliquid
                  (receiving 0.05%) and long on Lighter (receiving 0.02%), earning 0.07% per funding period.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-white mb-6">Arbitrage Calculator</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Position Size (USD per leg)</label>
                <input
                  type="number"
                  value={positionSize}
                  onChange={(e) => setPositionSize(Math.max(0, Number(e.target.value)))}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="10000"
                />
                <p className="text-gray-500 text-xs mt-1">Total capital deployed: ${(positionSize * 2).toLocaleString()}</p>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Holding Period</label>
                <div className="grid grid-cols-4 gap-2">
                  {(['8h', 'day', 'week', 'month'] as const).map((period) => (
                    <button
                      key={period}
                      onClick={() => setHoldingPeriod(period)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        holdingPeriod === period
                          ? 'bg-green-500 text-gray-900'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {period === '8h' ? '8 Hours' : period === 'day' ? '1 Day' : period === 'week' ? '1 Week' : '1 Month'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Arbitrage Opportunities */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Top Arbitrage Opportunities</h2>

            <div className="space-y-4">
              {arbitrageOpportunities.slice(0, 5).map((opp, index) => (
                <div
                  key={opp.asset}
                  className={`bg-gray-900/50 border rounded-xl p-6 cursor-pointer transition-all ${
                    selectedAsset === opp.asset
                      ? 'border-green-500'
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                  onClick={() => setSelectedAsset(selectedAsset === opp.asset ? null : opp.asset)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center text-white font-bold">
                        #{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{opp.asset}</h3>
                        <p className="text-gray-400 text-sm">
                          Long on <span style={{ color: platformColors[opp.longPlatform] }}>{platformNames[opp.longPlatform]}</span>
                          {' '}&bull;{' '}
                          Short on <span style={{ color: platformColors[opp.shortPlatform] }}>{platformNames[opp.shortPlatform]}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                      <div className="text-center">
                        <div className="text-gray-500 text-xs mb-1">Long Rate</div>
                        <div className={`font-mono ${opp.longRate < 0 ? 'text-red-400' : 'text-green-400'}`}>
                          {formatRate(opp.longRate)}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-500 text-xs mb-1">Short Rate</div>
                        <div className="font-mono text-green-400">{formatRate(opp.shortRate)}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-500 text-xs mb-1">Spread (8h)</div>
                        <div className="font-mono text-cyan-400 font-bold">{formatRate(opp.spread)}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-500 text-xs mb-1">Est. Profit ({holdingPeriod})</div>
                        <div className="font-mono text-green-400 font-bold">
                          ${calculateEarnings(opp.spread).toFixed(2)}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-500 text-xs mb-1">APY</div>
                        <div className="font-mono text-yellow-400 font-bold">{opp.annualizedYield.toFixed(1)}%</div>
                      </div>
                    </div>
                  </div>

                  {selectedAsset === opp.asset && (
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-medium mb-3">Earnings Breakdown</h4>
                          <table className="w-full text-sm">
                            <tbody>
                              <tr className="border-b border-gray-800">
                                <td className="py-2 text-gray-400">Per 8-hour period</td>
                                <td className="py-2 text-white text-right font-mono">${(positionSize * opp.spread).toFixed(2)}</td>
                              </tr>
                              <tr className="border-b border-gray-800">
                                <td className="py-2 text-gray-400">Daily (3 periods)</td>
                                <td className="py-2 text-white text-right font-mono">${(positionSize * opp.spread * 3).toFixed(2)}</td>
                              </tr>
                              <tr className="border-b border-gray-800">
                                <td className="py-2 text-gray-400">Weekly</td>
                                <td className="py-2 text-white text-right font-mono">${(positionSize * opp.spread * 21).toFixed(2)}</td>
                              </tr>
                              <tr>
                                <td className="py-2 text-gray-400">Monthly</td>
                                <td className="py-2 text-green-400 text-right font-mono font-bold">${(positionSize * opp.spread * 90).toFixed(2)}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-3">Position Setup</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                <span className="text-gray-300">Long {opp.asset}</span>
                              </div>
                              <div>
                                <span className="text-white font-medium" style={{ color: platformColors[opp.longPlatform] }}>
                                  {platformNames[opp.longPlatform]}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <span className="text-gray-300">Short {opp.asset}</span>
                              </div>
                              <div>
                                <span className="text-white font-medium" style={{ color: platformColors[opp.shortPlatform] }}>
                                  {platformNames[opp.shortPlatform]}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Full Funding Rate Comparison Table */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Current Funding Rates Across Platforms</h2>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
              <p className="text-yellow-200 text-sm">
                <strong>Note:</strong> This data is illustrative. Funding rates change constantly.
                Always verify current rates on each platform before executing trades.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-4 px-4 text-gray-400 font-medium">Asset</th>
                      <th className="text-right py-4 px-4 font-medium" style={{ color: platformColors.hyperliquid }}>Hyperliquid</th>
                      <th className="text-right py-4 px-4 font-medium" style={{ color: platformColors.lighter }}>Lighter</th>
                      <th className="text-right py-4 px-4 font-medium" style={{ color: platformColors.ostium }}>Ostium</th>
                      <th className="text-right py-4 px-4 font-medium" style={{ color: platformColors.avantis }}>Avantis</th>
                      <th className="text-right py-4 px-4 font-medium" style={{ color: platformColors.tradexyz }}>TradeXYZ</th>
                      <th className="text-right py-4 px-4 text-gray-400 font-medium">Spread</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fundingRateData.map((row, i) => {
                      const rates = [row.hyperliquid, row.lighter, row.ostium, row.avantis, row.tradexyz].filter(r => r !== null) as number[];
                      const spread = rates.length >= 2 ? Math.max(...rates) - Math.min(...rates) : null;

                      return (
                        <tr
                          key={row.asset}
                          className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}
                        >
                          <td className="py-3 px-4 text-white font-medium">{row.asset}</td>
                          <td className={`py-3 px-4 text-right font-mono ${getRateColor(row.hyperliquid)}`}>
                            {formatRate(row.hyperliquid)}
                          </td>
                          <td className={`py-3 px-4 text-right font-mono ${getRateColor(row.lighter)}`}>
                            {formatRate(row.lighter)}
                          </td>
                          <td className={`py-3 px-4 text-right font-mono ${getRateColor(row.ostium)}`}>
                            {formatRate(row.ostium)}
                          </td>
                          <td className={`py-3 px-4 text-right font-mono ${getRateColor(row.avantis)}`}>
                            {formatRate(row.avantis)}
                          </td>
                          <td className={`py-3 px-4 text-right font-mono ${getRateColor(row.tradexyz)}`}>
                            {formatRate(row.tradexyz)}
                          </td>
                          <td className={`py-3 px-4 text-right font-mono ${spread && spread > 0.003 ? 'text-cyan-400 font-bold' : 'text-gray-500'}`}>
                            {spread !== null ? formatRate(spread) : '-'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Strategy Explanation */}
          <div className="prose prose-invert max-w-none mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">How to Execute Funding Rate Arbitrage</h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="text-white font-medium">Identify the Opportunity</p>
                    <p className="text-gray-400 text-sm">Find an asset with significant funding rate differential between platforms. Look for spreads of at least 0.02% to make the trade worthwhile after fees.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="text-white font-medium">Fund Both Platforms</p>
                    <p className="text-gray-400 text-sm">Deposit collateral on both platforms. You will need margin for both the long and short positions. Consider using similar leverage on both sides.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="text-white font-medium">Open Positions Simultaneously</p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-400">Long on the platform with lower/negative funding</span> and
                      <span className="text-red-400"> short on the platform with higher/positive funding</span>. Try to execute both trades quickly to minimize slippage.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="text-white font-medium">Monitor and Collect</p>
                    <p className="text-gray-400 text-sm">Every funding period, you collect the spread as profit. Keep monitoring as rates change and close positions when the arbitrage opportunity closes.</p>
                  </div>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">Profit Formula</h2>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 mb-6">
              <div className="text-center mb-4">
                <code className="text-xl text-cyan-400 font-mono">
                  Profit = Position Size x Rate Spread x Number of Funding Periods
                </code>
              </div>
              <div className="text-gray-400 text-sm text-center">
                With 8-hour funding, there are 3 funding periods per day, 21 per week, ~90 per month
              </div>
            </div>
          </div>

          {/* Risk Warnings */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Risks and Considerations</h2>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Execution Risk
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>Funding rates can flip quickly before you open positions</li>
                    <li>Slippage on entry/exit can eat into profits</li>
                    <li>Network congestion may delay transactions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Liquidation Risk
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>Volatile price moves can liquidate one leg</li>
                    <li>Different margin requirements across platforms</li>
                    <li>Unbalanced positions create directional exposure</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Rate Convergence
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>Spreads narrow as arbitrageurs exploit them</li>
                    <li>Rates can become equal or flip direction</li>
                    <li>Historical spreads do not guarantee future spreads</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Capital Efficiency
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>Requires capital locked on multiple platforms</li>
                    <li>Lower effective leverage than single-platform trades</li>
                    <li>Gas fees and withdrawal delays between chains</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-red-500/30">
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Important:</strong> Funding rate arbitrage is an advanced strategy.
                  Start with small positions to understand the mechanics. Never risk more than you can afford to lose.
                  This is not financial advice.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Start Trading on Multiple Platforms</h2>
            <p className="text-gray-400 mb-6">
              To execute funding arbitrage, you need accounts on multiple platforms. Get started with these zero-fee options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={hyperliquid?.referralUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors"
                style={{ backgroundColor: '#00D1C4', color: '#0A0A14' }}
              >
                Trade on Hyperliquid
              </a>
              <a
                href={lighter?.referralUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors"
                style={{ backgroundColor: '#8B5CF6', color: '#ffffff' }}
              >
                Trade on Lighter
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
              >
                Compare All Platforms
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/blog/funding-rate-farming"
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-medium mb-2">Funding Rate Farming</h3>
              <p className="text-gray-500 text-sm">Learn how to earn yield from funding rates</p>
            </Link>
            <Link
              href="/blog/funding-rate-tracker"
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-medium mb-2">Funding Rate Tracker</h3>
              <p className="text-gray-500 text-sm">Monitor live funding rates across platforms</p>
            </Link>
            <Link
              href="/blog/how-funding-rates-work"
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors"
            >
              <h3 className="text-white font-medium mb-2">How Funding Rates Work</h3>
              <p className="text-gray-500 text-sm">Understand the mechanics of funding rates</p>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to comparison table
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
