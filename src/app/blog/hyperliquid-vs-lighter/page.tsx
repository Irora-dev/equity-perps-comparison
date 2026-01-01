import Link from 'next/link';
import Image from 'next/image';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyperliquid vs Lighter: Complete Comparison | Equity Perps',
  description: 'Detailed comparison of Hyperliquid and Lighter for equity perpetuals trading. Compare fees, leverage, security, and features.',
  openGraph: {
    title: 'Hyperliquid vs Lighter Comparison',
    description: 'Which equity perps platform is better? We compare the two volume leaders.',
  },
};

export default function HyperliquidVsLighter() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const lighter = platforms.find(p => p.id === 'lighter')!;

  const comparisonData = [
    { feature: 'Chain', hyperliquid: 'Hyperliquid L1', lighter: 'Ethereum L2 (ZK)' },
    { feature: 'Max Leverage', hyperliquid: '50x', lighter: '100x' },
    { feature: 'Trading Fees', hyperliquid: 'Zero gas, low taker', lighter: 'Zero for retail' },
    { feature: 'Monthly Volume', hyperliquid: '$319B peak', lighter: '$272B' },
    { feature: 'Settlement', hyperliquid: 'USDC', lighter: 'USDC' },
    { feature: 'Order Matching', hyperliquid: 'On-chain orderbook', lighter: 'Off-chain with ZK proofs' },
    { feature: 'Finality', hyperliquid: '<1 second', lighter: 'Milliseconds' },
    { feature: 'Equity Perps', hyperliquid: '12+ stocks', lighter: 'COIN, HOOD (expanding)' },
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
            <li className="text-gray-300">Hyperliquid vs Lighter</li>
          </ol>
        </nav>

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Platform Comparison</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Hyperliquid vs Lighter
          </h1>
          <p className="text-xl text-gray-400">
            The two largest equity perps platforms by volume take fundamentally different approaches.
            Which one deserves your trading capital?
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Hyperliquid and Lighter are the clear volume leaders in decentralized perpetuals.
            Both process hundreds of billions in monthly volume. Both offer equity perps.
            But they are built on entirely different foundations.
          </p>

          <p className="text-gray-300">
            Hyperliquid runs its own Layer 1 blockchain optimized purely for trading.
            Lighter takes a different path by building a ZK rollup on top of Ethereum.
            This architectural choice affects everything from security to user experience.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Head to Head Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="py-3 px-4 text-center" style={{ color: hyperliquid.color }}>Hyperliquid</th>
                  <th className="py-3 px-4 text-center" style={{ color: lighter.color }}>Lighter</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-white">{row.hyperliquid}</td>
                    <td className="py-3 px-4 text-center text-white">{row.lighter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Platform Interfaces</h2>

          <p className="text-gray-300 mb-6">
            Both platforms offer professional trading interfaces. Here is how they look when trading NVDA perpetuals:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 mb-3">
                <Image
                  src="/images/platforms/hyperliquid.jpg"
                  alt="Hyperliquid trading interface"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-400">Hyperliquid Interface</p>
            </div>
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 mb-3">
                <Image
                  src="/images/platforms/lighter.jpg"
                  alt="Lighter trading interface"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm text-gray-400">Lighter Interface</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Hyperliquid</h2>

          <p className="text-gray-300">
            Hyperliquid dominates on liquidity. It has the deepest order books and tightest spreads in the market.
            For traders moving significant size, this matters more than almost anything else.
          </p>

          <p className="text-gray-300">
            The platform also offers a wider selection of equity perps. You can trade NVDA, TSLA, AAPL, MSFT, META, AMZN, GOOGL, and more.
            If you want exposure to a specific stock, Hyperliquid likely has it.
          </p>

          <p className="text-gray-300">
            The HIP-3 protocol that powers equity perps is battle tested and handles billions in volume.
            User experience is polished with professional grade charting and order types.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Case for Lighter</h2>

          <p className="text-gray-300">
            Lighter gives you cryptographic guarantees on every trade. The ZK proof system means every order match and liquidation is verifiable.
            This is the gold standard for transparency.
          </p>

          <p className="text-gray-300">
            Because it settles to Ethereum, you get the security of the most battle tested blockchain.
            Hyperliquid's custom L1 is less proven by comparison.
          </p>

          <p className="text-gray-300">
            Lighter also offers higher leverage at 100x versus 50x. For traders who want to maximize capital efficiency, this is significant.
            The zero fee structure for retail traders keeps costs down.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Verdict</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Choose Hyperliquid if:</strong> You prioritize liquidity and want access to more equity perps.
              Best for active traders and those moving larger positions.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Choose Lighter if:</strong> You value cryptographic security guarantees and want Ethereum level safety.
              Best for security conscious traders and those who want higher leverage.
            </p>
          </div>

          <p className="text-gray-300">
            Both platforms are solid choices. Many traders use both depending on what they are trading.
            Start with smaller positions to get a feel for each before committing significant capital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 my-8">
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="comparison_page"
              comparisonPair="hyperliquid_vs_lighter"
              className="flex-1"
            />
            <ReferralButton
              href={lighter.referralUrl}
              platformName="Lighter"
              color={lighter.color}
              location="comparison_page"
              comparisonPair="hyperliquid_vs_lighter"
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
