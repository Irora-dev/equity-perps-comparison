// API utilities for fetching live market data from equity perps platforms

export interface PlatformMarketData {
  price: number | null;
  fundingRate: number | null;
  volume24h: number | null;
  change24h: number | null;
}

export interface EquityMarketData {
  ticker: string;
  hyperliquid: PlatformMarketData | null;
  ostium: PlatformMarketData | null;
  lighter: PlatformMarketData | null;
}

interface ApiResponse {
  success: boolean;
  timestamp: string;
  data: Record<string, EquityMarketData>;
  sources: {
    ostium: number;
    lighter: number;
    hyperliquid: number;
  };
}

// Cache for market data
let cachedData: Map<string, EquityMarketData> | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 15000; // 15 seconds

// Fetch all market data from our API route
export async function fetchAllEquitiesData(): Promise<Map<string, EquityMarketData>> {
  // Return cached data if fresh
  if (cachedData && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return cachedData;
  }

  try {
    const response = await fetch('/api/market-data', {
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Market data API failed:', response.status);
      return cachedData || new Map();
    }

    const json: ApiResponse = await response.json();

    if (!json.success || !json.data) {
      console.error('Market data API returned error');
      return cachedData || new Map();
    }

    // Convert to Map
    const results = new Map<string, EquityMarketData>();
    for (const [ticker, data] of Object.entries(json.data)) {
      results.set(ticker, data);
    }

    // Update cache
    cachedData = results;
    cacheTimestamp = Date.now();

    return results;
  } catch (error) {
    console.error('Failed to fetch market data:', error);
    return cachedData || new Map();
  }
}

// Fetch data for a specific ticker
export async function fetchEquityMarketData(ticker: string): Promise<EquityMarketData> {
  const allData = await fetchAllEquitiesData();
  return allData.get(ticker) || {
    ticker,
    hyperliquid: null,
    ostium: null,
    lighter: null,
  };
}

// Helper to format funding rate for display
export function formatFundingRate(rate: number | null): string {
  if (rate === null) return 'N/A';
  const sign = rate >= 0 ? '+' : '';
  return `${sign}${rate.toFixed(2)}%/yr`;
}

// Helper to format price change
export function formatPriceChange(change: number | null): string {
  if (change === null) return 'N/A';
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(2)}%`;
}

// Helper to format currency
export function formatCurrency(value: number | null): string {
  if (value === null) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

// Helper to format large numbers
export function formatVolume(value: number | null): string {
  if (value === null) return 'N/A';
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}
