import type { Metadata } from 'next';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

export const metadata: Metadata = {
  title: 'How to Set Up a Wallet for Trading Equity Perps | Complete Guide 2026',
  description: 'Step-by-step guide to setting up Rabby Wallet to trade equity perpetuals. Learn how to install, fund with USDC from Coinbase/Kraken, and connect to trading platforms.',
  keywords: [
    'wallet setup',
    'rabby wallet setup',
    'rabby wallet guide',
    'wallet for equity perps',
    'how to trade perps',
    'USDC wallet setup',
    'defi wallet guide',
    'connect wallet hyperliquid',
    'transfer usdc coinbase',
    'transfer usdc kraken',
  ],
  openGraph: {
    title: 'How to Set Up a Wallet for Equity Perps Trading',
    description: 'Complete guide to wallet setup, funding, and connecting to trading platforms.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/wallet-setup-guide/',
  },
};

const walletGuideSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Set Up a Wallet for Trading Equity Perps',
  description: 'Complete guide to setting up a self-custody wallet, funding it with USDC, and connecting to equity perpetual trading platforms.',
  totalTime: 'PT15M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  supply: [
    {
      '@type': 'HowToSupply',
      name: 'Computer or smartphone',
    },
    {
      '@type': 'HowToSupply',
      name: 'USDC or USDT for trading',
    },
  ],
  tool: [
    {
      '@type': 'HowToTool',
      name: 'Web browser (Chrome, Firefox, Brave)',
    },
    {
      '@type': 'HowToTool',
      name: 'Rabby Wallet browser extension',
    },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Install Rabby Wallet',
      text: 'Download and install Rabby Wallet from rabby.io for your browser.',
      url: 'https://compareequityperps.com/blog/wallet-setup-guide/#install',
    },
    {
      '@type': 'HowToStep',
      name: 'Install the Extension',
      text: 'Download and install the wallet browser extension from the official website.',
      url: 'https://compareequityperps.com/blog/wallet-setup-guide/#install',
    },
    {
      '@type': 'HowToStep',
      name: 'Create Your Wallet',
      text: 'Set up a new wallet and securely store your seed phrase.',
      url: 'https://compareequityperps.com/blog/wallet-setup-guide/#create',
    },
    {
      '@type': 'HowToStep',
      name: 'Fund Your Wallet',
      text: 'Add USDC to your wallet via exchange transfer or card purchase.',
      url: 'https://compareequityperps.com/blog/wallet-setup-guide/#fund',
    },
    {
      '@type': 'HowToStep',
      name: 'Connect to Platform',
      text: 'Connect your wallet to Hyperliquid or other equity perps platforms.',
      url: 'https://compareequityperps.com/blog/wallet-setup-guide/#connect',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best wallet for trading equity perps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rabby Wallet is the best choice for trading equity perps. It offers pre-transaction security checks, multi-chain support, transaction simulations, and warnings about risky approvals - all essential features for DeFi trading.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to set up a wallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Setting up a wallet is completely free. You only need funds (USDC/USDT) when you want to start trading.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to store funds in a browser wallet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rabby Wallet is safe for trading amounts and includes security features like transaction simulations and scam warnings. For larger holdings ($10k+), consider a hardware wallet like Ledger for additional security.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a seed phrase and why is it important?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A seed phrase is a 12 or 24 word recovery phrase that gives complete access to your wallet. Never share it with anyone and store it offline securely. Anyone with your seed phrase can access your funds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does wallet setup take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic wallet setup takes about 5 minutes. Funding your wallet can take 10-30 minutes depending on whether you transfer from an exchange or use a card onramp.',
      },
    },
  ],
};

export default function WalletSetupGuide() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(walletGuideSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Wallet Setup Guide</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">Essential Guide</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">15 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How to Set Up a Wallet for Trading Equity Perps
            </h1>
            <p className="text-xl text-gray-400">
              The complete beginner&apos;s guide to setting up a wallet, funding it with USDC, and connecting
              to equity perpetual trading platforms. No prior DeFi experience needed.
            </p>
          </header>

          {/* Quick Start Box */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Start Summary</h2>
            <div className="grid sm:grid-cols-5 gap-4 text-center">
              <div className="bg-gray-900/50 rounded-xl p-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center font-bold mx-auto mb-2">1</div>
                <p className="text-sm text-gray-300">Install Rabby</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center font-bold mx-auto mb-2">2</div>
                <p className="text-sm text-gray-300">Create Wallet</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center font-bold mx-auto mb-2">3</div>
                <p className="text-sm text-gray-300">Save Seed Phrase</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center font-bold mx-auto mb-2">4</div>
                <p className="text-sm text-gray-300">Fund with USDC</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center font-bold mx-auto mb-2">5</div>
                <p className="text-sm text-gray-300">Connect & Trade</p>
              </div>
            </div>
          </div>

          {/* Video Tutorial */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-white mb-4">Video Tutorial</h2>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/_ouAzSQJiM0"
                title="How to Set Up a Wallet for Trading Equity Perps"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="text-gray-500 text-sm mt-3">Watch the full walkthrough or follow the step-by-step guide below.</p>
          </div>

          <div className="prose prose-invert max-w-none">
            {/* Table of Contents */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-10">
              <h2 className="text-lg font-semibold text-white mb-4 mt-0">Table of Contents</h2>
              <ul className="space-y-2 text-gray-400 list-none pl-0 mb-0">
                <li><a href="#what-is-wallet" className="text-cyan-400 hover:text-cyan-300">What is a Self-Custody Wallet?</a></li>
                <li><a href="#choose-wallet" className="text-cyan-400 hover:text-cyan-300">Step 1: Choose Your Wallet</a></li>
                <li><a href="#install" className="text-cyan-400 hover:text-cyan-300">Step 2: Install the Wallet Extension</a></li>
                <li><a href="#create" className="text-cyan-400 hover:text-cyan-300">Step 3: Create Your Wallet</a></li>
                <li><a href="#secure" className="text-cyan-400 hover:text-cyan-300">Step 4: Secure Your Seed Phrase</a></li>
                <li><a href="#fund" className="text-cyan-400 hover:text-cyan-300">Step 5: Fund Your Wallet</a></li>
                <li><a href="#connect" className="text-cyan-400 hover:text-cyan-300">Step 6: Connect to a Trading Platform</a></li>
                <li><a href="#security" className="text-cyan-400 hover:text-cyan-300">Security Best Practices</a></li>
                <li><a href="#troubleshooting" className="text-cyan-400 hover:text-cyan-300">Troubleshooting Common Issues</a></li>
                <li><a href="#faq" className="text-cyan-400 hover:text-cyan-300">FAQ</a></li>
              </ul>
            </div>

            {/* What is a Wallet */}
            <section id="what-is-wallet">
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">What is a Self-Custody Wallet?</h2>
              <p className="text-gray-300 mb-6">
                A self-custody wallet is software that lets you store, send, and receive digital assets. Unlike a physical wallet,
                it doesn&apos;t actually store your money — it stores the <strong className="text-white">private keys</strong> that
                give you access to your funds on the blockchain.
              </p>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
                <h3 className="text-white font-semibold mb-3">Why You Need a Wallet for Equity Perps</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Self-custody:</strong> You control your funds, not an exchange</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">No KYC:</strong> Trade without identity verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Connect to DeFi:</strong> Access decentralized trading platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Instant withdrawals:</strong> Move funds anytime, no approval needed</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Step 1: Choose Wallet */}
            <section id="choose-wallet">
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 1: Install Rabby Wallet</h2>
              <p className="text-gray-300 mb-6">
                We recommend <strong className="text-cyan-400">Rabby Wallet</strong> for trading equity perps. It&apos;s built specifically
                for DeFi trading with security features that protect you from scams and mistakes.
              </p>

              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-2 border-cyan-500/50 rounded-xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold text-lg mb-2">Why Rabby Wallet?</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span><strong className="text-white">Pre-transaction security checks</strong> — Warns you before signing risky transactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span><strong className="text-white">Transaction simulations</strong> — See exactly what will happen before you confirm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span><strong className="text-white">Multi-chain support</strong> — Works on Arbitrum, Base, Ethereum, and 100+ chains</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span><strong className="text-white">Built-in swap & bridge</strong> — Move funds between chains easily</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span><strong className="text-white">Open source & audited</strong> — Transparent and security verified</span>
                      </li>
                    </ul>
                    <a
                      href="https://rabby.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-cyan-500 text-gray-900 rounded-xl font-semibold hover:bg-cyan-400 transition-colors"
                    >
                      Download Rabby Wallet
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5 my-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-yellow-400 font-semibold">Only Download from rabby.io</p>
                    <p className="text-gray-300 text-sm mt-1">
                      Always download from the official website <strong className="text-white">rabby.io</strong> or official browser
                      extension stores. Never install from third-party links or DMs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 2: Install */}
            <section id="install">
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 2: Install the Wallet Extension</h2>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
                <h3 className="text-white font-semibold mb-4">Installing Rabby Wallet (Recommended)</h3>
                <ol className="space-y-4 text-gray-300">
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="text-white font-medium">Go to rabby.io</p>
                      <p className="text-gray-400 text-sm">Open your browser and navigate to the official Rabby website</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="text-white font-medium">Click &quot;Download&quot;</p>
                      <p className="text-gray-400 text-sm">Select your browser (Chrome, Brave, Firefox, or Edge)</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="text-white font-medium">Add to Browser</p>
                      <p className="text-gray-400 text-sm">Click &quot;Add to Chrome&quot; (or your browser) in the extension store</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="text-white font-medium">Pin the Extension</p>
                      <p className="text-gray-400 text-sm">Click the puzzle icon in your browser toolbar and pin Rabby for easy access</p>
                    </div>
                  </li>
                </ol>
              </div>

              <p className="text-gray-400 text-sm">
                <strong className="text-white">Supported browsers:</strong> Chrome, Brave, Firefox, Edge, Opera
              </p>
            </section>

            {/* Step 3: Create */}
            <section id="create">
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 3: Create Your Wallet</h2>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
                <ol className="space-y-4 text-gray-300">
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="text-white font-medium">Click the Rabby Icon</p>
                      <p className="text-gray-400 text-sm">Click the Rabby extension icon in your browser toolbar</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="text-white font-medium">Select &quot;Create New Address&quot;</p>
                      <p className="text-gray-400 text-sm">Choose this option to generate a brand new wallet</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="text-white font-medium">Set a Strong Password</p>
                      <p className="text-gray-400 text-sm">This password encrypts your wallet on this device. Use 12+ characters with numbers and symbols.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="text-white font-medium">Write Down Your Seed Phrase</p>
                      <p className="text-gray-400 text-sm">You&apos;ll be shown 12 words. Write these down on paper — this is critical!</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <div>
                      <p className="text-white font-medium">Confirm Your Seed Phrase</p>
                      <p className="text-gray-400 text-sm">Re-enter select words to verify you&apos;ve recorded them correctly</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 my-6">
                <p className="text-green-400 font-semibold mb-2">Your Wallet Address</p>
                <p className="text-gray-300 text-sm">
                  Once created, you&apos;ll have a wallet address starting with <code className="bg-gray-800 px-1.5 py-0.5 rounded text-cyan-400">0x...</code>
                  This is like your account number — you can share it publicly to receive funds.
                </p>
              </div>
            </section>

            {/* Step 4: Secure */}
            <section id="secure">
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 4: Secure Your Seed Phrase</h2>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-red-400 font-bold text-lg">Critical Security Warning</p>
                </div>
                <p className="text-gray-300 mb-4">
                  Your <strong className="text-white">seed phrase</strong> (also called recovery phrase or mnemonic) is the master key to your wallet.
                  Anyone who has these 12 words can access and drain your funds.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✕</span>
                    <span className="text-gray-300"><strong className="text-white">NEVER</strong> share your seed phrase with anyone</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✕</span>
                    <span className="text-gray-300"><strong className="text-white">NEVER</strong> enter it on any website (no legitimate site will ask)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✕</span>
                    <span className="text-gray-300"><strong className="text-white">NEVER</strong> store it digitally (no photos, no cloud, no notes app)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">✕</span>
                    <span className="text-gray-300"><strong className="text-white">NEVER</strong> type it on a device that could be compromised</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-6">
                <p className="text-green-400 font-semibold mb-4">How to Store Your Seed Phrase Safely</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Write it on paper and store in a safe or lockbox</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Consider a metal seed phrase backup (fireproof/waterproof)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Store copies in 2-3 secure locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>For large amounts ($10k+), consider a hardware wallet (Ledger)</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Step 5: Fund */}
            <section id="fund">
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 5: Fund Your Wallet</h2>
              <p className="text-gray-300 mb-6">
                You&apos;ll need USDC (a stablecoin worth $1) to trade. Here are three ways to fund your wallet:
              </p>

              <div className="space-y-6 my-8">
                {/* Option 1: CEX Transfer */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-2 border-cyan-500/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center font-bold">1</span>
                    <h3 className="text-white font-semibold text-lg">Transfer from Exchange (Recommended)</h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    The cheapest and fastest way to fund your wallet is transferring USDC from a centralized exchange.
                    Here are step-by-step instructions for the most popular exchanges:
                  </p>

                  {/* Coinbase Instructions */}
                  <div className="bg-gray-900/80 rounded-xl p-5 mb-4">
                    <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs">C</span>
                      From Coinbase
                    </h4>
                    <ol className="space-y-2 text-gray-300 text-sm">
                      <li className="flex gap-2">
                        <span className="text-cyan-400 font-medium">1.</span>
                        <span>Open Coinbase app or website → Click <strong className="text-white">&quot;Send & Receive&quot;</strong></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400 font-medium">2.</span>
                        <span>Select <strong className="text-white">USDC</strong> and enter the amount</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400 font-medium">3.</span>
                        <span>Paste your Rabby wallet address (copy from Rabby by clicking your address)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400 font-medium">4.</span>
                        <span>Choose network: <strong className="text-white">Arbitrum</strong> (lowest fees ~$0.10) or <strong className="text-white">Base</strong></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-400 font-medium">5.</span>
                        <span>Review and confirm → Funds arrive in 1-5 minutes</span>
                      </li>
                    </ol>
                    <p className="text-gray-500 text-xs mt-3">Coinbase fee: Free for USDC on Base, ~$1-2 on Arbitrum</p>
                  </div>

                  {/* Kraken Instructions */}
                  <div className="bg-gray-900/80 rounded-xl p-5 mb-4">
                    <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-xs">K</span>
                      From Kraken
                    </h4>
                    <ol className="space-y-2 text-gray-300 text-sm">
                      <li className="flex gap-2">
                        <span className="text-purple-400 font-medium">1.</span>
                        <span>Log into Kraken → Go to <strong className="text-white">&quot;Funding&quot;</strong> → <strong className="text-white">&quot;Withdraw&quot;</strong></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 font-medium">2.</span>
                        <span>Search for <strong className="text-white">USDC</strong> and click &quot;Withdraw&quot;</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 font-medium">3.</span>
                        <span>Click <strong className="text-white">&quot;Add Address&quot;</strong> → Paste your Rabby wallet address</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 font-medium">4.</span>
                        <span>Select network: <strong className="text-white">Arbitrum One</strong> for lowest fees</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-400 font-medium">5.</span>
                        <span>Enter amount, review, and confirm with 2FA</span>
                      </li>
                    </ol>
                    <p className="text-gray-500 text-xs mt-3">Kraken fee: ~$1-3 depending on network</p>
                  </div>

                  {/* Binance Instructions */}
                  <div className="bg-gray-900/80 rounded-xl p-5 mb-4">
                    <h4 className="text-yellow-400 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-xs">B</span>
                      From Binance
                    </h4>
                    <ol className="space-y-2 text-gray-300 text-sm">
                      <li className="flex gap-2">
                        <span className="text-yellow-400 font-medium">1.</span>
                        <span>Open Binance → <strong className="text-white">&quot;Wallet&quot;</strong> → <strong className="text-white">&quot;Withdraw&quot;</strong></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-yellow-400 font-medium">2.</span>
                        <span>Select <strong className="text-white">USDC</strong> as the coin</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-yellow-400 font-medium">3.</span>
                        <span>Paste your Rabby wallet address in the &quot;Address&quot; field</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-yellow-400 font-medium">4.</span>
                        <span>Select network: <strong className="text-white">Arbitrum One (Arbitrum)</strong></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-yellow-400 font-medium">5.</span>
                        <span>Enter amount and complete security verification</span>
                      </li>
                    </ol>
                    <p className="text-gray-500 text-xs mt-3">Binance fee: ~$0.50-1 on Arbitrum</p>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="text-yellow-400 font-semibold text-sm">Critical: Double-Check the Network!</p>
                        <p className="text-gray-300 text-xs mt-1">
                          Always verify the network matches on both ends. If you select Arbitrum on your exchange,
                          your Rabby wallet will automatically receive funds on Arbitrum. Sending to the wrong network
                          can result in lost funds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Option 2: Card Onramp */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">2</span>
                    <h3 className="text-white font-semibold">Buy with Card (Easiest)</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Buy USDC directly with a debit/credit card through onramp services.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• <strong className="text-white">Moonpay</strong> — Widely supported, available in most countries</li>
                    <li>• <strong className="text-white">Transak</strong> — Low fees, many payment methods</li>
                    <li>• <strong className="text-white">Ramp</strong> — Good for European users</li>
                  </ul>
                  <p className="text-gray-500 text-xs mt-3">
                    Note: Card purchases typically have 2-5% fees and may require identity verification.
                  </p>
                </div>

                {/* Option 3: Bridge */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">3</span>
                    <h3 className="text-white font-semibold">Bridge from Another Chain</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    If you have funds on Ethereum, Polygon, or another chain, bridge them to Arbitrum.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• <strong className="text-white">Rabby Built-in Bridge</strong> — Use the swap feature in Rabby</li>
                    <li>• <strong className="text-white">Jumper.exchange</strong> — Multi-chain aggregator</li>
                    <li>• <strong className="text-white">Arbitrum Bridge</strong> — Official bridge (slower but trustless)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5 my-6">
                <p className="text-cyan-400 font-semibold mb-2">Which Network Should I Use?</p>
                <p className="text-gray-300 text-sm">
                  For Hyperliquid: Send USDC on <strong className="text-white">Arbitrum</strong> to the Hyperliquid bridge, then deposit to Hyperliquid L1.<br/>
                  For Ostium/Avantis: Use <strong className="text-white">Arbitrum</strong> or <strong className="text-white">Base</strong> directly.
                </p>
              </div>
            </section>

            {/* Step 6: Connect */}
            <section id="connect">
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step 6: Connect to a Trading Platform</h2>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
                <h3 className="text-white font-semibold mb-4">Connecting to Hyperliquid</h3>
                <ol className="space-y-4 text-gray-300">
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="text-white font-medium">Go to app.hyperliquid.xyz</p>
                      <p className="text-gray-400 text-sm">Open Hyperliquid in your browser</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="text-white font-medium">Click &quot;Connect&quot;</p>
                      <p className="text-gray-400 text-sm">A popup will appear from your wallet</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="text-white font-medium">Approve the Connection</p>
                      <p className="text-gray-400 text-sm">Review the request and click &quot;Connect&quot; in Rabby</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <p className="text-white font-medium">Deposit Funds</p>
                      <p className="text-gray-400 text-sm">Click &quot;Deposit&quot; and bridge USDC from Arbitrum to Hyperliquid</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-7 h-7 rounded-full bg-cyan-500 text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <div>
                      <p className="text-white font-medium">Start Trading</p>
                      <p className="text-gray-400 text-sm">Once deposited, you can trade any available market</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30 rounded-2xl p-6 my-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Ready to Start Trading?</h3>
                <p className="text-gray-400 mb-4">Connect your wallet to Hyperliquid and trade 50+ stocks 24/7</p>
                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-gray-900 rounded-xl font-bold hover:bg-cyan-400 transition-colors"
                >
                  Open Hyperliquid
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </section>

            {/* Security Best Practices */}
            <section id="security">
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">Security Best Practices</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <h3 className="text-green-400 font-semibold mb-3">Do This</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Bookmark official sites to avoid phishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Use a dedicated browser for DeFi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Review transaction details before signing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Revoke unused token approvals regularly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Use hardware wallet for large holdings</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <h3 className="text-red-400 font-semibold mb-3">Avoid This</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Clicking links in DMs or emails</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Connecting to unknown dApps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Signing transactions you don&apos;t understand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Downloading wallet from unofficial sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Storing seed phrase on phone/computer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting">
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">Troubleshooting Common Issues</h2>

              <div className="space-y-4 my-6">
                <details className="bg-gray-900/50 border border-gray-800 rounded-xl">
                  <summary className="p-4 cursor-pointer text-white font-medium hover:text-cyan-400">
                    Wallet not connecting to site
                  </summary>
                  <div className="px-4 pb-4 text-gray-400 text-sm">
                    <ul className="space-y-1">
                      <li>• Refresh the page and try again</li>
                      <li>• Make sure your wallet extension is unlocked</li>
                      <li>• Disable other wallet extensions that may conflict</li>
                      <li>• Try a different browser</li>
                      <li>• Clear browser cache and cookies</li>
                    </ul>
                  </div>
                </details>

                <details className="bg-gray-900/50 border border-gray-800 rounded-xl">
                  <summary className="p-4 cursor-pointer text-white font-medium hover:text-cyan-400">
                    Transaction stuck or pending
                  </summary>
                  <div className="px-4 pb-4 text-gray-400 text-sm">
                    <ul className="space-y-1">
                      <li>• Wait a few minutes — network congestion can cause delays</li>
                      <li>• Check the transaction on a block explorer</li>
                      <li>• In Rabby: Click pending tx → &quot;Speed Up&quot; to increase gas</li>
                      <li>• If truly stuck, you may need to cancel with a replacement tx</li>
                    </ul>
                  </div>
                </details>

                <details className="bg-gray-900/50 border border-gray-800 rounded-xl">
                  <summary className="p-4 cursor-pointer text-white font-medium hover:text-cyan-400">
                    Funds not showing after transfer
                  </summary>
                  <div className="px-4 pb-4 text-gray-400 text-sm">
                    <ul className="space-y-1">
                      <li>• Wait 5-10 minutes for the transfer to confirm</li>
                      <li>• Verify you sent to the correct address and network</li>
                      <li>• Add the token manually if it&apos;s not appearing (Rabby usually auto-detects)</li>
                      <li>• Check the transaction on the block explorer</li>
                    </ul>
                  </div>
                </details>

                <details className="bg-gray-900/50 border border-gray-800 rounded-xl">
                  <summary className="p-4 cursor-pointer text-white font-medium hover:text-cyan-400">
                    Wrong network selected
                  </summary>
                  <div className="px-4 pb-4 text-gray-400 text-sm">
                    <ul className="space-y-1">
                      <li>• Rabby auto-switches networks when needed</li>
                      <li>• Click the network name in Rabby to manually switch</li>
                      <li>• Make sure you have the correct network&apos;s native token for gas (ETH for Ethereum/Arbitrum)</li>
                    </ul>
                  </div>
                </details>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold text-white mt-12 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-4 my-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">What is the best wallet for trading equity perps?</h3>
                  <p className="text-gray-400 text-sm">
                    Rabby Wallet is the best choice for trading equity perps. It offers pre-transaction security checks,
                    multi-chain support, transaction simulations, and warnings about risky approvals — all essential
                    features for DeFi trading.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">How much does it cost to set up a wallet?</h3>
                  <p className="text-gray-400 text-sm">
                    Setting up a wallet is completely free. You only need funds (USDC/USDT) when you want to start trading.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">Is it safe to store funds in a browser wallet?</h3>
                  <p className="text-gray-400 text-sm">
                    Rabby Wallet is safe for trading amounts and includes security features like transaction simulations
                    and scam warnings. For larger holdings ($10k+), consider a hardware wallet like Ledger for additional security.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">What is a seed phrase and why is it important?</h3>
                  <p className="text-gray-400 text-sm">
                    A seed phrase is a 12 or 24 word recovery phrase that gives complete access to your wallet.
                    Never share it with anyone and store it offline securely. Anyone with your seed phrase can access your funds.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">How long does wallet setup take?</h3>
                  <p className="text-gray-400 text-sm">
                    Basic wallet setup takes about 5 minutes. Funding your wallet can take 10-30 minutes depending
                    on whether you transfer from an exchange or use a card onramp.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">Can I use the same wallet for all equity perps platforms?</h3>
                  <p className="text-gray-400 text-sm">
                    Yes! Your wallet address works across all EVM-compatible platforms (Hyperliquid, Ostium, Avantis, etc.).
                    You only need one wallet to access all of them.
                  </p>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Trading?</h2>
              <p className="text-gray-400 mb-6">
                Now that your wallet is set up, connect to a platform and make your first trade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-gray-900 rounded-xl font-bold hover:bg-cyan-400 transition-colors"
                >
                  Start Trading on Hyperliquid
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link
                  href="/blog/how-to-trade-equity-perps"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
                >
                  Trading Guide
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/how-to-trade-equity-perps" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/30 transition-all">
                  <span className="text-cyan-400 text-xs font-medium">NEXT STEP</span>
                  <h3 className="text-white font-medium mt-1">How to Trade Equity Perps</h3>
                  <p className="text-gray-500 text-sm mt-1">Complete guide to placing your first trade</p>
                </Link>
                <Link href="/blog/equity-perps-risks" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/30 transition-all">
                  <span className="text-red-400 text-xs font-medium">IMPORTANT</span>
                  <h3 className="text-white font-medium mt-1">Equity Perps Risks</h3>
                  <p className="text-gray-500 text-sm mt-1">Understand the risks before trading</p>
                </Link>
                <Link href="/blog/hyperliquid-tutorial" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/30 transition-all">
                  <span className="text-green-400 text-xs font-medium">TUTORIAL</span>
                  <h3 className="text-white font-medium mt-1">Hyperliquid Tutorial</h3>
                  <p className="text-gray-500 text-sm mt-1">Step-by-step platform walkthrough</p>
                </Link>
                <Link href="/" className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/30 transition-all">
                  <span className="text-purple-400 text-xs font-medium">COMPARE</span>
                  <h3 className="text-white font-medium mt-1">Compare All Platforms</h3>
                  <p className="text-gray-500 text-sm mt-1">Find the best platform for your needs</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
