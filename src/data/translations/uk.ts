export const nativeLang = 'en';
export const nativeName = 'English';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from the UK',

    // Hero
    badge: 'UK Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From the UK',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert GBP to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '~£40',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time GMT',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why UK Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🌍',
        title: 'No US Broker Needed',
        desc: 'Skip the hassle of opening a US brokerage account. No SSN required, no W-8BEN forms, no complex foreign account paperwork.'
      },
      {
        icon: '🕐',
        title: 'Trade Outside Market Hours',
        desc: 'US markets open at 2:30pm GMT. With equity perps, trade whenever you want - morning, afternoon, or late night.'
      },
      {
        icon: '🚫',
        title: 'No PDT Rule',
        desc: 'The US Pattern Day Trader rule doesn\'t apply. Day trade freely without needing $25,000 minimum account balance.'
      },
      {
        icon: '💷',
        title: 'Fund with GBP',
        desc: 'Use Faster Payments to convert GBP to USDC instantly via Coinbase or Kraken. Start with just £40.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from the UK today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in UK'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert GBP to USDC',
    step2Desc: 'Use Coinbase, Kraken, or Binance',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert GBP:',
    binanceP2P: {
      title: 'Coinbase',
      desc: 'FCA registered, Faster Payments',
      steps: ['Create Coinbase account', 'Complete KYC verification', 'Deposit GBP via Faster Payments', 'Buy USDC with GBP', 'Withdraw to Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Kraken',
      desc: 'FCA registered, competitive rates',
      steps: ['Create Kraken account', 'Deposit GBP via Faster Payments/BACS', 'Buy USDC with GBP', 'Withdraw to Rabby (Arbitrum)']
    },
    coindcx: {
      title: 'Binance',
      desc: 'Low fees, P2P available',
      steps: ['Create Binance account', 'Use P2P or card to buy USDC', 'Withdraw to Rabby', '(Check current UK availability)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Coinbase and Kraken are both FCA-registered in the UK. Faster Payments deposits are usually instant. Always withdraw to Arbitrum network for lowest fees (~£0.10).',
    seeDetailedGuide: 'See detailed GBP to USDC guide with screenshots',

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
    viewAllStocks: 'View all 50+ stocks →',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Is it legal to trade US stocks from the UK using equity perps?',
        answer: "Equity perpetuals exist in a regulatory grey area. They are decentralised derivatives not specifically regulated by the FCA. Unlike CFDs which are FCA-regulated with leverage caps, perps operate on decentralised platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. You are responsible for reporting any trading profits to HMRC."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in the UK?',
        answer: 'Yes, UK residents must report crypto trading profits to HMRC. Profits may be subject to Capital Gains Tax. Keep records of all trades and consider using crypto tax software like Koinly or CoinTracker. Consult a tax professional for specific advice.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as £40 (~$50 USDC). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade outside US market hours?',
        answer: 'Yes! Equity perps trade 24/7. US markets are only open 2:30pm-9pm GMT. You can trade at any time - morning, evening, weekends, or bank holidays. React to earnings announcements or news even when NYSE is closed.'
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on a UK exchange (Coinbase, Kraken) to convert GBP to USDC initially. Both are FCA-registered."
      },
      {
        question: 'How is this different from Hargreaves Lansdown or IG?',
        answer: 'Unlike UK brokers, equity perps offer: 24/7 trading (not just US market hours), up to 50x leverage (vs 5x FCA limit), no KYC on the trading platform, self-custody of funds, and easier short selling. However, you lose FSCS protection (up to £85,000) and FCA oversight.'
      },
      {
        question: "What's the Pattern Day Trader rule?",
        answer: "The PDT rule is a US regulation requiring $25,000 minimum to day trade. It doesn't apply to equity perps since you're not using a US broker. UK traders can day trade freely without any minimum balance requirements."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Guides for UK Traders',
    moreGuidesDesc: "We've created guides to help you get started. Check them out:",
    guides: [
      { icon: '💷', title: 'Convert GBP to USDC', desc: 'Step-by-step with Coinbase, Kraken', href: '/blog/convert-gbp-to-usdc' },
      { icon: '📊', title: 'What Are Equity Perps?', desc: 'Complete beginner guide', href: '/blog/what-are-equity-perps' },
      { icon: '⚖️', title: 'Understand the Risks', desc: 'Leverage, liquidation, and more', href: '/blog/equity-perps-risks' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of UK traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just £40.',
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
      { tag: 'FUNDING', title: 'Convert GBP to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-gbp-to-usdc' },
      { tag: 'GUIDE', title: 'What Are Equity Perps?', desc: 'Complete beginner guide', href: '/blog/what-are-equity-perps' },
      { tag: 'PLATFORM', title: 'Hyperliquid Guide', desc: 'How to use the platform', href: '/blog/hyperliquid-guide' }
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
