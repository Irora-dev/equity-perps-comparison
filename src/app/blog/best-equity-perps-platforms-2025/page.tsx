import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

const faqs = [
  {
    question: "What is the most trusted equity perps platform?",
    answer: "Hyperliquid has the highest volume and longest track record among decentralized equity perps platforms. Lighter offers ZK-proof security. Both have strong trust profiles."
  },
  {
    question: "Which platform is best for beginners?",
    answer: "Hyperliquid or Avantis are good starting points. Hyperliquid has deep liquidity preventing bad fills. Avantis has zero fees so mistakes cost less while learning."
  },
  {
    question: "Can I trade equity perps from the US?",
    answer: "Most decentralized platforms don't require KYC and are technically accessible. However, they operate outside US regulatory frameworks. Understand the legal implications before trading."
  },
  {
    question: "How much money do I need to start?",
    answer: "Most platforms let you start with as little as $10-50. However, $100-500 is recommended to avoid immediate liquidation on small price moves when using leverage."
  },
  {
    question: "Are equity perps safe?",
    answer: "All trading involves risk. Equity perps add leverage risk and smart contract risk. Only trade with funds you can afford to lose. Start with low leverage until you understand the mechanics."
  },
];

export const metadata: Metadata = {
  title: 'Best Equity Perps Platforms in 2025 | Complete Rankings',
  description: 'Ranked list of the top equity perpetual futures platforms in 2025. Compare Hyperliquid, Lighter, Ostium, Avantis and more.',
  openGraph: {
    title: 'Best Equity Perps Platforms 2025',
    description: 'Find the best platform for trading equity perpetuals this year.',
  },
};

export default function BestPlatforms2025() {
  const rankedPlatforms = [
    { platform: platforms.find(p => p.id === 'hyperliquid')!, rank: 1, verdict: 'Best overall for volume and liquidity' },
    { platform: platforms.find(p => p.id === 'lighter')!, rank: 2, verdict: 'Best for Ethereum security with ZK proofs' },
    { platform: platforms.find(p => p.id === 'ostium')!, rank: 3, verdict: 'Best for RWA focused traders' },
    { platform: platforms.find(p => p.id === 'avantis')!, rank: 4, verdict: 'Best zero fee option on Base' },
    { platform: platforms.find(p => p.id === 'variational')!, rank: 5, verdict: 'Best for RFQ based pricing' },
    { platform: platforms.find(p => p.id === 'tradexyz')!, rank: 6, verdict: 'Best for index products' },
    { platform: platforms.find(p => p.id === 'trove')!, rank: 7, verdict: 'Best for exotic markets' },
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Best Platforms 2025' }
        ]} />

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Updated January 2025</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Best Equity Perps Platforms in 2025
          </h1>
          <p className="text-xl text-gray-400">
            We tested every major equity perpetuals platform and ranked them based on fees,
            liquidity, asset selection, and user experience. Here are the results.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Equity perpetuals have grown massively over the past year. Monthly volumes now exceed $300 billion across decentralized platforms.
            But which exchange should you actually use?
          </p>

          <p className="text-gray-300">
            We spent weeks testing each platform with real trades. The rankings below reflect actual trading conditions, not marketing claims.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Rankings</h2>

          <div className="space-y-8">
            {rankedPlatforms.map(({ platform, rank, verdict }) => (
              <div
                key={platform.id}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white"
                    style={{ backgroundColor: platform.color }}
                  >
                    {rank}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{verdict}</p>
                    <p className="text-gray-400 text-sm mb-4">{platform.description}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500 block">Chain</span>
                        <span className="text-white">{platform.chain}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Max Leverage</span>
                        <span className="text-white">{platform.maxLeverage}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Zero Fees</span>
                        <span className="text-white">{platform.features.zeroFees ? 'Yes' : 'No'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">24/7 Trading</span>
                        <span className="text-white">{platform.features.trading24_7 ? 'Yes' : 'No'}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <ReferralButton
                        href={platform.referralUrl}
                        platformName={platform.name}
                        color={platform.color}
                        className="text-sm py-2"
                      />
                      <Link
                        href={`/blog/${platform.slug}`}
                        className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:text-white text-sm"
                      >
                        Read Full Review
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">How We Ranked These Platforms</h2>

          <p className="text-gray-300">
            Our rankings consider five main factors:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong className="text-white">Liquidity and Volume:</strong> Can you execute large trades without significant slippage?</li>
            <li><strong className="text-white">Fee Structure:</strong> What are the actual costs of trading including funding rates?</li>
            <li><strong className="text-white">Asset Selection:</strong> How many equity perps are available to trade?</li>
            <li><strong className="text-white">Security:</strong> Is the platform battle tested? What chain does it run on?</li>
            <li><strong className="text-white">User Experience:</strong> How intuitive is the interface for both beginners and pros?</li>
          </ul>

          <p className="text-gray-300">
            Hyperliquid takes the top spot because it dominates on liquidity. You can move serious size without moving the market.
            Lighter comes second thanks to its ZK proof system that provides Ethereum level security with off chain speed.
          </p>

          <p className="text-gray-300">
            That said, the best platform for you depends on what you prioritize. If you want zero fees, look at Avantis or Variational.
            If you need exotic markets like collectibles, Trove is your only option.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Quick Recommendation Guide</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-white">For most traders:</strong> Start with Hyperliquid. Best liquidity means best execution.</li>
              <li><strong className="text-white">For cost sensitive traders:</strong> Avantis offers zero fees and loss rebates.</li>
              <li><strong className="text-white">For security focused traders:</strong> Lighter gives you ZK proofs on every trade.</li>
              <li><strong className="text-white">For RWA specialists:</strong> Ostium has 95% of its volume in real world assets.</li>
              <li><strong className="text-white">For exotic markets:</strong> Trove lets you trade collectibles and unique assets.</li>
            </ul>
          </div>

          <p className="text-gray-300">
            Whatever you choose, remember that equity perps carry significant risk. Never trade with more than you can afford to lose,
            and always start with smaller position sizes while you learn how a new platform works.
          </p>
        </div>

        <FAQSection faqs={faqs} />

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
