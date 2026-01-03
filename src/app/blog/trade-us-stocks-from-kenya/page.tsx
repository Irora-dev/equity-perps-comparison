'use client';
import Link from 'next/link';
import { useState } from 'react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { translations, digitalPayments, banksList, nativeLang, nativeName } from '@/data/translations/kenya';

export default function Page() {
  const [lang, setLang] = useState<'en' | 'sw'>('en');
  const t = translations[lang];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-green-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-4 right-4 z-10">
          <LanguageToggle currentLang={lang} nativeLang={nativeLang} nativeName={nativeName} onToggle={(l) => setLang(l as 'en' | 'sw')} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-6">🇰🇪 {t.badge}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6"><span className="text-white">{t.heroTitle1}</span><br /><span className="bg-gradient-to-r from-black via-red-400 to-green-400 bg-clip-text text-transparent">{t.heroTitle2}</span></h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">{t.heroDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all">{t.comparePlatforms}</Link>
            <a href="#get-started" className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 border border-gray-700">{t.howItWorks}</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {t.benefits.map((b,i)=>(
            <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 text-center"><div className="text-4xl mb-4">{b.icon}</div><h3 className="text-xl font-bold text-white mb-2">{b.title}</h3><p className="text-gray-400">{b.desc}</p></div>
          ))}
        </div>
      </section>

      <section id="get-started" className="py-16 px-4 bg-gradient-to-b from-transparent via-green-900/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.stepsTitle}</h2>
          <div className="space-y-8">
            {t.steps.map((s,i)=>(
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">{i+1}</div>
                <div className="flex-1 pt-2"><h3 className="text-xl font-bold text-white mb-2">{s.t}</h3><p className="text-gray-400 mb-4">{s.d}</p>{s.l&&<Link href={s.l} className="text-green-400 hover:text-green-300 font-medium">{s.lt} →</Link>}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.paymentTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"><h3 className="text-xl font-bold text-white mb-4">📱 {t.digitalPayments}</h3><ul className="space-y-3">{digitalPayments.map(p=><li key={p} className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-green-400 rounded-full"></span>{p}</li>)}</ul></div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6"><h3 className="text-xl font-bold text-white mb-4">🏦 {t.banks}</h3><ul className="space-y-3">{banksList.map(p=><li key={p} className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-red-400 rounded-full"></span>{p}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4"><div className="max-w-4xl mx-auto"><h2 className="text-3xl font-bold text-white mb-8 text-center">{t.faqTitle}</h2><div className="space-y-4">{t.faqs.map((f,i)=><div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden"><button onClick={()=>setExpandedFaq(expandedFaq===i?null:i)} className="w-full px-6 py-4 flex items-center justify-between text-left"><span className="font-semibold text-white">{f.question}</span><span className="text-gray-400">{expandedFaq===i?'−':'+'}</span></button>{expandedFaq===i&&<div className="px-6 pb-4 text-gray-400">{f.answer}</div>}</div>)}</div></div></section>

      <section className="py-16 px-4"><div className="max-w-4xl mx-auto"><div className="bg-gradient-to-r from-green-900/30 to-red-900/30 border border-green-500/20 rounded-3xl p-8 text-center"><h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2><p className="text-xl text-gray-400 mb-8">{t.ctaDesc}</p><Link href="/" className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg">{t.comparePlatforms}</Link></div></div></section>

      <section className="py-8 px-4"><div className="max-w-4xl mx-auto"><div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center"><p className="text-gray-400 text-sm">{t.freeNotice} <span className="text-white font-medium">{t.freeNotice2}</span>{t.freeNotice3} <span className="text-green-400 font-semibold">{t.freeNotice4}</span> {t.freeNotice5}</p></div></div></section>
    </div>
  );
}
