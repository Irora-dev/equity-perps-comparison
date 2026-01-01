import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

const relatedArticles = [
  {
    title: 'Cheapest Equity Perps Fees',
    href: '/blog/cheapest-equity-perps-fees',
    description: 'Minimize costs for active trading.',
    category: 'guide' as const,
  },
  {
    title: 'How Funding Rates Work',
    href: '/blog/how-funding-rates-work',
    description: 'Important for intraday positions.',
    category: 'guide' as const,
  },
  {
    title: 'NVDA Perpetuals',
    href: '/blog/nvda-perpetuals',
    description: 'Most popular stock for day trading.',
    category: 'guide' as const,
  },
  {
    title: 'Hyperliquid Review',
    href: '/blog/hyperliquid',
    description: 'Best liquidity for day traders.',
    category: 'review' as const,
  },
];

const faqs = [
  {
    question: "Which platform has the best execution for day trading?",
    answer: "Hyperliquid offers the best execution due to its massive volume and deep order books. Tighter spreads and faster fills make a significant difference for active traders."
  },
  {
    question: "Do I pay funding rates if I close before funding time?",
    answer: "No. Funding rates are only paid/received at the funding timestamp (every 1-8 hours depending on platform). If you close your position before funding, you avoid the payment entirely."
  },
  {
    question: "What is the best time to day trade equity perps?",
    answer: "US market hours (9:30 AM - 4 PM ET) offer the best liquidity and price action. The open (9:30-11 AM) and close (3-4 PM) typically have the highest volume."
  },
  {
    question: "Can I day trade without PDT restrictions?",
    answer: "Yes. Equity perps platforms do not have Pattern Day Trader rules. You can make unlimited day trades regardless of account size."
  },
];

export const metadata: Metadata = {
  title: 'Best Equity Perps Platforms for Day Trading (2026)',
  description: 'Top platforms for day trading equity perpetuals. Fast execution, low fees, and deep liquidity.',
  openGraph: {
    title: 'Best Equity Perps for Day Trading',
    description: 'Platforms ranked by execution speed, fees, and liquidity for active traders.',
  },
};

export default function BestDayTrading() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const lighter = platforms.find(p => p.id === 'lighter')!;
  const ostium = platforms.find(p => p.id === 'ostium')!;

  const rankedPlatforms = [
    {
      rank: 1,
      platform: hyperliquid,
      reason: 'Best overall for day trading',
      pros: ['Highest liquidity', 'Sub-second fills', 'Zero gas fees', 'Tight spreads', 'Most markets'],
    },
    {
      rank: 2,
      platform: lighter,
      reason: 'Best for cost-conscious day traders',
      pros: ['Zero trading fees', 'Fast execution', 'Millisecond latency', 'ZK verification'],
    },
    {
      rank: 3,
      platform: ostium,
      reason: 'Best for intraday-only positions',
      pros: ['0DTE perpetuals', 'Auto-close feature', 'No overnight risk', 'High leverage'],
    },
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
            headline: "Best Equity Perps Platforms for Day Trading (2026)",
            description: "Top platforms for day trading equity perpetuals. Fast execution, low fees, and deep liquidity.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/best-equity-perps-day-trading" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Best for Day Trading' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-yellow-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Best For Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Best Equity Perps for Day Trading
          </h1>
          <p className="text-xl text-gray-400">
            Platforms optimized for active traders. Fast execution, low costs, and no PDT restrictions.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Day trading equity perps has significant advantages over traditional stock day trading.
            No Pattern Day Trader rule, no $25k minimum, and access to leverage. But execution quality
            and fees matter even more when you are trading frequently.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">What Day Traders Need</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Fast Execution</h3>
              <p className="text-gray-400 text-sm">Millisecond fills without slippage</p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Low Fees</h3>
              <p className="text-gray-400 text-sm">Every basis point matters with frequency</p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Deep Liquidity</h3>
              <p className="text-gray-400 text-sm">Size in and out without moving price</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Top Platforms for Day Trading</h2>

          {rankedPlatforms.map((item) => (
            <div key={item.platform.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-gray-900 flex-shrink-0"
                  style={{ backgroundColor: item.platform.color }}
                >
                  {item.rank}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    <Link href={`/blog/${item.platform.slug}`} className="hover:text-cyan-400">
                      {item.platform.name}
                    </Link>
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{item.reason}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    {item.pros.map((pro, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {pro}
                      </li>
                    ))}
                  </ul>
                  <ReferralButton
                    href={item.platform.referralUrl}
                    platformName={item.platform.name}
                    color={item.platform.color}
                    location="best_day_trading"
                  />
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Day Trading Tips for Equity Perps</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <ul className="text-gray-300 text-sm space-y-3">
              <li><strong className="text-white">Trade during US hours:</strong> Liquidity and volatility peak when traditional markets are open</li>
              <li><strong className="text-white">Close before funding:</strong> Avoid paying funding rates by closing positions before the 8-hour mark</li>
              <li><strong className="text-white">Use limit orders:</strong> Market orders cost more in spread—use limits when possible</li>
              <li><strong className="text-white">Watch for earnings:</strong> Know when underlying stocks report to avoid unexpected volatility</li>
              <li><strong className="text-white">Scale positions:</strong> Enter and exit in chunks rather than all at once</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Start Day Trading Equity Perps
            </h3>
            <p className="text-gray-400 mb-6">
              Hyperliquid offers the best execution for active traders
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="best_day_trading_bottom"
            />
          </div>
        </div>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />

        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all guides
          </Link>
        </div>
      </article>
    </main>
  );
}
