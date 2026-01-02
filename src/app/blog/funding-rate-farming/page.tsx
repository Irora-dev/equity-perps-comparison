import type { Metadata } from 'next';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

export const metadata: Metadata = {
  title: 'Funding Rate Farming: Earn Yield on Equity Perps | Strategy Guide',
  description: 'Learn how to earn passive income through funding rate farming on equity perpetuals. Capture funding payments by taking positions when rates are favorable.',
  keywords: [
    'funding rate farming',
    'funding rate strategy',
    'earn funding rates',
    'perps yield farming',
    'funding rate arbitrage',
    'passive income perps',
    'equity perps yield',
    'funding rate trading',
  ],
  openGraph: {
    title: 'Funding Rate Farming: Earn Yield on Equity Perps',
    description: 'Learn how to earn passive income through funding rate farming.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/funding-rate-farming/',
  },
};

export default function FundingRateFarming() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  return (
    <article className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Funding Rate Farming</span>
        </nav>

        <header className="mb-12">
          <span className="text-green-400 text-sm font-medium">Advanced Strategy</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 mt-2">
            Funding Rate Farming: Earn Yield on Equity Perps
          </h1>
          <p className="text-xl text-gray-400">
            Funding rates aren&apos;t just a cost — they can be a source of income. Learn how traders
            earn passive yield by strategically positioning for funding payments.
          </p>
        </header>

        <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-semibold text-white mb-3">What is Funding Rate Farming?</h2>
          <p className="text-gray-300">
            Funding rates are periodic payments between long and short traders. When rates are
            <span className="text-green-400"> negative</span>, longs earn from shorts. When
            <span className="text-yellow-400"> positive</span>, shorts earn from longs. Funding
            farming means positioning to capture these payments.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">How Funding Rates Work</h2>
          <p className="text-gray-300 mb-6">
            Funding rates keep perpetual prices aligned with spot prices. They&apos;re calculated every 8 hours
            (or hourly on some platforms) and paid directly between traders.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
              <h3 className="text-yellow-400 font-semibold mb-3">Positive Funding</h3>
              <p className="text-gray-300 text-sm mb-3">Perp price &gt; Spot price</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Longs pay shorts</li>
                <li>• Indicates bullish sentiment</li>
                <li>• <strong className="text-white">Shorts earn</strong></li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
              <h3 className="text-green-400 font-semibold mb-3">Negative Funding</h3>
              <p className="text-gray-300 text-sm mb-3">Perp price &lt; Spot price</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Shorts pay longs</li>
                <li>• Indicates bearish sentiment</li>
                <li>• <strong className="text-white">Longs earn</strong></li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Basic Funding Farming Strategy</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-white font-semibold mb-4">Strategy: Capture High Funding</h3>
            <ol className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Monitor funding rates across stocks on our <Link href="/" className="text-cyan-400 hover:text-cyan-300">live comparison</Link></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Find stocks with consistently high positive or negative funding</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Take the side that earns (short if positive, long if negative)</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span>Hold and collect funding payments every 8 hours</span>
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Delta-Neutral Funding Farming</h2>
          <p className="text-gray-300 mb-4">
            The most sophisticated approach is delta-neutral farming — hedging your price exposure while
            capturing funding payments.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-white font-semibold mb-4">How it Works</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold flex-shrink-0">1</div>
                <div>
                  <p className="text-white font-medium">Open a perp position</p>
                  <p className="text-gray-400 text-sm">Short NVDA perp on Hyperliquid (earning positive funding)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold flex-shrink-0">2</div>
                <div>
                  <p className="text-white font-medium">Hedge with spot</p>
                  <p className="text-gray-400 text-sm">Buy equivalent NVDA exposure elsewhere (actual shares or another platform)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold flex-shrink-0">3</div>
                <div>
                  <p className="text-white font-medium">Collect funding</p>
                  <p className="text-gray-400 text-sm">Price moves offset each other; you keep the funding payments</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Example Calculation</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">Position Size</td>
                  <td className="py-2 text-white text-right">$10,000</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">Funding Rate (8hr)</td>
                  <td className="py-2 text-white text-right">+0.01%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">Daily Funding (3x)</td>
                  <td className="py-2 text-green-400 text-right">$3.00</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">Monthly Funding (~90x)</td>
                  <td className="py-2 text-green-400 text-right">$90</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-400">Annualized Yield</td>
                  <td className="py-2 text-green-400 text-right font-bold">~11% APY</td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-500 text-xs mt-3">
              *Assumes consistent funding rate. Actual rates vary significantly.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Risks of Funding Farming</h2>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong className="text-white">Funding can flip:</strong> Rates change constantly. Positive can become negative quickly.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong className="text-white">Price risk:</strong> Without proper hedging, price moves can overwhelm funding gains.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong className="text-white">Hedging costs:</strong> Delta-neutral strategies have friction costs and complexity.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span><strong className="text-white">Liquidation:</strong> If not properly hedged, you can still be liquidated on the perp side.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Finding High Funding Opportunities</h2>
          <p className="text-gray-300 mb-4">
            Check our <Link href="/" className="text-cyan-400 hover:text-cyan-300">live funding rate comparison</Link> to find stocks with:
          </p>
          <ul className="space-y-2 text-gray-300 mb-6">
            <li>• Consistently negative funding (earn by going long)</li>
            <li>• Consistently positive funding (earn by going short)</li>
            <li>• Wide funding spreads between platforms (cross-platform arbitrage)</li>
          </ul>

          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Check Live Funding Rates</h2>
            <p className="text-gray-400 mb-6">See which stocks have the best funding opportunities right now.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-gray-900 rounded-xl font-bold hover:bg-cyan-400 transition-colors"
              >
                View Live Rates
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </Link>
              <a
                href={hyperliquid?.referralUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
              >
                Start on Hyperliquid
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
