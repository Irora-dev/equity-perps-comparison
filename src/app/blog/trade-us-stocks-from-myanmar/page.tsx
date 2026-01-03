'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TradeUSStocksFromMyanmarPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do I need a US brokerage account?',
      answer: 'No. Equity perpetuals let you trade synthetic US stocks without a traditional brokerage. You trade with USDC on decentralized platforms - no US broker required.'
    },
    {
      question: 'How do I convert MMK to USDC?',
      answer: 'Use Binance P2P with Wave Money, KBZ Pay, or bank transfer. Most traders complete the conversion within 15-30 minutes.'
    },
    {
      question: "What's the minimum to start?",
      answer: 'You can start with as little as 100,000 MMK (~$50). With fractional trading and leverage, this gives you access to all US stocks.'
    },
    {
      question: 'Can I trade 24/7?',
      answer: 'Yes! Unlike traditional markets, equity perpetuals trade around the clock. Trade whenever it suits your schedule in Myanmar Standard Time.'
    },
    {
      question: 'What payment methods work in Myanmar?',
      answer: 'Wave Money, KBZ Pay, CB Pay, AYA Pay, and bank transfers all work for buying USDC through P2P platforms like Binance.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-green-900/20 to-[#0a0a0f]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm mb-6">
            🇲🇲 Complete Guide for Myanmar Traders
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Trade US Stocks</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              from Myanmar
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Access NVIDIA, Tesla, Apple, and 50+ US stocks with MMK.
            Start with 100,000 Kyat. Trade 24/7 with Wave Money or KBZ Pay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
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
            Why Myanmar Traders Choose Equity Perps
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Start with 100K MMK</h3>
              <p className="text-gray-400">No large minimums. Trade with approximately $50 USDC.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Trading</h3>
              <p className="text-gray-400">Trade anytime - morning, evening, or late night MMT.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">Wave Money & KBZ</h3>
              <p className="text-gray-400">Use popular Myanmar payment methods via P2P.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-white mb-2">Self-Custody</h3>
              <p className="text-gray-400">Your keys, your coins. Full control of your funds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Steps */}
      <section id="get-started" className="py-16 px-4 bg-gradient-to-b from-transparent via-yellow-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Get Started in 4 Steps
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg shadow-yellow-500/25">1</div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Convert MMK to USDC</h3>
                <p className="text-gray-400 mb-4">Use Binance P2P with Wave Money, KBZ Pay, or bank transfer. 100,000 MMK gets you approximately $50 USDC.</p>
                <Link href="/blog/convert-mmk-to-usdc" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium">
                  View MMK → USDC Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg shadow-yellow-500/25">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Choose a Platform</h3>
                <p className="text-gray-400 mb-4">Compare equity perp platforms for fees, available stocks, and leverage.</p>
                <Link href="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium">
                  Compare All Platforms
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg shadow-yellow-500/25">3</div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Connect Your Wallet</h3>
                <p className="text-gray-400">Use MetaMask, Rabby, or any Web3 wallet. Deposit your USDC to the platform.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg shadow-yellow-500/25">4</div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Start Trading</h3>
                <p className="text-gray-400">Open your first position. Start with low leverage (2-3x) while learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Myanmar Payment Methods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">📱 Mobile Wallets</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>Wave Money (Most Popular)</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>KBZ Pay</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>CB Pay</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>AYA Pay</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">🏦 Bank Transfers</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-green-400 rounded-full"></span>KBZ Bank</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-green-400 rounded-full"></span>CB Bank</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-green-400 rounded-full"></span>AYA Bank</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-green-400 rounded-full"></span>Yoma Bank</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden">
                <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <span className="font-semibold text-white">{faq.question}</span>
                  <span className="text-gray-400 text-xl">{expandedFaq === index ? '−' : '+'}</span>
                </button>
                {expandedFaq === index && <div className="px-6 pb-4"><p className="text-gray-400">{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-900/30 to-green-900/30 border border-yellow-500/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Trade US Stocks?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Join Myanmar traders accessing US markets 24/7. Start with 100,000 MMK.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all">Compare Platforms</Link>
              <Link href="/blog/convert-mmk-to-usdc" className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700">Get USDC Guide</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Site Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              This site is <span className="text-white font-medium">100% free</span> to use for comparing the best platforms to trade stocks 24/7.
              When you sign up through our links to platforms like <span className="text-cyan-400">Hyperliquid</span> and <span className="text-cyan-400">Lighter</span>,
              you get a <span className="text-green-400 font-semibold">4% discount on trading fees</span> with our referral code.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
