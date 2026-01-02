import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avantis vs Lighter: Complete Comparison | Equity Perps',
  description: 'Compare Avantis and Lighter for equity perpetuals. Zero-fee on Base vs ZK-powered on Ethereum.',
  openGraph: {
    title: 'Avantis vs Lighter Comparison',
    description: 'Two zero-fee platforms with different approaches. Compare before you trade.',
  },
};

const relatedArticles = [
  {
    title: 'Avantis Review',
    href: '/blog/avantis',
    description: 'Zero-fee trading with loss rebates on Base.',
    category: 'review' as const,
  },
  {
    title: 'Lighter Review',
    href: '/blog/lighter',
    description: 'ZK-powered perpetuals with Robinhood backing.',
    category: 'review' as const,
  },
  {
    title: 'Cheapest Equity Perps Fees',
    href: '/blog/cheapest-equity-perps-fees',
    description: 'Complete fee comparison across all platforms.',
    category: 'guide' as const,
  },
  {
    title: 'Hyperliquid vs Lighter',
    href: '/blog/hyperliquid-vs-lighter',
    description: 'Compare the two volume leaders.',
    category: 'comparison' as const,
  },
];

export default function AvantisVsLighter() {
  const avantis = platforms.find(p => p.id === 'avantis')!;
  const lighter = platforms.find(p => p.id === 'lighter')!;

  const comparisonData = [
    { feature: 'Chain', avantis: 'Base (L2)', lighter: 'Ethereum L2 (ZK)' },
    { feature: 'Max Leverage', avantis: '500x (BTC/ETH), 25x (equity)', lighter: '100x' },
    { feature: 'Trading Fees', avantis: 'Zero fees, pay on profit', lighter: 'Zero for retail' },
    { feature: 'Loss Rebates', avantis: '20% rebate', lighter: 'No' },
    { feature: 'Security Model', avantis: 'Dual oracle system', lighter: 'ZK proofs' },
    { feature: 'Backing', avantis: 'Pantera, Coinbase, Founders Fund', lighter: 'Robinhood ($1.5B)' },
    { feature: 'Equity Selection', avantis: 'Major equities', lighter: 'COIN, HOOD (expanding)' },
    { feature: 'Settlement', avantis: 'USDC', lighter: 'USDC' },
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
            headline: "Avantis vs Lighter: Complete Comparison",
            description: "Compare Avantis and Lighter for equity perpetuals. Zero-fee on Base vs ZK-powered on Ethereum.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/avantis-vs-lighter" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Avantis vs Lighter' }
        ]} />

        <header className="mb-12">
          <span className="text-purple-400 text-sm font-medium">Platform Comparison</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Avantis vs Lighter
          </h1>
          <p className="text-xl text-gray-400">
            Two platforms offering zero trading fees with different architectures. Base ecosystem vs Ethereum security.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Both Avantis and Lighter offer zero trading fees for retail traders, making them attractive
            for cost-conscious traders. But they achieve this through different mechanisms and offer
            distinct advantages.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Head to Head Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-center" style={{ color: avantis.color }}>Avantis</th>
                  <th className="py-3 px-4 text-center" style={{ color: lighter.color }}>Lighter</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.avantis}</td>
                    <td className="py-3 px-4 text-center text-white">{row.lighter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Avantis</h2>

          <p className="text-gray-300">
            Avantis goes beyond zero fees with its unique loss rebate system. If your trade loses money,
            you get 20% of your losses back. This is unprecedented in the perps market and significantly
            reduces the sting of losing trades.
          </p>

          <p className="text-gray-300">
            Built on Base, Avantis benefits from the Coinbase ecosystem and growing L2 adoption.
            The backing from Pantera, Coinbase Ventures, and Founders Fund provides strong institutional support.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Lighter</h2>

          <p className="text-gray-300">
            Lighter's ZK proof system provides mathematical guarantees that Avantis cannot match.
            Every trade is cryptographically verifiable, making it the most transparent platform available.
          </p>

          <p className="text-gray-300">
            Higher leverage options (100x vs 25x for equity) give aggressive traders more capital efficiency.
            The Robinhood backing at a $1.5B valuation signals serious institutional confidence.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Verdict</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Choose Avantis if:</strong> You want loss rebates and prefer
              the Base ecosystem. Best for traders who hate losing money on fees even when trades fail.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Choose Lighter if:</strong> You prioritize verifiable security
              and want higher leverage. Best for security-conscious traders on Ethereum.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <ReferralButton
              href={avantis.referralUrl}
              platformName="Avantis"
              color={avantis.color}
              location="comparison_page"
              comparisonPair="avantis_vs_lighter"
              className="flex-1"
            />
            <ReferralButton
              href={lighter.referralUrl}
              platformName="Lighter"
              color={lighter.color}
              location="comparison_page"
              comparisonPair="avantis_vs_lighter"
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
