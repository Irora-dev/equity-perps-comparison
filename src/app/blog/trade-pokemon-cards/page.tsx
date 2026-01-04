'use client';

import { useState } from 'react';
import Link from 'next/link';

const TROVE_REFERRAL_URL = 'https://trovemarkets.com/trade?referral=YE7BXYS';

const popularCards = [
  { name: 'Charizard', set: '1st Edition Base Set', description: 'The most iconic and valuable Pokemon card' },
  { name: 'Pikachu', set: 'Illustrator Promo', description: 'Ultra-rare promotional card' },
  { name: 'Mewtwo', set: 'Base Set Holo', description: 'Legendary psychic Pokemon' },
  { name: 'Blastoise', set: '1st Edition Base Set', description: 'Classic water-type starter' },
  { name: 'Venusaur', set: '1st Edition Base Set', description: 'Completing the starter trio' },
  { name: 'Lugia', set: 'Neo Genesis 1st Ed', description: 'Highly sought-after legendary' },
];

const faqs = [
  {
    question: 'What is Trove Markets?',
    answer: 'Trove Markets is a decentralized perpetual futures exchange built on Hyperliquid (HIP-3). It allows you to trade collectibles like Pokemon cards, sports memorabilia, and other alternative assets with up to 5x leverage, 24/7 trading, and no KYC requirements.',
  },
  {
    question: 'What is the POKE index?',
    answer: 'The POKE index tracks the aggregate pricing of graded Pokemon cards. It uses pricing data from major auction houses and card grading services to create a representative index of the Pokemon card market, allowing traders to gain exposure without owning physical cards.',
  },
  {
    question: 'How are Pokemon card prices determined?',
    answer: 'Prices are determined by oracles that aggregate data from major sources including PSA graded card sales, auction results from Heritage Auctions, PWCC, and other major marketplaces. The index is updated regularly to reflect current market conditions.',
  },
  {
    question: 'What is the funding rate?',
    answer: 'Funding rates are periodic payments between long and short traders that help keep the perpetual price aligned with the underlying index. If the perp trades above the index, longs pay shorts. If below, shorts pay longs. Rates are typically calculated every 8 hours.',
  },
  {
    question: 'What leverage can I use?',
    answer: 'Trove Markets offers up to 5x leverage on collectibles perpetuals like POKE. This means with $100 of collateral, you can control a $500 position. Higher leverage amplifies both gains and losses, so trade responsibly.',
  },
  {
    question: 'Do I need to verify my identity (KYC)?',
    answer: 'No. Trove Markets is a decentralized protocol that only requires a wallet connection. There is no account creation, email verification, or identity documentation required. You maintain full custody of your funds.',
  },
  {
    question: 'How do I withdraw my funds?',
    answer: 'Since Trove is built on Hyperliquid, you can withdraw your USDC at any time directly to your wallet. There are no withdrawal limits or waiting periods - your funds remain in your custody throughout.',
  },
  {
    question: 'Is trading Pokemon card perps legal?',
    answer: 'Perpetual futures on collectibles indexes operate in a regulatory gray area in many jurisdictions. Trove Markets is a decentralized protocol accessible globally, but users should understand their local regulations regarding derivatives trading.',
  },
];

export default function TradePokemonCards() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-gray-950 to-amber-500/20" />
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative">
          <nav className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <span className="text-gray-400">Trade Pokemon Cards</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
            <span className="px-2 sm:px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs sm:text-sm font-medium rounded-full">POKE Index</span>
            <span className="px-2 sm:px-3 py-1 bg-amber-500/20 text-amber-400 text-xs sm:text-sm font-medium rounded-full">Up to 5x Leverage</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Trade Pokemon Cards
            <br />
            <span className="text-yellow-400">With Perpetual Futures</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl">
            Go long or short on graded Pokemon cards with the POKE index on Trove Markets. <strong className="text-white">No physical storage, instant liquidity, 24/7 trading.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-400 hover:to-amber-400 transition-all shadow-lg shadow-yellow-500/25"
            >
              Start Trading POKE
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-gray-700 transition-all border border-gray-700"
            >
              How It Works
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-white">5x</div>
              <div className="text-gray-400 text-xs sm:text-sm">Max Leverage</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm">Trading Hours</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-white">No KYC</div>
              <div className="text-gray-400 text-xs sm:text-sm">Just Connect Wallet</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-white">Self-Custody</div>
              <div className="text-gray-400 text-xs sm:text-sm">Your Keys, Your Funds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade Pokemon Card Perps */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Why Trade Pokemon Card Perpetuals?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🏠</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">No Storage or Insurance Costs</h3>
              <p className="text-sm sm:text-base text-gray-400">Physical Pokemon cards require secure storage, grading, and insurance. With perpetuals, you get pure price exposure without the overhead costs of owning collectibles.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Instant Liquidity</h3>
              <p className="text-sm sm:text-base text-gray-400">Selling physical cards can take weeks through auctions. With perps, enter and exit positions instantly at market price, any time of day or night.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📉</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Short the Market</h3>
              <p className="text-sm sm:text-base text-gray-400">Think the Pokemon card bubble is overheated? Perpetuals let you profit from price drops. Go short with leverage to express your bearish thesis.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Fractional Exposure</h3>
              <p className="text-sm sm:text-base text-gray-400">A PSA 10 1st Edition Charizard costs hundreds of thousands. With perps, get exposure to the Pokemon card market with any amount of capital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-3 sm:mb-4">
              <span className="text-yellow-400 font-medium text-sm sm:text-base">Understanding Collectible Perps</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              How Pokemon Card Perpetuals Work
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Perpetual futures let you trade the price of an asset without owning it. Here is how it works for Pokemon cards:
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">The POKE Index</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                The POKE index aggregates pricing data from graded Pokemon card sales across major auction houses and marketplaces. It tracks the overall health of the Pokemon card market, weighted by the most liquid and valuable cards.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-300">
                  <strong className="text-white">Example:</strong> If the POKE index is at $1,000 and you think Pokemon cards will appreciate, you can go long. If the index rises to $1,100, your position gains 10% (before leverage).
                </p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Perpetual Futures vs Physical Cards</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-800">
                      <th className="pb-2 sm:pb-3 pr-4">Aspect</th>
                      <th className="pb-2 sm:pb-3 pr-4">Physical Cards</th>
                      <th className="pb-2 sm:pb-3">POKE Perps</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 sm:py-3 pr-4">Entry Cost</td>
                      <td className="py-2 sm:py-3 pr-4 text-red-400">High (card price + grading)</td>
                      <td className="py-2 sm:py-3 text-green-400">Low (any amount)</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 sm:py-3 pr-4">Liquidity</td>
                      <td className="py-2 sm:py-3 pr-4 text-red-400">Low (auction wait)</td>
                      <td className="py-2 sm:py-3 text-green-400">Instant</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 sm:py-3 pr-4">Short Selling</td>
                      <td className="py-2 sm:py-3 pr-4 text-red-400">Not possible</td>
                      <td className="py-2 sm:py-3 text-green-400">Yes, with leverage</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 sm:py-3 pr-4">Storage</td>
                      <td className="py-2 sm:py-3 pr-4 text-red-400">Required</td>
                      <td className="py-2 sm:py-3 text-green-400">None</td>
                    </tr>
                    <tr>
                      <td className="py-2 sm:py-3 pr-4">Trading Hours</td>
                      <td className="py-2 sm:py-3 pr-4 text-red-400">Auction schedules</td>
                      <td className="py-2 sm:py-3 text-green-400">24/7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section id="get-started" className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-3 sm:mb-4">
              <span className="text-amber-400 font-medium text-sm sm:text-base">No Crypto Experience Needed</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Get Started in 15 Minutes
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Never used crypto before? No problem. We will walk you through everything step-by-step.
              You do not need any prior experience with wallets, exchanges, or blockchain technology.
            </p>
          </div>

          {/* Benefits Banner */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="text-white font-bold mb-3 text-center text-sm sm:text-base">Why This Setup Is Worth It</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1">🔓</div>
                <div className="text-xs sm:text-sm text-gray-300">No account applications</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1">🌍</div>
                <div className="text-xs sm:text-sm text-gray-300">Works from any country</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1">⚡</div>
                <div className="text-xs sm:text-sm text-gray-300">Trade in minutes, not days</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1">🔐</div>
                <div className="text-xs sm:text-sm text-gray-300">You control your funds</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Step 1: Wallet */}
            <div className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Set Up Your Wallet (5 minutes)</h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-4">
                      A wallet is like a digital bank account that only you control. Think of it as your personal vault for trading -
                      no bank, no broker, just you. We recommend <strong className="text-yellow-400">Rabby Wallet</strong> because it is free, secure, and beginner-friendly.
                    </p>

                    {/* What is a wallet explainer */}
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 sm:p-4 mb-4">
                      <h4 className="text-yellow-400 font-semibold mb-2 text-sm sm:text-base">What exactly is a crypto wallet?</h4>
                      <p className="text-gray-300 text-xs sm:text-sm mb-3">
                        A wallet stores your digital money (USDC) and lets you connect to trading platforms. Unlike a brokerage account,
                        <strong className="text-white"> you have complete control</strong> - no one can freeze your funds or block your access.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs">
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-base sm:text-lg mb-1">🔐</div>
                          <span className="text-gray-400">Only you have access</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-base sm:text-lg mb-1">🆓</div>
                          <span className="text-gray-400">Completely free</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-base sm:text-lg mb-1">⚡</div>
                          <span className="text-gray-400">Works instantly</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-base sm:text-lg mb-1">🌍</div>
                          <span className="text-gray-400">No country restrictions</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Setup Steps:</h4>
                        <ol className="space-y-2 sm:space-y-3 text-gray-300 text-sm">
                          <li className="flex gap-2 sm:gap-3">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xs sm:text-sm font-bold flex-shrink-0">1</span>
                            <span className="text-xs sm:text-sm">Go to <a href="https://rabby.io" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">rabby.io</a> and download the browser extension</span>
                          </li>
                          <li className="flex gap-2 sm:gap-3">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xs sm:text-sm font-bold flex-shrink-0">2</span>
                            <span className="text-xs sm:text-sm">Click &ldquo;Create New Wallet&rdquo; and set a password</span>
                          </li>
                          <li className="flex gap-2 sm:gap-3">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xs sm:text-sm font-bold flex-shrink-0">3</span>
                            <span className="text-xs sm:text-sm">Write down your 12-word seed phrase on paper</span>
                          </li>
                          <li className="flex gap-2 sm:gap-3">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xs sm:text-sm font-bold flex-shrink-0">4</span>
                            <div>
                              <strong className="text-white text-xs sm:text-sm">Store seed phrase safely offline</strong>
                              <p className="text-gray-500 text-[10px] sm:text-xs mt-1">This is your backup - never share it with anyone!</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-3 sm:p-5">
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Watch: Wallet Setup (2 min)</h4>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <iframe
                            src="https://www.youtube.com/embed/_ouAzSQJiM0"
                            title="Wallet Setup Guide"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Get USDC */}
            <div className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Get USDC (5-10 minutes)</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    USDC is a digital dollar - 1 USDC always equals $1. It is the currency you will use to trade on Trove Markets.
                    You can buy it with your credit card, bank transfer, or even Apple Pay.
                  </p>

                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 sm:p-4 mb-4">
                    <h4 className="text-amber-400 font-semibold mb-2 text-sm sm:text-base">Easiest ways to get USDC:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <h5 className="text-white font-medium text-xs sm:text-sm mb-1">Coinbase</h5>
                        <p className="text-gray-400 text-xs">Best for US/EU. Bank transfer or card. Beginner-friendly.</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <h5 className="text-white font-medium text-xs sm:text-sm mb-1">Binance</h5>
                        <p className="text-gray-400 text-xs">Global coverage. P2P option for local currency. Low fees.</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <h5 className="text-white font-medium text-xs sm:text-sm mb-1">MoonPay/Transak</h5>
                        <p className="text-gray-400 text-xs">Buy directly with card. No exchange account needed.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-xs sm:text-sm text-gray-300">
                      <strong className="text-white">💡 Pro tip:</strong> Start with $50-100 to learn. You can always add more later.
                      Make sure to withdraw your USDC to your Rabby wallet on the <strong className="text-yellow-400">Arbitrum</strong> network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Connect to Trove */}
            <div className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Connect to Trove Markets (1 minute)</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    This is the easy part! Just visit Trove Markets and click &ldquo;Connect Wallet&rdquo;.
                    Your Rabby wallet will pop up asking you to approve - click confirm and you are connected.
                  </p>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 sm:p-4 mb-4">
                    <h4 className="text-green-400 font-semibold mb-2 text-sm sm:text-base">No signup required - here is why that is great:</h4>
                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                      <li>✓ No email verification or waiting for approval</li>
                      <li>✓ No identity documents or selfies</li>
                      <li>✓ No withdrawal limits or restrictions</li>
                      <li>✓ Start trading immediately after connecting</li>
                    </ul>
                  </div>

                  <a
                    href={TROVE_REFERRAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-yellow-500 text-gray-900 rounded-xl font-bold text-sm sm:text-base hover:bg-yellow-400 transition-colors"
                  >
                    Open Trove Markets
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Step 4: Trade */}
            <div className="bg-gray-900 border-2 border-green-500/30 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Start Trading POKE!</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    You are ready! Deposit your USDC, find the POKE market, and open your first position.
                    Start with 1-2x leverage while you learn - you can increase it as you get comfortable.
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 sm:p-4">
                      <div className="text-green-400 font-bold text-base sm:text-lg mb-1">Go Long</div>
                      <p className="text-xs sm:text-sm text-gray-400">Think Pokemon cards will go up? Buy long and profit when prices rise.</p>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 sm:p-4">
                      <div className="text-red-400 font-bold text-base sm:text-lg mb-1">Go Short</div>
                      <p className="text-xs sm:text-sm text-gray-400">Think the market is overheated? Go short and profit when prices fall.</p>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-xs sm:text-sm text-gray-300">
                      <strong className="text-white">🎯 Beginner tip:</strong> Start with a small position (like $20-50) to understand how it works.
                      You can always scale up once you are comfortable with the platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pokemon Cards */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">
            Popular Cards in the POKE Index
          </h2>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
            The POKE index tracks graded Pokemon cards from various sets. Here are some of the most iconic cards represented:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {popularCards.map((card) => (
              <div
                key={card.name}
                className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center">
                    <span className="text-yellow-400 text-lg sm:text-xl">&#9733;</span>
                  </div>
                  <span className="text-white font-bold text-sm sm:text-base">{card.name}</span>
                </div>
                <p className="text-xs text-yellow-400/80 mb-1">{card.set}</p>
                <p className="text-xs sm:text-sm text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 sm:p-6 text-center">
            <p className="text-sm sm:text-base text-gray-300">
              <strong className="text-white">Note:</strong> The POKE index represents the overall Pokemon card market, not individual cards. Trade the entire market with a single position.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between"
                >
                  <span className="text-white font-medium pr-3 sm:pr-4 text-sm sm:text-base">{faq.question}</span>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-400 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-2xl p-5 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Trade Pokemon Cards?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 max-w-xl mx-auto">
              Get exposure to the Pokemon card market without owning physical cards. Trade the POKE index on Trove Markets with up to 5x leverage, 24/7.
            </p>
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-400 hover:to-amber-400 transition-all shadow-lg shadow-yellow-500/25"
            >
              Start Trading on Trove
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-6 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              This page contains affiliate links. When you trade on Trove Markets using our link, we may earn a referral commission at no extra cost to you. This helps support our free educational content. <span className="text-white font-medium">Trading perpetual futures involves significant risk.</span> Only trade with funds you can afford to lose.
            </p>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <Link href="/blog/how-funding-rates-work" className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-yellow-500/50 transition-colors">
              <span className="text-[10px] sm:text-xs font-medium text-yellow-400">EDUCATION</span>
              <h3 className="text-white font-medium mt-1 text-sm sm:text-base">How Funding Rates Work</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Understanding perpetual funding mechanics</p>
            </Link>
            <Link href="/blog/hyperliquid-vs-trove" className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-yellow-500/50 transition-colors">
              <span className="text-[10px] sm:text-xs font-medium text-amber-400">COMPARISON</span>
              <h3 className="text-white font-medium mt-1 text-sm sm:text-base">Hyperliquid vs Trove</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Crypto perps vs collectible perps</p>
            </Link>
            <Link href="/blog/wallet-setup-guide" className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-yellow-500/50 transition-colors">
              <span className="text-[10px] sm:text-xs font-medium text-green-400">TUTORIAL</span>
              <h3 className="text-white font-medium mt-1 text-sm sm:text-base">Wallet Setup Guide</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Get started with a crypto wallet</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
