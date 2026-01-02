import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Equity Perps Risks: What You Need to Know Before Trading',
  description: 'Understand the risks of trading equity perpetuals including liquidation, leverage, funding rates, and regulatory considerations. Essential reading before you start.',
  keywords: [
    'equity perps risks',
    'perpetual futures risks',
    'equity perpetuals dangers',
    'leverage trading risks',
    'liquidation risk perps',
    'is equity perps safe',
    'perps trading risks',
    'decentralized trading risks',
  ],
  openGraph: {
    title: 'Equity Perps Risks: What You Need to Know',
    description: 'Understand the risks before trading equity perpetuals.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://compareequityperps.com/blog/equity-perps-risks/',
  },
};

export default function EquityPerpsRisks() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Equity Perps Risks</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Equity Perps Risks: What You Need to Know
          </h1>
          <p className="text-xl text-gray-400">
            Equity perpetuals offer powerful features, but they come with significant risks.
            Understand these before you trade.
          </p>
        </header>

        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-semibold text-red-400 mb-3">Risk Warning</h2>
          <p className="text-gray-300">
            Trading equity perpetuals involves substantial risk of loss. You can lose more than your initial
            deposit. Only trade with money you can afford to lose. This is not financial advice.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Liquidation Risk</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">What it is:</strong> If the price moves against your position enough
              to deplete your margin, your position is automatically closed (liquidated) and you lose your collateral.
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4 my-4">
              <p className="text-sm text-gray-400 mb-2">Example:</p>
              <p className="text-gray-300 text-sm">
                You open a 10x long on NVDA at $140 with $100 margin. If NVDA drops ~10%, you&apos;re liquidated
                and lose your $100. Higher leverage = smaller price move needed to liquidate.
              </p>
            </div>
            <p className="text-cyan-400 text-sm">
              <strong>Mitigation:</strong> Use lower leverage (2-5x), set stop-losses, don&apos;t over-concentrate in one position.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Leverage Amplifies Losses</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              Leverage works both ways. While 10x leverage turns a 5% gain into 50%, it also turns a 5% loss into 50%.
            </p>
            <div className="grid grid-cols-3 gap-4 my-4 text-center text-sm">
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-gray-500">Price Move</p>
                <p className="text-white font-bold">-5%</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-gray-500">At 10x</p>
                <p className="text-red-400 font-bold">-50%</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-gray-500">At 50x</p>
                <p className="text-red-400 font-bold">-250% (liquidated)</p>
              </div>
            </div>
            <p className="text-cyan-400 text-sm">
              <strong>Mitigation:</strong> Start with 2-5x leverage. Increase only after you understand the mechanics.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Funding Rate Costs</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              Funding rates are periodic payments between longs and shorts. When positive, longs pay shorts.
              These can add up over time, eating into profits or adding to losses.
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4 my-4">
              <p className="text-sm text-gray-400 mb-2">Example:</p>
              <p className="text-gray-300 text-sm">
                Funding rate of +0.01% per 8 hours = ~1.1% monthly. On a $10,000 position held for a month,
                that&apos;s ~$110 in funding payments if you&apos;re long.
              </p>
            </div>
            <p className="text-cyan-400 text-sm">
              <strong>Mitigation:</strong> Check funding rates before entering. Sometimes it&apos;s better to wait
              or take the opposite side. Negative funding = longs earn.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Smart Contract Risk</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              Equity perps run on smart contracts. Bugs or exploits in the code could result in loss of funds.
              While major platforms are audited, no code is 100% bug-free.
            </p>
            <p className="text-cyan-400 text-sm">
              <strong>Mitigation:</strong> Use established platforms with audits and track records. Don&apos;t
              put all funds in one platform. Start with smaller amounts.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Oracle Risk</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              Perp prices are based on oracle feeds that track the underlying stock. Oracle failures,
              manipulation, or delays can cause incorrect pricing and unexpected liquidations.
            </p>
            <p className="text-cyan-400 text-sm">
              <strong>Mitigation:</strong> Trade on platforms with robust, multi-source oracle systems.
              Be cautious during high volatility when oracle lag is more likely.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Regulatory Risk</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              Equity perpetuals exist in a regulatory gray area. Future regulations could restrict access,
              require KYC, or otherwise change how these products operate.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mt-4">
              <li>• Platforms may geo-block certain regions</li>
              <li>• Tax treatment is unclear in many jurisdictions</li>
              <li>• Regulatory crackdowns could affect platform operations</li>
            </ul>
            <p className="text-cyan-400 text-sm mt-4">
              <strong>Mitigation:</strong> Understand your local regulations. Keep records for tax purposes.
              Don&apos;t invest more than you can afford to have inaccessible.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Counterparty Risk</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              While most platforms are non-custodial, there&apos;s still risk in the matching engine, liquidity
              pools, and insurance funds. Platform insolvency or hack could affect your ability to withdraw.
            </p>
            <p className="text-cyan-400 text-sm">
              <strong>Mitigation:</strong> Use platforms with proven track records. Don&apos;t leave large
              amounts sitting idle — withdraw profits regularly.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. No Ownership Rights</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              Unlike actual stocks, perps don&apos;t give you ownership in the company. You don&apos;t receive:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Dividends</li>
              <li>• Voting rights</li>
              <li>• Stock splits (directly)</li>
              <li>• Shareholder protections</li>
            </ul>
            <p className="text-gray-400 mt-4 text-sm">
              You&apos;re purely trading price exposure, not building long-term ownership.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Risk Management Best Practices</h2>
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Start small</strong> — Trade with amounts you can afford to lose completely</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Use stop-losses</strong> — Always have an exit plan before entering</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Low leverage</strong> — 2-5x until you&apos;re experienced</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Diversify</strong> — Don&apos;t put everything in one position or platform</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Monitor funding</strong> — Check rates before entering long-term positions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong className="text-white">Secure your wallet</strong> — Hardware wallet for large amounts, never share seed phrase</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Trade Responsibly?</h2>
            <p className="text-gray-400 mb-6">
              If you understand the risks and want to proceed, start with our beginner&apos;s guide.
            </p>
            <Link
              href="/blog/how-to-trade-equity-perps"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-gray-900 rounded-xl font-bold text-lg hover:bg-cyan-400 transition-colors"
            >
              How to Trade Equity Perps
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
