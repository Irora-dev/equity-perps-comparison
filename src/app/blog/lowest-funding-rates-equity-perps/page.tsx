import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equity Perps with the Lowest Funding Rates',
  description: 'Compare funding rates across equity perpetual platforms. Find where holding positions costs least.',
  openGraph: {
    title: 'Lowest Funding Rates for Equity Perps',
    description: 'Which platforms offer the most competitive funding rates for equity perpetuals?',
  },
};

export default function LowestFundingRates() {
  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-300">Lowest Funding Rates</li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Cost Analysis</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Equity Perps with the Lowest Funding Rates
          </h1>
          <p className="text-xl text-gray-400">
            Funding rates can make or break a position. Here is where you pay the least to hold.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Funding rates are the hidden cost of perpetual futures. Unlike trading fees that you pay once,
            funding accumulates every hour you hold a position. A 0.01% hourly rate sounds small.
            Over a week, that is 1.68% of your position gone.
          </p>

          <p className="text-gray-300">
            Equity perps add complexity because traditional stock markets close. How platforms handle funding
            during off hours varies widely.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">How Funding Rates Work</h2>

          <p className="text-gray-300">
            Funding keeps perpetual prices aligned with spot markets. When perp price exceeds spot,
            longs pay shorts. When perp price falls below spot, shorts pay longs. Simple mechanism, significant impact.
          </p>

          <p className="text-gray-300">
            Rates adjust based on the difference between perp and spot prices plus market imbalance.
            Heavy long positioning pushes funding higher. Heavy short positioning drives it negative.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Platform Comparison</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-lg font-bold text-white mb-4">Hyperliquid</h3>
            <p className="text-gray-300 mb-2">
              Standard 8 hour funding intervals. Rates typically range from -0.01% to +0.01% per interval.
              The deep liquidity helps keep rates stable.
            </p>
            <p className="text-gray-400 text-sm">
              Best for: Position traders who want predictable funding
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-lg font-bold text-white mb-4">Lighter</h3>
            <p className="text-gray-300 mb-2">
              Hourly funding with rates determined by market conditions. The ZK proof system ensures
              funding calculations are verifiable.
            </p>
            <p className="text-gray-400 text-sm">
              Best for: Traders who want transparent, verifiable funding
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-lg font-bold text-white mb-4">Ostium</h3>
            <p className="text-gray-300 mb-2">
              Funding only applies during market hours for equity perps. With 0DTE products,
              positions close before funding can accumulate significantly.
            </p>
            <p className="text-gray-400 text-sm">
              Best for: Day traders avoiding overnight funding
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-lg font-bold text-white mb-4">Avantis</h3>
            <p className="text-gray-300 mb-2">
              Continuous funding with rates that adjust based on open interest imbalance.
              The zero fee model means funding is your primary cost.
            </p>
            <p className="text-gray-400 text-sm">
              Best for: Traders who offset funding with zero trading fees
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-lg font-bold text-white mb-4">Variational</h3>
            <p className="text-gray-300 mb-2">
              RFQ based system where funding is built into quotes. No separate funding payments,
              but the cost is embedded in your entry and exit prices.
            </p>
            <p className="text-gray-400 text-sm">
              Best for: Traders who prefer all-in pricing
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Strategies to Minimize Funding</h2>

          <p className="text-gray-300">
            Smart traders manage funding exposure actively. Here are proven approaches:
          </p>

          <ul className="text-gray-300 space-y-3 my-4">
            <li>
              <strong className="text-white">Trade the side being paid:</strong> When funding is highly negative,
              shorts pay longs. Position accordingly when the reward justifies it.
            </li>
            <li>
              <strong className="text-white">Use Ostium for day trades:</strong> The 0DTE product eliminates overnight
              funding entirely. Great for intraday strategies.
            </li>
            <li>
              <strong className="text-white">Time your entries:</strong> Funding settles at fixed intervals. Enter just after
              settlement to maximize time before the next payment.
            </li>
            <li>
              <strong className="text-white">Hedge across platforms:</strong> If Hyperliquid funding is positive and
              Lighter is negative, you can capture the spread.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Current Market Conditions</h2>

          <p className="text-gray-300">
            Funding rates fluctuate constantly. During bull markets, longs typically pay shorts.
            In downtrends, the reverse often holds. Equity perps tend to have lower funding volatility
            than crypto perps because of the natural arbitrage with traditional markets.
          </p>

          <p className="text-gray-300">
            Check current rates directly on each platform before opening positions.
            What was cheap yesterday might be expensive today.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Recommendation</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">For swing traders:</strong> Hyperliquid offers the most stable funding
              environment due to liquidity depth. Predictable costs help with position sizing.
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">For day traders:</strong> Ostium's 0DTE products eliminate funding concerns entirely.
              No overnight holding means no overnight costs.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">For cost optimizers:</strong> Pair Avantis zero trading fees with active funding
              management. The fee savings offset funding costs.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 my-8">
            {platforms.slice(0, 4).map(platform => (
              <ReferralButton
                key={platform.id}
                href={platform.referralUrl}
                platformName={platform.name}
                color={platform.color}
                className="text-sm"
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to comparison table
          </Link>
        </div>
      </article>
    </main>
  );
}
