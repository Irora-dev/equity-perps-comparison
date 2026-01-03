'use client';

import Link from 'next/link';
import { useState } from 'react';

type Region = 'india' | 'pakistan' | 'sea' | 'africa' | 'latam';

const regionData: Record<Region, {
  name: string;
  currency: string;
  bestPlatforms: string[];
  paymentMethods: string[];
  tips: string[];
  warning?: string;
}> = {
  india: {
    name: 'India',
    currency: 'INR',
    bestPlatforms: ['Binance P2P', 'WazirX', 'CoinDCX'],
    paymentMethods: ['UPI', 'IMPS', 'Bank Transfer', 'Paytm'],
    tips: [
      'UPI is fastest (instant settlement)',
      'Don\'t mention "crypto" in payment notes',
      'Trade during Indian business hours for best rates',
      'Verify seller has 95%+ completion rate',
    ],
  },
  pakistan: {
    name: 'Pakistan',
    currency: 'PKR',
    bestPlatforms: ['Binance P2P', 'KuCoin P2P', 'OKX P2P'],
    paymentMethods: ['JazzCash', 'Easypaisa', 'Bank Transfer', 'HBL'],
    tips: [
      'JazzCash and Easypaisa are most common',
      'Weekend trading has fewer sellers',
      'Verify seller profile carefully',
      'Start with smaller amounts to test sellers',
    ],
    warning: 'Crypto regulations in Pakistan are evolving. Stay informed about latest rules.',
  },
  sea: {
    name: 'Southeast Asia',
    currency: 'Various',
    bestPlatforms: ['Binance P2P', 'Bybit P2P', 'OKX P2P'],
    paymentMethods: ['GCash (PH)', 'GrabPay', 'Bank Transfer', 'PromptPay (TH)'],
    tips: [
      'Philippines: GCash is most popular',
      'Thailand: PromptPay works well',
      'Vietnam: Bank transfers preferred',
      'Indonesia: Check local exchange options too',
    ],
  },
  africa: {
    name: 'Africa',
    currency: 'Various',
    bestPlatforms: ['Binance P2P', 'Paxful', 'LocalBitcoins'],
    paymentMethods: ['M-Pesa', 'Bank Transfer', 'Mobile Money', 'Chipper Cash'],
    tips: [
      'Nigeria: Bank transfers common despite challenges',
      'Kenya: M-Pesa is king',
      'South Africa: FNB/Standard Bank transfers',
      'Ghana: Mobile money widely used',
    ],
    warning: 'Some African countries have crypto restrictions. Verify your local laws.',
  },
  latam: {
    name: 'Latin America',
    currency: 'Various',
    bestPlatforms: ['Binance P2P', 'LocalBitcoins', 'Bitso'],
    paymentMethods: ['Mercado Pago', 'PIX (Brazil)', 'Bank Transfer', 'Nequi'],
    tips: [
      'Brazil: PIX is instant and popular',
      'Mexico: SPEI bank transfers',
      'Argentina: Dollar-pegged stablecoins popular',
      'Colombia: Nequi and Bancolombia',
    ],
  },
};

export default function P2PUSDCGuidePage() {
  const [selectedRegion, setSelectedRegion] = useState<Region>('india');
  const region = regionData[selectedRegion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 font-medium">Global P2P Guide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Best P2P Methods to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Buy USDC Worldwide</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Compare P2P platforms and find the best way to buy USDC in your country.
            No wire transfers, no bank hassles - trade directly with local sellers.
          </p>
        </div>
      </section>

      {/* Why P2P Section */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Use P2P to Buy USDC?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-bold text-white mb-2">No Bank Limits</h3>
              <p className="text-slate-300 text-sm">
                Avoid international wire transfer limits and fees. Trade locally with your existing bank account.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Fast Settlement</h3>
              <p className="text-slate-300 text-sm">
                Most P2P trades complete in 15-30 minutes. Wire transfers can take 3-5 business days.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">Better Rates</h3>
              <p className="text-slate-300 text-sm">
                Competitive exchange rates, often better than banks. No hidden forex fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Top P2P Platforms Compared</h2>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Platform</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Fee</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">KYC</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Min Trade</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  <tr className="hover:bg-slate-700/30">
                    <td className="px-6 py-4">
                      <span className="text-white font-semibold">Binance P2P</span>
                      <span className="ml-2 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Recommended</span>
                    </td>
                    <td className="px-6 py-4 text-emerald-400">0%</td>
                    <td className="px-6 py-4 text-slate-300">Required</td>
                    <td className="px-6 py-4 text-slate-300">~$10</td>
                    <td className="px-6 py-4 text-slate-400">Best liquidity, most regions</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="px-6 py-4 text-white font-semibold">Bybit P2P</td>
                    <td className="px-6 py-4 text-emerald-400">0%</td>
                    <td className="px-6 py-4 text-slate-300">Required</td>
                    <td className="px-6 py-4 text-slate-300">~$10</td>
                    <td className="px-6 py-4 text-slate-400">Good Asia coverage</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="px-6 py-4 text-white font-semibold">OKX P2P</td>
                    <td className="px-6 py-4 text-emerald-400">0%</td>
                    <td className="px-6 py-4 text-slate-300">Required</td>
                    <td className="px-6 py-4 text-slate-300">~$10</td>
                    <td className="px-6 py-4 text-slate-400">Good rates, decent liquidity</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="px-6 py-4 text-white font-semibold">KuCoin P2P</td>
                    <td className="px-6 py-4 text-emerald-400">0%</td>
                    <td className="px-6 py-4 text-slate-300">Partial</td>
                    <td className="px-6 py-4 text-slate-300">~$10</td>
                    <td className="px-6 py-4 text-slate-400">Pakistan, Middle East</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30">
                    <td className="px-6 py-4 text-white font-semibold">Paxful</td>
                    <td className="px-6 py-4 text-yellow-400">1%</td>
                    <td className="px-6 py-4 text-slate-300">Partial</td>
                    <td className="px-6 py-4 text-slate-300">$10</td>
                    <td className="px-6 py-4 text-slate-400">Africa, gift cards</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Region Selector */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Find Your Region</h2>
          <p className="text-slate-400 text-center mb-8">Select your region for specific payment methods and tips</p>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(Object.entries(regionData) as [Region, typeof regionData['india']][]).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setSelectedRegion(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedRegion === key
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {data.name}
              </button>
            ))}
          </div>

          {/* Region Content */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">{region.name} P2P Guide</h3>

            {region.warning && (
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
                <p className="text-yellow-400 text-sm">⚠️ {region.warning}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Best Platforms</h4>
                <div className="space-y-2">
                  {region.bestPlatforms.map((platform, i) => (
                    <div key={platform} className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        i === 0 ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-300'
                      }`}>
                        {i + 1}
                      </span>
                      <span className="text-slate-300">{platform}</span>
                      {i === 0 && <span className="text-xs text-emerald-400">(Recommended)</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Payment Methods</h4>
                <div className="flex flex-wrap gap-2">
                  {region.paymentMethods.map(method => (
                    <span key={method} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Local Tips</h4>
              <ul className="space-y-2">
                {region.tips.map(tip => (
                  <li key={tip} className="flex items-start gap-2 text-slate-300">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">P2P Safety Guide</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">✓ Do This</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Only trade with verified sellers (blue badge)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Check completion rate (95%+ is good)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Use the platform&apos;s escrow system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Confirm payment received before releasing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Keep screenshots of all transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Start with small test transactions</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">✗ Avoid This</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Never trade outside the platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Don&apos;t mention &quot;crypto&quot; in payment notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Never release crypto before payment clears</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Avoid sellers with low completion rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Don&apos;t rush due to pressure from seller</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Never share personal info in chat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How to Buy USDC via P2P</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-xl font-bold text-white">Create Account & Verify</h3>
              </div>
              <p className="text-slate-300">
                Sign up on Binance, Bybit, or OKX. Complete identity verification (KYC) - takes 10-30 minutes.
                Most platforms require ID + selfie.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-bold text-white">Go to P2P Section</h3>
              </div>
              <p className="text-slate-300">
                Navigate to P2P trading (usually under &quot;Buy Crypto&quot; or &quot;P2P&quot; tab). Select &quot;Buy&quot; and choose USDC
                (or USDT, then convert to USDC).
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-xl font-bold text-white">Select a Seller</h3>
              </div>
              <p className="text-slate-300 mb-3">
                Filter by your payment method (UPI, bank transfer, etc.). Look for:
              </p>
              <ul className="space-y-1 text-slate-400 text-sm ml-4">
                <li>• Verified badge ✓</li>
                <li>• High completion rate (95%+)</li>
                <li>• Many completed orders (100+)</li>
                <li>• Reasonable exchange rate</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <h3 className="text-xl font-bold text-white">Place Order & Pay</h3>
              </div>
              <p className="text-slate-300">
                Enter amount, click Buy. The USDC is locked in escrow. You&apos;ll see seller&apos;s payment details.
                Make payment within the time limit (usually 15-30 mins). Mark as paid.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                <h3 className="text-xl font-bold text-white">Receive USDC</h3>
              </div>
              <p className="text-slate-300">
                Once seller confirms payment, USDC is released to your exchange wallet.
                You can now withdraw to your personal wallet for trading on DEXs.
              </p>
            </div>
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
                <span className="text-lg font-semibold text-white">Is P2P trading safe?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Yes, when using major platforms like Binance P2P. The escrow system protects both parties.
                The seller&apos;s crypto is locked until you confirm payment, and you don&apos;t release payment
                until you&apos;ve verified funds. Always trade within the platform and follow safety guidelines.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">What&apos;s the difference between USDT and USDC?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Both are stablecoins worth $1. USDT (Tether) has more P2P liquidity but less regulatory
                compliance. USDC (Circle) is more regulated and trusted. For trading on DEXs like Hyperliquid,
                both work, but USDC is generally preferred. You can easily swap USDT to USDC on any exchange.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Can I buy directly with my local currency?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Yes! That&apos;s the whole point of P2P. You pay in INR, PKR, PHP, or whatever your local currency
                is, and receive crypto directly. No need to convert to USD first or deal with forex.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">What if the seller doesn&apos;t release crypto?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Open a dispute with the platform. Provide payment proof (screenshots, transaction ID).
                The platform&apos;s support team will investigate and release funds to the rightful party.
                This is why you should always keep records and never trade outside the platform.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Why shouldn&apos;t I mention &quot;crypto&quot; in payment notes?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Some banks flag crypto-related keywords and may freeze accounts or ask questions.
                To avoid hassle, use generic notes or leave the payment note blank. This is a precaution,
                not because you&apos;re doing anything wrong.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              Once you have USDC, you&apos;re ready to trade equity perpetuals 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/start"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Start Trading
              </Link>
              <Link
                href="/blog/convert-inr-to-usdc"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-colors"
              >
                India-Specific Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
