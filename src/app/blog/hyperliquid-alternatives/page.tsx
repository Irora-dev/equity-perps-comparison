import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

const relatedArticles = [
  {
    title: 'Hyperliquid Review',
    href: '/blog/hyperliquid',
    description: 'Full review of Hyperliquid platform.',
    category: 'review' as const,
  },
  {
    title: 'Hyperliquid vs Lighter',
    href: '/blog/hyperliquid-vs-lighter',
    description: 'Compare the two volume leaders.',
    category: 'comparison' as const,
  },
  {
    title: 'Best Equity Perps Platforms 2025',
    href: '/blog/best-equity-perps-platforms-2025',
    description: 'Complete platform rankings.',
    category: 'guide' as const,
  },
  {
    title: 'Lighter Alternatives',
    href: '/blog/lighter-alternatives',
    description: 'Alternatives to Lighter platform.',
    category: 'guide' as const,
  },
];

const faqs = [
  {
    question: "Why look for Hyperliquid alternatives?",
    answer: "While Hyperliquid is the volume leader, you might want: higher leverage (Ostium offers 200x), true zero fees (Lighter), different security models (ZK proofs), or specific features like 0DTE perps."
  },
  {
    question: "Which alternative has the highest leverage?",
    answer: "Ostium offers up to 200x leverage, compared to Hyperliquid's 50x. Lighter and Avantis offer 100x on BTC/ETH, though equity leverage varies."
  },
  {
    question: "Which alternative has the lowest fees?",
    answer: "Lighter and Variational offer true zero trading fees. Avantis offers zero fees with a loss rebate model. Hyperliquid has zero gas but small taker fees."
  },
  {
    question: "Is there a Hyperliquid alternative with better security?",
    answer: "Lighter uses ZK proofs for cryptographic verification of all trades, which some consider superior security. Hyperliquid runs its own L1 which is less battle-tested than Ethereum."
  },
];

export const metadata: Metadata = {
  title: 'Best Hyperliquid Alternatives (2026)',
  description: 'Top alternatives to Hyperliquid for equity perpetuals trading. Compare Lighter, Ostium, Avantis, and more.',
  openGraph: {
    title: 'Hyperliquid Alternatives',
    description: 'Looking beyond Hyperliquid? Compare the best alternative equity perps platforms.',
  },
};

export default function HyperliquidAlternatives() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const lighter = platforms.find(p => p.id === 'lighter')!;
  const ostium = platforms.find(p => p.id === 'ostium')!;
  const avantis = platforms.find(p => p.id === 'avantis')!;
  const variational = platforms.find(p => p.id === 'variational')!;

  const alternatives = [
    {
      platform: lighter,
      bestFor: 'Zero fees + ZK security',
      advantage: 'Cryptographic proofs for all trades, zero trading fees, Ethereum security',
      comparison: 'vs Hyperliquid: Zero fees (vs small taker fee), ZK proofs (vs custom L1), 100x leverage (vs 50x)',
    },
    {
      platform: ostium,
      bestFor: 'Maximum leverage',
      advantage: '200x leverage, 0DTE perpetuals, auto-close feature for day traders',
      comparison: 'vs Hyperliquid: 200x leverage (vs 50x), 0DTE products (unique), RWA focus',
    },
    {
      platform: avantis,
      bestFor: 'Loss rebates',
      advantage: 'Zero fees, 20% loss rebate, Base ecosystem, Coinbase backing',
      comparison: 'vs Hyperliquid: Zero fees + rebates (vs taker fees), Base chain (vs custom L1)',
    },
    {
      platform: variational,
      bestFor: 'Market selection',
      advantage: '~500 markets, peer-to-peer RFQ trading, zero maker/taker fees',
      comparison: 'vs Hyperliquid: More markets (500 vs 50+), RFQ model (vs orderbook)',
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
            headline: "Best Hyperliquid Alternatives (2026)",
            description: "Top alternatives to Hyperliquid for equity perpetuals trading. Compare Lighter, Ostium, Avantis, and more.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/hyperliquid-alternatives" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Hyperliquid Alternatives' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Alternatives Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Best Hyperliquid Alternatives
          </h1>
          <p className="text-xl text-gray-400">
            Hyperliquid leads in volume, but alternatives offer unique advantages like higher leverage,
            zero fees, or better security models.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <h3 className="text-white font-semibold mb-3">Why Consider Alternatives?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-cyan-400">200x</p>
                <p className="text-gray-400 text-xs">Max Leverage (Ostium)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">0%</p>
                <p className="text-gray-400 text-xs">Trading Fees (Lighter)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">ZK</p>
                <p className="text-gray-400 text-xs">Proofs (Lighter)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">500+</p>
                <p className="text-gray-400 text-xs">Markets (Variational)</p>
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
                    location="hyperliquid_alternatives"
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
                  <th className="py-3 px-3 text-center" style={{ color: hyperliquid.color }}>Hyperliquid</th>
                  <th className="py-3 px-3 text-center" style={{ color: lighter.color }}>Lighter</th>
                  <th className="py-3 px-3 text-center" style={{ color: ostium.color }}>Ostium</th>
                  <th className="py-3 px-3 text-center" style={{ color: avantis.color }}>Avantis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/50 bg-gray-900/20">
                  <td className="py-2 px-3 text-gray-300">Max Leverage</td>
                  <td className="py-2 px-3 text-center text-white">50x</td>
                  <td className="py-2 px-3 text-center text-white">100x</td>
                  <td className="py-2 px-3 text-center text-white font-semibold">200x</td>
                  <td className="py-2 px-3 text-center text-white">25x</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-2 px-3 text-gray-300">Trading Fees</td>
                  <td className="py-2 px-3 text-center text-white">Low taker</td>
                  <td className="py-2 px-3 text-center text-green-400 font-semibold">Zero</td>
                  <td className="py-2 px-3 text-center text-white">Competitive</td>
                  <td className="py-2 px-3 text-center text-green-400 font-semibold">Zero</td>
                </tr>
                <tr className="border-b border-gray-800/50 bg-gray-900/20">
                  <td className="py-2 px-3 text-gray-300">Volume</td>
                  <td className="py-2 px-3 text-center text-white font-semibold">$319B</td>
                  <td className="py-2 px-3 text-center text-white">$272B</td>
                  <td className="py-2 px-3 text-center text-white">$25B</td>
                  <td className="py-2 px-3 text-center text-white">Growing</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-2 px-3 text-gray-300">Unique Feature</td>
                  <td className="py-2 px-3 text-center text-white">Liquidity</td>
                  <td className="py-2 px-3 text-center text-white">ZK proofs</td>
                  <td className="py-2 px-3 text-center text-white">0DTE</td>
                  <td className="py-2 px-3 text-center text-white">Loss rebate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Try the Top Alternative
            </h3>
            <p className="text-gray-400 mb-6">
              Lighter offers zero fees with ZK verification
            </p>
            <ReferralButton
              href={lighter.referralUrl}
              platformName="Lighter"
              color={lighter.color}
              location="hyperliquid_alternatives_bottom"
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
