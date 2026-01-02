import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

const relatedArticles = [
  {
    title: 'Liquidation Calculator',
    href: '/blog/liquidation-calculator',
    description: 'Calculate your liquidation price before trading.',
    category: 'tool' as const,
  },
  {
    title: 'How Funding Rates Work',
    href: '/blog/how-funding-rates-work',
    description: 'Understand the cost of leveraged positions.',
    category: 'guide' as const,
  },
  {
    title: 'Ostium Review',
    href: '/blog/ostium',
    description: 'The highest leverage platform at 200x.',
    category: 'review' as const,
  },
  {
    title: 'Lighter vs Ostium',
    href: '/blog/lighter-vs-ostium',
    description: 'Compare high leverage platforms.',
    category: 'comparison' as const,
  },
];

const faqs = [
  {
    question: "What is the highest leverage available for equity perps?",
    answer: "Ostium offers up to 200x leverage, the highest in the market. During equity market hours, this drops to 100x. Lighter and Avantis offer 100x on BTC/ETH but 25-100x on equities."
  },
  {
    question: "Is high leverage a good idea?",
    answer: "High leverage dramatically increases both profit potential and liquidation risk. A 200x position can be liquidated by a 0.5% adverse move. Most experienced traders use 5x-20x maximum."
  },
  {
    question: "How do I calculate my liquidation price?",
    answer: "Use our liquidation calculator tool. Generally, liquidation price = entry price × (1 ± 1/leverage), adjusted for maintenance margin. Higher leverage = closer liquidation price."
  },
  {
    question: "Should beginners use high leverage?",
    answer: "No. Beginners should stay at 2x-5x maximum. High leverage is only appropriate for experienced traders with strict risk management and small position sizes."
  },
];

export const metadata: Metadata = {
  title: 'Best High Leverage Equity Perps Platforms (2026)',
  description: 'Platforms offering the highest leverage for equity perpetuals. Compare 50x, 100x, and 200x leverage options.',
  openGraph: {
    title: 'Best High Leverage Equity Perps',
    description: 'Find platforms offering 100x-200x leverage for maximum capital efficiency.',
  },
};

export default function BestHighLeverage() {
  const ostium = platforms.find(p => p.id === 'ostium')!;
  const lighter = platforms.find(p => p.id === 'lighter')!;
  const avantis = platforms.find(p => p.id === 'avantis')!;
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;

  const rankedPlatforms = [
    {
      rank: 1,
      platform: ostium,
      leverage: '200x',
      equityLeverage: '100x (market hours)',
      reason: 'Highest leverage in the market',
      pros: ['200x max leverage', '0DTE perpetuals', 'RWA focus', 'Jump Trading backing'],
    },
    {
      rank: 2,
      platform: lighter,
      leverage: '100x',
      equityLeverage: '100x',
      reason: 'High leverage with ZK security',
      pros: ['100x leverage', 'ZK proofs', 'Zero fees', 'Robinhood backing'],
    },
    {
      rank: 3,
      platform: avantis,
      leverage: '500x (BTC/ETH)',
      equityLeverage: '25x',
      reason: 'Highest BTC/ETH leverage',
      pros: ['500x on BTC/ETH', 'Zero fees', 'Loss rebates', 'Base ecosystem'],
    },
    {
      rank: 4,
      platform: hyperliquid,
      leverage: '50x',
      equityLeverage: '50x',
      reason: 'Best liquidity for leveraged trades',
      pros: ['Deep liquidity', 'Tight spreads', 'Zero gas', 'Most equity perps'],
    },
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
            headline: "Best High Leverage Equity Perps Platforms (2026)",
            description: "Platforms offering the highest leverage for equity perpetuals. Compare 50x, 100x, and 200x leverage options.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/best-equity-perps-high-leverage" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Best High Leverage' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Best For Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Best High Leverage Equity Perps
          </h1>
          <p className="text-xl text-gray-400">
            Platforms offering maximum capital efficiency with 50x to 200x leverage.
            High risk, high reward.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 my-6">
            <p className="text-red-400 font-medium flex items-center gap-2 mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Extreme Risk Warning
            </p>
            <p className="text-gray-300 text-sm">
              High leverage trading can result in rapid and complete loss of your margin. A 200x position
              is liquidated by a 0.5% adverse move. Only use high leverage with money you can afford
              to lose entirely and strict position sizing.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Leverage Comparison</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Platform</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Max Leverage</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Equity Leverage</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Liq. at 100x</th>
                </tr>
              </thead>
              <tbody>
                {rankedPlatforms.map((item, i) => (
                  <tr key={item.platform.id} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4">
                      <Link href={`/blog/${item.platform.slug}`} className="font-semibold hover:text-cyan-400" style={{ color: item.platform.color }}>
                        {item.platform.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center text-white font-semibold">{item.leverage}</td>
                    <td className="py-3 px-4 text-center text-white">{item.equityLeverage}</td>
                    <td className="py-3 px-4 text-center text-gray-400">±1%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Platforms Ranked by Leverage</h2>

          {rankedPlatforms.map((item) => (
            <div key={item.platform.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-gray-900 flex-shrink-0"
                  style={{ backgroundColor: item.platform.color }}
                >
                  {item.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">
                      <Link href={`/blog/${item.platform.slug}`} className="hover:text-cyan-400">
                        {item.platform.name}
                      </Link>
                    </h3>
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded">
                      {item.leverage}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{item.reason}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    {item.pros.map((pro, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {pro}
                      </li>
                    ))}
                  </ul>
                  <ReferralButton
                    href={item.platform.referralUrl}
                    platformName={item.platform.name}
                    color={item.platform.color}
                    location="best_high_leverage"
                  />
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">High Leverage Risk Management</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <h3 className="text-white font-semibold mb-3">Essential Rules</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><strong className="text-white">Position sizing:</strong> Never risk more than 1-2% of account per trade</li>
              <li><strong className="text-white">Stop-losses:</strong> Always use them—high leverage without stops is gambling</li>
              <li><strong className="text-white">Volatility awareness:</strong> Reduce leverage during high volatility periods</li>
              <li><strong className="text-white">Avoid earnings:</strong> 100x+ through earnings releases is extremely risky</li>
              <li><strong className="text-white">Take profits:</strong> Don't get greedy—scale out of winning positions</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Trade with Maximum Leverage
            </h3>
            <p className="text-gray-400 mb-6">
              Ostium offers up to 200x leverage for experienced traders
            </p>
            <ReferralButton
              href={ostium.referralUrl}
              platformName="Ostium"
              color={ostium.color}
              location="best_high_leverage_bottom"
            />
          </div>
        </div>

        <FAQSection faqs={faqs} />

        <RelatedArticles articles={relatedArticles} />

        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all guides
          </Link>
        </div>
      </article>
    </main>
  );
}
