import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cheapest Equity Perps Fees: Complete Platform Breakdown',
  description: 'Find the lowest fee equity perps platforms. Compare trading fees, funding rates, and total costs across all major exchanges.',
  openGraph: {
    title: 'Cheapest Equity Perps Trading Fees',
    description: 'Complete fee comparison for equity perpetual futures platforms.',
  },
};

export default function CheapestFees() {
  const zeroFeePlatforms = platforms.filter(p => p.features.zeroFees);
  const feeData = [
    { name: 'Avantis', maker: '0%', taker: '0% (fee on profit only)', funding: 'Standard', notes: '20% loss rebates available' },
    { name: 'Hyperliquid', maker: 'Rebate', taker: '0.025%', funding: 'Competitive', notes: 'Zero gas fees' },
    { name: 'Lighter', maker: '0%', taker: '0%', funding: 'Standard', notes: 'Zero fees for retail traders' },
    { name: 'Variational', maker: '0%', taker: '0%', funding: 'Via RFQ', notes: 'Spreads in RFQ pricing' },
    { name: 'TradeXYZ', maker: '0.02%', taker: '0.05%', funding: 'Standard', notes: 'Built on Hyperliquid' },
    { name: 'Ostium', maker: '0.05%', taker: '0.1%', funding: 'Standard', notes: 'Varies by asset' },
    { name: 'Tread.fi', maker: 'Varies', taker: 'Varies', funding: 'Varies', notes: 'Fixed annual license' },
    { name: 'Trove', maker: '0.05%', taker: '0.1%', funding: 'Standard', notes: 'Beta pricing' },
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
            <li className="text-gray-300">Cheapest Fees</li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Fee Comparison</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Cheapest Equity Perps Fees
          </h1>
          <p className="text-xl text-gray-400">
            Fees eat into profits faster than most traders realize. Here is what each platform actually charges.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Trading costs matter. A 0.1% fee seems small until you realize that a round trip costs 0.2%.
            Trade ten times a day and you have paid 2% in fees alone. Over a month, fees can exceed your profits.
          </p>

          <p className="text-gray-300">
            The good news is that several platforms now offer zero fee trading.
            The catch? Zero fees sometimes mean wider spreads or higher funding rates. We break it all down below.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Fee Comparison Table</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-3 text-gray-400 font-medium">Platform</th>
                  <th className="py-3 px-3 text-center text-gray-400 font-medium">Maker</th>
                  <th className="py-3 px-3 text-center text-gray-400 font-medium">Taker</th>
                  <th className="py-3 px-3 text-center text-gray-400 font-medium">Funding</th>
                  <th className="py-3 px-3 text-left text-gray-400 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((row, i) => (
                  <tr key={row.name} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-3 text-white font-medium">{row.name}</td>
                    <td className="py-3 px-3 text-center text-green-400">{row.maker}</td>
                    <td className="py-3 px-3 text-center text-white">{row.taker}</td>
                    <td className="py-3 px-3 text-center text-gray-400">{row.funding}</td>
                    <td className="py-3 px-3 text-gray-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Zero Fee Platforms Explained</h2>

          <p className="text-gray-300">
            Four platforms offer zero trading fees: Avantis, Lighter, Variational, and Hyperliquid (for makers).
            Each approaches zero fees differently.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Avantis: Pay Only When You Win</h3>

          <p className="text-gray-300">
            Avantis has the most trader friendly model. You pay nothing to open or close positions.
            Fees only apply to profitable trades. Lose money? Pay nothing. This is genuinely zero cost for losing trades.
          </p>

          <p className="text-gray-300">
            They also give 20% rebates when you trade against the crowd. This means contrarian positions can
            actually earn you money even on losses.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Lighter: True Zero for Retail</h3>

          <p className="text-gray-300">
            Lighter charges nothing for retail traders on both maker and taker orders.
            High frequency traders pay competitive fees. If you are trading manually, expect zero costs.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Variational: Zero Plus RFQ</h3>

          <p className="text-gray-300">
            Variational uses request for quote pricing. No explicit fees, but liquidity providers build their margin into quotes.
            The spread is your cost. Works well for larger orders where you can negotiate.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Hyperliquid: Maker Rebates</h3>

          <p className="text-gray-300">
            Makers on Hyperliquid receive rebates instead of paying fees. You get paid to provide liquidity.
            Takers pay 0.025% which is among the lowest in the industry. For active market makers, this is the best deal.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Hidden Costs to Watch</h2>

          <p className="text-gray-300">
            Trading fees tell only part of the story. Consider these other costs:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong className="text-white">Funding rates:</strong> Holding positions costs money. Rates vary by platform and market conditions.</li>
            <li><strong className="text-white">Spread:</strong> The difference between bid and ask is a real cost. Lower liquidity means wider spreads.</li>
            <li><strong className="text-white">Slippage:</strong> Large orders move the market. Deeper order books mean less slippage.</li>
            <li><strong className="text-white">Gas fees:</strong> Some L2s charge more than others for deposits and withdrawals.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Recommendation</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">For cost minimization:</strong> Use Avantis for the zero fee model with loss rebates.
              Best for traders who take more losing trades than winners.
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">For market makers:</strong> Hyperliquid offers rebates. You get paid to provide liquidity.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">For large orders:</strong> Variational's RFQ system lets you negotiate pricing.
              Better for size than fixed fee schedules.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 my-8">
            {zeroFeePlatforms.map(platform => (
              <ReferralButton
                key={platform.id}
                href={platform.referralUrl}
                platformName={platform.name}
                color={platform.color}
                className="text-sm"
              />
            ))}
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
