'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TradeUSStocksFromThailandPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do I need a US brokerage account?',
      answer: 'No. Equity perpetuals let you trade synthetic US stocks without a traditional brokerage. You trade with USDC on decentralized platforms.'
    },
    {
      question: 'How do I convert THB to USDC?',
      answer: 'Use Binance P2P or Bitkub with PromptPay, TrueMoney, or bank transfer. Most traders complete the conversion within minutes.'
    },
    {
      question: "What's the minimum to start?",
      answer: 'You can start with as little as ฿1,800 (~$50). With fractional trading and leverage, this gives you access to all US stocks.'
    },
    {
      question: 'Can I trade 24/7?',
      answer: 'Yes! Unlike traditional markets that follow US hours, equity perpetuals trade around the clock. Perfect for trading in Thailand time.'
    },
    {
      question: 'What payment methods work in Thailand?',
      answer: 'PromptPay, TrueMoney, bank transfers (SCB, Kasikorn, Bangkok Bank, Krungsri) all work for buying USDC through P2P or Bitkub.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-blue-900/20 to-[#0a0a0f]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm mb-6">
            🇹🇭 Complete Guide for Thai Traders
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Trade US Stocks</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
              from Thailand
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Access NVIDIA, Tesla, Apple, and 50+ US stocks with THB.
            Start with ฿1,800. Trade 24/7 with PromptPay or TrueMoney.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-red-500/25 transition-all">Compare Platforms</Link>
            <a href="#get-started" className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700">How It Works</a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Thai Traders Choose Equity Perps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Start with ฿1,800</h3>
              <p className="text-gray-400">No large minimums. Trade with approximately $50 USDC.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Trading</h3>
              <p className="text-gray-400">Trade anytime in Thai time - no US market hour restrictions.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">PromptPay Ready</h3>
              <p className="text-gray-400">Use Thailand's popular payment system via P2P or Bitkub.</p>
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
      <section id="get-started" className="py-16 px-4 bg-gradient-to-b from-transparent via-red-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get Started in 4 Steps</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-500/25">1</div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Convert THB to USDC</h3>
                <p className="text-gray-400 mb-4">Use Binance P2P or Bitkub with PromptPay or bank transfer. ฿1,800 gets you approximately $50 USDC.</p>
                <Link href="/blog/convert-thb-to-usdc" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium">View THB → USDC Guide <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-500/25">2</div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Choose a Platform</h3>
                <p className="text-gray-400 mb-4">Compare equity perp platforms for fees, available stocks, and leverage.</p>
                <Link href="/" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium">Compare All Platforms <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-500/25">3</div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Connect Your Wallet</h3>
                <p className="text-gray-400">Use MetaMask, Rabby, or any Web3 wallet. Deposit your USDC to the platform.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-500/25">4</div>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Thai Payment Methods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">📱 Digital Payments</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>PromptPay (Fastest)</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>TrueMoney Wallet</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>LINE Pay</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>ShopeePay</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">🏦 Bank Transfers</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-blue-400 rounded-full"></span>SCB (Siam Commercial Bank)</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-blue-400 rounded-full"></span>Kasikorn Bank</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-blue-400 rounded-full"></span>Bangkok Bank</li>
                <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-blue-400 rounded-full"></span>Krungsri (Bank of Ayudhya)</li>
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
          <div className="bg-gradient-to-r from-red-900/30 to-blue-900/30 border border-red-500/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Trade US Stocks?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Join Thai traders accessing US markets 24/7. Start with ฿1,800.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-red-500/25 transition-all">Compare Platforms</Link>
              <Link href="/blog/convert-thb-to-usdc" className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700">Get USDC Guide</Link>
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
