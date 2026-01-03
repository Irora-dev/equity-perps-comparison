'use client';

import Link from 'next/link';
import { platforms } from '@/data/platforms';
import FAQSection from '@/components/FAQSection';

const faqs = [
  {
    question: "Can I trade stocks immediately after earnings are released?",
    answer: "Yes! This is one of the biggest advantages of equity perps. When NVDA reports earnings at 4:30pm, you can trade the reaction instantly on Hyperliquid instead of waiting until 9:30am the next day."
  },
  {
    question: "How do I know when a company reports earnings?",
    answer: "Use free earnings calendars like Earnings Whispers, Yahoo Finance, or TradingView. They show the date, time (before/after market), and analyst estimates. Set alerts for stocks you want to trade."
  },
  {
    question: "What leverage should I use for earnings trades?",
    answer: "Keep it low - 2x to 5x maximum. Earnings moves can be 10-20% in either direction, so even small leverage amplifies gains AND losses significantly. Many experienced traders use 1-3x for earnings plays."
  },
  {
    question: "Do perp prices move during after-hours earnings?",
    answer: "Yes! Unlike traditional brokers that reference closing prices, equity perps on platforms like Hyperliquid can trade and price discover 24/7, allowing you to capture the immediate post-earnings move."
  },
  {
    question: "Should I hold through earnings or trade the reaction?",
    answer: "Both strategies work. Pre-earnings plays are risky because the move direction is uncertain. Many traders prefer waiting for the report, then trading the reaction once direction is clear."
  },
  {
    question: "What if I'm wrong about the earnings direction?",
    answer: "Use stop losses! Set them before the announcement. With perps, your maximum loss is your deposited margin - you can't lose more than you put in. But always use stops to limit losses before liquidation."
  },
  {
    question: "Which stocks have the biggest earnings moves?",
    answer: "Tech stocks typically have the largest post-earnings moves. NVDA, TSLA, META, and NFLX regularly move 5-15% on earnings. Meme stocks like GME can move even more."
  },
  {
    question: "Is there enough liquidity to trade after hours?",
    answer: "On Hyperliquid, yes. Major stocks like NVDA, TSLA, and META maintain good liquidity 24/7. Spreads may widen slightly after hours but are still much better than traditional after-hours trading."
  },
];

export default function TradeEarningsAnnouncements() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Trade Earnings Announcements with Equity Perps",
    description: "Learn how to trade earnings announcements 24/7 using equity perpetuals. React to after-hours moves instantly.",
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Learn</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-400">Trade Earnings Announcements</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-orange-400 text-sm font-medium">Advanced Strategy</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Trade Earnings
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400">
                  Announcements
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                NVDA drops earnings at 4:30pm. With traditional brokers, you wait until tomorrow.
                With equity perps, you <span className="text-orange-400 font-semibold">trade the move instantly</span>.
                React to the biggest volatility events <span className="text-yellow-400 font-semibold">in real-time</span>.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Big Moves</div>
                    <div className="text-gray-500 text-sm">5-20% swings</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Instant Access</div>
                    <div className="text-gray-500 text-sm">Trade after hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-400">24/7</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Always Ready</div>
                    <div className="text-gray-500 text-sm">Never miss a move</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#why-earnings"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-orange-400 hover:to-yellow-400 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
                >
                  Learn the Strategy
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

        {/* WHY EARNINGS ARE EXCITING */}
        <section id="why-earnings" className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Earnings Are the <span className="text-orange-400">Biggest Opportunities</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Four times a year, every stock has its most volatile day
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Massive Volatility</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>NVDA has moved <strong className="text-white">10-15%</strong> on recent earnings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>TSLA regularly swings <strong className="text-white">8-12%</strong> post-earnings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>META once dropped <strong className="text-white">26%</strong> overnight (Feb 2022)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>These moves happen <strong className="text-white">in minutes</strong>, not days</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Predictable Catalysts</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Scheduled dates</strong> - you know exactly when earnings drop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Clear expectations</strong> - analyst estimates are public</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Guaranteed volatility</strong> - something always happens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">4x per year</strong> - regular opportunities for every stock</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Historical Earnings Moves (Single Day)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-black text-white">NVDA</div>
                  <div className="text-green-400 font-bold">+16.4%</div>
                  <div className="text-gray-500 text-sm">Q2 2024</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-black text-white">META</div>
                  <div className="text-green-400 font-bold">+20.3%</div>
                  <div className="text-gray-500 text-sm">Q4 2023</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-black text-white">TSLA</div>
                  <div className="text-red-400 font-bold">-12.1%</div>
                  <div className="text-gray-500 text-sm">Q3 2024</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                  <div className="text-2xl font-black text-white">NFLX</div>
                  <div className="text-green-400 font-bold">+14.8%</div>
                  <div className="text-gray-500 text-sm">Q1 2024</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE PERPS ADVANTAGE */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                The <span className="text-yellow-400">Equity Perps Advantage</span> for Earnings
              </h2>
              <p className="text-gray-400 text-lg">
                Why traders are switching from traditional brokers for earnings plays
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
                  <h3 className="text-xl font-bold text-red-400">Traditional Broker</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Earnings at 4:30pm = wait until 9:30am next day</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Move is priced in by open, opportunity gone</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>After-hours trading has terrible liquidity</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Wide spreads eat your profits</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Gap up/down at open = instant loss</span>
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
                  <h3 className="text-xl font-bold text-green-400">Equity Perps</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Trade immediately</strong> when earnings drop</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Capture the move</strong> as it happens</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">24/7 liquidity</strong> on Hyperliquid</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Tight spreads</strong> even after hours</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Go long OR short</strong> based on reaction</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">The Real Advantage</h3>
              <p className="text-gray-300 text-lg">
                With equity perps, you can <strong className="text-orange-400">see the earnings, read the reaction</strong>, and
                <strong className="text-yellow-400"> then decide</strong> to go long or short. No more guessing before the report.
              </p>
            </div>
          </div>
        </section>

        {/* TRADING STRATEGIES */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Earnings Trading <span className="text-orange-400">Strategies</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Two approaches: pre-earnings and post-earnings plays
              </p>
            </div>

            <div className="space-y-8">
              {/* Pre-Earnings Strategy */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <span className="text-2xl font-black text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Pre-Earnings: Straddle-Like Position</h3>
                    <p className="text-gray-400">High risk, high reward - profit from the move regardless of direction</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">The Strategy:</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400">1.</span>
                        <span>Open a small long position before earnings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400">2.</span>
                        <span>Set a tight stop loss below support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400">3.</span>
                        <span>If it gaps up, ride the momentum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400">4.</span>
                        <span>If it gaps down, stop loss closes you out</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400">5.</span>
                        <span>Alternative: open both long AND short with tight stops</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <h4 className="text-yellow-400 font-semibold mb-3">Warning:</h4>
                    <p className="text-gray-400 text-sm">
                      Pre-earnings plays are <strong className="text-white">pure gambling</strong>. Even &quot;good&quot; earnings can cause drops
                      (sell the news), and &quot;bad&quot; earnings can cause rallies (low expectations). Only risk what you can lose 100%.
                    </p>
                  </div>
                </div>
              </div>

              {/* Post-Earnings Strategy */}
              <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-2xl font-black text-gray-900">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Post-Earnings: Reaction Trading</h3>
                    <p className="text-green-400">Recommended - trade with information, not guessing</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">The Strategy:</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">1.</span>
                        <span><strong className="text-white">Wait</strong> for earnings to be released</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">2.</span>
                        <span><strong className="text-white">Read</strong> the report and initial reaction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">3.</span>
                        <span><strong className="text-white">Identify</strong> direction: strong beat = long, big miss = short</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">4.</span>
                        <span><strong className="text-white">Enter</strong> the trade on Hyperliquid immediately</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400">5.</span>
                        <span><strong className="text-white">Set stops</strong> and take profit levels</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <h4 className="text-green-400 font-semibold mb-3">Why This Works:</h4>
                    <p className="text-gray-300 text-sm">
                      Post-earnings moves often <strong className="text-white">continue for hours</strong>. A stock that gaps up 10%
                      after hours might climb another 5-10% by market open. You catch the trend, not guess the direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEST STOCKS FOR EARNINGS */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Best Stocks for <span className="text-orange-400">Earnings Plays</span>
              </h2>
              <p className="text-gray-400 text-lg">
                These stocks consistently deliver the biggest post-earnings moves
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              {[
                { ticker: 'NVDA', name: 'Nvidia', avgMove: '12%', note: 'AI earnings king' },
                { ticker: 'TSLA', name: 'Tesla', avgMove: '9%', note: 'Always volatile' },
                { ticker: 'META', name: 'Meta', avgMove: '8%', note: 'Big swings' },
                { ticker: 'AAPL', name: 'Apple', avgMove: '5%', note: 'Mega cap mover' },
                { ticker: 'NFLX', name: 'Netflix', avgMove: '11%', note: 'Sub numbers matter' },
              ].map((stock) => (
                <Link
                  key={stock.ticker}
                  href={`/stocks/${stock.ticker.toLowerCase()}`}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-orange-500/50 transition-colors group text-center"
                >
                  <div className="text-2xl font-black text-white group-hover:text-orange-400 transition-colors">{stock.ticker}</div>
                  <div className="text-sm text-gray-500">{stock.name}</div>
                  <div className="text-orange-400 font-bold mt-2">~{stock.avgMove}</div>
                  <div className="text-xs text-gray-600">{stock.note}</div>
                </Link>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Also Great for Earnings:</h3>
                <div className="flex flex-wrap gap-2">
                  {['AMD', 'GOOGL', 'AMZN', 'COIN', 'MSTR', 'PLTR'].map((ticker) => (
                    <Link
                      key={ticker}
                      href={`/stocks/${ticker.toLowerCase()}`}
                      className="px-3 py-1 bg-gray-800 rounded-lg text-white text-sm hover:bg-gray-700 transition-colors"
                    >
                      {ticker}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">When They Report:</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><strong className="text-white">After Hours (4pm-5pm):</strong> NVDA, META, AMZN, NFLX</li>
                  <li><strong className="text-white">Before Market (6am-9am):</strong> Some financials</li>
                  <li className="text-orange-400">Always verify exact time on earnings calendar!</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RISK MANAGEMENT */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Risk Management for <span className="text-yellow-400">Earnings Trades</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Earnings are exciting but dangerous - protect yourself
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Golden Rules for Earnings</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="text-yellow-400 font-bold">1.</span>
                      <span><strong className="text-white">Lower your leverage.</strong> Use 2-5x max, not 10x+. A 15% move with 5x = 75% gain/loss.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="text-yellow-400 font-bold">2.</span>
                      <span><strong className="text-white">Use wider stops.</strong> Normal stops get blown through. Use 5-10% stops minimum.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="text-yellow-400 font-bold">3.</span>
                      <span><strong className="text-white">Size down.</strong> Risk 1-2% of account per earnings trade, not 10%.</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="text-yellow-400 font-bold">4.</span>
                      <span><strong className="text-white">Know the time.</strong> Is it 4:00pm or 4:30pm? Before or after market? Set alarms.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="text-yellow-400 font-bold">5.</span>
                      <span><strong className="text-white">Have a plan.</strong> Know your entry, stop, and target BEFORE earnings drop.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="text-yellow-400 font-bold">6.</span>
                      <span><strong className="text-white">Accept you might be wrong.</strong> Even &quot;obvious&quot; earnings plays fail 40%+ of the time.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">Common Mistakes to Avoid</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span><strong className="text-white">Over-leveraging</strong> - 20x on earnings is asking to get liquidated</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span><strong className="text-white">Not knowing report time</strong> - checking at 5pm when it dropped at 4pm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span><strong className="text-white">Chasing after huge moves</strong> - entering after 15% move often reverses</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span><strong className="text-white">Ignoring guidance</strong> - the call matters as much as the numbers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span><strong className="text-white">No stop loss</strong> - hoping it recovers while it keeps dropping</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span><strong className="text-white">Trading every earnings</strong> - be selective, not gambling addicted</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AFTER-HOURS LIQUIDITY */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                After-Hours Liquidity on <span className="text-cyan-400">Hyperliquid</span>
              </h2>
              <p className="text-gray-400 text-lg">
                The key to actually executing your earnings trades
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Why Hyperliquid Works for Earnings</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">$4B+ daily volume</strong> - massive liquidity pool</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">24/7 order book</strong> - not just reference prices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Market makers active</strong> after hours too</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Real price discovery</strong> during earnings events</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-500">Major Stock Liquidity (24/7)</div>
                  </div>
                  <div className="space-y-3">
                    {['NVDA', 'TSLA', 'AAPL', 'META'].map((ticker) => (
                      <div key={ticker} className="flex justify-between items-center">
                        <span className="text-white font-semibold">{ticker}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-cyan-500 to-green-500 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-green-400 text-sm">High</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Tips for After-Hours Execution</h3>
              <ul className="grid sm:grid-cols-2 gap-4 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">1.</span>
                  <span>Use <strong className="text-white">limit orders</strong> to control entry price</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">2.</span>
                  <span>Check <strong className="text-white">spread</strong> before entering (tighter = better)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">3.</span>
                  <span>Stick to <strong className="text-white">major stocks</strong> for best liquidity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">4.</span>
                  <span>Avoid <strong className="text-white">huge positions</strong> that might slip</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINDING EARNINGS */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Finding Earnings <span className="text-orange-400">Dates & Expectations</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Free tools to track upcoming earnings opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Best Earnings Calendars</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-orange-400 font-bold">1.</span>
                    <div>
                      <strong className="text-white">Earnings Whispers</strong>
                      <p className="text-gray-500 text-sm">Best for timing and expectations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-orange-400 font-bold">2.</span>
                    <div>
                      <strong className="text-white">Yahoo Finance</strong>
                      <p className="text-gray-500 text-sm">Free, includes analyst estimates</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-orange-400 font-bold">3.</span>
                    <div>
                      <strong className="text-white">TradingView</strong>
                      <p className="text-gray-500 text-sm">Integrated with charts</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-orange-400 font-bold">4.</span>
                    <div>
                      <strong className="text-white">Nasdaq Calendar</strong>
                      <p className="text-gray-500 text-sm">Official source</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">What to Check Before Earnings</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Report date</strong> - confirm with multiple sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Report time</strong> - BMO (before) or AMC (after)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">EPS estimate</strong> - what analysts expect</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Revenue estimate</strong> - sometimes matters more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Historical moves</strong> - what does it usually do?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO GET STARTED */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-400 font-medium">Ready in 10 Minutes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Start Trading Earnings Today
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Set Up Your Wallet</h3>
                  <p className="text-gray-400 mb-2">
                    Download <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300">Rabby Wallet</a> (free, 2 minutes).
                    This is your key to trading without a broker.
                  </p>
                  <Link href="/blog/wallet-setup-guide" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center gap-1">
                    Complete wallet guide <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fund with USDC</h3>
                  <p className="text-gray-400">Send USDC from Coinbase or Binance to your wallet. Start with $100-500 for earnings plays. Use Arbitrum network for low fees.</p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Connect to Hyperliquid</h3>
                  <p className="text-gray-400 mb-3">
                    Go to <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-cyan-400 hover:text-cyan-300">Hyperliquid</a>,
                    connect wallet, deposit USDC. Now you can trade earnings reactions 24/7.
                  </p>
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-orange-400 transition-colors"
                  >
                    Open Hyperliquid
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Find Next Earnings</h3>
                  <p className="text-gray-400">Check earnings calendars for upcoming reports. Set alerts. When earnings drop, you&apos;re ready to trade immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-orange-500/20 via-yellow-500/20 to-orange-500/20 border border-orange-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Next Earnings Season is Coming
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  Don&apos;t miss the biggest moves of the quarter. Trade earnings reactions instantly, 24/7.
                </p>

                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-orange-400 hover:to-yellow-400 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
                >
                  Start Trading on Hyperliquid
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
              <Link href="/blog/trade-stocks-after-hours" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors">
                <span className="text-blue-400 text-xs font-medium">GUIDE</span>
                <h4 className="text-white font-medium mt-1">Trade After Hours</h4>
                <p className="text-gray-500 text-sm mt-1">24/7 trading explained</p>
              </Link>
              <Link href="/blog/how-to-short-stocks" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors">
                <span className="text-red-400 text-xs font-medium">STRATEGY</span>
                <h4 className="text-white font-medium mt-1">How to Short Stocks</h4>
                <p className="text-gray-500 text-sm mt-1">Bet against earnings misses</p>
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
