import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

const faqs = [
  {
    question: "What is a good funding rate for equity perps?",
    answer: "A neutral funding rate is around 0.01% per 8 hours (about 10% annualized). Rates below this favor longs, above this favor shorts. Rates above 0.1% per 8 hours are considered high and signal crowded positioning."
  },
  {
    question: "Do I pay funding if I close my position before settlement?",
    answer: "Yes, most platforms calculate funding continuously. You pay or receive funding proportional to how long you held the position, even if you close before the scheduled settlement time."
  },
  {
    question: "Can funding rates be negative?",
    answer: "Yes. Negative funding means shorts pay longs. This happens when there's more short interest than long interest, pushing the perp price below spot. It's common during market downturns."
  },
  {
    question: "How often do equity perps funding rates change?",
    answer: "Funding rates are recalculated every funding interval (1-8 hours depending on platform). They can change significantly between periods based on market conditions and positioning."
  },
  {
    question: "Why are funding rates different across platforms?",
    answer: "Each platform has different traders and liquidity. A platform with more retail longs will have higher funding rates. Arbitrageurs help equalize rates but differences persist due to friction and capital constraints."
  },
];

export const metadata: Metadata = {
  title: 'How Equity Perps Funding Rates Work | Complete Guide',
  description: 'Understand the funding rate mechanism that keeps perpetual futures prices aligned with spot markets.',
  openGraph: {
    title: 'How Funding Rates Work',
    description: 'The complete guide to understanding perpetual futures funding rates.',
  },
};

export default function HowFundingRatesWork() {
  return (
    <main className="min-h-screen py-16 px-4">
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Equity Perps Funding Rates Work",
            description: "Understand the funding rate mechanism that keeps perpetual futures prices aligned with spot markets.",
            author: {
              "@type": "Organization",
              name: "Compare Equity Perps",
              url: "https://compareequityperps.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Compare Equity Perps",
              url: "https://compareequityperps.com",
            },
            datePublished: "2025-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://compareequityperps.com/blog/how-funding-rates-work",
            },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'How Funding Rates Work' }
        ]} />

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Educational Guide</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            How Equity Perps Funding Rates Work
          </h1>
          <p className="text-xl text-gray-400">
            The mechanism that keeps perpetual prices honest. Understanding funding is essential for profitable trading.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Funding rates are periodic payments between long and short traders. They exist because perpetual futures
            have no expiry date. Without funding, perp prices would drift arbitrarily far from spot prices.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Core Mechanism</h2>

          <p className="text-gray-300">
            When the perpetual price trades above the spot price, longs pay shorts.
            When the perpetual trades below spot, shorts pay longs.
            This creates financial incentive to push the perp price back toward spot.
          </p>

          <p className="text-gray-300">
            Think of it as rent for holding a position. If everyone wants to go long, the rent for longs goes up.
            This discourages new longs and encourages shorts, naturally balancing the market.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Formula</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300 mb-4">
              Most platforms use a variation of this formula:
            </p>
            <code className="text-cyan-400 block mb-4">
              Funding Rate = (Perp Price - Spot Price) / Spot Price + Interest Rate
            </code>
            <p className="text-gray-400 text-sm">
              The interest rate component accounts for the cost of capital. It is typically small compared to the price deviation component.
            </p>
          </div>

          <p className="text-gray-300">
            If NVDA spot is $100 and the perp trades at $101, the price deviation is 1%.
            Over an 8 hour funding period, longs might pay 0.01% to shorts. Annualized, this is roughly 10% per year.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Funding Intervals</h2>

          <p className="text-gray-300">
            Platforms settle funding at different intervals:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong className="text-white">Every 8 hours:</strong> The traditional approach used by centralized exchanges and Hyperliquid</li>
            <li><strong className="text-white">Every hour:</strong> More frequent settlements on platforms like Lighter</li>
            <li><strong className="text-white">Continuous:</strong> Some platforms accrue funding every block for smoother settlement</li>
          </ul>

          <p className="text-gray-300">
            More frequent funding means smaller individual payments but the same total cost over time.
            The main advantage is less capital tied up waiting for settlement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Equity Perps: Special Considerations</h2>

          <p className="text-gray-300">
            Equity perps add complexity because stock markets close. Several questions arise:
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">What Happens Outside Market Hours?</h3>

          <p className="text-gray-300">
            Most platforms continue funding outside market hours using the last closing price as the reference.
            Some incorporate extended hours data when available. This creates interesting dynamics around earnings
            and major announcements.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Weekend Funding</h3>

          <p className="text-gray-300">
            Markets close Friday afternoon and reopen Monday morning. During this gap, perp prices can move
            while spot remains fixed. Weekend funding rates often spike as traders position for Monday opens.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Dividend Adjustments</h3>

          <p className="text-gray-300">
            Some platforms adjust funding around dividend dates. Others ignore dividends entirely.
            Check platform documentation before holding positions through ex-dividend dates.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Trading Strategies Using Funding</h2>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Funding Rate Arbitrage</h3>

          <p className="text-gray-300">
            When funding is highly positive, you can earn by holding short positions. The funding payments
            offset price risk. Some traders hedge with spot positions to isolate pure funding returns.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Cross Platform Arbitrage</h3>

          <p className="text-gray-300">
            Funding rates vary across platforms. If Hyperliquid funding is +0.05% and Lighter is -0.02%,
            you can long on Lighter and short on Hyperliquid. You collect the spread while remaining market neutral.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">Timing Entries</h3>

          <p className="text-gray-300">
            Enter positions right after funding settles to maximize time before the next payment.
            This matters more for short term trades where funding represents a larger percentage of expected profit.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Common Mistakes</h2>

          <ul className="text-gray-300 space-y-3 my-4">
            <li>
              <strong className="text-white">Ignoring funding entirely:</strong> A 0.1% funding rate three times daily
              is nearly 110% annually. This destroys returns on long term positions.
            </li>
            <li>
              <strong className="text-white">Assuming rates stay constant:</strong> Funding changes with market conditions.
              What was negative yesterday can be positive tomorrow.
            </li>
            <li>
              <strong className="text-white">Not checking before opening positions:</strong> Always check current funding
              rates before entering. High rates signal crowded trades.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Monitoring Funding Rates</h2>

          <p className="text-gray-300">
            Every platform displays current and historical funding rates. Check these regularly.
            Some traders set alerts for funding rate spikes as they often precede volatility.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <p className="text-gray-300">
              <Link href="/blog/funding-rate-tracker" className="text-cyan-400 hover:text-cyan-300">
                Use our funding rate tracker
              </Link>
              {' '}to compare current rates across all major equity perps platforms in one place.
            </p>
          </div>
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
