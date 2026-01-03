export const translations = {
  en: {
    badge: "Guide for Polish Traders",
    heroTitle1: "Trade US Stocks",
    heroTitle2: "from Poland",
    heroDesc: "Access NVIDIA, Tesla, Apple with PLN. Start with 200 zł. Trade 24/7 with BLIK.",
    comparePlatforms: "Compare Platforms",
    howItWorks: "How It Works",

    // What are Equity Perps section
    whatArePerpsTitle: "What Are Equity Perpetuals?",
    whatArePerpsSubtitle: "A new way for Polish traders to access US stock markets",
    whatArePerpsContent: "Equity perpetuals (or \"perps\") are derivative contracts that track the price of US stocks like Tesla, Nvidia, and Apple. Unlike traditional stock trading through a Polish broker, equity perps let you trade 24/7 from anywhere in Poland using just a digital wallet and USDC stablecoins.",
    whatArePerpsHow: "How it works:",
    whatArePerpsSteps: [
      "Perps track real stock prices using price feeds (oracles) from major exchanges",
      "You can go long (bet price goes up) or short (bet price goes down)",
      "Use leverage to control larger positions with less capital",
      "Trade anytime — markets never close, even on weekends and holidays",
    ],
    whatArePerpsCta: "No US brokerage account needed. No KYC. Just connect a wallet and start trading.",

    // Why Equity Perps section
    whyPerpsTitle: "Why Polish Traders Choose Equity Perps",
    whyPerpsSubtitle: "Compared to traditional Polish brokerages",
    whyPerpsReasons: [
      {
        icon: '🌍',
        title: 'Global Access from Poland',
        desc: 'Trade US stocks without opening a US brokerage account. No SSN required, no complex foreign account paperwork. Works with Polish bank accounts via P2P.',
      },
      {
        icon: '🕐',
        title: '24/7 Trading',
        desc: 'Traditional US markets are only open 15:30-22:00 CET. Equity perps trade around the clock — react to Tesla earnings at midnight or trade NVIDIA on Sunday morning.',
      },
      {
        icon: '📈',
        title: 'Up to 50x Leverage',
        desc: 'Control a $5,000 Tesla position with just $100. Traditional Polish brokers offer limited leverage on US stocks. Start small and scale up as you learn.',
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

    // Quick benefits (original)
    benefits: [
      { icon: '💰', title: 'Start with 200 zł', desc: '~$50 USDC minimum' },
      { icon: '🕐', title: '24/7 Trading', desc: 'Trade anytime CET' },
      { icon: '📱', title: 'BLIK Ready', desc: 'Instant payments' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Your keys, your coins' },
    ],

    // Enhanced Getting Started section
    getStartedTitle: "How to Get Started",
    getStartedSubtitle: "Complete guide for Polish traders — takes about 15 minutes",

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
    step1Done: "I've set up my wallet",

    step2Title: "Fund Your Wallet with USDC",
    step2Subtitle: "Convert PLN to USDC using Binance P2P",
    step2Methods: [
      {
        name: 'Binance P2P (Recommended)',
        description: 'Buy USDC directly from other users with BLIK',
        steps: [
          'Create a Binance account (free)',
          'Go to P2P Trading → Buy USDC',
          'Select PLN and filter by BLIK',
          'Choose a seller with good ratings',
          'Pay with BLIK, receive USDC',
          'Withdraw to your Rabby wallet on Arbitrum',
        ],
        tip: 'Always use Arbitrum network for lowest fees (~$0.10)',
      },
      {
        name: 'Bank Transfer via Binance',
        description: 'For larger amounts from PKO BP, mBank, etc.',
        steps: [
          'Deposit PLN to Binance via SEPA',
          'Buy USDC with your PLN balance',
          'Withdraw USDC to Rabby on Arbitrum',
        ],
        tip: 'Bank transfers may take 1-2 business days',
      },
    ],
    step2MinAmount: "Start with 200 zł (~$50 USDC)",
    step2Done: "I've funded my wallet",

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

    // Original sections
    stepsTitle: "Get Started in 4 Steps",
    steps: [
      { t: 'Convert PLN to USDC', d: 'Use Binance P2P with BLIK or bank transfer.' },
      { t: 'Choose a Platform', d: 'Compare platforms.', l: '/', lt: 'Compare' },
      { t: 'Connect Wallet', d: 'Use MetaMask or Rabby.' },
      { t: 'Start Trading', d: 'Begin with 2-3x leverage.' },
    ],
    paymentTitle: "Poland Payment Methods",
    digitalPayments: "Digital Payments",
    banks: "Banks",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: 'Do I need a US brokerage account?', answer: 'No. Equity perps are synthetic derivatives that track US stock prices. You trade with USDC on decentralized platforms — no US broker, no SSN, no complex foreign account paperwork.' },
      { question: 'Is this legal in Poland?', answer: 'Equity perps exist in a regulatory gray area. They are decentralized derivatives not specifically regulated in Poland. You are responsible for reporting any trading profits for tax purposes.' },
      { question: 'How do I convert PLN to USDC?', answer: 'The easiest way is Binance P2P with BLIK — you buy USDC directly from other users with instant payment. You can also use bank transfer via Binance or other exchanges that support PLN.' },
      { question: "What's the minimum to start?", answer: 'You can start with as little as 200 zł (~$50 USDC). Fractional trading means you can trade any US stock regardless of its price — no need to buy a full share.' },
      { question: 'What payment methods work from Poland?', answer: 'BLIK is the fastest and most popular for P2P trades. Przelewy24 and direct bank transfers from PKO BP, mBank, Santander, and ING also work well.' },
      { question: 'How is this different from eToro or XTB?', answer: 'Unlike Polish brokers, equity perps offer: 24/7 trading (not just US market hours), up to 50x leverage (vs 5x typical), no KYC required, self-custody of funds, and easier short selling.' },
    ],
    ctaTitle: "Ready to Trade US Stocks?",
    ctaDesc: "Join thousands of Polish traders accessing US markets 24/7.",
    freeNotice: "This site is",
    freeNotice2: "100% free",
    freeNotice3: ". Get",
    freeNotice4: "4% off fees",
    freeNotice5: "through our links.",
  },
  pl: {
    badge: "Przewodnik dla polskich traderów",
    heroTitle1: "Handluj akcjami USA",
    heroTitle2: "z Polski",
    heroDesc: "Dostęp do NVIDIA, Tesla, Apple za PLN. Zacznij od 200 zł. Handluj 24/7 przez BLIK.",
    comparePlatforms: "Porównaj platformy",
    howItWorks: "Jak to działa",

    // What are Equity Perps section
    whatArePerpsTitle: "Czym są Equity Perpetuals?",
    whatArePerpsSubtitle: "Nowy sposób dla polskich traderów na dostęp do rynków amerykańskich",
    whatArePerpsContent: "Equity perpetuals (lub \"perps\") to kontrakty pochodne, które śledzą ceny akcji amerykańskich takich jak Tesla, Nvidia i Apple. W przeciwieństwie do tradycyjnego handlu akcjami przez polskiego brokera, equity perps pozwalają handlować 24/7 z dowolnego miejsca w Polsce używając tylko cyfrowego portfela i stablecoinów USDC.",
    whatArePerpsHow: "Jak to działa:",
    whatArePerpsSteps: [
      "Perps śledzą rzeczywiste ceny akcji używając feedów cenowych (wyroczni) z głównych giełd",
      "Możesz iść long (obstawiać wzrost ceny) lub short (obstawiać spadek ceny)",
      "Używaj dźwigni, aby kontrolować większe pozycje z mniejszym kapitałem",
      "Handluj w dowolnym momencie — rynki nigdy się nie zamykają, nawet w weekendy i święta",
    ],
    whatArePerpsCta: "Nie potrzebujesz amerykańskiego konta maklerskiego. Bez KYC. Po prostu połącz portfel i zacznij handlować.",

    // Why Equity Perps section
    whyPerpsTitle: "Dlaczego polscy traderzy wybierają Equity Perps",
    whyPerpsSubtitle: "W porównaniu do tradycyjnych polskich domów maklerskich",
    whyPerpsReasons: [
      {
        icon: '🌍',
        title: 'Globalny dostęp z Polski',
        desc: 'Handluj akcjami USA bez otwierania amerykańskiego konta maklerskiego. Nie wymagany SSN, bez skomplikowanych zagranicznych dokumentów. Działa z polskimi kontami bankowymi przez P2P.',
      },
      {
        icon: '🕐',
        title: 'Handel 24/7',
        desc: 'Tradycyjne rynki amerykańskie są otwarte tylko 15:30-22:00 CET. Equity perps działają całą dobę — reaguj na wyniki Tesli o północy lub handluj NVIDIA w niedzielny poranek.',
      },
      {
        icon: '📈',
        title: 'Do 50x dźwigni',
        desc: 'Kontroluj pozycję na Tesli wartą $5,000 za jedyne $100. Tradycyjni polscy brokerzy oferują ograniczoną dźwignię na akcjach USA. Zacznij od małych kwot i skaluj w miarę nauki.',
      },
      {
        icon: '⚡',
        title: 'Łatwa sprzedaż krótka',
        desc: 'Myślisz, że akcja spadnie? Shortuj natychmiast. Bez pożyczania akcji, bez opłat za trudno dostępne akcje, bez ograniczeń. Po prostu kliknij sprzedaj i zarabiaj na spadkach.',
      },
      {
        icon: '🔐',
        title: 'Self-Custody',
        desc: 'Twoje środki pozostają w Twoim portfelu. Żaden broker nie trzyma Twoich pieniędzy. Bez limitów wypłat. Bez zamrożeń konta. Ty kontrolujesz swoje aktywa.',
      },
      {
        icon: '💨',
        title: 'Natychmiastowe rozliczenie',
        desc: 'Bez czekania T+2. Zamknij pozycję, a Twoje zyski są dostępne natychmiast. Wypłać do portfela w sekundach, nie dniach.',
      },
    ],

    // Quick benefits (original)
    benefits: [
      { icon: '💰', title: 'Zacznij od 200 zł', desc: '~50$ USDC minimum' },
      { icon: '🕐', title: 'Handel 24/7', desc: 'Handluj o każdej porze' },
      { icon: '📱', title: 'Obsługa BLIK', desc: 'Natychmiastowe płatności' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Twoje klucze, twoje monety' },
    ],

    // Enhanced Getting Started section
    getStartedTitle: "Jak zacząć",
    getStartedSubtitle: "Kompletny przewodnik dla polskich traderów — zajmie około 15 minut",

    step1Title: "Załóż cyfrowy portfel",
    step1Subtitle: "Bezpłatnie, zajmuje 2 minuty, robisz to tylko raz",
    step1WhatIsWallet: "Czym jest cyfrowy portfel?",
    step1WhatIsWalletDesc: "Pomyśl o tym jak o cyfrowym koncie bankowym, które w pełni kontrolujesz. Zamiast banku trzymającego Twoje pieniądze, sam je przechowujesz używając prostego rozszerzenia przeglądarki.",
    step1Features: [
      { icon: '🔐', text: 'Ty kontrolujesz' },
      { icon: '🆓', text: 'Całkowicie darmowe' },
      { icon: '⚡', text: '2 min konfiguracji' },
      { icon: '🌍', text: 'Działa globalnie' },
    ],
    step1Instructions: [
      'Wejdź na rabby.io (portfel, który polecamy)',
      'Kliknij "Download" i dodaj do przeglądarki (Chrome, Firefox, itp.)',
      'Kliknij "Create New Wallet" i ustaw hasło',
      'Zapisz 12-słowną frazę odzyskiwania — przechowuj bezpiecznie i nigdy nie udostępniaj!',
    ],
    step1VideoTitle: "Obejrzyj: 2-minutowy przewodnik",
    step1Done: "Mam już portfel",

    step2Title: "Doładuj portfel USDC",
    step2Subtitle: "Zamień PLN na USDC przez Binance P2P",
    step2Methods: [
      {
        name: 'Binance P2P (Polecane)',
        description: 'Kup USDC bezpośrednio od innych użytkowników przez BLIK',
        steps: [
          'Załóż konto na Binance (bezpłatne)',
          'Wejdź w P2P Trading → Buy USDC',
          'Wybierz PLN i filtruj po BLIK',
          'Wybierz sprzedawcę z dobrymi ocenami',
          'Zapłać BLIK-iem, otrzymaj USDC',
          'Wypłać na portfel Rabby w sieci Arbitrum',
        ],
        tip: 'Zawsze używaj sieci Arbitrum dla najniższych opłat (~$0.10)',
      },
      {
        name: 'Przelew bankowy przez Binance',
        description: 'Dla większych kwot z PKO BP, mBank, itp.',
        steps: [
          'Wpłać PLN na Binance przez SEPA',
          'Kup USDC za PLN',
          'Wypłać USDC na Rabby w sieci Arbitrum',
        ],
        tip: 'Przelewy bankowe mogą zająć 1-2 dni robocze',
      },
    ],
    step2MinAmount: "Zacznij od 200 zł (~$50 USDC)",
    step2Done: "Mam już środki w portfelu",

    step3Title: "Połącz się z Hyperliquid i handluj",
    step3Subtitle: "Najpopularniejsza platforma do equity perps",
    step3Instructions: [
      'Wejdź na app.hyperliquid.xyz',
      'Kliknij "Connect" i wybierz Rabby Wallet',
      'Wpłać USDC na platformę',
      'Wyszukaj akcję (np. NVDA-PERP, TSLA-PERP)',
      'Wybierz Long (cena w górę) lub Short (cena w dół)',
      'Ustaw dźwignię (zacznij od 2-3x)',
      'Wpisz wielkość pozycji i kliknij trade!',
    ],
    step3Tip: "Zacznij od małych pozycji (5-10% konta) podczas nauki.",
    step3Cta: "Zacznij handlować na Hyperliquid",

    // Risk Warning
    riskTitle: "Zrozum ryzyko",
    riskWarnings: [
      { title: 'Dźwignia wzmacnia straty', desc: 'Ta sama dźwignia 10x, która zamienia 5% zysk w 50%, zamienia też 5% stratę w 50% stratę.' },
      { title: 'Likwidacja jest realna', desc: 'Twoja pozycja może zostać automatycznie zamknięta, jeśli rynek pójdzie wystarczająco przeciwko Tobie.' },
      { title: 'Funding rates kosztują', desc: 'Utrzymywanie pozycji kosztuje pieniądze co kilka godzin, szczególnie na popularnych rynkach.' },
      { title: 'Brak własności', desc: 'Handlujesz ekspozycją cenową, nie prawdziwymi akcjami. Bez dywidend, bez prawa głosu.' },
    ],

    // Original sections
    stepsTitle: "Rozpocznij w 4 krokach",
    steps: [
      { t: 'Zamień PLN na USDC', d: 'Użyj Binance P2P z BLIK lub przelewem bankowym.' },
      { t: 'Wybierz platformę', d: 'Porównaj platformy.', l: '/', lt: 'Porównaj' },
      { t: 'Połącz portfel', d: 'Użyj MetaMask lub Rabby.' },
      { t: 'Zacznij handlować', d: 'Zacznij z dźwignią 2-3x.' },
    ],
    paymentTitle: "Metody płatności w Polsce",
    digitalPayments: "Płatności cyfrowe",
    banks: "Banki",
    faqTitle: "Często zadawane pytania",
    faqs: [
      { question: 'Czy potrzebuję amerykańskiego konta maklerskiego?', answer: 'Nie. Equity perps to syntetyczne instrumenty pochodne śledzące ceny akcji USA. Handlujesz za USDC na zdecentralizowanych platformach — bez brokera z USA, bez SSN, bez skomplikowanych dokumentów.' },
      { question: 'Czy to jest legalne w Polsce?', answer: 'Equity perps istnieją w szarej strefie regulacyjnej. Są to zdecentralizowane instrumenty pochodne nie objęte konkretną regulacją w Polsce. Jesteś odpowiedzialny za zgłoszenie zysków z handlu do celów podatkowych.' },
      { question: 'Jak zamienić PLN na USDC?', answer: 'Najłatwiej przez Binance P2P z BLIK — kupujesz USDC bezpośrednio od innych użytkowników z natychmiastową płatnością. Możesz też użyć przelewu bankowego przez Binance lub inne giełdy wspierające PLN.' },
      { question: 'Jaki jest minimalny depozyt?', answer: 'Możesz zacząć już od 200 zł (~$50 USDC). Handel ułamkowy oznacza, że możesz handlować dowolnymi akcjami USA niezależnie od ich ceny — nie musisz kupować całej akcji.' },
      { question: 'Jakie metody płatności działają z Polski?', answer: 'BLIK jest najszybszy i najpopularniejszy do transakcji P2P. Przelewy24 i bezpośrednie przelewy z PKO BP, mBank, Santander i ING też dobrze działają.' },
      { question: 'Czym to się różni od eToro czy XTB?', answer: 'W przeciwieństwie do polskich brokerów, equity perps oferują: handel 24/7 (nie tylko godziny rynku USA), do 50x dźwigni (vs typowe 5x), bez KYC, self-custody środków i łatwiejszy short selling.' },
    ],
    ctaTitle: "Gotowy handlować akcjami USA?",
    ctaDesc: "Dołącz do tysięcy polskich traderów z dostępem do rynków USA 24/7.",
    freeNotice: "Ta strona jest",
    freeNotice2: "100% darmowa",
    freeNotice3: ". Otrzymaj",
    freeNotice4: "4% zniżki",
    freeNotice5: "przez nasze linki.",
  },
};

export const digitalPayments = ['BLIK (Most Popular)', 'Przelewy24', 'PayU', 'Dotpay'];
export const banksList = ['PKO Bank Polski', 'mBank', 'Santander Poland', 'ING Bank Śląski'];
export const nativeLang = 'pl';
export const nativeName = 'Polski';
export const popularStocks = ['NVDA', 'TSLA', 'AAPL', 'META', 'MSFT', 'AMZN'];
