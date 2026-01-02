export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: 'guide' | 'comparison' | 'review' | 'tools';
  publishedAt: string;
  updatedAt: string;
}

export const blogPosts: BlogPost[] = [
  // Featured 2026 post
  {
    slug: 'top-equity-perps-platform-2026',
    title: 'The Top Equity Perps Platform for 2026',
    description: 'Our pick for the best equity perpetuals trading platform heading into 2026.',
    category: 'guide',
    publishedAt: '2026-01-01',
    updatedAt: '2026-01-01',
  },
  // High-intent monetization posts
  {
    slug: 'best-equity-perps-platforms-2025',
    title: 'Best Equity Perps Platforms in 2025',
    description: 'A ranked breakdown of the top platforms for trading equity perpetual futures this year.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'hyperliquid-vs-lighter',
    title: 'Hyperliquid vs Lighter: Which Platform Wins?',
    description: 'Head to head comparison of the two largest equity perps exchanges by volume.',
    category: 'comparison',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'hyperliquid-vs-ostium',
    title: 'Hyperliquid vs Ostium: Volume Leader vs RWA Specialist',
    description: 'Comparing the biggest perps DEX with the platform built specifically for real world assets.',
    category: 'comparison',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'avantis-vs-ostium',
    title: 'Avantis vs Ostium: Base vs Arbitrum for Equity Perps',
    description: 'Two RWA focused platforms on different L2s. Which one suits your trading style?',
    category: 'comparison',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'cheapest-equity-perps-fees',
    title: 'Cheapest Equity Perps Fees: Complete Breakdown',
    description: 'Find the lowest cost platforms for trading equity perpetuals with our fee comparison.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'lowest-funding-rates-equity-perps',
    title: 'Equity Perps with the Lowest Funding Rates',
    description: 'Which platforms offer the most competitive funding rates for holding positions?',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  // Top of funnel posts
  {
    slug: 'what-are-equity-perpetuals',
    title: 'What Are Equity Perpetuals? A Complete Guide',
    description: 'Everything you need to know about equity perps, how they work, and why traders use them.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'how-funding-rates-work',
    title: 'How Equity Perps Funding Rates Work',
    description: 'Understanding the funding mechanism that keeps perpetual prices aligned with spot markets.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'equity-perps-vs-cfds',
    title: 'Equity Perps vs CFDs: Key Differences Explained',
    description: 'How decentralized perpetuals compare to traditional contracts for difference.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'equity-perps-tax-guide',
    title: 'Tax Treatment of Equity Perpetuals: What You Need to Know',
    description: 'General guidance on how equity perps are taxed in major jurisdictions.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  // Essential guides
  {
    slug: 'wallet-setup-guide',
    title: 'How to Set Up a Wallet for Trading Equity Perps',
    description: 'Step-by-step guide to setting up a wallet, funding it with USDC, and connecting to trading platforms.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  // SEO / How-to guides
  {
    slug: 'how-to-trade-equity-perps',
    title: 'How to Trade Equity Perps: Step-by-Step Guide',
    description: 'Complete beginner guide to trading equity perpetuals from setup to your first trade.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'no-kyc-stock-trading',
    title: 'Trade Stocks Without KYC: No ID Required',
    description: 'How to trade stocks anonymously using decentralized equity perpetuals with no identity verification.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'trade-stocks-without-broker',
    title: 'Trade Stocks Without a Broker',
    description: 'How to trade stocks directly on-chain without opening a brokerage account.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'short-stocks-without-borrowing',
    title: 'Short Stocks Without Borrowing',
    description: 'How to short sell stocks instantly with no borrowing fees or locate requirements.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'hyperliquid-tutorial',
    title: 'Hyperliquid Tutorial: Complete Guide to Trading Equity Perps',
    description: 'Step-by-step tutorial for trading equity perpetuals on Hyperliquid.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'weekend-stock-trading',
    title: 'Trade Stocks on Weekends: 24/7 Stock Trading',
    description: 'How to trade stocks on Saturday and Sunday using equity perpetuals.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'equity-perps-risks',
    title: 'Equity Perps Risks: What You Need to Know',
    description: 'Understanding the risks of trading equity perpetuals including liquidation, leverage, and more.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'funding-rate-farming',
    title: 'Funding Rate Farming: Earn Yield on Equity Perps',
    description: 'Learn how to earn passive income through funding rate farming strategies.',
    category: 'guide',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  // Comparisons
  {
    slug: 'equity-perps-vs-options',
    title: 'Equity Perps vs Options: Which is Better?',
    description: 'Comparing perpetuals with traditional options for leverage trading stocks.',
    category: 'comparison',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'equity-perps-vs-futures',
    title: 'Equity Perps vs Futures: Key Differences',
    description: 'How perpetuals differ from traditional futures contracts with expiration dates.',
    category: 'comparison',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'btc-perps-vs-equity-perps',
    title: 'BTC Perps vs Equity Perps: Which to Trade?',
    description: 'Comparing Bitcoin and stock perpetual markets by volatility, liquidity, and strategy.',
    category: 'comparison',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  // Tools
  {
    slug: 'funding-rate-tracker',
    title: 'Equity Perps Funding Rate Tracker',
    description: 'Compare current funding rates across all major equity perpetual platforms.',
    category: 'tools',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'fee-calculator',
    title: 'Equity Perps Fee Calculator',
    description: 'Calculate your trading costs across different platforms and position sizes.',
    category: 'tools',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    slug: 'liquidation-calculator',
    title: 'Liquidation Price Calculator',
    description: 'Find your liquidation price based on leverage, entry price, and margin.',
    category: 'tools',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getBlogPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter(p => p.category === category);
}
