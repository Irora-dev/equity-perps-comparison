export const nativeLang = 'no';
export const nativeName = 'Norsk';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Norway',

    // Hero
    badge: 'Norway Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Norway',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert NOK to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '500 kr',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time CET',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Norwegian Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🇪🇺',
        title: 'EEA Access',
        desc: 'As an EEA member, Norway has strong financial infrastructure. Trade US stocks without complex international brokerage setups or currency exchange hassles.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert NOK to USDC via Vipps and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade Anytime',
        desc: 'US markets open at 3:30pm CET. With equity perps, trade whenever you want - morning, afternoon, or late night.'
      },
      {
        icon: '💰',
        title: 'Start with 500 kr',
        desc: 'Most US brokers need $500+ minimum. Here, start with just 500 kr (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Norway today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Norway'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert NOK to USDC',
    step2Desc: 'Use Vipps, BankID, or bank transfer',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert NOK:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Best rates, Vipps support',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with NOK (Vipps/Bank)', 'Convert USDT → USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Vipps Direct',
      desc: "Norway's favorite payment",
      steps: ['Use Binance P2P with Vipps', 'Instant transfer from your bank', 'Buy USDT directly', 'Convert to USDC', 'Withdraw to wallet']
    },
    coindcx: {
      title: 'SEPA Transfer',
      desc: 'EU bank transfer option',
      steps: ['Deposit NOK via SEPA', 'Convert to USDT/USDC', 'Lower fees for larger amounts', '(Takes 1-2 business days)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Vipps through Binance P2P usually has the best NOK rates. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed NOK → USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from Norway using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by Finanstilsynet as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many Norwegian traders use these platforms, but you should understand the regulatory landscape and consult a tax professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Norway?',
        answer: 'Yes, profits from trading are likely taxable in Norway. They may be classified as capital gains (kapitalinntekt). Maintain records of all trades and consult with Skatteetaten or a tax advisor familiar with crypto/derivatives taxation.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as 500 kr (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during Norwegian business hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, afternoon, or late night CET. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on Binance or a similar exchange to convert NOK to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Norway Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Norwegian traders. Check them out:",
    guides: [
      { icon: 'kr', title: 'Convert NOK to USDC', desc: 'Step-by-step with Vipps, Binance P2P', href: '/blog/convert-nok-to-usdc' },
      { icon: '💰', title: 'Trade with 500 kr', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-500-nok' },
      { icon: '⚖️', title: 'Norway Tax Guide', desc: 'Skatteetaten reporting', href: '/blog/norway-crypto-tax-guide' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join Norwegian traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just 500 kr.',
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
      { tag: 'FUNDING', title: 'Convert NOK to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-nok-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with 500 kr', desc: 'Small account strategy', href: '/blog/trade-stocks-with-500-nok' },
      { tag: 'TAX', title: 'Norway Tax Guide', desc: 'Skatteetaten reporting', href: '/blog/norway-crypto-tax-guide' }
    ]
  },
  no: {
    // Breadcrumb
    home: 'Hjem',
    blog: 'Blogg',
    pageTitle: 'Handle amerikanske aksjer fra Norge',

    // Hero
    badge: 'Norge-guide',
    noBrokerBadge: 'Ingen megler nodvendig',
    heroTitle1: 'Handle amerikanske aksjer',
    heroTitle2: 'fra Norge',
    heroDesc: 'Fa tilgang til NVDA, TSLA, AAPL og 50+ amerikanske aksjer uten en amerikansk meglerkonto. Konverter NOK til USDC og start handel pa',
    heroDescHighlight: '15 minutter',
    startTrading: 'Start handel na',
    howItWorks: 'Hvordan det fungerer',

    // Quick Stats
    statMinimumValue: '500 kr',
    statMinimum: 'Minimum for a starte',
    statTimeValue: '24/7',
    statTime: 'Nar som helst CET',
    statStocksValue: '50+',
    statStocks: 'Amerikanske aksjer',
    statKycValue: 'Ingen KYC',
    statKyc: 'Pa handelsplattformen',

    // Why Section
    whyTitle: 'Hvorfor norske tradere velger Equity Perps',
    whyCards: [
      {
        icon: '🇪🇺',
        title: 'EOS-tilgang',
        desc: 'Som EOS-medlem har Norge sterk finansiell infrastruktur. Handle amerikanske aksjer uten kompliserte internasjonale meglerkontoer eller valutavekslingsmas.'
      },
      {
        icon: '⚡',
        title: 'Umiddelbar tilgang',
        desc: 'Ingen venting i uker pa amerikansk meglergodkjenning. Konverter NOK til USDC via Vipps og start handel samme dag.'
      },
      {
        icon: '🕐',
        title: 'Handle nar som helst',
        desc: 'Amerikanske markeder apner kl. 15:30 CET. Med equity perps kan du handle nar du vil - morgen, ettermiddag eller sen kveld.'
      },
      {
        icon: '💰',
        title: 'Start med 500 kr',
        desc: 'De fleste amerikanske meglere krever $500+ minimum. Her starter du med bare 500 kr (~$50) og bruker giring for a kontrollere storre posisjoner.'
      }
    ],

    // Get Started Section
    stepByStep: 'Steg-for-steg guide',
    getStartedTitle: 'Kom i gang pa 15 minutter',
    getStartedDesc: 'Folg disse stegene for a starte handel med amerikanske aksjer fra Norge i dag.',

    // Step 1: Wallet
    step1Title: 'Sett opp din digitale lommebok',
    step1Desc: 'Gratis, tar 2 minutter, og du gjor dette bare en gang',
    walletExplainTitle: 'Hva er en digital lommebok?',
    walletExplainDesc: 'Tenk pa det som en',
    walletExplainHighlight: 'digital bankkonto du kontrollerer',
    walletExplainDesc2: '. I stedet for at en bank holder pengene dine, holder du dem selv ved hjelp av en enkel nettleserutvidelse.',
    walletFeatures: ['Du kontrollerer den', 'Helt gratis', '2 min oppsett', 'Fungerer i Norge'],
    walletSetupTitle: 'Slik setter du den opp:',
    walletSteps: [
      { text: 'Ga til', link: 'rabby.io' },
      { text: 'Klikk "Download" og legg til i Chrome/Brave' },
      { text: 'Klikk "Create New Wallet" og sett et passord' },
      { text: 'Skriv ned din 12-ords gjenopprettingsfrase', warning: 'Oppbevar den trygt og del den aldri!' }
    ],
    watchVideo: 'Se: 2-minutters oppsettguide',

    // Step 2: Funding
    step2Title: 'Konverter NOK til USDC',
    step2Desc: 'Bruk Vipps, BankID eller bankoverforing',
    fundingIntro: 'Du trenger USDC (en stablecoin verdt $1) for a handle. Her er de beste matene a konvertere NOK:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Beste kurser, Vipps-stotte',
      steps: ['Apne Binance-appen', 'Ga til P2P Trading', 'Kjop USDT med NOK (Vipps/Bank)', 'Konverter USDT → USDC', 'Ta ut til Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Vipps Direkte',
      desc: 'Norges favorittbetaling',
      steps: ['Bruk Binance P2P med Vipps', 'Umiddelbar overforing fra banken din', 'Kjop USDT direkte', 'Konverter til USDC', 'Ta ut til lommebok']
    },
    coindcx: {
      title: 'SEPA-overforing',
      desc: 'EU-bankoverforingsalternativ',
      steps: ['Sett inn NOK via SEPA', 'Konverter til USDT/USDC', 'Lavere gebyrer for storre belop', '(Tar 1-2 virkedager)']
    },
    proTip: 'Profftips:',
    proTipText: 'Vipps gjennom Binance P2P har vanligvis de beste NOK-kursene. Kjop USDT forst (mer likviditet), deretter konverter til USDC pa Binance (gratis).',
    seeDetailedGuide: 'Se detaljert NOK → USDC-guide med skjermbilder',

    // Step 3: Trade
    step3Title: 'Start handel',
    step3Desc: 'Koble til Hyperliquid og handle 50+ amerikanske aksjer',
    tradeSteps: [
      { text: 'Ga til', linkText: 'app.hyperliquid.xyz' },
      { text: 'Klikk "Connect" og velg Rabby Wallet' },
      { text: 'Klikk "Deposit" og bro din USDC' },
      { text: 'Sok etter en aksje (NVDA, TSLA, AAPL) og apne en posisjon!' }
    ],
    openHyperliquid: 'Apne Hyperliquid (4% rabatt pa gebyrer)',

    // Popular Stocks
    popularStocksTitle: 'Populaere amerikanske aksjer tilgjengelig',
    viewAllStocks: 'Se alle 50+ aksjer →',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Ofte stilte sporsmal',
    faqs: [
      {
        question: 'Er det lovlig a handle amerikanske aksjer fra Norge med equity perps?',
        answer: 'Equity perpetuals eksisterer i en regulatorisk grazone. De er ikke eksplisitt regulert av Finanstilsynet da de opererer pa desentraliserte plattformer. Du kjoper ikke direkte amerikanske aksjer - du handler priseksponering gjennom syntetiske kontrakter. Mange norske tradere bruker disse plattformene, men du bor forsta det regulatoriske landskapet og radfare deg med en skatteekspert.'
      },
      {
        question: 'Ma jeg betale skatt pa gevinster fra equity perps i Norge?',
        answer: 'Ja, gevinster fra handel er sannsynligvis skattepliktige i Norge. De kan klassifiseres som kapitalinntekt. Hold oversikt over alle handler og radfor deg med Skatteetaten eller en skatteradgiver som er kjent med krypto/derivat-beskatning.'
      },
      {
        question: 'Hva er minimumbelopet jeg trenger for a starte?',
        answer: 'Du kan starte med sa lite som 500 kr (~$50). Med giring gir dette deg eksponering mot $500-3000 verdi av aksjer. Vi anbefaler a starte smatt for a laere plattformen.'
      },
      {
        question: 'Kan jeg handle i norsk arbeidstid?',
        answer: 'Ja! Equity perps handles 24/7. Du kan handle amerikanske aksjer nar som helst - morgen, ettermiddag eller sen kveld CET. Det er ingen begrensning pa handelstider.'
      },
      {
        question: 'Er KYC pakrevd?',
        answer: 'Handelsplattformer (som Hyperliquid) krever ikke KYC. Du ma imidlertid fullore KYC pa Binance eller lignende bors for a konvertere NOK til USDC i utgangspunktet.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Flere Norge-guider',
    moreGuidesDesc: 'Vi har laget detaljerte guider spesielt for norske tradere. Sjekk dem ut:',
    guides: [
      { icon: 'kr', title: 'Konverter NOK til USDC', desc: 'Steg-for-steg med Vipps, Binance P2P', href: '/blog/convert-nok-to-usdc' },
      { icon: '💰', title: 'Handle med 500 kr', desc: 'Strategi for sma kontoer', href: '/blog/trade-stocks-with-500-nok' },
      { icon: '⚖️', title: 'Norsk skatteguide', desc: 'Skatteetaten-rapportering', href: '/blog/norway-crypto-tax-guide' },
      { icon: '🤝', title: 'P2P-handelsguide', desc: 'Globale P2P-metoder og sikkerhetstips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start handel med amerikanske aksjer i dag',
    ctaDesc: 'Bli med norske tradere som far tilgang til NVDA, TSLA og 50+ amerikanske aksjer 24/7. Ingen amerikansk megler nodvendig. Start med bare 500 kr.',
    getStartedCta: 'Kom i gang na (4% rabatt pa gebyrer)',

    // Free Notice
    freeNotice: 'Denne siden er',
    freeNotice2: '100% gratis',
    freeNotice3: ' a bruke for a sammenligne de beste plattformene for a handle aksjer 24/7. Nar du registrerer deg via vare lenker til plattformer som',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'og',
    freeNotice6: 'Lighter',
    freeNotice7: ', far du',
    freeNotice8: '4% rabatt pa handelsgebyrer',
    freeNotice9: ' med var henvisningskode. Dette hjelper med a stotte siden mens du sparer penger pa hver handel.',

    // Related
    relatedTitle: 'Relaterte guider',
    relatedGuides: [
      { tag: 'FINANSIERING', title: 'Konverter NOK til USDC', desc: 'Steg-for-steg med skjermbilder', href: '/blog/convert-nok-to-usdc' },
      { tag: 'GUIDE', title: 'Handle med 500 kr', desc: 'Strategi for sma kontoer', href: '/blog/trade-stocks-with-500-nok' },
      { tag: 'SKATT', title: 'Norsk skatteguide', desc: 'Skatteetaten-rapportering', href: '/blog/norway-crypto-tax-guide' }
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
