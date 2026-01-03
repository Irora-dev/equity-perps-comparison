'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

const faqs = [
  {
    question: "Is it legal to trade US stocks from India using equity perps?",
    answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by SEBI as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many Indian traders use these platforms, but you should understand the regulatory landscape and consult a tax professional."
  },
  {
    question: "Do I need to pay tax on profits from equity perps in India?",
    answer: "Yes, profits from trading are likely taxable in India. They may be classified as capital gains or business income depending on your trading frequency. Maintain records of all trades and consult a CA familiar with crypto/derivatives taxation."
  },
  {
    question: "What's the minimum amount I need to start?",
    answer: "You can start with as little as ₹4,000-5,000 ($50-60). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform."
  },
  {
    question: "Can I trade during Indian market hours?",
    answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night IST. There's no restriction on trading hours."
  },
  {
    question: "Is KYC required?",
    answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on an Indian exchange (WazirX, CoinDCX, Binance) to convert INR to USDC initially."
  },
];

export default function TradeUSStocksFromIndia() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-gray-950 to-green-500/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Trade US Stocks from India</span>
          </nav>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">🇮🇳 India Guide</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">No Broker Needed</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Trade US Stocks
            <br />
            <span className="text-orange-400">From India</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account.
            Convert INR to USDC and start trading in <strong className="text-white">15 minutes</strong>.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#get-started"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-lg hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25"
            >
              Start Trading Now
            </a>
            <a
              href="#get-started"
              className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700"
            >
              How It Works
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">₹4,000</div>
              <div className="text-gray-400 text-sm">Minimum to Start</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-400 text-sm">Any Time IST</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-gray-400 text-sm">US Stocks</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">No KYC</div>
              <div className="text-gray-400 text-sm">On Trading Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works for Indians */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Indian Traders Choose Equity Perps
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">🚫</div>
              <h3 className="text-xl font-bold text-white mb-2">No LRS Limits</h3>
              <p className="text-gray-400">
                The $250,000/year Liberalised Remittance Scheme limit doesn't apply.
                Trade as much as you want without RBI restrictions.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Access</h3>
              <p className="text-gray-400">
                No waiting weeks for US brokerage approval. Convert INR → USDC and
                start trading the same day.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="text-xl font-bold text-white mb-2">Trade at Night</h3>
              <p className="text-gray-400">
                US markets open at 7pm IST. With equity perps, trade whenever you want -
                morning, afternoon, or 2am.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Start with ₹4,000</h3>
              <p className="text-gray-400">
                Most US brokers need $500+ minimum. Here, start with just ₹4,000-5,000
                and use leverage to control larger positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Get Started Section */}
      <section id="get-started" className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-4">
              <span className="text-orange-400 font-medium">Step-by-Step Guide</span>
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Started in 15 Minutes
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Follow these steps to start trading US stocks from India today.
            </p>
          </div>

          {/* Step 1: Wallet */}
          <div className="mb-6">
            <div
              className="bg-gray-900 border-2 border-cyan-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-colors"
              onClick={() => setWalletExpanded(!walletExpanded)}
            >
              <div className="p-6 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">Set Up Your Digital Wallet</h3>
                  <p className="text-gray-400">Free, takes 2 minutes, and you only do this once</p>
                </div>
                <svg
                  className={`w-6 h-6 text-cyan-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {walletExpanded && (
                <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-2">What is a digital wallet?</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Think of it like a <strong className="text-white">digital bank account you control</strong>.
                      Instead of a bank holding your money, you hold it yourself using a simple browser extension.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                        <div className="text-lg mb-1">🔐</div>
                        <span className="text-gray-400">You control it</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                        <div className="text-lg mb-1">🆓</div>
                        <span className="text-gray-400">Completely free</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                        <div className="text-lg mb-1">⚡</div>
                        <span className="text-gray-400">2 min setup</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                        <div className="text-lg mb-1">🌍</div>
                        <span className="text-gray-400">Works in India</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-4">Here&apos;s how to set it up:</h4>
                      <ol className="space-y-3 text-gray-300">
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">1</span>
                          <span>Go to <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300 underline">rabby.io</a></span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">2</span>
                          <span>Click &quot;Download&quot; and add to Chrome/Brave</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">3</span>
                          <span>Click &quot;Create New Wallet&quot; and set a password</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">4</span>
                          <div>
                            <strong className="text-white">Write down your 12-word recovery phrase</strong>
                            <p className="text-gray-500 text-xs mt-1">Keep it safe and never share it!</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-5">
                      <h4 className="text-white font-semibold mb-3">Watch: 2-Minute Setup Guide</h4>
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/_ouAzSQJiM0"
                          title="Wallet Setup Guide"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Step 2: Fund with INR */}
          <div className="mb-6">
            <div
              className="bg-gray-900 border-2 border-orange-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-orange-500/50 transition-colors"
              onClick={() => setFundingExpanded(!fundingExpanded)}
            >
              <div className="p-6 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">Convert INR to USDC</h3>
                  <p className="text-gray-400">Use WazirX, CoinDCX, or Binance P2P</p>
                </div>
                <svg
                  className={`w-6 h-6 text-orange-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {fundingExpanded && (
                <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                  <p className="text-gray-300 mb-6">
                    You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert INR:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {/* Binance P2P */}
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">Binance P2P</h4>
                      <p className="text-gray-400 text-sm mb-3">Best rates, most liquidity</p>
                      <ol className="text-xs text-gray-300 space-y-1">
                        <li>1. Open Binance app</li>
                        <li>2. Go to P2P Trading</li>
                        <li>3. Buy USDT with INR (UPI/IMPS)</li>
                        <li>4. Convert USDT → USDC</li>
                        <li>5. Withdraw to Rabby (Arbitrum)</li>
                      </ol>
                    </div>

                    {/* WazirX */}
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                      <h4 className="text-blue-400 font-semibold mb-2">WazirX</h4>
                      <p className="text-gray-400 text-sm mb-3">Indian exchange, easy UPI</p>
                      <ol className="text-xs text-gray-300 space-y-1">
                        <li>1. Deposit INR via UPI</li>
                        <li>2. Buy USDT</li>
                        <li>3. Transfer to Binance (free)</li>
                        <li>4. Convert USDT → USDC</li>
                        <li>5. Withdraw to Rabby</li>
                      </ol>
                    </div>

                    {/* CoinDCX */}
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                      <h4 className="text-purple-400 font-semibold mb-2">CoinDCX</h4>
                      <p className="text-gray-400 text-sm mb-3">Indian exchange, bank transfer</p>
                      <ol className="text-xs text-gray-300 space-y-1">
                        <li>1. Deposit INR via bank</li>
                        <li>2. Buy USDC directly</li>
                        <li>3. Withdraw to Rabby</li>
                        <li className="text-gray-500">(Higher fees but simpler)</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-white">💡 Pro tip:</strong> Binance P2P usually has the best INR rates.
                      Buy USDT first (more liquidity), then convert to USDC on Binance (free).
                    </p>
                  </div>

                  <Link
                    href="/blog/convert-inr-to-usdc"
                    className="inline-flex items-center gap-2 mt-4 text-orange-400 hover:text-orange-300 font-medium"
                  >
                    See detailed INR → USDC guide with screenshots
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Step 3: Trade */}
          <div className="bg-gray-900 border-2 border-green-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Start Trading</h3>
                <p className="text-gray-400">Connect to Hyperliquid and trade 50+ US stocks</p>
              </div>
            </div>

            <ol className="space-y-3 text-gray-300 mb-6">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">1</span>
                <span>Go to <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-green-400 hover:text-green-300">app.hyperliquid.xyz</a></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">2</span>
                <span>Click &quot;Connect&quot; and select Rabby Wallet</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">3</span>
                <span>Click &quot;Deposit&quot; and bridge your USDC</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">4</span>
                <span>Search for a stock (NVDA, TSLA, AAPL) and open a position!</span>
              </li>
            </ol>

            <a
              href={hyperliquid?.referralUrl}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-gray-900 rounded-xl font-bold hover:bg-green-400 transition-colors"
            >
              Open Hyperliquid (4% Off Fees)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Popular Stocks */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Popular US Stocks Available
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { ticker: 'NVDA', name: 'Nvidia', hot: true },
              { ticker: 'TSLA', name: 'Tesla', hot: true },
              { ticker: 'AAPL', name: 'Apple', hot: false },
              { ticker: 'MSFT', name: 'Microsoft', hot: false },
              { ticker: 'META', name: 'Meta', hot: true },
              { ticker: 'AMZN', name: 'Amazon', hot: false },
              { ticker: 'GOOGL', name: 'Google', hot: false },
              { ticker: 'COIN', name: 'Coinbase', hot: true },
            ].map(stock => (
              <Link
                key={stock.ticker}
                href={`/stocks/${stock.ticker.toLowerCase()}`}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-orange-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold">{stock.ticker}</span>
                  {stock.hot && <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">HOT</span>}
                </div>
                <span className="text-gray-500 text-sm">{stock.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href="/stocks" className="text-orange-400 hover:text-orange-300 font-medium">
              View all 50+ stocks →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-orange-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* India Guides Section */}
          <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-green-500/10 border border-orange-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">📚 More India Guides</h3>
            <p className="text-gray-400 mb-6">
              We&apos;ve created detailed guides specifically for Indian traders. Check them out:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/blog/convert-inr-to-usdc"
                className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-orange-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">₹</div>
                <div>
                  <h4 className="text-white font-medium">Convert INR to USDC</h4>
                  <p className="text-gray-500 text-sm">Step-by-step with WazirX, Binance P2P</p>
                </div>
              </Link>
              <Link
                href="/blog/trade-stocks-with-5000-rupees"
                className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">💰</div>
                <div>
                  <h4 className="text-white font-medium">Trade with ₹5,000</h4>
                  <p className="text-gray-500 text-sm">Small account strategy guide</p>
                </div>
              </Link>
              <Link
                href="/blog/equity-perps-legal-india"
                className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-yellow-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 flex-shrink-0">⚖️</div>
                <div>
                  <h4 className="text-white font-medium">Is It Legal in India?</h4>
                  <p className="text-gray-500 text-sm">Regulations, taxes, and compliance</p>
                </div>
              </Link>
              <Link
                href="/blog/p2p-usdc-guide"
                className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">🤝</div>
                <div>
                  <h4 className="text-white font-medium">P2P Trading Guide</h4>
                  <p className="text-gray-500 text-sm">Global P2P methods and safety tips</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/20 to-green-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Trading US Stocks Today
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Join thousands of Indian traders accessing NVDA, TSLA, and 50+ US stocks 24/7.
              No US broker needed. Start with just ₹4,000.
            </p>
            <a
              href={hyperliquid?.referralUrl}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-lg hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25"
            >
              Get Started Now (4% Off Fees)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Free Site + Referral Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              This site is <span className="text-white font-medium">100% free</span> to use for comparing the best platforms to trade stocks 24/7.
              When you sign up through our links to platforms like <span className="text-cyan-400">Hyperliquid</span> and <span className="text-cyan-400">Lighter</span>,
              you get a <span className="text-green-400 font-semibold">4% discount on trading fees</span> with our referral code.
              This helps support the site while saving you money on every trade.
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/blog/convert-inr-to-usdc" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-orange-500/50 transition-colors">
              <span className="text-orange-400 text-xs font-medium">FUNDING</span>
              <h3 className="text-white font-medium mt-1">Convert INR to USDC</h3>
              <p className="text-gray-500 text-sm mt-1">Step-by-step with screenshots</p>
            </Link>
            <Link href="/blog/trade-stocks-with-5000-rupees" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-orange-500/50 transition-colors">
              <span className="text-green-400 text-xs font-medium">GUIDE</span>
              <h3 className="text-white font-medium mt-1">Trade with ₹5,000</h3>
              <p className="text-gray-500 text-sm mt-1">Small account strategy</p>
            </Link>
            <Link href="/blog/equity-perps-legal-india" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-orange-500/50 transition-colors">
              <span className="text-yellow-400 text-xs font-medium">LEGAL</span>
              <h3 className="text-white font-medium mt-1">Is It Legal in India?</h3>
              <p className="text-gray-500 text-sm mt-1">Regulatory overview</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
