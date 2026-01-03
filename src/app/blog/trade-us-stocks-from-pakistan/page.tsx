'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

const faqs = [
  {
    question: "Is trading US stocks legal in Pakistan?",
    answer: "Crypto trading exists in a regulatory gray area in Pakistan. The State Bank has issued warnings but there's no explicit ban. Many Pakistanis use decentralized platforms for trading. You should stay informed about evolving regulations and consult local experts."
  },
  {
    question: "How do I convert PKR to USDC?",
    answer: "The easiest way is through Binance P2P. You can pay with JazzCash, Easypaisa, or bank transfer to buy USDT from local sellers, then convert to USDC. This avoids international wire transfer fees and SBP restrictions."
  },
  {
    question: "What's the minimum amount to start?",
    answer: "You can start with as little as PKR 15,000-20,000 ($50-70). With leverage, this gives you exposure to $500-3,000 worth of US stocks. We recommend starting small to learn the platform."
  },
  {
    question: "Can I trade at any time?",
    answer: "Yes! Equity perps trade 24/7. US markets normally open at 6:30pm PKT, but with equity perps you can trade at any time - morning, evening, or late night."
  },
  {
    question: "Is KYC required?",
    answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need basic verification on Binance to use P2P trading for converting PKR to crypto."
  },
];

export default function TradeUSStocksFromPakistan() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-gray-950 to-emerald-500/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Trade US Stocks from Pakistan</span>
          </nav>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">🇵🇰 Pakistan Guide</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full">No Broker Needed</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Trade US Stocks
            <br />
            <span className="text-green-400">From Pakistan</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account.
            Convert PKR to USDC via JazzCash or Easypaisa and start trading in <strong className="text-white">15 minutes</strong>.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#get-started"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:from-green-400 hover:to-emerald-500 transition-all shadow-lg shadow-green-500/25"
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
              <div className="text-2xl font-bold text-white">PKR 15K</div>
              <div className="text-gray-400 text-sm">Minimum to Start</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-400 text-sm">Any Time PKT</div>
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

      {/* Why This Works for Pakistanis */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Pakistani Traders Choose Equity Perps
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">🚫</div>
              <h3 className="text-xl font-bold text-white mb-2">No SBP Restrictions</h3>
              <p className="text-gray-400">
                Bypass State Bank forex limitations. Trade using crypto without needing
                foreign currency approvals or bank permissions.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Use JazzCash/Easypaisa</h3>
              <p className="text-gray-400">
                Buy crypto directly with your mobile wallet through P2P trading.
                No bank account complications.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="text-xl font-bold text-white mb-2">Trade Anytime</h3>
              <p className="text-gray-400">
                US markets open at 6:30pm PKT. With equity perps, trade whenever you want -
                morning, afternoon, or 2am.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Start with PKR 15,000</h3>
              <p className="text-gray-400">
                Most US brokers need $500+ minimum and won&apos;t accept Pakistani residents.
                Here, start with PKR 15-20K and use leverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Get Started Section */}
      <section id="get-started" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
              <span className="text-green-400 font-medium">Step-by-Step Guide</span>
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Started in 15 Minutes
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Follow these steps to start trading US stocks from Pakistan today.
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
                        <span className="text-gray-400">Works in Pakistan</span>
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

          {/* Step 2: Fund with PKR */}
          <div className="mb-6">
            <div
              className="bg-gray-900 border-2 border-green-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-colors"
              onClick={() => setFundingExpanded(!fundingExpanded)}
            >
              <div className="p-6 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">Convert PKR to USDC</h3>
                  <p className="text-gray-400">Use Binance P2P with JazzCash or Easypaisa</p>
                </div>
                <svg
                  className={`w-6 h-6 text-green-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
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
                    You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert PKR:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* Binance P2P */}
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">Binance P2P (Recommended)</h4>
                      <p className="text-gray-400 text-sm mb-3">Best rates, most sellers</p>
                      <ol className="text-xs text-gray-300 space-y-1">
                        <li>1. Open Binance app</li>
                        <li>2. Go to P2P Trading</li>
                        <li>3. Select PKR and USDT</li>
                        <li>4. Pay via JazzCash/Easypaisa/Bank</li>
                        <li>5. Convert USDT → USDC</li>
                        <li>6. Withdraw to Rabby (Arbitrum)</li>
                      </ol>
                    </div>

                    {/* KuCoin P2P */}
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                      <h4 className="text-emerald-400 font-semibold mb-2">KuCoin P2P</h4>
                      <p className="text-gray-400 text-sm mb-3">Alternative option</p>
                      <ol className="text-xs text-gray-300 space-y-1">
                        <li>1. Create KuCoin account</li>
                        <li>2. Go to P2P section</li>
                        <li>3. Buy USDT with PKR</li>
                        <li>4. Convert to USDC</li>
                        <li>5. Withdraw to wallet</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-white">💡 Pro tip:</strong> JazzCash and Easypaisa are fastest.
                      Look for sellers with 95%+ completion rate. Start with smaller amounts to test.
                    </p>
                  </div>

                  <Link
                    href="/blog/convert-pkr-to-usdc"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium"
                  >
                    See detailed PKR → USDC guide
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Step 3: Trade */}
          <div className="bg-gray-900 border-2 border-emerald-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Start Trading</h3>
                <p className="text-gray-400">Connect to Hyperliquid and trade 50+ US stocks</p>
              </div>
            </div>

            <ol className="space-y-3 text-gray-300 mb-6">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold flex-shrink-0">1</span>
                <span>Go to <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-emerald-400 hover:text-emerald-300">app.hyperliquid.xyz</a></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold flex-shrink-0">2</span>
                <span>Click &quot;Connect&quot; and select Rabby Wallet</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold flex-shrink-0">3</span>
                <span>Click &quot;Deposit&quot; and bridge your USDC</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold flex-shrink-0">4</span>
                <span>Search for a stock (NVDA, TSLA, AAPL) and open a position!</span>
              </li>
            </ol>

            <a
              href={hyperliquid?.referralUrl}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-gray-900 rounded-xl font-bold hover:bg-emerald-400 transition-colors"
            >
              Open Hyperliquid
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Popular Stocks */}
      <section className="py-16 px-4 bg-gray-900/50">
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
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold">{stock.ticker}</span>
                  {stock.hot && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">HOT</span>}
                </div>
                <span className="text-gray-500 text-sm">{stock.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href="/stocks" className="text-green-400 hover:text-green-300 font-medium">
              View all 50+ stocks →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
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
                    className={`w-5 h-5 text-green-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
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

          {/* Pakistan Guides Section */}
          <div className="mt-12 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">📚 More Pakistan Guides</h3>
            <p className="text-gray-400 mb-6">
              Detailed guides specifically for Pakistani traders:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/blog/convert-pkr-to-usdc"
                className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">₨</div>
                <div>
                  <h4 className="text-white font-medium">Convert PKR to USDC</h4>
                  <p className="text-gray-500 text-sm">JazzCash, Easypaisa, Bank Transfer</p>
                </div>
              </Link>
              <Link
                href="/blog/trade-stocks-with-15000-pkr"
                className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-emerald-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">💰</div>
                <div>
                  <h4 className="text-white font-medium">Trade with PKR 15,000</h4>
                  <p className="text-gray-500 text-sm">Small account strategy guide</p>
                </div>
              </Link>
              <Link
                href="/blog/p2p-usdc-guide"
                className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">🤝</div>
                <div>
                  <h4 className="text-white font-medium">P2P Trading Guide</h4>
                  <p className="text-gray-500 text-sm">Safety tips and best practices</p>
                </div>
              </Link>
              <Link
                href="/blog/pnl-simulator"
                className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">📊</div>
                <div>
                  <h4 className="text-white font-medium">PnL Simulator</h4>
                  <p className="text-gray-500 text-sm">Calculate potential profits</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Trading US Stocks Today
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Join Pakistani traders accessing NVDA, TSLA, and 50+ US stocks 24/7.
              No US broker needed. Start with just PKR 15,000.
            </p>
            <a
              href={hyperliquid?.referralUrl}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:from-green-400 hover:to-emerald-500 transition-all shadow-lg shadow-green-500/25"
            >
              Get Started Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
