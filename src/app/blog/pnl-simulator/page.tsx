'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

const popularStocks = [
  { ticker: 'NVDA', name: 'Nvidia', price: 140 },
  { ticker: 'TSLA', name: 'Tesla', price: 250 },
  { ticker: 'AAPL', name: 'Apple', price: 195 },
  { ticker: 'MSFT', name: 'Microsoft', price: 430 },
  { ticker: 'META', name: 'Meta', price: 590 },
  { ticker: 'AMZN', name: 'Amazon', price: 225 },
  { ticker: 'GOOGL', name: 'Google', price: 195 },
  { ticker: 'AMD', name: 'AMD', price: 125 },
  { ticker: 'COIN', name: 'Coinbase', price: 280 },
  { ticker: 'PLTR', name: 'Palantir', price: 75 },
];

const priceChanges = [-50, -30, -20, -10, -5, 0, 5, 10, 20, 30, 50, 100];

export default function PnLSimulator() {
  const [selectedStock, setSelectedStock] = useState(popularStocks[0]);
  const [customPrice, setCustomPrice] = useState<string>('');
  const [positionSize, setPositionSize] = useState<number>(100);
  const [leverage, setLeverage] = useState<number>(5);
  const [direction, setDirection] = useState<'long' | 'short'>('long');

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const entryPrice = customPrice ? parseFloat(customPrice) : selectedStock.price;
  const isValidPrice = !isNaN(entryPrice) && entryPrice > 0;

  const calculations = useMemo(() => {
    if (!isValidPrice) return null;

    const margin = positionSize;
    const positionValue = margin * leverage;
    const shares = positionValue / entryPrice;

    // Liquidation price (simplified - assumes 100% margin loss = liquidation)
    const liquidationMove = (1 / leverage) * 100;
    const liquidationPrice = direction === 'long'
      ? entryPrice * (1 - 1 / leverage)
      : entryPrice * (1 + 1 / leverage);

    const scenarios = priceChanges.map(change => {
      const exitPrice = entryPrice * (1 + change / 100);
      const priceMove = direction === 'long' ? change : -change;
      const pnl = (priceMove / 100) * positionValue;
      const pnlPercent = (pnl / margin) * 100;
      const isLiquidated = direction === 'long'
        ? exitPrice <= liquidationPrice
        : exitPrice >= liquidationPrice;

      return {
        change,
        exitPrice,
        pnl: isLiquidated ? -margin : pnl,
        pnlPercent: isLiquidated ? -100 : pnlPercent,
        isLiquidated,
      };
    });

    return {
      margin,
      positionValue,
      shares,
      liquidationPrice,
      liquidationMove,
      scenarios,
    };
  }, [entryPrice, positionSize, leverage, direction, isValidPrice]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-gray-950 to-cyan-500/10" />
        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">PnL Simulator</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">Tool</span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">Interactive</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            PnL Simulator
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            See exactly how leverage affects your profits and losses. Simulate different scenarios before risking real money.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-6">Configure Your Trade</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column - Inputs */}
              <div className="space-y-6">
                {/* Stock Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Select Stock</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {popularStocks.slice(0, 6).map(stock => (
                      <button
                        key={stock.ticker}
                        onClick={() => { setSelectedStock(stock); setCustomPrice(''); }}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          selectedStock.ticker === stock.ticker && !customPrice
                            ? 'bg-cyan-500 text-gray-900'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {stock.ticker}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">or enter custom price:</span>
                    <input
                      type="number"
                      value={customPrice}
                      onChange={(e) => setCustomPrice(e.target.value)}
                      placeholder="e.g. 150"
                      className="w-24 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Direction */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Direction</label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setDirection('long')}
                      className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                        direction === 'long'
                          ? 'bg-green-500 text-gray-900'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      📈 Long (Buy)
                    </button>
                    <button
                      onClick={() => setDirection('short')}
                      className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                        direction === 'short'
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      📉 Short (Sell)
                    </button>
                  </div>
                </div>

                {/* Position Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Capital (Margin): <span className="text-white">{formatCurrency(positionSize)}</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="10000"
                    step="50"
                    value={positionSize}
                    onChange={(e) => setPositionSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$50</span>
                    <span>$10,000</span>
                  </div>
                </div>

                {/* Leverage */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Leverage: <span className="text-white">{leverage}x</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={leverage}
                    onChange={(e) => setLeverage(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1x (No leverage)</span>
                    <span>50x</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Summary */}
              <div className="bg-gray-800/50 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-4">Position Summary</h3>

                {isValidPrice && calculations ? (
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry Price</span>
                      <span className="text-white font-medium">{formatCurrency(entryPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Your Margin</span>
                      <span className="text-white font-medium">{formatCurrency(calculations.margin)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Position Size</span>
                      <span className="text-cyan-400 font-bold">{formatCurrency(calculations.positionValue)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Shares Controlled</span>
                      <span className="text-white font-medium">{calculations.shares.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Liquidation Price</span>
                        <div className="text-right">
                          <span className="text-red-400 font-bold">{formatCurrency(calculations.liquidationPrice)}</span>
                          <p className="text-xs text-gray-500">
                            ({direction === 'long' ? '-' : '+'}{calculations.liquidationMove.toFixed(1)}% move)
                          </p>
                        </div>
                      </div>
                    </div>

                    {leverage >= 20 && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                        <p className="text-red-400 text-sm">
                          <strong>Warning:</strong> {leverage}x leverage means a {(100/leverage).toFixed(1)}% move against you = 100% loss
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500">Enter a valid price to see calculations</p>
                )}
              </div>
            </div>
          </div>

          {/* Results Table */}
          {isValidPrice && calculations && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
              <h2 className="text-lg font-bold text-white mb-2">
                PnL Scenarios for {customPrice ? 'Custom Stock' : selectedStock.ticker}
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                See how your {formatCurrency(positionSize)} position with {leverage}x leverage performs at different price levels
              </p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Price Move</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Exit Price</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">PnL ($)</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Return on Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculations.scenarios.map((scenario, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-800/50 ${
                          scenario.isLiquidated ? 'bg-red-500/10' : scenario.change === 0 ? 'bg-gray-800/30' : ''
                        }`}
                      >
                        <td className="py-3 px-4">
                          <span className={`font-medium ${
                            scenario.change > 0 ? 'text-green-400' : scenario.change < 0 ? 'text-red-400' : 'text-gray-400'
                          }`}>
                            {scenario.change > 0 ? '+' : ''}{scenario.change}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-white">
                          {formatCurrency(scenario.exitPrice)}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {scenario.isLiquidated ? (
                            <span className="text-red-500 font-bold">LIQUIDATED</span>
                          ) : (
                            <span className={`font-bold ${scenario.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {scenario.pnl >= 0 ? '+' : ''}{formatCurrency(scenario.pnl)}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {scenario.isLiquidated ? (
                            <span className="text-red-500 font-bold">-100%</span>
                          ) : (
                            <span className={`font-bold ${scenario.pnlPercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {formatPercent(scenario.pnlPercent)}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Visual Bar Chart */}
              <div className="mt-8">
                <h3 className="text-white font-semibold mb-4">Visual PnL Chart</h3>
                <div className="space-y-2">
                  {calculations.scenarios.filter(s => !s.isLiquidated).map((scenario, index) => {
                    const maxPnl = Math.max(...calculations.scenarios.filter(s => !s.isLiquidated).map(s => Math.abs(s.pnl)));
                    const width = Math.min((Math.abs(scenario.pnl) / maxPnl) * 100, 100);
                    const isProfit = scenario.pnl >= 0;

                    return (
                      <div key={index} className="flex items-center gap-3">
                        <span className={`w-16 text-sm text-right ${
                          scenario.change > 0 ? 'text-green-400' : scenario.change < 0 ? 'text-red-400' : 'text-gray-400'
                        }`}>
                          {scenario.change > 0 ? '+' : ''}{scenario.change}%
                        </span>
                        <div className="flex-1 h-6 bg-gray-800 rounded relative overflow-hidden">
                          <div
                            className={`h-full rounded transition-all ${isProfit ? 'bg-green-500' : 'bg-red-500'}`}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                        <span className={`w-24 text-sm text-right font-medium ${isProfit ? 'text-green-400' : 'text-red-400'}`}>
                          {isProfit ? '+' : ''}{formatCurrency(scenario.pnl)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Educational Content */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">How Leverage Works</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p>
                  <strong className="text-white">Leverage amplifies everything</strong> — both gains AND losses.
                </p>
                <p>
                  With <strong className="text-cyan-400">10x leverage</strong>, a 5% price move becomes a 50% gain or loss on your margin.
                </p>
                <p>
                  With <strong className="text-purple-400">20x leverage</strong>, a 5% move against you = 100% loss (liquidation).
                </p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Key Terms</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-cyan-400 font-medium">Margin:</span>
                  <span className="text-gray-400 ml-2">The capital you put up as collateral</span>
                </div>
                <div>
                  <span className="text-purple-400 font-medium">Position Size:</span>
                  <span className="text-gray-400 ml-2">Margin × Leverage = Total exposure</span>
                </div>
                <div>
                  <span className="text-red-400 font-medium">Liquidation:</span>
                  <span className="text-gray-400 ml-2">When losses equal your margin, position is closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Warning */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-yellow-400 font-bold mb-2">Risk Warning</h3>
                <p className="text-gray-300 text-sm">
                  Trading with leverage involves substantial risk. You can lose more than your initial investment.
                  This simulator is for educational purposes only. Always start with small positions and never
                  trade with money you can&apos;t afford to lose.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Trading?</h2>
            <p className="text-gray-400 mb-6">
              Practice with small positions first. Trade 50+ stocks 24/7 with up to 50x leverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={hyperliquid?.referralUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-gray-900 rounded-xl font-bold hover:bg-cyan-400 transition-colors"
              >
                Start Trading on Hyperliquid
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/blog/equity-perps-risks"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
              >
                Understand the Risks First
              </Link>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-white mb-4">Other Tools</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/blog/liquidation-calculator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors">
                <span className="text-red-400 text-xs font-medium">CALCULATOR</span>
                <h3 className="text-white font-medium mt-1">Liquidation Calculator</h3>
                <p className="text-gray-500 text-sm mt-1">Find your exact liquidation price</p>
              </Link>
              <Link href="/blog/fee-calculator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors">
                <span className="text-green-400 text-xs font-medium">CALCULATOR</span>
                <h3 className="text-white font-medium mt-1">Fee Calculator</h3>
                <p className="text-gray-500 text-sm mt-1">Compare trading costs</p>
              </Link>
              <Link href="/blog/funding-rate-tracker" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
                <span className="text-cyan-400 text-xs font-medium">TRACKER</span>
                <h3 className="text-white font-medium mt-1">Funding Rate Tracker</h3>
                <p className="text-gray-500 text-sm mt-1">Monitor current rates</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
