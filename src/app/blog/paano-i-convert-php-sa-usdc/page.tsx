'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  tl: {
    // Meta & Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Paano i-convert ang PHP sa USDC',

    // Hero
    badge: 'Gabay sa Pilipinas',
    heroTitle: 'Paano I-convert ang PHP sa USDC',
    heroSubtitle: 'Kumpleto at Step-by-Step na Gabay para sa mga Pinoy',
    heroDesc: 'Matuto kung paano i-convert ang Philippine Peso sa USDC gamit ang GCash, Maya, o bank transfer. Ang pinakamabilis at pinakamurang paraan para sa mga Filipino traders.',

    // Quick Stats
    statTimeValue: '15-30 min',
    statTime: 'Karaniwang Oras',
    statMinFeeValue: '0-1%',
    statMinFee: 'Trading Fee',
    statMethodsValue: '7+',
    statMethods: 'Payment Methods',
    statMinValue: '~P500',
    statMin: 'Minimum',

    // Comparison Table
    comparisonTitle: 'Ihambing ang mga Paraan para I-convert ang PHP sa USDC',
    comparisonDesc: 'Piliin ang pinakamainam na platform depende sa iyong pangangailangan',
    platformHeader: 'Platform',
    feeHeader: 'Fee',
    speedHeader: 'Bilis',
    minHeader: 'Minimum',
    paymentHeader: 'Payment Methods',
    bestForHeader: 'Pinakamainam Para Sa',
    recommended: 'Inirerekomenda',

    // Platform details
    coinsph: {
      name: 'Coins.ph',
      fee: '1-2%',
      speed: '5-15 min',
      min: 'P50',
      payments: 'GCash, Maya, BDO, BPI, UnionBank, InstaPay',
      bestFor: 'Mga baguhan, simpleng proseso',
    },
    binanceP2P: {
      name: 'Binance P2P',
      fee: '0%',
      speed: '10-30 min',
      min: '~P500',
      payments: 'GCash, Maya, BDO, BPI, UnionBank, PESONet',
      bestFor: 'Pinakamababang fee, malaking halaga',
    },
    pdax: {
      name: 'PDAX',
      fee: '0.5-1%',
      speed: '10-20 min',
      min: 'P100',
      payments: 'BDO, BPI, UnionBank, InstaPay, PESONet',
      bestFor: 'BSP-licensed, institutional traders',
    },

    // Step by Step
    stepByStepTitle: 'Step-by-Step: Paano I-convert ang PHP sa USDC',
    stepByStepDesc: 'Sundin ang mga hakbang na ito para ma-convert ang iyong Philippine Peso sa USDC',

    // Method 1: Coins.ph
    method1Title: 'Paraan 1: Coins.ph (Pinakamadali)',
    method1Badge: 'Pinakamadali',
    method1Desc: 'Pinakasikat na local exchange sa Pilipinas. BSP-licensed at madaling gamitin.',
    method1Steps: [
      'I-download ang Coins.ph app at mag-sign up',
      'Kumpletuhin ang KYC verification (ID + selfie)',
      'Mag-cash in gamit ang GCash, Maya, o bank transfer',
      'Pumunta sa "Convert" at piliin ang PHP to USDC',
      'I-enter ang halaga at i-confirm ang conversion',
      'I-withdraw ang USDC sa iyong wallet (Arbitrum network)',
    ],
    method1ProTip: 'Gamitin ang InstaPay para mas mabilis na cash-in (instant vs. 1-2 days sa regular bank transfer).',

    // Method 2: Binance P2P
    method2Title: 'Paraan 2: Binance P2P (Pinakamababang Fee)',
    method2Badge: 'Pinakamababang Fee',
    method2Desc: 'P2P trading na may 0% fee. Bumili muna ng USDT, pagkatapos i-convert sa USDC.',
    method2Steps: [
      'I-download ang Binance app at mag-sign up',
      'Kumpletuhin ang KYC verification',
      'Pumunta sa "P2P Trading" at piliin ang "Buy"',
      'Piliin ang USDT at i-filter by GCash o Maya',
      'Pumili ng trusted seller (tingnan ang completion rate)',
      'Mag-place ng order at bayaran via GCash/Maya',
      'Kapag na-release na ang USDT, pumunta sa "Convert"',
      'I-convert ang USDT sa USDC (libre)',
      'I-withdraw ang USDC sa iyong wallet (Arbitrum)',
    ],
    method2ProTip: 'Pumili ng seller na may 95%+ completion rate at maraming completed trades. Huwag magbayad sa labas ng platform.',

    // Method 3: PDAX
    method3Title: 'Paraan 3: PDAX (BSP-Regulated)',
    method3Badge: 'BSP-Regulated',
    method3Desc: 'BSP-licensed Philippine exchange. Maganda para sa mga gusto ng regulated platform.',
    method3Steps: [
      'Mag-sign up sa PDAX at kumpletuhin ang KYC',
      'Mag-deposit ng PHP via bank transfer (InstaPay/PESONet)',
      'Pumunta sa "Trade" at piliin ang USDC/PHP pair',
      'Bumili ng USDC gamit ang PHP',
      'I-withdraw ang USDC sa iyong wallet',
    ],
    method3ProTip: 'Ang PDAX ay BSP-licensed kaya mas regulated at secure, pero maaaring mas mataas ang spread.',

    // Payment Methods
    paymentTitle: 'Mga Payment Method sa Pilipinas',
    paymentDesc: 'Mga paraan para mag-cash in para makabili ng USDC',

    gcash: {
      name: 'GCash',
      desc: 'Pinakasikat na e-wallet sa Pilipinas',
      pros: ['Instant transfer', 'Malawak na availability', 'Madaling gamitin'],
      speed: 'Instant',
      fee: 'Libre - 2%',
    },
    maya: {
      name: 'Maya/PayMaya',
      desc: 'Popular na alternative e-wallet',
      pros: ['Instant transfer', 'May cashback offers', 'Magandang app'],
      speed: 'Instant',
      fee: 'Libre - 2%',
    },
    bdo: {
      name: 'BDO',
      desc: 'Pinakamalaking bangko sa Pilipinas',
      pros: ['Trusted bank', 'Mataas na limit', 'InstaPay support'],
      speed: '1-2 araw (normal) / Instant (InstaPay)',
      fee: 'P15-25 (InstaPay)',
    },
    bpi: {
      name: 'BPI',
      desc: 'Ikalawang pinakamalaking bangko',
      pros: ['Reliable', 'Good online banking', 'InstaPay support'],
      speed: '1-2 araw (normal) / Instant (InstaPay)',
      fee: 'P15-25 (InstaPay)',
    },
    unionbank: {
      name: 'UnionBank',
      desc: 'Digital-first bank',
      pros: ['Best digital experience', 'Fast transfers', 'InstaPay free'],
      speed: 'Instant (InstaPay)',
      fee: 'Libre (InstaPay)',
    },
    instapay: {
      name: 'InstaPay',
      desc: 'Real-time interbank transfer',
      pros: ['Instant (24/7)', 'P50,000 limit per transaction', 'Maraming banks'],
      speed: 'Instant',
      fee: 'P15-25',
    },
    pesonet: {
      name: 'PESONet',
      desc: 'Batch interbank transfer',
      pros: ['Mas mataas na limit', 'Mas mababang fee', 'Reliable'],
      speed: 'Same day (kung before cut-off)',
      fee: 'P10-20',
    },

    // Pro Tips
    proTipsTitle: 'Mga Pro Tips para sa Pinoy Traders',
    proTips: [
      {
        icon: '1',
        title: 'Bumili Muna ng USDT sa Binance P2P',
        desc: 'Mas maraming sellers at mas magandang rates ang USDT kaysa USDC. I-convert mo na lang sa USDC pagkatapos (libre sa Binance).',
      },
      {
        icon: '2',
        title: 'Gamitin ang InstaPay para Mabilis na Transfer',
        desc: 'Instant ang InstaPay 24/7. Iwasan ang regular bank transfer na 1-2 araw bago dumating.',
      },
      {
        icon: '3',
        title: 'Mag-trade Durante ng Working Hours',
        desc: 'Mas maraming P2P sellers online during 9AM-9PM PHT. Mas maganda ang rates at mas mabilis ang transaction.',
      },
      {
        icon: '4',
        title: 'Huwag Banggitin ang "Crypto" sa Payment Notes',
        desc: 'Iwasang isulat ang "crypto", "USDC", o "Bitcoin" sa payment notes. Pwedeng ma-flag ng bank ang account mo.',
      },
      {
        icon: '5',
        title: 'Piliin ang Arbitrum Network para sa Withdrawal',
        desc: 'Mas mababa ang gas fee sa Arbitrum compared sa Ethereum mainnet. Tandaan: Hyperliquid ay nasa Arbitrum.',
      },
      {
        icon: '6',
        title: 'I-verify ang Seller Bago Magbayad',
        desc: 'Sa P2P, tingnan ang completion rate (95%+), number of trades (100+), at reviews ng seller bago mag-transact.',
      },
    ],

    // Warning
    warningTitle: 'Mga Paalala',
    warnings: [
      'Huwag magbayad sa labas ng platform (escrow protection)',
      'I-double check ang wallet address bago mag-withdraw',
      'Mag-start sa maliit na halaga kung baguhan ka',
      'I-keep ang records ng lahat ng transactions para sa tax purposes',
    ],

    // FAQ
    faqTitle: 'Mga Madalas Itanong',
    faqs: [
      {
        question: 'Ano ang pinakamabilis na paraan para i-convert ang PHP sa USDC?',
        answer: 'Ang Coins.ph ang pinakamabilis para sa mga baguhan dahil direktang PHP to USDC. Kung gusto mo ng pinakamababang fee, gamitin ang Binance P2P (USDT muna, pagkatapos convert sa USDC).',
      },
      {
        question: 'Magkano ang minimum na halaga para mag-convert?',
        answer: 'Sa Coins.ph, P50 lang ang minimum. Sa Binance P2P, depende sa seller pero karaniwang P500-1,000 ang minimum order.',
      },
      {
        question: 'Gaano katagal bago dumating ang USDC sa wallet ko?',
        answer: 'Pagkatapos ng conversion, 5-15 minuto ang withdrawal sa Arbitrum network. Depende sa network congestion.',
      },
      {
        question: 'Safe ba ang P2P trading?',
        answer: 'Oo, kung gagamitin mo ang escrow system ng platform. Huwag magbayad sa labas ng app at pumili ng trusted sellers na may mataas na completion rate.',
      },
      {
        question: 'Kailangan ba ng KYC para mag-convert?',
        answer: 'Oo, lahat ng licensed exchanges (Coins.ph, Binance, PDAX) ay nangangailangan ng KYC. Kailangan ng valid ID at selfie.',
      },
    ],

    // CTA
    ctaTitle: 'Handa ka na bang Mag-trade?',
    ctaDesc: 'Kapag mayroon ka nang USDC, pwede ka nang mag-trade ng US stocks 24/7 sa Hyperliquid. Walang US broker kailangan.',
    ctaButton: 'Pumunta sa Philippines Trading Guide',
    ctaSecondary: 'O simulan ang trading ngayon',

    // Language Toggle
    langToggle: 'Filipino',
  },
  en: {
    // Meta & Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'How to Convert PHP to USDC',

    // Hero
    badge: 'Philippines Guide',
    heroTitle: 'How to Convert PHP to USDC',
    heroSubtitle: 'Complete Step-by-Step Guide for Filipinos',
    heroDesc: 'Learn how to convert Philippine Peso to USDC using GCash, Maya, or bank transfer. The fastest and cheapest methods for Filipino traders.',

    // Quick Stats
    statTimeValue: '15-30 min',
    statTime: 'Average Time',
    statMinFeeValue: '0-1%',
    statMinFee: 'Trading Fee',
    statMethodsValue: '7+',
    statMethods: 'Payment Methods',
    statMinValue: '~P500',
    statMin: 'Minimum',

    // Comparison Table
    comparisonTitle: 'Compare Methods to Convert PHP to USDC',
    comparisonDesc: 'Choose the best platform based on your needs',
    platformHeader: 'Platform',
    feeHeader: 'Fee',
    speedHeader: 'Speed',
    minHeader: 'Minimum',
    paymentHeader: 'Payment Methods',
    bestForHeader: 'Best For',
    recommended: 'Recommended',

    // Platform details
    coinsph: {
      name: 'Coins.ph',
      fee: '1-2%',
      speed: '5-15 min',
      min: 'P50',
      payments: 'GCash, Maya, BDO, BPI, UnionBank, InstaPay',
      bestFor: 'Beginners, simple process',
    },
    binanceP2P: {
      name: 'Binance P2P',
      fee: '0%',
      speed: '10-30 min',
      min: '~P500',
      payments: 'GCash, Maya, BDO, BPI, UnionBank, PESONet',
      bestFor: 'Lowest fees, large amounts',
    },
    pdax: {
      name: 'PDAX',
      fee: '0.5-1%',
      speed: '10-20 min',
      min: 'P100',
      payments: 'BDO, BPI, UnionBank, InstaPay, PESONet',
      bestFor: 'BSP-licensed, institutional traders',
    },

    // Step by Step
    stepByStepTitle: 'Step-by-Step: How to Convert PHP to USDC',
    stepByStepDesc: 'Follow these steps to convert your Philippine Peso to USDC',

    // Method 1: Coins.ph
    method1Title: 'Method 1: Coins.ph (Easiest)',
    method1Badge: 'Easiest',
    method1Desc: 'Most popular local exchange in the Philippines. BSP-licensed and easy to use.',
    method1Steps: [
      'Download the Coins.ph app and sign up',
      'Complete KYC verification (ID + selfie)',
      'Cash in using GCash, Maya, or bank transfer',
      'Go to "Convert" and select PHP to USDC',
      'Enter the amount and confirm the conversion',
      'Withdraw USDC to your wallet (Arbitrum network)',
    ],
    method1ProTip: 'Use InstaPay for faster cash-in (instant vs. 1-2 days for regular bank transfer).',

    // Method 2: Binance P2P
    method2Title: 'Method 2: Binance P2P (Lowest Fee)',
    method2Badge: 'Lowest Fee',
    method2Desc: 'P2P trading with 0% fee. Buy USDT first, then convert to USDC.',
    method2Steps: [
      'Download the Binance app and sign up',
      'Complete KYC verification',
      'Go to "P2P Trading" and select "Buy"',
      'Select USDT and filter by GCash or Maya',
      'Choose a trusted seller (check completion rate)',
      'Place an order and pay via GCash/Maya',
      'Once USDT is released, go to "Convert"',
      'Convert USDT to USDC (free)',
      'Withdraw USDC to your wallet (Arbitrum)',
    ],
    method2ProTip: 'Choose sellers with 95%+ completion rate and many completed trades. Never pay outside the platform.',

    // Method 3: PDAX
    method3Title: 'Method 3: PDAX (BSP-Regulated)',
    method3Badge: 'BSP-Regulated',
    method3Desc: 'BSP-licensed Philippine exchange. Great for those who want a regulated platform.',
    method3Steps: [
      'Sign up on PDAX and complete KYC',
      'Deposit PHP via bank transfer (InstaPay/PESONet)',
      'Go to "Trade" and select the USDC/PHP pair',
      'Buy USDC with PHP',
      'Withdraw USDC to your wallet',
    ],
    method3ProTip: 'PDAX is BSP-licensed so it is more regulated and secure, but may have higher spreads.',

    // Payment Methods
    paymentTitle: 'Payment Methods in the Philippines',
    paymentDesc: 'Ways to cash in to buy USDC',

    gcash: {
      name: 'GCash',
      desc: 'Most popular e-wallet in the Philippines',
      pros: ['Instant transfer', 'Wide availability', 'Easy to use'],
      speed: 'Instant',
      fee: 'Free - 2%',
    },
    maya: {
      name: 'Maya/PayMaya',
      desc: 'Popular alternative e-wallet',
      pros: ['Instant transfer', 'Cashback offers', 'Great app'],
      speed: 'Instant',
      fee: 'Free - 2%',
    },
    bdo: {
      name: 'BDO',
      desc: 'Largest bank in the Philippines',
      pros: ['Trusted bank', 'High limits', 'InstaPay support'],
      speed: '1-2 days (normal) / Instant (InstaPay)',
      fee: 'P15-25 (InstaPay)',
    },
    bpi: {
      name: 'BPI',
      desc: 'Second largest bank',
      pros: ['Reliable', 'Good online banking', 'InstaPay support'],
      speed: '1-2 days (normal) / Instant (InstaPay)',
      fee: 'P15-25 (InstaPay)',
    },
    unionbank: {
      name: 'UnionBank',
      desc: 'Digital-first bank',
      pros: ['Best digital experience', 'Fast transfers', 'InstaPay free'],
      speed: 'Instant (InstaPay)',
      fee: 'Free (InstaPay)',
    },
    instapay: {
      name: 'InstaPay',
      desc: 'Real-time interbank transfer',
      pros: ['Instant (24/7)', 'P50,000 limit per transaction', 'Many banks'],
      speed: 'Instant',
      fee: 'P15-25',
    },
    pesonet: {
      name: 'PESONet',
      desc: 'Batch interbank transfer',
      pros: ['Higher limits', 'Lower fees', 'Reliable'],
      speed: 'Same day (if before cut-off)',
      fee: 'P10-20',
    },

    // Pro Tips
    proTipsTitle: 'Pro Tips for Filipino Traders',
    proTips: [
      {
        icon: '1',
        title: 'Buy USDT First on Binance P2P',
        desc: 'More sellers and better rates for USDT than USDC. Just convert to USDC after (free on Binance).',
      },
      {
        icon: '2',
        title: 'Use InstaPay for Fast Transfers',
        desc: 'InstaPay is instant 24/7. Avoid regular bank transfers that take 1-2 days.',
      },
      {
        icon: '3',
        title: 'Trade During Working Hours',
        desc: 'More P2P sellers online during 9AM-9PM PHT. Better rates and faster transactions.',
      },
      {
        icon: '4',
        title: 'Don\'t Mention "Crypto" in Payment Notes',
        desc: 'Avoid writing "crypto", "USDC", or "Bitcoin" in payment notes. Your bank may flag your account.',
      },
      {
        icon: '5',
        title: 'Choose Arbitrum Network for Withdrawal',
        desc: 'Lower gas fees on Arbitrum compared to Ethereum mainnet. Note: Hyperliquid is on Arbitrum.',
      },
      {
        icon: '6',
        title: 'Verify the Seller Before Paying',
        desc: 'On P2P, check completion rate (95%+), number of trades (100+), and reviews before transacting.',
      },
    ],

    // Warning
    warningTitle: 'Important Reminders',
    warnings: [
      'Never pay outside the platform (escrow protection)',
      'Double check the wallet address before withdrawing',
      'Start with small amounts if you\'re a beginner',
      'Keep records of all transactions for tax purposes',
    ],

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What\'s the fastest way to convert PHP to USDC?',
        answer: 'Coins.ph is fastest for beginners because it\'s direct PHP to USDC. If you want the lowest fees, use Binance P2P (USDT first, then convert to USDC).',
      },
      {
        question: 'What\'s the minimum amount to convert?',
        answer: 'On Coins.ph, the minimum is just P50. On Binance P2P, it depends on the seller but typically P500-1,000 minimum order.',
      },
      {
        question: 'How long until USDC arrives in my wallet?',
        answer: 'After conversion, withdrawal to Arbitrum network takes 5-15 minutes. Depends on network congestion.',
      },
      {
        question: 'Is P2P trading safe?',
        answer: 'Yes, if you use the platform\'s escrow system. Never pay outside the app and choose trusted sellers with high completion rates.',
      },
      {
        question: 'Is KYC required to convert?',
        answer: 'Yes, all licensed exchanges (Coins.ph, Binance, PDAX) require KYC. You\'ll need a valid ID and selfie.',
      },
    ],

    // CTA
    ctaTitle: 'Ready to Start Trading?',
    ctaDesc: 'Once you have USDC, you can trade US stocks 24/7 on Hyperliquid. No US broker needed.',
    ctaButton: 'Go to Philippines Trading Guide',
    ctaSecondary: 'Or start trading now',

    // Language Toggle
    langToggle: 'English',
  },
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'Paano i-convert ang PHP sa USDC',
  'description': 'Kumpleto at step-by-step na gabay kung paano i-convert ang Philippine Peso (PHP) sa USDC gamit ang GCash, Maya, Coins.ph, Binance P2P, o PDAX para sa mga Filipino traders.',
  'image': 'https://equityperps.com/og-philippines-usdc.png',
  'totalTime': 'PT30M',
  'estimatedCost': {
    '@type': 'MonetaryAmount',
    'currency': 'PHP',
    'value': '0-50',
  },
  'supply': [
    {
      '@type': 'HowToSupply',
      'name': 'Philippine Peso (PHP)',
    },
    {
      '@type': 'HowToSupply',
      'name': 'Valid ID para sa KYC',
    },
  ],
  'tool': [
    {
      '@type': 'HowToTool',
      'name': 'GCash o Maya app',
    },
    {
      '@type': 'HowToTool',
      'name': 'Coins.ph, Binance, o PDAX account',
    },
    {
      '@type': 'HowToTool',
      'name': 'Crypto wallet (Rabby recommended)',
    },
  ],
  'step': [
    {
      '@type': 'HowToStep',
      'name': 'Mag-sign up sa exchange',
      'text': 'I-download ang Coins.ph, Binance, o PDAX app at kumpletuhin ang KYC verification.',
      'position': 1,
    },
    {
      '@type': 'HowToStep',
      'name': 'Mag-cash in ng PHP',
      'text': 'Gamitin ang GCash, Maya, o bank transfer para mag-deposit ng PHP sa exchange.',
      'position': 2,
    },
    {
      '@type': 'HowToStep',
      'name': 'Bumili ng USDC',
      'text': 'I-convert ang PHP sa USDC (o bumili muna ng USDT at i-convert sa USDC).',
      'position': 3,
    },
    {
      '@type': 'HowToStep',
      'name': 'I-withdraw sa wallet',
      'text': 'I-withdraw ang USDC sa iyong crypto wallet gamit ang Arbitrum network.',
      'position': 4,
    },
  ],
  'inLanguage': 'tl-PH',
  'author': {
    '@type': 'Organization',
    'name': 'EquityPerps',
    'url': 'https://equityperps.com',
  },
};

export default function PaanoIConvertPHPsaUSDC() {
  const [lang, setLang] = useState<'tl' | 'en'>('tl');
  const t = translations[lang];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section with Philippines Flag Colors */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background gradient with Philippines flag colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-gray-950 to-red-600/20" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

        {/* Language Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-gray-800/70 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('tl')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                lang === 'tl'
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Filipino
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{t.pageTitle}</span>
          </nav>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-red-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium rounded-full">
              {t.badge}
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl sm:text-2xl text-yellow-400 font-semibold mb-6">
            {t.heroSubtitle}
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            {t.heroDesc}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900/80 border border-blue-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{t.statTimeValue}</div>
              <div className="text-gray-400 text-sm">{t.statTime}</div>
            </div>
            <div className="bg-gray-900/80 border border-red-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-400">{t.statMinFeeValue}</div>
              <div className="text-gray-400 text-sm">{t.statMinFee}</div>
            </div>
            <div className="bg-gray-900/80 border border-yellow-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{t.statMethodsValue}</div>
              <div className="text-gray-400 text-sm">{t.statMethods}</div>
            </div>
            <div className="bg-gray-900/80 border border-blue-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{t.statMinValue}</div>
              <div className="text-gray-400 text-sm">{t.statMin}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.comparisonTitle}</h2>
          <p className="text-gray-400 text-center mb-8">{t.comparisonDesc}</p>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-500/10 via-yellow-500/10 to-red-500/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">{t.platformHeader}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">{t.feeHeader}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">{t.speedHeader}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">{t.minHeader}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">{t.bestForHeader}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {/* Coins.ph */}
                  <tr className="hover:bg-gray-800/50">
                    <td className="px-6 py-4">
                      <span className="text-white font-semibold">{t.coinsph.name}</span>
                      <span className="ml-2 text-xs text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded">{t.method1Badge}</span>
                    </td>
                    <td className="px-6 py-4 text-yellow-400">{t.coinsph.fee}</td>
                    <td className="px-6 py-4 text-gray-300">{t.coinsph.speed}</td>
                    <td className="px-6 py-4 text-gray-300">{t.coinsph.min}</td>
                    <td className="px-6 py-4 text-gray-400">{t.coinsph.bestFor}</td>
                  </tr>
                  {/* Binance P2P */}
                  <tr className="hover:bg-gray-800/50 bg-blue-500/5">
                    <td className="px-6 py-4">
                      <span className="text-white font-semibold">{t.binanceP2P.name}</span>
                      <span className="ml-2 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">{t.recommended}</span>
                    </td>
                    <td className="px-6 py-4 text-emerald-400 font-semibold">{t.binanceP2P.fee}</td>
                    <td className="px-6 py-4 text-gray-300">{t.binanceP2P.speed}</td>
                    <td className="px-6 py-4 text-gray-300">{t.binanceP2P.min}</td>
                    <td className="px-6 py-4 text-gray-400">{t.binanceP2P.bestFor}</td>
                  </tr>
                  {/* PDAX */}
                  <tr className="hover:bg-gray-800/50">
                    <td className="px-6 py-4">
                      <span className="text-white font-semibold">{t.pdax.name}</span>
                      <span className="ml-2 text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">{t.method3Badge}</span>
                    </td>
                    <td className="px-6 py-4 text-yellow-400">{t.pdax.fee}</td>
                    <td className="px-6 py-4 text-gray-300">{t.pdax.speed}</td>
                    <td className="px-6 py-4 text-gray-300">{t.pdax.min}</td>
                    <td className="px-6 py-4 text-gray-400">{t.pdax.bestFor}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Instructions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.stepByStepTitle}</h2>
          <p className="text-gray-400 text-center mb-12">{t.stepByStepDesc}</p>

          {/* Method 1: Coins.ph */}
          <div className="mb-8">
            <div className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 p-6 border-b border-yellow-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-black text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.method1Title}</h3>
                    <p className="text-gray-400">{t.method1Desc}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ol className="space-y-3">
                  {t.method1Steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                  <p className="text-yellow-400 text-sm">
                    <strong>Pro tip:</strong> {t.method1ProTip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Method 2: Binance P2P */}
          <div className="mb-8">
            <div className="bg-gray-900 border-2 border-blue-500/30 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-6 border-b border-blue-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white font-black text-xl">
                    2
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{t.method2Title}</h3>
                      <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">{t.recommended}</span>
                    </div>
                    <p className="text-gray-400">{t.method2Desc}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ol className="space-y-3">
                  {t.method2Steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                  <p className="text-blue-400 text-sm">
                    <strong>Pro tip:</strong> {t.method2ProTip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Method 3: PDAX */}
          <div className="mb-8">
            <div className="bg-gray-900 border-2 border-red-500/30 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 p-6 border-b border-red-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center text-white font-black text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.method3Title}</h3>
                    <p className="text-gray-400">{t.method3Desc}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ol className="space-y-3">
                  {t.method3Steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <p className="text-red-400 text-sm">
                    <strong>Pro tip:</strong> {t.method3ProTip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.paymentTitle}</h2>
          <p className="text-gray-400 text-center mb-12">{t.paymentDesc}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GCash */}
            <div className="bg-gray-900 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">G</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">{t.gcash.name}</h3>
                  <p className="text-gray-500 text-sm">{t.gcash.desc}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed:</span>
                  <span className="text-emerald-400">{t.gcash.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fee:</span>
                  <span className="text-yellow-400">{t.gcash.fee}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                {t.gcash.pros.map((pro, i) => (
                  <span key={i} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {pro}
                  </span>
                ))}
              </div>
            </div>

            {/* Maya */}
            <div className="bg-gray-900 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">M</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">{t.maya.name}</h3>
                  <p className="text-gray-500 text-sm">{t.maya.desc}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed:</span>
                  <span className="text-emerald-400">{t.maya.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fee:</span>
                  <span className="text-yellow-400">{t.maya.fee}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                {t.maya.pros.map((pro, i) => (
                  <span key={i} className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded">
                    {pro}
                  </span>
                ))}
              </div>
            </div>

            {/* BDO */}
            <div className="bg-gray-900 border border-red-500/30 rounded-xl p-6 hover:border-red-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-400 font-bold">B</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">{t.bdo.name}</h3>
                  <p className="text-gray-500 text-sm">{t.bdo.desc}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed:</span>
                  <span className="text-gray-300">{t.bdo.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fee:</span>
                  <span className="text-yellow-400">{t.bdo.fee}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                {t.bdo.pros.map((pro, i) => (
                  <span key={i} className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded">
                    {pro}
                  </span>
                ))}
              </div>
            </div>

            {/* BPI */}
            <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-yellow-400 font-bold">B</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">{t.bpi.name}</h3>
                  <p className="text-gray-500 text-sm">{t.bpi.desc}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed:</span>
                  <span className="text-gray-300">{t.bpi.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fee:</span>
                  <span className="text-yellow-400">{t.bpi.fee}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                {t.bpi.pros.map((pro, i) => (
                  <span key={i} className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded">
                    {pro}
                  </span>
                ))}
              </div>
            </div>

            {/* UnionBank */}
            <div className="bg-gray-900 border border-orange-500/30 rounded-xl p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 font-bold">U</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">{t.unionbank.name}</h3>
                  <p className="text-gray-500 text-sm">{t.unionbank.desc}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed:</span>
                  <span className="text-emerald-400">{t.unionbank.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fee:</span>
                  <span className="text-emerald-400">{t.unionbank.fee}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                {t.unionbank.pros.map((pro, i) => (
                  <span key={i} className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded">
                    {pro}
                  </span>
                ))}
              </div>
            </div>

            {/* InstaPay */}
            <div className="bg-gray-900 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">I</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">{t.instapay.name}</h3>
                  <p className="text-gray-500 text-sm">{t.instapay.desc}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed:</span>
                  <span className="text-emerald-400">{t.instapay.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fee:</span>
                  <span className="text-yellow-400">{t.instapay.fee}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                {t.instapay.pros.map((pro, i) => (
                  <span key={i} className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded">
                    {pro}
                  </span>
                ))}
              </div>
            </div>

            {/* PESONet */}
            <div className="bg-gray-900 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-colors col-span-full md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400 font-bold">P</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">{t.pesonet.name}</h3>
                  <p className="text-gray-500 text-sm">{t.pesonet.desc}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Speed:</span>
                  <span className="text-gray-300">{t.pesonet.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fee:</span>
                  <span className="text-emerald-400">{t.pesonet.fee}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                {t.pesonet.pros.map((pro, i) => (
                  <span key={i} className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">
                    {pro}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.proTipsTitle}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {t.proTips.map((tip, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                    i % 3 === 0 ? 'bg-blue-500/20 text-blue-400' :
                    i % 3 === 1 ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{tip.title}</h3>
                    <p className="text-gray-400 text-sm">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Warning Box */}
          <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <h3 className="text-red-400 font-bold mb-4">{t.warningTitle}</h3>
            <ul className="space-y-2">
              {t.warnings.map((warning, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-red-400 mt-1">!</span>
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.faqTitle}</h2>

          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 via-yellow-500/10 to-red-500/20 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              {t.ctaDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog/trade-us-stocks-from-philippines"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-blue-400 hover:to-blue-500 transition-all shadow-lg shadow-blue-500/25"
              >
                {t.ctaButton}
              </Link>
              <Link
                href="/start"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-lg hover:from-red-400 hover:to-red-500 transition-all shadow-lg shadow-red-500/25"
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
