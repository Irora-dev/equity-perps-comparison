import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

const relatedArticles = [
  {
    title: 'What Are Equity Perpetuals',
    href: '/blog/what-are-equity-perpetuals',
    description: 'Complete beginner guide to equity perps.',
    category: 'guide' as const,
  },
  {
    title: 'How to Trade Equity Perps',
    href: '/blog/how-to-trade-equity-perps',
    description: 'Step-by-step guide to your first trade.',
    category: 'guide' as const,
  },
  {
    title: 'Best Equity Perps for Beginners',
    href: '/blog/best-equity-perps-for-beginners',
    description: 'Platforms ranked for new traders.',
    category: 'guide' as const,
  },
  {
    title: 'Equity Perps vs CFDs',
    href: '/blog/equity-perps-vs-cfds',
    description: 'How perps compare to traditional CFDs.',
    category: 'comparison' as const,
  },
];

const faqs = [
  {
    question: "Are equity perps right for me?",
    answer: "Equity perps are suitable if you want leveraged stock exposure, 24/7 trading access, and self-custody. They require understanding leverage risks and funding rates. Start with small positions and low leverage."
  },
  {
    question: "How much money do I need to start?",
    answer: "You can start with as little as $50-100. We recommend $200-500 to have adequate margin for learning without immediate liquidation risk."
  },
  {
    question: "What are the main risks?",
    answer: "Key risks include: leverage amplifying losses, liquidation from adverse price moves, smart contract vulnerabilities, and funding rate costs. Only trade with money you can afford to lose."
  },
];

export const metadata: Metadata = {
  title: '7 Reasons to Trade Equity Perps in 2026',
  description: 'Why traders are switching to equity perpetuals. Leverage, 24/7 access, no PDT rules, and more.',
  openGraph: {
    title: '7 Reasons to Trade Equity Perps in 2026',
    description: 'Discover why equity perpetuals are gaining popularity among traders.',
  },
};

export default function SevenReasonsToTradeEquityPerps() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;

  const reasons = [
    {
      number: 1,
      title: 'Leverage Up to 200x',
      description: 'Control large positions with small capital. While traditional margin accounts offer 2x-4x, equity perps platforms like Ostium offer up to 200x. Use responsibly.',
      stat: '200x',
      statLabel: 'Max Leverage',
    },
    {
      number: 2,
      title: '24/7 Trading Access',
      description: 'Trade Tesla or Nvidia at 3 AM on a Sunday. React to earnings, news, and tweets in real time instead of waiting for market open.',
      stat: '24/7',
      statLabel: 'Trading Hours',
    },
    {
      number: 3,
      title: 'No Pattern Day Trader Rules',
      description: 'The PDT rule doesn\'t apply to crypto derivatives. Day trade as much as you want regardless of account size.',
      stat: '0',
      statLabel: 'PDT Restrictions',
    },
    {
      number: 4,
      title: 'Self-Custody of Funds',
      description: 'Your crypto stays in your wallet until you trade. No broker holding your money. Withdraw anytime without delays.',
      stat: '100%',
      statLabel: 'Self-Custody',
    },
    {
      number: 5,
      title: 'Zero or Low Fees',
      description: 'Many platforms offer zero trading fees. No commissions, no ticket charges. Just the spread and funding rates.',
      stat: '0%',
      statLabel: 'Trading Fees',
    },
    {
      number: 6,
      title: 'Easy Short Selling',
      description: 'Going short is as simple as going long. No share borrowing, no locate fees, no uptick rules. Click sell.',
      stat: '1-click',
      statLabel: 'Short Selling',
    },
    {
      number: 7,
      title: 'No KYC Required',
      description: 'Most decentralized platforms don\'t require identity verification. Connect your wallet and start trading in minutes.',
      stat: 'None',
      statLabel: 'KYC Required',
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
            headline: "7 Reasons to Trade Equity Perps in 2026",
            description: "Why traders are switching to equity perpetuals. Leverage, 24/7 access, no PDT rules, and more.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/7-reasons-trade-equity-perps" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: '7 Reasons to Trade Equity Perps' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Listicle
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            7 Reasons to Trade Equity Perps in 2026
          </h1>
          <p className="text-xl text-gray-400">
            Why more traders are switching from traditional brokers to decentralized equity perpetuals.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Equity perpetuals have grown from a niche product to a $300B+ monthly volume market.
            Here's why traders are making the switch.
          </p>

          {reasons.map((reason) => (
            <div key={reason.number} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold text-gray-900 flex-shrink-0">
                  {reason.number}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">{reason.title}</h2>
                  <p className="text-gray-300 mb-4">{reason.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-lg">
                    <span className="text-cyan-400 font-bold">{reason.stat}</span>
                    <span className="text-gray-500 text-sm">{reason.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Start Trading?
            </h3>
            <p className="text-gray-400 mb-6">
              Hyperliquid offers the best combination of liquidity, features, and fees
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="7_reasons_bottom"
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
