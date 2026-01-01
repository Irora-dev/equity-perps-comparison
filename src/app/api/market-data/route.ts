import { NextResponse } from 'next/server';

export const revalidate = 30; // Cache for 30 seconds

interface PlatformData {
  price: number | null;
  change24h: number | null;
  fundingRate: number | null;
  volume24h: number | null;
}

interface StockMarketData {
  ticker: string;
  ostium: PlatformData | null;
  lighter: PlatformData | null;
  hyperliquid: PlatformData | null;
}

// Ticker mappings for different naming conventions
const TICKER_ALIASES: Record<string, string> = {
  'GOOG': 'GOOGL', // Ostium uses GOOG, we use GOOGL
};

// Reverse mapping
const REVERSE_ALIASES: Record<string, string> = {
  'GOOGL': 'GOOG',
};

async function fetchOstiumData(): Promise<Map<string, PlatformData>> {
  const results = new Map<string, PlatformData>();

  try {
    // Fetch prices and performances in parallel
    const [pricesRes, performancesRes] = await Promise.all([
      fetch('https://metadata-backend.ostium.io/PricePublish/latest-prices', {
        next: { revalidate: 30 },
      }),
      fetch('https://metadata-backend.ostium.io/performances/getPerformances', {
        next: { revalidate: 30 },
      }),
    ]);

    if (!pricesRes.ok) {
      console.error('Ostium prices fetch failed:', pricesRes.status);
      return results;
    }

    const prices = await pricesRes.json();
    const performances = performancesRes.ok ? await performancesRes.json() : [];

    // Build performance map (from+to -> change data)
    const perfMap = new Map<string, number>();
    for (const perf of performances) {
      if (perf.from && perf.to && perf.price24hAgo) {
        const key = `${perf.from}${perf.to}`;
        const currentPrice = perf.historical?.[perf.historical.length - 1]?.close;
        if (currentPrice && perf.price24hAgo > 0) {
          const change = ((currentPrice - perf.price24hAgo) / perf.price24hAgo) * 100;
          perfMap.set(key, change);
        }
      }
    }

    // Process prices
    for (const item of prices) {
      const from = item.from as string;
      const to = item.to as string;

      if (to === 'USD' && from) {
        const midPrice = item.mid ?? item.bid ?? null;
        const key = `${from}${to}`;
        const change24h = perfMap.get(key) ?? null;

        // Normalize ticker (GOOG -> GOOGL)
        const normalizedTicker = TICKER_ALIASES[from] || from;

        results.set(normalizedTicker, {
          price: midPrice,
          change24h,
          fundingRate: null,
          volume24h: null,
        });
      }
    }
  } catch (error) {
    console.error('Ostium fetch error:', error);
  }

  return results;
}

async function fetchLighterData(): Promise<Map<string, PlatformData>> {
  const results = new Map<string, PlatformData>();

  // Known equity tickers on Lighter
  const LIGHTER_EQUITIES = new Set([
    'NVDA', 'TSLA', 'AAPL', 'MSFT', 'AMZN', 'META', 'GOOGL', 'PLTR', 'HOOD', 'COIN'
  ]);

  try {
    const response = await fetch('https://mainnet.zklighter.elliot.ai/api/v1/funding-rates', {
      next: { revalidate: 30 },
    });

    if (!response.ok) {
      console.error('Lighter fetch failed:', response.status);
      return results;
    }

    const data = await response.json();
    const fundingRates = data.funding_rates || [];

    for (const fr of fundingRates) {
      const symbol = fr.symbol as string;

      if (LIGHTER_EQUITIES.has(symbol)) {
        const rate = fr.rate || 0;
        // Convert 8-hour rate to annual percentage
        const annualRate = rate * 3 * 365 * 100;

        // Only set if not already set (avoid duplicates from different exchanges)
        if (!results.has(symbol)) {
          results.set(symbol, {
            price: null,
            change24h: null,
            fundingRate: annualRate,
            volume24h: null,
          });
        }
      }
    }
  } catch (error) {
    console.error('Lighter fetch error:', error);
  }

  return results;
}

async function fetchHyperliquidData(): Promise<Map<string, PlatformData>> {
  const results = new Map<string, PlatformData>();

  // Known HIP-3 equity markets (pair name -> ticker)
  const HIP3_MARKETS: Record<string, string> = {
    '@264': 'TSLA',
    '@189': 'SPY',
  };

  try {
    const response = await fetch('https://api.hyperliquid.xyz/info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'spotMetaAndAssetCtxs' }),
      next: { revalidate: 30 },
    });

    if (!response.ok) {
      console.error('Hyperliquid fetch failed:', response.status);
      return results;
    }

    const data = await response.json();
    if (!Array.isArray(data) || data.length < 2) return results;

    const meta = data[0];
    const ctxs = data[1];
    const universe = meta?.universe || [];

    for (const pair of universe) {
      const pairName = pair?.name as string;
      const pairIdx = pair?.index as number;

      if (HIP3_MARKETS[pairName]) {
        const ticker = HIP3_MARKETS[pairName];
        const ctx = ctxs[pairIdx];

        if (ctx) {
          const markPx = parseFloat(ctx.markPx || '0');
          const dayVol = parseFloat(ctx.dayNtlVlm || '0');
          const prevDayPx = parseFloat(ctx.prevDayPx || '0');
          const change24h = prevDayPx > 0 ? ((markPx - prevDayPx) / prevDayPx) * 100 : null;

          results.set(ticker, {
            price: markPx || null,
            change24h,
            fundingRate: null,
            volume24h: dayVol || null,
          });
        }
      }
    }
  } catch (error) {
    console.error('Hyperliquid fetch error:', error);
  }

  return results;
}

export async function GET() {
  try {
    // Fetch all platform data in parallel
    const [ostiumData, lighterData, hyperliquidData] = await Promise.all([
      fetchOstiumData(),
      fetchLighterData(),
      fetchHyperliquidData(),
    ]);

    // Combine all tickers
    const allTickers = new Set<string>([
      ...ostiumData.keys(),
      ...lighterData.keys(),
      ...hyperliquidData.keys(),
    ]);

    // Build response
    const marketData: Record<string, StockMarketData> = {};

    for (const ticker of allTickers) {
      marketData[ticker] = {
        ticker,
        ostium: ostiumData.get(ticker) || null,
        lighter: lighterData.get(ticker) || null,
        hyperliquid: hyperliquidData.get(ticker) || null,
      };
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      data: marketData,
      sources: {
        ostium: ostiumData.size,
        lighter: lighterData.size,
        hyperliquid: hyperliquidData.size,
      },
    });
  } catch (error) {
    console.error('Market data API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch market data' },
      { status: 500 }
    );
  }
}
