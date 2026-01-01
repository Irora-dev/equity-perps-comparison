import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equity Perps vs CFDs: Key Differences Explained',
  description: 'Compare equity perpetuals with CFDs. Understand the differences in fees, leverage, counterparty risk, and regulation.',
  openGraph: {
    title: 'Equity Perps vs CFDs',
    description: 'How decentralized perpetuals compare to traditional contracts for difference.',
  },
};

export default function EquityPerpsVsCFDs() {
  const comparisonData = [
    { feature: 'Counterparty', perps: 'Smart contracts / DEX', cfds: 'Broker' },
    { feature: 'Custody', perps: 'Self custody (your wallet)', cfds: 'Broker holds funds' },
    { feature: 'Regulation', perps: 'Unregulated (mostly)', cfds: 'Regulated (varies by country)' },
    { feature: 'Trading Hours', perps: '24/7 on most platforms', cfds: 'Market hours typically' },
    { feature: 'KYC Required', perps: 'No (decentralized)', cfds: 'Yes' },
    { feature: 'Max Leverage', perps: 'Up to 200x', cfds: '2x to 30x (regulated)' },
    { feature: 'Fees', perps: 'Trading + Funding', cfds: 'Spread + Overnight' },
    { feature: 'Settlement', perps: 'USDC / Crypto', cfds: 'Fiat currency' },
    { feature: 'Withdrawal Speed', perps: 'Minutes', cfds: 'Days' },
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-300">Equity Perps vs CFDs</li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Comparison Guide</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Equity Perps vs CFDs
          </h1>
          <p className="text-xl text-gray-400">
            Both products let you trade stock exposure with leverage. The similarities largely end there.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            CFDs (Contracts for Difference) have been the traditional way to trade leveraged stock exposure outside the US.
            Equity perpetuals are the crypto native alternative. Each has distinct advantages depending on your priorities.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Side by Side</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-center text-cyan-400">Equity Perps</th>
                  <th className="py-3 px-4 text-center text-purple-400">CFDs</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.perps}</td>
                    <td className="py-3 px-4 text-center text-white">{row.cfds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Equity Perps</h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Self Custody</h3>
          <p className="text-gray-300">
            Your funds stay in your wallet until you open a position. No broker can freeze your account,
            delay withdrawals, or go bankrupt with your money. This matters. CFD brokers have failed before,
            leaving clients fighting for their funds.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">No KYC</h3>
          <p className="text-gray-300">
            Decentralized platforms do not require identity verification. Connect a wallet and trade.
            This provides privacy and removes barriers to entry. Anyone with internet access can participate.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Higher Leverage</h3>
          <p className="text-gray-300">
            Regulated CFD brokers cap leverage at 30x in Europe and even lower elsewhere.
            Equity perps offer up to 200x on some platforms. Whether you should use that leverage is another question,
            but the option exists.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">24/7 Trading</h3>
          <p className="text-gray-300">
            Most equity perps platforms operate around the clock. React to news instantly instead of waiting
            for market open. This is especially valuable for global traders in different time zones.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for CFDs</h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Regulation</h3>
          <p className="text-gray-300">
            Regulated brokers provide legal protections. Segregated client funds, dispute resolution mechanisms,
            and compensation schemes exist. If something goes wrong, you have recourse. With decentralized platforms,
            code is law. Bugs and exploits offer no recourse.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Fiat Integration</h3>
          <p className="text-gray-300">
            CFDs settle in your local currency. No need to convert to crypto, bridge between chains,
            or manage stablecoin exposure. For traders who prefer to stay in traditional finance rails,
            this simplifies everything.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Established Infrastructure</h3>
          <p className="text-gray-300">
            CFD platforms have decades of development. Mobile apps, customer support, educational resources,
            and integration with tax software are mature. Crypto platforms are catching up but have not reached parity.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Cost Comparison</h2>

          <p className="text-gray-300">
            CFDs typically charge through spreads. The bid ask difference is your cost. Overnight fees apply
            for holding positions past market close. Some brokers add commissions on top.
          </p>

          <p className="text-gray-300">
            Equity perps charge trading fees (often zero) plus funding rates. Funding accumulates continuously
            rather than overnight. For short term trades, perps are usually cheaper. For long holds, it depends
            on funding rate conditions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Risk Considerations</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <h3 className="text-white font-bold mb-3">Equity Perps Risks</h3>
            <ul className="text-gray-400 text-sm space-y-1 mb-4">
              <li>Smart contract exploits</li>
              <li>Oracle manipulation</li>
              <li>Regulatory uncertainty</li>
              <li>No customer support for errors</li>
              <li>Stablecoin depegging</li>
            </ul>

            <h3 className="text-white font-bold mb-3">CFD Risks</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Broker insolvency</li>
              <li>Account freezes</li>
              <li>Requotes and slippage</li>
              <li>Limited trading during volatility</li>
              <li>Counterparty conflicts of interest</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Which Should You Choose?</h2>

          <p className="text-gray-300">
            The answer depends on what you value. If self custody, privacy, and higher leverage matter most,
            equity perps are the better choice. If you want regulatory protection and prefer fiat currency,
            CFDs make more sense.
          </p>

          <p className="text-gray-300">
            Many traders use both. CFDs for larger, longer term positions where regulatory protection provides peace of mind.
            Equity perps for shorter term trades where 24/7 access and lower fees provide edge.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300">
              Ready to try equity perps?{' '}
              <Link href="/" className="text-cyan-400 hover:text-cyan-300">
                Compare platforms
              </Link>
              {' '}to find the best fit for your trading style.
            </p>
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
