import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyperliquid vs Avantis: Complete Comparison | Equity Perps',
  description: 'Compare Hyperliquid and Avantis for equity perpetuals trading. Volume leader vs zero-fee platform on Base.',
  openGraph: {
    title: 'Hyperliquid vs Avantis Comparison',
    description: 'Hyperliquid dominates volume while Avantis offers zero fees. Which is better for your trading?',
  },
};

const relatedArticles = [
  {
    title: 'Hyperliquid Review',
    href: '/blog/hyperliquid',
    description: 'In-depth review of the largest equity perps platform.',
    category: 'review' as const,
  },
  {
    title: 'Avantis Review',
    href: '/blog/avantis',
    description: 'Zero-fee trading on Base with up to 500x leverage.',
    category: 'review' as const,
  },
  {
    title: 'Cheapest Equity Perps Fees',
    href: '/blog/cheapest-equity-perps-fees',
    description: 'Find the platform with the lowest trading costs.',
    category: 'guide' as const,
  },
  {
    title: 'Hyperliquid vs Lighter',
    href: '/blog/hyperliquid-vs-lighter',
    description: 'Compare the two largest platforms by volume.',
    category: 'comparison' as const,
  },
];

export default function HyperliquidVsAvantis() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const avantis = platforms.find(p => p.id === 'avantis')!;

  const comparisonData = [
    { feature: 'Chain', hyperliquid: 'Hyperliquid L1', avantis: 'Base (L2)' },
    { feature: 'Max Leverage', hyperliquid: '50x', avantis: '500x (crypto), 25x (equity)' },
    { feature: 'Trading Fees', hyperliquid: 'Zero gas, low taker', avantis: 'Zero fees, pay on profit' },
    { feature: 'Monthly Volume', hyperliquid: '$319B peak', avantis: 'Growing' },
    { feature: 'Settlement', hyperliquid: 'USDC', avantis: 'USDC' },
    { feature: 'Loss Rebates', hyperliquid: 'No', avantis: '20% rebate on losses' },
    { feature: 'Equity Perps', hyperliquid: '12+ stocks', avantis: 'Major equities' },
    { feature: 'Backing', hyperliquid: 'Community', avantis: 'Pantera, Coinbase, Founders Fund' },
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
            headline: "Hyperliquid vs Avantis: Complete Comparison",
            description: "Compare Hyperliquid and Avantis for equity perpetuals trading. Volume leader vs zero-fee platform on Base.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/hyperliquid-vs-avantis" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Hyperliquid vs Avantis' }
        ]} />

        <header className="mb-12">
          <span className="text-purple-400 text-sm font-medium">Platform Comparison</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Hyperliquid vs Avantis
          </h1>
          <p className="text-xl text-gray-400">
            The volume leader takes on the zero-fee challenger. Compare two different philosophies for equity perps trading.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Hyperliquid and Avantis represent two distinct approaches to building a perpetuals exchange.
            Hyperliquid optimizes for liquidity and execution. Avantis optimizes for cost efficiency with
            its unique zero-fee model.
          </p>

          <p className="text-gray-300">
            The choice between them depends heavily on your trading style and priorities.
            High-frequency traders may prioritize liquidity. Cost-conscious traders may prefer
            paying nothing unless they profit.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Head to Head Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-center" style={{ color: hyperliquid.color }}>Hyperliquid</th>
                  <th className="py-3 px-4 text-center" style={{ color: avantis.color }}>Avantis</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.hyperliquid}</td>
                    <td className="py-3 px-4 text-center text-white">{row.avantis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Hyperliquid</h2>

          <p className="text-gray-300">
            Hyperliquid's volume leadership translates to real trading advantages. You get tighter spreads,
            deeper order books, and faster fills. For traders moving significant size, this can save more
            money than fee differences.
          </p>

          <p className="text-gray-300">
            The platform also offers more equity perps—12+ stocks compared to Avantis's smaller selection.
            If you want to trade specific stocks like PLTR or HOOD, Hyperliquid likely has them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Avantis</h2>

          <p className="text-gray-300">
            Avantis's fee structure is revolutionary. You pay nothing to open a position.
            You only pay fees when you close at a profit. If you lose, you even get a 20% rebate on your losses.
          </p>

          <p className="text-gray-300">
            This model is ideal for traders with inconsistent win rates. You are not bleeding money
            on losing trades. The psychological benefit of this structure should not be underestimated.
          </p>

          <p className="text-gray-300">
            Backed by Pantera Capital, Coinbase Ventures, and Founders Fund, Avantis has strong institutional
            support. The platform is built on Base, giving you access to the Coinbase ecosystem.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Verdict</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Choose Hyperliquid if:</strong> You prioritize liquidity and need access
              to many equity perps. Best for active traders who benefit from tight spreads.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Choose Avantis if:</strong> You want zero trading fees and like the
              loss rebate model. Best for traders who want to minimize costs and prefer the Base ecosystem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="comparison_page"
              comparisonPair="hyperliquid_vs_avantis"
              className="flex-1"
            />
            <ReferralButton
              href={avantis.referralUrl}
              platformName="Avantis"
              color={avantis.color}
              location="comparison_page"
              comparisonPair="hyperliquid_vs_avantis"
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
