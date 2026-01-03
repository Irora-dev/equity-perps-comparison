'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

// Stocks available as equity perpetuals
const availableStocks = [
  { ticker: 'NVDA', name: 'Nvidia', hot: true },
  { ticker: 'TSLA', name: 'Tesla', hot: true },
  { ticker: 'AAPL', name: 'Apple', hot: false },
  { ticker: 'MSFT', name: 'Microsoft', hot: false },
  { ticker: 'META', name: 'Meta', hot: true },
  { ticker: 'AMZN', name: 'Amazon', hot: false },
  { ticker: 'GOOGL', name: 'Google', hot: false },
  { ticker: 'AMD', name: 'AMD', hot: false },
  { ticker: 'COIN', name: 'Coinbase', hot: true },
  { ticker: 'PLTR', name: 'Palantir', hot: true },
  { ticker: 'NFLX', name: 'Netflix', hot: false },
  { ticker: 'MSTR', name: 'MicroStrategy', hot: true },
  { ticker: 'HOOD', name: 'Robinhood', hot: false },
  { ticker: 'BA', name: 'Boeing', hot: false },
  { ticker: 'DIS', name: 'Disney', hot: false },
  { ticker: 'JPM', name: 'JPMorgan', hot: false },
  { ticker: 'V', name: 'Visa', hot: false },
  { ticker: 'WMT', name: 'Walmart', hot: false },
  { ticker: 'KO', name: 'Coca-Cola', hot: false },
  { ticker: 'PFE', name: 'Pfizer', hot: false },
];

// Extended S&P 500 stocks for recognition (not all available as perps)
const sp500Stocks = [
  { ticker: 'AAPL', name: 'Apple' },
  { ticker: 'ABBV', name: 'AbbVie' },
  { ticker: 'ABT', name: 'Abbott Laboratories' },
  { ticker: 'ACN', name: 'Accenture' },
  { ticker: 'ADBE', name: 'Adobe' },
  { ticker: 'ADP', name: 'Automatic Data Processing' },
  { ticker: 'AIG', name: 'American International Group' },
  { ticker: 'AMAT', name: 'Applied Materials' },
  { ticker: 'AMD', name: 'AMD' },
  { ticker: 'AMGN', name: 'Amgen' },
  { ticker: 'AMZN', name: 'Amazon' },
  { ticker: 'AVGO', name: 'Broadcom' },
  { ticker: 'AXP', name: 'American Express' },
  { ticker: 'BA', name: 'Boeing' },
  { ticker: 'BAC', name: 'Bank of America' },
  { ticker: 'BLK', name: 'BlackRock' },
  { ticker: 'BMY', name: 'Bristol-Myers Squibb' },
  { ticker: 'BRK.B', name: 'Berkshire Hathaway' },
  { ticker: 'C', name: 'Citigroup' },
  { ticker: 'CAT', name: 'Caterpillar' },
  { ticker: 'CHTR', name: 'Charter Communications' },
  { ticker: 'CL', name: 'Colgate-Palmolive' },
  { ticker: 'CMCSA', name: 'Comcast' },
  { ticker: 'COIN', name: 'Coinbase' },
  { ticker: 'COP', name: 'ConocoPhillips' },
  { ticker: 'COST', name: 'Costco' },
  { ticker: 'CRM', name: 'Salesforce' },
  { ticker: 'CSCO', name: 'Cisco' },
  { ticker: 'CVS', name: 'CVS Health' },
  { ticker: 'CVX', name: 'Chevron' },
  { ticker: 'DE', name: 'John Deere' },
  { ticker: 'DHR', name: 'Danaher' },
  { ticker: 'DIS', name: 'Disney' },
  { ticker: 'DOW', name: 'Dow Inc' },
  { ticker: 'DUK', name: 'Duke Energy' },
  { ticker: 'EMR', name: 'Emerson Electric' },
  { ticker: 'EXC', name: 'Exelon' },
  { ticker: 'F', name: 'Ford' },
  { ticker: 'FDX', name: 'FedEx' },
  { ticker: 'GD', name: 'General Dynamics' },
  { ticker: 'GE', name: 'General Electric' },
  { ticker: 'GILD', name: 'Gilead Sciences' },
  { ticker: 'GM', name: 'General Motors' },
  { ticker: 'GOOG', name: 'Alphabet Class C' },
  { ticker: 'GOOGL', name: 'Google' },
  { ticker: 'GS', name: 'Goldman Sachs' },
  { ticker: 'HD', name: 'Home Depot' },
  { ticker: 'HON', name: 'Honeywell' },
  { ticker: 'HOOD', name: 'Robinhood' },
  { ticker: 'IBM', name: 'IBM' },
  { ticker: 'INTC', name: 'Intel' },
  { ticker: 'INTU', name: 'Intuit' },
  { ticker: 'JNJ', name: 'Johnson & Johnson' },
  { ticker: 'JPM', name: 'JPMorgan' },
  { ticker: 'KHC', name: 'Kraft Heinz' },
  { ticker: 'KO', name: 'Coca-Cola' },
  { ticker: 'LIN', name: 'Linde' },
  { ticker: 'LLY', name: 'Eli Lilly' },
  { ticker: 'LMT', name: 'Lockheed Martin' },
  { ticker: 'LOW', name: 'Lowes' },
  { ticker: 'MA', name: 'Mastercard' },
  { ticker: 'MCD', name: 'McDonalds' },
  { ticker: 'MDLZ', name: 'Mondelez' },
  { ticker: 'MDT', name: 'Medtronic' },
  { ticker: 'MET', name: 'MetLife' },
  { ticker: 'META', name: 'Meta' },
  { ticker: 'MMM', name: '3M' },
  { ticker: 'MO', name: 'Altria' },
  { ticker: 'MRK', name: 'Merck' },
  { ticker: 'MS', name: 'Morgan Stanley' },
  { ticker: 'MSFT', name: 'Microsoft' },
  { ticker: 'MSTR', name: 'MicroStrategy' },
  { ticker: 'NEE', name: 'NextEra Energy' },
  { ticker: 'NFLX', name: 'Netflix' },
  { ticker: 'NKE', name: 'Nike' },
  { ticker: 'NOW', name: 'ServiceNow' },
  { ticker: 'NVDA', name: 'Nvidia' },
  { ticker: 'ORCL', name: 'Oracle' },
  { ticker: 'PEP', name: 'PepsiCo' },
  { ticker: 'PFE', name: 'Pfizer' },
  { ticker: 'PG', name: 'Procter & Gamble' },
  { ticker: 'PLTR', name: 'Palantir' },
  { ticker: 'PM', name: 'Philip Morris' },
  { ticker: 'PYPL', name: 'PayPal' },
  { ticker: 'QCOM', name: 'Qualcomm' },
  { ticker: 'RTX', name: 'Raytheon' },
  { ticker: 'SBUX', name: 'Starbucks' },
  { ticker: 'SCHW', name: 'Charles Schwab' },
  { ticker: 'SO', name: 'Southern Company' },
  { ticker: 'SPG', name: 'Simon Property Group' },
  { ticker: 'T', name: 'AT&T' },
  { ticker: 'TGT', name: 'Target' },
  { ticker: 'TMO', name: 'Thermo Fisher' },
  { ticker: 'TSLA', name: 'Tesla' },
  { ticker: 'TXN', name: 'Texas Instruments' },
  { ticker: 'UNH', name: 'UnitedHealth' },
  { ticker: 'UNP', name: 'Union Pacific' },
  { ticker: 'UPS', name: 'UPS' },
  { ticker: 'USB', name: 'US Bancorp' },
  { ticker: 'V', name: 'Visa' },
  { ticker: 'VZ', name: 'Verizon' },
  { ticker: 'WFC', name: 'Wells Fargo' },
  { ticker: 'WMT', name: 'Walmart' },
  { ticker: 'XOM', name: 'Exxon Mobil' },
];

// Create a set of available tickers for quick lookup
const availableTickers = new Set(availableStocks.map(s => s.ticker));

type Preference = 'broker' | '24/7' | 'weekends' | 'outside-us' | null;

const preferenceData = {
  'broker': {
    title: 'without a broker',
    shortTitle: 'No Broker',
    description: 'No brokerage account needed. No KYC. No waiting for approval. Just connect a wallet and trade.',
    benefit: 'Skip the broker entirely',
    icon: '🏦',
  },
  '24/7': {
    title: '24 hours a day, 7 days a week',
    shortTitle: '24/7 Trading',
    description: 'Trade at 2am, on holidays, whenever you want. The market never closes.',
    benefit: 'Trade anytime, day or night',
    icon: '🌙',
  },
  'weekends': {
    title: 'on the weekends',
    shortTitle: 'Weekend Trading',
    description: 'Saturday morning. Sunday night. Trade stocks while traditional markets are closed.',
    benefit: 'Trade Saturday & Sunday',
    icon: '📅',
  },
  'outside-us': {
    title: 'from outside the United States',
    shortTitle: 'Global Access',
    description: 'No US residency required. No SSN needed. Trade US stocks from anywhere in the world.',
    benefit: 'Trade from any country',
    icon: '🌍',
  },
};

type FundingRegion = 'us' | 'india' | 'pakistan' | 'sea' | 'other';

const regionFundingData: Record<FundingRegion, {
  name: string;
  currency: string;
  minAmount: string;
  platforms: { name: string; color: string; steps: string[] }[];
  tip?: string;
}> = {
  us: {
    name: 'United States',
    currency: 'USD',
    minAmount: '$50-100',
    platforms: [
      { name: 'Coinbase', color: 'blue', steps: ['Send/Receive → USDC', 'Paste wallet address', 'Select Arbitrum', 'Confirm'] },
      { name: 'Kraken', color: 'purple', steps: ['Funding → Withdraw', 'Select USDC', 'Network: Arbitrum', 'Enter address'] },
    ],
  },
  india: {
    name: 'India',
    currency: 'INR',
    minAmount: '₹4,000-5,000',
    platforms: [
      { name: 'Binance P2P', color: 'yellow', steps: ['Buy USDC via P2P', 'Pay with UPI/IMPS', 'Withdraw to wallet', 'Network: Arbitrum'] },
      { name: 'WazirX', color: 'blue', steps: ['Buy USDC with INR', 'Withdraw to wallet', 'Network: Arbitrum', 'Done!'] },
    ],
    tip: 'UPI is fastest. Don\'t mention "crypto" in payment notes.',
  },
  pakistan: {
    name: 'Pakistan',
    currency: 'PKR',
    minAmount: 'PKR 15,000',
    platforms: [
      { name: 'Binance P2P', color: 'yellow', steps: ['Buy USDC via P2P', 'Pay with JazzCash/Easypaisa', 'Withdraw to wallet', 'Network: Arbitrum'] },
      { name: 'KuCoin P2P', color: 'green', steps: ['Buy USDT via P2P', 'Convert to USDC', 'Withdraw to wallet', 'Network: Arbitrum'] },
    ],
    tip: 'JazzCash and Easypaisa are most common payment methods.',
  },
  sea: {
    name: 'Southeast Asia',
    currency: 'Various',
    minAmount: '$50',
    platforms: [
      { name: 'Binance P2P', color: 'yellow', steps: ['Buy USDC via P2P', 'Pay with local method', 'Withdraw to wallet', 'Network: Arbitrum'] },
      { name: 'Bybit P2P', color: 'orange', steps: ['Buy USDC via P2P', 'GCash/GrabPay/Bank', 'Withdraw to wallet', 'Network: Arbitrum'] },
    ],
    tip: 'Philippines: GCash works well. Thailand: PromptPay. Vietnam: Bank transfer.',
  },
  other: {
    name: 'Other Regions',
    currency: 'USD',
    minAmount: '$50-100',
    platforms: [
      { name: 'Binance P2P', color: 'yellow', steps: ['Buy USDC via P2P', 'Pay with local method', 'Withdraw to wallet', 'Network: Arbitrum'] },
      { name: 'Coinbase', color: 'blue', steps: ['Send/Receive → USDC', 'Paste wallet address', 'Select Arbitrum', 'Confirm'] },
    ],
  },
};

export default function StartPage() {
  const [stockInput, setStockInput] = useState('');
  const [selectedStock, setSelectedStock] = useState<typeof availableStocks[0] | null>(null);
  const [unavailableStock, setUnavailableStock] = useState<{ ticker: string; name: string } | null>(null);
  const [preference, setPreference] = useState<Preference>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasWallet, setHasWallet] = useState<boolean | null>(null);
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [fundingRegion, setFundingRegion] = useState<FundingRegion>('us');

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  // Search results combining available and unavailable stocks
  const searchResults = useMemo(() => {
    if (!stockInput) {
      // Show popular available stocks when no input
      return availableStocks.slice(0, 8).map(s => ({ ...s, available: true }));
    }

    const search = stockInput.toUpperCase().trim();
    const results: { ticker: string; name: string; hot?: boolean; available: boolean }[] = [];

    // Search available stocks first
    availableStocks.forEach(stock => {
      if (
        stock.ticker.includes(search) ||
        stock.name.toUpperCase().includes(search) ||
        stock.name.toUpperCase().startsWith(search)
      ) {
        results.push({ ...stock, available: true });
      }
    });

    // Then search S&P 500 for unavailable matches
    sp500Stocks.forEach(stock => {
      if (!availableTickers.has(stock.ticker)) {
        if (
          stock.ticker.includes(search) ||
          stock.name.toUpperCase().includes(search) ||
          stock.name.toUpperCase().startsWith(search)
        ) {
          results.push({ ...stock, available: false });
        }
      }
    });

    // Sort: available first, then by relevance (exact ticker match first)
    results.sort((a, b) => {
      if (a.available !== b.available) return a.available ? -1 : 1;
      if (a.ticker === search) return -1;
      if (b.ticker === search) return 1;
      return 0;
    });

    return results.slice(0, 8);
  }, [stockInput]);

  const handleStockSelect = (stock: { ticker: string; name: string; hot?: boolean; available: boolean }) => {
    if (stock.available) {
      const availableMatch = availableStocks.find(s => s.ticker === stock.ticker);
      setSelectedStock(availableMatch || null);
      setUnavailableStock(null);
    } else {
      setSelectedStock(null);
      setUnavailableStock({ ticker: stock.ticker, name: stock.name });
    }
    setStockInput(stock.ticker);
    setShowDropdown(false);
  };

  const handleInputChange = (value: string) => {
    const upperValue = value.toUpperCase();
    setStockInput(upperValue);
    setShowDropdown(true);

    // Check for exact match in available stocks
    const availableMatch = availableStocks.find(
      s => s.ticker === upperValue || s.name.toUpperCase() === upperValue
    );
    if (availableMatch) {
      setSelectedStock(availableMatch);
      setUnavailableStock(null);
      return;
    }

    // Check for exact match in S&P 500 (unavailable)
    const sp500Match = sp500Stocks.find(
      s => s.ticker === upperValue || s.name.toUpperCase() === upperValue
    );
    if (sp500Match && !availableTickers.has(sp500Match.ticker)) {
      setSelectedStock(null);
      setUnavailableStock(sp500Match);
      return;
    }

    // No exact match
    setSelectedStock(null);
    setUnavailableStock(null);
  };

  const selectAlternativeStock = (stock: typeof availableStocks[0]) => {
    setSelectedStock(stock);
    setUnavailableStock(null);
    setStockInput(stock.ticker);
  };

  const isReady = selectedStock && preference;
  const showUnavailableFlow = unavailableStock && preference;

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-5xl mx-auto px-4 py-20 w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
              Unlock A World Of
              <br />
              <span className="text-cyan-400">24/7 Stock Trading</span>
            </h1>
          </div>

          {/* Stock Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="flex items-center bg-gray-900/80 border-2 border-gray-700 rounded-2xl overflow-hidden focus-within:border-cyan-500 transition-colors">
                <span className="text-gray-500 pl-6 text-lg">I want to trade</span>
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={stockInput}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Search by ticker or company name..."
                    className="w-full px-3 py-5 bg-transparent text-white text-xl font-bold placeholder-gray-600 focus:outline-none"
                  />
                  {showDropdown && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50 max-h-80 overflow-y-auto">
                      {searchResults.map((stock) => (
                        <button
                          key={stock.ticker}
                          onClick={() => handleStockSelect(stock)}
                          className={`w-full px-4 py-3 flex items-center justify-between transition-colors text-left ${
                            stock.available ? 'hover:bg-gray-800' : 'hover:bg-gray-800/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`font-bold ${stock.available ? 'text-white' : 'text-gray-400'}`}>
                              {stock.ticker}
                            </span>
                            <span className="text-gray-500">{stock.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {stock.hot && stock.available && (
                              <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded-full">HOT</span>
                            )}
                            {stock.available ? (
                              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">Available</span>
                            ) : (
                              <span className="px-2 py-0.5 bg-gray-500/20 text-gray-400 text-xs rounded-full">Not Yet</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {selectedStock && (
                  <div className="pr-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      ✓ Available
                    </span>
                  </div>
                )}
                {unavailableStock && (
                  <div className="pr-4">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                      Not Available Yet
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preference Selection */}
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-gray-400 mb-4">and I want to do it...</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {(Object.keys(preferenceData) as Preference[]).map((key) => {
                if (!key) return null;
                const data = preferenceData[key];
                const isSelected = preference === key;
                return (
                  <button
                    key={key}
                    onClick={() => setPreference(key)}
                    className={`p-4 rounded-2xl border-2 transition-all text-left ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-500 scale-105'
                        : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <div className="text-2xl mb-2">{data.icon}</div>
                    <div className={`font-semibold ${isSelected ? 'text-cyan-400' : 'text-white'}`}>
                      {data.shortTitle}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{data.benefit}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ready State */}
          {isReady && (
            <div className="mt-12 text-center animate-fade-in">
              <a
                href="#guide"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
              >
                Show Me How
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          )}

          {/* Unavailable Stock Flow */}
          {showUnavailableFlow && (
            <div className="mt-12 animate-fade-in">
              <div className="max-w-2xl mx-auto bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🚧</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {unavailableStock.ticker} isn&apos;t available as a perpetual yet
                </h3>
                <p className="text-gray-400 mb-6">
                  But don&apos;t worry — you can trade <strong className="text-white">50+ other stocks</strong> including these popular ones:
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {availableStocks.filter(s => s.hot).slice(0, 6).map((stock) => (
                    <button
                      key={stock.ticker}
                      onClick={() => selectAlternativeStock(stock)}
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-cyan-500 rounded-xl text-white font-medium transition-all"
                    >
                      {stock.ticker}
                      <span className="text-gray-500 ml-1 text-sm">{stock.name}</span>
                    </button>
                  ))}
                </div>
                <p className="text-gray-500 text-sm">
                  Click any stock above to continue, or{' '}
                  <button
                    onClick={() => { setStockInput(''); setUnavailableStock(null); }}
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    search for another
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PERSONALIZED GUIDE SECTION */}
      {isReady && (
        <section id="guide" className="py-20 px-4 bg-gray-950 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            {/* Dynamic Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-400 font-medium">Your Personalized Guide</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
                Let&apos;s show you how to trade
              </h2>
              <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-cyan-400 font-bold text-2xl">
                  {selectedStock.ticker}
                </span>
                <span className="text-gray-500 text-2xl">→</span>
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-400 font-semibold">
                  {preferenceData[preference].title}
                </span>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We&apos;ll walk you through everything step by step. No prior experience needed —
                most people are trading within <strong className="text-white">10 minutes</strong>.
                Just follow along and you&apos;ll be set up in no time.
              </p>
            </div>

            {/* Why This Works */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{preferenceData[preference].icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Why you can do this</h3>
                  <p className="text-gray-300 mb-4">{preferenceData[preference].description}</p>
                  <p className="text-gray-400">
                    <strong className="text-white">{selectedStock.ticker}</strong> ({selectedStock.name}) is available
                    as an <strong className="text-cyan-400">equity perpetual</strong> — a contract that tracks the stock price
                    and trades on decentralized exchanges that operate 24/7, globally, with no broker required.
                  </p>
                </div>
              </div>
            </div>

            {/* Do You Have a Wallet? */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-2 text-center">First, do you have a digital wallet?</h3>
              <p className="text-gray-500 text-center mb-6 text-sm">Don&apos;t worry if you don&apos;t — we&apos;ll help you set one up in 2 minutes</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => { setHasWallet(true); setCurrentStep(2); }}
                  className={`px-8 py-4 rounded-2xl border-2 font-semibold transition-all ${
                    hasWallet === true
                      ? 'bg-green-500/20 border-green-500 text-green-400'
                      : 'bg-gray-900/50 border-gray-700 text-white hover:border-gray-600'
                  }`}
                >
                  <span className="text-2xl mr-2">✓</span>
                  Yes, I have one
                </button>
                <button
                  onClick={() => { setHasWallet(false); setCurrentStep(1); }}
                  className={`px-8 py-4 rounded-2xl border-2 font-semibold transition-all ${
                    hasWallet === false
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                      : 'bg-gray-900/50 border-gray-700 text-white hover:border-gray-600'
                  }`}
                >
                  <span className="text-2xl mr-2">🆕</span>
                  No, I&apos;m new to this
                </button>
              </div>
            </div>

            {/* Steps */}
            {hasWallet !== null && (
              <div className="space-y-6">
                {/* Step 1: Wallet (only if they don't have one) */}
                {hasWallet === false && (
                  <div
                    className={`bg-gray-900 border-2 rounded-2xl overflow-hidden transition-all ${
                      currentStep >= 1 ? 'border-cyan-500/50' : 'border-gray-800'
                    }`}
                  >
                    <div
                      className="p-6 flex items-center gap-6 cursor-pointer"
                      onClick={() => setWalletExpanded(!walletExpanded)}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0 ${
                        currentStep > 1 ? 'bg-green-500 text-gray-900' : 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-gray-900'
                      }`}>
                        {currentStep > 1 ? '✓' : '1'}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-1">Set Up Your Digital Wallet</h3>
                        <p className="text-gray-400">Free, takes 2 minutes, and you only do this once</p>
                      </div>
                      <svg
                        className={`w-6 h-6 text-cyan-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {walletExpanded && (
                      <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                        {/* What is a wallet explainer */}
                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-6">
                          <h4 className="text-cyan-400 font-semibold mb-2">What is a digital wallet?</h4>
                          <p className="text-gray-300 text-sm mb-3">
                            Think of it like a <strong className="text-white">digital bank account</strong> that you fully control.
                            Instead of a bank holding your money, you hold it yourself using a simple browser extension.
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                            <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                              <div className="text-lg mb-1">🔐</div>
                              <span className="text-gray-400">You control it</span>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                              <div className="text-lg mb-1">🆓</div>
                              <span className="text-gray-400">Completely free</span>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                              <div className="text-lg mb-1">⚡</div>
                              <span className="text-gray-400">2 min setup</span>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                              <div className="text-lg mb-1">🌍</div>
                              <span className="text-gray-400">Works globally</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-semibold mb-4">Here&apos;s how to set it up:</h4>
                            <ol className="space-y-3 text-gray-300">
                              <li className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">1</span>
                                <span>Go to <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300 underline">rabby.io</a> (it&apos;s the wallet we recommend)</span>
                              </li>
                              <li className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">2</span>
                                <span>Click &quot;Download&quot; and add it to your browser (Chrome, Firefox, etc.)</span>
                              </li>
                              <li className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">3</span>
                                <span>Click &quot;Create New Wallet&quot; and set a password</span>
                              </li>
                              <li className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">4</span>
                                <div>
                                  <strong className="text-white">Write down your 12-word recovery phrase</strong>
                                  <p className="text-gray-500 text-xs mt-1">This is like a master password — keep it safe and never share it!</p>
                                </div>
                              </li>
                            </ol>
                            <button
                              onClick={() => { setCurrentStep(2); setWalletExpanded(false); }}
                              className="mt-6 px-4 py-2 bg-green-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-green-400 transition-colors"
                            >
                              I&apos;ve set up my wallet →
                            </button>
                          </div>
                          <div className="bg-gray-800/50 rounded-xl p-5">
                            <h4 className="text-white font-semibold mb-3">Watch: 2-Minute Setup Guide</h4>
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                              <iframe
                                src="https://www.youtube.com/embed/_ouAzSQJiM0"
                                title="Wallet Setup Guide"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                              />
                            </div>
                            <p className="text-gray-500 text-xs">
                              This video walks you through every step. Follow along and you&apos;ll have your wallet ready in no time.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: Fund */}
                {currentStep >= 2 && (
                  <div
                    className={`bg-gray-900 border-2 rounded-2xl overflow-hidden transition-all ${
                      currentStep >= 2 ? 'border-green-500/50' : 'border-gray-800'
                    }`}
                  >
                    <div
                      className="p-6 flex items-center gap-6 cursor-pointer"
                      onClick={() => setFundingExpanded(!fundingExpanded)}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0 ${
                        currentStep > 2 ? 'bg-green-500 text-gray-900' : 'bg-gradient-to-br from-green-500 to-green-600 text-gray-900'
                      }`}>
                        {currentStep > 2 ? '✓' : hasWallet ? '1' : '2'}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-1">Fund Your Wallet with USDC</h3>
                        <p className="text-gray-400">Transfer from Coinbase, Kraken, or Binance</p>
                      </div>
                      <svg
                        className={`w-6 h-6 text-green-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {fundingExpanded && (
                      <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                        {/* Region Selector */}
                        <div className="mb-6">
                          <p className="text-gray-400 text-sm mb-3">Where are you located?</p>
                          <div className="flex flex-wrap gap-2">
                            {(Object.keys(regionFundingData) as FundingRegion[]).map((region) => (
                              <button
                                key={region}
                                onClick={() => setFundingRegion(region)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                  fundingRegion === region
                                    ? 'bg-green-500 text-gray-900'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                              >
                                {regionFundingData[region].name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Region-specific funding options */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          {regionFundingData[fundingRegion].platforms.map((platform) => (
                            <div
                              key={platform.name}
                              className={`bg-${platform.color}-500/10 border border-${platform.color}-500/30 rounded-xl p-4`}
                              style={{
                                backgroundColor: platform.color === 'yellow' ? 'rgba(234, 179, 8, 0.1)' :
                                                platform.color === 'blue' ? 'rgba(59, 130, 246, 0.1)' :
                                                platform.color === 'purple' ? 'rgba(168, 85, 247, 0.1)' :
                                                platform.color === 'green' ? 'rgba(34, 197, 94, 0.1)' :
                                                platform.color === 'orange' ? 'rgba(249, 115, 22, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                borderColor: platform.color === 'yellow' ? 'rgba(234, 179, 8, 0.3)' :
                                            platform.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' :
                                            platform.color === 'purple' ? 'rgba(168, 85, 247, 0.3)' :
                                            platform.color === 'green' ? 'rgba(34, 197, 94, 0.3)' :
                                            platform.color === 'orange' ? 'rgba(249, 115, 22, 0.3)' : 'rgba(59, 130, 246, 0.3)',
                              }}
                            >
                              <h4
                                className="font-semibold mb-2"
                                style={{
                                  color: platform.color === 'yellow' ? 'rgb(250, 204, 21)' :
                                        platform.color === 'blue' ? 'rgb(96, 165, 250)' :
                                        platform.color === 'purple' ? 'rgb(192, 132, 252)' :
                                        platform.color === 'green' ? 'rgb(74, 222, 128)' :
                                        platform.color === 'orange' ? 'rgb(251, 146, 60)' : 'rgb(96, 165, 250)',
                                }}
                              >
                                {platform.name}
                              </h4>
                              <ol className="text-sm text-gray-300 space-y-1">
                                {platform.steps.map((step, i) => (
                                  <li key={i}>{i + 1}. {step}</li>
                                ))}
                              </ol>
                            </div>
                          ))}
                        </div>

                        {/* Region tip */}
                        {regionFundingData[fundingRegion].tip && (
                          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3 mb-4">
                            <p className="text-cyan-400 text-sm">
                              <strong>Tip:</strong> {regionFundingData[fundingRegion].tip}
                            </p>
                          </div>
                        )}

                        {/* Detailed guide link for India */}
                        {fundingRegion === 'india' && (
                          <div className="mb-4">
                            <Link
                              href="/blog/convert-inr-to-usdc"
                              className="text-cyan-400 hover:text-cyan-300 text-sm underline"
                            >
                              Read our detailed INR to USDC guide →
                            </Link>
                          </div>
                        )}

                        {/* P2P guide link for non-US */}
                        {fundingRegion !== 'us' && fundingRegion !== 'india' && (
                          <div className="mb-4">
                            <Link
                              href="/blog/p2p-usdc-guide"
                              className="text-cyan-400 hover:text-cyan-300 text-sm underline"
                            >
                              Read our global P2P guide →
                            </Link>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <p className="text-gray-500 text-sm">
                            Start with {regionFundingData[fundingRegion].minAmount}. Fees on Arbitrum are ~$0.10
                          </p>
                          <button
                            onClick={() => { setCurrentStep(3); setFundingExpanded(false); }}
                            className="px-4 py-2 bg-green-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-green-400 transition-colors"
                          >
                            Done! Final Step →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Trade */}
                {currentStep >= 3 && (
                  <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-2 border-purple-500/30 rounded-2xl p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                        {hasWallet ? '2' : '3'}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          Trade {selectedStock.ticker} on Hyperliquid
                        </h3>
                        <p className="text-gray-400">Connect your wallet and start trading</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 text-gray-300">
                          <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">1</span>
                          <span>Go to Hyperliquid and click &quot;Connect&quot;</span>
                        </div>
                        <div className="flex items-start gap-3 text-gray-300">
                          <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">2</span>
                          <span>Select Rabby Wallet</span>
                        </div>
                        <div className="flex items-start gap-3 text-gray-300">
                          <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">3</span>
                          <span>Deposit your USDC</span>
                        </div>
                        <div className="flex items-start gap-3 text-gray-300">
                          <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">4</span>
                          <span>Search for <strong className="text-white">{selectedStock.ticker}-PERP</strong></span>
                        </div>
                        <div className="flex items-start gap-3 text-gray-300">
                          <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">5</span>
                          <span>Click Buy (long) or Sell (short) and trade!</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <a
                          href={hyperliquid?.referralUrl}
                          target="_blank"
                          rel="noopener sponsored"
                          className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-[#3EEFC1]/20 to-purple-500/10 border-2 border-[#3EEFC1]/50 rounded-2xl hover:border-[#3EEFC1] transition-all group"
                        >
                          <div className="text-5xl">🚀</div>
                          <span className="text-xl font-bold text-white group-hover:text-[#3EEFC1] transition-colors">
                            Trade {selectedStock.ticker} Now
                          </span>
                          <span className="text-gray-400 text-sm">on Hyperliquid</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Success State */}
            {currentStep >= 3 && (
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-green-400 font-semibold">
                    You&apos;re ready to trade {selectedStock.ticker} {preferenceData[preference].title}!
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Bottom CTA for those who haven't started */}
      {!isReady && (
        <section className="py-20 px-4 bg-gray-950 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Not sure where to start?
            </h2>
            <p className="text-gray-400 mb-8">
              Check out our beginner guides to learn how equity perpetuals work
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog/what-are-equity-perpetuals"
                className="px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors"
              >
                What Are Equity Perps?
              </Link>
              <Link
                href="/blog/trade-stocks-without-broker"
                className="px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors"
              >
                Trade Without a Broker
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-cyan-500 text-gray-900 rounded-xl font-bold hover:bg-cyan-400 transition-colors"
              >
                Compare Platforms
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Footer Link */}
      <div className="py-12 text-center border-t border-gray-800">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to comparison
        </Link>
      </div>
    </main>
  );
}
