'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

export default function LiquidationCalculator() {
  const [entryPrice, setEntryPrice] = useState(100);
  const [leverage, setLeverage] = useState(10);
  const [positionType, setPositionType] = useState<'long' | 'short'>('long');
  const [maintenanceMargin, setMaintenanceMargin] = useState(0.5);

  const calculateLiquidation = () => {
    const marginRatio = 1 / leverage;
    const maintenanceRatio = maintenanceMargin / 100;

    if (positionType === 'long') {
      const liquidationPrice = entryPrice * (1 - marginRatio + maintenanceRatio);
      const percentMove = ((entryPrice - liquidationPrice) / entryPrice) * 100;
      return { liquidationPrice, percentMove };
    } else {
      const liquidationPrice = entryPrice * (1 + marginRatio - maintenanceRatio);
      const percentMove = ((liquidationPrice - entryPrice) / entryPrice) * 100;
      return { liquidationPrice, percentMove };
    }
  };

  const result = calculateLiquidation();

  const leverageExamples = [
    { leverage: 2, description: 'Conservative' },
    { leverage: 5, description: 'Moderate' },
    { leverage: 10, description: 'Aggressive' },
    { leverage: 20, description: 'Very High Risk' },
    { leverage: 50, description: 'Extreme' },
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-300">Liquidation Calculator</li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Risk Tool</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Liquidation Price Calculator
          </h1>
          <p className="text-xl text-gray-400">
            Find your liquidation price based on leverage, entry price, and margin requirements.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Position Parameters</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Entry Price ($)</label>
                <input
                  type="number"
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Leverage</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={leverage}
                  onChange={(e) => setLeverage(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">1x</span>
                  <span className="text-cyan-400 font-bold">{leverage}x</span>
                  <span className="text-gray-500">100x</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Position Type</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setPositionType('long')}
                    className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                      positionType === 'long'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                        : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }`}
                  >
                    Long
                  </button>
                  <button
                    onClick={() => setPositionType('short')}
                    className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                      positionType === 'short'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                        : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }`}
                  >
                    Short
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Maintenance Margin (%)
                </label>
                <input
                  type="number"
                  value={maintenanceMargin}
                  onChange={(e) => setMaintenanceMargin(Number(e.target.value))}
                  step="0.1"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <p className="text-gray-500 text-xs mt-1">
                  Typically 0.4% to 1% depending on platform and asset
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Results</h2>

            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <span className="text-gray-400 text-sm block mb-2">Liquidation Price</span>
                <span className={`text-4xl font-bold ${positionType === 'long' ? 'text-red-400' : 'text-green-400'}`}>
                  ${result.liquidationPrice.toFixed(2)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <span className="text-gray-400 text-sm block mb-1">Move to Liquidation</span>
                  <span className="text-xl font-bold text-yellow-400">
                    {result.percentMove.toFixed(2)}%
                  </span>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <span className="text-gray-400 text-sm block mb-1">Initial Margin</span>
                  <span className="text-xl font-bold text-cyan-400">
                    {(100 / leverage).toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className={`rounded-xl p-4 ${
                result.percentMove < 5 ? 'bg-red-500/20 border border-red-500/50' :
                result.percentMove < 10 ? 'bg-yellow-500/20 border border-yellow-500/50' :
                'bg-green-500/20 border border-green-500/50'
              }`}>
                <p className={`text-sm ${
                  result.percentMove < 5 ? 'text-red-300' :
                  result.percentMove < 10 ? 'text-yellow-300' :
                  'text-green-300'
                }`}>
                  {result.percentMove < 5
                    ? 'High risk: A small move will liquidate your position. Consider lower leverage.'
                    : result.percentMove < 10
                    ? 'Moderate risk: Normal market volatility could trigger liquidation.'
                    : 'Lower risk: You have reasonable margin for price fluctuations.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Leverage Impact Reference</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-2 px-3 text-gray-400 text-sm">Leverage</th>
                  <th className="text-left py-2 px-3 text-gray-400 text-sm">Risk Level</th>
                  <th className="text-right py-2 px-3 text-gray-400 text-sm">Move to Liquidation (Long)</th>
                  <th className="text-right py-2 px-3 text-gray-400 text-sm">Initial Margin</th>
                </tr>
              </thead>
              <tbody>
                {leverageExamples.map((ex) => {
                  const liqMove = ((1 / ex.leverage) - (maintenanceMargin / 100)) * 100;
                  return (
                    <tr key={ex.leverage} className="border-b border-gray-800/50">
                      <td className="py-2 px-3 text-white">{ex.leverage}x</td>
                      <td className="py-2 px-3 text-gray-400">{ex.description}</td>
                      <td className="py-2 px-3 text-right text-yellow-400">{liqMove.toFixed(1)}%</td>
                      <td className="py-2 px-3 text-right text-cyan-400">{(100 / ex.leverage).toFixed(1)}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">Understanding Liquidation</h2>

          <p className="text-gray-300">
            Liquidation happens when your margin falls below the maintenance requirement.
            The exchange closes your position automatically to prevent negative balance.
            You lose your margin but do not owe additional money.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Why Liquidations Happen</h3>

          <p className="text-gray-300">
            Higher leverage means smaller price moves trigger liquidation. At 100x, a 1% move against
            you wipes out your position. At 10x, you can withstand roughly 10%. The math is straightforward
            but many traders ignore it.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Avoiding Liquidation</h3>

          <ul className="text-gray-300 space-y-2">
            <li><strong className="text-white">Use lower leverage:</strong> The single most effective way to avoid liquidation</li>
            <li><strong className="text-white">Set stop losses:</strong> Exit before liquidation price is reached</li>
            <li><strong className="text-white">Add margin:</strong> Some platforms let you add margin to existing positions</li>
            <li><strong className="text-white">Reduce position size:</strong> Partial close to free up margin</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {platforms.slice(0, 3).map(platform => (
            <a
              key={platform.id}
              href={platform.referralUrl}
              target="_blank"
              rel="noopener sponsored"
              className="px-4 py-2 rounded-lg text-sm font-medium text-white"
              style={{ backgroundColor: platform.color }}
            >
              Trade on {platform.name}
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to comparison table
          </Link>
        </div>
      </div>
    </main>
  );
}
