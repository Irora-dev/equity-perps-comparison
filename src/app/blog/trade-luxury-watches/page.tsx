'use client';

import Link from 'next/link';
import { useState } from 'react';

const TROVE_REFERRAL_URL = 'https://trovemarkets.com/trade?referral=YE7BXYS';

const stats = [
  { label: 'Leverage', value: 'Up to 5x', icon: '/' },
  { label: 'Trading Hours', value: '24/7', icon: 'clock' },
  { label: 'KYC Required', value: 'None', icon: 'shield' },
  { label: 'Watch Brands', value: 'Rolex, Patek, AP', icon: 'watch' },
];

const watchBenefits = [
  {
    title: 'No $15k-$100k+ Investment Required',
    description: 'Physical luxury watches cost a fortune. Trade the Watch Index with as little as $50 in margin and get the same market exposure.',
    icon: 'dollar',
  },
  {
    title: 'No Counterfeits, Servicing, or Insurance',
    description: 'Owning physical watches means authentication risk, $500-$1000 annual servicing, and expensive insurance. Trade the index with zero headaches.',
    icon: 'shield',
  },
  {
    title: 'Instant Liquidity',
    description: 'Selling a physical Rolex can take weeks or months. Close your perpetual position in seconds with real-time liquidity.',
    icon: 'zap',
  },
  {
    title: 'Short During Corrections',
    description: 'The 2022-2023 watch market correction was -30%. With perpetuals, you can profit from downturns by going short. Physical watch holders just watch their value evaporate.',
    icon: 'trending-down',
  },
];

const watchIndex = [
  { name: 'Rolex Submariner', description: 'The iconic dive watch. Reference points like the 126610LN drive market sentiment.' },
  { name: 'Rolex Daytona', description: 'The grail chronograph. Ceramic Daytonas remain the most sought-after Rolex models.' },
  { name: 'Patek Philippe Nautilus', description: 'The 5711 became the hottest watch in the world before discontinuation. Blue dial is legendary.' },
  { name: 'Audemars Piguet Royal Oak', description: 'Gerald Genta\'s masterpiece. The 15500ST and 15202ST drive the luxury sports watch market.' },
];

const steps = [
  {
    step: 1,
    title: 'Get a Web3 Wallet',
    description: 'Download MetaMask or Rabby. Create your wallet in 2 minutes. Your keys, your funds.',
    link: null,
  },
  {
    step: 2,
    title: 'Get USDC on Arbitrum',
    description: 'Bridge USDC to Arbitrum One using a bridge or buy directly from an exchange. Trove uses USDC for margin.',
    link: null,
  },
  {
    step: 3,
    title: 'Connect to Trove Markets',
    description: 'Go to Trove Markets and connect your wallet. No account creation, no KYC, just connect and trade.',
    link: { text: 'Open Trove Markets', url: TROVE_REFERRAL_URL },
  },
  {
    step: 4,
    title: 'Trade the Watch Index',
    description: 'Select the Watch Index perpetual. Choose your leverage (up to 5x), size, and direction. Execute your trade.',
    link: null,
  },
];

const marketDynamics = [
  {
    title: 'Supply Shortages',
    description: 'Rolex and Patek have years-long wait lists at authorized dealers. Limited supply drives secondary market premiums.',
  },
  {
    title: 'Wait List Economics',
    description: 'A steel Rolex Daytona retails for ~$14,550 but sells for $30,000+ on the secondary market. This premium is what the index tracks.',
  },
  {
    title: 'Secondary Market Premiums',
    description: 'The spread between retail and resale creates a unique market dynamic. When demand cools, premiums collapse rapidly.',
  },
  {
    title: 'Collector Sentiment',
    description: 'Watch collecting trends drive prices. New releases, discontinuations, and celebrity endorsements all impact values.',
  },
];

const faqs = [
  {
    question: 'What is the Watch Index on Trove Markets?',
    answer: 'The Watch Index is a perpetual futures contract that tracks the aggregate market value of major luxury watch references, including Rolex Submariner, Daytona, Patek Philippe Nautilus, and Audemars Piguet Royal Oak. It provides synthetic exposure to the luxury watch secondary market.',
  },
  {
    question: 'How is the Watch Index price determined?',
    answer: 'Trove uses oracle data from major watch marketplaces and auction houses to create a composite index. The price reflects real secondary market transaction data, updated regularly to track actual market values.',
  },
  {
    question: 'What leverage is available for watch perpetuals?',
    answer: 'Trove offers up to 5x leverage on the Watch Index. This is lower than traditional equity perps due to the unique volatility characteristics of the luxury goods market.',
  },
  {
    question: 'Can I short the watch market?',
    answer: 'Yes, you can go long or short on the Watch Index. This allows you to profit from declining watch prices - something impossible with physical watch ownership.',
  },
  {
    question: 'What are the fees on Trove Markets?',
    answer: 'Trove has low trading fees with on-chain transparency. All fee structures are visible on their platform. There are no hidden custody or storage fees like with physical watches.',
  },
  {
    question: 'Do I need KYC to trade on Trove?',
    answer: 'No, Trove Markets is a decentralized exchange built on Hyperliquid (HIP-3). Just connect your wallet and start trading. No identity verification required.',
  },
  {
    question: 'What blockchain is Trove built on?',
    answer: 'Trove is built on Hyperliquid using the HIP-3 standard. This provides fast execution, low fees, and full on-chain settlement with transparent order books.',
  },
  {
    question: 'Is trading watch perpetuals risky?',
    answer: 'Yes, like all leveraged trading, watch perpetuals carry significant risk. The luxury watch market can be volatile, especially during economic downturns. Never trade more than you can afford to lose and start with low leverage.',
  },
];

export default function TradeLuxuryWatches() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-navy-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-slate-400/5 to-blue-900/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-32">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-slate-400/20 border border-amber-500/30 text-amber-300 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Trade the Watch Market Index
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6">
            <span className="text-white">Trade </span>
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-slate-300 text-transparent bg-clip-text">Luxury Watch</span>
            <span className="text-white"> Value</span>
          </h1>

          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-8">
            Get exposure to Rolex, Patek Philippe, and Audemars Piguet market values.
            Trade the Watch Index 24/7 with up to 5x leverage on Trove Markets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-200"
            >
              Start Trading on Trove
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-200"
            >
              Learn How It Works
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trade Watch Perps */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Why Trade Watch Perpetuals?
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Get all the upside of the luxury watch market without the downsides of physical ownership.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {watchBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:border-amber-500/30 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-slate-500/20 flex items-center justify-center mb-4">
                  {benefit.icon === 'dollar' && (
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {benefit.icon === 'shield' && (
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {benefit.icon === 'zap' && (
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {benefit.icon === 'trending-down' && (
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the Watch Index */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            What is in the Watch Index?
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            The index tracks the most liquid and sought-after luxury watch references on the secondary market.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {watchIndex.map((watch) => (
              <div
                key={watch.name}
                className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 border border-gray-700/50 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/30 to-slate-400/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{watch.name}</h3>
                    <p className="text-gray-400 text-sm">{watch.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Getting Started */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-slate-900">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-slate-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Simple 4-Step Setup
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Getting Started with Watch Trading
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Skip the brokerage applications and identity verification. Just set up a wallet, fund it, and start trading watch prices immediately.
            </p>
          </div>

          {/* Benefits Banner */}
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-600/30 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">No Account Applications</span>
                <span className="text-slate-400 text-xs mt-1">Skip the paperwork</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">Works From Any Country</span>
                <span className="text-slate-400 text-xs mt-1">Global access</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">Trade in Minutes</span>
                <span className="text-slate-400 text-xs mt-1">Quick setup</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">You Control Your Funds</span>
                <span className="text-slate-400 text-xs mt-1">Self-custody</span>
              </div>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="space-y-8">
            {/* Step 1: Wallet Setup */}
            <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/40 border border-slate-600/30 rounded-2xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Set Up Your Wallet</h3>
                    <p className="text-slate-400 text-sm">Your secure gateway to decentralized trading</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Video Embed */}
                  <div className="aspect-video rounded-xl overflow-hidden bg-black">
                    <iframe
                      src="https://www.youtube.com/embed/_ouAzSQJiM0"
                      title="How to Set Up Rabby Wallet"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  {/* Explainer */}
                  <div className="space-y-4">
                    <div className="bg-slate-700/30 rounded-xl p-4">
                      <h4 className="text-amber-400 font-medium mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Why use a wallet instead of a brokerage?
                      </h4>
                      <p className="text-slate-300 text-sm">
                        A wallet lets you trade directly without middlemen. Your funds stay under your control at all times - no withdrawal limits, no account freezes, and no waiting for approvals. Connect to any platform instantly from anywhere in the world.
                      </p>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-4">
                      <h4 className="text-white font-medium mb-2">We Recommend Rabby Wallet</h4>
                      <ul className="text-slate-300 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>User-friendly interface perfect for beginners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Built-in security features and transaction previews</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Works seamlessly with Trove Markets</span>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="https://rabby.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm"
                    >
                      Download Rabby Wallet
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Get USDC */}
            <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/40 border border-slate-600/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Get USDC on Arbitrum</h3>
                  <p className="text-slate-400 text-sm">USDC is the stable currency used for trading on Trove</p>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-xl p-4 mb-6">
                <h4 className="text-amber-400 font-medium mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What is USDC?
                </h4>
                <p className="text-slate-300 text-sm">
                  USDC is a digital dollar - each USDC is worth exactly $1 USD. It is the currency you will use to trade on Trove Markets. Think of it like depositing dollars into a trading account, but you keep full control in your wallet.
                </p>
              </div>

              <h4 className="text-white font-medium mb-4">Choose Your Preferred Method:</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-slate-700/40 border border-slate-600/30 rounded-xl p-4 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold text-sm">CB</span>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Coinbase</h5>
                      <span className="text-slate-400 text-xs">Best for US users</span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">Buy USDC directly and send to your wallet address on Arbitrum network.</p>
                  <a href="https://www.coinbase.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                    Visit Coinbase
                  </a>
                </div>

                <div className="bg-slate-700/40 border border-slate-600/30 rounded-xl p-4 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-sm">BN</span>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Binance</h5>
                      <span className="text-slate-400 text-xs">Global availability</span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">Purchase USDC and withdraw to Arbitrum. Low fees for international users.</p>
                  <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                    Visit Binance
                  </a>
                </div>

                <div className="bg-slate-700/40 border border-slate-600/30 rounded-xl p-4 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold text-sm">MP</span>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">MoonPay</h5>
                      <span className="text-slate-400 text-xs">Buy with card</span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">Buy USDC directly with credit/debit card. Instant delivery to your wallet.</p>
                  <a href="https://www.moonpay.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                    Visit MoonPay
                  </a>
                </div>
              </div>
            </div>

            {/* Step 3: Connect to Trove */}
            <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/40 border border-slate-600/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Connect to Trove Markets</h3>
                  <p className="text-slate-400 text-sm">One click to connect - no signup forms or verification</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <h4 className="text-white font-medium mb-3">Why No Signup?</h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Trove Markets is a decentralized exchange. Instead of creating an account with email and password, you simply connect your wallet. Your wallet IS your account - secure, private, and entirely under your control.
                    </p>
                    <ul className="text-slate-300 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No email address required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No identity verification (KYC)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No waiting for account approval</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Start trading immediately</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-500/10 border border-amber-500/30 rounded-xl p-6 text-center">
                    <p className="text-slate-300 mb-4">Ready to connect? Click the button below to open Trove Markets.</p>
                    <a
                      href={TROVE_REFERRAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-200"
                    >
                      Open Trove Markets
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Trade the Watch Index */}
            <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/40 border border-slate-600/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Trade the Watch Index</h3>
                  <p className="text-slate-400 text-sm">Go long or short on luxury watch market values</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="text-emerald-400 font-semibold">Going Long</h4>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Think watch prices will rise? Open a long position. You profit when the Watch Index increases - just like owning physical watches, but with leverage and no storage hassles.
                  </p>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    </div>
                    <h4 className="text-red-400 font-semibold">Going Short</h4>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Expect a market correction? Open a short position. You profit when the Watch Index decreases - something impossible with physical watch ownership.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-xl p-4">
                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Pro Tips for New Traders
                </h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">1.</span>
                    <span>Start with low leverage (2x or less) until you understand how perpetuals work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">2.</span>
                    <span>Use stop-losses to limit potential downside on your trades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">3.</span>
                    <span>Never trade more than you can afford to lose - leverage amplifies both gains and losses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">4.</span>
                    <span>Watch market news - Rolex releases, auction results, and economic news all impact prices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Watch Market Dynamics */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Watch Market Dynamics
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Understanding what drives luxury watch prices helps you make better trading decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {marketDynamics.map((dynamic) => (
              <div
                key={dynamic.title}
                className="bg-gradient-to-br from-blue-900/20 to-slate-800/50 border border-blue-500/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{dynamic.title}</h3>
                <p className="text-gray-400">{dynamic.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-500/10 to-slate-500/10 border border-amber-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              The 2022-2023 Correction
            </h3>
            <p className="text-gray-400">
              After reaching all-time highs in early 2022, the secondary market for luxury watches corrected by approximately 30%.
              Rolex Daytonas that traded at $50,000+ dropped to $35,000. Patek Nautilus prices fell from $180,000 to under $100,000.
              With watch perpetuals, traders who anticipated this correction could have profited by going short -
              something impossible for physical watch owners.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Everything you need to know about trading watch perpetuals on Trove Markets.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/20 via-slate-800 to-blue-900/20 border border-amber-500/30 rounded-2xl p-8 sm:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Powered by Hyperliquid (HIP-3)
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Trading the Watch Index Today
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join Trove Markets and get exposure to Rolex, Patek Philippe, and Audemars Piguet market values.
              Trade 24/7 with up to 5x leverage. No KYC required.
            </p>

            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-lg rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-200"
            >
              Trade on Trove Markets
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <p className="text-gray-500 text-sm mt-6">
              Trading perpetual futures involves substantial risk of loss. Only trade with funds you can afford to lose.
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all guides
          </Link>
        </div>
      </section>
    </main>
  );
}
