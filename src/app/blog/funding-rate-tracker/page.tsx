'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

const mockFundingData = [
  { platform: 'Hyperliquid', asset: 'NVDA', rate: 0.0045, direction: 'long pays short', interval: '8h' },
  { platform: 'Hyperliquid', asset: 'TSLA', rate: 0.0078, direction: 'long pays short', interval: '8h' },
  { platform: 'Hyperliquid', asset: 'AAPL', rate: 0.0023, direction: 'long pays short', interval: '8h' },
  { platform: 'Lighter', asset: 'COIN', rate: 0.0034, direction: 'long pays short', interval: '1h' },
  { platform: 'Lighter', asset: 'HOOD', rate: -0.0012, direction: 'short pays long', interval: '1h' },
  { platform: 'Ostium', asset: 'SPY', rate: 0.0056, direction: 'long pays short', interval: '8h' },
  { platform: 'Ostium', asset: 'QQQ', rate: 0.0067, direction: 'long pays short', interval: '8h' },
  { platform: 'Avantis', asset: 'NVDA', rate: 0.0041, direction: 'long pays short', interval: 'continuous' },
  { platform: 'Avantis', asset: 'TSLA', rate: 0.0089, direction: 'long pays short', interval: 'continuous' },
  { platform: 'TradeXYZ', asset: 'XYZ100', rate: 0.0032, direction: 'long pays short', interval: '8h' },
];

export default function FundingRateTracker() {
  const [sortBy, setSortBy] = useState<'rate' | 'platform' | 'asset'>('rate');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');

  const sortedData = [...mockFundingData].sort((a, b) => {
    let comparison = 0;
    if (sortBy === 'rate') {
      comparison = Math.abs(a.rate) - Math.abs(b.rate);
    } else if (sortBy === 'platform') {
      comparison = a.platform.localeCompare(b.platform);
    } else {
      comparison = a.asset.localeCompare(b.asset);
    }
    return sortDir === 'desc' ? -comparison : comparison;
  });

  const handleSort = (column: 'rate' | 'platform' | 'asset') => {
    if (sortBy === column) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDir('desc');
    }
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
            <li className="text-gray-300">Funding Rate Tracker</li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Live Tool</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Funding Rate Tracker
          </h1>
          <p className="text-xl text-gray-400">
            Compare current funding rates across equity perps platforms. Updated regularly.
          </p>
        </header>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-8">
          <p className="text-yellow-200 text-sm">
            <strong>Note:</strong> This data is illustrative. For real time rates, check each platform directly.
            Funding rates change constantly based on market conditions.
          </p>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th
                    className="text-left py-4 px-4 text-gray-400 font-medium cursor-pointer hover:text-white"
                    onClick={() => handleSort('platform')}
                  >
                    Platform {sortBy === 'platform' && (sortDir === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className="text-left py-4 px-4 text-gray-400 font-medium cursor-pointer hover:text-white"
                    onClick={() => handleSort('asset')}
                  >
                    Asset {sortBy === 'asset' && (sortDir === 'asc' ? '↑' : '↓')}
                  </th>
                  <th
                    className="text-right py-4 px-4 text-gray-400 font-medium cursor-pointer hover:text-white"
                    onClick={() => handleSort('rate')}
                  >
                    Rate {sortBy === 'rate' && (sortDir === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Direction</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Interval</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row, i) => (
                  <tr
                    key={`${row.platform}-${row.asset}`}
                    className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}
                  >
                    <td className="py-3 px-4 text-white font-medium">{row.platform}</td>
                    <td className="py-3 px-4 text-gray-300">{row.asset}</td>
                    <td className={`py-3 px-4 text-right font-mono ${row.rate >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {row.rate >= 0 ? '+' : ''}{(row.rate * 100).toFixed(4)}%
                    </td>
                    <td className="py-3 px-4 text-gray-400 text-sm">{row.direction}</td>
                    <td className="py-3 px-4 text-gray-400">{row.interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">Highest Rate</h3>
            <p className="text-2xl font-bold text-green-400">+0.0089%</p>
            <p className="text-gray-500 text-sm">TSLA on Avantis</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">Lowest Rate</h3>
            <p className="text-2xl font-bold text-red-400">-0.0012%</p>
            <p className="text-gray-500 text-sm">HOOD on Lighter</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">Average Rate</h3>
            <p className="text-2xl font-bold text-cyan-400">+0.0045%</p>
            <p className="text-gray-500 text-sm">Across all markets</p>
          </div>
        </div>

        <div className="mt-12 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">How to Use This Data</h2>

          <p className="text-gray-300">
            Funding rates tell you the cost of holding positions. Positive rates mean longs pay shorts.
            Negative rates mean shorts pay longs. High rates signal crowded trades.
          </p>

          <p className="text-gray-300">
            Look for negative rates if you want to earn funding while holding. Watch for rate spikes
            before major announcements as traders position themselves.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Rate Interpretation</h2>

          <ul className="text-gray-300 space-y-2">
            <li><strong className="text-green-400">+0.01% or higher:</strong> Strong long bias. Consider the short side for funding income.</li>
            <li><strong className="text-cyan-400">0% to +0.01%:</strong> Neutral to slightly long. Normal market conditions.</li>
            <li><strong className="text-red-400">Negative rates:</strong> Short bias. Longs get paid to hold positions.</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {platforms.slice(0, 4).map(platform => (
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
