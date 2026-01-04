'use client';

import Link from 'next/link';
import { useState } from 'react';

const TROVE_REFERRAL_URL = 'https://trovemarkets.com/trade?referral=YE7BXYS';

const faqs = [
  {
    question: "What is a Nintendo perpetual?",
    answer: "A Nintendo perpetual is a derivative contract that tracks the price of Nintendo stock (NTDOY). You can go long or short with leverage, 24/7, without owning actual Nintendo shares. Unlike traditional futures, perpetuals have no expiration date."
  },
  {
    question: "Why can't I trade Nintendo on US brokers?",
    answer: "Nintendo trades primarily on the Tokyo Stock Exchange (TSE). Most US brokers offer limited access to Japanese stocks, and NTDOY (the ADR) often has limited liquidity and trading hours. Perpetuals on Trove Markets solve this by offering 24/7 access with leverage."
  },
  {
    question: "What moves Nintendo stock price?",
    answer: "Nintendo stock is primarily driven by: Switch/console sales and new console announcements, major game releases (Mario, Zelda, Pokemon), quarterly earnings reports, IP licensing deals (movies, theme parks), and broader gaming industry trends."
  },
  {
    question: "Is 5x leverage safe for Nintendo?",
    answer: "5x leverage amplifies both gains and losses. Nintendo can move 5-10% on earnings or major announcements. We recommend starting with 2x-3x leverage until you understand the stock's volatility patterns. Always use stop-losses."
  },
  {
    question: "When does the Tokyo Stock Exchange trade?",
    answer: "The Tokyo Stock Exchange is open 9:00 AM - 3:00 PM JST (Japan Standard Time), which is 7:00 PM - 1:00 AM EST. With perpetuals on Trove Markets, you can trade Nintendo 24/7, including during TSE off-hours and weekends."
  },
  {
    question: "Do I need a Japanese brokerage account?",
    answer: "No. Trove Markets allows you to trade Nintendo perpetuals with just a crypto wallet. No Japanese brokerage account, no international wire transfers, no KYC verification required."
  },
  {
    question: "What is Trove Markets?",
    answer: "Trove Markets is a decentralized perpetual futures exchange built on Hyperliquid (HIP-3). It offers equity perpetuals including Nintendo with up to 5x leverage, 24/7 trading, no KYC, and self-custody of funds."
  },
  {
    question: "How do funding rates work on Nintendo perps?",
    answer: "Funding rates are periodic payments between long and short traders that keep the perpetual price aligned with the spot price. If funding is positive, longs pay shorts; if negative, shorts pay longs. Rates are typically small but can spike during volatile periods."
  },
];

export default function TradeNintendoStock() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Nintendo Red Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-red-800/20 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Trade Nintendo 24/7
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
            Trade <span className="text-red-500">Nintendo</span> Stock
            <br className="hidden sm:block" />
            <span className="text-gray-400"> with Leverage</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-10">
            Access Nintendo (NTDOY) perpetuals on Trove Markets. Trade around game releases,
            console announcements, and earnings - 24/7 with up to 5x leverage.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-red-400">5x</div>
              <div className="text-sm text-gray-400">Max Leverage</div>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Trading Hours</div>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">No KYC</div>
              <div className="text-sm text-gray-400">Required</div>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">Self</div>
              <div className="text-sm text-gray-400">Custody</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 rounded-xl text-white font-semibold text-lg shadow-lg shadow-red-600/30 transition-all hover:shadow-red-500/40 hover:scale-105"
            >
              Trade Nintendo on Trove
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Trade Nintendo Perps */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Why Trade Nintendo Perps?
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Nintendo is one of the world's most iconic gaming companies, but trading it from outside Japan has always been a challenge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hard to Access on US Brokers</h3>
              <p className="text-gray-400">
                Nintendo trades on the Tokyo Stock Exchange. Most US brokers don't offer direct access, and the NTDOY ADR has limited liquidity and restricted trading hours.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Trade Around Game Releases</h3>
              <p className="text-gray-400">
                Position before major game launches like Zelda, Mario, or Pokemon. Nintendo stock often moves significantly on first-week sales data and review scores.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Access vs TSE Hours</h3>
              <p className="text-gray-400">
                The Tokyo Stock Exchange is only open 9AM-3PM JST. With perpetuals, you can trade Nintendo anytime - react to Nintendo Direct announcements on your schedule.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Japanese Brokerage Needed</h3>
              <p className="text-gray-400">
                Skip the hassle of opening a Japanese brokerage account, dealing with international wire transfers, and navigating Japanese tax forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Moves Nintendo Stock */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            What Moves Nintendo Stock?
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Understanding Nintendo's catalysts helps you time your trades better.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-900/30 to-gray-900/50 border border-red-800/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-lg font-semibold text-white mb-2">Switch & Console Sales</h3>
              <p className="text-gray-400 text-sm">
                Hardware sales drive revenue. New console announcements (Switch 2) and quarterly hardware numbers create major price moves.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-gray-900/50 border border-red-800/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🍄</div>
              <h3 className="text-lg font-semibold text-white mb-2">Major Game Releases</h3>
              <p className="text-gray-400 text-sm">
                Zelda, Mario, and Pokemon titles consistently move the stock. First-week sales data and Metacritic scores matter.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-gray-900/50 border border-red-800/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="text-lg font-semibold text-white mb-2">IP & Licensing Deals</h3>
              <p className="text-gray-400 text-sm">
                Mario movies, theme parks (Universal), and merchandise deals expand Nintendo's IP value beyond gaming.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-gray-900/50 border border-red-800/30 rounded-xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Quarterly Earnings</h3>
              <p className="text-gray-400 text-sm">
                Earnings reports reveal hardware/software sales mix, guidance, and digital revenue growth. Usually in early Feb, May, Aug, Nov.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-gray-900/50 border border-red-800/30 rounded-xl p-6">
              <div className="text-3xl mb-3">📢</div>
              <h3 className="text-lg font-semibold text-white mb-2">Nintendo Direct Events</h3>
              <p className="text-gray-400 text-sm">
                Nintendo's announcement streams reveal new games and features. Major Directs can move the stock significantly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-gray-900/50 border border-red-800/30 rounded-xl p-6">
              <div className="text-3xl mb-3">💴</div>
              <h3 className="text-lg font-semibold text-white mb-2">Yen Exchange Rate</h3>
              <p className="text-gray-400 text-sm">
                As a Japanese company, Nintendo's earnings are affected by USD/JPY. A weaker yen boosts overseas revenue when converted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Trade Section - No Crypto Experience Needed */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          {/* No Crypto Experience Needed Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No Crypto Experience Needed
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            How to Trade Nintendo on Trove
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
            New to crypto? No problem. We will walk you through every step. Most people are set up and trading in under 10 minutes.
          </p>

          {/* Benefits Banner */}
          <div className="bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 border border-red-500/20 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white">No Account Applications</div>
                <div className="text-xs text-gray-400 mt-1">Skip the paperwork</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white">Works From Any Country</div>
                <div className="text-xs text-gray-400 mt-1">Global access</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white">Trade in Minutes</div>
                <div className="text-xs text-gray-400 mt-1">Quick setup</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white">You Control Your Funds</div>
                <div className="text-xs text-gray-400 mt-1">Self-custody</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Step 1 - Wallet Setup with Video */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Set Up Your Wallet (2 minutes)</h3>
                    <p className="text-gray-400">
                      A crypto wallet is like a digital bank account that only you control. No company can freeze it or lock you out. We recommend Rabby - it is free, secure, and beginner-friendly.
                    </p>
                  </div>
                </div>

                {/* Video Embed */}
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-800 mb-6">
                  <iframe
                    src="https://www.youtube.com/embed/_ouAzSQJiM0"
                    title="How to Set Up Rabby Wallet"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* What is a Wallet Explainer */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What is a Crypto Wallet?
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Think of it as your personal vault on the internet. Unlike a bank account:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">You own it</strong> - No company can freeze or seize your funds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">No approval needed</strong> - Start using it instantly, no applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Works everywhere</strong> - Access from any country, 24/7</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 - Get USDC */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Get USDC (Your Trading Currency)</h3>
                    <p className="text-gray-400">
                      USDC is a digital dollar - 1 USDC always equals $1 USD. This is what you will use to trade on Trove. Choose the option that works best for you:
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {/* Coinbase Option */}
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-red-500/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-sm">CB</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Coinbase</div>
                        <div className="text-xs text-gray-400">Best for US users</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      Buy USDC directly with bank transfer or debit card. Send to your Rabby wallet address on Arbitrum network.
                    </p>
                  </div>

                  {/* Binance Option */}
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-red-500/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-yellow-400 font-bold text-sm">BN</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Binance</div>
                        <div className="text-xs text-gray-400">Global availability</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      Largest crypto exchange worldwide. Buy USDC and withdraw to your wallet on Arbitrum.
                    </p>
                  </div>

                  {/* MoonPay Option */}
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-red-500/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-purple-400 font-bold text-sm">MP</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">MoonPay</div>
                        <div className="text-xs text-gray-400">Credit card friendly</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      Buy USDC instantly with credit/debit card. Supports Apple Pay and Google Pay.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-sm text-gray-300">
                    <strong className="text-red-400">Pro tip:</strong> When sending USDC, make sure to select the <strong>Arbitrum</strong> network. This ensures fast, low-cost transfers to Trove Markets.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Connect to Trove */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Connect to Trove Markets</h3>
                    <p className="text-gray-400">
                      Visit Trove Markets and click "Connect Wallet". Select Rabby (or your wallet) and approve the connection. That is it - no signup forms, no email verification, no waiting.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">No account creation required</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">No identity verification (KYC)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">No waiting period - trade immediately</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Your funds stay in your wallet</span>
                  </div>
                </div>

                <a
                  href={TROVE_REFERRAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 rounded-xl text-red-400 font-medium transition-colors"
                >
                  Open Trove Markets
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Step 4 - Trade Nintendo */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Trade Nintendo Stock</h3>
                    <p className="text-gray-400">
                      Find Nintendo (NTDOY) in the markets list. Now you can trade in either direction based on your market outlook:
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {/* Long Position */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-green-400">Go Long</div>
                        <div className="text-xs text-gray-400">Bullish on Nintendo</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      Profit when Nintendo stock price goes <strong className="text-green-400">up</strong>. Great for new game releases, console announcements, or positive earnings expectations.
                    </p>
                  </div>

                  {/* Short Position */}
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-red-400">Go Short</div>
                        <div className="text-xs text-gray-400">Bearish on Nintendo</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      Profit when Nintendo stock price goes <strong className="text-red-400">down</strong>. Useful for hedging or if you expect disappointing sales or market downturns.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-semibold mb-3">Quick Trading Tips</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">1.</span>
                      <span><strong className="text-white">Start small</strong> - Begin with 2x or 3x leverage until you understand how Nintendo moves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">2.</span>
                      <span><strong className="text-white">Use stop-losses</strong> - Always set a stop-loss to limit potential downside</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">3.</span>
                      <span><strong className="text-white">Watch catalysts</strong> - Nintendo Directs, earnings, and game releases create volatility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 rounded-xl text-white font-semibold text-lg shadow-lg shadow-red-600/30 transition-all hover:shadow-red-500/40"
            >
              Start Trading Nintendo on Trove
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Trove Markets */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">About Trove Markets</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Trove Markets is a decentralized perpetual futures exchange built on Hyperliquid's HIP-3 infrastructure.
              It brings equity perpetuals to DeFi with institutional-grade liquidity and on-chain transparency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Built on Hyperliquid (HIP-3)</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Up to 5x leverage</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Real-time liquidity</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">No KYC required</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Low trading fees</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">On-chain transparency</span>
              </div>
            </div>

            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium"
            >
              Visit Trove Markets
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-medium text-white pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-1">Risk Warning</h3>
                <p className="text-gray-300 text-sm">
                  Trading perpetual futures involves significant risk of loss. Leverage amplifies both gains and losses.
                  Only trade with capital you can afford to lose. Past performance of Nintendo stock does not guarantee future results.
                  This content is for informational purposes only and should not be considered financial advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-900/40 via-red-800/30 to-gray-900 border border-red-800/30 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Trade Nintendo?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Access Nintendo perpetuals 24/7 on Trove Markets. No Japanese brokerage needed, no KYC, self-custody.
            </p>
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-red-600 hover:bg-red-500 rounded-xl text-white font-bold text-lg shadow-xl shadow-red-600/30 transition-all hover:shadow-red-500/40 hover:scale-105"
            >
              Trade Nintendo on Trove Markets
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all guides
          </Link>
        </div>
      </div>
    </main>
  );
}
