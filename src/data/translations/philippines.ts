export const nativeLang = 'tl';
export const nativeName = 'Filipino';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Philippines',

    // Hero
    badge: 'Philippines Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From the Philippines',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert PHP to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '~₱2,800',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time PHT',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Filipino Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '📱',
        title: 'GCash & Maya Ready',
        desc: 'Use your favorite e-wallets to buy USDC through Binance P2P. No complicated bank wires or international transfers needed.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert PHP to USDC and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade Anytime PHT',
        desc: 'US markets open at 9:30pm PHT. With equity perps, trade whenever you want - morning, afternoon, or midnight.'
      },
      {
        icon: '💰',
        title: 'Start with ~₱2,800',
        desc: 'Most US brokers need $500+ minimum. Here, start with just ~₱2,800 ($50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from the Philippines today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in PH'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert PHP to USDC',
    step2Desc: 'Use GCash, Maya, or bank transfer via Binance P2P',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert PHP:',
    binanceP2P: {
      title: 'Binance P2P (GCash)',
      desc: 'Best rates, most liquidity',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with PHP (GCash)', 'Convert USDT → USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Maya / PayMaya',
      desc: 'Popular alternative e-wallet',
      steps: ['Open Binance P2P', 'Select Maya as payment', 'Buy USDT with PHP', 'Convert USDT → USDC', 'Withdraw to Rabby']
    },
    coindcx: {
      title: 'Coins.ph / PDAX',
      desc: 'Local Philippine exchanges',
      steps: ['Deposit PHP via bank/GCash', 'Buy USDC directly', 'Withdraw to Rabby', '(Higher fees but simpler)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Binance P2P with GCash usually has the best PHP rates. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed PHP to USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from the Philippines using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by the SEC Philippines as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many Filipino traders use these platforms, but you should understand the regulatory landscape and consult a tax professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in the Philippines?',
        answer: 'Yes, profits from trading are likely taxable in the Philippines. They may be classified as capital gains or business income depending on your trading frequency. Maintain records of all trades and consult a CPA familiar with crypto/derivatives taxation.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as ~₱2,800 ($50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during Philippine daytime hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night PHT. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on Binance or a local exchange (Coins.ph, PDAX) to convert PHP to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Philippines Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Filipino traders. Check them out:",
    guides: [
      { icon: '₱', title: 'Convert PHP to USDC', desc: 'Step-by-step with GCash, Binance P2P', href: '/blog/convert-php-to-usdc' },
      { icon: '💰', title: 'Trade with ₱3,000', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-3000-pesos' },
      { icon: '⚖️', title: 'Is It Legal in PH?', desc: 'Regulations, taxes, and compliance', href: '/blog/equity-perps-legal-philippines' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Filipino traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just ~₱2,800.',
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
      { tag: 'FUNDING', title: 'Convert PHP to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-php-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with ₱3,000', desc: 'Small account strategy', href: '/blog/trade-stocks-with-3000-pesos' },
      { tag: 'LEGAL', title: 'Is It Legal in PH?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-philippines' }
    ]
  },
  tl: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Mag-trade ng US Stocks mula sa Pilipinas',

    // Hero
    badge: 'Gabay sa Pilipinas',
    noBrokerBadge: 'Walang Broker Kailangan',
    heroTitle1: 'Mag-trade ng US Stocks',
    heroTitle2: 'Mula sa Pilipinas',
    heroDesc: 'I-access ang NVDA, TSLA, AAPL at 50+ US stocks nang walang US brokerage account. I-convert ang PHP sa USDC at magsimulang mag-trade sa',
    heroDescHighlight: '15 minuto',
    startTrading: 'Magsimulang Mag-trade Ngayon',
    howItWorks: 'Paano Ito Gumagana',

    // Quick Stats
    statMinimumValue: '~₱2,800',
    statMinimum: 'Minimum para Magsimula',
    statTimeValue: '24/7',
    statTime: 'Anumang Oras PHT',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'Walang KYC',
    statKyc: 'Sa Trading Platform',

    // Why Section
    whyTitle: 'Bakit Pinipili ng mga Filipino Trader ang Equity Perps',
    whyCards: [
      {
        icon: '📱',
        title: 'GCash & Maya Ready',
        desc: 'Gamitin ang iyong paboritong e-wallets para bumili ng USDC sa Binance P2P. Walang komplikadong bank wires o international transfers.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'Walang paghihintay ng ilang linggo para sa US brokerage approval. I-convert ang PHP sa USDC at magsimulang mag-trade sa parehong araw.'
      },
      {
        icon: '🕐',
        title: 'Mag-trade Anumang Oras PHT',
        desc: 'Ang US markets ay nagbubukas ng 9:30pm PHT. Sa equity perps, mag-trade kailan mo gusto - umaga, hapon, o hatinggabi.'
      },
      {
        icon: '💰',
        title: 'Magsimula sa ~₱2,800',
        desc: 'Karamihan sa US brokers ay nangangailangan ng $500+ minimum. Dito, magsimula sa ~₱2,800 ($50) lang at gumamit ng leverage para kontrolin ang mas malalaking positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step na Gabay',
    getStartedTitle: 'Magsimula sa 15 Minuto',
    getStartedDesc: 'Sundin ang mga hakbang na ito para magsimulang mag-trade ng US stocks mula sa Pilipinas ngayon.',

    // Step 1: Wallet
    step1Title: 'I-setup ang Iyong Digital Wallet',
    step1Desc: 'Libre, 2 minuto lang, at isang beses mo lang ito gagawin',
    walletExplainTitle: 'Ano ang digital wallet?',
    walletExplainDesc: 'Isipin ito bilang isang',
    walletExplainHighlight: 'digital bank account na ikaw ang may kontrol',
    walletExplainDesc2: '. Sa halip na ang bangko ang may hawak ng pera mo, ikaw mismo ang may hawak gamit ang isang simpleng browser extension.',
    walletFeatures: ['Ikaw ang may kontrol', 'Completely libre', '2 min setup', 'Gumagana sa PH'],
    walletSetupTitle: 'Narito kung paano i-setup:',
    walletSteps: [
      { text: 'Pumunta sa', link: 'rabby.io' },
      { text: 'I-click ang "Download" at idagdag sa Chrome/Brave' },
      { text: 'I-click ang "Create New Wallet" at mag-set ng password' },
      { text: 'Isulat ang iyong 12-word recovery phrase', warning: 'Itago ito ng maayos at huwag ibahagi!' }
    ],
    watchVideo: 'Panoorin: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'I-convert ang PHP sa USDC',
    step2Desc: 'Gamitin ang GCash, Maya, o bank transfer sa Binance P2P',
    fundingIntro: 'Kailangan mo ng USDC (isang stablecoin na katumbas ng $1) para mag-trade. Narito ang pinakamahusay na paraan para i-convert ang PHP:',
    binanceP2P: {
      title: 'Binance P2P (GCash)',
      desc: 'Pinakamahusay na rates, pinakamaraming liquidity',
      steps: ['Buksan ang Binance app', 'Pumunta sa P2P Trading', 'Bumili ng USDT gamit ang PHP (GCash)', 'I-convert ang USDT → USDC', 'I-withdraw sa Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Maya / PayMaya',
      desc: 'Sikat na alternatibong e-wallet',
      steps: ['Buksan ang Binance P2P', 'Piliin ang Maya bilang payment', 'Bumili ng USDT gamit ang PHP', 'I-convert ang USDT → USDC', 'I-withdraw sa Rabby']
    },
    coindcx: {
      title: 'Coins.ph / PDAX',
      desc: 'Lokal na Philippine exchanges',
      steps: ['Mag-deposit ng PHP via bank/GCash', 'Direktang bumili ng USDC', 'I-withdraw sa Rabby', '(Mas mataas ang fees pero mas simple)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Ang Binance P2P gamit ang GCash ay karaniwang may pinakamahusay na PHP rates. Bumili muna ng USDT (mas maraming liquidity), pagkatapos ay i-convert sa USDC sa Binance (libre).',
    seeDetailedGuide: 'Tingnan ang detalyadong PHP sa USDC guide na may screenshots',

    // Step 3: Trade
    step3Title: 'Magsimulang Mag-trade',
    step3Desc: 'Kumonekta sa Hyperliquid at mag-trade ng 50+ US stocks',
    tradeSteps: [
      { text: 'Pumunta sa', linkText: 'app.hyperliquid.xyz' },
      { text: 'I-click ang "Connect" at piliin ang Rabby Wallet' },
      { text: 'I-click ang "Deposit" at i-bridge ang iyong USDC' },
      { text: 'Maghanap ng stock (NVDA, TSLA, AAPL) at magbukas ng position!' }
    ],
    openHyperliquid: 'Buksan ang Hyperliquid (4% Off sa Fees)',

    // Popular Stocks
    popularStocksTitle: 'Mga Sikat na US Stocks na Available',
    viewAllStocks: 'Tingnan ang lahat ng 50+ stocks →',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Mga Madalas Itanong',
    faqs: [
      {
        question: 'Legal ba ang mag-trade ng US stocks mula sa Pilipinas gamit ang equity perps?',
        answer: 'Ang equity perpetuals ay nasa regulatory gray area. Hindi ito eksplisitong regulated ng SEC Philippines dahil gumagana ito sa mga decentralized platforms. Hindi ka direktang bumibili ng US stocks - nag-trade ka ng price exposure sa pamamagitan ng synthetic contracts. Maraming Filipino traders ang gumagamit ng mga platform na ito, pero dapat mong maintindihan ang regulatory landscape at kumonsulta sa isang tax professional.'
      },
      {
        question: 'Kailangan ko bang magbayad ng tax sa kita mula sa equity perps sa Pilipinas?',
        answer: 'Oo, ang kita mula sa trading ay malamang na taxable sa Pilipinas. Maaari itong ma-classify bilang capital gains o business income depende sa frequency ng iyong trading. Mag-maintain ng records ng lahat ng trades at kumonsulta sa isang CPA na pamilyar sa crypto/derivatives taxation.'
      },
      {
        question: 'Ano ang minimum na halaga para magsimula?',
        answer: 'Maaari kang magsimula sa ~₱2,800 ($50) lang. Sa leverage, bibigyan ka nito ng exposure sa $500-3,000 na halaga ng stocks. Inirerekumenda naming magsimula sa maliit para matutunan ang platform.'
      },
      {
        question: 'Maaari ba akong mag-trade sa daytime hours ng Pilipinas?',
        answer: 'Oo! Ang equity perps ay nag-trade ng 24/7. Maaari kang mag-trade ng US stocks anumang oras - umaga, hapon, o gabi PHT. Walang restriction sa trading hours.'
      },
      {
        question: 'Kailangan ba ng KYC?',
        answer: 'Ang mga trading platforms (tulad ng Hyperliquid) ay hindi nangangailangan ng KYC. Gayunpaman, kailangan mong kumpletuhin ang KYC sa Binance o sa isang lokal na exchange (Coins.ph, PDAX) para ma-convert ang PHP sa USDC sa simula.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Iba pang Guides para sa Pilipinas',
    moreGuidesDesc: 'Gumawa kami ng mga detalyadong guides lalo na para sa mga Filipino traders. Tingnan ang mga ito:',
    guides: [
      { icon: '₱', title: 'I-convert ang PHP sa USDC', desc: 'Step-by-step gamit ang GCash, Binance P2P', href: '/blog/convert-php-to-usdc' },
      { icon: '💰', title: 'Mag-trade gamit ang ₱3,000', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-3000-pesos' },
      { icon: '⚖️', title: 'Legal ba sa PH?', desc: 'Regulations, taxes, at compliance', href: '/blog/equity-perps-legal-philippines' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods at safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Magsimulang Mag-trade ng US Stocks Ngayon',
    ctaDesc: 'Sumali sa libu-libong Filipino traders na nag-a-access ng NVDA, TSLA, at 50+ US stocks 24/7. Walang US broker kailangan. Magsimula sa ~₱2,800 lang.',
    getStartedCta: 'Magsimula Ngayon (4% Off sa Fees)',

    // Free Notice
    freeNotice: 'Ang site na ito ay',
    freeNotice2: '100% libre',
    freeNotice3: ' gamitin para ihambing ang pinakamahusay na platforms para mag-trade ng stocks 24/7. Kapag nag-sign up ka sa pamamagitan ng aming mga links sa mga platform tulad ng',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'at',
    freeNotice6: 'Lighter',
    freeNotice7: ', makakakuha ka ng',
    freeNotice8: '4% discount sa trading fees',
    freeNotice9: ' gamit ang aming referral code. Tumutulong ito na suportahan ang site habang nakakatipid ka sa bawat trade.',

    // Related
    relatedTitle: 'Mga Kaugnay na Guides',
    relatedGuides: [
      { tag: 'FUNDING', title: 'I-convert ang PHP sa USDC', desc: 'Step-by-step na may screenshots', href: '/blog/convert-php-to-usdc' },
      { tag: 'GUIDE', title: 'Mag-trade gamit ang ₱3,000', desc: 'Small account strategy', href: '/blog/trade-stocks-with-3000-pesos' },
      { tag: 'LEGAL', title: 'Legal ba sa PH?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-philippines' }
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
