'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isBlog = pathname === '/blog' || pathname.startsWith('/blog/');

  return (
    <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">
              Compare <span className="text-cyan-400">Equity Perps</span>
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className={`transition-colors text-sm font-medium ${
                isHome
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Compare
            </Link>
            <Link
              href="/blog"
              className={`transition-colors text-sm font-medium ${
                isBlog
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
