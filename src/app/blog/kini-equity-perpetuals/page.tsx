'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';
import { LanguageToggle } from '@/components/LanguageToggle';

// Translation object with both Yoruba (yo) and English (en) versions
const translations = {
  en: {
    // Meta
    pageTitle: 'What Are Equity Perpetuals?',

    // Breadcrumbs
    home: 'Home',
    blog: 'Learn',
    currentPage: 'What Are Equity Perpetuals',

    // Hero
    badge: 'Beginner Guide',
    nigeriaBadge: 'Nigeria Guide',
    heroTitle1: 'What Are',
    heroTitle2: 'Equity Perpetuals?',
    heroDesc: 'Trade',
    heroStocks: 'Tesla, Nvidia, and Apple',
    heroDesc2: 'at',
    heroTime: '2am on a Saturday',
    heroDesc3: 'with',
    heroLeverage: '50x leverage',
    heroDesc4: '. No broker. No approval. Just you and the markets.',

    // Stats
    stat1Value: '24',
    stat1Label: 'Hours a Day',
    stat1Sub: '7 days a week',
    stat2Value: '200x',
    stat2Label: 'Max Leverage',
    stat2Sub: 'Capital efficient',
    stat3Value: '50+',
    stat3Label: 'Stocks Available',
    stat3Sub: 'Top US equities',

    // CTA buttons
    learnMore: 'Learn More',
    startTrading: 'Start Trading Now',

    // Simple explanation
    simpleTitle: 'The',
    simpleTitleHighlight: 'Simple',
    simpleTitle2: 'Explanation',
    simpleDesc: 'An equity perpetual is a contract that tracks a stock price. That\'s it.',
    thinkLikeThis: 'Think of it like this:',
    step1: 'You think',
    step1Bold: 'NVDA will go up',
    step2: 'You open a',
    step2Bold: 'long position',
    step2End: 'with $100',
    step3: 'With 10x leverage, you control',
    step3Bold: '$1,000 of exposure',
    step4: 'NVDA goes up 5% = you make',
    step4Bold: '$50 (50% return)',
    positionLabel: 'Your Position',
    marginLabel: 'Margin',
    positionSizeLabel: 'Position Size',
    unrealizedPnl: 'Unrealized P&L',
    neverExpire: 'Unlike regular futures, perpetuals',
    neverExpireBold: 'never expire',
    neverExpireEnd: '. Hold for 5 minutes or 5 months.',

    // Benefits
    benefitsTitle: 'Why Traders Are',
    benefitsTitleHighlight: 'Switching',
    benefitsDesc: 'Equity perps solve the biggest frustrations with traditional stock trading',
    benefit1Title: 'Trade 24/7',
    benefit1Desc: 'Markets never close. Trade Tesla at midnight, Apple on Sunday, Nvidia on Christmas. React to news in real-time, not the next morning.',
    benefit2Title: 'Up to 200x Leverage',
    benefit2Desc: 'Control $10,000 of stock with $50. Amplify your gains (and losses). Far more capital efficient than traditional margin accounts.',
    benefit3Title: 'Easy Short Selling',
    benefit3Desc: 'Think a stock will drop? Go short instantly. No borrowing shares, no hard-to-borrow fees, no restrictions. Just click sell.',
    benefit4Title: 'No KYC Required',
    benefit4Desc: 'No ID upload. No waiting for approval. No personal data collected. Connect your wallet and start trading in minutes.',
    benefit5Title: 'Self-Custody',
    benefit5Desc: 'Your funds stay in your wallet. No broker holding your money. No freezes. No withdrawal limits. You control your assets.',
    benefit6Title: 'Instant Settlement',
    benefit6Desc: 'No T+2 waiting period. Profits are available immediately. Close a position and withdraw to your wallet in seconds.',

    // How it works
    howItWorksTitle: 'How It',
    howItWorksTitleHighlight: 'Actually',
    howItWorksTitle2: 'Works',
    howItWorksDesc: 'The mechanics behind equity perpetuals in plain English',
    oracle1: 'Oracle Price Feeds',
    oracle1Desc: 'Equity perps track real stock prices using',
    oracle1Bold: 'oracles',
    oracle1Desc2: '- services that pull live price data from stock exchanges and deliver it on-chain. Providers like Pyth aggregate prices from multiple sources to ensure accuracy.',
    oracle1Note: 'Updated every second during market hours',
    funding2: 'Funding Rates Keep Prices Aligned',
    funding2Desc: 'Every 1-8 hours, traders pay or receive',
    funding2Bold: 'funding',
    funding2Desc2: 'based on whether the perp price is above or below the oracle price. If perps trade above spot, longs pay shorts (pushing price down). This keeps perp prices closely tracking real stock prices.',
    fundingAbove: 'Perp > Spot',
    fundingAboveDesc: 'Longs pay shorts',
    fundingBelow: 'Perp < Spot',
    fundingBelowDesc: 'Shorts pay longs',
    leverage3: 'Leverage & Liquidation',
    leverage3Desc: 'Your',
    leverage3Bold: 'margin',
    leverage3Desc2: 'is the collateral backing your position. With 10x leverage, a 10% adverse move would wipe out your margin. Before that happens, you get',
    leverage3Bold2: 'liquidated',
    leverage3Desc3: '- your position is automatically closed to prevent further losses.',
    leverageProTip: 'Pro tip:',
    leverageProTipText: 'Start with 2-5x leverage. Many beginners use 20x+ and get liquidated on normal volatility. Lower leverage = more room to be wrong.',

    // Getting started
    gettingStartedBadge: 'Less Than 10 Minutes',
    gettingStartedTitle: 'Get Set Up in',
    gettingStartedTitleHighlight: '3 Simple Steps',
    gettingStartedDesc: 'No application forms. No approval wait. No minimum balance.',

    // Step 1
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    showDetails: 'Show Details',
    hideDetails: 'Hide Details',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainBold: 'digital bank account',
    walletExplainDesc2: 'that you fully control. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeature1: 'You control it',
    walletFeature2: 'Completely free',
    walletFeature3: '2 min setup',
    walletFeature4: 'Works globally',
    walletSetupTitle: 'Here\'s how to set it up:',
    walletStep1: 'Go to',
    walletStep2: 'Click "Download" and add it to your browser (Chrome, Firefox, etc.)',
    walletStep3: 'Click "Create New Wallet" and set a password',
    walletStep4: 'Write down your 12-word recovery phrase',
    walletStep4Warning: 'This is like a master password - keep it safe and never share it!',
    watchSetupGuide: 'Watch: 2-Minute Setup Guide',
    videoDesc: 'This video walks you through every step. Follow along and you\'ll have your wallet ready in no time.',
    downloadRabby: 'Download Rabby',

    // Step 2
    step2Title: 'Fund with USDC',
    step2Desc: 'Transfer from Coinbase, Kraken, or Binance - or use card',
    fromCoinbase: 'From Coinbase',
    coinbaseSteps: ['Go to Send/Receive', 'Select USDC', 'Paste your Rabby address', 'Choose Arbitrum network', 'Confirm send'],
    coinbaseFee: 'Fee: ~$0.10 on Arbitrum',
    fromKraken: 'From Kraken',
    krakenSteps: ['Go to Funding > Withdraw', 'Search USDC', 'Add your Rabby address', 'Select Arbitrum One', 'Confirm with 2FA'],
    krakenFee: 'Fee: ~$1-3',
    fromBinance: 'From Binance',
    binanceSteps: ['Wallet > Withdraw', 'Select USDC', 'Paste your Rabby address', 'Network: Arbitrum', 'Complete verification'],
    binanceFee: 'Fee: ~$0.50',
    fundingProTip: 'Pro tip:',
    fundingProTipText: 'Always use Arbitrum network for lowest fees. Start with $50-100 to test. Funds arrive in 1-5 minutes.',

    // Step 3
    step3Title: 'Choose a Platform & Start Trading',
    step3Desc: 'Pick an equity perps venue - we recommend Hyperliquid for beginners',
    tradeStep1: 'Go to',
    tradeStep2: 'Click "Connect" and select Rabby Wallet',
    tradeStep3: 'Deposit your USDC to the platform',
    tradeStep4: 'Search for a stock (e.g., NVDA-PERP)',
    tradeStep5: 'Choose Long or Short, set leverage, and trade!',
    openHyperliquid: 'Open Hyperliquid',
    mostPopular: 'Most popular platform',

    // Risks
    risksTitle: 'Understand the Risks',
    risk1: 'Leverage amplifies losses',
    risk1Desc: '- The same 10x that turns 5% into 50% gains also turns 5% losses into 50% losses',
    risk2: 'Liquidation is real',
    risk2Desc: '- Your position can be closed automatically if it moves against you enough',
    risk3: 'Funding rates cost money',
    risk3Desc: '- Holding positions costs money every few hours, especially on popular trades',
    risk4: 'No ownership',
    risk4Desc: '- You\'re trading price exposure, not actual shares. No dividends, no voting rights',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is the difference between equity perps and regular stock trading?',
        answer: 'Equity perps let you trade with leverage (up to 200x), 24/7, without owning actual shares. Regular stocks require full capital, trade only during market hours, and give you ownership rights like dividends and voting.'
      },
      {
        question: 'How much money do I need to start trading equity perps?',
        answer: 'You can start with as little as $10-50 on most platforms. However, we recommend starting with at least $100-500 to have adequate margin and avoid immediate liquidation on small price moves.'
      },
      {
        question: 'Are equity perps legal in Nigeria?',
        answer: 'Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by SEC Nigeria or CBN as they operate on decentralized platforms. You\'re trading price exposure through synthetic contracts, not actual US stocks. Many Nigerian traders use these platforms, but consult a financial advisor for your specific situation.'
      },
      {
        question: 'What happens if my position gets liquidated?',
        answer: 'When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won\'t owe additional money. Some platforms have insurance funds to prevent socialized losses.'
      },
      {
        question: 'Can I trade equity perps on weekends?',
        answer: 'Yes! Most platforms like Hyperliquid offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price.'
      },
      {
        question: 'Do I need KYC (identity verification)?',
        answer: 'The trading platforms like Hyperliquid don\'t require KYC. However, if you\'re converting NGN to USDC through Binance P2P, you\'ll need KYC on the exchange. Once you have USDC in your wallet, no further verification is needed.'
      }
    ],

    // CTA
    ctaTitle: 'Ready to Start?',
    ctaDesc: 'Join thousands of Nigerian traders accessing US stocks 24/7. No broker needed. Start with just $50.',
    ctaButton: 'Start Trading on Hyperliquid',
    ctaSecondary: 'Nigeria Trading Guide',

    // Footer link
    comparePlatforms: 'Compare platforms'
  },
  yo: {
    // Meta
    pageTitle: 'Kini Awon Equity Perpetuals?',

    // Breadcrumbs
    home: 'Ile',
    blog: 'Keko',
    currentPage: 'Kini Awon Equity Perpetuals',

    // Hero
    badge: 'Itosona Olubere',
    nigeriaBadge: 'Itosona Naijiria',
    heroTitle1: 'Kini',
    heroTitle2: 'Equity Perpetuals?',
    heroDesc: 'Ta',
    heroStocks: 'Tesla, Nvidia, ati Apple',
    heroDesc2: 'ni',
    heroTime: 'oru 2 ni ojo Satide',
    heroDesc3: 'pelu',
    heroLeverage: '50x leverage',
    heroDesc4: '. Ko si alagbata. Ko si ifowosi. Iwo nikan ati awon oja.',

    // Stats
    stat1Value: '24',
    stat1Label: 'Wakati Lojoojumo',
    stat1Sub: 'Ojo 7 ni ose',
    stat2Value: '200x',
    stat2Label: 'Leverage Ti O Ga Julo',
    stat2Sub: 'Owo-ori mu ise',
    stat3Value: '50+',
    stat3Label: 'Awon Oja Ti O Wa',
    stat3Sub: 'Awon oja US ti o ga julo',

    // CTA buttons
    learnMore: 'Keko Die Sii',
    startTrading: 'Bere Tita Bayi',

    // Simple explanation
    simpleTitle: 'Alaye',
    simpleTitleHighlight: 'Irorun',
    simpleTitle2: '',
    simpleDesc: 'Equity perpetual je adehun ti o n tele owo oja kan. Iyen nikan ni.',
    thinkLikeThis: 'Ro bi eleyi:',
    step1: 'O ro pe',
    step1Bold: 'NVDA yoo ga',
    step2: 'O si ipo',
    step2Bold: 'gigun (long)',
    step2End: 'pelu $100',
    step3: 'Pelu 10x leverage, o ni akoso',
    step3Bold: '$1,000 ti ifihan',
    step4: 'NVDA ga 5% = o se ere',
    step4Bold: '$50 (50% ere)',
    positionLabel: 'Ipo Re',
    marginLabel: 'Aala',
    positionSizeLabel: 'Iwon Ipo',
    unrealizedPnl: 'P&L Ti Ko Ti Se',
    neverExpire: 'Ko dabi awon futures deede, perpetuals',
    neverExpireBold: 'ko pari rara',
    neverExpireEnd: '. Mu fun iseju 5 tabi osu 5.',

    // Benefits
    benefitsTitle: 'Idi Ti Awon Oniṣowo',
    benefitsTitleHighlight: 'N Yipada',
    benefitsDesc: 'Equity perps yanju awon isoro ti o tobi julo pelu tita oja aṣa',
    benefit1Title: 'Ta 24/7',
    benefit1Desc: 'Awon oja ko ni tiipa. Ta Tesla ni oru, Apple ni ojo Sunday, Nvidia ni Keresimesi. Dahun si iroyin ni akoko gidi, kii se owuro to n bo.',
    benefit2Title: 'To 200x Leverage',
    benefit2Desc: 'Sakoso $10,000 ti oja pelu $50. Pọ si ere re (ati adanu). O mu ise ju awon akanti aala aṣa lo.',
    benefit3Title: 'Tita Kukuru Ti O Rorun',
    benefit3Desc: 'O ro pe oja kan yoo subu? Lo kukuru lesekese. Ko si yiya awon ọja, ko si awon owo yiya ti o le, ko si awon ihamọ. Kan te ta.',
    benefit4Title: 'Ko Si KYC Ti A Nilo',
    benefit4Desc: 'Ko si gbigbe ID. Ko si nduro fun ifowosi. Ko si data ti ara ẹni ti a ko. Sopọ apamọwọ rẹ ki o bẹrẹ tita ni awon iṣẹju.',
    benefit5Title: 'Ara-Itọju',
    benefit5Desc: 'Awon owo rẹ wa ninu apamọwọ rẹ. Ko si alagbata ti o di owo rẹ mu. Ko si awon didi. Ko si awon opin yiyọ. O ni akoso awon ohun-ini rẹ.',
    benefit6Title: 'Ipinnu Lesekese',
    benefit6Desc: 'Ko si akoko nduro T+2. Awon ere wa lesekese. Pa ipo kan ki o yọ si apamọwọ rẹ ni awon aaya.',

    // How it works
    howItWorksTitle: 'Bawo Ni O',
    howItWorksTitleHighlight: 'Se N',
    howItWorksTitle2: 'Sise',
    howItWorksDesc: 'Awon ẹrọ lẹhin equity perpetuals ni ede Gẹẹsi ti o rọrun',
    oracle1: 'Awon Ifunni Owo Oracle',
    oracle1Desc: 'Equity perps tẹle awon owo oja gidi nipa lilo',
    oracle1Bold: 'awon oracle',
    oracle1Desc2: '- awon iṣẹ ti o fa data owo laaye lati awon paṣipaarọ oja ti o si fi ranṣẹ lori ẹwọn. Awon olupese bi Pyth ko awon owo lati awon orisun pupọ lati rii daju pe o pe.',
    oracle1Note: 'O n se imudojuiwon ni gbogbo aaya lakoko awon wakati oja',
    funding2: 'Awon Oṣuwọn Igbeowosile Pa Awon Owo Po',
    funding2Desc: 'Ni gbogbo wakati 1-8, awon oniṣowo san tabi gba',
    funding2Bold: 'igbeowosile',
    funding2Desc2: 'da lori boya owo perp wa loke tabi ni isalẹ owo oracle. Ti awon perps ba ta loke aaye, awon gigun san awon kukuru (ti n ti owo silẹ). Eyi pa awon owo perp mọ ṣiṣe itẹle awon owo oja gidi.',
    fundingAbove: 'Perp > Aaye',
    fundingAboveDesc: 'Awon gigun san awon kukuru',
    fundingBelow: 'Perp < Aaye',
    fundingBelowDesc: 'Awon kukuru san awon gigun',
    leverage3: 'Leverage ati Pipade',
    leverage3Desc: 'Aala rẹ',
    leverage3Bold: '(margin)',
    leverage3Desc2: 'je ideri ti o n ṣe atilẹyin ipo rẹ. Pelu 10x leverage, iṣipopada 10% ti ko dara yoo pa aala rẹ run. Ki eyi to ṣẹlẹ, a',
    leverage3Bold2: 'pa ipo rẹ',
    leverage3Desc3: '- a pa ipo rẹ laifọwọyi lati ṣe idiwọ awon adanu siwaju sii.',
    leverageProTip: 'Imọran pro:',
    leverageProTipText: 'Bẹrẹ pẹlu 2-5x leverage. Ọpọlọpọ awon olubere lo 20x+ ti a si pa wọn lori iyipada deede. Leverage kekere = aaye diẹ sii lati jẹ aṣiṣe.',

    // Getting started
    gettingStartedBadge: 'Kere Ju Iṣẹju 10',
    gettingStartedTitle: 'Ṣeto ni',
    gettingStartedTitleHighlight: 'Awon Igbesẹ 3 Ti O Rọrun',
    gettingStartedDesc: 'Ko si awon fọọmu ohun elo. Ko si nduro ifowosi. Ko si iwontunwonsi o kere.',

    // Step 1
    step1Title: 'Ṣeto Apamọwọ Dijitali Rẹ',
    step1Desc: 'Ọfẹ, gba iṣẹju 2, ati pe o ṣe eyi lẹẹkan',
    showDetails: 'Fi Awon Alaye Han',
    hideDetails: 'Fi Awon Alaye Pamọ',
    walletExplainTitle: 'Kini apamọwọ dijitali?',
    walletExplainDesc: 'Ronu rẹ bi',
    walletExplainBold: 'akanti banki dijitali',
    walletExplainDesc2: 'ti o ni akoso ni kikun. Dipo ki banki di owo rẹ mu, o di i funrararẹ nipa lilo itẹsiwaju ẹrọ aṣawakiri ti o rọrun.',
    walletFeature1: 'O ni akoso rẹ',
    walletFeature2: 'Ọfẹ patapata',
    walletFeature3: 'Iṣeto iṣẹju 2',
    walletFeature4: 'O n ṣiṣẹ ni agbaye',
    walletSetupTitle: 'Eyi ni bi o ṣe le ṣeto rẹ:',
    walletStep1: 'Lọ si',
    walletStep2: 'Tẹ "Download" ki o ṣafikun si ẹrọ aṣawakiri rẹ (Chrome, Firefox, bbl)',
    walletStep3: 'Tẹ "Create New Wallet" ki o ṣeto ọrọ aṣina',
    walletStep4: 'Kọ gbolohun igbapada ọrọ 12 rẹ silẹ',
    walletStep4Warning: 'Eyi dabi ọrọ aṣina pataki - pa a mọ ki o ma ṣe pin rẹ!',
    watchSetupGuide: 'Wo: Itọsọna Iṣeto Iṣẹju 2',
    videoDesc: 'Fidio yi yoo gba ọ nipasẹ gbogbo igbesẹ. Tẹle ati pe apamọwọ rẹ yoo ṣetan ni kiakia.',
    downloadRabby: 'Gba Rabby Silẹ',

    // Step 2
    step2Title: 'Ṣe Igbeowosile pẹlu USDC',
    step2Desc: 'Gbe lati Coinbase, Kraken, tabi Binance - tabi lo kaadi',
    fromCoinbase: 'Lati Coinbase',
    coinbaseSteps: ['Lọ si Firanṣẹ/Gba', 'Yan USDC', 'Fi adirẹsi Rabby rẹ lẹ', 'Yan nẹtiwọọki Arbitrum', 'Jẹrisi firanṣẹ'],
    coinbaseFee: 'Owo: ~$0.10 lori Arbitrum',
    fromKraken: 'Lati Kraken',
    krakenSteps: ['Lọ si Igbeowosile > Yiyọ', 'Wa USDC', 'Ṣafikun adirẹsi Rabby rẹ', 'Yan Arbitrum One', 'Jẹrisi pẹlu 2FA'],
    krakenFee: 'Owo: ~$1-3',
    fromBinance: 'Lati Binance',
    binanceSteps: ['Apamọwọ > Yiyọ', 'Yan USDC', 'Fi adirẹsi Rabby rẹ lẹ', 'Nẹtiwọọki: Arbitrum', 'Pari ijẹrisi'],
    binanceFee: 'Owo: ~$0.50',
    fundingProTip: 'Imọran pro:',
    fundingProTipText: 'Nigbagbogbo lo nẹtiwọọki Arbitrum fun awon owo ti o kere julo. Bẹrẹ pẹlu $50-100 lati dan wo. Awon owo de ni iṣẹju 1-5.',

    // Step 3
    step3Title: 'Yan Pẹpẹ kan ki o Bẹrẹ Tita',
    step3Desc: 'Yan ibi tita equity perps kan - a ṣe iṣeduro Hyperliquid fun awon olubere',
    tradeStep1: 'Lọ si',
    tradeStep2: 'Tẹ "Connect" ki o yan Rabby Wallet',
    tradeStep3: 'Fi USDC rẹ silẹ si pẹpẹ naa',
    tradeStep4: 'Wa oja kan (fun apẹẹrẹ, NVDA-PERP)',
    tradeStep5: 'Yan Gigun tabi Kukuru, ṣeto leverage, ki o ta!',
    openHyperliquid: 'Ṣii Hyperliquid',
    mostPopular: 'Pẹpẹ olokiki julo',

    // Risks
    risksTitle: 'Loye Awon Ewu',
    risk1: 'Leverage pọ si adanu',
    risk1Desc: '- 10x kanna ti o yi 5% pada si 50% ere tun yi 5% adanu pada si 50% adanu',
    risk2: 'Pipade je gidi',
    risk2Desc: '- A le pa ipo rẹ laifọwọyi ti o ba lọ si odi to',
    risk3: 'Awon oṣuwọn igbeowosile je owo',
    risk3Desc: '- Didi awon ipo je owo ni gbogbo wakati diẹ, paapaa lori awon tita olokiki',
    risk4: 'Ko si ini',
    risk4Desc: '- O n ta ifihan owo, kii ṣe awon ọja gidi. Ko si awon pinpin ere, ko si awon ẹtọ idibo',

    // FAQ
    faqTitle: 'Awon Ibeere Ti A Beere Nigbagbogbo',
    faqs: [
      {
        question: 'Kini iyatọ laarin equity perps ati tita oja deede?',
        answer: 'Equity perps jẹ ki o ta pẹlu leverage (to 200x), 24/7, laisi nini awon ọja gidi. Awon oja deede nilo owo ni kikun, ta nikan lakoko awon wakati oja, ati fun ọ ni awon ẹtọ ini bi awon pinpin ere ati idibo.'
      },
      {
        question: 'Owo melo ni mo nilo lati bẹrẹ tita equity perps?',
        answer: 'O le bẹrẹ pẹlu $10-50 lori ọpọlọpọ awon pẹpẹ. Sibẹsibẹ, a ṣe iṣeduro bibẹrẹ pẹlu o kere $100-500 lati ni aala to peye ki o yago fun pipade lesekese lori awon iṣipopada owo kekere.'
      },
      {
        question: 'Ṣe equity perps jẹ ofin ni Naijiria?',
        answer: 'Equity perpetuals wa ni agbegbe ilana grẹy. SEC Naijiria tabi CBN ko ṣe ofin fun wọn ni kedere bi wọn ṣe n ṣiṣẹ lori awon pẹpẹ ti a pin kakiri. O n ta ifihan owo nipasẹ awon adehun sintetiki, kii ṣe awon oja US gidi. Ọpọlọpọ awon oniṣowo Naijiria lo awon pẹpẹ wọnyi, ṣugbọn ba oludamọran owo sọrọ fun ipo rẹ pato.'
      },
      {
        question: 'Kini yoo ṣẹlẹ ti a ba pa ipo mi?',
        answer: 'Nigbati a ba pa ipo rẹ, a lo aala rẹ lati pa ipo naa ki o bo awon adanu. O padanu aala ti o fi silẹ ṣugbọn iwọ kii yoo jẹ owo afikun. Awon pẹpẹ kan ni awon owo iṣeduro lati ṣe idiwọ awon adanu ti awujọ.'
      },
      {
        question: 'Ṣe mo le ta equity perps ni awon ipari ọsẹ?',
        answer: 'Bẹẹni! Ọpọlọpọ awon pẹpẹ bi Hyperliquid pese tita 24/7. Sibẹsibẹ, awon owo le ma ni iyipada ni awon ipari ọsẹ nitori awon oja oja aṣa ti wa ni pipade ati awon oracle lo owo pipade ti o kẹhin.'
      },
      {
        question: 'Ṣe mo nilo KYC (ijẹrisi idanimo)?',
        answer: 'Awon pẹpẹ tita bi Hyperliquid ko nilo KYC. Sibẹsibẹ, ti o ba n yi NGN pada si USDC nipasẹ Binance P2P, iwọ yoo nilo KYC lori paṣipaarọ naa. Ni kete ti o ba ni USDC ninu apamọwọ rẹ, ko si ijẹrisi siwaju sii ti a nilo.'
      }
    ],

    // CTA
    ctaTitle: 'Ṣe O Ti Ṣetan Lati Bẹrẹ?',
    ctaDesc: 'Darapọ mọ ẹgbẹẹgbẹrun awon oniṣowo Naijiria ti o n wọle si awon oja US 24/7. Ko si alagbata ti a nilo. Bẹrẹ pẹlu $50 nikan.',
    ctaButton: 'Bẹrẹ Tita Lori Hyperliquid',
    ctaSecondary: 'Itọsọna Tita Naijiria',

    // Footer link
    comparePlatforms: 'Ṣe afiwe awon pẹpẹ'
  }
};

export default function KiniEquityPerpetuals() {
  const [lang, setLang] = useState<'en' | 'yo'>('en');
  const t = translations[lang];
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  // JSON-LD Article schema (English for SEO)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Are Equity Perpetuals? Complete Beginner Guide for Nigeria",
    description: "Learn what equity perpetuals are, how they work, and how Nigerian traders can access US stocks 24/7 without a broker. Bilingual guide in Yoruba and English.",
    author: { "@type": "Organization", name: "Compare Equity Perps" },
    inLanguage: ["en", "yo"],
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString(),
    keywords: ["What are equity perpetuals Nigeria", "Kini awon equity perpetuals", "equity perps Nigeria", "trade US stocks Nigeria", "24/7 stock trading"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen">
        {/* HERO SECTION - Nigeria colors: green/white */}
        <section className="relative overflow-hidden">
          {/* Animated Background with Nigeria colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Language Toggle */}
          <div className="absolute top-4 right-4 z-10">
            <LanguageToggle
              currentLang={lang}
              nativeLang="yo"
              nativeName="Yoruba"
              onToggle={(l) => setLang(l as 'en' | 'yo')}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">{t.home}</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">{t.blog}</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">{t.currentPage}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                  <span className="text-green-400 text-sm font-medium">{t.badge}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full">
                  <span className="text-white text-sm font-medium">{t.nigeriaBadge}</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                {t.heroTitle1}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-400">
                  {t.heroTitle2}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t.heroDesc} <span className="text-white font-semibold">{t.heroStocks}</span> {t.heroDesc2}
                <span className="text-green-400 font-semibold"> {t.heroTime}</span> {t.heroDesc3}
                <span className="text-white font-semibold"> {t.heroLeverage}</span>{t.heroDesc4}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-green-400">{t.stat1Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat1Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat1Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{t.stat2Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat2Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat2Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-green-400">{t.stat3Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat3Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat3Sub}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#simple-explanation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
                >
                  {t.learnMore}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 border border-gray-700 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-all"
                >
                  {t.startTrading}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE EXPLANATION SECTION */}
        <section id="simple-explanation" className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.simpleTitle} <span className="text-green-400">{t.simpleTitleHighlight}</span> {t.simpleTitle2}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t.simpleDesc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t.thinkLikeThis}</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">1.</span>
                      <span>{t.step1} <strong className="text-white">{t.step1Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">2.</span>
                      <span>{t.step2} <strong className="text-white">{t.step2Bold}</strong> {t.step2End}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">3.</span>
                      <span>{t.step3} <strong className="text-white">{t.step3Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">4.</span>
                      <span>{t.step4} <strong className="text-green-400">{t.step4Bold}</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">{t.positionLabel}</div>
                    <div className="text-4xl font-black text-white mb-1">NVDA-PERP</div>
                    <div className="text-green-400 text-xl font-bold">Long 10x</div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">{t.marginLabel}</span>
                        <span className="text-white">$100</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">{t.positionSizeLabel}</span>
                        <span className="text-white">$1,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">{t.unrealizedPnl}</span>
                        <span className="text-green-400">+$50.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-8">
              {t.neverExpire} <strong className="text-white">{t.neverExpireBold}</strong>{t.neverExpireEnd}
            </p>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section id="benefits" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.benefitsTitle} <span className="text-green-400">{t.benefitsTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t.benefitsDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit 1: Trade 24/7 */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit1Title}</h3>
                <p className="text-gray-400">{t.benefit1Desc}</p>
              </div>

              {/* Benefit 2: Leverage */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit2Title}</h3>
                <p className="text-gray-400">{t.benefit2Desc}</p>
              </div>

              {/* Benefit 3: Short Selling */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit3Title}</h3>
                <p className="text-gray-400">{t.benefit3Desc}</p>
              </div>

              {/* Benefit 4: No KYC */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit4Title}</h3>
                <p className="text-gray-400">{t.benefit4Desc}</p>
              </div>

              {/* Benefit 5: Self-Custody */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit5Title}</h3>
                <p className="text-gray-400">{t.benefit5Desc}</p>
              </div>

              {/* Benefit 6: Instant Settlement */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit6Title}</h3>
                <p className="text-gray-400">{t.benefit6Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.howItWorksTitle} <span className="text-green-400">{t.howItWorksTitleHighlight}</span> {t.howItWorksTitle2}
              </h2>
              <p className="text-gray-400 text-lg">
                {t.howItWorksDesc}
              </p>
            </div>

            <div className="space-y-8">
              {/* Oracle Pricing */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.oracle1}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.oracle1Desc} <strong className="text-white">{t.oracle1Bold}</strong> {t.oracle1Desc2}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t.oracle1Note}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding Rates */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.funding2}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.funding2Desc} <strong className="text-white">{t.funding2Bold}</strong> {t.funding2Desc2}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-semibold">{t.fundingAbove}</div>
                        <div className="text-gray-500 text-sm">{t.fundingAboveDesc}</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-red-400 font-semibold">{t.fundingBelow}</div>
                        <div className="text-gray-500 text-sm">{t.fundingBelowDesc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leverage & Liquidation */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.leverage3}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.leverage3Desc} <strong className="text-white">{t.leverage3Bold}</strong> {t.leverage3Desc2} <strong className="text-white">{t.leverage3Bold2}</strong> {t.leverage3Desc3}
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <p className="text-yellow-400 text-sm">
                        <strong>{t.leverageProTip}</strong> {t.leverageProTipText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GETTING STARTED SECTION */}
        <section id="getting-started" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-400 font-medium">{t.gettingStartedBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.gettingStartedTitle} <span className="text-green-400">{t.gettingStartedTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg">
                {t.gettingStartedDesc}
              </p>
            </div>

            {/* Step 1 - Wallet Setup (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-green-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-colors"
                onClick={() => setWalletExpanded(!walletExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                    <p className="text-gray-400">{t.step1Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-sm font-medium hidden sm:block">
                      {walletExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-green-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {walletExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                    {/* What is a wallet explainer */}
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                      <h4 className="text-green-400 font-semibold mb-2">{t.walletExplainTitle}</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {t.walletExplainDesc} <strong className="text-white">{t.walletExplainBold}</strong> {t.walletExplainDesc2}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">🔐</div>
                          <span className="text-gray-400">{t.walletFeature1}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">🆓</div>
                          <span className="text-gray-400">{t.walletFeature2}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">⚡</div>
                          <span className="text-gray-400">{t.walletFeature3}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">🌍</div>
                          <span className="text-gray-400">{t.walletFeature4}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-4">{t.walletSetupTitle}</h4>
                        <ol className="space-y-3 text-gray-300">
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">1</span>
                            <span>{t.walletStep1} <a href="https://rabby.io" target="_blank" rel="noopener" className="text-green-400 hover:text-green-300 underline">rabby.io</a></span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">2</span>
                            <span>{t.walletStep2}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">3</span>
                            <span>{t.walletStep3}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">4</span>
                            <div>
                              <strong className="text-white">{t.walletStep4}</strong>
                              <p className="text-gray-500 text-xs mt-1">{t.walletStep4Warning}</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-5">
                        <h4 className="text-white font-semibold mb-3">{t.watchSetupGuide}</h4>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                          <iframe
                            src="https://www.youtube.com/embed/_ouAzSQJiM0"
                            title="Wallet Setup Guide"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <p className="text-gray-500 text-xs mb-3">
                          {t.videoDesc}
                        </p>
                        <a
                          href="https://rabby.io"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold text-sm hover:bg-green-400 transition-colors"
                        >
                          {t.downloadRabby}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2 - Fund Wallet (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:border-white/40 transition-colors"
                onClick={() => setFundingExpanded(!fundingExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-300 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step2Title}</h3>
                    <p className="text-gray-400">{t.step2Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white text-sm font-medium hidden sm:block">
                      {fundingExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-white transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {fundingExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                        <h4 className="text-blue-400 font-semibold mb-2">{t.fromCoinbase}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.coinbaseSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.coinbaseFee}</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                        <h4 className="text-purple-400 font-semibold mb-2">{t.fromKraken}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.krakenSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.krakenFee}</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <h4 className="text-yellow-400 font-semibold mb-2">{t.fromBinance}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.binanceSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.binanceFee}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl">
                      <p className="text-gray-400 text-sm">
                        <strong className="text-white">{t.fundingProTip}</strong> {t.fundingProTipText}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 - Choose Platform & Trade */}
            <div className="mb-8">
              <div className="bg-gray-900 border-2 border-green-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t.step3Title}</h3>
                    <p className="text-gray-400">{t.step3Desc}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5">
                    <ol className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">1</span>
                        <span>{t.tradeStep1} <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-green-400 hover:text-green-300">app.hyperliquid.xyz</a></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">2</span>
                        <span>{t.tradeStep2}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">3</span>
                        <span>{t.tradeStep3}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">4</span>
                        <span>{t.tradeStep4}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">5</span>
                        <span>{t.tradeStep5}</span>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={hyperliquid?.referralUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-2xl hover:border-green-500 transition-all group"
                    >
                      <div className="text-5xl">🚀</div>
                      <span className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{t.openHyperliquid}</span>
                      <span className="text-gray-400 text-sm">{t.mostPopular}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RISKS SECTION */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">⚠️ {t.risksTitle}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk1}</strong>{t.risk1Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk2}</strong>{t.risk2Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk3}</strong>{t.risk3Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk4}</strong>{t.risk4Desc}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-4 bg-gray-900/50">
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
                    className="w-full p-5 text-left flex items-center justify-between"
                  >
                    <span className="text-white font-medium pr-4">{faq.question}</span>
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
                    <div className="px-5 pb-5 text-gray-400">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-green-500/20 via-white/5 to-green-500/20 border border-green-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  {t.ctaTitle}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  {t.ctaDesc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-bold text-xl hover:from-green-400 hover:to-green-500 transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
                  >
                    {t.ctaButton}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <Link
                    href="/blog/trade-us-stocks-from-nigeria"
                    className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-gray-800 border border-gray-700 text-white rounded-2xl font-semibold hover:bg-gray-700 transition-all"
                  >
                    {t.ctaSecondary}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="py-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.comparePlatforms}
          </Link>
        </div>
      </article>
    </>
  );
}
