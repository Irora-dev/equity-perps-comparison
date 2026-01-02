import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

const relatedArticles = [
  {
    title: 'How to Trade Equity Perps',
    href: '/blog/how-to-trade-equity-perps',
    description: 'Step-by-step guide to your first trade.',
    category: 'guide' as const,
  },
  {
    title: 'What Are Equity Perpetuals',
    href: '/blog/what-are-equity-perpetuals',
    description: 'Complete beginner introduction.',
    category: 'guide' as const,
  },
  {
    title: 'Liquidation Calculator',
    href: '/blog/liquidation-calculator',
    description: 'Understand your risk before trading.',
    category: 'tool' as const,
  },
  {
    title: 'How Funding Rates Work',
    href: '/blog/how-funding-rates-work',
    description: 'Learn the costs of holding positions.',
    category: 'guide' as const,
  },
];

const faqs = [
  {
    question: "Which platform is easiest to use for beginners?",
    answer: "Hyperliquid offers the best combination of liquidity, interface design, and documentation for beginners. The zero gas fees also mean you won't be surprised by unexpected costs."
  },
  {
    question: "How much money should beginners start with?",
    answer: "Start with $200-500 that you can afford to lose. This gives you enough margin to learn without immediate liquidation risk, while limiting your downside."
  },
  {
    question: "What leverage should beginners use?",
    answer: "Never exceed 3x-5x leverage as a beginner. Many new traders use too much leverage and get liquidated quickly. Low leverage gives you room to learn from mistakes."
  },
  {
    question: "Do I need DeFi experience to trade equity perps?",
    answer: "Basic familiarity with wallets helps, but it's not required. Our step-by-step guide covers everything from wallet setup to placing your first trade."
  },
];

export const metadata: Metadata = {
  title: 'Best Equity Perps Platforms for Beginners (2026)',
  description: 'Top equity perpetual platforms for new traders. Easy interfaces, educational resources, and forgiving fee structures.',
  openGraph: {
    title: 'Best Equity Perps for Beginners',
    description: 'Platforms ranked by ease of use, documentation, and beginner-friendliness.',
  },
};

export default function BestForBeginners() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const avantis = platforms.find(p => p.id === 'avantis')!;
  const lighter = platforms.find(p => p.id === 'lighter')!;

  const rankedPlatforms = [
    {
      rank: 1,
      platform: hyperliquid,
      reason: 'Best overall for beginners',
      pros: ['Intuitive interface', 'Zero gas fees', 'Mobile app', 'Deep liquidity', 'Most documentation'],
    },
    {
      rank: 2,
      platform: avantis,
      reason: 'Best for risk-averse beginners',
      pros: ['Zero trading fees', '20% loss rebates', 'Simple design', 'Base ecosystem', 'Forgiving fee model'],
    },
    {
      rank: 3,
      platform: lighter,
      reason: 'Best for security-conscious beginners',
      pros: ['Zero fees', 'ZK verification', 'Ethereum security', 'Clean interface', 'Robinhood backing'],
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
            headline: "Best Equity Perps Platforms for Beginners (2026)",
            description: "Top equity perpetual platforms for new traders. Easy interfaces, educational resources, and forgiving fee structures.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/best-equity-perps-for-beginners" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Best for Beginners' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Best For Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Best Equity Perps for Beginners
          </h1>
          <p className="text-xl text-gray-400">
            New to equity perpetuals? These platforms make learning easier with intuitive interfaces,
            educational resources, and forgiving fee structures.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 my-6">
            <p className="text-cyan-400 font-medium flex items-center gap-2 mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Before You Start
            </p>
            <p className="text-gray-300 text-sm">
              Read our <Link href="/blog/what-are-equity-perpetuals" className="text-cyan-400 hover:text-cyan-300">beginner's guide to equity perps</Link> and
              <Link href="/blog/how-to-trade-equity-perps" className="text-cyan-400 hover:text-cyan-300 ml-1">how to trade tutorial</Link> before
              risking real money. Understanding the basics prevents costly mistakes.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">What Makes a Platform Beginner-Friendly?</h2>

          <p className="text-gray-300">
            When evaluating platforms for new traders, we prioritized:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong className="text-white">Interface clarity:</strong> Can you understand what is happening at a glance?</li>
            <li><strong className="text-white">Fee transparency:</strong> Are costs predictable and easy to understand?</li>
            <li><strong className="text-white">Documentation:</strong> Are there guides and tutorials available?</li>
            <li><strong className="text-white">Error tolerance:</strong> Do mistakes cost extra money?</li>
            <li><strong className="text-white">Liquidity:</strong> Can you exit positions easily without slippage?</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Top 3 Platforms for Beginners</h2>

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
                  <h3 className="text-xl font-bold text-white mb-1">
                    <Link href={`/blog/${item.platform.slug}`} className="hover:text-cyan-400">
                      {item.platform.name}
                    </Link>
                  </h3>
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
                    location="best_for_beginners"
                  />
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Beginner Tips</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <h3 className="text-green-400 font-semibold mb-2">Do</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Start with paper trading if available</li>
                <li>Use 2x-3x leverage maximum</li>
                <li>Risk only 1-2% per trade</li>
                <li>Keep a trading journal</li>
                <li>Learn from every loss</li>
              </ul>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <h3 className="text-red-400 font-semibold mb-2">Don't</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Use high leverage immediately</li>
                <li>Trade without stop-losses</li>
                <li>Risk money you cannot lose</li>
                <li>Chase losses with bigger bets</li>
                <li>Trade on emotion or FOMO</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Start Learning?
            </h3>
            <p className="text-gray-400 mb-6">
              Hyperliquid is our top pick for beginners
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="best_for_beginners_bottom"
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
