import type { Metadata } from 'next';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

export const metadata: Metadata = {
  title: 'Trade Stocks on Weekends | 24/7 Stock Trading Guide 2026',
  description: 'Learn how to trade stocks on Saturday and Sunday using equity perpetuals. No market hours restrictions - trade NVDA, TSLA, AAPL anytime including weekends.',
  keywords: [
    'trade stocks on weekends',
    'weekend stock trading',
    'stock trading saturday',
    'stock trading sunday',
    '24/7 stock trading',
    'trade stocks after hours',
    'stock market weekends',
    'trade stocks anytime',
    'no market hours trading',
  ],
  openGraph: {
    title: 'Trade Stocks on Weekends | 24/7 Trading',
    description: 'No market hours. Trade stocks Saturday, Sunday, anytime.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/weekend-stock-trading/',
  },
};

export default function WeekendStockTrading() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');
  const platforms24_7 = platforms.filter(p => p.features.trading24_7 && p.features.equityPerps);

  return (
    <article className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Weekend Stock Trading</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Trade Stocks on Weekends
          </h1>
          <p className="text-xl text-gray-400">
            The stock market is closed Saturday and Sunday. But you can still trade NVDA, TSLA, AAPL
            and 50+ stocks around the clock using equity perpetuals. Here&apos;s how.
          </p>
        </header>

        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 font-semibold">Markets Open 24/7</span>
          </div>
          <p className="text-gray-300 mb-4">
            Equity perpetuals trade around the clock — Saturday 3am, Sunday evening, holidays, anytime.
            React to breaking news without waiting for Monday&apos;s open.
          </p>
          <a
            href={hyperliquid?.referralUrl}
            target="_blank"
            rel="noopener sponsored"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-gray-900 rounded-xl font-semibold hover:bg-cyan-400 transition-colors"
          >
            Start Weekend Trading
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Can&apos;t You Trade Stocks on Weekends?</h2>
          <p className="text-gray-300 mb-6">
            Traditional stock exchanges (NYSE, NASDAQ) operate on fixed schedules:
          </p>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <ul className="space-y-2 text-gray-400">
              <li>• <strong className="text-white">Regular hours:</strong> 9:30 AM - 4:00 PM ET (Mon-Fri)</li>
              <li>• <strong className="text-white">Pre-market:</strong> 4:00 AM - 9:30 AM ET</li>
              <li>• <strong className="text-white">After-hours:</strong> 4:00 PM - 8:00 PM ET</li>
              <li>• <strong className="text-red-400">Weekends:</strong> Closed</li>
              <li>• <strong className="text-red-400">Holidays:</strong> Closed</li>
            </ul>
          </div>
          <p className="text-gray-300 mb-6">
            This means if news breaks on Saturday — earnings leak, CEO resignation, acquisition rumor —
            you can&apos;t react until Monday. By then, the move has already happened at the open.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">How Equity Perps Enable 24/7 Trading</h2>
          <p className="text-gray-300 mb-6">
            Equity perpetuals trade on decentralized exchanges that never close. They&apos;re synthetic
            instruments that track stock prices using oracle price feeds.
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
              <h3 className="text-red-400 font-semibold mb-3">Traditional Stocks</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• 6.5 hours/day trading</li>
                <li>• Closed weekends</li>
                <li>• Closed holidays</li>
                <li>• Gap risk at open</li>
                <li>• Can&apos;t react to weekend news</li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
              <h3 className="text-green-400 font-semibold mb-3">Equity Perpetuals</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 24 hours/day trading</li>
                <li>• Open Saturday & Sunday</li>
                <li>• Open all holidays</li>
                <li>• No gap risk (continuous)</li>
                <li>• React to news instantly</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Weekend Trading Scenarios</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Scenario: Breaking News on Saturday</h3>
              <p className="text-gray-400 text-sm mb-3">
                NVDA announces a major AI partnership Saturday afternoon. Traditional traders must wait
                until Monday&apos;s open when the stock gaps up 8%.
              </p>
              <p className="text-cyan-400 text-sm">
                <strong>With perps:</strong> Open a long position immediately on Saturday. Capture the
                entire move as it happens over the weekend.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Scenario: Hedge Your Portfolio</h3>
              <p className="text-gray-400 text-sm mb-3">
                You hold TSLA shares and see negative news developing Sunday evening. You&apos;re worried
                about Monday&apos;s open.
              </p>
              <p className="text-cyan-400 text-sm">
                <strong>With perps:</strong> Open a short TSLA perp position Sunday to hedge your shares.
                If TSLA gaps down Monday, your perp profits offset share losses.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Scenario: Global Events</h3>
              <p className="text-gray-400 text-sm mb-3">
                Geopolitical news breaks Sunday. Asian markets react, but US markets are closed.
              </p>
              <p className="text-cyan-400 text-sm">
                <strong>With perps:</strong> Trade US stocks in real-time as global sentiment shifts.
                Position before the Monday rush.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Platforms for Weekend Trading</h2>
          <div className="space-y-4 my-6">
            {platforms24_7.slice(0, 4).map((p, i) => (
              <div key={p.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-900 font-bold" style={{ backgroundColor: p.color }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{p.name}</h3>
                    <p className="text-gray-500 text-sm">{p.chain} • {p.maxLeverage}</p>
                  </div>
                </div>
                <a href={p.referralUrl} target="_blank" rel="noopener sponsored" className="px-4 py-2 bg-cyan-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-cyan-400">
                  Trade 24/7
                </a>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">How to Start Weekend Trading</h2>
          <div className="space-y-4 my-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Get a Wallet</h3>
                <p className="text-gray-400">Download <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300">Rabby Wallet</a>. Takes 2 minutes.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Fund with USDC</h3>
                <p className="text-gray-400">Buy USDC on an exchange or use a card onramp.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Connect & Trade</h3>
                <p className="text-gray-400">Open Hyperliquid, deposit USDC, and trade any day, any time.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Weekend Trading Considerations</h2>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 my-6">
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">Lower liquidity</strong> — Weekends may have slightly wider spreads</li>
              <li>• <strong className="text-white">Oracle updates</strong> — Price feeds continue updating via DeFi oracles</li>
              <li>• <strong className="text-white">Funding rates</strong> — Still accumulate on weekends</li>
              <li>• <strong className="text-white">Not actual shares</strong> — You&apos;re trading derivatives, not ownership</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Stocks Available for Weekend Trading</h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 my-6">
            {['NVDA', 'TSLA', 'AAPL', 'MSFT', 'AMZN', 'META', 'GOOGL', 'COIN', 'PLTR', 'NFLX', 'AMD', 'MSTR'].map(t => (
              <Link key={t} href={`/stocks/${t.toLowerCase()}`} className="bg-gray-800 rounded-lg p-2 text-center text-white text-sm font-medium hover:bg-gray-700">
                {t}
              </Link>
            ))}
          </div>
          <Link href="/stocks" className="text-cyan-400 hover:text-cyan-300 text-sm">See all 50+ stocks →</Link>

          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Trade Stocks Any Day, Any Time</h2>
            <p className="text-gray-400 mb-6">Saturday, Sunday, 3am — markets never close.</p>
            <a
              href={hyperliquid?.referralUrl}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-gray-900 rounded-xl font-bold text-lg hover:bg-cyan-400 transition-colors"
            >
              Start 24/7 Trading
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
