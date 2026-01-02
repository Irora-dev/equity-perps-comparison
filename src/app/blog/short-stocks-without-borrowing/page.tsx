import type { Metadata } from 'next';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

export const metadata: Metadata = {
  title: 'How to Short Stocks Without Borrowing | No Locate Required',
  description: 'Short any stock instantly without borrowing shares or paying locate fees. Learn how equity perpetuals let you short NVDA, TSLA, GME without restrictions.',
  keywords: [
    'short stocks without borrowing',
    'short selling no borrow',
    'short stocks no locate',
    'how to short without borrowing',
    'short selling alternative',
    'short hard to borrow stocks',
    'short GME without borrow',
    'short TSLA without borrowing',
    'no borrow fee shorting',
    'instant short selling',
  ],
  openGraph: {
    title: 'How to Short Stocks Without Borrowing',
    description: 'No locate fees, no borrow restrictions. Short any stock instantly.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/short-stocks-without-borrowing/',
  },
};

export default function ShortStocksWithoutBorrowing() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Short Stocks Without Borrowing",
    "description": "Short stocks instantly using equity perpetuals without borrowing shares",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Get USDC", "text": "Fund your wallet with USDC stablecoin" },
      { "@type": "HowToStep", "position": 2, "name": "Connect to platform", "text": "Connect wallet to Hyperliquid or similar platform" },
      { "@type": "HowToStep", "position": 3, "name": "Open short position", "text": "Select the stock, choose 'Short', set leverage, and execute" },
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Short Stocks Without Borrowing</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How to Short Stocks Without Borrowing
            </h1>
            <p className="text-xl text-gray-400">
              No locate fees. No borrow restrictions. No &quot;hard to borrow&quot; lists. Short any stock instantly
              using equity perpetuals — even during short squeezes.
            </p>
          </header>

          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-white mb-3">Short Any Stock Instantly</h2>
            <p className="text-gray-300 mb-4">
              Equity perpetuals let you short stocks without borrowing shares. Just deposit USDC, click &quot;Short&quot;,
              and you&apos;re in. Works on <strong className="text-cyan-400">NVDA, TSLA, GME, MSTR</strong> and 50+ stocks.
            </p>
            <a
              href={hyperliquid?.referralUrl}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-400 transition-colors"
            >
              Start Shorting on Hyperliquid
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Problem with Traditional Short Selling</h2>
            <p className="text-gray-300 mb-6">
              Want to short a stock through a traditional broker? Here&apos;s what you&apos;re up against:
            </p>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong className="text-white">Borrow availability</strong> — Broker must have shares to lend. Popular shorts often unavailable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong className="text-white">Locate fees</strong> — &quot;Hard to borrow&quot; stocks can cost 50-300%+ annualized to short.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong className="text-white">Forced buy-ins</strong> — Broker can force you to close if shares recalled.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong className="text-white">Margin requirements</strong> — Need 150%+ margin for short positions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span><strong className="text-white">Short squeeze risk</strong> — Hard to maintain position during squeezes when borrow dries up.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">How Equity Perps Solve This</h2>
            <p className="text-gray-300 mb-6">
              Equity perpetuals are synthetic derivatives — you&apos;re not borrowing actual shares. You&apos;re simply
              taking a position that profits when the price goes down.
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-white">Always available</strong> — No borrow needed. Short any stock, anytime.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-white">No locate fees</strong> — Same cost to short &quot;easy&quot; or &quot;hard to borrow&quot; stocks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-white">No forced buy-ins</strong> — Your position stays open as long as you have margin.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-white">Flexible leverage</strong> — Choose 1x to 50x+ depending on platform.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-white">Earn funding</strong> — When funding is positive, shorts actually earn money.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Shorting &quot;Hard to Borrow&quot; Stocks</h2>
            <p className="text-gray-300 mb-6">
              Stocks like GME, AMC, MSTR, and meme stocks are often impossible or extremely expensive to short through
              traditional brokers. With perps:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              {['GME', 'MSTR', 'TSLA', 'PLTR', 'HOOD', 'COIN', 'NVDA', 'AMD'].map(ticker => (
                <Link
                  key={ticker}
                  href={`/stocks/${ticker.toLowerCase()}`}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-center hover:border-red-500/50 transition-colors"
                >
                  <span className="text-white font-semibold">{ticker}</span>
                  <p className="text-green-400 text-xs mt-1">Shortable</p>
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">How to Short (Step by Step)</h2>
            <div className="space-y-6 my-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fund Your Wallet</h3>
                  <p className="text-gray-400">Get USDC stablecoin in your <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300">Rabby Wallet</a>. Transfer from Coinbase/Kraken or use a card onramp. <a href="/blog/wallet-setup-guide" className="text-cyan-400 hover:text-cyan-300">Setup guide →</a></p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Connect to Platform</h3>
                  <p className="text-gray-400">Go to <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-cyan-400 hover:text-cyan-300">Hyperliquid</a>, connect your wallet, and deposit USDC.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Open Short Position</h3>
                  <p className="text-gray-400">Search for your stock (e.g., TSLA-PERP), click &quot;Short&quot;, set your leverage (start low: 2-5x), enter size, and confirm.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Profit When Price Falls</h3>
                  <p className="text-gray-400">Your position profits when the stock price decreases. Close anytime by clicking &quot;Close Position&quot;.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Funding Rates for Shorts</h2>
            <p className="text-gray-300 mb-6">
              Here&apos;s a bonus: when funding rates are positive (longs pay shorts), <strong className="text-green-400">you earn money</strong> just
              for holding your short position. Check current rates on our <Link href="/" className="text-cyan-400 hover:text-cyan-300">live comparison</Link>.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Risk Management</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 my-6">
              <h3 className="text-yellow-400 font-semibold mb-3">Important Considerations</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">Unlimited loss potential</strong> — Stocks can theoretically go up infinitely. Use stop-losses.</li>
                <li>• <strong className="text-white">Leverage amplifies losses</strong> — A 10% move against you at 10x = 100% loss.</li>
                <li>• <strong className="text-white">Liquidation risk</strong> — If price moves too far against you, position auto-closes.</li>
                <li>• <strong className="text-white">Funding can flip</strong> — During squeezes, funding can go negative (shorts pay longs).</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Short Any Stock, Instantly</h2>
              <p className="text-gray-400 mb-6">No borrow needed. No locate fees. Just click &quot;Short&quot;.</p>
              <a
                href={hyperliquid?.referralUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 text-white rounded-xl font-bold text-lg hover:bg-red-400 transition-colors"
              >
                Start Shorting on Hyperliquid
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
