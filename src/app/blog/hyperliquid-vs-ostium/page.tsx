import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyperliquid vs Ostium: Volume Leader vs RWA Specialist',
  description: 'Compare Hyperliquid and Ostium for equity perps trading. See which platform suits your trading style.',
  openGraph: {
    title: 'Hyperliquid vs Ostium Comparison',
    description: 'Generalist vs specialist: which equity perps platform is right for you?',
  },
};

export default function HyperliquidVsOstium() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const ostium = platforms.find(p => p.id === 'ostium')!;

  const comparisonData = [
    { feature: 'Chain', hyperliquid: 'Hyperliquid L1', ostium: 'Arbitrum' },
    { feature: 'Max Leverage', hyperliquid: '50x', ostium: '200x' },
    { feature: 'Focus', hyperliquid: 'Crypto + Equities', ostium: '95% Real World Assets' },
    { feature: '24/7 Trading', hyperliquid: 'Yes', ostium: 'No (market hours)' },
    { feature: 'Unique Feature', hyperliquid: 'HIP-3 protocol', ostium: '0DTE perpetuals' },
    { feature: 'Cumulative Volume', hyperliquid: '$1T+', ostium: '$25B' },
    { feature: 'Backing', hyperliquid: 'Community', ostium: 'General Catalyst, Jump' },
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Hyperliquid vs Ostium' }
        ]} />

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Platform Comparison</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Hyperliquid vs Ostium
          </h1>
          <p className="text-xl text-gray-400">
            The volume leader against the RWA specialist. Two very different platforms for equity perps traders.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            These platforms serve different traders. Hyperliquid is a general purpose perps exchange that happens to offer equities.
            Ostium was built from the ground up specifically for real world assets like stocks, commodities, and forex.
          </p>

          <p className="text-gray-300">
            That specialization shows. Over 95% of Ostium's open interest sits in RWA markets.
            Meanwhile Hyperliquid remains primarily a crypto venue with equity perps as an addition.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Side by Side</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-center" style={{ color: hyperliquid.color }}>Hyperliquid</th>
                  <th className="py-3 px-4 text-center" style={{ color: ostium.color }}>Ostium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.hyperliquid}</td>
                    <td className="py-3 px-4 text-center text-white">{row.ostium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The 0DTE Difference</h2>

          <p className="text-gray-300">
            Ostium introduced something genuinely new to decentralized trading: 0DTE perpetuals.
            These contracts behave like perpetuals during the trading day but automatically close before market close.
          </p>

          <p className="text-gray-300">
            Why does this matter? It eliminates overnight gap risk. If you have ever been stopped out by a pre-market move,
            you understand the appeal. Day traders can use high leverage without worrying about what happens while they sleep.
          </p>

          <p className="text-gray-300">
            Hyperliquid takes the opposite approach. Its equity perps trade 24/7 with no forced closes.
            You can hold positions through weekends and outside market hours. This works well if you want continuous exposure,
            but it means accepting gap risk when traditional markets reopen.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Leverage Comparison</h2>

          <p className="text-gray-300">
            Ostium offers up to 200x leverage on certain assets. This is aggressive even by crypto standards.
            During market hours on equity perps, you can access 100x.
          </p>

          <p className="text-gray-300">
            Hyperliquid caps at 50x. Still plenty for most strategies, but noticeably lower.
            The conservative approach makes sense given 24/7 trading where weekend liquidity can be thin.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Which Should You Choose?</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Choose Hyperliquid if:</strong> You want 24/7 access to equity exposure,
              trade crypto alongside stocks, or need maximum liquidity.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Choose Ostium if:</strong> You focus on day trading, want to eliminate overnight risk,
              or need high leverage on RWA markets specifically.
            </p>
          </div>

          <p className="text-gray-300">
            The platforms complement each other well. Use Hyperliquid for swing trades and weekend positioning.
            Use Ostium for high leverage day trades where you want clean exits before market close.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
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
