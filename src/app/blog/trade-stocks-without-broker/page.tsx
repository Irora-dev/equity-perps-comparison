import type { Metadata } from 'next';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

export const metadata: Metadata = {
  title: 'Trade Stocks Without a Broker | Direct Access Guide 2026',
  description: 'Learn how to trade stocks without a traditional broker using equity perpetuals. No brokerage account needed - just a crypto wallet. Trade NVDA, TSLA, AAPL 24/7.',
  keywords: [
    'trade stocks without broker',
    'no broker stock trading',
    'trade stocks with crypto wallet',
    'stock trading no brokerage',
    'direct stock trading',
    'decentralized stock trading',
    'trade stocks without account',
    'broker-free stock trading',
    'self-custody stock trading',
  ],
  openGraph: {
    title: 'Trade Stocks Without a Broker | 2026 Guide',
    description: 'No brokerage account needed. Trade stocks with just a crypto wallet.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/trade-stocks-without-broker/',
  },
};

export default function TradeStocksWithoutBroker() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Trade Stocks Without a Broker: Complete Guide",
    "author": { "@type": "Organization", "name": "Compare Equity Perps" },
    "datePublished": "2026-01-01",
    "dateModified": new Date().toISOString(),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Trade Stocks Without a Broker",
    "description": "Step-by-step guide to trading stocks using equity perpetuals without a brokerage account",
    "totalTime": "PT10M",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Get a wallet", "text": "Download Rabby Wallet from rabby.io and create a new crypto wallet" },
      { "@type": "HowToStep", "position": 2, "name": "Fund with USDC", "text": "Buy USDC stablecoin from an exchange or use a card onramp" },
      { "@type": "HowToStep", "position": 3, "name": "Connect to platform", "text": "Go to Hyperliquid and connect your wallet" },
      { "@type": "HowToStep", "position": 4, "name": "Start trading", "text": "Deposit USDC and open positions on stocks like NVDA, TSLA, AAPL" },
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Trade Stocks Without Broker</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Trade Stocks Without a Broker
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Skip the brokerage account. Trade NVDA, TSLA, AAPL, and 50+ stocks using just a crypto wallet.
              No application, no approval wait, no minimum balance.
            </p>
          </header>

          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-white mb-3">The Short Version</h2>
            <p className="text-gray-300 mb-4">
              Equity perpetuals let you trade stock price exposure without a broker. Connect a wallet to
              <strong className="text-cyan-400"> Hyperliquid</strong>, deposit USDC, and trade stocks 24/7.
            </p>
            <a
              href={hyperliquid?.referralUrl}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-gray-900 rounded-xl font-semibold hover:bg-green-400 transition-colors"
            >
              Start Trading Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Skip the Broker?</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <h3 className="text-red-400 font-semibold mb-3">Traditional Brokers</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Application + approval process</li>
                  <li>• SSN and identity verification</li>
                  <li>• Days/weeks to get started</li>
                  <li>• Market hours only (9:30-4 ET)</li>
                  <li>• Limited leverage (2-4x margin)</li>
                  <li>• Broker holds your funds</li>
                  <li>• T+2 settlement</li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                <h3 className="text-green-400 font-semibold mb-3">Equity Perpetuals</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Just connect a wallet</li>
                  <li>• No identity verification</li>
                  <li>• Start in 10 minutes</li>
                  <li>• Trade 24/7/365</li>
                  <li>• Up to 200x leverage</li>
                  <li>• Self-custody (your keys)</li>
                  <li>• Instant settlement</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">How It Works</h2>
            <p className="text-gray-300 mb-6">
              Equity perpetuals are synthetic derivatives that track stock prices. They trade on decentralized
              exchanges using USDC stablecoin as collateral. You&apos;re not buying actual shares — you&apos;re trading
              price exposure with leverage.
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-gray-900 font-bold text-lg flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Get a Crypto Wallet</h3>
                  <p className="text-gray-400">Download <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300">Rabby Wallet</a>. Create a new wallet in 2 minutes. No email, no phone number — just save your seed phrase securely. <a href="/blog/wallet-setup-guide" className="text-cyan-400 hover:text-cyan-300">Full setup guide →</a></p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-gray-900 font-bold text-lg flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Get USDC</h3>
                  <p className="text-gray-400">Buy USDC from Coinbase, Kraken, or use a card onramp directly on the platform. USDC is a stablecoin pegged 1:1 to USD.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-gray-900 font-bold text-lg flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Connect & Deposit</h3>
                  <p className="text-gray-400">Go to Hyperliquid, click &quot;Connect Wallet&quot;, and deposit your USDC. The platform is non-custodial — you maintain control.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-gray-900 font-bold text-lg flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Trade Stocks</h3>
                  <p className="text-gray-400">Search for your stock (NVDA-PERP, TSLA-PERP, etc.), choose long or short, set leverage, and open your position. Done.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Available Stocks</h2>
            <p className="text-gray-300 mb-4">Trade perpetuals on 50+ major stocks including:</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 my-6">
              {['NVDA', 'TSLA', 'AAPL', 'MSFT', 'AMZN', 'META', 'GOOGL', 'COIN', 'PLTR', 'NFLX', 'AMD', 'HOOD'].map(t => (
                <Link key={t} href={`/stocks/${t.toLowerCase()}`} className="bg-gray-800 rounded-lg p-2 text-center text-white text-sm font-medium hover:bg-gray-700 transition-colors">
                  {t}
                </Link>
              ))}
            </div>
            <Link href="/stocks" className="text-cyan-400 hover:text-cyan-300 text-sm">See all 50+ stocks →</Link>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Best Platforms</h2>
            <div className="space-y-4 my-6">
              {platforms.filter(p => p.features.equityPerps && p.features.selfCustody).slice(0, 3).map((p, i) => (
                <div key={p.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-900 font-bold" style={{ backgroundColor: p.color }}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{p.name}</h3>
                      <p className="text-gray-500 text-sm">{p.maxLeverage} leverage • {p.features.zeroFees ? 'Zero fees' : 'Low fees'}</p>
                    </div>
                  </div>
                  <a href={p.referralUrl} target="_blank" rel="noopener sponsored" className="px-4 py-2 bg-cyan-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-cyan-400">
                    Trade
                  </a>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What You Need to Know</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 my-6">
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">Not actual shares</strong> — You&apos;re trading price exposure, not ownership</li>
                <li>• <strong className="text-white">No dividends</strong> — Perp holders don&apos;t receive dividend payments</li>
                <li>• <strong className="text-white">Leverage risk</strong> — Higher leverage = higher liquidation risk</li>
                <li>• <strong className="text-white">Funding rates</strong> — Periodic payments between longs and shorts</li>
                <li>• <strong className="text-white">Self-custody responsibility</strong> — You manage your own keys</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-2xl p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Skip the Broker, Start Trading</h2>
              <p className="text-gray-400 mb-6">No account application. No waiting. Just connect and trade.</p>
              <a
                href={hyperliquid?.referralUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-gray-900 rounded-xl font-bold text-lg hover:bg-cyan-400 transition-colors"
              >
                Open Hyperliquid
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
