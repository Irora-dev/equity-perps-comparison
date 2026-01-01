export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: 'guide' | 'comparison' | 'review' | 'tools';
  publishedAt: string;
  updatedAt: string;
}

export const blogPosts: BlogPost[] = [
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
