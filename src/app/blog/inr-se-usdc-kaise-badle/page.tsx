'use client';

import { useState } from 'react';
import Link from 'next/link';

// Translation object for Hindi and English
const translations = {
  hi: {
    // Meta & Navigation
    home: 'होम',
    blog: 'ब्लॉग',
    pageTitle: 'INR से USDC कैसे बदलें',

    // Hero Section
    heroTagIndia: 'भारत',
    heroTagGuide: 'फंडिंग गाइड',
    heroTitle: 'INR से USDC कैसे बदलें',
    heroDescription: 'भारतीय रुपये को USDC में बदलने की पूरी गाइड। इक्विटी परप्स ट्रेडिंग के लिए तरीकों, फीस और स्टेप-बाय-स्टेप निर्देशों की तुलना करें।',

    // Comparison Table
    compareMethods: 'तरीकों की तुलना करें',
    tableMethod: 'तरीका',
    tableFees: 'फीस',
    tableSpeed: 'समय',
    tableMinAmount: 'न्यूनतम राशि',
    tableBestFor: 'किसके लिए सर्वश्रेष्ठ',

    // Method Ratings
    bestRates: 'सर्वश्रेष्ठ रेट',
    easiest: 'सबसे आसान',
    directUsdc: 'सीधे USDC',

    // Best For descriptions
    bestForBinance: 'सर्वश्रेष्ठ रेट, नियमित ट्रेडर्स',
    bestForWazirx: 'शुरुआती, छोटी राशि',
    bestForCoindcx: 'सीधे USDC, सरलता',

    // Recommendation
    recommendation: 'सिफारिश:',
    recommendationText: 'सर्वश्रेष्ठ रेट के लिए Binance P2P का उपयोग करें। पहले USDT खरीदें (ज्यादा विक्रेता), फिर Binance पर मुफ्त में USDC में बदलें।',

    // Step-by-step section
    stepByStep: 'स्टेप-बाय-स्टेप निर्देश',

    // Binance Instructions
    binanceTitle: 'Binance P2P तरीका (सर्वश्रेष्ठ रेट)',
    binanceStep1Title: 'Binance अकाउंट बनाएं',
    binanceStep1Desc: 'binance.com पर जाएं और साइन अप करें। KYC वेरिफिकेशन पूरा करें (आधार + पैन)।',
    binanceStep1Note: 'KYC वेरिफाई होने में आमतौर पर 10-30 मिनट लगते हैं',
    binanceStep2Title: 'P2P ट्रेडिंग पर जाएं',
    binanceStep2Desc: 'Binance ऐप खोलें → "P2P" पर क्लिक करें या "Trade" → "P2P" पर जाएं',
    binanceStep2Note: 'P2P का मतलब है आप सीधे दूसरे यूजर्स से खरीद रहे हैं',
    binanceStep3Title: 'INR से USDT खरीदें',
    binanceStep3Items: [
      'Buy → USDT चुनें',
      'पेमेंट मेथड चुनें: UPI (सबसे तेज) या IMPS/बैंक ट्रांसफर',
      'INR में राशि दर्ज करें',
      'हाई कम्प्लीशन रेट (98%+) और ज्यादा ऑर्डर वाले विक्रेता चुनें',
      '"Buy" पर क्लिक करें और पेमेंट निर्देशों का पालन करें',
    ],
    binanceStep3Note: 'USDT पहले क्यों? ज्यादा विक्रेता = बेहतर रेट। अगले स्टेप में USDC में बदलें (मुफ्त)।',
    binanceStep4Title: 'USDT को USDC में बदलें (मुफ्त)',
    binanceStep4Items: [
      '"Trade" → "Convert" पर जाएं',
      'From: USDT → To: USDC',
      'राशि दर्ज करें और "Preview Conversion" पर क्लिक करें',
      'कन्फर्म करें — यह मुफ्त और तुरंत है!',
    ],
    binanceStep5Title: 'USDC अपने वॉलेट में निकालें',
    binanceStep5Items: [
      '"Wallet" → "Withdraw" पर जाएं',
      'USDC चुनें',
      'अपना Rabby वॉलेट एड्रेस पेस्ट करें',
      'नेटवर्क चुनें: Arbitrum One (सबसे कम फीस ~$0.10)',
      '2FA से कन्फर्म करें',
    ],
    binanceStep5Note: 'महत्वपूर्ण: सबसे कम फीस के लिए हमेशा Arbitrum नेटवर्क का उपयोग करें। फंड 1-5 मिनट में आ जाते हैं।',

    // Example conversion
    exampleTitle: 'उदाहरण: ₹10,000 कन्वर्ट करना',
    exampleInr: '₹10,000 INR',
    exampleUsdt: '~119 USDT (₹84/USDT पर)',
    exampleUsdtToUsdc: '119 USDT',
    exampleUsdc: '119 USDC (मुफ्त कन्वर्शन)',
    exampleWithdrawalFee: 'निकासी शुल्क',
    exampleWithdrawalAmount: '~$0.10 (Arbitrum)',
    exampleYouReceive: 'आपको मिलेगा',
    exampleFinalAmount: '~$118.90 USDC',
    freeConversion: 'मुफ्त कन्वर्शन',

    // WazirX Instructions
    wazirxTitle: 'WazirX तरीका (सबसे आसान)',
    wazirxStep1Title: 'WazirX अकाउंट बनाएं',
    wazirxStep1Desc: 'WazirX ऐप डाउनलोड करें या wazirx.com पर जाएं। आधार के साथ KYC पूरा करें।',
    wazirxStep2Title: 'UPI से INR जमा करें',
    wazirxStep2Items: [
      '"Funds" → "Deposit INR" पर जाएं',
      'पेमेंट मेथड के रूप में UPI चुनें',
      'राशि दर्ज करें और किसी भी UPI ऐप से पे करें',
    ],
    wazirxStep2Note: 'तुरंत जमा, कोई शुल्क नहीं',
    wazirxStep3Title: 'USDT खरीदें',
    wazirxStep3Items: [
      '"Exchange" → "USDT/INR" खोजें',
      '"Buy" पर क्लिक करें और राशि दर्ज करें',
      'खरीदारी कन्फर्म करें',
    ],
    wazirxStep4Title: 'Binance में ट्रांसफर करें (मुफ्त)',
    wazirxStep4Items: [
      'WazirX Binance से जुड़ा है',
      '"Funds" → "Transfer to Binance" पर जाएं',
      'USDT और राशि चुनें',
      'तुरंत और मुफ्त ट्रांसफर!',
    ],
    wazirxStep5Title: 'Binance से कन्वर्ट और निकालें',
    wazirxStep5Desc: 'Binance पर आने के बाद, USDT → USDC (मुफ्त) कन्वर्ट करें, फिर Arbitrum पर अपने वॉलेट में निकालें।',
    wazirxWhyNote: 'यह रूट क्यों? WazirX में आसान UPI जमा है लेकिन ट्रेडिंग फीस ज्यादा है। Binance में ट्रांसफर करके (मुफ्त), आप मुफ्त में USDC में कन्वर्ट कर सकते हैं और कम फीस के साथ निकाल सकते हैं।',

    // CoinDCX Instructions
    coindcxTitle: 'CoinDCX तरीका (सीधे USDC)',
    coindcxStep1Title: 'CoinDCX अकाउंट बनाएं',
    coindcxStep1Desc: 'CoinDCX ऐप डाउनलोड करें या coindcx.com पर जाएं। KYC पूरा करें।',
    coindcxStep2Title: 'INR जमा करें',
    coindcxStep2Items: [
      '"Wallet" → "Deposit INR" पर जाएं',
      'बैंक ट्रांसफर या UPI चुनें',
      'जमा करने के लिए निर्देशों का पालन करें',
    ],
    coindcxStep3Title: 'सीधे USDC खरीदें',
    coindcxStep3Items: [
      '"Trade" → "USDC/INR" खोजें',
      'राशि दर्ज करें और खरीदें',
      'अब आपके पास सीधे USDC है!',
    ],
    coindcxStep4Title: 'वॉलेट में निकालें',
    coindcxStep4Items: [
      '"Wallet" → "Withdraw" पर जाएं',
      'USDC चुनें',
      'अपना Rabby वॉलेट एड्रेस दर्ज करें',
      'Arbitrum नेटवर्क चुनें अगर उपलब्ध हो (या Ethereum)',
    ],
    coindcxNote: 'नोट: CoinDCX सबसे सरल तरीका है लेकिन फीस ज्यादा है। छोटी राशि के लिए या सबसे आसान अनुभव चाहते हैं तो अच्छा है।',

    // Pro Tips
    proTipsTitle: 'भारतीय ट्रेडर्स के लिए प्रो टिप्स',
    proTip1Title: 'सर्वश्रेष्ठ रेट के लिए P2P का उपयोग करें',
    proTip1Desc: 'Binance P2P आमतौर पर एक्सचेंज रेट से 0.5-1% बेहतर रेट देता है। ₹50,000 के लिए, यह ₹250-500 की बचत है।',
    proTip2Title: 'बैंकिंग घंटों में ट्रेड करें',
    proTip2Desc: 'P2P ट्रेड सबसे तेज होते हैं जब भारतीय बैंक खुले हों (सुबह 9 बजे - शाम 6 बजे IST)। UPI 24/7 काम करता है लेकिन IMPS रात में धीमा हो सकता है।',
    proTip3Title: 'वेरिफाइड विक्रेता चुनें',
    proTip3Desc: 'P2P पर, 98%+ कम्प्लीशन रेट और 500+ ऑर्डर वाले विक्रेताओं को खोजें। ज्यादा ऑर्डर काउंट = ज्यादा भरोसेमंद।',
    proTip4Title: 'ट्रांजैक्शन रिकॉर्ड रखें',
    proTip4Desc: 'सभी P2P ट्रेड और ट्रांसफर के स्क्रीनशॉट लें। टैक्स के लिए और किसी भी विवाद के मामले में इनकी जरूरत होगी।',

    // CTA Section
    ctaTitle: 'INR कन्वर्ट करने के लिए तैयार हैं?',
    ctaDescription: 'एक बार आपके वॉलेट में USDC आ जाए, आप 24/7 US स्टॉक्स ट्रेड करने के लिए तैयार हैं।',
    ctaButton: 'आगे बढ़ें: ट्रेडिंग शुरू करें',
    ctaSecondaryButton: 'पहले वॉलेट सेट करें',

    // Footer Notice
    footerNotice: 'यह साइट 24/7 स्टॉक ट्रेड करने के सर्वश्रेष्ठ प्लेटफॉर्म की तुलना के लिए 100% मुफ्त है। जब आप हमारे लिंक से Hyperliquid और Lighter जैसे प्लेटफॉर्म पर साइन अप करते हैं, तो आपको हमारे रेफरल कोड से ट्रेडिंग फीस पर 4% की छूट मिलती है। यह आपके हर ट्रेड पर पैसे बचाते हुए साइट को सपोर्ट करता है।',
    freeToUse: '100% मुफ्त',
    discountText: 'ट्रेडिंग फीस पर 4% की छूट',

    // Language Toggle
    switchToEnglish: 'Switch to English',
    switchToHindi: 'हिंदी में देखें',
  },
  en: {
    // Meta & Navigation
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'INR to USDC Conversion Guide',

    // Hero Section
    heroTagIndia: 'India',
    heroTagGuide: 'Funding Guide',
    heroTitle: 'How to Convert INR to USDC',
    heroDescription: 'The complete guide to converting Indian Rupees to USDC for trading equity perps. Compare methods, fees, and get step-by-step instructions.',

    // Comparison Table
    compareMethods: 'Compare Methods',
    tableMethod: 'Method',
    tableFees: 'Fees',
    tableSpeed: 'Speed',
    tableMinAmount: 'Min Amount',
    tableBestFor: 'Best For',

    // Method Ratings
    bestRates: 'Best Rates',
    easiest: 'Easiest',
    directUsdc: 'Direct USDC',

    // Best For descriptions
    bestForBinance: 'Best rates, regular traders',
    bestForWazirx: 'Beginners, small amounts',
    bestForCoindcx: 'Direct USDC, simplicity',

    // Recommendation
    recommendation: 'Recommendation:',
    recommendationText: 'Use Binance P2P for the best rates. Buy USDT first (more sellers), then convert to USDC for free on Binance.',

    // Step-by-step section
    stepByStep: 'Step-by-Step Instructions',

    // Binance Instructions
    binanceTitle: 'Binance P2P Method (Best Rates)',
    binanceStep1Title: 'Create Binance Account',
    binanceStep1Desc: 'Go to binance.com and sign up. Complete KYC verification (Aadhaar + PAN).',
    binanceStep1Note: 'KYC usually takes 10-30 minutes to verify',
    binanceStep2Title: 'Go to P2P Trading',
    binanceStep2Desc: 'Open Binance app → Click "P2P" or go to "Trade" → "P2P"',
    binanceStep2Note: 'P2P means you\'re buying directly from other users',
    binanceStep3Title: 'Buy USDT with INR',
    binanceStep3Items: [
      'Select Buy → USDT',
      'Choose payment method: UPI (fastest) or IMPS/Bank Transfer',
      'Enter amount in INR',
      'Pick a seller with high completion rate (98%+) and many orders',
      'Click "Buy" and follow payment instructions',
    ],
    binanceStep3Note: 'Why USDT first? More sellers = better rates. You\'ll convert to USDC in the next step (free).',
    binanceStep4Title: 'Convert USDT to USDC (Free)',
    binanceStep4Items: [
      'Go to "Trade" → "Convert"',
      'From: USDT → To: USDC',
      'Enter amount and click "Preview Conversion"',
      'Confirm — this is free and instant!',
    ],
    binanceStep5Title: 'Withdraw USDC to Your Wallet',
    binanceStep5Items: [
      'Go to "Wallet" → "Withdraw"',
      'Select USDC',
      'Paste your Rabby wallet address',
      'Select network: Arbitrum One (lowest fees ~$0.10)',
      'Confirm with 2FA',
    ],
    binanceStep5Note: 'Important: Always use Arbitrum network for lowest fees. Funds arrive in 1-5 minutes.',

    // Example conversion
    exampleTitle: 'Example: Converting ₹10,000',
    exampleInr: '₹10,000 INR',
    exampleUsdt: '~119 USDT (at ₹84/USDT)',
    exampleUsdtToUsdc: '119 USDT',
    exampleUsdc: '119 USDC (free conversion)',
    exampleWithdrawalFee: 'Withdrawal fee',
    exampleWithdrawalAmount: '~$0.10 (Arbitrum)',
    exampleYouReceive: 'You receive',
    exampleFinalAmount: '~$118.90 USDC',
    freeConversion: 'free conversion',

    // WazirX Instructions
    wazirxTitle: 'WazirX Method (Easiest)',
    wazirxStep1Title: 'Create WazirX Account',
    wazirxStep1Desc: 'Download WazirX app or go to wazirx.com. Complete KYC with Aadhaar.',
    wazirxStep2Title: 'Deposit INR via UPI',
    wazirxStep2Items: [
      'Go to "Funds" → "Deposit INR"',
      'Select UPI as payment method',
      'Enter amount and pay via any UPI app',
    ],
    wazirxStep2Note: 'Instant deposit, no fee',
    wazirxStep3Title: 'Buy USDT',
    wazirxStep3Items: [
      'Go to "Exchange" → Search "USDT/INR"',
      'Click "Buy" and enter amount',
      'Confirm purchase',
    ],
    wazirxStep4Title: 'Transfer to Binance (Free)',
    wazirxStep4Items: [
      'WazirX is linked to Binance',
      'Go to "Funds" → "Transfer to Binance"',
      'Select USDT and amount',
      'Instant and free transfer!',
    ],
    wazirxStep5Title: 'Convert & Withdraw from Binance',
    wazirxStep5Desc: 'Once on Binance, convert USDT → USDC (free), then withdraw to your wallet on Arbitrum.',
    wazirxWhyNote: 'Why this route? WazirX has easy UPI deposits but higher trading fees. By transferring to Binance (free), you can convert to USDC for free and withdraw with lower fees.',

    // CoinDCX Instructions
    coindcxTitle: 'CoinDCX Method (Direct USDC)',
    coindcxStep1Title: 'Create CoinDCX Account',
    coindcxStep1Desc: 'Download CoinDCX app or visit coindcx.com. Complete KYC.',
    coindcxStep2Title: 'Deposit INR',
    coindcxStep2Items: [
      'Go to "Wallet" → "Deposit INR"',
      'Choose bank transfer or UPI',
      'Follow instructions to deposit',
    ],
    coindcxStep3Title: 'Buy USDC Directly',
    coindcxStep3Items: [
      'Go to "Trade" → Search "USDC/INR"',
      'Enter amount and buy',
      'You now have USDC directly!',
    ],
    coindcxStep4Title: 'Withdraw to Wallet',
    coindcxStep4Items: [
      'Go to "Wallet" → "Withdraw"',
      'Select USDC',
      'Enter your Rabby wallet address',
      'Select Arbitrum network if available (or Ethereum)',
    ],
    coindcxNote: 'Note: CoinDCX is the simplest method but has higher fees. Good for small amounts or if you want the easiest experience.',

    // Pro Tips
    proTipsTitle: 'Pro Tips for Indian Traders',
    proTip1Title: 'Use P2P for Best Rates',
    proTip1Desc: 'Binance P2P typically offers rates 0.5-1% better than exchange rates. For ₹50,000, that\'s ₹250-500 saved.',
    proTip2Title: 'Trade During Banking Hours',
    proTip2Desc: 'P2P trades are fastest when Indian banks are open (9am-6pm IST). UPI works 24/7 but IMPS may be slower at night.',
    proTip3Title: 'Pick Verified Sellers',
    proTip3Desc: 'On P2P, look for sellers with 98%+ completion rate and 500+ orders. Higher order count = more reliable.',
    proTip4Title: 'Keep Transaction Records',
    proTip4Desc: 'Screenshot all P2P trades and transfers. You\'ll need these for tax purposes and in case of any disputes.',

    // CTA Section
    ctaTitle: 'Ready to Convert INR?',
    ctaDescription: 'Once you have USDC in your wallet, you\'re ready to start trading US stocks 24/7.',
    ctaButton: 'Continue: Start Trading',
    ctaSecondaryButton: 'Set Up Wallet First',

    // Footer Notice
    footerNotice: 'This site is 100% free to use for comparing the best platforms to trade stocks 24/7. When you sign up through our links to platforms like Hyperliquid and Lighter, you get a 4% discount on trading fees with our referral code. This helps support the site while saving you money on every trade.',
    freeToUse: '100% free',
    discountText: '4% discount on trading fees',

    // Language Toggle
    switchToEnglish: 'Switch to English',
    switchToHindi: 'हिंदी में देखें',
  },
};

const methods = [
  {
    id: 'binance',
    name: 'Binance P2P',
    color: 'orange',
    fees: '~0.1-0.5%',
    speed: '5-15 min',
    minAmount: '₹500',
  },
  {
    id: 'wazirx',
    name: 'WazirX',
    color: 'green',
    fees: '~1-2%',
    speed: '10-30 min',
    minAmount: '₹100',
  },
  {
    id: 'coindcx',
    name: 'CoinDCX',
    color: 'orange',
    fees: '~1.5-3%',
    speed: '15-45 min',
    minAmount: '₹100',
  },
];

export default function INRtoUSDCHindiGuide() {
  const [selectedMethod, setSelectedMethod] = useState('binance');
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const t = translations[lang];

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: lang === 'hi' ? 'INR से USDC कैसे बदलें' : 'How to Convert INR to USDC',
    description: lang === 'hi'
      ? 'भारतीय रुपये को USDC में बदलने की पूरी गाइड। Binance P2P, WazirX, और CoinDCX का उपयोग करके स्टेप-बाय-स्टेप निर्देश।'
      : 'Complete guide to converting Indian Rupees to USDC. Step-by-step instructions using Binance P2P, WazirX, and CoinDCX.',
    inLanguage: lang === 'hi' ? 'hi-IN' : 'en-US',
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: '500',
    },
    step: [
      {
        '@type': 'HowToStep',
        name: lang === 'hi' ? 'एक्सचेंज पर अकाउंट बनाएं' : 'Create account on exchange',
        text: lang === 'hi'
          ? 'Binance, WazirX, या CoinDCX पर साइन अप करें और KYC पूरा करें।'
          : 'Sign up on Binance, WazirX, or CoinDCX and complete KYC.',
      },
      {
        '@type': 'HowToStep',
        name: lang === 'hi' ? 'INR जमा करें' : 'Deposit INR',
        text: lang === 'hi'
          ? 'UPI या बैंक ट्रांसफर के माध्यम से भारतीय रुपये जमा करें।'
          : 'Deposit Indian Rupees via UPI or bank transfer.',
      },
      {
        '@type': 'HowToStep',
        name: lang === 'hi' ? 'USDT/USDC खरीदें' : 'Buy USDT/USDC',
        text: lang === 'hi'
          ? 'P2P या एक्सचेंज के माध्यम से USDT खरीदें, फिर USDC में कन्वर्ट करें।'
          : 'Buy USDT via P2P or exchange, then convert to USDC.',
      },
      {
        '@type': 'HowToStep',
        name: lang === 'hi' ? 'वॉलेट में निकालें' : 'Withdraw to wallet',
        text: lang === 'hi'
          ? 'USDC को अपने क्रिप्टो वॉलेट में Arbitrum नेटवर्क पर निकालें।'
          : 'Withdraw USDC to your crypto wallet on Arbitrum network.',
      },
    ],
  };

  const getRating = (id: string) => {
    switch (id) {
      case 'binance': return t.bestRates;
      case 'wazirx': return t.easiest;
      case 'coindcx': return t.directUsdc;
      default: return '';
    }
  };

  const getBestFor = (id: string) => {
    switch (id) {
      case 'binance': return t.bestForBinance;
      case 'wazirx': return t.bestForWazirx;
      case 'coindcx': return t.bestForCoindcx;
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-gray-950 to-green-500/10" />

        <div className="max-w-4xl mx-auto relative">
          {/* Language Toggle */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              <span className="text-lg">{lang === 'hi' ? '🇬🇧' : '🇮🇳'}</span>
              {lang === 'hi' ? t.switchToEnglish : t.switchToHindi}
            </button>
          </div>

          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{t.pageTitle}</span>
          </nav>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">{t.heroTagIndia}</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">{t.heroTagGuide}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {t.heroTitle}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            {t.heroDescription}
          </p>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.compareMethods}</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableMethod}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableFees}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableSpeed}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableMinAmount}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableBestFor}</th>
                </tr>
              </thead>
              <tbody>
                {methods.map(method => (
                  <tr key={method.id} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                    <td className="py-4 px-4">
                      <span className="text-white font-medium">{method.name}</span>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                        method.id === 'binance' ? 'bg-orange-500/20 text-orange-400' :
                        method.id === 'wazirx' ? 'bg-green-500/20 text-green-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {getRating(method.id)}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{method.fees}</td>
                    <td className="py-4 px-4 text-gray-300">{method.speed}</td>
                    <td className="py-4 px-4 text-gray-300">{method.minAmount}</td>
                    <td className="py-4 px-4 text-gray-400 text-sm">
                      {getBestFor(method.id)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
            <p className="text-green-400 text-sm">
              <strong>{t.recommendation}</strong> {t.recommendationText}
            </p>
          </div>
        </div>
      </section>

      {/* Method Selector */}
      <section className="py-8 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.stepByStep}</h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {methods.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`px-5 py-3 rounded-xl font-medium transition-all ${
                  selectedMethod === method.id
                    ? method.id === 'wazirx' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {method.name}
              </button>
            ))}
          </div>

          {/* Binance P2P Instructions */}
          {selectedMethod === 'binance' && (
            <div className="bg-gray-900 border border-orange-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-6">{t.binanceTitle}</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.binanceStep1Title}</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      <a href="https://binance.com" target="_blank" rel="noopener" className="text-orange-400 hover:text-orange-300">binance.com</a> {t.binanceStep1Desc}
                    </p>
                    <p className="text-gray-500 text-xs">{t.binanceStep1Note}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.binanceStep2Title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{t.binanceStep2Desc}</p>
                    <p className="text-gray-500 text-xs">{t.binanceStep2Note}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.binanceStep3Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.binanceStep3Items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 p-3 bg-orange-500/10 rounded-lg">
                      <p className="text-orange-400 text-xs">
                        <strong>{lang === 'hi' ? 'USDT पहले क्यों?' : 'Why USDT first?'}</strong> {t.binanceStep3Note}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.binanceStep4Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.binanceStep4Items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.binanceStep5Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.binanceStep5Items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 p-3 bg-green-500/10 rounded-lg">
                      <p className="text-green-400 text-xs">
                        <strong>{lang === 'hi' ? 'महत्वपूर्ण:' : 'Important:'}</strong> {t.binanceStep5Note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{t.exampleTitle}</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between text-gray-300">
                    <span>{t.exampleInr}</span>
                    <span>→</span>
                    <span>{t.exampleUsdt}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>{t.exampleUsdtToUsdc}</span>
                    <span>→</span>
                    <span>{t.exampleUsdc}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>{t.exampleWithdrawalFee}</span>
                    <span></span>
                    <span>{t.exampleWithdrawalAmount}</span>
                  </div>
                  <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700">
                    <span>{t.exampleYouReceive}</span>
                    <span></span>
                    <span>{t.exampleFinalAmount}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* WazirX Instructions */}
          {selectedMethod === 'wazirx' && (
            <div className="bg-gray-900 border border-green-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-6">{t.wazirxTitle}</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.wazirxStep1Title}</h4>
                    <p className="text-gray-400 text-sm">
                      <a href="https://wazirx.com" target="_blank" rel="noopener" className="text-green-400 hover:text-green-300">wazirx.com</a> {t.wazirxStep1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.wazirxStep2Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.wazirxStep2Items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    <p className="text-gray-500 text-xs mt-2">{t.wazirxStep2Note}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.wazirxStep3Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.wazirxStep3Items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.wazirxStep4Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.wazirxStep4Items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.wazirxStep5Title}</h4>
                    <p className="text-gray-400 text-sm">{t.wazirxStep5Desc}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-500/10 rounded-xl">
                <p className="text-green-400 text-sm">
                  <strong>{lang === 'hi' ? 'यह रूट क्यों?' : 'Why this route?'}</strong> {t.wazirxWhyNote}
                </p>
              </div>
            </div>
          )}

          {/* CoinDCX Instructions */}
          {selectedMethod === 'coindcx' && (
            <div className="bg-gray-900 border border-orange-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-6">{t.coindcxTitle}</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.coindcxStep1Title}</h4>
                    <p className="text-gray-400 text-sm">
                      <a href="https://coindcx.com" target="_blank" rel="noopener" className="text-orange-400 hover:text-orange-300">coindcx.com</a> {t.coindcxStep1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.coindcxStep2Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.coindcxStep2Items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.coindcxStep3Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.coindcxStep3Items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.coindcxStep4Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.coindcxStep4Items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                <p className="text-orange-400 text-sm">
                  <strong>{lang === 'hi' ? 'नोट:' : 'Note:'}</strong> {t.coindcxNote}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.proTipsTitle}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-3">
                <span className="text-orange-400 text-xl">₹</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{t.proTip1Title}</h3>
              <p className="text-gray-400 text-sm">{t.proTip1Desc}</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t.proTip2Title}</h3>
              <p className="text-gray-400 text-sm">{t.proTip2Desc}</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t.proTip3Title}</h3>
              <p className="text-gray-400 text-sm">{t.proTip3Desc}</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t.proTip4Title}</h3>
              <p className="text-gray-400 text-sm">{t.proTip4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">{t.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/trade-us-stocks-from-india"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-400 transition-colors"
            >
              {t.ctaButton}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blog/wallet-setup-guide"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
            >
              {t.ctaSecondaryButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Free Site + Referral Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              {lang === 'hi' ? (
                <>
                  यह साइट 24/7 स्टॉक ट्रेड करने के सर्वश्रेष्ठ प्लेटफॉर्म की तुलना के लिए <span className="text-white font-medium">{t.freeToUse}</span> है।
                  जब आप हमारे लिंक से <span className="text-cyan-400">Hyperliquid</span> और <span className="text-cyan-400">Lighter</span> जैसे प्लेटफॉर्म पर साइन अप करते हैं,
                  तो आपको हमारे रेफरल कोड से <span className="text-green-400 font-semibold">{t.discountText}</span> मिलती है।
                  यह आपके हर ट्रेड पर पैसे बचाते हुए साइट को सपोर्ट करता है।
                </>
              ) : (
                <>
                  This site is <span className="text-white font-medium">{t.freeToUse}</span> to use for comparing the best platforms to trade stocks 24/7.
                  When you sign up through our links to platforms like <span className="text-cyan-400">Hyperliquid</span> and <span className="text-cyan-400">Lighter</span>,
                  you get a <span className="text-green-400 font-semibold">{t.discountText}</span> with our referral code.
                  This helps support the site while saving you money on every trade.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
