'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';
import { LanguageToggle } from '@/components/LanguageToggle';
import { translations, popularStocks, nativeLang, nativeName, isRTL } from '@/data/translations/pakistan';

// Google Ads conversion tracking for Hyperliquid clicks
function trackHyperliquidClick(url: string) {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17848310269/Zf82CIWA-9sbEP2z3r5C',
      'event_callback': () => {
        window.location.href = url;
      }
    });
    // Fallback if callback doesn't fire within 1 second
    setTimeout(() => {
      window.location.href = url;
    }, 1000);
  } else {
    // If gtag not loaded, just navigate
    window.location.href = url;
  }
}

export default function TradeUSStocksFromPakistan() {
  const [lang, setLang] = useState<'en' | 'ur'>('en');
  const t = translations[lang];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  return (
    <div className="min-h-screen bg-gray-950" dir={lang === 'ur' && isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-gray-950 to-white/10" />
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/5 rounded-full blur-3xl" />

        <div className="absolute top-4 right-4 z-10">
          <LanguageToggle currentLang={lang} nativeLang={nativeLang} nativeName={nativeName} onToggle={(l) => setLang(l as 'en' | 'ur')} />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{t.pageTitle}</span>
          </nav>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">{t.badge}</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full">{t.noBrokerBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {t.heroTitle1}
            <br />
            <span className="text-green-400">{t.heroTitle2}</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-xl text-gray-300 mb-8 max-w-2xl">
            {t.heroDesc} <strong className="text-white">{t.heroDescHighlight}</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#get-started"
              className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all shadow-lg shadow-green-500/25"
            >
              {t.startTrading}
            </a>
            <a
              href="#get-started"
              className="w-full sm:w-auto text-center px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700"
            >
              {t.howItWorks}
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statMinimumValue}</div>
              <div className="text-gray-400 text-sm">{t.statMinimum}</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statTimeValue}</div>
              <div className="text-gray-400 text-sm">{t.statTime}</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statStocksValue}</div>
              <div className="text-gray-400 text-sm">{t.statStocks}</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statKycValue}</div>
              <div className="text-gray-400 text-sm">{t.statKyc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works for Pakistanis */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {t.whyTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.whyCards.map((card, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Get Started Section */}
      <section id="get-started" className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
              <span className="text-green-400 font-medium">{t.stepByStep}</span>
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.getStartedTitle}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              {t.getStartedDesc}
            </p>
          </div>

          {/* Step 1: Wallet */}
          <div className="mb-6">
            <div
              className="bg-gray-900 border-2 border-cyan-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-colors"
              onClick={() => setWalletExpanded(!walletExpanded)}
            >
              <div className="p-4 sm:p-6 flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{t.step1Desc}</p>
                </div>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {walletExpanded && (
                <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-2">{t.walletExplainTitle}</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      {t.walletExplainDesc} <strong className="text-white">{t.walletExplainHighlight}</strong>{t.walletExplainDesc2}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      {['🔐', '🆓', '⚡', '🌍'].map((icon, i) => (
                        <div key={i} className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">{icon}</div>
                          <span className="text-gray-400">{t.walletFeatures[i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-4">{t.walletSetupTitle}</h4>
                      <ol className="space-y-3 text-gray-300">
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">1</span>
                          <span>{t.walletSteps[0].text} <a href="https://rabby.io" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-300 underline">{t.walletSteps[0].link}</a></span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">2</span>
                          <span>{t.walletSteps[1].text}</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">3</span>
                          <span>{t.walletSteps[2].text}</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">4</span>
                          <div>
                            <strong className="text-white">{t.walletSteps[3].text}</strong>
                            <p className="text-gray-500 text-xs mt-1">{t.walletSteps[3].warning}</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-5">
                      <h4 className="text-white font-semibold mb-3">{t.watchVideo}</h4>
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/_ouAzSQJiM0"
                          title="Wallet Setup Guide"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Step 2: Fund with PKR */}
          <div className="mb-6">
            <div
              className="bg-gray-900 border-2 border-green-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-colors"
              onClick={() => setFundingExpanded(!fundingExpanded)}
            >
              <div className="p-4 sm:p-6 flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-xl sm:text-2xl flex-shrink-0">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{t.step2Title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{t.step2Desc}</p>
                </div>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-green-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {fundingExpanded && (
                <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                  <p className="text-gray-300 mb-6">{t.fundingIntro}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {/* Binance P2P */}
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">{t.binanceP2P.title}</h4>
                      <p className="text-gray-400 text-sm mb-3">{t.binanceP2P.desc}</p>
                      <ol className="text-xs text-gray-300 space-y-1">
                        {t.binanceP2P.steps.map((step, i) => (
                          <li key={i}>{i + 1}. {step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* JazzCash */}
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                      <h4 className="text-blue-400 font-semibold mb-2">{t.jazzcash.title}</h4>
                      <p className="text-gray-400 text-sm mb-3">{t.jazzcash.desc}</p>
                      <ol className="text-xs text-gray-300 space-y-1">
                        {t.jazzcash.steps.map((step, i) => (
                          <li key={i}>{i + 1}. {step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Easypaisa */}
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                      <h4 className="text-purple-400 font-semibold mb-2">{t.easypaisa.title}</h4>
                      <p className="text-gray-400 text-sm mb-3">{t.easypaisa.desc}</p>
                      <ol className="text-xs text-gray-300 space-y-1">
                        {t.easypaisa.steps.map((step, i) => (
                          <li key={i} className={step.startsWith('(') ? 'text-gray-500' : ''}>{step.startsWith('(') ? step : `${i + 1}. ${step}`}</li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-white">💡 {t.proTip}</strong> {t.proTipText}
                    </p>
                  </div>

                  <Link
                    href="/blog/convert-pkr-to-usdc"
                    className="inline-flex items-center gap-2 mt-4 text-green-400 hover:text-green-300 font-medium"
                  >
                    {t.seeDetailedGuide}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Step 3: Trade */}
          <div className="bg-gray-900 border-2 border-emerald-500/30 rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-4 sm:gap-6 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-gray-900 font-black text-xl sm:text-2xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{t.step3Title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{t.step3Desc}</p>
              </div>
            </div>

            <ol className="space-y-3 text-sm sm:text-base text-gray-300 mb-6">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold flex-shrink-0">1</span>
                <span>{t.tradeSteps[0].text} <button onClick={() => hyperliquid?.referralUrl && trackHyperliquidClick(hyperliquid.referralUrl)} className="text-emerald-400 hover:text-emerald-300 underline">{t.tradeSteps[0].linkText}</button></span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold flex-shrink-0">2</span>
                <span>{t.tradeSteps[1].text}</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold flex-shrink-0">3</span>
                <span>{t.tradeSteps[2].text}</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold flex-shrink-0">4</span>
                <span>{t.tradeSteps[3].text}</span>
              </li>
            </ol>

            <button
              onClick={() => hyperliquid?.referralUrl && trackHyperliquidClick(hyperliquid.referralUrl)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-gray-900 rounded-xl font-bold hover:bg-emerald-400 transition-colors cursor-pointer"
            >
              {t.openHyperliquid}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Popular Stocks */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {t.popularStocksTitle}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularStocks.map(stock => (
              <Link
                key={stock.ticker}
                href={`/stocks/${stock.ticker.toLowerCase()}`}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold">{stock.ticker}</span>
                  {stock.hot && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">{t.hot}</span>}
                </div>
                <span className="text-gray-500 text-sm">{stock.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href="/stocks" className="text-green-400 hover:text-green-300 font-medium">
              {t.viewAllStocks}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {t.faqTitle}
          </h2>

          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between"
                >
                  <span className="text-sm sm:text-base text-white font-medium pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-green-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pakistan Guides Section */}
          <div className="mt-12 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{t.moreGuidesTitle}</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6">{t.moreGuidesDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.guides.map((guide, i) => (
                <Link
                  key={i}
                  href={guide.href}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    i === 0 ? 'bg-green-500/20 text-green-400' :
                    i === 1 ? 'bg-emerald-500/20 text-emerald-400' :
                    i === 2 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-cyan-500/20 text-cyan-400'
                  }`}>{guide.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{guide.title}</h4>
                    <p className="text-gray-500 text-sm">{guide.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-xl mx-auto">
              {t.ctaDesc}
            </p>
            <button
              onClick={() => hyperliquid?.referralUrl && trackHyperliquidClick(hyperliquid.referralUrl)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all shadow-lg shadow-green-500/25 cursor-pointer"
            >
              {t.getStartedCta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Free Site + Referral Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.freeNotice} <span className="text-white font-medium">{t.freeNotice2}</span>{t.freeNotice3} <span className="text-cyan-400">{t.freeNotice4}</span> {t.freeNotice5} <span className="text-cyan-400">{t.freeNotice6}</span>{t.freeNotice7} <span className="text-green-400 font-semibold">{t.freeNotice8}</span>{t.freeNotice9}
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">{t.relatedTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.relatedGuides.map((guide, i) => (
              <Link key={i} href={guide.href} className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors">
                <span className={`text-xs font-medium ${
                  i === 0 ? 'text-green-400' : i === 1 ? 'text-emerald-400' : 'text-yellow-400'
                }`}>{guide.tag}</span>
                <h3 className="text-white font-medium mt-1">{guide.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
