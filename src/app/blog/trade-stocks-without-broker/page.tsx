'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

export default function TradeStocksWithoutBroker() {
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');
  const lighter = platforms.find(p => p.id === 'lighter');
  const ostium = platforms.find(p => p.id === 'ostium');

  const featuredStocks = [
    { ticker: 'NVDA', name: 'Nvidia', change: '+142%', hot: true },
    { ticker: 'TSLA', name: 'Tesla', change: '+89%', hot: true },
    { ticker: 'AAPL', name: 'Apple', change: '+34%', hot: false },
    { ticker: 'MSFT', name: 'Microsoft', change: '+28%', hot: false },
    { ticker: 'META', name: 'Meta', change: '+67%', hot: true },
    { ticker: 'AMZN', name: 'Amazon', change: '+41%', hot: false },
    { ticker: 'GOOGL', name: 'Google', change: '+31%', hot: false },
    { ticker: 'COIN', name: 'Coinbase', change: '+156%', hot: true },
    { ticker: 'PLTR', name: 'Palantir', change: '+198%', hot: true },
    { ticker: 'AMD', name: 'AMD', change: '+52%', hot: false },
    { ticker: 'NFLX', name: 'Netflix', change: '+76%', hot: false },
    { ticker: 'MSTR', name: 'MicroStrategy', change: '+312%', hot: true },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trade Stocks Without a Broker: 24/7 Stock Trading Guide",
    "author": { "@type": "Organization", "name": "Compare Equity Perps" },
    "datePublished": "2026-01-01",
    "dateModified": new Date().toISOString(),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Trade Stocks Without a Broker",
    "description": "Step-by-step guide to trading stocks 24/7 using equity perpetuals",
    "totalTime": "PT10M",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Get a wallet", "text": "Download Rabby Wallet and create a new wallet in 2 minutes" },
      { "@type": "HowToStep", "position": 2, "name": "Fund with USDC", "text": "Transfer USDC from Coinbase, Kraken, or Binance" },
      { "@type": "HowToStep", "position": 3, "name": "Connect to platform", "text": "Go to Hyperliquid and connect your wallet" },
      { "@type": "HowToStep", "position": 4, "name": "Start trading", "text": "Open positions on stocks like NVDA, TSLA, AAPL - 24/7" },
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <article className="min-h-screen">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-cyan-400">Trade Without Broker</span>
            </nav>

            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-400 text-sm font-medium">Markets Open 24/7</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Trade Stocks
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400">
                  Without a Broker
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                What if you could trade <span className="text-white font-semibold">NVDA, TSLA, and AAPL</span> at
                <span className="text-cyan-400 font-semibold"> 3am on a Sunday</span>? No brokerage account.
                No waiting for market open. Just you and the markets, <span className="text-green-400 font-semibold">24/7/365</span>.
              </p>

              {/* Key Points */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No KYC Required</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Start in 10 Minutes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 200x Leverage</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>50+ Stocks Available</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-cyan-400 hover:to-green-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Start Trading Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#wait-you-can"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800/50 border border-gray-700 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-all"
                >
                  See How It Works
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WAIT SECTION */}
        <section id="wait-you-can" className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Wait... I Can Trade Stocks on <span className="text-cyan-400">Weekends</span>?
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Yes. While everyone else waits for Monday morning, you can trade Tesla during Sunday brunch.
              Apple after midnight. Nvidia on Christmas. <strong className="text-white">The market never closes.</strong>
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400">Trading Hours</div>
                <div className="text-sm text-gray-500 mt-2">Including weekends & holidays</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-green-400 mb-2">10 min</div>
                <div className="text-gray-400">To Get Started</div>
                <div className="text-sm text-gray-500 mt-2">No application process</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-purple-400 mb-2">$0</div>
                <div className="text-gray-400">Minimum Balance</div>
                <div className="text-sm text-gray-500 mt-2">Start with any amount</div>
              </div>
            </div>
          </div>
        </section>

        {/* AVAILABLE STOCKS SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                50+ Stocks, Trading <span className="text-cyan-400">Right Now</span>
              </h2>
              <p className="text-gray-400 text-lg">
                The biggest names on Wall Street, available 24/7 with leverage
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
              {featuredStocks.map((stock) => (
                <Link
                  key={stock.ticker}
                  href={`/stocks/${stock.ticker.toLowerCase()}`}
                  className="group relative bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 hover:bg-gray-900 transition-all"
                >
                  {stock.hot && (
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-full">
                      HOT
                    </span>
                  )}
                  <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {stock.ticker}
                  </div>
                  <div className="text-sm text-gray-500 truncate">{stock.name}</div>
                  <div className="text-sm text-green-400 mt-1">{stock.change} YTD</div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/stocks"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
              >
                View all 50+ available stocks
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Platform Badges */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm mb-4">Available on</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-[#3EEFC1]/50 transition-colors">
                  <span className="font-semibold" style={{ color: '#3EEFC1' }}>Hyperliquid</span>
                  <span className="text-gray-500 text-sm ml-2">50x leverage</span>
                </a>
                <a href={lighter?.referralUrl} target="_blank" rel="noopener sponsored" className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-[#6366F1]/50 transition-colors">
                  <span className="font-semibold" style={{ color: '#6366F1' }}>Lighter</span>
                  <span className="text-gray-500 text-sm ml-2">100x leverage</span>
                </a>
                <a href={ostium?.referralUrl} target="_blank" rel="noopener sponsored" className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-[#10B981]/50 transition-colors">
                  <span className="font-semibold" style={{ color: '#10B981' }}>Ostium</span>
                  <span className="text-gray-500 text-sm ml-2">200x leverage</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS - SETUP SECTION */}
        <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-400 font-medium">Less Than 10 Minutes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Get Set Up in <span className="text-green-400">3 Simple Steps</span>
              </h2>
              <p className="text-gray-400 text-lg">
                No application forms. No approval wait. No minimum balance.
              </p>
            </div>

            {/* Step 1 - Wallet Setup (Expandable) */}
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
                    <h3 className="text-xl font-bold text-white mb-1">Create Your Wallet</h3>
                    <p className="text-gray-400">Download Rabby Wallet — takes 2 minutes, no email required</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 text-sm font-medium hidden sm:block">
                      {walletExpanded ? 'Hide Details' : 'Show Details'}
                    </span>
                    <svg
                      className={`w-6 h-6 text-cyan-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {walletExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-4">Step-by-Step:</h4>
                        <ol className="space-y-3 text-gray-300">
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">1</span>
                            <span>Go to <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300">rabby.io</a> and click "Download"</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">2</span>
                            <span>Add the extension to Chrome/Brave/Firefox</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">3</span>
                            <span>Click "Create New Wallet"</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">4</span>
                            <span><strong className="text-white">Write down your 12-word seed phrase</strong> and store it safely</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">5</span>
                            <span>Confirm the seed phrase — done!</span>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-5">
                        <h4 className="text-white font-semibold mb-3">Watch: Wallet Setup Guide</h4>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                          <iframe
                            src="https://www.youtube.com/embed/_ouAzSQJiM0"
                            title="How to Set Up a Wallet for Trading Equity Perps"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <a
                          href="https://rabby.io"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-cyan-400 transition-colors"
                        >
                          Download Rabby
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                      <p className="text-yellow-400 text-sm">
                        <strong>Important:</strong> Your seed phrase is the ONLY way to recover your wallet. Never share it. Never store it digitally. Write it on paper and keep it safe.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2 - Fund Wallet (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-green-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-colors"
                onClick={() => setFundingExpanded(!fundingExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">Fund with USDC</h3>
                    <p className="text-gray-400">Transfer from Coinbase, Kraken, or Binance — or use card</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-sm font-medium hidden sm:block">
                      {fundingExpanded ? 'Hide Details' : 'Show Details'}
                    </span>
                    <svg
                      className={`w-6 h-6 text-green-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {fundingExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                        <h4 className="text-blue-400 font-semibold mb-2">From Coinbase</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          <li>1. Go to Send/Receive</li>
                          <li>2. Select USDC</li>
                          <li>3. Paste your Rabby address</li>
                          <li>4. Choose <strong className="text-white">Arbitrum</strong> network</li>
                          <li>5. Confirm send</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">Fee: ~$0.10 on Arbitrum</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                        <h4 className="text-purple-400 font-semibold mb-2">From Kraken</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          <li>1. Go to Funding → Withdraw</li>
                          <li>2. Search USDC</li>
                          <li>3. Add your Rabby address</li>
                          <li>4. Select <strong className="text-white">Arbitrum One</strong></li>
                          <li>5. Confirm with 2FA</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">Fee: ~$1-3</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <h4 className="text-yellow-400 font-semibold mb-2">From Binance</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          <li>1. Wallet → Withdraw</li>
                          <li>2. Select USDC</li>
                          <li>3. Paste your Rabby address</li>
                          <li>4. Network: <strong className="text-white">Arbitrum</strong></li>
                          <li>5. Complete verification</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">Fee: ~$0.50</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl">
                      <p className="text-gray-400 text-sm">
                        <strong className="text-white">Pro tip:</strong> Always use Arbitrum network for lowest fees.
                        Start with $50-100 to test. Funds arrive in 1-5 minutes.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 - Connect & Trade */}
            <div className="mb-8">
              <div className="bg-gray-900 border-2 border-purple-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Connect & Start Trading</h3>
                    <p className="text-gray-400">You're ready! Open your first position in seconds</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5">
                    <ol className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">1</span>
                        <span>Go to <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-cyan-400 hover:text-cyan-300">app.hyperliquid.xyz</a></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">2</span>
                        <span>Click "Connect" and select Rabby Wallet</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">3</span>
                        <span>Deposit your USDC to the platform</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">4</span>
                        <span>Search for a stock (e.g., NVDA-PERP)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">5</span>
                        <span>Choose Long or Short, set leverage, and trade!</span>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={hyperliquid?.referralUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-[#3EEFC1]/20 to-[#3EEFC1]/5 border-2 border-[#3EEFC1]/50 rounded-2xl hover:border-[#3EEFC1] transition-all group"
                    >
                      <div className="text-5xl">🚀</div>
                      <span className="text-xl font-bold text-white group-hover:text-[#3EEFC1] transition-colors">Open Hyperliquid</span>
                      <span className="text-gray-400 text-sm">Most popular platform</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Guide Link */}
            <div className="text-center">
              <Link
                href="/blog/wallet-setup-guide"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
              >
                📖 Read the complete wallet setup guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Broker vs <span className="text-cyan-400">No Broker</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
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
                    <span>Application + approval process (days/weeks)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>SSN, ID verification required</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Market hours only (9:30am - 4pm ET)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Max 4x margin leverage</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Broker holds your funds</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>T+2 settlement (2 day wait)</span>
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
                  <h3 className="text-xl font-bold text-green-400">Equity Perpetuals</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Start in 10 minutes</strong> — just connect wallet</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">No KYC</strong> — completely private</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Trade 24/7/365</strong> — weekends included</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Up to 200x leverage</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Self-custody</strong> — your keys, your funds</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Instant settlement</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT INFO */}
        <section className="py-16 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">⚠️ What You Should Know</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">Not actual shares</strong> — You&apos;re trading price exposure via perpetual contracts, not buying stock</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">No dividends</strong> — Perpetual holders don&apos;t receive dividend payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">Leverage is risky</strong> — Higher leverage = higher liquidation risk. Start with 2-5x</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">Funding rates</strong> — Periodic payments between longs and shorts based on market demand</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/20 via-green-500/20 to-purple-500/20 border border-cyan-500/30 rounded-3xl p-12 text-center">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  Ready to Trade?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  Join thousands of traders who&apos;ve ditched their broker. Start trading stocks 24/7 in the next 10 minutes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-green-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-cyan-400 hover:to-green-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                  >
                    Start Trading on Hyperliquid
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-400 text-sm">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No KYC
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 Trading
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Self-Custody
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    50+ Stocks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/blog/wallet-setup-guide" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
                <span className="text-cyan-400 text-xs font-medium">GUIDE</span>
                <h4 className="text-white font-medium mt-1">Complete Wallet Setup</h4>
                <p className="text-gray-500 text-sm mt-1">Step-by-step instructions</p>
              </Link>
              <Link href="/blog/weekend-stock-trading" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors">
                <span className="text-green-400 text-xs font-medium">GUIDE</span>
                <h4 className="text-white font-medium mt-1">Weekend Stock Trading</h4>
                <p className="text-gray-500 text-sm mt-1">Trade Saturday & Sunday</p>
              </Link>
              <Link href="/blog/equity-perps-risks" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-yellow-500/50 transition-colors">
                <span className="text-yellow-400 text-xs font-medium">IMPORTANT</span>
                <h4 className="text-white font-medium mt-1">Understanding Risks</h4>
                <p className="text-gray-500 text-sm mt-1">What you need to know</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
