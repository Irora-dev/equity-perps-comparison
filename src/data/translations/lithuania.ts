export const translations = {
  en: {
    badge: "Guide for Lithuanian Traders",
    heroTitle1: "Trade US Stocks",
    heroTitle2: "from Lithuania",
    heroDesc: "Access NVIDIA, Tesla, Apple with EUR. Start with €45. Trade 24/7 with SEPA.",
    comparePlatforms: "Compare Platforms",
    howItWorks: "How It Works",

    // What are Equity Perps section
    whatArePerpsTitle: "What Are Equity Perpetuals?",
    whatArePerpsSubtitle: "A new way for Lithuanian traders to access US stock markets",
    whatArePerpsContent: "Equity perpetuals (or \"perps\") are derivative contracts that track the price of US stocks like Tesla, Nvidia, and Apple. Unlike traditional stock trading through a Lithuanian broker or EU platform, equity perps let you trade 24/7 from anywhere in Lithuania using just a digital wallet and USDC stablecoins.",
    whatArePerpsHow: "How it works:",
    whatArePerpsSteps: [
      "Perps track real stock prices using price feeds (oracles) from major exchanges",
      "You can go long (bet price goes up) or short (bet price goes down)",
      "Use leverage to control larger positions with less capital",
      "Trade anytime — markets never close, even on weekends and holidays",
    ],
    whatArePerpsCta: "No US brokerage account needed. No KYC. Just connect a wallet and start trading.",

    // Why Equity Perps section
    whyPerpsTitle: "Why Lithuanian Traders Choose Equity Perps",
    whyPerpsSubtitle: "Compared to traditional EU brokerages",
    whyPerpsReasons: [
      {
        icon: '🌍',
        title: 'Global Access from Lithuania',
        desc: 'Trade US stocks without opening a US brokerage account. No SSN required, no complex foreign account paperwork. Works with Lithuanian banks via SEPA.',
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
    getStartedSubtitle: "Complete guide for Lithuanian traders — takes about 15 minutes",

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
          'Deposit EUR via SEPA from Swedbank/SEB/Luminor',
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
    paymentTitle: "Lithuania Payment Methods",
    digitalPayments: "Banks",
    banks: "Exchanges",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: 'Do I need a US brokerage account?', answer: 'No. Equity perps are synthetic derivatives that track US stock prices. You trade with USDC on decentralized platforms — no US broker, no SSN, no complex foreign account paperwork.' },
      { question: 'Is this legal in Lithuania?', answer: 'Equity perps exist in a regulatory gray area. They are decentralized derivatives not specifically regulated under Lithuanian law. As an EU member, MiCA regulations may apply in the future. You are responsible for reporting any trading profits for tax purposes.' },
      { question: 'How do I convert EUR to USDC?', answer: 'Use Binance or Kraken with SEPA transfer from your Lithuanian bank (Swedbank, SEB bankas, Luminor, Šiaulių bankas). Deposits usually arrive same day or next business day.' },
      { question: "What's the minimum to start?", answer: 'You can start with as little as €45 (~$50 USDC). Fractional trading means you can trade any US stock regardless of its price.' },
      { question: 'What banks work from Lithuania?', answer: 'All major Lithuanian banks support SEPA transfers: Swedbank, SEB bankas, Luminor, Šiaulių bankas. Simply send EUR to Binance or Kraken and buy USDC.' },
      { question: 'How is this different from Interactive Brokers?', answer: 'Unlike traditional brokers, equity perps offer: 24/7 trading (not just US market hours), up to 50x leverage, no KYC required, self-custody of funds, and easier short selling.' },
    ],
    ctaTitle: "Ready to Trade US Stocks?",
    ctaDesc: "Join Lithuanian traders accessing US markets 24/7.",
    freeNotice: "This site is",
    freeNotice2: "100% free",
    freeNotice3: ". Get",
    freeNotice4: "4% off fees",
    freeNotice5: "through our links.",
  },
  lt: {
    badge: "Vadovas Lietuvos prekiautojams",
    heroTitle1: "Prekiaukite JAV akcijomis",
    heroTitle2: "iš Lietuvos",
    heroDesc: "Pasiekite NVIDIA, Tesla, Apple su EUR. Pradėkite nuo €45. Prekiaukite 24/7 su SEPA.",
    comparePlatforms: "Palyginti platformas",
    howItWorks: "Kaip tai veikia",

    // What are Equity Perps section
    whatArePerpsTitle: "Kas yra Equity Perpetuals?",
    whatArePerpsSubtitle: "Naujas būdas Lietuvos prekiautojams pasiekti JAV akcijų rinkas",
    whatArePerpsContent: "Equity perpetuals (arba \"perps\") yra išvestinių finansinių priemonių kontraktai, kurie seka JAV akcijų kainas, tokias kaip Tesla, Nvidia ir Apple. Skirtingai nuo tradicinės akcijų prekybos per Lietuvos brokerį ar ES platformą, equity perps leidžia prekiauti 24/7 iš bet kurios Lietuvos vietos, naudojant tik skaitmeninę piniginę ir USDC stablecoins.",
    whatArePerpsHow: "Kaip tai veikia:",
    whatArePerpsSteps: [
      "Perps seka realias akcijų kainas naudodami kainų srautus (orakulus) iš pagrindinių biržų",
      "Galite eiti long (lažintis, kad kaina kils) arba short (lažintis, kad kaina kris)",
      "Naudokite svertą valdyti didesnes pozicijas su mažesniu kapitalu",
      "Prekiaukite bet kuriuo metu — rinkos niekada neužsidaro, net savaitgaliais ir švenčių dienomis",
    ],
    whatArePerpsCta: "Nereikia JAV brokerio sąskaitos. Nereikia KYC. Tiesiog prijunkite piniginę ir pradėkite prekiauti.",

    // Why Equity Perps section
    whyPerpsTitle: "Kodėl Lietuvos prekiautojai renkasi Equity Perps",
    whyPerpsSubtitle: "Palyginus su tradiciniais ES brokeriais",
    whyPerpsReasons: [
      {
        icon: '🌍',
        title: 'Globalus prieinamumas iš Lietuvos',
        desc: 'Prekiaukite JAV akcijomis be JAV brokerio sąskaitos atidarymo. Nereikia SSN, nereikia sudėtingų užsienio sąskaitų dokumentų. Veikia su Lietuvos bankais per SEPA.',
      },
      {
        icon: '🕐',
        title: '24/7 prekyba',
        desc: 'Tradicinės JAV rinkos veikia tik 16:30-23:00 EET. Equity perps prekiaujama visą parą — reaguokite į Tesla pajamas vidurnaktį arba prekiaukite NVIDIA sekmadienio rytą.',
      },
      {
        icon: '📈',
        title: 'Iki 50x svertas',
        desc: 'Valdykite $5,000 Tesla poziciją su vos $100. Tradiciniai ES brokeriai siūlo ribotą svertą dėl ESMA reguliacijų. Pradėkite nuo mažos sumos ir didinkite, kai mokotės.',
      },
      {
        icon: '⚡',
        title: 'Lengvas short pardavimas',
        desc: 'Manote, kad akcija kris? Shortinkite iš karto. Nereikia skolintis akcijų, nereikia sunkiai randamų akcijų mokesčių, nereikia apribojimų. Tiesiog spauskite parduoti ir uždirbiškite iš krentančių kainų.',
      },
      {
        icon: '🔐',
        title: 'Self-Custody',
        desc: 'Jūsų lėšos lieka jūsų piniginėje. Joks brokeris nelaiko jūsų pinigų. Nėra išėmimo limitų. Nėra sąskaitos įšaldymo. Jūs visiškai kontroliuojate savo turtą.',
      },
      {
        icon: '💨',
        title: 'Momentinis atsiskaitymas',
        desc: 'Nėra T+2 laukimo periodo. Uždarykite poziciją ir jūsų pelnas iš karto prieinamas. Išsiimkite į savo piniginę per sekundes, ne dienas.',
      },
    ],

    benefits: [
      { icon: '💰', title: 'Pradėkite nuo €45', desc: '~$50 USDC minimumas' },
      { icon: '🕐', title: '24/7 prekyba', desc: 'Prekiaukite bet kada' },
      { icon: '🏦', title: 'SEPA paruošta', desc: 'EUR banko pervedimai' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Jūsų raktai, jūsų monetos' },
    ],

    // Enhanced Getting Started section
    getStartedTitle: "Kaip pradėti",
    getStartedSubtitle: "Pilnas vadovas Lietuvos prekiautojams — užtrunka apie 15 minučių",

    step1Title: "Sukurkite savo skaitmeninę piniginę",
    step1Subtitle: "Nemokama, užtrunka 2 minutes, darote tik vieną kartą",
    step1WhatIsWallet: "Kas yra skaitmeninė piniginė?",
    step1WhatIsWalletDesc: "Įsivaizduokite tai kaip skaitmeninę banko sąskaitą, kurią jūs visiškai kontroliuojate. Vietoj to, kad bankas laikytų jūsų pinigus, jūs patys juos laikote naudodami paprastą naršyklės plėtinį.",
    step1Features: [
      { icon: '🔐', text: 'Jūs kontroliuojate' },
      { icon: '🆓', text: 'Visiškai nemokama' },
      { icon: '⚡', text: '2 min nustatymas' },
      { icon: '🌍', text: 'Veikia globaliai' },
    ],
    step1Instructions: [
      'Eikite į rabby.io (piniginė, kurią rekomenduojame)',
      'Spauskite "Download" ir pridėkite prie savo naršyklės (Chrome, Firefox ir kt.)',
      'Spauskite "Create New Wallet" ir nustatykite slaptažodį',
      'Užsirašykite savo 12 žodžių atkūrimo frazę — saugokite ją ir niekada nesidalinkite!',
    ],
    step1VideoTitle: "Žiūrėkite: 2 minučių nustatymo vadovas",

    step2Title: "Papildykite piniginę USDC",
    step2Subtitle: "Konvertuokite EUR į USDC naudojant SEPA pervedimus",
    step2Methods: [
      {
        name: 'Binance (Rekomenduojama)',
        description: 'Įmokėkite EUR per SEPA, pirkite USDC',
        steps: [
          'Sukurkite Binance paskyrą (nemokama)',
          'Įmokėkite EUR per SEPA iš Swedbank/SEB/Luminor',
          'Pirkite USDC su savo EUR likučiu',
          'Išsiimkite USDC į savo Rabby piniginę Arbitrum tinkle',
        ],
        tip: 'SEPA pervedimai paprastai ateina tą pačią dieną arba kitą darbo dieną',
      },
      {
        name: 'Kraken',
        description: 'EUR įmokos su mažais mokesčiais',
        steps: [
          'Sukurkite Kraken paskyrą',
          'Įmokėkite EUR per SEPA',
          'Pirkite USDC',
          'Išsiimkite į Rabby Arbitrum tinkle',
        ],
        tip: 'Kraken turi konkurencingus mokesčius ES vartotojams',
      },
    ],
    step2MinAmount: "Pradėkite nuo €45 (~$50 USDC)",

    step3Title: "Prisijunkite prie Hyperliquid ir prekiaukite",
    step3Subtitle: "Populiariausia platforma equity perps",
    step3Instructions: [
      'Eikite į app.hyperliquid.xyz',
      'Spauskite "Connect" ir pasirinkite Rabby Wallet',
      'Įmokėkite savo USDC į platformą',
      'Ieškokite akcijos (pvz., NVDA-PERP, TSLA-PERP)',
      'Pasirinkite Long (kaina kyla) arba Short (kaina krenta)',
      'Nustatykite savo svertą (pradėkite nuo 2-3x)',
      'Įveskite pozicijos dydį ir spauskite trade!',
    ],
    step3Tip: "Pradėkite su mažomis pozicijomis (5-10% savo sąskaitos) kol mokotės.",
    step3Cta: "Pradėti prekiauti Hyperliquid",

    // Risk Warning
    riskTitle: "Supraskite rizikas",
    riskWarnings: [
      { title: 'Svertas padidina nuostolius', desc: 'Tas pats 10x, kuris paverčia 5% į 50% pelną, taip pat paverčia 5% nuostolius į 50% nuostolius.' },
      { title: 'Likvidacija yra reali', desc: 'Jūsų pozicija gali būti automatiškai uždaryta, jei rinka pakankamai pajuda prieš jus.' },
      { title: 'Finansavimo normos kainuoja', desc: 'Pozicijų laikymas kainuoja pinigų kas kelias valandas, ypač populiariose prekybose.' },
      { title: 'Nėra nuosavybės', desc: 'Jūs prekiaujate kainos ekspozicija, ne tikromis akcijomis. Nėra dividendų, nėra balsavimo teisių.' },
    ],

    stepsTitle: "Pradėkite 4 žingsniais",
    steps: [
      { t: 'Konvertuokite EUR į USDC', d: 'Naudokite Binance arba Kraken su SEPA pervedimu.' },
      { t: 'Pasirinkite platformą', d: 'Palyginkite platformas.', l: '/', lt: 'Palyginti' },
      { t: 'Prijunkite piniginę', d: 'Naudokite MetaMask arba Rabby.' },
      { t: 'Pradėkite prekiauti', d: 'Pradėkite su 2-3x svertu.' },
    ],
    paymentTitle: "Lietuvos mokėjimo būdai",
    digitalPayments: "Bankai",
    banks: "Biržos",
    faqTitle: "Dažnai užduodami klausimai",
    faqs: [
      { question: 'Ar man reikia JAV brokerio sąskaitos?', answer: 'Ne. Equity perps yra sintetiniai išvestiniai instrumentai, kurie seka JAV akcijų kainas. Prekiaujate su USDC decentralizuotose platformose — be JAV brokerio, be SSN, be sudėtingų dokumentų.' },
      { question: 'Ar tai legalu Lietuvoje?', answer: 'Equity perps egzistuoja reguliacinėje pilkojoje zonoje. Tai decentralizuoti išvestiniai instrumentai, kurie nėra konkrečiai reguliuojami Lietuvos įstatymais. Kaip ES narė, MiCA reguliacija gali būti taikoma ateityje. Jūs esate atsakingi už prekybos pelno deklaravimą mokesčių tikslais.' },
      { question: 'Kaip konvertuoti EUR į USDC?', answer: 'Naudokite Binance arba Kraken su SEPA pervedimu iš savo Lietuvos banko (Swedbank, SEB bankas, Luminor, Šiaulių bankas). Įmokos paprastai ateina tą pačią dieną arba kitą darbo dieną.' },
      { question: 'Koks minimalus kiekis pradėti?', answer: 'Galite pradėti nuo €45 (~$50 USDC). Dalinė prekyba reiškia, kad galite prekiauti bet kuria JAV akcija, nepriklausomai nuo jos kainos.' },
      { question: 'Kokie bankai veikia iš Lietuvos?', answer: 'Visi pagrindiniai Lietuvos bankai palaiko SEPA pervedimus: Swedbank, SEB bankas, Luminor, Šiaulių bankas. Tiesiog siųskite EUR į Binance arba Kraken ir pirkite USDC.' },
      { question: 'Kuo tai skiriasi nuo Interactive Brokers?', answer: 'Skirtingai nuo tradicinių brokerių, equity perps siūlo: 24/7 prekybą (ne tik JAV rinkos valandas), iki 50x svertą, be KYC, self-custody lėšas ir lengvesnį short pardavimą.' },
    ],
    ctaTitle: "Pasiruošę prekiauti JAV akcijomis?",
    ctaDesc: "Prisijunkite prie Lietuvos prekiautojų, pasiekiančių JAV rinkas 24/7.",
    freeNotice: "Ši svetainė yra",
    freeNotice2: "100% nemokama",
    freeNotice3: ". Gaukite",
    freeNotice4: "4% nuolaidą",
    freeNotice5: "per mūsų nuorodas.",
  },
};

export const digitalPayments = ['Swedbank', 'SEB bankas', 'Luminor', 'Šiaulių bankas'];
export const banksList = ['Binance', 'Kraken', 'Coinbase', 'Bitstamp'];
export const nativeLang = 'lt';
export const nativeName = 'Lietuvių';
export const popularStocks = ['NVDA', 'TSLA', 'AAPL', 'META', 'MSFT', 'AMZN'];
