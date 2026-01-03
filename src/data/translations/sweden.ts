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
    comparePlatforms: 'Compare Platforms',

    benefits: [
      { icon: '💰', title: 'Start with 500 kr', desc: '~$50 USDC minimum' },
      { icon: '🕐', title: '24/7 Trading', desc: 'Trade anytime CET' },
      { icon: '📱', title: 'Swish Ready', desc: 'Instant payments' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Your keys, your coins' },
    ],

    stepsTitle: 'Get Started in 4 Steps',
    steps: [
      { t: 'Convert SEK to USDC', d: 'Use Binance P2P with Swish or bank transfer.' },
      { t: 'Choose a Platform', d: 'Compare platforms.', l: '/', lt: 'Compare' },
      { t: 'Connect Wallet', d: 'Use MetaMask or Rabby.' },
      { t: 'Start Trading', d: 'Begin with 2-3x leverage.' },
    ],

    // Quick Stats
    statMinimumValue: '500 kr',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time CET',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // What Are Perps Section
    whatArePerpsTitle: 'What Are Equity Perpetuals?',
    whatArePerpsSubtitle: 'A New Way to Trade US Stocks',
    whatArePerpsContent: 'Equity perpetuals (perps) are synthetic contracts that track US stock prices 1:1. You get the same price exposure as owning the actual stock, but without needing a US brokerage account or dealing with currency exchange through traditional banks.',
    whatArePerpsHow: 'How They Work:',
    whatArePerpsSteps: [
      'Prices are pulled from real US stock exchanges (NYSE, NASDAQ)',
      'Smart contracts ensure the perp price stays locked to the real stock price',
      'You can go long (bet price goes up) or short (bet price goes down)',
      'Trade with leverage (2x-20x) to amplify your positions',
      'Settle in USDC - a stablecoin worth $1'
    ],
    whatArePerpsCta: 'Learn More About Equity Perps',

    // Why Perps Section
    whyPerpsTitle: 'Why Swedish Traders Choose Equity Perps',
    whyPerpsSubtitle: 'Advantages over traditional brokers like Avanza and Nordnet',
    whyPerpsReasons: [
      {
        icon: '🚫',
        title: 'Skip US Tax Forms',
        desc: 'No W-8BEN forms, no US tax withholding on dividends, no complicated US tax reporting.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: "No waiting weeks for brokerage approval. Convert SEK to USDC and start trading the same day."
      },
      {
        icon: '🕐',
        title: 'Trade Any Time',
        desc: 'US markets close at 10pm CET. With equity perps, trade whenever you want - morning, evening, or weekends.'
      },
      {
        icon: '💰',
        title: 'Start with 500 kr',
        desc: 'Most brokers have higher minimums. Here, start with just 500 kr and use leverage to control larger positions.'
      },
      {
        icon: '📈',
        title: 'Go Long or Short',
        desc: 'Profit from both rising and falling markets. Short sell any stock without borrowing restrictions.'
      },
      {
        icon: '🔐',
        title: 'Self-Custody',
        desc: 'Your funds stay in your own wallet. No broker can freeze your account or block your trades.'
      }
    ],

    // Get Started Section
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedSubtitle: 'Follow these steps to start trading US stocks from Sweden today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Subtitle: 'Free, takes 2 minutes, and you only do this once',
    step1WhatIsWallet: 'What is a digital wallet?',
    step1WhatIsWalletDesc: 'Think of it like a digital bank account you control. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    step1Features: ['You control it', 'Completely free', '2 min setup', 'Works in Sweden'],
    step1Instructions: "Here's how to set it up:",
    step1VideoTitle: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert SEK to USDC',
    step2Subtitle: 'Use Swish, Klarna, or bank transfer',
    step2Methods: [
      {
        name: 'Swish + Binance P2P',
        description: 'Fastest option for most Swedes',
        steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with SEK via Swish', 'Convert USDT to USDC', 'Withdraw to Rabby (Arbitrum)'],
        tip: 'Best rates, instant transfers'
      },
      {
        name: 'SEPA Bank Transfer',
        description: 'From Swedbank, SEB, Nordea, Handelsbanken',
        steps: ['Deposit EUR via SEPA to exchange', 'Buy USDC directly', 'Withdraw to Rabby wallet', '1-2 business days'],
        tip: 'Lower fees for larger amounts'
      },
      {
        name: 'Klarna',
        description: 'Pay later option available',
        steps: ['Use exchange supporting Klarna', 'Buy crypto with Klarna', 'Convert to USDC', 'Withdraw to wallet'],
        tip: 'Convenient but higher fees'
      }
    ],
    step2MinAmount: 'Minimum: 500 kr (~$50 USDC)',

    // Step 3: Trade
    step3Title: 'Start Trading',
    step3Subtitle: 'Connect to Hyperliquid and trade 50+ US stocks',
    step3Instructions: [
      { text: 'Go to', linkText: 'app.hyperliquid.xyz' },
      { text: 'Click "Connect" and select Rabby Wallet' },
      { text: 'Click "Deposit" and bridge your USDC' },
      { text: 'Search for a stock (NVDA, TSLA, AAPL) and open a position!' }
    ],
    step3Tip: 'Start with 2-3x leverage until you are comfortable with the platform.',
    step3Cta: 'Open Hyperliquid (4% Off Fees)',

    // Risk Section
    riskTitle: 'Important Risks to Understand',
    riskWarnings: [
      {
        title: 'Leverage Risk',
        desc: 'Trading with leverage amplifies both gains and losses. You can lose more than your initial deposit. Start with low leverage (2-3x).'
      },
      {
        title: 'Liquidation Risk',
        desc: 'If your position moves against you too much, it will be automatically closed (liquidated). Always use stop-losses.'
      },
      {
        title: 'Regulatory Status',
        desc: 'Equity perps operate on decentralized platforms and are not regulated by Finansinspektionen. Understand the legal landscape before trading.'
      },
      {
        title: 'Smart Contract Risk',
        desc: 'Your funds interact with smart contracts. While audited, there is always some technical risk. Never invest more than you can afford to lose.'
      }
    ],

    // Popular Stocks
    popularStocksTitle: 'Popular US Stocks Available',
    viewAllStocks: 'View all 50+ stocks',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Is it legal to trade US stocks from Sweden using equity perps?',
        answer: 'Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by Finansinspektionen as they operate on decentralized platforms. You are not directly buying US stocks - you are trading price exposure through synthetic contracts. Many Swedish traders use these platforms, but you should understand the regulatory landscape and consult a tax advisor.'
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Sweden?',
        answer: 'Yes, profits from trading are likely taxable in Sweden as capital gains. You should report your trading activity on your tax return. Keep records of all trades and consult a tax advisor (skatteradgivare) familiar with crypto and derivatives taxation.'
      },
      {
        question: 'What is the minimum amount I need to start?',
        answer: 'You can start with as little as 500 kr (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I use Swish to fund my account?',
        answer: 'Yes! Swish is the most popular method for Swedish traders. Use Binance P2P to buy USDT with Swish, then convert to USDC and withdraw to your wallet.'
      },
      {
        question: 'Is KYC required?',
        answer: 'The trading platforms (like Hyperliquid) do not require KYC. However, you will need to complete KYC on an exchange (Binance, Kraken) to convert SEK to USDC initially.'
      }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Swedish traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just 500 kr.',
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
      { tag: 'GUIDE', title: 'Trade with 500 kr', desc: 'Small account strategy', href: '/blog/trade-stocks-with-500-kr' },
      { tag: 'LEGAL', title: 'Is It Legal in Sweden?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-sweden' }
    ],

    // Payment Methods
    paymentTitle: 'Sweden Payment Methods',
    digitalPayments: 'Digital Payments',
    banks: 'Banks'
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
    comparePlatforms: 'Jamfor plattformar',

    benefits: [
      { icon: '💰', title: 'Borja med 500 kr', desc: '~$50 USDC minimum' },
      { icon: '🕐', title: '24/7 handel', desc: 'Handla nar som helst' },
      { icon: '📱', title: 'Swish-redo', desc: 'Omedelbara betalningar' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Dina nycklar, dina coins' },
    ],

    stepsTitle: 'Kom igang med 4 steg',
    steps: [
      { t: 'Konvertera SEK till USDC', d: 'Anvand Binance P2P med Swish eller bankoverforing.' },
      { t: 'Valj en plattform', d: 'Jamfor plattformar.', l: '/', lt: 'Jamfor' },
      { t: 'Anslut planbok', d: 'Anvand MetaMask eller Rabby.' },
      { t: 'Borja handla', d: 'Borja med 2-3x havstang.' },
    ],

    // Quick Stats
    statMinimumValue: '500 kr',
    statMinimum: 'Minimum for att borja',
    statTimeValue: '24/7',
    statTime: 'Nar som helst CET',
    statStocksValue: '50+',
    statStocks: 'Amerikanska aktier',
    statKycValue: 'Ingen KYC',
    statKyc: 'Pa handelsplattformen',

    // What Are Perps Section
    whatArePerpsTitle: 'Vad ar Equity Perpetuals?',
    whatArePerpsSubtitle: 'Ett nytt satt att handla amerikanska aktier',
    whatArePerpsContent: 'Equity perpetuals (perps) ar syntetiska kontrakt som foljer amerikanska aktiekurser 1:1. Du far samma prisexponering som om du agde den faktiska aktien, men utan att behova ett amerikanskt maklarkonto eller hantera valutavaxling genom traditionella banker.',
    whatArePerpsHow: 'Hur de fungerar:',
    whatArePerpsSteps: [
      'Priser hamtas fran riktiga amerikanska borser (NYSE, NASDAQ)',
      'Smarta kontrakt sakersstaller att perp-priset foljer det verkliga aktiepriset',
      'Du kan ga lang (satsa pa att priset gar upp) eller kort (satsa pa att priset gar ner)',
      'Handla med havstang (2x-20x) for att forstarka dina positioner',
      'Avraknas i USDC - en stablecoin vard $1'
    ],
    whatArePerpsCta: 'Las mer om Equity Perps',

    // Why Perps Section
    whyPerpsTitle: 'Varfor svenska handlare valjer Equity Perps',
    whyPerpsSubtitle: 'Fordelar jamfort med traditionella maklare som Avanza och Nordnet',
    whyPerpsReasons: [
      {
        icon: '🚫',
        title: 'Hoppa over amerikanska skatteformular',
        desc: 'Inga W-8BEN-formular, ingen amerikansk skatteinnehallning pa utdelningar, ingen komplicerad amerikansk skatterapportering.'
      },
      {
        icon: '⚡',
        title: 'Omedelbar tillgang',
        desc: 'Ingen vantan i veckor pa maklar-godkannande. Konvertera SEK till USDC och borja handla samma dag.'
      },
      {
        icon: '🕐',
        title: 'Handla nar som helst',
        desc: 'Amerikanska marknader stanger kl 22 CET. Med equity perps, handla nar du vill - morgon, kvall eller helger.'
      },
      {
        icon: '💰',
        title: 'Borja med 500 kr',
        desc: 'De flesta maklare har hogre minimum. Har kan du borja med bara 500 kr och anvanda havstang for att kontrollera storre positioner.'
      },
      {
        icon: '📈',
        title: 'Ga lang eller kort',
        desc: 'Tjana pengar pa bade stigande och fallande marknader. Blanka vilken aktie som helst utan lanebegransningar.'
      },
      {
        icon: '🔐',
        title: 'Self-Custody',
        desc: 'Dina pengar stannar i din egen planbok. Ingen maklare kan frysa ditt konto eller blockera dina affarer.'
      }
    ],

    // Get Started Section
    getStartedTitle: 'Kom igang pa 15 minuter',
    getStartedSubtitle: 'Folj dessa steg for att borja handla amerikanska aktier fran Sverige idag.',

    // Step 1: Wallet
    step1Title: 'Konfigurera din digitala planbok',
    step1Subtitle: 'Gratis, tar 2 minuter, och du gor det bara en gang',
    step1WhatIsWallet: 'Vad ar en digital planbok?',
    step1WhatIsWalletDesc: 'Tank pa det som ett digitalt bankkonto du kontrollerar. Istallet for att en bank haller dina pengar, haller du dem sjalv med ett enkelt webblasartillagg.',
    step1Features: ['Du kontrollerar den', 'Helt gratis', '2 min installation', 'Fungerar i Sverige'],
    step1Instructions: 'Sa har konfigurerar du den:',
    step1VideoTitle: 'Se: 2-minuters installationsguide',

    // Step 2: Funding
    step2Title: 'Konvertera SEK till USDC',
    step2Subtitle: 'Anvand Swish, Klarna eller bankoverforing',
    step2Methods: [
      {
        name: 'Swish + Binance P2P',
        description: 'Snabbaste alternativet for de flesta svenskar',
        steps: ['Oppna Binance-appen', 'Ga till P2P Trading', 'Kop USDT med SEK via Swish', 'Konvertera USDT till USDC', 'Ta ut till Rabby (Arbitrum)'],
        tip: 'Basta kurser, omedelbara overforingar'
      },
      {
        name: 'SEPA-bankoverforing',
        description: 'Fran Swedbank, SEB, Nordea, Handelsbanken',
        steps: ['Satt in EUR via SEPA till bors', 'Kop USDC direkt', 'Ta ut till Rabby-planbok', '1-2 bankdagar'],
        tip: 'Lagre avgifter for storre belopp'
      },
      {
        name: 'Klarna',
        description: 'Betala senare-alternativ tillgangligt',
        steps: ['Anvand bors som stodjer Klarna', 'Kop krypto med Klarna', 'Konvertera till USDC', 'Ta ut till planbok'],
        tip: 'Bekv amt men hogre avgifter'
      }
    ],
    step2MinAmount: 'Minimum: 500 kr (~$50 USDC)',

    // Step 3: Trade
    step3Title: 'Borja handla',
    step3Subtitle: 'Anslut till Hyperliquid och handla 50+ amerikanska aktier',
    step3Instructions: [
      { text: 'Ga till', linkText: 'app.hyperliquid.xyz' },
      { text: 'Klicka pa "Connect" och valj Rabby Wallet' },
      { text: 'Klicka pa "Deposit" och overfar din USDC' },
      { text: 'Sok efter en aktie (NVDA, TSLA, AAPL) och oppna en position!' }
    ],
    step3Tip: 'Borja med 2-3x havstang tills du ar bekant med plattformen.',
    step3Cta: 'Oppna Hyperliquid (4% rabatt pa avgifter)',

    // Risk Section
    riskTitle: 'Viktiga risker att forsta',
    riskWarnings: [
      {
        title: 'Havstangsrisk',
        desc: 'Handel med havstang forstarker bade vinster och forluster. Du kan forlora mer an din ursprungliga insattning. Borja med lag havstang (2-3x).'
      },
      {
        title: 'Likvidationsrisk',
        desc: 'Om din position ror sig for mycket mot dig kommer den automatiskt att stangas (likvideras). Anvand alltid stop-loss.'
      },
      {
        title: 'Regleringstatus',
        desc: 'Equity perps opererar pa decentraliserade plattformar och regleras inte av Finansinspektionen. Forsta det juridiska landskapet innan du handlar.'
      },
      {
        title: 'Smart Contract-risk',
        desc: 'Dina medel interagerar med smarta kontrakt. Aven om de ar granskade finns alltid viss teknisk risk. Investera aldrig mer an du har rad att forlora.'
      }
    ],

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
        answer: 'Du kan borja med sa lite som 500 kr (~$50). Med havstang ger detta dig exponering mot $500-3 000 worth av aktier. Vi rekommenderar att borja smatt for att lara dig plattformen.'
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

    // CTA
    ctaTitle: 'Borja handla amerikanska aktier idag',
    ctaDesc: 'Ga med tusentals svenska handlare som far tillgang till NVDA, TSLA och 50+ amerikanska aktier 24/7. Ingen amerikansk maklare behovs. Borja med bara 500 kr.',
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
      { tag: 'GUIDE', title: 'Handla med 500 kr', desc: 'Strategi for sma konton', href: '/blog/trade-stocks-with-500-kr' },
      { tag: 'JURIDISKT', title: 'Ar det lagligt i Sverige?', desc: 'Regulatorisk oversikt', href: '/blog/equity-perps-legal-sweden' }
    ],

    // Payment Methods
    paymentTitle: 'Svenska betalningsmetoder',
    digitalPayments: 'Digitala betalningar',
    banks: 'Banker'
  }
};

export const digitalPayments = ['Swish (Most Popular)', 'Klarna', 'Trustly', 'SEPA'];
export const banksList = ['Swedbank', 'SEB', 'Nordea', 'Handelsbanken'];

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
