export interface Platform {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  referralUrl: string;
  website: string;
  chain: string;
  maxLeverage: string;
  volume: string;
  backing: string;
  beta?: boolean;
  features: {
    equityPerps: boolean;
    zeroFees: boolean;
    selfCustody: boolean;
    trading24_7: boolean;
    highLeverage: boolean;
    usStockPerps: boolean;
    indexProducts: boolean;
    exoticMarkets: boolean;
    mobileApp: boolean;
    apiAccess: boolean;
  };
  supportedAssets: string[];
  pros: string[];
  cons: string[];
  color: string;
}

export const featureLabels: Record<keyof Platform['features'], string> = {
  equityPerps: 'Equity Perps',
  zeroFees: 'Zero Fees',
  selfCustody: 'Self-Custody',
  trading24_7: '24/7 Trading',
  highLeverage: 'High Leverage (50x+)',
  usStockPerps: 'US Stock Perps',
  indexProducts: 'Index Products',
  exoticMarkets: 'Exotic Markets',
  mobileApp: 'Mobile App',
  apiAccess: 'API Access',
};

export const featureDescriptions: Record<keyof Platform['features'], string> = {
  equityPerps: 'Trade perpetual futures on equities',
  zeroFees: 'No trading fees or maker/taker fees',
  selfCustody: 'Keep control of your funds in your wallet',
  trading24_7: 'Trade around the clock, including weekends',
  highLeverage: 'Access leverage of 50x or higher',
  usStockPerps: 'Trade perps on US-listed stocks',
  indexProducts: 'Trade index-based products like Nasdaq 100',
  exoticMarkets: 'Trade non-traditional assets like collectibles',
  mobileApp: 'Native mobile application available',
  apiAccess: 'Programmatic trading via API',
};

export const platforms: Platform[] = [
  {
    id: 'hyperliquid',
    name: 'Hyperliquid',
    slug: 'hyperliquid',
    tagline: 'The largest on-chain perpetuals exchange',
    description: 'Hyperliquid is a high-performance L1 blockchain optimized for perpetual futures trading. With the HIP-3 protocol, it offers equity perps on major US stocks including NVDA, TSLA, AAPL, and more. Known for instant finality and zero gas fees.',
    referralUrl: 'https://app.hyperliquid.xyz/join/COMPAREPERPS',
    website: 'https://hyperliquid.xyz',
    chain: 'Hyperliquid L1',
    maxLeverage: '50x',
    volume: '$319B peak monthly',
    backing: 'Community-driven',
    features: {
      equityPerps: true,
      zeroFees: true,
      selfCustody: true,
      trading24_7: true,
      highLeverage: true,
      usStockPerps: true,
      indexProducts: false,
      exoticMarkets: false,
      mobileApp: false,
      apiAccess: true,
    },
    supportedAssets: ['NVDA', 'TSLA', 'AAPL', 'MSFT', 'PLTR', 'HOOD', 'META', 'AMZN', 'GOOGL', 'AMD', 'COIN', 'NFLX'],
    pros: [
      'Largest trading volume',
      'Zero gas fees',
      'Instant finality (<1 second)',
      'Wide selection of equity perps',
    ],
    cons: [
      'Custom L1 (not EVM)',
      'No index products',
    ],
    color: '#00D1C4',
  },
  {
    id: 'lighter',
    name: 'Lighter',
    slug: 'lighter',
    tagline: 'ZK-powered perpetuals on Ethereum',
    description: 'Lighter is a fully verifiable DEX built with custom ZK infrastructure on Ethereum. It uses zero-knowledge proofs for all operations including order matching and liquidations, offering institutional-grade security with retail-friendly zero fees.',
    referralUrl: 'https://app.lighter.xyz/?referral=COMPAREPERPS',
    website: 'https://lighter.xyz',
    chain: 'Ethereum L2 (ZK-rollup)',
    maxLeverage: '100x',
    volume: '$272.5B monthly',
    backing: 'Founders Fund, Ribbit Capital, Haun Ventures ($68M at $1.5B valuation)',
    features: {
      equityPerps: true,
      zeroFees: true,
      selfCustody: true,
      trading24_7: true,
      highLeverage: true,
      usStockPerps: true,
      indexProducts: false,
      exoticMarkets: false,
      mobileApp: false,
      apiAccess: true,
    },
    supportedAssets: ['COIN', 'HOOD', 'BTC', 'ETH', 'SOL'],
    pros: [
      'ZK-proofs for all operations',
      'Ethereum security',
      'Millisecond latency',
      'Zero fees for retail',
    ],
    cons: [
      'Limited equity selection',
      'Invite-only access initially',
    ],
    color: '#8B5CF6',
  },
  {
    id: 'ostium',
    name: 'Ostium',
    slug: 'ostium',
    tagline: 'RWA perpetuals with 0DTE innovation',
    description: 'Ostium brings traditional markets on-chain with a unique 0DTE (zero days to expiry) perpetuals product. Trade stocks, commodities, indices, and FX with up to 200x leverage. Over 95% of open interest is in real-world assets.',
    referralUrl: 'https://app.ostium.com/trade?from=SPX&to=USD&ref=OB6TR',
    website: 'https://ostium.com',
    chain: 'Arbitrum',
    maxLeverage: '200x',
    volume: '$25B cumulative',
    backing: 'General Catalyst, Jump Crypto ($24M)',
    features: {
      equityPerps: true,
      zeroFees: false,
      selfCustody: true,
      trading24_7: false,
      highLeverage: true,
      usStockPerps: true,
      indexProducts: false,
      exoticMarkets: false,
      mobileApp: false,
      apiAccess: true,
    },
    supportedAssets: ['Individual stocks', 'Gold', 'Commodities', 'FX', 'Indices'],
    pros: [
      'Unique 0DTE perpetuals',
      'Up to 200x leverage',
      'RWA-focused (95%+ OI)',
      'Auto-close before market close',
    ],
    cons: [
      'Not 24/7 (market hours)',
      'Has trading fees',
    ],
    color: '#10B981',
  },
  {
    id: 'variational',
    name: 'Variational',
    slug: 'variational',
    tagline: 'Peer-to-peer derivatives trading',
    description: 'Variational is a protocol for peer-to-peer trading, clearing, and settlement of perpetuals on Arbitrum. Using an RFQ (Request-For-Quote) system, it connects traders directly with liquidity providers for competitive pricing across ~500 markets.',
    referralUrl: 'https://www.variational.io/',
    website: 'https://variational.io',
    chain: 'Arbitrum',
    maxLeverage: 'Variable',
    volume: 'Growing',
    backing: 'Bain Capital, Brevan Howard, Mirana Ventures ($11.8M)',
    features: {
      equityPerps: true,
      zeroFees: true,
      selfCustody: true,
      trading24_7: true,
      highLeverage: false,
      usStockPerps: true,
      indexProducts: false,
      exoticMarkets: false,
      mobileApp: false,
      apiAccess: true,
    },
    supportedAssets: ['~500 markets including equities'],
    pros: [
      'Zero maker/taker fees',
      'RFQ system for best pricing',
      'Isolated smart contract escrows',
      'Massive market selection',
    ],
    cons: [
      'Lower leverage options',
      'RFQ model may have wider spreads',
    ],
    color: '#F59E0B',
  },
  {
    id: 'tradexyz',
    name: 'TradeXYZ',
    slug: 'tradexyz',
    tagline: 'Trade any asset, 24/7',
    description: 'TradeXYZ (trade.xyz) is a perpetual futures interface on Hyperliquid offering the XYZ100 index - a synthetic index tracking the top 100 non-financial companies. Perfect for traders wanting broad market exposure with up to 20x leverage.',
    referralUrl: 'https://trade.xyz/',
    website: 'https://trade.xyz',
    chain: 'Hyperliquid (via HIP-3)',
    maxLeverage: '20x',
    volume: '$35M+ first day on XYZ100',
    backing: 'Independent',
    features: {
      equityPerps: true,
      zeroFees: false,
      selfCustody: true,
      trading24_7: true,
      highLeverage: false,
      usStockPerps: true,
      indexProducts: true,
      exoticMarkets: false,
      mobileApp: false,
      apiAccess: true,
    },
    supportedAssets: ['XYZ100 Index', 'TSLA', 'NVDA', 'Individual stocks'],
    pros: [
      'XYZ100 index product',
      'Non-custodial',
      '24/7 equity trading',
      'Built on Hyperliquid liquidity',
    ],
    cons: [
      'Lower leverage (20x max)',
      'Has trading fees',
    ],
    color: '#3B82F6',
  },
  {
    id: 'avantis',
    name: 'Avantis',
    slug: 'avantis',
    tagline: 'Zero-fee perps on Base',
    description: 'Avantis is the largest DEX on Base, backed by Pantera and Coinbase. Trade crypto up to 500x and equities up to 25x leverage. Unique zero-fee model where you only pay fees on profitable trades, plus 20% rebates on losses.',
    referralUrl: 'https://www.avantisfi.com/', // Add your referral link
    website: 'https://avantisfi.com',
    chain: 'Base (L2)',
    maxLeverage: '500x crypto / 25x equities',
    volume: '$23M TVL',
    backing: 'Pantera Capital, Coinbase, Founders Fund ($8M Series A)',
    features: {
      equityPerps: true,
      zeroFees: true,
      selfCustody: true,
      trading24_7: true,
      highLeverage: true,
      usStockPerps: true,
      indexProducts: false,
      exoticMarkets: false,
      mobileApp: false,
      apiAccess: true,
    },
    supportedAssets: ['Major equities', 'Crypto', 'Forex', 'Commodities'],
    pros: [
      'Zero fees (pay only on profit)',
      '20% loss rebates',
      'Dual oracle protection',
      'Backed by Pantera/Coinbase',
    ],
    cons: [
      'Lower equity leverage (25x)',
      'Smaller volume than competitors',
    ],
    color: '#6366F1',
  },
  {
    id: 'trove',
    name: 'Trove Markets',
    slug: 'trove',
    tagline: 'Exotics',
    description: 'Trove Markets is a unique platform for trading perpetuals on collectibles, exotic assets, and RWAs. Trade Pokemon cards, luxury watches, Birkin bags, and gaming assets with up to 5x leverage on Hyperliquid.',
    referralUrl: 'https://trovemarkets.com?referral=YE7BXYS',
    website: 'https://trovemarkets.com',
    chain: 'Hyperliquid',
    maxLeverage: '5x',
    volume: 'Public beta',
    backing: '$20M for HYPE tokens',
    beta: true,
    features: {
      equityPerps: true,
      zeroFees: false,
      selfCustody: true,
      trading24_7: true,
      highLeverage: false,
      usStockPerps: false,
      indexProducts: false,
      exoticMarkets: true,
      mobileApp: false,
      apiAccess: true,
    },
    supportedAssets: ['Nintendo', 'Popmart', 'Pokemon cards', 'Luxury watches', 'Birkin bags', 'CS2 items'],
    pros: [
      'Unique exotic markets',
      'Collectibles perpetuals',
      '24/7 pricing on illiquid assets',
      'Built on Hyperliquid',
    ],
    cons: [
      'Low leverage (5x max)',
      'No US stock perps',
      'Still in beta',
    ],
    color: '#F43F5E',
  },
];

// Helper function to get platform by slug
export function getPlatformBySlug(slug: string): Platform | undefined {
  return platforms.find(p => p.slug === slug);
}

// Helper function to get platforms by feature
export function getPlatformsByFeature(feature: keyof Platform['features']): Platform[] {
  return platforms.filter(p => p.features[feature]);
}
