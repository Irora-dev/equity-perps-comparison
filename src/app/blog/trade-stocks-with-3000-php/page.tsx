'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TradeWith3000PHPPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is PHP 3,000 really enough to trade US stocks?',
      answer: 'Yes! With equity perpetuals, you can trade fractional positions. PHP 3,000 (~$50 USDC) lets you open positions in any US stock. With 5x leverage, that gives you $250 of buying power.'
    },
    {
      question: 'What stocks can I trade with PHP 3,000?',
      answer: 'You can trade any available equity perpetual including NVDA, TSLA, AAPL, MSFT, META, GOOGL, AMZN, and more. You\'re not limited by share price since you trade fractional amounts.'
    },
    {
      question: 'How much can I make with PHP 3,000?',
      answer: 'Returns depend on your trading skill and risk management. A 10% gain on $50 is $5 (PHP 300). With 5x leverage, that same 10% stock move becomes 50% on your capital - potentially PHP 1,500. But losses are amplified too.'
    },
    {
      question: 'How do I convert PHP to USDC?',
      answer: 'Use Binance P2P or Coins.ph with GCash, Maya, or bank transfer. See our complete guide for step-by-step instructions with the best rates.'
    },
    {
      question: 'What leverage should a beginner use?',
      answer: 'Start with 2-3x leverage maximum. This gives you room for normal price swings without getting liquidated. As you gain experience and grow your account, you can adjust your strategy.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-red-900/20 to-[#0a0a0f]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
            🇵🇭 Small Account Guide for Philippines
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Trade US Stocks with</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              ₱3,000
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Start trading NVDA, TSLA, and AAPL with just ~$50. No minimum investment,
            fractional positions, and 24/7 market access.
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
              Get USDC First
            </Link>
          </div>
        </div>
      </section>

      {/* Why PHP 3,000 Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why ₱3,000 is Enough
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Fractional Trading</h3>
              <p className="text-gray-400">
                Trade 0.01 shares of any stock. NVDA at $140? You can buy ₱300 worth.
                No need to afford full shares.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Leverage Available</h3>
              <p className="text-gray-400">
                Use 2-5x leverage to increase buying power. ₱3,000 becomes
                ₱15,000 of trading power at 5x.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-2">No Minimums</h3>
              <p className="text-gray-400">
                Unlike traditional brokers requiring ₱100,000+, equity perps
                have no minimum account size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            The Math: ₱3,000 Trading Power
          </h2>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-gray-700">
                <span className="text-gray-400">Starting Capital</span>
                <span className="text-2xl font-bold text-white">₱3,000 (~$50)</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-700">
                <span className="text-gray-400">At 2x Leverage</span>
                <span className="text-xl font-semibold text-blue-400">$100 buying power</span>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-gray-700">
                <span className="text-gray-400">At 5x Leverage</span>
                <span className="text-xl font-semibold text-blue-400">$250 buying power</span>
              </div>

              <div className="flex justify-between items-center py-4">
                <span className="text-gray-400">At 10x Leverage</span>
                <span className="text-xl font-semibold text-red-400">$500 buying power</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
              <p className="text-yellow-400 text-sm">
                ⚠️ <strong>Risk Warning:</strong> Higher leverage means higher risk.
                At 10x, a 10% move against you = 100% loss. Start with 2-3x maximum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section id="get-started" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Start Trading in 4 Steps
          </h2>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Convert PHP to USDC</h3>
                <p className="text-gray-400 mb-3">
                  Use Binance P2P or Coins.ph with GCash or Maya. ₱3,000 gets you
                  approximately $50 USDC depending on current rates.
                </p>
                <Link
                  href="/blog/convert-php-to-usdc"
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  View detailed PHP → USDC guide →
                </Link>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Choose Your Platform</h3>
                <p className="text-gray-400 mb-3">
                  Compare equity perp platforms. Look for low fees, good liquidity,
                  and the stocks you want to trade.
                </p>
                <Link
                  href="/"
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Compare all platforms →
                </Link>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Deposit USDC</h3>
                <p className="text-gray-400">
                  Connect your wallet and deposit your USDC. Most platforms accept deposits
                  on Arbitrum, Base, or their native chain. Gas fees are minimal (under ₱50).
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Start with Small Positions</h3>
                <p className="text-gray-400">
                  Begin with 2-3x leverage and small position sizes. Risk only 2-5% of
                  your account per trade. Learn the platform before sizing up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Portfolio */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Sample ₱3,000 Portfolio
          </h2>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
            <p className="text-gray-400 mb-6 text-center">
              Example allocation with $50 USDC and 3x leverage ($150 buying power)
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 font-bold">N</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">NVDA</p>
                    <p className="text-sm text-gray-400">NVIDIA</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white">$50</p>
                  <p className="text-sm text-gray-400">33%</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400 font-bold">T</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">TSLA</p>
                    <p className="text-sm text-gray-400">Tesla</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white">$50</p>
                  <p className="text-sm text-gray-400">33%</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 font-bold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">AAPL</p>
                    <p className="text-sm text-gray-400">Apple</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white">$50</p>
                  <p className="text-sm text-gray-400">33%</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <p className="text-blue-400 text-sm">
                💡 <strong>Tip:</strong> Diversifying across 3 stocks reduces risk compared
                to putting everything in one position. Adjust allocation based on your analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Risk Management for Small Accounts
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">✅ Do This</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Start with 2-3x leverage maximum
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Risk only 2-5% per trade
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Use stop losses on every trade
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Keep 20% in reserve as buffer
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  Track every trade in a journal
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ Avoid This</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  Using maximum leverage (10x+)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  Putting all capital in one trade
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  Trading without stop losses
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  Revenge trading after losses
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  Trading money you can&apos;t afford to lose
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
                href="/blog/trade-us-stocks-from-philippines"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors"
              >
                <span className="text-2xl">🇵🇭</span>
                <div>
                  <p className="font-medium text-white">Trade US Stocks from Philippines</p>
                  <p className="text-sm text-gray-400">Complete overview guide</p>
                </div>
              </Link>
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/30 to-red-900/30 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Compare platforms, get your USDC, and start trading US stocks
              with your ₱3,000 today.
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
