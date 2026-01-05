'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';
import ComparisonTable from '@/components/ComparisonTable';
import LiveStockRates from '@/components/LiveStockRates';
import { platforms, type Platform } from '@/data/platforms';

export default function Home() {
  const [searchResults, setSearchResults] = useState<Platform[] | null>(null);

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Compare Equity Perps",
            description: "Compare equity perpetual trading platforms",
            url: "https://compareequityperps.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://compareequityperps.com/?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Equity Perpetual Trading Platforms",
            description: "Top equity perps platforms compared",
            numberOfItems: platforms.length,
            itemListElement: platforms.map((platform, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: platform.name,
              description: platform.description,
              url: `https://compareequityperps.com/blog/${platform.slug}`,
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] sm:min-h-[90vh] flex flex-col justify-center overflow-hidden py-20 sm:py-0">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />

          {/* Animated gradient orbs - smaller on mobile */}
          <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-cyan-500/20 rounded-full blur-[60px] sm:blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[150px] sm:w-[400px] h-[150px] sm:h-[400px] bg-purple-500/15 rounded-full blur-[50px] sm:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] bg-emerald-500/10 rounded-full blur-[80px] sm:blur-[150px]" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Stock Tickers - Top - hidden on small mobile to prevent overlap */}
        <div className="absolute top-2 sm:top-8 left-0 right-0 overflow-hidden hidden sm:block">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-2 sm:gap-6 px-2 sm:px-3">
                {[
                  { symbol: 'NVDA', change: '+2.4%', positive: true },
                  { symbol: 'TSLA', change: '+1.8%', positive: true },
                  { symbol: 'AAPL', change: '-0.3%', positive: false },
                  { symbol: 'META', change: '+3.1%', positive: true },
                  { symbol: 'MSFT', change: '+0.9%', positive: true },
                  { symbol: 'AMZN', change: '+1.2%', positive: true },
                  { symbol: 'GOOGL', change: '-0.5%', positive: false },
                  { symbol: 'AMD', change: '+4.2%', positive: true },
                ].map((stock, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
                  >
                    <span className="text-white font-mono font-medium text-[10px] sm:text-sm">{stock.symbol}</span>
                    <span className={`font-mono text-[10px] sm:text-sm ${stock.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {stock.change}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Main Headline */}
          <h1 className="text-[1.625rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-white">Trade </span>
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient whitespace-nowrap">
              NVDA · TSLA · AAPL
            </span>
            <span className="block mt-2 sm:mt-2 text-base sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 font-medium">
              No Broker. No KYC. No Limits.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-lg text-gray-400 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Equity perpetuals let you trade <span className="text-white">50+ US stocks</span> around the clock
            with up to <span className="text-cyan-400">200x leverage</span>. Your keys, your funds.
          </p>

          {/* Stats Row - 2x2 grid on mobile, row on desktop */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="text-xl sm:text-4xl font-bold text-white font-mono">$319B+</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Monthly Volume</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-800" />
            <div className="text-center">
              <div className="text-xl sm:text-4xl font-bold text-white font-mono">50+</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">US Stocks</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-800" />
            <div className="text-center">
              <div className="text-xl sm:text-4xl font-bold text-white font-mono">24/7</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Trading</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-800" />
            <div className="text-center">
              <div className="text-xl sm:text-4xl font-bold text-emerald-400 font-mono">0</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">KYC Required</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <a
              href="#what-are-perps"
              className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-xl font-bold text-base sm:text-lg transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-gray-900">Learn More</span>
              <svg className="relative w-4 h-4 sm:w-5 sm:h-5 text-gray-900 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <Link
              href="/stocks"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/20 transition-all"
            >
              View the Stock Hub
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>

      {/* What Are Equity Perps Section */}
      <section id="what-are-perps" className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">
            What Are Equity Perpetuals?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            Equity perpetuals (perps) are derivative contracts that track stock prices without an expiry date.
            Trade NVDA, TSLA, AAPL and 50+ other US stocks 24/7 with leverage up to 200x.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Key Feature 1 */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No Expiry Date</h3>
              <p className="text-gray-400 text-sm">
                Unlike futures or options, perps never expire. Hold positions as long as you want without rolling contracts.
              </p>
            </div>

            {/* Key Feature 2 */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Funding Rates</h3>
              <p className="text-gray-400 text-sm">
                Periodic payments between longs and shorts keep prices anchored to spot. Sometimes you earn, sometimes you pay.
              </p>
            </div>

            {/* Key Feature 3 */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Self-Custody</h3>
              <p className="text-gray-400 text-sm">
                Trade directly from your wallet. No broker holds your funds. Your keys, your coins, your control.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/blog/what-are-equity-perpetuals"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Learn more about how equity perps work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Traders Are Switching */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">
            Why Traders Are Switching to Equity Perps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Traditional Trading Problems */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-400">Traditional Stock Trading</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Market hours only (9:30am - 4pm ET)',
                  'Need a brokerage account + KYC',
                  'Limited to 2-4x margin',
                  'Complex options with theta decay',
                  'Broker holds your funds',
                  'T+2 settlement delays',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500">
                    <svg className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Equity Perps Solution */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Equity Perpetuals</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Trade 24/7/365 including weekends',
                  'Just a wallet, no KYC',
                  'Up to 200x leverage',
                  'Simple long/short, no Greeks',
                  'Self-custody in your wallet',
                  'Instant settlement',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">
            Start Trading in 10 Minutes
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            No brokerage application. No waiting for approval. Just three simple steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Get a Wallet</h3>
                <p className="text-gray-400 mb-4">
                  Download <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300">Rabby Wallet</a>. Create a new wallet and save your seed phrase securely.
                </p>
                <Link
                  href="/blog/wallet-setup-guide"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center gap-1"
                >
                  How to Setup a Wallet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              {/* Connector */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-700" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Get USDC</h3>
                <p className="text-gray-400 mb-4">
                  Buy USDC from Coinbase, Kraken, or use the platform&apos;s built-in card onramp. Start with $50-100.
                </p>
                <Link
                  href="/blog/how-to-trade-equity-perps"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center gap-1"
                >
                  Funding Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              {/* Connector */}
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-700" />
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-gray-900 font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Start Trading</h3>
                <p className="text-gray-400 mb-4">
                  Connect to Hyperliquid, deposit USDC, find your stock, and open your first position.
                </p>
                <a
                  href="https://app.hyperliquid.xyz/join/COMPAREPERPS"
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-cyan-400 transition-colors"
                >
                  Open Hyperliquid (4% Off Fees)
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stock Rates - Primary Conversion Section */}
      <LiveStockRates />

      {/* Platform Comparison */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 text-center">
            Compare Platforms
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8">
            Find the right platform for your trading style
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <SearchBar onSearchResults={setSearchResults} />
            {searchResults && (
              <p className="mt-2 text-gray-500 text-sm text-center">
                Showing {searchResults.length} platform{searchResults.length !== 1 ? 's' : ''} matching your search
              </p>
            )}
          </div>

          <ComparisonTable filteredPlatforms={searchResults} />

          {/* Quick Platform CTAs */}
          <div className="mt-6 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { id: 'hyperliquid', label: 'Largest Volume', sublabel: '#1 Platform' },
              { id: 'lighter', label: 'Zero Fees', sublabel: 'ZK-Powered' },
              { id: 'ostium', label: '200x Leverage', sublabel: 'RWA Focus' },
              { id: 'avantis', label: 'Coinbase Backed', sublabel: 'On Base' },
            ].map((item) => {
              const platform = platforms.find(p => p.id === item.id);
              if (!platform) return null;
              return (
                <a
                  key={item.id}
                  href={platform.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="group bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: platform.color }}
                    />
                    <span className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      {platform.name}
                    </span>
                  </div>
                  <p className="text-cyan-400 text-sm font-medium">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.sublabel}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Screenshots */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
            See the Platforms
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-10">
            Clean interfaces designed for fast execution
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { id: 'hyperliquid', img: '/images/platforms/hyperliquid.jpg', desc: 'The largest on-chain perpetuals exchange' },
              { id: 'lighter', img: '/images/platforms/lighter.jpg', desc: 'ZK-powered with zero fees for retail' },
              { id: 'ostium', img: '/images/platforms/ostium.jpg', desc: 'RWA perpetuals with up to 200x leverage' },
            ].map((item) => {
              const platform = platforms.find(p => p.id === item.id);
              if (!platform) return null;
              return (
                <div key={item.id} className="group">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-colors">
                    <div className="relative aspect-video">
                      <Image
                        src={item.img}
                        alt={`${platform.name} trading interface`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {platform.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {item.desc}
                      </p>
                      <div className="flex gap-3">
                        <a
                          href={platform.referralUrl}
                          target="_blank"
                          rel="noopener sponsored"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-cyan-400 transition-colors"
                        >
                          Start Trading
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <Link
                          href={`/blog/${platform.slug}`}
                          className="inline-flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg font-medium text-sm hover:bg-gray-700 transition-colors"
                        >
                          Review
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust/Backing Section */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">Platforms backed by</p>
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-10 gap-y-2 sm:gap-y-4 text-xs sm:text-base text-gray-400">
            <span>Pantera Capital</span>
            <span>Coinbase Ventures</span>
            <span>Founders Fund</span>
            <span>General Catalyst</span>
            <span>Jump Trading</span>
            <span>Bain Capital</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What exactly are equity perpetuals?',
                a: 'Equity perpetuals (perps) are derivative contracts that track stock prices without an expiry date. Unlike futures that expire quarterly or options with theta decay, perps let you hold positions indefinitely. They\'re settled in USDC stablecoin and trade 24/7 on decentralized exchanges.',
              },
              {
                q: 'Do I need a brokerage account?',
                a: 'No. You just need a wallet (we recommend Rabby Wallet) and USDC stablecoin. There\'s no account application, no identity verification, and no waiting period. You can start trading within minutes.',
              },
              {
                q: 'Is this legal?',
                a: 'Equity perps trade on decentralized exchanges that operate outside traditional regulatory frameworks. They\'re synthetic instruments that track prices via oracles, not actual stock ownership. Users should understand the regulatory landscape in their jurisdiction.',
              },
              {
                q: 'How are prices tracked accurately?',
                a: 'Platforms use oracle systems that pull real-time price data from major exchanges and data providers. Funding rates (periodic payments between longs and shorts) keep perp prices anchored to spot prices. If perps trade above spot, longs pay shorts, pushing prices down.',
              },
              {
                q: 'What happens if I get liquidated?',
                a: 'If the price moves against you enough to hit your liquidation threshold, your position is automatically closed and you lose your margin (collateral). This is why leverage management is critical. Most traders recommend starting with 2-5x leverage, not the maximum available.',
              },
              {
                q: 'What are funding rates and why do they matter?',
                a: 'Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. Positive funding means longs pay shorts. Negative funding means shorts pay longs (you earn money holding a long). We show the best rates for each stock above.',
              },
              {
                q: 'Which platform should I start with?',
                a: 'For beginners, we recommend Hyperliquid — it has the best liquidity, zero gas fees, and a clean interface. It\'s the largest platform by volume and supports 50+ equity perps. Check our comparison table to find what fits your needs.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-400">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-6 sm:mt-10 text-center">
            <Link
              href="/blog/glossary"
              className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-2"
            >
              View Full Glossary
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Trade Stocks 24/7?
          </h2>
          <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8">
            Join thousands of traders worldwide using equity perps. Start with as little as $50 (₹4,000).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://app.hyperliquid.xyz/join/COMPAREPERPS"
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 text-gray-900 rounded-xl font-bold text-base sm:text-lg hover:bg-cyan-400 transition-colors"
            >
              Start on Hyperliquid (4% Off)
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              href="/stocks"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 border border-gray-700 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-700 transition-colors"
            >
              Browse All Stocks
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Free Site + Referral Notice */}
      <section className="py-8 sm:py-12 px-4 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            This site is <span className="text-white font-medium">100% free</span> to use for comparing the best platforms to trade stocks 24/7.
            When you sign up through our links to platforms like <span className="text-cyan-400">Hyperliquid</span> and <span className="text-cyan-400">Lighter</span>,
            you get a <span className="text-green-400 font-semibold">4% discount on trading fees</span> with our referral code.
            This helps support the site while saving you money on every trade.
          </p>
        </div>
      </section>
    </main>
  );
}
