export const nativeLang = 'sw';
export const nativeName = 'Kiswahili';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Kenya',

    // Hero
    badge: 'Kenya Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Kenya',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert KES to USDC via M-Pesa and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: 'KSh 6,500',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time EAT',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Kenyan Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '📱',
        title: 'M-Pesa Integration',
        desc: 'Convert KES to USDC directly using M-Pesa on Binance P2P. The fastest way for Kenyan traders to fund their accounts.'
      },
      {
        icon: '🚫',
        title: 'No Forex Limits',
        desc: 'Trade without CBK forex restrictions. Access global markets without the paperwork and approval delays.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert KES to USDC and start trading the same day.'
      },
      {
        icon: '💰',
        title: 'Start with KSh 6,500',
        desc: 'Most US brokers need $500+ minimum. Here, start with just KSh 6,500 (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Kenya today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Kenya'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert KES to USDC',
    step2Desc: 'Use M-Pesa or Airtel Money on Binance P2P',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert KES:',
    binanceP2P: {
      title: 'Binance P2P (M-Pesa)',
      desc: 'Best rates, instant transfers',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with KES (M-Pesa)', 'Convert USDT to USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Airtel Money',
      desc: 'Alternative mobile money',
      steps: ['Open Binance P2P', 'Select Airtel Money', 'Buy USDT with KES', 'Convert USDT to USDC', 'Withdraw to Rabby']
    },
    coindcx: {
      title: 'Bank Transfer',
      desc: 'Equity, KCB, Co-op Bank',
      steps: ['Open Binance P2P', 'Select Bank Transfer', 'Buy USDC directly', '(Slower but works for larger amounts)']
    },
    proTip: 'Pro tip:',
    proTipText: 'M-Pesa on Binance P2P is the fastest option for Kenyan traders. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed KES to USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from Kenya using equity perps?',
        answer: 'Equity perpetuals operate on decentralized platforms outside traditional regulatory frameworks. You are not directly buying US stocks - you are trading price exposure through synthetic contracts. Many Kenyan traders use these platforms. Consult a financial advisor to understand your specific situation.'
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Kenya?',
        answer: 'Yes, trading profits may be taxable in Kenya. The KRA treats investment income as taxable. Keep records of all trades and consult a tax professional familiar with crypto and derivatives taxation.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as KSh 6,500 (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I use M-Pesa to fund my account?',
        answer: 'Yes! M-Pesa is the most popular way for Kenyan traders to buy USDC. Use Binance P2P to convert KES to USDT via M-Pesa, then convert to USDC.'
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on Binance to convert KES to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Kenya Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Kenyan traders. Check them out:",
    guides: [
      { icon: 'KSh', title: 'Convert KES to USDC', desc: 'Step-by-step with M-Pesa, Binance P2P', href: '/blog/convert-kes-to-usdc' },
      { icon: '💰', title: 'Trade with KSh 6,500', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-6500-shillings' },
      { icon: '📱', title: 'M-Pesa Trading Guide', desc: 'Mobile money to crypto', href: '/blog/mpesa-to-usdc' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Kenyan traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just KSh 6,500.',
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
      { tag: 'FUNDING', title: 'Convert KES to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-kes-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with KSh 6,500', desc: 'Small account strategy', href: '/blog/trade-stocks-with-6500-shillings' },
      { tag: 'MOBILE', title: 'M-Pesa Trading Guide', desc: 'Mobile money made easy', href: '/blog/mpesa-to-usdc' }
    ]
  },
  sw: {
    // Breadcrumb
    home: 'Nyumbani',
    blog: 'Blogu',
    pageTitle: 'Fanya Biashara ya Hisa za Marekani kutoka Kenya',

    // Hero
    badge: 'Mwongozo wa Kenya',
    noBrokerBadge: 'Hakuna Dalali',
    heroTitle1: 'Fanya Biashara ya Hisa za Marekani',
    heroTitle2: 'Kutoka Kenya',
    heroDesc: 'Pata NVDA, TSLA, AAPL na hisa 50+ za Marekani bila akaunti ya dalali wa Marekani. Badilisha KES kuwa USDC kupitia M-Pesa na uanze kufanya biashara ndani ya',
    heroDescHighlight: 'dakika 15',
    startTrading: 'Anza Kufanya Biashara Sasa',
    howItWorks: 'Inafanya Kazi Vipi',

    // Quick Stats
    statMinimumValue: 'KSh 6,500',
    statMinimum: 'Kiwango cha Chini',
    statTimeValue: '24/7',
    statTime: 'Wakati Wowote EAT',
    statStocksValue: '50+',
    statStocks: 'Hisa za Marekani',
    statKycValue: 'Hakuna KYC',
    statKyc: 'Kwenye Jukwaa la Biashara',

    // Why Section
    whyTitle: 'Kwa Nini Wafanyabiashara wa Kenya Wanachagua Equity Perps',
    whyCards: [
      {
        icon: '📱',
        title: 'M-Pesa Inafanya Kazi',
        desc: 'Badilisha KES kuwa USDC moja kwa moja ukitumia M-Pesa kwenye Binance P2P. Njia ya haraka zaidi kwa wafanyabiashara wa Kenya.'
      },
      {
        icon: '🚫',
        title: 'Hakuna Vikwazo vya Forex',
        desc: 'Fanya biashara bila vikwazo vya CBK forex. Pata masoko ya kimataifa bila karatasi na ucheleweshaji.'
      },
      {
        icon: '⚡',
        title: 'Upatikanaji wa Haraka',
        desc: 'Hakuna kusubiri wiki kwa idhini ya dalali wa Marekani. Badilisha KES kuwa USDC na uanze biashara siku hiyo hiyo.'
      },
      {
        icon: '💰',
        title: 'Anza na KSh 6,500',
        desc: 'Dalali wengi wa Marekani wanahitaji $500+ kiwango cha chini. Hapa, anza na KSh 6,500 tu (~$50) na utumie leverage kudhibiti nafasi kubwa.'
      }
    ],

    // Get Started Section
    stepByStep: 'Mwongozo wa Hatua kwa Hatua',
    getStartedTitle: 'Anza ndani ya Dakika 15',
    getStartedDesc: 'Fuata hatua hizi kuanza kufanya biashara ya hisa za Marekani kutoka Kenya leo.',

    // Step 1: Wallet
    step1Title: 'Weka Wallet Yako ya Dijitali',
    step1Desc: 'Bure, inachukua dakika 2, na unafanya hii mara moja tu',
    walletExplainTitle: 'Wallet ya dijitali ni nini?',
    walletExplainDesc: 'Ifikirie kama',
    walletExplainHighlight: 'akaunti ya benki ya dijitali unayoidhibiti',
    walletExplainDesc2: '. Badala ya benki kushikilia pesa yako, unashikilia mwenyewe ukitumia programu rahisi ya kivinjari.',
    walletFeatures: ['Unadhibiti', 'Bure kabisa', 'Dakika 2 kuweka', 'Inafanya kazi Kenya'],
    walletSetupTitle: 'Hivi ndivyo unavyoiweka:',
    walletSteps: [
      { text: 'Nenda', link: 'rabby.io' },
      { text: 'Bofya "Download" na uongeze kwenye Chrome/Brave' },
      { text: 'Bofya "Create New Wallet" na uweke nenosiri' },
      { text: 'Andika maneno 12 ya kurejesha', warning: 'Yaweke salama na usiyashiriki kamwe!' }
    ],
    watchVideo: 'Tazama: Mwongozo wa Dakika 2',

    // Step 2: Funding
    step2Title: 'Badilisha KES kuwa USDC',
    step2Desc: 'Tumia M-Pesa au Airtel Money kwenye Binance P2P',
    fundingIntro: 'Unahitaji USDC (sarafu thabiti yenye thamani ya $1) kufanya biashara. Hizi ni njia bora za kubadilisha KES:',
    binanceP2P: {
      title: 'Binance P2P (M-Pesa)',
      desc: 'Bei bora, uhamisho wa haraka',
      steps: ['Fungua programu ya Binance', 'Nenda P2P Trading', 'Nunua USDT na KES (M-Pesa)', 'Badilisha USDT kuwa USDC', 'Toa kwenda Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Airtel Money',
      desc: 'Pesa nyingine ya simu',
      steps: ['Fungua Binance P2P', 'Chagua Airtel Money', 'Nunua USDT na KES', 'Badilisha USDT kuwa USDC', 'Toa kwenda Rabby']
    },
    coindcx: {
      title: 'Uhamisho wa Benki',
      desc: 'Equity, KCB, Co-op Bank',
      steps: ['Fungua Binance P2P', 'Chagua Bank Transfer', 'Nunua USDC moja kwa moja', '(Polepole lakini inafanya kazi kwa kiasi kikubwa)']
    },
    proTip: 'Kidokezo:',
    proTipText: 'M-Pesa kwenye Binance P2P ndiyo chaguo la haraka zaidi kwa wafanyabiashara wa Kenya. Nunua USDT kwanza (likiditi zaidi), kisha badilisha kuwa USDC kwenye Binance (bure).',
    seeDetailedGuide: 'Tazama mwongozo wa kina wa KES kuwa USDC na picha za skrini',

    // Step 3: Trade
    step3Title: 'Anza Kufanya Biashara',
    step3Desc: 'Unganisha na Hyperliquid na ufanye biashara ya hisa 50+ za Marekani',
    tradeSteps: [
      { text: 'Nenda', linkText: 'app.hyperliquid.xyz' },
      { text: 'Bofya "Connect" na uchague Rabby Wallet' },
      { text: 'Bofya "Deposit" na uunganishe USDC yako' },
      { text: 'Tafuta hisa (NVDA, TSLA, AAPL) na ufungue nafasi!' }
    ],
    openHyperliquid: 'Fungua Hyperliquid (Punguzo la 4% kwenye Ada)',

    // Popular Stocks
    popularStocksTitle: 'Hisa Maarufu za Marekani Zinazopatikana',
    viewAllStocks: 'Tazama hisa zote 50+',
    hot: 'MOTO',

    // FAQ
    faqTitle: 'Maswali Yanayoulizwa Mara kwa Mara',
    faqs: [
      {
        question: 'Je, ni halali kufanya biashara ya hisa za Marekani kutoka Kenya kwa kutumia equity perps?',
        answer: 'Equity perpetuals zinafanya kazi kwenye majukwaa ya decentralized nje ya mifumo ya kawaida ya udhibiti. Hununui hisa za Marekani moja kwa moja - unafanya biashara ya mfiduo wa bei kupitia mikataba ya synthetic. Wafanyabiashara wengi wa Kenya wanatumia majukwaa haya. Shauriana na mshauri wa kifedha kuelewa hali yako maalum.'
      },
      {
        question: 'Je, ninahitaji kulipa kodi kwenye faida kutoka kwa equity perps nchini Kenya?',
        answer: 'Ndiyo, faida za biashara zinaweza kutozwa kodi nchini Kenya. KRA inachukulia mapato ya uwekezaji kama yanayotozwa kodi. Weka rekodi za biashara zote na shauriana na mtaalamu wa kodi anayefahamu ushuru wa crypto na derivatives.'
      },
      {
        question: 'Kiwango cha chini ninachohitaji kuanza ni kiasi gani?',
        answer: 'Unaweza kuanza na KSh 6,500 tu (~$50). Na leverage, hii inakupa mfiduo wa hisa zenye thamani ya $500-3,000. Tunapendekeza kuanza kidogo kujifunza jukwaa.'
      },
      {
        question: 'Je, ninaweza kutumia M-Pesa kuweka pesa kwenye akaunti yangu?',
        answer: 'Ndiyo! M-Pesa ndiyo njia maarufu zaidi kwa wafanyabiashara wa Kenya kununua USDC. Tumia Binance P2P kubadilisha KES kuwa USDT kupitia M-Pesa, kisha badilisha kuwa USDC.'
      },
      {
        question: 'Je, KYC inahitajika?',
        answer: 'Majukwaa ya biashara (kama Hyperliquid) hayahitaji KYC. Hata hivyo, utahitaji kukamilisha KYC kwenye Binance kubadilisha KES kuwa USDC mwanzoni.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Miongozo Mingine ya Kenya',
    moreGuidesDesc: 'Tumetengeneza miongozo ya kina hasa kwa wafanyabiashara wa Kenya. Angalia hapa:',
    guides: [
      { icon: 'KSh', title: 'Badilisha KES kuwa USDC', desc: 'Hatua kwa hatua na M-Pesa, Binance P2P', href: '/blog/convert-kes-to-usdc' },
      { icon: '💰', title: 'Fanya Biashara na KSh 6,500', desc: 'Mwongozo wa mkakati wa akaunti ndogo', href: '/blog/trade-stocks-with-6500-shillings' },
      { icon: '📱', title: 'Mwongozo wa Biashara ya M-Pesa', desc: 'Pesa ya simu hadi crypto', href: '/blog/mpesa-to-usdc' },
      { icon: '🤝', title: 'Mwongozo wa Biashara ya P2P', desc: 'Njia za P2P za kimataifa na vidokezo vya usalama', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Anza Kufanya Biashara ya Hisa za Marekani Leo',
    ctaDesc: 'Jiunge na maelfu ya wafanyabiashara wa Kenya wanaopata NVDA, TSLA, na hisa 50+ za Marekani 24/7. Hakuna dalali wa Marekani anayehitajika. Anza na KSh 6,500 tu.',
    getStartedCta: 'Anza Sasa (Punguzo la 4% kwenye Ada)',

    // Free Notice
    freeNotice: 'Tovuti hii ni',
    freeNotice2: 'bure 100%',
    freeNotice3: ' kutumia kulinganisha majukwaa bora ya kufanya biashara ya hisa 24/7. Unapojiandikisha kupitia viungo vyetu kwa majukwaa kama',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'na',
    freeNotice6: 'Lighter',
    freeNotice7: ', unapata',
    freeNotice8: 'punguzo la 4% kwenye ada za biashara',
    freeNotice9: ' na msimbo wetu wa rufaa. Hii husaidia kusaidia tovuti huku ikikuokoa pesa kwa kila biashara.',

    // Related
    relatedTitle: 'Miongozo Inayohusiana',
    relatedGuides: [
      { tag: 'UFADHILI', title: 'Badilisha KES kuwa USDC', desc: 'Hatua kwa hatua na picha za skrini', href: '/blog/convert-kes-to-usdc' },
      { tag: 'MWONGOZO', title: 'Fanya Biashara na KSh 6,500', desc: 'Mkakati wa akaunti ndogo', href: '/blog/trade-stocks-with-6500-shillings' },
      { tag: 'SIMU', title: 'Mwongozo wa Biashara ya M-Pesa', desc: 'Pesa ya simu imefanywa rahisi', href: '/blog/mpesa-to-usdc' }
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
