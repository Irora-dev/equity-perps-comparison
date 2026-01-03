'use client';
import Link from 'next/link';
import { useState } from 'react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { translations, digitalPayments, banksList, nativeLang, nativeName, popularStocks } from '@/data/translations/latvia';
import { platforms } from '@/data/platforms';

export default function Page() {
  const [lang, setLang] = useState<'en' | 'lv'>('en');
  const t = translations[lang];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-white/5 to-[#0a0a0f]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-4 right-4 z-10">
          <LanguageToggle currentLang={lang} nativeLang={nativeLang} nativeName={nativeName} onToggle={(l) => setLang(l as 'en' | 'lv')} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm mb-6">🇱🇻 {t.badge}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6"><span className="text-white">{t.heroTitle1}</span><br /><span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">{t.heroTitle2}</span></h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">{t.heroDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all">{t.comparePlatforms}</Link>
            <a href="#get-started" className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 border border-gray-700">{t.howItWorks}</a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {popularStocks.map(stock => (
              <span key={stock} className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 text-sm">{stock}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {t.benefits.map((b,i)=>(
            <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center"><div className="text-4xl mb-4">{b.icon}</div><h3 className="text-xl font-bold text-white mb-2">{b.title}</h3><p className="text-gray-400">{b.desc}</p></div>
          ))}
        </div>
      </section>

      {/* What Are Equity Perps Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.whatArePerpsTitle}</h2>
            <p className="text-xl text-gray-400">{t.whatArePerpsSubtitle}</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8">
            <p className="text-gray-300 text-lg mb-6">{t.whatArePerpsContent}</p>

            <h4 className="text-white font-semibold mb-4">{t.whatArePerpsHow}</h4>
            <ul className="space-y-3 mb-6">
              {t.whatArePerpsSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 text-xl">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <p className="text-red-400 font-medium">{t.whatArePerpsCta}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Equity Perps Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.whyPerpsTitle}</h2>
            <p className="text-gray-400">{t.whyPerpsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whyPerpsReasons.map((reason, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-all">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Getting Started Section */}
      <section id="get-started" className="py-16 px-4 bg-gradient-to-b from-transparent via-red-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-400 font-medium text-sm">~15 min setup</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{t.getStartedTitle}</h2>
            <p className="text-gray-400">{t.getStartedSubtitle}</p>
          </div>

          <div className="space-y-6">
            {/* Step 1: Wallet Setup */}
            <div className="bg-gray-900 border-2 border-cyan-500/30 rounded-2xl overflow-hidden">
              <div className="p-6 flex items-center gap-6 cursor-pointer hover:bg-gray-800/50 transition-colors" onClick={() => setWalletExpanded(!walletExpanded)}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">1</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                  <p className="text-gray-400">{t.step1Subtitle}</p>
                </div>
                <svg className={`w-6 h-6 text-cyan-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {walletExpanded && (
                <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-6">
                    <h4 className="text-cyan-400 font-semibold mb-2">{t.step1WhatIsWallet}</h4>
                    <p className="text-gray-300 text-sm mb-3">{t.step1WhatIsWalletDesc}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      {t.step1Features.map((f, i) => (
                        <div key={i} className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">{f.icon}</div>
                          <span className="text-gray-400">{f.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ol className="space-y-3 text-gray-300">
                        {t.step1Instructions.map((instruction, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold flex-shrink-0">{i + 1}</span>
                            <span>{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-5">
                      <h4 className="text-white font-semibold mb-3">{t.step1VideoTitle}</h4>
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                        <iframe src="https://www.youtube.com/embed/_ouAzSQJiM0" title="Wallet Setup Guide" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
                      </div>
                      <a href="https://rabby.io" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-cyan-400 transition-colors">
                        Download Rabby
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Fund Wallet */}
            <div className="bg-gray-900 border-2 border-green-500/30 rounded-2xl overflow-hidden">
              <div className="p-6 flex items-center gap-6 cursor-pointer hover:bg-gray-800/50 transition-colors" onClick={() => setFundingExpanded(!fundingExpanded)}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-gray-900 font-black text-xl flex-shrink-0">2</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-1">{t.step2Title}</h3>
                  <p className="text-gray-400">{t.step2Subtitle}</p>
                </div>
                <svg className={`w-6 h-6 text-green-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {fundingExpanded && (
                <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {t.step2Methods.map((method, i) => (
                      <div key={i} className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                        <h4 className="text-green-400 font-semibold mb-1">{method.name}</h4>
                        <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                        <ol className="text-sm text-gray-300 space-y-1 mb-3">
                          {method.steps.map((step, j) => (
                            <li key={j}>{j + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-green-400/70">{method.tip}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">{t.step2MinAmount}</p>
                </div>
              )}
            </div>

            {/* Step 3: Trade */}
            <div className="bg-gradient-to-br from-purple-500/10 to-red-500/10 border-2 border-purple-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center text-white font-black text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{t.step3Title}</h3>
                  <p className="text-gray-400">{t.step3Subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {t.step3Instructions.map((instruction, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold flex-shrink-0">{i + 1}</span>
                      <span>{instruction}</span>
                    </div>
                  ))}
                  <p className="text-sm text-purple-400/70 mt-4">{t.step3Tip}</p>
                </div>
                <div className="flex items-center justify-center">
                  <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-[#3EEFC1]/20 to-purple-500/10 border-2 border-[#3EEFC1]/50 rounded-2xl hover:border-[#3EEFC1] transition-all group">
                    <div className="text-5xl">🚀</div>
                    <span className="text-xl font-bold text-white group-hover:text-[#3EEFC1] transition-colors">{t.step3Cta}</span>
                    <span className="text-gray-400 text-sm">4% fee discount</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-6">⚠️ {t.riskTitle}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {t.riskWarnings.map((warning, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <div>
                    <strong className="text-white">{warning.title}</strong>
                    <p className="text-gray-400 text-sm">{warning.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.paymentTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">🏦 {t.digitalPayments}</h3>
              <ul className="space-y-3">{digitalPayments.map(p=><li key={p} className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>{p}</li>)}</ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">💱 {t.banks}</h3>
              <ul className="space-y-3">{banksList.map(p=><li key={p} className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-white/50 rounded-full"></span>{p}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faqs.map((f,i)=>(
              <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden">
                <button onClick={()=>setExpandedFaq(expandedFaq===i?null:i)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <span className="font-semibold text-white">{f.question}</span>
                  <span className="text-gray-400">{expandedFaq===i?'−':'+'}</span>
                </button>
                {expandedFaq===i&&<div className="px-6 pb-4 text-gray-400">{f.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-900/30 to-white/5 border border-red-500/20 rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-xl text-gray-400 mb-8">{t.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all">{t.step3Cta}</a>
              <Link href="/" className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 border border-gray-700">{t.comparePlatforms}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm">{t.freeNotice} <span className="text-white font-medium">{t.freeNotice2}</span>{t.freeNotice3} <span className="text-green-400 font-semibold">{t.freeNotice4}</span> {t.freeNotice5}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
