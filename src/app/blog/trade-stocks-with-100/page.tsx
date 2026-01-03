'use client';

import Link from 'next/link';
import { platforms } from '@/data/platforms';
import FAQSection from '@/components/FAQSection';

const faqs = [
  {
    question: "Can I really start trading stocks with just $100?",
    answer: "Yes! With equity perpetuals, you can start with as little as $50-100. Using leverage, $100 can control $500-$1,000+ of stock exposure. This is far more capital-efficient than buying actual shares."
  },
  {
    question: "Is $100 enough to make meaningful profits?",
    answer: "With leverage, yes. If you use 5x leverage, your $100 controls $500 of stock. A 10% stock move becomes a 50% return ($50 profit). Without leverage, $100 in stocks only makes $10 on a 10% move."
  },
  {
    question: "What's the minimum I can deposit?",
    answer: "Most platforms have no minimum deposit. You can technically deposit $10, though we recommend $50-100 minimum to have enough margin buffer and not get liquidated on small price moves."
  },
  {
    question: "Should I use maximum leverage with a small account?",
    answer: "No! This is how most small accounts blow up. Start with 2-5x leverage maximum. Higher leverage means you get liquidated on smaller moves. Capital preservation is more important than big gains."
  },
  {
    question: "How do I avoid losing my $100 quickly?",
    answer: "Use low leverage (2-5x), set stop losses, don't risk more than 10% of your account on any single trade, and avoid trading during high volatility events like earnings until you're experienced."
  },
  {
    question: "Can I grow a $100 account to $1,000?",
    answer: "It's possible but requires discipline, risk management, and time. Focus on consistency over home runs. Growing 5% per week (realistic with good trades) would take about 50 weeks to 10x your account."
  },
];

export default function TradeStocksWith100() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Trade Stocks With $100: Small Account Trading Guide",
    description: "Learn how to trade stocks with just $100 using leverage and equity perpetuals.",
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Learn</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Trade With $100</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <span className="text-green-400 text-sm font-medium">Small Account Guide</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Trade Stocks With
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-400">
                  Just $100
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                You don&apos;t need thousands to trade stocks. With
                <span className="text-green-400 font-semibold"> leverage</span>, your $100 can control
                <span className="text-white font-semibold"> $1,000+ of stock exposure</span>.
                Trade NVDA, TSLA, and AAPL like the big players.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-green-400">$50</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Min to Start</div>
                    <div className="text-gray-500 text-sm">No minimum really</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-cyan-400">10x</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Leverage</div>
                    <div className="text-gray-500 text-sm">$100 → $1,000</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-400">50+</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Stocks</div>
                    <div className="text-gray-500 text-sm">All accessible</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#math"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-green-400 hover:to-emerald-400 transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
                >
                  See the Math
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
                  Start With $100
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
                The <span className="text-red-400">Problem</span> With Traditional Stock Trading
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                When you only have $100, traditional investing doesn&apos;t make sense
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">$100 in Traditional Stocks</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-500 mb-2">$100</div>
                  <div className="text-gray-400">Your Capital</div>
                </div>
                <div className="text-center flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">$10</div>
                  <div className="text-gray-400">Profit on 10% move</div>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-6">
                After waiting weeks or months, a 10% gain nets you just $10. That&apos;s barely worth the time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                <h4 className="text-red-400 font-semibold mb-3">The Small Account Trap</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Can&apos;t afford expensive stocks (NVDA at $140/share)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Commissions eat into small gains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Can&apos;t diversify meaningfully</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Pattern day trader rules block active trading</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">The Slow Growth Reality</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>10% annual return = $10/year on $100</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>Takes 7 years to double at 10% annual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>You need capital to make capital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>Small accounts stay small</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* THE SOLUTION - THE MATH */}
        <section id="math" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                The <span className="text-green-400">Power</span> of Leverage
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                With equity perpetuals, $100 can do what $1,000 does in traditional markets
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Same $100, Different Results</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800">
                  <div className="text-center mb-6">
                    <div className="text-gray-500 text-sm mb-2">Traditional Stocks</div>
                    <div className="text-3xl font-bold text-white">1x (No Leverage)</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Your Capital</span>
                      <span className="text-white">$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stock Exposure</span>
                      <span className="text-white">$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stock moves 5%</span>
                      <span className="text-green-400">+$5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Your Return</span>
                      <span className="text-green-400">+5%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-2xl p-6 border border-green-500/30">
                  <div className="text-center mb-6">
                    <div className="text-green-400 text-sm mb-2">Equity Perpetuals</div>
                    <div className="text-3xl font-bold text-white">10x Leverage</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Your Capital</span>
                      <span className="text-white">$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stock Exposure</span>
                      <span className="text-green-400 font-bold">$1,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stock moves 5%</span>
                      <span className="text-green-400 font-bold">+$50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Your Return</span>
                      <span className="text-green-400 font-bold">+50%</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-400 mt-8">
                Same $100. Same 5% stock move. But <strong className="text-green-400">10x the profit.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-green-400 mb-2">2x</div>
                <div className="text-white font-semibold mb-1">Conservative</div>
                <div className="text-gray-500 text-sm">$100 → $200 exposure</div>
                <div className="text-gray-600 text-xs mt-2">Good for beginners</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">5x</div>
                <div className="text-white font-semibold mb-1">Moderate</div>
                <div className="text-gray-500 text-sm">$100 → $500 exposure</div>
                <div className="text-gray-600 text-xs mt-2">Balanced risk/reward</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-purple-400 mb-2">10x</div>
                <div className="text-white font-semibold mb-1">Aggressive</div>
                <div className="text-gray-500 text-sm">$100 → $1,000 exposure</div>
                <div className="text-gray-600 text-xs mt-2">Higher risk, higher reward</div>
              </div>
            </div>
          </div>
        </section>

        {/* THE CATCH - RISK WARNING */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                The <span className="text-yellow-400">Catch</span>: Leverage Works Both Ways
              </h2>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-green-400 font-bold mb-4">When You&apos;re Right</h3>
                  <div className="bg-gray-900/50 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-2">5x leverage, stock up 10%</div>
                    <div className="text-3xl font-bold text-green-400">+50% profit</div>
                    <div className="text-gray-500 text-sm">$100 → $150</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-red-400 font-bold mb-4">When You&apos;re Wrong</h3>
                  <div className="bg-gray-900/50 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-2">5x leverage, stock down 10%</div>
                    <div className="text-3xl font-bold text-red-400">-50% loss</div>
                    <div className="text-gray-500 text-sm">$100 → $50</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Small Account Survival Rules</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Start with 2-5x leverage</h4>
                    <p className="text-gray-500 text-sm">Not 50x or 100x. You&apos;ll get liquidated on normal volatility.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Risk max 10% per trade</h4>
                    <p className="text-gray-500 text-sm">With $100, risk $10 per position. Survive long enough to learn.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Use stop losses</h4>
                    <p className="text-gray-500 text-sm">Set a price where you exit if wrong. Don&apos;t hope it comes back.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Avoid earnings/news</h4>
                    <p className="text-gray-500 text-sm">Big moves can liquidate you instantly. Learn first, trade news later.</p>
                  </div>
                </div>
              </div>
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
                Turn Your $100 Into a Trading Account
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Get a Wallet</h3>
                  <p className="text-gray-400 mb-3">Download <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300">Rabby Wallet</a>. Free, no ID required, takes 2 minutes.</p>
                  <Link href="/blog/wallet-setup-guide" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center gap-1">
                    Full setup guide <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Buy $100 of USDC</h3>
                  <p className="text-gray-400">Buy USDC on Coinbase, Kraken, or Binance. Send it to your wallet on Arbitrum network (cheapest fees).</p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Connect & Deposit</h3>
                  <p className="text-gray-400 mb-3">
                    Go to <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-cyan-400 hover:text-cyan-300">Hyperliquid</a>,
                    connect your wallet, and deposit your USDC. Your $100 is now ready to trade.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Open Your First Trade</h3>
                  <p className="text-gray-400 mb-3">
                    Find a stock (e.g., NVDA-PERP), set 3x leverage, use $30 of margin. You now control $90 of NVDA with room for the price to move.
                  </p>
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-green-400 transition-colors"
                  >
                    Start Trading
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXAMPLE TRADE */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Example: Your First $100 Trade
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">The Setup</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">1</span>
                      <span>Account balance: <strong className="text-white">$100</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">2</span>
                      <span>You like NVDA, currently at <strong className="text-white">$140</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">3</span>
                      <span>Use <strong className="text-white">$33 margin</strong> with <strong className="text-cyan-400">3x leverage</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">4</span>
                      <span>Position size: <strong className="text-white">$100 of NVDA</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">5</span>
                      <span>$67 still in reserve as buffer</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">If NVDA goes up 7%</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Stock move</span>
                      <span className="text-white">$140 → $150</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Position profit</span>
                      <span className="text-green-400">+$7</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Your return (on $33)</span>
                      <span className="text-green-400 font-bold">+21%</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">New account value</span>
                        <span className="text-green-400 font-bold">$107</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-6 text-sm">
                This conservative setup leaves room for the stock to drop ~25% before liquidation. Much safer than using full account with high leverage.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 border border-green-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Ready to Start?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  Turn your $100 into a real trading account. Start small, learn the ropes, grow from there.
                </p>

                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-green-400 hover:to-emerald-400 transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
                >
                  Start With $100 on Hyperliquid
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                <p className="text-gray-500 text-sm mt-6">
                  No minimum deposit. No account approval. Start in 10 minutes.
                </p>
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
              <Link href="/blog/equity-perps-risks" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-yellow-500/50 transition-colors">
                <span className="text-yellow-400 text-xs font-medium">IMPORTANT</span>
                <h4 className="text-white font-medium mt-1">Understanding Risks</h4>
                <p className="text-gray-500 text-sm mt-1">Before you start</p>
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
