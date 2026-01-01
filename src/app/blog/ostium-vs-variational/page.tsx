import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ostium vs Variational: Complete Comparison | Equity Perps',
  description: 'Compare Ostium and Variational for equity perpetuals. 0DTE innovation vs peer-to-peer RFQ trading.',
  openGraph: {
    title: 'Ostium vs Variational Comparison',
    description: 'Two innovative platforms on Arbitrum. Different approaches to equity perps.',
  },
};

const relatedArticles = [
  {
    title: 'Ostium Review',
    href: '/blog/ostium',
    description: 'RWA perpetuals with 0DTE and high leverage.',
    category: 'review' as const,
  },
  {
    title: 'Variational Review',
    href: '/blog/variational',
    description: 'Peer-to-peer trading with zero fees.',
    category: 'review' as const,
  },
  {
    title: 'Best Equity Perps Platforms 2025',
    href: '/blog/best-equity-perps-platforms-2025',
    description: 'Complete ranking of all platforms.',
    category: 'guide' as const,
  },
  {
    title: 'How Funding Rates Work',
    href: '/blog/how-funding-rates-work',
    description: 'Understanding the funding mechanism.',
    category: 'guide' as const,
  },
];

export default function OstiumVsVariational() {
  const ostium = platforms.find(p => p.id === 'ostium')!;
  const variational = platforms.find(p => p.id === 'variational')!;

  const comparisonData = [
    { feature: 'Chain', ostium: 'Arbitrum', variational: 'Arbitrum' },
    { feature: 'Max Leverage', ostium: '200x', variational: 'Variable' },
    { feature: 'Trading Fees', ostium: 'Competitive', variational: 'Zero maker/taker' },
    { feature: 'Trading Model', ostium: 'Oracle-based', variational: 'RFQ peer-to-peer' },
    { feature: 'Unique Feature', ostium: '0DTE perpetuals', variational: '~500 markets' },
    { feature: 'Settlement', ostium: 'USDC', variational: 'Smart contract escrows' },
    { feature: 'Cumulative Volume', ostium: '$25B', variational: 'Growing' },
    { feature: 'Backing', ostium: 'General Catalyst, Jump', variational: 'Bain Capital, Brevan Howard' },
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
            headline: "Ostium vs Variational: Complete Comparison",
            description: "Compare Ostium and Variational for equity perpetuals. 0DTE innovation vs peer-to-peer RFQ trading.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/ostium-vs-variational" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Ostium vs Variational' }
        ]} />

        <header className="mb-12">
          <span className="text-purple-400 text-sm font-medium">Platform Comparison</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Ostium vs Variational
          </h1>
          <p className="text-xl text-gray-400">
            Two innovative Arbitrum-based platforms with distinct trading models and unique features.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Both Ostium and Variational are built on Arbitrum, but they take fundamentally different approaches
            to perpetuals trading. Ostium uses an oracle-based model with innovative 0DTE products.
            Variational pioneers peer-to-peer RFQ trading.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Head to Head Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-center" style={{ color: ostium.color }}>Ostium</th>
                  <th className="py-3 px-4 text-center" style={{ color: variational.color }}>Variational</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.ostium}</td>
                    <td className="py-3 px-4 text-center text-white">{row.variational}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Ostium</h2>

          <p className="text-gray-300">
            Ostium's 0DTE perpetuals are a game-changer for day traders. These contracts auto-close before
            market close, eliminating overnight risk. You get intraday exposure with defined risk periods.
          </p>

          <p className="text-gray-300">
            With up to 200x leverage, Ostium offers the highest leverage in the equity perps space.
            The platform has processed $25B in cumulative volume, proving market acceptance.
          </p>

          <p className="text-gray-300">
            Backing from General Catalyst and Jump Crypto provides credibility and resources for growth.
            The focus on RWAs (95%+ of open interest) shows commitment to the equity perps niche.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Variational</h2>

          <p className="text-gray-300">
            Variational's RFQ (request-for-quote) system is unique. Instead of trading against an AMM or orderbook,
            you trade peer-to-peer with market makers. This can result in better pricing for larger orders.
          </p>

          <p className="text-gray-300">
            With ~500 markets available, Variational offers more selection than any other platform.
            Zero maker/taker fees keep costs down regardless of order size.
          </p>

          <p className="text-gray-300">
            Backed by traditional finance heavyweights Bain Capital and Brevan Howard, Variational
            brings institutional credibility and deep pockets to the DeFi derivatives space.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Verdict</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Choose Ostium if:</strong> You want 0DTE products and maximum
              leverage. Best for day traders who want intraday-only exposure with high capital efficiency.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Choose Variational if:</strong> You want access to hundreds of
              markets and prefer RFQ trading. Best for traders who value selection and institutional pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <ReferralButton
              href={ostium.referralUrl}
              platformName="Ostium"
              color={ostium.color}
              location="comparison_page"
              comparisonPair="ostium_vs_variational"
              className="flex-1"
            />
            <ReferralButton
              href={variational.referralUrl}
              platformName="Variational"
              color={variational.color}
              location="comparison_page"
              comparisonPair="ostium_vs_variational"
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
