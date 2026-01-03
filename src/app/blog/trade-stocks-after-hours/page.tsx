'use client';

import Link from 'next/link';
import { platforms } from '@/data/platforms';
import FAQSection from '@/components/FAQSection';

const faqs = [
  {
    question: "Can I trade stocks at 2am?",
    answer: "Yes! With equity perpetuals, you can trade stocks like NVDA, TSLA, and AAPL at any time - 2am, 4am, weekends, holidays. There are no market hour restrictions."
  },
  {
    question: "What's the difference between after-hours trading and equity perps?",
    answer: "Traditional after-hours trading (4pm-8pm) has low liquidity, wide spreads, and broker restrictions. Equity perps trade 24/7 with consistent liquidity and tight spreads around the clock."
  },
  {
    question: "Do I need a special account for after-hours trading?",
    answer: "For traditional after-hours trading, yes - you need broker approval. For equity perps, no special account needed. Just connect a wallet like Rabby and start trading instantly."
  },
  {
    question: "Is after-hours trading riskier?",
    answer: "Traditional after-hours trading can be riskier due to low liquidity and wide spreads. Equity perps maintain better liquidity 24/7, though prices may be less volatile when stock markets are closed."
  },
  {
    question: "Can I trade during earnings announcements after hours?",
    answer: "Yes! This is one of the biggest advantages. When NVDA reports earnings at 4:30pm, you can trade immediately on equity perps instead of waiting for the next market open."
  },
  {
    question: "What stocks can I trade after hours?",
    answer: "On equity perps platforms like Hyperliquid, you can trade 50+ stocks 24/7 including NVDA, TSLA, AAPL, MSFT, META, AMZN, GOOGL, AMD, COIN, PLTR, and more."
  },
];

export default function TradeStocksAfterHours() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Trade Stocks After Hours: Complete 24/7 Trading Guide",
    description: "Learn how to trade stocks after hours, on weekends, and holidays using equity perpetuals.",
    author: { "@type": "Organization", name: "Compare Equity Perps" },
    datePublished: "2026-01-01",
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
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Learn</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Trade Stocks After Hours</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                <span className="text-blue-400 text-sm font-medium">Trading Guide</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Trade Stocks
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
                  After Hours
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                The stock market closes at <span className="text-white font-semibold">4pm Eastern</span>. But with equity perps,
                you can trade <span className="text-cyan-400 font-semibold">NVDA, TSLA, AAPL</span> at midnight, on weekends,
                and during holidays. <span className="text-blue-400 font-semibold">24/7/365.</span>
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">24/7</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Always Open</div>
                    <div className="text-gray-500 text-sm">No market hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Instant Execution</div>
                    <div className="text-gray-500 text-sm">No waiting</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-400">50+</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Stocks Available</div>
                    <div className="text-gray-500 text-sm">Major US equities</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#solution"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-blue-400 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                >
                  See How It Works
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

        {/* THE PROBLEM */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                The <span className="text-red-400">Problem</span> With Traditional After-Hours Trading
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Most brokers offer &quot;extended hours&quot; but it&apos;s severely limited
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-red-400 mb-4">Traditional After-Hours Trading</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Only 4pm - 8pm ET (4 hours)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Wide bid-ask spreads (0.5-2%)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Low liquidity, partial fills</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Limit orders only (no market orders)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>No weekends or holidays</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Requires broker approval</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Why This Matters</h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    <strong className="text-white">Earnings announcements</strong> happen after 4pm.
                    By the time markets open, the move is already priced in.
                  </p>
                  <p>
                    <strong className="text-white">Global events</strong> don&apos;t wait for US market hours.
                    Fed decisions, geopolitical news, and overseas markets move while you sleep.
                  </p>
                  <p>
                    <strong className="text-white">Weekends</strong> are completely off-limits.
                    That&apos;s 2 out of every 7 days you can&apos;t react to news.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 text-center">
              <p className="text-yellow-400">
                <strong>The frustrating truth:</strong> Traditional after-hours trading exists, but it&apos;s barely usable.
                Wide spreads eat your profits and low liquidity means you can&apos;t get in or out at the price you want.
              </p>
            </div>
          </div>
        </section>

        {/* THE SOLUTION */}
        <section id="solution" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                The <span className="text-green-400">Solution</span>: Equity Perpetuals
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Trade stock price exposure 24/7 with real liquidity and tight spreads
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-3xl p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">1</span>
                      <span><strong className="text-white">Equity perps</strong> are contracts that track stock prices using oracle feeds</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">2</span>
                      <span>They trade on <strong className="text-white">decentralized exchanges</strong> that never close</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">3</span>
                      <span>You get the <strong className="text-white">same price exposure</strong> as owning the stock</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">4</span>
                      <span>Plus <strong className="text-white">leverage</strong> if you want it (up to 200x)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-500">Trading Hours Comparison</div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">NYSE/NASDAQ</span>
                        <span className="text-gray-500">6.5 hrs/day</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500/50 rounded-full" style={{ width: '27%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Extended Hours</span>
                        <span className="text-gray-500">10.5 hrs/day</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500/50 rounded-full" style={{ width: '44%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white font-semibold">Equity Perps</span>
                        <span className="text-green-400 font-semibold">24 hrs/day</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-500 text-sm mt-4">Including weekends and holidays</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Trade Anytime</h3>
                <p className="text-gray-400 text-sm">2am Tuesday, Sunday afternoon, Christmas morning - markets are always open</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Real Liquidity</h3>
                <p className="text-gray-400 text-sm">Billions in daily volume means tight spreads and instant fills</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">React to News</h3>
                <p className="text-gray-400 text-sm">Trade on earnings, Fed decisions, and global events in real-time</p>
              </div>
            </div>
          </div>
        </section>

        {/* AVAILABLE STOCKS */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                50+ Stocks, Trading <span className="text-cyan-400">Right Now</span>
              </h2>
              <p className="text-gray-400 text-lg">
                All the major US equities, available 24/7
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
              {['NVDA', 'TSLA', 'AAPL', 'MSFT', 'META', 'AMZN', 'GOOGL', 'AMD', 'COIN', 'PLTR', 'NFLX', 'MSTR'].map((ticker) => (
                <Link
                  key={ticker}
                  href={`/stocks/${ticker.toLowerCase()}`}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-colors"
                >
                  <div className="text-lg font-bold text-white">{ticker}</div>
                  <div className="text-xs text-green-400">24/7</div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/stocks" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium">
                View all available stocks
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
                <span className="text-green-400 font-medium">Start in 10 Minutes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How to Start Trading After Hours
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Get a Wallet</h3>
                  <p className="text-gray-400 mb-3">Download <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300">Rabby Wallet</a> browser extension. Create a new wallet in 2 minutes - no email or ID required.</p>
                  <Link href="/blog/wallet-setup-guide" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center gap-1">
                    Wallet setup guide <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fund with USDC</h3>
                  <p className="text-gray-400">Transfer USDC from Coinbase, Kraken, or Binance to your wallet. Use Arbitrum network for the lowest fees (~$0.10). Start with $50-100.</p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Connect & Trade</h3>
                  <p className="text-gray-400 mb-3">Go to <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-cyan-400 hover:text-cyan-300">Hyperliquid</a>, connect your wallet, deposit USDC, and start trading. It works at 2am, on weekends, whenever you want.</p>
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-cyan-400 transition-colors"
                  >
                    Open Hyperliquid
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT INFO */}
        <section className="py-16 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Things to Know</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">Price tracking:</strong> During stock market hours, perp prices track live stock prices. After hours, they may use the last closing price until markets reopen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">Leverage is optional:</strong> You can trade with 1x (no leverage) or use up to 200x. Start low (2-5x) until you understand the risks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">Not actual shares:</strong> You&apos;re trading price exposure, not buying stock. No dividends or voting rights.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-500/20 border border-blue-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Ready to Trade After Hours?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  Stop waiting for market open. Start trading stocks 24/7 in the next 10 minutes.
                </p>

                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-blue-400 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
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
              <Link href="/blog/what-are-equity-perpetuals" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
                <span className="text-cyan-400 text-xs font-medium">BEGINNER</span>
                <h4 className="text-white font-medium mt-1">What Are Equity Perps?</h4>
                <p className="text-gray-500 text-sm mt-1">Complete introduction</p>
              </Link>
              <Link href="/blog/trade-stocks-without-broker" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors">
                <span className="text-green-400 text-xs font-medium">GUIDE</span>
                <h4 className="text-white font-medium mt-1">Trade Without a Broker</h4>
                <p className="text-gray-500 text-sm mt-1">No brokerage needed</p>
              </Link>
              <Link href="/blog/wallet-setup-guide" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                <span className="text-purple-400 text-xs font-medium">SETUP</span>
                <h4 className="text-white font-medium mt-1">Wallet Setup Guide</h4>
                <p className="text-gray-500 text-sm mt-1">Get started in 10 min</p>
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
