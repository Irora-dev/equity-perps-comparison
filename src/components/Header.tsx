'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [toolsOpen, setToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === '/';
  const isBlog = pathname === '/blog' || pathname.startsWith('/blog/');
  const isTools = pathname.includes('calculator') || pathname.includes('tracker') || pathname.includes('cheapest');

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      </nav>
    </header>
  );
}
