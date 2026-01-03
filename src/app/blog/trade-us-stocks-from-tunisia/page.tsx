'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const faqs = [
    { question: 'Do I need a US brokerage account?', answer: 'No. Trade synthetic US stocks with USDC on decentralized platforms.' },
    { question: 'How do I convert TND to USDC?', answer: 'Use Binance P2P with D17, bank transfer, or local payment methods.' },
    { question: "What's the minimum to start?", answer: 'Start with 150 TND (~$50). Fractional trading gives access to all US stocks.' },
    { question: 'What payment methods work?', answer: 'D17, MobiMoney, bank transfers from STB, BIAT, Attijari Bank.' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-white/5 to-[#0a0a0f]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm mb-6">🇹🇳 Guide for Tunisian Traders</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6"><span className="text-white">Trade US Stocks</span><br /><span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">from Tunisia</span></h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Access NVIDIA, Tesla, Apple with TND. Start with 150 DT. Trade 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all">Compare Platforms</Link>
            <a href="#get-started" className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 border border-gray-700">How It Works</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[{icon:'💰',title:'Start with 150 DT',desc:'~$50 USDC minimum'},{icon:'🕐',title:'24/7 Trading',desc:'Trade anytime'},{icon:'📱',title:'D17 Payments',desc:'Local payment support'},{icon:'🔐',title:'Self-Custody',desc:'Your keys, your coins'}].map((b,i)=>(
            <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center"><div className="text-4xl mb-4">{b.icon}</div><h3 className="text-xl font-bold text-white mb-2">{b.title}</h3><p className="text-gray-400">{b.desc}</p></div>
          ))}
        </div>
      </section>

      <section id="get-started" className="py-16 px-4 bg-gradient-to-b from-transparent via-red-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get Started in 4 Steps</h2>
          <div className="space-y-8">
            {[{t:'Convert TND to USDC',d:'Use Binance P2P with D17 or bank transfer.'},{t:'Choose a Platform',d:'Compare platforms.',l:'/',lt:'Compare'},{t:'Connect Wallet',d:'Use MetaMask or Rabby.'},{t:'Start Trading',d:'Begin with 2-3x leverage.'}].map((s,i)=>(
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">{i+1}</div>
                <div className="flex-1 pt-2"><h3 className="text-xl font-bold text-white mb-2">{s.t}</h3><p className="text-gray-400 mb-4">{s.d}</p>{s.l&&<Link href={s.l} className="text-red-400 hover:text-red-300 font-medium">{s.lt} →</Link>}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tunisia Payment Methods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"><h3 className="text-xl font-bold text-white mb-4">📱 Mobile</h3><ul className="space-y-3">{['D17','MobiMoney','Ooredoo Money'].map(p=><li key={p} className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>{p}</li>)}</ul></div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"><h3 className="text-xl font-bold text-white mb-4">🏦 Banks</h3><ul className="space-y-3">{['STB','BIAT','Attijari Bank','Amen Bank'].map(p=><li key={p} className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-white/50 rounded-full"></span>{p}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4"><div className="max-w-4xl mx-auto"><h2 className="text-3xl font-bold text-white mb-8 text-center">FAQ</h2><div className="space-y-4">{faqs.map((f,i)=><div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden"><button onClick={()=>setExpandedFaq(expandedFaq===i?null:i)} className="w-full px-6 py-4 flex items-center justify-between text-left"><span className="font-semibold text-white">{f.question}</span><span className="text-gray-400">{expandedFaq===i?'−':'+'}</span></button>{expandedFaq===i&&<div className="px-6 pb-4 text-gray-400">{f.answer}</div>}</div>)}</div></div></section>

      <section className="py-16 px-4"><div className="max-w-4xl mx-auto"><div className="bg-gradient-to-r from-red-900/30 to-white/5 border border-red-500/20 rounded-3xl p-8 text-center"><h2 className="text-3xl font-bold text-white mb-4">Ready to Trade?</h2><p className="text-xl text-gray-400 mb-8">Start with 150 TND.</p><Link href="/" className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-lg">Compare Platforms</Link></div></div></section>

      <section className="py-8 px-4"><div className="max-w-4xl mx-auto"><div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center"><p className="text-gray-400 text-sm">This site is <span className="text-white font-medium">100% free</span>. Get <span className="text-green-400 font-semibold">4% off fees</span> through our links.</p></div></div></section>
    </div>
  );
}
