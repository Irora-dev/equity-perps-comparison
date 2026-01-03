'use client';

import Link from 'next/link';
import { platforms } from '@/data/platforms';
import FAQSection from '@/components/FAQSection';

const faqs = [
  {
    question: "What is scalping in trading?",
    answer: "Scalping is a trading strategy that involves making many quick trades to capture small price movements. Scalpers typically hold positions for seconds to minutes, aiming to accumulate small profits that add up over many trades. It requires fast execution, tight spreads, and the ability to make quick decisions."
  },
  {
    question: "Why are equity perps better for scalping than regular stocks?",
    answer: "Equity perps offer several advantages for scalping: 24/7 markets (no waiting for market open), ultra-low fees (0.02% or less), instant execution, leverage for capital efficiency, and no pattern day trader rules. You can scalp anytime, with any account size."
  },
  {
    question: "What leverage should I use for scalping?",
    answer: "For scalping, 3-5x leverage is recommended. This provides enough capital efficiency to make small moves profitable without excessive liquidation risk. Higher leverage (10x+) is very risky for scalpers because even small adverse moves can trigger liquidation."
  },
  {
    question: "How much capital do I need to start scalping equity perps?",
    answer: "You can start scalping with as little as $100-500. Since you're using leverage and targeting small percentage moves, you don't need large capital. However, more capital allows for better position sizing and risk management. Most successful scalpers recommend at least $1,000."
  },
  {
    question: "What are the best times to scalp equity perps?",
    answer: "The best times are during US market hours (9:30 AM - 4:00 PM ET) when volume and volatility are highest. Market open (9:30-10:30 AM) and power hour (3:00-4:00 PM) are particularly active. News events and earnings releases also create scalping opportunities 24/7."
  },
  {
    question: "How do I manage risk when scalping?",
    answer: "Use tight stop losses (0.5-1% from entry), risk only 1-2% of capital per trade, maintain a minimum 1.5:1 reward-to-risk ratio, and never move your stop loss further away. Also, set daily loss limits - if you lose 3-5% in a day, stop trading."
  },
  {
    question: "What's the difference between scalping and day trading?",
    answer: "Scalping involves very short-term trades (seconds to minutes) targeting tiny price moves (0.1-0.5%), while day trading involves longer holds (minutes to hours) targeting larger moves (1-5%). Scalpers make many more trades per day (20-100+) compared to day traders (5-20)."
  },
  {
    question: "Can I scalp equity perps on mobile?",
    answer: "While possible, mobile scalping is not recommended. Scalping requires split-second decisions, fast execution, and multiple charts/data feeds. Desktop trading with a proper setup (multiple monitors, fast internet, hotkeys) gives you a significant edge."
  },
];

export default function ScalpingEquityPerps() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Scalping Equity Perps: Quick Profits from Stock Price Movements",
    description: "Master scalping strategies for equity perpetuals. Learn momentum scalping, range scalping, and news scalping with optimal leverage and risk management.",
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Learn</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Scalping Equity Perps</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                <span className="text-cyan-400 text-sm font-medium">Advanced Strategy</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Scalping Equity Perps
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400">
                  Quick Profits Guide
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Capture small price movements for consistent profits.
                <span className="text-cyan-400 font-semibold"> In and out in seconds to minutes</span>. 24/7 markets.
                Ultra-low fees. No pattern day trader rules.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Fast Execution</div>
                    <div className="text-gray-500 text-sm">&lt;200ms fills</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-400">0.02%</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Low Fees</div>
                    <div className="text-gray-500 text-sm">Scalper-friendly</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-400">24/7</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Always Open</div>
                    <div className="text-gray-500 text-sm">Trade anytime</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#what-is-scalping"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-2xl font-bold text-lg hover:from-cyan-400 hover:to-green-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Learn Scalping
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
                  Start Scalping Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS SCALPING */}
        <section id="what-is-scalping" className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What is <span className="text-cyan-400">Scalping</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The art of capturing small, quick profits from tiny price movements
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Scalping in a Nutshell:</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl">1.</span>
                      <span>Enter a trade when you spot a <strong className="text-white">short-term opportunity</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl">2.</span>
                      <span>Hold for <strong className="text-white">seconds to minutes</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl">3.</span>
                      <span>Target small moves: <strong className="text-white">0.1% to 0.5%</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl">4.</span>
                      <span>Exit quickly with a <strong className="text-green-400">small profit</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl">5.</span>
                      <span>Repeat <strong className="text-white">20-100+ times daily</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Example Scalp Trade</div>
                    <div className="text-4xl font-black text-white mb-1">NVDA-PERP</div>
                    <div className="text-cyan-400 text-xl font-bold">Long 5x</div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Entry</span>
                        <span className="text-white">$142.50</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Exit</span>
                        <span className="text-white">$142.85</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Move</span>
                        <span className="text-white">+0.25%</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">With 5x Leverage</span>
                        <span className="text-green-400">+1.25%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Hold Time</span>
                        <span className="text-cyan-400">47 seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY EQUITY PERPS FOR SCALPING */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Equity Perps Are <span className="text-green-400">Ideal for Scalping</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Traditional stocks have too many barriers for effective scalping
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-400">Traditional Stock Scalping</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Pattern Day Trader rule ($25K minimum)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Limited to market hours (6.5 hours/day)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Commission fees eat into small profits</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>T+2 settlement delays capital</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Limited leverage (2-4x max)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-400">Equity Perp Scalping</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">No PDT rule</strong> - trade unlimited with any balance</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">24/7 markets</strong> - scalp anytime, anywhere</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Ultra-low fees</strong> - 0.02% or less</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Instant settlement</strong> - reuse capital immediately</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Higher leverage</strong> - 3-20x available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">The Math That Makes Scalping Work</h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-cyan-400">50</div>
                  <div className="text-gray-400">Trades per day</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-400">+0.15%</div>
                  <div className="text-gray-400">Average profit per trade</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">+7.5%</div>
                  <div className="text-gray-400">Daily return potential</div>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-4 text-sm">
                *With 5x leverage. Assumes 60% win rate with 1.5:1 R:R. Results vary. Trading involves risk.
              </p>
            </div>
          </div>
        </section>

        {/* BEST STOCKS FOR SCALPING */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Best Stocks for <span className="text-cyan-400">Scalping</span>
              </h2>
              <p className="text-gray-400 text-lg">
                High volatility + high liquidity = ideal scalping conditions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-white">NVDA</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">#1 Pick</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Nvidia</h3>
                <p className="text-gray-400 text-sm mb-4">
                  AI hype creates constant volatility. Daily ranges of 3-5% are common. Excellent liquidity makes entries/exits easy.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Avg Daily Range</span>
                    <span className="text-white">3-5%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Liquidity</span>
                    <span className="text-green-400">Excellent</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Best For</span>
                    <span className="text-cyan-400">Momentum</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-white">TSLA</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">High Vol</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Tesla</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Elon tweets move markets. Highly reactive to news. Strong retail following creates predictable patterns.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Avg Daily Range</span>
                    <span className="text-white">4-7%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Liquidity</span>
                    <span className="text-green-400">Excellent</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Best For</span>
                    <span className="text-cyan-400">News Scalping</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-white">AMD</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">Chip Play</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">AMD</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Correlated with NVDA but often moves first. Great for pair trading and sector momentum plays.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Avg Daily Range</span>
                    <span className="text-white">3-5%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Liquidity</span>
                    <span className="text-green-400">High</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Best For</span>
                    <span className="text-purple-400">Range Trading</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { ticker: 'MSTR', note: 'BTC correlation' },
                { ticker: 'COIN', note: 'Crypto sentiment' },
                { ticker: 'META', note: 'Tech momentum' },
                { ticker: 'PLTR', note: 'Retail favorite' },
              ].map((stock) => (
                <Link
                  key={stock.ticker}
                  href={`/stocks/${stock.ticker.toLowerCase()}`}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors group text-center"
                >
                  <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{stock.ticker}</div>
                  <div className="text-xs text-gray-600 mt-1">{stock.note}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORM RECOMMENDATION */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Best Platform for <span className="text-green-400">Scalping</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Scalping demands speed and low fees - Hyperliquid delivers both
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center text-2xl font-black text-white">
                  HL
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Hyperliquid</h3>
                  <p className="text-cyan-400">Recommended for Scalpers</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">0.02%</strong> taker fees (lowest in market)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">&lt;200ms</strong> order execution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">Deep liquidity</strong> for fast fills</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">Pro trading UI</strong> with hotkeys</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">20x leverage</strong> available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300"><strong className="text-white">Real-time</strong> order book data</span>
                  </div>
                </div>
              </div>

              <a
                href={hyperliquid?.referralUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-2xl font-bold text-lg hover:from-cyan-400 hover:to-green-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 w-full sm:w-auto"
              >
                Start Scalping on Hyperliquid
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* SCALPING STRATEGIES */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Scalping <span className="text-cyan-400">Strategies</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Three proven approaches for equity perp scalping
              </p>
            </div>

            <div className="space-y-8">
              {/* Momentum Scalping */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Momentum Scalping</h3>
                    <p className="text-gray-400">Ride strong directional moves</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">How It Works:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">1.</span>
                        <span>Wait for a strong move with high volume</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">2.</span>
                        <span>Enter in the direction of the trend</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">3.</span>
                        <span>Use tight trailing stop (0.3-0.5%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400">4.</span>
                        <span>Exit when momentum fades or stop hits</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Best Conditions:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>- Market open (9:30-10:30 AM ET)</li>
                      <li>- After news/earnings releases</li>
                      <li>- High volume breakouts</li>
                      <li>- NVDA, TSLA, AMD on trending days</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Range Scalping */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Range Scalping</h3>
                    <p className="text-gray-400">Profit from sideways price action</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">How It Works:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400">1.</span>
                        <span>Identify support and resistance levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400">2.</span>
                        <span>Long at support, short at resistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400">3.</span>
                        <span>Target the opposite end of the range</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400">4.</span>
                        <span>Stop loss just outside the range</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Best Conditions:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>- Midday (11 AM - 2 PM ET)</li>
                      <li>- Low news/catalyst days</li>
                      <li>- Clear horizontal S/R levels</li>
                      <li>- AMD, META on consolidation days</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* News Scalping */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">News Scalping</h3>
                    <p className="text-gray-400">React to breaking news 24/7</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-orange-400 mb-3">How It Works:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400">1.</span>
                        <span>Monitor news feeds and social media</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400">2.</span>
                        <span>Enter immediately on breaking news</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400">3.</span>
                        <span>Trade the initial spike (first 1-5 minutes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400">4.</span>
                        <span>Exit before the reversal/fade</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Best Conditions:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>- Earnings releases (any time)</li>
                      <li>- CEO/exec announcements</li>
                      <li>- Product launches or recalls</li>
                      <li>- TSLA (Elon tweets), COIN (crypto news)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RISK MANAGEMENT */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Risk Management for <span className="text-yellow-400">Scalpers</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Protecting capital is more important than making profits
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Tight Stop Losses</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Set stops at 0.5-1% from entry. Never move your stop further away. Accept small losses quickly.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-sm text-gray-500">Example:</div>
                  <div className="text-white">Entry: $142.50 | Stop: $142.15 (0.25%)</div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Position Sizing</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Risk 1-2% of capital per trade max. With 5x leverage, this means your position should be 5-10% of capital.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-sm text-gray-500">Example ($1000 account):</div>
                  <div className="text-white">Max risk: $20 | Position: $100 at 5x</div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Daily Loss Limits</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Stop trading if you lose 3-5% in a day. Emotional trading after losses leads to bigger losses.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-sm text-gray-500">Example ($1000 account):</div>
                  <div className="text-white">Daily stop: $50 loss = done for day</div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Reward-to-Risk Ratio</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Target at least 1.5:1 R:R. If risking 0.5%, target 0.75%+. This way you profit even with 50% win rate.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-sm text-gray-500">Example:</div>
                  <div className="text-white">Risk: $10 | Target: $15 (1.5:1)</div>
                </div>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Recommended Leverage: 3-5x</h3>
              <p className="text-gray-400 text-center mb-4">
                Higher leverage (10x+) might seem tempting, but for scalping it&apos;s dangerous. Small adverse moves can liquidate you before your stop hits.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <span className="text-green-400 font-bold">3-5x</span>
                  <span className="text-gray-400 ml-2">Recommended</span>
                </div>
                <div className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                  <span className="text-yellow-400 font-bold">5-10x</span>
                  <span className="text-gray-400 ml-2">Experienced</span>
                </div>
                <div className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <span className="text-red-400 font-bold">10x+</span>
                  <span className="text-gray-400 ml-2">Very Risky</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLS NEEDED */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Tools Every Scalper <span className="text-cyan-400">Needs</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Set yourself up for success with the right equipment
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">1.</span> Fast Charts
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  1-minute and tick charts with real-time updates. TradingView is the industry standard.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>- 1m, 5m timeframes for entries</li>
                  <li>- Volume indicators</li>
                  <li>- VWAP and moving averages</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">2.</span> Level 2 Data
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  See order book depth to anticipate price moves. Essential for reading buy/sell pressure.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>- Order book visualization</li>
                  <li>- Bid/ask spread monitoring</li>
                  <li>- Large order detection</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">3.</span> Hotkeys
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  One-click or keyboard shortcuts for instant order execution. Seconds matter in scalping.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>- Quick buy/sell buttons</li>
                  <li>- Preset position sizes</li>
                  <li>- Instant flatten position</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">4.</span> Fast Internet
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Low latency connection for quick order execution. Consider wired connection over WiFi.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>- Stable connection (not mobile)</li>
                  <li>- Low ping to exchange servers</li>
                  <li>- Backup internet recommended</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">5.</span> News Feed
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Real-time news for catalyst-based scalping. Twitter/X, Bloomberg, or dedicated services.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>- Breaking news alerts</li>
                  <li>- Earnings calendars</li>
                  <li>- Social media monitoring</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">6.</span> Multiple Monitors
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  At least 2 screens - one for charts, one for order entry. More screens = more context.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>- Main chart + trading interface</li>
                  <li>- Secondary charts/watchlist</li>
                  <li>- News/social feed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON MISTAKES */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Common <span className="text-red-400">Mistakes</span> to Avoid
              </h2>
              <p className="text-gray-400 text-lg">
                Learn from others&apos; failures
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  mistake: "Overtrading",
                  why: "Taking every setup instead of waiting for high-probability ones. Quality over quantity.",
                  fix: "Set a maximum of 20-30 trades per day. Wait for A+ setups only."
                },
                {
                  mistake: "Moving Stop Losses",
                  why: "Moving stops further away to avoid getting stopped out. This turns small losses into big ones.",
                  fix: "Set your stop before entering. Accept it if hit. Never move it away from price."
                },
                {
                  mistake: "Revenge Trading",
                  why: "Taking aggressive trades after a loss to make back money. Emotional decisions = losses.",
                  fix: "After 3 consecutive losses, take a 30-minute break. Stick to daily loss limits."
                },
                {
                  mistake: "Too Much Leverage",
                  why: "Using 10-20x to make quick gains. Small moves liquidate you before stops trigger.",
                  fix: "Stick to 3-5x leverage. Capital preservation > quick gains."
                },
                {
                  mistake: "No Trading Journal",
                  why: "Not tracking trades means not learning from mistakes or identifying patterns.",
                  fix: "Log every trade: entry, exit, reason, outcome. Review weekly."
                },
                {
                  mistake: "Scalping in Low Volume",
                  why: "Wide spreads and slippage eat profits. Fills are unpredictable.",
                  fix: "Only scalp during high volume periods. Check bid/ask spread before entering."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{item.mistake}</h3>
                      <p className="text-gray-400 text-sm mb-2">{item.why}</p>
                      <div className="flex items-start gap-2">
                        <span className="text-green-400 font-medium text-sm">Fix:</span>
                        <span className="text-gray-300 text-sm">{item.fix}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/20 via-green-500/20 to-cyan-500/20 border border-cyan-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Ready to Start Scalping?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  Trade 24/7 with ultra-low fees. No pattern day trader rules. No waiting for market open.
                </p>

                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-2xl font-bold text-xl hover:from-cyan-400 hover:to-green-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Start Scalping on Hyperliquid
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
              <Link href="/blog/how-to-short-stocks" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors">
                <span className="text-red-400 text-xs font-medium">STRATEGY</span>
                <h4 className="text-white font-medium mt-1">How to Short Stocks</h4>
                <p className="text-gray-500 text-sm mt-1">Profit from falling prices</p>
              </Link>
              <Link href="/blog/best-equity-perps-day-trading" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors">
                <span className="text-blue-400 text-xs font-medium">TRADING</span>
                <h4 className="text-white font-medium mt-1">Best Platforms for Day Trading</h4>
                <p className="text-gray-500 text-sm mt-1">Platform comparison</p>
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
