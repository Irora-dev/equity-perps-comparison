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

  // XYZ equity markets to fetch (from perpDexLimits)
  const XYZ_EQUITIES = [
    'AAPL', 'AMD', 'AMZN', 'BABA', 'COIN', 'COST', 'CRCL', 'GOOGL', 'HOOD',
    'INTC', 'LLY', 'META', 'MSFT', 'MSTR', 'MU', 'NFLX', 'NVDA', 'ORCL',
    'PLTR', 'RIVN', 'TSLA', 'TSM', 'XYZ100'
  ];

  try {
    // Fetch l2Book for each equity to get current price
    const bookPromises = XYZ_EQUITIES.map(async (ticker) => {
      try {
        const response = await fetch('https://api.hyperliquid.xyz/info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ type: 'l2Book', coin: `xyz:${ticker}` }),
          cache: 'no-store',
        });

        if (!response.ok) return null;
        const book = await response.json();

        // Get best bid/ask from order book
        const levels = book?.levels || [];
        const bids = levels[0] || [];
        const asks = levels[1] || [];

        const bestBid = bids[0]?.px ? parseFloat(bids[0].px) : null;
        const bestAsk = asks[0]?.px ? parseFloat(asks[0].px) : null;
        const midPrice = bestBid && bestAsk ? (bestBid + bestAsk) / 2 : bestBid || bestAsk;

        return { ticker, price: midPrice };
      } catch {
        return null;
      }
    });

    // Fetch funding rates for each equity
    const fundingPromises = XYZ_EQUITIES.map(async (ticker) => {
      try {
        const response = await fetch('https://api.hyperliquid.xyz/info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            type: 'fundingHistory',
            coin: `xyz:${ticker}`,
            startTime: Date.now() - 3600000 // Last hour
          }),
          cache: 'no-store',
        });

        if (!response.ok) return null;
        const history = await response.json();

        // Get most recent funding rate
        if (Array.isArray(history) && history.length > 0) {
          const latest = history[history.length - 1];
          const rate = parseFloat(latest.fundingRate || '0');
          // Convert hourly rate to annual percentage (rate * 24 * 365 * 100)
          const annualRate = rate * 24 * 365 * 100;
          return { ticker, fundingRate: annualRate };
        }
        return null;
      } catch {
        return null;
      }
    });

    const [bookResults, fundingResults] = await Promise.all([
      Promise.all(bookPromises),
      Promise.all(fundingPromises),
    ]);

    // Combine results
    const fundingMap = new Map<string, number>();
    for (const fr of fundingResults) {
      if (fr) fundingMap.set(fr.ticker, fr.fundingRate);
    }

    for (const br of bookResults) {
      if (br && br.price) {
        results.set(br.ticker, {
          price: br.price,
          change24h: null, // Not available from l2Book
          fundingRate: fundingMap.get(br.ticker) ?? null,
          volume24h: null, // Would need separate API call
        });
      }
    }

    console.log('Hyperliquid XYZ processed:', results.size, 'equities');
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
