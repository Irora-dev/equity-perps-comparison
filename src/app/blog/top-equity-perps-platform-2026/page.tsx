import Link from 'next/link';
import Image from 'next/image';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Top Equity Perps Platform for 2026 | Compare Equity Perps',
  description: 'Our pick for the best equity perpetuals trading platform heading into 2026. Analysis of volume, features, fees, and user experience.',
  openGraph: {
    title: 'The Top Equity Perps Platform for 2026',
    description: 'Our pick for the best equity perpetuals trading platform heading into 2026.',
  },
};

export default function TopEquityPerpsPlatform2026() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const lighter = platforms.find(p => p.id === 'lighter')!;
  const ostium = platforms.find(p => p.id === 'ostium')!;

  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-300">Top Platform 2026</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured Analysis
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Top Equity Perps Platform for 2026
          </h1>
          <p className="text-xl text-gray-400">
            After analyzing volume, features, fees, and user experience across all major platforms,
            we've identified the clear leader heading into 2026.
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 mb-10">
          <Image
            src="/images/platforms/hyperliquid.jpg"
            alt="Hyperliquid trading interface showing equity perpetual futures"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">Our Pick: Hyperliquid</h2>

          <p className="text-gray-300 text-lg mb-6">
            After extensive analysis, <strong className="text-cyan-400">Hyperliquid</strong> stands out as
            the top equity perpetuals platform heading into 2026. With over $319 billion in peak monthly
            volume and the most comprehensive selection of equity perps, it has established itself as
            the undisputed market leader.
          </p>

          {/* Winner Card */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-xl p-6 my-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Why Hyperliquid Wins</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">1.</span> Largest trading volume in the market ($319B+ peak)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">2.</span> Most equity perps available (12+ stocks)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">3.</span> Zero gas fees on all trades
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">4.</span> Sub-second finality for instant execution
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">5.</span> Battle-tested HIP-3 protocol
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ReferralButton
            href={hyperliquid.referralUrl}
            platformName="Hyperliquid"
            color={hyperliquid.color}
            location="top_platform_2026_article"
          />

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Competition</h2>

          <p className="text-gray-300 mb-6">
            While Hyperliquid takes the top spot, several other platforms deserve recognition
            for their unique strengths:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {/* Lighter */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="font-bold mb-2" style={{ color: lighter.color }}>
                Lighter - Best for Security
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                ZK-proofs for every operation. If cryptographic verification is your priority,
                Lighter offers unmatched transparency.
              </p>
              <Link
                href="/blog/lighter"
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                Read Lighter Review →
              </Link>
            </div>

            {/* Ostium */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5">
              <h3 className="font-bold mb-2" style={{ color: ostium.color }}>
                Ostium - Best for Leverage
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                Up to 200x leverage with innovative 0DTE perpetuals. Perfect for traders
                seeking maximum capital efficiency.
              </p>
              <Link
                href="/blog/ostium"
                className="text-sm text-orange-400 hover:text-orange-300"
              >
                Read Ostium Review →
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Key Metrics Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Metric</th>
                  <th className="py-3 px-4 text-center text-cyan-400">Hyperliquid</th>
                  <th className="py-3 px-4 text-center text-purple-400">Lighter</th>
                  <th className="py-3 px-4 text-center text-orange-400">Ostium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/50 bg-gray-900/20">
                  <td className="py-3 px-4 text-gray-300">Monthly Volume</td>
                  <td className="py-3 px-4 text-center text-white font-semibold">$319B</td>
                  <td className="py-3 px-4 text-center text-white">$272B</td>
                  <td className="py-3 px-4 text-center text-white">$25B</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-3 px-4 text-gray-300">Max Leverage</td>
                  <td className="py-3 px-4 text-center text-white">50x</td>
                  <td className="py-3 px-4 text-center text-white">100x</td>
                  <td className="py-3 px-4 text-center text-white font-semibold">200x</td>
                </tr>
                <tr className="border-b border-gray-800/50 bg-gray-900/20">
                  <td className="py-3 px-4 text-gray-300">Equity Perps</td>
                  <td className="py-3 px-4 text-center text-white font-semibold">12+</td>
                  <td className="py-3 px-4 text-center text-white">2</td>
                  <td className="py-3 px-4 text-center text-white">10+</td>
                </tr>
                <tr className="border-b border-gray-800/50">
                  <td className="py-3 px-4 text-gray-300">Trading Fees</td>
                  <td className="py-3 px-4 text-center text-white font-semibold">Zero gas</td>
                  <td className="py-3 px-4 text-center text-white font-semibold">Zero</td>
                  <td className="py-3 px-4 text-center text-white">Low</td>
                </tr>
                <tr className="border-b border-gray-800/50 bg-gray-900/20">
                  <td className="py-3 px-4 text-gray-300">24/7 Trading</td>
                  <td className="py-3 px-4 text-center text-green-400">Yes</td>
                  <td className="py-3 px-4 text-center text-green-400">Yes</td>
                  <td className="py-3 px-4 text-center text-gray-500">No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">What to Expect in 2026</h2>

          <p className="text-gray-300 mb-4">
            The equity perps market is evolving rapidly. Here's what we anticipate for 2026:
          </p>

          <ul className="space-y-3 text-gray-300 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span><strong className="text-white">Increased institutional adoption</strong> as more funds discover the benefits of 24/7 equity exposure</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span><strong className="text-white">More equity perps listings</strong> across all major platforms</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span><strong className="text-white">Tighter spreads and deeper liquidity</strong> as competition intensifies</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span><strong className="text-white">New product innovations</strong> like index perpetuals and options</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Final Verdict</h2>

          <p className="text-gray-300 mb-6">
            For traders looking to access equity perpetuals in 2026, <strong className="text-cyan-400">Hyperliquid</strong> offers
            the best combination of liquidity, asset selection, and user experience. Its position as the
            volume leader translates to tighter spreads and better execution for traders of all sizes.
          </p>

          <p className="text-gray-300 mb-8">
            That said, the best platform for you depends on your specific needs. If security is paramount,
            consider Lighter. If you need maximum leverage, look at Ostium. But for most traders,
            Hyperliquid remains the gold standard.
          </p>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Start Trading on Hyperliquid
            </h3>
            <p className="text-gray-400 mb-6">
              Join the largest equity perps platform with zero gas fees
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="top_platform_2026_bottom"
            />
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
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
