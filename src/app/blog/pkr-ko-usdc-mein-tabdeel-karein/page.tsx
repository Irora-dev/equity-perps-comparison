'use client';

import Link from 'next/link';
import { useState } from 'react';

type Language = 'ur' | 'en';

const translations = {
  ur: {
    isRTL: true,
    langToggle: 'English',
    badge: 'پاکستان کے لیے P2P گائیڈ',
    heroTitle: 'PKR کو USDC میں کیسے تبدیل کریں',
    heroSubtitle: 'پاکستان میں P2P کے ذریعے کرپٹو خریدنے کا مکمل گائیڈ۔ JazzCash، Easypaisa، اور بینک ٹرانسفر سے آسانی سے USDC حاصل کریں۔',
    whyP2P: 'P2P کیوں استعمال کریں؟',
    whyP2PReasons: [
      { title: 'بینک کی حدود نہیں', desc: 'بین الاقوامی وائر ٹرانسفر کی حدود اور فیس سے بچیں۔ اپنے موجودہ بینک اکاؤنٹ سے مقامی طور پر تجارت کریں۔' },
      { title: 'تیز سیٹلمنٹ', desc: 'زیادہ تر P2P تجارت 15-30 منٹ میں مکمل ہو جاتی ہے۔ وائر ٹرانسفر میں 3-5 کاروباری دن لگ سکتے ہیں۔' },
      { title: 'بہتر ریٹس', desc: 'مسابقتی ایکسچینج ریٹس، اکثر بینکوں سے بہتر۔ کوئی چھپی ہوئی فاریکس فیس نہیں۔' },
    ],
    comparisonTitle: 'پاکستان کے لیے بہترین پلیٹ فارمز',
    tableHeaders: {
      platform: 'پلیٹ فارم',
      fee: 'فیس',
      kyc: 'KYC',
      minTrade: 'کم از کم',
      rating: 'درجہ بندی',
    },
    platforms: [
      { name: 'Binance P2P', fee: '0%', kyc: 'ضروری', minTrade: '~1,500 PKR', rating: 'سب سے زیادہ مقبول', recommended: true },
      { name: 'Bitget P2P', fee: '0%', kyc: 'ضروری', minTrade: '~2,000 PKR', rating: 'اچھی لیکویڈیٹی', recommended: false },
      { name: 'LocalBitcoins', fee: '1%', kyc: 'جزوی', minTrade: '~5,000 PKR', rating: 'پرانے صارفین', recommended: false },
    ],
    stepsTitle: 'قدم بہ قدم گائیڈ',
    steps: [
      { title: 'اکاؤنٹ بنائیں اور تصدیق کریں', desc: 'Binance پر سائن اپ کریں۔ شناختی تصدیق (KYC) مکمل کریں - 10-30 منٹ لگتے ہیں۔ زیادہ تر پلیٹ فارمز کو CNIC + سیلفی چاہیے۔' },
      { title: 'P2P سیکشن میں جائیں', desc: 'P2P ٹریڈنگ پر جائیں ("Buy Crypto" یا "P2P" ٹیب کے نیچے)۔ "Buy" منتخب کریں اور USDC چنیں۔' },
      { title: 'بیچنے والا منتخب کریں', desc: 'اپنے ادائیگی کے طریقے (JazzCash، Easypaisa، بینک) سے فلٹر کریں۔ تصدیق شدہ بیج، 95%+ مکمل شرح، اور 100+ آرڈرز والے بیچنے والے تلاش کریں۔' },
      { title: 'آرڈر دیں اور ادائیگی کریں', desc: 'رقم درج کریں، Buy پر کلک کریں۔ USDC ایسکرو میں لاک ہو جائے گا۔ بیچنے والے کی ادائیگی کی تفصیلات نظر آئیں گی۔ وقت کی حد (عام طور پر 15-30 منٹ) میں ادائیگی کریں۔' },
      { title: 'USDC حاصل کریں', desc: 'جب بیچنے والا ادائیگی کی تصدیق کرے، USDC آپ کے ایکسچینج والیٹ میں آ جائے گا۔ اب آپ اسے اپنے ذاتی والیٹ میں نکال سکتے ہیں۔' },
    ],
    paymentMethodsTitle: 'پاکستان میں ادائیگی کے طریقے',
    paymentMethods: [
      { name: 'JazzCash', type: 'موبائل والیٹ', speed: 'فوری', popular: true },
      { name: 'Easypaisa', type: 'موبائل والیٹ', speed: 'فوری', popular: true },
      { name: 'HBL', type: 'بینک ٹرانسفر', speed: '15-30 منٹ', popular: false },
      { name: 'UBL', type: 'بینک ٹرانسفر', speed: '15-30 منٹ', popular: false },
      { name: 'MCB', type: 'بینک ٹرانسفر', speed: '15-30 منٹ', popular: false },
      { name: 'Meezan Bank', type: 'اسلامی بینکنگ', speed: '15-30 منٹ', popular: false },
    ],
    proTipsTitle: 'پرو ٹپس',
    proTips: [
      'JazzCash اور Easypaisa سب سے تیز ہیں - فوری سیٹلمنٹ',
      'ادائیگی نوٹس میں "crypto" یا "bitcoin" نہ لکھیں',
      'ہفتے کے دنوں میں کاروباری اوقات میں تجارت کریں - بہترین ریٹس',
      'پہلے چھوٹی رقم سے شروع کریں - بیچنے والے کو ٹیسٹ کریں',
      'ہمیشہ لین دین کے اسکرین شاٹس رکھیں',
      'صرف تصدیق شدہ بیچنے والوں سے تجارت کریں (95%+ ریٹنگ)',
    ],
    warningTitle: 'اہم معلومات',
    warningText: 'پاکستان میں کرپٹو کے قوانین بدل رہے ہیں۔ تازہ ترین قواعد سے باخبر رہیں۔ یہ گائیڈ صرف تعلیمی مقاصد کے لیے ہے۔',
    safetyTitle: 'P2P حفاظتی گائیڈ',
    doThis: 'یہ کریں',
    doThisList: [
      'صرف تصدیق شدہ بیچنے والوں سے تجارت کریں',
      'مکمل شرح چیک کریں (95%+ اچھی ہے)',
      'پلیٹ فارم کا ایسکرو سسٹم استعمال کریں',
      'ادائیگی موصول ہونے کی تصدیق کریں',
      'تمام لین دین کے اسکرین شاٹس رکھیں',
    ],
    avoidThis: 'یہ نہ کریں',
    avoidThisList: [
      'پلیٹ فارم کے باہر تجارت نہ کریں',
      'ادائیگی نوٹس میں کرپٹو نہ لکھیں',
      'ادائیگی کلیئر ہونے سے پہلے کرپٹو ریلیز نہ کریں',
      'کم ریٹنگ والے بیچنے والوں سے بچیں',
      'بیچنے والے کے دباؤ میں جلدی نہ کریں',
    ],
    ctaTitle: 'تجارت شروع کرنے کے لیے تیار ہیں؟',
    ctaSubtitle: 'USDC حاصل کرنے کے بعد، آپ 24/7 ایکویٹی پرپیچوئلز ٹریڈ کر سکتے ہیں۔',
    ctaButton: 'ٹریڈنگ شروع کریں',
    ctaSecondary: 'مزید جانیں',
  },
  en: {
    isRTL: false,
    langToggle: 'اردو',
    badge: 'P2P Guide for Pakistan',
    heroTitle: 'How to Convert PKR to USDC',
    heroSubtitle: 'Complete guide to buying crypto via P2P in Pakistan. Easily get USDC using JazzCash, Easypaisa, and bank transfers.',
    whyP2P: 'Why Use P2P?',
    whyP2PReasons: [
      { title: 'No Bank Limits', desc: 'Avoid international wire transfer limits and fees. Trade locally with your existing bank account.' },
      { title: 'Fast Settlement', desc: 'Most P2P trades complete in 15-30 minutes. Wire transfers can take 3-5 business days.' },
      { title: 'Better Rates', desc: 'Competitive exchange rates, often better than banks. No hidden forex fees.' },
    ],
    comparisonTitle: 'Best Platforms for Pakistan',
    tableHeaders: {
      platform: 'Platform',
      fee: 'Fee',
      kyc: 'KYC',
      minTrade: 'Min Trade',
      rating: 'Rating',
    },
    platforms: [
      { name: 'Binance P2P', fee: '0%', kyc: 'Required', minTrade: '~1,500 PKR', rating: 'Most Popular', recommended: true },
      { name: 'Bitget P2P', fee: '0%', kyc: 'Required', minTrade: '~2,000 PKR', rating: 'Good Liquidity', recommended: false },
      { name: 'LocalBitcoins', fee: '1%', kyc: 'Partial', minTrade: '~5,000 PKR', rating: 'Legacy Users', recommended: false },
    ],
    stepsTitle: 'Step-by-Step Guide',
    steps: [
      { title: 'Create Account & Verify', desc: 'Sign up on Binance. Complete identity verification (KYC) - takes 10-30 minutes. Most platforms require CNIC + selfie.' },
      { title: 'Go to P2P Section', desc: 'Navigate to P2P trading (under "Buy Crypto" or "P2P" tab). Select "Buy" and choose USDC.' },
      { title: 'Select a Seller', desc: 'Filter by your payment method (JazzCash, Easypaisa, bank). Look for verified badge, 95%+ completion rate, and 100+ orders.' },
      { title: 'Place Order & Pay', desc: 'Enter amount, click Buy. USDC is locked in escrow. You\'ll see seller\'s payment details. Make payment within time limit (usually 15-30 mins).' },
      { title: 'Receive USDC', desc: 'Once seller confirms payment, USDC is released to your exchange wallet. You can now withdraw to your personal wallet.' },
    ],
    paymentMethodsTitle: 'Payment Methods in Pakistan',
    paymentMethods: [
      { name: 'JazzCash', type: 'Mobile Wallet', speed: 'Instant', popular: true },
      { name: 'Easypaisa', type: 'Mobile Wallet', speed: 'Instant', popular: true },
      { name: 'HBL', type: 'Bank Transfer', speed: '15-30 min', popular: false },
      { name: 'UBL', type: 'Bank Transfer', speed: '15-30 min', popular: false },
      { name: 'MCB', type: 'Bank Transfer', speed: '15-30 min', popular: false },
      { name: 'Meezan Bank', type: 'Islamic Banking', speed: '15-30 min', popular: false },
    ],
    proTipsTitle: 'Pro Tips',
    proTips: [
      'JazzCash and Easypaisa are fastest - instant settlement',
      'Don\'t write "crypto" or "bitcoin" in payment notes',
      'Trade during business hours on weekdays - best rates',
      'Start with small amounts first - test the seller',
      'Always keep screenshots of transactions',
      'Only trade with verified sellers (95%+ rating)',
    ],
    warningTitle: 'Important Notice',
    warningText: 'Crypto regulations in Pakistan are evolving. Stay informed about the latest rules. This guide is for educational purposes only.',
    safetyTitle: 'P2P Safety Guide',
    doThis: 'Do This',
    doThisList: [
      'Only trade with verified sellers',
      'Check completion rate (95%+ is good)',
      'Use the platform\'s escrow system',
      'Confirm payment received before releasing',
      'Keep screenshots of all transactions',
    ],
    avoidThis: 'Avoid This',
    avoidThisList: [
      'Never trade outside the platform',
      'Don\'t mention crypto in payment notes',
      'Never release crypto before payment clears',
      'Avoid sellers with low ratings',
      'Don\'t rush due to seller pressure',
    ],
    ctaTitle: 'Ready to Start Trading?',
    ctaSubtitle: 'Once you have USDC, you can trade equity perpetuals 24/7.',
    ctaButton: 'Start Trading',
    ctaSecondary: 'Learn More',
  },
};

export default function PKRToUSDCGuidePage() {
  const [lang, setLang] = useState<Language>('ur');
  const t = translations[lang];
  const isRTL = t.isRTL;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: lang === 'ur' ? 'PKR کو USDC میں کیسے تبدیل کریں' : 'How to Convert PKR to USDC',
    description: lang === 'ur'
      ? 'پاکستان میں P2P کے ذریعے PKR سے USDC خریدنے کا مکمل گائیڈ۔ JazzCash، Easypaisa، اور بینک ٹرانسفر استعمال کریں۔'
      : 'Complete guide to buying USDC from PKR via P2P in Pakistan. Use JazzCash, Easypaisa, and bank transfers.',
    inLanguage: lang === 'ur' ? 'ur-PK' : 'en',
    countryOfOrigin: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    step: t.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.desc,
    })),
    tool: t.paymentMethods.map(method => ({
      '@type': 'HowToTool',
      name: method.name,
    })),
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLang(lang === 'ur' ? 'en' : 'ur')}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors shadow-lg"
        >
          {t.langToggle}
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🇵🇰</span>
            <span className="text-emerald-400 font-medium">{t.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {t.heroTitle.split(' ').slice(0, -2).join(' ')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              {t.heroTitle.split(' ').slice(-2).join(' ')}
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Why P2P Section */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.whyP2P}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {t.whyP2PReasons.map((reason, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-emerald-500/20 text-center">
                <div className="text-4xl mb-4">{['🏦', '⚡', '💰'][index]}</div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-slate-300 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.comparisonTitle}</h2>

          <div className="bg-slate-800/50 rounded-2xl border border-emerald-500/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-900/30">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-emerald-300" style={{ textAlign: isRTL ? 'right' : 'left' }}>{t.tableHeaders.platform}</th>
                    <th className="px-6 py-4 text-sm font-semibold text-emerald-300" style={{ textAlign: isRTL ? 'right' : 'left' }}>{t.tableHeaders.fee}</th>
                    <th className="px-6 py-4 text-sm font-semibold text-emerald-300" style={{ textAlign: isRTL ? 'right' : 'left' }}>{t.tableHeaders.kyc}</th>
                    <th className="px-6 py-4 text-sm font-semibold text-emerald-300" style={{ textAlign: isRTL ? 'right' : 'left' }}>{t.tableHeaders.minTrade}</th>
                    <th className="px-6 py-4 text-sm font-semibold text-emerald-300" style={{ textAlign: isRTL ? 'right' : 'left' }}>{t.tableHeaders.rating}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {t.platforms.map((platform, index) => (
                    <tr key={index} className="hover:bg-slate-700/30">
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">{platform.name}</span>
                        {platform.recommended && (
                          <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded`}>
                            {lang === 'ur' ? 'تجویز کردہ' : 'Recommended'}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-emerald-400">{platform.fee}</td>
                      <td className="px-6 py-4 text-slate-300">{platform.kyc}</td>
                      <td className="px-6 py-4 text-slate-300">{platform.minTrade}</td>
                      <td className="px-6 py-4 text-slate-400">{platform.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.stepsTitle}</h2>

          <div className="space-y-4">
            {t.steps.map((step, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-emerald-500/20">
                <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <p className={`text-slate-300 ${isRTL ? 'pr-14' : 'pl-14'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.paymentMethodsTitle}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.paymentMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-xl p-5 border ${method.popular ? 'border-emerald-500/40 bg-emerald-900/10' : 'border-slate-700/50'}`}
              >
                <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <h3 className="text-lg font-bold text-white">{method.name}</h3>
                  {method.popular && (
                    <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                      {lang === 'ur' ? 'مقبول' : 'Popular'}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm">{method.type}</p>
                <p className="text-emerald-400 text-sm mt-1">{method.speed}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.proTipsTitle}</h2>

          <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 rounded-2xl p-8 border border-emerald-500/20">
            <ul className="space-y-4">
              {t.proTips.map((tip, index) => (
                <li key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <span className="text-emerald-400 text-xl mt-0.5">✓</span>
                  <span className="text-slate-200 text-lg">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Warning Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <h3 className={`text-lg font-bold text-yellow-400 mb-2 ${isRTL ? 'text-right' : ''}`}>
              ⚠️ {t.warningTitle}
            </h3>
            <p className={`text-yellow-200/80 ${isRTL ? 'text-right' : ''}`}>{t.warningText}</p>
          </div>
        </div>
      </section>

      {/* Safety Guide */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.safetyTitle}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <h3 className={`text-xl font-bold text-emerald-400 mb-4 ${isRTL ? 'text-right' : ''}`}>
                ✓ {t.doThis}
              </h3>
              <ul className="space-y-3 text-slate-300">
                {t.doThisList.map((item, index) => (
                  <li key={index} className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="text-emerald-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className={`text-xl font-bold text-red-400 mb-4 ${isRTL ? 'text-right' : ''}`}>
                ✗ {t.avoidThis}
              </h3>
              <ul className="space-y-3 text-slate-300">
                {t.avoidThisList.map((item, index) => (
                  <li key={index} className={`flex items-start gap-2 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="text-red-400">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              {t.ctaSubtitle}
            </p>
            <div className={`flex flex-wrap justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link
                href="/start"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
              >
                {t.ctaButton}
              </Link>
              <Link
                href="/blog/p2p-usdc-guide"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-colors"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
