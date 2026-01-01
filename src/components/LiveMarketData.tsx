'use client';

import { useEffect, useState } from 'react';
import { platforms } from '@/data/platforms';
import {
  fetchEquityMarketData,
  formatCurrency,
  formatPriceChange,
  formatFundingRate,
  formatVolume,
  type EquityMarketData,
  type PlatformMarketData,
} from '@/lib/api';

interface LiveMarketDataProps {
  ticker: string;
  showDetailed?: boolean;
}

// Platform info for trade buttons
const platformInfo: Record<string, { name: string; color: string; referralUrl: string }> = {
  ostium: {
    name: 'Ostium',
    color: '#10B981',
    referralUrl: platforms.find(p => p.id === 'ostium')?.referralUrl || 'https://ostium.com',
  },
  lighter: {
    name: 'Lighter',
    color: '#6366F1',
    referralUrl: platforms.find(p => p.id === 'lighter')?.referralUrl || 'https://lighter.xyz',
  },
  hyperliquid: {
    name: 'Hyperliquid',
    color: '#3EEFC1',
    referralUrl: platforms.find(p => p.id === 'hyperliquid')?.referralUrl || 'https://hyperliquid.xyz',
  },
};

// Get lowest funding rate platform from market data
function getLowestFundingPlatform(data: EquityMarketData | null): { platform: string; rate: number } | null {
  if (!data) return null;

  const rates: { platform: string; rate: number }[] = [];

  if (data.lighter?.fundingRate !== null && data.lighter?.fundingRate !== undefined) {
    rates.push({ platform: 'lighter', rate: data.lighter.fundingRate });
  }
  if (data.hyperliquid?.fundingRate !== null && data.hyperliquid?.fundingRate !== undefined) {
    rates.push({ platform: 'hyperliquid', rate: data.hyperliquid.fundingRate });
  }
  // Note: Ostium doesn't provide public funding rate data

  if (rates.length === 0) return null;

  // Find lowest funding rate (most negative = best for longs, you earn funding)
  return rates.reduce((best, curr) =>
    curr.rate < best.rate ? curr : best
  );
}

interface PlatformDataRowProps {
  name: string;
  color: string;
  data: PlatformMarketData | null;
  loading: boolean;
}

function PlatformDataRow({ name, color, data, loading }: PlatformDataRowProps) {
  if (loading) {
    return (
      <div className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0 animate-pulse">
        <span className="font-medium" style={{ color }}>{name}</span>
        <div className="flex gap-4">
          <div className="h-4 w-20 bg-gray-700 rounded"></div>
          <div className="h-4 w-16 bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0">
        <span className="font-medium" style={{ color }}>{name}</span>
        <span className="text-gray-500 text-sm">Not available</span>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0">
      <span className="font-medium" style={{ color }}>{name}</span>
      <div className="flex gap-6 text-right">
        <div>
          <p className="text-xs text-gray-500">Price</p>
          <p className="text-white font-mono">{formatCurrency(data.price)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">24h</p>
          <p className={`font-mono ${data.change24h !== null && data.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {formatPriceChange(data.change24h)}
          </p>
        </div>
        {data.fundingRate !== null && (
          <div>
            <p className="text-xs text-gray-500">Funding</p>
            <p className={`font-mono ${data.fundingRate >= 0 ? 'text-cyan-400' : 'text-yellow-400'}`}>
              {formatFundingRate(data.fundingRate)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LiveMarketData({ ticker, showDetailed = false }: LiveMarketDataProps) {
  const [data, setData] = useState<EquityMarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const result = await fetchEquityMarketData(ticker);
        if (mounted) {
          setData(result);
          setLastUpdate(new Date());
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to fetch live data');
          setLoading(false);
        }
      }
    }

    fetchData();

    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [ticker]);

  // Get the best available price (preferring Ostium > Lighter > Hyperliquid)
  const bestPrice = data?.ostium?.price ?? data?.lighter?.price ?? data?.hyperliquid?.price ?? null;
  const bestChange = data?.ostium?.change24h ?? data?.hyperliquid?.change24h ?? null;

  if (error && !data) {
    return (
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
        <p className="text-gray-500 text-sm text-center">{error}</p>
      </div>
    );
  }

  // Compact view - just show price and change
  if (!showDetailed) {
    return (
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-xs mb-1">Live Price</p>
            {loading ? (
              <div className="h-7 w-24 bg-gray-700 rounded animate-pulse"></div>
            ) : (
              <p className="text-white font-bold text-2xl font-mono">{formatCurrency(bestPrice)}</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-xs mb-1">24h Change</p>
            {loading ? (
              <div className="h-6 w-16 bg-gray-700 rounded animate-pulse"></div>
            ) : (
              <p className={`font-bold text-lg font-mono ${bestChange !== null && bestChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {formatPriceChange(bestChange)}
              </p>
            )}
          </div>
        </div>
        {lastUpdate && (
          <p className="text-gray-600 text-xs mt-2">
            Updated {lastUpdate.toLocaleTimeString()}
          </p>
        )}
      </div>
    );
  }

  // Detailed view - show all platform data
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-800 bg-gray-900/50">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Live Market Data
          </h3>
          {lastUpdate && (
            <p className="text-gray-500 text-xs">
              Updated {lastUpdate.toLocaleTimeString()}
            </p>
          )}
        </div>
      </div>

      <div className="p-4">
        <PlatformDataRow
          name="Ostium"
          color="#10B981"
          data={data?.ostium ?? null}
          loading={loading}
        />
        <PlatformDataRow
          name="Lighter"
          color="#6366F1"
          data={data?.lighter ?? null}
          loading={loading}
        />
        <PlatformDataRow
          name="Hyperliquid"
          color="#3EEFC1"
          data={data?.hyperliquid ?? null}
          loading={loading}
        />
      </div>

      {/* Trade Button based on best funding rate */}
      {data && (() => {
        const bestFunding = getLowestFundingPlatform(data);
        if (!bestFunding) return null;
        const info = platformInfo[bestFunding.platform];
        if (!info) return null;

        return (
          <div className="px-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Best Funding Rate</p>
                <p className="text-white font-medium">
                  <span style={{ color: info.color }}>{info.name}</span>
                  <span className="text-gray-500 ml-2">
                    ({formatFundingRate(bestFunding.rate)})
                  </span>
                </p>
              </div>
              <a
                href={info.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-all hover:scale-105"
                style={{ backgroundColor: info.color }}
              >
                Trade on {info.name}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        );
      })()}

      {data && (data.ostium || data.lighter || data.hyperliquid) && (
        <div className="px-4 pb-4">
          <p className="text-gray-600 text-xs">
            Data sourced from platform APIs. Prices may vary slightly between platforms.
          </p>
        </div>
      )}
    </div>
  );
}

// Quick price badge for use in headers
export function LivePriceBadge({ ticker }: { ticker: string }) {
  const [price, setPrice] = useState<number | null>(null);
  const [change, setChange] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const result = await fetchEquityMarketData(ticker);
        if (mounted) {
          setPrice(result.ostium?.price || result.lighter?.price || result.hyperliquid?.price || null);
          setChange(result.ostium?.change24h || result.hyperliquid?.change24h || null);
          setLoading(false);
        }
      } catch {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [ticker]);

  if (loading) {
    return (
      <span className="inline-flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-xs animate-pulse">
        <span className="w-12 h-3 bg-gray-700 rounded"></span>
      </span>
    );
  }

  if (!price) return null;

  return (
    <span className="inline-flex items-center gap-2 bg-gray-800 px-3 py-1 rounded text-sm">
      <span className="text-white font-mono font-medium">{formatCurrency(price)}</span>
      {change !== null && (
        <span className={`font-mono ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {formatPriceChange(change)}
        </span>
      )}
    </span>
  );
}
