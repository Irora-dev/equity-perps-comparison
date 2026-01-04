'use client';

import { useState } from 'react';
import Link from 'next/link';

const translations = {
  ar: {
    // Meta
    langCode: 'ar',
    isRTL: true,
    langToggle: 'English',

    // Navigation
    home: 'الرئيسية',
    blog: 'المدونة',
    breadcrumb: 'تحويل الجنيه المصري إلى USDC',

    // Hero
    badge1: 'مصر',
    badge2: 'دليل التمويل',
    heroTitle: 'كيفية تحويل الجنيه المصري إلى USDC',
    heroSubtitle: 'الدليل الشامل لتحويل الجنيه المصري إلى USDC للتداول في الأسهم الأمريكية. قارن بين الطرق والرسوم واحصل على تعليمات خطوة بخطوة.',

    // Comparison Table
    compareTitle: 'مقارنة طرق الشراء',
    tableHeaders: {
      method: 'الطريقة',
      fees: 'الرسوم',
      speed: 'السرعة',
      minAmount: 'الحد الأدنى',
      bestFor: 'الأفضل لـ',
    },
    methods: [
      {
        id: 'binance',
        name: 'Binance P2P',
        color: 'yellow',
        rating: 'أفضل الأسعار',
        fees: '~0.1-0.5%',
        speed: '5-15 دقيقة',
        minAmount: '100 ج.م',
        bestFor: 'أفضل الأسعار، للمتداولين المنتظمين',
        pros: ['أفضل أسعار الجنيه المصري', 'سيولة عالية', 'خيارات دفع متعددة', 'تحويل مجاني من USDT إلى USDC'],
        cons: ['يحتاج حساب Binance مع KYC', 'قد يكون P2P مخيفاً في البداية'],
      },
      {
        id: 'bybit',
        name: 'Bybit P2P',
        color: 'orange',
        rating: 'سرعة عالية',
        fees: '~0.2-0.8%',
        speed: '5-20 دقيقة',
        minAmount: '150 ج.م',
        bestFor: 'معاملات سريعة، دعم جيد',
        pros: ['واجهة سهلة الاستخدام', 'دعم عملاء ممتاز', 'تحويل سريع'],
        cons: ['سيولة أقل من Binance', 'خيارات دفع أقل'],
      },
      {
        id: 'okx',
        name: 'OKX P2P',
        color: 'blue',
        rating: 'موثوق',
        fees: '~0.2-1%',
        speed: '10-30 دقيقة',
        minAmount: '200 ج.م',
        bestFor: 'بديل موثوق، أسعار تنافسية',
        pros: ['منصة موثوقة', 'أسعار تنافسية', 'دعم متعدد اللغات'],
        cons: ['سيولة أقل في مصر', 'قد تحتاج وقت أطول'],
      },
    ],
    recommendation: 'نصيحتنا: استخدم Binance P2P للحصول على أفضل الأسعار. اشتري USDT أولاً (بائعين أكثر)، ثم حوّله إلى USDC مجاناً على Binance.',

    // Steps Section
    stepsTitle: 'تعليمات خطوة بخطوة',

    // Binance Steps
    binanceSteps: [
      {
        title: 'إنشاء حساب Binance',
        description: 'اذهب إلى binance.com وسجّل حساباً جديداً. أكمل التحقق من الهوية (KYC) باستخدام البطاقة الشخصية أو جواز السفر.',
        note: 'التحقق عادة يستغرق 10-30 دقيقة',
      },
      {
        title: 'انتقل إلى تداول P2P',
        description: 'افتح تطبيق Binance ← انقر على "P2P" أو اذهب إلى "التداول" ← "P2P"',
        note: 'P2P يعني أنك تشتري مباشرة من مستخدمين آخرين',
      },
      {
        title: 'اشتري USDT بالجنيه المصري',
        items: [
          'اختر "شراء" ← "USDT"',
          'اختر طريقة الدفع: Vodafone Cash أو InstaPay أو تحويل بنكي',
          'أدخل المبلغ بالجنيه المصري',
          'اختر بائعاً بنسبة إتمام عالية (98%+) وعدد طلبات كبير',
          'انقر "شراء" واتبع تعليمات الدفع',
        ],
        tip: 'لماذا USDT أولاً؟ بائعين أكثر = أسعار أفضل. ستحوّل إلى USDC في الخطوة التالية (مجاناً).',
      },
      {
        title: 'حوّل USDT إلى USDC (مجاناً)',
        items: [
          'اذهب إلى "التداول" ← "تحويل"',
          'من: USDT ← إلى: USDC',
          'أدخل المبلغ وانقر "معاينة التحويل"',
          'أكّد — هذا مجاني وفوري!',
        ],
      },
      {
        title: 'اسحب USDC إلى محفظتك',
        items: [
          'اذهب إلى "المحفظة" ← "سحب"',
          'اختر USDC',
          'الصق عنوان محفظتك (Rabby أو MetaMask)',
          'اختر الشبكة: Arbitrum One (أقل رسوم ~$0.10)',
          'أكّد باستخدام 2FA',
        ],
        tip: 'هام: استخدم دائماً شبكة Arbitrum للرسوم الأقل. الأموال تصل في 1-5 دقائق.',
      },
    ],

    // Bybit Steps
    bybitSteps: [
      {
        title: 'إنشاء حساب Bybit',
        description: 'اذهب إلى bybit.com وسجّل حساباً جديداً. أكمل التحقق من الهوية.',
      },
      {
        title: 'انتقل إلى P2P',
        description: 'من القائمة الرئيسية، اختر "شراء العملات" ← "P2P"',
      },
      {
        title: 'اشتري USDT',
        items: [
          'اختر USDT وطريقة الدفع',
          'أدخل المبلغ بالجنيه المصري',
          'اختر بائعاً موثوقاً',
          'أتمم الدفع وانتظر التأكيد',
        ],
      },
      {
        title: 'حوّل واسحب',
        description: 'حوّل USDT إلى USDC ثم اسحب إلى محفظتك على شبكة Arbitrum.',
      },
    ],

    // OKX Steps
    okxSteps: [
      {
        title: 'إنشاء حساب OKX',
        description: 'اذهب إلى okx.com وسجّل حساباً جديداً. أكمل التحقق من الهوية.',
      },
      {
        title: 'انتقل إلى P2P',
        description: 'من القائمة، اختر "شراء/بيع" ← "P2P"',
      },
      {
        title: 'اشتري USDT',
        items: [
          'اختر USDT والعملة EGP',
          'اختر طريقة الدفع المناسبة',
          'أتمم المعاملة مع بائع موثوق',
        ],
      },
      {
        title: 'حوّل واسحب',
        description: 'حوّل إلى USDC واسحب إلى محفظتك.',
      },
    ],

    // Payment Methods
    paymentTitle: 'طرق الدفع المتاحة في مصر',
    paymentMethods: [
      { name: 'Vodafone Cash', icon: '📱', description: 'الأسرع والأكثر شيوعاً' },
      { name: 'InstaPay Egypt', icon: '⚡', description: 'تحويل فوري بين البنوك' },
      { name: 'Fawry', icon: '🏪', description: 'الدفع عبر منافذ فوري' },
      { name: 'CIB', icon: '🏦', description: 'البنك التجاري الدولي' },
      { name: 'NBE', icon: '🏛️', description: 'البنك الأهلي المصري' },
      { name: 'QNB', icon: '🏦', description: 'بنك قطر الوطني' },
      { name: 'تحويل بنكي', icon: '💳', description: 'أي بنك مصري' },
    ],

    // Pro Tips
    tipsTitle: 'نصائح للمتداولين المصريين',
    tips: [
      {
        icon: '💰',
        title: 'استخدم P2P للأسعار الأفضل',
        description: 'Binance P2P يقدم عادة أسعار أفضل بـ 0.5-1% من أسعار الصرافة. لـ 10,000 ج.م، هذا يعني توفير 50-100 ج.م.',
      },
      {
        icon: '⏰',
        title: 'تداول خلال ساعات العمل',
        description: 'التداول P2P أسرع خلال ساعات العمل البنكية (9 صباحاً - 6 مساءً بتوقيت القاهرة). Vodafone Cash يعمل 24/7.',
      },
      {
        icon: '🔒',
        title: 'اختر البائعين الموثوقين',
        description: 'ابحث عن بائعين بنسبة إتمام 98%+ وأكثر من 500 طلب. عدد طلبات أكثر = موثوقية أعلى.',
      },
      {
        icon: '📱',
        title: 'احتفظ بسجلات المعاملات',
        description: 'التقط صور شاشة لجميع معاملات P2P والتحويلات. ستحتاجها للضرائب وفي حالة أي نزاعات.',
      },
      {
        icon: '🔄',
        title: 'ابدأ بمبالغ صغيرة',
        description: 'إذا كنت جديداً على P2P، ابدأ بمبلغ صغير (500-1000 ج.م) لتجربة العملية قبل المبالغ الكبيرة.',
      },
      {
        icon: '📊',
        title: 'قارن الأسعار',
        description: 'تحقق من الأسعار على Binance وBybit وOKX قبل الشراء. الفروقات قد تكون كبيرة أحياناً.',
      },
    ],

    // Example
    exampleTitle: 'مثال: تحويل 10,000 جنيه مصري',
    example: {
      lines: [
        { from: '10,000 ج.م', to: '~200 USDT (بسعر 50 ج.م/USDT)' },
        { from: '200 USDT', to: '200 USDC (تحويل مجاني)' },
        { from: 'رسوم السحب', to: '~$0.10 (Arbitrum)' },
      ],
      result: { label: 'تستلم', value: '~$199.90 USDC' },
    },

    // CTA
    ctaTitle: 'جاهز لتحويل الجنيه المصري؟',
    ctaSubtitle: 'بعد الحصول على USDC في محفظتك، أنت جاهز لتداول الأسهم الأمريكية 24/7.',
    ctaButton1: 'متابعة: ابدأ التداول',
    ctaButton2: 'إعداد المحفظة أولاً',

    // Footer
    footerText: 'هذا الموقع مجاني 100% لمقارنة أفضل منصات تداول الأسهم 24/7. عندما تسجّل عبر روابطنا في منصات مثل Hyperliquid وLighter، تحصل على خصم 4% على رسوم التداول برمز الإحالة الخاص بنا. هذا يساعد في دعم الموقع مع توفير المال عليك في كل صفقة.',

    // Warning
    warningTitle: 'تنبيه مهم',
    warningText: 'تأكد من الالتزام بالقوانين المحلية المصرية المتعلقة بتداول العملات الرقمية. هذا الدليل للأغراض التعليمية فقط.',
  },
  en: {
    // Meta
    langCode: 'en',
    isRTL: false,
    langToggle: 'العربية',

    // Navigation
    home: 'Home',
    blog: 'Blog',
    breadcrumb: 'Convert EGP to USDC',

    // Hero
    badge1: 'Egypt',
    badge2: 'Funding Guide',
    heroTitle: 'How to Convert Egyptian Pounds to USDC',
    heroSubtitle: 'The complete guide to converting Egyptian Pounds to USDC for trading US stocks. Compare methods, fees, and get step-by-step instructions.',

    // Comparison Table
    compareTitle: 'Compare Methods',
    tableHeaders: {
      method: 'Method',
      fees: 'Fees',
      speed: 'Speed',
      minAmount: 'Min Amount',
      bestFor: 'Best For',
    },
    methods: [
      {
        id: 'binance',
        name: 'Binance P2P',
        color: 'yellow',
        rating: 'Best Rates',
        fees: '~0.1-0.5%',
        speed: '5-15 min',
        minAmount: '100 EGP',
        bestFor: 'Best rates, regular traders',
        pros: ['Best EGP rates', 'High liquidity', 'Many payment options', 'Free USDT to USDC conversion'],
        cons: ['Need Binance account with KYC', 'P2P can be intimidating at first'],
      },
      {
        id: 'bybit',
        name: 'Bybit P2P',
        color: 'orange',
        rating: 'Fast',
        fees: '~0.2-0.8%',
        speed: '5-20 min',
        minAmount: '150 EGP',
        bestFor: 'Fast transactions, good support',
        pros: ['Easy to use interface', 'Excellent customer support', 'Fast transfers'],
        cons: ['Less liquidity than Binance', 'Fewer payment options'],
      },
      {
        id: 'okx',
        name: 'OKX P2P',
        color: 'blue',
        rating: 'Reliable',
        fees: '~0.2-1%',
        speed: '10-30 min',
        minAmount: '200 EGP',
        bestFor: 'Reliable alternative, competitive rates',
        pros: ['Reliable platform', 'Competitive rates', 'Multi-language support'],
        cons: ['Less liquidity in Egypt', 'May take longer'],
      },
    ],
    recommendation: 'Recommendation: Use Binance P2P for the best rates. Buy USDT first (more sellers), then convert to USDC for free on Binance.',

    // Steps Section
    stepsTitle: 'Step-by-Step Instructions',

    // Binance Steps
    binanceSteps: [
      {
        title: 'Create Binance Account',
        description: 'Go to binance.com and sign up. Complete KYC verification using your National ID or passport.',
        note: 'Verification usually takes 10-30 minutes',
      },
      {
        title: 'Go to P2P Trading',
        description: 'Open Binance app, click "P2P" or go to "Trade" then "P2P"',
        note: 'P2P means you buy directly from other users',
      },
      {
        title: 'Buy USDT with EGP',
        items: [
          'Select "Buy" then "USDT"',
          'Choose payment method: Vodafone Cash, InstaPay, or Bank Transfer',
          'Enter amount in EGP',
          'Pick a seller with high completion rate (98%+) and many orders',
          'Click "Buy" and follow payment instructions',
        ],
        tip: 'Why USDT first? More sellers = better rates. You will convert to USDC in the next step (free).',
      },
      {
        title: 'Convert USDT to USDC (Free)',
        items: [
          'Go to "Trade" then "Convert"',
          'From: USDT, To: USDC',
          'Enter amount and click "Preview Conversion"',
          'Confirm - this is free and instant!',
        ],
      },
      {
        title: 'Withdraw USDC to Your Wallet',
        items: [
          'Go to "Wallet" then "Withdraw"',
          'Select USDC',
          'Paste your wallet address (Rabby or MetaMask)',
          'Select network: Arbitrum One (lowest fees ~$0.10)',
          'Confirm with 2FA',
        ],
        tip: 'Important: Always use Arbitrum network for lowest fees. Funds arrive in 1-5 minutes.',
      },
    ],

    // Bybit Steps
    bybitSteps: [
      {
        title: 'Create Bybit Account',
        description: 'Go to bybit.com and sign up. Complete identity verification.',
      },
      {
        title: 'Go to P2P',
        description: 'From the main menu, select "Buy Crypto" then "P2P"',
      },
      {
        title: 'Buy USDT',
        items: [
          'Select USDT and payment method',
          'Enter amount in EGP',
          'Choose a reliable seller',
          'Complete payment and wait for confirmation',
        ],
      },
      {
        title: 'Convert and Withdraw',
        description: 'Convert USDT to USDC then withdraw to your wallet on Arbitrum network.',
      },
    ],

    // OKX Steps
    okxSteps: [
      {
        title: 'Create OKX Account',
        description: 'Go to okx.com and sign up. Complete identity verification.',
      },
      {
        title: 'Go to P2P',
        description: 'From the menu, select "Buy/Sell" then "P2P"',
      },
      {
        title: 'Buy USDT',
        items: [
          'Select USDT and EGP currency',
          'Choose appropriate payment method',
          'Complete transaction with a reliable seller',
        ],
      },
      {
        title: 'Convert and Withdraw',
        description: 'Convert to USDC and withdraw to your wallet.',
      },
    ],

    // Payment Methods
    paymentTitle: 'Available Payment Methods in Egypt',
    paymentMethods: [
      { name: 'Vodafone Cash', icon: '📱', description: 'Fastest and most common' },
      { name: 'InstaPay Egypt', icon: '⚡', description: 'Instant inter-bank transfers' },
      { name: 'Fawry', icon: '🏪', description: 'Pay via Fawry outlets' },
      { name: 'CIB', icon: '🏦', description: 'Commercial International Bank' },
      { name: 'NBE', icon: '🏛️', description: 'National Bank of Egypt' },
      { name: 'QNB', icon: '🏦', description: 'Qatar National Bank' },
      { name: 'Bank Transfer', icon: '💳', description: 'Any Egyptian bank' },
    ],

    // Pro Tips
    tipsTitle: 'Pro Tips for Egyptian Traders',
    tips: [
      {
        icon: '💰',
        title: 'Use P2P for Best Rates',
        description: 'Binance P2P typically offers rates 0.5-1% better than exchange rates. For 10,000 EGP, that is 50-100 EGP saved.',
      },
      {
        icon: '⏰',
        title: 'Trade During Banking Hours',
        description: 'P2P trades are fastest during banking hours (9am-6pm Cairo time). Vodafone Cash works 24/7.',
      },
      {
        icon: '🔒',
        title: 'Pick Verified Sellers',
        description: 'Look for sellers with 98%+ completion rate and 500+ orders. Higher order count = more reliable.',
      },
      {
        icon: '📱',
        title: 'Keep Transaction Records',
        description: 'Screenshot all P2P trades and transfers. You will need these for taxes and in case of any disputes.',
      },
      {
        icon: '🔄',
        title: 'Start with Small Amounts',
        description: 'If new to P2P, start with a small amount (500-1000 EGP) to test the process before larger amounts.',
      },
      {
        icon: '📊',
        title: 'Compare Prices',
        description: 'Check prices on Binance, Bybit, and OKX before buying. Differences can be significant sometimes.',
      },
    ],

    // Example
    exampleTitle: 'Example: Converting 10,000 EGP',
    example: {
      lines: [
        { from: '10,000 EGP', to: '~200 USDT (at 50 EGP/USDT)' },
        { from: '200 USDT', to: '200 USDC (free conversion)' },
        { from: 'Withdrawal fee', to: '~$0.10 (Arbitrum)' },
      ],
      result: { label: 'You receive', value: '~$199.90 USDC' },
    },

    // CTA
    ctaTitle: 'Ready to Convert EGP?',
    ctaSubtitle: 'Once you have USDC in your wallet, you are ready to start trading US stocks 24/7.',
    ctaButton1: 'Continue: Start Trading',
    ctaButton2: 'Set Up Wallet First',

    // Footer
    footerText: 'This site is 100% free to use for comparing the best platforms to trade stocks 24/7. When you sign up through our links to platforms like Hyperliquid and Lighter, you get a 4% discount on trading fees with our referral code. This helps support the site while saving you money on every trade.',

    // Warning
    warningTitle: 'Important Notice',
    warningText: 'Make sure to comply with local Egyptian laws regarding cryptocurrency trading. This guide is for educational purposes only.',
  },
};

export default function TahweelEGPElaUSDC() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [selectedMethod, setSelectedMethod] = useState('binance');

  const t = translations[lang];
  const isRTL = t.isRTL;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': lang === 'ar' ? 'كيفية تحويل الجنيه المصري إلى USDC' : 'How to Convert Egyptian Pounds to USDC',
    'description': lang === 'ar'
      ? 'دليل شامل لتحويل الجنيه المصري إلى USDC للتداول في الأسهم الأمريكية باستخدام P2P'
      : 'Complete guide to converting Egyptian Pounds to USDC for trading US stocks using P2P',
    'inLanguage': lang === 'ar' ? 'ar-EG' : 'en',
    'countryOfOrigin': {
      '@type': 'Country',
      'name': 'Egypt',
    },
    'step': [
      {
        '@type': 'HowToStep',
        'name': lang === 'ar' ? 'إنشاء حساب' : 'Create Account',
        'text': lang === 'ar' ? 'إنشاء حساب على Binance وإتمام التحقق من الهوية' : 'Create a Binance account and complete KYC verification',
      },
      {
        '@type': 'HowToStep',
        'name': lang === 'ar' ? 'شراء USDT' : 'Buy USDT',
        'text': lang === 'ar' ? 'شراء USDT عبر P2P باستخدام الجنيه المصري' : 'Buy USDT via P2P using Egyptian Pounds',
      },
      {
        '@type': 'HowToStep',
        'name': lang === 'ar' ? 'تحويل إلى USDC' : 'Convert to USDC',
        'text': lang === 'ar' ? 'تحويل USDT إلى USDC مجاناً' : 'Convert USDT to USDC for free',
      },
      {
        '@type': 'HowToStep',
        'name': lang === 'ar' ? 'سحب إلى المحفظة' : 'Withdraw to Wallet',
        'text': lang === 'ar' ? 'سحب USDC إلى محفظتك على شبكة Arbitrum' : 'Withdraw USDC to your wallet on Arbitrum network',
      },
    ],
    'tool': [
      {
        '@type': 'HowToTool',
        'name': 'Binance P2P',
      },
      {
        '@type': 'HowToTool',
        'name': 'Vodafone Cash',
      },
      {
        '@type': 'HowToTool',
        'name': 'InstaPay Egypt',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-950" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Language Toggle */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors text-sm font-medium"
        >
          {t.langToggle}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Egypt flag gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-gradient-to-tl from-gray-950 via-gray-950 to-black/20" />

        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{t.breadcrumb}</span>
          </nav>

          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="px-3 py-1 bg-red-600/20 text-red-400 text-sm font-medium rounded-full">{t.badge1}</span>
            <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">{t.badge2}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {t.heroTitle}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-4">
            <h3 className="text-red-400 font-bold mb-1">{t.warningTitle}</h3>
            <p className="text-red-300/80 text-sm">{t.warningText}</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.compareTitle}</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className={`${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-400 font-medium`}>{t.tableHeaders.method}</th>
                  <th className={`${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-400 font-medium`}>{t.tableHeaders.fees}</th>
                  <th className={`${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-400 font-medium`}>{t.tableHeaders.speed}</th>
                  <th className={`${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-400 font-medium`}>{t.tableHeaders.minAmount}</th>
                  <th className={`${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-400 font-medium`}>{t.tableHeaders.bestFor}</th>
                </tr>
              </thead>
              <tbody>
                {t.methods.map(method => (
                  <tr key={method.id} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                    <td className="py-4 px-4">
                      <span className="text-white font-medium">{method.name}</span>
                      <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-xs px-2 py-0.5 rounded-full ${
                        method.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        method.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {method.rating}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{method.fees}</td>
                    <td className="py-4 px-4 text-gray-300">{method.speed}</td>
                    <td className="py-4 px-4 text-gray-300">{method.minAmount}</td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{method.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-red-600/10 border border-red-600/30 rounded-xl">
            <p className="text-red-300 text-sm">
              <strong className="text-red-400">💡 {t.recommendation}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.paymentTitle}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {t.paymentMethods.map(method => (
              <div key={method.name} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-red-600/50 transition-colors">
                <div className="text-2xl mb-2">{method.icon}</div>
                <h3 className="text-white font-medium text-sm mb-1">{method.name}</h3>
                <p className="text-gray-500 text-xs">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Selector & Steps */}
      <section className="py-8 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.stepsTitle}</h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {t.methods.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`px-5 py-3 rounded-xl font-medium transition-all ${
                  selectedMethod === method.id
                    ? method.color === 'yellow' ? 'bg-yellow-500 text-gray-900' :
                      method.color === 'orange' ? 'bg-orange-500 text-white' :
                      'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {method.name}
              </button>
            ))}
          </div>

          {/* Binance Instructions */}
          {selectedMethod === 'binance' && (
            <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-6">Binance P2P ({t.methods[0].rating})</h3>

              <div className="space-y-6">
                {t.binanceSteps.map((step, index) => (
                  <div key={index} className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                      {step.description && (
                        <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                      )}
                      {step.note && (
                        <p className="text-gray-500 text-xs">{step.note}</p>
                      )}
                      {step.items && (
                        <ul className="text-gray-400 text-sm space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      )}
                      {step.tip && (
                        <div className="mt-3 p-3 bg-yellow-500/10 rounded-lg">
                          <p className="text-yellow-400 text-xs">
                            <strong>💡</strong> {step.tip}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Example Calculation */}
              <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{t.exampleTitle}</h4>
                <div className="text-sm space-y-1">
                  {t.example.lines.map((line, i) => (
                    <div key={i} className={`flex justify-between text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span>{line.from}</span>
                      <span>→</span>
                      <span>{line.to}</span>
                    </div>
                  ))}
                  <div className={`flex justify-between text-white font-medium pt-2 border-t border-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{t.example.result.label}</span>
                    <span></span>
                    <span>{t.example.result.value}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bybit Instructions */}
          {selectedMethod === 'bybit' && (
            <div className="bg-gray-900 border border-orange-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-6">Bybit P2P ({t.methods[1].rating})</h3>

              <div className="space-y-6">
                {t.bybitSteps.map((step, index) => (
                  <div key={index} className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                      {step.description && (
                        <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                      )}
                      {step.items && (
                        <ul className="text-gray-400 text-sm space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OKX Instructions */}
          {selectedMethod === 'okx' && (
            <div className="bg-gray-900 border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-6">OKX P2P ({t.methods[2].rating})</h3>

              <div className="space-y-6">
                {t.okxSteps.map((step, index) => (
                  <div key={index} className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                      {step.description && (
                        <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                      )}
                      {step.items && (
                        <ul className="text-gray-400 text-sm space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.tipsTitle}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {t.tips.map((tip, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-red-600/30 transition-colors">
                <div className="text-2xl mb-3">{tip.icon}</div>
                <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-400 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">{t.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/trade-us-stocks-from-egypt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-500 transition-colors"
            >
              {t.ctaButton1}
              <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blog/wallet-setup-guide"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
            >
              {t.ctaButton2}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">{t.footerText}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
