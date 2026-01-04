'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

type Language = 'en' | 'hi';

const translations = {
  en: {
    title: 'INR to Position Size Calculator',
    subtitle: 'See how much you can trade with your Indian Rupees',
    badge: 'India Trading Tool',
    bilingual: 'Bilingual',
    inputSection: 'Your Investment',
    amountLabel: 'Amount in INR',
    exchangeRateLabel: 'USD/INR Exchange Rate',
    leverageLabel: 'Leverage',
    leverageRecommendation: '2-5x recommended for beginners',
    resultsSection: 'Your Trading Power',
    usdcEquivalent: 'USDC Equivalent',
    positionSize: 'Position Size (with leverage)',
    controllingPower: 'You control',
    worthOf: 'worth of stocks',
    stocksYouCanTrade: 'Stocks You Can Trade',
    sharesControlled: 'shares controlled',
    popularStocks: 'Popular US Stocks',
    stockPrice: 'Current Price',
    sharesYouControl: 'Shares You Control',
    leverageTips: 'Leverage Tips for Beginners',
    tip1Title: 'Start with 2-3x',
    tip1Desc: 'Lower leverage gives you more room for price movements. A 33% drop liquidates 3x leverage, but only 10% drop liquidates 10x.',
    tip2Title: 'Increase Gradually',
    tip2Desc: 'Once you understand how leverage works and have consistent profits, you can slowly increase. Never jump to high leverage.',
    tip3Title: 'Risk Only What You Can Lose',
    tip3Desc: 'Never trade with money you need for rent, food, or emergencies. Start small with money you can afford to lose completely.',
    tip4Title: 'Use Stop Losses',
    tip4Desc: 'Always set a stop loss to limit your maximum loss. This protects you from sudden market crashes.',
    riskWarning: 'High Leverage Risk Warning',
    riskText: 'Trading with high leverage (10x+) is extremely risky. A small 5-10% price movement against you can wipe out your entire position. Most beginners lose money with high leverage. Start with 2-5x maximum.',
    liquidationAt: 'Liquidation at',
    move: 'move',
    getStarted: 'Ready to Start Trading?',
    getStartedDesc: 'Convert your INR to USDC and start trading US stocks 24/7',
    startTrading: 'Start Trading',
    learnMore: 'Learn How to Convert INR',
    footer: 'This calculator is for educational purposes. Actual rates may vary.',
  },
  hi: {
    title: 'INR से पोजीशन साइज कैलकुलेटर',
    subtitle: 'देखें कि आप अपने भारतीय रुपयों से कितना ट्रेड कर सकते हैं',
    badge: 'इंडिया ट्रेडिंग टूल',
    bilingual: 'द्विभाषी',
    inputSection: 'आपका निवेश',
    amountLabel: 'राशि INR में',
    exchangeRateLabel: 'USD/INR एक्सचेंज रेट',
    leverageLabel: 'लीवरेज',
    leverageRecommendation: 'शुरुआती लोगों के लिए 2-5x की सिफारिश',
    resultsSection: 'आपकी ट्रेडिंग पावर',
    usdcEquivalent: 'USDC समकक्ष',
    positionSize: 'पोजीशन साइज (लीवरेज के साथ)',
    controllingPower: 'आप नियंत्रित करते हैं',
    worthOf: 'के स्टॉक्स',
    stocksYouCanTrade: 'जो स्टॉक्स आप ट्रेड कर सकते हैं',
    sharesControlled: 'शेयर नियंत्रित',
    popularStocks: 'लोकप्रिय US स्टॉक्स',
    stockPrice: 'वर्तमान कीमत',
    sharesYouControl: 'आप कितने शेयर नियंत्रित करते हैं',
    leverageTips: 'शुरुआती लोगों के लिए लीवरेज टिप्स',
    tip1Title: '2-3x से शुरू करें',
    tip1Desc: 'कम लीवरेज आपको प्राइस मूवमेंट के लिए ज्यादा जगह देता है। 33% गिरावट 3x को लिक्विडेट करती है, लेकिन 10x को सिर्फ 10% गिरावट।',
    tip2Title: 'धीरे-धीरे बढ़ाएं',
    tip2Desc: 'जब आप समझ जाएं कि लीवरेज कैसे काम करता है और लगातार प्रॉफिट हो, तब धीरे-धीरे बढ़ाएं। कभी भी हाई लीवरेज पर न कूदें।',
    tip3Title: 'सिर्फ वही रिस्क करें जो खो सकते हैं',
    tip3Desc: 'कभी भी किराए, खाने या इमरजेंसी के पैसों से ट्रेड न करें। छोटी राशि से शुरू करें जो आप पूरी तरह खो सकते हैं।',
    tip4Title: 'स्टॉप लॉस का उपयोग करें',
    tip4Desc: 'हमेशा स्टॉप लॉस सेट करें ताकि आपका नुकसान सीमित रहे। यह आपको अचानक मार्केट क्रैश से बचाता है।',
    riskWarning: 'हाई लीवरेज रिस्क चेतावनी',
    riskText: 'हाई लीवरेज (10x+) के साथ ट्रेडिंग बेहद जोखिमभरा है। आपके खिलाफ 5-10% की छोटी प्राइस मूवमेंट आपकी पूरी पोजीशन खत्म कर सकती है। ज्यादातर शुरुआती हाई लीवरेज से पैसा खो देते हैं। अधिकतम 2-5x से शुरू करें।',
    liquidationAt: 'लिक्विडेशन',
    move: 'मूव पर',
    getStarted: 'ट्रेडिंग शुरू करने के लिए तैयार?',
    getStartedDesc: 'अपने INR को USDC में बदलें और 24/7 US स्टॉक्स ट्रेड करें',
    startTrading: 'ट्रेडिंग शुरू करें',
    learnMore: 'INR कन्वर्ट करना सीखें',
    footer: 'यह कैलकुलेटर शैक्षिक उद्देश्यों के लिए है। वास्तविक दरें भिन्न हो सकती हैं।',
  },
};

const popularStocks = [
  { ticker: 'NVDA', name: 'Nvidia', price: 140, color: '#76B900' },
  { ticker: 'TSLA', name: 'Tesla', price: 250, color: '#CC0000' },
  { ticker: 'AAPL', name: 'Apple', price: 190, color: '#A2AAAD' },
  { ticker: 'MSFT', name: 'Microsoft', price: 430, color: '#00A4EF' },
  { ticker: 'META', name: 'Meta', price: 590, color: '#0081FB' },
  { ticker: 'AMZN', name: 'Amazon', price: 225, color: '#FF9900' },
  { ticker: 'GOOGL', name: 'Google', price: 195, color: '#4285F4' },
  { ticker: 'AMD', name: 'AMD', price: 125, color: '#ED1C24' },
];

const leverageMarks = [1, 2, 3, 5, 10, 20, 50];

export default function INRPositionSizeCalculator() {
  const [language, setLanguage] = useState<Language>('en');
  const [amountINR, setAmountINR] = useState<number>(10000);
  const [exchangeRate, setExchangeRate] = useState<number>(83);
  const [leverage, setLeverage] = useState<number>(3);

  const t = translations[language];

  const calculations = useMemo(() => {
    const usdcAmount = amountINR / exchangeRate;
    const positionSize = usdcAmount * leverage;
    const liquidationPercent = 100 / leverage;

    const stockPositions = popularStocks.map(stock => ({
      ...stock,
      shares: positionSize / stock.price,
      positionValue: positionSize,
    }));

    return {
      usdcAmount,
      positionSize,
      liquidationPercent,
      stockPositions,
    };
  }, [amountINR, exchangeRate, leverage]);

  const formatINR = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const getLeverageColor = (lev: number) => {
    if (lev <= 3) return 'text-emerald-400';
    if (lev <= 5) return 'text-cyan-400';
    if (lev <= 10) return 'text-yellow-400';
    if (lev <= 20) return 'text-orange-400';
    return 'text-red-400';
  };

  const getLeverageBgColor = (lev: number) => {
    if (lev <= 3) return 'bg-emerald-500';
    if (lev <= 5) return 'bg-cyan-500';
    if (lev <= 10) return 'bg-yellow-500';
    if (lev <= 20) return 'bg-orange-500';
    return 'bg-red-500';
  };

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'INR to Position Size Calculator',
    description: 'Calculate trading position sizes from Indian Rupees with leverage for US stock perpetuals',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    inLanguage: ['en', 'hi'],
    provider: {
      '@type': 'Organization',
      name: 'Compare Equity Perps',
      url: 'https://compareequityperps.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-orange-950/10 to-gray-950">
        {/* Hero Section */}
        <section className="pt-16 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-400">{t.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">
                {t.badge}
              </span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                {t.bilingual}
              </span>
              {/* Language Toggle */}
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    language === 'en'
                      ? 'bg-cyan-500 text-gray-900'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    language === 'hi'
                      ? 'bg-orange-500 text-gray-900'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-400">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Input Panel */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400">
                    ₹
                  </span>
                  {t.inputSection}
                </h2>

                {/* Amount Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {t.amountLabel}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 font-bold">₹</span>
                    <input
                      type="number"
                      value={amountINR}
                      onChange={(e) => setAmountINR(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white text-xl font-mono focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  {/* Quick Amount Buttons */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {[5000, 10000, 25000, 50000, 100000].map(amount => (
                      <button
                        key={amount}
                        onClick={() => setAmountINR(amount)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          amountINR === amount
                            ? 'bg-orange-500 text-gray-900'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                      >
                        {formatINR(amount)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Exchange Rate */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {t.exchangeRateLabel}
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      step="0.1"
                      value={exchangeRate}
                      onChange={(e) => setExchangeRate(Number(e.target.value))}
                      className="w-24 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white font-mono focus:outline-none focus:border-cyan-500"
                    />
                    <span className="text-gray-500">1 USD = ₹{exchangeRate}</span>
                  </div>
                </div>

                {/* Leverage Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {t.leverageLabel}: <span className={`font-bold ${getLeverageColor(leverage)}`}>{leverage}x</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={leverage}
                    onChange={(e) => setLeverage(Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between mt-2">
                    {leverageMarks.map(mark => (
                      <button
                        key={mark}
                        onClick={() => setLeverage(mark)}
                        className={`text-xs px-2 py-1 rounded transition-all ${
                          leverage === mark
                            ? `${getLeverageBgColor(mark)} text-gray-900 font-bold`
                            : 'text-gray-500 hover:text-white'
                        }`}
                      >
                        {mark}x
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-emerald-400/70 mt-2">
                    {t.leverageRecommendation}
                  </p>
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                    $
                  </span>
                  {t.resultsSection}
                </h2>

                {/* USDC Equivalent */}
                <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{t.usdcEquivalent}</span>
                    <span className="text-2xl font-bold text-cyan-400 font-mono">
                      {formatUSD(calculations.usdcAmount)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatINR(amountINR)} / {exchangeRate} = {formatUSD(calculations.usdcAmount)}
                  </p>
                </div>

                {/* Position Size */}
                <div className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border border-orange-500/30 rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t.positionSize}</span>
                    <span className="text-3xl font-black text-white font-mono">
                      {formatUSD(calculations.positionSize)}
                    </span>
                  </div>
                  <p className="text-sm text-orange-300 mt-2">
                    {t.controllingPower} <span className="font-bold">{formatUSD(calculations.positionSize)}</span> {t.worthOf}
                  </p>
                </div>

                {/* Liquidation Warning */}
                <div className={`rounded-xl p-4 ${
                  leverage > 10 ? 'bg-red-500/20 border border-red-500/30' : 'bg-yellow-500/10 border border-yellow-500/20'
                }`}>
                  <div className="flex items-center gap-2">
                    <svg className={`w-5 h-5 ${leverage > 10 ? 'text-red-400' : 'text-yellow-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className={`font-medium ${leverage > 10 ? 'text-red-400' : 'text-yellow-400'}`}>
                      {t.liquidationAt} {calculations.liquidationPercent.toFixed(1)}% {t.move}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {leverage}x leverage = {calculations.liquidationPercent.toFixed(1)}% price move against you = 100% loss
                  </p>
                </div>
              </div>
            </div>

            {/* Stocks You Can Trade */}
            <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-6">{t.stocksYouCanTrade}</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Stock</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">{t.stockPrice}</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">{t.sharesYouControl}</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm hidden sm:table-cell">Position Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculations.stockPositions.map((stock) => (
                      <tr key={stock.ticker} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                              style={{ backgroundColor: `${stock.color}20`, color: stock.color }}
                            >
                              {stock.ticker.slice(0, 2)}
                            </div>
                            <div>
                              <span className="text-white font-semibold">{stock.ticker}</span>
                              <p className="text-xs text-gray-500">{stock.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="text-gray-300 font-mono">{formatUSD(stock.price)}</span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="text-cyan-400 font-bold font-mono">{stock.shares.toFixed(2)}</span>
                          <p className="text-xs text-gray-500">{t.sharesControlled}</p>
                        </td>
                        <td className="py-4 px-4 text-right hidden sm:table-cell">
                          <span className="text-white font-mono">{formatUSD(stock.positionValue)}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Leverage Tips */}
            <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-emerald-400">💡</span>
                {t.leverageTips}
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                  <h3 className="text-emerald-400 font-semibold mb-2">{t.tip1Title}</h3>
                  <p className="text-gray-400 text-sm">{t.tip1Desc}</p>
                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                  <h3 className="text-cyan-400 font-semibold mb-2">{t.tip2Title}</h3>
                  <p className="text-gray-400 text-sm">{t.tip2Desc}</p>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                  <h3 className="text-orange-400 font-semibold mb-2">{t.tip3Title}</h3>
                  <p className="text-gray-400 text-sm">{t.tip3Desc}</p>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                  <h3 className="text-purple-400 font-semibold mb-2">{t.tip4Title}</h3>
                  <p className="text-gray-400 text-sm">{t.tip4Desc}</p>
                </div>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-red-400 font-bold text-lg mb-2">{t.riskWarning}</h3>
                  <p className="text-gray-300">{t.riskText}</p>
                </div>
              </div>

              {/* Visual Liquidation Chart */}
              <div className="mt-6 grid grid-cols-5 gap-2">
                {[2, 5, 10, 20, 50].map(lev => (
                  <div key={lev} className="text-center">
                    <div className={`rounded-lg p-3 ${
                      lev <= 5 ? 'bg-emerald-500/20' : lev <= 10 ? 'bg-yellow-500/20' : 'bg-red-500/20'
                    }`}>
                      <span className={`text-xl font-bold ${
                        lev <= 5 ? 'text-emerald-400' : lev <= 10 ? 'text-yellow-400' : 'text-red-400'
                      }`}>{lev}x</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      -{(100/lev).toFixed(0)}%
                    </p>
                    <p className="text-xs text-gray-600">
                      {t.liquidationAt.split(' ')[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">{t.getStarted}</h2>
              <p className="text-gray-400 mb-6">{t.getStartedDesc}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/start"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-cyan-500 text-gray-900 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  {t.startTrading}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/blog/convert-inr-to-usdc"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
                >
                  {t.learnMore}
                </Link>
              </div>
            </div>

            {/* Related Tools */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-white mb-4">Related Tools</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link href="/blog/pnl-simulator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                  <span className="text-purple-400 text-xs font-medium">SIMULATOR</span>
                  <h3 className="text-white font-medium mt-1">PnL Simulator</h3>
                  <p className="text-gray-500 text-sm mt-1">See profit/loss scenarios</p>
                </Link>
                <Link href="/blog/liquidation-calculator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors">
                  <span className="text-red-400 text-xs font-medium">CALCULATOR</span>
                  <h3 className="text-white font-medium mt-1">Liquidation Calculator</h3>
                  <p className="text-gray-500 text-sm mt-1">Find liquidation prices</p>
                </Link>
                <Link href="/blog/trade-us-stocks-from-india" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-orange-500/50 transition-colors">
                  <span className="text-orange-400 text-xs font-medium">GUIDE</span>
                  <h3 className="text-white font-medium mt-1">India Trading Guide</h3>
                  <p className="text-gray-500 text-sm mt-1">Complete guide for Indians</p>
                </Link>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">{t.footer}</p>
            </div>
          </div>
        </section>

        {/* Free Site Notice */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-gray-400 text-sm leading-relaxed">
                This site is <span className="text-white font-medium">100% free</span> to use for comparing the best platforms to trade stocks 24/7.
                When you sign up through our links to platforms like <span className="text-cyan-400">Hyperliquid</span> and <span className="text-cyan-400">Lighter</span>,
                you get a <span className="text-green-400 font-semibold">4% discount on trading fees</span> with our referral code.
                This helps support the site while saving you money on every trade.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
