'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ConvertPHPtoUSDCPage() {
  const [activeMethod, setActiveMethod] = useState<'binance' | 'coins'>('binance');

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
            🇵🇭 Funding Guide for Filipino Traders
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Convert PHP to USDC</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Step-by-step guide to buy USDC using GCash, Maya, Coins.ph, or bank transfer.
            Get the best rates for trading equity perpetuals.
          </p>
        </div>
      </section>

      {/* Method Selector */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={() => setActiveMethod('binance')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeMethod === 'binance'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Binance P2P
            </button>
            <button
              onClick={() => setActiveMethod('coins')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeMethod === 'coins'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Coins.ph
            </button>
          </div>

          {/* Binance P2P Instructions */}
          {activeMethod === 'binance' && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-yellow-400 font-bold text-xl">B</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Binance P2P</h2>
                  <p className="text-gray-400">Best rates, most liquidity</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Download Binance App</h3>
                    <p className="text-gray-400 text-sm">
                      Install from App Store or Play Store. Create an account if you don&apos;t have one.
                      Complete basic KYC verification.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Go to P2P Trading</h3>
                    <p className="text-gray-400 text-sm">
                      Tap the menu → P2P Trading. Select &quot;Buy&quot; and choose USDC as the crypto.
                      Set PHP as your currency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Select Payment Method</h3>
                    <p className="text-gray-400 text-sm">
                      Filter by your preferred payment: GCash, Maya, BDO, BPI, UnionBank, etc.
                      Choose a seller with high completion rate (98%+).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Enter Amount</h3>
                    <p className="text-gray-400 text-sm">
                      Enter PHP amount (e.g., ₱3,000) or USDC amount (e.g., $50).
                      Review the rate and tap &quot;Buy USDC&quot;.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Complete Payment</h3>
                    <p className="text-gray-400 text-sm">
                      Send PHP to the seller&apos;s GCash/Maya/bank account.
                      Mark payment as complete. USDC arrives in your Binance wallet within minutes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Withdraw to Your Wallet</h3>
                    <p className="text-gray-400 text-sm">
                      Go to Wallet → Withdraw. Select USDC and choose Arbitrum or Base network
                      for lowest fees. Paste your trading wallet address.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <p className="text-blue-400 text-sm">
                  💡 <strong>Pro Tip:</strong> Always check the seller&apos;s completion rate and reviews.
                  Sellers with 98%+ completion are most reliable. Only pay via GCash/Maya if it&apos;s listed in their accepted methods.
                </p>
              </div>
            </div>
          )}

          {/* Coins.ph Instructions */}
          {activeMethod === 'coins' && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-xl">C</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Coins.ph</h2>
                  <p className="text-gray-400">BSP-licensed, easiest for beginners</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Download Coins.ph</h3>
                    <p className="text-gray-400 text-sm">
                      Install from App Store or Play Store. Create account and complete KYC
                      (required for higher limits). BSP-licensed and regulated.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Add PHP to Your Wallet</h3>
                    <p className="text-gray-400 text-sm">
                      Cash in via GCash, Maya, bank transfer (BDO, BPI, UnionBank), or 7-Eleven.
                      GCash and Maya are instant.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Convert PHP to USDC</h3>
                    <p className="text-gray-400 text-sm">
                      Go to &quot;Trade&quot; → Select USDC → Enter PHP amount.
                      Review the rate and confirm. USDC is credited instantly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Send to Your Trading Wallet</h3>
                    <p className="text-gray-400 text-sm">
                      Go to USDC wallet → Send. Paste your MetaMask or trading wallet address.
                      Choose the right network (Arbitrum or Polygon for low fees).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="text-yellow-400 text-sm">
                  ⚠️ <strong>Note:</strong> Coins.ph rates may be slightly higher than P2P.
                  However, it&apos;s the simplest option and fully regulated by BSP for peace of mind.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Philippine Payment Methods */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Supported Payment Methods
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">E-Wallets</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• GCash (Fastest)</li>
                <li>• Maya (PayMaya)</li>
                <li>• ShopeePay</li>
                <li>• GrabPay</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-white mb-3">Bank Transfer</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• BDO Unibank</li>
                <li>• BPI</li>
                <li>• UnionBank</li>
                <li>• Metrobank</li>
                <li>• Security Bank</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="text-xl font-bold text-white mb-3">Cash Options</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• 7-Eleven (via Coins.ph)</li>
                <li>• Cebuana Lhuillier</li>
                <li>• M Lhuillier</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Pro Tips for Filipino Traders
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-400 mb-3">🔍 Compare Rates</h3>
              <p className="text-gray-400">
                P2P rates vary between sellers. Check multiple sellers before choosing.
                The difference can be ₱0.50-1.00 per USDC - that adds up on larger amounts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-400 mb-3">⚡ Use GCash/Maya</h3>
              <p className="text-gray-400">
                E-wallets are fastest for P2P. Bank transfers may take 30+ minutes.
                GCash or Maya payments are usually confirmed in under 5 minutes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-400 mb-3">💸 Withdraw to Arbitrum</h3>
              <p className="text-gray-400">
                When sending USDC to your trading wallet, choose Arbitrum or Base network.
                Withdrawal fees are under ₱50 vs ₱500+ on Ethereum mainnet.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-400 mb-3">📊 Track Your Rates</h3>
              <p className="text-gray-400">
                PHP/USD fluctuates daily. If you&apos;re converting larger amounts,
                monitor rates and buy when PHP is stronger (lower PHP per USD).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-yellow-400 mb-3">⚠️ Safety Reminders</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Only use official apps (Binance, Coins.ph) - never click links from strangers</li>
              <li>• Never share your password, OTP, or seed phrase with anyone</li>
              <li>• On P2P, only pay to the account shown in the app - not via chat</li>
              <li>• If a deal seems too good (rate much better than market), it might be a scam</li>
              <li>• Keep records of all transactions for your own protection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/30 to-red-900/30 border border-blue-500/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Got Your USDC? Start Trading!
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Compare equity perp platforms and start trading US stocks
              with your USDC. No US broker account needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Compare Platforms
              </Link>
              <Link
                href="/blog/trade-us-stocks-from-philippines"
                className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700"
              >
                Philippines Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
