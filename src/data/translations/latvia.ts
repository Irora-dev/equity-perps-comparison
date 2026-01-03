export const nativeLang = 'lv';
export const nativeName = 'Latviešu';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Latvia',

    // Hero
    badge: 'Latvia Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Latvia',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert EUR to USDC via SEPA and start trading in',
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
    whyTitle: 'Why Latvian Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🌍',
        title: 'EU-Friendly Access',
        desc: 'Trade US stocks without opening a US brokerage account. No SSN required, no complex foreign account paperwork. Works seamlessly with Latvian banks via SEPA.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert EUR to USDC via SEPA and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade Any Time',
        desc: 'US markets open at 16:30 EET. With equity perps, trade whenever you want - morning, afternoon, or midnight.'
      },
      {
        icon: '💰',
        title: 'Start with ~€45',
        desc: 'Most US brokers need $500+ minimum. Here, start with just ~€45 (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Latvia today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Latvia'],
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
      desc: 'Best rates, SEPA deposits',
      steps: ['Create a Binance account (free)', 'Deposit EUR via SEPA from Swedbank/SEB/Citadele', 'Buy USDC with your EUR balance', 'Withdraw to Rabby on Arbitrum']
    },
    wazirx: {
      title: 'Kraken',
      desc: 'EU-friendly, low fees',
      steps: ['Create a Kraken account', 'Deposit EUR via SEPA', 'Buy USDC', 'Withdraw to Rabby on Arbitrum']
    },
    coindcx: {
      title: 'Coinbase',
      desc: 'Simple interface, trusted',
      steps: ['Create Coinbase account', 'Deposit EUR via SEPA', 'Buy USDC directly', '(Higher fees but simpler)']
    },
    proTip: 'Pro tip:',
    proTipText: 'SEPA transfers from Latvian banks (Swedbank, SEB, Citadele) usually arrive same day or next business day.',
    seeDetailedGuide: 'See detailed EUR to USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from Latvia using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are decentralized derivatives not specifically regulated under Latvian or EU law yet. As an EU member, MiCA regulations may apply in the future. You're trading price exposure through synthetic contracts, not buying actual US stocks. You are responsible for reporting any trading profits for tax purposes."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Latvia?',
        answer: 'Yes, profits from trading are likely taxable in Latvia. They may be classified as capital gains or other income depending on your situation. Maintain records of all trades and consult a tax professional familiar with crypto/derivatives taxation in Latvia.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as ~€45 (~$50 USDC). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade outside US market hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night EET. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on an exchange (Binance, Kraken, Coinbase) to convert EUR to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Latvia Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Latvian traders. Check them out:",
    guides: [
      { icon: '€', title: 'Convert EUR to USDC', desc: 'Step-by-step with Binance, Kraken', href: '/blog/convert-eur-to-usdc' },
      { icon: '💰', title: 'Trade with €50', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-50-euros' },
      { icon: '⚖️', title: 'EU Regulations', desc: 'MiCA, taxes, and compliance', href: '/blog/equity-perps-legal-eu' },
      { icon: '🤝', title: 'SEPA Guide', desc: 'EUR transfers and best practices', href: '/blog/sepa-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join Latvian traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just ~€45.',
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
      { tag: 'GUIDE', title: 'Trade with €50', desc: 'Small account strategy', href: '/blog/trade-stocks-with-50-euros' },
      { tag: 'LEGAL', title: 'EU Regulations', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-eu' }
    ]
  },
  lv: {
    // Breadcrumb
    home: 'Sākums',
    blog: 'Blogs',
    pageTitle: 'Tirgo ASV akcijas no Latvijas',

    // Hero
    badge: 'Latvijas ceļvedis',
    noBrokerBadge: 'Nav nepieciešams brokeris',
    heroTitle1: 'Tirgo ASV akcijas',
    heroTitle2: 'No Latvijas',
    heroDesc: 'Piekļūsti NVDA, TSLA, AAPL un 50+ ASV akcijām bez ASV brokeru konta. Konvertē EUR uz USDC ar SEPA un sāc tirgot',
    heroDescHighlight: '15 minūtēs',
    startTrading: 'Sāc tirgot tagad',
    howItWorks: 'Kā tas darbojas',

    // Quick Stats
    statMinimumValue: '~€45',
    statMinimum: 'Minimums, lai sāktu',
    statTimeValue: '24/7',
    statTime: 'Jebkurā laikā EET',
    statStocksValue: '50+',
    statStocks: 'ASV akcijas',
    statKycValue: 'Nav KYC',
    statKyc: 'Tirdzniecības platformā',

    // Why Section
    whyTitle: 'Kāpēc Latvijas tirgotāji izvēlas Equity Perps',
    whyCards: [
      {
        icon: '🌍',
        title: 'ES draudzīga piekļuve',
        desc: 'Tirgo ASV akcijas bez ASV brokeru konta atvēršanas. Nav nepieciešams SSN, nav sarežģītu ārvalstu kontu dokumentu. Darbojas nevainojami ar Latvijas bankām caur SEPA.'
      },
      {
        icon: '⚡',
        title: 'Tūlītēja piekļuve',
        desc: 'Nav jāgaida nedēļas uz ASV brokeru apstiprinājumu. Konvertē EUR uz USDC ar SEPA un sāc tirgot tajā pašā dienā.'
      },
      {
        icon: '🕐',
        title: 'Tirgo jebkurā laikā',
        desc: 'ASV tirgi atveras 16:30 EET. Ar equity perps tirgo, kad vēlies - no rīta, pēcpusdienā vai pusnaktī.'
      },
      {
        icon: '💰',
        title: 'Sāc ar ~€45',
        desc: 'Vairumam ASV brokeru nepieciešami $500+ minimums. Šeit sāc ar tikai ~€45 (~$50) un izmanto sviru, lai kontrolētu lielākas pozīcijas.'
      }
    ],

    // Get Started Section
    stepByStep: 'Soli pa solim ceļvedis',
    getStartedTitle: 'Sāc 15 minūtēs',
    getStartedDesc: 'Seko šiem soļiem, lai šodien sāktu tirgot ASV akcijas no Latvijas.',

    // Step 1: Wallet
    step1Title: 'Izveido savu digitālo maku',
    step1Desc: 'Bezmaksas, aizņem 2 minūtes, dari tikai vienreiz',
    walletExplainTitle: 'Kas ir digitālais maks?',
    walletExplainDesc: 'Iedomājies to kā',
    walletExplainHighlight: 'digitālu bankas kontu, ko tu kontrolē',
    walletExplainDesc2: '. Banka neuzglabā tavu naudu - tu pats to uzglabā, izmantojot vienkāršu pārlūkprogrammas paplašinājumu.',
    walletFeatures: ['Tu kontrolē', 'Pilnīgi bezmaksas', '2 min iestatīšana', 'Darbojas Latvijā'],
    walletSetupTitle: 'Kā to iestatīt:',
    walletSteps: [
      { text: 'Ej uz', link: 'rabby.io' },
      { text: 'Spied "Download" un pievieno Chrome/Brave' },
      { text: 'Spied "Create New Wallet" un iestati paroli' },
      { text: 'Pieraksti savu 12 vārdu atjaunošanas frāzi', warning: 'Glabā drošībā un nekad nedalies!' }
    ],
    watchVideo: 'Skaties: 2 minūšu iestatīšanas ceļvedis',

    // Step 2: Funding
    step2Title: 'Konvertē EUR uz USDC',
    step2Desc: 'Izmanto Binance vai Kraken ar SEPA pārskaitījumu',
    fundingIntro: 'Tev nepieciešams USDC (steiblkoins $1 vērtībā), lai tirgotu. Labākie veidi, kā konvertēt EUR:',
    binanceP2P: {
      title: 'Binance (Ieteicams)',
      desc: 'Labākie kursi, SEPA iemaksas',
      steps: ['Izveido Binance kontu (bezmaksas)', 'Iemaksā EUR ar SEPA no Swedbank/SEB/Citadele', 'Pērc USDC ar savu EUR atlikumu', 'Izņem uz Rabby Arbitrum tīklā']
    },
    wazirx: {
      title: 'Kraken',
      desc: 'ES draudzīgs, zemas komisijas',
      steps: ['Izveido Kraken kontu', 'Iemaksā EUR ar SEPA', 'Pērc USDC', 'Izņem uz Rabby Arbitrum tīklā']
    },
    coindcx: {
      title: 'Coinbase',
      desc: 'Vienkārša saskarne, uzticams',
      steps: ['Izveido Coinbase kontu', 'Iemaksā EUR ar SEPA', 'Pērc USDC tieši', '(Augstākas komisijas, bet vienkāršāk)']
    },
    proTip: 'Padoms:',
    proTipText: 'SEPA pārskaitījumi no Latvijas bankām (Swedbank, SEB, Citadele) parasti pienāk tajā pašā dienā vai nākamajā darba dienā.',
    seeDetailedGuide: 'Skatīt detalizētu EUR uz USDC ceļvedi ar ekrānuzņēmumiem',

    // Step 3: Trade
    step3Title: 'Sāc tirgot',
    step3Desc: 'Pievieno Hyperliquid un tirgo 50+ ASV akcijas',
    tradeSteps: [
      { text: 'Ej uz', linkText: 'app.hyperliquid.xyz' },
      { text: 'Spied "Connect" un izvēlies Rabby Wallet' },
      { text: 'Spied "Deposit" un pārvieto savu USDC' },
      { text: 'Meklē akciju (NVDA, TSLA, AAPL) un atver pozīciju!' }
    ],
    openHyperliquid: 'Atvērt Hyperliquid (4% atlaide)',

    // Popular Stocks
    popularStocksTitle: 'Pieejamās populārās ASV akcijas',
    viewAllStocks: 'Skatīt visas 50+ akcijas →',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Biežāk uzdotie jautājumi',
    faqs: [
      {
        question: 'Vai ir legāli tirgot ASV akcijas no Latvijas, izmantojot equity perps?',
        answer: 'Equity perpetuals eksistē regulatīvā pelēkajā zonā. Tie ir decentralizēti atvasinātie instrumenti, kas vēl nav specifiski regulēti Latvijas vai ES likumdošanā. Kā ES dalībvalstij, MiCA regulējums var attiekties nākotnē. Tu tirgo cenu ekspozīciju caur sintētiskiem līgumiem, nevis pērc īstas ASV akcijas. Tu esi atbildīgs par tirdzniecības peļņas deklarēšanu nodokļu vajadzībām.'
      },
      {
        question: 'Vai man jāmaksā nodokļi par equity perps peļņu Latvijā?',
        answer: 'Jā, peļņa no tirdzniecības, visticamāk, ir apliekama ar nodokļiem Latvijā. Tā var tikt klasificēta kā kapitāla pieaugums vai citi ienākumi atkarībā no tavas situācijas. Uzturi visu darījumu uzskaiti un konsultējies ar nodokļu speciālistu, kas pārzina kripto/atvasināto instrumentu nodokļus Latvijā.'
      },
      {
        question: 'Kāda ir minimālā summa, lai sāktu?',
        answer: 'Vari sākt ar tikai ~€45 (~$50 USDC). Ar sviru tas dod ekspozīciju $500-3,000 vērtībā akcijām. Iesakām sākt ar mazu summu, lai iemācītos platformu.'
      },
      {
        question: 'Vai varu tirgot ārpus ASV tirgus stundām?',
        answer: 'Jā! Equity perps tirgo 24/7. Vari tirgot ASV akcijas jebkurā laikā - no rīta, vakarā vai vēlu naktī EET. Nav ierobežojumu tirdzniecības stundām.'
      },
      {
        question: 'Vai ir nepieciešams KYC?',
        answer: 'Tirdzniecības platformas (piemēram, Hyperliquid) neprasa KYC. Tomēr tev būs jāiziet KYC biržā (Binance, Kraken, Coinbase), lai sākotnēji konvertētu EUR uz USDC.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Vēl Latvijas ceļveži',
    moreGuidesDesc: 'Esam izveidojuši detalizētus ceļvežus tieši Latvijas tirgotājiem. Iepazīsties:',
    guides: [
      { icon: '€', title: 'Konvertē EUR uz USDC', desc: 'Soli pa solim ar Binance, Kraken', href: '/blog/convert-eur-to-usdc' },
      { icon: '💰', title: 'Tirgo ar €50', desc: 'Maza konta stratēģijas ceļvedis', href: '/blog/trade-stocks-with-50-euros' },
      { icon: '⚖️', title: 'ES regulējums', desc: 'MiCA, nodokļi un atbilstība', href: '/blog/equity-perps-legal-eu' },
      { icon: '🤝', title: 'SEPA ceļvedis', desc: 'EUR pārskaitījumi un labākā prakse', href: '/blog/sepa-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Sāc tirgot ASV akcijas šodien',
    ctaDesc: 'Pievienojies Latvijas tirgotājiem, kas piekļūst NVDA, TSLA un 50+ ASV akcijām 24/7. Nav nepieciešams ASV brokeris. Sāc ar tikai ~€45.',
    getStartedCta: 'Sāc tagad (4% atlaide)',

    // Free Notice
    freeNotice: 'Šī vietne ir',
    freeNotice2: '100% bezmaksas',
    freeNotice3: ' platformu salīdzināšanai, lai tirgotu akcijas 24/7. Reģistrējoties caur mūsu saitēm platformās kā',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'un',
    freeNotice6: 'Lighter',
    freeNotice7: ', tu saņem',
    freeNotice8: '4% atlaidi tirdzniecības komisijām',
    freeNotice9: ' ar mūsu referāla kodu. Tas palīdz atbalstīt vietni, vienlaikus ietaupot naudu katrā darījumā.',

    // Related
    relatedTitle: 'Saistītie ceļveži',
    relatedGuides: [
      { tag: 'FINANSĒŠANA', title: 'Konvertē EUR uz USDC', desc: 'Soli pa solim ar ekrānuzņēmumiem', href: '/blog/convert-eur-to-usdc' },
      { tag: 'CEĻVEDIS', title: 'Tirgo ar €50', desc: 'Maza konta stratēģija', href: '/blog/trade-stocks-with-50-euros' },
      { tag: 'LIKUMDOŠANA', title: 'ES regulējums', desc: 'Regulatīvais pārskats', href: '/blog/equity-perps-legal-eu' }
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
