'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TradeUSStocksFromCambodiaPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    { question: 'Do I need a US brokerage account?', answer: 'No. Equity perpetuals let you trade synthetic US stocks without a traditional brokerage. You trade with USDC on decentralized platforms.' },
    { question: 'How do I convert to USDC?', answer: 'Cambodia is USD-friendly! Use Binance P2P with Wing, ABA Pay, or bank transfer. You can often trade directly in USD.' },
    { question: "What's the minimum to start?", answer: 'You can start with $50 USDC. With fractional trading and leverage, this gives you access to all US stocks.' },
    { question: 'Can I trade 24/7?', answer: 'Yes! Unlike traditional markets, equity perpetuals trade around the clock. Perfect for any schedule.' },
    { question: 'What payment methods work in Cambodia?', answer: 'Wing Money, ABA Pay, ACLEDA bank transfers, and other major banks work for buying USDC through P2P platforms.' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-red-900/20 to-[#0a0a0f]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">🇰🇭 Complete Guide for Cambodian Traders</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6"><span className="text-white">Trade US Stocks</span><br /><span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">from Cambodia</span></h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Access NVIDIA, Tesla, Apple, and 50+ US stocks. Start with $50 USDC. Trade 24/7 with Wing or ABA Pay.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all">Compare Platforms</Link>
            <a href="#get-started" className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700">How It Works</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Cambodian Traders Choose Equity Perps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center"><div className="text-4xl mb-4">💵</div><h3 className="text-xl font-bold text-white mb-2">USD-Friendly</h3><p className="text-gray-400">Cambodia uses USD widely - easy USDC conversion.</p></div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center"><div className="text-4xl mb-4">🕐</div><h3 className="text-xl font-bold text-white mb-2">24/7 Trading</h3><p className="text-gray-400">Trade anytime in Cambodian time.</p></div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center"><div className="text-4xl mb-4">📱</div><h3 className="text-xl font-bold text-white mb-2">Wing & ABA Pay</h3><p className="text-gray-400">Use Cambodia's popular payment apps via P2P.</p></div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center"><div className="text-4xl mb-4">🔐</div><h3 className="text-xl font-bold text-white mb-2">Self-Custody</h3><p className="text-gray-400">Your keys, your coins. Full control.</p></div>
          </div>
        </div>
      </section>

      <section id="get-started" className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get Started in 4 Steps</h2>
          <div className="space-y-8">
            {[
              { title: 'Get USDC', desc: 'Use Binance P2P with Wing, ABA Pay, or USD bank transfer. $50 minimum.', link: '/blog/convert-usd-to-usdc', linkText: 'View USDC Guide' },
              { title: 'Choose a Platform', desc: 'Compare equity perp platforms for fees and features.', link: '/', linkText: 'Compare Platforms' },
              { title: 'Connect Your Wallet', desc: 'Use MetaMask or Rabby. Deposit USDC to the platform.' },
              { title: 'Start Trading', desc: 'Open your first position with 2-3x leverage.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/25">{i + 1}</div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 mb-4">{step.desc}</p>
                  {step.link && <Link href={step.link} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium">{step.linkText} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Cambodia Payment Methods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">📱 Mobile Wallets</h3>
              <ul className="space-y-3"><li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-blue-400 rounded-full"></span>Wing Money (Most Popular)</li><li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-blue-400 rounded-full"></span>ABA Pay</li><li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-blue-400 rounded-full"></span>Pi Pay</li><li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-blue-400 rounded-full"></span>TrueMoney Cambodia</li></ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">🏦 Bank Transfers</h3>
              <ul className="space-y-3"><li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>ABA Bank</li><li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>ACLEDA Bank</li><li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>Canadia Bank</li><li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>Prince Bank</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden">
                <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full px-6 py-4 flex items-center justify-between text-left"><span className="font-semibold text-white">{faq.question}</span><span className="text-gray-400 text-xl">{expandedFaq === index ? '−' : '+'}</span></button>
                {expandedFaq === index && <div className="px-6 pb-4"><p className="text-gray-400">{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/30 to-red-900/30 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Trade US Stocks?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Join Cambodian traders accessing US markets 24/7. Start with $50 USDC.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all">Compare Platforms</Link>
              <Link href="/start" className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4"><div className="max-w-4xl mx-auto"><div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center"><p className="text-gray-400 text-sm leading-relaxed">This site is <span className="text-white font-medium">100% free</span> to use. Sign up through our links to <span className="text-cyan-400">Hyperliquid</span> and <span className="text-cyan-400">Lighter</span> for a <span className="text-green-400 font-semibold">4% discount on trading fees</span>.</p></div></div></section>
    </div>
  );
}
