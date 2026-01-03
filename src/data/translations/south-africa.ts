export const nativeLang = 'en';
export const nativeName = 'English';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from South Africa',

    // Hero
    badge: 'South Africa Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From South Africa',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert ZAR to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: 'R900',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time SAST',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why South African Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🚫',
        title: 'Bypass Forex Limits',
        desc: "Equity perps bypass traditional forex controls. You're not directly buying US shares - convert ZAR to crypto and trade synthetic assets freely."
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert ZAR to USDC and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Perfect Timezone',
        desc: 'US markets open at 4:30pm SAST. With equity perps, trade whenever you want - morning, afternoon, or late night.'
      },
      {
        icon: '💰',
        title: 'Start with R900',
        desc: 'Most US brokers need $500+ minimum. Here, start with just R900 (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from South Africa today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in SA'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert ZAR to USDC',
    step2Desc: 'Use Luno, VALR, or Binance P2P',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert ZAR:',
    luno: {
      title: 'Luno',
      desc: 'Most popular in SA, easy EFT',
      steps: ['Open Luno app', 'Deposit ZAR via EFT', 'Buy BTC or ETH', 'Swap to USDC on DEX', 'Withdraw to Rabby (Arbitrum)']
    },
    valr: {
      title: 'VALR',
      desc: 'Low fees, good liquidity',
      steps: ['Deposit ZAR via EFT', 'Buy USDT directly', 'Convert USDT to USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Best rates, escrow protection',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with ZAR (EFT/SnapScan)', 'Convert USDT to USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Binance P2P usually has the best ZAR rates. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed ZAR to USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from South Africa using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by the FSCA as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many South African traders use these platforms, but you should understand the regulatory landscape and consult a tax professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in South Africa?',
        answer: 'Yes, profits from trading are likely taxable in South Africa. They may be classified as capital gains or income depending on your trading frequency. Maintain records of all trades and consult a tax practitioner familiar with crypto/derivatives taxation.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as R900 (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during South African business hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night SAST. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete FICA/KYC on a South African exchange (Luno, VALR) or Binance to convert ZAR to USDC initially."
      },
      {
        question: 'What about forex exchange controls?',
        answer: "Equity perps bypass traditional forex controls since you're not directly buying US shares. You convert ZAR to crypto (USDC) and trade synthetic assets. This is a key advantage for SA traders."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More South Africa Guides',
    moreGuidesDesc: "We've created detailed guides specifically for South African traders. Check them out:",
    guides: [
      { icon: 'R', title: 'Convert ZAR to USDC', desc: 'Step-by-step with Luno, VALR, Binance P2P', href: '/blog/convert-zar-to-usdc' },
      { icon: '💰', title: 'Trade with R1,000', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-1000-rand' },
      { icon: '⚖️', title: 'Is It Legal in SA?', desc: 'Regulations, taxes, and compliance', href: '/blog/equity-perps-legal-south-africa' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of South African traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just R900.',
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
      { tag: 'FUNDING', title: 'Convert ZAR to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-zar-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with R1,000', desc: 'Small account strategy', href: '/blog/trade-stocks-with-1000-rand' },
      { tag: 'LEGAL', title: 'Is It Legal in SA?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-south-africa' }
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
