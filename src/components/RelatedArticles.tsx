import Link from 'next/link';

interface Article {
  title: string;
  href: string;
  description: string;
  category: 'guide' | 'comparison' | 'review' | 'tool' | 'essential';
}

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
  includeWalletGuide?: boolean;
}

const categoryColors = {
  guide: 'text-green-400',
  comparison: 'text-purple-400',
  review: 'text-yellow-400',
  tool: 'text-cyan-400',
  essential: 'text-cyan-400',
};

const categoryLabels = {
  guide: 'Guide',
  comparison: 'Comparison',
  review: 'Review',
  tool: 'Tool',
  essential: 'Essential',
};

const walletGuideArticle: Article = {
  title: 'Wallet Setup Guide',
  href: '/blog/wallet-setup-guide',
  description: 'Step-by-step guide to creating and funding your wallet',
  category: 'essential',
};

export default function RelatedArticles({
  articles,
  title = "Related Articles",
  includeWalletGuide = false
}: RelatedArticlesProps) {
  const displayArticles = includeWalletGuide
    ? [walletGuideArticle, ...articles.filter(a => a.href !== '/blog/wallet-setup-guide')]
    : articles;

  return (
    <section className="my-12 pt-8 border-t border-gray-800">
      <h2 className="text-xl font-bold text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayArticles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group p-4 bg-gray-900/30 border border-gray-800/50 rounded-lg hover:border-gray-700 hover:bg-gray-900/50 transition-all"
          >
            <span className={`text-xs font-medium ${categoryColors[article.category]}`}>
              {categoryLabels[article.category]}
            </span>
            <h3 className="text-white font-semibold mt-1 group-hover:text-cyan-400 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Pre-defined article sets for common use cases
export const beginnerArticles: Article[] = [
  walletGuideArticle,
  {
    title: 'How to Trade Equity Perps',
    href: '/blog/how-to-trade-equity-perps',
    description: 'Complete trading guide for beginners',
    category: 'guide',
  },
  {
    title: 'Equity Perps Risks',
    href: '/blog/equity-perps-risks',
    description: 'What you need to know before trading',
    category: 'guide',
  },
  {
    title: 'Hyperliquid Tutorial',
    href: '/blog/hyperliquid-tutorial',
    description: 'Platform-specific walkthrough',
    category: 'guide',
  },
];

export const tradingArticles: Article[] = [
  walletGuideArticle,
  {
    title: 'Funding Rate Farming',
    href: '/blog/funding-rate-farming',
    description: 'Earn yield on your positions',
    category: 'guide',
  },
  {
    title: 'Equity Perps Risks',
    href: '/blog/equity-perps-risks',
    description: 'Protect your capital',
    category: 'guide',
  },
  {
    title: 'Short Stocks Without Borrowing',
    href: '/blog/short-stocks-without-borrowing',
    description: 'Easy shorting with perps',
    category: 'guide',
  },
];

export const comparisonArticles: Article[] = [
  walletGuideArticle,
  {
    title: 'Perps vs Options',
    href: '/blog/equity-perps-vs-options',
    description: 'Compare leverage trading methods',
    category: 'comparison',
  },
  {
    title: 'Perps vs Futures',
    href: '/blog/equity-perps-vs-futures',
    description: 'Key differences explained',
    category: 'comparison',
  },
  {
    title: 'Perps vs CFDs',
    href: '/blog/equity-perps-vs-cfds',
    description: 'How they compare for stock trading',
    category: 'comparison',
  },
];
