import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lighter vs Avantis: Complete Comparison | Equity Perps',
  description: 'Compare Lighter and Avantis for zero-fee equity perpetuals. ZK proofs vs loss rebates.',
  openGraph: {
    title: 'Lighter vs Avantis Comparison',
    description: 'Both offer zero fees but with different approaches. Find your best fit.',
  },
};

const relatedArticles = [
  {
    title: 'Lighter Review',
    href: '/blog/lighter',
    description: 'ZK-powered perpetuals with Robinhood backing.',
    category: 'review' as const,
  },
  {
    title: 'Avantis Review',
    href: '/blog/avantis',
    description: 'Zero-fee trading with loss rebates.',
    category: 'review' as const,
  },
  {
    title: 'Cheapest Equity Perps Fees',
    href: '/blog/cheapest-equity-perps-fees',
    description: 'Compare fees across all platforms.',
    category: 'guide' as const,
  },
  {
    title: 'Hyperliquid vs Lighter',
    href: '/blog/hyperliquid-vs-lighter',
    description: 'Compare the volume leaders.',
    category: 'comparison' as const,
  },
];

export default function LighterVsAvantis() {
  const lighter = platforms.find(p => p.id === 'lighter')!;
  const avantis = platforms.find(p => p.id === 'avantis')!;

  const comparisonData = [
    { feature: 'Chain', lighter: 'Ethereum L2 (ZK)', avantis: 'Base (L2)' },
    { feature: 'Max Leverage', lighter: '100x', avantis: '500x (BTC/ETH), 25x (equity)' },
    { feature: 'Trading Fees', lighter: 'Zero for retail', avantis: 'Zero fees' },
    { feature: 'Loss Rebates', lighter: 'No', avantis: '20% rebate' },
    { feature: 'Security', lighter: 'ZK proofs', avantis: 'Dual oracle' },
    { feature: 'Valuation', lighter: '$1.5B', avantis: '$8M raised' },
    { feature: 'Backing', lighter: 'Robinhood', avantis: 'Pantera, Coinbase' },
    { feature: 'Volume', lighter: '$272B', avantis: 'Growing' },
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
            headline: "Lighter vs Avantis: Complete Comparison",
            description: "Compare Lighter and Avantis for zero-fee equity perpetuals. ZK proofs vs loss rebates.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/lighter-vs-avantis" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Lighter vs Avantis' }
        ]} />

        <header className="mb-12">
          <span className="text-purple-400 text-sm font-medium">Platform Comparison</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Lighter vs Avantis
          </h1>
          <p className="text-xl text-gray-400">
            Two platforms that eliminate trading fees with different innovations. Cryptographic security vs loss rebates.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Lighter and Avantis both offer zero trading fees, making them stand out in a market where
            fees quickly eat into profits. But the similarities end there—these platforms have very
            different value propositions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Head to Head Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-center" style={{ color: lighter.color }}>Lighter</th>
                  <th className="py-3 px-4 text-center" style={{ color: avantis.color }}>Avantis</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.lighter}</td>
                    <td className="py-3 px-4 text-center text-white">{row.avantis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Lighter</h2>

          <p className="text-gray-300">
            Lighter's ZK proof system offers unmatched transparency. Every trade is cryptographically
            verifiable on Ethereum. For traders who prioritize security and verifiability, this is the gold standard.
          </p>

          <p className="text-gray-300">
            Higher equity leverage (100x vs 25x) means more capital efficiency for aggressive traders.
            The Robinhood backing at $1.5B valuation provides strong institutional credibility.
          </p>

          <p className="text-gray-300">
            With $272B in cumulative volume, Lighter has proven market acceptance and deep liquidity.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Avantis</h2>

          <p className="text-gray-300">
            Avantis's 20% loss rebate is unique in the market. When you lose money on a trade,
            you get 20% back. This significantly softens the blow of losing trades and improves
            overall expected value.
          </p>

          <p className="text-gray-300">
            Built on Base (Coinbase's L2), Avantis benefits from the growing Base ecosystem.
            Backing from Pantera, Coinbase Ventures, and Founders Fund shows strong institutional support.
          </p>

          <p className="text-gray-300">
            The 500x BTC/ETH leverage is the highest in the market, though equity leverage is more modest at 25x.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Verdict</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Choose Lighter if:</strong> You prioritize cryptographic security
              and want higher equity leverage. Best for security-minded traders on Ethereum.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Choose Avantis if:</strong> You want loss rebates and prefer
              the Base ecosystem. Best for traders who value getting money back on losing trades.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <ReferralButton
              href={lighter.referralUrl}
              platformName="Lighter"
              color={lighter.color}
              location="comparison_page"
              comparisonPair="lighter_vs_avantis"
              className="flex-1"
            />
            <ReferralButton
              href={avantis.referralUrl}
              platformName="Avantis"
              color={avantis.color}
              location="comparison_page"
              comparisonPair="lighter_vs_avantis"
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
