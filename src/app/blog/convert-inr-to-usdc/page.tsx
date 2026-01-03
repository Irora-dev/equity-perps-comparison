'use client';

import { useState } from 'react';
import Link from 'next/link';

const methods = [
  {
    id: 'binance',
    name: 'Binance P2P',
    color: 'yellow',
    rating: 'Best Rates',
    fees: '~0.1-0.5%',
    speed: '5-15 min',
    minAmount: '₹500',
    pros: ['Best INR rates', 'High liquidity', 'Many payment options', 'Free USDT→USDC conversion'],
    cons: ['Need Binance account with KYC', 'P2P can be intimidating at first'],
  },
  {
    id: 'wazirx',
    name: 'WazirX',
    color: 'blue',
    rating: 'Easiest',
    fees: '~1-2%',
    speed: '10-30 min',
    minAmount: '₹100',
    pros: ['Indian company', 'Easy UPI deposits', 'Simple interface', 'Free transfer to Binance'],
    cons: ['Higher fees than P2P', 'No direct USDC (need to swap)'],
  },
  {
    id: 'coindcx',
    name: 'CoinDCX',
    color: 'purple',
    rating: 'Direct USDC',
    fees: '~1.5-3%',
    speed: '15-45 min',
    minAmount: '₹100',
    pros: ['Direct USDC purchase', 'Indian company', 'Bank transfer option'],
    cons: ['Higher fees', 'Withdrawal fees can be high', 'Slower deposits'],
  },
];

export default function ConvertINRtoUSDC() {
  const [selectedMethod, setSelectedMethod] = useState('binance');

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-gray-950 to-green-500/10" />

        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Convert INR to USDC</span>
          </nav>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">🇮🇳 India</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">Funding Guide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Convert INR to USDC
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            The complete guide to converting Indian Rupees to USDC for trading equity perps.
            Compare methods, fees, and get step-by-step instructions.
          </p>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Compare Methods</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Method</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Fees</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Speed</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Min Amount</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Best For</th>
                </tr>
              </thead>
              <tbody>
                {methods.map(method => (
                  <tr key={method.id} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                    <td className="py-4 px-4">
                      <span className="text-white font-medium">{method.name}</span>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                        method.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        method.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {method.rating}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{method.fees}</td>
                    <td className="py-4 px-4 text-gray-300">{method.speed}</td>
                    <td className="py-4 px-4 text-gray-300">{method.minAmount}</td>
                    <td className="py-4 px-4 text-gray-400 text-sm">
                      {method.id === 'binance' && 'Best rates, regular traders'}
                      {method.id === 'wazirx' && 'Beginners, small amounts'}
                      {method.id === 'coindcx' && 'Direct USDC, simplicity'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
            <p className="text-green-400 text-sm">
              <strong>💡 Recommendation:</strong> Use Binance P2P for the best rates. Buy USDT first (more sellers), then convert to USDC for free on Binance.
            </p>
          </div>
        </div>
      </section>

      {/* Method Selector */}
      <section className="py-8 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Instructions</h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {methods.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`px-5 py-3 rounded-xl font-medium transition-all ${
                  selectedMethod === method.id
                    ? method.color === 'yellow' ? 'bg-yellow-500 text-gray-900' :
                      method.color === 'blue' ? 'bg-blue-500 text-white' :
                      'bg-purple-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {method.name}
              </button>
            ))}
          </div>

          {/* Binance P2P Instructions */}
          {selectedMethod === 'binance' && (
            <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-6">Binance P2P Method (Best Rates)</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Create Binance Account</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Go to <a href="https://binance.com" target="_blank" rel="noopener" className="text-yellow-400 hover:text-yellow-300">binance.com</a> and sign up. Complete KYC verification (Aadhaar + PAN).
                    </p>
                    <p className="text-gray-500 text-xs">KYC usually takes 10-30 minutes to verify</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Go to P2P Trading</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Open Binance app → Click &quot;P2P&quot; or go to &quot;Trade&quot; → &quot;P2P&quot;
                    </p>
                    <p className="text-gray-500 text-xs">P2P means you&apos;re buying directly from other users</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Buy USDT with INR</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Select <strong className="text-white">Buy</strong> → <strong className="text-white">USDT</strong></li>
                      <li>• Choose payment method: <strong className="text-white">UPI</strong> (fastest) or IMPS/Bank Transfer</li>
                      <li>• Enter amount in INR</li>
                      <li>• Pick a seller with high completion rate (98%+) and many orders</li>
                      <li>• Click &quot;Buy&quot; and follow payment instructions</li>
                    </ul>
                    <div className="mt-3 p-3 bg-yellow-500/10 rounded-lg">
                      <p className="text-yellow-400 text-xs">
                        <strong>Why USDT first?</strong> More sellers = better rates. You&apos;ll convert to USDC in the next step (free).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Convert USDT to USDC (Free)</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Go to &quot;Trade&quot; → &quot;Convert&quot;</li>
                      <li>• From: USDT → To: USDC</li>
                      <li>• Enter amount and click &quot;Preview Conversion&quot;</li>
                      <li>• Confirm — this is free and instant!</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Withdraw USDC to Your Wallet</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Go to &quot;Wallet&quot; → &quot;Withdraw&quot;</li>
                      <li>• Select <strong className="text-white">USDC</strong></li>
                      <li>• Paste your Rabby wallet address</li>
                      <li>• Select network: <strong className="text-white">Arbitrum One</strong> (lowest fees ~$0.10)</li>
                      <li>• Confirm with 2FA</li>
                    </ul>
                    <div className="mt-3 p-3 bg-green-500/10 rounded-lg">
                      <p className="text-green-400 text-xs">
                        <strong>Important:</strong> Always use Arbitrum network for lowest fees. Funds arrive in 1-5 minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                <h4 className="text-white font-semibold mb-2">Example: Converting ₹10,000</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between text-gray-300">
                    <span>₹10,000 INR</span>
                    <span>→</span>
                    <span>~119 USDT (at ₹84/USDT)</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>119 USDT</span>
                    <span>→</span>
                    <span>119 USDC (free conversion)</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Withdrawal fee</span>
                    <span></span>
                    <span>~$0.10 (Arbitrum)</span>
                  </div>
                  <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700">
                    <span>You receive</span>
                    <span></span>
                    <span>~$118.90 USDC</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* WazirX Instructions */}
          {selectedMethod === 'wazirx' && (
            <div className="bg-gray-900 border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-6">WazirX Method (Easiest)</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Create WazirX Account</h4>
                    <p className="text-gray-400 text-sm">
                      Download WazirX app or go to <a href="https://wazirx.com" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300">wazirx.com</a>. Complete KYC with Aadhaar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Deposit INR via UPI</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Go to &quot;Funds&quot; → &quot;Deposit INR&quot;</li>
                      <li>• Select UPI as payment method</li>
                      <li>• Enter amount and pay via any UPI app</li>
                    </ul>
                    <p className="text-gray-500 text-xs mt-2">Instant deposit, no fee</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Buy USDT</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Go to &quot;Exchange&quot; → Search &quot;USDT/INR&quot;</li>
                      <li>• Click &quot;Buy&quot; and enter amount</li>
                      <li>• Confirm purchase</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Transfer to Binance (Free)</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• WazirX is linked to Binance</li>
                      <li>• Go to &quot;Funds&quot; → &quot;Transfer to Binance&quot;</li>
                      <li>• Select USDT and amount</li>
                      <li>• Instant and free transfer!</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Convert & Withdraw from Binance</h4>
                    <p className="text-gray-400 text-sm">
                      Once on Binance, convert USDT → USDC (free), then withdraw to your wallet on Arbitrum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 rounded-xl">
                <p className="text-blue-400 text-sm">
                  <strong>Why this route?</strong> WazirX has easy UPI deposits but higher trading fees. By transferring to Binance (free), you can convert to USDC for free and withdraw with lower fees.
                </p>
              </div>
            </div>
          )}

          {/* CoinDCX Instructions */}
          {selectedMethod === 'coindcx' && (
            <div className="bg-gray-900 border border-purple-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-6">CoinDCX Method (Direct USDC)</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Create CoinDCX Account</h4>
                    <p className="text-gray-400 text-sm">
                      Download CoinDCX app or visit <a href="https://coindcx.com" target="_blank" rel="noopener" className="text-purple-400 hover:text-purple-300">coindcx.com</a>. Complete KYC.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Deposit INR</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Go to &quot;Wallet&quot; → &quot;Deposit INR&quot;</li>
                      <li>• Choose bank transfer or UPI</li>
                      <li>• Follow instructions to deposit</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Buy USDC Directly</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Go to &quot;Trade&quot; → Search &quot;USDC/INR&quot;</li>
                      <li>• Enter amount and buy</li>
                      <li>• You now have USDC directly!</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Withdraw to Wallet</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Go to &quot;Wallet&quot; → &quot;Withdraw&quot;</li>
                      <li>• Select USDC</li>
                      <li>• Enter your Rabby wallet address</li>
                      <li>• Select Arbitrum network if available (or Ethereum)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <p className="text-yellow-400 text-sm">
                  <strong>Note:</strong> CoinDCX is the simplest method but has higher fees. Good for small amounts or if you want the easiest experience.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Pro Tips for Indian Traders</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-3">💰</div>
              <h3 className="text-white font-semibold mb-2">Use P2P for Best Rates</h3>
              <p className="text-gray-400 text-sm">
                Binance P2P typically offers rates 0.5-1% better than exchange rates.
                For ₹50,000, that&apos;s ₹250-500 saved.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-3">⏰</div>
              <h3 className="text-white font-semibold mb-2">Trade During Banking Hours</h3>
              <p className="text-gray-400 text-sm">
                P2P trades are fastest when Indian banks are open (9am-6pm IST).
                UPI works 24/7 but IMPS may be slower at night.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="text-white font-semibold mb-2">Pick Verified Sellers</h3>
              <p className="text-gray-400 text-sm">
                On P2P, look for sellers with 98%+ completion rate and 500+ orders.
                Higher order count = more reliable.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="text-white font-semibold mb-2">Keep Transaction Records</h3>
              <p className="text-gray-400 text-sm">
                Screenshot all P2P trades and transfers. You&apos;ll need these for
                tax purposes and in case of any disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Convert INR?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Once you have USDC in your wallet, you&apos;re ready to start trading US stocks 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/trade-us-stocks-from-india"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-400 transition-colors"
            >
              Continue: Start Trading
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blog/wallet-setup-guide"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
            >
              Set Up Wallet First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
