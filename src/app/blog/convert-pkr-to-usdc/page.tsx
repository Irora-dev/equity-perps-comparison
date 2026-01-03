'use client';

import { useState } from 'react';
import Link from 'next/link';

type Method = 'binance' | 'kucoin';

export default function ConvertPKRtoUSDC() {
  const [selectedMethod, setSelectedMethod] = useState<Method>('binance');

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-gray-950 to-emerald-500/10" />
        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Convert PKR to USDC</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">🇵🇰 Pakistan</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full">Funding Guide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Convert PKR to USDC
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Step-by-step guide to buy USDC with Pakistani Rupees using JazzCash, Easypaisa, or bank transfer.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Compare Methods</h2>

          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="text-left p-4 text-gray-400 font-medium">Method</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Fees</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Speed</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Min Amount</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="hover:bg-gray-800/50">
                  <td className="p-4">
                    <span className="text-white font-semibold">Binance P2P</span>
                    <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">Recommended</span>
                  </td>
                  <td className="p-4 text-green-400">0% platform fee</td>
                  <td className="p-4 text-gray-300">15-30 min</td>
                  <td className="p-4 text-gray-300">~PKR 1,500</td>
                  <td className="p-4 text-gray-400">Best rates, most liquidity</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="p-4 text-white font-semibold">KuCoin P2P</td>
                  <td className="p-4 text-green-400">0% platform fee</td>
                  <td className="p-4 text-gray-300">15-30 min</td>
                  <td className="p-4 text-gray-300">~PKR 2,000</td>
                  <td className="p-4 text-gray-400">Alternative option</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="p-4 text-white font-semibold">OKX P2P</td>
                  <td className="p-4 text-green-400">0% platform fee</td>
                  <td className="p-4 text-gray-300">15-30 min</td>
                  <td className="p-4 text-gray-300">~PKR 2,000</td>
                  <td className="p-4 text-gray-400">Good rates</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Method Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setSelectedMethod('binance')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedMethod === 'binance'
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Binance P2P
            </button>
            <button
              onClick={() => setSelectedMethod('kucoin')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedMethod === 'kucoin'
                  ? 'bg-emerald-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              KuCoin P2P
            </button>
          </div>

          {/* Binance P2P Instructions */}
          {selectedMethod === 'binance' && (
            <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-gray-900 font-bold">B</div>
                <div>
                  <h3 className="text-xl font-bold text-white">Binance P2P</h3>
                  <p className="text-gray-400 text-sm">Best rates, most Pakistani sellers</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Create Binance Account</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Download Binance app or go to binance.com. Complete basic verification (ID + selfie).
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-xs text-gray-500">
                      Verification usually takes 10-30 minutes
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Go to P2P Trading</h4>
                    <p className="text-gray-400 text-sm">
                      Tap &quot;P2P&quot; or &quot;Buy Crypto&quot; → &quot;P2P Trading&quot;. Select &quot;Buy&quot; and choose USDT.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Select PKR and Payment Method</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Filter by PKR currency. Choose your payment method:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs">JazzCash</span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">Easypaisa</span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs">Bank Transfer</span>
                      <span className="px-3 py-1 bg-gray-500/10 text-gray-400 rounded-full text-xs">HBL</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Choose a Seller</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Look for sellers with:
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• <strong className="text-white">95%+</strong> completion rate</li>
                      <li>• <strong className="text-white">100+</strong> completed orders</li>
                      <li>• Verified badge</li>
                      <li>• Good exchange rate</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Complete the Trade</h4>
                    <p className="text-gray-400 text-sm">
                      Enter amount, click Buy. Pay via JazzCash/Easypaisa within the time limit.
                      Mark as paid. Wait for seller to release USDT.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold flex-shrink-0">6</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Convert USDT to USDC</h4>
                    <p className="text-gray-400 text-sm">
                      Go to &quot;Convert&quot; in Binance. Convert USDT → USDC (free, instant).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold flex-shrink-0">7</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Withdraw to Your Wallet</h4>
                    <p className="text-gray-400 text-sm">
                      Go to Wallet → Withdraw → USDC. Paste your Rabby wallet address.
                      Select <strong className="text-white">Arbitrum One</strong> network. Confirm withdrawal.
                    </p>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mt-2 text-xs text-red-400">
                      <strong>Important:</strong> Always use Arbitrum network for lowest fees (~$0.10)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* KuCoin P2P Instructions */}
          {selectedMethod === 'kucoin' && (
            <div className="bg-gray-900 border border-emerald-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-gray-900 font-bold">K</div>
                <div>
                  <h3 className="text-xl font-bold text-white">KuCoin P2P</h3>
                  <p className="text-gray-400 text-sm">Alternative option for Pakistan</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Create KuCoin Account</h4>
                    <p className="text-gray-400 text-sm">
                      Download KuCoin app or visit kucoin.com. Basic verification required for P2P.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Navigate to P2P</h4>
                    <p className="text-gray-400 text-sm">
                      Go to &quot;Buy Crypto&quot; → &quot;P2P Trading&quot;. Select PKR and USDT.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Buy USDT via P2P</h4>
                    <p className="text-gray-400 text-sm">
                      Choose a verified seller. Pay via JazzCash, Easypaisa, or bank transfer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Convert & Withdraw</h4>
                    <p className="text-gray-400 text-sm">
                      Convert USDT to USDC in the trading section. Withdraw to Rabby wallet on Arbitrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Pro Tips for Pakistani Traders</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-3">💳</div>
              <h3 className="text-white font-semibold mb-2">JazzCash is Fastest</h3>
              <p className="text-gray-400 text-sm">
                JazzCash payments are instant. Most P2P sellers prefer it. Easypaisa is a close second.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-3">🕐</div>
              <h3 className="text-white font-semibold mb-2">Best Trading Hours</h3>
              <p className="text-gray-400 text-sm">
                Most Pakistani sellers are active 9am-11pm PKT. Weekend mornings may have fewer options.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="text-white font-semibold mb-2">Stay Safe</h3>
              <p className="text-gray-400 text-sm">
                Only trade within the platform. Never send money outside escrow. Keep payment screenshots.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-3">📝</div>
              <h3 className="text-white font-semibold mb-2">Payment Notes</h3>
              <p className="text-gray-400 text-sm">
                Don&apos;t mention &quot;crypto&quot; or &quot;USDT&quot; in payment notes. Use generic descriptions or leave blank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Trading?</h2>
            <p className="text-gray-400 mb-6">
              Once you have USDC in your wallet, you&apos;re ready to trade US stocks 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/start"
                className="px-6 py-3 bg-green-500 text-gray-900 rounded-xl font-bold hover:bg-green-400 transition-colors"
              >
                Continue to Trading Guide
              </Link>
              <Link
                href="/blog/trade-us-stocks-from-pakistan"
                className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors"
              >
                Pakistan Trading Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
