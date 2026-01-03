export const nativeLang = 'ar';
export const nativeName = 'العربية';
export const isRTL = true;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Egypt',

    // Hero
    badge: 'Egypt Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Egypt',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert EGP to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '~2,500 LE',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time EET',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Egyptian Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '📱',
        title: 'Vodafone Cash Ready',
        desc: "Use Egypt's most popular mobile wallet to buy USDC via P2P. No bank account needed to get started."
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert EGP to USDC and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade Any Time',
        desc: 'US markets open at 4:30pm EET. With equity perps, trade whenever you want - morning, afternoon, or midnight.'
      },
      {
        icon: '💰',
        title: 'Start with 2,500 LE',
        desc: 'Most US brokers need $500+ minimum. Here, start with just ~2,500 LE (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Egypt today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Egypt'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert EGP to USDC',
    step2Desc: 'Use Binance P2P with Vodafone Cash, Fawry, or InstaPay',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert EGP:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Best rates, most liquidity',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with EGP (Vodafone Cash)', 'Convert USDT to USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    fawry: {
      title: 'Fawry',
      desc: 'Pay at any Fawry outlet',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Select Fawry payment', 'Pay at any Fawry kiosk', 'Convert USDT to USDC']
    },
    instapay: {
      title: 'InstaPay',
      desc: 'Instant bank transfers',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Select InstaPay', 'Transfer from CIB/NBE/Banque Misr', 'Convert to USDC']
    },
    proTip: 'Pro tip:',
    proTipText: 'Vodafone Cash on Binance P2P usually has the best EGP rates. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed EGP to USDC guide with screenshots',

    // Step 3: Trade
    step3Title: 'Start Trading',
    step3Desc: 'Connect to Hyperliquid and trade 50+ US stocks',
    tradeSteps: [
      { text: 'Go to', linkText: 'app.hyperliquid.xyz' },
      { text: 'Click "Connect" and select Rabby Wallet' },
      { text: 'Click "Deposit" and bridge your USDC' },
      { text: 'Search for a stock (NVDA, TSLA, AAPL) and open a position!' }
    ],
    openHyperliquid: 'Open Hyperliquid (4% Off Fees)',

    // Popular Stocks
    popularStocksTitle: 'Popular US Stocks Available',
    viewAllStocks: 'View all 50+ stocks',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Is it legal to trade US stocks from Egypt using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by Egyptian financial authorities as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many Egyptian traders use these platforms, but you should understand the regulatory landscape and consult a tax professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Egypt?',
        answer: 'Egyptian tax laws on cryptocurrency and derivative trading are still evolving. Profits may be subject to capital gains tax. Maintain records of all trades and consult a tax professional familiar with digital asset taxation in Egypt.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as ~2,500 LE (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during Egyptian business hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night EET. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on Binance to use P2P trading to convert EGP to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Egypt Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Egyptian traders. Check them out:",
    guides: [
      { icon: '💳', title: 'Convert EGP to USDC', desc: 'Step-by-step with Vodafone Cash, Fawry', href: '/blog/convert-egp-to-usdc' },
      { icon: '💰', title: 'Trade with 2,500 LE', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-2500-egp' },
      { icon: '📱', title: 'Vodafone Cash Guide', desc: 'Using mobile money for crypto', href: '/blog/vodafone-cash-crypto-guide' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Egyptian traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just ~2,500 LE.',
    getStartedCta: 'Get Started Now (4% Off Fees)',

    // Free Notice
    freeNotice: 'This site is',
    freeNotice2: '100% free',
    freeNotice3: ' to use for comparing the best platforms to trade stocks 24/7. When you sign up through our links to platforms like',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'and',
    freeNotice6: 'Lighter',
    freeNotice7: ', you get a',
    freeNotice8: '4% discount on trading fees',
    freeNotice9: ' with our referral code. This helps support the site while saving you money on every trade.',

    // Related
    relatedTitle: 'Related Guides',
    relatedGuides: [
      { tag: 'FUNDING', title: 'Convert EGP to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-egp-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with 2,500 LE', desc: 'Small account strategy', href: '/blog/trade-stocks-with-2500-egp' },
      { tag: 'MOBILE', title: 'Vodafone Cash Guide', desc: 'Mobile money for crypto', href: '/blog/vodafone-cash-crypto-guide' }
    ]
  },
  ar: {
    // Breadcrumb
    home: 'الرئيسية',
    blog: 'المدونة',
    pageTitle: 'تداول الأسهم الأمريكية من مصر',

    // Hero
    badge: 'دليل مصر',
    noBrokerBadge: 'بدون وسيط',
    heroTitle1: 'تداول الأسهم الأمريكية',
    heroTitle2: 'من مصر',
    heroDesc: 'الوصول إلى NVDA وTSLA وAAPL و50+ سهم أمريكي بدون حساب وساطة أمريكي. حوّل الجنيه المصري إلى USDC وابدأ التداول في',
    heroDescHighlight: '15 دقيقة',
    startTrading: 'ابدأ التداول الآن',
    howItWorks: 'كيف يعمل',

    // Quick Stats
    statMinimumValue: '~2,500 ج.م',
    statMinimum: 'الحد الأدنى للبدء',
    statTimeValue: '24/7',
    statTime: 'أي وقت بتوقيت مصر',
    statStocksValue: '50+',
    statStocks: 'سهم أمريكي',
    statKycValue: 'بدون KYC',
    statKyc: 'على منصة التداول',

    // Why Section
    whyTitle: 'لماذا يختار المتداولون المصريون عقود الأسهم الدائمة',
    whyCards: [
      {
        icon: '📱',
        title: 'فودافون كاش جاهز',
        desc: 'استخدم أشهر محفظة موبايل في مصر لشراء USDC عبر P2P. لا حاجة لحساب بنكي للبدء.'
      },
      {
        icon: '⚡',
        title: 'وصول فوري',
        desc: 'لا انتظار أسابيع للحصول على موافقة وساطة أمريكية. حوّل الجنيه إلى USDC وابدأ التداول في نفس اليوم.'
      },
      {
        icon: '🕐',
        title: 'تداول في أي وقت',
        desc: 'الأسواق الأمريكية تفتح الساعة 4:30 مساءً بتوقيت مصر. مع عقود الأسهم الدائمة، تداول متى شئت - صباحاً أو مساءً أو منتصف الليل.'
      },
      {
        icon: '💰',
        title: 'ابدأ بـ 2,500 ج.م',
        desc: 'معظم الوسطاء الأمريكيين يحتاجون $500+ كحد أدنى. هنا، ابدأ بـ ~2,500 ج.م (~$50) واستخدم الرافعة المالية للتحكم في مراكز أكبر.'
      }
    ],

    // Get Started Section
    stepByStep: 'دليل خطوة بخطوة',
    getStartedTitle: 'ابدأ في 15 دقيقة',
    getStartedDesc: 'اتبع هذه الخطوات لبدء تداول الأسهم الأمريكية من مصر اليوم.',

    // Step 1: Wallet
    step1Title: 'أنشئ محفظتك الرقمية',
    step1Desc: 'مجانية، تستغرق دقيقتين، وتفعلها مرة واحدة فقط',
    walletExplainTitle: 'ما هي المحفظة الرقمية؟',
    walletExplainDesc: 'فكر فيها كـ',
    walletExplainHighlight: 'حساب بنكي رقمي تتحكم فيه أنت',
    walletExplainDesc2: '. بدلاً من أن يحتفظ البنك بأموالك، تحتفظ بها بنفسك باستخدام إضافة بسيطة للمتصفح.',
    walletFeatures: ['أنت تتحكم فيها', 'مجانية تماماً', 'إعداد دقيقتين', 'تعمل في مصر'],
    walletSetupTitle: 'إليك كيفية إعدادها:',
    walletSteps: [
      { text: 'اذهب إلى', link: 'rabby.io' },
      { text: 'انقر على "Download" وأضفها إلى Chrome/Brave' },
      { text: 'انقر على "Create New Wallet" وعيّن كلمة مرور' },
      { text: 'اكتب عبارة الاسترداد المكونة من 12 كلمة', warning: 'احتفظ بها بأمان ولا تشاركها أبداً!' }
    ],
    watchVideo: 'شاهد: دليل الإعداد في دقيقتين',

    // Step 2: Funding
    step2Title: 'حوّل الجنيه إلى USDC',
    step2Desc: 'استخدم Binance P2P مع فودافون كاش أو فوري أو إنستاباي',
    fundingIntro: 'تحتاج USDC (عملة مستقرة تساوي $1) للتداول. إليك أفضل الطرق لتحويل الجنيه المصري:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'أفضل الأسعار، أعلى سيولة',
      steps: ['افتح تطبيق Binance', 'اذهب إلى P2P Trading', 'اشترِ USDT بالجنيه (فودافون كاش)', 'حوّل USDT إلى USDC', 'اسحب إلى Rabby (Arbitrum)']
    },
    fawry: {
      title: 'فوري',
      desc: 'ادفع في أي منفذ فوري',
      steps: ['افتح تطبيق Binance', 'اذهب إلى P2P Trading', 'اختر الدفع بفوري', 'ادفع في أي كشك فوري', 'حوّل USDT إلى USDC']
    },
    instapay: {
      title: 'إنستاباي',
      desc: 'تحويلات بنكية فورية',
      steps: ['افتح تطبيق Binance', 'اذهب إلى P2P Trading', 'اختر إنستاباي', 'حوّل من CIB/البنك الأهلي/بنك مصر', 'حوّل إلى USDC']
    },
    proTip: 'نصيحة احترافية:',
    proTipText: 'فودافون كاش على Binance P2P عادة ما تقدم أفضل أسعار الجنيه. اشترِ USDT أولاً (سيولة أعلى)، ثم حوّل إلى USDC على Binance (مجاناً).',
    seeDetailedGuide: 'شاهد الدليل المفصل لتحويل الجنيه إلى USDC مع لقطات شاشة',

    // Step 3: Trade
    step3Title: 'ابدأ التداول',
    step3Desc: 'اتصل بـ Hyperliquid وتداول 50+ سهم أمريكي',
    tradeSteps: [
      { text: 'اذهب إلى', linkText: 'app.hyperliquid.xyz' },
      { text: 'انقر على "Connect" واختر محفظة Rabby' },
      { text: 'انقر على "Deposit" وانقل USDC الخاص بك' },
      { text: 'ابحث عن سهم (NVDA, TSLA, AAPL) وافتح مركزاً!' }
    ],
    openHyperliquid: 'افتح Hyperliquid (خصم 4% على الرسوم)',

    // Popular Stocks
    popularStocksTitle: 'الأسهم الأمريكية الشائعة المتاحة',
    viewAllStocks: 'عرض جميع الـ 50+ سهم',
    hot: 'رائج',

    // FAQ
    faqTitle: 'الأسئلة الشائعة',
    faqs: [
      {
        question: 'هل من القانوني تداول الأسهم الأمريكية من مصر باستخدام عقود الأسهم الدائمة؟',
        answer: 'عقود الأسهم الدائمة موجودة في منطقة رمادية تنظيمياً. لم يتم تنظيمها صراحة من قبل السلطات المالية المصرية لأنها تعمل على منصات لامركزية. أنت لا تشتري أسهماً أمريكية مباشرة - أنت تتداول التعرض للسعر من خلال عقود اصطناعية. يستخدم العديد من المتداولين المصريين هذه المنصات، لكن يجب أن تفهم المشهد التنظيمي وتستشير متخصصاً ضريبياً.'
      },
      {
        question: 'هل يجب أن أدفع ضرائب على الأرباح من عقود الأسهم الدائمة في مصر؟',
        answer: 'قوانين الضرائب المصرية على العملات المشفرة وتداول المشتقات لا تزال تتطور. قد تخضع الأرباح لضريبة أرباح رأس المال. احتفظ بسجلات لجميع الصفقات واستشر متخصصاً ضريبياً على دراية بضرائب الأصول الرقمية في مصر.'
      },
      {
        question: 'ما هو الحد الأدنى للمبلغ الذي أحتاجه للبدء؟',
        answer: 'يمكنك البدء بمبلغ ~2,500 ج.م (~$50). مع الرافعة المالية، يمنحك هذا تعرضاً لأسهم بقيمة $500-3,000. نوصي بالبدء بمبلغ صغير لتتعلم المنصة.'
      },
      {
        question: 'هل يمكنني التداول خلال ساعات العمل المصرية؟',
        answer: 'نعم! عقود الأسهم الدائمة تتداول 24/7. يمكنك تداول الأسهم الأمريكية في أي وقت - صباحاً أو مساءً أو في وقت متأخر من الليل بتوقيت مصر. لا يوجد قيود على ساعات التداول.'
      },
      {
        question: 'هل KYC مطلوب؟',
        answer: 'منصات التداول (مثل Hyperliquid) لا تتطلب KYC. ومع ذلك، ستحتاج إلى إكمال KYC على Binance لاستخدام تداول P2P لتحويل الجنيه إلى USDC في البداية.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'المزيد من أدلة مصر',
    moreGuidesDesc: 'أنشأنا أدلة مفصلة خصيصاً للمتداولين المصريين. اطلع عليها:',
    guides: [
      { icon: '💳', title: 'حوّل الجنيه إلى USDC', desc: 'خطوة بخطوة مع فودافون كاش، فوري', href: '/blog/convert-egp-to-usdc' },
      { icon: '💰', title: 'تداول بـ 2,500 ج.م', desc: 'دليل استراتيجية الحساب الصغير', href: '/blog/trade-stocks-with-2500-egp' },
      { icon: '📱', title: 'دليل فودافون كاش', desc: 'استخدام أموال الموبايل للكريبتو', href: '/blog/vodafone-cash-crypto-guide' },
      { icon: '🤝', title: 'دليل تداول P2P', desc: 'طرق P2P العالمية ونصائح الأمان', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'ابدأ تداول الأسهم الأمريكية اليوم',
    ctaDesc: 'انضم إلى آلاف المتداولين المصريين الذين يصلون إلى NVDA وTSLA و50+ سهم أمريكي على مدار الساعة. لا حاجة لوسيط أمريكي. ابدأ بـ ~2,500 ج.م فقط.',
    getStartedCta: 'ابدأ الآن (خصم 4% على الرسوم)',

    // Free Notice
    freeNotice: 'هذا الموقع',
    freeNotice2: 'مجاني 100%',
    freeNotice3: ' للاستخدام لمقارنة أفضل المنصات لتداول الأسهم على مدار الساعة. عندما تسجل من خلال روابطنا لمنصات مثل',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'و',
    freeNotice6: 'Lighter',
    freeNotice7: '، تحصل على',
    freeNotice8: 'خصم 4% على رسوم التداول',
    freeNotice9: ' برمز الإحالة الخاص بنا. هذا يساعد في دعم الموقع مع توفير المال لك في كل صفقة.',

    // Related
    relatedTitle: 'أدلة ذات صلة',
    relatedGuides: [
      { tag: 'تمويل', title: 'حوّل الجنيه إلى USDC', desc: 'خطوة بخطوة مع لقطات شاشة', href: '/blog/convert-egp-to-usdc' },
      { tag: 'دليل', title: 'تداول بـ 2,500 ج.م', desc: 'استراتيجية الحساب الصغير', href: '/blog/trade-stocks-with-2500-egp' },
      { tag: 'موبايل', title: 'دليل فودافون كاش', desc: 'أموال الموبايل للكريبتو', href: '/blog/vodafone-cash-crypto-guide' }
    ]
  }
};

export const popularStocks = [
  { ticker: 'NVDA', name: 'Nvidia', hot: true },
  { ticker: 'TSLA', name: 'Tesla', hot: true },
  { ticker: 'AAPL', name: 'Apple', hot: false },
  { ticker: 'MSFT', name: 'Microsoft', hot: false },
  { ticker: 'META', name: 'Meta', hot: true },
  { ticker: 'AMZN', name: 'Amazon', hot: false },
  { ticker: 'GOOGL', name: 'Google', hot: false },
  { ticker: 'COIN', name: 'Coinbase', hot: true },
];
