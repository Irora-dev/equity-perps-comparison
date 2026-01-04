'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

interface MarketSession {
  name: string;
  city: string;
  timezone: string;
  open: number; // Hour in UTC
  close: number; // Hour in UTC
  color: string;
  preMarket?: { open: number; close: number };
  afterHours?: { open: number; close: number };
}

const markets: MarketSession[] = [
  {
    name: 'US Market',
    city: 'New York',
    timezone: 'America/New_York',
    open: 14.5, // 9:30 AM ET = 14:30 UTC
    close: 21, // 4:00 PM ET = 21:00 UTC
    color: '#3B82F6',
    preMarket: { open: 9, close: 14.5 }, // 4:00 AM - 9:30 AM ET
    afterHours: { open: 21, close: 25 }, // 4:00 PM - 8:00 PM ET (25 = 1:00 UTC next day)
  },
  {
    name: 'Tokyo Stock Exchange',
    city: 'Tokyo',
    timezone: 'Asia/Tokyo',
    open: 0, // 9:00 AM JST = 00:00 UTC
    close: 6, // 3:00 PM JST = 06:00 UTC (with lunch break)
    color: '#EF4444',
  },
  {
    name: 'Hong Kong Stock Exchange',
    city: 'Hong Kong',
    timezone: 'Asia/Hong_Kong',
    open: 1.5, // 9:30 AM HKT = 01:30 UTC
    close: 8, // 4:00 PM HKT = 08:00 UTC
    color: '#F97316',
  },
  {
    name: 'London Stock Exchange',
    city: 'London',
    timezone: 'Europe/London',
    open: 8, // 8:00 AM GMT = 08:00 UTC
    close: 16.5, // 4:30 PM GMT = 16:30 UTC
    color: '#8B5CF6',
  },
  {
    name: 'Frankfurt Stock Exchange',
    city: 'Frankfurt',
    timezone: 'Europe/Berlin',
    open: 7, // 8:00 AM CET = 07:00 UTC (winter) / 06:00 UTC (summer)
    close: 15.5, // 5:30 PM CET = 16:30 UTC
    color: '#10B981',
  },
];

interface StockSuggestion {
  symbol: string;
  name: string;
  reason: string;
  fundingRate?: string;
  catalyst?: string;
  peakSession: string;
}

const stockSuggestions: StockSuggestion[] = [
  { symbol: 'NVDA', name: 'NVIDIA', reason: 'Highest volume equity perp', peakSession: 'US Regular', fundingRate: '+0.0045%' },
  { symbol: 'TSLA', name: 'Tesla', reason: 'Most volatile, active 24/7', peakSession: 'US Regular', fundingRate: '+0.0078%' },
  { symbol: 'AAPL', name: 'Apple', reason: 'Stable blue chip', peakSession: 'US Regular', fundingRate: '+0.0023%' },
  { symbol: 'MSTR', name: 'MicroStrategy', reason: 'BTC proxy, moves with crypto', peakSession: 'All Sessions', fundingRate: '+0.0089%' },
  { symbol: 'COIN', name: 'Coinbase', reason: 'Crypto exposure, active weekends', peakSession: 'All Sessions', fundingRate: '+0.0034%' },
  { symbol: 'PLTR', name: 'Palantir', reason: 'High retail interest', peakSession: 'US Regular', fundingRate: '+0.0056%' },
  { symbol: 'AMD', name: 'AMD', reason: 'Tech sector exposure', peakSession: 'US Regular', fundingRate: '+0.0041%' },
  { symbol: 'META', name: 'Meta', reason: 'Large cap tech', peakSession: 'US Regular', fundingRate: '+0.0032%' },
  { symbol: 'HOOD', name: 'Robinhood', reason: 'Fintech exposure', peakSession: 'US Regular', fundingRate: '-0.0012%' },
  { symbol: 'GME', name: 'GameStop', reason: 'Meme stock volatility', peakSession: 'US Regular', fundingRate: '+0.0067%' },
];

function getUSSession(utcHour: number): 'pre-market' | 'regular' | 'after-hours' | 'closed' {
  if (utcHour >= 9 && utcHour < 14.5) return 'pre-market';
  if (utcHour >= 14.5 && utcHour < 21) return 'regular';
  if (utcHour >= 21 && utcHour < 25) return 'after-hours';
  if (utcHour >= 0 && utcHour < 1) return 'after-hours'; // Overflow from previous day
  return 'closed';
}

function isMarketOpen(market: MarketSession, utcHour: number): boolean {
  if (market.close > market.open) {
    return utcHour >= market.open && utcHour < market.close;
  } else {
    // Handles markets that span midnight
    return utcHour >= market.open || utcHour < market.close;
  }
}

export default function WhatCanITradeNow() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const utcHour = currentTime.getUTCHours() + currentTime.getUTCMinutes() / 60;
  const usSession = getUSSession(utcHour);

  const getMarketStatus = (market: MarketSession) => {
    if (market.name === 'US Market') {
      return usSession;
    }
    return isMarketOpen(market, utcHour) ? 'open' : 'closed';
  };

  const formatLocalTime = (timezone: string) => {
    if (!mounted) return '--:--:--';
    return currentTime.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const getTimeUntilOpen = (market: MarketSession): string => {
    const openHour = market.open;
    let hoursUntil = openHour - utcHour;
    if (hoursUntil < 0) hoursUntil += 24;
    const hours = Math.floor(hoursUntil);
    const minutes = Math.floor((hoursUntil - hours) * 60);
    return `${hours}h ${minutes}m`;
  };

  const getTimeUntilClose = (market: MarketSession): string => {
    let closeHour = market.close;
    if (closeHour > 24) closeHour -= 24;
    let hoursUntil = closeHour - utcHour;
    if (hoursUntil < 0) hoursUntil += 24;
    const hours = Math.floor(hoursUntil);
    const minutes = Math.floor((hoursUntil - hours) * 60);
    return `${hours}h ${minutes}m`;
  };

  const openMarkets = markets.filter(m => {
    const status = getMarketStatus(m);
    return status === 'open' || status === 'regular' || status === 'pre-market' || status === 'after-hours';
  });

  const getSuggestedStocks = () => {
    if (usSession === 'regular') {
      return stockSuggestions.slice(0, 6);
    }
    // During off-hours, suggest crypto-correlated stocks and those with high funding rates
    return stockSuggestions.filter(s =>
      s.peakSession === 'All Sessions' ||
      (s.fundingRate && parseFloat(s.fundingRate) > 0.005)
    ).concat(stockSuggestions.filter(s => s.symbol === 'NVDA' || s.symbol === 'TSLA')).slice(0, 6);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'What Can I Trade Right Now?',
    description: 'Live market hours tool showing which markets are open and suggesting stocks to trade on equity perpetuals platforms.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Live market hours for US, Asia, and Europe',
      'Real-time clock updates',
      '24/7 equity perpetuals availability',
      'Stock suggestions based on current market session',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-300">What Can I Trade Now?</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <span className="text-cyan-400 text-sm font-medium">Live Tool</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
              What Can I Trade Right Now?
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See which markets are open, closed, or in extended hours. Find trading opportunities 24/7.
            </p>
          </header>

          {/* Live Clock Display */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8 mb-8 text-center">
            <div className="text-gray-400 text-sm mb-2">Current Time (UTC)</div>
            <div className="text-5xl sm:text-6xl font-mono font-bold text-white mb-4">
              {mounted ? currentTime.toUTCString().slice(17, 25) : '--:--:--'}
            </div>
            <div className="text-gray-400">
              {mounted ? currentTime.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC'
              }) : 'Loading...'}
            </div>
          </div>

          {/* Equity Perps Highlight */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-green-400 mb-2">
                  Equity Perpetuals: Always Available 24/7
                </h2>
                <p className="text-gray-300">
                  Unlike traditional markets, equity perps on Hyperliquid, Lighter, and other platforms trade
                  continuously. Trade NVDA, TSLA, AAPL anytime - even at 3 AM on a Sunday. Market hours are
                  irrelevant when you use decentralized perpetuals.
                </p>
              </div>
            </div>
          </div>

          {/* Market Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* US Market Card - Special Treatment */}
            <div className="md:col-span-2 lg:col-span-1 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3B82F6' }} />
                  <h3 className="text-lg font-bold text-white">US Market</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  usSession === 'regular' ? 'bg-green-500/20 text-green-400' :
                  usSession === 'pre-market' ? 'bg-yellow-500/20 text-yellow-400' :
                  usSession === 'after-hours' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {usSession === 'regular' ? 'OPEN' :
                   usSession === 'pre-market' ? 'PRE-MARKET' :
                   usSession === 'after-hours' ? 'AFTER-HOURS' :
                   'CLOSED'}
                </span>
              </div>

              <div className="text-2xl font-mono text-white mb-2">
                {formatLocalTime('America/New_York')}
              </div>
              <div className="text-gray-500 text-sm mb-4">New York (ET)</div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Pre-Market</span>
                  <span className="text-gray-300">4:00 AM - 9:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Regular Session</span>
                  <span className="text-gray-300">9:30 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">After-Hours</span>
                  <span className="text-gray-300">4:00 PM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Other Markets */}
            {markets.filter(m => m.name !== 'US Market').map((market) => {
              const status = getMarketStatus(market);
              const isOpen = status === 'open';

              return (
                <div
                  key={market.name}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: market.color }} />
                      <h3 className="text-lg font-bold text-white">{market.city}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isOpen ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {isOpen ? 'OPEN' : 'CLOSED'}
                    </span>
                  </div>

                  <div className="text-2xl font-mono text-white mb-2">
                    {formatLocalTime(market.timezone)}
                  </div>
                  <div className="text-gray-500 text-sm mb-3">{market.name}</div>

                  <div className="text-sm">
                    {isOpen ? (
                      <span className="text-green-400">Closes in {getTimeUntilClose(market)}</span>
                    ) : (
                      <span className="text-gray-400">Opens in {getTimeUntilOpen(market)}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 24-Hour Timeline Visualization */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-6">24-Hour Market Timeline (UTC)</h2>

            <div className="relative">
              {/* Time markers */}
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                {[0, 4, 8, 12, 16, 20, 24].map(hour => (
                  <span key={hour}>{hour.toString().padStart(2, '0')}:00</span>
                ))}
              </div>

              {/* Timeline bars */}
              <div className="space-y-3">
                {/* Current time indicator */}
                <div className="relative h-1 bg-gray-800 rounded">
                  <div
                    className="absolute top-0 w-0.5 h-4 -mt-1.5 bg-white z-10"
                    style={{ left: `${(utcHour / 24) * 100}%` }}
                  />
                </div>

                {markets.map((market) => (
                  <div key={market.name} className="relative">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-gray-400 w-20">{market.city}</span>
                      <div className="flex-1 h-6 bg-gray-800 rounded relative overflow-hidden">
                        {/* Main session */}
                        <div
                          className="absolute top-0 h-full opacity-80 rounded"
                          style={{
                            backgroundColor: market.color,
                            left: `${(market.open / 24) * 100}%`,
                            width: `${((market.close > market.open ? market.close - market.open : 24 - market.open + market.close) / 24) * 100}%`,
                          }}
                        />
                        {/* Pre-market for US */}
                        {market.preMarket && (
                          <div
                            className="absolute top-0 h-full opacity-40 rounded"
                            style={{
                              backgroundColor: market.color,
                              left: `${(market.preMarket.open / 24) * 100}%`,
                              width: `${((market.preMarket.close - market.preMarket.open) / 24) * 100}%`,
                            }}
                          />
                        )}
                        {/* After-hours for US */}
                        {market.afterHours && (
                          <div
                            className="absolute top-0 h-full opacity-40 rounded"
                            style={{
                              backgroundColor: market.color,
                              left: `${(market.afterHours.open / 24) * 100}%`,
                              width: `${((24 - market.afterHours.open + (market.afterHours.close > 24 ? market.afterHours.close - 24 : market.afterHours.close)) / 24) * 100}%`,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Equity Perps - 24/7 */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs text-cyan-400 w-20">Equity Perps</span>
                    <div className="flex-1 h-6 bg-gradient-to-r from-cyan-500/60 to-cyan-400/60 rounded relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-medium text-white">24/7 AVAILABLE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-blue-500 opacity-80 rounded" />
                  <span className="text-gray-400">Regular Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-blue-500 opacity-40 rounded" />
                  <span className="text-gray-400">Extended Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-0.5 h-4 bg-white rounded" />
                  <span className="text-gray-400">Current Time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Suggested Stocks */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white">
                {usSession === 'regular' ? 'Top Volume Stocks Right Now' : 'Best Stocks to Trade Off-Hours'}
              </h2>
              <span className="text-sm text-gray-500">
                {usSession === 'regular'
                  ? 'Highest liquidity during regular session'
                  : 'Crypto-correlated & high funding rate opportunities'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getSuggestedStocks().map((stock) => (
                <div
                  key={stock.symbol}
                  className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-white">{stock.symbol}</span>
                    {stock.fundingRate && (
                      <span className={`text-xs font-mono ${
                        stock.fundingRate.startsWith('-') ? 'text-red-400' : 'text-green-400'
                      }`}>
                        {stock.fundingRate}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400 mb-2">{stock.name}</div>
                  <div className="text-xs text-gray-500">{stock.reason}</div>

                  <a
                    href={`https://app.hyperliquid.xyz/trade/${stock.symbol}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block w-full py-2 bg-cyan-500/20 text-cyan-400 text-center text-sm rounded-lg hover:bg-cyan-500/30 transition-colors"
                  >
                    Trade {stock.symbol}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* When Markets Are Closed */}
          {(usSession === 'closed' || usSession === 'after-hours') && (
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">US Market Closed? Here is What to Watch</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-purple-400 mb-3">High Funding Rate Opportunities</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    When markets are closed, funding rates can diverge. Look for stocks with elevated
                    funding rates - you can earn by taking the opposite side of crowded trades.
                  </p>
                  <ul className="space-y-2">
                    {stockSuggestions.filter(s => s.fundingRate && parseFloat(s.fundingRate) > 0.005).slice(0, 3).map(stock => (
                      <li key={stock.symbol} className="flex items-center justify-between text-sm">
                        <span className="text-white">{stock.symbol}</span>
                        <span className="text-green-400 font-mono">{stock.fundingRate}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-pink-400 mb-3">Crypto-Correlated Stocks</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    These stocks move with crypto markets, making them active even when traditional
                    markets are closed. Perfect for weekend trading.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-white">MSTR</span>
                      <span className="text-gray-400">BTC Treasury Proxy</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-white">COIN</span>
                      <span className="text-gray-400">Crypto Exchange</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-white">HOOD</span>
                      <span className="text-gray-400">Retail Crypto Exposure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Platform CTAs */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">Start Trading 24/7</h2>
            <p className="text-gray-400 mb-6">
              These platforms offer equity perpetuals that trade around the clock, regardless of market hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {platforms.filter(p => p.features.trading24_7 && p.features.usStockPerps).slice(0, 4).map(platform => (
                <a
                  key={platform.id}
                  href={platform.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="flex flex-col items-center p-4 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
                  style={{ backgroundColor: `${platform.color}10` }}
                >
                  <span className="font-bold text-white mb-1">{platform.name}</span>
                  <span className="text-xs text-gray-400 text-center">
                    {platform.maxLeverage} leverage
                  </span>
                  <span
                    className="mt-2 text-xs font-medium px-2 py-1 rounded"
                    style={{ backgroundColor: platform.color, color: 'white' }}
                  >
                    Trade Now
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Educational Content */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">Why Trade Outside Market Hours?</h2>

            <p className="text-gray-300">
              Traditional stock markets operate on fixed schedules. The NYSE opens at 9:30 AM and closes
              at 4:00 PM Eastern Time, Monday through Friday. But news does not follow this schedule.
              Earnings reports, geopolitical events, and market-moving announcements happen 24/7.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">The Equity Perps Advantage</h3>

            <p className="text-gray-300">
              Equity perpetuals on decentralized platforms like Hyperliquid solve this problem. They track
              stock prices using oracle feeds and trade continuously. When Tesla announces a recall at
              6 PM or NVIDIA drops AI news over the weekend, you can react immediately.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">Best Times to Trade</h3>

            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">US Regular Hours (9:30 AM - 4:00 PM ET):</strong> Highest liquidity, tightest spreads, most volume</li>
              <li><strong className="text-white">Pre-Market (4:00 AM - 9:30 AM ET):</strong> React to overnight news, earnings releases</li>
              <li><strong className="text-white">After-Hours (4:00 PM - 8:00 PM ET):</strong> Trade on post-market earnings, announcements</li>
              <li><strong className="text-white">Weekends:</strong> Lower volume but still tradeable. Crypto-correlated stocks see more action</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">Weekend Trading Strategy</h3>

            <p className="text-gray-300">
              During weekends, focus on stocks correlated with cryptocurrency markets: MSTR, COIN, and HOOD.
              These assets see price action when Bitcoin moves, making them ideal for weekend trading.
              You can also look for funding rate arbitrage opportunities when positions become imbalanced.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog/trade-stocks-after-hours"
              className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
            >
              After Hours Trading Guide
            </Link>
            <Link
              href="/blog/weekend-stock-trading"
              className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
            >
              Weekend Trading Guide
            </Link>
            <Link
              href="/blog/funding-rate-tracker"
              className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
            >
              Funding Rate Tracker
            </Link>
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
    </>
  );
}
