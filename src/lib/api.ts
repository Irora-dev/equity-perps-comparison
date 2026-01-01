// API utilities for fetching live market data from equity perps platforms

export interface PlatformMarketData {
  price: number | null;
  fundingRate: number | null;
  volume24h: number | null;
  openInterest: number | null;
  change24h: number | null;
  lastUpdate: Date;
}

export interface EquityMarketData {
  ticker: string;
  hyperliquid: PlatformMarketData | null;
  ostium: PlatformMarketData | null;
  lighter: PlatformMarketData | null;
}

// Hyperliquid HIP-3 market mappings (spot pair index -> equity ticker)
const HYPERLIQUID_HIP3_MARKETS: Record<string, string> = {
  '@264': 'TSLA',
  '@189': 'SPY', // USPYX
};

// Ostium asset mappings
const OSTIUM_ASSETS = [
  'NVDAUSD', 'TSLAUSD', 'AAPLUSD', 'MSFTUSD', 'AMZNUSD', 'GOOGUSD',
  'METAUSD', 'COINUSD', 'MSTRUSD', 'HOODUSD', 'PLTRUSD', 'AMDUSD',
  'NFLXUSD', 'ORCLUSD', 'RIVNUSD', 'COSTUSD', 'BABAUSD', 'BYDUSD',
  'GLXYUSD', 'SBETUSD', 'BMNRUSD', 'CRCLUSD'
];

// Lighter market mappings
const LIGHTER_EQUITY_MARKETS: Record<string, number> = {
  'NVDA': 110,
  'PLTR': 111,
  'TSLA': 112,
  'AAPL': 113,
  'AMZN': 114,
  'MSFT': 115,
  'HOOD': 108,
  'META': 117,
  'COIN': 109,
  'GOOGL': 116,
};

// Fetch Hyperliquid HIP-3 equity perps data
export async function fetchHyperliquidData(): Promise<Map<string, PlatformMarketData>> {
  const results = new Map<string, PlatformMarketData>();

  try {
    const response = await fetch('https://api.hyperliquid.xyz/info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'spotMetaAndAssetCtxs' }),
    });

    if (!response.ok) return results;

    const data = await response.json();
    if (!Array.isArray(data) || data.length < 2) return results;

    const ctxs = data[1];
    const universe = data[0]?.universe || [];

    for (const pair of universe) {
      const pairName = pair?.name as string;
      const pairIdx = pair?.index as number;

      if (HYPERLIQUID_HIP3_MARKETS[pairName]) {
        const ticker = HYPERLIQUID_HIP3_MARKETS[pairName];
        const ctx = ctxs[pairIdx];

        if (ctx) {
          const markPx = parseFloat(ctx.markPx || '0');
          const dayVol = parseFloat(ctx.dayNtlVlm || '0');
          const prevDayPx = parseFloat(ctx.prevDayPx || '0');
          const change24h = prevDayPx > 0 ? ((markPx - prevDayPx) / prevDayPx) * 100 : null;

          results.set(ticker, {
            price: markPx || null,
            fundingRate: null, // HIP-3 doesn't have traditional funding
            volume24h: dayVol || null,
            openInterest: null,
            change24h,
            lastUpdate: new Date(),
          });
        }
      }
    }
  } catch (error) {
    console.error('Error fetching Hyperliquid data:', error);
  }

  return results;
}

// Fetch Ostium equity perps data
export async function fetchOstiumData(): Promise<Map<string, PlatformMarketData>> {
  const results = new Map<string, PlatformMarketData>();

  try {
    // Fetch latest prices
    const pricesResponse = await fetch('https://metadata-backend.ostium.io/PricePublish/latest-prices');
    if (!pricesResponse.ok) return results;

    const prices = await pricesResponse.json();

    // Fetch performances
    const performancesResponse = await fetch('https://metadata-backend.ostium.io/performances/getPerformances');
    const performances = performancesResponse.ok ? await performancesResponse.json() : [];

    // Build performance map
    const perfMap = new Map<string, { change24h: number; high24h: number; low24h: number }>();
    for (const perf of performances) {
      const key = `${perf.from}${perf.to}`;
      if (perf.price24hAgo) {
        const currentPrice = perf.historical?.[perf.historical.length - 1]?.close || 0;
        const change24h = ((currentPrice - perf.price24hAgo) / perf.price24hAgo) * 100;
        perfMap.set(key, {
          change24h,
          high24h: perf.highest || 0,
          low24h: perf.lowest || 0,
        });
      }
    }

    for (const price of prices) {
      const from = price.from as string;
      const to = price.to as string;
      const key = `${from}${to}`;

      // Check if it's an equity
      if (to === 'USD' && OSTIUM_ASSETS.includes(key)) {
        const ticker = from; // NVDA, TSLA, etc.
        const midPrice = price.mid || price.bid || 0;
        const perf = perfMap.get(key);

        results.set(ticker, {
          price: midPrice || null,
          fundingRate: null, // Ostium uses oracle-based pricing
          volume24h: null, // Volume data from separate endpoint
          openInterest: null,
          change24h: perf?.change24h || null,
          lastUpdate: new Date(),
        });
      }
    }

    // Fetch volume data
    try {
      const volumeResponse = await fetch('https://metadata-backend.ostium.io/volume/all');
      if (volumeResponse.ok) {
        const volumeData = await volumeResponse.json();
        // Note: Volume is by pair_id, would need mapping to update
      }
    } catch {
      // Volume fetch failed, continue without it
    }
  } catch (error) {
    console.error('Error fetching Ostium data:', error);
  }

  return results;
}

// Fetch Lighter equity perps funding rates
export async function fetchLighterData(): Promise<Map<string, PlatformMarketData>> {
  const results = new Map<string, PlatformMarketData>();

  try {
    const response = await fetch('https://mainnet.zklighter.elliot.ai/api/v1/funding-rates');
    if (!response.ok) return results;

    const data = await response.json();
    const fundingRates = data.funding_rates || [];

    for (const fr of fundingRates) {
      const symbol = fr.symbol as string;

      if (LIGHTER_EQUITY_MARKETS[symbol] !== undefined) {
        const rate = fr.rate || 0;
        const annualRate = rate * 3 * 365 * 100; // Convert hourly to annual %

        // Get or create entry
        const existing = results.get(symbol);
        if (!existing) {
          results.set(symbol, {
            price: null,
            fundingRate: annualRate,
            volume24h: null,
            openInterest: null,
            change24h: null,
            lastUpdate: new Date(),
          });
        }
      }
    }
  } catch (error) {
    console.error('Error fetching Lighter data:', error);
  }

  return results;
}

// Fetch all platform data for a specific ticker
export async function fetchEquityMarketData(ticker: string): Promise<EquityMarketData> {
  const [hyperliquidData, ostiumData, lighterData] = await Promise.all([
    fetchHyperliquidData(),
    fetchOstiumData(),
    fetchLighterData(),
  ]);

  return {
    ticker,
    hyperliquid: hyperliquidData.get(ticker) || null,
    ostium: ostiumData.get(ticker) || null,
    lighter: lighterData.get(ticker) || null,
  };
}

// Fetch all equities data in bulk
export async function fetchAllEquitiesData(): Promise<Map<string, EquityMarketData>> {
  const [hyperliquidData, ostiumData, lighterData] = await Promise.all([
    fetchHyperliquidData(),
    fetchOstiumData(),
    fetchLighterData(),
  ]);

  const results = new Map<string, EquityMarketData>();

  // Collect all unique tickers
  const allTickers = new Set<string>([
    ...hyperliquidData.keys(),
    ...ostiumData.keys(),
    ...lighterData.keys(),
  ]);

  for (const ticker of allTickers) {
    results.set(ticker, {
      ticker,
      hyperliquid: hyperliquidData.get(ticker) || null,
      ostium: ostiumData.get(ticker) || null,
      lighter: lighterData.get(ticker) || null,
    });
  }

  return results;
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
