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
    description: 'Step-by-step guide for beginners.',
    category: 'guide' as const,
  },
  {
    title: 'Best for Beginners',
    href: '/blog/best-equity-perps-for-beginners',
    description: 'Platforms that are forgiving for new traders.',
    category: 'guide' as const,
  },
  {
    title: 'Liquidation Calculator',
    href: '/blog/liquidation-calculator',
    description: 'Know your liquidation price before trading.',
    category: 'tool' as const,
  },
  {
    title: 'How Funding Rates Work',
    href: '/blog/how-funding-rates-work',
    description: 'Understanding the hidden costs.',
    category: 'guide' as const,
  },
];

const faqs = [
  {
    question: "What's the most common mistake new traders make?",
    answer: "Using too much leverage. New traders often use 20x or 50x immediately and get liquidated on normal price swings. Start with 2x-5x until you understand the mechanics."
  },
  {
    question: "How can I avoid getting liquidated?",
    answer: "Use lower leverage, set stop losses, and never risk more than 1-2% of your account on a single trade. Use our liquidation calculator before opening positions."
  },
  {
    question: "Should I trade with all my capital?",
    answer: "Never. Only trade with money you can afford to lose. Keep most of your portfolio in stable assets. Consider equity perps trading capital as high-risk allocation."
  },
];

export const metadata: Metadata = {
  title: '5 Equity Perps Trading Mistakes to Avoid',
  description: 'Common mistakes that blow up equity perps accounts. Learn what not to do before you start trading.',
  openGraph: {
    title: '5 Equity Perps Mistakes to Avoid',
    description: 'Don\'t make these costly mistakes when trading equity perpetuals.',
  },
};

export default function FiveMistakesToAvoid() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;
  const avantis = platforms.find(p => p.id === 'avantis')!;

  const mistakes = [
    {
      number: 1,
      title: 'Using Too Much Leverage',
      wrong: 'Opening a 50x position on your first trade',
      right: 'Start with 2x-5x leverage while learning',
      explanation: 'At 50x leverage, a 2% adverse move wipes out your position. Even experienced traders rarely exceed 10x. Your goal is to survive long enough to learn.',
      severity: 'critical',
    },
    {
      number: 2,
      title: 'Ignoring Funding Rates',
      wrong: 'Holding positions for days without checking funding',
      right: 'Factor funding costs into your trade plan',
      explanation: 'Funding rates of 0.1% every 8 hours compound to over 100% annually. What looks like a winning trade can become a loss from funding alone.',
      severity: 'high',
    },
    {
      number: 3,
      title: 'Not Using Stop Losses',
      wrong: 'Hoping a losing position will recover',
      right: 'Set stop losses before entering every trade',
      explanation: 'Without stops, a single gap or flash crash can liquidate you. Define your max loss before entering and stick to it. The market doesn\'t care about your hopes.',
      severity: 'critical',
    },
    {
      number: 4,
      title: 'Trading Without Research',
      wrong: 'FOMO buying because price is moving',
      right: 'Have a thesis for every trade',
      explanation: 'Ask yourself: Why this stock? Why this direction? Why now? If you can\'t answer, you\'re gambling, not trading. Equity perps amplify both good and bad decisions.',
      severity: 'high',
    },
    {
      number: 5,
      title: 'Risking Too Much Per Trade',
      wrong: 'Putting 50% of account in one position',
      right: 'Risk 1-2% max per trade',
      explanation: 'Even the best traders have losing streaks. If you risk 50% per trade, two losses in a row leaves you with 25%. At 2% risk, you survive to trade another day.',
      severity: 'critical',
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
            headline: "5 Equity Perps Trading Mistakes to Avoid",
            description: "Common mistakes that blow up equity perps accounts. Learn what not to do before you start trading.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/5-equity-perps-mistakes" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: '5 Mistakes to Avoid' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-red-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Risk Management
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            5 Equity Perps Mistakes to Avoid
          </h1>
          <p className="text-xl text-gray-400">
            These mistakes blow up accounts. Learn from others' failures before risking your capital.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Most new equity perps traders lose money in their first year. Not because the market is rigged,
            but because they make the same avoidable mistakes. Here's what to watch out for.
          </p>

          {mistakes.map((mistake) => (
            <div key={mistake.number} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0 ${
                  mistake.severity === 'critical' ? 'bg-red-500' : 'bg-orange-500'
                }`}>
                  {mistake.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-bold text-white">{mistake.title}</h2>
                    {mistake.severity === 'critical' && (
                      <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-semibold rounded">CRITICAL</span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                      <p className="text-red-400 text-xs font-semibold mb-1">WRONG</p>
                      <p className="text-gray-300 text-sm">{mistake.wrong}</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <p className="text-green-400 text-xs font-semibold mb-1">RIGHT</p>
                      <p className="text-gray-300 text-sm">{mistake.right}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm">{mistake.explanation}</p>
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Bottom Line</h2>
          <p className="text-gray-300">
            Every experienced trader has made these mistakes. The difference is they survived long enough to learn.
            Start small, use low leverage, and treat your first months as tuition for trading education.
          </p>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Start With a Forgiving Platform
            </h3>
            <p className="text-gray-400 mb-6">
              Avantis offers 20% loss rebates to soften the learning curve
            </p>
            <ReferralButton
              href={avantis.referralUrl}
              platformName="Avantis"
              color={avantis.color}
              location="5_mistakes_bottom"
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
