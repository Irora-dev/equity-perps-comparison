import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

const tocItems = [
  { id: 'why-tsla', title: 'Why Trade TSLA Perps?' },
  { id: 'where-to-trade', title: 'Where to Trade TSLA Perps' },
  { id: 'platform-comparison', title: 'Platform Comparison' },
  { id: 'volatility', title: 'Understanding TSLA Volatility' },
  { id: 'strategies', title: 'Trading Strategies' },
  { id: 'risks', title: 'Risks to Consider' },
];

const relatedArticles = [
  {
    title: 'NVDA Perpetuals Guide',
    href: '/blog/nvda-perpetuals',
    description: 'Trade Nvidia stock 24/7 with leverage.',
    category: 'guide' as const,
  },
  {
    title: 'What Are Equity Perpetuals',
    href: '/blog/what-are-equity-perpetuals',
    description: 'Complete beginner guide to equity perps.',
    category: 'guide' as const,
  },
  {
    title: 'Hyperliquid Review',
    href: '/blog/hyperliquid',
    description: 'Best platform for TSLA perps.',
    category: 'review' as const,
  },
  {
    title: 'Liquidation Calculator',
    href: '/blog/liquidation-calculator',
    description: 'Calculate your liquidation price.',
    category: 'tool' as const,
  },
];

const faqs = [
  {
    question: "What is TSLA perpetual?",
    answer: "TSLA perpetual is a derivative contract that tracks Tesla stock price. You can go long or short with leverage, 24/7, without owning actual Tesla shares. Positions have no expiration date."
  },
  {
    question: "Is TSLA more volatile than other equity perps?",
    answer: "Yes, TSLA is historically one of the most volatile stocks in the market. This creates both opportunity and risk. Use lower leverage on TSLA compared to less volatile stocks."
  },
  {
    question: "What happens to TSLA perps during Elon tweets?",
    answer: "Tesla stock often reacts strongly to Elon Musk's social media activity. Perps allow you to trade this volatility 24/7, but be cautious of sudden moves and use appropriate risk management."
  },
  {
    question: "Can I trade TSLA perps during earnings?",
    answer: "Yes, and this is a popular strategy. TSLA often moves 5-15% on earnings. However, use very low leverage (2x-3x max) due to the extreme volatility around these events."
  },
  {
    question: "What leverage should I use for TSLA perps?",
    answer: "We recommend 2x-5x maximum for TSLA due to its high volatility. Even experienced traders rarely exceed 10x on Tesla. Higher leverage dramatically increases liquidation risk."
  },
];

export const metadata: Metadata = {
  title: 'TSLA Perpetuals: Trade Tesla Stock 24/7 with Leverage',
  description: 'Complete guide to trading TSLA perpetual futures. Where to trade Tesla perps, strategies, and risk management.',
  openGraph: {
    title: 'TSLA Perpetuals Trading Guide',
    description: 'Trade Tesla stock around the clock with leverage on decentralized platforms.',
  },
};

export default function TSLAPerpetuals() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const lighter = platforms.find(p => p.id === 'lighter')!;
  const tradexyz = platforms.find(p => p.id === 'tradexyz')!;

  const platformsWithTSLA = [
    { platform: hyperliquid, leverage: '50x', fees: 'Zero gas', liquidity: 'Highest' },
    { platform: lighter, leverage: '100x', fees: 'Zero retail', liquidity: 'High' },
    { platform: tradexyz, leverage: '20x', fees: 'Low', liquidity: 'Growing' },
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
            headline: "TSLA Perpetuals: Trade Tesla Stock 24/7 with Leverage",
            description: "Complete guide to trading TSLA perpetual futures. Where to trade Tesla perps, strategies, and risk management.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/tsla-perpetuals" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'TSLA Perpetuals' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-red-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Stock Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            TSLA Perpetuals
          </h1>
          <p className="text-xl text-gray-400">
            Trade Tesla stock exposure 24/7 with leverage. High volatility, high opportunity, high risk.
          </p>
        </header>

        <TableOfContents items={tocItems} />

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Tesla remains one of the most polarizing and volatile stocks in the market. TSLA perpetuals
            let you trade this volatility with leverage, around the clock. Whether you are bullish on
            EVs and autonomy or skeptical of valuations, perps provide the tools to express your view.
          </p>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 my-6">
            <p className="text-yellow-400 font-medium flex items-center gap-2 mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              High Volatility Warning
            </p>
            <p className="text-gray-300 text-sm">
              TSLA is significantly more volatile than most stocks. Use lower leverage than you would
              on other equity perps. A 10% move in a single session is not unusual.
            </p>
          </div>

          <h2 id="why-tsla" className="text-2xl font-bold text-white mt-12 mb-4">Why Trade TSLA Perps?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <h3 className="text-green-400 font-semibold mb-2">Opportunities</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>High volatility = high profit potential</li>
                <li>React to Elon tweets and news 24/7</li>
                <li>Trade earnings without PDT restrictions</li>
                <li>Short selling without borrowing shares</li>
                <li>Leverage up to 100x on some platforms</li>
              </ul>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-2">Tesla by Numbers</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>Average daily range: 3-5%</li>
                <li>Earnings moves: 5-15% typical</li>
                <li>Post-tweet moves: 2-10%</li>
                <li>Available on most platforms</li>
                <li>Second most traded equity perp</li>
              </ul>
            </div>
          </div>

          <h2 id="where-to-trade" className="text-2xl font-bold text-white mt-12 mb-4">Where to Trade TSLA Perps</h2>

          <p className="text-gray-300">
            TSLA is available on most major equity perps platforms. Here is the comparison:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Platform</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Max Leverage</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Fees</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Liquidity</th>
                </tr>
              </thead>
              <tbody>
                {platformsWithTSLA.map((item, i) => (
                  <tr key={item.platform.id} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4">
                      <Link href={`/blog/${item.platform.slug}`} className="font-semibold hover:text-cyan-400" style={{ color: item.platform.color }}>
                        {item.platform.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center text-white">{item.leverage}</td>
                    <td className="py-3 px-4 text-center text-white">{item.fees}</td>
                    <td className="py-3 px-4 text-center text-white">{item.liquidity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="platform-comparison" className="text-2xl font-bold text-white mt-12 mb-4">Platform Comparison</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <h3 className="text-white font-semibold mb-3">Our Recommendation: Hyperliquid</h3>
            <p className="text-gray-300 text-sm mb-4">
              For TSLA perps, Hyperliquid offers the best combination of liquidity and low fees.
              The 50x max leverage is plenty for such a volatile stock—you likely will not need more.
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="tsla_perps_guide"
            />
          </div>

          <h2 id="volatility" className="text-2xl font-bold text-white mt-12 mb-4">Understanding TSLA Volatility</h2>

          <p className="text-gray-300">
            Tesla is not a normal stock. Its volatility profile requires different risk management:
          </p>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-5 my-6">
            <h3 className="text-white font-semibold mb-3">Volatility Catalysts</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><strong className="text-white">Elon tweets:</strong> Single tweets have moved the stock 5-10%</li>
              <li><strong className="text-white">Delivery numbers:</strong> Quarterly production reports create sharp moves</li>
              <li><strong className="text-white">FSD/autonomy news:</strong> Progress on Full Self-Driving impacts sentiment</li>
              <li><strong className="text-white">Competition news:</strong> EV competition announcements affect TSLA</li>
              <li><strong className="text-white">Macro factors:</strong> Interest rates significantly impact high-growth stocks</li>
            </ul>
          </div>

          <h2 id="strategies" className="text-2xl font-bold text-white mt-12 mb-4">Trading Strategies</h2>

          <div className="space-y-4 my-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Delivery Day Trading</h4>
              <p className="text-gray-400 text-sm">
                Tesla releases delivery numbers quarterly. Historical patterns show the stock often moves
                based on whether numbers beat or miss expectations. Low leverage, quick exits.
              </p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Range Trading</h4>
              <p className="text-gray-400 text-sm">
                TSLA often trades in defined ranges between major catalysts. Identify support/resistance
                levels and trade bounces with tight stops.
              </p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Weekend Gap Strategy</h4>
              <p className="text-gray-400 text-sm">
                Elon often tweets on weekends. Monitor social media for potential market-moving news
                and position accordingly before Monday open.
              </p>
            </div>
          </div>

          <h2 id="risks" className="text-2xl font-bold text-white mt-12 mb-4">Risks to Consider</h2>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 my-6">
            <ul className="text-gray-300 text-sm space-y-2">
              <li><strong className="text-red-400">Extreme Volatility:</strong> TSLA can move 10%+ in a single session</li>
              <li><strong className="text-red-400">Gap Risk:</strong> Significant overnight moves are common</li>
              <li><strong className="text-red-400">Tweet Risk:</strong> Unpredictable social media activity can move price instantly</li>
              <li><strong className="text-red-400">Liquidation Cascades:</strong> High volatility leads to liquidation cascades</li>
              <li><strong className="text-red-400">Funding Rate Spikes:</strong> Popular positions lead to high funding costs</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <h3 className="text-white font-semibold mb-3">Risk Management for TSLA</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Maximum 5x leverage recommended</li>
              <li>Always use stop-losses</li>
              <li>Size positions smaller than other stocks</li>
              <li>Avoid holding through major catalysts</li>
              <li>Monitor funding rates closely</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Start Trading TSLA Perps
            </h3>
            <p className="text-gray-400 mb-6">
              Access Tesla 24/7 on Hyperliquid with zero gas fees
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="tsla_perps_bottom"
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
