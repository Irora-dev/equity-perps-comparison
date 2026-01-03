export const nativeLang = 'da';
export const nativeName = 'Dansk';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Denmark',

    // Hero
    badge: 'Denmark Guide',
    noBrokerBadge: 'No US Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Denmark',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert DKK to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',
    comparePlatforms: 'Compare Platforms',

    benefits: [
      { icon: '💰', title: 'Start with 350 kr', desc: '~$50 USDC minimum' },
      { icon: '🕐', title: '24/7 Trading', desc: 'Trade anytime CET' },
      { icon: '📱', title: 'MobilePay Ready', desc: 'Instant payments' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Your keys, your coins' },
    ],

    stepsTitle: 'Get Started in 4 Steps',
    steps: [
      { t: 'Convert DKK to USDC', d: 'Use Binance P2P with MobilePay or bank transfer.' },
      { t: 'Choose a Platform', d: 'Compare platforms.', l: '/', lt: 'Compare' },
      { t: 'Connect Wallet', d: 'Use MetaMask or Rabby.' },
      { t: 'Start Trading', d: 'Begin with 2-3x leverage.' },
    ],

    // Quick Stats
    statMinimumValue: '350 kr',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time CET',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Danish Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🚫',
        title: 'No Complex US Tax Forms',
        desc: 'Avoid W-8BEN forms and complicated US tax reporting. Trade synthetic exposure without the paperwork hassle.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting for US broker approval. Convert DKK to USDC with MobilePay and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade at Night',
        desc: 'US markets open at 3:30pm CET. With equity perps, trade whenever you want - morning, afternoon, or midnight.'
      },
      {
        icon: '💰',
        title: 'Start with 350 kr',
        desc: 'Most US brokers need $500+ minimum. Here, start with just 350 kr (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Denmark today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Denmark'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert DKK to USDC',
    step2Desc: 'Use MobilePay, SEPA, or bank transfer',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert DKK:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Best rates, most liquidity',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with DKK (MobilePay/Bank)', 'Convert USDT to USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    moonpay: {
      title: 'MoonPay',
      desc: 'Quick card purchases',
      steps: ['Visit moonpay.com', 'Select USDC on Arbitrum', 'Pay with card or bank', 'Send to your wallet']
    },
    kraken: {
      title: 'Kraken',
      desc: 'EU-regulated exchange',
      steps: ['Deposit DKK via SEPA', 'Buy USDC directly', 'Withdraw to Rabby', '(Low fees, trusted EU exchange)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Binance P2P usually has the best DKK rates. MobilePay is instant - buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed DKK to USDC guide',

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

    // Payment Methods
    paymentTitle: 'Denmark Payment Methods',
    digitalPayments: 'Digital Payments',
    banks: 'Banks',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Do I need a US brokerage account?',
        answer: 'No. Trade synthetic US stocks with USDC on decentralized platforms. You get price exposure without actually owning the shares, which means no complex US tax forms or broker approvals.'
      },
      {
        question: 'How do I convert DKK to USDC?',
        answer: 'The easiest way is Binance P2P with MobilePay - it is instant and has the best rates. You can also use SEPA bank transfer to Kraken or Coinbase, which takes 1-2 business days but has low fees.'
      },
      {
        question: "What's the minimum to start?",
        answer: 'You can start with as little as 350 kr (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during Danish evening hours?',
        answer: 'Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, during lunch, or late at night CET. There is no restriction on trading hours.'
      },
      {
        question: 'Is KYC required?',
        answer: 'The trading platforms (like Hyperliquid) do not require KYC. However, you will need to complete KYC on an exchange (Binance, Kraken) to convert DKK to USDC initially.'
      },
      {
        question: 'What about Danish taxes on trading profits?',
        answer: 'Profits from trading are taxable in Denmark. They may be classified as capital gains (aktieindkomst) or speculation income depending on your trading pattern. Keep records of all trades and consult a tax advisor familiar with crypto/derivatives.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Denmark Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Danish traders. Check them out:",
    guides: [
      { icon: 'kr', title: 'Convert DKK to USDC', desc: 'Step-by-step with MobilePay, SEPA', href: '/blog/p2p-usdc-guide' },
      { icon: '💰', title: 'Trade with 350 kr', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-100' },
      { icon: '📊', title: 'Platform Comparison', desc: 'Compare all equity perp platforms', href: '/' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Danish traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just 350 kr.',
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
      { tag: 'FUNDING', title: 'Convert DKK to USDC', desc: 'MobilePay and SEPA guide', href: '/blog/p2p-usdc-guide' },
      { tag: 'GUIDE', title: 'Beginner Platform Guide', desc: 'Best platforms for new traders', href: '/blog/best-equity-perps-for-beginners' },
      { tag: 'COMPARISON', title: 'Platform Comparison', desc: 'Find the best platform', href: '/' }
    ]
  },
  da: {
    // Breadcrumb
    home: 'Hjem',
    blog: 'Blog',
    pageTitle: 'Handl amerikanske aktier fra Danmark',

    // Hero
    badge: 'Danmark Guide',
    noBrokerBadge: 'Ingen US-maegler noedvendig',
    heroTitle1: 'Handl amerikanske aktier',
    heroTitle2: 'fra Danmark',
    heroDesc: 'Faa adgang til NVDA, TSLA, AAPL og 50+ amerikanske aktier uden en amerikansk maeglerkonto. Konverter DKK til USDC og start handel paa',
    heroDescHighlight: '15 minutter',
    startTrading: 'Start handel nu',
    howItWorks: 'Saadan virker det',
    comparePlatforms: 'Sammenlign platforme',

    benefits: [
      { icon: '💰', title: 'Start med 350 kr', desc: '~$50 USDC minimum' },
      { icon: '🕐', title: '24/7 handel', desc: 'Handl naar som helst' },
      { icon: '📱', title: 'MobilePay klar', desc: 'Oejeblikkelige betalinger' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Dine noegler, dine coins' },
    ],

    stepsTitle: 'Kom i gang med 4 trin',
    steps: [
      { t: 'Konverter DKK til USDC', d: 'Brug Binance P2P med MobilePay eller bankoverfaersel.' },
      { t: 'Vaelg en platform', d: 'Sammenlign platforme.', l: '/', lt: 'Sammenlign' },
      { t: 'Forbind din wallet', d: 'Brug MetaMask eller Rabby.' },
      { t: 'Start handel', d: 'Begynd med 2-3x gearing.' },
    ],

    // Quick Stats
    statMinimumValue: '350 kr',
    statMinimum: 'Minimum for at starte',
    statTimeValue: '24/7',
    statTime: 'Naar som helst CET',
    statStocksValue: '50+',
    statStocks: 'Amerikanske aktier',
    statKycValue: 'Ingen KYC',
    statKyc: 'Paa handelsplatformen',

    // Why Section
    whyTitle: 'Hvorfor danske handlere vaelger Equity Perps',
    whyCards: [
      {
        icon: '🚫',
        title: 'Ingen komplekse US-skatteformularer',
        desc: 'Undgaa W-8BEN formularer og kompliceret amerikansk skatteindberetning. Handl syntetisk eksponering uden papirarbejde.'
      },
      {
        icon: '⚡',
        title: 'Ojeblikkelig adgang',
        desc: 'Ingen ventetid paa godkendelse fra amerikansk maegler. Konverter DKK til USDC med MobilePay og start handel samme dag.'
      },
      {
        icon: '🕐',
        title: 'Handl om aftenen',
        desc: 'Amerikanske markeder aabner kl. 15:30 CET. Med equity perps kan du handle naar du vil - morgen, eftermiddag eller midnat.'
      },
      {
        icon: '💰',
        title: 'Start med 350 kr',
        desc: 'De fleste amerikanske maeglere kraever $500+ minimum. Her kan du starte med kun 350 kr (~$50) og bruge gearing til at kontrollere stoerre positioner.'
      }
    ],

    // Get Started Section
    stepByStep: 'Trin-for-trin guide',
    getStartedTitle: 'Kom i gang paa 15 minutter',
    getStartedDesc: 'Foelg disse trin for at starte handel med amerikanske aktier fra Danmark i dag.',

    // Step 1: Wallet
    step1Title: 'Opret din digitale tegnebog',
    step1Desc: 'Gratis, tager 2 minutter, og du goer det kun en gang',
    walletExplainTitle: 'Hvad er en digital tegnebog?',
    walletExplainDesc: 'Taenk paa det som en',
    walletExplainHighlight: 'digital bankkonto du selv kontrollerer',
    walletExplainDesc2: '. I stedet for at en bank holder dine penge, holder du dem selv med en simpel browser-udvidelse.',
    walletFeatures: ['Du kontrollerer den', 'Helt gratis', '2 min opsaetning', 'Virker i Danmark'],
    walletSetupTitle: 'Saadan saetter du det op:',
    walletSteps: [
      { text: 'Gaa til', link: 'rabby.io' },
      { text: 'Klik paa "Download" og tilfoej til Chrome/Brave' },
      { text: 'Klik paa "Create New Wallet" og saet et password' },
      { text: 'Skriv din 12-ords genoprettelsesfrase ned', warning: 'Opbevar den sikkert og del den aldrig!' }
    ],
    watchVideo: 'Se: 2-minutters opsaetningsguide',

    // Step 2: Funding
    step2Title: 'Konverter DKK til USDC',
    step2Desc: 'Brug MobilePay, SEPA eller bankoverfoersel',
    fundingIntro: 'Du skal bruge USDC (en stablecoin vaerd $1) for at handle. Her er de bedste maader at konvertere DKK:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Bedste kurser, mest likviditet',
      steps: ['Aabn Binance app', 'Gaa til P2P Trading', 'Koeb USDT med DKK (MobilePay/Bank)', 'Konverter USDT til USDC', 'Haev til Rabby (Arbitrum)']
    },
    moonpay: {
      title: 'MoonPay',
      desc: 'Hurtige kortkoeb',
      steps: ['Besog moonpay.com', 'Vaelg USDC paa Arbitrum', 'Betal med kort eller bank', 'Send til din tegnebog']
    },
    kraken: {
      title: 'Kraken',
      desc: 'EU-reguleret boers',
      steps: ['Indbetal DKK via SEPA', 'Koeb USDC direkte', 'Haev til Rabby', '(Lave gebyrer, betroet EU-boers)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Binance P2P har normalt de bedste DKK-kurser. MobilePay er ojeblikkelig - koeb USDT foerst (mere likviditet), konverter derefter til USDC paa Binance (gratis).',
    seeDetailedGuide: 'Se detaljeret DKK til USDC guide',

    // Step 3: Trade
    step3Title: 'Start handel',
    step3Desc: 'Tilslut til Hyperliquid og handl 50+ amerikanske aktier',
    tradeSteps: [
      { text: 'Gaa til', linkText: 'app.hyperliquid.xyz' },
      { text: 'Klik paa "Connect" og vaelg Rabby Wallet' },
      { text: 'Klik paa "Deposit" og bridge din USDC' },
      { text: 'Soeg efter en aktie (NVDA, TSLA, AAPL) og aabn en position!' }
    ],
    openHyperliquid: 'Aabn Hyperliquid (4% rabat paa gebyrer)',

    // Popular Stocks
    popularStocksTitle: 'Populaere amerikanske aktier tilgaengelige',
    viewAllStocks: 'Se alle 50+ aktier',
    hot: 'HOT',

    // Payment Methods
    paymentTitle: 'Danske betalingsmetoder',
    digitalPayments: 'Digitale betalinger',
    banks: 'Banker',

    // FAQ
    faqTitle: 'Ofte stillede spoergsmaal',
    faqs: [
      {
        question: 'Har jeg brug for en amerikansk maeglerkonto?',
        answer: 'Nej. Handl syntetiske amerikanske aktier med USDC paa decentraliserede platforme. Du faar priseksponering uden faktisk at eje aktierne, hvilket betyder ingen komplekse amerikanske skatteformularer eller maeglergodkendelser.'
      },
      {
        question: 'Hvordan konverterer jeg DKK til USDC?',
        answer: 'Den nemmeste maade er Binance P2P med MobilePay - det er ojeblikkelig og har de bedste kurser. Du kan ogsaa bruge SEPA bankoverfoersel til Kraken eller Coinbase, som tager 1-2 hverdage men har lave gebyrer.'
      },
      {
        question: 'Hvad er minimum for at starte?',
        answer: 'Du kan starte med saa lidt som 350 kr (~$50). Med gearing giver dette dig eksponering til $500-3.000 vaerd af aktier. Vi anbefaler at starte smaat for at laere platformen.'
      },
      {
        question: 'Kan jeg handle om aftenen dansk tid?',
        answer: 'Ja! Equity perps handler 24/7. Du kan handle amerikanske aktier naar som helst - morgen, frokost eller sent om aftenen CET. Der er ingen begraensninger paa handelstider.'
      },
      {
        question: 'Er KYC paakraevet?',
        answer: 'Handelsplatformene (som Hyperliquid) kraever ikke KYC. Du skal dog gennemfoere KYC paa en boers (Binance, Kraken) for at konvertere DKK til USDC i foerste omgang.'
      },
      {
        question: 'Hvad med dansk skat paa handelsgevinster?',
        answer: 'Gevinster fra handel er skattepligtige i Danmark. De kan klassificeres som kapitalgevinster (aktieindkomst) eller spekulationsindkomst afhaengigt af dit handelsmoenster. Hold styr paa alle handler og kontakt en skatteraadgiver med kendskab til krypto/derivater.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Flere Danmark guides',
    moreGuidesDesc: 'Vi har lavet detaljerede guides specifikt til danske handlere. Tjek dem ud:',
    guides: [
      { icon: 'kr', title: 'Konverter DKK til USDC', desc: 'Trin-for-trin med MobilePay, SEPA', href: '/blog/p2p-usdc-guide' },
      { icon: '💰', title: 'Handl med 350 kr', desc: 'Strateguide til smaa konti', href: '/blog/trade-stocks-with-100' },
      { icon: '📊', title: 'Platformsammenligning', desc: 'Sammenlign alle equity perp platforme', href: '/' },
      { icon: '🤝', title: 'P2P handelsguide', desc: 'Globale P2P metoder og sikkerhedstips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start handel med amerikanske aktier i dag',
    ctaDesc: 'Slut dig til tusindvis af danske handlere med adgang til NVDA, TSLA og 50+ amerikanske aktier 24/7. Ingen amerikansk maegler noedvendig. Start med kun 350 kr.',
    getStartedCta: 'Kom i gang nu (4% rabat paa gebyrer)',

    // Free Notice
    freeNotice: 'Denne side er',
    freeNotice2: '100% gratis',
    freeNotice3: ' at bruge til at sammenligne de bedste platforme til at handle aktier 24/7. Naar du tilmelder dig via vores links til platforme som',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'og',
    freeNotice6: 'Lighter',
    freeNotice7: ', faar du',
    freeNotice8: '4% rabat paa handelsgebyrer',
    freeNotice9: ' med vores henvisningskode. Dette hjaelper med at stoette siden, mens du sparer penge paa hver handel.',

    // Related
    relatedTitle: 'Relaterede guides',
    relatedGuides: [
      { tag: 'FUNDING', title: 'Konverter DKK til USDC', desc: 'MobilePay og SEPA guide', href: '/blog/p2p-usdc-guide' },
      { tag: 'GUIDE', title: 'Begynder platformguide', desc: 'Bedste platforme til nye handlere', href: '/blog/best-equity-perps-for-beginners' },
      { tag: 'SAMMENLIGNING', title: 'Platformsammenligning', desc: 'Find den bedste platform', href: '/' }
    ]
  },
};

export const digitalPayments = ['MobilePay (Most Popular)', 'SEPA', 'Trustly', 'Bank Transfer'];
export const banksList = ['Danske Bank', 'Nordea', 'Jyske Bank', 'Nykredit'];

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
