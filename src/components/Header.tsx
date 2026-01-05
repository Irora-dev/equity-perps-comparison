'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === '/';
  const isStocks = pathname === '/stocks';
  const isBlog = pathname === '/blog' || pathname.startsWith('/blog/');
  const isTools = pathname.includes('calculator') || pathname.includes('tracker') || pathname.includes('cheapest') || pathname.includes('simulator');

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setToolsOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-base sm:text-xl font-bold text-white">
              Compare <span className="text-cyan-400">Equity Perps</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
              href="/stocks"
              className={`transition-colors text-sm font-medium ${
                isStocks
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Stocks
            </Link>
            <Link
              href="/blog"
              className={`transition-colors text-sm font-medium ${
                isBlog && !isTools
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog
            </Link>

            {/* Tools Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className={`inline-flex items-center gap-1 transition-colors text-sm font-medium ${
                  isTools
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Tools
                <svg
                  className={`w-4 h-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {toolsOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2">
                  <Link
                    href="/blog/pnl-simulator"
                    onClick={() => setToolsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    PnL Simulator
                  </Link>
                  <Link
                    href="/blog/funding-rate-tracker"
                    onClick={() => setToolsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Funding Rate Tracker
                  </Link>
                  <Link
                    href="/blog/fee-calculator"
                    onClick={() => setToolsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Fee Calculator
                  </Link>
                  <Link
                    href="/blog/liquidation-calculator"
                    onClick={() => setToolsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Liquidation Calculator
                  </Link>
                  <div className="border-t border-gray-800 my-2"></div>
                  <Link
                    href="/blog/cheapest-equity-perps-fees"
                    onClick={() => setToolsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Fee Comparison Guide
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className={`px-4 py-3 rounded-lg transition-colors text-base font-medium ${
                  isHome
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Compare
              </Link>
              <Link
                href="/stocks"
                className={`px-4 py-3 rounded-lg transition-colors text-base font-medium ${
                  isStocks
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Stocks
              </Link>
              <Link
                href="/blog"
                className={`px-4 py-3 rounded-lg transition-colors text-base font-medium ${
                  isBlog && !isTools
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Blog
              </Link>

              {/* Tools section in mobile */}
              <div className="pt-2 border-t border-gray-800 mt-2">
                <span className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tools</span>
                <Link
                  href="/blog/pnl-simulator"
                  className="flex items-center gap-3 px-4 py-3 text-base text-gray-300 hover:bg-gray-800 hover:text-white transition-colors rounded-lg"
                >
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  PnL Simulator
                </Link>
                <Link
                  href="/blog/funding-rate-tracker"
                  className="flex items-center gap-3 px-4 py-3 text-base text-gray-300 hover:bg-gray-800 hover:text-white transition-colors rounded-lg"
                >
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Funding Rate Tracker
                </Link>
                <Link
                  href="/blog/fee-calculator"
                  className="flex items-center gap-3 px-4 py-3 text-base text-gray-300 hover:bg-gray-800 hover:text-white transition-colors rounded-lg"
                >
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Fee Calculator
                </Link>
                <Link
                  href="/blog/liquidation-calculator"
                  className="flex items-center gap-3 px-4 py-3 text-base text-gray-300 hover:bg-gray-800 hover:text-white transition-colors rounded-lg"
                >
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Liquidation Calculator
                </Link>
                <Link
                  href="/blog/cheapest-equity-perps-fees"
                  className="flex items-center gap-3 px-4 py-3 text-base text-gray-300 hover:bg-gray-800 hover:text-white transition-colors rounded-lg"
                >
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Fee Comparison Guide
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
