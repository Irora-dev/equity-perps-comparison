import Link from 'next/link';

const footerLinks = {
  platforms: [
    { label: 'Hyperliquid', href: '/blog/hyperliquid' },
    { label: 'Lighter', href: '/blog/lighter' },
    { label: 'Ostium', href: '/blog/ostium' },
    { label: 'Avantis', href: '/blog/avantis' },
    { label: 'Variational', href: '/blog/variational' },
    { label: 'TradeXYZ', href: '/blog/tradexyz' },
    { label: 'Trove', href: '/blog/trove' },
  ],
  comparisons: [
    { label: 'Hyperliquid vs Lighter', href: '/blog/hyperliquid-vs-lighter' },
    { label: 'Hyperliquid vs Ostium', href: '/blog/hyperliquid-vs-ostium' },
    { label: 'Avantis vs Ostium', href: '/blog/avantis-vs-ostium' },
    { label: 'Best Platforms 2025', href: '/blog/best-equity-perps-platforms-2025' },
    { label: 'Top Platform 2026', href: '/blog/top-equity-perps-platform-2026' },
  ],
  guides: [
    { label: 'What Are Equity Perps?', href: '/blog/what-are-equity-perpetuals' },
    { label: 'How Funding Rates Work', href: '/blog/how-funding-rates-work' },
    { label: 'Equity Perps vs CFDs', href: '/blog/equity-perps-vs-cfds' },
    { label: 'Tax Guide', href: '/blog/equity-perps-tax-guide' },
    { label: 'Cheapest Fees', href: '/blog/cheapest-equity-perps-fees' },
    { label: 'Trading Glossary', href: '/blog/glossary' },
  ],
  tools: [
    { label: 'Fee Calculator', href: '/blog/fee-calculator' },
    { label: 'Liquidation Calculator', href: '/blog/liquidation-calculator' },
    { label: 'Funding Rate Tracker', href: '/blog/funding-rate-tracker' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Platforms */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Platforms</h3>
            <ul className="space-y-2">
              {footerLinks.platforms.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparisons */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Comparisons</h3>
            <ul className="space-y-2">
              {footerLinks.comparisons.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Guides</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Tools</h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/blog" className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                View All Articles →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <Link href="/" className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                Compare Equity Perps
              </Link>
              <p className="text-gray-500 text-sm mt-1">
                Find the best equity perpetual trading platforms.
              </p>
            </div>
            <p className="text-gray-600 text-xs text-center md:text-right max-w-md">
              Disclaimer: This site contains affiliate links. Trading perpetual futures involves significant risk.
              Never trade with funds you cannot afford to lose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
