'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TradeWith5000RupeesPage() {
  const [showLeverageExplainer, setShowLeverageExplainer] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 font-medium">Small Account Guide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Trade NVDA & TSLA with Just
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">₹5,000 ($60)</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            You don&apos;t need lakhs to trade US stocks. With equity perpetuals and smart leverage,
            ₹5,000 can control positions worth ₹50,000 or more.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/start"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Start Trading Now
            </Link>
            <Link
              href="/blog/trade-us-stocks-from-india"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-colors"
            >
              India Trading Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Reality Check Section */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Small Account Reality</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ Traditional Brokers</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>1 NVDA share = $140+ (₹11,600+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>1 TSLA share = $400+ (₹33,000+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>LRS limits = $250,000/year paperwork</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Wire transfer fees = ₹1,500-3,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>No fractional shares on most platforms</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">✓ Equity Perpetuals</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Start with any amount (even $10)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Trade fractions of any stock</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Use leverage to amplify small capital</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Deposit via P2P (no wire fees)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Trade 24/7, not just market hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Can ₹5000 Do Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">What Can ₹5,000 Actually Do?</h2>
          <p className="text-slate-400 text-center mb-8">Real examples using different leverage levels</p>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Your Capital</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Leverage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Position Size</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">5% Move Profit</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Liquidation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  <tr className="hover:bg-slate-700/30">
                    <td className="px-6 py-4 text-white">₹5,000 ($60)</td>
                    <td className="px-6 py-4 text-emerald-400">1x (None)</td>
                    <td className="px-6 py-4 text-slate-300">₹5,000</td>
                    <td className="px-6 py-4 text-cyan-400">₹250 (5%)</td>
                    <td className="px-6 py-4 text-slate-400">Never*</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 bg-emerald-500/5">
                    <td className="px-6 py-4 text-white">₹5,000 ($60)</td>
                    <td className="px-6 py-4 text-emerald-400 font-semibold">3x</td>
                    <td className="px-6 py-4 text-slate-300">₹15,000</td>
                    <td className="px-6 py-4 text-cyan-400 font-semibold">₹750 (15%)</td>
                    <td className="px-6 py-4 text-yellow-400">-33%</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="px-6 py-4 text-white">₹5,000 ($60)</td>
                    <td className="px-6 py-4 text-emerald-400">5x</td>
                    <td className="px-6 py-4 text-slate-300">₹25,000</td>
                    <td className="px-6 py-4 text-cyan-400">₹1,250 (25%)</td>
                    <td className="px-6 py-4 text-orange-400">-20%</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="px-6 py-4 text-white">₹5,000 ($60)</td>
                    <td className="px-6 py-4 text-emerald-400">10x</td>
                    <td className="px-6 py-4 text-slate-300">₹50,000</td>
                    <td className="px-6 py-4 text-cyan-400">₹2,500 (50%)</td>
                    <td className="px-6 py-4 text-red-400">-10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 bg-slate-700/30 text-sm text-slate-400">
              *1x leverage = no liquidation, but you can still lose your entire investment if price goes to zero
            </div>
          </div>

          {/* Leverage Explainer Toggle */}
          <button
            onClick={() => setShowLeverageExplainer(!showLeverageExplainer)}
            className="mt-6 w-full text-left bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:bg-slate-700/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">What is leverage? (Click to learn)</span>
              <span className={`text-slate-400 transition-transform ${showLeverageExplainer ? 'rotate-180' : ''}`}>▼</span>
            </div>
          </button>

          {showLeverageExplainer && (
            <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-4">Understanding Leverage</h4>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong className="text-white">Leverage</strong> lets you control a larger position than your actual capital.
                  Think of it like a multiplier for both profits AND losses.
                </p>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong className="text-cyan-400">Example:</strong></p>
                  <p className="text-sm">You have ₹5,000. With 5x leverage, you can open a ₹25,000 position.</p>
                  <p className="text-sm mt-2">If the stock goes up 10%:</p>
                  <ul className="text-sm ml-4 mt-1">
                    <li>• Without leverage: ₹500 profit (10%)</li>
                    <li>• With 5x leverage: ₹2,500 profit (50%)</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 rounded-lg p-4">
                  <p className="text-sm text-red-400 font-semibold mb-2">⚠️ The Risk:</p>
                  <p className="text-sm">Losses are also multiplied. With 5x leverage, a 20% drop = 100% loss (liquidation).</p>
                </div>
                <p className="text-emerald-400 font-medium">
                  Recommendation for beginners: Start with 2-3x leverage until you understand how it works.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Strategy for Small Accounts */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Smart Strategies for ₹5,000 Accounts</h2>

          <div className="grid gap-6">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl p-6 border border-emerald-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Start Conservative (2-3x Leverage)</h3>
                  <p className="text-slate-300 mb-3">
                    With ₹5,000 and 3x leverage, you control ₹15,000 worth of stocks. This gives you room
                    for the price to move 25-30% against you before liquidation.
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-sm text-slate-400">
                    <strong className="text-white">Example:</strong> Buy ₹15,000 of NVDA with 3x.
                    Even if NVDA drops 25%, you&apos;re still safe.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Focus on 1-2 Stocks</h3>
                  <p className="text-slate-300 mb-3">
                    Don&apos;t spread ₹5,000 across 10 stocks. Pick 1-2 stocks you understand well.
                    Popular choices: NVDA (AI play), TSLA (volatility), META (steady growth).
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-sm text-slate-400">
                    <strong className="text-white">Why?</strong> Smaller positions mean higher fees impact.
                    One focused trade beats five tiny ones.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Trade Events & Earnings</h3>
                  <p className="text-slate-300 mb-3">
                    Big moves happen around earnings reports. NVDA earnings can move 10-15% in a day.
                    With leverage, that&apos;s 30-45% gain on your capital.
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-sm text-slate-400">
                    <strong className="text-white">Tip:</strong> Use the 24/7 trading to position before
                    earnings while others are sleeping.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Compound Your Gains</h3>
                  <p className="text-slate-300 mb-3">
                    Made ₹1,000 profit? Now you have ₹6,000. Your next trade can be bigger.
                    Small accounts can grow fast with consistent wins.
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-sm text-slate-400">
                    <strong className="text-white">Growth Path:</strong> ₹5,000 → ₹7,500 → ₹11,000 → ₹16,000
                    (3 trades with 50% gains each using 3x leverage)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Risk Management for Small Accounts</h2>

          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-red-400 mb-4">⚠️ Warning: High Leverage Dangers</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-red-400">10x</p>
                <p className="text-sm text-slate-400 mt-1">Liquidation at -10%</p>
                <p className="text-xs text-slate-500">One bad day wipes you out</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-orange-400">20x</p>
                <p className="text-sm text-slate-400 mt-1">Liquidation at -5%</p>
                <p className="text-xs text-slate-500">Normal volatility kills you</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-red-500">50x</p>
                <p className="text-sm text-slate-400 mt-1">Liquidation at -2%</p>
                <p className="text-xs text-slate-500">Basically gambling</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-4">✓ Do This</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Start with 2-3x leverage max</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Only risk 20-30% of your account per trade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Set stop-losses before entering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Take profits at 20-30% gains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Increase leverage only after consistent wins</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-4">✗ Avoid This</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Using 10x+ leverage on your first trades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Putting all ₹5,000 in one leveraged trade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Holding losing positions hoping for reversal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Revenge trading after a loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Trading money you can&apos;t afford to lose</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Start Trading with ₹5,000 Today</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-xl font-bold text-white">Convert ₹5,000 to USDC</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Use Binance P2P, WazirX, or CoinDCX to convert your INR to USDC stablecoin.
              </p>
              <Link href="/blog/convert-inr-to-usdc" className="text-cyan-400 hover:underline">
                Read our INR to USDC guide →
              </Link>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-bold text-white">Set Up Your Wallet</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Download Rabby Wallet (free, 2 minutes). This is where your USDC will be stored securely.
              </p>
              <Link href="/blog/wallet-setup-guide" className="text-cyan-400 hover:underline">
                Wallet setup guide →
              </Link>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-xl font-bold text-white">Connect to Exchange</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Connect your wallet to Hyperliquid or another equity perps exchange. Deposit your USDC.
              </p>
              <Link href="/start" className="text-cyan-400 hover:underline">
                Interactive getting started guide →
              </Link>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <h3 className="text-xl font-bold text-white">Place Your First Trade</h3>
              </div>
              <p className="text-slate-300">
                Choose a stock (NVDA, TSLA, etc.), set 2-3x leverage, decide your position size, and go long or short.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Start Your Journey
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Can I really start with just ₹5,000?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Yes! Most equity perps platforms have no minimum deposit. You can start with ₹4,000-5,000 ($50-60)
                and use leverage to control meaningful positions. Some traders even start with ₹2,000.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">What&apos;s the best leverage for beginners?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                We recommend 2-3x leverage for beginners. This gives you meaningful exposure while keeping
                liquidation risk low. With 3x leverage, the stock needs to drop 33% for you to lose everything.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">How much can I realistically make?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Be realistic. With ₹5,000 and 3x leverage, a 5% stock move gives you ₹750 profit.
                Some days you might make ₹2,000+, other days you might lose. Focus on learning first,
                and aim for consistent 10-20% monthly returns rather than trying to 10x overnight.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Which platform has the lowest fees?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Hyperliquid and Lighter have zero maker fees. Avantis has zero fees (you only pay if you profit).
                For small accounts, Hyperliquid is often the best choice due to its liquidity and zero gas fees.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Is this legal in India?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Crypto trading is legal in India. There&apos;s no specific law prohibiting trading on decentralized
                exchanges. Profits are taxable as income. Read our detailed
                <Link href="/blog/equity-perps-legal-india" className="text-cyan-400 hover:underline ml-1">
                  legal guide for Indian traders
                </Link>.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don&apos;t Let Small Capital Stop You
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              Thousands of Indian traders are growing ₹5,000 accounts into ₹50,000+. Start your journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/start"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Start Trading Now
              </Link>
              <Link
                href="/blog/pnl-simulator"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Try PnL Simulator
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
