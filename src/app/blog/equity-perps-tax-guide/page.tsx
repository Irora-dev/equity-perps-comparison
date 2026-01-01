import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

const faqs = [
  {
    question: "Do I have to pay taxes on equity perps profits?",
    answer: "In most jurisdictions, yes. Trading profits are generally taxable regardless of the instrument. The specific rate depends on your country and whether gains are classified as capital gains or income."
  },
  {
    question: "How are funding rate payments taxed?",
    answer: "Tax treatment varies by jurisdiction. Funding could be classified as interest, part of trading P&L, or ordinary income. Keep separate records of funding payments for your tax advisor."
  },
  {
    question: "Do I need to report trades even if I had losses?",
    answer: "Yes, you should report all trades. Losses can often be used to offset gains or carried forward to future years. Accurate reporting protects you and may reduce your tax liability."
  },
  {
    question: "What records should I keep for equity perps trading?",
    answer: "Keep records of every trade including date, entry/exit prices, position size, fees, and funding payments. Export data from platforms regularly and store it securely."
  },
  {
    question: "Can I use crypto tax software for equity perps?",
    answer: "Some crypto tax software supports perpetuals. Check if your platform integrates or exports in a compatible format. You may need to manually categorize equity perp trades."
  },
];

export const metadata: Metadata = {
  title: 'Tax Treatment of Equity Perpetuals: What You Need to Know',
  description: 'General guidance on how equity perps are taxed. Understand your obligations before trading.',
  openGraph: {
    title: 'Equity Perps Tax Guide',
    description: 'Tax treatment of equity perpetual futures in major jurisdictions.',
  },
};

export default function EquityPerpsTaxGuide() {
  return (
    <main className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/blog' },
          { label: 'Tax Guide' }
        ]} />

        <header className="mb-12">
          <span className="text-cyan-400 text-sm font-medium">Tax Information</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Tax Treatment of Equity Perpetuals
          </h1>
          <p className="text-xl text-gray-400">
            General guidance on tax obligations. This is not tax advice. Consult a professional for your specific situation.
          </p>
        </header>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
          <p className="text-yellow-200 text-sm">
            <strong>Disclaimer:</strong> This article provides general information only. Tax laws vary by jurisdiction
            and change frequently. Always consult a qualified tax professional before making decisions based on this information.
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg">
            Equity perps sit in a grey area for most tax authorities. They combine characteristics of futures,
            CFDs, and crypto assets. Few jurisdictions have issued specific guidance. Here is what we know.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">General Principles</h2>

          <p className="text-gray-300">
            In most jurisdictions, profits from trading are taxable. This applies whether you trade stocks, futures,
            CFDs, or crypto derivatives. The specific tax treatment depends on how your country classifies the instrument.
          </p>

          <p className="text-gray-300">
            Equity perps are likely treated as either:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong className="text-white">Derivatives:</strong> Taxed like futures or options with mark to market rules</li>
            <li><strong className="text-white">Crypto assets:</strong> Taxed under digital asset frameworks with realized gains</li>
            <li><strong className="text-white">Gambling income:</strong> Some jurisdictions may classify speculative trading this way</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">United States</h2>

          <p className="text-gray-300">
            The IRS has not issued specific guidance on equity perps. However, crypto derivatives likely fall under
            existing frameworks for digital assets and derivatives.
          </p>

          <p className="text-gray-300">
            Key considerations:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li>Each trade closing a position is a taxable event</li>
            <li>Short term gains (held less than one year) are taxed as ordinary income</li>
            <li>Long term gains receive preferential rates</li>
            <li>Wash sale rules may apply</li>
            <li>Funding payments could be treated as interest expense or ordinary income</li>
          </ul>

          <p className="text-gray-300">
            US persons should also consider FBAR and FATCA reporting requirements if using offshore platforms.
            Consult a tax attorney familiar with crypto and derivatives.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">United Kingdom</h2>

          <p className="text-gray-300">
            HMRC treats crypto derivatives similarly to other financial derivatives. Profits are typically subject
            to Capital Gains Tax for individuals. Frequent traders may be classified as trading income subject to Income Tax.
          </p>

          <p className="text-gray-300">
            The determination between capital gains and trading income depends on factors like:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li>Frequency and volume of trades</li>
            <li>Whether trading is your primary income source</li>
            <li>Level of organization and sophistication</li>
            <li>Intention when entering positions</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">European Union</h2>

          <p className="text-gray-300">
            Tax treatment varies significantly across EU member states. Some general patterns:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li><strong className="text-white">Germany:</strong> Crypto held over one year may be tax free. Derivatives are taxed differently.</li>
            <li><strong className="text-white">Portugal:</strong> Historically favorable for crypto, but rules are changing.</li>
            <li><strong className="text-white">France:</strong> Flat tax on crypto gains with potential professional trader classification.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Record Keeping</h2>

          <p className="text-gray-300">
            Regardless of jurisdiction, maintain detailed records. You will need:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li>Date and time of every trade</li>
            <li>Entry and exit prices</li>
            <li>Position sizes</li>
            <li>Funding payments received and paid</li>
            <li>Trading fees</li>
            <li>Wallet addresses used</li>
            <li>Platform records and exports</li>
          </ul>

          <p className="text-gray-300">
            Most platforms provide export functionality. Download your data regularly.
            Do not rely solely on platform records which may become unavailable.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Funding Rate Treatment</h2>

          <p className="text-gray-300">
            Funding payments are a unique aspect of perpetuals. The tax treatment is unclear in most jurisdictions.
            Possible classifications:
          </p>

          <ul className="text-gray-300 space-y-2 my-4">
            <li>Interest income / expense</li>
            <li>Part of the trading profit / loss calculation</li>
            <li>Separate ordinary income</li>
          </ul>

          <p className="text-gray-300">
            Track funding separately from trading PnL. Your tax advisor will need this breakdown.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Practical Recommendations</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-6">
            <ol className="text-gray-300 space-y-3 list-decimal list-inside">
              <li>Consult a tax professional familiar with both crypto and derivatives before trading significant amounts</li>
              <li>Keep meticulous records of all trades, funding payments, and fees</li>
              <li>Export platform data monthly and store it securely</li>
              <li>Set aside a portion of profits for taxes rather than reinvesting everything</li>
              <li>Consider the tax implications before choosing between platforms or jurisdictions</li>
              <li>Stay informed as regulations evolve</li>
            </ol>
          </div>

          <p className="text-gray-300">
            Tax compliance may feel burdensome, but the consequences of non compliance are severe.
            Crypto transactions are increasingly traceable. Tax authorities worldwide are investing in blockchain analytics.
          </p>
        </div>

        <FAQSection faqs={faqs} />

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to comparison table
          </Link>
        </div>
      </article>
    </main>
  );
}
