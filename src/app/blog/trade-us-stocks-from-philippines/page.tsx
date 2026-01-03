'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TradeUSStocksFromPhilippinesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do I need a US brokerage account?',
      answer: 'No. Equity perpetuals let you trade synthetic US stocks without a traditional brokerage. You trade with USDC on decentralized platforms - no KYC with US brokers required.'
    },
    {
      question: 'How do I convert PHP to USDC?',
      answer: 'Use Binance P2P, Coins.ph, or PDAX with GCash, Maya, or bank transfer. Most traders get their USDC within minutes. See our detailed guide for step-by-step instructions.'
    },
    {
      question: 'What\'s the minimum to start?',
      answer: 'You can start with as little as PHP 3,000 (~$50). With fractional trading and leverage, this gives you access to all US stocks. No minimum account requirements like traditional brokers.'
    },
    {
      question: 'Can I trade 24/7?',
      answer: 'Yes! Unlike traditional stock markets that only operate during NYSE hours (9:30 PM - 4:00 AM PHT), equity perpetuals trade 24/7. Trade whenever it suits your schedule.'
    },
    {
      question: 'Is this legal in the Philippines?',
      answer: 'Cryptocurrency trading is legal in the Philippines and regulated by BSP (Bangko Sentral ng Pilipinas). Equity perpetuals are synthetic derivatives - you\'re trading crypto contracts, not actual US securities.'
    },
    {
      question: 'What payment methods work in the Philippines?',
      answer: 'GCash, Maya (PayMaya), Coins.ph, BDO, BPI, UnionBank, and other major banks all work for buying USDC through P2P platforms.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-red-900/20 to-[#0a0a0f]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
            🇵🇭 Complete Guide for Filipino Traders
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Trade US Stocks</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
              from the Philippines
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Access NVIDIA, Tesla, Apple, and 50+ US stocks with PHP.
            Start with as little as ₱3,000. Trade 24/7 with GCash or Maya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              Compare Platforms
            </Link>
            <a
              href="#get-started"
              className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Filipino Traders Choose Equity Perps
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Start with ₱3,000</h3>
              <p className="text-gray-400">
                No ₱100,000 minimum. Trade fractional positions with just ~$50 USDC.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Trading</h3>
              <p className="text-gray-400">
                Trade during Philippine hours - not just when US markets are open (late night PHT).
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">GCash & Maya</h3>
              <p className="text-gray-400">
                Use your favorite e-wallets to buy USDC via P2P. Fast and convenient.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-white mb-2">Self-Custody</h3>
              <p className="text-gray-400">
                Your keys, your coins. Trade directly from your wallet - no broker holds your funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Stocks */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Popular US Stocks for Filipino Traders
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { symbol: 'NVDA', name: 'NVIDIA', color: 'green' },
              { symbol: 'TSLA', name: 'Tesla', color: 'red' },
              { symbol: 'AAPL', name: 'Apple', color: 'gray' },
              { symbol: 'MSFT', name: 'Microsoft', color: 'blue' },
              { symbol: 'META', name: 'Meta', color: 'blue' },
              { symbol: 'GOOGL', name: 'Google', color: 'yellow' },
              { symbol: 'AMZN', name: 'Amazon', color: 'orange' },
              { symbol: 'COIN', name: 'Coinbase', color: 'blue' },
              { symbol: 'AMD', name: 'AMD', color: 'red' },
            ].map((stock) => (
              <div
                key={stock.symbol}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 flex items-center gap-3"
              >
                <div className={`w-10 h-10 bg-${stock.color}-500/20 rounded-lg flex items-center justify-center`}>
                  <span className={`text-${stock.color}-400 font-bold text-sm`}>
                    {stock.symbol.slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{stock.symbol}</p>
                  <p className="text-sm text-gray-400">{stock.name}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-6">
            + 40 more stocks available across platforms
          </p>
        </div>
      </section>

      {/* Get Started Steps */}
      <section id="get-started" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Get Started in 4 Steps
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/25">
                1
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Convert PHP to USDC</h3>
                <p className="text-gray-400 mb-4">
                  Use Binance P2P, Coins.ph, or PDAX with GCash, Maya, or bank transfer.
                  PHP 3,000 gets you approximately $50 USDC.
                </p>
                <Link
                  href="/blog/convert-php-to-usdc"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                >
                  View PHP → USDC Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/25">
                2
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Choose a Platform</h3>
                <p className="text-gray-400 mb-4">
                  Compare equity perp platforms for fees, available stocks, and leverage.
                  Most have no KYC requirements.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                >
                  Compare All Platforms
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/25">
                3
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Connect Your Wallet</h3>
                <p className="text-gray-400">
                  Use MetaMask, Rabby, or any Web3 wallet. Deposit your USDC to the platform.
                  Gas fees are typically under ₱50.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/25">
                4
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Start Trading</h3>
                <p className="text-gray-400">
                  Open your first position. Start with low leverage (2-3x) while learning.
                  You can trade any time - markets never close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Philippine Payment Methods
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">📱 E-Wallets</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  GCash (Most Popular)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Maya (PayMaya)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Coins.ph
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  ShopeePay
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">🏦 Bank Transfers</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  BDO Unibank
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  BPI (Bank of the Philippine Islands)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  UnionBank
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Metrobank
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <span className="text-gray-400 text-xl">
                    {expandedFaq === index ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* More Philippines Guides */}
          <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">📚 More Philippines Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/blog/convert-php-to-usdc"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors"
              >
                <span className="text-2xl">💱</span>
                <div>
                  <p className="font-medium text-white">Convert PHP to USDC</p>
                  <p className="text-sm text-gray-400">Step-by-step funding guide</p>
                </div>
              </Link>
              <Link
                href="/blog/trade-stocks-with-3000-php"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors"
              >
                <span className="text-2xl">💵</span>
                <div>
                  <p className="font-medium text-white">Trade with ₱3,000</p>
                  <p className="text-sm text-gray-400">Small account strategies</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/30 to-red-900/30 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Trade US Stocks?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join Filipino traders accessing US markets 24/7.
              Start with just ₱3,000 and no US brokerage account.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Compare Platforms
              </Link>
              <Link
                href="/blog/convert-php-to-usdc"
                className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700"
              >
                Get USDC Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Site + Referral Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              This site is <span className="text-white font-medium">100% free</span> to use for comparing the best platforms to trade stocks 24/7.
              When you sign up through our links to platforms like <span className="text-cyan-400">Hyperliquid</span> and <span className="text-cyan-400">Lighter</span>,
              you get a <span className="text-green-400 font-semibold">4% discount on trading fees</span> with our referral code.
              This helps support the site while saving you money on every trade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
