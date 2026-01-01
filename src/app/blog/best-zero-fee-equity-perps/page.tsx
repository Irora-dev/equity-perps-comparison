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
    description: 'Complete fee comparison across all platforms.',
    category: 'guide' as const,
  },
  {
    title: 'How Funding Rates Work',
    href: '/blog/how-funding-rates-work',
    description: 'The other cost of holding positions.',
    category: 'guide' as const,
  },
  {
    title: 'Avantis vs Lighter',
    href: '/blog/avantis-vs-lighter',
    description: 'Compare two zero-fee platforms.',
    category: 'comparison' as const,
  },
  {
    title: 'Fee Calculator',
    href: '/blog/fee-calculator',
    description: 'Calculate your actual trading costs.',
    category: 'tool' as const,
  },
];

const faqs = [
  {
    question: "Are zero-fee platforms really free?",
    answer: "Zero trading fees means no maker/taker fees on orders. However, you still pay funding rates on positions and may face wider spreads. Some platforms like Avantis charge a fee on profitable trades."
  },
  {
    question: "How do zero-fee platforms make money?",
    answer: "Different models: Lighter uses ZK proofs subsidized by investors, Avantis charges fees only on profits, Variational uses RFQ spreads, and Hyperliquid has minimal taker fees while makers earn rebates."
  },
  {
    question: "Which zero-fee platform has the best liquidity?",
    answer: "Lighter has the highest volume among true zero-fee platforms at $272B. Hyperliquid technically has zero gas fees but small taker fees, with higher overall liquidity at $319B."
  },
  {
    question: "Do zero-fee platforms have hidden costs?",
    answer: "Watch for: wider spreads, higher funding rates, withdrawal fees, and in Avantis's case, fees on profitable trades. Use our fee calculator to compare total costs."
  },
];

export const metadata: Metadata = {
  title: 'Best Zero-Fee Equity Perps Platforms (2026)',
  description: 'Trade equity perpetuals with zero trading fees. Compare Lighter, Avantis, Variational, and other fee-free platforms.',
  openGraph: {
    title: 'Best Zero-Fee Equity Perps',
    description: 'Platforms offering zero trading fees for maximum cost efficiency.',
  },
};

export default function BestZeroFee() {
  const lighter = platforms.find(p => p.id === 'lighter')!;
  const avantis = platforms.find(p => p.id === 'avantis')!;
  const variational = platforms.find(p => p.id === 'variational')!;
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;

  const rankedPlatforms = [
    {
      rank: 1,
      platform: lighter,
      feeModel: 'Zero fees for retail',
      pros: ['True zero fees', 'ZK proofs', 'High volume', '$272B traded'],
      cons: ['Limited equity perps', 'Expanding selection'],
    },
    {
      rank: 2,
      platform: avantis,
      feeModel: 'Zero fees + 20% loss rebate',
      pros: ['Zero entry fees', 'Loss rebates', 'Pantera backing', 'Base ecosystem'],
      cons: ['Fee on profitable trades', '25x equity leverage'],
    },
    {
      rank: 3,
      platform: variational,
      feeModel: 'Zero maker/taker fees',
      pros: ['Zero fees', '500+ markets', 'RFQ model', 'Bain Capital backing'],
      cons: ['Peer-to-peer model', 'Variable liquidity'],
    },
    {
      rank: 4,
      platform: hyperliquid,
      feeModel: 'Zero gas + maker rebates',
      pros: ['Zero gas fees', 'Maker rebates', 'Best liquidity', 'Most equity perps'],
      cons: ['Small taker fee', 'Not truly zero'],
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
            headline: "Best Zero-Fee Equity Perps Platforms (2026)",
            description: "Trade equity perpetuals with zero trading fees. Compare Lighter, Avantis, Variational, and other fee-free platforms.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/best-zero-fee-equity-perps" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Best Zero-Fee' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Best For Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Best Zero-Fee Equity Perps
          </h1>
          <p className="text-xl text-gray-400">
            Trade without paying trading fees. Keep more of your profits with these fee-free platforms.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Zero-fee trading has become a major differentiator in the equity perps space. Multiple platforms
            now offer fee-free trading, though the models differ. Understanding these differences helps you
            choose the right platform for your trading style.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Fee Model Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Platform</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Trading Fee</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Special Features</th>
                </tr>
              </thead>
              <tbody>
                {rankedPlatforms.map((item, i) => (
                  <tr key={item.platform.id} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4">
                      <Link href={`/blog/${item.platform.slug}`} className="font-semibold hover:text-cyan-400" style={{ color: item.platform.color }}>
                        {item.platform.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center text-green-400 font-semibold">{item.feeModel}</td>
                    <td className="py-3 px-4 text-center text-white text-sm">{item.pros[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Platforms Ranked</h2>

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
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">
                      <Link href={`/blog/${item.platform.slug}`} className="hover:text-cyan-400">
                        {item.platform.name}
                      </Link>
                    </h3>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">
                      {item.feeModel}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div>
                      <p className="text-green-400 text-xs font-semibold mb-2">PROS</p>
                      <ul className="space-y-1">
                        {item.pros.map((pro, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-400 text-xs font-semibold mb-2">CONS</p>
                      <ul className="space-y-1">
                        {item.cons.map((con, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                            <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <ReferralButton
                    href={item.platform.referralUrl}
                    platformName={item.platform.name}
                    color={item.platform.color}
                    location="best_zero_fee"
                  />
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Understanding Total Costs</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <p className="text-gray-300 text-sm mb-4">
              Trading fees are just one part of your costs. Consider these other factors:
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><strong className="text-white">Spread:</strong> The difference between bid and ask. Zero-fee platforms may have wider spreads.</li>
              <li><strong className="text-white">Funding rates:</strong> Paid every 1-8 hours on open positions. Can exceed trading fees for longer holds.</li>
              <li><strong className="text-white">Slippage:</strong> Price movement during order execution. Worse on low-liquidity platforms.</li>
              <li><strong className="text-white">Gas fees:</strong> Network fees for deposits/withdrawals (varies by chain).</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Trade with Zero Fees
            </h3>
            <p className="text-gray-400 mb-6">
              Lighter offers true zero fees with ZK verification
            </p>
            <ReferralButton
              href={lighter.referralUrl}
              platformName="Lighter"
              color={lighter.color}
              location="best_zero_fee_bottom"
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
