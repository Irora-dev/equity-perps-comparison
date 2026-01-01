import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equity Perps Glossary | Trading Terms Explained',
  description: 'Complete glossary of equity perpetual futures trading terms. Learn the definitions of leverage, funding rates, liquidation, and more.',
  openGraph: {
    title: 'Equity Perps Glossary',
    description: 'Essential trading terms for equity perpetual futures traders.',
  },
};

const glossaryTerms = [
  {
    term: 'Equity Perpetual',
    definition: 'A derivative contract that tracks the price of a stock without an expiration date. Traders can hold positions indefinitely, paying or receiving funding rates to keep the price aligned with spot.',
    related: '/blog/what-are-equity-perpetuals',
  },
  {
    term: 'Funding Rate',
    definition: 'Periodic payments between long and short traders that keep perpetual prices aligned with spot prices. Positive funding means longs pay shorts; negative funding means shorts pay longs.',
    related: '/blog/how-funding-rates-work',
  },
  {
    term: 'Leverage',
    definition: 'Using borrowed capital to increase position size. With 10x leverage, $1,000 controls $10,000 worth of exposure. Amplifies both gains and losses.',
  },
  {
    term: 'Liquidation',
    definition: 'Forced closure of a position when margin falls below the maintenance requirement. Occurs when losses approach the deposited collateral. Prevents negative account balances.',
  },
  {
    term: 'Margin',
    definition: 'Collateral deposited to open and maintain a leveraged position. Initial margin is required to open; maintenance margin must be maintained to avoid liquidation.',
  },
  {
    term: 'Mark Price',
    definition: 'The fair value price used for liquidations and unrealized PnL calculations. Usually derived from spot prices and funding rates to prevent manipulation.',
  },
  {
    term: 'Oracle',
    definition: 'A system that provides external price data to smart contracts. For equity perps, oracles aggregate stock prices from multiple sources and deliver them on-chain.',
  },
  {
    term: 'Open Interest',
    definition: 'The total value of all outstanding derivative contracts. High open interest indicates active markets with many participants.',
  },
  {
    term: 'Perpetual Future',
    definition: 'A futures contract with no expiration date. Uses funding rates instead of settlement dates to maintain price convergence with the underlying asset.',
  },
  {
    term: 'Self-Custody',
    definition: 'Holding assets in your own wallet rather than on an exchange. Decentralized perps platforms allow trading while maintaining self-custody.',
  },
  {
    term: 'Slippage',
    definition: 'The difference between expected trade price and actual execution price. Larger orders on less liquid markets experience more slippage.',
  },
  {
    term: 'Spot Price',
    definition: 'The current market price for immediate delivery of an asset. Perpetual prices converge toward spot through the funding mechanism.',
  },
  {
    term: 'Taker',
    definition: 'A trader who executes against existing orders in the order book. Takers pay fees and receive immediate execution.',
  },
  {
    term: 'Maker',
    definition: 'A trader who adds liquidity by placing limit orders. Makers often receive fee rebates and better rates for providing liquidity.',
  },
  {
    term: 'Long Position',
    definition: 'A bullish trade that profits when the asset price increases. Going long means buying with the expectation of selling higher.',
  },
  {
    term: 'Short Position',
    definition: 'A bearish trade that profits when the asset price decreases. Going short means selling borrowed assets with the expectation of buying back lower.',
  },
  {
    term: 'PnL (Profit and Loss)',
    definition: 'The financial result of a trade or position. Unrealized PnL is paper profit/loss; realized PnL occurs when closing a position.',
  },
  {
    term: 'Order Book',
    definition: 'A list of buy and sell orders organized by price. Deep order books have many orders at various prices, indicating good liquidity.',
  },
  {
    term: 'USDC',
    definition: 'A stablecoin pegged to the US dollar. The primary settlement currency for most decentralized perps platforms.',
  },
  {
    term: 'L2 (Layer 2)',
    definition: 'A secondary blockchain built on top of an existing chain for better scalability. Many perps platforms operate on Ethereum L2s for lower fees.',
  },
  {
    term: 'Gas Fee',
    definition: 'Transaction fees paid to blockchain validators. Some platforms like Hyperliquid have zero gas fees; others vary based on network congestion.',
  },
  {
    term: 'KYC (Know Your Customer)',
    definition: 'Identity verification required by regulated exchanges. Most decentralized perps platforms do not require KYC.',
  },
  {
    term: 'CFD (Contract for Difference)',
    definition: 'A traditional derivative similar to perpetuals. CFDs are offered by regulated brokers, while perps are typically on decentralized platforms.',
    related: '/blog/equity-perps-vs-cfds',
  },
  {
    term: '0DTE (Zero Days to Expiration)',
    definition: 'Options or perpetuals that expire or settle on the same day they are opened. Ostium offers 0DTE perpetuals for intraday trading.',
  },
  {
    term: 'RWA (Real World Assets)',
    definition: 'Traditional financial assets like stocks, commodities, and forex represented on blockchain. Equity perps are a form of RWA derivatives.',
  },
];

export default function GlossaryPage() {
  const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Glossary' }
        ]} />

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Reference</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Equity Perps Glossary
          </h1>
          <p className="text-xl text-gray-400">
            Essential terms every equity perpetuals trader should know.
          </p>
        </header>

        {/* Quick Navigation */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-12">
          <h2 className="text-sm font-medium text-gray-400 mb-3">Jump to letter:</h2>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(sortedTerms.map(t => t.term[0]))).map(letter => (
              <a
                key={letter}
                href={`#${letter}`}
                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded text-sm text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className="space-y-6">
          {sortedTerms.map((item, index) => {
            const prevLetter = index > 0 ? sortedTerms[index - 1].term[0] : null;
            const currentLetter = item.term[0];
            const showLetterHeader = prevLetter !== currentLetter;

            return (
              <div key={item.term}>
                {showLetterHeader && (
                  <h2
                    id={currentLetter}
                    className="text-2xl font-bold text-cyan-400 mt-12 mb-6 scroll-mt-24"
                  >
                    {currentLetter}
                  </h2>
                )}
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.term}</h3>
                  <p className="text-gray-400">{item.definition}</p>
                  {item.related && (
                    <Link
                      href={item.related}
                      className="inline-block mt-3 text-sm text-cyan-400 hover:text-cyan-300"
                    >
                      Learn more →
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all articles
          </Link>
        </div>
      </article>
    </main>
  );
}
