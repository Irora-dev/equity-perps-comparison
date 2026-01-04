'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';
import { LanguageToggle } from '@/components/LanguageToggle';

const nativeLang = 'ar';
const nativeName = 'العربية';
const isRTL = true;

const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Learn',
    pageTitle: 'What Are Equity Perpetuals',

    // Hero
    badge: 'Beginner Guide',
    heroTitle1: 'What Are',
    heroTitle2: 'Equity Perpetuals?',
    heroDesc: 'Imagine trading',
    heroDescHighlight1: 'Tesla, Nvidia, and Apple',
    heroDescAt: 'at',
    heroDescHighlight2: '2am on a Saturday',
    heroDescWith: 'with',
    heroDescHighlight3: '50x leverage',
    heroDescEnd: '. No broker. No approval. Just you and the markets.',

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

    // CTAs
    learnMore: 'Learn More',
    startTrading: 'Start Trading Now',

    // Simple Explanation Section
    simpleTitle: 'The',
    simpleTitleHighlight: 'Simple',
    simpleTitleEnd: 'Explanation',
    simpleSubtitle: "An equity perpetual is a contract that tracks a stock price. That's it.",
    thinkOfIt: 'Think of it like this:',
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
    positionTicker: 'NVDA-PERP',
    positionType: 'Long 10x',
    marginLabel: 'Margin',
    positionSizeLabel: 'Position Size',
    pnlLabel: 'Unrealized P&L',
    neverExpire: 'Unlike regular futures, perpetuals',
    neverExpireBold: 'never expire',
    neverExpireEnd: '. Hold for 5 minutes or 5 months.',

    // Benefits Section
    benefitsTitle: 'Why Traders Are',
    benefitsTitleHighlight: 'Switching',
    benefitsSubtitle: 'Equity perps solve the biggest frustrations with traditional stock trading',
    benefit1Title: 'Trade 24/7',
    benefit1Desc: 'Markets never close. Trade Tesla at midnight, Apple on Sunday, Nvidia on Christmas. React to news in real-time, not the next morning.',
    benefit2Title: 'Up to 200x Leverage',
    benefit2Desc: 'Control $10,000 of stock with $50. Amplify your gains (and losses). Far more capital efficient than traditional margin accounts.',
    benefit3Title: 'Easy Short Selling',
    benefit3Desc: "Think a stock will drop? Go short instantly. No borrowing shares, no hard-to-borrow fees, no restrictions. Just click sell.",
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
    howItWorksSubtitle: 'The mechanics behind equity perpetuals in plain English',
    oracle1Title: 'Oracle Price Feeds',
    oracle1Desc: 'Equity perps track real stock prices using',
    oracle1Bold: 'oracles',
    oracle1Desc2: '- services that pull live price data from stock exchanges and deliver it on-chain. Providers like Pyth aggregate prices from multiple sources to ensure accuracy.',
    oracle1Note: 'Updated every second during market hours',
    funding2Title: 'Funding Rates Keep Prices Aligned',
    funding2Desc: 'Every 1-8 hours, traders pay or receive',
    funding2Bold: 'funding',
    funding2Desc2: 'based on whether the perp price is above or below the oracle price. If perps trade above spot, longs pay shorts (pushing price down). This keeps perp prices closely tracking real stock prices.',
    fundingAbove: 'Perp > Spot',
    fundingAboveSub: 'Longs pay shorts',
    fundingBelow: 'Perp < Spot',
    fundingBelowSub: 'Shorts pay longs',
    leverage3Title: 'Leverage & Liquidation',
    leverage3Desc: 'Your',
    leverage3Bold1: 'margin',
    leverage3Desc2: 'is the collateral backing your position. With 10x leverage, a 10% adverse move would wipe out your margin. Before that happens, you get',
    leverage3Bold2: 'liquidated',
    leverage3Desc3: '- your position is automatically closed to prevent further losses.',
    leverageProTip: 'Pro tip:',
    leverageProTipText: 'Start with 2-5x leverage. Many beginners use 20x+ and get liquidated on normal volatility. Lower leverage = more room to be wrong.',

    // Getting Started Section
    lessThan10Min: 'Less Than 10 Minutes',
    getStartedTitle: 'Get Set Up in',
    getStartedTitleHighlight: '3 Simple Steps',
    getStartedSubtitle: 'No application forms. No approval wait. No minimum balance.',
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    showDetails: 'Show Details',
    hideDetails: 'Hide Details',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account',
    walletExplainDesc2: 'that you fully control. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works globally'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io', linkText: 'rabby.io (recommended wallet)' },
      { text: 'Click "Download" and add it to your browser (Chrome, Firefox, etc.)' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'This is like a master password - keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',
    downloadRabby: 'Download Rabby',
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
    step3Title: 'Choose a Platform & Start Trading',
    step3Desc: 'Pick an equity perps venue - we recommend Hyperliquid for beginners',
    platformSteps: [
      'Go to app.hyperliquid.xyz',
      'Click "Connect" and select Rabby Wallet',
      'Deposit your USDC to the platform',
      'Search for a stock (e.g., NVDA-PERP)',
      'Choose Long or Short, set leverage, and trade!'
    ],
    openHyperliquid: 'Open Hyperliquid',
    mostPopular: 'Most popular platform',
    readFullGuide: 'Read the complete wallet setup guide',

    // Risks Section
    risksTitle: 'Understand the Risks',
    risk1Bold: 'Leverage amplifies losses',
    risk1Text: '- The same 10x that turns 5% into 50% gains also turns 5% losses into 50% losses',
    risk2Bold: 'Liquidation is real',
    risk2Text: '- Your position can be closed automatically if it moves against you enough',
    risk3Bold: 'Funding rates cost money',
    risk3Text: '- Holding positions costs money every few hours, especially on popular trades',
    risk4Bold: 'No ownership',
    risk4Text: "- You're trading price exposure, not actual shares. No dividends, no voting rights",

    // CTA Section
    ctaTitle: 'Ready to Try It?',
    ctaDesc: 'Start with $50 and low leverage. See what 24/7 stock trading feels like.',
    ctaButton: 'Start on Hyperliquid',
    ctaSecondary: 'Compare All Platforms',
    ctaEgypt: 'Egypt Trading Guide',

    // FAQ Section
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: "What is the difference between equity perps and regular stock trading?",
        answer: "Equity perps let you trade with leverage (up to 200x), 24/7, without owning actual shares. Regular stocks require full capital, trade only during market hours, and give you ownership rights like dividends and voting."
      },
      {
        question: "How much money do I need to start trading equity perps?",
        answer: "You can start with as little as $10-50 on most platforms. However, we recommend starting with at least $100-500 to have adequate margin and avoid immediate liquidation on small price moves."
      },
      {
        question: "Are equity perps legal?",
        answer: "Equity perps exist in a regulatory gray area. Most platforms are decentralized and don't require KYC. Legality varies by jurisdiction. Traders should be aware these platforms typically operate outside traditional regulatory frameworks."
      },
      {
        question: "What happens if my position gets liquidated?",
        answer: "When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won't owe additional money. Some platforms have insurance funds to prevent socialized losses."
      },
      {
        question: "Can I trade equity perps on weekends?",
        answer: "Yes, most platforms like Hyperliquid offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price."
      },
      {
        question: "What are funding rates and why do they matter?",
        answer: "Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. If you hold a position, you either pay or receive funding every 1-8 hours depending on the platform."
      }
    ],

    // Back Link
    backToHome: 'Compare platforms'
  },
  ar: {
    // Breadcrumb
    home: 'الرئيسية',
    blog: 'تعلّم',
    pageTitle: 'ما هي عقود الأسهم الدائمة',

    // Hero
    badge: 'دليل المبتدئين',
    heroTitle1: 'ما هي',
    heroTitle2: 'عقود الأسهم الدائمة؟',
    heroDesc: 'تخيّل تداول',
    heroDescHighlight1: 'تسلا ونفيديا وآبل',
    heroDescAt: 'في',
    heroDescHighlight2: 'الساعة 2 صباحاً يوم السبت',
    heroDescWith: 'مع',
    heroDescHighlight3: 'رافعة مالية 50x',
    heroDescEnd: '. بدون وسيط. بدون موافقة. فقط أنت والأسواق.',

    // Quick Stats
    stat1Value: '24',
    stat1Label: 'ساعة يومياً',
    stat1Sub: '7 أيام في الأسبوع',
    stat2Value: '200x',
    stat2Label: 'أقصى رافعة مالية',
    stat2Sub: 'كفاءة رأس المال',
    stat3Value: '50+',
    stat3Label: 'سهم متاح',
    stat3Sub: 'أفضل الأسهم الأمريكية',

    // CTAs
    learnMore: 'اعرف المزيد',
    startTrading: 'ابدأ التداول الآن',

    // Simple Explanation Section
    simpleTitle: 'الشرح',
    simpleTitleHighlight: 'البسيط',
    simpleTitleEnd: '',
    simpleSubtitle: 'عقد الأسهم الدائم هو عقد يتتبع سعر السهم. هذا كل شيء.',
    thinkOfIt: 'فكّر في الأمر هكذا:',
    step1: 'تعتقد أن',
    step1Bold: 'NVDA سيرتفع',
    step2: 'تفتح',
    step2Bold: 'مركز شراء (Long)',
    step2End: 'بمبلغ 100$',
    step3: 'مع رافعة 10x، تتحكم في',
    step3Bold: 'تعرّض بقيمة 1,000$',
    step4: 'NVDA يرتفع 5% = تربح',
    step4Bold: '50$ (عائد 50%)',
    positionLabel: 'مركزك',
    positionTicker: 'NVDA-PERP',
    positionType: 'Long 10x',
    marginLabel: 'الهامش',
    positionSizeLabel: 'حجم المركز',
    pnlLabel: 'الربح/الخسارة غير المحققة',
    neverExpire: 'على عكس العقود الآجلة العادية، العقود الدائمة',
    neverExpireBold: 'لا تنتهي صلاحيتها أبداً',
    neverExpireEnd: '. احتفظ بها لمدة 5 دقائق أو 5 أشهر.',

    // Benefits Section
    benefitsTitle: 'لماذا المتداولون',
    benefitsTitleHighlight: 'يتحولون',
    benefitsSubtitle: 'عقود الأسهم الدائمة تحل أكبر مشاكل تداول الأسهم التقليدي',
    benefit1Title: 'تداول 24/7',
    benefit1Desc: 'الأسواق لا تغلق أبداً. تداول تسلا في منتصف الليل، آبل يوم الأحد، نفيديا في عيد الميلاد. تفاعل مع الأخبار فوراً، ليس في صباح اليوم التالي.',
    benefit2Title: 'رافعة مالية حتى 200x',
    benefit2Desc: 'تحكم في أسهم بقيمة 10,000$ بـ 50$ فقط. ضاعف أرباحك (وخسائرك). أكثر كفاءة لرأس المال من حسابات الهامش التقليدية.',
    benefit3Title: 'البيع على المكشوف بسهولة',
    benefit3Desc: 'تعتقد أن السهم سينخفض؟ قم بالبيع على المكشوف فوراً. لا اقتراض أسهم، لا رسوم اقتراض، لا قيود. فقط اضغط بيع.',
    benefit4Title: 'بدون KYC',
    benefit4Desc: 'لا رفع هوية. لا انتظار موافقة. لا جمع بيانات شخصية. اربط محفظتك وابدأ التداول في دقائق.',
    benefit5Title: 'حفظ ذاتي',
    benefit5Desc: 'أموالك تبقى في محفظتك. لا وسيط يحتفظ بأموالك. لا تجميد. لا حدود سحب. أنت تتحكم في أصولك.',
    benefit6Title: 'تسوية فورية',
    benefit6Desc: 'لا انتظار T+2. الأرباح متاحة فوراً. أغلق مركزاً واسحب إلى محفظتك في ثوانٍ.',

    // How It Works Section
    howItWorksTitle: 'كيف',
    howItWorksTitleHighlight: 'تعمل',
    howItWorksTitleEnd: 'فعلاً',
    howItWorksSubtitle: 'آلية عمل عقود الأسهم الدائمة بلغة بسيطة',
    oracle1Title: 'خلاصات أسعار الأوراكل',
    oracle1Desc: 'عقود الأسهم الدائمة تتتبع أسعار الأسهم الحقيقية باستخدام',
    oracle1Bold: 'الأوراكل',
    oracle1Desc2: '- خدمات تسحب بيانات الأسعار المباشرة من بورصات الأسهم وتوصلها على البلوكتشين. مزودون مثل Pyth يجمعون الأسعار من مصادر متعددة لضمان الدقة.',
    oracle1Note: 'تُحدّث كل ثانية خلال ساعات السوق',
    funding2Title: 'معدلات التمويل تحافظ على توافق الأسعار',
    funding2Desc: 'كل 1-8 ساعات، المتداولون يدفعون أو يتلقون',
    funding2Bold: 'تمويلاً',
    funding2Desc2: 'بناءً على ما إذا كان سعر العقد الدائم أعلى أو أقل من سعر الأوراكل. إذا تداولت العقود الدائمة فوق السعر الفوري، الشراء يدفع للبيع (مما يدفع السعر للأسفل). هذا يحافظ على تتبع أسعار العقود الدائمة لأسعار الأسهم الحقيقية.',
    fundingAbove: 'العقد > الفوري',
    fundingAboveSub: 'الشراء يدفع للبيع',
    fundingBelow: 'العقد < الفوري',
    fundingBelowSub: 'البيع يدفع للشراء',
    leverage3Title: 'الرافعة المالية والتصفية',
    leverage3Desc: '',
    leverage3Bold1: 'الهامش',
    leverage3Desc2: 'هو الضمان الذي يدعم مركزك. مع رافعة 10x، حركة معاكسة بنسبة 10% ستمحو هامشك. قبل حدوث ذلك، يتم',
    leverage3Bold2: 'تصفيتك',
    leverage3Desc3: '- يُغلق مركزك تلقائياً لمنع المزيد من الخسائر.',
    leverageProTip: 'نصيحة احترافية:',
    leverageProTipText: 'ابدأ برافعة 2-5x. كثير من المبتدئين يستخدمون 20x+ ويُصفّون على تقلبات عادية. رافعة أقل = مساحة أكبر للخطأ.',

    // Getting Started Section
    lessThan10Min: 'أقل من 10 دقائق',
    getStartedTitle: 'جهّز نفسك في',
    getStartedTitleHighlight: '3 خطوات بسيطة',
    getStartedSubtitle: 'لا استمارات طلب. لا انتظار موافقة. لا حد أدنى للرصيد.',
    step1Title: 'أنشئ محفظتك الرقمية',
    step1Desc: 'مجانية، تستغرق دقيقتين، وتفعلها مرة واحدة فقط',
    showDetails: 'عرض التفاصيل',
    hideDetails: 'إخفاء التفاصيل',
    walletExplainTitle: 'ما هي المحفظة الرقمية؟',
    walletExplainDesc: 'فكّر فيها كـ',
    walletExplainHighlight: 'حساب بنكي رقمي',
    walletExplainDesc2: 'تتحكم فيه بالكامل. بدلاً من أن يحتفظ البنك بأموالك، تحتفظ بها بنفسك باستخدام إضافة بسيطة للمتصفح.',
    walletFeatures: ['أنت تتحكم فيها', 'مجانية تماماً', 'إعداد دقيقتين', 'تعمل عالمياً'],
    walletSetupTitle: 'إليك كيفية إعدادها:',
    walletSteps: [
      { text: 'اذهب إلى', link: 'rabby.io', linkText: 'rabby.io (المحفظة الموصى بها)' },
      { text: 'انقر على "Download" وأضفها لمتصفحك (Chrome, Firefox, إلخ)' },
      { text: 'انقر على "Create New Wallet" وعيّن كلمة مرور' },
      { text: 'اكتب عبارة الاسترداد المكونة من 12 كلمة', warning: 'هذه مثل كلمة المرور الرئيسية - احتفظ بها بأمان ولا تشاركها أبداً!' }
    ],
    watchVideo: 'شاهد: دليل الإعداد في دقيقتين',
    downloadRabby: 'حمّل Rabby',
    step2Title: 'موّل بـ USDC',
    step2Desc: 'حوّل من Coinbase أو Kraken أو Binance - أو استخدم البطاقة',
    fromCoinbase: 'من Coinbase',
    coinbaseSteps: ['اذهب إلى Send/Receive', 'اختر USDC', 'الصق عنوان Rabby', 'اختر شبكة Arbitrum', 'أكد الإرسال'],
    coinbaseFee: 'الرسوم: ~$0.10 على Arbitrum',
    fromKraken: 'من Kraken',
    krakenSteps: ['اذهب إلى Funding > Withdraw', 'ابحث عن USDC', 'أضف عنوان Rabby', 'اختر Arbitrum One', 'أكد بـ 2FA'],
    krakenFee: 'الرسوم: ~$1-3',
    fromBinance: 'من Binance',
    binanceSteps: ['Wallet > Withdraw', 'اختر USDC', 'الصق عنوان Rabby', 'الشبكة: Arbitrum', 'أكمل التحقق'],
    binanceFee: 'الرسوم: ~$0.50',
    fundingProTip: 'نصيحة احترافية:',
    fundingProTipText: 'استخدم دائماً شبكة Arbitrum لأقل رسوم. ابدأ بـ $50-100 للاختبار. الأموال تصل في 1-5 دقائق.',
    step3Title: 'اختر منصة وابدأ التداول',
    step3Desc: 'اختر منصة عقود أسهم دائمة - نوصي بـ Hyperliquid للمبتدئين',
    platformSteps: [
      'اذهب إلى app.hyperliquid.xyz',
      'انقر على "Connect" واختر محفظة Rabby',
      'أودع USDC في المنصة',
      'ابحث عن سهم (مثلاً NVDA-PERP)',
      'اختر Long أو Short، حدد الرافعة، وتداول!'
    ],
    openHyperliquid: 'افتح Hyperliquid',
    mostPopular: 'أشهر منصة',
    readFullGuide: 'اقرأ دليل إعداد المحفظة الكامل',

    // Risks Section
    risksTitle: 'افهم المخاطر',
    risk1Bold: 'الرافعة تضخّم الخسائر',
    risk1Text: '- نفس الـ 10x التي تحول 5% إلى أرباح 50% تحول أيضاً خسائر 5% إلى خسائر 50%',
    risk2Bold: 'التصفية حقيقية',
    risk2Text: '- يمكن إغلاق مركزك تلقائياً إذا تحرك ضدك بما فيه الكفاية',
    risk3Bold: 'معدلات التمويل تكلف مالاً',
    risk3Text: '- الاحتفاظ بالمراكز يكلف مالاً كل بضع ساعات، خاصة على الصفقات الشائعة',
    risk4Bold: 'لا ملكية',
    risk4Text: '- أنت تتداول التعرض للسعر، وليس أسهماً فعلية. لا توزيعات أرباح، لا حقوق تصويت',

    // CTA Section
    ctaTitle: 'مستعد للتجربة؟',
    ctaDesc: 'ابدأ بـ $50 ورافعة منخفضة. جرّب كيف يبدو تداول الأسهم على مدار الساعة.',
    ctaButton: 'ابدأ على Hyperliquid',
    ctaSecondary: 'قارن جميع المنصات',
    ctaEgypt: 'دليل التداول من مصر',

    // FAQ Section
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      {
        question: 'ما الفرق بين عقود الأسهم الدائمة وتداول الأسهم العادي؟',
        answer: 'عقود الأسهم الدائمة تتيح لك التداول برافعة مالية (حتى 200x)، على مدار الساعة، بدون امتلاك أسهم فعلية. الأسهم العادية تتطلب رأس مال كامل، تُتداول فقط خلال ساعات السوق، وتمنحك حقوق ملكية مثل التوزيعات والتصويت.'
      },
      {
        question: 'كم من المال أحتاج لبدء تداول عقود الأسهم الدائمة؟',
        answer: 'يمكنك البدء بمبلغ $10-50 على معظم المنصات. ومع ذلك، نوصي بالبدء بـ $100-500 على الأقل للحصول على هامش كافٍ وتجنب التصفية الفورية على تحركات سعرية صغيرة.'
      },
      {
        question: 'هل عقود الأسهم الدائمة قانونية؟',
        answer: 'عقود الأسهم الدائمة موجودة في منطقة رمادية تنظيمياً. معظم المنصات لامركزية ولا تتطلب KYC. تختلف الشرعية حسب الولاية القضائية. يجب أن يكون المتداولون على دراية بأن هذه المنصات تعمل عادة خارج الأطر التنظيمية التقليدية.'
      },
      {
        question: 'ماذا يحدث إذا تمت تصفية مركزي؟',
        answer: 'عند تصفية مركزك، يُستخدم هامشك لإغلاق المركز وتغطية الخسائر. تخسر الهامش المودع لكن لن تكون مديناً بأموال إضافية. بعض المنصات لديها صناديق تأمين لمنع الخسائر المشتركة.'
      },
      {
        question: 'هل يمكنني تداول عقود الأسهم الدائمة في عطلة نهاية الأسبوع؟',
        answer: 'نعم، معظم المنصات مثل Hyperliquid توفر تداولاً على مدار الساعة طوال أيام الأسبوع. ومع ذلك، قد تكون الأسعار أقل تقلباً في عطلات نهاية الأسبوع لأن أسواق الأسهم التقليدية مغلقة والأوراكل تستخدم آخر سعر إغلاق.'
      },
      {
        question: 'ما هي معدلات التمويل ولماذا هي مهمة؟',
        answer: 'معدلات التمويل هي مدفوعات دورية بين متداولي الشراء والبيع تحافظ على توافق أسعار العقود الدائمة مع الأسعار الفورية. إذا احتفظت بمركز، فإنك إما تدفع أو تتلقى تمويلاً كل 1-8 ساعات حسب المنصة.'
      }
    ],

    // Back Link
    backToHome: 'قارن المنصات'
  }
};

export default function MaHiyaEquityPerpetuals() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const t = translations[lang];
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: lang === 'ar' ? "ما هي عقود الأسهم الدائمة؟ دليل المبتدئين الشامل" : "What Are Equity Perpetuals? Complete Beginner Guide",
    description: lang === 'ar' ? "تعلّم ما هي عقود الأسهم الدائمة، كيف تعمل، ولماذا يستخدمها المتداولون." : "Learn what equity perpetuals are, how they work, and why traders use them.",
    author: { "@type": "Organization", name: "Compare Equity Perps" },
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString(),
    inLanguage: lang === 'ar' ? 'ar' : 'en',
    keywords: lang === 'ar' ? "ما هي عقود الأسهم الدائمة, تداول الأسهم, الرافعة المالية, بدون KYC" : "equity perpetuals, stock trading, leverage, no KYC"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="min-h-screen" dir={lang === 'ar' && isRTL ? 'rtl' : 'ltr'}>
        {/* HERO SECTION - Egypt colors: red/white/black */}
        <section className="relative overflow-hidden">
          {/* Background with Egypt-inspired colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Language Toggle */}
          <div className="absolute top-4 right-4 z-10">
            <LanguageToggle currentLang={lang} nativeLang={nativeLang} nativeName={nativeName} onToggle={(l) => setLang(l as 'en' | 'ar')} />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">{t.home}</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">{t.blog}</Link>
              <span className="mx-2">/</span>
              <span className="text-red-400">{t.pageTitle}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <span className="text-red-400 text-sm font-medium">{t.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                {t.heroTitle1}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-red-400">
                  {t.heroTitle2}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t.heroDesc} <span className="text-white font-semibold">{t.heroDescHighlight1}</span> {t.heroDescAt}
                <span className="text-red-400 font-semibold"> {t.heroDescHighlight2}</span> {t.heroDescWith}
                <span className="text-white font-semibold"> {t.heroDescHighlight3}</span>{t.heroDescEnd}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-red-400">{t.stat1Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat1Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat1Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-400">{t.stat2Value}</span>
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold text-lg hover:from-red-400 hover:to-red-500 transition-all shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105"
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
                {t.simpleTitle} <span className="text-red-400">{t.simpleTitleHighlight}</span> {t.simpleTitleEnd}
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
                      <span className="text-red-400 text-xl">1.</span>
                      <span>{t.step1} <strong className="text-white">{t.step1Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">2.</span>
                      <span>{t.step2} <strong className="text-white">{t.step2Bold}</strong> {t.step2End}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">3.</span>
                      <span>{t.step3} <strong className="text-white">{t.step3Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">4.</span>
                      <span>{t.step4} <strong className="text-green-400">{t.step4Bold}</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">{t.positionLabel}</div>
                    <div className="text-4xl font-black text-white mb-1">{t.positionTicker}</div>
                    <div className="text-green-400 text-xl font-bold">{t.positionType}</div>
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
                        <span className="text-gray-500">{t.pnlLabel}</span>
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
                {t.benefitsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit 1 - 24/7 Trading */}
              <div className="group bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit3Title}</h3>
                <p className="text-gray-400">{t.benefit3Desc}</p>
              </div>

              {/* Benefit 4 - No KYC */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit4Title}</h3>
                <p className="text-gray-400">{t.benefit4Desc}</p>
              </div>

              {/* Benefit 5 - Self-Custody */}
              <div className="group bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit5Title}</h3>
                <p className="text-gray-400">{t.benefit5Desc}</p>
              </div>

              {/* Benefit 6 - Instant Settlement */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                {t.howItWorksTitle} <span className="text-red-400">{t.howItWorksTitleHighlight}</span> {t.howItWorksTitleEnd}
              </h2>
              <p className="text-gray-400 text-lg">
                {t.howItWorksSubtitle}
              </p>
            </div>

            <div className="space-y-8">
              {/* Oracle Pricing */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.oracle1Title}</h3>
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
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.funding2Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.funding2Desc} <strong className="text-white">{t.funding2Bold}</strong> {t.funding2Desc2}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-semibold">{t.fundingAbove}</div>
                        <div className="text-gray-500 text-sm">{t.fundingAboveSub}</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-red-400 font-semibold">{t.fundingBelow}</div>
                        <div className="text-gray-500 text-sm">{t.fundingBelowSub}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leverage & Liquidation */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.leverage3Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.leverage3Desc}<strong className="text-white">{t.leverage3Bold1}</strong> {t.leverage3Desc2} <strong className="text-white">{t.leverage3Bold2}</strong> {t.leverage3Desc3}
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
                <span className="text-green-400 font-medium">{t.lessThan10Min}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.getStartedTitle} <span className="text-green-400">{t.getStartedTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg">
                {t.getStartedSubtitle}
              </p>
            </div>

            {/* Step 1 - Wallet Setup */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-red-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-red-500/50 transition-colors"
                onClick={() => setWalletExpanded(!walletExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                    <p className="text-gray-400">{t.step1Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400 text-sm font-medium hidden sm:block">
                      {walletExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-red-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
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
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
                      <h4 className="text-red-400 font-semibold mb-2">{t.walletExplainTitle}</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {t.walletExplainDesc} <strong className="text-white">{t.walletExplainHighlight}</strong> {t.walletExplainDesc2}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        {t.walletFeatures.map((feature, i) => (
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
                          {t.walletSteps.map((step, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">{i + 1}</span>
                              <div>
                                <span>{step.text}</span>
                                {step.link && <a href={`https://${step.link}`} target="_blank" rel="noopener" className="text-red-400 hover:text-red-300 underline"> {step.linkText || step.link}</a>}
                                {step.warning && <p className="text-gray-500 text-xs mt-1">{step.warning}</p>}
                              </div>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-5">
                        <h4 className="text-white font-semibold mb-3">{t.watchVideo}</h4>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                          <iframe
                            src="https://www.youtube.com/embed/_ouAzSQJiM0"
                            title="Wallet Setup Guide"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <a
                          href="https://rabby.io"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold text-sm hover:bg-red-400 transition-colors"
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

            {/* Step 2 - Fund Wallet */}
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
                    <p className="text-gray-400">{t.step2Desc}</p>
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

            {/* Step 3 - Trade */}
            <div className="mb-8">
              <div className="bg-gray-900 border-2 border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-300 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
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
                      {t.platformSteps.map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={hyperliquid?.referralUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/50 rounded-2xl hover:border-red-500 transition-all group"
                    >
                      <div className="text-5xl">🚀</div>
                      <span className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{t.openHyperliquid}</span>
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
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium"
              >
                {t.readFullGuide}
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
              <h3 className="text-xl font-bold text-yellow-400 mb-4">⚠️ {t.risksTitle}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk1Bold}</strong> {t.risk1Text}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk2Bold}</strong> {t.risk2Text}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk3Bold}</strong> {t.risk3Text}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk4Bold}</strong> {t.risk4Text}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-red-500/20 via-gray-900/20 to-red-500/20 border border-red-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
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
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold text-xl hover:from-red-400 hover:to-red-500 transition-all shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105"
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
                    {t.ctaSecondary}
                  </Link>
                </div>

                {/* Egypt-specific CTA */}
                <div className="mt-6">
                  <Link
                    href="/blog/trade-us-stocks-from-egypt"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium"
                  >
                    🇪🇬 {t.ctaEgypt}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">{t.faqTitle}</h2>
            <div className="space-y-3">
              {t.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="font-medium text-white pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-red-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="py-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.backToHome}
          </Link>
        </div>
      </article>
    </>
  );
}
