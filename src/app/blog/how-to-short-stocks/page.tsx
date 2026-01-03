'use client';

import Link from 'next/link';
import { platforms } from '@/data/platforms';
import FAQSection from '@/components/FAQSection';

const faqs = [
  {
    question: "Can I short stocks without a margin account?",
    answer: "Yes! With equity perpetuals, you don't need a margin account. Just connect a wallet, deposit USDC, and click 'Sell' to open a short position. No broker approval required."
  },
  {
    question: "Do I have to borrow shares to short with equity perps?",
    answer: "No. Equity perps are synthetic contracts - there are no actual shares involved. You're trading price exposure, so there's nothing to borrow. Just click sell and you're short."
  },
  {
    question: "What happens if the stock goes up when I'm short?",
    answer: "You lose money. If you're short and the stock rises, your position loses value. With leverage, losses are amplified. If the stock rises enough to hit your liquidation price, your position is automatically closed."
  },
  {
    question: "Is there a time limit on short positions?",
    answer: "No. Unlike borrowed shares that can be recalled, equity perp shorts can be held indefinitely. The only ongoing cost is funding rates, which you pay or receive depending on market conditions."
  },
  {
    question: "Can I short stocks that are hard to borrow?",
    answer: "Yes! There's no borrowing involved, so 'hard to borrow' doesn't exist. You can short any available stock including meme stocks and heavily shorted names with no restrictions."
  },
  {
    question: "What's the maximum I can lose when shorting?",
    answer: "With equity perps, you can only lose your deposited margin (collateral). Unlike traditional shorting where losses can theoretically be unlimited, your position gets liquidated before losses exceed your margin."
  },
];

export default function HowToShortStocks() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Short Stocks Without a Broker: Easy Short Selling Guide",
    description: "Learn how to short stocks without a broker, margin account, or borrowing shares.",
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Learn</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">How to Short Stocks</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <span className="text-red-400 text-sm font-medium">Trading Guide</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                How to Short Stocks
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400">
                  Without a Broker
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Think a stock is overvalued? Bet against it. With equity perps, shorting is as simple as
                <span className="text-red-400 font-semibold"> clicking &quot;Sell&quot;</span>. No borrowing shares.
                No margin account. No broker approval.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Instant Shorts</div>
                    <div className="text-gray-500 text-sm">No borrowing</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-400">$0</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Borrow Fees</div>
                    <div className="text-gray-500 text-sm">None ever</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-400">50+</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Stocks</div>
                    <div className="text-gray-500 text-sm">Available to short</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl font-bold text-lg hover:from-red-400 hover:to-orange-400 transition-all shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105"
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
                  Start Shorting Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS SHORTING */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What is <span className="text-red-400">Short Selling</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Shorting lets you profit when a stock price falls
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">The Simple Explanation:</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">1.</span>
                      <span>You think <strong className="text-white">TSLA is overvalued</strong> at $400</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">2.</span>
                      <span>You open a <strong className="text-white">short position</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">3.</span>
                      <span>TSLA drops to <strong className="text-white">$350</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">4.</span>
                      <span>You profit <strong className="text-green-400">$50 per share</strong> (12.5%)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Your Short Position</div>
                    <div className="text-4xl font-black text-white mb-1">TSLA-PERP</div>
                    <div className="text-red-400 text-xl font-bold">Short 5x</div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Entry Price</span>
                        <span className="text-white">$400.00</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Current Price</span>
                        <span className="text-white">$350.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Profit</span>
                        <span className="text-green-400">+62.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRADITIONAL VS PERPS */}
        <section id="how-it-works" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Traditional Shorting vs <span className="text-green-400">Equity Perps</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Why traders are switching to perps for short selling
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
                  <h3 className="text-xl font-bold text-red-400">Traditional Short Selling</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Need margin account approval</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Must borrow shares from broker</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Pay daily borrow fees (can be 50%+ APR)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>&quot;Hard to borrow&quot; stocks unavailable</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Shares can be recalled anytime</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Theoretically unlimited losses</span>
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
                  <h3 className="text-xl font-bold text-green-400">Shorting with Equity Perps</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Just connect wallet</strong> — no account approval</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">No borrowing</strong> — it&apos;s synthetic</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Zero borrow fees</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Short any stock</strong> — no restrictions</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Hold forever</strong> — no recall risk</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Max loss = your margin</strong> (liquidation protects you)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">It&apos;s Really This Simple</h3>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-gray-800 rounded-xl px-6 py-4">
                  <div className="text-gray-400 text-sm">Going Long</div>
                  <div className="text-green-400 font-bold text-lg">Click &quot;Buy&quot;</div>
                </div>
                <div className="text-gray-600 text-2xl">=</div>
                <div className="bg-gray-800 rounded-xl px-6 py-4">
                  <div className="text-gray-400 text-sm">Going Short</div>
                  <div className="text-red-400 font-bold text-lg">Click &quot;Sell&quot;</div>
                </div>
              </div>
              <p className="text-gray-500 mt-4">No extra steps. No approvals. No waiting.</p>
            </div>
          </div>
        </section>

        {/* STOCKS TO SHORT */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Popular Stocks to <span className="text-red-400">Short</span>
              </h2>
              <p className="text-gray-400 text-lg">
                All available 24/7 with no borrow restrictions
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {[
                { ticker: 'TSLA', name: 'Tesla', note: 'High volatility' },
                { ticker: 'NVDA', name: 'Nvidia', note: 'AI hype plays' },
                { ticker: 'MSTR', name: 'MicroStrategy', note: 'BTC proxy' },
                { ticker: 'COIN', name: 'Coinbase', note: 'Market sentiment' },
                { ticker: 'META', name: 'Meta', note: 'Big tech' },
                { ticker: 'PLTR', name: 'Palantir', note: 'Govt contracts' },
                { ticker: 'AMD', name: 'AMD', note: 'Chip sector' },
                { ticker: 'HOOD', name: 'Robinhood', note: 'Fintech' },
              ].map((stock) => (
                <Link
                  key={stock.ticker}
                  href={`/stocks/${stock.ticker.toLowerCase()}`}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors group"
                >
                  <div className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{stock.ticker}</div>
                  <div className="text-sm text-gray-500">{stock.name}</div>
                  <div className="text-xs text-gray-600 mt-1">{stock.note}</div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/stocks" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium">
                View all 50+ shortable stocks
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* HOW TO START */}
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
                How to Start Short Selling
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Set Up a Digital Wallet</h3>
                  <p className="text-gray-400 mb-2">
                    A wallet is like a <strong className="text-white">digital bank account you control</strong> — no bank needed.
                    Download <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300">Rabby Wallet</a> (free browser extension, 2 minutes to set up).
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                    <span>🔐 You control it</span>
                    <span>🆓 Free</span>
                    <span>⚡ 2 min setup</span>
                    <span>🌍 Works globally</span>
                  </div>
                  <Link href="/blog/wallet-setup-guide" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center gap-1">
                    Step-by-step guide with video <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fund with USDC</h3>
                  <p className="text-gray-400">Send USDC from Coinbase, Kraken, or Binance to your wallet on Arbitrum network. This is your margin/collateral for shorting.</p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Open a Short Position</h3>
                  <p className="text-gray-400 mb-3">
                    Go to <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-cyan-400 hover:text-cyan-300">Hyperliquid</a>,
                    connect wallet, deposit USDC, find your stock (e.g., TSLA-PERP), and click <strong className="text-red-400">&quot;Sell&quot;</strong> to go short.
                  </p>
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold text-sm hover:bg-red-400 transition-colors"
                  >
                    Start Shorting
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RISKS */}
        <section className="py-16 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Short Selling Risks</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">Stocks can go up forever:</strong> While your profit is capped (stock can only go to $0), losses grow as the stock rises. Liquidation limits your max loss to your margin.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">Short squeezes:</strong> If a heavily shorted stock spikes, you can get liquidated quickly. Use appropriate position sizing and leverage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">Funding rates:</strong> When most traders are short, you may pay funding to longs. Check funding rates before opening positions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">Start with low leverage:</strong> 2-5x is plenty for beginners. High leverage on shorts can lead to fast liquidations on any bounce.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-red-500/20 via-orange-500/20 to-red-500/20 border border-red-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Ready to Short?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  Bet against overvalued stocks in minutes. No borrowing, no fees, no restrictions.
                </p>

                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl font-bold text-xl hover:from-red-400 hover:to-orange-400 transition-all shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105"
                >
                  Start Shorting on Hyperliquid
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
              <Link href="/blog/trade-stocks-after-hours" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors">
                <span className="text-blue-400 text-xs font-medium">GUIDE</span>
                <h4 className="text-white font-medium mt-1">Trade After Hours</h4>
                <p className="text-gray-500 text-sm mt-1">24/7 trading guide</p>
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
