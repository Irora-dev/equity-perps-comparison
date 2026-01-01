import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { platforms, getPlatformBySlug, featureLabels, type Platform } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import FAQSection from '@/components/FAQSection';
import type { Metadata } from 'next';

// Platform-specific FAQs
const platformFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  hyperliquid: [
    { question: "Is Hyperliquid safe to use?", answer: "Hyperliquid has processed over $319B in volume without major security incidents. The HIP-3 protocol is battle-tested, though all DeFi carries inherent smart contract risk." },
    { question: "What fees does Hyperliquid charge?", answer: "Hyperliquid has zero gas fees. Makers receive rebates while takers pay a small fee. Overall, it's one of the most cost-effective platforms." },
    { question: "How do I deposit to Hyperliquid?", answer: "Connect your wallet, bridge USDC to Hyperliquid L1, and deposit to your trading account. The process takes a few minutes." },
    { question: "What stocks can I trade on Hyperliquid?", answer: "Hyperliquid offers 12+ equity perps including NVDA, TSLA, AAPL, MSFT, META, AMZN, GOOGL, AMD, COIN, and more." },
  ],
  lighter: [
    { question: "How does Lighter's zero-fee model work?", answer: "Lighter charges zero trading fees for retail traders. The platform is subsidized by institutional volume and investor backing from Robinhood." },
    { question: "What are ZK proofs and why do they matter?", answer: "ZK (zero-knowledge) proofs cryptographically verify every trade without revealing sensitive data. This provides mathematical proof that trades were executed correctly." },
    { question: "Is Lighter safe?", answer: "Lighter's ZK proof system provides cryptographic verification of all trades. It settles to Ethereum, inheriting its security. The $1.5B valuation reflects institutional confidence." },
    { question: "What equity perps does Lighter offer?", answer: "Lighter currently offers COIN and HOOD with plans to expand. The focus is on quality over quantity with deep liquidity for available pairs." },
  ],
  ostium: [
    { question: "What are 0DTE perpetuals?", answer: "0DTE (zero days to expiration) perpetuals auto-close before market close each day. This gives you intraday exposure without overnight risk." },
    { question: "Why does Ostium offer 200x leverage?", answer: "Ostium targets aggressive traders seeking maximum capital efficiency. The 200x leverage is available on crypto; equity perps have 100x during market hours." },
    { question: "Is Ostium safe?", answer: "Ostium is backed by General Catalyst and Jump Crypto with $24M raised. It's built on Arbitrum and focuses primarily on RWAs with 95%+ of OI in real-world assets." },
    { question: "What makes Ostium different?", answer: "Ostium's 0DTE perpetuals and highest leverage (200x) set it apart. The auto-close feature is unique for day traders who want defined risk periods." },
  ],
  avantis: [
    { question: "How do Avantis loss rebates work?", answer: "If your trade closes at a loss, Avantis refunds 20% of your losses. This significantly reduces the sting of losing trades and improves expected value." },
    { question: "Why are there no trading fees on Avantis?", answer: "Avantis uses a novel model where you pay nothing to enter positions. Fees are only charged when you close at a profit, aligning platform incentives with trader success." },
    { question: "Is Avantis safe?", answer: "Avantis is backed by Pantera Capital, Coinbase Ventures, and Founders Fund. It's built on Base (Coinbase's L2) and uses a dual oracle system for security." },
    { question: "What leverage does Avantis offer?", answer: "Avantis offers up to 500x on crypto and 25x on equity perpetuals. The lower equity leverage reflects the product's focus on sustainable risk." },
  ],
  variational: [
    { question: "What is RFQ trading?", answer: "RFQ (request-for-quote) is peer-to-peer trading where you request quotes from market makers rather than trading against an orderbook. This can provide better pricing for larger orders." },
    { question: "Why does Variational have so many markets?", answer: "Variational's RFQ model allows it to offer ~500 markets without needing deep liquidity in each. Market makers quote on demand." },
    { question: "Is Variational safe?", answer: "Variational is backed by Bain Capital and Brevan Howard—major traditional finance players. It uses isolated smart contract escrows for each trade." },
    { question: "What fees does Variational charge?", answer: "Variational has zero maker and taker fees. The platform monetizes through spreads in the RFQ quotes from market makers." },
  ],
  tradexyz: [
    { question: "What is the XYZ100 index?", answer: "XYZ100 is a synthetic index tracking the top 100 US stocks by market cap. It provides broad market exposure in a single perpetual contract." },
    { question: "How does TradeXYZ work with Hyperliquid?", answer: "TradeXYZ operates on Hyperliquid via HIP-3, leveraging Hyperliquid's infrastructure for settlement and liquidity." },
    { question: "What leverage does TradeXYZ offer?", answer: "TradeXYZ offers up to 20x leverage on equity perps, more conservative than some competitors but suitable for most traders." },
    { question: "Is TradeXYZ safe?", answer: "TradeXYZ inherits security from Hyperliquid's infrastructure. The platform focuses on providing unique index products with non-custodial trading." },
  ],
  trove: [
    { question: "What exotic markets does Trove offer?", answer: "Trove offers perpetuals on collectibles like Pokemon cards, luxury watches, Birkin bags, and other alternative assets that have never had derivatives markets." },
    { question: "Why is leverage limited to 5x on Trove?", answer: "Lower leverage reflects the higher volatility and lower liquidity of exotic markets. 5x is appropriate for these unpredictable asset classes." },
    { question: "Is Trove safe?", answer: "Trove is built on Hyperliquid's infrastructure and is currently in public beta. As a newer platform, it carries more risk than established alternatives." },
    { question: "Who should use Trove?", answer: "Trove is ideal for collectors who want to hedge physical assets or speculate on collectible markets without owning the underlying items." },
  ],
};

// Platform ratings based on analysis
const platformRatings: Record<string, { overall: number; liquidity: number; fees: number; features: number; security: number }> = {
  hyperliquid: { overall: 4.8, liquidity: 5.0, fees: 4.5, features: 4.8, security: 4.7 },
  lighter: { overall: 4.5, liquidity: 4.0, fees: 5.0, features: 4.2, security: 4.8 },
  ostium: { overall: 4.4, liquidity: 3.8, fees: 4.2, features: 4.8, security: 4.6 },
  variational: { overall: 4.2, liquidity: 3.5, fees: 5.0, features: 4.0, security: 4.3 },
  tradexyz: { overall: 4.0, liquidity: 3.2, fees: 4.0, features: 4.2, security: 4.0 },
  avantis: { overall: 4.3, liquidity: 3.5, fees: 5.0, features: 4.0, security: 4.5 },
  trove: { overall: 3.8, liquidity: 2.8, fees: 3.8, features: 4.5, security: 3.8 },
};

// Get related platforms for comparison suggestions
function getRelatedArticles(platform: Platform) {
  const otherPlatforms = platforms.filter(p => p.id !== platform.id).slice(0, 2);
  return [
    ...otherPlatforms.map(p => ({
      title: `${p.name} Review`,
      href: `/blog/${p.slug}`,
      description: p.tagline,
      category: 'review' as const,
    })),
    {
      title: 'Best Equity Perps Platforms 2025',
      href: '/blog/best-equity-perps-platforms-2025',
      description: 'Complete ranking of all equity perpetual platforms.',
      category: 'guide' as const,
    },
    {
      title: 'How Funding Rates Work',
      href: '/blog/how-funding-rates-work',
      description: 'Understanding funding in perpetual futures.',
      category: 'guide' as const,
    },
  ];
}

const platformScreenshots: Record<string, string> = {
  hyperliquid: '/images/platforms/hyperliquid.jpg',
  lighter: '/images/platforms/lighter.jpg',
  ostium: '/images/platforms/ostium.jpg',
  trove: '/images/platforms/trove.jpg',
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return platforms.map((platform) => ({
    slug: platform.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    return {
      title: 'Platform Not Found',
    };
  }

  return {
    title: `${platform.name} Review | Equity Perps Trading Platform`,
    description: `${platform.description} Compare features, fees, and leverage options on ${platform.name}.`,
    openGraph: {
      title: `${platform.name} Review - Equity Perps Comparisonator`,
      description: platform.description,
    },
  };
}

export default async function PlatformReviewPage({ params }: Props) {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    notFound();
  }

  const features = Object.entries(platform.features) as Array<
    [keyof typeof platform.features, boolean]
  >;

  const ratings = platformRatings[platform.id] || { overall: 4.0, liquidity: 4.0, fees: 4.0, features: 4.0, security: 4.0 };
  const relatedArticles = getRelatedArticles(platform);

  return (
    <main className="min-h-screen py-16 px-4">
      {/* JSON-LD for Review */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "SoftwareApplication",
              name: platform.name,
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              description: platform.description,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: ratings.overall,
              bestRating: 5,
              worstRating: 1,
            },
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
            reviewBody: `${platform.name} is a ${platform.chain}-based equity perpetuals trading platform offering ${platform.maxLeverage} leverage. ${platform.description}`,
          }),
        }}
      />
      {/* JSON-LD for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${platform.name} Review: ${platform.tagline}`,
            description: platform.description,
            author: {
              "@type": "Organization",
              name: "Compare Equity Perps",
            },
            publisher: {
              "@type": "Organization",
              name: "Compare Equity Perps",
            },
            datePublished: "2025-01-01",
            dateModified: "2026-01-01",
          }),
        }}
      />

      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: platform.name }
        ]} />

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">
              {platform.chain}
            </span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">
              {platform.maxLeverage} leverage
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span style={{ color: platform.color }}>{platform.name}</span>{' '}
            <span className="text-white">Review</span>
          </h1>
          <p className="text-xl text-gray-400">{platform.tagline}</p>
        </header>

        {/* Rating Summary */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold" style={{ color: platform.color }}>{ratings.overall}</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= Math.round(ratings.overall) ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-1">Overall Rating</p>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl font-semibold text-white">{ratings.liquidity}</div>
                <div className="text-gray-500 text-xs">Liquidity</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-white">{ratings.fees}</div>
                <div className="text-gray-500 text-xs">Fees</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-white">{ratings.features}</div>
                <div className="text-gray-500 text-xs">Features</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-white">{ratings.security}</div>
                <div className="text-gray-500 text-xs">Security</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-medium">Ready to start trading?</p>
              <p className="text-gray-400 text-sm">
                Sign up for {platform.name} and get access to equity perps
              </p>
            </div>
            <ReferralButton
              href={platform.referralUrl}
              platformName={platform.name}
              color={platform.color}
              location="platform_review_top"
            />
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">{platform.description}</p>
          {platform.backing && (
            <p className="text-gray-400 mt-4">
              <strong className="text-white">Backing:</strong> {platform.backing}
            </p>
          )}
          {platform.volume && (
            <p className="text-gray-400 mt-2">
              <strong className="text-white">Volume:</strong> {platform.volume}
            </p>
          )}
        </section>

        {/* Platform Screenshot */}
        {platformScreenshots[platform.slug] && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Trading Interface</h2>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800">
              <Image
                src={platformScreenshots[platform.slug]}
                alt={`${platform.name} trading interface showing equity perpetual futures`}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-500 text-sm mt-3 text-center">
              {platform.name} trading interface showing NVDA perpetual futures
            </p>
          </section>
        )}

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map(([key, value]) => (
              <div
                key={key}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  value ? 'bg-green-500/10' : 'bg-gray-800/50'
                }`}
              >
                {value ? (
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                <span className={value ? 'text-white' : 'text-gray-500'}>
                  {featureLabels[key]}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-400 mb-4">Pros</h3>
            <ul className="space-y-3">
              {platform.pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-400 mb-4">Cons</h3>
            <ul className="space-y-3">
              {platform.cons.map((con, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <svg
                    className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Supported Assets */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Supported Assets</h2>
          <div className="flex flex-wrap gap-2">
            {platform.supportedAssets.map((asset) => (
              <span
                key={asset}
                className="px-3 py-2 bg-gray-800 rounded-lg text-gray-300"
              >
                {asset}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Start Trading on {platform.name}
          </h2>
          <p className="text-gray-400 mb-6">
            Access equity perpetual futures with {platform.maxLeverage} leverage
          </p>
          <ReferralButton
            href={platform.referralUrl}
            platformName={platform.name}
            color={platform.color}
            location="platform_review_bottom"
          />
        </section>

        {/* FAQs */}
        {platformFAQs[platform.id] && platformFAQs[platform.id].length > 0 && (
          <FAQSection faqs={platformFAQs[platform.id]} />
        )}

        <RelatedArticles articles={relatedArticles} />

        {/* Back to comparison */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to platform comparison
          </Link>
        </div>
      </article>
    </main>
  );
}
