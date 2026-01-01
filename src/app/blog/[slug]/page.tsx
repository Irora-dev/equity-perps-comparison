import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { platforms, getPlatformBySlug, featureLabels } from '@/data/platforms';
import ReferralButton from '@/components/ReferralButton';
import type { Metadata } from 'next';

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

  return (
    <main className="min-h-screen py-16 px-4">
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
              name: "Equity Perps Comparisonator",
            },
            publisher: {
              "@type": "Organization",
              name: "Equity Perps Comparisonator",
            },
          }),
        }}
      />

      <article className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-300">{platform.name}</li>
          </ol>
        </nav>

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
