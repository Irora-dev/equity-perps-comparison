'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';
import { stocks } from '@/data/stocks';

interface PlatformMarketData {
  price: number | null;
  change24h: number | null;
  fundingRate: number | null;
  volume24h: number | null;
}

interface EquityMarketData {
  ticker: string;
  hyperliquid: PlatformMarketData | null;
  lighter: PlatformMarketData | null;
  ostium: PlatformMarketData | null;
}

interface APIResponse {
  success: boolean;
  timestamp: string;
  data: Record<string, EquityMarketData>;
  sources: {
    ostium: number;
    lighter: number;
    hyperliquid: number;
  };
}

// Featured stocks for the conversion section - NVDA and TSLA first
const FEATURED_TICKERS = ['NVDA', 'TSLA', 'AAPL', 'AMZN', 'META', 'GOOGL', 'MSFT', 'COIN'];

function formatPrice(price: number | null): string {
  if (price === null) return '—';
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatChange(change: number | null): { text: string; className: string } {
  if (change === null) return { text: '—', className: 'text-gray-500' };
  const sign = change >= 0 ? '+' : '';
  const className = change >= 0 ? 'text-green-400' : 'text-red-400';
  return { text: `${sign}${change.toFixed(2)}%`, className };
}

function formatFundingRate(rate: number | null): string {
  if (rate === null) return '—';
  // Rate is already in percentage form from API (annual %)
  const sign = rate >= 0 ? '+' : '';
  return `${sign}${rate.toFixed(2)}%`;
}

function getBestVenue(data: EquityMarketData | null): { platform: string; rate: number | null; price: number | null; change24h: number | null } | null {
  if (!data) return null;

  const venues: { platform: string; rate: number | null; price: number | null; change24h: number | null }[] = [];

  if (data.hyperliquid?.price) {
    venues.push({
      platform: 'hyperliquid',
      rate: data.hyperliquid.fundingRate,
      price: data.hyperliquid.price,
      change24h: data.hyperliquid.change24h
    });
  }
  if (data.lighter?.price) {
    venues.push({
      platform: 'lighter',
      rate: data.lighter.fundingRate,
      price: data.lighter.price,
      change24h: data.lighter.change24h
    });
  }
  if (data.ostium?.price) {
    venues.push({
      platform: 'ostium',
      rate: data.ostium.fundingRate,
      price: data.ostium.price,
      change24h: data.ostium.change24h
    });
  }

  if (venues.length === 0) return null;

  // Filter venues with funding rates for comparison
  const venuesWithRates = venues.filter(v => v.rate !== null);

  if (venuesWithRates.length === 0) {
    // Return first available venue if no rates
    return venues[0];
  }

  // Return lowest funding rate (most negative = best for longs)
  return venuesWithRates.reduce((best, curr) =>
    (curr.rate as number) < (best.rate as number) ? curr : best
  );
}

// Get the best price from any platform (for display if best venue doesn't have it)
function getBestPrice(data: EquityMarketData | null): { price: number | null; change24h: number | null } {
  if (!data) return { price: null, change24h: null };

  // Prefer Hyperliquid, then Lighter, then Ostium
  if (data.hyperliquid?.price) {
    return { price: data.hyperliquid.price, change24h: data.hyperliquid.change24h };
  }
  if (data.lighter?.price) {
    return { price: data.lighter.price, change24h: data.lighter.change24h };
  }
  if (data.ostium?.price) {
    return { price: data.ostium.price, change24h: data.ostium.change24h };
  }
  return { price: null, change24h: null };
}

export default function LiveStockRates() {
  const [marketData, setMarketData] = useState<Record<string, EquityMarketData>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchAllData = async () => {
      try {
        const response = await fetch('/api/market-data');
        if (!response.ok) {
          throw new Error('Failed to fetch market data');
        }

        const result: APIResponse = await response.json();

        if (mounted && result.success && result.data) {
          setMarketData(result.data);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching market data:', err);
        if (mounted) {
          setError('Failed to load market data');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchAllData();
    const interval = setInterval(fetchAllData, 30000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const getPlatformInfo = (platformId: string) => {
    return platforms.find(p => p.id === platformId);
  };

  return (
    <section className="py-16 px-4" id="live-rates">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">
            Live Funding Rates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find the cheapest venue to trade each stock. Negative rates mean <span className="text-green-400">you earn</span> while holding long positions.
          </p>
        </div>

        {error && (
          <div className="text-center text-red-400 mb-6">{error}</div>
        )}

        <div className="grid gap-3">
          {/* Header Row */}
          <div className="hidden md:grid md:grid-cols-6 gap-4 px-6 py-3 text-sm text-gray-500 font-medium">
            <div>Stock</div>
            <div>Price</div>
            <div>24h</div>
            <div>Best Venue</div>
            <div>Funding (APR)</div>
            <div></div>
          </div>

          {/* Stock Rows */}
          {FEATURED_TICKERS.map((ticker) => {
            const stock = stocks.find(s => s.ticker === ticker);
            const data = marketData[ticker] || null;
            const bestVenue = getBestVenue(data);
            const platform = bestVenue ? getPlatformInfo(bestVenue.platform) : null;
            const priceData = getBestPrice(data);
            const change = formatChange(priceData.change24h);

            return (
              <div
                key={ticker}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 md:p-6 hover:border-gray-700 transition-colors"
              >
                <div className="grid md:grid-cols-6 gap-4 items-center">
                  {/* Stock Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-sm">
                      {ticker.slice(0, 2)}
                    </div>
                    <div>
                      <Link
                        href={`/stocks/${ticker.toLowerCase()}`}
                        className="text-white font-semibold hover:text-cyan-400 transition-colors"
                      >
                        {ticker}
                      </Link>
                      <p className="text-gray-500 text-sm">{stock?.name || ticker}</p>
                    </div>
                  </div>

                  {/* Live Price */}
                  <div className="md:text-left">
                    <span className="md:hidden text-gray-500 text-sm mr-2">Price:</span>
                    {loading ? (
                      <div className="h-6 w-20 bg-gray-800 rounded animate-pulse" />
                    ) : (
                      <span className="text-white font-medium text-lg">
                        {formatPrice(priceData.price)}
                      </span>
                    )}
                  </div>

                  {/* 24h Change */}
                  <div className="md:text-left">
                    <span className="md:hidden text-gray-500 text-sm mr-2">24h:</span>
                    {loading ? (
                      <div className="h-5 w-16 bg-gray-800 rounded animate-pulse" />
                    ) : (
                      <span className={`font-medium ${change.className}`}>
                        {change.text}
                      </span>
                    )}
                  </div>

                  {/* Best Venue */}
                  <div className="md:text-left">
                    <span className="md:hidden text-gray-500 text-sm mr-2">Best Venue:</span>
                    {loading ? (
                      <div className="h-5 w-24 bg-gray-800 rounded animate-pulse" />
                    ) : platform ? (
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: platform.color }}
                        />
                        <span className="text-white font-medium">{platform.name}</span>
                      </div>
                    ) : (
                      <span className="text-gray-500">—</span>
                    )}
                  </div>

                  {/* Funding Rate */}
                  <div className="md:text-left">
                    <span className="md:hidden text-gray-500 text-sm mr-2">Funding:</span>
                    {loading ? (
                      <div className="h-5 w-20 bg-gray-800 rounded animate-pulse" />
                    ) : bestVenue?.rate !== null && bestVenue?.rate !== undefined ? (
                      <div>
                        <span className={bestVenue.rate < 0 ? 'text-green-400 font-medium' : 'text-yellow-400'}>
                          {formatFundingRate(bestVenue.rate)}
                        </span>
                        {bestVenue.rate < 0 && (
                          <span className="text-green-400/70 text-xs ml-2">Earn</span>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-500">—</span>
                    )}
                  </div>

                  {/* Trade Button */}
                  <div className="md:text-right">
                    {platform ? (
                      <a
                        href={platform.referralUrl}
                        target="_blank"
                        rel="noopener sponsored"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-gray-900 rounded-xl font-semibold hover:bg-cyan-400 transition-colors text-sm"
                      >
                        Trade
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={`/stocks/${ticker.toLowerCase()}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transition-colors text-sm"
                      >
                        View
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See All Stocks CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/stocks"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl font-semibold hover:bg-gray-700 hover:border-gray-600 transition-colors"
          >
            See All 50 Stocks
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
