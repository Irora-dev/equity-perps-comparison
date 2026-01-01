import Link from 'next/link';
import { platforms } from '@/data/platforms';
import { blogPosts } from '@/data/blog-posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Equity Perps Platform Reviews & Guides',
  description:
    'In-depth reviews, guides, and tools for equity perpetual trading platforms including Hyperliquid, Lighter, Ostium, Avantis, and more.',
  openGraph: {
    title: 'Equity Perps Blog | Platform Reviews & Trading Guides',
    description:
      'Read detailed reviews of the top equity perpetual futures platforms.',
  },
};

export default function BlogPage() {
  const guides = blogPosts.filter(p => p.category === 'guide');
  const comparisons = blogPosts.filter(p => p.category === 'comparison');
  const tools = blogPosts.filter(p => p.category === 'tools');

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-gray-400 mb-12">
          In-depth reviews, guides, and tools for equity perpetual trading
        </p>

        {/* Featured Guide */}
        <section className="mb-12">
          <Link href="/blog/best-equity-perps-platforms-2025">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <span className="text-cyan-400 text-sm font-medium">Featured</span>
              <h2 className="text-2xl font-bold text-white mt-2">
                Best Equity Perps Platforms in 2025
              </h2>
              <p className="text-gray-400 mt-2">
                Our ranked breakdown of the top platforms for trading equity perpetual futures this year.
              </p>
            </div>
          </Link>
        </section>

        {/* Tools */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tools.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all h-full">
                  <span className="text-cyan-400 text-xs font-medium uppercase">Tool</span>
                  <h3 className="text-white font-medium mt-1">{post.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Guides */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Guides</h2>
          <div className="space-y-4">
            {guides.filter(g => g.slug !== 'best-equity-perps-platforms-2025').map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white hover:text-cyan-400">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{post.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Comparisons */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Platform Comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {comparisons.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all h-full">
                  <span className="text-purple-400 text-xs font-medium uppercase">VS</span>
                  <h3 className="text-white font-medium mt-1">{post.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Platform Reviews */}
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Platform Reviews</h2>
          <div className="space-y-4">
            {platforms.map((platform) => (
              <Link key={platform.id} href={`/blog/${platform.slug}`}>
                <article className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold hover:underline" style={{ color: platform.color }}>
                        {platform.name} Review
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">{platform.tagline}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-gray-500">{platform.chain}</span>
                        <span className="text-xs text-gray-500">{platform.maxLeverage}</span>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
