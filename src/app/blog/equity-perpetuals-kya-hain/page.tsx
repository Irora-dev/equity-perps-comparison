'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

type Language = 'ur' | 'en';

const translations = {
  ur: {
    isRTL: true,
    langToggle: 'English',
    // Breadcrumbs
    home: 'ہوم',
    blog: 'سیکھیں',
    pageTitle: 'ایکویٹی پرپیچوئلز کیا ہیں',
    // Badge
    badge: 'ابتدائی گائیڈ',
    // Hero
    heroTitle1: 'ایکویٹی پرپیچوئلز',
    heroTitle2: 'کیا ہیں؟',
    heroDesc: 'سوچیں کہ آپ ',
    heroDescHighlight: 'ٹیسلا، انویڈیا، اور ایپل',
    heroDesc2: ' کی ٹریڈنگ ',
    heroDescTime: 'ہفتے کی رات 2 بجے',
    heroDesc3: ' کر رہے ہیں ',
    heroDescLeverage: '50x لیوریج',
    heroDesc4: ' کے ساتھ۔ کوئی بروکر نہیں۔ کوئی منظوری نہیں۔ صرف آپ اور مارکیٹ۔',
    // Quick Stats
    stat1Value: '24',
    stat1Label: 'گھنٹے روزانہ',
    stat1Sub: 'ہفتے کے 7 دن',
    stat2Value: '200x',
    stat2Label: 'زیادہ سے زیادہ لیوریج',
    stat2Sub: 'سرمایہ کی کارکردگی',
    stat3Value: '50+',
    stat3Label: 'اسٹاکس دستیاب',
    stat3Sub: 'ٹاپ امریکی اسٹاکس',
    // Buttons
    learnMore: 'مزید جانیں',
    startTrading: 'ابھی ٹریڈنگ شروع کریں',
    // Simple Explanation Section
    simpleTitle: 'آسان',
    simpleTitlePart2: 'وضاحت',
    simpleDesc: 'ایکویٹی پرپیچوئل ایک معاہدہ ہے جو اسٹاک کی قیمت کو ٹریک کرتا ہے۔ بس۔',
    thinkOfIt: 'اس طرح سوچیں:',
    step1: 'آپ سوچتے ہیں کہ ',
    step1Highlight: 'NVDA اوپر جائے گا',
    step2: 'آپ $100 کے ساتھ ',
    step2Highlight: 'لانگ پوزیشن',
    step2End: ' کھولتے ہیں',
    step3: '10x لیوریج کے ساتھ، آپ ',
    step3Highlight: '$1,000 کا ایکسپوژر',
    step3End: ' کنٹرول کرتے ہیں',
    step4: 'NVDA 5% اوپر جاتا ہے = آپ ',
    step4Highlight: '$50 کماتے ہیں (50% منافع)',
    // Position Card
    yourPosition: 'آپ کی پوزیشن',
    long10x: 'لانگ 10x',
    margin: 'مارجن',
    positionSize: 'پوزیشن کا سائز',
    unrealizedPnL: 'غیر حقیقی P&L',
    // Note
    neverExpire: 'عام فیوچرز کے برعکس، پرپیچوئلز ',
    neverExpireHighlight: 'کبھی ختم نہیں ہوتے',
    neverExpireEnd: '۔ 5 منٹ یا 5 مہینے رکھیں۔',
    // Benefits Section
    benefitsTitle: 'ٹریڈرز کیوں',
    benefitsTitleHighlight: 'تبدیل ہو رہے ہیں',
    benefitsDesc: 'ایکویٹی پرپس روایتی اسٹاک ٹریڈنگ کی سب سے بڑی مشکلات حل کرتے ہیں',
    benefit1Title: '24/7 ٹریڈنگ',
    benefit1Desc: 'مارکیٹ کبھی بند نہیں ہوتی۔ آدھی رات ٹیسلا، اتوار کو ایپل، کرسمس پر انویڈیا ٹریڈ کریں۔ خبروں پر فوری ردعمل دیں۔',
    benefit2Title: '200x تک لیوریج',
    benefit2Desc: '$50 سے $10,000 کے اسٹاک کنٹرول کریں۔ اپنے منافع (اور نقصان) کو بڑھائیں۔ روایتی مارجن اکاؤنٹس سے زیادہ موثر۔',
    benefit3Title: 'آسان شارٹ سیلنگ',
    benefit3Desc: 'سوچتے ہیں اسٹاک گرے گا؟ فوری شارٹ کریں۔ کوئی شیئرز ادھار لینے کی ضرورت نہیں، کوئی فیس نہیں، کوئی پابندیاں نہیں۔',
    benefit4Title: 'KYC کی ضرورت نہیں',
    benefit4Desc: 'کوئی ID اپ لوڈ نہیں۔ منظوری کا انتظار نہیں۔ کوئی ذاتی ڈیٹا جمع نہیں۔ والیٹ کنیکٹ کریں اور منٹوں میں ٹریڈنگ شروع کریں۔',
    benefit5Title: 'سیلف کسٹڈی',
    benefit5Desc: 'آپ کے فنڈز آپ کے والیٹ میں رہتے ہیں۔ کوئی بروکر آپ کا پیسہ نہیں رکھتا۔ کوئی فریز نہیں۔ کوئی نکالنے کی حدود نہیں۔',
    benefit6Title: 'فوری سیٹلمنٹ',
    benefit6Desc: 'T+2 کا انتظار نہیں۔ منافع فوری دستیاب ہے۔ پوزیشن بند کریں اور سیکنڈوں میں والیٹ میں نکالیں۔',
    // How It Works Section
    howItWorksTitle: 'یہ',
    howItWorksTitleHighlight: 'کیسے',
    howItWorksTitleEnd: 'کام کرتا ہے',
    howItWorksDesc: 'ایکویٹی پرپیچوئلز کی میکانکس سادہ الفاظ میں',
    howItWorks1Title: 'اوریکل پرائس فیڈز',
    howItWorks1Desc: 'ایکویٹی پرپس اصلی اسٹاک کی قیمتوں کو ',
    howItWorks1Highlight: 'اوریکلز',
    howItWorks1Desc2: ' کے ذریعے ٹریک کرتے ہیں — وہ خدمات جو اسٹاک ایکسچینجز سے لائیو قیمت کا ڈیٹا لیتی ہیں۔ Pyth جیسے فراہم کنندگان درستگی کے لیے متعدد ذرائع سے قیمتیں جمع کرتے ہیں۔',
    howItWorks1Note: 'مارکیٹ اوقات میں ہر سیکنڈ اپڈیٹ ہوتا ہے',
    howItWorks2Title: 'فنڈنگ ریٹس قیمتیں برابر رکھتے ہیں',
    howItWorks2Desc: 'ہر 1-8 گھنٹے میں، ٹریڈرز ',
    howItWorks2Highlight: 'فنڈنگ',
    howItWorks2Desc2: ' ادا یا وصول کرتے ہیں اس بنیاد پر کہ پرپ کی قیمت اوریکل قیمت سے اوپر یا نیچے ہے۔ اگر پرپس اسپاٹ سے اوپر ٹریڈ کرتے ہیں، لانگز شارٹس کو ادا کرتے ہیں۔ یہ پرپ کی قیمتوں کو اصلی اسٹاک کی قیمتوں کے قریب رکھتا ہے۔',
    perpAboveSpot: 'پرپ > اسپاٹ',
    longsPay: 'لانگز شارٹس کو ادا کرتے ہیں',
    perpBelowSpot: 'پرپ < اسپاٹ',
    shortsPay: 'شارٹس لانگز کو ادا کرتے ہیں',
    howItWorks3Title: 'لیوریج اور لیکویڈیشن',
    howItWorks3Desc: 'آپ کا ',
    howItWorks3Highlight: 'مارجن',
    howItWorks3Desc2: ' آپ کی پوزیشن کی ضمانت ہے۔ 10x لیوریج کے ساتھ، 10% منفی حرکت آپ کا مارجن ختم کر دے گی۔ اس سے پہلے، آپ ',
    howItWorks3Highlight2: 'لیکویڈیٹ',
    howItWorks3Desc3: ' ہو جاتے ہیں — آپ کی پوزیشن خودکار طور پر بند ہو جاتی ہے۔',
    proTip: 'پرو ٹپ:',
    proTipText: '2-5x لیوریج سے شروع کریں۔ بہت سے نئے ٹریڈرز 20x+ استعمال کرتے ہیں اور عام اتار چڑھاؤ پر لیکویڈیٹ ہو جاتے ہیں۔ کم لیوریج = غلط ہونے کی زیادہ گنجائش۔',
    // Getting Started Section
    lessThan10Min: '10 منٹ سے کم',
    getStartedTitle: '3 آسان قدموں میں',
    getStartedTitleHighlight: 'سیٹ اپ کریں',
    getStartedDesc: 'کوئی درخواست فارم نہیں۔ منظوری کا انتظار نہیں۔ کوئی کم از کم بیلنس نہیں۔',
    // Step 1
    step1Title: 'اپنا ڈیجیٹل والیٹ سیٹ اپ کریں',
    step1Desc: 'مفت، 2 منٹ لگتے ہیں، اور یہ صرف ایک بار کرنا ہے',
    hideDetails: 'تفصیلات چھپائیں',
    showDetails: 'تفصیلات دکھائیں',
    walletExplainTitle: 'ڈیجیٹل والیٹ کیا ہے؟',
    walletExplainDesc: 'اسے ایک ',
    walletExplainHighlight: 'ڈیجیٹل بینک اکاؤنٹ',
    walletExplainDesc2: ' سمجھیں جو آپ کے مکمل کنٹرول میں ہے۔ بینک کے بجائے، آپ خود ایک سادہ براؤزر ایکسٹینشن کے ذریعے اپنا پیسہ رکھتے ہیں۔',
    walletFeature1: 'آپ کا کنٹرول',
    walletFeature2: 'بالکل مفت',
    walletFeature3: '2 منٹ سیٹ اپ',
    walletFeature4: 'دنیا بھر میں کام کرتا ہے',
    walletSetupTitle: 'سیٹ اپ کا طریقہ:',
    walletStep1: ' پر جائیں (ہم یہ والیٹ تجویز کرتے ہیں)',
    walletStep2: '"ڈاؤن لوڈ" پر کلک کریں اور اپنے براؤزر میں شامل کریں (کروم، فائر فاکس، وغیرہ)',
    walletStep3: '"نیا والیٹ بنائیں" پر کلک کریں اور پاس ورڈ سیٹ کریں',
    walletStep4: 'اپنے 12 الفاظ کا ریکوری فریز لکھیں',
    walletStep4Warning: 'یہ ماسٹر پاس ورڈ کی طرح ہے — اسے محفوظ رکھیں اور کبھی شیئر نہ کریں!',
    watchVideo: 'دیکھیں: 2 منٹ سیٹ اپ گائیڈ',
    videoDesc: 'یہ ویڈیو آپ کو ہر قدم دکھاتی ہے۔ ساتھ چلیں اور آپ کا والیٹ جلد تیار ہو جائے گا۔',
    downloadRabby: 'Rabby ڈاؤن لوڈ کریں',
    // Step 2
    step2Title: 'USDC سے فنڈ کریں',
    step2Desc: 'Coinbase، Kraken، یا Binance سے ٹرانسفر کریں — یا کارڈ استعمال کریں',
    fundingFromCoinbase: 'Coinbase سے',
    fundingFromKraken: 'Kraken سے',
    fundingFromBinance: 'Binance سے',
    coinbaseSteps: ['Send/Receive پر جائیں', 'USDC منتخب کریں', 'اپنا Rabby ایڈریس پیسٹ کریں', 'Arbitrum نیٹ ورک منتخب کریں', 'بھیجنے کی تصدیق کریں'],
    krakenSteps: ['Funding → Withdraw پر جائیں', 'USDC تلاش کریں', 'اپنا Rabby ایڈریس شامل کریں', 'Arbitrum One منتخب کریں', '2FA سے تصدیق کریں'],
    binanceSteps: ['Wallet → Withdraw', 'USDC منتخب کریں', 'اپنا Rabby ایڈریس پیسٹ کریں', 'نیٹ ورک: Arbitrum', 'تصدیق مکمل کریں'],
    coinbaseFee: 'فیس: ~$0.10 Arbitrum پر',
    krakenFee: 'فیس: ~$1-3',
    binanceFee: 'فیس: ~$0.50',
    fundingProTip: 'پرو ٹپ:',
    fundingProTipText: 'ہمیشہ کم فیس کے لیے Arbitrum نیٹ ورک استعمال کریں۔ ٹیسٹ کے لیے $50-100 سے شروع کریں۔ فنڈز 1-5 منٹ میں پہنچ جاتے ہیں۔',
    // Step 3
    step3Title: 'پلیٹ فارم چنیں اور ٹریڈنگ شروع کریں',
    step3Desc: 'ایکویٹی پرپس پلیٹ فارم چنیں — ہم نئے صارفین کے لیے ',
    step3DescHighlight: 'Hyperliquid',
    step3DescEnd: ' تجویز کرتے ہیں',
    tradeStep1: ' پر جائیں',
    tradeStep2: '"کنیکٹ" پر کلک کریں اور Rabby Wallet منتخب کریں',
    tradeStep3: 'اپنا USDC پلیٹ فارم میں جمع کریں',
    tradeStep4: 'اسٹاک تلاش کریں (مثلاً NVDA-PERP)',
    tradeStep5: 'لانگ یا شارٹ منتخب کریں، لیوریج سیٹ کریں، اور ٹریڈ کریں!',
    openHyperliquid: 'Hyperliquid کھولیں',
    mostPopularPlatform: 'سب سے مقبول پلیٹ فارم',
    walletGuideLink: 'مکمل والیٹ سیٹ اپ گائیڈ پڑھیں',
    // Risks Section
    risksTitle: 'خطرات کو سمجھیں',
    risk1Title: 'لیوریج نقصانات بڑھاتا ہے',
    risk1Desc: ' — وہی 10x جو 5% کو 50% منافع بناتا ہے، 5% نقصان کو بھی 50% نقصان بناتا ہے',
    risk2Title: 'لیکویڈیشن حقیقی ہے',
    risk2Desc: ' — اگر قیمت کافی آپ کے خلاف جائے تو آپ کی پوزیشن خودکار طور پر بند ہو سکتی ہے',
    risk3Title: 'فنڈنگ ریٹس پیسے لیتے ہیں',
    risk3Desc: ' — پوزیشنز رکھنے پر ہر چند گھنٹے پیسے لگتے ہیں، خاص طور پر مقبول ٹریڈز پر',
    risk4Title: 'کوئی ملکیت نہیں',
    risk4Desc: ' — آپ قیمت کا ایکسپوژر ٹریڈ کر رہے ہیں، اصل شیئرز نہیں۔ کوئی ڈیویڈنڈ نہیں، کوئی ووٹنگ حقوق نہیں',
    // Final CTA
    ctaTitle: 'آزمانے کے لیے تیار ہیں؟',
    ctaDesc: '$50 سے شروع کریں اور کم لیوریج استعمال کریں۔ 24/7 اسٹاک ٹریڈنگ کا تجربہ کریں۔',
    ctaButton: 'Hyperliquid پر شروع کریں',
    comparePlatforms: 'تمام پلیٹ فارمز کا موازنہ کریں',
    // Pakistan CTA
    pakistanCtaTitle: 'پاکستان سے ٹریڈنگ؟',
    pakistanCtaDesc: 'ہماری مکمل گائیڈ دیکھیں کہ پاکستان سے امریکی اسٹاکس کیسے ٹریڈ کریں',
    pakistanCtaButton: 'پاکستان ٹریڈنگ گائیڈ',
    // FAQ Section
    faqTitle: 'اکثر پوچھے گئے سوالات',
    faqs: [
      {
        question: 'ایکویٹی پرپس اور عام اسٹاک ٹریڈنگ میں کیا فرق ہے؟',
        answer: 'ایکویٹی پرپس آپ کو لیوریج (200x تک) کے ساتھ، 24/7، بغیر اصل شیئرز کی ملکیت کے ٹریڈ کرنے دیتے ہیں۔ عام اسٹاکس میں پوری رقم درکار ہوتی ہے، صرف مارکیٹ اوقات میں ٹریڈ ہوتے ہیں، اور ڈیویڈنڈ اور ووٹنگ جیسے ملکیتی حقوق دیتے ہیں۔'
      },
      {
        question: 'ایکویٹی پرپس ٹریڈنگ شروع کرنے کے لیے کتنے پیسے چاہیے؟',
        answer: 'آپ زیادہ تر پلیٹ فارمز پر $10-50 سے شروع کر سکتے ہیں۔ تاہم، ہم تجویز کرتے ہیں کہ کم از کم $100-500 رکھیں تاکہ کافی مارجن ہو اور چھوٹی قیمت کی حرکتوں پر فوری لیکویڈیشن سے بچیں۔'
      },
      {
        question: 'کیا ایکویٹی پرپس قانونی ہیں؟',
        answer: 'ایکویٹی پرپس ریگولیٹری گرے ایریا میں ہیں۔ زیادہ تر پلیٹ فارمز ڈی سینٹرلائزڈ ہیں اور KYC نہیں مانگتے۔ قانونی حیثیت علاقے کے لحاظ سے مختلف ہے۔ پاکستانی صارفین کو معلوم ہونا چاہیے کہ یہ پلیٹ فارمز عام طور پر مقامی ریگولیٹری فریم ورک سے باہر کام کرتے ہیں۔'
      },
      {
        question: 'اگر میری پوزیشن لیکویڈیٹ ہو جائے تو کیا ہوتا ہے؟',
        answer: 'جب آپ کی پوزیشن لیکویڈیٹ ہوتی ہے، آپ کا مارجن پوزیشن بند کرنے اور نقصان پورا کرنے کے لیے استعمال ہوتا ہے۔ آپ اپنا جمع شدہ مارجن کھو دیتے ہیں لیکن اضافی رقم نہیں دینی ہوتی۔ کچھ پلیٹ فارمز کے پاس انشورنس فنڈز ہیں تاکہ سوشلائزڈ نقصانات سے بچا جائے۔'
      },
      {
        question: 'کیا میں ہفتے کے آخر میں ایکویٹی پرپس ٹریڈ کر سکتا ہوں؟',
        answer: 'ہاں، زیادہ تر پلیٹ فارمز جیسے Hyperliquid اور Lighter 24/7 ٹریڈنگ پیش کرتے ہیں۔ تاہم، ہفتے کے آخر میں قیمتیں کم اتار چڑھاؤ والی ہو سکتی ہیں کیونکہ روایتی اسٹاک مارکیٹیں بند ہوتی ہیں اور اوریکلز آخری بند قیمت استعمال کرتے ہیں۔'
      },
      {
        question: 'فنڈنگ ریٹس کیا ہیں اور یہ کیوں اہم ہیں؟',
        answer: 'فنڈنگ ریٹس لانگ اور شارٹ ٹریڈرز کے درمیان وقفے وقفے سے ادائیگیاں ہیں جو پرپ کی قیمتوں کو اسپاٹ قیمتوں کے مطابق رکھتی ہیں۔ اگر آپ پوزیشن رکھتے ہیں، تو آپ پلیٹ فارم کے لحاظ سے ہر 1-8 گھنٹے میں فنڈنگ ادا یا وصول کرتے ہیں۔'
      },
    ],
    // Back Link
    backToCompare: 'پلیٹ فارمز کا موازنہ کریں',
  },
  en: {
    isRTL: false,
    langToggle: 'اردو',
    // Breadcrumbs
    home: 'Home',
    blog: 'Learn',
    pageTitle: 'What Are Equity Perpetuals',
    // Badge
    badge: 'Beginner Guide',
    // Hero
    heroTitle1: 'What Are',
    heroTitle2: 'Equity Perpetuals?',
    heroDesc: 'Imagine trading ',
    heroDescHighlight: 'Tesla, Nvidia, and Apple',
    heroDesc2: ' at ',
    heroDescTime: '2am on a Saturday',
    heroDesc3: ' with ',
    heroDescLeverage: '50x leverage',
    heroDesc4: '. No broker. No approval. Just you and the markets.',
    // Quick Stats
    stat1Value: '24',
    stat1Label: 'Hours a Day',
    stat1Sub: '7 days a week',
    stat2Value: '200x',
    stat2Label: 'Max Leverage',
    stat2Sub: 'Capital efficient',
    stat3Value: '50+',
    stat3Label: 'Stocks Available',
    stat3Sub: 'Top US equities',
    // Buttons
    learnMore: 'Learn More',
    startTrading: 'Start Trading Now',
    // Simple Explanation Section
    simpleTitle: 'Simple',
    simpleTitlePart2: 'Explanation',
    simpleDesc: 'An equity perpetual is a contract that tracks a stock price. That\'s it.',
    thinkOfIt: 'Think of it like this:',
    step1: 'You think ',
    step1Highlight: 'NVDA will go up',
    step2: 'You open a ',
    step2Highlight: 'long position',
    step2End: ' with $100',
    step3: 'With 10x leverage, you control ',
    step3Highlight: '$1,000 of exposure',
    step3End: '',
    step4: 'NVDA goes up 5% = you make ',
    step4Highlight: '$50 (50% return)',
    // Position Card
    yourPosition: 'Your Position',
    long10x: 'Long 10x',
    margin: 'Margin',
    positionSize: 'Position Size',
    unrealizedPnL: 'Unrealized P&L',
    // Note
    neverExpire: 'Unlike regular futures, perpetuals ',
    neverExpireHighlight: 'never expire',
    neverExpireEnd: '. Hold for 5 minutes or 5 months.',
    // Benefits Section
    benefitsTitle: 'Why Traders Are',
    benefitsTitleHighlight: 'Switching',
    benefitsDesc: 'Equity perps solve the biggest frustrations with traditional stock trading',
    benefit1Title: 'Trade 24/7',
    benefit1Desc: 'Markets never close. Trade Tesla at midnight, Apple on Sunday, Nvidia on Christmas. React to news in real-time.',
    benefit2Title: 'Up to 200x Leverage',
    benefit2Desc: 'Control $10,000 of stock with $50. Amplify your gains (and losses). Far more capital efficient than traditional margin accounts.',
    benefit3Title: 'Easy Short Selling',
    benefit3Desc: 'Think a stock will drop? Go short instantly. No borrowing shares, no hard-to-borrow fees, no restrictions.',
    benefit4Title: 'No KYC Required',
    benefit4Desc: 'No ID upload. No waiting for approval. No personal data collected. Connect your wallet and start trading in minutes.',
    benefit5Title: 'Self-Custody',
    benefit5Desc: 'Your funds stay in your wallet. No broker holding your money. No freezes. No withdrawal limits. You control your assets.',
    benefit6Title: 'Instant Settlement',
    benefit6Desc: 'No T+2 waiting period. Profits are available immediately. Close a position and withdraw to your wallet in seconds.',
    // How It Works Section
    howItWorksTitle: 'How It',
    howItWorksTitleHighlight: 'Actually',
    howItWorksTitleEnd: 'Works',
    howItWorksDesc: 'The mechanics behind equity perpetuals in plain English',
    howItWorks1Title: 'Oracle Price Feeds',
    howItWorks1Desc: 'Equity perps track real stock prices using ',
    howItWorks1Highlight: 'oracles',
    howItWorks1Desc2: ' — services that pull live price data from stock exchanges and deliver it on-chain. Providers like Pyth aggregate prices from multiple sources to ensure accuracy.',
    howItWorks1Note: 'Updated every second during market hours',
    howItWorks2Title: 'Funding Rates Keep Prices Aligned',
    howItWorks2Desc: 'Every 1-8 hours, traders pay or receive ',
    howItWorks2Highlight: 'funding',
    howItWorks2Desc2: ' based on whether the perp price is above or below the oracle price. If perps trade above spot, longs pay shorts. This keeps perp prices closely tracking real stock prices.',
    perpAboveSpot: 'Perp > Spot',
    longsPay: 'Longs pay shorts',
    perpBelowSpot: 'Perp < Spot',
    shortsPay: 'Shorts pay longs',
    howItWorks3Title: 'Leverage & Liquidation',
    howItWorks3Desc: 'Your ',
    howItWorks3Highlight: 'margin',
    howItWorks3Desc2: ' is the collateral backing your position. With 10x leverage, a 10% adverse move would wipe out your margin. Before that happens, you get ',
    howItWorks3Highlight2: 'liquidated',
    howItWorks3Desc3: ' — your position is automatically closed to prevent further losses.',
    proTip: 'Pro tip:',
    proTipText: 'Start with 2-5x leverage. Many beginners use 20x+ and get liquidated on normal volatility. Lower leverage = more room to be wrong.',
    // Getting Started Section
    lessThan10Min: 'Less Than 10 Minutes',
    getStartedTitle: 'Get Set Up in',
    getStartedTitleHighlight: '3 Simple Steps',
    getStartedDesc: 'No application forms. No approval wait. No minimum balance.',
    // Step 1
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    hideDetails: 'Hide Details',
    showDetails: 'Show Details',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a ',
    walletExplainHighlight: 'digital bank account',
    walletExplainDesc2: ' that you fully control. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeature1: 'You control it',
    walletFeature2: 'Completely free',
    walletFeature3: '2 min setup',
    walletFeature4: 'Works globally',
    walletSetupTitle: 'Here\'s how to set it up:',
    walletStep1: ' (it\'s the wallet we recommend)',
    walletStep2: 'Click "Download" and add it to your browser (Chrome, Firefox, etc.)',
    walletStep3: 'Click "Create New Wallet" and set a password',
    walletStep4: 'Write down your 12-word recovery phrase',
    walletStep4Warning: 'This is like a master password — keep it safe and never share it!',
    watchVideo: 'Watch: 2-Minute Setup Guide',
    videoDesc: 'This video walks you through every step. Follow along and you\'ll have your wallet ready in no time.',
    downloadRabby: 'Download Rabby',
    // Step 2
    step2Title: 'Fund with USDC',
    step2Desc: 'Transfer from Coinbase, Kraken, or Binance — or use card',
    fundingFromCoinbase: 'From Coinbase',
    fundingFromKraken: 'From Kraken',
    fundingFromBinance: 'From Binance',
    coinbaseSteps: ['Go to Send/Receive', 'Select USDC', 'Paste your Rabby address', 'Choose Arbitrum network', 'Confirm send'],
    krakenSteps: ['Go to Funding → Withdraw', 'Search USDC', 'Add your Rabby address', 'Select Arbitrum One', 'Confirm with 2FA'],
    binanceSteps: ['Wallet → Withdraw', 'Select USDC', 'Paste your Rabby address', 'Network: Arbitrum', 'Complete verification'],
    coinbaseFee: 'Fee: ~$0.10 on Arbitrum',
    krakenFee: 'Fee: ~$1-3',
    binanceFee: 'Fee: ~$0.50',
    fundingProTip: 'Pro tip:',
    fundingProTipText: 'Always use Arbitrum network for lowest fees. Start with $50-100 to test. Funds arrive in 1-5 minutes.',
    // Step 3
    step3Title: 'Choose a Platform & Start Trading',
    step3Desc: 'Pick an equity perps venue — we recommend ',
    step3DescHighlight: 'Hyperliquid',
    step3DescEnd: ' for beginners',
    tradeStep1: ' Go to ',
    tradeStep2: 'Click "Connect" and select Rabby Wallet',
    tradeStep3: 'Deposit your USDC to the platform',
    tradeStep4: 'Search for a stock (e.g., NVDA-PERP)',
    tradeStep5: 'Choose Long or Short, set leverage, and trade!',
    openHyperliquid: 'Open Hyperliquid',
    mostPopularPlatform: 'Most popular platform',
    walletGuideLink: 'Read the complete wallet setup guide',
    // Risks Section
    risksTitle: 'Understand the Risks',
    risk1Title: 'Leverage amplifies losses',
    risk1Desc: ' — The same 10x that turns 5% into 50% gains also turns 5% losses into 50% losses',
    risk2Title: 'Liquidation is real',
    risk2Desc: ' — Your position can be closed automatically if it moves against you enough',
    risk3Title: 'Funding rates cost money',
    risk3Desc: ' — Holding positions costs money every few hours, especially on popular trades',
    risk4Title: 'No ownership',
    risk4Desc: ' — You\'re trading price exposure, not actual shares. No dividends, no voting rights',
    // Final CTA
    ctaTitle: 'Ready to Try It?',
    ctaDesc: 'Start with $50 and low leverage. See what 24/7 stock trading feels like.',
    ctaButton: 'Start on Hyperliquid',
    comparePlatforms: 'Compare All Platforms',
    // Pakistan CTA
    pakistanCtaTitle: 'Trading from Pakistan?',
    pakistanCtaDesc: 'Check out our complete guide on how to trade US stocks from Pakistan',
    pakistanCtaButton: 'Pakistan Trading Guide',
    // FAQ Section
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
        question: 'Are equity perps legal?',
        answer: 'Equity perps exist in a regulatory gray area. Most platforms are decentralized and don\'t require KYC. Legality varies by jurisdiction. Pakistani users should be aware these platforms typically operate outside local regulatory frameworks.'
      },
      {
        question: 'What happens if my position gets liquidated?',
        answer: 'When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won\'t owe additional money. Some platforms have insurance funds to prevent socialized losses.'
      },
      {
        question: 'Can I trade equity perps on weekends?',
        answer: 'Yes, most platforms like Hyperliquid and Lighter offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price.'
      },
      {
        question: 'What are funding rates and why do they matter?',
        answer: 'Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. If you hold a position, you either pay or receive funding every 1-8 hours depending on the platform.'
      },
    ],
    // Back Link
    backToCompare: 'Compare platforms',
  },
};

export default function EquityPerpetualsKyaHain() {
  const [lang, setLang] = useState<Language>('ur');
  const t = translations[lang];
  const isRTL = t.isRTL;
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: lang === 'ur' ? 'ایکویٹی پرپیچوئلز کیا ہیں؟ مکمل ابتدائی گائیڈ' : 'What Are Equity Perpetuals? Complete Beginner Guide',
    description: lang === 'ur'
      ? 'جانیں کہ ایکویٹی پرپیچوئلز کیا ہیں، یہ کیسے کام کرتے ہیں، اور ٹریڈرز انہیں کیوں استعمال کرتے ہیں۔'
      : 'Learn what equity perpetuals are, how they work, and why traders use them.',
    author: { "@type": "Organization", name: "Compare Equity Perps" },
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString(),
    inLanguage: lang === 'ur' ? 'ur-PK' : 'en',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Language Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setLang(lang === 'ur' ? 'en' : 'ur')}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-lg"
          >
            {t.langToggle}
          </button>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          {/* Animated Background - Pakistan colors (green/white) */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">{t.home}</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">{t.blog}</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">{t.pageTitle}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <span className="text-2xl">🇵🇰</span>
                <span className="text-green-400 text-sm font-medium">{t.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                {t.heroTitle1}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-400">
                  {t.heroTitle2}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t.heroDesc}<span className="text-white font-semibold">{t.heroDescHighlight}</span>{t.heroDesc2}
                <span className="text-green-400 font-semibold">{t.heroDescTime}</span>{t.heroDesc3}
                <span className="text-emerald-400 font-semibold">{t.heroDescLeverage}</span>{t.heroDesc4}
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
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-emerald-400">{t.stat2Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat2Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat2Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{t.stat3Value}</span>
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-green-400 hover:to-emerald-400 transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
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
                  <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span className="text-green-400">{t.simpleTitle}</span> {t.simpleTitlePart2}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t.simpleDesc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t.thinkOfIt}</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">1.</span>
                      <span>{t.step1}<strong className="text-white">{t.step1Highlight}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">2.</span>
                      <span>{t.step2}<strong className="text-white">{t.step2Highlight}</strong>{t.step2End}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">3.</span>
                      <span>{t.step3}<strong className="text-white">{t.step3Highlight}</strong>{t.step3End}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">4.</span>
                      <span>{t.step4}<strong className="text-emerald-400">{t.step4Highlight}</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">{t.yourPosition}</div>
                    <div className="text-4xl font-black text-white mb-1">NVDA-PERP</div>
                    <div className="text-green-400 text-xl font-bold">{t.long10x}</div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className={`flex justify-between text-sm mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-gray-500">{t.margin}</span>
                        <span className="text-white">$100</span>
                      </div>
                      <div className={`flex justify-between text-sm mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-gray-500">{t.positionSize}</span>
                        <span className="text-white">$1,000</span>
                      </div>
                      <div className={`flex justify-between text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-gray-500">{t.unrealizedPnL}</span>
                        <span className="text-green-400">+$50.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-8">
              {t.neverExpire}<strong className="text-white">{t.neverExpireHighlight}</strong>{t.neverExpireEnd}
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
              {/* Benefit 1 */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit1Title}</h3>
                <p className="text-gray-400">{t.benefit1Desc}</p>
              </div>

              {/* Benefit 2 */}
              <div className="group bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit2Title}</h3>
                <p className="text-gray-400">{t.benefit2Desc}</p>
              </div>

              {/* Benefit 3 */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit3Title}</h3>
                <p className="text-gray-400">{t.benefit3Desc}</p>
              </div>

              {/* Benefit 4 */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit4Title}</h3>
                <p className="text-gray-400">{t.benefit4Desc}</p>
              </div>

              {/* Benefit 5 */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit5Title}</h3>
                <p className="text-gray-400">{t.benefit5Desc}</p>
              </div>

              {/* Benefit 6 */}
              <div className="group bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                {t.howItWorksTitle} <span className="text-green-400">{t.howItWorksTitleHighlight}</span> {t.howItWorksTitleEnd}
              </h2>
              <p className="text-gray-400 text-lg">
                {t.howItWorksDesc}
              </p>
            </div>

            <div className="space-y-8">
              {/* Oracle Pricing */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className={`flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howItWorks1Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.howItWorks1Desc}<strong className="text-white">{t.howItWorks1Highlight}</strong>{t.howItWorks1Desc2}
                    </p>
                    <div className={`flex items-center gap-2 text-sm text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t.howItWorks1Note}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding Rates */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className={`flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howItWorks2Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.howItWorks2Desc}<strong className="text-white">{t.howItWorks2Highlight}</strong>{t.howItWorks2Desc2}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-semibold">{t.perpAboveSpot}</div>
                        <div className="text-gray-500 text-sm">{t.longsPay}</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-red-400 font-semibold">{t.perpBelowSpot}</div>
                        <div className="text-gray-500 text-sm">{t.shortsPay}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leverage & Liquidation */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className={`flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howItWorks3Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.howItWorks3Desc}<strong className="text-white">{t.howItWorks3Highlight}</strong>{t.howItWorks3Desc2}<strong className="text-white">{t.howItWorks3Highlight2}</strong>{t.howItWorks3Desc3}
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <p className="text-yellow-400 text-sm">
                        <strong>{t.proTip}</strong> {t.proTipText}
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
                <span className="text-green-400 font-medium">{t.lessThan10Min}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.getStartedTitle} <span className="text-green-400">{t.getStartedTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg">
                {t.getStartedDesc}
              </p>
            </div>

            {/* Step 1 - Wallet Setup (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-green-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-colors"
                onClick={() => setWalletExpanded(!walletExpanded)}
              >
                <div className={`p-6 flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                    <p className="text-gray-400">{t.step1Desc}</p>
                  </div>
                  <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
                        {t.walletExplainDesc}<strong className="text-white">{t.walletExplainHighlight}</strong>{t.walletExplainDesc2}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        {[t.walletFeature1, t.walletFeature2, t.walletFeature3, t.walletFeature4].map((feature, i) => (
                          <div key={i} className="bg-gray-800/50 rounded-lg p-2 text-center">
                            <div className="text-lg mb-1">{['🔐', '🆓', '⚡', '🌍'][i]}</div>
                            <span className="text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-4">{t.walletSetupTitle}</h4>
                        <ol className="space-y-3 text-gray-300">
                          <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">1</span>
                            <span><a href="https://rabby.io" target="_blank" rel="noopener" className="text-green-400 hover:text-green-300 underline">rabby.io</a>{t.walletStep1}</span>
                          </li>
                          <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">2</span>
                            <span>{t.walletStep2}</span>
                          </li>
                          <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">3</span>
                            <span>{t.walletStep3}</span>
                          </li>
                          <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">4</span>
                            <div>
                              <strong className="text-white">{t.walletStep4}</strong>
                              <p className="text-gray-500 text-xs mt-1">{t.walletStep4Warning}</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-5">
                        <h4 className="text-white font-semibold mb-3">{t.watchVideo}</h4>
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
                          {t.videoDesc}
                        </p>
                        <a
                          href="https://rabby.io"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-green-400 transition-colors"
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
                className="bg-gray-900 border-2 border-emerald-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-emerald-500/50 transition-colors"
                onClick={() => setFundingExpanded(!fundingExpanded)}
              >
                <div className={`p-6 flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step2Title}</h3>
                    <p className="text-gray-400">{t.step2Desc}</p>
                  </div>
                  <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-emerald-400 text-sm font-medium hidden sm:block">
                      {fundingExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-emerald-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
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
                        <h4 className="text-blue-400 font-semibold mb-2">{t.fundingFromCoinbase}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.coinbaseSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.coinbaseFee}</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                        <h4 className="text-purple-400 font-semibold mb-2">{t.fundingFromKraken}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.krakenSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.krakenFee}</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <h4 className="text-yellow-400 font-semibold mb-2">{t.fundingFromBinance}</h4>
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
              <div className="bg-gray-900 border-2 border-white/20 rounded-2xl p-6">
                <div className={`flex items-center gap-6 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-200 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t.step3Title}</h3>
                    <p className="text-gray-400">{t.step3Desc}<a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-green-400 hover:text-green-300">{t.step3DescHighlight}</a>{t.step3DescEnd}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5">
                    <ol className="space-y-3 text-gray-300">
                      <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</span>
                        <span><a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-green-400 hover:text-green-300">app.hyperliquid.xyz</a>{t.tradeStep1}</span>
                      </li>
                      <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</span>
                        <span>{t.tradeStep2}</span>
                      </li>
                      <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</span>
                        <span>{t.tradeStep3}</span>
                      </li>
                      <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</span>
                        <span>{t.tradeStep4}</span>
                      </li>
                      <li className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">5</span>
                        <span>{t.tradeStep5}</span>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={hyperliquid?.referralUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/5 border-2 border-green-500/50 rounded-2xl hover:border-green-500 transition-all group"
                    >
                      <div className="text-5xl">🚀</div>
                      <span className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{t.openHyperliquid}</span>
                      <span className="text-gray-400 text-sm">{t.mostPopularPlatform}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Guide Link */}
            <div className="text-center">
              <Link
                href="/blog/wallet-setup-guide"
                className={`inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t.walletGuideLink}
                <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h3 className="text-xl font-bold text-yellow-400 mb-4">⚠️ {t.risksTitle}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk1Title}</strong>{t.risk1Desc}</span>
                </li>
                <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk2Title}</strong>{t.risk2Desc}</span>
                </li>
                <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk3Title}</strong>{t.risk3Desc}</span>
                </li>
                <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk4Title}</strong>{t.risk4Desc}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PAKISTAN CTA */}
        <section className="py-16 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <span className="text-4xl mb-4 block">🇵🇰</span>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t.pakistanCtaTitle}
              </h2>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                {t.pakistanCtaDesc}
              </p>
              <Link
                href="/blog/trade-us-stocks-from-pakistan"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-gray-900 rounded-xl font-bold text-lg hover:from-green-400 hover:to-emerald-400 transition-all shadow-lg shadow-green-500/25"
              >
                {t.pakistanCtaButton}
                <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 border border-green-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  {t.ctaTitle}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  {t.ctaDesc}
                </p>

                <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-green-400 hover:to-emerald-400 transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
                  >
                    {t.ctaButton}
                    <svg className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-950">
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
                    className={`w-full p-5 flex items-center justify-between ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
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
                    <div className={`px-5 pb-5 text-gray-400 ${isRTL ? 'text-right' : ''}`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="py-12 text-center">
          <Link href="/" className={`inline-flex items-center gap-2 text-gray-400 hover:text-white ${isRTL ? 'flex-row-reverse' : ''}`}>
            <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.backToCompare}
          </Link>
        </div>
      </article>
    </>
  );
}
