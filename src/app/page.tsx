'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';
import ComparisonTable from '@/components/ComparisonTable';
import PlatformCard from '@/components/PlatformCard';
import { platforms, type Platform } from '@/data/platforms';

export default function Home() {
  const [searchResults, setSearchResults] = useState<Platform[] | null>(null);

  const displayPlatforms = searchResults ?? platforms;

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
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Compare</span>{' '}
            <span className="text-cyan-400">Equity Perps</span>
          </h1>
          <p className="text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
            Compare the best platforms for trading equity perpetual futures.
            Find zero-fee trading, high leverage, and 24/7 access to stock markets.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Updated as of: January 2025
          </p>

          {/* Search Bar */}
          <SearchBar onSearchResults={setSearchResults} />

          {searchResults && (
            <p className="mt-4 text-gray-500">
              Showing {searchResults.length} platform{searchResults.length !== 1 ? 's' : ''} matching your search
            </p>
          )}
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            Feature Comparison
          </h2>
          <p className="text-gray-400 text-center mb-8">
            See which platforms offer the features you need
          </p>
          <ComparisonTable filteredPlatforms={searchResults} />
        </div>
      </section>

      {/* Platform Cards Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            Platform Overview
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Detailed look at each equity perps platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {displayPlatforms.map((platform) => (
              <div key={platform.id} className="flex">
                <PlatformCard platform={platform} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-2xl font-bold text-white mb-6">
            What are Equity Perpetual Futures?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Equity perpetual futures (equity perps) are derivative contracts that allow you to trade
              stocks like TSLA, NVDA, AAPL, and more with leverage—without an expiry date. Unlike
              traditional futures that expire quarterly, perpetual futures can be held indefinitely.
            </p>
            <p>
              These instruments have exploded in popularity in 2025, with platforms like Hyperliquid
              processing over $300 billion in monthly volume. Key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><strong className="text-white">24/7 Trading:</strong> Trade equity exposure around the clock, even on weekends</li>
              <li><strong className="text-white">High Leverage:</strong> Access up to 200x leverage on some platforms</li>
              <li><strong className="text-white">Self-Custody:</strong> Keep control of your funds in your own wallet</li>
              <li><strong className="text-white">Low/Zero Fees:</strong> Many platforms offer zero trading fees</li>
              <li><strong className="text-white">No KYC:</strong> Trade without identity verification on decentralized platforms</li>
            </ul>
            <p>
              Popular platforms include Hyperliquid (largest by volume), Lighter (ZK-powered),
              Ostium (0DTE perpetuals), and Avantis (zero-fee on Base). Each platform has unique
              features—use our comparison table above to find the best fit for your trading style.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Screenshots Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            See the Platforms in Action
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Trading interfaces from the top equity perps exchanges
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link href="/blog/hyperliquid" className="group">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors">
                <div className="relative aspect-video">
                  <Image
                    src="/images/platforms/hyperliquid.jpg"
                    alt="Hyperliquid trading interface showing NVDA perpetual futures"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    Hyperliquid
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    The largest on-chain perpetuals exchange with $319B+ monthly volume
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/blog/lighter" className="group">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-colors">
                <div className="relative aspect-video">
                  <Image
                    src="/images/platforms/lighter.jpg"
                    alt="Lighter trading interface showing NVDA perpetual futures"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    Lighter
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    ZK-powered perpetuals on Ethereum with zero fees for retail traders
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Reviews Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            Platform Reviews
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Read our in-depth reviews for each platform
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <Link
                key={platform.id}
                href={`/blog/${platform.slug}`}
                className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-600 transition-colors group"
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: platform.color }}
                />
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                  {platform.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View all reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
