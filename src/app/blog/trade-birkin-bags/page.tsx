'use client';

import { useState } from 'react';
import Link from 'next/link';

const TROVE_REFERRAL_URL = 'https://trovemarkets.com/trade?referral=YE7BXYS';

export default function TradeBirkinBags() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is a Birkin bag perpetual?',
      answer: 'A Birkin bag perpetual is a derivative contract that tracks the value of Hermes Birkin bags without expiration. You can go long (bet prices rise) or short (bet prices fall) with leverage, without ever owning or storing a physical bag.',
    },
    {
      question: 'How is the Birkin index price determined?',
      answer: 'The Birkin index aggregates secondary market data from authenticated luxury resale platforms, auction houses, and dealer networks. Prices are weighted by bag condition, size, leather type, color rarity, and hardware material.',
    },
    {
      question: 'Do I need to own a Birkin bag to trade?',
      answer: 'No. Trove Markets lets you trade the value of Birkin bags through perpetual contracts. You never take physical delivery - you are trading price exposure with USDC as collateral.',
    },
    {
      question: 'What leverage is available for Birkin perps?',
      answer: 'Trove Markets offers up to 5x leverage on Birkin bag perpetuals. This means $1,000 in collateral can control $5,000 in position size. Higher leverage increases both potential gains and losses.',
    },
    {
      question: 'Is KYC required to trade on Trove Markets?',
      answer: 'No. Trove Markets is a decentralized exchange built on Hyperliquid (HIP-3). You simply connect your wallet and deposit USDC to start trading. No identity verification required.',
    },
    {
      question: 'What are funding rates for Birkin perps?',
      answer: 'Funding rates are periodic payments between long and short traders that keep the perpetual price aligned with the index. If more traders are long, longs pay shorts (and vice versa). Rates are typically settled every 8 hours.',
    },
    {
      question: 'Can I short Birkin bags during a recession?',
      answer: 'Yes. One major advantage of perpetual contracts is the ability to profit from falling prices. If you believe luxury goods will decline in value during economic downturns, you can open a short position.',
    },
    {
      question: 'How liquid is the Birkin perpetual market?',
      answer: 'Trove Markets provides real-time liquidity through its decentralized order book on Hyperliquid. While alternative asset markets are smaller than crypto or stocks, Trove ensures executable prices 24/7.',
    },
  ];

  const whyTradeReasons = [
    {
      icon: '📈',
      title: 'Birkins Outperform Stocks',
      description: 'Hermes Birkin bags have historically delivered 14%+ annual returns, outperforming the S&P 500 and gold over the past decade.',
    },
    {
      icon: '💰',
      title: 'No $50,000+ Minimum',
      description: 'Physical Birkins start at $10,000 and can exceed $500,000. With perps, start trading with as little as $100 in USDC.',
    },
    {
      icon: '🏠',
      title: 'Zero Storage & Insurance',
      description: 'Physical bags require secure storage, climate control, and insurance. Perpetual contracts have none of these overhead costs.',
    },
    {
      icon: '📉',
      title: 'Short the Luxury Market',
      description: 'Can\'t short a physical bag. With perps, profit from declining luxury prices during recessions or market corrections.',
    },
    {
      icon: '🔐',
      title: 'No Authentication Risk',
      description: 'The secondary market is plagued with fakes. Trading the index eliminates counterfeit risk entirely.',
    },
    {
      icon: '⚡',
      title: 'Instant Liquidity',
      description: 'Selling a physical Birkin takes weeks to months. Close your perpetual position in seconds, 24/7.',
    },
  ];

  const marketDynamics = [
    {
      title: 'Supply Constraints',
      description: 'Hermes produces limited quantities and requires existing customers to "build a purchase history" before being offered a Birkin. This artificial scarcity drives secondary market premiums.',
    },
    {
      title: 'Celebrity Demand',
      description: 'High-profile collectors like Victoria Beckham, Kim Kardashian, and international royalty create aspirational demand that ripples through the market.',
    },
    {
      title: 'Color & Hardware Premium',
      description: 'Rare colors (Himalayan, Rose Shocking) and hardware (palladium, diamonds) command 2-10x premiums over standard configurations.',
    },
    {
      title: 'Size Matters',
      description: 'The Birkin 25 and 30 are most sought after. Birkin 35 and 40 trade at discounts. Mini sizes have seen explosive growth.',
    },
    {
      title: 'Leather Hierarchy',
      description: 'Exotic leathers (crocodile, ostrich) trade 3-5x higher than standard calfskin or clemence. Condition grades heavily impact pricing.',
    },
    {
      title: 'Geographic Arbitrage',
      description: 'Prices vary significantly between Paris boutiques, Asian markets, and US resellers. The index normalizes these variations.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-20 px-4 overflow-hidden">
        {/* Luxury gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-gray-950 to-rose-900/20" />
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <span className="text-gray-400">Trade Birkin Bags</span>
          </nav>

          {/* Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
            <span className="px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 text-xs sm:text-sm font-medium rounded-full border border-amber-500/30">
              Better Returns Than Stocks?
            </span>
            <span className="px-3 py-1.5 bg-rose-500/20 text-rose-400 text-xs sm:text-sm font-medium rounded-full border border-rose-500/30">
              Luxury Asset Perps
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Trade <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Hermes Birkin</span> Value
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-300">on Trove Markets</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl">
            Trade the luxury handbag market with up to <strong className="text-amber-400">5x leverage</strong>.
            No $50,000 bag purchase, no storage costs, no authentication headaches.
            <strong className="text-white"> 24/7 trading on Hyperliquid.</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold text-base sm:text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25"
            >
              Trade Birkin Perps
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-gray-700 transition-all border border-gray-700"
            >
              Learn How It Works
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-gray-900/80 border border-amber-500/20 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-amber-400">5x</div>
              <div className="text-gray-400 text-xs sm:text-sm">Max Leverage</div>
            </div>
            <div className="bg-gray-900/80 border border-amber-500/20 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm">Trading</div>
            </div>
            <div className="bg-gray-900/80 border border-amber-500/20 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-green-400">No KYC</div>
              <div className="text-gray-400 text-xs sm:text-sm">Required</div>
            </div>
            <div className="bg-gray-900/80 border border-amber-500/20 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl font-bold text-rose-400">$10k-$500k</div>
              <div className="text-gray-400 text-xs sm:text-sm">Bag Values</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade Birkin Perps */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-3 sm:mb-4">
              <span className="text-amber-400 font-medium text-sm sm:text-base">Why Trade Birkin Perps?</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Better Than Owning a Physical Bag
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
              Birkin bags have outperformed stocks and gold. Now trade the value without the $50k+ entry barrier.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyTradeReasons.map((reason, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-amber-500/30 transition-colors">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{reason.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Birkin Index Works */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-rose-500/10 border border-rose-500/30 rounded-full mb-3 sm:mb-4">
              <span className="text-rose-400 font-medium text-sm sm:text-base">Index Methodology</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              How the Birkin Index Works
            </h2>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Data Sources</h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Authenticated resale platforms (Rebag, Vestiaire, The RealReal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Major auction houses (Christie&apos;s, Sotheby&apos;s, Heritage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Private dealer networks and consignment data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>International market feeds (Asia, Europe, Americas)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Price Weighting</h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Bag condition (new, excellent, very good, good)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Size category (25, 30, 35, 40, Kelly sizes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Leather type (calfskin, exotic, limited editions)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Hardware material (gold, palladium, special finishes)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm sm:text-base">
                <strong className="text-white">Real-time oracle updates:</strong> The Birkin index is updated continuously based on confirmed sales data, providing accurate price discovery for perpetual contract settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section id="how-it-works" className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          {/* Header with No Crypto Experience Badge */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/40 rounded-full mb-4">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-amber-400 font-semibold text-sm sm:text-base">No Crypto Experience Needed</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              How to Trade Birkin Perpetuals
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              New to crypto? No problem. We will walk you through everything step by step. Most people complete setup in under 10 minutes.
            </p>
          </div>

          {/* Benefits Banner */}
          <div className="bg-gradient-to-r from-amber-900/30 via-gray-900 to-rose-900/30 border border-amber-500/30 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">No Applications</span>
                <span className="text-gray-500 text-xs">Skip the paperwork</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">Works Globally</span>
                <span className="text-gray-500 text-xs">Any country</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">Trade in Minutes</span>
                <span className="text-gray-500 text-xs">Quick setup</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">You Control Funds</span>
                <span className="text-gray-500 text-xs">Self-custody</span>
              </div>
            </div>
          </div>

          {/* Step 1: Wallet Setup with Video */}
          <div className="bg-gray-900 border border-amber-500/30 rounded-2xl p-5 sm:p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Set Up Your Wallet</h3>
                <p className="text-gray-400 text-sm sm:text-base">Your gateway to luxury asset trading - takes 2 minutes</p>
              </div>
            </div>

            {/* Video Embed */}
            <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-gray-800">
              <iframe
                src="https://www.youtube.com/embed/_ouAzSQJiM0"
                title="Rabby Wallet Setup Guide"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* What is a Wallet Explainer */}
            <div className="bg-gray-800/50 rounded-xl p-4 sm:p-5">
              <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What is a Crypto Wallet?
              </h4>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                Think of a crypto wallet like a digital bank account that <strong className="text-white">you fully control</strong>. Unlike traditional brokers, no company holds your funds - you have direct ownership through your wallet.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400 text-sm">No account applications or approvals</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400 text-sm">Works instantly from any country</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400 text-sm">Your funds, your control - always</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400 text-sm">Free browser extension</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-amber-400/80 text-xs sm:text-sm">
                  <strong>We recommend Rabby Wallet</strong> - it is beginner-friendly and works great with Trove Markets. Watch the video above for a complete walkthrough.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Get USDC */}
          <div className="bg-gray-900 border border-amber-500/30 rounded-2xl p-5 sm:p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Get USDC</h3>
                <p className="text-gray-400 text-sm sm:text-base">USDC is a digital dollar - your trading currency</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base mb-5">
              USDC is a stablecoin pegged 1:1 to the US dollar. You will use it as collateral for your Birkin trades. Choose any option below:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-amber-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CB</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Coinbase</h4>
                    <span className="text-gray-500 text-xs">Best for US users</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">Buy USDC directly with bank transfer or card. Easiest for beginners.</p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-amber-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-sm">BN</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Binance</h4>
                    <span className="text-gray-500 text-xs">Best for international</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">World largest exchange. Wide range of payment methods globally.</p>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-amber-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MP</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">MoonPay</h4>
                    <span className="text-gray-500 text-xs">Buy directly in wallet</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">Buy with card directly in Rabby. Slightly higher fees but very convenient.</p>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <p className="text-amber-400 text-sm">
                <strong>Tip:</strong> Withdraw your USDC to your wallet on the <strong>Arbitrum</strong> network for the lowest fees. Most exchanges support Arbitrum withdrawals.
              </p>
            </div>
          </div>

          {/* Step 3: Connect to Trove */}
          <div className="bg-gray-900 border border-amber-500/30 rounded-2xl p-5 sm:p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Connect to Trove Markets</h3>
                <p className="text-gray-400 text-sm sm:text-base">One click to start - no signup required</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Trove Markets is a decentralized exchange - that means <strong className="text-white">no account creation, no identity verification, no waiting periods</strong>.
                </p>
                <ol className="space-y-3 text-sm sm:text-base text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <span>Visit Trove Markets (link below)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <span>Click &quot;Connect Wallet&quot; and select Rabby</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <span>Deposit USDC to your trading account</span>
                  </li>
                </ol>
              </div>
              <div className="bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-xl p-5 border border-amber-500/20">
                <h4 className="text-white font-semibold mb-3">Why Decentralized?</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No company can freeze your account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Trade 24/7 - no market hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Withdraw anytime - instant settlement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full transparency - all trades on-chain</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4: Trade Birkin */}
          <div className="bg-gray-900 border border-amber-500/30 rounded-2xl p-5 sm:p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Trade Birkin Perpetuals</h3>
                <p className="text-gray-400 text-sm sm:text-base">Go long or short on luxury handbag prices</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base mb-5">
              With perpetual contracts, you can profit whether Birkin prices go <strong className="text-green-400">up</strong> or <strong className="text-red-400">down</strong>. Choose your direction:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-green-400 font-bold text-lg">Go Long</h4>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Profit when Birkin prices <strong className="text-green-400">increase</strong>
                </p>
                <p className="text-gray-500 text-xs">
                  Best when: Luxury market is strong, wealth growing, Hermes demand increasing
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                    </svg>
                  </div>
                  <h4 className="text-red-400 font-bold text-lg">Go Short</h4>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Profit when Birkin prices <strong className="text-red-400">decrease</strong>
                </p>
                <p className="text-gray-500 text-xs">
                  Best when: Economic downturn, recession fears, luxury market cooling
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-white font-medium text-sm mb-1">About Leverage</p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Trove offers up to 5x leverage. This means $1,000 can control a $5,000 position. Start with 1-2x while learning - leverage amplifies both gains <em>and</em> losses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold text-lg sm:text-xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25"
            >
              Start Trading on Trove Markets
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-gray-500 text-sm mt-4">No signup required - connect wallet and trade</p>
          </div>
        </div>
      </section>

      {/* Birkin Market Dynamics */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-rose-500/10 border border-rose-500/30 rounded-full mb-3 sm:mb-4">
              <span className="text-rose-400 font-medium text-sm sm:text-base">Market Intelligence</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Birkin Market Dynamics
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
              Understanding what drives Birkin bag values can help inform your trading decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {marketDynamics.map((dynamic, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{dynamic.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{dynamic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
              Everything you need to know about trading Birkin bag perpetuals on Trove Markets.
            </p>
          </div>

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
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
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

      {/* About Trove Markets */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-900/20 to-rose-900/20 border border-amber-500/30 rounded-2xl p-5 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">About Trove Markets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  Trove Markets is a decentralized perpetual futures exchange built on Hyperliquid (HIP-3), specializing in alternative assets like luxury goods, collectibles, and real-world asset indices.
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 5x leverage on alternative assets
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    On-chain transparency and settlement
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Low trading fees
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No KYC - connect wallet and trade
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg font-bold text-white mb-3">Available Markets</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Birkin Index</span>
                    <span className="text-amber-400">5x leverage</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Luxury Watch Index</span>
                    <span className="text-amber-400">5x leverage</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Collectibles Index</span>
                    <span className="text-amber-400">5x leverage</span>
                  </div>
                  <div className="flex justify-between">
                    <span>More markets coming...</span>
                    <span className="text-gray-500">Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/20 to-rose-500/20 border border-amber-500/30 rounded-2xl p-5 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Start Trading Birkin Bags Today
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 max-w-xl mx-auto">
              Access the luxury handbag market with up to 5x leverage. No minimum investment, no storage costs, no KYC required.
            </p>
            <a
              href={TROVE_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 rounded-xl font-bold text-base sm:text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25"
            >
              Trade on Trove Markets
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
              <strong className="text-white">Disclosure:</strong> This page contains affiliate links. If you trade on Trove Markets through our link, we may receive a referral commission at no extra cost to you. Trading perpetual contracts involves substantial risk of loss. Only trade with funds you can afford to lose. This is not financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <Link href="/blog/what-are-equity-perpetuals" className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-amber-500/50 transition-colors">
              <span className="text-[10px] sm:text-xs font-medium text-amber-400">GUIDE</span>
              <h3 className="text-white font-medium mt-1 text-sm sm:text-base">What Are Perpetuals?</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Learn how perpetual contracts work</p>
            </Link>
            <Link href="/blog/how-funding-rates-work" className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-amber-500/50 transition-colors">
              <span className="text-[10px] sm:text-xs font-medium text-green-400">TRADING</span>
              <h3 className="text-white font-medium mt-1 text-sm sm:text-base">Funding Rates Explained</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Understand funding rate mechanics</p>
            </Link>
            <Link href="/blog/wallet-setup-guide" className="bg-gray-900 border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-amber-500/50 transition-colors">
              <span className="text-[10px] sm:text-xs font-medium text-rose-400">SETUP</span>
              <h3 className="text-white font-medium mt-1 text-sm sm:text-base">Wallet Setup Guide</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Get your crypto wallet ready</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
