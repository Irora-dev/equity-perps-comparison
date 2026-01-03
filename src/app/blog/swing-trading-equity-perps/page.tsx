'use client';

import Link from 'next/link';
import { platforms } from '@/data/platforms';
import FAQSection from '@/components/FAQSection';

const faqs = [
  {
    question: "What's the ideal holding period for swing trades with equity perps?",
    answer: "Most swing trades last 2-10 days, though some setups can extend to 2-3 weeks. The key is identifying clear support/resistance levels and having defined profit targets. Unlike futures, equity perps have no expiration, so you can hold as long as the setup remains valid."
  },
  {
    question: "How much do funding rates cost for swing trades?",
    answer: "Funding rates typically range from 0.001% to 0.01% every 8 hours, meaning a multi-day trade might cost 0.01-0.1% total. During low volatility periods, rates can even be negative (you get paid to hold). Always check current funding rates before entering - they're displayed on the trading interface."
  },
  {
    question: "Can I hold positions over weekends?",
    answer: "Yes! This is a major advantage of equity perps. Traditional stock markets close Friday at 4pm and don't reopen until Monday at 9:30am. Equity perps trade 24/7, so you can manage weekend risk with stop losses that actually execute, or capitalize on Sunday news that moves prices before traditional markets open."
  },
  {
    question: "What leverage should I use for swing trading?",
    answer: "We recommend 2-3x maximum for swing trades. Lower leverage gives your position room to breathe through normal price fluctuations without getting stopped out or liquidated. Higher leverage (5x+) is better suited for day trades where you're actively monitoring."
  },
  {
    question: "How do I handle earnings announcements?",
    answer: "Earnings create high volatility. Options: (1) Close positions before earnings to avoid risk, (2) Reduce position size significantly, or (3) Trade the post-earnings move once direction is established. Never hold full-size leveraged positions through earnings - the gap risk is too high."
  },
  {
    question: "What's the difference between swing trading perps vs stocks?",
    answer: "Key differences: (1) Perps trade 24/7, stocks only during market hours, (2) Perps allow easy shorting without borrowing, (3) Perps have funding rates instead of overnight margin costs, (4) Perps offer higher leverage (up to 20x vs 2x for stocks), (5) No settlement delays - profit is instantly available."
  },
];

export default function SwingTradingEquityPerps() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Swing Trading Equity Perps: Capture Multi-Day Stock Moves",
    description: "Master swing trading with equity perpetuals. Learn entry/exit strategies, position sizing, and how to profit from multi-day stock trends with no expiry dates.",
    author: { "@type": "Organization", name: "Compare Equity Perps" },
    datePublished: "2026-01-04",
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Learn</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">Swing Trading Equity Perps</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                <span className="text-blue-400 text-sm font-medium">Trading Strategy</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Swing Trading Equity Perps
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                  Capture Multi-Day Moves
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Hold positions for days to weeks. Catch the big trends. With equity perps, there&apos;s
                <span className="text-blue-400 font-semibold"> no expiration dates</span>, minimal funding costs,
                and <span className="text-purple-400 font-semibold">24/7 markets</span> to manage your trades.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">No Expiry</div>
                    <div className="text-gray-500 text-sm">Hold indefinitely</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">24/7 Trading</div>
                    <div className="text-gray-500 text-sm">Manage anytime</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-400">2-3x</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Low Leverage</div>
                    <div className="text-gray-500 text-sm">Recommended</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#what-is-swing-trading"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-bold text-lg hover:from-blue-400 hover:to-purple-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                >
                  Learn Swing Trading
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 border border-gray-700 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-all"
                >
                  Start Trading Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS SWING TRADING */}
        <section id="what-is-swing-trading" className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What is <span className="text-blue-400">Swing Trading</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Capturing price movements over days to weeks
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">The Sweet Spot Between Day Trading and Investing</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl font-bold">1.</span>
                      <span><strong className="text-white">Hold positions 2-14 days</strong> - longer than day trades, shorter than investments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl font-bold">2.</span>
                      <span><strong className="text-white">Capture &quot;swings&quot;</strong> in price as stocks move between support and resistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl font-bold">3.</span>
                      <span><strong className="text-white">Less screen time</strong> than day trading - check positions 2-3 times per day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl font-bold">4.</span>
                      <span><strong className="text-white">Bigger moves</strong> mean fewer trades needed to hit profit targets</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Example Swing Trade</div>
                    <div className="text-4xl font-black text-white mb-1">NVDA-PERP</div>
                    <div className="text-blue-400 text-xl font-bold">Long 3x</div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Entry</span>
                        <span className="text-white">$850 (support bounce)</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Target</span>
                        <span className="text-white">$920 (resistance)</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Hold Time</span>
                        <span className="text-white">5 days</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Result</span>
                        <span className="text-green-400">+24.7% (3x leveraged)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY EQUITY PERPS FOR SWING TRADING */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Equity Perps are <span className="text-purple-400">Perfect for Swing Trading</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Traditional futures expire. Options decay. Perps just work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No Expiration Dates</h3>
                <p className="text-gray-400">
                  Unlike futures or options, perps never expire. Hold your swing trade as long as the setup is valid - no rolling contracts or theta decay eating your profits.
                </p>
              </div>

              <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Low Funding Costs</h3>
                <p className="text-gray-400">
                  Funding rates are typically 0.001-0.01% every 8 hours. A week-long trade might cost just 0.02-0.2% in funding - far cheaper than margin interest or options premium.
                </p>
              </div>

              <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Markets</h3>
                <p className="text-gray-400">
                  Manage positions anytime. Set stop losses that execute on Sunday night. React to weekend news before traditional markets open. No gap risk from overnight closures.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Swing Trading: Perps vs Alternatives</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-400 font-medium">Feature</th>
                      <th className="text-center py-3 text-blue-400 font-medium">Equity Perps</th>
                      <th className="text-center py-3 text-gray-500 font-medium">Futures</th>
                      <th className="text-center py-3 text-gray-500 font-medium">Options</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Expiration</td>
                      <td className="text-center text-green-400">Never</td>
                      <td className="text-center">Monthly/Quarterly</td>
                      <td className="text-center">Weekly/Monthly</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Time Decay</td>
                      <td className="text-center text-green-400">None</td>
                      <td className="text-center">Minimal</td>
                      <td className="text-center text-red-400">Significant</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Holding Cost (1 week)</td>
                      <td className="text-center text-green-400">~0.05%</td>
                      <td className="text-center">~0.02%</td>
                      <td className="text-center text-red-400">5-20%+ decay</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">Trading Hours</td>
                      <td className="text-center text-green-400">24/7</td>
                      <td className="text-center">~23 hrs/day</td>
                      <td className="text-center">Market hours</td>
                    </tr>
                    <tr>
                      <td className="py-3">Short Selling</td>
                      <td className="text-center text-green-400">Click &quot;Sell&quot;</td>
                      <td className="text-center">Click &quot;Sell&quot;</td>
                      <td className="text-center">Buy Puts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FUNDING RATE CONSIDERATIONS */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Understanding <span className="text-blue-400">Funding Rates</span> for Swing Trades
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The cost of holding positions - and when you get paid
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">How Funding Works</h3>
                <p className="text-gray-400 mb-4">
                  Funding rates are small payments exchanged between longs and shorts every 8 hours. They keep perp prices aligned with spot prices.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                    <div className="text-green-400 font-semibold mb-2">Positive Funding Rate</div>
                    <p className="text-gray-400 text-sm">More traders are long. Longs pay shorts. If you&apos;re short, you earn funding.</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <div className="text-red-400 font-semibold mb-2">Negative Funding Rate</div>
                    <p className="text-gray-400 text-sm">More traders are short. Shorts pay longs. If you&apos;re long, you earn funding.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Real Cost for Swing Traders</h3>
                <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-gray-500 text-sm">Daily Cost</div>
                      <div className="text-white font-bold">0.003-0.03%</div>
                      <div className="text-gray-600 text-xs">(3 funding periods)</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Weekly Cost</div>
                      <div className="text-white font-bold">0.02-0.2%</div>
                      <div className="text-gray-600 text-xs">(21 funding periods)</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">Monthly Cost</div>
                      <div className="text-white font-bold">0.1-1%</div>
                      <div className="text-gray-600 text-xs">(90 funding periods)</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">Pro tip:</strong> For a 5-day swing trade targeting 5-10% profit, funding costs of 0.01-0.05% are negligible. Focus on the trade setup, not the funding.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Swing Trader&apos;s Funding Strategy</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Check funding rate before entering - avoid extremely high rates ({'>'}0.05%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Negative funding = bonus income when holding in that direction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Factor funding into your profit target calculation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BEST STOCKS FOR SWING TRADING */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Best Stocks for <span className="text-purple-400">Swing Trading</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Look for volatility, liquidity, and clear technical setups
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Trending Stocks</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Stocks in clear uptrends or downtrends offer the best swing opportunities. Buy pullbacks in uptrends, short rallies in downtrends.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['NVDA', 'TSLA', 'META', 'AAPL'].map((ticker) => (
                    <Link
                      key={ticker}
                      href={`/stocks/${ticker.toLowerCase()}`}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 text-sm hover:bg-blue-500/20 transition-colors"
                    >
                      {ticker}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Earnings Plays</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Stocks often trend for days after earnings surprises. Wait for the report, then ride the post-earnings momentum.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['GOOGL', 'AMZN', 'MSFT', 'AMD'].map((ticker) => (
                    <Link
                      key={ticker}
                      href={`/stocks/${ticker.toLowerCase()}`}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 text-sm hover:bg-purple-500/20 transition-colors"
                    >
                      {ticker}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">High Beta Movers</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Volatile stocks make bigger swings. More risk, but larger profit potential for swing traders who manage positions well.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['MSTR', 'COIN', 'PLTR', 'HOOD'].map((ticker) => (
                    <Link
                      key={ticker}
                      href={`/stocks/${ticker.toLowerCase()}`}
                      className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-400 text-sm hover:bg-yellow-500/20 transition-colors"
                    >
                      {ticker}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Sector Leaders</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Leading stocks in hot sectors often provide the cleanest trends. When a sector moves, leaders move the most.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AVGO', 'CRM', 'NFLX', 'JPM'].map((ticker) => (
                    <Link
                      key={ticker}
                      href={`/stocks/${ticker.toLowerCase()}`}
                      className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm hover:bg-green-500/20 transition-colors"
                    >
                      {ticker}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/stocks" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium">
                View all available stocks
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* TECHNICAL ANALYSIS */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Technical Analysis for <span className="text-blue-400">Swing Trades</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The key indicators and patterns swing traders use
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">S/R</span>
                  </div>
                  Support &amp; Resistance
                </h3>
                <p className="text-gray-400 mb-4">
                  The foundation of swing trading. Identify price levels where stocks repeatedly bounce (support) or reverse (resistance).
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Buy at support</strong> - price has bounced here before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Sell/short at resistance</strong> - price has rejected here before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong className="text-white">Use daily/weekly charts</strong> - more significant levels</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">MA</span>
                  </div>
                  Moving Averages
                </h3>
                <p className="text-gray-400 mb-4">
                  Moving averages smooth price action and show trend direction. Key averages for swing trading:
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span><strong className="text-white">20 EMA</strong> - short-term trend, good for pullback entries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span><strong className="text-white">50 SMA</strong> - medium-term trend, major support/resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span><strong className="text-white">200 SMA</strong> - long-term trend, institutional level</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold">RSI</span>
                  </div>
                  RSI (Relative Strength Index)
                </h3>
                <p className="text-gray-400 mb-4">
                  Measures if a stock is overbought or oversold. Useful for timing entries and exits.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span><strong className="text-white">RSI below 30</strong> - oversold, look for long entries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span><strong className="text-white">RSI above 70</strong> - overbought, look for short entries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span><strong className="text-white">RSI divergence</strong> - powerful reversal signal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                    <span className="text-yellow-400 font-bold">VOL</span>
                  </div>
                  Volume Analysis
                </h3>
                <p className="text-gray-400 mb-4">
                  Volume confirms price moves. Strong moves on high volume are more reliable.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span><strong className="text-white">Breakout + high volume</strong> - confirms the move</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span><strong className="text-white">Pullback + low volume</strong> - healthy consolidation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span><strong className="text-white">Reversal + volume spike</strong> - watch for trend change</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ENTRY AND EXIT STRATEGIES */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Entry &amp; Exit <span className="text-purple-400">Strategies</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                When to get in, when to get out
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Entry Strategies</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Pullback Entry</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Wait for price to pull back to support (uptrend) or rally to resistance (downtrend). Enter when price shows signs of resuming the trend.
                    </p>
                    <div className="text-green-400 text-xs font-medium">Best for: Trending markets</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Breakout Entry</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Enter when price breaks through a significant resistance (long) or support (short) level with strong volume.
                    </p>
                    <div className="text-green-400 text-xs font-medium">Best for: Range-bound stocks breaking out</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Moving Average Bounce</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Enter when price touches and bounces off a key moving average (20 EMA, 50 SMA) in a trending market.
                    </p>
                    <div className="text-green-400 text-xs font-medium">Best for: Strong trends with clear MAs</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">RSI Reversal</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Enter when RSI reaches extreme levels (below 30 or above 70) and shows signs of reversing with price confirmation.
                    </p>
                    <div className="text-green-400 text-xs font-medium">Best for: Mean reversion trades</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">Exit Strategies</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Target Exit</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Set profit target at next resistance (longs) or support (shorts). Take profits when price reaches the level.
                    </p>
                    <div className="text-red-400 text-xs font-medium">Tip: Use limit orders for exact exits</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Trailing Stop</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Move your stop loss up as price moves in your favor. Lock in profits while letting winners run.
                    </p>
                    <div className="text-red-400 text-xs font-medium">Tip: Trail below recent swing lows</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Time-Based Exit</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      If the trade hasn&apos;t moved in your favor after X days, exit and look for better opportunities.
                    </p>
                    <div className="text-red-400 text-xs font-medium">Tip: 3-5 days for most swing trades</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Indicator Exit</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Exit when RSI reaches overbought/oversold, or price crosses below/above a key moving average.
                    </p>
                    <div className="text-red-400 text-xs font-medium">Tip: Combine with other exit signals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POSITION SIZING AND RISK MANAGEMENT */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Position Sizing &amp; <span className="text-blue-400">Risk Management</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                How to size trades and protect your capital
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">The 1-2% Rule</h3>
                <p className="text-gray-400 mb-4">
                  Never risk more than 1-2% of your total account on a single trade. This ensures you can survive a string of losses.
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="text-center mb-4">
                    <div className="text-gray-500 text-sm">Example: $10,000 Account</div>
                    <div className="text-2xl font-bold text-white">Max Risk Per Trade: <span className="text-blue-400">$100-$200</span></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="text-gray-500">Entry</div>
                      <div className="text-white">$100</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Stop Loss</div>
                      <div className="text-white">$97 (3%)</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Position Size</div>
                      <div className="text-blue-400">$3,333 (1% risk)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recommended Leverage for Swing Trading</h3>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-green-400">2x</div>
                    <div className="text-white font-semibold">Conservative</div>
                    <div className="text-gray-500 text-sm">Recommended for beginners</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-blue-400">3x</div>
                    <div className="text-white font-semibold">Moderate</div>
                    <div className="text-gray-500 text-sm">Sweet spot for most</div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-center">
                    <div className="text-3xl font-black text-yellow-400">5x</div>
                    <div className="text-white font-semibold">Aggressive</div>
                    <div className="text-gray-500 text-sm">Experienced only</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">Why low leverage?</strong> Swing trades need room to breathe. A stock might dip 5% before moving 15% in your direction. High leverage would stop you out before the move happens.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Risk:Reward Ratio</h3>
                <p className="text-gray-400 mb-4">
                  Always target at least 2:1 reward to risk. If risking $100, target $200+ profit.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <div className="text-red-400 font-semibold mb-1">Bad Trade Setup</div>
                    <div className="text-gray-400 text-sm">
                      Risk: $5 to stop loss<br />
                      Reward: $3 to target<br />
                      <span className="text-red-400">Ratio: 0.6:1</span>
                    </div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                    <div className="text-green-400 font-semibold mb-1">Good Trade Setup</div>
                    <div className="text-gray-400 text-sm">
                      Risk: $5 to stop loss<br />
                      Reward: $15 to target<br />
                      <span className="text-green-400">Ratio: 3:1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERNIGHT/WEEKEND RISK */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Managing Overnight &amp; <span className="text-purple-400">Weekend Risk</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                24/7 markets change the game - here&apos;s how to use them
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">The 24/7 Advantage</h3>
                <p className="text-gray-300 mb-4">
                  Traditional stock traders face overnight gaps - their stop losses don&apos;t execute when markets are closed. With equity perps:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">Stop losses execute 24/7</strong> - no gap risk</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">React to weekend news</strong> - before Monday open</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">Adjust positions anytime</strong> - Asian/European sessions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">Trade earnings after-hours</strong> - as news drops</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Weekend Strategy</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Set stops before Friday close</div>
                      <div className="text-gray-400 text-sm">Even though perps trade 24/7, liquidity can be lower on weekends. Set your stops during US market hours.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 font-bold">2</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Reduce position size for major event risk</div>
                      <div className="text-gray-400 text-sm">If holding over a weekend with known catalysts (Fed announcements, geopolitical events), consider reducing size.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 font-bold">3</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Monitor Sunday evening</div>
                      <div className="text-gray-400 text-sm">Sunday evening (US time) often sees price movement as Asian markets wake up. Check your positions before bed.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Earnings Calendar Warning</h3>
                <p className="text-gray-300">
                  Always check earnings dates before entering swing trades. A stock reporting earnings mid-trade creates massive gap risk. Either:
                </p>
                <ul className="mt-3 space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>Close the position before earnings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>Reduce size by 50-75%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>Wait until after earnings to enter</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Ready to Swing Trade?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  Capture multi-day moves with no expiration dates, 24/7 markets, and built-in leverage.
                </p>

                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-bold text-xl hover:from-blue-400 hover:to-purple-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                >
                  Start Swing Trading on Hyperliquid
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Related */}
        <section className="py-12 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/blog/what-are-equity-perpetuals" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
                <span className="text-cyan-400 text-xs font-medium">BEGINNER</span>
                <h4 className="text-white font-medium mt-1">What Are Equity Perps?</h4>
                <p className="text-gray-500 text-sm mt-1">Complete introduction</p>
              </Link>
              <Link href="/blog/how-to-short-stocks" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors">
                <span className="text-red-400 text-xs font-medium">STRATEGY</span>
                <h4 className="text-white font-medium mt-1">How to Short Stocks</h4>
                <p className="text-gray-500 text-sm mt-1">Short selling guide</p>
              </Link>
              <Link href="/blog/equity-perps-risks" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-yellow-500/50 transition-colors">
                <span className="text-yellow-400 text-xs font-medium">IMPORTANT</span>
                <h4 className="text-white font-medium mt-1">Understanding Risks</h4>
                <p className="text-gray-500 text-sm mt-1">What you need to know</p>
              </Link>
            </div>
          </div>
        </section>

        <div className="py-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Compare platforms
          </Link>
        </div>
      </article>
    </>
  );
}
