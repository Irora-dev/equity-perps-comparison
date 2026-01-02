import type { Metadata } from 'next';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

export const metadata: Metadata = {
  title: 'Hyperliquid Tutorial: Complete Beginner Guide 2026',
  description: 'Step-by-step Hyperliquid tutorial. Learn how to connect, deposit, and trade equity perpetuals on the largest decentralized exchange. Start trading in 10 minutes.',
  keywords: [
    'hyperliquid tutorial',
    'how to use hyperliquid',
    'hyperliquid guide',
    'hyperliquid beginner guide',
    'hyperliquid deposit',
    'hyperliquid trading',
    'hyperliquid equity perps',
    'hyperliquid wallet',
    'hyperliquid step by step',
  ],
  openGraph: {
    title: 'Hyperliquid Tutorial: Complete Beginner Guide',
    description: 'Learn how to trade on Hyperliquid step by step.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/hyperliquid-tutorial/',
  },
};

export default function HyperliquidTutorial() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Hyperliquid",
    "description": "Complete tutorial for trading on Hyperliquid exchange",
    "totalTime": "PT10M",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Install wallet", "text": "Download and install Rabby Wallet browser extension from rabby.io" },
      { "@type": "HowToStep", "position": 2, "name": "Create wallet", "text": "Create a new wallet and securely save your seed phrase" },
      { "@type": "HowToStep", "position": 3, "name": "Get USDC", "text": "Buy USDC on Arbitrum from an exchange or use the onramp" },
      { "@type": "HowToStep", "position": 4, "name": "Connect to Hyperliquid", "text": "Go to app.hyperliquid.xyz and connect your wallet" },
      { "@type": "HowToStep", "position": 5, "name": "Deposit USDC", "text": "Deposit USDC from your wallet to Hyperliquid" },
      { "@type": "HowToStep", "position": 6, "name": "Start trading", "text": "Search for a market, set leverage, and open your first position" },
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Rabby Wallet browser extension" },
      { "@type": "HowToTool", "name": "USDC stablecoin" },
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
            <span className="text-gray-400">Hyperliquid Tutorial</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl" style={{ backgroundColor: hyperliquid?.color }}>
                H
              </div>
              <span className="text-cyan-400 font-medium">Platform Guide</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Hyperliquid Tutorial: Complete Beginner Guide
            </h1>
            <p className="text-xl text-gray-400">
              Learn how to trade on Hyperliquid, the largest decentralized perpetuals exchange.
              This step-by-step guide will have you trading NVDA, TSLA, and 50+ stocks in under 10 minutes.
            </p>
          </header>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-white">$319B+</p>
              <p className="text-gray-500 text-sm">Monthly Volume</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-gray-500 text-sm">Equity Perps</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-white">50x</p>
              <p className="text-gray-500 text-sm">Max Leverage</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What You&apos;ll Need</h2>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• A computer with Chrome, Firefox, or Brave browser</li>
              <li>• ~$50-100 in USDC to start (minimum ~$10)</li>
              <li>• 10 minutes to set up</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 1: Install Rabby Wallet</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
              <p className="text-gray-300 mb-4">
                You need a crypto wallet to interact with Hyperliquid. We recommend <strong className="text-cyan-400">Rabby Wallet</strong> —
                it&apos;s built for DeFi trading with security features like transaction simulations and scam warnings.
              </p>
              <a
                href="https://rabby.io"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-gray-900 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
              >
                Download Rabby Wallet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 2: Create Your Wallet</h2>
            <ol className="space-y-4 text-gray-300 mb-6">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Open the wallet extension after installing</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Click &quot;Create New Wallet&quot;</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Set a strong password</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span><strong className="text-white">Write down your seed phrase</strong> on paper (not digitally!) and store it safely</span>
              </li>
            </ol>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 my-6">
              <p className="text-red-400 font-semibold mb-2">Critical Security Warning</p>
              <p className="text-gray-300 text-sm">Never share your seed phrase with anyone. Never enter it on any website. Anyone with your seed phrase can steal all your funds.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 3: Get USDC</h2>
            <p className="text-gray-300 mb-4">You need USDC (a stablecoin pegged to USD) to trade on Hyperliquid. Options:</p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">Option A: Buy on Exchange</h3>
                <ol className="text-gray-400 text-sm space-y-1">
                  <li>1. Buy USDC on Coinbase/Kraken</li>
                  <li>2. Withdraw to your wallet on Arbitrum</li>
                  <li>3. Bridge to Hyperliquid L1 (automatic)</li>
                </ol>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">Option B: Card Onramp</h3>
                <ol className="text-gray-400 text-sm space-y-1">
                  <li>1. Connect wallet to Hyperliquid</li>
                  <li>2. Click &quot;Deposit&quot; → &quot;Buy with Card&quot;</li>
                  <li>3. Complete purchase (may require KYC)</li>
                </ol>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 4: Connect to Hyperliquid</h2>
            <ol className="space-y-4 text-gray-300 mb-6">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Go to <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-cyan-400 hover:text-cyan-300">app.hyperliquid.xyz</a></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Click &quot;Connect&quot; in the top right</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Select Rabby Wallet from the options</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span>Approve the connection in your wallet popup</span>
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 5: Deposit USDC</h2>
            <ol className="space-y-4 text-gray-300 mb-6">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Click &quot;Deposit&quot; at the top of the page</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Enter the amount of USDC to deposit</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Confirm the transaction in your wallet</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span>Wait for confirmation (~1-2 minutes)</span>
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 6: Make Your First Trade</h2>
            <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-xl p-6 my-6">
              <h3 className="text-white font-semibold mb-4">Trading NVDA Example</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>Search for &quot;NVDA&quot; in the market selector (top left)</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>Click on &quot;NVDA-PERP&quot; to open the trading panel</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>Set your leverage (start with 2-5x for beginners)</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span>Choose &quot;Long&quot; (bullish) or &quot;Short&quot; (bearish)</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                  <span>Enter your position size in USD</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                  <span>Review and click &quot;Open Long&quot; or &quot;Open Short&quot;</span>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Available Equity Perps</h2>
            <p className="text-gray-300 mb-4">Hyperliquid offers 50+ equity perpetuals including:</p>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 my-6">
              {['NVDA', 'TSLA', 'AAPL', 'MSFT', 'AMZN', 'META', 'GOOGL', 'COIN', 'PLTR', 'NFLX', 'AMD', 'HOOD'].map(t => (
                <Link key={t} href={`/stocks/${t.toLowerCase()}`} className="bg-gray-800 rounded-lg p-2 text-center text-white text-sm font-medium hover:bg-gray-700">
                  {t}
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Tips for Beginners</h2>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Start with low leverage</strong> — 2-5x until you understand the mechanics</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Use stop-losses</strong> — Set them to limit potential losses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Watch funding rates</strong> — Negative rates mean longs earn, positive means longs pay</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Start small</strong> — Trade with amounts you can afford to lose while learning</span>
              </li>
            </ul>

            <div className="bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-2xl p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Trading?</h2>
              <p className="text-gray-400 mb-6">Open Hyperliquid and trade 50+ stocks 24/7.</p>
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
