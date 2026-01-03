export const nativeLang = 'en';
export const nativeName = 'English';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from The Gambia',

    // Hero
    badge: 'Gambia Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From The Gambia',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert GMD to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: 'D3,400',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time GMT',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Gambian Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🌍',
        title: 'Access Global Markets',
        desc: 'Trade US stocks directly from The Gambia without needing a foreign brokerage account or complex international transfers.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for international account approval. Convert GMD to USDC and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Perfect Timezone',
        desc: 'The Gambia is on GMT (UTC+0) - trade US stocks in the evening when markets are most active, or 24/7 with perpetuals.'
      },
      {
        icon: '💰',
        title: 'Start with D3,400',
        desc: 'Most US brokers need $500+ minimum. Here, start with just D3,400-4,000 (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from The Gambia today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Gambia'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert GMD to USDC',
    step2Desc: 'Use Binance P2P with QMoney, Afrimoney, or bank transfer',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert GMD:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Best rates, most liquidity',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with GMD (QMoney/Afrimoney)', 'Convert USDT → USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    qmoney: {
      title: 'QMoney',
      desc: 'Popular mobile money option',
      steps: ['Fund your QMoney wallet', 'Use Binance P2P', 'Select QMoney as payment', 'Buy USDT then convert to USDC', 'Withdraw to Rabby']
    },
    afrimoney: {
      title: 'Afrimoney',
      desc: 'Wide availability in Gambia',
      steps: ['Load funds to Afrimoney', 'Open Binance P2P', 'Buy USDT with Afrimoney', 'Convert to USDC', 'Withdraw to Rabby wallet']
    },
    proTip: 'Pro tip:',
    proTipText: 'Binance P2P usually has the best GMD rates. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed GMD to USDC guide',

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
        question: 'Is it legal to trade US stocks from The Gambia using equity perps?',
        answer: "Equity perpetuals operate on decentralized platforms and exist in a regulatory gray area. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. The Gambia does not have specific regulations prohibiting this type of trading. However, you should understand the risks and consider consulting a financial professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in The Gambia?',
        answer: 'The Gambia has limited cryptocurrency-specific tax guidance. Profits from trading may be subject to income tax depending on your circumstances. We recommend keeping records of all trades and consulting with a local tax professional familiar with digital asset taxation.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as D3,400-4,000 (~$50-60). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'What payment methods can I use?',
        answer: 'The most popular options are QMoney and Afrimoney for mobile money payments via Binance P2P. Bank transfers through Trust Bank, Ecobank, or GT Bank Gambia also work well for larger amounts.'
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on Binance to use P2P trading for converting GMD to USDC."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Gambia Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Gambian traders. Check them out:",
    guides: [
      { icon: 'D', title: 'Convert GMD to USDC', desc: 'Step-by-step with QMoney, Binance P2P', href: '/blog/p2p-usdc-guide' },
      { icon: '💰', title: 'Trade with $50', desc: 'Small account strategy guide', href: '/blog/how-to-trade-us-stocks-50-dollars' },
      { icon: '📱', title: 'Mobile Money Guide', desc: 'Using Afrimoney and QMoney', href: '/blog/p2p-usdc-guide' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join traders accessing NVDA, TSLA, and 50+ US stocks 24/7 from The Gambia. No US broker needed. Start with just D3,400.',
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
      { tag: 'FUNDING', title: 'P2P Trading Guide', desc: 'Convert local currency to USDC', href: '/blog/p2p-usdc-guide' },
      { tag: 'GUIDE', title: 'Trade with $50', desc: 'Small account strategy', href: '/blog/how-to-trade-us-stocks-50-dollars' },
      { tag: 'BEGINNER', title: 'What Are Equity Perps?', desc: 'Complete explainer', href: '/blog/what-are-equity-perpetuals' }
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
