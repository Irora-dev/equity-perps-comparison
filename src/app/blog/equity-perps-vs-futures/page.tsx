import type { Metadata } from 'next';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

export const metadata: Metadata = {
  title: 'Equity Perps vs Futures: Key Differences Explained | 2026 Guide',
  description: 'Compare equity perpetuals vs traditional futures contracts. Learn about expiration, margin, funding rates, and which is better for your trading style.',
  keywords: [
    'equity perps vs futures',
    'perpetuals vs futures',
    'perpetual futures difference',
    'crypto perps vs futures',
    'no expiration futures',
    'perpetual swaps explained',
    'futures vs perpetuals trading',
    'equity perpetual contracts',
  ],
  openGraph: {
    title: 'Equity Perps vs Futures: Key Differences',
    description: 'Compare perpetuals and traditional futures contracts.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/equity-perps-vs-futures/',
  },
};

export default function EquityPerpsVsFutures() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  return (
    <article className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Equity Perps vs Futures</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Equity Perps vs Futures: What&apos;s the Difference?
          </h1>
          <p className="text-xl text-gray-400">
            Both are derivatives that let you trade with leverage. But perpetuals and futures
            have key structural differences that affect your trading strategy.
          </p>
        </header>

        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-semibold text-white mb-3">Quick Answer</h2>
          <p className="text-gray-300">
            <strong className="text-cyan-400">Perpetuals</strong> have no expiration and use funding rates
            to track spot price. <strong className="text-yellow-400">Futures</strong> expire on set dates
            and converge to spot at expiry. Perps are simpler for most traders.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">At a Glance: Perps vs Futures</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-medium">Perpetuals</th>
                  <th className="text-left py-3 px-4 text-yellow-400 font-medium">Traditional Futures</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-3 px-4 text-gray-400">Expiration</td>
                  <td className="py-3 px-4 text-white">Never expires</td>
                  <td className="py-3 px-4 text-white">Fixed date (monthly/quarterly)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Price Tracking</td>
                  <td className="py-3 px-4 text-white">Funding rate mechanism</td>
                  <td className="py-3 px-4 text-white">Converges at expiry</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Rollover Needed</td>
                  <td className="py-3 px-4 text-green-400">No</td>
                  <td className="py-3 px-4 text-red-400">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Ongoing Costs</td>
                  <td className="py-3 px-4 text-white">Funding payments</td>
                  <td className="py-3 px-4 text-white">None (but basis cost)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Settlement</td>
                  <td className="py-3 px-4 text-white">Cash (continuous)</td>
                  <td className="py-3 px-4 text-white">Cash or physical at expiry</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Complexity</td>
                  <td className="py-3 px-4 text-green-400">Lower</td>
                  <td className="py-3 px-4 text-yellow-400">Higher</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-400">Best For</td>
                  <td className="py-3 px-4 text-white">Active traders, all timeframes</td>
                  <td className="py-3 px-4 text-white">Hedgers, institutions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">What Are Traditional Futures?</h2>
          <p className="text-gray-300 mb-6">
            Futures contracts are agreements to buy or sell an asset at a predetermined price on a
            specific future date. They&apos;ve existed since the 1800s, originally for agricultural commodities.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-white font-semibold mb-4">How Futures Work</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">1</span>
                <span>You enter a contract to buy/sell at a set price on a future date</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">2</span>
                <span>Contract has specific expiration (e.g., March 2026, June 2026)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">3</span>
                <span>Price trades at premium/discount to spot (basis)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">4</span>
                <span>At expiry, contract settles to spot price automatically</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 my-6">
            <h3 className="text-yellow-400 font-semibold mb-3">The Rollover Problem</h3>
            <p className="text-gray-300">
              To maintain exposure beyond expiry, futures traders must &quot;roll&quot; their position —
              close the expiring contract and open the next one. This costs fees, has slippage,
              and requires active management. Miss a rollover and your position closes.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">What Are Perpetuals?</h2>
          <p className="text-gray-300 mb-6">
            Perpetual contracts (perps) are futures that never expire. Instead of convergence at expiry,
            they use a funding rate mechanism to keep prices aligned with spot.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-white font-semibold mb-4">How Perpetuals Work</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">1</span>
                <span>You open a position with no expiration date</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">2</span>
                <span>Funding payments occur every 8 hours (or hourly)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">3</span>
                <span>If perp &gt; spot: longs pay shorts (incentive to sell)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">4</span>
                <span>If perp &lt; spot: shorts pay longs (incentive to buy)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">5</span>
                <span>This keeps perp price tracking spot continuously</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Expiration: The Key Difference</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5">
              <h3 className="text-cyan-400 font-semibold mb-3">Perpetuals</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Hold forever if you want</li>
                <li>• No rollover required</li>
                <li>• No expiration management</li>
                <li>• Pay/earn funding over time</li>
                <li>• Simpler position management</li>
              </ul>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-3">Futures</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Position closes at expiry</li>
                <li>• Must roll for continued exposure</li>
                <li>• Track multiple contract months</li>
                <li>• Basis can work for or against you</li>
                <li>• More complex management</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Cost Comparison</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-white font-semibold mb-4">Perpetuals Cost Structure</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• <strong className="text-white">Trading fees:</strong> Maker/taker fees per trade (often 0.02-0.05%)</li>
              <li>• <strong className="text-white">Funding rate:</strong> Paid/received every 8 hours (~0.01% average)</li>
              <li>• <strong className="text-white">No rollover costs:</strong> Never need to close/reopen</li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-cyan-400">Tip:</strong> When funding is negative, longs actually
                <em> earn</em> money. This can offset trading costs entirely.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-white font-semibold mb-4">Futures Cost Structure</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• <strong className="text-white">Trading fees:</strong> Commission per contract</li>
              <li>• <strong className="text-white">Basis:</strong> Premium/discount to spot (can be significant)</li>
              <li>• <strong className="text-white">Rollover costs:</strong> Spread + fees to roll positions</li>
              <li>• <strong className="text-white">Contango/backwardation:</strong> Structure can erode returns</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Which Should You Use?</h2>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-6">
            <h3 className="text-green-400 font-semibold mb-3">Choose Perpetuals If:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• You want simple, hands-off position management</li>
              <li>• You don&apos;t want to deal with rollovers</li>
              <li>• You trade actively and want 24/7 access</li>
              <li>• You&apos;re comfortable with funding rate costs</li>
              <li>• You want decentralized, non-custodial trading</li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 my-6">
            <h3 className="text-yellow-400 font-semibold mb-3">Choose Futures If:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• You need precise expiration dates (hedging specific events)</li>
              <li>• You trade large institutional size</li>
              <li>• You want regulated, centralized exchanges (CME, etc.)</li>
              <li>• You can manage rollover complexity</li>
              <li>• You prefer no ongoing funding costs</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Equity Perps Specifically</h2>
          <p className="text-gray-300 mb-6">
            For stock trading, perpetuals offer unique advantages:
          </p>
          <ul className="space-y-2 text-gray-300 mb-6">
            <li>• <strong className="text-white">24/7 trading:</strong> Trade stocks on weekends when futures markets are closed</li>
            <li>• <strong className="text-white">No KYC:</strong> Decentralized platforms don&apos;t require identity verification</li>
            <li>• <strong className="text-white">Global access:</strong> Trade US stocks from anywhere</li>
            <li>• <strong className="text-white">Lower minimums:</strong> No contract size requirements</li>
            <li>• <strong className="text-white">Easy shorting:</strong> No borrowing required</li>
          </ul>

          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Try Equity Perpetuals</h2>
            <p className="text-gray-400 mb-6">
              No expiration dates. No rollovers. Just trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={hyperliquid?.referralUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-gray-900 rounded-xl font-bold hover:bg-cyan-400 transition-colors"
              >
                Start Trading
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
              >
                Compare Platforms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
