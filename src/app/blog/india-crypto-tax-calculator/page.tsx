'use client';

import { useState } from 'react';
import Link from 'next/link';

type Language = 'en' | 'hi';

const translations = {
  en: {
    title: 'India Crypto Tax Calculator',
    subtitle: 'Calculate your 30% flat tax and 1% TDS on cryptocurrency transactions',
    tagline: 'Tax Calculator',
    breadcrumbHome: 'Home',
    breadcrumbBlog: 'Blog',
    breadcrumbCurrent: 'India Crypto Tax Calculator',

    // Calculator Section
    calculatorTitle: 'Calculate Your Tax',
    buyPrice: 'Buy Price (INR)',
    sellPrice: 'Sell Price (INR)',
    quantity: 'Quantity',
    transactionValue: 'Transaction Value (INR)',
    autoCalculated: 'Auto-calculated from sell price x quantity',

    // Results
    resultsTitle: 'Tax Breakdown',
    grossProfit: 'Gross Profit/Loss',
    taxOnGains: '30% Tax on Gains',
    tdsDeducted: '1% TDS Deducted',
    totalTaxLiability: 'Total Tax Liability',
    netProfitAfterTax: 'Net Profit After Tax',
    effectiveTaxRate: 'Effective Tax Rate',

    // Warnings and Notes
    lossWarning: 'Note: Losses cannot be offset against other income or carried forward',
    profitNote: 'Tax calculated on profit only. TDS is applied on full transaction value.',
    noProfit: 'No tax on losses, but TDS still applies',

    // Explanatory Sections
    rulesTitle: 'India Crypto Tax Rules (Section 115BBH)',
    rule1Title: '30% Flat Tax',
    rule1Desc: 'All gains from Virtual Digital Assets (VDAs) including crypto are taxed at a flat 30% rate, regardless of your income slab.',
    rule2Title: '1% TDS on Transactions',
    rule2Desc: 'A 1% Tax Deducted at Source applies to all crypto transactions above Rs. 10,000 (Rs. 50,000 for specified persons).',
    rule3Title: 'No Loss Offset',
    rule3Desc: 'Crypto losses cannot be set off against any other income. You cannot even offset crypto losses against crypto gains from other transactions.',
    rule4Title: 'No Deductions Allowed',
    rule4Desc: 'No deductions are allowed except the cost of acquisition. You cannot claim expenses like trading fees, internet costs, etc.',

    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'When do I pay the 30% tax?',
    faq1A: 'The 30% tax is payable when you file your Income Tax Return (ITR). You must declare all crypto transactions and pay tax on profits.',
    faq2Q: 'Is TDS the same as the final tax?',
    faq2A: 'No. TDS (1%) is deducted upfront on every transaction. The 30% tax is your actual tax liability. TDS is adjusted against your final tax when you file ITR.',
    faq3Q: 'What if I made a loss?',
    faq3A: 'Unfortunately, crypto losses cannot be offset against profits or carried forward. You still pay TDS on the transaction value.',
    faq4Q: 'Does this apply to equity perpetuals?',
    faq4A: 'Equity perpetuals traded on decentralized platforms are likely treated as VDAs and subject to the same 30% tax rules. Consult a tax professional for your specific situation.',

    disclaimer: 'Disclaimer: This calculator is for educational purposes only. Tax laws change frequently. Consult a qualified tax professional for personalized advice.',
    backToComparison: 'Back to comparison table',

    // Language toggle
    languageToggle: 'Switch to Hindi',
  },
  hi: {
    title: 'भारत क्रिप्टो टैक्स कैलकुलेटर',
    subtitle: 'क्रिप्टोकरेंसी लेनदेन पर 30% फ्लैट टैक्स और 1% TDS की गणना करें',
    tagline: 'टैक्स कैलकुलेटर',
    breadcrumbHome: 'होम',
    breadcrumbBlog: 'ब्लॉग',
    breadcrumbCurrent: 'भारत क्रिप्टो टैक्स कैलकुलेटर',

    // Calculator Section
    calculatorTitle: 'अपना टैक्स कैलकुलेट करें',
    buyPrice: 'खरीद मूल्य (INR)',
    sellPrice: 'बिक्री मूल्य (INR)',
    quantity: 'मात्रा',
    transactionValue: 'लेनदेन मूल्य (INR)',
    autoCalculated: 'बिक्री मूल्य x मात्रा से स्वचालित गणना',

    // Results
    resultsTitle: 'टैक्स विवरण',
    grossProfit: 'सकल लाभ/हानि',
    taxOnGains: 'लाभ पर 30% टैक्स',
    tdsDeducted: '1% TDS कटौती',
    totalTaxLiability: 'कुल टैक्स देनदारी',
    netProfitAfterTax: 'टैक्स के बाद शुद्ध लाभ',
    effectiveTaxRate: 'प्रभावी टैक्स दर',

    // Warnings and Notes
    lossWarning: 'नोट: नुकसान को अन्य आय के विरुद्ध समायोजित नहीं किया जा सकता या आगे नहीं बढ़ाया जा सकता',
    profitNote: 'टैक्स केवल लाभ पर गणना की जाती है। TDS पूर्ण लेनदेन मूल्य पर लागू होता है।',
    noProfit: 'नुकसान पर कोई टैक्स नहीं, लेकिन TDS फिर भी लागू होता है',

    // Explanatory Sections
    rulesTitle: 'भारत क्रिप्टो टैक्स नियम (धारा 115BBH)',
    rule1Title: '30% फ्लैट टैक्स',
    rule1Desc: 'क्रिप्टो सहित वर्चुअल डिजिटल एसेट्स (VDAs) से सभी लाभ पर 30% की फ्लैट दर से टैक्स लगता है, चाहे आपकी आय स्लैब कुछ भी हो।',
    rule2Title: 'लेनदेन पर 1% TDS',
    rule2Desc: 'रु. 10,000 से अधिक के सभी क्रिप्टो लेनदेन पर 1% स्रोत पर कर कटौती (TDS) लागू होती है (निर्दिष्ट व्यक्तियों के लिए रु. 50,000)।',
    rule3Title: 'नुकसान समायोजन नहीं',
    rule3Desc: 'क्रिप्टो नुकसान को किसी अन्य आय के विरुद्ध समायोजित नहीं किया जा सकता। आप अन्य लेनदेन से क्रिप्टो लाभ के विरुद्ध भी क्रिप्टो नुकसान को समायोजित नहीं कर सकते।',
    rule4Title: 'कोई कटौती की अनुमति नहीं',
    rule4Desc: 'अधिग्रहण लागत के अलावा कोई कटौती की अनुमति नहीं है। आप ट्रेडिंग फीस, इंटरनेट खर्च आदि का दावा नहीं कर सकते।',

    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faq1Q: '30% टैक्स कब देना होता है?',
    faq1A: '30% टैक्स आपके आयकर रिटर्न (ITR) दाखिल करते समय देय है। आपको सभी क्रिप्टो लेनदेन की घोषणा करनी होगी और लाभ पर टैक्स देना होगा।',
    faq2Q: 'क्या TDS अंतिम टैक्स के समान है?',
    faq2A: 'नहीं। TDS (1%) हर लेनदेन पर अग्रिम में काटा जाता है। 30% टैक्स आपकी वास्तविक टैक्स देनदारी है। ITR दाखिल करते समय TDS को अंतिम टैक्स के विरुद्ध समायोजित किया जाता है।',
    faq3Q: 'अगर मुझे नुकसान हुआ तो?',
    faq3A: 'दुर्भाग्य से, क्रिप्टो नुकसान को लाभ के विरुद्ध समायोजित या आगे नहीं बढ़ाया जा सकता। आपको फिर भी लेनदेन मूल्य पर TDS देना होगा।',
    faq4Q: 'क्या यह इक्विटी परपेचुअल्स पर लागू होता है?',
    faq4A: 'विकेंद्रीकृत प्लेटफॉर्म पर ट्रेड किए गए इक्विटी परपेचुअल्स को संभवतः VDAs के रूप में माना जाएगा और समान 30% टैक्स नियम लागू होंगे। अपनी विशिष्ट स्थिति के लिए कर पेशेवर से परामर्श करें।',

    disclaimer: 'अस्वीकरण: यह कैलकुलेटर केवल शैक्षिक उद्देश्यों के लिए है। टैक्स कानून बार-बार बदलते हैं। व्यक्तिगत सलाह के लिए योग्य कर पेशेवर से परामर्श करें।',
    backToComparison: 'तुलना तालिका पर वापस जाएं',

    // Language toggle
    languageToggle: 'Switch to English',
  },
};

export default function IndiaCryptoTaxCalculator() {
  const [lang, setLang] = useState<Language>('en');
  const [buyPrice, setBuyPrice] = useState(50000);
  const [sellPrice, setSellPrice] = useState(75000);
  const [quantity, setQuantity] = useState(1);

  const t = translations[lang];

  // Calculations
  const transactionValue = sellPrice * quantity;
  const costBasis = buyPrice * quantity;
  const grossProfit = transactionValue - costBasis;
  const isProfit = grossProfit > 0;

  const taxOnGains = isProfit ? grossProfit * 0.30 : 0;
  const tdsDeducted = transactionValue * 0.01;
  const totalTaxLiability = taxOnGains + tdsDeducted;
  const netProfitAfterTax = grossProfit - totalTaxLiability;

  const effectiveTaxRate = isProfit && grossProfit > 0
    ? ((totalTaxLiability / grossProfit) * 100).toFixed(2)
    : '0.00';

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'India Crypto Tax Calculator',
    description: 'Calculate your cryptocurrency tax liability in India including 30% flat tax on gains and 1% TDS on transactions.',
    url: 'https://compareequityperps.com/blog/india-crypto-tax-calculator/',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    author: {
      '@type': 'Organization',
      name: 'Compare Equity Perps',
      url: 'https://compareequityperps.com',
    },
    inLanguage: ['en', 'hi'],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the crypto tax rate in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'India has a 30% flat tax on all cryptocurrency gains under Section 115BBH. Additionally, 1% TDS is deducted on transactions above Rs. 10,000.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I offset crypto losses against profits in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, cryptocurrency losses cannot be offset against any other income or even against gains from other crypto transactions. This is one of the strictest aspects of India crypto tax law.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is TDS deducted on crypto transactions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TDS at 1% is deducted at the time of transaction for all crypto trades above Rs. 10,000 (Rs. 50,000 for specified persons). This TDS is adjusted against your final tax liability when filing ITR.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are equity perpetuals taxed the same as crypto in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Equity perpetuals traded on decentralized platforms are likely classified as Virtual Digital Assets (VDAs) and subject to the same 30% tax rate. Consult a tax professional for your specific situation.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Language Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm font-medium text-cyan-400 hover:bg-gray-700 transition-colors"
            >
              <span className="text-lg">{lang === 'en' ? '🇮🇳' : '🇬🇧'}</span>
              {t.languageToggle}
            </button>
          </div>

          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-white">{t.breadcrumbHome}</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-white">{t.breadcrumbBlog}</Link></li>
              <li>/</li>
              <li className="text-gray-300">{t.breadcrumbCurrent}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <span className="text-cyan-400 text-sm font-medium">{t.tagline}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-400">
              {t.subtitle}
            </p>
          </header>

          {/* Calculator Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Input Panel */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">{t.calculatorTitle}</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">{t.buyPrice}</label>
                  <input
                    type="number"
                    value={buyPrice}
                    onChange={(e) => setBuyPrice(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">{t.sellPrice}</label>
                  <input
                    type="number"
                    value={sellPrice}
                    onChange={(e) => setSellPrice(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">{t.quantity}</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    step="0.001"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">{t.transactionValue}</label>
                  <div className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white font-mono">
                    {formatINR(transactionValue)}
                  </div>
                  <p className="text-gray-500 text-xs mt-1">{t.autoCalculated}</p>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">{t.resultsTitle}</h2>

              <div className="space-y-4">
                {/* Gross Profit/Loss */}
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">{t.grossProfit}</span>
                  <span className={`font-mono font-bold ${isProfit ? 'text-emerald-400' : 'text-red-400'}`}>
                    {formatINR(grossProfit)}
                  </span>
                </div>

                {/* 30% Tax */}
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">{t.taxOnGains}</span>
                  <span className="font-mono text-yellow-400">
                    -{formatINR(taxOnGains)}
                  </span>
                </div>

                {/* TDS */}
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400">{t.tdsDeducted}</span>
                  <span className="font-mono text-orange-400">
                    -{formatINR(tdsDeducted)}
                  </span>
                </div>

                {/* Total Tax */}
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-400 font-medium">{t.totalTaxLiability}</span>
                  <span className="font-mono text-red-400 font-bold">
                    {formatINR(totalTaxLiability)}
                  </span>
                </div>

                {/* Net Profit */}
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{t.netProfitAfterTax}</span>
                    <span className={`font-mono text-2xl font-bold ${netProfitAfterTax >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {formatINR(netProfitAfterTax)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{t.effectiveTaxRate}</span>
                    <span className="font-mono text-cyan-400">
                      {effectiveTaxRate}%
                    </span>
                  </div>
                </div>

                {/* Warning/Note */}
                {!isProfit && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-4">
                    <p className="text-red-300 text-sm">{t.lossWarning}</p>
                  </div>
                )}

                {isProfit && (
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mt-4">
                    <p className="text-cyan-300 text-sm">{t.profitNote}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tax Rules Explanation */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">{t.rulesTitle}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-emerald-400 font-bold mb-2">{t.rule1Title}</h3>
                  <p className="text-gray-300 text-sm">{t.rule1Desc}</p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-cyan-400 font-bold mb-2">{t.rule2Title}</h3>
                  <p className="text-gray-300 text-sm">{t.rule2Desc}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-red-400 font-bold mb-2">{t.rule3Title}</h3>
                  <p className="text-gray-300 text-sm">{t.rule3Desc}</p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-yellow-400 font-bold mb-2">{t.rule4Title}</h3>
                  <p className="text-gray-300 text-sm">{t.rule4Desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Tax Breakdown Chart */}
          {isProfit && grossProfit > 0 && (
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-bold text-white mb-4">Tax Distribution</h2>

              <div className="space-y-4">
                {/* Stacked Bar */}
                <div className="h-12 rounded-lg overflow-hidden flex">
                  <div
                    className="bg-emerald-500 flex items-center justify-center text-white text-sm font-medium"
                    style={{ width: `${((grossProfit - totalTaxLiability) / grossProfit) * 100}%` }}
                  >
                    {netProfitAfterTax > 0 && 'Net Profit'}
                  </div>
                  <div
                    className="bg-yellow-500 flex items-center justify-center text-black text-sm font-medium"
                    style={{ width: `${(taxOnGains / grossProfit) * 100}%` }}
                  >
                    {taxOnGains > 0 && '30%'}
                  </div>
                  <div
                    className="bg-orange-500 flex items-center justify-center text-black text-sm font-medium"
                    style={{ width: `${(tdsDeducted / grossProfit) * 100}%` }}
                  >
                    TDS
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500"></div>
                    <span className="text-gray-400">Net Profit: {formatINR(netProfitAfterTax)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-yellow-500"></div>
                    <span className="text-gray-400">30% Tax: {formatINR(taxOnGains)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-orange-500"></div>
                    <span className="text-gray-400">1% TDS: {formatINR(tdsDeducted)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">{t.faqTitle}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-cyan-400 font-bold mb-2">{t.faq1Q}</h3>
                <p className="text-gray-300">{t.faq1A}</p>
              </div>

              <div>
                <h3 className="text-cyan-400 font-bold mb-2">{t.faq2Q}</h3>
                <p className="text-gray-300">{t.faq2A}</p>
              </div>

              <div>
                <h3 className="text-cyan-400 font-bold mb-2">{t.faq3Q}</h3>
                <p className="text-gray-300">{t.faq3A}</p>
              </div>

              <div>
                <h3 className="text-cyan-400 font-bold mb-2">{t.faq4Q}</h3>
                <p className="text-gray-300">{t.faq4A}</p>
              </div>
            </div>
          </div>

          {/* Example Calculations */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Example Calculations</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-gray-400 text-sm">Scenario</th>
                    <th className="text-right py-3 px-4 text-gray-400 text-sm">Profit</th>
                    <th className="text-right py-3 px-4 text-gray-400 text-sm">30% Tax</th>
                    <th className="text-right py-3 px-4 text-gray-400 text-sm">1% TDS</th>
                    <th className="text-right py-3 px-4 text-gray-400 text-sm">Net</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">1 BTC: 40L to 50L</td>
                    <td className="py-3 px-4 text-right text-emerald-400">10,00,000</td>
                    <td className="py-3 px-4 text-right text-yellow-400">3,00,000</td>
                    <td className="py-3 px-4 text-right text-orange-400">50,000</td>
                    <td className="py-3 px-4 text-right text-cyan-400">6,50,000</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">0.1 ETH: 2L to 3L</td>
                    <td className="py-3 px-4 text-right text-emerald-400">10,000</td>
                    <td className="py-3 px-4 text-right text-yellow-400">3,000</td>
                    <td className="py-3 px-4 text-right text-orange-400">300</td>
                    <td className="py-3 px-4 text-right text-cyan-400">6,700</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4 text-white">NVDA Perp: 50K to 45K (Loss)</td>
                    <td className="py-3 px-4 text-right text-red-400">-5,000</td>
                    <td className="py-3 px-4 text-right text-gray-500">0</td>
                    <td className="py-3 px-4 text-right text-orange-400">450</td>
                    <td className="py-3 px-4 text-right text-red-400">-5,450</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              Note: In loss scenarios, you still pay TDS but cannot recover it against the loss.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-8">
            <p className="text-yellow-300 text-sm">{t.disclaimer}</p>
          </div>

          {/* Back Link */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.backToComparison}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
