'use client';

import { useState } from 'react';
import Link from 'next/link';

type Lang = 'pl' | 'en';

const translations = {
  pl: {
    // Meta/SEO
    pageTitle: 'Jak Zamienic PLN na USDC',
    pageDescription: 'Kompletny przewodnik jak zamienic PLN na USDC w Polsce. Porownaj metody: Binance, Kraken, Zonda. Uzyj BLIK, Przelewy24, przelew bankowy.',

    // Breadcrumb
    home: 'Strona glowna',
    blog: 'Blog',
    currentPage: 'Jak Zamienic PLN na USDC',

    // Hero
    badge: 'Przewodnik dla Polski',
    fundingBadge: 'Przewodnik finansowania',
    heroTitle: 'Jak Zamienic PLN na USDC',
    heroSubtitle: 'Kompletny przewodnik zamiany zlotych na USDC',
    heroDesc: 'Porownaj najlepsze metody zamiany PLN na USDC w Polsce. BLIK, Przelewy24, przelew bankowy - znajdz najszybsza i najtansza opcje.',

    // Quick Stats
    statFastestValue: '5-15 min',
    statFastest: 'Najszybsza metoda',
    statCheapestValue: '~0.1%',
    statCheapest: 'Najnizsze oplaty',
    statMinValue: '~50 PLN',
    statMin: 'Minimum',
    statMethodsValue: '7+',
    statMethods: 'Metod platnosci',

    // Comparison Table
    comparisonTitle: 'Porownanie Platform',
    comparisonSubtitle: 'Znajdz najlepsza platforme dla Twoich potrzeb',
    tableHeaders: {
      platform: 'Platforma',
      fees: 'Oplaty',
      speed: 'Szybkosc',
      minAmount: 'Minimum',
      payments: 'Platnosci',
      bestFor: 'Najlepsze dla'
    },
    platforms: [
      {
        name: 'Binance (SEPA)',
        tag: 'Najlepsze kursy',
        color: 'yellow',
        fees: '~0.1-0.5%',
        speed: '5-15 min',
        minAmount: '~50 PLN',
        payments: 'BLIK, SEPA, P2P',
        bestFor: 'Regularne transakcje, najlepsze kursy'
      },
      {
        name: 'Kraken',
        tag: 'Najbezpieczniejsza',
        color: 'purple',
        fees: '~0.2-1%',
        speed: '10-30 min',
        minAmount: '~100 PLN',
        payments: 'SEPA, Przelew',
        bestFor: 'Bezpieczenstwo, wieksze kwoty'
      },
      {
        name: 'Zonda (BitBay)',
        tag: 'Polska gielda',
        color: 'red',
        fees: '~0.3-1.5%',
        speed: '5-20 min',
        minAmount: '~20 PLN',
        payments: 'BLIK, P24, PKO, mBank',
        bestFor: 'Polscy poczatkujacy, zlotowki'
      }
    ],
    recommendationTitle: 'Rekomendacja:',
    recommendationText: 'Dla najlepszych kursow uzyj Binance P2P z BLIK. Kup najpierw USDT (wieksza plynnosc), potem zamien na USDC za darmo na Binance.',

    // Step by Step
    stepsTitle: 'Instrukcja Krok po Kroku',
    stepsSubtitle: 'Wybierz metode i postepuj zgodnie z instrukcja',

    // Binance Method
    binanceTitle: 'Metoda Binance P2P (Najlepsze kursy)',
    binanceSteps: [
      {
        title: 'Zaloz konto na Binance',
        desc: 'Wejdz na binance.com i zarejestruj sie. Zweryfikuj tozsamosc (KYC).',
        note: 'Weryfikacja trwa zwykle 10-30 minut'
      },
      {
        title: 'Wejdz w P2P Trading',
        desc: 'Otworz aplikacje Binance, kliknij "P2P" lub "Trade" i "P2P"',
        note: 'P2P oznacza kupowanie bezposrednio od innych uzytkownikow'
      },
      {
        title: 'Kup USDT za PLN',
        items: [
          'Wybierz "Buy" i "USDT"',
          'Wybierz metode platnosci: BLIK (najszybsza) lub przelew',
          'Wpisz kwote w PLN',
          'Wybierz sprzedawce z wysoka ocena (98%+)',
          'Kliknij "Buy" i postepuj zgodnie z instrukcja'
        ],
        tip: 'Dlaczego najpierw USDT? Wiecej sprzedawcow = lepsze kursy. USDC zamienimy w nastepnym kroku (za darmo).'
      },
      {
        title: 'Zamien USDT na USDC (Za darmo)',
        items: [
          'Wejdz w "Trade" i "Convert"',
          'Z: USDT na: USDC',
          'Wpisz kwote i kliknij "Preview Conversion"',
          'Potwierdz - to jest darmowe i natychmiastowe!'
        ]
      },
      {
        title: 'Wyplac USDC do portfela',
        items: [
          'Wejdz w "Wallet" i "Withdraw"',
          'Wybierz USDC',
          'Wklej adres portfela Rabby',
          'Wybierz siec: Arbitrum One (najnizsze oplaty ~$0.10)',
          'Potwierdz z 2FA'
        ],
        tip: 'Zawsze uzywaj sieci Arbitrum dla najnizszych oplat. Srodki docieraja w 1-5 minut.'
      }
    ],

    // Kraken Method
    krakenTitle: 'Metoda Kraken (Najbezpieczniejsza)',
    krakenSteps: [
      {
        title: 'Zaloz konto na Kraken',
        desc: 'Wejdz na kraken.com i zarejestruj sie. Przejdz weryfikacje KYC.',
        note: 'Kraken jest jedna z najbezpieczniejszych gield na swiecie'
      },
      {
        title: 'Wplac PLN przez SEPA',
        items: [
          'Wejdz w "Funding" i "Deposit"',
          'Wybierz PLN lub EUR',
          'Wykonaj przelew SEPA z polskiego banku',
          'Srodki zazwyczaj docieraja w 1-2 dni robocze'
        ]
      },
      {
        title: 'Kup USDC',
        items: [
          'Wejdz w "Trade"',
          'Wyszukaj pare USDC/EUR lub USDC/USD',
          'Zloz zlecenie kupna',
          'USDC pojawi sie w portfelu'
        ]
      },
      {
        title: 'Wyplac USDC',
        items: [
          'Wejdz w "Funding" i "Withdraw"',
          'Wybierz USDC',
          'Wpisz adres portfela i wybierz siec Arbitrum',
          'Potwierdz wyplate'
        ]
      }
    ],

    // Zonda Method
    zondaTitle: 'Metoda Zonda (Polska gielda)',
    zondaSteps: [
      {
        title: 'Zaloz konto na Zonda',
        desc: 'Wejdz na zondaglobal.com (dawniej BitBay). Polska gielda z polska obsluga.',
        note: 'Zonda to najwieksza polska gielda kryptowalut'
      },
      {
        title: 'Wplac PLN',
        items: [
          'Wejdz w "Portfel" i "Wplac"',
          'Wybierz PLN',
          'Uzyj BLIK, Przelewy24 lub przelew z PKO BP/mBank/Santander/ING',
          'BLIK - natychmiastowo, przelew - do kilku godzin'
        ]
      },
      {
        title: 'Kup USDT lub USDC',
        items: [
          'Wejdz w "Gielda"',
          'Wyszukaj USDT/PLN lub USDC/PLN',
          'Zloz zlecenie kupna',
          'Jezeli kupiles USDT, zamien na USDC'
        ]
      },
      {
        title: 'Wyplac do portfela',
        items: [
          'Wejdz w "Portfel" i "Wyplac"',
          'Wybierz USDC',
          'Wpisz adres portfela Rabby',
          'Wybierz siec z najnizszymi oplatami'
        ]
      }
    ],

    // Payment Methods
    paymentTitle: 'Metody Platnosci w Polsce',
    paymentSubtitle: 'Wszystkie sposoby wplaty PLN na gieldy',
    paymentMethods: [
      {
        name: 'BLIK',
        icon: 'B',
        speed: 'Natychmiastowo',
        fees: 'Zazwyczaj 0%',
        desc: 'Najpopularniejsza metoda w Polsce. Platnosc przez telefon w kilka sekund.',
        supported: ['Binance P2P', 'Zonda']
      },
      {
        name: 'Przelewy24',
        icon: 'P24',
        speed: 'Natychmiastowo',
        fees: '~0-1%',
        desc: 'Szybkie przelewy online. Obsluguje wiekszosc polskich bankow.',
        supported: ['Zonda', 'Niektore P2P']
      },
      {
        name: 'Przelew SEPA',
        icon: 'SEPA',
        speed: '1-2 dni robocze',
        fees: 'Zazwyczaj 0%',
        desc: 'Standardowy przelew europejski. Najlepszy dla wiekszych kwot.',
        supported: ['Binance', 'Kraken', 'Zonda']
      },
      {
        name: 'PKO BP',
        icon: 'PKO',
        speed: '5 min - kilka godzin',
        fees: 'Zalezy od banku',
        desc: 'Przelew z najwiekszego polskiego banku.',
        supported: ['Zonda', 'P2P']
      },
      {
        name: 'mBank',
        icon: 'mB',
        speed: '5 min - kilka godzin',
        fees: 'Zalezy od banku',
        desc: 'Popularny bank internetowy w Polsce.',
        supported: ['Zonda', 'P2P']
      },
      {
        name: 'Santander',
        icon: 'SAN',
        speed: '5 min - kilka godzin',
        fees: 'Zalezy od banku',
        desc: 'Miedzynarodowy bank z silna obecnoscia w Polsce.',
        supported: ['Zonda', 'P2P']
      },
      {
        name: 'ING',
        icon: 'ING',
        speed: '5 min - kilka godzin',
        fees: 'Zalezy od banku',
        desc: 'Popularny bank z dobrym systemem online.',
        supported: ['Zonda', 'P2P']
      }
    ],

    // Pro Tips
    tipsTitle: 'Porady Ekspertow',
    tips: [
      {
        icon: '1',
        title: 'Uzywaj BLIK dla najszybszych transakcji',
        desc: 'BLIK na Binance P2P lub Zonda pozwala zamienic PLN na USDC w 5-15 minut. Idealny dla malych i srednich kwot.'
      },
      {
        icon: '2',
        title: 'Kupuj USDT najpierw, potem zamien na USDC',
        desc: 'USDT ma wieksza plynnosc w PLN - wiecej sprzedawcow i lepsze kursy. Zamiana USDT na USDC na Binance jest darmowa.'
      },
      {
        icon: '3',
        title: 'Wyplacaj przez siec Arbitrum',
        desc: 'Arbitrum One ma najnizsze oplaty wyplaty (~$0.10 vs $5-20 na Ethereum). Srodki docieraja w 1-5 minut.'
      },
      {
        icon: '4',
        title: 'Weryfikuj sprzedawcow P2P',
        desc: 'Na Binance P2P wybieraj sprzedawcow z ocena 98%+ i duza liczba transakcji (500+). Unikaj nowych kont.'
      },
      {
        icon: '5',
        title: 'Handluj w godzinach pracy bankow',
        desc: 'Najlepsze kursy P2P sa 9:00-18:00 w dni robocze gdy wiecej sprzedawcow jest aktywnych.'
      },
      {
        icon: '6',
        title: 'Zachowuj potwierdzenia transakcji',
        desc: 'Robiac zrzuty ekranu wszystkich transakcji - przyda sie do celow podatkowych i w razie sporow.'
      }
    ],

    // Example Calculation
    exampleTitle: 'Przykladowa kalkulacja: 1000 PLN',
    exampleSteps: [
      { from: '1000 PLN', to: '~238 USDT', desc: '(przy kursie ~4.20 PLN/USDT)' },
      { from: '238 USDT', to: '238 USDC', desc: '(darmowa konwersja na Binance)' },
      { from: 'Oplata wyplaty', to: '~$0.10', desc: '(siec Arbitrum)' },
      { from: 'Otrzymujesz', to: '~$237.90 USDC', desc: '' }
    ],

    // CTA
    ctaTitle: 'Gotowy do zamiany PLN na USDC?',
    ctaDesc: 'Po zamianie PLN na USDC mozesz handlowac akcjami USA 24/7 na platformach takich jak Hyperliquid.',
    ctaButton: 'Zacznij handlowac akcjami USA',
    ctaSecondary: 'Przewodnik handlu z Polski',

    // Free Notice
    freeNotice: 'Ta strona jest',
    freeNotice2: '100% darmowa',
    freeNotice3: '. Gdy zapiszesz sie przez nasze linki, otrzymujesz',
    freeNotice4: '4% znizki na oplaty tradingowe',
    freeNotice5: '. Pomaga to wspierac strone oszczedzajac Twoje pieniadze.'
  },
  en: {
    // Meta/SEO
    pageTitle: 'How to Convert PLN to USDC',
    pageDescription: 'Complete guide on how to convert PLN to USDC in Poland. Compare methods: Binance, Kraken, Zonda. Use BLIK, Przelewy24, bank transfer.',

    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    currentPage: 'Convert PLN to USDC',

    // Hero
    badge: 'Poland Guide',
    fundingBadge: 'Funding Guide',
    heroTitle: 'How to Convert PLN to USDC',
    heroSubtitle: 'Complete guide to converting Polish Zloty to USDC',
    heroDesc: 'Compare the best methods for converting PLN to USDC in Poland. BLIK, Przelewy24, bank transfer - find the fastest and cheapest option.',

    // Quick Stats
    statFastestValue: '5-15 min',
    statFastest: 'Fastest Method',
    statCheapestValue: '~0.1%',
    statCheapest: 'Lowest Fees',
    statMinValue: '~50 PLN',
    statMin: 'Minimum',
    statMethodsValue: '7+',
    statMethods: 'Payment Methods',

    // Comparison Table
    comparisonTitle: 'Platform Comparison',
    comparisonSubtitle: 'Find the best platform for your needs',
    tableHeaders: {
      platform: 'Platform',
      fees: 'Fees',
      speed: 'Speed',
      minAmount: 'Minimum',
      payments: 'Payments',
      bestFor: 'Best For'
    },
    platforms: [
      {
        name: 'Binance (SEPA)',
        tag: 'Best Rates',
        color: 'yellow',
        fees: '~0.1-0.5%',
        speed: '5-15 min',
        minAmount: '~50 PLN',
        payments: 'BLIK, SEPA, P2P',
        bestFor: 'Regular transactions, best rates'
      },
      {
        name: 'Kraken',
        tag: 'Most Secure',
        color: 'purple',
        fees: '~0.2-1%',
        speed: '10-30 min',
        minAmount: '~100 PLN',
        payments: 'SEPA, Transfer',
        bestFor: 'Security, larger amounts'
      },
      {
        name: 'Zonda (BitBay)',
        tag: 'Polish Exchange',
        color: 'red',
        fees: '~0.3-1.5%',
        speed: '5-20 min',
        minAmount: '~20 PLN',
        payments: 'BLIK, P24, PKO, mBank',
        bestFor: 'Polish beginners, PLN deposits'
      }
    ],
    recommendationTitle: 'Recommendation:',
    recommendationText: 'For best rates use Binance P2P with BLIK. Buy USDT first (more liquidity), then convert to USDC for free on Binance.',

    // Step by Step
    stepsTitle: 'Step-by-Step Instructions',
    stepsSubtitle: 'Choose a method and follow the instructions',

    // Binance Method
    binanceTitle: 'Binance P2P Method (Best Rates)',
    binanceSteps: [
      {
        title: 'Create Binance Account',
        desc: 'Go to binance.com and sign up. Complete identity verification (KYC).',
        note: 'Verification usually takes 10-30 minutes'
      },
      {
        title: 'Go to P2P Trading',
        desc: 'Open Binance app, click "P2P" or "Trade" then "P2P"',
        note: 'P2P means buying directly from other users'
      },
      {
        title: 'Buy USDT with PLN',
        items: [
          'Select "Buy" and "USDT"',
          'Choose payment method: BLIK (fastest) or transfer',
          'Enter amount in PLN',
          'Pick seller with high rating (98%+)',
          'Click "Buy" and follow instructions'
        ],
        tip: 'Why USDT first? More sellers = better rates. We\'ll convert to USDC in the next step (free).'
      },
      {
        title: 'Convert USDT to USDC (Free)',
        items: [
          'Go to "Trade" then "Convert"',
          'From: USDT to: USDC',
          'Enter amount and click "Preview Conversion"',
          'Confirm - this is free and instant!'
        ]
      },
      {
        title: 'Withdraw USDC to Wallet',
        items: [
          'Go to "Wallet" then "Withdraw"',
          'Select USDC',
          'Paste your Rabby wallet address',
          'Select network: Arbitrum One (lowest fees ~$0.10)',
          'Confirm with 2FA'
        ],
        tip: 'Always use Arbitrum network for lowest fees. Funds arrive in 1-5 minutes.'
      }
    ],

    // Kraken Method
    krakenTitle: 'Kraken Method (Most Secure)',
    krakenSteps: [
      {
        title: 'Create Kraken Account',
        desc: 'Go to kraken.com and sign up. Complete KYC verification.',
        note: 'Kraken is one of the most secure exchanges in the world'
      },
      {
        title: 'Deposit PLN via SEPA',
        items: [
          'Go to "Funding" then "Deposit"',
          'Select PLN or EUR',
          'Make SEPA transfer from your Polish bank',
          'Funds usually arrive in 1-2 business days'
        ]
      },
      {
        title: 'Buy USDC',
        items: [
          'Go to "Trade"',
          'Search for USDC/EUR or USDC/USD pair',
          'Place buy order',
          'USDC will appear in your wallet'
        ]
      },
      {
        title: 'Withdraw USDC',
        items: [
          'Go to "Funding" then "Withdraw"',
          'Select USDC',
          'Enter wallet address and select Arbitrum network',
          'Confirm withdrawal'
        ]
      }
    ],

    // Zonda Method
    zondaTitle: 'Zonda Method (Polish Exchange)',
    zondaSteps: [
      {
        title: 'Create Zonda Account',
        desc: 'Go to zondaglobal.com (formerly BitBay). Polish exchange with Polish support.',
        note: 'Zonda is the largest Polish crypto exchange'
      },
      {
        title: 'Deposit PLN',
        items: [
          'Go to "Wallet" then "Deposit"',
          'Select PLN',
          'Use BLIK, Przelewy24 or transfer from PKO BP/mBank/Santander/ING',
          'BLIK - instant, transfer - up to a few hours'
        ]
      },
      {
        title: 'Buy USDT or USDC',
        items: [
          'Go to "Exchange"',
          'Search for USDT/PLN or USDC/PLN',
          'Place buy order',
          'If you bought USDT, convert to USDC'
        ]
      },
      {
        title: 'Withdraw to Wallet',
        items: [
          'Go to "Wallet" then "Withdraw"',
          'Select USDC',
          'Enter your Rabby wallet address',
          'Select network with lowest fees'
        ]
      }
    ],

    // Payment Methods
    paymentTitle: 'Payment Methods in Poland',
    paymentSubtitle: 'All ways to deposit PLN to exchanges',
    paymentMethods: [
      {
        name: 'BLIK',
        icon: 'B',
        speed: 'Instant',
        fees: 'Usually 0%',
        desc: 'Most popular payment method in Poland. Pay via phone in seconds.',
        supported: ['Binance P2P', 'Zonda']
      },
      {
        name: 'Przelewy24',
        icon: 'P24',
        speed: 'Instant',
        fees: '~0-1%',
        desc: 'Fast online transfers. Supports most Polish banks.',
        supported: ['Zonda', 'Some P2P']
      },
      {
        name: 'SEPA Transfer',
        icon: 'SEPA',
        speed: '1-2 business days',
        fees: 'Usually 0%',
        desc: 'Standard European transfer. Best for larger amounts.',
        supported: ['Binance', 'Kraken', 'Zonda']
      },
      {
        name: 'PKO BP',
        icon: 'PKO',
        speed: '5 min - few hours',
        fees: 'Depends on bank',
        desc: 'Transfer from Poland\'s largest bank.',
        supported: ['Zonda', 'P2P']
      },
      {
        name: 'mBank',
        icon: 'mB',
        speed: '5 min - few hours',
        fees: 'Depends on bank',
        desc: 'Popular online bank in Poland.',
        supported: ['Zonda', 'P2P']
      },
      {
        name: 'Santander',
        icon: 'SAN',
        speed: '5 min - few hours',
        fees: 'Depends on bank',
        desc: 'International bank with strong presence in Poland.',
        supported: ['Zonda', 'P2P']
      },
      {
        name: 'ING',
        icon: 'ING',
        speed: '5 min - few hours',
        fees: 'Depends on bank',
        desc: 'Popular bank with good online system.',
        supported: ['Zonda', 'P2P']
      }
    ],

    // Pro Tips
    tipsTitle: 'Expert Tips',
    tips: [
      {
        icon: '1',
        title: 'Use BLIK for fastest transactions',
        desc: 'BLIK on Binance P2P or Zonda lets you convert PLN to USDC in 5-15 minutes. Ideal for small and medium amounts.'
      },
      {
        icon: '2',
        title: 'Buy USDT first, then convert to USDC',
        desc: 'USDT has more PLN liquidity - more sellers and better rates. USDT to USDC conversion on Binance is free.'
      },
      {
        icon: '3',
        title: 'Withdraw via Arbitrum network',
        desc: 'Arbitrum One has lowest withdrawal fees (~$0.10 vs $5-20 on Ethereum). Funds arrive in 1-5 minutes.'
      },
      {
        icon: '4',
        title: 'Verify P2P sellers',
        desc: 'On Binance P2P choose sellers with 98%+ rating and high transaction count (500+). Avoid new accounts.'
      },
      {
        icon: '5',
        title: 'Trade during banking hours',
        desc: 'Best P2P rates are 9:00-18:00 on weekdays when more sellers are active.'
      },
      {
        icon: '6',
        title: 'Keep transaction records',
        desc: 'Screenshot all transactions - useful for tax purposes and in case of disputes.'
      }
    ],

    // Example Calculation
    exampleTitle: 'Example calculation: 1000 PLN',
    exampleSteps: [
      { from: '1000 PLN', to: '~238 USDT', desc: '(at ~4.20 PLN/USDT rate)' },
      { from: '238 USDT', to: '238 USDC', desc: '(free conversion on Binance)' },
      { from: 'Withdrawal fee', to: '~$0.10', desc: '(Arbitrum network)' },
      { from: 'You receive', to: '~$237.90 USDC', desc: '' }
    ],

    // CTA
    ctaTitle: 'Ready to convert PLN to USDC?',
    ctaDesc: 'After converting PLN to USDC you can trade US stocks 24/7 on platforms like Hyperliquid.',
    ctaButton: 'Start Trading US Stocks',
    ctaSecondary: 'Poland Trading Guide',

    // Free Notice
    freeNotice: 'This site is',
    freeNotice2: '100% free',
    freeNotice3: '. When you sign up through our links, you get',
    freeNotice4: '4% off trading fees',
    freeNotice5: '. This helps support the site while saving you money.'
  }
};

export default function JakZamienicPLNnaUSDC() {
  const [lang, setLang] = useState<Lang>('pl');
  const [selectedMethod, setSelectedMethod] = useState<'binance' | 'kraken' | 'zonda'>('binance');
  const t = translations[lang];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': lang === 'pl' ? 'Jak Zamienic PLN na USDC' : 'How to Convert PLN to USDC',
    'description': t.pageDescription,
    'inLanguage': lang === 'pl' ? 'pl-PL' : 'en-US',
    'countryOfOrigin': 'PL',
    'step': [
      {
        '@type': 'HowToStep',
        'name': lang === 'pl' ? 'Zaloz konto na gieldzie' : 'Create exchange account',
        'text': lang === 'pl' ? 'Zarejestruj sie na Binance, Kraken lub Zonda i przejdz weryfikacje KYC.' : 'Sign up on Binance, Kraken or Zonda and complete KYC verification.'
      },
      {
        '@type': 'HowToStep',
        'name': lang === 'pl' ? 'Wplac PLN' : 'Deposit PLN',
        'text': lang === 'pl' ? 'Uzyj BLIK, Przelewy24 lub przelewu bankowego aby wplacic zlotowki.' : 'Use BLIK, Przelewy24 or bank transfer to deposit Polish Zloty.'
      },
      {
        '@type': 'HowToStep',
        'name': lang === 'pl' ? 'Kup USDT/USDC' : 'Buy USDT/USDC',
        'text': lang === 'pl' ? 'Kup USDT za PLN na P2P lub gieldzie, potem zamien na USDC.' : 'Buy USDT with PLN on P2P or exchange, then convert to USDC.'
      },
      {
        '@type': 'HowToStep',
        'name': lang === 'pl' ? 'Wyplac do portfela' : 'Withdraw to wallet',
        'text': lang === 'pl' ? 'Wyplac USDC na swoj portfel przez siec Arbitrum dla najnizszych oplat.' : 'Withdraw USDC to your wallet via Arbitrum network for lowest fees.'
      }
    ],
    'estimatedCost': {
      '@type': 'MonetaryAmount',
      'currency': 'PLN',
      'value': '50'
    },
    'totalTime': 'PT15M'
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Poland flag gradient - red and white */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-gray-950 to-white/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        {/* Language Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-gray-800/70 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('pl')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                lang === 'pl'
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Polski
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{t.currentPage}</span>
          </nav>

          {/* Badges */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">{t.badge}</span>
            <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">{t.fundingBadge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            {t.heroTitle}
          </h1>

          <p className="text-xl text-red-400 font-medium mb-4">{t.heroSubtitle}</p>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            {t.heroDesc}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900/80 border border-red-500/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statFastestValue}</div>
              <div className="text-gray-400 text-sm">{t.statFastest}</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statCheapestValue}</div>
              <div className="text-gray-400 text-sm">{t.statCheapest}</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statMinValue}</div>
              <div className="text-gray-400 text-sm">{t.statMin}</div>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statMethodsValue}</div>
              <div className="text-gray-400 text-sm">{t.statMethods}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">{t.comparisonTitle}</h2>
          <p className="text-gray-400 text-center mb-8">{t.comparisonSubtitle}</p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.platform}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.fees}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.speed}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.minAmount}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.payments}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.bestFor}</th>
                </tr>
              </thead>
              <tbody>
                {t.platforms.map((platform, idx) => (
                  <tr key={idx} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                    <td className="py-4 px-4">
                      <span className="text-white font-medium">{platform.name}</span>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                        platform.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        platform.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {platform.tag}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{platform.fees}</td>
                    <td className="py-4 px-4 text-gray-300">{platform.speed}</td>
                    <td className="py-4 px-4 text-gray-300">{platform.minAmount}</td>
                    <td className="py-4 px-4 text-gray-300">{platform.payments}</td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{platform.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="text-red-400 text-sm">
              <strong>{t.recommendationTitle}</strong> {t.recommendationText}
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Instructions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">{t.stepsTitle}</h2>
          <p className="text-gray-400 text-center mb-8">{t.stepsSubtitle}</p>

          {/* Method Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedMethod('binance')}
              className={`px-5 py-3 rounded-xl font-medium transition-all ${
                selectedMethod === 'binance'
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Binance (SEPA)
            </button>
            <button
              onClick={() => setSelectedMethod('kraken')}
              className={`px-5 py-3 rounded-xl font-medium transition-all ${
                selectedMethod === 'kraken'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Kraken
            </button>
            <button
              onClick={() => setSelectedMethod('zonda')}
              className={`px-5 py-3 rounded-xl font-medium transition-all ${
                selectedMethod === 'zonda'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Zonda (BitBay)
            </button>
          </div>

          {/* Binance Instructions */}
          {selectedMethod === 'binance' && (
            <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-6">{t.binanceTitle}</h3>

              <div className="space-y-6">
                {t.binanceSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                      {step.desc && <p className="text-gray-400 text-sm mb-2">{step.desc}</p>}
                      {step.note && <p className="text-gray-500 text-xs mb-2">{step.note}</p>}
                      {step.items && (
                        <ul className="text-gray-400 text-sm space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i}>- {item}</li>
                          ))}
                        </ul>
                      )}
                      {step.tip && (
                        <div className="mt-3 p-3 bg-yellow-500/10 rounded-lg">
                          <p className="text-yellow-400 text-xs">{step.tip}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Example Calculation */}
              <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                <h4 className="text-white font-semibold mb-3">{t.exampleTitle}</h4>
                <div className="text-sm space-y-2">
                  {t.exampleSteps.map((step, idx) => (
                    <div key={idx} className={`flex justify-between ${idx === t.exampleSteps.length - 1 ? 'text-white font-medium pt-2 border-t border-gray-700' : 'text-gray-300'}`}>
                      <span>{step.from}</span>
                      <span>{step.to} <span className="text-gray-500">{step.desc}</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Kraken Instructions */}
          {selectedMethod === 'kraken' && (
            <div className="bg-gray-900 border border-purple-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-6">{t.krakenTitle}</h3>

              <div className="space-y-6">
                {t.krakenSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                      {step.desc && <p className="text-gray-400 text-sm mb-2">{step.desc}</p>}
                      {step.note && <p className="text-gray-500 text-xs mb-2">{step.note}</p>}
                      {step.items && (
                        <ul className="text-gray-400 text-sm space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i}>- {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Zonda Instructions */}
          {selectedMethod === 'zonda' && (
            <div className="bg-gray-900 border border-red-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-6">{t.zondaTitle}</h3>

              <div className="space-y-6">
                {t.zondaSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                      {step.desc && <p className="text-gray-400 text-sm mb-2">{step.desc}</p>}
                      {step.note && <p className="text-gray-500 text-xs mb-2">{step.note}</p>}
                      {step.items && (
                        <ul className="text-gray-400 text-sm space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i}>- {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">{t.paymentTitle}</h2>
          <p className="text-gray-400 text-center mb-8">{t.paymentSubtitle}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.paymentMethods.map((method, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{method.name}</h4>
                    <p className="text-gray-500 text-xs">{method.speed}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-2">{method.desc}</p>
                <p className="text-gray-500 text-xs">
                  <span className="text-gray-400">{lang === 'pl' ? 'Oplaty:' : 'Fees:'}</span> {method.fees}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {method.supported.map((platform, i) => (
                    <span key={i} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.tipsTitle}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {t.tips.map((tip, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-red-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
                    <p className="text-gray-400 text-sm">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-red-500/20 to-white/5 border border-red-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">{t.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-lg hover:from-red-400 hover:to-red-500 transition-all shadow-lg shadow-red-500/25"
              >
                {t.ctaButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/blog/trade-us-stocks-from-poland"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Site Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.freeNotice} <span className="text-white font-medium">{t.freeNotice2}</span>{t.freeNotice3} <span className="text-red-400 font-semibold">{t.freeNotice4}</span>{t.freeNotice5}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
