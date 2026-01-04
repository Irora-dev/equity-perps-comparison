'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

// Comprehensive translations object for Hindi and English
const translations = {
  hi: {
    // Meta & Navigation
    home: 'होम',
    blog: 'ब्लॉग',
    pageTitle: 'इक्विटी परपेचुअल्स क्या हैं',
    breadcrumb: 'इक्विटी परपेचुअल्स क्या हैं',

    // Language Toggle
    switchToEnglish: 'Switch to English',
    switchToHindi: 'हिंदी में देखें',

    // Hero Section
    badge: 'शुरुआती गाइड',
    heroTitle1: 'इक्विटी परपेचुअल्स',
    heroTitle2: 'क्या हैं?',
    heroDescription: 'सोचिए कि आप शनिवार रात 2 बजे Tesla, Nvidia और Apple ट्रेड कर रहे हैं — 50x लीवरेज के साथ। कोई ब्रोकर नहीं। कोई अप्रूवल नहीं। बस आप और मार्केट।',

    // Quick Stats
    stat1Title: 'घंटे रोज़',
    stat1Subtitle: 'हफ्ते के 7 दिन',
    stat2Title: 'मैक्स लीवरेज',
    stat2Subtitle: 'कैपिटल एफिशिएंट',
    stat3Title: 'स्टॉक्स उपलब्ध',
    stat3Subtitle: 'टॉप US इक्विटीज़',

    // CTA Buttons
    learnMore: 'और जानें',
    startTrading: 'अभी ट्रेडिंग शुरू करें',

    // Simple Explanation Section
    simpleTitle: 'सरल',
    simpleExplanation: 'व्याख्या',
    simpleSubtitle: 'इक्विटी परपेचुअल एक कॉन्ट्रैक्ट है जो स्टॉक की कीमत को ट्रैक करता है। बस इतना ही।',
    thinkOfIt: 'इसे ऐसे समझिए:',
    step1: 'आपको लगता है NVDA ऊपर जाएगा',
    step2: 'आप $100 के साथ लॉन्ग पोजीशन खोलते हैं',
    step3: '10x लीवरेज के साथ, आप $1,000 का एक्सपोज़र कंट्रोल करते हैं',
    step4: 'NVDA 5% ऊपर जाता है = आप $50 कमाते हैं (50% रिटर्न)',

    // Position Display
    positionTitle: 'आपकी पोजीशन',
    positionType: 'लॉन्ग 10x',
    margin: 'मार्जिन',
    positionSize: 'पोजीशन साइज़',
    unrealizedPnL: 'अनरियलाइज़्ड P&L',

    noExpiry: 'रेगुलर फ्यूचर्स के विपरीत, परपेचुअल्स कभी एक्सपायर नहीं होते। 5 मिनट या 5 महीने तक होल्ड करें।',

    // Benefits Section
    benefitsTitle: 'ट्रेडर्स क्यों',
    benefitsHighlight: 'स्विच कर रहे हैं',
    benefitsSubtitle: 'इक्विटी परप्स पारंपरिक स्टॉक ट्रेडिंग की सबसे बड़ी समस्याओं को हल करते हैं',

    benefit1Title: '24/7 ट्रेडिंग',
    benefit1Desc: 'मार्केट कभी बंद नहीं होते। आधी रात को Tesla, रविवार को Apple, क्रिसमस पर Nvidia ट्रेड करें। न्यूज़ पर रियल-टाइम रिएक्ट करें, अगली सुबह नहीं।',

    benefit2Title: '200x तक लीवरेज',
    benefit2Desc: '$50 से $10,000 का स्टॉक कंट्रोल करें। अपने गेन्स (और लॉसेस) को एम्प्लीफाई करें। पारंपरिक मार्जिन अकाउंट्स से कहीं ज़्यादा कैपिटल एफिशिएंट।',

    benefit3Title: 'आसान शॉर्ट सेलिंग',
    benefit3Desc: 'लगता है स्टॉक गिरेगा? तुरंत शॉर्ट करें। शेयर्स उधार लेने की ज़रूरत नहीं, कोई हार्ड-टू-बॉरो फीस नहीं, कोई प्रतिबंध नहीं। बस सेल पर क्लिक करें।',

    benefit4Title: 'KYC की ज़रूरत नहीं',
    benefit4Desc: 'कोई ID अपलोड नहीं। अप्रूवल का इंतज़ार नहीं। कोई पर्सनल डेटा कलेक्ट नहीं। अपना वॉलेट कनेक्ट करें और मिनटों में ट्रेडिंग शुरू करें।',

    benefit5Title: 'सेल्फ-कस्टडी',
    benefit5Desc: 'आपके फंड्स आपके वॉलेट में रहते हैं। कोई ब्रोकर आपका पैसा नहीं रखता। कोई फ्रीज़ नहीं। कोई विड्रॉल लिमिट नहीं। आप अपने एसेट्स कंट्रोल करते हैं।',

    benefit6Title: 'इंस्टैंट सेटलमेंट',
    benefit6Desc: 'T+2 का इंतज़ार नहीं। प्रॉफिट्स तुरंत उपलब्ध। पोजीशन बंद करें और सेकंड्स में वॉलेट में विड्रॉ करें।',

    // How It Works Section
    howItWorksTitle: 'यह',
    howItWorksHighlight: 'कैसे',
    howItWorksTitle2: 'काम करता है',
    howItWorksSubtitle: 'इक्विटी परपेचुअल्स की मैकेनिक्स सरल भाषा में',

    oracleTitle: 'ओरेकल प्राइस फीड्स',
    oracleDesc: 'इक्विटी परप्स रियल स्टॉक प्राइसेस को ओरेकल्स का उपयोग करके ट्रैक करते हैं — ये सर्विसेज़ स्टॉक एक्सचेंजों से लाइव प्राइस डेटा लेती हैं और ऑन-चेन डिलीवर करती हैं। Pyth जैसे प्रोवाइडर्स एक्यूरेसी के लिए मल्टीपल सोर्सेज़ से प्राइसेस एग्रीगेट करते हैं।',
    oracleNote: 'मार्केट आवर्स में हर सेकंड अपडेट',

    fundingTitle: 'फंडिंग रेट्स प्राइसेस को अलाइन रखते हैं',
    fundingDesc: 'हर 1-8 घंटे में, ट्रेडर्स इस बात पर आधारित फंडिंग पे या रिसीव करते हैं कि परप प्राइस ओरेकल प्राइस से ऊपर है या नीचे। अगर परप्स स्पॉट से ऊपर ट्रेड करते हैं, तो लॉन्ग्स शॉर्ट्स को पे करते हैं (प्राइस नीचे पुश होता है)। यह परप प्राइसेस को रियल स्टॉक प्राइसेस के करीब रखता है।',
    perpAboveSpot: 'परप > स्पॉट',
    longsPayShorts: 'लॉन्ग्स शॉर्ट्स को पे करते हैं',
    perpBelowSpot: 'परप < स्पॉट',
    shortsPayLongs: 'शॉर्ट्स लॉन्ग्स को पे करते हैं',

    leverageTitle: 'लीवरेज और लिक्विडेशन',
    leverageDesc: 'आपका मार्जिन आपकी पोजीशन को बैक करने वाला कोलैटरल है। 10x लीवरेज के साथ, 10% का विपरीत मूव आपका मार्जिन खत्म कर देगा। इससे पहले, आप लिक्विडेट हो जाते हैं — आपकी पोजीशन ऑटोमैटिकली बंद हो जाती है ताकि और नुकसान न हो।',
    proTip: 'प्रो टिप:',
    proTipDesc: '2-5x लीवरेज से शुरू करें। बहुत से बिगिनर्स 20x+ यूज़ करते हैं और नॉर्मल वोलैटिलिटी पर लिक्विडेट हो जाते हैं। कम लीवरेज = गलत होने की ज़्यादा गुंजाइश।',

    // Getting Started Section
    gettingStartedBadge: '10 मिनट से कम',
    gettingStartedTitle: '3 सिंपल स्टेप्स',
    gettingStartedTitle2: 'में सेटअप करें',
    gettingStartedSubtitle: 'कोई एप्लिकेशन फॉर्म नहीं। कोई अप्रूवल वेट नहीं। कोई मिनिमम बैलेंस नहीं।',

    step1Title: 'अपना डिजिटल वॉलेट सेट करें',
    step1Subtitle: 'फ्री, 2 मिनट लगते हैं, और यह सिर्फ एक बार करना है',
    hideDetails: 'डिटेल्स छुपाएं',
    showDetails: 'डिटेल्स देखें',

    walletExplainerTitle: 'डिजिटल वॉलेट क्या है?',
    walletExplainerDesc: 'इसे एक डिजिटल बैंक अकाउंट की तरह समझें जिसे आप पूरी तरह कंट्रोल करते हैं। बैंक आपका पैसा रखने के बजाय, आप खुद एक सिंपल ब्राउज़र एक्सटेंशन से रखते हैं।',
    walletFeature1: 'आप कंट्रोल करते हैं',
    walletFeature2: 'बिल्कुल फ्री',
    walletFeature3: '2 मिनट सेटअप',
    walletFeature4: 'ग्लोबली काम करता है',

    walletStepsTitle: 'सेटअप कैसे करें:',
    walletStep1: 'rabby.io पर जाएं (यह हमारा रेकमेंडेड वॉलेट है)',
    walletStep2: '"Download" पर क्लिक करें और अपने ब्राउज़र में ऐड करें (Chrome, Firefox, etc.)',
    walletStep3: '"Create New Wallet" पर क्लिक करें और पासवर्ड सेट करें',
    walletStep4Title: 'अपना 12-वर्ड रिकवरी फ्रेज़ लिख लें',
    walletStep4Note: 'यह मास्टर पासवर्ड जैसा है — इसे सुरक्षित रखें और कभी शेयर न करें!',

    watchVideoTitle: 'देखें: 2-मिनट सेटअप गाइड',
    watchVideoDesc: 'यह वीडियो आपको हर स्टेप समझाता है। साथ फॉलो करें और आपका वॉलेट जल्दी तैयार हो जाएगा।',
    downloadRabby: 'Rabby डाउनलोड करें',

    step2Title: 'USDC से फंड करें',
    step2Subtitle: 'Coinbase, Kraken, या Binance से ट्रांसफर करें — या कार्ड यूज़ करें',

    fromCoinbase: 'Coinbase से',
    coinbaseStep1: '1. Send/Receive पर जाएं',
    coinbaseStep2: '2. USDC सेलेक्ट करें',
    coinbaseStep3: '3. अपना Rabby एड्रेस पेस्ट करें',
    coinbaseStep4: '4. Arbitrum नेटवर्क चुनें',
    coinbaseStep5: '5. सेंड कन्फर्म करें',
    coinbaseFee: 'फीस: ~$0.10 Arbitrum पर',

    fromKraken: 'Kraken से',
    krakenStep1: '1. Funding → Withdraw पर जाएं',
    krakenStep2: '2. USDC सर्च करें',
    krakenStep3: '3. अपना Rabby एड्रेस ऐड करें',
    krakenStep4: '4. Arbitrum One सेलेक्ट करें',
    krakenStep5: '5. 2FA से कन्फर्म करें',
    krakenFee: 'फीस: ~$1-3',

    fromBinance: 'Binance से',
    binanceStep1: '1. Wallet → Withdraw',
    binanceStep2: '2. USDC सेलेक्ट करें',
    binanceStep3: '3. अपना Rabby एड्रेस पेस्ट करें',
    binanceStep4: '4. नेटवर्क: Arbitrum',
    binanceStep5: '5. वेरिफिकेशन पूरा करें',
    binanceFee: 'फीस: ~$0.50',

    fundingProTip: 'प्रो टिप:',
    fundingProTipDesc: 'सबसे कम फीस के लिए हमेशा Arbitrum नेटवर्क यूज़ करें। टेस्ट के लिए $50-100 से शुरू करें। फंड्स 1-5 मिनट में आ जाते हैं।',

    step3Title: 'प्लेटफॉर्म चुनें और ट्रेडिंग शुरू करें',
    step3Subtitle: 'इक्विटी परप्स वेन्यू चुनें — हम बिगिनर्स के लिए Hyperliquid रेकमेंड करते हैं',

    platformStep1: 'app.hyperliquid.xyz पर जाएं',
    platformStep2: '"Connect" पर क्लिक करें और Rabby Wallet सेलेक्ट करें',
    platformStep3: 'अपना USDC प्लेटफॉर्म में डिपॉज़िट करें',
    platformStep4: 'स्टॉक सर्च करें (जैसे, NVDA-PERP)',
    platformStep5: 'Long या Short चुनें, लीवरेज सेट करें, और ट्रेड करें!',

    openHyperliquid: 'Hyperliquid खोलें',
    mostPopular: 'सबसे पॉपुलर प्लेटफॉर्म',

    completeGuideLink: 'पूरी वॉलेट सेटअप गाइड पढ़ें',

    // Risks Section
    risksTitle: 'रिस्क समझें',
    risk1Title: 'लीवरेज लॉसेस को भी एम्प्लीफाई करता है',
    risk1Desc: 'वही 10x जो 5% को 50% गेन में बदलता है, 5% लॉस को भी 50% लॉस में बदलता है',
    risk2Title: 'लिक्विडेशन रियल है',
    risk2Desc: 'आपकी पोजीशन ऑटोमैटिकली बंद हो सकती है अगर यह आपके खिलाफ काफी मूव करे',
    risk3Title: 'फंडिंग रेट्स की कॉस्ट',
    risk3Desc: 'पोजीशन होल्ड करने में हर कुछ घंटे पैसे लगते हैं, खासकर पॉपुलर ट्रेड्स पर',
    risk4Title: 'कोई ओनरशिप नहीं',
    risk4Desc: 'आप प्राइस एक्सपोज़र ट्रेड कर रहे हैं, एक्चुअल शेयर्स नहीं। कोई डिविडेंड्स नहीं, कोई वोटिंग राइट्स नहीं',

    // FAQ Section
    faqTitle: 'अक्सर पूछे जाने वाले सवाल',

    faq1Question: 'इक्विटी परप्स और रेगुलर स्टॉक ट्रेडिंग में क्या फर्क है?',
    faq1Answer: 'इक्विटी परप्स आपको लीवरेज (200x तक), 24/7 ट्रेड करने देते हैं, बिना असली शेयर्स के मालिक बने। रेगुलर स्टॉक्स में पूरी कैपिटल लगती है, सिर्फ मार्केट आवर्स में ट्रेड होते हैं, और डिविडेंड्स और वोटिंग जैसे ओनरशिप राइट्स मिलते हैं।',

    faq2Question: 'इक्विटी परप्स ट्रेड करने के लिए कितने पैसे चाहिए?',
    faq2Answer: 'ज़्यादातर प्लेटफॉर्म्स पर $10-50 से शुरू कर सकते हैं। हालांकि, हम कम से कम $100-500 से शुरू करने की सलाह देते हैं ताकि पर्याप्त मार्जिन हो और छोटे प्राइस मूव्स पर तुरंत लिक्विडेशन से बचें।',

    faq3Question: 'क्या इक्विटी परप्स लीगल हैं?',
    faq3Answer: 'इक्विटी परप्स रेगुलेटरी ग्रे एरिया में हैं। ज़्यादातर प्लेटफॉर्म्स डिसेंट्रलाइज़्ड हैं और KYC की ज़रूरत नहीं होती। वैधता जूरिस्डिक्शन के हिसाब से अलग है। भारतीय निवासकों को पता होना चाहिए कि ये प्लेटफॉर्म्स आमतौर पर भारतीय रेगुलेटरी फ्रेमवर्क के बाहर काम करते हैं।',

    faq4Question: 'अगर मेरी पोजीशन लिक्विडेट हो जाए तो क्या होता है?',
    faq4Answer: 'जब आपकी पोजीशन लिक्विडेट होती है, तो आपका मार्जिन पोजीशन बंद करने और लॉसेस कवर करने में यूज़ होता है। आप अपना डिपॉज़िटेड मार्जिन खो देते हैं लेकिन अतिरिक्त पैसे देने की ज़रूरत नहीं। कुछ प्लेटफॉर्म्स में सोशलाइज़्ड लॉसेस रोकने के लिए इंश्योरेंस फंड्स होते हैं।',

    faq5Question: 'क्या मैं वीकेंड पर इक्विटी परप्स ट्रेड कर सकता हूं?',
    faq5Answer: 'हां, Hyperliquid और Lighter जैसे ज़्यादातर प्लेटफॉर्म्स 24/7 ट्रेडिंग ऑफर करते हैं। हालांकि, वीकेंड पर प्राइसेस कम वोलैटाइल हो सकते हैं क्योंकि ट्रेडिशनल स्टॉक मार्केट्स बंद होते हैं और ओरेकल्स लास्ट क्लोज़िंग प्राइस यूज़ करते हैं।',

    faq6Question: 'फंडिंग रेट्स क्या हैं और क्यों मैटर करते हैं?',
    faq6Answer: 'फंडिंग रेट्स लॉन्ग और शॉर्ट ट्रेडर्स के बीच पीरियॉडिक पेमेंट्स हैं जो परप प्राइसेस को स्पॉट प्राइसेस के साथ अलाइन रखते हैं। अगर आप पोजीशन होल्ड करते हैं, तो प्लेटफॉर्म के हिसाब से हर 1-8 घंटे में फंडिंग पे या रिसीव करते हैं।',

    // CTA Section
    ctaTitle: 'ट्राई करने के लिए तैयार?',
    ctaDescription: '$50 और कम लीवरेज से शुरू करें। देखें 24/7 स्टॉक ट्रेडिंग कैसी लगती है।',
    ctaButton: 'Hyperliquid पर शुरू करें',
    ctaSecondaryButton: 'सभी प्लेटफॉर्म्स की तुलना करें',

    // India CTA
    indiaCtaTitle: 'भारत से ट्रेड करें',
    indiaCtaDescription: 'भारत में US स्टॉक्स 24/7 ट्रेड करने की पूरी गाइड पढ़ें।',
    indiaCtaButton: 'भारत ट्रेडिंग गाइड',

    // Back Link
    backToCompare: 'प्लेटफॉर्म्स की तुलना करें',

    // Footer Notice
    footerNotice: 'यह साइट 24/7 स्टॉक ट्रेड करने के सर्वश्रेष्ठ प्लेटफॉर्म की तुलना के लिए 100% मुफ्त है।',
  },
  en: {
    // Meta & Navigation
    home: 'Home',
    blog: 'Learn',
    pageTitle: 'What Are Equity Perpetuals',
    breadcrumb: 'What Are Equity Perpetuals',

    // Language Toggle
    switchToEnglish: 'Switch to English',
    switchToHindi: 'हिंदी में देखें',

    // Hero Section
    badge: 'Beginner Guide',
    heroTitle1: 'What Are',
    heroTitle2: 'Equity Perpetuals?',
    heroDescription: 'Imagine trading Tesla, Nvidia, and Apple at 2am on a Saturday with 50x leverage. No broker. No approval. Just you and the markets.',

    // Quick Stats
    stat1Title: 'Hours a Day',
    stat1Subtitle: '7 days a week',
    stat2Title: 'Max Leverage',
    stat2Subtitle: 'Capital efficient',
    stat3Title: 'Stocks Available',
    stat3Subtitle: 'Top US equities',

    // CTA Buttons
    learnMore: 'Learn More',
    startTrading: 'Start Trading Now',

    // Simple Explanation Section
    simpleTitle: 'Simple',
    simpleExplanation: 'Explanation',
    simpleSubtitle: 'An equity perpetual is a contract that tracks a stock price. That\'s it.',
    thinkOfIt: 'Think of it like this:',
    step1: 'You think NVDA will go up',
    step2: 'You open a long position with $100',
    step3: 'With 10x leverage, you control $1,000 of exposure',
    step4: 'NVDA goes up 5% = you make $50 (50% return)',

    // Position Display
    positionTitle: 'Your Position',
    positionType: 'Long 10x',
    margin: 'Margin',
    positionSize: 'Position Size',
    unrealizedPnL: 'Unrealized P&L',

    noExpiry: 'Unlike regular futures, perpetuals never expire. Hold for 5 minutes or 5 months.',

    // Benefits Section
    benefitsTitle: 'Why Traders Are',
    benefitsHighlight: 'Switching',
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

    // How It Works Section
    howItWorksTitle: 'How It',
    howItWorksHighlight: 'Actually',
    howItWorksTitle2: 'Works',
    howItWorksSubtitle: 'The mechanics behind equity perpetuals in plain English',

    oracleTitle: 'Oracle Price Feeds',
    oracleDesc: 'Equity perps track real stock prices using oracles — services that pull live price data from stock exchanges and deliver it on-chain. Providers like Pyth aggregate prices from multiple sources to ensure accuracy.',
    oracleNote: 'Updated every second during market hours',

    fundingTitle: 'Funding Rates Keep Prices Aligned',
    fundingDesc: 'Every 1-8 hours, traders pay or receive funding based on whether the perp price is above or below the oracle price. If perps trade above spot, longs pay shorts (pushing price down). This keeps perp prices closely tracking real stock prices.',
    perpAboveSpot: 'Perp > Spot',
    longsPayShorts: 'Longs pay shorts',
    perpBelowSpot: 'Perp < Spot',
    shortsPayLongs: 'Shorts pay longs',

    leverageTitle: 'Leverage & Liquidation',
    leverageDesc: 'Your margin is the collateral backing your position. With 10x leverage, a 10% adverse move would wipe out your margin. Before that happens, you get liquidated — your position is automatically closed to prevent further losses.',
    proTip: 'Pro tip:',
    proTipDesc: 'Start with 2-5x leverage. Many beginners use 20x+ and get liquidated on normal volatility. Lower leverage = more room to be wrong.',

    // Getting Started Section
    gettingStartedBadge: 'Less Than 10 Minutes',
    gettingStartedTitle: 'Get Set Up in',
    gettingStartedTitle2: '3 Simple Steps',
    gettingStartedSubtitle: 'No application forms. No approval wait. No minimum balance.',

    step1Title: 'Set Up Your Digital Wallet',
    step1Subtitle: 'Free, takes 2 minutes, and you only do this once',
    hideDetails: 'Hide Details',
    showDetails: 'Show Details',

    walletExplainerTitle: 'What is a digital wallet?',
    walletExplainerDesc: 'Think of it like a digital bank account that you fully control. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeature1: 'You control it',
    walletFeature2: 'Completely free',
    walletFeature3: '2 min setup',
    walletFeature4: 'Works globally',

    walletStepsTitle: 'Here\'s how to set it up:',
    walletStep1: 'Go to rabby.io (it\'s the wallet we recommend)',
    walletStep2: 'Click "Download" and add it to your browser (Chrome, Firefox, etc.)',
    walletStep3: 'Click "Create New Wallet" and set a password',
    walletStep4Title: 'Write down your 12-word recovery phrase',
    walletStep4Note: 'This is like a master password — keep it safe and never share it!',

    watchVideoTitle: 'Watch: 2-Minute Setup Guide',
    watchVideoDesc: 'This video walks you through every step. Follow along and you\'ll have your wallet ready in no time.',
    downloadRabby: 'Download Rabby',

    step2Title: 'Fund with USDC',
    step2Subtitle: 'Transfer from Coinbase, Kraken, or Binance — or use card',

    fromCoinbase: 'From Coinbase',
    coinbaseStep1: '1. Go to Send/Receive',
    coinbaseStep2: '2. Select USDC',
    coinbaseStep3: '3. Paste your Rabby address',
    coinbaseStep4: '4. Choose Arbitrum network',
    coinbaseStep5: '5. Confirm send',
    coinbaseFee: 'Fee: ~$0.10 on Arbitrum',

    fromKraken: 'From Kraken',
    krakenStep1: '1. Go to Funding → Withdraw',
    krakenStep2: '2. Search USDC',
    krakenStep3: '3. Add your Rabby address',
    krakenStep4: '4. Select Arbitrum One',
    krakenStep5: '5. Confirm with 2FA',
    krakenFee: 'Fee: ~$1-3',

    fromBinance: 'From Binance',
    binanceStep1: '1. Wallet → Withdraw',
    binanceStep2: '2. Select USDC',
    binanceStep3: '3. Paste your Rabby address',
    binanceStep4: '4. Network: Arbitrum',
    binanceStep5: '5. Complete verification',
    binanceFee: 'Fee: ~$0.50',

    fundingProTip: 'Pro tip:',
    fundingProTipDesc: 'Always use Arbitrum network for lowest fees. Start with $50-100 to test. Funds arrive in 1-5 minutes.',

    step3Title: 'Choose a Platform & Start Trading',
    step3Subtitle: 'Pick an equity perps venue — we recommend Hyperliquid for beginners',

    platformStep1: 'Go to app.hyperliquid.xyz',
    platformStep2: 'Click "Connect" and select Rabby Wallet',
    platformStep3: 'Deposit your USDC to the platform',
    platformStep4: 'Search for a stock (e.g., NVDA-PERP)',
    platformStep5: 'Choose Long or Short, set leverage, and trade!',

    openHyperliquid: 'Open Hyperliquid',
    mostPopular: 'Most popular platform',

    completeGuideLink: 'Read the complete wallet setup guide',

    // Risks Section
    risksTitle: 'Understand the Risks',
    risk1Title: 'Leverage amplifies losses',
    risk1Desc: 'The same 10x that turns 5% into 50% gains also turns 5% losses into 50% losses',
    risk2Title: 'Liquidation is real',
    risk2Desc: 'Your position can be closed automatically if it moves against you enough',
    risk3Title: 'Funding rates cost money',
    risk3Desc: 'Holding positions costs money every few hours, especially on popular trades',
    risk4Title: 'No ownership',
    risk4Desc: 'You\'re trading price exposure, not actual shares. No dividends, no voting rights',

    // FAQ Section
    faqTitle: 'Frequently Asked Questions',

    faq1Question: 'What is the difference between equity perps and regular stock trading?',
    faq1Answer: 'Equity perps let you trade with leverage (up to 200x), 24/7, without owning actual shares. Regular stocks require full capital, trade only during market hours, and give you ownership rights like dividends and voting.',

    faq2Question: 'How much money do I need to start trading equity perps?',
    faq2Answer: 'You can start with as little as $10-50 on most platforms. However, we recommend starting with at least $100-500 to have adequate margin and avoid immediate liquidation on small price moves.',

    faq3Question: 'Are equity perps legal?',
    faq3Answer: 'Equity perps exist in a regulatory gray area. Most platforms are decentralized and don\'t require KYC. Legality varies by jurisdiction. Indian residents should be aware these platforms typically operate outside Indian regulatory frameworks.',

    faq4Question: 'What happens if my position gets liquidated?',
    faq4Answer: 'When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won\'t owe additional money. Some platforms have insurance funds to prevent socialized losses.',

    faq5Question: 'Can I trade equity perps on weekends?',
    faq5Answer: 'Yes, most platforms like Hyperliquid and Lighter offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price.',

    faq6Question: 'What are funding rates and why do they matter?',
    faq6Answer: 'Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. If you hold a position, you either pay or receive funding every 1-8 hours depending on the platform.',

    // CTA Section
    ctaTitle: 'Ready to Try It?',
    ctaDescription: 'Start with $50 and low leverage. See what 24/7 stock trading feels like.',
    ctaButton: 'Start on Hyperliquid',
    ctaSecondaryButton: 'Compare All Platforms',

    // India CTA
    indiaCtaTitle: 'Trade from India',
    indiaCtaDescription: 'Read the complete guide to trading US stocks 24/7 from India.',
    indiaCtaButton: 'India Trading Guide',

    // Back Link
    backToCompare: 'Compare platforms',

    // Footer Notice
    footerNotice: 'This site is 100% free to use for comparing the best platforms to trade stocks 24/7.',
  },
};

const faqs = {
  hi: [
    {
      question: 'इक्विटी परप्स और रेगुलर स्टॉक ट्रेडिंग में क्या फर्क है?',
      answer: 'इक्विटी परप्स आपको लीवरेज (200x तक), 24/7 ट्रेड करने देते हैं, बिना असली शेयर्स के मालिक बने। रेगुलर स्टॉक्स में पूरी कैपिटल लगती है, सिर्फ मार्केट आवर्स में ट्रेड होते हैं, और डिविडेंड्स और वोटिंग जैसे ओनरशिप राइट्स मिलते हैं।',
    },
    {
      question: 'इक्विटी परप्स ट्रेड करने के लिए कितने पैसे चाहिए?',
      answer: 'ज़्यादातर प्लेटफॉर्म्स पर $10-50 से शुरू कर सकते हैं। हालांकि, हम कम से कम $100-500 से शुरू करने की सलाह देते हैं ताकि पर्याप्त मार्जिन हो और छोटे प्राइस मूव्स पर तुरंत लिक्विडेशन से बचें।',
    },
    {
      question: 'क्या इक्विटी परप्स भारत में लीगल हैं?',
      answer: 'इक्विटी परप्स रेगुलेटरी ग्रे एरिया में हैं। ज़्यादातर प्लेटफॉर्म्स डिसेंट्रलाइज़्ड हैं और KYC की ज़रूरत नहीं होती। वैधता जूरिस्डिक्शन के हिसाब से अलग है। भारतीय निवासकों को पता होना चाहिए कि ये प्लेटफॉर्म्स आमतौर पर भारतीय रेगुलेटरी फ्रेमवर्क के बाहर काम करते हैं।',
    },
    {
      question: 'अगर मेरी पोजीशन लिक्विडेट हो जाए तो क्या होता है?',
      answer: 'जब आपकी पोजीशन लिक्विडेट होती है, तो आपका मार्जिन पोजीशन बंद करने और लॉसेस कवर करने में यूज़ होता है। आप अपना डिपॉज़िटेड मार्जिन खो देते हैं लेकिन अतिरिक्त पैसे देने की ज़रूरत नहीं। कुछ प्लेटफॉर्म्स में सोशलाइज़्ड लॉसेस रोकने के लिए इंश्योरेंस फंड्स होते हैं।',
    },
    {
      question: 'क्या मैं वीकेंड पर इक्विटी परप्स ट्रेड कर सकता हूं?',
      answer: 'हां, Hyperliquid और Lighter जैसे ज़्यादातर प्लेटफॉर्म्स 24/7 ट्रेडिंग ऑफर करते हैं। हालांकि, वीकेंड पर प्राइसेस कम वोलैटाइल हो सकते हैं क्योंकि ट्रेडिशनल स्टॉक मार्केट्स बंद होते हैं और ओरेकल्स लास्ट क्लोज़िंग प्राइस यूज़ करते हैं।',
    },
    {
      question: 'फंडिंग रेट्स क्या हैं और क्यों ज़रूरी हैं?',
      answer: 'फंडिंग रेट्स लॉन्ग और शॉर्ट ट्रेडर्स के बीच पीरियॉडिक पेमेंट्स हैं जो परप प्राइसेस को स्पॉट प्राइसेस के साथ अलाइन रखते हैं। अगर आप पोजीशन होल्ड करते हैं, तो प्लेटफॉर्म के हिसाब से हर 1-8 घंटे में फंडिंग पे या रिसीव करते हैं।',
    },
  ],
  en: [
    {
      question: 'What is the difference between equity perps and regular stock trading?',
      answer: 'Equity perps let you trade with leverage (up to 200x), 24/7, without owning actual shares. Regular stocks require full capital, trade only during market hours, and give you ownership rights like dividends and voting.',
    },
    {
      question: 'How much money do I need to start trading equity perps?',
      answer: 'You can start with as little as $10-50 on most platforms. However, we recommend starting with at least $100-500 to have adequate margin and avoid immediate liquidation on small price moves.',
    },
    {
      question: 'Are equity perps legal in India?',
      answer: 'Equity perps exist in a regulatory gray area. Most platforms are decentralized and don\'t require KYC. Legality varies by jurisdiction. Indian residents should be aware these platforms typically operate outside Indian regulatory frameworks.',
    },
    {
      question: 'What happens if my position gets liquidated?',
      answer: 'When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won\'t owe additional money. Some platforms have insurance funds to prevent socialized losses.',
    },
    {
      question: 'Can I trade equity perps on weekends?',
      answer: 'Yes, most platforms like Hyperliquid and Lighter offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price.',
    },
    {
      question: 'What are funding rates and why do they matter?',
      answer: 'Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. If you hold a position, you either pay or receive funding every 1-8 hours depending on the platform.',
    },
  ],
};

export default function EquityPerpetualsKyaHai() {
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const t = translations[lang];
  const faqList = faqs[lang];
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  // JSON-LD Article Schema in Hindi
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: lang === 'hi' ? 'इक्विटी परपेचुअल्स क्या हैं? पूरी शुरुआती गाइड' : 'What Are Equity Perpetuals? Complete Beginner Guide',
    description: lang === 'hi'
      ? 'जानें इक्विटी परपेचुअल्स क्या हैं, वे कैसे काम करते हैं, और ट्रेडर्स इन्हें क्यों यूज़ करते हैं। भारतीय ट्रेडर्स के लिए पूरी गाइड।'
      : 'Learn what equity perpetuals are, how they work, and why traders use them.',
    author: { '@type': 'Organization', name: 'Compare Equity Perps' },
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString(),
    inLanguage: lang === 'hi' ? 'hi-IN' : 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://compareequityperps.com/blog/equity-perpetuals-kya-hai',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          {/* Animated Background with India colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
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

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">{t.home}</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">{t.blog}</Link>
              <span className="mx-2">/</span>
              <span className="text-orange-400">{t.breadcrumb}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
                <span className="text-orange-400 text-sm font-medium">{t.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                {t.heroTitle1}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-green-400 to-orange-400">
                  {t.heroTitle2}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t.heroDescription}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-orange-400">24</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat1Title}</div>
                    <div className="text-gray-500 text-sm">{t.stat1Subtitle}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-400">200x</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat2Title}</div>
                    <div className="text-gray-500 text-sm">{t.stat2Subtitle}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-orange-400">50+</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat3Title}</div>
                    <div className="text-gray-500 text-sm">{t.stat3Subtitle}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#simple-explanation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-green-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-orange-400 hover:to-green-400 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
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
                <span className="text-orange-400">{t.simpleTitle}</span> {t.simpleExplanation}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t.simpleSubtitle}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t.thinkOfIt}</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">1.</span>
                      <span>{t.step1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">2.</span>
                      <span>{t.step2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">3.</span>
                      <span>{t.step3}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">4.</span>
                      <span>{t.step4}</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">{t.positionTitle}</div>
                    <div className="text-4xl font-black text-white mb-1">NVDA-PERP</div>
                    <div className="text-green-400 text-xl font-bold">{t.positionType}</div>
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
                        <span className="text-gray-500">{t.unrealizedPnL}</span>
                        <span className="text-green-400">+$50.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-8">
              {t.noExpiry}
            </p>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section id="benefits" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.benefitsTitle} <span className="text-green-400">{t.benefitsHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t.benefitsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit 1 - 24/7 Trading */}
              <div className="group bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit1Title}</h3>
                <p className="text-gray-400">{t.benefit1Desc}</p>
              </div>

              {/* Benefit 2 - Leverage */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit2Title}</h3>
                <p className="text-gray-400">{t.benefit2Desc}</p>
              </div>

              {/* Benefit 3 - Short Selling */}
              <div className="group bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit3Title}</h3>
                <p className="text-gray-400">{t.benefit3Desc}</p>
              </div>

              {/* Benefit 4 - No KYC */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit4Title}</h3>
                <p className="text-gray-400">{t.benefit4Desc}</p>
              </div>

              {/* Benefit 5 - Self-Custody */}
              <div className="group bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit5Title}</h3>
                <p className="text-gray-400">{t.benefit5Desc}</p>
              </div>

              {/* Benefit 6 - Instant Settlement */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                {t.howItWorksTitle} <span className="text-orange-400">{t.howItWorksHighlight}</span> {t.howItWorksTitle2}
              </h2>
              <p className="text-gray-400 text-lg">
                {t.howItWorksSubtitle}
              </p>
            </div>

            <div className="space-y-8">
              {/* Oracle Pricing */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.oracleTitle}</h3>
                    <p className="text-gray-400 mb-4">{t.oracleDesc}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t.oracleNote}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding Rates */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.fundingTitle}</h3>
                    <p className="text-gray-400 mb-4">{t.fundingDesc}</p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-semibold">{t.perpAboveSpot}</div>
                        <div className="text-gray-500 text-sm">{t.longsPayShorts}</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-red-400 font-semibold">{t.perpBelowSpot}</div>
                        <div className="text-gray-500 text-sm">{t.shortsPayLongs}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leverage & Liquidation */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.leverageTitle}</h3>
                    <p className="text-gray-400 mb-4">{t.leverageDesc}</p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <p className="text-yellow-400 text-sm">
                        <strong>{t.proTip}</strong> {t.proTipDesc}
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
                <span className="text-green-400">{t.gettingStartedTitle}</span> {t.gettingStartedTitle2}
              </h2>
              <p className="text-gray-400 text-lg">
                {t.gettingStartedSubtitle}
              </p>
            </div>

            {/* Step 1 - Wallet Setup (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-orange-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-orange-500/50 transition-colors"
                onClick={() => setWalletExpanded(!walletExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                    <p className="text-gray-400">{t.step1Subtitle}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-400 text-sm font-medium hidden sm:block">
                      {walletExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-orange-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
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
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mb-6">
                      <h4 className="text-orange-400 font-semibold mb-2">{t.walletExplainerTitle}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t.walletExplainerDesc}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <span className="text-gray-400">{t.walletFeature1}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <span className="text-gray-400">{t.walletFeature2}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <span className="text-gray-400">{t.walletFeature3}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <span className="text-gray-400">{t.walletFeature4}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-4">{t.walletStepsTitle}</h4>
                        <ol className="space-y-3 text-gray-300">
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold flex-shrink-0">1</span>
                            <span><a href="https://rabby.io" target="_blank" rel="noopener" className="text-orange-400 hover:text-orange-300 underline">rabby.io</a> {t.walletStep1}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold flex-shrink-0">2</span>
                            <span>{t.walletStep2}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold flex-shrink-0">3</span>
                            <span>{t.walletStep3}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold flex-shrink-0">4</span>
                            <div>
                              <strong className="text-white">{t.walletStep4Title}</strong>
                              <p className="text-gray-500 text-xs mt-1">{t.walletStep4Note}</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-5">
                        <h4 className="text-white font-semibold mb-3">{t.watchVideoTitle}</h4>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                          <iframe
                            src="https://www.youtube.com/embed/_ouAzSQJiM0"
                            title="How to Set Up a Wallet for Trading Equity Perps"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <p className="text-gray-500 text-xs mb-3">{t.watchVideoDesc}</p>
                        <a
                          href="https://rabby.io"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-orange-400 transition-colors"
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
                className="bg-gray-900 border-2 border-green-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-colors"
                onClick={() => setFundingExpanded(!fundingExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step2Title}</h3>
                    <p className="text-gray-400">{t.step2Subtitle}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-sm font-medium hidden sm:block">
                      {fundingExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-green-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
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
                          <li>{t.coinbaseStep1}</li>
                          <li>{t.coinbaseStep2}</li>
                          <li>{t.coinbaseStep3}</li>
                          <li>{t.coinbaseStep4}</li>
                          <li>{t.coinbaseStep5}</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.coinbaseFee}</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                        <h4 className="text-purple-400 font-semibold mb-2">{t.fromKraken}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          <li>{t.krakenStep1}</li>
                          <li>{t.krakenStep2}</li>
                          <li>{t.krakenStep3}</li>
                          <li>{t.krakenStep4}</li>
                          <li>{t.krakenStep5}</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.krakenFee}</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <h4 className="text-yellow-400 font-semibold mb-2">{t.fromBinance}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          <li>{t.binanceStep1}</li>
                          <li>{t.binanceStep2}</li>
                          <li>{t.binanceStep3}</li>
                          <li>{t.binanceStep4}</li>
                          <li>{t.binanceStep5}</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.binanceFee}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl">
                      <p className="text-gray-400 text-sm">
                        <strong className="text-white">{t.fundingProTip}</strong> {t.fundingProTipDesc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 - Choose Platform & Trade */}
            <div className="mb-8">
              <div className="bg-gray-900 border-2 border-orange-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t.step3Title}</h3>
                    <p className="text-gray-400">{t.step3Subtitle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5">
                    <ol className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold flex-shrink-0">1</span>
                        <span><a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-orange-400 hover:text-orange-300">{t.platformStep1}</a></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold flex-shrink-0">2</span>
                        <span>{t.platformStep2}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold flex-shrink-0">3</span>
                        <span>{t.platformStep3}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold flex-shrink-0">4</span>
                        <span>{t.platformStep4}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold flex-shrink-0">5</span>
                        <span>{t.platformStep5}</span>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={hyperliquid?.referralUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-orange-500/20 to-green-500/10 border-2 border-orange-500/50 rounded-2xl hover:border-orange-500 transition-all group"
                    >
                      <span className="text-4xl font-black text-white group-hover:text-orange-400 transition-colors">{t.openHyperliquid}</span>
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
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium"
              >
                {t.completeGuideLink}
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
              <h3 className="text-xl font-bold text-yellow-400 mb-4">{t.risksTitle}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">*</span>
                  <span><strong className="text-white">{t.risk1Title}</strong> — {t.risk1Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">*</span>
                  <span><strong className="text-white">{t.risk2Title}</strong> — {t.risk2Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">*</span>
                  <span><strong className="text-white">{t.risk3Title}</strong> — {t.risk3Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">*</span>
                  <span><strong className="text-white">{t.risk4Title}</strong> — {t.risk4Desc}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-950 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.faqTitle}</h2>
            <div className="space-y-4">
              {faqList.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-white font-medium pr-4">{faq.question}</span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-400">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* India CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-orange-500/20 via-gray-900 to-green-500/20 border border-orange-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  {t.indiaCtaTitle}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  {t.indiaCtaDescription}
                </p>

                <Link
                  href="/blog/trade-us-stocks-from-india"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-green-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-orange-400 hover:to-green-400 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
                >
                  {t.indiaCtaButton}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-orange-500/20 via-green-500/20 to-orange-500/20 border border-orange-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  {t.ctaTitle}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  {t.ctaDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-green-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-orange-400 hover:to-green-400 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
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
                    {t.ctaSecondaryButton}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Notice */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.footerNotice}
              </p>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="py-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.backToCompare}
          </Link>
        </div>
      </article>
    </>
  );
}
