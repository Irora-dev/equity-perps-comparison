'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

const platformFees = [
  { name: 'Hyperliquid', maker: 0, taker: 0.00025, color: '#00D1C4' },
  { name: 'Lighter', maker: 0, taker: 0, color: '#8B5CF6' },
  { name: 'Variational', maker: 0, taker: 0, color: '#F59E0B' },
  { name: 'TradeXYZ', maker: 0.0002, taker: 0.0005, color: '#3B82F6' },
  { name: 'Ostium', maker: 0.0005, taker: 0.001, color: '#10B981' },
  { name: 'Avantis', maker: 0, taker: 0, color: '#6366F1' },
  { name: 'Trove', maker: 0.0005, taker: 0.001, color: '#F43F5E' },
];

export default function FeeCalculator() {
  const [positionSize, setPositionSize] = useState(10000);
  const [orderType, setOrderType] = useState<'maker' | 'taker'>('taker');
  const [tradesPerDay, setTradesPerDay] = useState(5);

  const calculateFees = (maker: number, taker: number) => {
    const feeRate = orderType === 'maker' ? maker : taker;
    const singleTradeFee = positionSize * feeRate;
    const roundTripFee = singleTradeFee * 2;
    const dailyFees = roundTripFee * tradesPerDay;
    const monthlyFees = dailyFees * 30;
    return { singleTradeFee, roundTripFee, dailyFees, monthlyFees };
  };

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-300">Fee Calculator</li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Interactive Tool</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Fee Calculator
          </h1>
          <p className="text-xl text-gray-400">
            Calculate your trading costs across different platforms and position sizes.
          </p>
        </header>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">Your Trading Parameters</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Position Size (USD)</label>
              <input
                type="number"
                value={positionSize}
                onChange={(e) => setPositionSize(Number(e.target.value))}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Order Type</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value as 'maker' | 'taker')}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="taker">Taker (Market Orders)</option>
                <option value="maker">Maker (Limit Orders)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Round Trips Per Day</label>
              <input
                type="number"
                value={tradesPerDay}
                onChange={(e) => setTradesPerDay(Number(e.target.value))}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {platformFees.map((platform) => {
            const fees = calculateFees(platform.maker, platform.taker);
            const feeRate = orderType === 'maker' ? platform.maker : platform.taker;

            return (
              <div
                key={platform.name}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold" style={{ color: platform.color }}>
                    {platform.name}
                  </h3>
                  <span className="text-gray-400 text-sm">
                    {feeRate === 0 ? 'Zero fees' : `${(feeRate * 100).toFixed(3)}% ${orderType}`}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <span className="text-gray-500 text-sm block">Single Trade</span>
                    <span className="text-white font-mono">
                      ${fees.singleTradeFee.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">Round Trip</span>
                    <span className="text-white font-mono">
                      ${fees.roundTripFee.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">Daily ({tradesPerDay} trades)</span>
                    <span className="text-white font-mono">
                      ${fees.dailyFees.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">Monthly</span>
                    <span className={`font-mono ${fees.monthlyFees === 0 ? 'text-green-400' : 'text-yellow-400'}`}>
                      ${fees.monthlyFees.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">Understanding the Numbers</h2>

          <p className="text-gray-300">
            Trading fees compound quickly. What looks like a tiny percentage adds up with frequent trading.
            A 0.1% fee on 5 round trips daily costs 1% of your position size per day. Over a month,
            that is 30% of your capital gone to fees alone.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Maker vs Taker</h3>

          <p className="text-gray-300">
            Maker orders add liquidity to the order book. You place a limit order that waits to be filled.
            Most platforms reward this with lower fees or rebates.
          </p>

          <p className="text-gray-300">
            Taker orders remove liquidity. Market orders execute immediately by taking existing orders from the book.
            This convenience costs more on most platforms.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Beyond Trading Fees</h3>

          <p className="text-gray-300">
            This calculator shows trading fees only. Your total costs also include:
          </p>

          <ul className="text-gray-300 space-y-2">
            <li><strong className="text-white">Funding rates:</strong> Ongoing cost of holding positions</li>
            <li><strong className="text-white">Spread:</strong> Difference between bid and ask prices</li>
            <li><strong className="text-white">Slippage:</strong> Price movement during execution</li>
            <li><strong className="text-white">Gas fees:</strong> Blockchain transaction costs</li>
          </ul>

          <p className="text-gray-300">
            Zero fee platforms still have costs. The spread might be wider. Funding rates might be higher.
            Always consider total cost of trading, not just explicit fees.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {platforms.filter(p => p.features.zeroFees).slice(0, 3).map(platform => (
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
