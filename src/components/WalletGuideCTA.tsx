import Link from 'next/link';

interface WalletGuideCTAProps {
  variant?: 'default' | 'compact' | 'inline';
}

export default function WalletGuideCTA({ variant = 'default' }: WalletGuideCTAProps) {
  if (variant === 'inline') {
    return (
      <Link
        href="/blog/wallet-setup-guide"
        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
      >
        wallet setup guide
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 my-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm">Need a wallet first?</p>
            <p className="text-gray-400 text-xs">Follow our free setup guide</p>
          </div>
          <Link
            href="/blog/wallet-setup-guide"
            className="px-4 py-2 bg-cyan-500 text-gray-900 rounded-lg text-sm font-semibold hover:bg-cyan-400 transition-colors flex-shrink-0"
          >
            Setup Guide
          </Link>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-2xl p-6 my-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
          <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">New to Self-Custody Wallets?</h3>
          <p className="text-gray-400 text-sm">
            Follow our step-by-step guide to set up your wallet, fund it with USDC, and connect to trading platforms in under 15 minutes.
          </p>
        </div>
        <Link
          href="/blog/wallet-setup-guide"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-gray-900 rounded-xl font-semibold hover:bg-cyan-400 transition-colors flex-shrink-0"
        >
          Wallet Setup Guide
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
