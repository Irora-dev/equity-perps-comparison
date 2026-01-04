'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

// Comprehensive translation object
const translations = {
  tl: {
    // Meta
    langCode: 'tl',
    langName: 'Filipino',
    altLang: 'English',

    // Breadcrumbs
    home: 'Home',
    learn: 'Matuto',
    currentPage: 'Ano ang Equity Perpetuals',

    // Hero
    badge: 'Gabay para sa mga Baguhan',
    heroTitle1: 'Ano Ang',
    heroTitle2: 'Equity Perpetuals?',
    heroSubtitle: 'Isipin mo na nag-trade ka ng',
    heroStocks: 'Tesla, Nvidia, at Apple',
    heroTime: ' alas-dos ng madaling araw sa Sabado',
    heroLeverage: ' na may 50x leverage',
    heroEnd: '. Walang broker. Walang approval. Ikaw lang at ang mga merkado.',

    // Quick Stats
    stat1Title: 'Oras Bawat Araw',
    stat1Sub: '7 araw bawat linggo',
    stat2Title: 'Max Leverage',
    stat2Sub: 'Capital efficient',
    stat3Title: 'Stocks Available',
    stat3Sub: 'Top US equities',

    // CTAs
    learnMore: 'Alamin Pa',
    startTrading: 'Mag-trade Na',

    // Simple Explanation
    simpleTitle: 'Ang',
    simpleTitleHighlight: 'Simpleng',
    simpleTitleEnd: ' Paliwanag',
    simpleSubtitle: 'Ang equity perpetual ay isang kontrata na sumusubaybay sa presyo ng stock. Iyon lang.',
    thinkTitle: 'Isipin mo ito:',
    think1: 'Akala mo ',
    think1Bold: 'tataas ang NVDA',
    think2: 'Nagbukas ka ng ',
    think2Bold: 'long position',
    think2End: ' na may $100',
    think3: 'Sa 10x leverage, kontrol mo ang ',
    think3Bold: '$1,000 na exposure',
    think4: 'Tumaas ang NVDA ng 5% = kumita ka ng ',
    think4Bold: '$50 (50% return)',
    positionTitle: 'Ang Iyong Posisyon',
    positionLong: 'Long 10x',
    margin: 'Margin',
    positionSize: 'Laki ng Posisyon',
    unrealizedPnl: 'Unrealized P&L',
    neverExpire: 'Hindi tulad ng regular futures, ang perpetuals ay ',
    neverExpireBold: 'hindi nagpe-expire',
    neverExpireEnd: '. Hawakan ng 5 minuto o 5 buwan.',

    // Benefits
    benefitsTitle: 'Bakit Nag-switch ang mga Trader',
    benefitsSubtitle: 'Nilulutas ng equity perps ang pinakamalaking frustrations sa traditional stock trading',
    benefit1Title: 'Mag-trade 24/7',
    benefit1Desc: 'Hindi nagsasara ang mga merkado. Mag-trade ng Tesla sa hatinggabi, Apple sa Linggo, Nvidia sa Pasko. React sa news in real-time, hindi kinabukasan.',
    benefit2Title: 'Hanggang 200x Leverage',
    benefit2Desc: 'Kontrolin ang $10,000 na stock gamit ang $50. I-amplify ang iyong gains (at losses). Mas capital efficient kaysa traditional margin accounts.',
    benefit3Title: 'Madaling Short Selling',
    benefit3Desc: 'Akala mo bababa ang stock? Mag-short kaagad. Walang borrowing shares, walang hard-to-borrow fees, walang restrictions. I-click lang ang sell.',
    benefit4Title: 'Walang KYC na Kailangan',
    benefit4Desc: 'Walang ID upload. Walang paghihintay ng approval. Walang personal data na kinokolekta. I-connect ang iyong wallet at mag-trade sa loob ng ilang minuto.',
    benefit5Title: 'Self-Custody',
    benefit5Desc: 'Ang iyong pera ay nasa wallet mo. Walang broker na humahawak ng pera mo. Walang freezes. Walang withdrawal limits. Ikaw ang may kontrol sa iyong assets.',
    benefit6Title: 'Instant Settlement',
    benefit6Desc: 'Walang T+2 waiting period. Available kaagad ang profits. Isara ang position at i-withdraw sa wallet mo sa loob ng ilang segundo.',

    // How It Works
    howTitle: 'Paano Ito',
    howTitleHighlight: 'Gumagana',
    howSubtitle: 'Ang mekanismo sa likod ng equity perpetuals sa simpleng Filipino',
    how1Title: 'Oracle Price Feeds',
    how1Desc: 'Sinusubaybayan ng equity perps ang totoong presyo ng stock gamit ang ',
    how1Bold: 'oracles',
    how1End: ' - mga serbisyo na kumukuha ng live na data ng presyo mula sa stock exchanges at inihahatid ito on-chain. Ang mga provider tulad ng Pyth ay nag-a-aggregate ng mga presyo mula sa maraming sources para masigurado ang accuracy.',
    how1Note: 'Ina-update bawat segundo sa market hours',
    how2Title: 'Pinapanatili ng Funding Rates ang Presyo',
    how2Desc: 'Bawat 1-8 oras, nagbabayad o tumatanggap ang mga trader ng ',
    how2Bold: 'funding',
    how2End: ' base sa kung ang perp price ay mas mataas o mas mababa sa oracle price. Kung ang perps ay nag-trade na mas mataas sa spot, nagbabayad ang longs sa shorts (para ibaba ang presyo). Pinapanatili nito ang perp prices na malapit sa totoong stock prices.',
    how2HighLabel: 'Perp > Spot',
    how2HighDesc: 'Nagbabayad ang longs sa shorts',
    how2LowLabel: 'Perp < Spot',
    how2LowDesc: 'Nagbabayad ang shorts sa longs',
    how3Title: 'Leverage at Liquidation',
    how3Desc: 'Ang iyong ',
    how3Bold1: 'margin',
    how3Mid: ' ang collateral na nagba-back up sa iyong position. Sa 10x leverage, ang 10% adverse move ay mawawala ang iyong margin. Bago mangyari iyon, ma-',
    how3Bold2: 'liquidate',
    how3End: ' ka - awtomatikong isinasara ang iyong position para maiwasan ang karagdagang losses.',
    how3Tip: 'Pro tip:',
    how3TipText: ' Magsimula sa 2-5x leverage. Maraming baguhan ang gumagamit ng 20x+ at nali-liquidate sa normal na volatility. Mas mababang leverage = mas maraming room na magkamali.',

    // Getting Started
    startTitle: 'Mag-setup sa',
    startTitleHighlight: '3 Simpleng Hakbang',
    startSubtitle: 'Walang application forms. Walang paghihintay ng approval. Walang minimum balance.',
    startBadge: 'Wala pang 10 Minuto',

    // Step 1
    step1Title: 'I-setup ang Iyong Digital Wallet',
    step1Desc: 'Libre, 2 minuto lang, at isang beses mo lang ito gagawin',
    step1WhatTitle: 'Ano ang digital wallet?',
    step1WhatDesc: 'Isipin mo ito na parang ',
    step1WhatBold: 'digital bank account',
    step1WhatEnd: ' na fully mo kinokontrol. Imbes na bank ang humahawak ng pera mo, ikaw mismo ang humahawak gamit ang simpleng browser extension.',
    step1Feature1: 'Ikaw ang kontrol',
    step1Feature2: 'Completely libre',
    step1Feature3: '2 min setup',
    step1Feature4: 'Gumagana globally',
    step1HowTitle: 'Narito kung paano i-setup:',
    step1How1: 'Pumunta sa ',
    step1How1End: ' (ito ang inirerekomenda naming wallet)',
    step1How2: 'I-click ang "Download" at idagdag sa browser mo (Chrome, Firefox, etc.)',
    step1How3: 'I-click ang "Create New Wallet" at maglagay ng password',
    step1How4Title: 'Isulat ang iyong 12-word recovery phrase',
    step1How4Desc: 'Ito ay parang master password - itago ng maayos at huwag ibahagi kahit kanino!',
    step1VideoTitle: 'Panoorin: 2-Minute Setup Guide',
    step1VideoDesc: 'Inaakay ka ng video na ito sa bawat hakbang. Sundan mo at magiging ready na ang wallet mo.',
    downloadRabby: 'I-download ang Rabby',
    hideDetails: 'Itago ang Detalye',
    showDetails: 'Ipakita ang Detalye',

    // Step 2
    step2Title: 'Mag-fund gamit ang USDC',
    step2Desc: 'Mag-transfer mula sa Coinbase, Kraken, o Binance - o gumamit ng card',
    step2Coinbase: 'Mula sa Coinbase',
    step2Kraken: 'Mula sa Kraken',
    step2Binance: 'Mula sa Binance',
    step2Fee: 'Fee:',
    step2Tip: 'Pro tip:',
    step2TipText: ' Palaging gamitin ang Arbitrum network para sa pinakamababang fees. Magsimula sa $50-100 para subukan. Darating ang funds sa 1-5 minuto.',

    // Step 3
    step3Title: 'Pumili ng Platform at Magsimulang Mag-trade',
    step3Desc: 'Pumili ng equity perps venue - inirerekomenda namin ang ',
    step3DescEnd: ' para sa mga baguhan',
    step3Step1: 'Pumunta sa ',
    step3Step2: 'I-click ang "Connect" at piliin ang Rabby Wallet',
    step3Step3: 'I-deposit ang USDC mo sa platform',
    step3Step4: 'Hanapin ang stock (hal., NVDA-PERP)',
    step3Step5: 'Piliin ang Long o Short, itakda ang leverage, at mag-trade!',
    openHyperliquid: 'Buksan ang Hyperliquid',
    mostPopular: 'Pinakapopular na platform',
    fullGuideLink: 'Basahin ang kumpletong wallet setup guide',

    // Risks
    risksTitle: 'Unawain ang mga Panganib',
    risk1Title: 'Pinapalakas ng leverage ang losses',
    risk1Desc: ' - Ang parehong 10x na nagpapalit ng 5% sa 50% gains ay nagpapalit din ng 5% losses sa 50% losses',
    risk2Title: 'Totoo ang liquidation',
    risk2Desc: ' - Maaaring awtomatikong isara ang iyong position kung labis itong gumalaw laban sa iyo',
    risk3Title: 'Nagkakahalaga ang funding rates',
    risk3Desc: ' - Ang pag-hold ng positions ay nagkakahalaga ng pera bawat ilang oras, lalo na sa popular na trades',
    risk4Title: 'Walang ownership',
    risk4Desc: ' - Nag-trade ka ng price exposure, hindi totoong shares. Walang dividends, walang voting rights',

    // Final CTA
    ctaTitle: 'Handa Ka Na Ba?',
    ctaSubtitle: 'Magsimula sa $50 at mababang leverage. Subukan kung ano ang pakiramdam ng 24/7 stock trading.',
    ctaButton: 'Magsimula sa Hyperliquid',
    comparePlatforms: 'Ikumpara ang Lahat ng Platform',

    // FAQ
    faq1Q: 'Ano ang pagkakaiba ng equity perps at regular stock trading?',
    faq1A: 'Pinapayagan ka ng equity perps na mag-trade na may leverage (hanggang 200x), 24/7, nang hindi nagmamay-ari ng totoong shares. Ang regular stocks ay nangangailangan ng buong capital, nag-trade lang sa market hours, at nagbibigay sa iyo ng ownership rights tulad ng dividends at voting.',
    faq2Q: 'Magkano ang kailangan kong pera para magsimulang mag-trade ng equity perps?',
    faq2A: 'Maaari kang magsimula sa kakarampot na $10-50 sa karamihan ng mga platform. Gayunpaman, inirerekomenda namin na magsimula ng hindi bababa sa $100-500 para magkaroon ng sapat na margin at maiwasan ang kaagad na liquidation sa maliliit na price moves.',
    faq3Q: 'Legal ba ang equity perps?',
    faq3A: 'Umiiral ang equity perps sa isang regulatory gray area. Karamihan sa mga platform ay decentralized at hindi nangangailangan ng KYC. Iba-iba ang legalidad depende sa hurisdiksyon. Dapat malaman ng mga residente ng US na ang mga platform na ito ay karaniwang nagpapatakbo sa labas ng US regulatory frameworks.',
    faq4Q: 'Ano ang mangyayari kung ma-liquidate ang aking position?',
    faq4A: 'Kapag na-liquidate ang iyong position, ginagamit ang iyong margin para isara ang position at takpan ang losses. Mawawala ang iyong deposited margin pero hindi ka na magkakautang ng karagdagang pera. May mga platform na may insurance funds para maiwasan ang socialized losses.',
    faq5Q: 'Maaari ba akong mag-trade ng equity perps sa weekends?',
    faq5A: 'Oo, karamihan sa mga platform tulad ng Hyperliquid at Lighter ay nag-aalok ng 24/7 trading. Gayunpaman, maaaring mas mababa ang volatility sa weekends dahil sarado ang traditional stock markets at gumagamit ang oracles ng last closing price.',
    faq6Q: 'Ano ang funding rates at bakit mahalaga ito?',
    faq6A: 'Ang funding rates ay periodic payments sa pagitan ng long at short traders na pinapanatili ang perp prices na aligned sa spot prices. Kung ikaw ay may hawak na position, magbabayad ka o makakatanggap ng funding bawat 1-8 oras depende sa platform.',

    // Footer
    backLink: 'Ikumpara ang mga platform',
    tradingPageLink: 'Mag-trade ng Equity Perps sa Pilipinas',
  },
  en: {
    // Meta
    langCode: 'en',
    langName: 'English',
    altLang: 'Filipino',

    // Breadcrumbs
    home: 'Home',
    learn: 'Learn',
    currentPage: 'What are Equity Perpetuals',

    // Hero
    badge: 'Beginner Guide',
    heroTitle1: 'What Are',
    heroTitle2: 'Equity Perpetuals?',
    heroSubtitle: 'Imagine trading',
    heroStocks: 'Tesla, Nvidia, and Apple',
    heroTime: ' at 2am on a Saturday',
    heroLeverage: ' with 50x leverage',
    heroEnd: '. No broker. No approval. Just you and the markets.',

    // Quick Stats
    stat1Title: 'Hours a Day',
    stat1Sub: '7 days a week',
    stat2Title: 'Max Leverage',
    stat2Sub: 'Capital efficient',
    stat3Title: 'Stocks Available',
    stat3Sub: 'Top US equities',

    // CTAs
    learnMore: 'Learn More',
    startTrading: 'Start Trading Now',

    // Simple Explanation
    simpleTitle: 'The',
    simpleTitleHighlight: 'Simple',
    simpleTitleEnd: ' Explanation',
    simpleSubtitle: 'An equity perpetual is a contract that tracks a stock price. That\'s it.',
    thinkTitle: 'Think of it like this:',
    think1: 'You think ',
    think1Bold: 'NVDA will go up',
    think2: 'You open a ',
    think2Bold: 'long position',
    think2End: ' with $100',
    think3: 'With 10x leverage, you control ',
    think3Bold: '$1,000 of exposure',
    think4: 'NVDA goes up 5% = you make ',
    think4Bold: '$50 (50% return)',
    positionTitle: 'Your Position',
    positionLong: 'Long 10x',
    margin: 'Margin',
    positionSize: 'Position Size',
    unrealizedPnl: 'Unrealized P&L',
    neverExpire: 'Unlike regular futures, perpetuals ',
    neverExpireBold: 'never expire',
    neverExpireEnd: '. Hold for 5 minutes or 5 months.',

    // Benefits
    benefitsTitle: 'Why Traders Are Switching',
    benefitsSubtitle: 'Equity perps solve the biggest frustrations with traditional stock trading',
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

    // How It Works
    howTitle: 'How It',
    howTitleHighlight: 'Actually',
    howSubtitle: 'The mechanics behind equity perpetuals in plain English',
    how1Title: 'Oracle Price Feeds',
    how1Desc: 'Equity perps track real stock prices using ',
    how1Bold: 'oracles',
    how1End: ' - services that pull live price data from stock exchanges and deliver it on-chain. Providers like Pyth aggregate prices from multiple sources to ensure accuracy.',
    how1Note: 'Updated every second during market hours',
    how2Title: 'Funding Rates Keep Prices Aligned',
    how2Desc: 'Every 1-8 hours, traders pay or receive ',
    how2Bold: 'funding',
    how2End: ' based on whether the perp price is above or below the oracle price. If perps trade above spot, longs pay shorts (pushing price down). This keeps perp prices closely tracking real stock prices.',
    how2HighLabel: 'Perp > Spot',
    how2HighDesc: 'Longs pay shorts',
    how2LowLabel: 'Perp < Spot',
    how2LowDesc: 'Shorts pay longs',
    how3Title: 'Leverage & Liquidation',
    how3Desc: 'Your ',
    how3Bold1: 'margin',
    how3Mid: ' is the collateral backing your position. With 10x leverage, a 10% adverse move would wipe out your margin. Before that happens, you get ',
    how3Bold2: 'liquidated',
    how3End: ' - your position is automatically closed to prevent further losses.',
    how3Tip: 'Pro tip:',
    how3TipText: ' Start with 2-5x leverage. Many beginners use 20x+ and get liquidated on normal volatility. Lower leverage = more room to be wrong.',

    // Getting Started
    startTitle: 'Get Set Up in',
    startTitleHighlight: '3 Simple Steps',
    startSubtitle: 'No application forms. No approval wait. No minimum balance.',
    startBadge: 'Less Than 10 Minutes',

    // Step 1
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    step1WhatTitle: 'What is a digital wallet?',
    step1WhatDesc: 'Think of it like a ',
    step1WhatBold: 'digital bank account',
    step1WhatEnd: ' that you fully control. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    step1Feature1: 'You control it',
    step1Feature2: 'Completely free',
    step1Feature3: '2 min setup',
    step1Feature4: 'Works globally',
    step1HowTitle: 'Here\'s how to set it up:',
    step1How1: 'Go to ',
    step1How1End: ' (it\'s the wallet we recommend)',
    step1How2: 'Click "Download" and add it to your browser (Chrome, Firefox, etc.)',
    step1How3: 'Click "Create New Wallet" and set a password',
    step1How4Title: 'Write down your 12-word recovery phrase',
    step1How4Desc: 'This is like a master password - keep it safe and never share it!',
    step1VideoTitle: 'Watch: 2-Minute Setup Guide',
    step1VideoDesc: 'This video walks you through every step. Follow along and you\'ll have your wallet ready in no time.',
    downloadRabby: 'Download Rabby',
    hideDetails: 'Hide Details',
    showDetails: 'Show Details',

    // Step 2
    step2Title: 'Fund with USDC',
    step2Desc: 'Transfer from Coinbase, Kraken, or Binance - or use card',
    step2Coinbase: 'From Coinbase',
    step2Kraken: 'From Kraken',
    step2Binance: 'From Binance',
    step2Fee: 'Fee:',
    step2Tip: 'Pro tip:',
    step2TipText: ' Always use Arbitrum network for lowest fees. Start with $50-100 to test. Funds arrive in 1-5 minutes.',

    // Step 3
    step3Title: 'Choose a Platform & Start Trading',
    step3Desc: 'Pick an equity perps venue - we recommend ',
    step3DescEnd: ' for beginners',
    step3Step1: 'Go to ',
    step3Step2: 'Click "Connect" and select Rabby Wallet',
    step3Step3: 'Deposit your USDC to the platform',
    step3Step4: 'Search for a stock (e.g., NVDA-PERP)',
    step3Step5: 'Choose Long or Short, set leverage, and trade!',
    openHyperliquid: 'Open Hyperliquid',
    mostPopular: 'Most popular platform',
    fullGuideLink: 'Read the complete wallet setup guide',

    // Risks
    risksTitle: 'Understand the Risks',
    risk1Title: 'Leverage amplifies losses',
    risk1Desc: ' - The same 10x that turns 5% into 50% gains also turns 5% losses into 50% losses',
    risk2Title: 'Liquidation is real',
    risk2Desc: ' - Your position can be closed automatically if it moves against you enough',
    risk3Title: 'Funding rates cost money',
    risk3Desc: ' - Holding positions costs money every few hours, especially on popular trades',
    risk4Title: 'No ownership',
    risk4Desc: ' - You\'re trading price exposure, not actual shares. No dividends, no voting rights',

    // Final CTA
    ctaTitle: 'Ready to Try It?',
    ctaSubtitle: 'Start with $50 and low leverage. See what 24/7 stock trading feels like.',
    ctaButton: 'Start on Hyperliquid',
    comparePlatforms: 'Compare All Platforms',

    // FAQ
    faq1Q: 'What is the difference between equity perps and regular stock trading?',
    faq1A: 'Equity perps let you trade with leverage (up to 200x), 24/7, without owning actual shares. Regular stocks require full capital, trade only during market hours, and give you ownership rights like dividends and voting.',
    faq2Q: 'How much money do I need to start trading equity perps?',
    faq2A: 'You can start with as little as $10-50 on most platforms. However, we recommend starting with at least $100-500 to have adequate margin and avoid immediate liquidation on small price moves.',
    faq3Q: 'Are equity perps legal?',
    faq3A: 'Equity perps exist in a regulatory gray area. Most platforms are decentralized and don\'t require KYC. Legality varies by jurisdiction. US residents should be aware these platforms typically operate outside US regulatory frameworks.',
    faq4Q: 'What happens if my position gets liquidated?',
    faq4A: 'When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won\'t owe additional money. Some platforms have insurance funds to prevent socialized losses.',
    faq5Q: 'Can I trade equity perps on weekends?',
    faq5A: 'Yes, most platforms like Hyperliquid and Lighter offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price.',
    faq6Q: 'What are funding rates and why do they matter?',
    faq6A: 'Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. If you hold a position, you either pay or receive funding every 1-8 hours depending on the platform.',

    // Footer
    backLink: 'Compare platforms',
    tradingPageLink: 'Trade Equity Perps in the Philippines',
  }
};

export default function AnoAngEquityPerpetuals() {
  const [lang, setLang] = useState<'tl' | 'en'>('tl');
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const t = translations[lang];
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ano Ang Equity Perpetuals? Kumpletong Gabay para sa mga Baguhan",
    "description": "Alamin kung ano ang equity perpetuals, paano ito gumagana, at bakit ginagamit ito ng mga trader. Gabay sa Filipino.",
    "inLanguage": "fil",
    "author": { "@type": "Organization", "name": "Compare Equity Perps" },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://compareequityperps.com/blog/ano-ang-equity-perpetuals"
    }
  };

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen">
        {/* HERO SECTION - Philippines Flag Colors: Blue (#0038A8), Red (#CE1126), Yellow (#FCD116) */}
        <section className="relative overflow-hidden">
          {/* Animated Background with Philippines colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            {/* Language Toggle */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setLang(lang === 'tl' ? 'en' : 'tl')}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {t.altLang}
              </button>
            </div>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">{t.home}</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">{t.learn}</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">{t.currentPage}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Badge - Philippines Yellow */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
                <span className="text-yellow-400 text-sm font-medium">{t.badge}</span>
              </div>

              {/* Main Headline - Philippines Blue accent */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                {t.heroTitle1}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400">
                  {t.heroTitle2}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t.heroSubtitle} <span className="text-white font-semibold">{t.heroStocks}</span>
                <span className="text-blue-400 font-semibold">{t.heroTime}</span>
                <span className="text-yellow-400 font-semibold">{t.heroLeverage}</span>{t.heroEnd}
              </p>

              {/* Quick Stats - Philippines colors */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">24</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat1Title}</div>
                    <div className="text-gray-500 text-sm">{t.stat1Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-yellow-400">200x</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat2Title}</div>
                    <div className="text-gray-500 text-sm">{t.stat2Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-red-400">50+</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat3Title}</div>
                    <div className="text-gray-500 text-sm">{t.stat3Sub}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Philippines gradient */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#simple-explanation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-blue-400 hover:via-yellow-400 hover:to-red-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
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

        {/* WHAT IS IT - Simple Explainer */}
        <section id="simple-explanation" className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.simpleTitle} <span className="text-blue-400">{t.simpleTitleHighlight}</span>{t.simpleTitleEnd}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t.simpleSubtitle}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t.thinkTitle}</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">1.</span>
                      <span>{t.think1}<strong className="text-white">{t.think1Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">2.</span>
                      <span>{t.think2}<strong className="text-white">{t.think2Bold}</strong>{t.think2End}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">3.</span>
                      <span>{t.think3}<strong className="text-white">{t.think3Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">4.</span>
                      <span>{t.think4}<strong className="text-green-400">{t.think4Bold}</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">{t.positionTitle}</div>
                    <div className="text-4xl font-black text-white mb-1">NVDA-PERP</div>
                    <div className="text-green-400 text-xl font-bold">{t.positionLong}</div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">{t.margin}</span>
                        <span className="text-white">$100</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">{t.positionSize}</span>
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
              {t.neverExpire}<strong className="text-white">{t.neverExpireBold}</strong>{t.neverExpireEnd}
            </p>
          </div>
        </section>

        {/* BENEFITS SECTION - Philippines colors */}
        <section id="benefits" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.benefitsTitle.split(' ').slice(0, -1).join(' ')} <span className="text-green-400">{t.benefitsTitle.split(' ').slice(-1)}</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t.benefitsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit 1 - 24/7 Trading */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit1Title}</h3>
                <p className="text-gray-400">{t.benefit1Desc}</p>
              </div>

              {/* Benefit 2 - Leverage */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit2Title}</h3>
                <p className="text-gray-400">{t.benefit2Desc}</p>
              </div>

              {/* Benefit 3 - Short Selling */}
              <div className="group bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit3Title}</h3>
                <p className="text-gray-400">{t.benefit3Desc}</p>
              </div>

              {/* Benefit 4 - No KYC */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit4Title}</h3>
                <p className="text-gray-400">{t.benefit4Desc}</p>
              </div>

              {/* Benefit 5 - Self-Custody */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit5Title}</h3>
                <p className="text-gray-400">{t.benefit5Desc}</p>
              </div>

              {/* Benefit 6 - Instant Settlement */}
              <div className="group bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit6Title}</h3>
                <p className="text-gray-400">{t.benefit6Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.howTitle} <span className="text-blue-400">{t.howTitleHighlight}</span> Works
              </h2>
              <p className="text-gray-400 text-lg">
                {t.howSubtitle}
              </p>
            </div>

            <div className="space-y-8">
              {/* Oracle Pricing */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.how1Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.how1Desc}<strong className="text-white">{t.how1Bold}</strong>{t.how1End}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t.how1Note}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding Rates */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.how2Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.how2Desc}<strong className="text-white">{t.how2Bold}</strong>{t.how2End}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-semibold">{t.how2HighLabel}</div>
                        <div className="text-gray-500 text-sm">{t.how2HighDesc}</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-red-400 font-semibold">{t.how2LowLabel}</div>
                        <div className="text-gray-500 text-sm">{t.how2LowDesc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leverage & Liquidation */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.how3Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.how3Desc}<strong className="text-white">{t.how3Bold1}</strong>{t.how3Mid}<strong className="text-white">{t.how3Bold2}</strong>{t.how3End}
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <p className="text-yellow-400 text-sm">
                        <strong>{t.how3Tip}</strong>{t.how3TipText}
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
                <span className="text-green-400 font-medium">{t.startBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.startTitle} <span className="text-green-400">{t.startTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg">
                {t.startSubtitle}
              </p>
            </div>

            {/* Step 1 - Wallet Setup (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-blue-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-500/50 transition-colors"
                onClick={() => setWalletExpanded(!walletExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                    <p className="text-gray-400">{t.step1Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 text-sm font-medium hidden sm:block">
                      {walletExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-blue-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
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
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
                      <h4 className="text-blue-400 font-semibold mb-2">{t.step1WhatTitle}</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {t.step1WhatDesc}<strong className="text-white">{t.step1WhatBold}</strong>{t.step1WhatEnd}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#128274;</div>
                          <span className="text-gray-400">{t.step1Feature1}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#127381;</div>
                          <span className="text-gray-400">{t.step1Feature2}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#9889;</div>
                          <span className="text-gray-400">{t.step1Feature3}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#127757;</div>
                          <span className="text-gray-400">{t.step1Feature4}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-4">{t.step1HowTitle}</h4>
                        <ol className="space-y-3 text-gray-300">
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold flex-shrink-0">1</span>
                            <span>{t.step1How1}<a href="https://rabby.io" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">rabby.io</a>{t.step1How1End}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold flex-shrink-0">2</span>
                            <span>{t.step1How2}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold flex-shrink-0">3</span>
                            <span>{t.step1How3}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold flex-shrink-0">4</span>
                            <div>
                              <strong className="text-white">{t.step1How4Title}</strong>
                              <p className="text-gray-500 text-xs mt-1">{t.step1How4Desc}</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-5">
                        <h4 className="text-white font-semibold mb-3">{t.step1VideoTitle}</h4>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                          <iframe
                            src="https://www.youtube.com/embed/_ouAzSQJiM0"
                            title="How to Set Up a Wallet for Trading Equity Perps"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <p className="text-gray-500 text-xs mb-3">
                          {t.step1VideoDesc}
                        </p>
                        <a
                          href="https://rabby.io"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm hover:bg-blue-400 transition-colors"
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
                className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-yellow-500/50 transition-colors"
                onClick={() => setFundingExpanded(!fundingExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step2Title}</h3>
                    <p className="text-gray-400">{t.step2Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400 text-sm font-medium hidden sm:block">
                      {fundingExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-yellow-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
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
                        <h4 className="text-blue-400 font-semibold mb-2">{t.step2Coinbase}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          <li>1. Go to Send/Receive</li>
                          <li>2. Select USDC</li>
                          <li>3. Paste your Rabby address</li>
                          <li>4. Choose <strong className="text-white">Arbitrum</strong> network</li>
                          <li>5. Confirm send</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.step2Fee} ~$0.10 on Arbitrum</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                        <h4 className="text-purple-400 font-semibold mb-2">{t.step2Kraken}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          <li>1. Go to Funding - Withdraw</li>
                          <li>2. Search USDC</li>
                          <li>3. Add your Rabby address</li>
                          <li>4. Select <strong className="text-white">Arbitrum One</strong></li>
                          <li>5. Confirm with 2FA</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.step2Fee} ~$1-3</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <h4 className="text-yellow-400 font-semibold mb-2">{t.step2Binance}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          <li>1. Wallet - Withdraw</li>
                          <li>2. Select USDC</li>
                          <li>3. Paste your Rabby address</li>
                          <li>4. Network: <strong className="text-white">Arbitrum</strong></li>
                          <li>5. Complete verification</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.step2Fee} ~$0.50</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl">
                      <p className="text-gray-400 text-sm">
                        <strong className="text-white">{t.step2Tip}</strong>{t.step2TipText}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 - Choose Platform & Trade */}
            <div className="mb-8">
              <div className="bg-gray-900 border-2 border-red-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t.step3Title}</h3>
                    <p className="text-gray-400">{t.step3Desc}<a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-blue-400 hover:text-blue-300">Hyperliquid</a>{t.step3DescEnd}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5">
                    <ol className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">1</span>
                        <span>{t.step3Step1}<a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-blue-400 hover:text-blue-300">app.hyperliquid.xyz</a></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">2</span>
                        <span>{t.step3Step2}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">3</span>
                        <span>{t.step3Step3}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">4</span>
                        <span>{t.step3Step4}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">5</span>
                        <span>{t.step3Step5}</span>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={hyperliquid?.referralUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-[#3EEFC1]/20 to-[#3EEFC1]/5 border-2 border-[#3EEFC1]/50 rounded-2xl hover:border-[#3EEFC1] transition-all group"
                    >
                      <div className="text-5xl">&#128640;</div>
                      <span className="text-xl font-bold text-white group-hover:text-[#3EEFC1] transition-colors">{t.openHyperliquid}</span>
                      <span className="text-gray-400 text-sm">{t.mostPopular}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Guide Link */}
            <div className="text-center">
              <Link
                href="/blog/wallet-setup-guide"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                {t.fullGuideLink}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* RISKS SECTION */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">&#9888;&#65039; {t.risksTitle}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk1Title}</strong>{t.risk1Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk2Title}</strong>{t.risk2Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk3Title}</strong>{t.risk3Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk4Title}</strong>{t.risk4Desc}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA - Philippines colors */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 via-yellow-500/10 to-red-500/20 border border-blue-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  {t.ctaTitle}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  {t.ctaSubtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-blue-400 hover:via-yellow-400 hover:to-red-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                  >
                    {t.ctaButton}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-gray-800 border border-gray-700 text-white rounded-2xl font-semibold hover:bg-gray-700 transition-all"
                  >
                    {t.comparePlatforms}
                  </Link>
                </div>

                {/* Link to Philippines trading page */}
                <div className="mt-8">
                  <Link
                    href="/countries/philippines"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                  >
                    {t.tradingPageLink}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Custom implementation for Filipino */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              {lang === 'tl' ? 'Mga Madalas na Tanong' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="text-white font-medium pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-5 pb-5 text-gray-400">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="py-12 text-center border-t border-gray-800">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.backLink}
          </Link>
        </div>
      </article>
    </>
  );
}
