'use client';

import { useState } from 'react';
import Link from 'next/link';

const TROVE_REFERRAL_URL = 'https://trovemarkets.com/trade?referral=YE7BXYS';

export default function TradeCharizardCards() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the ZARD index?',
      answer: 'The ZARD index tracks the price of graded Charizard Pokemon cards across major auction houses and marketplaces. It provides a real-time benchmark for Charizard card values, allowing traders to speculate on or hedge against price movements without owning physical cards.',
    },
    {
      question: 'How does leverage work on Trove Markets?',
      answer: 'Trove Markets offers up to 5x leverage on collectibles like ZARD. This means with $1,000 in your account, you can control a $5,000 position. However, leverage amplifies both gains and losses, so use it carefully and understand the liquidation risks.',
    },
    {
      question: 'Can I short Charizard cards?',
      answer: 'Yes! One of the biggest advantages of trading ZARD perpetuals is the ability to short. If you believe Charizard card prices will decline, you can open a short position and profit from the downturn. This is impossible with physical cards.',
    },
    {
      question: 'Is KYC required to trade on Trove Markets?',
      answer: 'No. Trove Markets is a decentralized exchange built on Hyperliquid (HIP-3). You simply connect your wallet and deposit USDC to start trading. No identity verification, no account approval wait times.',
    },
    {
      question: 'What fees does Trove Markets charge?',
      answer: 'Trove Markets charges low trading fees typical of decentralized perpetual exchanges. You pay a small fee per trade (maker/taker fees) and funding rates that adjust based on market conditions. There are no deposit or withdrawal fees beyond network gas costs.',
    },
    {
      question: 'How accurate is the ZARD price to actual Charizard card values?',
      answer: 'The ZARD index uses oracle price feeds that aggregate data from major Pokemon card auction results and marketplace sales. While it closely tracks the market, individual card prices can vary based on grade, condition, and edition.',
    },
    {
      question: 'What happens to my position during funding rate changes?',
      answer: 'Funding rates on perpetual contracts adjust periodically to keep the perp price aligned with the index price. If you are long and the funding rate is positive, you pay funding. If you are short, you receive funding. Rates can change based on market demand.',
    },
    {
      question: 'Can I trade other Pokemon cards or just Charizard?',
      answer: 'Trove Markets focuses on major collectibles indices. ZARD specifically tracks Charizard cards. Check Trove Markets for other available collectibles perpetuals as they expand their offerings.',
    },
  ];

  const charizardCards = [
    { name: '1st Edition Base Set Charizard', grade: 'PSA 10', value: '$300,000 - $350,000', rarity: 'Holy Grail' },
    { name: 'Base Set Unlimited Charizard', grade: 'PSA 10', value: '$8,000 - $15,000', rarity: 'Very Rare' },
    { name: 'Shadowless Base Set Charizard', grade: 'PSA 10', value: '$30,000 - $50,000', rarity: 'Extremely Rare' },
    { name: 'Crystal Charizard (Skyridge)', grade: 'PSA 10', value: '$25,000 - $40,000', rarity: 'Ultra Rare' },
    { name: 'Shining Charizard (Neo Destiny)', grade: 'PSA 10', value: '$15,000 - $25,000', rarity: 'Very Rare' },
    { name: 'Gold Star Charizard (Dragon Frontiers)', grade: 'PSA 10', value: '$20,000 - $35,000', rarity: 'Ultra Rare' },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-red-600/20 to-yellow-500/20" />
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative">
          <nav className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 mt-8 sm:mt-0">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <span className="text-gray-400">Trade Charizard Cards</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
            <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 text-xs sm:text-sm font-medium rounded-full border border-orange-500/30">
              The Most Valuable Pokemon Card
            </span>
            <span className="px-2 sm:px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs sm:text-sm font-medium rounded-full">
              ZARD Index
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Trade <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400">Charizard Cards</span>
            <br />
            Without Owning Them
          </h1>

          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl">
            Get leveraged exposure to <strong className="text-orange-400">$100,000+ Charizard cards</strong> with just $100.
            Trade the ZARD index on Trove Markets with up to 5x leverage, 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white rounded-xl font-bold text-base sm:text-lg hover:from-orange-400 hover:via-red-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25"
            >
              Trade ZARD on Trove
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
            <div className="bg-gray-900/80 border border-orange-500/30 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-orange-400">5x</div>
              <div className="text-gray-400 text-xs sm:text-sm">Max Leverage</div>
            </div>
            <div className="bg-gray-900/80 border border-red-500/30 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-red-400">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm">Trading Hours</div>
            </div>
            <div className="bg-gray-900/80 border border-yellow-500/30 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-yellow-400">No KYC</div>
              <div className="text-gray-400 text-xs sm:text-sm">Just Connect Wallet</div>
            </div>
            <div className="bg-gray-900/80 border border-orange-500/30 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-orange-400">$100k+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Base Set Values</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade Charizard Perps */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Why Trade Charizard Perpetuals?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-900 border border-orange-500/30 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">&#128293;</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Most Sought-After Pokemon Card</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Charizard is the undisputed king of Pokemon cards. The 1st Edition Base Set Charizard is the holy grail that every collector wants, driving consistent demand and price appreciation.
              </p>
            </div>

            <div className="bg-gray-900 border border-red-500/30 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">&#128176;</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">$100,000 - $350,000 Values</h3>
              <p className="text-sm sm:text-base text-gray-400">
                A PSA 10 1st Edition Base Set Charizard sells for $100,000 to $350,000 at auction. With perpetuals, get exposure to these price movements without needing hundreds of thousands in capital.
              </p>
            </div>

            <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">&#128200;</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Accessible Entry Point</h3>
              <p className="text-sm sm:text-base text-gray-400">
                You do not need $100,000+ to participate in the Charizard market. With 5x leverage on Trove Markets, $1,000 gives you $5,000 of exposure to Charizard price movements.
              </p>
            </div>

            <div className="bg-gray-900 border border-orange-500/30 rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">&#128201;</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Profit in Any Direction</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Unlike physical cards, you can short ZARD during market corrections. If you believe Charizard prices are overheated, profit from the decline. True two-way trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the ZARD Index Works */}
      <section id="how-it-works" className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-3 sm:mb-4">
              <span className="text-orange-400 font-medium text-sm sm:text-base">Understanding ZARD</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              How the Charizard Index Works
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
              The ZARD index aggregates graded Charizard card prices to create a tradeable benchmark
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 via-red-500/10 to-yellow-500/10 border border-orange-500/30 rounded-2xl p-5 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">&#128202;</span>
                </div>
                <h3 className="text-white font-bold mb-2 text-sm sm:text-base">Price Aggregation</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  ZARD tracks auction results and marketplace sales from major platforms like eBay, PWCC, and Goldin
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">&#9733;</span>
                </div>
                <h3 className="text-white font-bold mb-2 text-sm sm:text-base">Graded Card Focus</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  The index focuses on PSA/BGS graded Charizard cards, ensuring standardized quality and verifiable prices
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">&#9889;</span>
                </div>
                <h3 className="text-white font-bold mb-2 text-sm sm:text-base">Real-Time Oracle</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Oracle price feeds update the index, keeping perpetual prices aligned with the actual Charizard market
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
              <p className="text-gray-300 text-center text-sm sm:text-base">
                <strong className="text-white">Why this matters:</strong> Unlike buying a single card, the ZARD index gives you diversified exposure to Charizard market trends. You are trading the overall Charizard market sentiment, not betting on one specific card.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section id="get-started" className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-3 sm:mb-4">
              <span className="text-orange-400 font-medium text-sm sm:text-base">Simple 4-Step Setup</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Get Started in 15 Minutes
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Skip the brokerage applications and identity verification. Just set up a wallet, fund it, and start trading Charizard cards immediately.
            </p>
          </div>

          {/* Benefits Banner */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h3 className="text-white font-bold mb-3 text-center text-sm sm:text-base">Why This Setup Is Worth It</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1">&#128275;</div>
                <div className="text-xs sm:text-sm text-gray-300">No account applications</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1">&#127757;</div>
                <div className="text-xs sm:text-sm text-gray-300">Works from any country</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1">&#9889;</div>
                <div className="text-xs sm:text-sm text-gray-300">Trade in minutes, not days</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-1">&#128274;</div>
                <div className="text-xs sm:text-sm text-gray-300">You control your funds</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Step 1: Wallet */}
            <div className="bg-gray-900 border-2 border-orange-500/30 rounded-2xl overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-black text-xl sm:text-2xl flex-shrink-0">1</div>
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Set Up Your Wallet (5 minutes)</h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-4">
                      A wallet is like a digital bank account that only you control. Think of it as your personal vault for trading -
                      no bank, no broker, just you. We recommend <strong className="text-orange-400">Rabby Wallet</strong> because it is free, secure, and beginner-friendly.
                    </p>

                    {/* What is a wallet explainer */}
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-3 sm:p-4 mb-4">
                      <h4 className="text-orange-400 font-semibold mb-2 text-sm sm:text-base">Why use a wallet instead of a brokerage?</h4>
                      <p className="text-gray-300 text-xs sm:text-sm mb-3">
                        A wallet lets you trade directly without middlemen. Unlike a brokerage account,
                        <strong className="text-white"> you have complete control</strong> - no one can freeze your funds or block your access.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs">
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-base sm:text-lg mb-1">&#128274;</div>
                          <span className="text-gray-400">Only you have access</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-base sm:text-lg mb-1">&#127381;</div>
                          <span className="text-gray-400">Completely free</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-base sm:text-lg mb-1">&#9889;</div>
                          <span className="text-gray-400">Works instantly</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-base sm:text-lg mb-1">&#127757;</div>
                          <span className="text-gray-400">No country restrictions</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Setup Steps:</h4>
                        <ol className="space-y-2 sm:space-y-3 text-gray-300 text-sm">
                          <li className="flex gap-2 sm:gap-3">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs sm:text-sm font-bold flex-shrink-0">1</span>
                            <span className="text-xs sm:text-sm">Go to <a href="https://rabby.io" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">rabby.io</a> and download the browser extension</span>
                          </li>
                          <li className="flex gap-2 sm:gap-3">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs sm:text-sm font-bold flex-shrink-0">2</span>
                            <span className="text-xs sm:text-sm">Click &quot;Create New Wallet&quot; and set a password</span>
                          </li>
                          <li className="flex gap-2 sm:gap-3">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs sm:text-sm font-bold flex-shrink-0">3</span>
                            <span className="text-xs sm:text-sm">Write down your 12-word seed phrase on paper</span>
                          </li>
                          <li className="flex gap-2 sm:gap-3">
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs sm:text-sm font-bold flex-shrink-0">4</span>
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
            <div className="bg-gray-900 border-2 border-orange-500/30 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-black text-xl sm:text-2xl flex-shrink-0">2</div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Get USDC (5-10 minutes)</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    USDC is a digital dollar - 1 USDC always equals $1. It is the currency you will use to trade on Trove Markets.
                    You can buy it with your credit card, bank transfer, or even Apple Pay.
                  </p>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 sm:p-4 mb-4">
                    <h4 className="text-red-400 font-semibold mb-2 text-sm sm:text-base">Easiest ways to get USDC:</h4>
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
                      <strong className="text-white">&#128161; Pro tip:</strong> Start with $50-100 to learn. You can always add more later.
                      Make sure to withdraw your USDC to your Rabby wallet on the <strong className="text-orange-400">Arbitrum</strong> network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Connect to Trove */}
            <div className="bg-gray-900 border-2 border-orange-500/30 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-black text-xl sm:text-2xl flex-shrink-0">3</div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Connect to Trove Markets (1 minute)</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    This is the easy part! Just visit Trove Markets and click &quot;Connect Wallet&quot;.
                    Your Rabby wallet will pop up asking you to approve - click confirm and you are connected.
                  </p>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 sm:p-4 mb-4">
                    <h4 className="text-green-400 font-semibold mb-2 text-sm sm:text-base">No signup required - here is why that is great:</h4>
                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                      <li>&#10003; No email verification or waiting for approval</li>
                      <li>&#10003; No identity documents or selfies</li>
                      <li>&#10003; No withdrawal limits or restrictions</li>
                      <li>&#10003; Start trading immediately after connecting</li>
                    </ul>
                  </div>

                  <a
                    href={TROVE_REFERRAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-orange-500 text-white rounded-xl font-bold text-sm sm:text-base hover:bg-orange-400 transition-colors"
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
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">4</div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Start Trading ZARD!</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    You are ready! Deposit your USDC, find the ZARD market, and open your first position on Charizard cards.
                    Start with 1-2x leverage while you learn - you can increase it as you get comfortable.
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 sm:p-4">
                      <div className="text-green-400 font-bold text-base sm:text-lg mb-1">Go Long</div>
                      <p className="text-xs sm:text-sm text-gray-400">Think Charizard cards will go up? Buy long and profit when prices rise.</p>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 sm:p-4">
                      <div className="text-red-400 font-bold text-base sm:text-lg mb-1">Go Short</div>
                      <p className="text-xs sm:text-sm text-gray-400">Think the market is overheated? Go short and profit when prices fall.</p>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-xs sm:text-sm text-gray-300">
                      <strong className="text-white">&#127919; Beginner tip:</strong> Start with a small position (like $20-50) to understand how it works.
                      You can always scale up once you are comfortable with the platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charizard Card Market */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            The Charizard Card Market
          </h2>
          <p className="text-gray-400 text-center mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Multiple Charizard cards command five and six-figure prices. The ZARD index captures the overall market trend.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {charizardCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-5 hover:border-orange-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full ${
                    card.rarity === 'Holy Grail' ? 'bg-orange-500/20 text-orange-400' :
                    card.rarity === 'Extremely Rare' ? 'bg-red-500/20 text-red-400' :
                    card.rarity === 'Ultra Rare' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-700 text-gray-400'
                  }`}>
                    {card.rarity}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500">{card.grade}</span>
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-1">{card.name}</h3>
                <p className="text-orange-400 font-semibold text-sm sm:text-base">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-4 sm:p-6 text-center">
            <p className="text-gray-300 text-sm sm:text-base">
              <strong className="text-white">Market Insight:</strong> The Pokemon card market has grown significantly since 2020, with Charizard leading the charge. The ZARD index lets you trade this trend without the risks of storing physical cards worth hundreds of thousands of dollars.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trove Markets */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Why Trade on Trove Markets
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <span className="text-lg sm:text-xl">&#128279;</span>
              </div>
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">Built on Hyperliquid</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Trove uses HIP-3 on Hyperliquid for fast, secure, and transparent trading infrastructure
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-lg sm:text-xl">&#128274;</span>
              </div>
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">No KYC Required</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Connect your wallet and start trading immediately. No identity verification or account approval
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span className="text-lg sm:text-xl">&#128337;</span>
              </div>
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">24/7 Trading</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Trade ZARD any time, day or night. No market hours, no waiting for auction results
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-lg sm:text-xl">&#128200;</span>
              </div>
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">Up to 5x Leverage</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Amplify your exposure with leverage. Trade $5,000 worth of ZARD with just $1,000
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-lg sm:text-xl">&#128184;</span>
              </div>
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">Low Fees</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Competitive trading fees with on-chain transparency. No hidden costs or spreads
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-5 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full bg-orange-500/20 flex items-center justify-center">
                <span className="text-lg sm:text-xl">&#128178;</span>
              </div>
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">Real-Time Liquidity</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Enter and exit positions instantly with deep liquidity pools and tight spreads
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-4">
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
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
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
          <div className="bg-gradient-to-br from-orange-500/20 via-red-500/20 to-yellow-500/20 border border-orange-500/30 rounded-2xl p-5 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Trade the Charizard Market?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 max-w-xl mx-auto">
              Get leveraged exposure to the most valuable Pokemon card without owning physical cards. Trade ZARD 24/7 on Trove Markets.
            </p>
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white rounded-xl font-bold text-base sm:text-lg hover:from-orange-400 hover:via-red-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25"
            >
              Start Trading ZARD on Trove
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Referral Notice */}
      <section className="py-6 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 sm:p-6 text-center">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              This page contains affiliate links to Trove Markets. We may earn a commission if you sign up and trade through our links.
              This helps support our free educational content. <span className="text-orange-400">Trading perpetuals involves significant risk</span> -
              only trade with funds you can afford to lose.
            </p>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Learn More About Perpetuals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <Link href="/blog/what-are-equity-perpetuals" className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-orange-500/50 transition-colors">
              <span className="text-[10px] sm:text-xs font-medium text-orange-400">Guide</span>
              <h3 className="text-white font-medium mt-1 text-sm sm:text-base">What Are Perpetuals?</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Understand how perpetual contracts work</p>
            </Link>
            <Link href="/blog/how-funding-rates-work" className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-orange-500/50 transition-colors">
              <span className="text-[10px] sm:text-xs font-medium text-green-400">Tutorial</span>
              <h3 className="text-white font-medium mt-1 text-sm sm:text-base">How Funding Rates Work</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Learn about funding rate mechanics</p>
            </Link>
            <Link href="/blog/wallet-setup-guide" className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-orange-500/50 transition-colors">
              <span className="text-[10px] sm:text-xs font-medium text-yellow-400">Setup</span>
              <h3 className="text-white font-medium mt-1 text-sm sm:text-base">Wallet Setup Guide</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Get your wallet ready for trading</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
