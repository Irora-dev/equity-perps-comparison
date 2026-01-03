'use client';

import Link from 'next/link';

export default function EquityPerpsLegalIndiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-orange-950/10 to-slate-950">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-400 font-medium">Regulatory Guide 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Is Trading Equity Perps
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Legal in India?</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Understanding the regulatory landscape, tax implications, and what Indian traders
            need to know before trading equity perpetuals on decentralized exchanges.
          </p>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-yellow-400 text-sm">
              <strong>Disclaimer:</strong> This is educational content, not legal or tax advice.
              Consult a qualified professional for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Current Legal Status</h2>

          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Crypto Trading is Legal in India</h3>
                <p className="text-slate-300">
                  The Supreme Court of India lifted the RBI ban on cryptocurrency trading in March 2020.
                  Since then, there is no law prohibiting Indian citizens from buying, selling, or holding
                  cryptocurrency or trading on decentralized platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">What IS Regulated</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Indian crypto exchanges (must follow KYC norms)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Crypto income is taxable (30% flat rate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>1% TDS on crypto transactions above ₹50,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Banks can&apos;t refuse service for crypto</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">What is NOT Regulated</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>DeFi/DEX platforms (no specific laws)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Self-custody wallets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Trading perpetual contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Equity perps specifically</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Regulations */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Regulations You Should Know</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-orange-400 font-bold">₹</span>
                </div>
                <h3 className="text-xl font-bold text-white">30% Crypto Tax (Section 115BBH)</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Profits from crypto trading are taxed at a flat 30% rate. This applies to:
              </p>
              <ul className="space-y-2 text-slate-300 ml-4">
                <li>• All gains from selling crypto (including USDC)</li>
                <li>• Profits from perpetual trades</li>
                <li>• No deduction for losses (losses cannot offset gains)</li>
              </ul>
              <div className="mt-4 bg-blue-500/10 rounded-lg p-4">
                <p className="text-sm text-blue-400">
                  <strong>Example:</strong> If you make ₹1,00,000 profit from trading, you owe ₹30,000 in taxes.
                  Even if you lost ₹50,000 on another trade, you still pay ₹30,000 (losses don&apos;t offset).
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 font-bold">1%</span>
                </div>
                <h3 className="text-xl font-bold text-white">1% TDS (Section 194S)</h3>
              </div>
              <p className="text-slate-300 mb-4">
                1% Tax Deducted at Source applies when:
              </p>
              <ul className="space-y-2 text-slate-300 ml-4">
                <li>• Transaction value exceeds ₹50,000/year (for specified persons)</li>
                <li>• Transaction value exceeds ₹10,000/year (for others)</li>
                <li>• Only applies on Indian exchanges with KYC</li>
              </ul>
              <div className="mt-4 bg-emerald-500/10 rounded-lg p-4">
                <p className="text-sm text-emerald-400">
                  <strong>Note:</strong> DEX platforms like Hyperliquid don&apos;t deduct TDS as they&apos;re not
                  Indian entities. You&apos;re responsible for self-reporting.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">$</span>
                </div>
                <h3 className="text-xl font-bold text-white">LRS (Liberalised Remittance Scheme)</h3>
              </div>
              <p className="text-slate-300 mb-4">
                When sending money abroad through traditional banking:
              </p>
              <ul className="space-y-2 text-slate-300 ml-4">
                <li>• $250,000/year limit per person</li>
                <li>• Requires paperwork for larger amounts</li>
                <li>• 5% TCS on amounts over ₹7 lakh</li>
              </ul>
              <div className="mt-4 bg-yellow-500/10 rounded-lg p-4">
                <p className="text-sm text-yellow-400">
                  <strong>With P2P:</strong> Using Binance P2P or similar to buy crypto directly bypasses
                  LRS as you&apos;re buying from individuals in India. This is currently a gray area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEBI & RBI */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What About SEBI?</h2>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 mb-8">
            <p className="text-slate-300 mb-4">
              SEBI (Securities and Exchange Board of India) regulates securities trading in India.
              Here&apos;s the key distinction:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2">SEBI Jurisdiction</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Indian stock exchanges (NSE, BSE)</li>
                  <li>• Indian brokers (Zerodha, Groww)</li>
                  <li>• Securities denominated in INR</li>
                  <li>• Indian mutual funds</li>
                </ul>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                <h4 className="font-bold text-emerald-400 mb-2">Outside SEBI Jurisdiction</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Decentralized exchanges</li>
                  <li>• Crypto perpetual contracts</li>
                  <li>• Non-Indian platforms</li>
                  <li>• Self-custody trading</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-orange-400 mb-4">The Gray Area</h3>
            <p className="text-slate-300 mb-4">
              Equity perpetuals exist in a regulatory gray area because they&apos;re:
            </p>
            <ul className="space-y-2 text-slate-300 ml-4 mb-4">
              <li>• Not actual securities (synthetic derivatives)</li>
              <li>• Not traded on regulated Indian exchanges</li>
              <li>• Denominated in crypto (USDC), not INR</li>
              <li>• Operated by non-Indian, decentralized entities</li>
            </ul>
            <p className="text-slate-400 text-sm">
              This doesn&apos;t mean it&apos;s illegal - it means there&apos;s no specific regulation for or against it.
              Regulations may evolve, so stay informed.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Reporting */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How to Report Taxes</h2>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Recommended Approach</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-white">Keep Records</h4>
                  <p className="text-slate-300 text-sm">
                    Export all your trades from the DEX. Most platforms have CSV export. Track your
                    entry price, exit price, dates, and profit/loss for each trade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-white">Calculate Net Profit</h4>
                  <p className="text-slate-300 text-sm">
                    Add up all your profits for the financial year (April to March). Remember, you can&apos;t
                    offset losses against gains under current tax law.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-white">Report Under VDA Income</h4>
                  <p className="text-slate-300 text-sm">
                    In your ITR, report profits under &quot;Income from Virtual Digital Assets&quot; section.
                    Pay 30% tax + 4% cess on total profits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-white">Use a CA</h4>
                  <p className="text-slate-300 text-sm">
                    For significant trading income, hire a Chartered Accountant familiar with crypto.
                    They can help optimize your filing and ensure compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <h4 className="font-bold text-blue-400 mb-3">Tax Calculation Example</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Total Trading Profits (FY)</span>
                  <span className="text-white">₹5,00,000</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Tax Rate</span>
                  <span className="text-white">30%</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Base Tax</span>
                  <span className="text-white">₹1,50,000</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Cess (4%)</span>
                  <span className="text-white">₹6,000</span>
                </div>
                <div className="border-t border-slate-700 pt-2 mt-2">
                  <div className="flex justify-between text-white font-semibold">
                    <span>Total Tax</span>
                    <span className="text-orange-400">₹1,56,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
              <h4 className="font-bold text-yellow-400 mb-3">Important Notes</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Losses cannot be carried forward</li>
                <li>• Losses cannot offset other income</li>
                <li>• No deductions allowed (electricity, internet, etc.)</li>
                <li>• Convert USD profits to INR at transaction date rate</li>
                <li>• Keep wallet addresses and transaction hashes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Can I get in trouble for trading equity perps?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                As of 2026, there&apos;s no law specifically prohibiting trading on decentralized exchanges
                or trading equity perpetual contracts. The main legal requirement is to properly report
                and pay taxes on your profits. Tax evasion is illegal; trading itself is not.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Will my bank block my account?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Since the 2020 Supreme Court ruling, banks cannot refuse service solely for crypto-related
                transactions. However, if you&apos;re using P2P platforms, ensure the payment notes don&apos;t
                mention crypto. Use generic notes like &quot;payment for services&quot; or just leave them blank.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Do I need to do KYC on DEX platforms?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                No. Decentralized exchanges like Hyperliquid don&apos;t require KYC. You trade directly
                from your wallet. However, you may need KYC to buy USDC in the first place
                (on Binance, WazirX, etc.).
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">What if regulations change?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Regulations evolve. The Indian government has been working on a comprehensive crypto
                bill. Stay informed through reliable sources. Even if regulations change, they typically
                apply prospectively (future trades), not retroactively. Maintain good records regardless.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Is it different from trading on Interactive Brokers?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                Trading actual US stocks through Interactive Brokers, Vested, etc. involves different
                regulations (LRS limits, foreign stock taxation). Equity perps are synthetic contracts,
                not actual securities, so they fall under crypto taxation instead. The tax rate (30%)
                is actually similar to short-term capital gains on foreign stocks.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Can I use these platforms if I&apos;m an NRI?</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">
                NRIs face fewer restrictions on crypto trading as they&apos;re not subject to Indian forex
                controls. However, you should check the regulations of your country of residence.
                The US, for example, has specific rules about trading certain derivatives.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 border border-emerald-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">The Bottom Line</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl mb-2">✓</div>
                <h3 className="font-semibold text-emerald-400 mb-2">Legal to Trade</h3>
                <p className="text-sm text-slate-300">No law prohibits trading on DEX platforms</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">₹</div>
                <h3 className="font-semibold text-orange-400 mb-2">Taxable Income</h3>
                <p className="text-sm text-slate-300">30% tax on profits, report honestly</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📋</div>
                <h3 className="font-semibold text-cyan-400 mb-2">Keep Records</h3>
                <p className="text-sm text-slate-300">Document all trades for tax purposes</p>
              </div>
            </div>
            <p className="text-center text-slate-300 mb-6">
              The key is transparency. Report your income, pay your taxes, and you&apos;re operating
              within the current legal framework.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/start"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Start Trading
              </Link>
              <Link
                href="/blog/trade-us-stocks-from-india"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-colors"
              >
                India Trading Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
