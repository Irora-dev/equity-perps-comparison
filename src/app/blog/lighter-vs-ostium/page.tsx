import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lighter vs Ostium: Complete Comparison | Equity Perps',
  description: 'Compare Lighter and Ostium for equity perpetuals. ZK-powered security vs 200x leverage and 0DTE products.',
  openGraph: {
    title: 'Lighter vs Ostium Comparison',
    description: 'ZK proofs vs maximum leverage. Compare two innovative equity perps platforms.',
  },
};

const relatedArticles = [
  {
    title: 'Lighter Review',
    href: '/blog/lighter',
    description: 'ZK-powered perpetuals with zero fees for retail traders.',
    category: 'review' as const,
  },
  {
    title: 'Ostium Review',
    href: '/blog/ostium',
    description: 'RWA perpetuals with 0DTE innovation and high leverage.',
    category: 'review' as const,
  },
  {
    title: 'Best for High Leverage',
    href: '/blog/best-equity-perps-platforms-2025',
    description: 'Platforms offering the highest leverage options.',
    category: 'guide' as const,
  },
  {
    title: 'Avantis vs Ostium',
    href: '/blog/avantis-vs-ostium',
    description: 'Compare two innovative approaches to perps trading.',
    category: 'comparison' as const,
  },
];

export default function LighterVsOstium() {
  const lighter = platforms.find(p => p.id === 'lighter')!;
  const ostium = platforms.find(p => p.id === 'ostium')!;

  const comparisonData = [
    { feature: 'Chain', lighter: 'Ethereum L2 (ZK)', ostium: 'Arbitrum' },
    { feature: 'Max Leverage', lighter: '100x', ostium: '200x (100x equity market hours)' },
    { feature: 'Trading Fees', lighter: 'Zero for retail', ostium: 'Competitive' },
    { feature: 'Cumulative Volume', lighter: '$272B', ostium: '$25B' },
    { feature: 'Unique Feature', lighter: 'ZK proofs for all trades', ostium: '0DTE perpetuals' },
    { feature: 'Trading Hours', lighter: '24/7', ostium: 'Market hours focus' },
    { feature: 'Equity Perps', lighter: 'COIN, HOOD (expanding)', ostium: '10+ stocks' },
    { feature: 'Backing', lighter: 'Robinhood ($1.5B valuation)', ostium: 'General Catalyst, Jump Crypto' },
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
            headline: "Lighter vs Ostium: Complete Comparison",
            description: "Compare Lighter and Ostium for equity perpetuals. ZK-powered security vs 200x leverage and 0DTE products.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/lighter-vs-ostium" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Lighter vs Ostium' }
        ]} />

        <header className="mb-12">
          <span className="text-purple-400 text-sm font-medium">Platform Comparison</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Lighter vs Ostium
          </h1>
          <p className="text-xl text-gray-400">
            Two innovative platforms with different strengths. ZK-powered security vs maximum leverage and 0DTE products.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Lighter and Ostium represent cutting-edge innovation in the equity perps space, but they focus
            on different problems. Lighter prioritizes cryptographic security. Ostium pushes the boundaries
            on leverage and product innovation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Head to Head Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-center" style={{ color: lighter.color }}>Lighter</th>
                  <th className="py-3 px-4 text-center" style={{ color: ostium.color }}>Ostium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.lighter}</td>
                    <td className="py-3 px-4 text-center text-white">{row.ostium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Lighter</h2>

          <p className="text-gray-300">
            Lighter's ZK proof system is the gold standard for transparency. Every trade, every liquidation,
            every settlement is cryptographically verifiable. You do not have to trust the platform—you can verify.
          </p>

          <p className="text-gray-300">
            With Robinhood backing and a $1.5B valuation, Lighter has serious institutional credibility.
            The zero fee structure for retail traders means you keep more of your profits.
          </p>

          <p className="text-gray-300">
            24/7 trading availability means you can react to news outside traditional market hours.
            The platform offers consistent access regardless of when events happen.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Ostium</h2>

          <p className="text-gray-300">
            Ostium offers up to 200x leverage—double what Lighter provides. For traders who want maximum
            capital efficiency, this is a significant advantage. During market hours, equity perps
            allow 100x leverage.
          </p>

          <p className="text-gray-300">
            The 0DTE (zero days to expiration) perpetuals are unique to Ostium. These contracts auto-close
            before market close, giving you intraday exposure without overnight risk. This is perfect for
            day traders who want defined risk periods.
          </p>

          <p className="text-gray-300">
            Backed by General Catalyst and Jump Crypto, Ostium has raised $24M to build out its RWA
            perpetuals vision. The platform focuses on real-world assets with 95%+ of open interest in RWAs.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Verdict</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Choose Lighter if:</strong> You prioritize verifiable security
              and want zero trading fees. Best for security-conscious traders who value ZK proofs.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Choose Ostium if:</strong> You want maximum leverage and innovative
              products like 0DTE perps. Best for aggressive day traders seeking capital efficiency.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <ReferralButton
              href={lighter.referralUrl}
              platformName="Lighter"
              color={lighter.color}
              location="comparison_page"
              comparisonPair="lighter_vs_ostium"
              className="flex-1"
            />
            <ReferralButton
              href={ostium.referralUrl}
              platformName="Ostium"
              color={ostium.color}
              location="comparison_page"
              comparisonPair="lighter_vs_ostium"
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
