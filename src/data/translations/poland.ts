export const nativeLang = 'pl';
export const nativeName = 'Polski';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Poland',

    // Hero
    badge: 'Poland Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Poland',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert PLN to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '~200 PLN',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time CET',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Polish Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🌍',
        title: 'No US Account Needed',
        desc: 'Trade US stocks without opening a US brokerage account. No SSN required, no complex foreign paperwork. Works with Polish banks via P2P.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for brokerage approval. Convert PLN to USDC with BLIK and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade Any Time',
        desc: 'US markets open at 15:30 CET. With equity perps, trade whenever you want - morning, afternoon, or midnight.'
      },
      {
        icon: '💰',
        title: 'Start with ~200 PLN',
        desc: 'Most US brokers need $500+ minimum. Here, start with just ~200 PLN (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Poland today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Poland'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert PLN to USDC',
    step2Desc: 'Use Binance P2P with BLIK or bank transfer',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert PLN:',
    binanceP2P: {
      title: 'Binance P2P with BLIK',
      desc: 'Fastest & most popular in Poland',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with PLN (BLIK)', 'Convert USDT to USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Binance Bank Transfer',
      desc: 'For larger amounts via SEPA',
      steps: ['Deposit PLN via SEPA transfer', 'Buy USDC with PLN balance', 'Withdraw to Rabby (Arbitrum)', 'Takes 1-2 business days']
    },
    coindcx: {
      title: 'Przelewy24',
      desc: 'Alternative instant payment',
      steps: ['Use P2P with Przelewy24', 'Buy USDT from sellers', 'Convert to USDC on Binance', '(Slightly higher fees)']
    },
    proTip: 'Pro tip:',
    proTipText: 'BLIK on Binance P2P has the best PLN rates. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed PLN to USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from Poland using equity perps?',
        answer: 'Equity perpetuals exist in a regulatory gray area within the EU. They are decentralized derivatives not specifically regulated by Polish or EU authorities. You are responsible for reporting any trading profits for tax purposes. Many Polish traders use these platforms, but consult a tax advisor for your specific situation.'
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Poland?',
        answer: 'Yes, profits from trading are likely taxable in Poland. They may be classified as capital gains (19% tax) or income depending on your trading activity. Keep records of all trades and consult a Polish tax advisor familiar with crypto/derivatives taxation.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as ~200 PLN (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade outside US market hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night CET. There's no restriction on trading hours, unlike traditional brokers."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on Binance to convert PLN to USDC via P2P trading."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Poland Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Polish traders. Check them out:",
    guides: [
      { icon: 'zl', title: 'Convert PLN to USDC', desc: 'Step-by-step with BLIK, Binance P2P', href: '/blog/wallet-setup-guide' },
      { icon: '💰', title: 'Trade with 200 PLN', desc: 'Small account strategy guide', href: '/blog/how-to-trade-equity-perps' },
      { icon: '⚖️', title: 'EU Regulations', desc: 'Tax and compliance overview', href: '/blog/what-are-equity-perps' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Polish traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just ~200 PLN.',
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
      { tag: 'GUIDE', title: 'Wallet Setup Guide', desc: 'Complete wallet walkthrough', href: '/blog/wallet-setup-guide' },
      { tag: 'TRADING', title: 'How to Trade Equity Perps', desc: 'Trading strategies & tips', href: '/blog/how-to-trade-equity-perps' },
      { tag: 'LEARN', title: 'What Are Equity Perps?', desc: 'Complete beginner guide', href: '/blog/what-are-equity-perps' }
    ]
  },
  pl: {
    // Breadcrumb
    home: 'Strona glowna',
    blog: 'Blog',
    pageTitle: 'Handluj akcjami USA z Polski',

    // Hero
    badge: 'Przewodnik dla Polski',
    noBrokerBadge: 'Bez brokera',
    heroTitle1: 'Handluj akcjami USA',
    heroTitle2: 'z Polski',
    heroDesc: 'Dostep do NVDA, TSLA, AAPL i 50+ akcji USA bez amerykanskiego konta maklerskiego. Zamien PLN na USDC i zacznij handlowac w',
    heroDescHighlight: '15 minut',
    startTrading: 'Zacznij handlowac',
    howItWorks: 'Jak to dziala',

    // Quick Stats
    statMinimumValue: '~200 PLN',
    statMinimum: 'Minimum na start',
    statTimeValue: '24/7',
    statTime: 'O kazdej porze CET',
    statStocksValue: '50+',
    statStocks: 'Akcji USA',
    statKycValue: 'Bez KYC',
    statKyc: 'Na platformie tradingowej',

    // Why Section
    whyTitle: 'Dlaczego polscy traderzy wybieraja Equity Perps',
    whyCards: [
      {
        icon: '🌍',
        title: 'Bez konta w USA',
        desc: 'Handluj akcjami USA bez otwierania amerykanskiego konta maklerskiego. Nie wymagany SSN, bez skomplikowanych dokumentow. Dziala z polskimi bankami przez P2P.'
      },
      {
        icon: '⚡',
        title: 'Natychmiastowy dostep',
        desc: 'Bez czekania tygodniami na zatwierdzenie brokera. Zamien PLN na USDC przez BLIK i zacznij handlowac tego samego dnia.'
      },
      {
        icon: '🕐',
        title: 'Handluj o kazdej porze',
        desc: 'Rynki USA otwieraja sie o 15:30 CET. Z equity perps handluj kiedy chcesz - rano, popoludniu lub o polnocy.'
      },
      {
        icon: '💰',
        title: 'Zacznij od ~200 PLN',
        desc: 'Wiekszosc brokerow USA wymaga $500+ minimum. Tutaj zacznij od ~200 PLN (~$50) i uzywaj dzwigni do kontrolowania wiekszych pozycji.'
      }
    ],

    // Get Started Section
    stepByStep: 'Przewodnik krok po kroku',
    getStartedTitle: 'Zacznij w 15 minut',
    getStartedDesc: 'Wykonaj te kroki, aby dzis zaczac handlowac akcjami USA z Polski.',

    // Step 1: Wallet
    step1Title: 'Zaloz cyfrowy portfel',
    step1Desc: 'Bezplatnie, zajmuje 2 minuty, robisz to tylko raz',
    walletExplainTitle: 'Czym jest cyfrowy portfel?',
    walletExplainDesc: 'Pomysl o tym jak o',
    walletExplainHighlight: 'cyfrowym koncie bankowym, ktore kontrolujesz',
    walletExplainDesc2: '. Zamiast banku trzymajacego twoje pieniadze, sam je przechowujesz uzywajac prostego rozszerzenia przegladarki.',
    walletFeatures: ['Ty kontrolujesz', 'Calkowicie darmowe', '2 min konfiguracji', 'Dziala w Polsce'],
    walletSetupTitle: 'Jak to skonfigurowac:',
    walletSteps: [
      { text: 'Wejdz na', link: 'rabby.io' },
      { text: 'Kliknij "Download" i dodaj do Chrome/Brave' },
      { text: 'Kliknij "Create New Wallet" i ustaw haslo' },
      { text: 'Zapisz 12-slowowa fraze odzyskiwania', warning: 'Przechowuj bezpiecznie i nigdy nie udostepniaj!' }
    ],
    watchVideo: 'Obejrzyj: 2-minutowy przewodnik',

    // Step 2: Funding
    step2Title: 'Zamien PLN na USDC',
    step2Desc: 'Uzyj Binance P2P z BLIK lub przelewem bankowym',
    fundingIntro: 'Potrzebujesz USDC (stablecoin wart $1) do handlu. Oto najlepsze sposoby zamiany PLN:',
    binanceP2P: {
      title: 'Binance P2P z BLIK',
      desc: 'Najszybszy i najpopularniejszy w Polsce',
      steps: ['Otworz aplikacje Binance', 'Wejdz w P2P Trading', 'Kup USDT za PLN (BLIK)', 'Zamien USDT na USDC', 'Wyplac na Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Binance przelew bankowy',
      desc: 'Dla wiekszych kwot przez SEPA',
      steps: ['Wplac PLN przez przelew SEPA', 'Kup USDC za PLN', 'Wyplac na Rabby (Arbitrum)', 'Zajmuje 1-2 dni robocze']
    },
    coindcx: {
      title: 'Przelewy24',
      desc: 'Alternatywna szybka platnosc',
      steps: ['Uzyj P2P z Przelewy24', 'Kup USDT od sprzedawcow', 'Zamien na USDC na Binance', '(Nieco wyzsze oplaty)']
    },
    proTip: 'Pro tip:',
    proTipText: 'BLIK na Binance P2P ma najlepsze kursy PLN. Najpierw kup USDT (wieksza plynnosc), potem zamien na USDC na Binance (za darmo).',
    seeDetailedGuide: 'Zobacz szczegolowy przewodnik PLN do USDC ze zrzutami ekranu',

    // Step 3: Trade
    step3Title: 'Zacznij handlowac',
    step3Desc: 'Polacz sie z Hyperliquid i handluj 50+ akcjami USA',
    tradeSteps: [
      { text: 'Wejdz na', linkText: 'app.hyperliquid.xyz' },
      { text: 'Kliknij "Connect" i wybierz Rabby Wallet' },
      { text: 'Kliknij "Deposit" i przelej swoje USDC' },
      { text: 'Wyszukaj akcje (NVDA, TSLA, AAPL) i otworz pozycje!' }
    ],
    openHyperliquid: 'Otworz Hyperliquid (4% znizki na oplaty)',

    // Popular Stocks
    popularStocksTitle: 'Popularne dostepne akcje USA',
    viewAllStocks: 'Zobacz wszystkie 50+ akcji',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Czesto zadawane pytania',
    faqs: [
      {
        question: 'Czy handel akcjami USA z Polski przez equity perps jest legalny?',
        answer: 'Equity perpetuals istnieja w szarej strefie regulacyjnej w UE. Sa to zdecentralizowane instrumenty pochodne nie objete konkretna regulacja polskich ani unijnych wladz. Jestes odpowiedzialny za zgloszenie zyskow z handlu do celow podatkowych. Wielu polskich traderow korzysta z tych platform, ale skonsultuj sie z doradca podatkowym w swojej sytuacji.'
      },
      {
        question: 'Czy musze placic podatek od zyskow z equity perps w Polsce?',
        answer: 'Tak, zyski z handlu prawdopodobnie podlegaja opodatkowaniu w Polsce. Moga byc sklasyfikowane jako zyski kapitalowe (19% podatku) lub dochod w zaleznosci od aktywnosci handlowej. Prowadz rejestry wszystkich transakcji i skonsultuj sie z polskim doradca podatkowym znajacym opodatkowanie krypto/instrumentow pochodnych.'
      },
      {
        question: 'Jaka jest minimalna kwota na start?',
        answer: 'Mozesz zaczac od ~200 PLN (~$50). Z dzwignia daje ci to ekspozycje na akcje warte $500-3,000. Zalecamy zaczynanie od malych kwot, aby nauczyc sie platformy.'
      },
      {
        question: 'Czy moge handlowac poza godzinami rynku USA?',
        answer: 'Tak! Equity perps dzialaja 24/7. Mozesz handlowac akcjami USA o kazdej porze - rano, wieczorem lub pozno w nocy CET. Nie ma ograniczen czasowych, w przeciwienstwie do tradycyjnych brokerow.'
      },
      {
        question: 'Czy KYC jest wymagane?',
        answer: 'Platformy tradingowe (jak Hyperliquid) nie wymagaja KYC. Jednak bedziesz musial przejsc KYC na Binance, aby zamienic PLN na USDC przez handel P2P.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Wiecej przewodnikow dla Polski',
    moreGuidesDesc: 'Stworylismy szczegolowe przewodniki specjalnie dla polskich traderow. Sprawdz je:',
    guides: [
      { icon: 'zl', title: 'Zamien PLN na USDC', desc: 'Krok po kroku z BLIK, Binance P2P', href: '/blog/wallet-setup-guide' },
      { icon: '💰', title: 'Handluj z 200 PLN', desc: 'Strategia dla malego konta', href: '/blog/how-to-trade-equity-perps' },
      { icon: '⚖️', title: 'Regulacje UE', desc: 'Przeglad podatkow i zgodnosci', href: '/blog/what-are-equity-perps' },
      { icon: '🤝', title: 'Przewodnik P2P', desc: 'Globalne metody P2P i porady bezpieczenstwa', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Zacznij handlowac akcjami USA dzis',
    ctaDesc: 'Dolacz do tysiecy polskich traderow z dostepem do NVDA, TSLA i 50+ akcji USA 24/7. Bez brokera USA. Zacznij od ~200 PLN.',
    getStartedCta: 'Zacznij teraz (4% znizki na oplaty)',

    // Free Notice
    freeNotice: 'Ta strona jest',
    freeNotice2: '100% darmowa',
    freeNotice3: ' do porownywania najlepszych platform do handlu akcjami 24/7. Gdy zapiszesz sie przez nasze linki do platform takich jak',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'i',
    freeNotice6: 'Lighter',
    freeNotice7: ', otrzymujesz',
    freeNotice8: '4% znizki na oplaty tradingowe',
    freeNotice9: ' z naszym kodem polecajacym. Pomaga to wspierac strone, oszczedzajac twoje pieniadze na kazdej transakcji.',

    // Related
    relatedTitle: 'Powiazane przewodniki',
    relatedGuides: [
      { tag: 'PRZEWODNIK', title: 'Przewodnik konfiguracji portfela', desc: 'Kompletny przewodnik po portfelu', href: '/blog/wallet-setup-guide' },
      { tag: 'HANDEL', title: 'Jak handlowac Equity Perps', desc: 'Strategie i porady handlowe', href: '/blog/how-to-trade-equity-perps' },
      { tag: 'NAUKA', title: 'Czym sa Equity Perps?', desc: 'Kompletny przewodnik dla poczatkujacych', href: '/blog/what-are-equity-perps' }
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
