export const nativeLang = 'lt';
export const nativeName = 'Lietuvių';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Lithuania',

    // Hero
    badge: 'Lithuania Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Lithuania',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert EUR to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '~€45',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time EET',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Lithuanian Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🇪🇺',
        title: 'EU-Friendly Access',
        desc: 'No US brokerage account needed. No SSN, no W-8BEN forms, no complex foreign account paperwork. Works seamlessly with Lithuanian banks via SEPA.'
      },
      {
        icon: '⚡',
        title: 'Instant SEPA Funding',
        desc: 'Deposit EUR from Swedbank, SEB, or Luminor via SEPA transfer. Funds arrive same day or next business day. Start trading immediately.'
      },
      {
        icon: '🕐',
        title: 'Trade Beyond EET Hours',
        desc: 'US markets are only open 16:30-23:00 EET. With equity perps, trade whenever you want - morning, afternoon, or weekend.'
      },
      {
        icon: '💰',
        title: 'Start with ~€45',
        desc: 'Most US brokers need $500+ minimum. Here, start with just €45 (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Lithuania today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Lithuania'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert EUR to USDC',
    step2Desc: 'Use Binance or Kraken with SEPA transfer',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert EUR:',
    binanceP2P: {
      title: 'Binance (Recommended)',
      desc: 'Best rates, most liquidity',
      steps: ['Create a Binance account', 'Deposit EUR via SEPA from your bank', 'Buy USDC with EUR', 'Withdraw to Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Kraken',
      desc: 'EU-friendly, low fees',
      steps: ['Create a Kraken account', 'Deposit EUR via SEPA', 'Buy USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    coindcx: {
      title: 'Coinbase',
      desc: 'Simple interface, EU regulated',
      steps: ['Create a Coinbase account', 'Deposit EUR via SEPA', 'Buy USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    proTip: 'Pro tip:',
    proTipText: 'SEPA transfers from Swedbank, SEB, Luminor, or Siauliu bankas usually arrive same day. Binance typically has the best rates.',
    seeDetailedGuide: 'See detailed EUR to USDC guide',

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
        question: 'Is it legal to trade US stocks from Lithuania using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by Lithuanian law as they operate on decentralized platforms. As an EU member, MiCA regulations may apply in the future. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. You should understand the regulatory landscape and consult a tax professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Lithuania?',
        answer: 'Yes, profits from trading are likely taxable in Lithuania. They may be classified as capital gains or other income depending on your trading activity. Maintain records of all trades and consult a tax advisor familiar with crypto/derivatives taxation in Lithuania.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as €45 (~$50 USDC). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during Lithuanian business hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night EET. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on an exchange (Binance, Kraken) to convert EUR to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Lithuania Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Lithuanian traders. Check them out:",
    guides: [
      { icon: '€', title: 'Convert EUR to USDC', desc: 'Step-by-step with SEPA transfers', href: '/blog/convert-eur-to-usdc' },
      { icon: '💰', title: 'Trade with €50', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-50-eur' },
      { icon: '⚖️', title: 'Is It Legal in the EU?', desc: 'Regulations, taxes, and compliance', href: '/blog/equity-perps-legal-eu' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Lithuanian traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just €45.',
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
      { tag: 'FUNDING', title: 'Convert EUR to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-eur-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with €50', desc: 'Small account strategy', href: '/blog/trade-stocks-with-50-eur' },
      { tag: 'LEGAL', title: 'Is It Legal in the EU?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-eu' }
    ]
  },
  lt: {
    // Breadcrumb
    home: 'Pagrindinis',
    blog: 'Tinklarastis',
    pageTitle: 'Prekiaukite JAV akcijomis is Lietuvos',

    // Hero
    badge: 'Lietuvos vadovas',
    noBrokerBadge: 'Brokerio nereikia',
    heroTitle1: 'Prekiaukite JAV akcijomis',
    heroTitle2: 'Is Lietuvos',
    heroDesc: 'Pasiekite NVDA, TSLA, AAPL ir 50+ JAV akciju be JAV brokerio saskaitos. Konvertuokite EUR i USDC ir pradekite prekiauti per',
    heroDescHighlight: '15 minuciu',
    startTrading: 'Pradeti prekiauti dabar',
    howItWorks: 'Kaip tai veikia',

    // Quick Stats
    statMinimumValue: '~€45',
    statMinimum: 'Minimumas pradeti',
    statTimeValue: '24/7',
    statTime: 'Bet kuriuo metu EET',
    statStocksValue: '50+',
    statStocks: 'JAV akcijos',
    statKycValue: 'Be KYC',
    statKyc: 'Prekybos platformoje',

    // Why Section
    whyTitle: 'Kodel Lietuvos prekiautojai renkasi Equity Perps',
    whyCards: [
      {
        icon: '🇪🇺',
        title: 'ES draugiskas prieinamumas',
        desc: 'Nereikia JAV brokerio saskaitos. Nereikia SSN, W-8BEN formu, sudétingu uzsienio saskaitu dokumentu. Puikiai veikia su Lietuvos bankais per SEPA.'
      },
      {
        icon: '⚡',
        title: 'Greitas SEPA finansavimas',
        desc: 'Imokekite EUR is Swedbank, SEB ar Luminor per SEPA pervedima. Lesós ateina ta pacia diena arba kita darbo diena. Pradekite prekiauti is karto.'
      },
      {
        icon: '🕐',
        title: 'Prekiaukite uz EET valandu',
        desc: 'JAV rinkos veikia tik 16:30-23:00 EET. Su equity perps prekiaukite kada norite - ryte, popiet ar savaitgali.'
      },
      {
        icon: '💰',
        title: 'Pradekite nuo ~€45',
        desc: 'Daugumai JAV brokeriu reikia $500+ minimumo. Cia pradekite tik nuo €45 (~$50) ir naudokite sverta didesniems pozicijoms valdyti.'
      }
    ],

    // Get Started Section
    stepByStep: 'Zingsnis po zingsnio vadovas',
    getStartedTitle: 'Pradekite per 15 minuciu',
    getStartedDesc: 'Sekite siuos zingsnius, kad siandien pradetumete prekiauti JAV akcijomis is Lietuvos.',

    // Step 1: Wallet
    step1Title: 'Sukurkite savo skaitmenine pinigine',
    step1Desc: 'Nemokama, uzima 2 minutes, ir tai darote tik viena karta',
    walletExplainTitle: 'Kas yra skaitmenine pinigine?',
    walletExplainDesc: 'Galvokite apie tai kaip apie',
    walletExplainHighlight: 'skaitmenine banko saskaita, kuria jus kontroliuojate',
    walletExplainDesc2: '. Uzuot bankas laiketu jusu pinigus, jus patys juos laikote naudodami paprasta narslykles pletin.',
    walletFeatures: ['Jus kontroliuojate', 'Viskai nemokama', '2 min nustatymas', 'Veikia Lietuvoje'],
    walletSetupTitle: 'Stai kaip tai nustatyti:',
    walletSteps: [
      { text: 'Eikite i', link: 'rabby.io' },
      { text: 'Spauskite "Download" ir idiekite i Chrome/Brave' },
      { text: 'Spauskite "Create New Wallet" ir nustatykite slaptazodi' },
      { text: 'Uzsiraskite savo 12 zodziu atkurimo fraze', warning: 'Saugokite ja ir niekada nesidalinkite!' }
    ],
    watchVideo: 'Ziureti: 2 minuciu nustatymo vadova',

    // Step 2: Funding
    step2Title: 'Konvertuokite EUR i USDC',
    step2Desc: 'Naudokite Binance arba Kraken su SEPA pervedimu',
    fundingIntro: 'Jums reikia USDC (stablecoin vertes $1) prekybai. Cia geriausi budai konvertuoti EUR:',
    binanceP2P: {
      title: 'Binance (Rekomenduojama)',
      desc: 'Geriausi kursai, didiausia likvidumas',
      steps: ['Sukurkite Binance paskyra', 'Imokekite EUR per SEPA is savo banko', 'Pirkite USDC uz EUR', 'Isiimkite i Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Kraken',
      desc: 'ES draugiskas, mazi mokesciai',
      steps: ['Sukurkite Kraken paskyra', 'Imokekite EUR per SEPA', 'Pirkite USDC', 'Isiimkite i Rabby (Arbitrum)']
    },
    coindcx: {
      title: 'Coinbase',
      desc: 'Paprasta sasaja, ES reguliuojama',
      steps: ['Sukurkite Coinbase paskyra', 'Imokekite EUR per SEPA', 'Pirkite USDC', 'Isiimkite i Rabby (Arbitrum)']
    },
    proTip: 'Pro patarimas:',
    proTipText: 'SEPA pervedimai is Swedbank, SEB, Luminor ar Siauliu banko paprastai ateina ta pacia diena. Binance paprastai turi geriausius kursus.',
    seeDetailedGuide: 'Ziureti detalu EUR i USDC vadova',

    // Step 3: Trade
    step3Title: 'Pradekite prekiauti',
    step3Desc: 'Prisijunkite prie Hyperliquid ir prekiaukite 50+ JAV akcijomis',
    tradeSteps: [
      { text: 'Eikite i', linkText: 'app.hyperliquid.xyz' },
      { text: 'Spauskite "Connect" ir pasirinkite Rabby Wallet' },
      { text: 'Spauskite "Deposit" ir perkelkite savo USDC' },
      { text: 'Ieskokite akcijos (NVDA, TSLA, AAPL) ir atidarykite pozicija!' }
    ],
    openHyperliquid: 'Atidaryti Hyperliquid (4% nuolaida mokesciams)',

    // Popular Stocks
    popularStocksTitle: 'Populiarios JAV akcijos',
    viewAllStocks: 'Ziureti visas 50+ akcijas',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Daznai uzduodami klausimai',
    faqs: [
      {
        question: 'Ar legalu prekiauti JAV akcijomis is Lietuvos naudojant equity perps?',
        answer: 'Equity perpetuals egzistuoja reguliaciniame pilkoje zonoje. Jie nera aiskiai reguliuojami Lietuvos istatymu, nes veikia decentralizuotose platformose. Kaip ES nare, MiCA reguliacijos gali buti taikomos ateityje. Jus ne tiesiogiai perkate JAV akcijas - prekiaujate kainos ekspozicija per sintetinius kontraktus. Turétumete suprasti reguliacine aplinka ir pasikonsultuoti su mokesciu specialistu.'
      },
      {
        question: 'Ar turiu mokéti mokescius nuo equity perps pelno Lietuvoje?',
        answer: 'Taip, pelnas is prekybos greiciausiai apmokestinamas Lietuvoje. Jis gali buti klasifikuojamas kaip kapitalo prieaugis arba kitos pajamos, priklausomai nuo jusu prekybos veiklos. Saugokite visu sandoriu irasus ir pasikonsultuokite su mokesciu konsultantu, issmananciau kripto/isvestiniu priemoniu apmokestinima Lietuvoje.'
      },
      {
        question: 'Koks minimalus kiekis pradeti?',
        answer: 'Galite pradéti nuo €45 (~$50 USDC). Su svertu tai suteikia ekspozicija i $500-3,000 vertes akcijas. Rekomenduojame pradeti nuo mazu sumu, kad ismoktuméte platforma.'
      },
      {
        question: 'Ar galiu prekiauti Lietuvos darbo valandomis?',
        answer: 'Taip! Equity perps prekiaujama 24/7. Galite prekiauti JAV akcijomis bet kuriuo metu - ryte, vakare ar vélu nakti EET. Nera jokiu prekybos valandu apribojimu.'
      },
      {
        question: 'Ar reikalingas KYC?',
        answer: 'Prekybos platformos (kaip Hyperliquid) nereikalauja KYC. Taciau jums reikés uzbaigti KYC birzoje (Binance, Kraken), kad galétumete konvertuoti EUR i USDC pradiioje.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Daugiau Lietuvos vadovu',
    moreGuidesDesc: 'Sukureme issamius vadovus specialiai Lietuvos prekiautojams. Patikrinikite:',
    guides: [
      { icon: '€', title: 'Konvertuoti EUR i USDC', desc: 'Zingsnis po zingsnio su SEPA pervedimais', href: '/blog/convert-eur-to-usdc' },
      { icon: '💰', title: 'Prekiauti su €50', desc: 'Mazos saskaitos strategijos vadovas', href: '/blog/trade-stocks-with-50-eur' },
      { icon: '⚖️', title: 'Ar tai legalu ES?', desc: 'Reguliacijos, mokesciai ir atitiktis', href: '/blog/equity-perps-legal-eu' },
      { icon: '🤝', title: 'P2P prekybos vadovas', desc: 'Globalus P2P metodai ir saugumo patarimai', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Pradekite prekiauti JAV akcijomis siandien',
    ctaDesc: 'Prisijunkite prie tukstanciu Lietuvos prekiautoju, pasiekianciu NVDA, TSLA ir 50+ JAV akciju 24/7. Nereikia JAV brokerio. Pradekite tik nuo €45.',
    getStartedCta: 'Pradeti dabar (4% nuolaida mokesciams)',

    // Free Notice
    freeNotice: 'Si svetaine yra',
    freeNotice2: '100% nemokama',
    freeNotice3: ' naudoti palyginti geriausias platformas prekiauti akcijomis 24/7. Kai uzsregistruojate per musu nuorodas i platformas kaip',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'ir',
    freeNotice6: 'Lighter',
    freeNotice7: ', gaunate',
    freeNotice8: '4% nuolaida prekybos mokesciams',
    freeNotice9: ' su musu rekomendacijos kodu. Tai padeda palaikyti svetaine ir taupo jusu pinigus kiekvienam sandoriui.',

    // Related
    relatedTitle: 'Susije vadovai',
    relatedGuides: [
      { tag: 'FINANSAVIMAS', title: 'Konvertuoti EUR i USDC', desc: 'Zingsnis po zingsnio su ekrano nuotraukomis', href: '/blog/convert-eur-to-usdc' },
      { tag: 'VADOVAS', title: 'Prekiauti su €50', desc: 'Mazos saskaitos strategija', href: '/blog/trade-stocks-with-50-eur' },
      { tag: 'TEISINE', title: 'Ar tai legalu ES?', desc: 'Reguliacine apzvalga', href: '/blog/equity-perps-legal-eu' }
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
