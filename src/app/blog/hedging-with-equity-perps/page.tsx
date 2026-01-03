'use client';

import Link from 'next/link';
import { platforms } from '@/data/platforms';
import FAQSection from '@/components/FAQSection';

const faqs = [
  {
    question: "Can I hedge my 401k with equity perps?",
    answer: "Yes! If your 401k holds stocks like Apple, Nvidia, or S&P 500 index funds, you can hedge by opening short positions on the corresponding perps (AAPL-PERP, NVDA-PERP, SPY-PERP). Your 401k stays invested while the perp short protects against downside."
  },
  {
    question: "How much does hedging cost?",
    answer: "The main cost is funding rates, which vary based on market conditions. When more traders are long, shorts often receive funding (you get paid to hedge). When shorts dominate, you pay funding. Typical rates range from -0.01% to +0.05% per 8 hours. Check current rates before opening positions."
  },
  {
    question: "Should I hedge 100% of my portfolio?",
    answer: "Not necessarily. A full hedge (100%) eliminates both downside and upside - you're essentially flat. Most traders use partial hedges (25-75%) to reduce risk while maintaining some upside exposure. The right percentage depends on your risk tolerance and market outlook."
  },
  {
    question: "When should I remove my hedge?",
    answer: "Remove hedges when: the risk event passes (earnings released, election over), your market outlook improves, funding costs become expensive, or the market has already dropped significantly. Don't forget to close the hedge - an open hedge in a recovering market works against you."
  },
  {
    question: "Can I hedge individual stocks or just the whole market?",
    answer: "Both! You can hedge specific stocks you own (NVDA, TSLA, AAPL) with their corresponding perps, or hedge your entire portfolio with SPY-PERP for broad market protection. Specific hedges protect against company-specific risk; SPY hedges protect against market-wide drops."
  },
  {
    question: "What's the difference between hedging and shorting?",
    answer: "Intent and portfolio context. Shorting is a standalone bet that a stock will fall. Hedging uses a short position to protect existing long holdings. If you own NVDA stock and short NVDA-PERP, you're hedging. If you just short NVDA-PERP without owning NVDA, you're speculating."
  },
  {
    question: "Do I need to hedge during every market dip?",
    answer: "No. Hedging has costs (funding rates, complexity, potential missed upside). It's most valuable during specific risk events or periods of high uncertainty. Long-term investors often ride out normal volatility without hedging. Use hedges strategically, not constantly."
  },
  {
    question: "How do I calculate the right hedge size?",
    answer: "Match the notional value. If you own $10,000 of NVDA stock and want a 50% hedge, open a $5,000 short position in NVDA-PERP. The formula: Hedge Size = Portfolio Value x Hedge Percentage. With leverage, you only need to deposit margin equal to Position Size / Leverage."
  },
];

export default function HedgingWithEquityPerps() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Hedge Your Stock Portfolio with Equity Perps",
    description: "Learn how to protect your stock portfolio using equity perpetuals. Hedge your 401k, protect during earnings, and reduce risk during market uncertainty.",
    author: { "@type": "Organization", name: "Compare Equity Perps" },
    datePublished: "2026-01-04",
    dateModified: new Date().toISOString(),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Hedge Your Stock Portfolio with Equity Perps",
    description: "Step-by-step guide to protecting your investments using perpetual futures",
    step: [
      {
        "@type": "HowToStep",
        name: "Calculate Your Exposure",
        text: "Determine the total value of the stocks you want to hedge and decide on your hedge percentage (25%, 50%, 100%)."
      },
      {
        "@type": "HowToStep",
        name: "Set Up a Wallet",
        text: "Download a digital wallet like Rabby and fund it with USDC on Arbitrum."
      },
      {
        "@type": "HowToStep",
        name: "Open Short Position",
        text: "Connect to Hyperliquid, find the corresponding stock perp, and open a short position matching your desired hedge size."
      },
      {
        "@type": "HowToStep",
        name: "Monitor and Adjust",
        text: "Track your hedge, manage funding costs, and close when the risk event passes."
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <article className="min-h-screen">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Learn</Link>
              <span className="mx-2">/</span>
              <span className="text-teal-400">Hedging Guide</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-teal-400 text-sm font-medium">Risk Management Guide</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                How to Hedge Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400">
                  Stock Portfolio
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Protect your investments during uncertainty. With equity perps, you can hedge your 401k, protect during earnings,
                and sleep better at night
                <span className="text-teal-400 font-semibold"> without selling your stocks</span>.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Portfolio Protection</div>
                    <div className="text-gray-500 text-sm">Keep your stocks</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-emerald-400">24/7</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Always Available</div>
                    <div className="text-gray-500 text-sm">Hedge anytime</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Low Cost</div>
                    <div className="text-gray-500 text-sm">No options premium</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#what-is-hedging"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl font-bold text-lg hover:from-teal-400 hover:to-emerald-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105"
                >
                  Learn Hedging Basics
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
                  Start Hedging Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS HEDGING */}
        <section id="what-is-hedging" className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What is <span className="text-teal-400">Hedging</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Insurance for your investments - protect without selling
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">The Simple Explanation:</h3>
                  <p className="text-gray-300 mb-6">
                    Hedging means opening an opposite position to protect your existing investments.
                    If you own stocks and worry about a downturn, you open a short position.
                  </p>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-teal-400 text-xl">1.</span>
                      <span>You own <strong className="text-white">$10,000 of NVDA</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-400 text-xl">2.</span>
                      <span>Earnings coming up - you&apos;re worried</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-400 text-xl">3.</span>
                      <span>You <strong className="text-white">short $10k NVDA-PERP</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-400 text-xl">4.</span>
                      <span>If NVDA drops, short gains <strong className="text-teal-400">offset your losses</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Your Protected Position</div>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="bg-green-500/20 border border-green-500/30 rounded-xl px-4 py-3">
                        <div className="text-green-400 text-sm">Long Stock</div>
                        <div className="text-white font-bold">+$10,000</div>
                      </div>
                      <div className="text-gray-600 text-xl">+</div>
                      <div className="bg-red-500/20 border border-red-500/30 rounded-xl px-4 py-3">
                        <div className="text-red-400 text-sm">Short Perp</div>
                        <div className="text-white font-bold">-$10,000</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-sm text-gray-500 mb-2">If NVDA drops 10%:</div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Stock Loss</span>
                        <span className="text-red-400">-$1,000</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Perp Gain</span>
                        <span className="text-green-400">+$1,000</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold border-t border-gray-700 pt-2">
                        <span className="text-gray-400">Net Impact</span>
                        <span className="text-teal-400">$0 (Protected!)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                When to <span className="text-teal-400">Hedge</span> Your Portfolio
              </h2>
              <p className="text-gray-400 text-lg">
                Common scenarios where hedging makes sense
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Hedge 401k */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-teal-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hedge Your 401k</h3>
                <p className="text-gray-400 mb-4">
                  Your retirement account holds stocks you can&apos;t easily sell. Use equity perps to create synthetic protection without touching your 401k.
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4 text-sm">
                  <div className="text-gray-500 mb-1">Example:</div>
                  <div className="text-gray-300">401k has $50k in S&amp;P 500 fund → Short $25k SPY-PERP for 50% protection</div>
                </div>
              </div>

              {/* Earnings Protection */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Protect During Earnings</h3>
                <p className="text-gray-400 mb-4">
                  Earnings can swing stocks 10-20% overnight. Hedge before the announcement, remove after results are priced in.
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4 text-sm">
                  <div className="text-gray-500 mb-1">Example:</div>
                  <div className="text-gray-300">Own TSLA → Short TSLA-PERP 1 day before earnings → Close after earnings call</div>
                </div>
              </div>

              {/* Market Uncertainty */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Elections &amp; Fed Meetings</h3>
                <p className="text-gray-400 mb-4">
                  Major macro events create uncertainty. Hedge before elections, Fed announcements, or geopolitical tensions.
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4 text-sm">
                  <div className="text-gray-500 mb-1">Example:</div>
                  <div className="text-gray-300">Uncertain about Fed meeting → Short SPY-PERP for broad protection → Remove after decision</div>
                </div>
              </div>

              {/* Concentrated Positions */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lock In Gains</h3>
                <p className="text-gray-400 mb-4">
                  Big winner you don&apos;t want to sell (tax reasons, conviction)? Hedge to lock in gains while maintaining the position.
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4 text-sm">
                  <div className="text-gray-500 mb-1">Example:</div>
                  <div className="text-gray-300">NVDA up 200% this year → Hedge 50% to protect gains → Avoid short-term cap gains</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALCULATE HEDGE SIZE */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How to Calculate Your <span className="text-teal-400">Hedge Size</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Delta hedging basics - matching your exposure
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">The Basic Formula</h3>

              <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <div className="text-teal-400 font-mono text-lg mb-2">Hedge Size = Portfolio Value x Hedge Percentage</div>
                  <div className="text-gray-400 text-sm">Then: Required Margin = Hedge Size / Leverage</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="text-sm text-gray-500 mb-2">25% Hedge</div>
                  <div className="text-2xl font-bold text-white mb-2">Conservative</div>
                  <p className="text-gray-400 text-sm">Reduces volatility while keeping most upside. Good for minor concerns or long-term positions.</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-teal-500/30">
                  <div className="text-sm text-teal-400 mb-2">50% Hedge</div>
                  <div className="text-2xl font-bold text-white mb-2">Balanced</div>
                  <p className="text-gray-400 text-sm">Most common choice. Cuts risk in half while maintaining meaningful exposure. Best for earnings plays.</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="text-sm text-gray-500 mb-2">100% Hedge</div>
                  <div className="text-2xl font-bold text-white mb-2">Full Protection</div>
                  <p className="text-gray-400 text-sm">Eliminates both upside and downside. Essentially goes flat. Only for extreme uncertainty.</p>
                </div>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Example: Hedging $10,000 of NVDA</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400">Your NVDA Holdings</span>
                  <span className="text-white font-bold">$10,000</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400">Desired Hedge %</span>
                  <span className="text-white font-bold">50%</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400">Short Position Needed</span>
                  <span className="text-teal-400 font-bold">$5,000 NVDA-PERP</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400">Leverage Used</span>
                  <span className="text-white font-bold">5x</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-400">Margin Required</span>
                  <span className="text-emerald-400 font-bold">$1,000 USDC</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                <div className="text-sm text-gray-400">
                  <strong className="text-white">Result:</strong> If NVDA drops 10%, you lose $1,000 on stock but gain ~$500 on your perp short.
                  Your net loss is only $500 instead of $1,000 - that&apos;s 50% protection.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTIAL VS FULL HEDGES */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Partial Hedges vs <span className="text-teal-400">Full Hedges</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Finding the right protection level for your situation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-teal-500/5 border border-teal-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-teal-400">Partial Hedges (25-75%)</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduces risk while <strong className="text-white">keeping upside</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Lower cost (smaller position = less funding)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Most common choice</strong> for active traders</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Good for earnings, uncertain periods</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-teal-500/10 rounded-xl">
                  <div className="text-sm text-gray-400">
                    <strong className="text-teal-400">Best for:</strong> When you&apos;re concerned but still bullish long-term. You want protection, not neutralization.
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-300">Full Hedges (100%)</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="text-gray-600 mt-0.5">-</span>
                    <span>Eliminates <strong className="text-gray-300">both</strong> upside and downside</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="text-gray-600 mt-0.5">-</span>
                    <span>Higher funding costs (larger position)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="text-gray-600 mt-0.5">-</span>
                    <span>Essentially goes <strong className="text-gray-300">flat/neutral</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="text-gray-600 mt-0.5">-</span>
                    <span>Often better to just sell at this point</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                  <div className="text-sm text-gray-500">
                    <strong className="text-gray-400">Best for:</strong> Extreme uncertainty when you can&apos;t or won&apos;t sell (tax lots, lockup periods, legal restrictions).
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">The Sweet Spot</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Most traders find <strong className="text-teal-400">50% hedges</strong> optimal. You cut your risk in half while still participating in any rally.
                If you&apos;re wrong about the downturn, you only miss half the gains - not all of them.
              </p>
            </div>
          </div>
        </section>

        {/* COST OF HEDGING */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                The Cost of <span className="text-emerald-400">Hedging</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Funding rates vs peace of mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Funding Rate Costs</h3>
                <p className="text-gray-400 mb-4">
                  The main cost of holding a perp position is funding rates - periodic payments between longs and shorts.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-500">Typical Range</span>
                    <span className="text-white">-0.01% to +0.05% / 8hrs</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-500">Annualized (low)</span>
                    <span className="text-green-400">-10% (you get paid!)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-500">Annualized (high)</span>
                    <span className="text-yellow-400">+55%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500">During bull markets</span>
                    <span className="text-teal-400">Shorts often receive funding</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">What You Get For It</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Sleep at night</strong> - no 3am price-checking</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">No panic selling</strong> - protection is in place</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Hold through volatility</strong> - stay invested</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Keep tax lots</strong> - no realized gains</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                  <div className="text-sm text-emerald-400">
                    In bull markets, shorts often <strong>receive</strong> funding - you get paid to hedge!
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Compare to Alternatives</h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-2">25-50%</div>
                  <div className="text-gray-500 text-sm">Put option premium</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">15-30%</div>
                  <div className="text-gray-500 text-sm">Short stock borrow fee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-400 mb-2">0-10%</div>
                  <div className="text-gray-500 text-sm">Equity perp funding</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPY HEDGING */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Broad Market Protection with <span className="text-teal-400">SPY-PERP</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Hedge your entire portfolio with one trade
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">When to Use SPY-PERP</h3>
                  <p className="text-gray-300 mb-6">
                    Instead of hedging each stock individually, short SPY-PERP for broad market protection. Perfect for diversified portfolios.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Protect against market-wide selloffs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>One position covers multiple stocks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ideal for index fund investors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Simple to calculate and manage</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-4">Example: Diversified Portfolio Hedge</div>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400">Total Portfolio</span>
                        <span className="text-white font-bold">$100,000</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400">AAPL</span>
                        <span className="text-gray-300">$25,000</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400">NVDA</span>
                        <span className="text-gray-300">$25,000</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400">MSFT</span>
                        <span className="text-gray-300">$25,000</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400">GOOGL</span>
                        <span className="text-gray-300">$25,000</span>
                      </div>
                      <div className="flex justify-between py-2 pt-2 border-t-2 border-teal-500/50">
                        <span className="text-teal-400 font-medium">50% Hedge (SPY-PERP)</span>
                        <span className="text-teal-400 font-bold">Short $50,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-yellow-400 mb-3">Beta Consideration</h4>
              <p className="text-gray-300 text-sm">
                If your portfolio is more volatile than the market (beta &gt; 1), you may need a larger SPY hedge.
                Tech-heavy portfolios often have beta of 1.2-1.5, meaning a $100k portfolio might need a $120k-$150k SPY hedge for full protection.
              </p>
            </div>
          </div>
        </section>

        {/* WHEN TO REMOVE HEDGES */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                When to <span className="text-emerald-400">Remove</span> Your Hedge
              </h2>
              <p className="text-gray-400 text-lg">
                Don&apos;t forget to close - an open hedge works against you in rallies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Risk Event Passes</h3>
                <p className="text-gray-400 text-sm">
                  Earnings released, election over, Fed decision announced. The uncertainty is resolved.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Outlook Improves</h3>
                <p className="text-gray-400 text-sm">
                  Your thesis changes. You&apos;re now bullish and want full upside exposure again.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Funding Gets Expensive</h3>
                <p className="text-gray-400 text-sm">
                  Rates spike and holding costs eat into your portfolio. Re-evaluate if protection is worth it.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Market Already Dropped</h3>
                <p className="text-gray-400 text-sm">
                  If the drop you feared already happened, consider closing the hedge to participate in recovery.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-2">Warning: Forgotten Hedges</h4>
                  <p className="text-gray-300 text-sm">
                    A common mistake is forgetting to close your hedge. If the market rallies while your short is open, you&apos;re losing money on the hedge while your stocks gain.
                    <strong className="text-white"> Set reminders to review and close hedges after risk events.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO START */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-teal-400 font-medium">Start in 10 Minutes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How to Start Hedging
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Calculate Your Exposure</h3>
                  <p className="text-gray-400 mb-2">
                    Add up the value of stocks you want to hedge. Decide on your hedge percentage (we recommend starting with 50%).
                  </p>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-sm text-gray-300">
                    <strong className="text-teal-400">Example:</strong> $20,000 in NVDA × 50% = $10,000 hedge needed
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Set Up a Digital Wallet</h3>
                  <p className="text-gray-400 mb-2">
                    Download <a href="https://rabby.io" target="_blank" rel="noopener" className="text-teal-400 hover:text-teal-300">Rabby Wallet</a> (free browser extension).
                    Fund it with USDC on Arbitrum network.
                  </p>
                  <Link href="/blog/wallet-setup-guide" className="text-teal-400 hover:text-teal-300 text-sm font-medium inline-flex items-center gap-1">
                    Step-by-step wallet guide <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Open Your Hedge Position</h3>
                  <p className="text-gray-400 mb-3">
                    Go to <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-teal-400 hover:text-teal-300">Hyperliquid</a>,
                    connect wallet, deposit USDC, find your stock (e.g., NVDA-PERP), and click <strong className="text-red-400">&quot;Sell&quot;</strong> to open your short hedge.
                  </p>
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-400 transition-colors"
                  >
                    Start Hedging
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Monitor and Close</h3>
                  <p className="text-gray-400">
                    Keep an eye on funding rates and your hedge. When the risk event passes or your outlook changes,
                    close the position by clicking &quot;Buy&quot; to cover your short.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RISKS */}
        <section className="py-16 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Hedging Risks to Consider</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">*</span>
                  <span><strong className="text-white">Missed upside:</strong> If the market rallies, your hedge loses money. Partial hedges mitigate this but don&apos;t eliminate it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">*</span>
                  <span><strong className="text-white">Funding costs:</strong> Holding short positions costs money when funding is positive. Check rates before opening and monitor ongoing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">*</span>
                  <span><strong className="text-white">Basis risk:</strong> SPY-PERP won&apos;t perfectly track your individual stocks. Company-specific news can cause divergence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">*</span>
                  <span><strong className="text-white">Liquidation risk:</strong> If using leverage and the market rallies hard, your hedge position could be liquidated. Use appropriate margin.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-teal-500/20 via-emerald-500/20 to-teal-500/20 border border-teal-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Protect Your Portfolio
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  Sleep better during market uncertainty. Hedge your stocks without selling them.
                </p>

                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl font-bold text-xl hover:from-teal-400 hover:to-emerald-400 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105"
                >
                  Start Hedging on Hyperliquid
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                <span className="text-red-400 text-xs font-medium">TRADING</span>
                <h4 className="text-white font-medium mt-1">How to Short Stocks</h4>
                <p className="text-gray-500 text-sm mt-1">Short selling guide</p>
              </Link>
              <Link href="/blog/what-are-equity-perpetuals" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
                <span className="text-cyan-400 text-xs font-medium">BEGINNER</span>
                <h4 className="text-white font-medium mt-1">What Are Equity Perps?</h4>
                <p className="text-gray-500 text-sm mt-1">Complete introduction</p>
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
