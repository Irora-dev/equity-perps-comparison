import Link from 'next/link';
import { platforms } from '@/data/platforms';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

const faqs = [
  {
    question: "What is the difference between equity perps and regular stock trading?",
    answer: "Equity perps let you trade with leverage (up to 200x), 24/7, without owning actual shares. Regular stocks require full capital, trade only during market hours, and give you ownership rights like dividends and voting."
  },
  {
    question: "How much money do I need to start trading equity perps?",
    answer: "You can start with as little as $10-50 on most platforms. However, we recommend starting with at least $100-500 to have adequate margin and avoid immediate liquidation on small price moves."
  },
  {
    question: "Are equity perps legal?",
    answer: "Equity perps exist in a regulatory gray area. Most platforms are decentralized and don't require KYC. Legality varies by jurisdiction. US residents should be aware these platforms typically operate outside US regulatory frameworks."
  },
  {
    question: "What happens if my position gets liquidated?",
    answer: "When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won't owe additional money. Some platforms have insurance funds to prevent socialized losses."
  },
  {
    question: "Can I trade equity perps on weekends?",
    answer: "Yes, most platforms like Hyperliquid and Lighter offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price."
  },
  {
    question: "What are funding rates and why do they matter?",
    answer: "Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. If you hold a position, you either pay or receive funding every 1-8 hours depending on the platform."
  },
];

export const metadata: Metadata = {
  title: 'What Are Equity Perpetuals? Complete Beginner Guide',
  description: 'Learn what equity perpetuals are, how they work, and why traders use them. A complete guide for beginners.',
  openGraph: {
    title: 'What Are Equity Perpetuals?',
    description: 'Everything you need to know about equity perps and how to trade them.',
  },
};

export default function WhatAreEquityPerpetuals() {
  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'What Are Equity Perpetuals' }
        ]} />

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Beginner Guide</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            What Are Equity Perpetuals?
          </h1>
          <p className="text-xl text-gray-400">
            A complete introduction to equity perps for traders who want to understand this rapidly growing market.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Equity perpetuals let you trade stock exposure with leverage, 24/7, without actually owning shares.
            They combine the simplicity of perpetual futures with the price action of traditional equities.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Basics</h2>

          <p className="text-gray-300">
            A perpetual future is a derivative contract that tracks an underlying asset price. Unlike traditional futures,
            perpetuals have no expiry date. You can hold them indefinitely. The equity part means the underlying asset
            is a stock like Tesla, Nvidia, or Apple.
          </p>

          <p className="text-gray-300">
            When you open a long equity perp position on NVDA, you profit when Nvidia stock goes up and lose when it goes down.
            The mechanics are similar to spot trading except you can use leverage and go short.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">How They Differ from Regular Stock Trading</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-bold mb-2">Regular Stocks</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Trade during market hours only</li>
                  <li>Need full capital to buy</li>
                  <li>Own actual shares</li>
                  <li>Limited short selling</li>
                  <li>Dividend rights</li>
                  <li>Voting rights</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Equity Perps</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Trade 24/7 on most platforms</li>
                  <li>Use leverage (up to 200x)</li>
                  <li>No share ownership</li>
                  <li>Easy short selling</li>
                  <li>No dividends</li>
                  <li>No voting rights</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Traders Use Equity Perps</h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Leverage</h3>
          <p className="text-gray-300">
            The primary appeal is capital efficiency. With 10x leverage, you control $10,000 of stock exposure with $1,000.
            This amplifies both gains and losses. A 5% move in your favor becomes a 50% return on margin.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">24/7 Access</h3>
          <p className="text-gray-300">
            Traditional markets close at 4 PM Eastern. Earnings announcements, geopolitical events, and Fed decisions
            often happen outside market hours. Equity perps let you react in real time instead of waiting for the opening bell.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Easy Short Selling</h3>
          <p className="text-gray-300">
            Shorting stocks through a broker requires borrowing shares, paying interest, and navigating restrictions.
            With perps, going short is as simple as going long. Click sell instead of buy.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">No KYC on Decentralized Platforms</h3>
          <p className="text-gray-300">
            Most equity perp platforms are decentralized. They do not require identity verification.
            Connect a wallet, deposit stablecoins, and start trading. Privacy and accessibility in one package.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Risks</h2>

          <p className="text-gray-300">
            Leverage cuts both ways. The same 10x that amplifies gains also amplifies losses.
            A 10% adverse move wipes out your entire position. Many traders underestimate how quickly this happens.
          </p>

          <p className="text-gray-300">
            Liquidation is the mechanism that closes your position before you can lose more than your margin.
            On volatile days, liquidations cascade through the market. You can get stopped out even if you were right on direction.
          </p>

          <p className="text-gray-300">
            Funding rates create ongoing costs. Holding a position costs money every few hours. These payments add up,
            especially on popular trades where funding rates spike.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">How Pricing Works</h2>

          <p className="text-gray-300">
            Equity perps use oracle systems to track spot stock prices. Providers like Pyth aggregate price data
            from multiple sources and deliver it on chain. The perp price then converges toward the oracle price
            through the funding mechanism.
          </p>

          <p className="text-gray-300">
            During market hours, oracles pull live data from exchanges. Outside market hours, most platforms use
            the last closing price or limited extended hours data. This creates unique dynamics for overnight and weekend trading.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Getting Started</h2>

          <p className="text-gray-300">
            To trade equity perps you need:
          </p>

          <ol className="text-gray-300 space-y-2 my-4 list-decimal list-inside">
            <li>A crypto wallet (MetaMask, Rabby, or similar)</li>
            <li>USDC stablecoins on the platform's blockchain</li>
            <li>An account on an equity perps platform</li>
          </ol>

          <p className="text-gray-300">
            Start with minimal leverage. Many new traders blow up accounts by using 20x or 50x immediately.
            Begin with 2x to 5x until you understand how the platform handles volatility and liquidations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Which Platform Should You Use?</h2>

          <p className="text-gray-300">
            The best platform depends on your priorities. For beginners, we recommend starting with Hyperliquid
            for its liquidity or Avantis for its zero fee structure. Both offer good user experiences and sufficient
            equity perp selection.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300">
                Use our comparison table
              </Link>
              {' '}to find the platform that matches your trading style. We compare fees, leverage, available assets,
              and more across all major equity perps platforms.
            </p>
          </div>
        </div>

        <FAQSection faqs={faqs} />

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Compare platforms
          </Link>
        </div>
      </article>
    </main>
  );
}
