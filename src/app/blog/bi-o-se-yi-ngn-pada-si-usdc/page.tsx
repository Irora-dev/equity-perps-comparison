'use client';

import { useState } from 'react';
import Link from 'next/link';

// Translation object with both Yoruba (yo) and English (en) versions
const translations = {
  en: {
    // Meta
    pageTitle: 'How to Convert NGN to USDC',
    pageSubtitle: 'Complete guide for Nigerian traders to convert Naira to USDC for crypto trading',

    // Breadcrumbs
    home: 'Home',
    blog: 'Blog',
    currentPage: 'NGN to USDC Guide',

    // Hero
    badge: 'Nigeria Currency Guide',
    heroTitle1: 'How to Convert',
    heroTitle2: 'NGN to USDC',
    heroDesc: 'Step-by-step guide for Nigerian traders to convert Naira to USDC using the best P2P platforms and payment methods available in Nigeria.',

    // Quick Stats
    statMethodsValue: '3+',
    statMethods: 'Conversion Methods',
    statTimeValue: '15-30 min',
    statTime: 'Average Time',
    statFeesValue: '0-1%',
    statFees: 'P2P Fees',
    statPaymentsValue: '8+',
    statPayments: 'Payment Options',

    // Comparison Table Section
    comparisonTitle: 'Best Platforms to Convert NGN to USDC',
    comparisonDesc: 'Compare the top platforms for converting Nigerian Naira to USDC',
    platformCol: 'Platform',
    feesCol: 'Fees',
    speedCol: 'Speed',
    liquidityCol: 'Liquidity',
    bestForCol: 'Best For',
    recommended: 'Most Popular',

    // Platform data
    binanceP2P: {
      name: 'Binance P2P',
      fees: '0%',
      speed: '15-30 min',
      liquidity: 'Highest',
      bestFor: 'Best rates, most sellers, Opay/Palmpay support',
    },
    quidax: {
      name: 'Quidax',
      fees: '0.5%',
      speed: '10-20 min',
      liquidity: 'High',
      bestFor: 'Local Nigerian exchange, easy for beginners',
    },
    luno: {
      name: 'Luno',
      fees: '1%',
      speed: '15-30 min',
      liquidity: 'Medium',
      bestFor: 'Established platform, bank deposits',
    },

    // Step by Step Section
    stepsTitle: 'Step-by-Step: Convert NGN to USDC',
    stepsDesc: 'Follow these steps to convert your Nigerian Naira to USDC',

    step1: {
      title: 'Create a Binance Account',
      desc: 'Sign up on Binance and complete KYC verification',
      details: [
        'Download the Binance app or visit binance.com',
        'Sign up with your email and phone number',
        'Complete identity verification (takes 10-30 minutes)',
        'Add your Nigerian bank account or mobile wallet',
      ],
    },
    step2: {
      title: 'Go to P2P Trading Section',
      desc: 'Navigate to the peer-to-peer marketplace',
      details: [
        'Open the Binance app and tap "P2P"',
        'Select "Buy" and choose USDT (more liquidity than USDC)',
        'Set your currency to NGN',
        'Filter by your preferred payment method',
      ],
    },
    step3: {
      title: 'Select a Verified Seller',
      desc: 'Choose a trustworthy seller with good reviews',
      details: [
        'Look for sellers with 95%+ completion rate',
        'Check the number of completed orders (100+ is good)',
        'Verify they accept your payment method (Opay, Palmpay, Bank)',
        'Compare rates to get the best deal',
      ],
    },
    step4: {
      title: 'Complete the Payment',
      desc: 'Pay the seller using your preferred method',
      details: [
        'Enter the amount of USDT you want to buy',
        'Click "Buy" to start the transaction',
        'Pay the seller within the time limit (usually 15 minutes)',
        'Mark payment as completed and wait for release',
      ],
    },
    step5: {
      title: 'Convert USDT to USDC',
      desc: 'Swap your USDT to USDC on Binance (free)',
      details: [
        'Go to "Convert" in the Binance app',
        'Select USDT as the "From" currency',
        'Select USDC as the "To" currency',
        'Confirm the conversion (0% fee on Binance)',
      ],
    },
    step6: {
      title: 'Withdraw to Your Wallet',
      desc: 'Send USDC to your trading wallet',
      details: [
        'Go to "Withdraw" and select USDC',
        'Enter your wallet address (e.g., Rabby wallet)',
        'Choose Arbitrum network for lower fees',
        'Confirm withdrawal and wait for arrival (2-5 minutes)',
      ],
    },

    // Payment Methods Section
    paymentTitle: 'Supported Payment Methods in Nigeria',
    paymentDesc: 'Popular ways to pay for USDC via P2P in Nigeria',
    mostPopular: 'Most Popular',

    opay: {
      name: 'Opay',
      desc: 'Most popular mobile wallet in Nigeria. Instant transfers, widely accepted by P2P sellers.',
      tag: 'Most Popular',
    },
    palmpay: {
      name: 'Palmpay',
      desc: 'Fast mobile payments with competitive rates. Growing seller base on Binance P2P.',
      tag: 'Fast',
    },
    chipper: {
      name: 'Chipper Cash',
      desc: 'Cross-border mobile money. Good for smaller transactions.',
      tag: 'Mobile',
    },
    gtbank: {
      name: 'GTBank',
      desc: 'Major Nigerian bank. Direct transfers accepted by most sellers.',
      tag: 'Bank',
    },
    access: {
      name: 'Access Bank',
      desc: 'Reliable bank transfers. Good for larger amounts.',
      tag: 'Bank',
    },
    firstbank: {
      name: 'First Bank',
      desc: 'Established bank with wide coverage. Some sellers prefer this.',
      tag: 'Bank',
    },
    kuda: {
      name: 'Kuda Bank',
      desc: 'Digital bank popular with younger traders. Free transfers.',
      tag: 'Digital',
    },
    bankTransfer: {
      name: 'Bank Transfer',
      desc: 'Direct NIBSS transfer from any Nigerian bank. Universal acceptance.',
      tag: 'Universal',
    },

    // Pro Tips Section
    proTipsTitle: 'Pro Tips for P2P Safety in Nigeria',
    proTipsDesc: 'Stay safe while converting NGN to USDC',

    tips: [
      {
        icon: 'shield',
        title: 'Only Trade Within Platform',
        desc: 'Never move transactions outside Binance P2P. The escrow system protects you.',
      },
      {
        icon: 'check',
        title: 'Verify Seller Reputation',
        desc: 'Trade with sellers who have 95%+ completion rate and 100+ orders.',
      },
      {
        icon: 'clock',
        title: 'Pay Within Time Limit',
        desc: 'Complete payment within 15 minutes to avoid order cancellation.',
      },
      {
        icon: 'camera',
        title: 'Keep Payment Proof',
        desc: 'Screenshot all transactions. Useful for disputes (rare but possible).',
      },
      {
        icon: 'warning',
        title: 'Avoid Crypto Keywords',
        desc: 'Don\'t mention "crypto" or "Bitcoin" in bank transfer notes.',
      },
      {
        icon: 'test',
        title: 'Start with Small Amounts',
        desc: 'Test sellers with small transactions before doing larger ones.',
      },
    ],

    // CTA Section
    ctaTitle: 'Ready to Start Trading?',
    ctaDesc: 'Once you have USDC, you can trade US stocks 24/7 from Nigeria with no broker required.',
    ctaButton: 'Go to Nigeria Trading Guide',

    // FAQ Section
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is the best rate for NGN to USDC?',
        answer: 'Binance P2P typically offers the best rates for NGN to USDC conversion. Rates vary based on market conditions, but P2P rates are usually better than direct exchange rates. Compare multiple sellers before buying.',
      },
      {
        question: 'Is it safe to use P2P in Nigeria?',
        answer: 'Yes, when using major platforms like Binance P2P. The escrow system holds the seller\'s crypto until you confirm payment. Only trade with verified sellers who have high completion rates. Never trade outside the platform.',
      },
      {
        question: 'How long does the conversion take?',
        answer: 'The entire process typically takes 15-30 minutes. P2P payment and release takes 10-15 minutes, USDT to USDC conversion is instant, and withdrawal to your wallet takes 2-5 minutes on Arbitrum.',
      },
      {
        question: 'Why buy USDT first instead of USDC directly?',
        answer: 'USDT has much higher liquidity on Nigerian P2P markets, meaning better rates and more sellers. You can convert USDT to USDC for free on Binance, so this route is usually cheaper overall.',
      },
      {
        question: 'What is the minimum amount I can convert?',
        answer: 'Most P2P sellers have minimums around 10,000-50,000 NGN (~$6-30). You can start small to test the process before converting larger amounts.',
      },
      {
        question: 'Do I need KYC to use P2P?',
        answer: 'Yes, Binance requires identity verification (KYC) to use P2P trading. This typically involves uploading your Nigerian ID (NIN, driver\'s license, or passport) and taking a selfie. Verification usually takes 10-30 minutes.',
      },
    ],

    // Footer
    languageToggleLabel: 'Language',
  },
  yo: {
    // Meta
    pageTitle: 'Bi O Se Yi NGN Pada Si USDC',
    pageSubtitle: 'Itosona pipe fun awon onisowo Naijiria lati yi Naira pada si USDC fun tita crypto',

    // Breadcrumbs
    home: 'Ile',
    blog: 'Bulogi',
    currentPage: 'Itosona NGN si USDC',

    // Hero
    badge: 'Itosona Owo Naijiria',
    heroTitle1: 'Bi O Se Yi',
    heroTitle2: 'NGN Pada Si USDC',
    heroDesc: 'Itosona igbese-nipa-igbese fun awon onisowo Naijiria lati yi Naira pada si USDC nipa lilo awon pepe P2P to dara julọ ati awon ona isanwo ti o wa ni Naijiria.',

    // Quick Stats
    statMethodsValue: '3+',
    statMethods: 'Awon Ona Iyipada',
    statTimeValue: '15-30 iseju',
    statTime: 'Akoko Aarin',
    statFeesValue: '0-1%',
    statFees: 'Awon Owo P2P',
    statPaymentsValue: '8+',
    statPayments: 'Awon Asayan Isanwo',

    // Comparison Table Section
    comparisonTitle: 'Awon Pepe To Dara Julọ Lati Yi NGN Pada Si USDC',
    comparisonDesc: 'Ṣe afiwe awon pepe to dara julọ fun yiyi Naira Naijiria pada si USDC',
    platformCol: 'Pepe',
    feesCol: 'Awon Owo',
    speedCol: 'Iyara',
    liquidityCol: 'Liquidity',
    bestForCol: 'To Dara Julọ Fun',
    recommended: 'Olokiki Julọ',

    // Platform data
    binanceP2P: {
      name: 'Binance P2P',
      fees: '0%',
      speed: '15-30 iseju',
      liquidity: 'Ga Julọ',
      bestFor: 'Awon idiyele to dara julọ, awon olutaja to po julọ, atileyin Opay/Palmpay',
    },
    quidax: {
      name: 'Quidax',
      fees: '0.5%',
      speed: '10-20 iseju',
      liquidity: 'Ga',
      bestFor: 'Paṣipaarọ Naijiria agbegbe, rọrun fun awon olubere',
    },
    luno: {
      name: 'Luno',
      fees: '1%',
      speed: '15-30 iseju',
      liquidity: 'Aarin',
      bestFor: 'Pepe ti a ti fi idi mule, awon ifowopamo banki',
    },

    // Step by Step Section
    stepsTitle: 'Igbese-nipa-Igbese: Yi NGN Pada Si USDC',
    stepsDesc: 'Tele awon igbese wonyi lati yi Naira Naijiria re pada si USDC',

    step1: {
      title: 'Se Akanti Binance',
      desc: 'Forukọsile lori Binance ki o pari ijeri KYC',
      details: [
        'Gba ohun elo Binance tabi lo binance.com',
        'Forukọsile pelu imeeli ati nomba foonu re',
        'Pari ijeri idanimọ (gba iseju 10-30)',
        'Fi akanti banki Naijiria re tabi apamọwọ alagbeka kun',
      ],
    },
    step2: {
      title: 'Lọ Si Apa Tita P2P',
      desc: 'Lo si ọja ẹlẹgbẹ-si-ẹlẹgbẹ',
      details: [
        'Si ohun elo Binance ki o tẹ "P2P"',
        'Yan "Buy" ki o yan USDT (liquidity diẹ sii ju USDC)',
        'Ṣeto owo re si NGN',
        'Ṣe àlẹmọ nipa ona isanwo ti o fẹ',
      ],
    },
    step3: {
      title: 'Yan Olutaja Ti A Ti Jeri',
      desc: 'Yan olutaja ti o ni igbẹkẹle pelu awon atunwo to dara',
      details: [
        'Wa awon olutaja ti o ni oṣuwọn ipari 95%+',
        'Ṣayẹwo nọmba awon aṣẹ ti a pari (100+ dara)',
        'Jẹri pe wọn gba ona isanwo re (Opay, Palmpay, Banki)',
        'Ṣe afiwe awon idiyele lati gba adehun to dara julọ',
      ],
    },
    step4: {
      title: 'Pari Isanwo Naa',
      desc: 'San olutaja nipa lilo ona ti o fẹ',
      details: [
        'Tẹ iye USDT ti o fẹ ra',
        'Tẹ "Buy" lati bẹrẹ iṣowo naa',
        'San olutaja laarin opin akoko (nigbagbogbo iseju 15)',
        'Ṣe ami isanwo bi ti pari ki o duro fun itusilẹ',
      ],
    },
    step5: {
      title: 'Yi USDT Pada Si USDC',
      desc: 'Paarọ USDT re si USDC lori Binance (ọfẹ)',
      details: [
        'Lọ si "Convert" ninu ohun elo Binance',
        'Yan USDT bi owo "Lati"',
        'Yan USDC bi owo "Si"',
        'Jẹri iyipada (owo 0% lori Binance)',
      ],
    },
    step6: {
      title: 'Yọkuro Si Apamọwọ Re',
      desc: 'Fi USDC ranṣẹ si apamọwọ tita re',
      details: [
        'Lọ si "Withdraw" ki o yan USDC',
        'Tẹ adirẹsi apamọwọ re (f.a., apamọwọ Rabby)',
        'Yan nẹtiwọki Arbitrum fun awon owo kekere',
        'Jẹri yiyọkuro ki o duro fun dide (iseju 2-5)',
      ],
    },

    // Payment Methods Section
    paymentTitle: 'Awon Ona Isanwo Ti A Ṣe Atilẹyin Ni Naijiria',
    paymentDesc: 'Awon ona olokiki lati san fun USDC nipasẹ P2P ni Naijiria',
    mostPopular: 'Olokiki Julọ',

    opay: {
      name: 'Opay',
      desc: 'Apamọwọ alagbeka olokiki julọ ni Naijiria. Awon gbigbe lẹsẹkẹsẹ, awon olutaja P2P gba ni ibigbogbo.',
      tag: 'Olokiki Julọ',
    },
    palmpay: {
      name: 'Palmpay',
      desc: 'Awon isanwo alagbeka ti o yara pẹlu awon idiyele idije. Ipile olutaja dagba lori Binance P2P.',
      tag: 'Yara',
    },
    chipper: {
      name: 'Chipper Cash',
      desc: 'Owo alagbeka agbelebu-aala. O dara fun awon iṣowo kekere.',
      tag: 'Alagbeka',
    },
    gtbank: {
      name: 'GTBank',
      desc: 'Banki Naijiria pataki. Awon olutaja julọ gba awon gbigbe taara.',
      tag: 'Banki',
    },
    access: {
      name: 'Access Bank',
      desc: 'Awon gbigbe banki igbẹkẹle. O dara fun awon iye nla.',
      tag: 'Banki',
    },
    firstbank: {
      name: 'First Bank',
      desc: 'Banki ti a ti fi idi mulẹ pẹlu ibode gbooro. Awon olutaja kan fẹ eyi.',
      tag: 'Banki',
    },
    kuda: {
      name: 'Kuda Bank',
      desc: 'Banki dijitali olokiki pẹlu awon onisowo ọdọ. Awon gbigbe ọfẹ.',
      tag: 'Dijitali',
    },
    bankTransfer: {
      name: 'Gbigbe Banki',
      desc: 'Gbigbe NIBSS taara lati banki Naijiria eyikeyi. Gbigba gbogbo agbaye.',
      tag: 'Gbogbo agbaye',
    },

    // Pro Tips Section
    proTipsTitle: 'Awon Imọran Pro Fun Aabo P2P Ni Naijiria',
    proTipsDesc: 'Wa ni aabo lakoko ti o n yi NGN pada si USDC',

    tips: [
      {
        icon: 'shield',
        title: 'Ta Nikan Laarin Pepe',
        desc: 'Maṣe gbe awon iṣowo kuro ni Binance P2P. Eto escrow naa daabo bo re.',
      },
      {
        icon: 'check',
        title: 'Jẹri Orukọ Olutaja',
        desc: 'Ṣe tita pẹlu awon olutaja ti o ni oṣuwọn ipari 95%+ ati awon aṣẹ 100+.',
      },
      {
        icon: 'clock',
        title: 'San Laarin Opin Akoko',
        desc: 'Pari isanwo laarin iseju 15 lati yago fun pipa aṣẹ.',
      },
      {
        icon: 'camera',
        title: 'Pa Ẹri Isanwo Mọ',
        desc: 'Ya aworan iboju gbogbo awon iṣowo. Wulo fun awon ariyanjiyan (ṣọwọn ṣugbọn o ṣeeṣe).',
      },
      {
        icon: 'warning',
        title: 'Yago Fun Awon Ọrọ-pataki Crypto',
        desc: 'Maṣe darukọ "crypto" tabi "Bitcoin" ninu awon akọsilẹ gbigbe banki.',
      },
      {
        icon: 'test',
        title: 'Bẹrẹ Pẹlu Awon Iye Kekere',
        desc: 'Dan awon olutaja pẹlu awon iṣowo kekere ṣaaju ṣiṣe awon ti o tobi.',
      },
    ],

    // CTA Section
    ctaTitle: 'Ṣetan Lati Bẹrẹ Tita?',
    ctaDesc: 'Ni kete ti o ba ni USDC, o le ta awon ọja US 24/7 lati Naijiria laisi alagbata.',
    ctaButton: 'Lọ Si Itọsọna Tita Naijiria',

    // FAQ Section
    faqTitle: 'Awon Ibeere Ti A Beere Nigbagbogbo',
    faqs: [
      {
        question: 'Kini idiyele to dara julọ fun NGN si USDC?',
        answer: 'Binance P2P ni igbagbogbo nfunni awon idiyele to dara julọ fun iyipada NGN si USDC. Awon idiyele yatọ da lori awon ipo ọja, ṣugbọn awon idiyele P2P ni igbagbogbo dara ju awon idiyele paṣipaarọ taara. Ṣe afiwe awon olutaja lọpọlọpọ ṣaaju rira.',
      },
      {
        question: 'Ṣe o jẹ ailewu lati lo P2P ni Naijiria?',
        answer: 'Bẹẹni, nigbati o ba nlo awon pepe pataki bi Binance P2P. Eto escrow naa di crypto olutaja titi iwọ o fi jẹri isanwo. Ta nikan pẹlu awon olutaja ti a ti jẹri ti o ni awon oṣuwọn ipari giga. Maṣe ta ni ita pepe.',
      },
      {
        question: 'Bawo ni akoko ti iyipada fi gun to?',
        answer: 'Ilana odidi ni igbagbogbo gba iseju 15-30. Isanwo P2P ati itusilẹ gba iseju 10-15, iyipada USDT si USDC jẹ lẹsẹkẹsẹ, ati yiyọkuro si apamọwọ re gba iseju 2-5 lori Arbitrum.',
      },
      {
        question: 'Kini idi ti o fi ra USDT lakoko dipo USDC taara?',
        answer: 'USDT ni liquidity ti o ga pupọ lori awon ọja P2P Naijiria, ti o tumọ si awon idiyele to dara ati awon olutaja diẹ sii. O le yi USDT pada si USDC fun ọfẹ lori Binance, nitorina ona yi ni igbagbogbo din owo lapapọ.',
      },
      {
        question: 'Kini iye ti o kere julọ ti mo le yi pada?',
        answer: 'Ọpọlọpọ awon olutaja P2P ni awon ti o kere ju ti o wa ni ayika 10,000-50,000 NGN (~$6-30). O le bẹrẹ kekere lati dan ilana naa ṣaaju yiyi awon iye nla pada.',
      },
      {
        question: 'Ṣe mo nilo KYC lati lo P2P?',
        answer: 'Bẹẹni, Binance nilo ijẹri idanimọ (KYC) lati lo tita P2P. Eyi ni igbagbogbo kan gbigbe ID Naijiria re jade (NIN, iwe-aṣẹ awakọ, tabi iwe irinna) ati yiya aworan-ara. Ijẹri ni igbagbogbo gba iseju 10-30.',
      },
    ],

    // Footer
    languageToggleLabel: 'Ede',
  },
};

export default function NGNToUSDCGuidePage() {
  const [lang, setLang] = useState<'en' | 'yo'>('en');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Convert NGN to USDC",
            "description": "Complete guide for Nigerian traders to convert Naira to USDC using P2P platforms like Binance, with payment methods including Opay, Palmpay, and bank transfers.",
            "image": "https://compareequityperps.com/og-nigeria-usdc.png",
            "totalTime": "PT30M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "NGN",
              "value": "0-1%"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Nigerian Naira (NGN)"
              },
              {
                "@type": "HowToSupply",
                "name": "Binance Account"
              },
              {
                "@type": "HowToSupply",
                "name": "Payment Method (Opay, Palmpay, or Bank)"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Binance P2P"
              },
              {
                "@type": "HowToTool",
                "name": "Crypto Wallet (e.g., Rabby)"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Create Binance Account",
                "text": "Sign up on Binance and complete KYC verification with your Nigerian ID."
              },
              {
                "@type": "HowToStep",
                "name": "Go to P2P Trading",
                "text": "Navigate to P2P section and select Buy USDT with NGN."
              },
              {
                "@type": "HowToStep",
                "name": "Select Verified Seller",
                "text": "Choose a seller with 95%+ completion rate who accepts your payment method."
              },
              {
                "@type": "HowToStep",
                "name": "Complete Payment",
                "text": "Pay using Opay, Palmpay, or bank transfer within the time limit."
              },
              {
                "@type": "HowToStep",
                "name": "Convert to USDC",
                "text": "Use Binance Convert to swap USDT to USDC for free."
              },
              {
                "@type": "HowToStep",
                "name": "Withdraw to Wallet",
                "text": "Withdraw USDC to your trading wallet on Arbitrum network."
              }
            ],
            "author": {
              "@type": "Organization",
              "name": "Compare Equity Perps",
              "url": "https://compareequityperps.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Compare Equity Perps",
              "url": "https://compareequityperps.com"
            },
            "datePublished": "2026-01-04",
            "dateModified": "2026-01-04",
            "inLanguage": ["en", "yo"],
            "keywords": ["How to convert NGN to USDC", "Ṣe àyípadà NGN sí USDC", "Nigerian crypto", "Binance P2P Nigeria", "Opay crypto", "Palmpay USDC"]
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Nigeria flag gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-gray-950 to-white/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        {/* Language Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-gray-800/70 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('yo')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                lang === 'yo'
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Yoruba
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{t.currentPage}</span>
          </nav>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
              {t.badge}
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {t.heroTitle1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">
              {t.heroTitle2}
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            {t.heroDesc}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900/80 border border-green-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statMethodsValue}</div>
              <div className="text-gray-400 text-sm">{t.statMethods}</div>
            </div>
            <div className="bg-gray-900/80 border border-green-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statTimeValue}</div>
              <div className="text-gray-400 text-sm">{t.statTime}</div>
            </div>
            <div className="bg-gray-900/80 border border-green-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statFeesValue}</div>
              <div className="text-gray-400 text-sm">{t.statFees}</div>
            </div>
            <div className="bg-gray-900/80 border border-green-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statPaymentsValue}</div>
              <div className="text-gray-400 text-sm">{t.statPayments}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison Table */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            {t.comparisonTitle}
          </h2>
          <p className="text-gray-400 text-center mb-8">{t.comparisonDesc}</p>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.platformCol}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.feesCol}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.speedCol}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.liquidityCol}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.bestForCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {/* Binance P2P - Most Popular */}
                  <tr className="hover:bg-gray-800/30 bg-green-500/5">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold">{t.binanceP2P.name}</span>
                        <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-500/30">
                          {t.recommended}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-green-400 font-semibold">{t.binanceP2P.fees}</td>
                    <td className="px-6 py-4 text-gray-300">{t.binanceP2P.speed}</td>
                    <td className="px-6 py-4 text-green-400">{t.binanceP2P.liquidity}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{t.binanceP2P.bestFor}</td>
                  </tr>
                  {/* Quidax */}
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4">
                      <span className="text-white font-semibold">{t.quidax.name}</span>
                    </td>
                    <td className="px-6 py-4 text-yellow-400">{t.quidax.fees}</td>
                    <td className="px-6 py-4 text-gray-300">{t.quidax.speed}</td>
                    <td className="px-6 py-4 text-gray-300">{t.quidax.liquidity}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{t.quidax.bestFor}</td>
                  </tr>
                  {/* Luno */}
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4">
                      <span className="text-white font-semibold">{t.luno.name}</span>
                    </td>
                    <td className="px-6 py-4 text-yellow-400">{t.luno.fees}</td>
                    <td className="px-6 py-4 text-gray-300">{t.luno.speed}</td>
                    <td className="px-6 py-4 text-gray-300">{t.luno.liquidity}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{t.luno.bestFor}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Instructions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            {t.stepsTitle}
          </h2>
          <p className="text-gray-400 text-center mb-12">{t.stepsDesc}</p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-gray-900 border border-green-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.step1.title}</h3>
                  <p className="text-gray-400 text-sm">{t.step1.desc}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {t.step1.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.step2.title}</h3>
                  <p className="text-gray-400 text-sm">{t.step2.desc}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {t.step2.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.step3.title}</h3>
                  <p className="text-gray-400 text-sm">{t.step3.desc}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {t.step3.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.step4.title}</h3>
                  <p className="text-gray-400 text-sm">{t.step4.desc}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {t.step4.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 5 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.step5.title}</h3>
                  <p className="text-gray-400 text-sm">{t.step5.desc}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {t.step5.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 6 */}
            <div className="bg-gray-900 border border-green-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-xl">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.step6.title}</h3>
                  <p className="text-gray-400 text-sm">{t.step6.desc}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {t.step6.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            {t.paymentTitle}
          </h2>
          <p className="text-gray-400 text-center mb-8">{t.paymentDesc}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Opay - Most Popular */}
            <div className="bg-gray-900 border-2 border-green-500/30 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold">{t.opay.name}</h3>
                <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                  {t.opay.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{t.opay.desc}</p>
            </div>

            {/* Palmpay */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold">{t.palmpay.name}</h3>
                <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full">
                  {t.palmpay.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{t.palmpay.desc}</p>
            </div>

            {/* Chipper Cash */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold">{t.chipper.name}</h3>
                <span className="text-xs text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full">
                  {t.chipper.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{t.chipper.desc}</p>
            </div>

            {/* GTBank */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold">{t.gtbank.name}</h3>
                <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full">
                  {t.gtbank.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{t.gtbank.desc}</p>
            </div>

            {/* Access Bank */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold">{t.access.name}</h3>
                <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full">
                  {t.access.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{t.access.desc}</p>
            </div>

            {/* First Bank */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold">{t.firstbank.name}</h3>
                <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full">
                  {t.firstbank.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{t.firstbank.desc}</p>
            </div>

            {/* Kuda */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold">{t.kuda.name}</h3>
                <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">
                  {t.kuda.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{t.kuda.desc}</p>
            </div>

            {/* Bank Transfer */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold">{t.bankTransfer.name}</h3>
                <span className="text-xs text-gray-400 bg-gray-400/10 px-2 py-0.5 rounded-full">
                  {t.bankTransfer.tag}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{t.bankTransfer.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            {t.proTipsTitle}
          </h2>
          <p className="text-gray-400 text-center mb-8">{t.proTipsDesc}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.tips.map((tip, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  tip.icon === 'shield' ? 'bg-green-500/20 text-green-400' :
                  tip.icon === 'check' ? 'bg-cyan-500/20 text-cyan-400' :
                  tip.icon === 'clock' ? 'bg-yellow-500/20 text-yellow-400' :
                  tip.icon === 'camera' ? 'bg-purple-500/20 text-purple-400' :
                  tip.icon === 'warning' ? 'bg-red-500/20 text-red-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {tip.icon === 'shield' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {tip.icon === 'check' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {tip.icon === 'clock' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {tip.icon === 'camera' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {tip.icon === 'warning' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                  {tip.icon === 'test' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  )}
                </div>
                <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-400 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {t.faqTitle}
          </h2>

          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <details key={index} className="bg-gray-900 border border-gray-800 rounded-xl group">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                  <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                  <span className="text-green-400 group-open:rotate-180 transition-transform flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-400">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-500/20 to-white/10 border border-green-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              {t.ctaDesc}
            </p>
            <Link
              href="/blog/trade-us-stocks-from-nigeria"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all shadow-lg shadow-green-500/25"
            >
              {t.ctaButton}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {lang === 'en' ? 'Back to all guides' : 'Pada si gbogbo awon itosona'}
          </Link>
        </div>
      </section>
    </div>
  );
}
