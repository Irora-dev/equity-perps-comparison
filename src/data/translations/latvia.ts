export const translations = {
  en: {
    badge: "Guide for Latvian Traders",
    heroTitle1: "Trade US Stocks",
    heroTitle2: "from Latvia",
    heroDesc: "Access NVIDIA, Tesla, Apple with EUR. Start with €45. Trade 24/7 with SEPA.",
    comparePlatforms: "Compare Platforms",
    howItWorks: "How It Works",

    // What are Equity Perps section
    whatArePerpsTitle: "What Are Equity Perpetuals?",
    whatArePerpsSubtitle: "A new way for Latvian traders to access US stock markets",
    whatArePerpsContent: "Equity perpetuals (or \"perps\") are derivative contracts that track the price of US stocks like Tesla, Nvidia, and Apple. Unlike traditional stock trading through a Latvian broker or EU platform, equity perps let you trade 24/7 from anywhere in Latvia using just a digital wallet and USDC stablecoins.",
    whatArePerpsHow: "How it works:",
    whatArePerpsSteps: [
      "Perps track real stock prices using price feeds (oracles) from major exchanges",
      "You can go long (bet price goes up) or short (bet price goes down)",
      "Use leverage to control larger positions with less capital",
      "Trade anytime — markets never close, even on weekends and holidays",
    ],
    whatArePerpsCta: "No US brokerage account needed. No KYC. Just connect a wallet and start trading.",

    // Why Equity Perps section
    whyPerpsTitle: "Why Latvian Traders Choose Equity Perps",
    whyPerpsSubtitle: "Compared to traditional EU brokerages",
    whyPerpsReasons: [
      {
        icon: '🌍',
        title: 'Global Access from Latvia',
        desc: 'Trade US stocks without opening a US brokerage account. No SSN required, no complex foreign account paperwork. Works with Latvian banks via SEPA.',
      },
      {
        icon: '🕐',
        title: '24/7 Trading',
        desc: 'Traditional US markets are only open 16:30-23:00 EET. Equity perps trade around the clock — react to Tesla earnings at midnight or trade NVIDIA on Sunday morning.',
      },
      {
        icon: '📈',
        title: 'Up to 50x Leverage',
        desc: 'Control a $5,000 Tesla position with just $100. Traditional EU brokers offer limited leverage due to ESMA regulations. Start small and scale up as you learn.',
      },
      {
        icon: '⚡',
        title: 'Easy Short Selling',
        desc: 'Think a stock will drop? Go short instantly. No borrowing shares, no hard-to-borrow fees, no restrictions. Just click sell and profit from falling prices.',
      },
      {
        icon: '🔐',
        title: 'Self-Custody',
        desc: 'Your funds stay in your wallet. No broker holding your money. No withdrawal limits. No account freezes. You control your assets completely.',
      },
      {
        icon: '💨',
        title: 'Instant Settlement',
        desc: 'No T+2 waiting period. Close a position and your profits are available immediately. Withdraw to your wallet in seconds, not days.',
      },
    ],

    benefits: [
      { icon: '💰', title: 'Start with €45', desc: '~$50 USDC minimum' },
      { icon: '🕐', title: '24/7 Trading', desc: 'Trade anytime EET' },
      { icon: '🏦', title: 'SEPA Ready', desc: 'EUR bank transfers' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Your keys, your coins' },
    ],

    // Enhanced Getting Started section
    getStartedTitle: "How to Get Started",
    getStartedSubtitle: "Complete guide for Latvian traders — takes about 15 minutes",

    step1Title: "Set Up Your Digital Wallet",
    step1Subtitle: "Free, takes 2 minutes, and you only do this once",
    step1WhatIsWallet: "What is a digital wallet?",
    step1WhatIsWalletDesc: "Think of it like a digital bank account that you fully control. Instead of a bank holding your money, you hold it yourself using a simple browser extension.",
    step1Features: [
      { icon: '🔐', text: 'You control it' },
      { icon: '🆓', text: 'Completely free' },
      { icon: '⚡', text: '2 min setup' },
      { icon: '🌍', text: 'Works globally' },
    ],
    step1Instructions: [
      'Go to rabby.io (the wallet we recommend)',
      'Click "Download" and add it to your browser (Chrome, Firefox, etc.)',
      'Click "Create New Wallet" and set a password',
      'Write down your 12-word recovery phrase — keep it safe and never share it!',
    ],
    step1VideoTitle: "Watch: 2-Minute Setup Guide",

    step2Title: "Fund Your Wallet with USDC",
    step2Subtitle: "Convert EUR to USDC using SEPA transfers",
    step2Methods: [
      {
        name: 'Binance (Recommended)',
        description: 'Deposit EUR via SEPA, buy USDC',
        steps: [
          'Create a Binance account (free)',
          'Deposit EUR via SEPA from Swedbank/SEB/Citadele',
          'Buy USDC with your EUR balance',
          'Withdraw USDC to your Rabby wallet on Arbitrum',
        ],
        tip: 'SEPA transfers usually arrive same day or next business day',
      },
      {
        name: 'Kraken',
        description: 'EUR deposits with low fees',
        steps: [
          'Create a Kraken account',
          'Deposit EUR via SEPA',
          'Buy USDC',
          'Withdraw to Rabby on Arbitrum',
        ],
        tip: 'Kraken has competitive fees for EU users',
      },
    ],
    step2MinAmount: "Start with €45 (~$50 USDC)",

    step3Title: "Connect to Hyperliquid & Trade",
    step3Subtitle: "The most popular platform for equity perps",
    step3Instructions: [
      'Go to app.hyperliquid.xyz',
      'Click "Connect" and select Rabby Wallet',
      'Deposit your USDC to the platform',
      'Search for a stock (e.g., NVDA-PERP, TSLA-PERP)',
      'Choose Long (price up) or Short (price down)',
      'Set your leverage (start with 2-3x)',
      'Enter position size and click trade!',
    ],
    step3Tip: "Start with small positions (5-10% of your account) while you learn.",
    step3Cta: "Start Trading on Hyperliquid",

    // Risk Warning
    riskTitle: "Understand the Risks",
    riskWarnings: [
      { title: 'Leverage amplifies losses', desc: 'The same 10x that turns 5% into 50% gains also turns 5% losses into 50% losses.' },
      { title: 'Liquidation is real', desc: 'Your position can be closed automatically if it moves against you enough.' },
      { title: 'Funding rates cost money', desc: 'Holding positions costs money every few hours, especially on popular trades.' },
      { title: 'No ownership', desc: "You're trading price exposure, not actual shares. No dividends, no voting rights." },
    ],

    stepsTitle: "Get Started in 4 Steps",
    steps: [
      { t: 'Convert EUR to USDC', d: 'Use Binance or Kraken with SEPA transfer.' },
      { t: 'Choose a Platform', d: 'Compare platforms.', l: '/', lt: 'Compare' },
      { t: 'Connect Wallet', d: 'Use MetaMask or Rabby.' },
      { t: 'Start Trading', d: 'Begin with 2-3x leverage.' },
    ],
    paymentTitle: "Latvia Payment Methods",
    digitalPayments: "Banks",
    banks: "Exchanges",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: 'Do I need a US brokerage account?', answer: 'No. Equity perps are synthetic derivatives that track US stock prices. You trade with USDC on decentralized platforms — no US broker, no SSN, no complex foreign account paperwork.' },
      { question: 'Is this legal in Latvia?', answer: 'Equity perps exist in a regulatory gray area. They are decentralized derivatives not specifically regulated under Latvian law. As an EU member, MiCA regulations may apply in the future. You are responsible for reporting any trading profits for tax purposes.' },
      { question: 'How do I convert EUR to USDC?', answer: 'Use Binance or Kraken with SEPA transfer from your Latvian bank (Swedbank, SEB, Citadele, Luminor). Deposits usually arrive same day or next business day.' },
      { question: "What's the minimum to start?", answer: 'You can start with as little as €45 (~$50 USDC). Fractional trading means you can trade any US stock regardless of its price.' },
      { question: 'What banks work from Latvia?', answer: 'All major Latvian banks support SEPA transfers: Swedbank, SEB banka, Citadele, Luminor. Simply send EUR to Binance or Kraken and buy USDC.' },
      { question: 'How is this different from Interactive Brokers?', answer: 'Unlike traditional brokers, equity perps offer: 24/7 trading (not just US market hours), up to 50x leverage, no KYC required, self-custody of funds, and easier short selling.' },
    ],
    ctaTitle: "Ready to Trade US Stocks?",
    ctaDesc: "Join Latvian traders accessing US markets 24/7.",
    freeNotice: "This site is",
    freeNotice2: "100% free",
    freeNotice3: ". Get",
    freeNotice4: "4% off fees",
    freeNotice5: "through our links.",
  },
  lv: {
    badge: "Ceļvedis Latvijas tirgotājiem",
    heroTitle1: "Tirgo ASV akcijas",
    heroTitle2: "no Latvijas",
    heroDesc: "Piekļūsti NVIDIA, Tesla, Apple ar EUR. Sāc ar €45. Tirgo 24/7 ar SEPA.",
    comparePlatforms: "Salīdzini platformas",
    howItWorks: "Kā tas darbojas",

    // What are Equity Perps section
    whatArePerpsTitle: "Kas ir Equity Perpetuals?",
    whatArePerpsSubtitle: "Jauns veids Latvijas tirgotājiem piekļūt ASV akciju tirgiem",
    whatArePerpsContent: "Equity perpetuals (jeb \"perps\") ir atvasināto instrumentu līgumi, kas seko ASV akciju cenām, piemēram, Tesla, Nvidia un Apple. Atšķirībā no tradicionālās akciju tirdzniecības caur Latvijas brokeri vai ES platformu, equity perps ļauj tirgot 24/7 no jebkuras vietas Latvijā, izmantojot tikai digitālo maku un USDC steiblkoinus.",
    whatArePerpsHow: "Kā tas darbojas:",
    whatArePerpsSteps: [
      "Perps seko reālām akciju cenām, izmantojot cenu plūsmas (orākulus) no galvenajām biržām",
      "Vari iet long (likme uz cenas kāpumu) vai short (likme uz cenas kritumu)",
      "Izmanto sviru, lai kontrolētu lielākas pozīcijas ar mazāku kapitālu",
      "Tirgo jebkurā laikā — tirgi nekad neaizveras, pat nedēļas nogalēs un svētku dienās",
    ],
    whatArePerpsCta: "Nav nepieciešams ASV brokeru konts. Nav KYC. Vienkārši pievieno maku un sāc tirgot.",

    // Why Equity Perps section
    whyPerpsTitle: "Kāpēc Latvijas tirgotāji izvēlas Equity Perps",
    whyPerpsSubtitle: "Salīdzinājumā ar tradicionālajiem ES brokeriem",
    whyPerpsReasons: [
      {
        icon: '🌍',
        title: 'Globāla piekļuve no Latvijas',
        desc: 'Tirgo ASV akcijas bez ASV brokeru konta atvēršanas. Nav nepieciešams SSN, nav sarežģītu ārvalstu kontu dokumentu. Darbojas ar Latvijas bankām caur SEPA.',
      },
      {
        icon: '🕐',
        title: '24/7 tirdzniecība',
        desc: 'Tradicionālie ASV tirgi ir atvērti tikai 16:30-23:00 EET. Equity perps tirgo visu diennakti — reaģē uz Tesla ienākumiem pusnaktī vai tirgo NVIDIA svētdienas rītā.',
      },
      {
        icon: '📈',
        title: 'Līdz 50x svira',
        desc: 'Kontrolē $5,000 Tesla pozīciju ar tikai $100. Tradicionālie ES brokeri piedāvā ierobežotu sviru ESMA regulējuma dēļ. Sāc ar mazu summu un palielini, mācoties.',
      },
      {
        icon: '⚡',
        title: 'Viegla īsā pārdošana',
        desc: 'Domā, ka akcija kritīs? Shortē uzreiz. Nav jāaizņemas akcijas, nav grūti aizņemamu akciju maksas, nav ierobežojumu. Vienkārši spied pārdot un pelni no krītošām cenām.',
      },
      {
        icon: '🔐',
        title: 'Self-Custody',
        desc: 'Tavi līdzekļi paliek tavā makā. Neviens brokeris netur tavus naudu. Nav izņemšanas limitu. Nav konta iesaldēšanas. Tu pilnībā kontrolē savus aktīvus.',
      },
      {
        icon: '💨',
        title: 'Tūlītēja norēķināšanās',
        desc: 'Nav T+2 gaidīšanas perioda. Aizver pozīciju, un tava peļņa ir pieejama nekavējoties. Izņem uz savu maku sekundēs, ne dienās.',
      },
    ],

    benefits: [
      { icon: '💰', title: 'Sāc ar €45', desc: '~$50 USDC minimums' },
      { icon: '🕐', title: '24/7 tirdzniecība', desc: 'Tirgo jebkurā laikā' },
      { icon: '🏦', title: 'SEPA gatavs', desc: 'EUR bankas pārskaitījumi' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Tavas atslēgas, tavas monētas' },
    ],

    // Enhanced Getting Started section
    getStartedTitle: "Kā sākt",
    getStartedSubtitle: "Pilns ceļvedis Latvijas tirgotājiem — aizņem apmēram 15 minūtes",

    step1Title: "Izveido savu digitālo maku",
    step1Subtitle: "Bezmaksas, aizņem 2 minūtes, dari tikai vienreiz",
    step1WhatIsWallet: "Kas ir digitālais maks?",
    step1WhatIsWalletDesc: "Iedomājies to kā digitālu bankas kontu, ko tu pilnībā kontrolē. Banka neuzglabā tavu naudu — tu pats to uzglabā, izmantojot vienkāršu pārlūkprogrammas paplašinājumu.",
    step1Features: [
      { icon: '🔐', text: 'Tu kontrolē' },
      { icon: '🆓', text: 'Pilnīgi bezmaksas' },
      { icon: '⚡', text: '2 min iestatīšana' },
      { icon: '🌍', text: 'Darbojas globāli' },
    ],
    step1Instructions: [
      'Ej uz rabby.io (maks, ko mēs iesakām)',
      'Spied "Download" un pievieno savai pārlūkprogrammai (Chrome, Firefox, utt.)',
      'Spied "Create New Wallet" un iestati paroli',
      'Pieraksti savu 12 vārdu atjaunošanas frāzi — glabā drošībā un nekad nedalies!',
    ],
    step1VideoTitle: "Skaties: 2 minūšu iestatīšanas ceļvedis",

    step2Title: "Papildini maku ar USDC",
    step2Subtitle: "Konvertē EUR uz USDC ar SEPA pārskaitījumiem",
    step2Methods: [
      {
        name: 'Binance (Ieteicams)',
        description: 'Iemaksā EUR ar SEPA, pērc USDC',
        steps: [
          'Izveido Binance kontu (bezmaksas)',
          'Iemaksā EUR ar SEPA no Swedbank/SEB/Citadele',
          'Pērc USDC ar savu EUR atlikumu',
          'Izņem USDC uz savu Rabby maku Arbitrum tīklā',
        ],
        tip: 'SEPA pārskaitījumi parasti pienāk tajā pašā dienā vai nākamajā darba dienā',
      },
      {
        name: 'Kraken',
        description: 'EUR iemaksas ar zemām komisijām',
        steps: [
          'Izveido Kraken kontu',
          'Iemaksā EUR ar SEPA',
          'Pērc USDC',
          'Izņem uz Rabby Arbitrum tīklā',
        ],
        tip: 'Kraken piedāvā konkurētspējīgas komisijas ES lietotājiem',
      },
    ],
    step2MinAmount: "Sāc ar €45 (~$50 USDC)",

    step3Title: "Pievieno Hyperliquid un tirgo",
    step3Subtitle: "Populārākā platforma equity perps",
    step3Instructions: [
      'Ej uz app.hyperliquid.xyz',
      'Spied "Connect" un izvēlies Rabby Wallet',
      'Iemaksā savu USDC platformā',
      'Meklē akciju (piem., NVDA-PERP, TSLA-PERP)',
      'Izvēlies Long (cena aug) vai Short (cena krīt)',
      'Iestati sviru (sāc ar 2-3x)',
      'Ievadi pozīcijas lielumu un spied trade!',
    ],
    step3Tip: "Sāc ar mazām pozīcijām (5-10% no konta) kamēr mācies.",
    step3Cta: "Sāc tirgot Hyperliquid",

    // Risk Warning
    riskTitle: "Izproti riskus",
    riskWarnings: [
      { title: 'Svira pastiprina zaudējumus', desc: 'Tā pati 10x svira, kas pārvērš 5% peļņu 50%, pārvērš arī 5% zaudējumus 50% zaudējumos.' },
      { title: 'Likvidācija ir reāla', desc: 'Tava pozīcija var tikt automātiski slēgta, ja tirgus iet pret tevi pietiekami daudz.' },
      { title: 'Finansēšanas likmes maksā', desc: 'Pozīciju turēšana maksā naudu ik pēc dažām stundām, īpaši populāros tirgos.' },
      { title: 'Nav īpašumtiesību', desc: 'Tu tirgo cenu ekspozīciju, ne īstas akcijas. Nav dividenžu, nav balsstiesību.' },
    ],

    stepsTitle: "Sāc 4 soļos",
    steps: [
      { t: 'Konvertē EUR uz USDC', d: 'Izmanto Binance vai Kraken ar SEPA pārskaitījumu.' },
      { t: 'Izvēlies platformu', d: 'Salīdzini platformas.', l: '/', lt: 'Salīdzini' },
      { t: 'Pievieno maku', d: 'Izmanto MetaMask vai Rabby.' },
      { t: 'Sāc tirgot', d: 'Sāc ar 2-3x sviru.' },
    ],
    paymentTitle: "Latvijas maksājumu metodes",
    digitalPayments: "Bankas",
    banks: "Biržas",
    faqTitle: "Biežāk uzdotie jautājumi",
    faqs: [
      { question: 'Vai man vajag ASV brokeru kontu?', answer: 'Nē. Equity perps ir sintētiski atvasinātie instrumenti, kas seko ASV akciju cenām. Tu tirgo ar USDC decentralizētās platformās — bez ASV brokera, bez SSN, bez sarežģītiem dokumentiem.' },
      { question: 'Vai tas ir legāli Latvijā?', answer: 'Equity perps eksistē regulatīvā pelēkajā zonā. Tie ir decentralizēti atvasinātie instrumenti, kas nav specifiski regulēti Latvijas likumdošanā. Kā ES dalībvalstī, MiCA regulējums var attiekties nākotnē. Tu esi atbildīgs par tirdzniecības peļņas deklarēšanu nodokļu vajadzībām.' },
      { question: 'Kā konvertēt EUR uz USDC?', answer: 'Izmanto Binance vai Kraken ar SEPA pārskaitījumu no savas Latvijas bankas (Swedbank, SEB, Citadele, Luminor). Iemaksas parasti pienāk tajā pašā dienā vai nākamajā darba dienā.' },
      { question: 'Kāds ir minimums, lai sāktu?', answer: 'Vari sākt ar €45 (~$50 USDC). Daļēja tirdzniecība nozīmē, ka vari tirgot jebkuru ASV akciju neatkarīgi no tās cenas.' },
      { question: 'Kādas bankas darbojas no Latvijas?', answer: 'Visas galvenās Latvijas bankas atbalsta SEPA pārskaitījumus: Swedbank, SEB banka, Citadele, Luminor. Vienkārši sūti EUR uz Binance vai Kraken un pērc USDC.' },
      { question: 'Kā tas atšķiras no Interactive Brokers?', answer: 'Atšķirībā no tradicionālajiem brokeriem, equity perps piedāvā: 24/7 tirdzniecību (ne tikai ASV tirgus stundās), līdz 50x sviru, bez KYC, self-custody līdzekļiem un vieglāku īso pārdošanu.' },
    ],
    ctaTitle: "Gatavs tirgot ASV akcijas?",
    ctaDesc: "Pievienojies Latvijas tirgotājiem ar piekļuvi ASV tirgiem 24/7.",
    freeNotice: "Šī vietne ir",
    freeNotice2: "100% bezmaksas",
    freeNotice3: ". Saņem",
    freeNotice4: "4% atlaidi",
    freeNotice5: "caur mūsu saitēm.",
  },
};

export const digitalPayments = ['Swedbank', 'SEB banka', 'Citadele', 'Luminor'];
export const banksList = ['Binance', 'Kraken', 'Coinbase', 'Bitstamp'];
export const nativeLang = 'lv';
export const nativeName = 'Latviešu';
export const popularStocks = ['NVDA', 'TSLA', 'AAPL', 'META', 'MSFT', 'AMZN'];
