'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { stocks, type StockData } from '@/data/stocks';
import { platforms } from '@/data/platforms';
import {
  fetchAllEquitiesData,
  formatCurrency,
  formatPriceChange,
  formatFundingRate,
  type EquityMarketData,
} from '@/lib/api';

type SortField = 'ticker' | 'name' | 'price' | 'change' | 'funding' | 'sector';
type SortDirection = 'asc' | 'desc';

const volatilityColors = {
  'low': 'text-green-400',
  'medium': 'text-yellow-400',
  'high': 'text-orange-400',
  'very-high': 'text-red-400',
};

// Platform colors and referral URLs
const platformInfo: Record<string, { name: string; color: string; referralUrl: string }> = {
  ostium: {
    name: 'Ostium',
    color: '#06b6d4', // cyan
    referralUrl: platforms.find(p => p.id === 'ostium')?.referralUrl || 'https://ostium.com',
  },
  lighter: {
    name: 'Lighter',
    color: '#818cf8', // indigo
    referralUrl: platforms.find(p => p.id === 'lighter')?.referralUrl || 'https://lighter.xyz',
  },
  hyperliquid: {
    name: 'Hyperliquid',
    color: '#34d399', // emerald
    referralUrl: platforms.find(p => p.id === 'hyperliquid')?.referralUrl || 'https://hyperliquid.xyz',
  },
};

export default function StockHub() {
  const [marketData, setMarketData] = useState<Map<string, EquityMarketData>>(new Map());
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<SortField>('ticker');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [selectedSector, setSelectedSector] = useState<string>('all');

  // Fetch live market data
  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const data = await fetchAllEquitiesData();
        if (mounted) {
          setMarketData(data);
          setLastUpdate(new Date());
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch market data:', error);
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh every 30 seconds

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  // Get unique sectors
  const sectors = useMemo(() => {
    const sectorSet = new Set(stocks.map(s => s.sector));
    return ['all', ...Array.from(sectorSet).sort()];
  }, []);

  // Get price and change for a stock
  const getStockPrice = (ticker: string) => {
    const data = marketData.get(ticker);
    return data?.ostium?.price ?? data?.lighter?.price ?? data?.hyperliquid?.price ?? null;
  };

  const getStockChange = (ticker: string) => {
    const data = marketData.get(ticker);
    return data?.ostium?.change24h ?? data?.lighter?.change24h ?? data?.hyperliquid?.change24h ?? null;
  };

  // Get lowest funding rate and platform for a stock
  const getLowestFundingRate = (ticker: string): { rate: number | null; platform: string | null } => {
    const data = marketData.get(ticker);
    if (!data) return { rate: null, platform: null };

    const rates: { platform: string; rate: number }[] = [];

    if (data.lighter?.fundingRate !== null && data.lighter?.fundingRate !== undefined) {
      rates.push({ platform: 'lighter', rate: data.lighter.fundingRate });
    }
    if (data.hyperliquid?.fundingRate !== null && data.hyperliquid?.fundingRate !== undefined) {
      rates.push({ platform: 'hyperliquid', rate: data.hyperliquid.fundingRate });
    }
    // Ostium uses rollover fees instead of funding - not available via API

    if (rates.length === 0) return { rate: null, platform: null };

    // Find the lowest (or least negative) funding rate
    const lowest = rates.reduce((min, curr) =>
      Math.abs(curr.rate) < Math.abs(min.rate) ? curr : min
    );

    return { rate: lowest.rate, platform: lowest.platform };
  };

  // Check if stock has price on all platforms
  const hasAllPlatformPrices = (ticker: string) => {
    const data = marketData.get(ticker);
    if (!data) return false;
    const ostiumPrice = data.ostium?.price;
    const lighterPrice = data.lighter?.price;
    const hyperliquidPrice = data.hyperliquid?.price;
    return ostiumPrice !== null && lighterPrice !== null && hyperliquidPrice !== null;
  };

  // Check if stock has any price data
  const hasAnyPrice = (ticker: string) => {
    const data = marketData.get(ticker);
    if (!data) return false;
    return data.ostium?.price !== null || data.lighter?.price !== null || data.hyperliquid?.price !== null;
  };

  // Filter and sort stocks
  const filteredStocks = useMemo(() => {
    let result = [...stocks];

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        s =>
          s.ticker.toLowerCase().includes(query) ||
          s.name.toLowerCase().includes(query) ||
          s.sector.toLowerCase().includes(query)
      );
    }

    // Filter by sector
    if (selectedSector !== 'all') {
      result = result.filter(s => s.sector === selectedSector);
    }

    // Sort with priority: stocks with all platform prices first, then partial, then unavailable
    if (!loading) {
      result.sort((a, b) => {
        const aHasAll = hasAllPlatformPrices(a.ticker);
        const bHasAll = hasAllPlatformPrices(b.ticker);
        const aHasAny = hasAnyPrice(a.ticker);
        const bHasAny = hasAnyPrice(b.ticker);

        // Priority: all prices > some prices > no prices
        if (aHasAll && !bHasAll) return -1;
        if (!aHasAll && bHasAll) return 1;
        if (aHasAny && !bHasAny) return -1;
        if (!aHasAny && bHasAny) return 1;

        // Within same category, sort by selected field
        let comparison = 0;
        switch (sortField) {
          case 'ticker':
            comparison = a.ticker.localeCompare(b.ticker);
            break;
          case 'name':
            comparison = a.name.localeCompare(b.name);
            break;
          case 'price':
            const priceA = getStockPrice(a.ticker) ?? 0;
            const priceB = getStockPrice(b.ticker) ?? 0;
            comparison = priceA - priceB;
            break;
          case 'change':
            const changeA = getStockChange(a.ticker) ?? 0;
            const changeB = getStockChange(b.ticker) ?? 0;
            comparison = changeA - changeB;
            break;
          case 'funding':
            const fundingA = getLowestFundingRate(a.ticker).rate ?? 999;
            const fundingB = getLowestFundingRate(b.ticker).rate ?? 999;
            comparison = Math.abs(fundingA) - Math.abs(fundingB);
            break;
          case 'sector':
            comparison = a.sector.localeCompare(b.sector);
            break;
        }
        return sortDirection === 'asc' ? comparison : -comparison;
      });
    }

    return result;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stocks, searchQuery, selectedSector, sortField, sortDirection, marketData, loading]);

  // Handle sort click
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Sort indicator
  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return (
      <svg
        className={`w-4 h-4 inline-block ml-1 ${sortDirection === 'desc' ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    );
  };

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Stock <span className="text-cyan-400">Hub</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time prices and funding rates for equity perpetuals - trade on the platform with the lowest fees
          </p>
        </div>

        {/* Live Status Bar */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-sm font-medium">Live Data</span>
              </span>
              {lastUpdate && (
                <span className="text-gray-500 text-sm">
                  Updated {lastUpdate.toLocaleTimeString()}
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-400">
                Sources: <span className="text-cyan-400">Ostium</span>, <span className="text-indigo-400">Lighter</span>, <span className="text-emerald-400">Hyperliquid</span>
              </span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search stocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Sector Filter */}
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-cyan-500"
          >
            {sectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector === 'all' ? 'All Sectors' : sector}
              </option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <p className="text-gray-500 text-sm mb-4">
          Showing {filteredStocks.length} of {stocks.length} stocks
        </p>

        {/* Stock Table */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-900/50">
                  <th
                    onClick={() => handleSort('ticker')}
                    className="text-left py-4 px-3 text-gray-400 font-medium cursor-pointer hover:text-white transition-colors"
                  >
                    Ticker <SortIcon field="ticker" />
                  </th>
                  <th
                    onClick={() => handleSort('name')}
                    className="text-left py-4 px-3 text-gray-400 font-medium cursor-pointer hover:text-white transition-colors hidden sm:table-cell"
                  >
                    Name <SortIcon field="name" />
                  </th>
                  <th
                    onClick={() => handleSort('price')}
                    className="text-right py-4 px-3 text-gray-400 font-medium cursor-pointer hover:text-white transition-colors"
                  >
                    Price <SortIcon field="price" />
                  </th>
                  <th
                    onClick={() => handleSort('change')}
                    className="text-right py-4 px-3 text-gray-400 font-medium cursor-pointer hover:text-white transition-colors hidden md:table-cell"
                  >
                    24h <SortIcon field="change" />
                  </th>
                  <th
                    onClick={() => handleSort('funding')}
                    className="text-right py-4 px-3 text-gray-400 font-medium cursor-pointer hover:text-white transition-colors"
                  >
                    Best Funding <SortIcon field="funding" />
                  </th>
                  <th
                    onClick={() => handleSort('sector')}
                    className="text-left py-4 px-3 text-gray-400 font-medium cursor-pointer hover:text-white transition-colors hidden lg:table-cell"
                  >
                    Sector <SortIcon field="sector" />
                  </th>
                  <th className="text-right py-4 px-3 text-gray-400 font-medium">
                    Trade
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStocks.map((stock, index) => {
                  const price = getStockPrice(stock.ticker);
                  const change = getStockChange(stock.ticker);
                  const { rate: fundingRate, platform: bestPlatform } = getLowestFundingRate(stock.ticker);
                  const hasPrice = hasAnyPrice(stock.ticker);
                  const hasAllPrices = hasAllPlatformPrices(stock.ticker);

                  return (
                    <tr
                      key={stock.ticker}
                      className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors ${
                        index % 2 === 0 ? 'bg-gray-900/20' : ''
                      } ${!hasPrice ? 'opacity-50' : ''}`}
                    >
                      <td className="py-3 px-3">
                        <Link
                          href={`/blog/${stock.slug}`}
                          className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {stock.ticker}
                        </Link>
                      </td>
                      <td className="py-3 px-3 text-white hidden sm:table-cell">
                        <Link href={`/blog/${stock.slug}`} className="hover:text-cyan-400 transition-colors">
                          {stock.name}
                        </Link>
                      </td>
                      <td className="py-3 px-3 text-right">
                        {loading ? (
                          <div className="h-5 w-20 bg-gray-700 rounded animate-pulse ml-auto"></div>
                        ) : (
                          <span className="font-mono text-white">
                            {price ? formatCurrency(price) : '—'}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right hidden md:table-cell">
                        {loading ? (
                          <div className="h-5 w-16 bg-gray-700 rounded animate-pulse ml-auto"></div>
                        ) : (
                          <span
                            className={`font-mono ${
                              change !== null
                                ? change >= 0
                                  ? 'text-green-400'
                                  : 'text-red-400'
                                : 'text-gray-500'
                            }`}
                          >
                            {change !== null ? formatPriceChange(change) : '—'}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-right">
                        {loading ? (
                          <div className="h-5 w-20 bg-gray-700 rounded animate-pulse ml-auto"></div>
                        ) : fundingRate !== null && bestPlatform ? (
                          <span className="font-mono text-sm" style={{ color: platformInfo[bestPlatform]?.color }}>
                            {formatFundingRate(fundingRate)}
                          </span>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-gray-400 text-sm hidden lg:table-cell">
                        {stock.sector}
                      </td>
                      <td className="py-3 px-3 text-right">
                        {bestPlatform && hasAllPrices ? (
                          <a
                            href={platformInfo[bestPlatform]?.referralUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105"
                            style={{
                              backgroundColor: `${platformInfo[bestPlatform]?.color}20`,
                              color: platformInfo[bestPlatform]?.color,
                              borderColor: platformInfo[bestPlatform]?.color,
                              borderWidth: '1px',
                            }}
                          >
                            Trade on {platformInfo[bestPlatform]?.name}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : hasPrice ? (
                          <Link
                            href={`/blog/${stock.slug}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 text-gray-400 hover:bg-gray-700 transition-colors"
                          >
                            View Details
                          </Link>
                        ) : (
                          <span className="text-gray-600 text-xs">Coming Soon</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
            <p className="text-gray-500 text-xs mb-1">Total Stocks</p>
            <p className="text-white font-bold text-2xl">{stocks.length}</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
            <p className="text-gray-500 text-xs mb-1">With Live Data</p>
            <p className="text-green-400 font-bold text-2xl">
              {!loading ? filteredStocks.filter(s => hasAllPlatformPrices(s.ticker)).length : '—'}
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
            <p className="text-gray-500 text-xs mb-1">Sectors</p>
            <p className="text-white font-bold text-2xl">{sectors.length - 1}</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
            <p className="text-gray-500 text-xs mb-1">Platforms</p>
            <p className="text-cyan-400 font-bold text-2xl">3</p>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 p-4 bg-gray-900/30 border border-gray-800 rounded-xl">
          <h3 className="text-white font-semibold mb-3">Platform Guide</h3>
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: platformInfo.ostium.color }}></span>
              <span className="text-gray-400">Ostium</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: platformInfo.lighter.color }}></span>
              <span className="text-gray-400">Lighter</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: platformInfo.hyperliquid.color }}></span>
              <span className="text-gray-400">Hyperliquid</span>
            </span>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Funding rates shown are annualized. The &quot;Trade&quot; button links to the platform with the lowest funding rate for each stock.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Click on any stock to view detailed trading information, platform comparison, and tips.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Compare Platforms
          </Link>
        </div>
      </div>
    </main>
  );
}
