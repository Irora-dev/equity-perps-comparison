import Link from 'next/link';

export default function Header() {
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
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Compare
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
