import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avantis vs Ostium: Base vs Arbitrum for Equity Perps',
  description: 'Compare Avantis and Ostium for RWA perpetuals. Different chains, different fee models, different trading experiences.',
  openGraph: {
    title: 'Avantis vs Ostium Comparison',
    description: 'Two RWA focused platforms on different L2s. Which one fits your style?',
  },
};

export default function AvantisVsOstium() {
  const avantis = platforms.find(p => p.id === 'avantis')!;
  const ostium = platforms.find(p => p.id === 'ostium')!;

  const comparisonData = [
    { feature: 'Chain', avantis: 'Base', ostium: 'Arbitrum' },
    { feature: 'Equity Leverage', avantis: '25x', ostium: '100x (market hours)' },
    { feature: 'Fee Model', avantis: 'Zero (pay on profit only)', ostium: 'Standard fees' },
    { feature: '24/7 Trading', avantis: 'Yes', ostium: 'No' },
    { feature: 'Loss Rebates', avantis: '20%', ostium: 'None' },
    { feature: 'Oracle System', avantis: 'Dual (Pyth + Chainlink)', ostium: 'Standard' },
    { feature: 'TVL', avantis: '$23M', ostium: 'Growing' },
    { feature: 'Backing', avantis: 'Pantera, Coinbase', ostium: 'General Catalyst, Jump' },
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
            headline: "Avantis vs Ostium: Base vs Arbitrum for Equity Perps",
            description: "Compare Avantis and Ostium for RWA perpetuals. Different chains, different fee models, different trading experiences.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2025-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/avantis-vs-ostium" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Avantis vs Ostium' }
        ]} />

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Platform Comparison</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Avantis vs Ostium
          </h1>
          <p className="text-xl text-gray-400">
            Both platforms focus on real world assets. The similarities end there.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Avantis and Ostium both position themselves as RWA focused perpetuals platforms.
            But they make very different tradeoffs on fees, leverage, and trading hours.
          </p>

          <p className="text-gray-300">
            Avantis runs on Base with Coinbase backing. Ostium chose Arbitrum with institutional investors.
            Both L2s are solid, so this comes down to where you already have funds and which ecosystem you prefer.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Direct Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-center" style={{ color: avantis.color }}>Avantis</th>
                  <th className="py-3 px-4 text-center" style={{ color: ostium.color }}>Ostium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.avantis}</td>
                    <td className="py-3 px-4 text-center text-white">{row.ostium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Zero Fee Model</h2>

          <p className="text-gray-300">
            Avantis pioneered an unusual fee structure. You pay nothing to open or close positions.
            Fees only apply when you close a profitable trade. Lose money and you pay zero.
          </p>

          <p className="text-gray-300">
            It gets better. Avantis gives you 20% rebates on losses when you trade against the crowd.
            This creates interesting opportunities for contrarian traders. If everyone is long, your short position
            gets a discount even if you lose.
          </p>

          <p className="text-gray-300">
            Ostium uses traditional fees. You pay to trade regardless of outcome.
            The upside is that fees are predictable. You know your costs upfront.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Leverage and Risk</h2>

          <p className="text-gray-300">
            Here is where Ostium pulls ahead for aggressive traders. You can access 100x leverage on equities during market hours.
            Avantis caps at 25x for stocks.
          </p>

          <p className="text-gray-300">
            The lower leverage on Avantis makes sense given 24/7 trading. Weekend gaps with 100x positions would wipe out
            many traders. Ostium avoids this by closing positions before market close.
          </p>

          <p className="text-gray-300">
            For BTC/ETH, Avantis offers up to 500x. But we are comparing equity perps here, and 25x versus 100x is a significant difference
            for those who want to maximize capital efficiency.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Oracle Protection</h2>

          <p className="text-gray-300">
            Avantis uses two independent price feeds. Trades get cancelled if Pyth and Chainlink disagree by more than 5%.
            This protects against oracle manipulation and bad price data.
          </p>

          <p className="text-gray-300">
            After the various oracle exploits across DeFi, this dual system provides meaningful protection.
            You sacrifice some execution certainty for better security.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Verdict</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Choose Avantis if:</strong> You want zero fee trading, appreciate loss rebates,
              or prefer 24/7 access to equity exposure with conservative leverage.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Choose Ostium if:</strong> You need higher leverage for day trading,
              prefer market hours only trading, or want the 0DTE product for intraday plays.
            </p>
          </div>

          <p className="text-gray-300">
            Cost conscious traders lean toward Avantis. The zero fee model saves real money over time.
            Leverage seekers prefer Ostium. The 4x difference in max leverage is hard to ignore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <ReferralButton
              href={avantis.referralUrl}
              platformName="Avantis"
              color={avantis.color}
              className="flex-1"
            />
            <ReferralButton
              href={ostium.referralUrl}
              platformName="Ostium"
              color={ostium.color}
              className="flex-1"
            />
          </div>
        </div>

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
