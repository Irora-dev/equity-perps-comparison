'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

// Stock volatility data (average daily % move)
const stockVolatility: Record<string, { name: string; avgDailyMove: number; description: string }> = {
  NVDA: { name: 'Nvidia', avgDailyMove: 3.5, description: 'High volatility tech stock' },
  TSLA: { name: 'Tesla', avgDailyMove: 4.0, description: 'Very high volatility' },
  AAPL: { name: 'Apple', avgDailyMove: 1.5, description: 'Lower volatility mega-cap' },
  MSFT: { name: 'Microsoft', avgDailyMove: 1.8, description: 'Moderate volatility' },
  META: { name: 'Meta', avgDailyMove: 2.5, description: 'Moderate-high volatility' },
  AMZN: { name: 'Amazon', avgDailyMove: 2.2, description: 'Moderate volatility' },
  AMD: { name: 'AMD', avgDailyMove: 3.8, description: 'High volatility semi' },
  COIN: { name: 'Coinbase', avgDailyMove: 5.0, description: 'Very high volatility' },
  GME: { name: 'GameStop', avgDailyMove: 8.0, description: 'Extreme volatility meme stock' },
  MSTR: { name: 'MicroStrategy', avgDailyMove: 6.0, description: 'Bitcoin proxy, extreme moves' },
  SPY: { name: 'S&P 500 ETF', avgDailyMove: 0.8, description: 'Low volatility index' },
  QQQ: { name: 'Nasdaq ETF', avgDailyMove: 1.2, description: 'Moderate volatility index' },
};

const stockList = Object.entries(stockVolatility).map(([ticker, data]) => ({
  ticker,
  ...data,
}));

interface LeverageScenario {
  leverage: number;
  liquidationPrice: number;
  liquidationPercent: number;
  pnlAtMoves: { percent: number; pnl: number; pnlPercent: number }[];
  daysToLiquidation: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'extreme';
}

export default function LeverageRiskVisualizer() {
  const [entryPrice, setEntryPrice] = useState<number>(100);
  const [positionSize, setPositionSize] = useState<number>(1000);
  const [leverage, setLeverage] = useState<number>(10);
  const [selectedStock, setSelectedStock] = useState<string>('NVDA');
  const [direction, setDirection] = useState<'long' | 'short'>('long');

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');
  const stockInfo = stockVolatility[selectedStock];
  const maintenanceMargin = 0.5; // 0.5% maintenance margin

  // Calculate core metrics
  const calculations = useMemo(() => {
    const margin = positionSize;
    const notionalValue = margin * leverage;
    const marginRatio = 1 / leverage;
    const maintenanceRatio = maintenanceMargin / 100;

    // Liquidation calculation
    let liquidationPrice: number;
    let liquidationPercent: number;

    if (direction === 'long') {
      liquidationPrice = entryPrice * (1 - marginRatio + maintenanceRatio);
      liquidationPercent = ((entryPrice - liquidationPrice) / entryPrice) * 100;
    } else {
      liquidationPrice = entryPrice * (1 + marginRatio - maintenanceRatio);
      liquidationPercent = ((liquidationPrice - entryPrice) / entryPrice) * 100;
    }

    // P&L at various price points
    const pricePoints = [-10, -5, -3, 5, 10, 20];
    const pnlAtMoves = pricePoints.map(percent => {
      const priceMove = direction === 'long' ? percent : -percent;
      const pnl = (priceMove / 100) * notionalValue;
      const pnlPercent = (pnl / margin) * 100;
      const isLiquidated = direction === 'long'
        ? percent <= -liquidationPercent
        : percent >= liquidationPercent;
      return {
        percent,
        pnl: isLiquidated ? -margin : pnl,
        pnlPercent: isLiquidated ? -100 : pnlPercent,
        isLiquidated,
      };
    });

    // Days to liquidation based on volatility
    const daysToLiquidation = liquidationPercent / stockInfo.avgDailyMove;

    // Risk assessment
    let riskLevel: 'low' | 'moderate' | 'high' | 'extreme';
    if (liquidationPercent > 15) riskLevel = 'low';
    else if (liquidationPercent > 8) riskLevel = 'moderate';
    else if (liquidationPercent > 4) riskLevel = 'high';
    else riskLevel = 'extreme';

    return {
      margin,
      notionalValue,
      liquidationPrice,
      liquidationPercent,
      pnlAtMoves,
      daysToLiquidation,
      riskLevel,
    };
  }, [entryPrice, positionSize, leverage, direction, stockInfo.avgDailyMove]);

  // Compare scenarios: 5x, 10x, 20x
  const comparisonScenarios: LeverageScenario[] = useMemo(() => {
    return [5, 10, 20].map(lev => {
      const marginRatio = 1 / lev;
      const maintenanceRatio = maintenanceMargin / 100;
      const notionalValue = positionSize * lev;

      let liquidationPrice: number;
      let liquidationPercent: number;

      if (direction === 'long') {
        liquidationPrice = entryPrice * (1 - marginRatio + maintenanceRatio);
        liquidationPercent = ((entryPrice - liquidationPrice) / entryPrice) * 100;
      } else {
        liquidationPrice = entryPrice * (1 + marginRatio - maintenanceRatio);
        liquidationPercent = ((liquidationPrice - entryPrice) / entryPrice) * 100;
      }

      const pricePoints = [5, 10, -5, -10];
      const pnlAtMoves = pricePoints.map(percent => {
        const priceMove = direction === 'long' ? percent : -percent;
        const pnl = (priceMove / 100) * notionalValue;
        const pnlPercent = (pnl / positionSize) * 100;
        const isLiquidated = direction === 'long'
          ? percent <= -liquidationPercent
          : percent >= liquidationPercent;
        return {
          percent,
          pnl: isLiquidated ? -positionSize : pnl,
          pnlPercent: isLiquidated ? -100 : pnlPercent,
        };
      });

      const daysToLiquidation = liquidationPercent / stockInfo.avgDailyMove;

      let riskLevel: 'low' | 'moderate' | 'high' | 'extreme';
      if (liquidationPercent > 15) riskLevel = 'low';
      else if (liquidationPercent > 8) riskLevel = 'moderate';
      else if (liquidationPercent > 4) riskLevel = 'high';
      else riskLevel = 'extreme';

      return {
        leverage: lev,
        liquidationPrice,
        liquidationPercent,
        pnlAtMoves,
        daysToLiquidation,
        riskLevel,
      };
    });
  }, [entryPrice, positionSize, direction, stockInfo.avgDailyMove]);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400';
      case 'moderate': return 'text-yellow-400';
      case 'high': return 'text-orange-400';
      case 'extreme': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getRiskBgColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-500/20 border-green-500/30';
      case 'moderate': return 'bg-yellow-500/20 border-yellow-500/30';
      case 'high': return 'bg-orange-500/20 border-orange-500/30';
      case 'extreme': return 'bg-red-500/20 border-red-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Generate chart data points
  const chartData = useMemo(() => {
    const points: { price: number; label: string; type: 'entry' | 'liquidation' | 'profit' | 'loss' }[] = [];
    const range = entryPrice * 0.3; // 30% range

    // Entry price
    points.push({ price: entryPrice, label: 'Entry', type: 'entry' });

    // Liquidation price
    points.push({
      price: calculations.liquidationPrice,
      label: 'Liquidation',
      type: 'liquidation'
    });

    // Profit/loss zones
    if (direction === 'long') {
      points.push({ price: entryPrice * 1.1, label: '+10%', type: 'profit' });
      points.push({ price: entryPrice * 0.95, label: '-5%', type: 'loss' });
    } else {
      points.push({ price: entryPrice * 0.9, label: '-10%', type: 'profit' });
      points.push({ price: entryPrice * 1.05, label: '+5%', type: 'loss' });
    }

    return points.sort((a, b) => b.price - a.price);
  }, [entryPrice, calculations.liquidationPrice, direction]);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Leverage Risk Visualizer',
    description: 'Interactive tool to visualize leverage trading risk, liquidation prices, and compare different leverage scenarios.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Real-time liquidation price calculation',
      'Leverage comparison (5x, 10x, 20x)',
      'Stock volatility context',
      'Interactive danger zone visualization',
      'P&L scenario analysis',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-gray-950 to-orange-500/10" />
        <div className="max-w-5xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Leverage Risk Visualizer</span>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">Risk Tool</span>
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">Interactive</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Leverage Risk Visualizer
          </h1>
          <p className="text-xl text-gray-400 mb-6 max-w-2xl">
            See exactly how close you are to liquidation. Understand the danger zone before you trade with leverage.
          </p>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Input Panel */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-6">Configure Your Position</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column - Inputs */}
              <div className="space-y-5">
                {/* Stock Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Select Stock (for volatility context)</label>
                  <select
                    value={selectedStock}
                    onChange={(e) => setSelectedStock(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {stockList.map(stock => (
                      <option key={stock.ticker} value={stock.ticker}>
                        {stock.ticker} - {stock.name} ({stock.avgDailyMove}% avg daily)
                      </option>
                    ))}
                  </select>
                  <p className="text-gray-500 text-xs mt-1">{stockInfo.description}</p>
                </div>

                {/* Entry Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Entry Price ($)</label>
                  <input
                    type="number"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(Number(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    min="1"
                  />
                </div>

                {/* Position Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Margin (Your Capital): <span className="text-white">{formatCurrency(positionSize)}</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    step="100"
                    value={positionSize}
                    onChange={(e) => setPositionSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$100</span>
                    <span>$50,000</span>
                  </div>
                </div>

                {/* Leverage Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Leverage: <span className={`font-bold ${leverage > 10 ? 'text-red-400' : leverage > 5 ? 'text-orange-400' : 'text-green-400'}`}>{leverage}x</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={leverage}
                    onChange={(e) => setLeverage(Number(e.target.value))}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right,
                        #22c55e 0%,
                        #22c55e ${(5/50)*100}%,
                        #f59e0b ${(5/50)*100}%,
                        #f59e0b ${(10/50)*100}%,
                        #ef4444 ${(10/50)*100}%,
                        #ef4444 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-green-400">1x Safe</span>
                    <span className="text-orange-400">5x Moderate</span>
                    <span className="text-red-400">50x Extreme</span>
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
                      Long (Buy)
                    </button>
                    <button
                      onClick={() => setDirection('short')}
                      className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                        direction === 'short'
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      Short (Sell)
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-4">
                {/* Risk Level Badge */}
                <div className={`rounded-xl p-4 border ${getRiskBgColor(calculations.riskLevel)}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Risk Level</span>
                    <span className={`font-bold text-lg uppercase ${getRiskColor(calculations.riskLevel)}`}>
                      {calculations.riskLevel}
                    </span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="bg-gray-800/50 rounded-xl p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Position Size</span>
                    <span className="text-orange-400 font-bold text-lg">{formatCurrency(calculations.notionalValue)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Liquidation Price</span>
                    <span className="text-red-400 font-bold text-xl">{formatCurrency(calculations.liquidationPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Distance to Liquidation</span>
                    <div className="text-right">
                      <span className="text-red-400 font-bold">{calculations.liquidationPercent.toFixed(2)}%</span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({formatCurrency(Math.abs(entryPrice - calculations.liquidationPrice))})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Volatility Context */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-4">
                  <h4 className="text-yellow-400 font-semibold text-sm mb-2">Volatility Context</h4>
                  <p className="text-gray-300 text-sm">
                    <span className="font-bold text-white">{selectedStock}</span> moves <span className="text-orange-400 font-bold">{stockInfo.avgDailyMove}%</span> on an average day.
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Your liquidation is <span className={`font-bold ${calculations.liquidationPercent < stockInfo.avgDailyMove * 2 ? 'text-red-400' : 'text-yellow-400'}`}>
                      {calculations.liquidationPercent.toFixed(1)}%
                    </span> away.
                  </p>
                  {calculations.daysToLiquidation < 3 && (
                    <p className="text-red-400 text-sm mt-2 font-medium">
                      A normal {calculations.daysToLiquidation.toFixed(1)}-day move could liquidate you!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* High Leverage Warning */}
          {leverage > 10 && (
            <div className={`mb-8 rounded-xl p-6 border ${
              leverage > 20
                ? 'bg-red-500/20 border-red-500/50'
                : 'bg-orange-500/20 border-orange-500/50'
            }`}>
              <div className="flex items-start gap-4">
                <svg className={`w-8 h-8 flex-shrink-0 ${leverage > 20 ? 'text-red-400' : 'text-orange-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h3 className={`font-bold mb-2 ${leverage > 20 ? 'text-red-400' : 'text-orange-400'}`}>
                    {leverage > 20 ? 'EXTREME RISK WARNING' : 'HIGH LEVERAGE WARNING'}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {leverage > 20
                      ? `At ${leverage}x leverage, a move of just ${(100/leverage).toFixed(1)}% against you means total loss. This is gambling, not trading.`
                      : `${leverage}x leverage is aggressive. A ${(100/leverage).toFixed(1)}% adverse move wipes out your position.`
                    }
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    <strong className="text-green-400">Recommendation:</strong> Most successful traders use 2-5x leverage. Higher leverage does not mean higher profits - it means higher risk of ruin.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Price Chart Visualization */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">Liquidation Price Chart</h2>
            <p className="text-gray-400 text-sm mb-6">Visual representation of your position relative to liquidation</p>

            <div className="relative h-80 bg-gray-800/50 rounded-xl overflow-hidden">
              {/* Price axis labels */}
              <div className="absolute left-0 top-0 bottom-0 w-20 flex flex-col justify-between py-4 px-2 border-r border-gray-700">
                <span className="text-gray-400 text-xs">{formatCurrency(entryPrice * 1.2)}</span>
                <span className="text-gray-400 text-xs">{formatCurrency(entryPrice * 1.1)}</span>
                <span className="text-white text-xs font-bold">{formatCurrency(entryPrice)}</span>
                <span className="text-gray-400 text-xs">{formatCurrency(entryPrice * 0.9)}</span>
                <span className="text-gray-400 text-xs">{formatCurrency(entryPrice * 0.8)}</span>
              </div>

              {/* Chart area */}
              <div className="ml-20 h-full relative">
                {/* Danger zone - area below/above liquidation */}
                {direction === 'long' ? (
                  <div
                    className="absolute left-0 right-0 bg-gradient-to-t from-red-500/40 to-red-500/10"
                    style={{
                      bottom: 0,
                      height: `${Math.max(0, Math.min(100, ((entryPrice * 1.2 - calculations.liquidationPrice) / (entryPrice * 0.4)) * 100))}%`,
                    }}
                  />
                ) : (
                  <div
                    className="absolute left-0 right-0 bg-gradient-to-b from-red-500/40 to-red-500/10"
                    style={{
                      top: 0,
                      height: `${Math.max(0, Math.min(100, ((calculations.liquidationPrice - entryPrice * 0.8) / (entryPrice * 0.4)) * 100))}%`,
                    }}
                  />
                )}

                {/* Profit zone */}
                {direction === 'long' ? (
                  <div
                    className="absolute left-0 right-0 bg-gradient-to-b from-green-500/30 to-transparent"
                    style={{
                      top: 0,
                      height: '40%',
                    }}
                  />
                ) : (
                  <div
                    className="absolute left-0 right-0 bg-gradient-to-t from-green-500/30 to-transparent"
                    style={{
                      bottom: 0,
                      height: '40%',
                    }}
                  />
                )}

                {/* Entry price line */}
                <div
                  className="absolute left-0 right-0 h-0.5 bg-cyan-500"
                  style={{ top: '50%' }}
                >
                  <span className="absolute right-2 -top-6 text-cyan-400 text-sm font-bold bg-gray-900 px-2 py-1 rounded">
                    Entry: {formatCurrency(entryPrice)}
                  </span>
                </div>

                {/* Liquidation line */}
                <div
                  className="absolute left-0 right-0 h-1 bg-red-500"
                  style={{
                    top: direction === 'long'
                      ? `${Math.min(95, Math.max(5, ((entryPrice * 1.2 - calculations.liquidationPrice) / (entryPrice * 0.4)) * 100))}%`
                      : `${Math.min(95, Math.max(5, ((entryPrice * 1.2 - calculations.liquidationPrice) / (entryPrice * 0.4)) * 100))}%`
                  }}
                >
                  <span className="absolute right-2 -top-6 text-red-400 text-sm font-bold bg-red-500/20 px-2 py-1 rounded border border-red-500/50">
                    LIQUIDATION: {formatCurrency(calculations.liquidationPrice)} (-{calculations.liquidationPercent.toFixed(1)}%)
                  </span>
                </div>

                {/* Danger zone label */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-red-500/30 rounded-lg border border-red-500/50">
                  <span className="text-red-400 text-sm font-bold">DANGER ZONE</span>
                </div>

                {/* Safe zone label */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-green-500/30 rounded-lg border border-green-500/50">
                  <span className="text-green-400 text-sm font-bold">PROFIT ZONE ({direction === 'long' ? 'Price Up' : 'Price Down'})</span>
                </div>
              </div>
            </div>

            {/* Danger zone size indicator */}
            <div className="mt-4 flex items-center gap-4">
              <span className="text-gray-400 text-sm">Danger Zone Size:</span>
              <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500"
                  style={{ width: `${Math.min(100, (1 / leverage) * 100 * 10)}%` }}
                />
              </div>
              <span className="text-red-400 font-bold text-sm">{calculations.liquidationPercent.toFixed(1)}%</span>
            </div>
          </div>

          {/* P&L Scenarios */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">P&L at Various Price Points</h2>
            <p className="text-gray-400 text-sm mb-6">How much you gain or lose at different price moves</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {calculations.pnlAtMoves.map((scenario, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${
                    scenario.isLiquidated
                      ? 'bg-red-500/20 border-red-500/50'
                      : scenario.pnl >= 0
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-red-500/10 border-red-500/30'
                  }`}
                >
                  <div className={`text-sm font-bold mb-1 ${
                    scenario.percent > 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {scenario.percent > 0 ? '+' : ''}{scenario.percent}%
                  </div>
                  {scenario.isLiquidated ? (
                    <div className="text-red-500 font-bold text-lg">LIQUIDATED</div>
                  ) : (
                    <>
                      <div className={`font-bold text-lg ${scenario.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {scenario.pnl >= 0 ? '+' : ''}{formatCurrency(scenario.pnl)}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {scenario.pnlPercent >= 0 ? '+' : ''}{scenario.pnlPercent.toFixed(0)}% ROI
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leverage Comparison */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-2">Compare Leverage Scenarios</h2>
            <p className="text-gray-400 text-sm mb-6">Side-by-side comparison: 5x vs 10x vs 20x leverage</p>

            <div className="grid md:grid-cols-3 gap-6">
              {comparisonScenarios.map((scenario) => (
                <div
                  key={scenario.leverage}
                  className={`p-5 rounded-xl border ${getRiskBgColor(scenario.riskLevel)}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-white">{scenario.leverage}x</span>
                    <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${getRiskColor(scenario.riskLevel)} bg-gray-800/50`}>
                      {scenario.riskLevel}
                    </span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Position Size</span>
                      <span className="text-white font-medium">{formatCurrency(positionSize * scenario.leverage)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Liquidation at</span>
                      <span className="text-red-400 font-bold">{formatCurrency(scenario.liquidationPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Distance</span>
                      <span className="text-orange-400 font-bold">{scenario.liquidationPercent.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Days to Liq (avg)</span>
                      <span className={`font-bold ${scenario.daysToLiquidation < 2 ? 'text-red-400' : 'text-yellow-400'}`}>
                        {scenario.daysToLiquidation.toFixed(1)} days
                      </span>
                    </div>

                    <div className="border-t border-gray-700 pt-3 mt-3">
                      <p className="text-gray-400 text-xs mb-2">P&L at price moves:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {scenario.pnlAtMoves.slice(0, 4).map((pnl, idx) => (
                          <div key={idx} className="text-xs">
                            <span className={pnl.percent > 0 ? 'text-green-400' : 'text-red-400'}>
                              {pnl.percent > 0 ? '+' : ''}{pnl.percent}%:
                            </span>
                            <span className={`ml-1 font-medium ${pnl.pnlPercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {pnl.pnlPercent >= 0 ? '+' : ''}{pnl.pnlPercent.toFixed(0)}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Beginner Recommendation */}
          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-green-400 font-bold text-lg mb-2">Recommendation for Beginners</h3>
                <p className="text-gray-300 mb-3">
                  <strong className="text-white">Start with 2-5x leverage.</strong> This gives you enough room to handle normal market volatility without getting liquidated.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li><span className="text-green-400 font-bold">2x:</span> 50% move to liquidation - Very safe, good for swing trades</li>
                  <li><span className="text-green-400 font-bold">3x:</span> 33% move to liquidation - Safe for most stocks</li>
                  <li><span className="text-yellow-400 font-bold">5x:</span> 20% move to liquidation - Moderate risk, requires attention</li>
                </ul>
                <p className="text-gray-500 text-sm mt-3">
                  Remember: Surviving to trade another day is more important than maximizing any single trade.
                </p>
              </div>
            </div>
          </div>

          {/* Educational Content */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Why High Leverage is Dangerous</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p>
                  <strong className="text-orange-400">The math works against you.</strong> At 20x leverage, you need 20 winning 5% trades just to recover from one -5% loss that liquidates you.
                </p>
                <p>
                  <strong className="text-red-400">Volatility is your enemy.</strong> Even if you are right about direction, a temporary dip can liquidate you before the move you predicted.
                </p>
                <p>
                  <strong className="text-yellow-400">No stop loss protection.</strong> In fast-moving markets, your stop loss might not execute before liquidation triggers.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Smart Leverage Rules</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">1.</span>
                  <span className="text-gray-400">Never use more than 5x on volatile stocks (NVDA, TSLA, COIN)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">2.</span>
                  <span className="text-gray-400">Match leverage to your time horizon - higher for scalps, lower for swings</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">3.</span>
                  <span className="text-gray-400">Always know your liquidation price before entering a trade</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">4.</span>
                  <span className="text-gray-400">Set stop losses well above/below liquidation to preserve capital</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Trade Responsibly?</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Now that you understand the risks, start with low leverage and build your skills. Trade 50+ stocks 24/7 with proper risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={hyperliquid?.referralUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-gray-900 rounded-xl font-bold hover:bg-orange-400 transition-colors"
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
                Learn More About Risks
              </Link>
            </div>
          </div>

          {/* Related Tools */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Related Tools</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/blog/liquidation-calculator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors">
                <span className="text-red-400 text-xs font-medium">CALCULATOR</span>
                <h3 className="text-white font-medium mt-1">Liquidation Calculator</h3>
                <p className="text-gray-500 text-sm mt-1">Calculate exact liquidation prices</p>
              </Link>
              <Link href="/blog/pnl-simulator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                <span className="text-purple-400 text-xs font-medium">SIMULATOR</span>
                <h3 className="text-white font-medium mt-1">PnL Simulator</h3>
                <p className="text-gray-500 text-sm mt-1">Simulate profit and loss scenarios</p>
              </Link>
              <Link href="/blog/fee-calculator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors">
                <span className="text-green-400 text-xs font-medium">CALCULATOR</span>
                <h3 className="text-white font-medium mt-1">Fee Calculator</h3>
                <p className="text-gray-500 text-sm mt-1">Compare platform trading fees</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
