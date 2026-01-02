import Link from 'next/link';
import { platforms } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import RelatedArticles from '@/components/RelatedArticles';
import WalletGuideCTA from '@/components/WalletGuideCTA';
import type { Metadata } from 'next';

const tocItems = [
  { id: 'prerequisites', title: 'Prerequisites' },
  { id: 'choose-platform', title: 'Step 1: Choose Your Platform' },
  { id: 'setup-wallet', title: 'Step 2: Set Up Your Wallet' },
  { id: 'fund-account', title: 'Step 3: Fund Your Account' },
  { id: 'understand-interface', title: 'Step 4: Understand the Interface' },
  { id: 'place-trade', title: 'Step 5: Place Your First Trade' },
  { id: 'manage-position', title: 'Step 6: Manage Your Position' },
  { id: 'risk-management', title: 'Risk Management Tips' },
  { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
];

const relatedArticles = [
  {
    title: 'Wallet Setup Guide',
    href: '/blog/wallet-setup-guide',
    description: 'Step-by-step guide to creating and funding your wallet.',
    category: 'essential' as const,
  },
  {
    title: 'What Are Equity Perpetuals',
    href: '/blog/what-are-equity-perpetuals',
    description: 'Complete beginner guide to equity perps.',
    category: 'guide' as const,
  },
  {
    title: 'Equity Perps Risks',
    href: '/blog/equity-perps-risks',
    description: 'Understand the risks before trading.',
    category: 'guide' as const,
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
    question: "How much money do I need to start trading equity perps?",
    answer: "You can start with as little as $50 on most platforms. However, we recommend at least $200-500 to have adequate margin and avoid immediate liquidation on small price moves. Never trade with money you can't afford to lose."
  },
  {
    question: "What leverage should beginners use?",
    answer: "Start with 2x-5x leverage maximum. Many beginners make the mistake of using high leverage (20x+) immediately and get liquidated quickly. Low leverage gives you more room for error while you learn."
  },
  {
    question: "Can I trade equity perps on my phone?",
    answer: "Most platforms work on mobile browsers, though the experience is optimized for desktop. Hyperliquid has a dedicated mobile app. For serious trading, a desktop or laptop is recommended."
  },
  {
    question: "What happens if I get liquidated?",
    answer: "You lose your margin (the money you deposited for that position) but you won't owe additional money. The platform automatically closes your position to prevent negative balances."
  },
  {
    question: "Do I need to pay taxes on equity perps profits?",
    answer: "Yes, profits from equity perps are typically taxable. The exact treatment varies by jurisdiction. Consult a tax professional familiar with digital assets and derivatives. Check our tax guide for more details."
  },
];

export const metadata: Metadata = {
  title: 'How to Trade Equity Perps: Step-by-Step Guide for Beginners',
  description: 'Complete tutorial on trading equity perpetuals. Learn how to set up your wallet, fund your account, and place your first trade.',
  openGraph: {
    title: 'How to Trade Equity Perps',
    description: 'Step-by-step guide for beginners to start trading equity perpetual futures.',
  },
};

export default function HowToTradeEquityPerps() {
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid')!;

  return (
    <main className="min-h-screen py-16 px-4">
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Trade Equity Perps: Step-by-Step Guide for Beginners",
            description: "Complete tutorial on trading equity perpetuals. Learn how to set up your wallet, fund your account, and place your first trade.",
            author: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            publisher: { "@type": "Organization", name: "Compare Equity Perps", url: "https://compareequityperps.com" },
            datePublished: "2026-01-01",
            dateModified: "2026-01-01",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://compareequityperps.com/blog/how-to-trade-equity-perps" },
          }),
        }}
      />
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'How to Trade Equity Perps' }
        ]} />

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Beginner Tutorial
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How to Trade Equity Perps
          </h1>
          <p className="text-xl text-gray-400">
            A complete step-by-step guide to placing your first equity perpetual trade.
            No experience required.
          </p>
        </header>

        <TableOfContents items={tocItems} />

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Trading equity perpetuals might seem complex, but the actual process is straightforward
            once you understand the steps. This guide walks you through everything from creating
            a wallet to placing your first leveraged position.
          </p>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 my-6">
            <p className="text-yellow-400 font-medium flex items-center gap-2 mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Risk Warning
            </p>
            <p className="text-gray-300 text-sm">
              Leveraged trading is risky. You can lose your entire margin quickly. Only trade with money
              you can afford to lose. This guide is educational—not financial advice.
            </p>
          </div>

          <h2 id="prerequisites" className="text-2xl font-bold text-white mt-12 mb-4">Prerequisites</h2>

          <p className="text-gray-300">Before you start, you will need:</p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>A computer or smartphone with internet access</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>USDC stablecoins (you can buy these on any major exchange)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>A basic understanding of long/short positions</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>30-60 minutes for setup and your first trade</span>
            </li>
          </ul>

          <h2 id="choose-platform" className="text-2xl font-bold text-white mt-12 mb-4">Step 1: Choose Your Platform</h2>

          <p className="text-gray-300">
            We recommend starting with <strong className="text-cyan-400">Hyperliquid</strong> for beginners.
            It has the deepest liquidity, most equity perps available, and a polished user interface.
          </p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <h3 className="text-white font-semibold mb-3">Why Hyperliquid for Beginners?</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Largest volume = tightest spreads</li>
              <li>Most equity perps (12+ stocks)</li>
              <li>Zero gas fees</li>
              <li>Intuitive interface</li>
              <li>Mobile app available</li>
            </ul>
          </div>

          <p className="text-gray-300">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300">Compare all platforms</Link> to find
            the best fit for your needs.
          </p>

          <h2 id="setup-wallet" className="text-2xl font-bold text-white mt-12 mb-4">Step 2: Set Up Your Wallet</h2>

          <p className="text-gray-300 mb-4">
            You need a self-custody wallet to interact with decentralized platforms. We recommend
            <strong className="text-white"> Rabby Wallet</strong> for its security features and ease of use.
          </p>

          {/* Video Tutorial */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <h3 className="text-white font-semibold mb-3">Video: Wallet Setup Walkthrough</h3>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/_ouAzSQJiM0"
                title="How to Set Up a Wallet for Trading Equity Perps"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <WalletGuideCTA />

          <p className="text-gray-400 text-sm">
            Our complete <Link href="/blog/wallet-setup-guide" className="text-cyan-400 hover:text-cyan-300">wallet setup guide</Link> covers
            everything from installation to funding your wallet with USDC.
          </p>

          <h2 id="fund-account" className="text-2xl font-bold text-white mt-12 mb-4">Step 3: Fund Your Account</h2>

          <p className="text-gray-300">You need USDC stablecoins to trade. Here is how to get them:</p>

          <ol className="text-gray-300 space-y-4 my-6">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 text-sm font-bold">1</span>
              <span>Buy USDC on a centralized exchange (Coinbase, Kraken, Binance)</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 text-sm font-bold">2</span>
              <span>Withdraw USDC to your wallet address on Arbitrum (for Hyperliquid)</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 text-sm font-bold">3</span>
              <span>Connect your wallet to the trading platform</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 text-sm font-bold">4</span>
              <span>Deposit USDC into your trading account</span>
            </li>
          </ol>

          <h2 id="understand-interface" className="text-2xl font-bold text-white mt-12 mb-4">Step 4: Understand the Interface</h2>

          <p className="text-gray-300">Most equity perps platforms have similar layouts:</p>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-6">
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-white">Chart:</strong> Shows price action for the selected asset</li>
              <li><strong className="text-white">Order Book:</strong> Shows buy and sell orders at different prices</li>
              <li><strong className="text-white">Trading Panel:</strong> Where you enter position size, leverage, and order type</li>
              <li><strong className="text-white">Positions:</strong> Shows your open positions and P&L</li>
              <li><strong className="text-white">Account:</strong> Shows your balance, margin, and available funds</li>
            </ul>
          </div>

          <h2 id="place-trade" className="text-2xl font-bold text-white mt-12 mb-4">Step 5: Place Your First Trade</h2>

          <p className="text-gray-300">Follow these steps to open a position:</p>

          <ol className="text-gray-300 space-y-4 my-6">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 text-sm font-bold">1</span>
              <div>
                <strong className="text-white">Select your market</strong>
                <p className="text-gray-400 text-sm">Choose an equity perp like NVDA-USD or TSLA-USD</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 text-sm font-bold">2</span>
              <div>
                <strong className="text-white">Choose direction</strong>
                <p className="text-gray-400 text-sm">Long (buy) if you think price will go up. Short (sell) if you think it will go down.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 text-sm font-bold">3</span>
              <div>
                <strong className="text-white">Set leverage</strong>
                <p className="text-gray-400 text-sm">Start with 2x-3x as a beginner. Higher leverage = higher risk.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 text-sm font-bold">4</span>
              <div>
                <strong className="text-white">Enter position size</strong>
                <p className="text-gray-400 text-sm">Start small. 5-10% of your account per trade maximum.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 text-sm font-bold">5</span>
              <div>
                <strong className="text-white">Review and submit</strong>
                <p className="text-gray-400 text-sm">Check your liquidation price and confirm the order.</p>
              </div>
            </li>
          </ol>

          <h2 id="manage-position" className="text-2xl font-bold text-white mt-12 mb-4">Step 6: Manage Your Position</h2>

          <p className="text-gray-300">Once your position is open:</p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Monitor your P&L and liquidation price</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Consider setting a stop-loss to limit losses</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Be aware of funding rate payments every 8 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Close your position when you hit your target or stop-loss</span>
            </li>
          </ul>

          <h2 id="risk-management" className="text-2xl font-bold text-white mt-12 mb-4">Risk Management Tips</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Do
              </h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Start with low leverage (2x-5x)</li>
                <li>Risk only 1-2% per trade</li>
                <li>Use stop-losses</li>
                <li>Track your trades in a journal</li>
                <li>Take breaks after losses</li>
              </ul>
            </div>
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Don't
              </h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Use high leverage immediately</li>
                <li>Risk more than you can lose</li>
                <li>Trade without a plan</li>
                <li>Chase losses with bigger bets</li>
                <li>Trade on emotion</li>
              </ul>
            </div>
          </div>

          <h2 id="common-mistakes" className="text-2xl font-bold text-white mt-12 mb-4">Common Mistakes to Avoid</h2>

          <ol className="text-gray-300 space-y-4 my-6">
            <li>
              <strong className="text-white">Using too much leverage:</strong> 50x leverage sounds exciting until
              a 2% move wipes out your account. Start low.
            </li>
            <li>
              <strong className="text-white">Ignoring funding rates:</strong> Holding a position for days can cost
              significant money in funding. Factor this into your trades.
            </li>
            <li>
              <strong className="text-white">Not setting stop-losses:</strong> Hope is not a strategy.
              Define your exit before entering.
            </li>
            <li>
              <strong className="text-white">Overtrading:</strong> Quality over quantity. Wait for good setups
              instead of trading every price move.
            </li>
            <li>
              <strong className="text-white">Trading during high volatility:</strong> News events and earnings
              can cause liquidation cascades. Be careful during volatile periods.
            </li>
          </ol>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Start Trading?
            </h3>
            <p className="text-gray-400 mb-6">
              Create your account on Hyperliquid and place your first trade
            </p>
            <ReferralButton
              href={hyperliquid.referralUrl}
              platformName="Hyperliquid"
              color={hyperliquid.color}
              location="how_to_trade_guide"
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
