import Link from 'next/link';
import Image from 'next/image';
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

        {/* Featured Article with Screenshot */}
        <section className="mb-12">
          <Link href="/blog/top-equity-perps-platform-2026" className="group block">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto">
                  <Image
                    src="/images/platforms/hyperliquid.jpg"
                    alt="Hyperliquid trading interface"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/80 hidden md:block" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured for 2026
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    The Top Equity Perps Platform for 2026
                  </h2>
                  <p className="text-gray-400 mt-3">
                    Our pick for the best equity perpetuals trading platform heading into 2026, based on volume, features, and user experience.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    Read the full analysis
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Tools */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h2 className="text-xl font-bold text-white">Tools</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tools.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/30 transition-all h-full">
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
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h2 className="text-xl font-bold text-white">Guides</h2>
          </div>
          <div className="space-y-4">
            {guides.filter(g => g.slug !== 'best-equity-perps-platforms-2025' && g.slug !== 'top-equity-perps-platform-2026').map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-green-500/30 transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white hover:text-green-400">
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
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h2 className="text-xl font-bold text-white">Platform Comparisons</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {comparisons.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-purple-500/30 transition-all h-full">
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
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <h2 className="text-xl font-bold text-white">Platform Reviews</h2>
          </div>
          <div className="space-y-4">
            {platforms.map((platform) => (
              <Link key={platform.id} href={`/blog/${platform.slug}`}>
                <article className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-yellow-500/30 transition-all">
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
