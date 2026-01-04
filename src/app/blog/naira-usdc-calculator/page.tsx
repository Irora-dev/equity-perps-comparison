'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

// Example rates - these fluctuate in real life
const DEFAULT_RATES = {
  cbnOfficial: 1550,      // CBN official rate
  parallelMarket: 1680,   // Parallel/black market rate
  binanceP2P: 1665,       // Binance P2P typical rate
  bybitP2P: 1670,         // Bybit P2P typical rate
  kucoinP2P: 1675,        // KuCoin P2P typical rate
};

const p2pPlatforms = [
  {
    id: 'binance',
    name: 'Binance P2P',
    color: '#F0B90B',
    defaultRate: 1665,
    fees: '0%',
    speed: '5-15 min',
    minAmount: '10,000 NGN',
    paymentMethods: ['Bank Transfer', 'Opay', 'Palmpay', 'Kuda'],
    rating: 'Best Liquidity',
    pros: ['Highest liquidity', 'Most sellers', 'Free P2P trading', 'Many payment options'],
    cons: ['KYC required', 'Can be intimidating for beginners'],
  },
  {
    id: 'bybit',
    name: 'Bybit P2P',
    color: '#F7A600',
    defaultRate: 1670,
    fees: '0%',
    speed: '5-20 min',
    minAmount: '15,000 NGN',
    paymentMethods: ['Bank Transfer', 'Opay', 'Palmpay'],
    rating: 'Good Alternative',
    pros: ['Competitive rates', 'Good seller selection', 'Clean interface'],
    cons: ['Slightly less liquidity than Binance', 'Fewer payment options'],
  },
  {
    id: 'kucoin',
    name: 'KuCoin P2P',
    color: '#23AF91',
    defaultRate: 1675,
    fees: '0%',
    speed: '10-30 min',
    minAmount: '20,000 NGN',
    paymentMethods: ['Bank Transfer', 'Opay'],
    rating: 'Alternative Option',
    pros: ['Good rates sometimes', 'Less crowded'],
    cons: ['Lower liquidity', 'Fewer sellers', 'Can take longer'],
  },
];

// Nigerian Pidgin/Yoruba phrases for bilingual touch
const localPhrases = {
  welcome: {
    pidgin: 'Wetin dey happen bros?',
    english: 'Welcome friend!',
  },
  goodRate: {
    pidgin: 'E sweet die!',
    english: 'Great rate!',
    yoruba: 'O dara pupo!',
  },
  badRate: {
    pidgin: 'E no too sweet o',
    english: 'Not ideal',
    yoruba: 'Ko dara rara',
  },
  beCareful: {
    pidgin: 'Shine your eye well well',
    english: 'Be careful',
    yoruba: 'So ra e',
  },
  money: {
    pidgin: 'Owo',
    yoruba: 'Owo',
  },
};

export default function NairaUSDCCalculator() {
  const [ngnAmount, setNgnAmount] = useState(100000);
  const [customCbnRate, setCustomCbnRate] = useState(DEFAULT_RATES.cbnOfficial);
  const [customParallelRate, setCustomParallelRate] = useState(DEFAULT_RATES.parallelMarket);
  const [customP2PRates, setCustomP2PRates] = useState({
    binance: DEFAULT_RATES.binanceP2P,
    bybit: DEFAULT_RATES.bybitP2P,
    kucoin: DEFAULT_RATES.kucoinP2P,
  });
  const [selectedPlatform, setSelectedPlatform] = useState('binance');

  // Calculations
  const calculations = useMemo(() => {
    const usdAtCbn = ngnAmount / customCbnRate;
    const usdAtParallel = ngnAmount / customParallelRate;
    const usdAtBinance = ngnAmount / customP2PRates.binance;
    const usdAtBybit = ngnAmount / customP2PRates.bybit;
    const usdAtKucoin = ngnAmount / customP2PRates.kucoin;

    // Calculate premium/discount vs official rate
    const parallelPremium = ((customParallelRate - customCbnRate) / customCbnRate) * 100;
    const binancePremium = ((customP2PRates.binance - customCbnRate) / customCbnRate) * 100;
    const bybitPremium = ((customP2PRates.bybit - customCbnRate) / customCbnRate) * 100;
    const kucoinPremium = ((customP2PRates.kucoin - customCbnRate) / customCbnRate) * 100;

    // Loss vs CBN rate (how much less USD you get at parallel/P2P)
    const lossAtParallel = usdAtCbn - usdAtParallel;
    const lossAtBinance = usdAtCbn - usdAtBinance;
    const lossAtBybit = usdAtCbn - usdAtBybit;
    const lossAtKucoin = usdAtCbn - usdAtKucoin;

    // Best P2P rate
    const bestP2PRate = Math.min(customP2PRates.binance, customP2PRates.bybit, customP2PRates.kucoin);
    const bestP2P = bestP2PRate === customP2PRates.binance ? 'Binance' :
                    bestP2PRate === customP2PRates.bybit ? 'Bybit' : 'KuCoin';
    const bestUSD = ngnAmount / bestP2PRate;

    return {
      usdAtCbn,
      usdAtParallel,
      usdAtBinance,
      usdAtBybit,
      usdAtKucoin,
      parallelPremium,
      binancePremium,
      bybitPremium,
      kucoinPremium,
      lossAtParallel,
      lossAtBinance,
      lossAtBybit,
      lossAtKucoin,
      bestP2P,
      bestP2PRate,
      bestUSD,
    };
  }, [ngnAmount, customCbnRate, customParallelRate, customP2PRates]);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Naira Real Rate Calculator',
    description: 'Calculate the real value of Nigerian Naira. Compare CBN official rate vs parallel market rate for NGN to USDC conversion.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Compare Equity Perps',
    },
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero with Nigeria flag colors */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/15 via-gray-950 to-green-600/10" />
        <div className="absolute top-0 left-0 w-2 h-full bg-green-600" />
        <div className="absolute top-0 right-0 w-2 h-full bg-green-600" />

        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Naira Rate Calculator</span>
          </nav>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm font-medium rounded-full flex items-center gap-2">
              <span className="text-lg">NG</span> Nigeria
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">Interactive Tool</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Naira Real Rate Calculator
          </h1>

          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Calculate what your Naira is <span className="text-green-400 font-semibold">really worth</span>.
            Compare CBN official rate vs parallel market rate and find the best P2P rates.
          </p>

          <p className="text-gray-500 text-sm italic">
            {localPhrases.welcome.pidgin} - {localPhrases.welcome.english}
          </p>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Input Section */}
          <div className="bg-gray-900/70 border border-green-600/30 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white text-sm">N</span>
              Enter Your Amount
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Amount in Naira (NGN)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 font-bold">N</span>
                  <input
                    type="number"
                    value={ngnAmount}
                    onChange={(e) => setNgnAmount(Number(e.target.value) || 0)}
                    className="w-full pl-10 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white text-xl font-mono focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="100000"
                  />
                </div>
                <div className="flex gap-2 mt-3">
                  {[50000, 100000, 500000, 1000000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setNgnAmount(amount)}
                      className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition-colors"
                    >
                      {amount >= 1000000 ? `${amount / 1000000}M` : `${amount / 1000}K`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">CBN Official Rate (NGN/USD)</label>
                  <input
                    type="number"
                    value={customCbnRate}
                    onChange={(e) => setCustomCbnRate(Number(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Parallel Market Rate (NGN/USD)</label>
                  <input
                    type="number"
                    value={customParallelRate}
                    onChange={(e) => setCustomParallelRate(Number(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* CBN Official Rate */}
            <div className="bg-gray-900/70 border border-blue-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-blue-400">CBN Official Rate</h3>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Official</span>
              </div>
              <div className="text-3xl font-black text-white mb-2">
                ${calculations.usdAtCbn.toFixed(2)}
              </div>
              <p className="text-gray-500 text-sm">
                at N{customCbnRate.toLocaleString()}/USD
              </p>
              <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
                <p className="text-blue-400 text-xs">
                  This is the official Central Bank of Nigeria rate. In practice, this rate is rarely available to regular Nigerians for forex transactions.
                </p>
              </div>
            </div>

            {/* Parallel Market Rate */}
            <div className="bg-gray-900/70 border border-yellow-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-yellow-400">Parallel Market Rate</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">Street Rate</span>
              </div>
              <div className="text-3xl font-black text-white mb-2">
                ${calculations.usdAtParallel.toFixed(2)}
              </div>
              <p className="text-gray-500 text-sm">
                at N{customParallelRate.toLocaleString()}/USD
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Premium over CBN:</span>
                  <span className="text-yellow-400 font-mono">+{calculations.parallelPremium.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">You lose:</span>
                  <span className="text-red-400 font-mono">-${calculations.lossAtParallel.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* P2P Platform Comparison */}
          <div className="bg-gray-900/70 border border-green-600/30 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">P2P Platform Rates</h2>
              <span className="text-green-400 text-sm font-medium flex items-center gap-1">
                Best: {calculations.bestP2P}
              </span>
            </div>

            {/* Rate Inputs */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-yellow-400 text-xs mb-1">Binance P2P</label>
                <input
                  type="number"
                  value={customP2PRates.binance}
                  onChange={(e) => setCustomP2PRates(prev => ({ ...prev, binance: Number(e.target.value) || 0 }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-orange-400 text-xs mb-1">Bybit P2P</label>
                <input
                  type="number"
                  value={customP2PRates.bybit}
                  onChange={(e) => setCustomP2PRates(prev => ({ ...prev, bybit: Number(e.target.value) || 0 }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-emerald-400 text-xs mb-1">KuCoin P2P</label>
                <input
                  type="number"
                  value={customP2PRates.kucoin}
                  onChange={(e) => setCustomP2PRates(prev => ({ ...prev, kucoin: Number(e.target.value) || 0 }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Results Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium text-sm">Platform</th>
                    <th className="text-right py-3 px-3 text-gray-400 font-medium text-sm">Rate</th>
                    <th className="text-right py-3 px-3 text-gray-400 font-medium text-sm">You Get</th>
                    <th className="text-right py-3 px-3 text-gray-400 font-medium text-sm">Premium</th>
                    <th className="text-right py-3 px-3 text-gray-400 font-medium text-sm">vs Best</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Binance', rate: customP2PRates.binance, usd: calculations.usdAtBinance, premium: calculations.binancePremium, color: '#F0B90B' },
                    { name: 'Bybit', rate: customP2PRates.bybit, usd: calculations.usdAtBybit, premium: calculations.bybitPremium, color: '#F7A600' },
                    { name: 'KuCoin', rate: customP2PRates.kucoin, usd: calculations.usdAtKucoin, premium: calculations.kucoinPremium, color: '#23AF91' },
                  ].map((platform) => {
                    const diff = calculations.bestUSD - platform.usd;
                    const isBest = platform.rate === calculations.bestP2PRate;
                    return (
                      <tr key={platform.name} className={`border-b border-gray-800/50 ${isBest ? 'bg-green-500/10' : ''}`}>
                        <td className="py-4 px-3">
                          <span className="font-medium" style={{ color: platform.color }}>{platform.name}</span>
                          {isBest && <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Best</span>}
                        </td>
                        <td className="py-4 px-3 text-right text-white font-mono">N{platform.rate.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right text-white font-mono font-bold">${platform.usd.toFixed(2)}</td>
                        <td className="py-4 px-3 text-right text-yellow-400 font-mono text-sm">+{platform.premium.toFixed(1)}%</td>
                        <td className="py-4 px-3 text-right">
                          {isBest ? (
                            <span className="text-green-400 font-mono text-sm">{localPhrases.goodRate.pidgin}</span>
                          ) : (
                            <span className="text-red-400 font-mono text-sm">-${diff.toFixed(2)}</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-green-400 text-sm">
                <strong>Best Deal:</strong> {calculations.bestP2P} P2P at N{calculations.bestP2PRate.toLocaleString()}/USD gives you <strong className="text-white">${calculations.bestUSD.toFixed(2)} USDC</strong> for your N{ngnAmount.toLocaleString()}.
              </p>
            </div>
          </div>

          {/* Effective Premium Summary */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-900/70 border border-gray-700 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Your Effective Premium</h2>
            <p className="text-gray-400 text-sm mb-6">
              How much more you pay compared to the official CBN rate ({localPhrases.beCareful.pidgin})
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="text-2xl font-black text-yellow-400 mb-1">
                  {calculations.parallelPremium.toFixed(1)}%
                </div>
                <div className="text-gray-500 text-xs">Parallel Market</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="text-2xl font-black text-yellow-400 mb-1">
                  {calculations.binancePremium.toFixed(1)}%
                </div>
                <div className="text-gray-500 text-xs">Binance P2P</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="text-2xl font-black text-orange-400 mb-1">
                  {calculations.bybitPremium.toFixed(1)}%
                </div>
                <div className="text-gray-500 text-xs">Bybit P2P</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl">
                <div className="text-2xl font-black text-emerald-400 mb-1">
                  {calculations.kucoinPremium.toFixed(1)}%
                </div>
                <div className="text-gray-500 text-xs">KuCoin P2P</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* P2P Platform Details */}
      <section className="py-8 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">P2P Platform Guide</h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {p2pPlatforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`px-5 py-3 rounded-xl font-medium transition-all ${
                  selectedPlatform === platform.id
                    ? 'text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                style={selectedPlatform === platform.id ? { backgroundColor: platform.color } : {}}
              >
                {platform.name}
              </button>
            ))}
          </div>

          {p2pPlatforms.map((platform) => (
            selectedPlatform === platform.id && (
              <div key={platform.id} className="bg-gray-900 border rounded-2xl p-6" style={{ borderColor: `${platform.color}40` }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold" style={{ color: platform.color }}>{platform.name}</h3>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: `${platform.color}20`, color: platform.color }}>
                    {platform.rating}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Quick Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Trading Fees:</span>
                        <span className="text-green-400 font-medium">{platform.fees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Speed:</span>
                        <span className="text-white">{platform.speed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Min Amount:</span>
                        <span className="text-white">{platform.minAmount}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Payment Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.paymentMethods.map((method) => (
                        <span key={method} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {platform.pros.map((pro, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-green-400">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {platform.cons.map((con, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-red-400">-</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Why Rates Differ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Why CBN and Parallel Rates Differ</h2>
          <p className="text-gray-400 mb-4 italic text-sm">Wetin dey cause am? - What causes this?</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-blue-400 text-xl">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Limited Dollar Supply</h3>
              <p className="text-gray-400 text-sm">
                CBN has limited forex reserves. They can not meet all dollar demand at the official rate,
                so people turn to the parallel market where supply and demand set the price.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-yellow-400 text-xl">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Capital Controls</h3>
              <p className="text-gray-400 text-sm">
                Government restrictions on forex transactions push more demand to the parallel market.
                The harder it is to get dollars officially, the higher the parallel rate goes.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-green-400 text-xl">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Import Demand</h3>
              <p className="text-gray-400 text-sm">
                Nigeria imports most goods. Businesses need dollars to pay suppliers, creating
                constant dollar demand that the official market can not satisfy.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-purple-400 text-xl">4</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Inflation Expectations</h3>
              <p className="text-gray-400 text-sm">
                When people expect the Naira to weaken further, they rush to buy dollars,
                pushing the parallel rate even higher. Fear drives the spread wider.
              </p>
            </div>
          </div>

          <div className="p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <h4 className="text-yellow-400 font-semibold mb-2">What This Means for You</h4>
            <p className="text-gray-300 text-sm">
              The CBN rate is mostly theoretical for regular Nigerians. When converting NGN to USDC for trading,
              you will pay rates closer to the parallel market. P2P platforms often offer better rates than
              Bureau de Change (BDC) because of lower overhead and direct peer trading.
            </p>
            <p className="text-gray-500 text-xs mt-2 italic">
              {localPhrases.beCareful.yoruba} - {localPhrases.beCareful.english}
            </p>
          </div>
        </div>
      </section>

      {/* Tips for Best Rates */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Tips for Getting Best Rates</h2>
          <p className="text-gray-400 mb-6 text-sm italic">How to save your {localPhrases.money.yoruba} (money)</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-green-600/30 rounded-xl p-5">
              <div className="text-2xl mb-3">1</div>
              <h3 className="text-white font-semibold mb-2">Compare Multiple Platforms</h3>
              <p className="text-gray-400 text-sm">
                Check Binance, Bybit, and KuCoin P2P before trading. Rates can differ by N20-50 per dollar.
                On a N500,000 trade, that is N10,000-25,000 difference.
              </p>
            </div>

            <div className="bg-gray-900 border border-green-600/30 rounded-xl p-5">
              <div className="text-2xl mb-3">2</div>
              <h3 className="text-white font-semibold mb-2">Trade During Active Hours</h3>
              <p className="text-gray-400 text-sm">
                Best rates are usually between 10am-8pm WAT when most sellers are active.
                Late night trades may have fewer sellers and worse rates.
              </p>
            </div>

            <div className="bg-gray-900 border border-green-600/30 rounded-xl p-5">
              <div className="text-2xl mb-3">3</div>
              <h3 className="text-white font-semibold mb-2">Check Seller History</h3>
              <p className="text-gray-400 text-sm">
                Choose sellers with 98%+ completion rate and 500+ orders.
                Fast payment = faster release. Avoid new sellers with few trades.
              </p>
            </div>

            <div className="bg-gray-900 border border-green-600/30 rounded-xl p-5">
              <div className="text-2xl mb-3">4</div>
              <h3 className="text-white font-semibold mb-2">Use Common Payment Methods</h3>
              <p className="text-gray-400 text-sm">
                Bank Transfer, Opay, and Palmpay usually have the best rates because sellers
                prefer them. Exotic payment methods may have worse rates.
              </p>
            </div>

            <div className="bg-gray-900 border border-green-600/30 rounded-xl p-5">
              <div className="text-2xl mb-3">5</div>
              <h3 className="text-white font-semibold mb-2">Buy USDT First, Then Convert</h3>
              <p className="text-gray-400 text-sm">
                USDT/NGN usually has more liquidity than USDC/NGN. Buy USDT on P2P,
                then convert to USDC on the exchange for free. Better rates overall.
              </p>
            </div>

            <div className="bg-gray-900 border border-green-600/30 rounded-xl p-5">
              <div className="text-2xl mb-3">6</div>
              <h3 className="text-white font-semibold mb-2">Avoid Weekend Spikes</h3>
              <p className="text-gray-400 text-sm">
                Rates often spike on weekends when banks are closed and fewer sellers are active.
                If possible, do large conversions during weekday banking hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Steps */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Convert NGN to USDC in 5 Steps</h2>

          <div className="space-y-4">
            {[
              { step: 1, title: 'Create P2P Account', desc: 'Sign up on Binance/Bybit and complete KYC verification with NIN or BVN.' },
              { step: 2, title: 'Go to P2P Trading', desc: 'Select "Buy" and choose USDT. Filter by NGN and your preferred payment method.' },
              { step: 3, title: 'Find Best Rate', desc: 'Compare seller rates. Pick one with good completion rate (98%+) and reasonable amount.' },
              { step: 4, title: 'Complete Payment', desc: 'Pay via bank transfer/Opay/Palmpay. Mark as paid and wait for seller to release crypto.' },
              { step: 5, title: 'Convert & Withdraw', desc: 'Convert USDT to USDC (free on exchange). Withdraw to your wallet on Arbitrum for lowest fees.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Trading?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Once you have converted your Naira to USDC, you can trade US stocks like NVDA, TSLA, and AAPL 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/trade-us-stocks-from-nigeria"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-500 transition-colors"
            >
              Trade US Stocks from Nigeria
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

      {/* Disclaimer */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              <strong className="text-white">Disclaimer:</strong> Exchange rates shown are examples and fluctuate constantly.
              Always check current rates on your chosen platform before trading. CBN official rates may not be available
              for retail forex transactions. P2P trading involves counterparty risk - use platforms with escrow protection.
            </p>
            <p className="text-gray-500 text-xs">
              This site is <span className="text-white font-medium">100% free</span> to use.
              When you sign up through our links, you may receive fee discounts while supporting this site.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
