export const nativeLang = 'sv';
export const nativeName = 'Svenska';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Sweden',

    // Hero
    badge: 'Sweden Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Sweden',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert SEK to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '~500 SEK',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time CET',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Swedish Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🚫',
        title: 'Skip US Tax Forms',
        desc: 'No W-8BEN forms, no US tax withholding on dividends, no complicated US tax reporting. Trade without the paperwork.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: "No waiting weeks for brokerage approval. Convert SEK to USDC via Swish and start trading the same day."
      },
      {
        icon: '🕐',
        title: 'Trade Any Time',
        desc: 'US markets close at 10pm CET. With equity perps, trade whenever you want - morning, evening, or weekends.'
      },
      {
        icon: '💰',
        title: 'Start with ~500 SEK',
        desc: 'Most brokers like Avanza/Nordnet have higher minimums. Here, start with just ~500 SEK (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Sweden today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Sweden'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert SEK to USDC',
    step2Desc: 'Use Swish, BankID, or bank transfer',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert SEK:',
    binanceP2P: {
      title: 'Swish + Binance P2P',
      desc: 'Fastest option for most Swedes',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with SEK via Swish', 'Convert USDT to USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'SEPA Bank Transfer',
      desc: 'From SEB, Nordea, Handelsbanken, Swedbank',
      steps: ['Deposit EUR via SEPA to exchange', 'Buy USDC directly', 'Withdraw to Rabby wallet', '1-2 business days']
    },
    coindcx: {
      title: 'Kraken Exchange',
      desc: 'EU-regulated, supports SEK',
      steps: ['Deposit SEK via bank transfer', 'Buy USDC directly', 'Withdraw to Rabby', '(Higher fees but simpler)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Swish + Binance P2P usually has the best SEK rates. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed SEK to USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from Sweden using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by Finansinspektionen as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many Swedish traders use these platforms, but you should understand the regulatory landscape and consult a tax advisor."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Sweden?',
        answer: 'Yes, profits from trading are likely taxable in Sweden as capital gains. You should report your trading activity on your tax return. Keep records of all trades and consult a tax advisor (skatteradgivare) familiar with crypto and derivatives taxation.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as ~500 SEK (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I use Swish to fund my account?',
        answer: "Yes! Swish is the most popular method for Swedish traders. Use Binance P2P to buy USDT with Swish, then convert to USDC and withdraw to your wallet."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on an exchange (Binance, Kraken) to convert SEK to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Sweden Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Swedish traders. Check them out:",
    guides: [
      { icon: 'kr', title: 'Convert SEK to USDC', desc: 'Step-by-step with Swish & BankID', href: '/blog/convert-sek-to-usdc' },
      { icon: '💰', title: 'Trade with 500 SEK', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-500-sek' },
      { icon: '⚖️', title: 'Is It Legal in Sweden?', desc: 'Regulations, taxes, and compliance', href: '/blog/equity-perps-legal-sweden' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Swedish traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just ~500 SEK.',
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
      { tag: 'FUNDING', title: 'Convert SEK to USDC', desc: 'Step-by-step with Swish', href: '/blog/convert-sek-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with 500 SEK', desc: 'Small account strategy', href: '/blog/trade-stocks-with-500-sek' },
      { tag: 'LEGAL', title: 'Is It Legal in Sweden?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-sweden' }
    ]
  },
  sv: {
    // Breadcrumb
    home: 'Hem',
    blog: 'Blogg',
    pageTitle: 'Handla amerikanska aktier fran Sverige',

    // Hero
    badge: 'Guide for Sverige',
    noBrokerBadge: 'Ingen maklare behovs',
    heroTitle1: 'Handla amerikanska aktier',
    heroTitle2: 'Fran Sverige',
    heroDesc: 'Fa tillgang till NVDA, TSLA, AAPL och 50+ amerikanska aktier utan amerikanskt maklarkonto. Konvertera SEK till USDC och borja handla pa',
    heroDescHighlight: '15 minuter',
    startTrading: 'Borja handla nu',
    howItWorks: 'Hur det fungerar',

    // Quick Stats
    statMinimumValue: '~500 SEK',
    statMinimum: 'Minimum for att borja',
    statTimeValue: '24/7',
    statTime: 'Nar som helst CET',
    statStocksValue: '50+',
    statStocks: 'Amerikanska aktier',
    statKycValue: 'Ingen KYC',
    statKyc: 'Pa handelsplattformen',

    // Why Section
    whyTitle: 'Varfor svenska handlare valjer Equity Perps',
    whyCards: [
      {
        icon: '🚫',
        title: 'Hoppa over amerikanska skatteformular',
        desc: 'Inga W-8BEN-formular, ingen amerikansk skatteinnehallning pa utdelningar, ingen komplicerad amerikansk skatterapportering.'
      },
      {
        icon: '⚡',
        title: 'Omedelbar tillgang',
        desc: 'Ingen vantan i veckor pa maklar-godkannande. Konvertera SEK till USDC via Swish och borja handla samma dag.'
      },
      {
        icon: '🕐',
        title: 'Handla nar som helst',
        desc: 'Amerikanska marknader stanger kl 22 CET. Med equity perps, handla nar du vill - morgon, kvall eller helger.'
      },
      {
        icon: '💰',
        title: 'Borja med ~500 SEK',
        desc: 'De flesta maklare som Avanza/Nordnet har hogre minimum. Har kan du borja med bara ~500 SEK (~$50) och anvanda havstang for att kontrollera storre positioner.'
      }
    ],

    // Get Started Section
    stepByStep: 'Steg-for-steg guide',
    getStartedTitle: 'Kom igang pa 15 minuter',
    getStartedDesc: 'Folj dessa steg for att borja handla amerikanska aktier fran Sverige idag.',

    // Step 1: Wallet
    step1Title: 'Konfigurera din digitala planbok',
    step1Desc: 'Gratis, tar 2 minuter, och du gor det bara en gang',
    walletExplainTitle: 'Vad ar en digital planbok?',
    walletExplainDesc: 'Tank pa det som ett',
    walletExplainHighlight: 'digitalt bankkonto du kontrollerar',
    walletExplainDesc2: '. Istallet for att en bank haller dina pengar, haller du dem sjalv med ett enkelt webblasartillagg.',
    walletFeatures: ['Du kontrollerar den', 'Helt gratis', '2 min installation', 'Fungerar i Sverige'],
    walletSetupTitle: 'Sa har konfigurerar du den:',
    walletSteps: [
      { text: 'Ga till', link: 'rabby.io' },
      { text: 'Klicka pa "Download" och lagg till i Chrome/Brave' },
      { text: 'Klicka pa "Create New Wallet" och satt ett losenord' },
      { text: 'Skriv ner dina 12 aterhamtningsord', warning: 'Forvara dem sakert och dela aldrig!' }
    ],
    watchVideo: 'Se: 2-minuters installationsguide',

    // Step 2: Funding
    step2Title: 'Konvertera SEK till USDC',
    step2Desc: 'Anvand Swish, BankID eller bankoverforing',
    fundingIntro: 'Du behover USDC (en stablecoin vard $1) for att handla. Har ar de basta satten att konvertera SEK:',
    binanceP2P: {
      title: 'Swish + Binance P2P',
      desc: 'Snabbaste alternativet for de flesta svenskar',
      steps: ['Oppna Binance-appen', 'Ga till P2P Trading', 'Kop USDT med SEK via Swish', 'Konvertera USDT till USDC', 'Ta ut till Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'SEPA-bankoverforing',
      desc: 'Fran SEB, Nordea, Handelsbanken, Swedbank',
      steps: ['Satt in EUR via SEPA till bors', 'Kop USDC direkt', 'Ta ut till Rabby-planbok', '1-2 bankdagar']
    },
    coindcx: {
      title: 'Kraken Exchange',
      desc: 'EU-reglerad, stodjer SEK',
      steps: ['Satt in SEK via bankoverforing', 'Kop USDC direkt', 'Ta ut till Rabby', '(Hogre avgifter men enklare)']
    },
    proTip: 'Pro-tips:',
    proTipText: 'Swish + Binance P2P har oftast bast SEK-kurser. Kop USDT forst (mer likviditet), konvertera sedan till USDC pa Binance (gratis).',
    seeDetailedGuide: 'Se detaljerad SEK till USDC guide med skarmdumpar',

    // Step 3: Trade
    step3Title: 'Borja handla',
    step3Desc: 'Anslut till Hyperliquid och handla 50+ amerikanska aktier',
    tradeSteps: [
      { text: 'Ga till', linkText: 'app.hyperliquid.xyz' },
      { text: 'Klicka pa "Connect" och valj Rabby Wallet' },
      { text: 'Klicka pa "Deposit" och overfar din USDC' },
      { text: 'Sok efter en aktie (NVDA, TSLA, AAPL) och oppna en position!' }
    ],
    openHyperliquid: 'Oppna Hyperliquid (4% rabatt pa avgifter)',

    // Popular Stocks
    popularStocksTitle: 'Populara amerikanska aktier tillgangliga',
    viewAllStocks: 'Se alla 50+ aktier',
    hot: 'HET',

    // FAQ
    faqTitle: 'Vanliga fragor',
    faqs: [
      {
        question: 'Ar det lagligt att handla amerikanska aktier fran Sverige med equity perps?',
        answer: 'Equity perpetuals existerar i en regulatorisk grazon. De regleras inte uttryckligen av Finansinspektionen eftersom de opererar pa decentraliserade plattformar. Du koper inte direkt amerikanska aktier - du handlar prisexponering genom syntetiska kontrakt. Manga svenska handlare anvander dessa plattformar, men du bor forsta det regulatoriska landskapet och radfraga en skatteradgivare.'
      },
      {
        question: 'Behover jag betala skatt pa vinster fran equity perps i Sverige?',
        answer: 'Ja, vinster fran handel ar sannolikt skattepliktiga i Sverige som kapitalvinster. Du bor rapportera din handelsaktivitet i din deklaration. Ha koll pa alla affarer och radfraga en skatteradgivare som ar bekant med krypto- och derivatbeskattning.'
      },
      {
        question: 'Vad ar minimumbeloppet for att borja?',
        answer: 'Du kan borja med sa lite som ~500 SEK (~$50). Med havstang ger detta dig exponering mot $500-3 000 worth av aktier. Vi rekommenderar att borja smatt for att lara dig plattformen.'
      },
      {
        question: 'Kan jag anvanda Swish for att finansiera mitt konto?',
        answer: 'Ja! Swish ar den mest populara metoden for svenska handlare. Anvand Binance P2P for att kopa USDT med Swish, konvertera sedan till USDC och ta ut till din planbok.'
      },
      {
        question: 'Kravs KYC?',
        answer: 'Handelsplattformarna (som Hyperliquid) kraver inte KYC. Du behover dock genomfora KYC pa en bors (Binance, Kraken) for att konvertera SEK till USDC initialt.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Fler Sverige-guider',
    moreGuidesDesc: 'Vi har skapat detaljerade guider speciellt for svenska handlare. Kolla in dem:',
    guides: [
      { icon: 'kr', title: 'Konvertera SEK till USDC', desc: 'Steg-for-steg med Swish & BankID', href: '/blog/convert-sek-to-usdc' },
      { icon: '💰', title: 'Handla med 500 SEK', desc: 'Strategi for sma konton', href: '/blog/trade-stocks-with-500-sek' },
      { icon: '⚖️', title: 'Ar det lagligt i Sverige?', desc: 'Regler, skatter och efterlevnad', href: '/blog/equity-perps-legal-sweden' },
      { icon: '🤝', title: 'P2P-handelsguide', desc: 'Globala P2P-metoder och sakerhetstips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Borja handla amerikanska aktier idag',
    ctaDesc: 'Ga med tusentals svenska handlare som far tillgang till NVDA, TSLA och 50+ amerikanska aktier 24/7. Ingen amerikansk maklare behovs. Borja med bara ~500 SEK.',
    getStartedCta: 'Kom igang nu (4% rabatt pa avgifter)',

    // Free Notice
    freeNotice: 'Denna sajt ar',
    freeNotice2: '100% gratis',
    freeNotice3: ' att anvanda for att jamfora de basta plattformarna for att handla aktier 24/7. Nar du registrerar dig via vara lankar till plattformar som',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'och',
    freeNotice6: 'Lighter',
    freeNotice7: ', far du',
    freeNotice8: '4% rabatt pa handelsavgifter',
    freeNotice9: ' med var referenskod. Detta hjalper till att stodja sajten samtidigt som du sparar pengar pa varje affar.',

    // Related
    relatedTitle: 'Relaterade guider',
    relatedGuides: [
      { tag: 'FINANSIERING', title: 'Konvertera SEK till USDC', desc: 'Steg-for-steg med Swish', href: '/blog/convert-sek-to-usdc' },
      { tag: 'GUIDE', title: 'Handla med 500 SEK', desc: 'Strategi for sma konton', href: '/blog/trade-stocks-with-500-sek' },
      { tag: 'JURIDISKT', title: 'Ar det lagligt i Sverige?', desc: 'Regulatorisk oversikt', href: '/blog/equity-perps-legal-sweden' }
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
