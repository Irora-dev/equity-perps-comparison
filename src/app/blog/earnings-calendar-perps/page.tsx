'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface EarningsEvent {
  ticker: string;
  company: string;
  date: string;
  time: 'BMO' | 'AMC';
  expectedMove: number;
  historicalMoves: number[];
  avgHistoricalMove: number;
  sector: string;
}

const earningsData: EarningsEvent[] = [
  {
    ticker: 'NVDA',
    company: 'NVIDIA Corporation',
    date: '2026-02-26',
    time: 'AMC',
    expectedMove: 8.5,
    historicalMoves: [16.4, 9.3, 24.4, 6.6, 8.5],
    avgHistoricalMove: 13.0,
    sector: 'Technology',
  },
  {
    ticker: 'TSLA',
    company: 'Tesla, Inc.',
    date: '2026-01-29',
    time: 'AMC',
    expectedMove: 7.2,
    historicalMoves: [12.1, 9.8, 5.5, 11.2, 6.3],
    avgHistoricalMove: 9.0,
    sector: 'Consumer Cyclical',
  },
  {
    ticker: 'AAPL',
    company: 'Apple Inc.',
    date: '2026-01-30',
    time: 'AMC',
    expectedMove: 4.1,
    historicalMoves: [4.8, 2.1, 6.4, 3.2, 4.0],
    avgHistoricalMove: 4.1,
    sector: 'Technology',
  },
  {
    ticker: 'META',
    company: 'Meta Platforms, Inc.',
    date: '2026-01-29',
    time: 'AMC',
    expectedMove: 6.8,
    historicalMoves: [20.3, 14.0, 4.1, 3.5, 8.2],
    avgHistoricalMove: 10.0,
    sector: 'Technology',
  },
  {
    ticker: 'MSFT',
    company: 'Microsoft Corporation',
    date: '2026-01-28',
    time: 'AMC',
    expectedMove: 4.5,
    historicalMoves: [6.2, 2.8, 4.1, 5.5, 3.9],
    avgHistoricalMove: 4.5,
    sector: 'Technology',
  },
  {
    ticker: 'GOOGL',
    company: 'Alphabet Inc.',
    date: '2026-02-04',
    time: 'AMC',
    expectedMove: 5.2,
    historicalMoves: [7.5, 9.6, 3.2, 5.8, 4.1],
    avgHistoricalMove: 6.0,
    sector: 'Technology',
  },
  {
    ticker: 'AMD',
    company: 'Advanced Micro Devices',
    date: '2026-02-04',
    time: 'AMC',
    expectedMove: 7.8,
    historicalMoves: [9.2, 12.4, 5.6, 8.1, 10.3],
    avgHistoricalMove: 9.1,
    sector: 'Technology',
  },
  {
    ticker: 'AMZN',
    company: 'Amazon.com, Inc.',
    date: '2026-02-06',
    time: 'AMC',
    expectedMove: 5.5,
    historicalMoves: [3.5, 8.1, 5.2, 6.8, 4.9],
    avgHistoricalMove: 5.7,
    sector: 'Consumer Cyclical',
  },
  {
    ticker: 'NFLX',
    company: 'Netflix, Inc.',
    date: '2026-01-21',
    time: 'AMC',
    expectedMove: 9.2,
    historicalMoves: [8.5, 7.1, 13.1, 10.7, 16.9],
    avgHistoricalMove: 11.3,
    sector: 'Communication',
  },
  {
    ticker: 'COIN',
    company: 'Coinbase Global, Inc.',
    date: '2026-02-13',
    time: 'AMC',
    expectedMove: 11.5,
    historicalMoves: [18.2, 8.9, 14.1, 12.5, 9.8],
    avgHistoricalMove: 12.7,
    sector: 'Financial',
  },
  {
    ticker: 'HOOD',
    company: 'Robinhood Markets, Inc.',
    date: '2026-02-12',
    time: 'AMC',
    expectedMove: 10.8,
    historicalMoves: [15.2, 11.3, 8.7, 13.5, 9.1],
    avgHistoricalMove: 11.6,
    sector: 'Financial',
  },
  {
    ticker: 'PLTR',
    company: 'Palantir Technologies',
    date: '2026-02-03',
    time: 'BMO',
    expectedMove: 8.9,
    historicalMoves: [11.2, 16.8, 7.4, 9.1, 6.5],
    avgHistoricalMove: 10.2,
    sector: 'Technology',
  },
];

const hyperliquidUrl = 'https://app.hyperliquid.xyz/join/COMPAREPERPS';

export default function EarningsCalendarPerps() {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [filterPeriod, setFilterPeriod] = useState<'all' | 'week' | 'month'>('all');
  const [filterStock, setFilterStock] = useState<string>('all');
  const [expandedStrategy, setExpandedStrategy] = useState<string | null>(null);

  const today = new Date('2026-01-04');

  const filteredEarnings = useMemo(() => {
    let filtered = [...earningsData];

    if (filterPeriod === 'week') {
      const weekEnd = new Date(today);
      weekEnd.setDate(weekEnd.getDate() + 7);
      filtered = filtered.filter(e => {
        const date = new Date(e.date);
        return date >= today && date <= weekEnd;
      });
    } else if (filterPeriod === 'month') {
      const monthEnd = new Date(today);
      monthEnd.setMonth(monthEnd.getMonth() + 1);
      filtered = filtered.filter(e => {
        const date = new Date(e.date);
        return date >= today && date <= monthEnd;
      });
    }

    if (filterStock !== 'all') {
      filtered = filtered.filter(e => e.ticker === filterStock);
    }

    return filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [filterPeriod, filterStock]);

  const getWeeksInMonth = () => {
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const weeks: Date[][] = [];
    let currentWeek: Date[] = [];

    const startDayOfWeek = firstDay.getDay();
    for (let i = 0; i < startDayOfWeek; i++) {
      const prevDate = new Date(year, month, 1 - (startDayOfWeek - i));
      currentWeek.push(prevDate);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      currentWeek.push(new Date(year, month, day));
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      const daysToAdd = 7 - currentWeek.length;
      for (let i = 1; i <= daysToAdd; i++) {
        currentWeek.push(new Date(year, month + 1, i));
      }
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const getEarningsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return earningsData.filter(e => e.date === dateStr);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const getDaysUntil = (dateStr: string) => {
    const date = new Date(dateStr);
    const diff = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Tomorrow';
    if (diff < 0) return `${Math.abs(diff)} days ago`;
    return `${diff} days`;
  };

  const strategies = [
    {
      id: 'pre-earnings',
      title: 'Pre-Earnings Positioning',
      description: 'Enter a directional position before earnings based on technical analysis, sentiment, or fundamental thesis.',
      steps: [
        'Analyze recent price action and support/resistance levels',
        'Review analyst estimates and whisper numbers',
        'Check implied volatility vs historical volatility',
        'Enter position 1-3 days before earnings',
        'Set stop loss below key support (for longs) or above resistance (for shorts)',
      ],
      riskLevel: 'High',
      perpAdvantage: 'With perps, you can enter and adjust positions at any time - even Sunday night before Monday earnings.',
    },
    {
      id: 'straddle',
      title: 'Straddle Equivalent with Perps',
      description: 'Simulate options straddle payoff by trading both directions around the expected move.',
      steps: [
        'Calculate expected move from implied volatility',
        'Open a long position with take-profit at +expected move',
        'Open a short position with take-profit at -expected move',
        'Both positions should have stop losses inside the expected move range',
        'Goal: capture the large move regardless of direction',
      ],
      riskLevel: 'Very High',
      perpAdvantage: 'Unlike options, perps have no time decay (theta). Your straddle-like position can remain open indefinitely without losing value to time.',
    },
    {
      id: 'post-earnings',
      title: 'Post-Earnings Momentum',
      description: 'Trade the follow-through after the initial earnings reaction.',
      steps: [
        'Wait for earnings release and initial price reaction',
        'Identify if the move confirms or contradicts expectations',
        'Look for gap-and-go patterns or fade setups',
        'Enter after initial volatility settles (usually 30-60 minutes post-release)',
        'Ride momentum with trailing stops',
      ],
      riskLevel: 'Medium',
      perpAdvantage: 'Trade the reaction IMMEDIATELY when results drop - whether at 4:15 PM ET or 8:00 AM ET. No waiting for market open.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Upcoming Earnings for Equity Perps Trading',
    description: 'Calendar of upcoming earnings events for stocks available as perpetual contracts',
    itemListElement: earningsData.map((event, index) => ({
      '@type': 'Event',
      position: index + 1,
      name: `${event.ticker} Earnings Report`,
      description: `${event.company} Q4 2025 earnings release`,
      startDate: event.date,
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      organizer: {
        '@type': 'Organization',
        name: event.company,
      },
      about: {
        '@type': 'FinancialProduct',
        name: `${event.ticker} Perpetual Contract`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-300">Earnings Calendar</li>
            </ol>
          </nav>

          <header className="mb-12">
            <span className="text-cyan-400 text-sm font-medium">Trading Tool</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
              Earnings Calendar for Equity Perps
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Track upcoming earnings for stocks available as perpetuals. Trade the reaction instantly on Hyperliquid -
              no waiting for market open.
            </p>
          </header>

          {/* Key Advantage Banner */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-2">The Perps Advantage: Trade Instantly</h2>
                <p className="text-gray-300">
                  When NVDA reports earnings at 4:20 PM ET, stock traders must wait until 9:30 AM the next day to react.
                  With equity perps on Hyperliquid, you can trade the move <span className="text-cyan-400 font-semibold">immediately</span> -
                  capturing the full gap instead of buying after it already happened.
                </p>
              </div>
            </div>
          </div>

          {/* Filters and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'list'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  List View
                </span>
              </button>
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'calendar'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Calendar View
                </span>
              </button>
            </div>

            <div className="flex gap-2 flex-wrap">
              <select
                value={filterPeriod}
                onChange={(e) => setFilterPeriod(e.target.value as 'all' | 'week' | 'month')}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Upcoming</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>

              <select
                value={filterStock}
                onChange={(e) => setFilterStock(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="all">All Stocks</option>
                {earningsData.map(e => (
                  <option key={e.ticker} value={e.ticker}>{e.ticker}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Calendar View */}
          {viewMode === 'calendar' && (
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">
                {today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <div className="grid grid-cols-7 gap-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-gray-500 text-sm py-2 font-medium">
                    {day}
                  </div>
                ))}
                {getWeeksInMonth().flat().map((date, i) => {
                  const earnings = getEarningsForDate(date);
                  const isCurrentMonth = date.getMonth() === today.getMonth();
                  const isToday = date.toDateString() === today.toDateString();

                  return (
                    <div
                      key={i}
                      className={`min-h-[80px] p-1 border rounded-lg ${
                        isCurrentMonth ? 'border-gray-800 bg-gray-900/30' : 'border-gray-900 bg-gray-950/50'
                      } ${isToday ? 'ring-2 ring-cyan-500' : ''}`}
                    >
                      <div className={`text-xs ${isCurrentMonth ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                        {date.getDate()}
                      </div>
                      {earnings.map(e => (
                        <div
                          key={e.ticker}
                          className="text-xs bg-cyan-500/20 text-cyan-400 rounded px-1 py-0.5 mb-0.5 truncate"
                          title={`${e.ticker} - ${e.time}`}
                        >
                          {e.ticker} {e.time}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-4 mb-12">
              {filteredEarnings.length === 0 ? (
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
                  <p className="text-gray-400">No earnings found for the selected filters.</p>
                </div>
              ) : (
                filteredEarnings.map((event) => (
                  <div
                    key={`${event.ticker}-${event.date}`}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* Stock Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-white">{event.ticker}</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            event.time === 'BMO'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-purple-500/20 text-purple-400'
                          }`}>
                            {event.time === 'BMO' ? 'Before Market' : 'After Market'}
                          </span>
                          <span className="text-gray-500 text-sm">{event.sector}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{event.company}</p>
                      </div>

                      {/* Date Info */}
                      <div className="text-left lg:text-center">
                        <div className="text-white font-medium">{formatDate(event.date)}</div>
                        <div className="text-cyan-400 text-sm">{getDaysUntil(event.date)}</div>
                      </div>

                      {/* Expected Move */}
                      <div className="bg-gray-800/50 rounded-lg p-3 min-w-[140px]">
                        <div className="text-gray-500 text-xs mb-1">Expected Move</div>
                        <div className="text-2xl font-bold text-cyan-400">
                          +/-{event.expectedMove.toFixed(1)}%
                        </div>
                      </div>

                      {/* Historical Moves */}
                      <div className="bg-gray-800/50 rounded-lg p-3 min-w-[180px]">
                        <div className="text-gray-500 text-xs mb-1">Last 5 Earnings Moves</div>
                        <div className="flex gap-1 items-end h-8">
                          {event.historicalMoves.map((move, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t"
                              style={{ height: `${(move / Math.max(...event.historicalMoves)) * 100}%` }}
                              title={`${move.toFixed(1)}%`}
                            />
                          ))}
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                          Avg: {event.avgHistoricalMove.toFixed(1)}%
                        </div>
                      </div>

                      {/* Trade Button */}
                      <a
                        href={`${hyperliquidUrl}&asset=${event.ticker}`}
                        target="_blank"
                        rel="noopener sponsored"
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors text-center whitespace-nowrap"
                      >
                        Trade on Hyperliquid
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Earnings Trading Strategies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Earnings Trading Strategies with Perps</h2>
            <div className="space-y-4">
              {strategies.map((strategy) => (
                <div
                  key={strategy.id}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedStrategy(expandedStrategy === strategy.id ? null : strategy.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{strategy.title}</h3>
                      <p className="text-gray-400 text-sm">{strategy.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        strategy.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        strategy.riskLevel === 'High' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {strategy.riskLevel} Risk
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedStrategy === strategy.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {expandedStrategy === strategy.id && (
                    <div className="px-6 pb-6 border-t border-gray-800 pt-4">
                      <h4 className="text-white font-medium mb-3">Steps:</h4>
                      <ol className="space-y-2 mb-4">
                        {strategy.steps.map((step, i) => (
                          <li key={i} className="flex gap-3 text-gray-300">
                            <span className="w-6 h-6 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                        <h4 className="text-cyan-400 font-medium mb-1">Perps Advantage:</h4>
                        <p className="text-gray-300 text-sm">{strategy.perpAdvantage}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Why Trade Earnings with Perps */}
          <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Why Trade Earnings with Perps?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">24/7 Trading</h3>
                    <p className="text-gray-400 text-sm">
                      React to earnings the moment they drop - whether at 4 PM, 8 AM, or over the weekend for Monday announcements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Capture the Full Gap</h3>
                    <p className="text-gray-400 text-sm">
                      Stock traders buy at the open price. You can buy at the pre-gap price and capture the entire move.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">No Time Decay</h3>
                    <p className="text-gray-400 text-sm">
                      Unlike options, your perp position does not lose value to theta. Hold through the event without decay.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Lower Capital Requirements</h3>
                    <p className="text-gray-400 text-sm">
                      Trade with leverage (up to 50x on Hyperliquid) instead of buying 100 shares for options coverage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Easy Short Exposure</h3>
                    <p className="text-gray-400 text-sm">
                      Go short instantly with no borrowing fees, hard-to-borrow lists, or broker approval needed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Self-Custody</h3>
                    <p className="text-gray-400 text-sm">
                      Your funds stay in your wallet. No broker risk or account restrictions during volatile earnings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Risk Warning */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
            <div className="flex gap-4">
              <svg className="w-6 h-6 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-yellow-400 font-bold mb-2">Risk Warning</h3>
                <p className="text-yellow-200 text-sm">
                  Earnings events create extreme volatility. Moves of 10-20%+ in either direction are common for growth stocks.
                  With leverage, losses can exceed your initial margin quickly. Never risk more than you can afford to lose.
                  The expected move shown is the market&apos;s estimate - actual moves frequently exceed these expectations.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Trade Earnings?</h2>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Start trading equity perps on Hyperliquid. React to earnings instantly, trade 24/7, and access up to 50x leverage.
            </p>
            <a
              href={hyperliquidUrl}
              target="_blank"
              rel="noopener sponsored"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Trade on Hyperliquid
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Back Link */}
          <div className="mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
