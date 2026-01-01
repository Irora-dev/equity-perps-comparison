import { NextResponse } from 'next/server';

// Disable caching for debugging
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
    // Fetch prices
    const pricesRes = await fetch('https://metadata-backend.ostium.io/PricePublish/latest-prices', {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' },
    });

    if (!pricesRes.ok) {
      console.error('Ostium prices fetch failed:', pricesRes.status, await pricesRes.text());
      return results;
    }

    const prices = await pricesRes.json();
    console.log('Ostium prices fetched:', prices.length, 'items');

    // Fetch performances for 24h change
    let perfMap = new Map<string, number>();
    try {
      const performancesRes = await fetch('https://metadata-backend.ostium.io/performances/getPerformances', {
        cache: 'no-store',
        headers: { 'Accept': 'application/json' },
      });

      if (performancesRes.ok) {
        const performances = await performancesRes.json();
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
      }
    } catch (e) {
      console.error('Ostium performances fetch error:', e);
    }

    // Process prices - filter for USD pairs that are equities
    const skipSymbols = new Set(['EUR', 'GBP', 'JPY', 'MXN', 'CAD', 'AUD', 'NZD', 'CHF', 'USD',
      'XAG', 'XAU', 'XPT', 'XPD', 'HG', 'CL', 'NG', 'BTC', 'ETH', 'SOL', 'BNB', 'XRP', 'TRX',
      'ADA', 'HYPE', 'LINK', 'HSI', 'NIK', 'DAX', 'FTSE', 'DJI', 'SPX', 'NDX', 'DXY']);

    for (const item of prices) {
      const from = item.from as string;
      const to = item.to as string;

      if (to === 'USD' && from && !skipSymbols.has(from)) {
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

    console.log('Ostium processed:', results.size, 'equities');
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
      cache: 'no-store',
      headers: { 'Accept': 'application/json' },
    });

    if (!response.ok) {
      console.error('Lighter fetch failed:', response.status, await response.text());
      return results;
    }

    const data = await response.json();
    const fundingRates = data.funding_rates || [];
    console.log('Lighter funding rates fetched:', fundingRates.length, 'items');

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

    console.log('Lighter processed:', results.size, 'equities');
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
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ type: 'spotMetaAndAssetCtxs' }),
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Hyperliquid fetch failed:', response.status, await response.text());
      return results;
    }

    const data = await response.json();
    console.log('Hyperliquid response type:', Array.isArray(data) ? 'array' : typeof data);

    if (!Array.isArray(data) || data.length < 2) {
      console.error('Hyperliquid unexpected response format');
      return results;
    }

    const meta = data[0];
    const ctxs = data[1];
    const universe = meta?.universe || [];
    console.log('Hyperliquid universe size:', universe.length);

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
          console.log(`Hyperliquid ${ticker}: $${markPx}`);
        }
      }
    }

    console.log('Hyperliquid processed:', results.size, 'equities');
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
