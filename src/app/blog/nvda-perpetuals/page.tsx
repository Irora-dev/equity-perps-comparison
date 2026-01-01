import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

const tocItems = [
  { id: 'why-nvda', title: 'Why Trade NVDA Perps?' },
  { id: 'where-to-trade', title: 'Where to Trade NVDA Perps' },
  { id: 'platform-comparison', title: 'Platform Comparison' },
  { id: 'trading-hours', title: 'Trading Hours & Liquidity' },
  { id: 'strategies', title: 'Popular Trading Strategies' },
  { id: 'risks', title: 'Risks to Consider' },
];

const relatedArticles = [
  {
    title: 'TSLA Perpetuals Guide',
    href: '/blog/tsla-perpetuals',
    description: 'Trade Tesla stock 24/7 with leverage.',
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
    description: 'Best platform for NVDA perps.',
    category: 'review' as const,
  },
  {
    title: 'How Funding Rates Work',
    href: '/blog/how-funding-rates-work',
    description: 'Understanding the costs of holding positions.',
    category: 'guide' as const,
  },
];

const faqs = [
  {
    question: "What is NVDA perpetual?",
    answer: "NVDA perpetual is a derivative contract that tracks Nvidia stock price. Unlike traditional futures, it has no expiration date. You can go long (profit from price increases) or short (profit from price decreases) with leverage."
  },
  {
    question: "Can I trade NVDA perps 24/7?",
    answer: "Yes, on platforms like Hyperliquid you can trade NVDA perps around the clock, including weekends. However, price volatility is typically lower outside traditional market hours since the oracle uses the last closing price."
  },
  {
    question: "What leverage is available for NVDA perps?",
    answer: "Leverage varies by platform. Hyperliquid offers up to 50x, Lighter offers up to 100x, and Ostium offers up to 100x during market hours. We recommend starting with 2x-5x leverage for beginners."
  },
  {
    question: "Do I receive dividends on NVDA perps?",
    answer: "No. When you hold NVDA perpetuals, you do not own actual Nvidia shares and therefore do not receive dividend payments. You only profit from price movements."
  },
  {
    question: "How are NVDA perps priced?",
    answer: "NVDA perps are priced using oracle systems like Pyth that aggregate real-time price data from major stock exchanges. Funding rates keep the perp price aligned with the spot price."
  },
];

export const metadata: Metadata = {
  title: 'NVDA Perpetuals: Trade Nvidia Stock 24/7 with Leverage',
  description: 'Complete guide to trading NVDA perpetual futures. Compare platforms, understand risks, and learn strategies for Nvidia stock perps.',
  openGraph: {
    title: 'NVDA Perpetuals Trading Guide',
    description: 'Trade Nvidia stock around the clock with up to 100x leverage.',
  },
};

export default function NVDAPerpetuals() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const lighter = platforms.find(p => p.id === 'lighter')!;
  const ostium = platforms.find(p => p.id === 'ostium')!;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "NVDA Perpetuals: Trade Nvidia Stock 24/7 with Leverage",
    description: "Complete guide to trading NVDA perpetual futures. Compare platforms, understand risks, and learn strategies for Nvidia stock perps.",
    author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
    publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/nvda-perpetuals" },
  };

  const platformsWithNVDA = [
    { platform: hyperliquid, leverage: '50x', fees: 'Zero gas', volume: 'Highest' },
    { platform: lighter, leverage: '100x', fees: 'Zero retail', volume: 'High' },
    { platform: ostium, leverage: '100x', fees: 'Competitive', volume: 'Growing' },
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'NVDA Perpetuals' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Stock Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            NVDA Perpetuals
          </h1>
          <p className="text-xl text-gray-400">
            Trade Nvidia stock exposure 24/7 with leverage. No expiration, no share ownership, pure price exposure.
          </p>
        </header>

        <TableOfContents items={tocItems} />

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Nvidia has been one of the most traded stocks over the past two years, driven by the AI revolution.
            NVDA perpetuals let you trade this price action with leverage, around the clock, without the
            limitations of traditional stock markets.
          </p>

          <h2 id="why-nvda" className="text-2xl font-bold text-white mt-12 mb-4">Why Trade NVDA Perps?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <h3 className="text-green-400 font-semibold mb-2">Advantages</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>24/7 trading - react to news anytime</li>
                <li>Up to 100x leverage for capital efficiency</li>
                <li>Easy short selling for bearish plays</li>
                <li>No PDT rule or pattern day trading limits</li>
                <li>Self-custody - your keys, your crypto</li>
              </ul>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-2">Key Stats</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>Available on 5+ platforms</li>
                <li>Highest volume equity perp</li>
                <li>Typical leverage: 20x-50x</li>
                <li>Funding: every 1-8 hours</li>
                <li>Settlement: USDC</li>
              </ul>
            </div>
          </div>

          <h2 id="where-to-trade" className="text-2xl font-bold text-white mt-12 mb-4">Where to Trade NVDA Perps</h2>

          <p className="text-gray-300">
            NVDA is one of the most widely supported equity perpetuals. Here are the main platforms:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Platform</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Max Leverage</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Fees</th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium">Volume</th>
                </tr>
              </thead>
              <tbody>
                {platformsWithNVDA.map((item, i) => (
                  <tr key={item.platform.id} className={`border-b border-gray-800/50 ${i % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="py-3 px-4">
                      <Link href={`/blog/${item.platform.slug}`} className="font-semibold hover:text-cyan-400" style={{ color: item.platform.color }}>
                        {item.platform.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center text-white">{item.leverage}</td>
                    <td className="py-3 px-4 text-center text-white">{item.fees}</td>
                    <td className="py-3 px-4 text-center text-white">{item.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="platform-comparison" className="text-2xl font-bold text-white mt-12 mb-4">Platform Comparison</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <h3 className="text-white font-semibold mb-3">Our Recommendation: Hyperliquid</h3>
            <p className="text-gray-300 text-sm mb-4">
              For NVDA perps, we recommend Hyperliquid. It has the highest volume which means tighter spreads
              and better fills. Zero gas fees keep your costs low on frequent trades.
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="nvda_perps_guide"
            />
          </div>

          <h2 id="trading-hours" className="text-2xl font-bold text-white mt-12 mb-4">Trading Hours & Liquidity</h2>

          <p className="text-gray-300">
            NVDA perps can be traded 24/7, but liquidity and price behavior vary:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong className="text-white">Market hours (9:30 AM - 4 PM ET):</strong> Highest liquidity, tightest spreads, most accurate pricing</li>
            <li><strong className="text-white">Pre/post market:</strong> Moderate liquidity, wider spreads</li>
            <li><strong className="text-white">Overnight/weekends:</strong> Lower liquidity, oracles use last closing price</li>
          </ul>

          <p className="text-gray-300">
            For best execution, trade during US market hours. For reacting to breaking news outside hours,
            perps still provide access when traditional markets are closed.
          </p>

          <h2 id="strategies" className="text-2xl font-bold text-white mt-12 mb-4">Popular Trading Strategies</h2>

          <div className="space-y-4 my-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Earnings Play</h4>
              <p className="text-gray-400 text-sm">
                Open a position before Nvidia's earnings announcement. Use lower leverage (2x-3x) due to high
                volatility. Close quickly after the move.
              </p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">AI News Trading</h4>
              <p className="text-gray-400 text-sm">
                React to AI industry news outside market hours. Nvidia often moves on announcements from
                OpenAI, Microsoft, Meta, and other AI players.
              </p>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Technical Trading</h4>
              <p className="text-gray-400 text-sm">
                Use support/resistance levels and technical indicators. The 24/7 nature creates unique patterns
                not seen in traditional markets.
              </p>
            </div>
          </div>

          <h2 id="risks" className="text-2xl font-bold text-white mt-12 mb-4">Risks to Consider</h2>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 my-6">
            <ul className="text-gray-300 text-sm space-y-2">
              <li><strong className="text-red-400">Liquidation Risk:</strong> High leverage can wipe out your position on small adverse moves</li>
              <li><strong className="text-red-400">Funding Costs:</strong> Holding positions for days can result in significant funding payments</li>
              <li><strong className="text-red-400">Oracle Risk:</strong> Price data comes from oracles which can occasionally lag or glitch</li>
              <li><strong className="text-red-400">Volatility:</strong> NVDA is a high-beta stock with significant price swings</li>
              <li><strong className="text-red-400">Weekend Gap Risk:</strong> Price can gap significantly when traditional markets open Monday</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Start Trading NVDA Perps
            </h3>
            <p className="text-gray-400 mb-6">
              Get started on Hyperliquid with zero gas fees
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="nvda_perps_bottom"
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
