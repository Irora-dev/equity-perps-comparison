import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

const relatedArticles = [
  {
    title: 'Lighter Review',
    href: '/blog/lighter',
    description: 'Full review of Lighter platform.',
    category: 'review' as const,
  },
  {
    title: 'Hyperliquid vs Lighter',
    href: '/blog/hyperliquid-vs-lighter',
    description: 'Compare the two volume leaders.',
    category: 'comparison' as const,
  },
  {
    title: 'Best Zero-Fee Platforms',
    href: '/blog/best-zero-fee-equity-perps',
    description: 'All platforms with zero trading fees.',
    category: 'guide' as const,
  },
  {
    title: 'Hyperliquid Alternatives',
    href: '/blog/hyperliquid-alternatives',
    description: 'Alternatives to the volume leader.',
    category: 'guide' as const,
  },
];

const faqs = [
  {
    question: "Why look for Lighter alternatives?",
    answer: "You might want: more equity perps selection (Hyperliquid has 12+ vs Lighter's expanding list), different fee models (Avantis loss rebates), or higher leverage (Ostium 200x)."
  },
  {
    question: "Which alternative has more equity perps?",
    answer: "Hyperliquid offers 12+ equity perpetuals including NVDA, TSLA, AAPL, MSFT, and more. Lighter is expanding but currently has fewer options."
  },
  {
    question: "Is there an alternative with similar security?",
    answer: "While no other platform uses ZK proofs like Lighter, Hyperliquid's battle-tested volume ($319B+) provides confidence through track record rather than cryptographic proofs."
  },
  {
    question: "Which alternative also has zero fees?",
    answer: "Avantis and Variational both offer zero trading fees. Avantis adds a 20% loss rebate. Hyperliquid has zero gas fees but small taker fees."
  },
];

export const metadata: Metadata = {
  title: 'Best Lighter Alternatives (2026)',
  description: 'Top alternatives to Lighter for equity perpetuals trading. Compare Hyperliquid, Ostium, Avantis, and more.',
  openGraph: {
    title: 'Lighter Alternatives',
    description: 'Looking beyond Lighter? Compare the best alternative equity perps platforms.',
  },
};

export default function LighterAlternatives() {
  const lighter = platforms.find(p => p.id === 'lighter')!;
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const ostium = platforms.find(p => p.id === 'ostium')!;
  const avantis = platforms.find(p => p.id === 'avantis')!;
  const variational = platforms.find(p => p.id === 'variational')!;

  const alternatives = [
    {
      platform: hyperliquid,
      bestFor: 'Most equity perps + liquidity',
      advantage: 'Largest volume, 12+ equity perps, deepest liquidity, mobile app',
      comparison: 'vs Lighter: More equity perps (12+ vs few), higher volume ($319B vs $272B), custom L1 (vs ZK rollup)',
    },
    {
      platform: avantis,
      bestFor: 'Zero fees with loss rebates',
      advantage: 'Zero fees plus 20% rebate on losses, Base ecosystem, Coinbase backing',
      comparison: 'vs Lighter: Loss rebates (unique), Base chain (vs Ethereum L2), similar zero-fee model',
    },
    {
      platform: ostium,
      bestFor: 'High leverage + 0DTE',
      advantage: '200x leverage, unique 0DTE perpetuals, auto-close feature',
      comparison: 'vs Lighter: Higher leverage (200x vs 100x), 0DTE products (unique), Arbitrum (vs Ethereum L2)',
    },
    {
      platform: variational,
      bestFor: 'Market selection',
      advantage: '~500 markets, peer-to-peer RFQ, zero maker/taker fees',
      comparison: 'vs Lighter: More markets (500 vs limited), RFQ model (vs orderbook), both zero fees',
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
            headline: "Best Lighter Alternatives (2026)",
            description: "Top alternatives to Lighter for equity perpetuals trading. Compare Hyperliquid, Ostium, Avantis, and more.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/lighter-alternatives" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Lighter Alternatives' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Alternatives Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Best Lighter Alternatives
          </h1>
          <p className="text-xl text-gray-400">
            Lighter offers ZK security and zero fees. Alternatives provide more equity perps,
            higher leverage, or unique features like loss rebates.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <h3 className="text-white font-semibold mb-3">Why Consider Alternatives?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-cyan-400">12+</p>
                <p className="text-gray-400 text-xs">Equity Perps (Hyperliquid)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-400">200x</p>
                <p className="text-gray-400 text-xs">Max Leverage (Ostium)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">20%</p>
                <p className="text-gray-400 text-xs">Loss Rebate (Avantis)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">$319B</p>
                <p className="text-gray-400 text-xs">Volume (Hyperliquid)</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Top Alternatives</h2>

          {alternatives.map((item, index) => (
            <div key={item.platform.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-gray-900 flex-shrink-0"
                  style={{ backgroundColor: item.platform.color }}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      <Link href={`/blog/${item.platform.slug}`} className="hover:text-cyan-400">
                        {item.platform.name}
                      </Link>
                    </h3>
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      Best for: {item.bestFor}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{item.advantage}</p>
                  <p className="text-gray-500 text-xs mb-4">{item.comparison}</p>
                  <ReferralButton
                    href={item.platform.referralUrl}
                    platformName={item.platform.name}
                    color={item.platform.color}
                    location="lighter_alternatives"
                  />
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Quick Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-3 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-3 text-center" style={{ color: lighter.color }}>Lighter</th>
                  <th className="py-3 px-3 text-center" style={{ color: hyperliquid.color }}>Hyperliquid</th>
                  <th className="py-3 px-3 text-center" style={{ color: avantis.color }}>Avantis</th>
                  <th className="py-3 px-3 text-center" style={{ color: ostium.color }}>Ostium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/50 bg-gray-900/20">
                  <td className="py-2 px-3 text-gray-300">Equity Perps</td>
                  <td className="py-2 px-3 text-center text-white">Expanding</td>
                  <td className="py-2 px-3 text-center text-white font-semibold">12+</td>
                  <td className="py-2 px-3 text-center text-white">Several</td>
                  <td className="py-2 px-3 text-center text-white">10+</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-2 px-3 text-gray-300">Max Leverage</td>
                  <td className="py-2 px-3 text-center text-white">100x</td>
                  <td className="py-2 px-3 text-center text-white">50x</td>
                  <td className="py-2 px-3 text-center text-white">25x</td>
                  <td className="py-2 px-3 text-center text-white font-semibold">200x</td>
                </tr>
                <tr className="border-b border-gray-800/50 bg-gray-900/20">
                  <td className="py-2 px-3 text-gray-300">Zero Fees</td>
                  <td className="py-2 px-3 text-center text-green-400">Yes</td>
                  <td className="py-2 px-3 text-center text-white">Gas only</td>
                  <td className="py-2 px-3 text-center text-green-400">Yes + rebate</td>
                  <td className="py-2 px-3 text-center text-white">No</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-2 px-3 text-gray-300">Unique</td>
                  <td className="py-2 px-3 text-center text-white">ZK proofs</td>
                  <td className="py-2 px-3 text-center text-white">Liquidity</td>
                  <td className="py-2 px-3 text-center text-white">Loss rebate</td>
                  <td className="py-2 px-3 text-center text-white">0DTE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Try the Top Alternative
            </h3>
            <p className="text-gray-400 mb-6">
              Hyperliquid offers the most equity perps with highest liquidity
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="lighter_alternatives_bottom"
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
