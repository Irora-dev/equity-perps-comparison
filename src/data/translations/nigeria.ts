export const nativeLang = 'yo';
export const nativeName = 'Yoruba';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Nigeria',

    // Hero
    badge: 'Nigeria Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Nigeria',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert NGN to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '~75,000 NGN',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time WAT',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Nigerian Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🌍',
        title: 'No Dollar Scarcity Issues',
        desc: 'Bypass CBN forex restrictions. Convert NGN to USDC via P2P and trade freely without needing to source dollars through official channels.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert NGN to USDC and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade Anytime WAT',
        desc: 'US markets open at 2:30pm WAT. With equity perps, trade whenever you want - morning, afternoon, or late night.'
      },
      {
        icon: '💰',
        title: 'Start with ~75,000 NGN',
        desc: 'Most US brokers need $500+ minimum. Here, start with just ~75,000 NGN (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Nigeria today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Nigeria'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert NGN to USDC',
    step2Desc: 'Use Binance P2P with Opay, Palmpay, or bank transfer',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert NGN:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Best rates, most liquidity',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with NGN (Opay/Palmpay)', 'Convert USDT to USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    opayMethod: {
      title: 'Opay',
      desc: 'Most popular in Nigeria',
      steps: ['Fund your Opay wallet', 'Use Binance P2P', 'Pay seller via Opay transfer', 'Receive USDT instantly', 'Convert and withdraw']
    },
    palmpayMethod: {
      title: 'Palmpay',
      desc: 'Fast mobile payments',
      steps: ['Fund your Palmpay', 'Open Binance P2P', 'Select Palmpay payment', 'Complete transfer', 'Withdraw USDC to Rabby']
    },
    proTip: 'Pro tip:',
    proTipText: 'Binance P2P with Opay usually has the best NGN rates. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed NGN to USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from Nigeria using equity perps?',
        answer: 'Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by the SEC Nigeria or CBN as they operate on decentralized platforms. You\'re not directly buying US stocks - you\'re trading price exposure through synthetic contracts. Many Nigerian traders use these platforms, but you should understand the regulatory landscape and consult a financial advisor.'
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Nigeria?',
        answer: 'Yes, profits from trading may be taxable in Nigeria under capital gains tax. The Federal Inland Revenue Service (FIRS) may classify this as investment income. Maintain records of all trades and consult a tax professional familiar with crypto/derivatives taxation in Nigeria.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as 75,000 NGN (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during Nigerian hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, afternoon, or late night WAT. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on Binance or another exchange to convert NGN to USDC initially."
      },
      {
        question: 'What payment methods work best in Nigeria?',
        answer: 'Opay and Palmpay are the most popular for P2P crypto purchases. You can also use direct bank transfers from GTBank, Access Bank, First Bank, or Kuda. Chipper Cash is another option for mobile payments.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Guides for Nigerian Traders',
    moreGuidesDesc: "We've created detailed guides to help you get started. Check them out:",
    guides: [
      { icon: '₦', title: 'Convert NGN to USDC', desc: 'Step-by-step with Binance P2P', href: '/blog/p2p-usdc-guide' },
      { icon: '💰', title: 'Trade with Small Capital', desc: 'Strategy guide for beginners', href: '/blog/how-to-trade-equity-perps' },
      { icon: '📊', title: 'Understanding Leverage', desc: 'Risk management basics', href: '/blog/leverage-liquidation-funding' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Nigerian traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just ~75,000 NGN.',
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
      { tag: 'FUNDING', title: 'P2P USDC Guide', desc: 'Convert local currency to USDC', href: '/blog/p2p-usdc-guide' },
      { tag: 'GUIDE', title: 'How to Trade Equity Perps', desc: 'Complete trading guide', href: '/blog/how-to-trade-equity-perps' },
      { tag: 'RISK', title: 'Leverage & Liquidation', desc: 'Understanding risk', href: '/blog/leverage-liquidation-funding' }
    ]
  },
  yo: {
    // Breadcrumb
    home: 'Ile',
    blog: 'Bulogi',
    pageTitle: 'Ta Awon Oja US lati Naijiria',

    // Hero
    badge: 'Itosona Naijiria',
    noBrokerBadge: 'Ko Si Alagbata Ti A Nilo',
    heroTitle1: 'Ta Awon Oja US',
    heroTitle2: 'Lati Naijiria',
    heroDesc: 'Wole si NVDA, TSLA, AAPL ati awon oja US 50+ laisi akanti alagbata US. Yi NGN pada si USDC ki o bere tita ni',
    heroDescHighlight: 'iseju 15',
    startTrading: 'Bere Tita Bayi',
    howItWorks: 'Bawo Ni O Se N Sise',

    // Quick Stats
    statMinimumValue: '~75,000 NGN',
    statMinimum: 'O Kere Lati Bere',
    statTimeValue: '24/7',
    statTime: 'Akoko Eyikeyi WAT',
    statStocksValue: '50+',
    statStocks: 'Awon Oja US',
    statKycValue: 'Ko Si KYC',
    statKyc: 'Lori Pepe Tita',

    // Why Section
    whyTitle: 'Idi Ti Awon Oniṣowo Naijiria Fi Yan Equity Perps',
    whyCards: [
      {
        icon: '🌍',
        title: 'Ko Si Isoro Aini Dola',
        desc: 'Koja awon ihamọ forex CBN. Yi NGN pada si USDC nipasẹ P2P ki o ta larọwọto laisi nilo lati wa awon dola nipasẹ awon ona osise.'
      },
      {
        icon: '⚡',
        title: 'Iwọle Lesekese',
        desc: 'Ko si nduro awon ọsẹ fun ifọwọsi alagbata US. Yi NGN pada si USDC ki o bẹrẹ tita ni ọjọ kanna.'
      },
      {
        icon: '🕐',
        title: 'Ta Nigbakugba WAT',
        desc: 'Ọja US ṣii ni 2:30pm WAT. Pẹlu equity perps, ta nigbakugba ti o ba fẹ - owurọ, ọsan, tabi ale.'
      },
      {
        icon: '💰',
        title: 'Bere pelu ~75,000 NGN',
        desc: 'Ọpọlọpọ awon alagbata US nilo $500+ o kere. Nibi, bẹrẹ pẹlu ~75,000 NGN (~$50) ki o lo leverage lati ṣakoso awon ipo nla.'
      }
    ],

    // Get Started Section
    stepByStep: 'Itọsọna Igbesẹ-nipasẹ-Igbesẹ',
    getStartedTitle: 'Bere ni Iseju 15',
    getStartedDesc: 'Tẹle awon igbesẹ wọnyi lati bẹrẹ tita awon oja US lati Naijiria loni.',

    // Step 1: Wallet
    step1Title: 'Ṣeto Apamọwọ Dijitali Rẹ',
    step1Desc: 'Ọfẹ, gba iṣẹju 2, ati pe o ṣe eyi lẹẹkan',
    walletExplainTitle: 'Kini apamọwọ dijitali?',
    walletExplainDesc: 'Ronu rẹ bi',
    walletExplainHighlight: 'akanti banki dijitali ti o ṣakoso',
    walletExplainDesc2: '. Dipo ki banki di owo rẹ mu, o di i funrarẹ nipa lilo itẹsiwaju ẹrọ aṣawakiri ti o rọrun.',
    walletFeatures: ['O ṣakoso rẹ', 'Ọfẹ patapata', 'Iṣeto iṣẹju 2', 'O n ṣiṣẹ ni Naijiria'],
    walletSetupTitle: 'Eyi ni bi o ṣe le ṣeto rẹ:',
    walletSteps: [
      { text: 'Lọ si', link: 'rabby.io' },
      { text: 'Tẹ "Download" ki o ṣafikun si Chrome/Brave' },
      { text: 'Tẹ "Create New Wallet" ki o ṣeto ọrọigbaniwọle' },
      { text: 'Kọ gbolohun igbapada ọrọ 12 rẹ silẹ', warning: 'Pa a mọ ki o ma ṣe pin rẹ!' }
    ],
    watchVideo: 'Wo: Itọsọna Iṣeto Iṣẹju 2',

    // Step 2: Funding
    step2Title: 'Yi NGN pada si USDC',
    step2Desc: 'Lo Binance P2P pẹlu Opay, Palmpay, tabi gbigbe banki',
    fundingIntro: 'O nilo USDC (stablecoin ti o jẹ $1) lati ta. Awon ọna ti o dara julọ lati yi NGN pada ni:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Awon idiyele to dara julọ, liquidity julọ',
      steps: ['Ṣii app Binance', 'Lọ si Tita P2P', 'Ra USDT pẹlu NGN (Opay/Palmpay)', 'Yi USDT pada si USDC', 'Yọkuro si Rabby (Arbitrum)']
    },
    opayMethod: {
      title: 'Opay',
      desc: 'Olokiki julọ ni Naijiria',
      steps: ['Ṣe afikun owo si apamọwọ Opay rẹ', 'Lo Binance P2P', 'San olutaja nipasẹ gbigbe Opay', 'Gba USDT lesekese', 'Yi pada ki o yọkuro']
    },
    palmpayMethod: {
      title: 'Palmpay',
      desc: 'Awon sisanwo alagbeka to yara',
      steps: ['Ṣe afikun owo si Palmpay rẹ', 'Ṣii Binance P2P', 'Yan sisanwo Palmpay', 'Pari gbigbe', 'Yọ USDC kuro si Rabby']
    },
    proTip: 'Imọran pro:',
    proTipText: 'Binance P2P pẹlu Opay ni awon idiyele NGN to dara julọ nigbagbogbo. Ra USDT lakoko (liquidity diẹ sii), lẹhinna yi pada si USDC lori Binance (ọfẹ).',
    seeDetailedGuide: 'Wo itọsọna NGN si USDC ti alaye pẹlu awon aworan',

    // Step 3: Trade
    step3Title: 'Bere Tita',
    step3Desc: 'Sopọ si Hyperliquid ki o ta awon oja US 50+',
    tradeSteps: [
      { text: 'Lọ si', linkText: 'app.hyperliquid.xyz' },
      { text: 'Tẹ "Connect" ki o yan Rabby Wallet' },
      { text: 'Tẹ "Deposit" ki o si afara USDC rẹ' },
      { text: 'Wa oja kan (NVDA, TSLA, AAPL) ki o ṣii ipo!' }
    ],
    openHyperliquid: 'Ṣii Hyperliquid (4% Kuro Ni Awon Owo)',

    // Popular Stocks
    popularStocksTitle: 'Awon Oja US Olokiki Ti O Wa',
    viewAllStocks: 'Wo gbogbo awon oja 50+',
    hot: 'GBONA',

    // FAQ
    faqTitle: 'Awon Ibeere Ti A Beere Nigbagbogbo',
    faqs: [
      {
        question: 'Ṣe o jẹ ofin lati ta awon oja US lati Naijiria nipa lilo equity perps?',
        answer: 'Equity perpetuals wa ni agbegbe grẹy ilana. SEC Naijiria tabi CBN ko ṣe ofin fun wọn ni kedere bi wọn ṣe n ṣiṣẹ lori awon pẹpẹ ti a pin kakiri. O ko ra awon oja US taara - o n ta ifihan idiyele nipasẹ awon adehun sintetiki. Ọpọlọpọ awon oniṣowo Naijiria lo awon pẹpẹ wọnyi, ṣugbọn o yẹ ki o ye oju-aye ilana ati ba oludamọran owo sọrọ.'
      },
      {
        question: 'Ṣe mo nilo lati san owo-ori lori ere lati equity perps ni Naijiria?',
        answer: 'Bẹẹni, ere lati tita le jẹ owo-ori ni Naijiria labẹ owo-ori ere olu. Iṣẹ Owo-ori Inu Ile Apapo (FIRS) le ṣe ipinnu eyi bi owo wiwọle idoko-owo. Ṣetọju awon igbasilẹ gbogbo awon tita ati ba alamọja owo-ori ti o mọ owo-ori crypto/awon itọsẹ ni Naijiria sọrọ.'
      },
      {
        question: 'Kini iye ti o kere julọ ti mo nilo lati bẹrẹ?',
        answer: 'O le bẹrẹ pẹlu bi 75,000 NGN (~$50). Pẹlu leverage, eyi fun ọ ni ifihan si $500-3,000 ti awon oja. A ṣeduro ibẹrẹ kekere lati kọ ẹkọ pẹpẹ naa.'
      },
      {
        question: 'Ṣe mo le ta lakoko awon wakati Naijiria?',
        answer: 'Bẹẹni! Equity perps ta 24/7. O le ta awon oja US ni akoko eyikeyi - owurọ, ọsan, tabi alẹ ni WAT. Ko si ihamọ lori awon wakati tita.'
      },
      {
        question: 'Ṣe KYC nilo?',
        answer: 'Awon pẹpẹ tita (bii Hyperliquid) ko nilo KYC. Sibẹsibẹ, iwọ yoo nilo lati pari KYC lori Binance tabi paṣipaarọ miiran lati yi NGN pada si USDC lakoko.'
      },
      {
        question: 'Awon ọna isanwo wo ni o ṣiṣẹ dara julọ ni Naijiria?',
        answer: 'Opay ati Palmpay jẹ olokiki julọ fun awon rira crypto P2P. O tun le lo awon gbigbe banki taara lati GTBank, Access Bank, First Bank, tabi Kuda. Chipper Cash jẹ aṣayan miiran fun awon sisanwo alagbeka.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Awon Itọsọna Diẹ Sii Fun Awon Oniṣowo Naijiria',
    moreGuidesDesc: 'A ti ṣẹda awon itọsọna alaye lati ran ọ lọwọ lati bẹrẹ. Wo wọn:',
    guides: [
      { icon: '₦', title: 'Yi NGN pada si USDC', desc: 'Igbesẹ-nipasẹ-igbesẹ pẹlu Binance P2P', href: '/blog/p2p-usdc-guide' },
      { icon: '💰', title: 'Ta pẹlu Olu Kekere', desc: 'Itọsọna ilana fun awon olubere', href: '/blog/how-to-trade-equity-perps' },
      { icon: '📊', title: 'Loye Leverage', desc: 'Awon ipilẹ iṣakoso ewu', href: '/blog/leverage-liquidation-funding' },
      { icon: '🤝', title: 'Itọsọna Tita P2P', desc: 'Awon ọna P2P agbaye ati awon imọran ailewu', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Bere Tita Awon Oja US Loni',
    ctaDesc: 'Darapọ mọ ẹgbẹẹgbẹrun awon oniṣowo Naijiria ti o n wọle si NVDA, TSLA, ati awon oja US 50+ 24/7. Ko si alagbata US ti a nilo. Bẹrẹ pẹlu ~75,000 NGN.',
    getStartedCta: 'Bere Bayi (4% Kuro Ni Awon Owo)',

    // Free Notice
    freeNotice: 'Aaye yi jẹ',
    freeNotice2: 'ọfẹ 100%',
    freeNotice3: ' lati lo fun afiwe awon pẹpẹ to dara julọ lati ta awon oja 24/7. Nigbati o ba forukọsilẹ nipasẹ awon ọna asopọ wa si awon pẹpẹ bi',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'ati',
    freeNotice6: 'Lighter',
    freeNotice7: ', o gba',
    freeNotice8: 'idiyele 4% kuro lori awon owo tita',
    freeNotice9: ' pẹlu koodu itọkasi wa. Eyi ṣe iranlọwọ lati ṣe atilẹyin aaye naa lakoko ti o n fi owo rẹ pamọ lori gbogbo tita.',

    // Related
    relatedTitle: 'Awon Itọsọna Ti O Jọmọ',
    relatedGuides: [
      { tag: 'IGBEOWOSILE', title: 'Itọsọna P2P USDC', desc: 'Yi owo agbegbe pada si USDC', href: '/blog/p2p-usdc-guide' },
      { tag: 'ITỌSỌNA', title: 'Bawo Ni Lati Ta Equity Perps', desc: 'Itọsọna tita pipe', href: '/blog/how-to-trade-equity-perps' },
      { tag: 'EWU', title: 'Leverage & Liquidation', desc: 'Loye ewu', href: '/blog/leverage-liquidation-funding' }
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
