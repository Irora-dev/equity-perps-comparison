import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyperliquid vs Trove: Complete Comparison | Equity Perps',
  description: 'Compare Hyperliquid and Trove for perpetuals trading. Market leader vs exotic markets specialist.',
  openGraph: {
    title: 'Hyperliquid vs Trove Comparison',
    description: 'Traditional equities vs collectibles and exotic markets. Which platform suits your trading style?',
  },
};

const relatedArticles = [
  {
    title: 'Hyperliquid Review',
    href: '/blog/hyperliquid',
    description: 'The largest equity perps platform by volume.',
    category: 'review' as const,
  },
  {
    title: 'Trove Review',
    href: '/blog/trove',
    description: 'Trade perpetuals on collectibles and exotic markets.',
    category: 'review' as const,
  },
  {
    title: 'Best Equity Perps Platforms 2025',
    href: '/blog/best-equity-perps-platforms-2025',
    description: 'Complete ranking of all equity perpetual platforms.',
    category: 'guide' as const,
  },
  {
    title: 'What Are Equity Perpetuals',
    href: '/blog/what-are-equity-perpetuals',
    description: 'Complete beginner guide to equity perps.',
    category: 'guide' as const,
  },
];

export default function HyperliquidVsTrove() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const trove = platforms.find(p => p.id === 'trove')!;

  const comparisonData = [
    { feature: 'Chain', hyperliquid: 'Hyperliquid L1', trove: 'Hyperliquid' },
    { feature: 'Max Leverage', hyperliquid: '50x', trove: '5x' },
    { feature: 'Trading Fees', hyperliquid: 'Zero gas, low taker', trove: 'Low fees' },
    { feature: 'Monthly Volume', hyperliquid: '$319B peak', trove: 'Public beta' },
    { feature: 'Market Focus', hyperliquid: 'Major stocks', trove: 'Exotic markets' },
    { feature: 'Unique Markets', hyperliquid: 'NVDA, TSLA, AAPL, etc.', trove: 'Pokemon, watches, Birkin' },
    { feature: '24/7 Trading', hyperliquid: 'Yes', trove: 'Yes' },
    { feature: 'Status', hyperliquid: 'Established', trove: 'Public Beta (Nov 2025)' },
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hyperliquid vs Trove: Complete Comparison",
            description: "Compare Hyperliquid and Trove for perpetuals trading. Market leader vs exotic markets specialist.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/hyperliquid-vs-trove" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Hyperliquid vs Trove' }
        ]} />

        <header className="mb-12">
          <span className="text-purple-400 text-sm font-medium">Platform Comparison</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Hyperliquid vs Trove
          </h1>
          <p className="text-xl text-gray-400">
            The established market leader vs the exotic markets pioneer. Two very different approaches to perpetual futures.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Hyperliquid and Trove operate in the same ecosystem—Trove is actually built on Hyperliquid's infrastructure.
            But they target completely different markets and trader profiles.
          </p>

          <p className="text-gray-300">
            Hyperliquid focuses on traditional equities and BTC/ETH. Trove goes where no perps platform has gone before:
            collectibles, luxury goods, and exotic assets that have never had liquid derivatives markets.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Head to Head Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-center" style={{ color: hyperliquid.color }}>Hyperliquid</th>
                  <th className="py-3 px-4 text-center" style={{ color: trove.color }}>Trove</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.hyperliquid}</td>
                    <td className="py-3 px-4 text-center text-white">{row.trove}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Hyperliquid</h2>

          <p className="text-gray-300">
            Hyperliquid is the proven choice. Over $319B in monthly volume at peak. Battle-tested systems.
            If you want to trade NVDA, TSLA, or other major stocks, Hyperliquid has deep liquidity.
          </p>

          <p className="text-gray-300">
            Higher leverage (50x vs 5x) gives you more capital efficiency for traditional equity plays.
            The platform is mature with polished UI and reliable execution.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Trove</h2>

          <p className="text-gray-300">
            Trove opens markets that simply do not exist elsewhere. Want to trade Pokemon card prices?
            Luxury watch indices? Hermes Birkin bags? Trove makes it possible.
          </p>

          <p className="text-gray-300">
            For collectors and alternative asset enthusiasts, this is groundbreaking. You can hedge your
            physical collection or speculate on collectible markets without owning the underlying items.
          </p>

          <p className="text-gray-300">
            The lower leverage (5x) makes sense for these volatile, less liquid markets. It protects traders
            from excessive risk in markets that can move unpredictably.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Verdict</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Choose Hyperliquid if:</strong> You want to trade traditional
              equities with high leverage and deep liquidity. Best for serious equity perps traders.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Choose Trove if:</strong> You want exposure to exotic markets
              like collectibles and luxury goods. Best for alternative asset enthusiasts and collectors.
            </p>
          </div>

          <p className="text-gray-300">
            These platforms are not mutually exclusive. Many traders use Hyperliquid for equity plays
            and Trove for exotic market speculation. Consider both for a diversified derivatives portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="comparison_page"
              comparisonPair="hyperliquid_vs_trove"
              className="flex-1"
            />
            <ReferralButton
              href={trove.referralUrl}
              platformName="Trove"
              color={trove.color}
              location="comparison_page"
              comparisonPair="hyperliquid_vs_trove"
              className="flex-1"
            />
          </div>
        </div>

        <RelatedArticles articles={relatedArticles} />

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to comparison table
          </Link>
        </div>
      </article>
    </main>
  );
}
