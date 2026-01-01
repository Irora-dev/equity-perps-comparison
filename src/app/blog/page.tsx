import Link from 'next/link';
import { platforms } from '@/data/platforms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Equity Perps Platform Reviews & Guides',
  description:
    'In-depth reviews and guides for equity perpetual trading platforms including Hyperliquid, Lighter, Ostium, Avantis, and more.',
  openGraph: {
    title: 'Equity Perps Blog | Platform Reviews & Trading Guides',
    description:
      'Read detailed reviews of the top equity perpetual futures platforms.',
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-gray-400 mb-12">
          In-depth reviews and guides for equity perpetual trading platforms
        </p>

        <div className="space-y-6">
          {platforms.map((platform) => (
            <article
              key={platform.id}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
            >
              <Link href={`/blog/${platform.slug}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h2
                      className="text-xl font-bold hover:underline"
                      style={{ color: platform.color }}
                    >
                      {platform.name} Review: {platform.tagline}
                    </h2>
                    <p className="text-gray-400 mt-2 line-clamp-2">
                      {platform.description}
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <span className="text-sm text-gray-500">
                        Chain: {platform.chain}
                      </span>
                      <span className="text-sm text-gray-500">
                        Max Leverage: {platform.maxLeverage}
                      </span>
                    </div>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
