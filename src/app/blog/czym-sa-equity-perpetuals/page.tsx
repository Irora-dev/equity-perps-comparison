'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

// Comprehensive translation object
const translations = {
  pl: {
    // Language toggle
    language: 'Polski',
    switchTo: 'English',

    // Breadcrumb
    home: 'Strona glowna',
    learn: 'Nauka',
    current: 'Czym Sa Equity Perpetuals',

    // Badge
    badge: 'Przewodnik dla Poczatkujacych',

    // Hero
    heroTitle1: 'Czym Sa',
    heroTitle2: 'Equity Perpetuals?',
    heroDesc: 'Wyobraz sobie handel akcjami',
    heroStocks: 'Tesla, Nvidia i Apple',
    heroTime: 'o 2 w nocy w sobote',
    heroLeverage: 'z dzwignia 50x',
    heroEnd: '. Bez brokera. Bez zatwierdzania. Tylko ty i rynki.',

    // Stats
    stat1Value: '24',
    stat1Label: 'Godziny na dobe',
    stat1Sub: '7 dni w tygodniu',
    stat2Value: '200x',
    stat2Label: 'Maksymalna dzwignia',
    stat2Sub: 'Efektywnosc kapitalowa',
    stat3Value: '50+',
    stat3Label: 'Dostepnych akcji',
    stat3Sub: 'Topowe akcje USA',

    // CTA buttons
    learnMore: 'Dowiedz sie wiecej',
    startTrading: 'Zacznij handlowac',

    // Simple explanation
    simpleTitle: 'Proste',
    simpleTitle2: 'Wyjasnienie',
    simpleDesc: 'Equity perpetual to kontrakt sledzacy cene akcji. To wszystko.',
    thinkOfIt: 'Pomysl o tym tak:',
    step1: 'Myslisz, ze',
    step1Bold: 'NVDA wzrosnie',
    step2: 'Otwierasz',
    step2Bold: 'pozycje long',
    step2End: 'z $100',
    step3: 'Z dzwignia 10x kontrolujesz',
    step3Bold: 'ekspozycje $1,000',
    step4: 'NVDA wzrasta 5% = zarabiasz',
    step4Bold: '$50 (50% zwrot)',
    positionTitle: 'Twoja Pozycja',
    positionLong: 'Long 10x',
    positionMargin: 'Depozyt',
    positionSize: 'Wielkosc pozycji',
    positionPnl: 'Niezrealizowany P&L',
    neverExpire: 'W przeciwienstwie do zwyklych futures, perpetuals',
    neverExpireBold: 'nigdy nie wygasaja',
    neverExpireEnd: '. Trzymaj przez 5 minut lub 5 miesiecy.',

    // Benefits
    benefitsTitle: 'Dlaczego Traderzy',
    benefitsTitle2: 'Przechodza',
    benefitsDesc: 'Equity perps rozwiazuja najwieksze frustracje tradycyjnego handlu akcjami',
    benefit1Title: 'Handel 24/7',
    benefit1Desc: 'Rynki nigdy nie zamykaja. Handluj Tesla o polnocy, Apple w niedziele, Nvidia na Boze Narodzenie. Reaguj na wiadomosci w czasie rzeczywistym, nie nastepnego ranka.',
    benefit2Title: 'Do 200x dzwigni',
    benefit2Desc: 'Kontroluj akcje warte $10,000 za $50. Zwielokrotniaj zyski (i straty). Znacznie bardziej efektywne kapitalowo niz tradycyjne konta margin.',
    benefit3Title: 'Latwa krotka sprzedaz',
    benefit3Desc: 'Myslisz, ze akcje spadna? Wejdz na short natychmiast. Bez pozyczania akcji, bez oplat za trudne do pozyczenia, bez ograniczen. Po prostu kliknij sprzedaj.',
    benefit4Title: 'Bez KYC',
    benefit4Desc: 'Bez przesylania dokumentow. Bez czekania na zatwierdzenie. Bez zbierania danych osobowych. Podlacz portfel i zacznij handlowac w minuty.',
    benefit5Title: 'Wlasna kontrola',
    benefit5Desc: 'Twoje srodki zostaja w twoim portfelu. Zadnego brokera trzymajacego twoje pieniadze. Bez zamrozen. Bez limitow wyplat. Ty kontrolujesz swoje aktywa.',
    benefit6Title: 'Natychmiastowe rozliczenie',
    benefit6Desc: 'Bez czekania T+2. Zyski sa dostepne natychmiast. Zamknij pozycje i wyplac do portfela w sekundy.',

    // How it works
    howItWorksTitle: 'Jak To',
    howItWorksTitle2: 'Naprawde Dziala',
    howItWorksDesc: 'Mechanika equity perpetuals prostym jezykiem',
    oracle1: '1',
    oracleTitle: 'Wyrocznia cenowa (Oracle)',
    oracleDesc: 'Equity perps sledza prawdziwe ceny akcji za pomoca',
    oracleDescBold: 'wyroczni',
    oracleDesc2: '— uslug pobierajacych aktualne dane cenowe z gield i dostarczajacych je on-chain. Dostawcy jak Pyth agreguja ceny z wielu zrodel dla zapewnienia dokladnosci.',
    oracleUpdate: 'Aktualizowane co sekunde w godzinach rynkowych',
    funding1: '2',
    fundingTitle: 'Stopy finansowania utrzymuja ceny',
    fundingDesc: 'Co 1-8 godzin traderzy placa lub otrzymuja',
    fundingDescBold: 'finansowanie',
    fundingDesc2: 'w zaleznosci od tego, czy cena perpa jest powyzej czy ponizej ceny wyroczni. Jesli perpy handluja powyzej spot, longi placa shortom (co pcha cene w dol). To utrzymuje ceny perp blisko rzeczywistych cen akcji.',
    fundingAbove: 'Perp > Spot',
    fundingAboveDesc: 'Longi placa shortom',
    fundingBelow: 'Perp < Spot',
    fundingBelowDesc: 'Shorty placa longom',
    leverage1: '3',
    leverageTitle: 'Dzwignia i Likwidacja',
    leverageDesc: 'Twoj',
    leverageDescBold: 'depozyt (margin)',
    leverageDesc2: 'to zabezpieczenie twojej pozycji. Z dzwignia 10x, 10% niekorzystny ruch wymazalby twoj depozyt. Zanim to nastapi, zostajesz',
    leverageDescBold2: 'zlikwidowany',
    leverageDesc3: '— twoja pozycja jest automatycznie zamykana, aby zapobiec dalszym stratom.',
    leverageTip: 'Pro tip:',
    leverageTipText: 'Zacznij od dzwigni 2-5x. Wielu poczatkujacych uzywa 20x+ i zostaje zlikwidowanych na normalnej zmiennosci. Nizsza dzwignia = wiecej miejsca na blad.',

    // Getting started
    gettingStartedBadge: 'Mniej niz 10 minut',
    gettingStartedTitle: 'Skonfiguruj sie w',
    gettingStartedTitle2: '3 Prostych Krokach',
    gettingStartedDesc: 'Bez formularzy. Bez czekania na zatwierdzenie. Bez minimalnego salda.',
    step1Title: 'Zaloz Cyfrowy Portfel',
    step1Desc: 'Bezplatnie, zajmuje 2 minuty, robisz to tylko raz',
    showDetails: 'Pokaz szczegoly',
    hideDetails: 'Ukryj szczegoly',
    walletExplainTitle: 'Czym jest cyfrowy portfel?',
    walletExplainDesc: 'Pomysl o tym jak o',
    walletExplainBold: 'cyfrowym koncie bankowym',
    walletExplainDesc2: ', ktore w pelni kontrolujesz. Zamiast banku trzymajacego twoje pieniadze, sam je przechowujesz uzywajac prostego rozszerzenia przegladarki.',
    walletFeature1: 'Ty kontrolujesz',
    walletFeature2: 'Calkowicie darmowe',
    walletFeature3: '2 min konfiguracji',
    walletFeature4: 'Dziala globalnie',
    walletSetupTitle: 'Jak to skonfigurowac:',
    walletStep1: 'Wejdz na',
    walletStep1Link: 'rabby.io',
    walletStep1End: '(polecany przez nas portfel)',
    walletStep2: 'Kliknij "Download" i dodaj do przegladarki (Chrome, Firefox, itp.)',
    walletStep3: 'Kliknij "Create New Wallet" i ustaw haslo',
    walletStep4: 'Zapisz 12-slowowa fraze odzyskiwania',
    walletStep4Warning: 'To jak haslo glowne — przechowuj bezpiecznie i nigdy nie udostepniaj!',
    watchVideo: 'Obejrzyj: 2-minutowy przewodnik',
    downloadRabby: 'Pobierz Rabby',
    step2Title: 'Doladuj USDC',
    step2Desc: 'Przelew z Coinbase, Kraken lub Binance — lub uzywajac karty',
    fromCoinbase: 'Z Coinbase',
    coinbaseSteps: ['Wejdz w Wyslij/Odbierz', 'Wybierz USDC', 'Wklej adres Rabby', 'Wybierz siec Arbitrum', 'Potwierdz wyslanie'],
    coinbaseFee: 'Oplata: ~$0.10 na Arbitrum',
    fromKraken: 'Z Kraken',
    krakenSteps: ['Wejdz w Funding → Wyplata', 'Wyszukaj USDC', 'Dodaj adres Rabby', 'Wybierz Arbitrum One', 'Potwierdz przez 2FA'],
    krakenFee: 'Oplata: ~$1-3',
    fromBinance: 'Z Binance',
    binanceSteps: ['Portfel → Wyplata', 'Wybierz USDC', 'Wklej adres Rabby', 'Siec: Arbitrum', 'Zakoncz weryfikacje'],
    binanceFee: 'Oplata: ~$0.50',
    fundingProTip: 'Pro tip:',
    fundingProTipText: 'Zawsze uzywaj sieci Arbitrum dla najnizszych oplat. Zacznij od $50-100 na test. Srodki przychodzą w 1-5 minut.',
    step3Title: 'Wybierz Platforme i Zacznij Handlowac',
    step3Desc: 'Wybierz platforme equity perps — polecamy',
    step3DescLink: 'Hyperliquid',
    step3DescEnd: 'dla poczatkujacych',
    tradeStep1: 'Wejdz na',
    tradeStep1Link: 'app.hyperliquid.xyz',
    tradeStep2: 'Kliknij "Connect" i wybierz Rabby Wallet',
    tradeStep3: 'Wplac swoje USDC na platforme',
    tradeStep4: 'Wyszukaj akcje (np. NVDA-PERP)',
    tradeStep5: 'Wybierz Long lub Short, ustaw dzwignie i handluj!',
    openHyperliquid: 'Otworz Hyperliquid',
    mostPopular: 'Najpopularniejsza platforma',
    fullGuideLink: 'Przeczytaj kompletny przewodnik konfiguracji portfela',

    // Risks
    risksTitle: 'Zrozum Ryzyka',
    risk1Bold: 'Dzwignia zwielokrotnia straty',
    risk1Text: '— Ta sama 10x, ktora zamienia 5% w 50% zysk, zamienia rowniez 5% strate w 50% strate',
    risk2Bold: 'Likwidacja jest realna',
    risk2Text: '— Twoja pozycja moze byc automatycznie zamknieta, jesli ruch bedzie wystarczajaco niekorzystny',
    risk3Bold: 'Stopy finansowania kosztuja',
    risk3Text: '— Trzymanie pozycji kosztuje co kilka godzin, szczegolnie na popularnych tradach',
    risk4Bold: 'Brak wlasnosci',
    risk4Text: '— Handlujesz ekspozycja cenowa, nie prawdziwymi akcjami. Bez dywidend, bez praw glosu',

    // CTA
    ctaTitle: 'Gotowy, Zeby Sprobowac?',
    ctaDesc: 'Zacznij od $50 i niskiej dzwigni. Zobacz jak wyglada handel akcjami 24/7.',
    ctaButton: 'Zacznij na Hyperliquid',
    compareAll: 'Porownaj wszystkie platformy',
    polandGuide: 'Przewodnik dla Polski',

    // FAQ
    faqTitle: 'Czesto Zadawane Pytania',
    faqs: [
      {
        question: 'Jaka jest roznica miedzy equity perps a zwyklym handlem akcjami?',
        answer: 'Equity perps pozwalaja handlowac z dzwignia (do 200x), 24/7, bez posiadania prawdziwych akcji. Zwykle akcje wymagaja pelnego kapitalu, handluja tylko w godzinach rynkowych i daja prawa wlasnosci jak dywidendy i glosowanie.'
      },
      {
        question: 'Ile pieniedzy potrzebuje, zeby zaczac handel equity perps?',
        answer: 'Mozesz zaczac od zaledwie $10-50 na wiekszosci platform. Jednak zalecamy zaczynanie od minimum $100-500, aby miec odpowiedni margin i unikac natychmiastowej likwidacji przy malych ruchach cenowych.'
      },
      {
        question: 'Czy equity perps sa legalne w Polsce?',
        answer: 'Equity perps istnieja w szarej strefie regulacyjnej. Wiekszosc platform jest zdecentralizowana i nie wymaga KYC. Legalnosc rozni sie w zaleznosci od jurysdykcji. Polscy rezydenci powinni byc swiadomi, ze te platformy zazwyczaj dzialaja poza polskimi ramami regulacyjnymi. Skonsultuj sie z doradca podatkowym.'
      },
      {
        question: 'Co sie dzieje, gdy moja pozycja zostaje zlikwidowana?',
        answer: 'Gdy twoja pozycja jest likwidowana, twoj margin jest uzywany do zamkniecia pozycji i pokrycia strat. Tracisz wplacony margin, ale nie bedziesz winny dodatkowych pieniedzy. Niektore platformy maja fundusze ubezpieczeniowe, aby zapobiec socjalizacji strat.'
      },
      {
        question: 'Czy moge handlowac equity perps w weekendy?',
        answer: 'Tak! Wiekszosc platform jak Hyperliquid i Lighter oferuje handel 24/7. Jednak ceny moga byc mniej zmienne w weekendy, poniewaz tradycyjne rynki akcji sa zamkniete, a wyrocznia uzywa ostatniej ceny zamkniecia.'
      },
      {
        question: 'Czym sa stopy finansowania i dlaczego sa wazne?',
        answer: 'Stopy finansowania to okresowe platnosci miedzy traderami long i short, ktore utrzymuja ceny perp zgodne z cenami spot. Jesli trzymasz pozycje, placisz lub otrzymujesz finansowanie co 1-8 godzin w zaleznosci od platformy.'
      }
    ],

    // Back link
    backToCompare: 'Porownaj platformy',

    // Poland specific
    polandCta: 'Przewodnik handlu z Polski',
  },
  en: {
    // Language toggle
    language: 'English',
    switchTo: 'Polski',

    // Breadcrumb
    home: 'Home',
    learn: 'Learn',
    current: 'What Are Equity Perpetuals',

    // Badge
    badge: 'Beginner Guide',

    // Hero
    heroTitle1: 'What Are',
    heroTitle2: 'Equity Perpetuals?',
    heroDesc: 'Imagine trading',
    heroStocks: 'Tesla, Nvidia, and Apple',
    heroTime: 'at 2am on a Saturday',
    heroLeverage: 'with 50x leverage',
    heroEnd: '. No broker. No approval. Just you and the markets.',

    // Stats
    stat1Value: '24',
    stat1Label: 'Hours a Day',
    stat1Sub: '7 days a week',
    stat2Value: '200x',
    stat2Label: 'Max Leverage',
    stat2Sub: 'Capital efficient',
    stat3Value: '50+',
    stat3Label: 'Stocks Available',
    stat3Sub: 'Top US equities',

    // CTA buttons
    learnMore: 'Learn More',
    startTrading: 'Start Trading Now',

    // Simple explanation
    simpleTitle: 'The Simple',
    simpleTitle2: 'Explanation',
    simpleDesc: 'An equity perpetual is a contract that tracks a stock price. That\'s it.',
    thinkOfIt: 'Think of it like this:',
    step1: 'You think',
    step1Bold: 'NVDA will go up',
    step2: 'You open a',
    step2Bold: 'long position',
    step2End: 'with $100',
    step3: 'With 10x leverage, you control',
    step3Bold: '$1,000 of exposure',
    step4: 'NVDA goes up 5% = you make',
    step4Bold: '$50 (50% return)',
    positionTitle: 'Your Position',
    positionLong: 'Long 10x',
    positionMargin: 'Margin',
    positionSize: 'Position Size',
    positionPnl: 'Unrealized P&L',
    neverExpire: 'Unlike regular futures, perpetuals',
    neverExpireBold: 'never expire',
    neverExpireEnd: '. Hold for 5 minutes or 5 months.',

    // Benefits
    benefitsTitle: 'Why Traders Are',
    benefitsTitle2: 'Switching',
    benefitsDesc: 'Equity perps solve the biggest frustrations with traditional stock trading',
    benefit1Title: 'Trade 24/7',
    benefit1Desc: 'Markets never close. Trade Tesla at midnight, Apple on Sunday, Nvidia on Christmas. React to news in real-time, not the next morning.',
    benefit2Title: 'Up to 200x Leverage',
    benefit2Desc: 'Control $10,000 of stock with $50. Amplify your gains (and losses). Far more capital efficient than traditional margin accounts.',
    benefit3Title: 'Easy Short Selling',
    benefit3Desc: 'Think a stock will drop? Go short instantly. No borrowing shares, no hard-to-borrow fees, no restrictions. Just click sell.',
    benefit4Title: 'No KYC Required',
    benefit4Desc: 'No ID upload. No waiting for approval. No personal data collected. Connect your wallet and start trading in minutes.',
    benefit5Title: 'Self-Custody',
    benefit5Desc: 'Your funds stay in your wallet. No broker holding your money. No freezes. No withdrawal limits. You control your assets.',
    benefit6Title: 'Instant Settlement',
    benefit6Desc: 'No T+2 waiting period. Profits are available immediately. Close a position and withdraw to your wallet in seconds.',

    // How it works
    howItWorksTitle: 'How It',
    howItWorksTitle2: 'Actually Works',
    howItWorksDesc: 'The mechanics behind equity perpetuals in plain English',
    oracle1: '1',
    oracleTitle: 'Oracle Price Feeds',
    oracleDesc: 'Equity perps track real stock prices using',
    oracleDescBold: 'oracles',
    oracleDesc2: '— services that pull live price data from stock exchanges and deliver it on-chain. Providers like Pyth aggregate prices from multiple sources to ensure accuracy.',
    oracleUpdate: 'Updated every second during market hours',
    funding1: '2',
    fundingTitle: 'Funding Rates Keep Prices Aligned',
    fundingDesc: 'Every 1-8 hours, traders pay or receive',
    fundingDescBold: 'funding',
    fundingDesc2: 'based on whether the perp price is above or below the oracle price. If perps trade above spot, longs pay shorts (pushing price down). This keeps perp prices closely tracking real stock prices.',
    fundingAbove: 'Perp > Spot',
    fundingAboveDesc: 'Longs pay shorts',
    fundingBelow: 'Perp < Spot',
    fundingBelowDesc: 'Shorts pay longs',
    leverage1: '3',
    leverageTitle: 'Leverage & Liquidation',
    leverageDesc: 'Your',
    leverageDescBold: 'margin',
    leverageDesc2: 'is the collateral backing your position. With 10x leverage, a 10% adverse move would wipe out your margin. Before that happens, you get',
    leverageDescBold2: 'liquidated',
    leverageDesc3: '— your position is automatically closed to prevent further losses.',
    leverageTip: 'Pro tip:',
    leverageTipText: 'Start with 2-5x leverage. Many beginners use 20x+ and get liquidated on normal volatility. Lower leverage = more room to be wrong.',

    // Getting started
    gettingStartedBadge: 'Less Than 10 Minutes',
    gettingStartedTitle: 'Get Set Up in',
    gettingStartedTitle2: '3 Simple Steps',
    gettingStartedDesc: 'No application forms. No approval wait. No minimum balance.',
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    showDetails: 'Show Details',
    hideDetails: 'Hide Details',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainBold: 'digital bank account',
    walletExplainDesc2: 'that you fully control. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeature1: 'You control it',
    walletFeature2: 'Completely free',
    walletFeature3: '2 min setup',
    walletFeature4: 'Works globally',
    walletSetupTitle: 'Here\'s how to set it up:',
    walletStep1: 'Go to',
    walletStep1Link: 'rabby.io',
    walletStep1End: '(it\'s the wallet we recommend)',
    walletStep2: 'Click "Download" and add it to your browser (Chrome, Firefox, etc.)',
    walletStep3: 'Click "Create New Wallet" and set a password',
    walletStep4: 'Write down your 12-word recovery phrase',
    walletStep4Warning: 'This is like a master password — keep it safe and never share it!',
    watchVideo: 'Watch: 2-Minute Setup Guide',
    downloadRabby: 'Download Rabby',
    step2Title: 'Fund with USDC',
    step2Desc: 'Transfer from Coinbase, Kraken, or Binance — or use card',
    fromCoinbase: 'From Coinbase',
    coinbaseSteps: ['Go to Send/Receive', 'Select USDC', 'Paste your Rabby address', 'Choose Arbitrum network', 'Confirm send'],
    coinbaseFee: 'Fee: ~$0.10 on Arbitrum',
    fromKraken: 'From Kraken',
    krakenSteps: ['Go to Funding → Withdraw', 'Search USDC', 'Add your Rabby address', 'Select Arbitrum One', 'Confirm with 2FA'],
    krakenFee: 'Fee: ~$1-3',
    fromBinance: 'From Binance',
    binanceSteps: ['Wallet → Withdraw', 'Select USDC', 'Paste your Rabby address', 'Network: Arbitrum', 'Complete verification'],
    binanceFee: 'Fee: ~$0.50',
    fundingProTip: 'Pro tip:',
    fundingProTipText: 'Always use Arbitrum network for lowest fees. Start with $50-100 to test. Funds arrive in 1-5 minutes.',
    step3Title: 'Choose a Platform & Start Trading',
    step3Desc: 'Pick an equity perps venue — we recommend',
    step3DescLink: 'Hyperliquid',
    step3DescEnd: 'for beginners',
    tradeStep1: 'Go to',
    tradeStep1Link: 'app.hyperliquid.xyz',
    tradeStep2: 'Click "Connect" and select Rabby Wallet',
    tradeStep3: 'Deposit your USDC to the platform',
    tradeStep4: 'Search for a stock (e.g., NVDA-PERP)',
    tradeStep5: 'Choose Long or Short, set leverage, and trade!',
    openHyperliquid: 'Open Hyperliquid',
    mostPopular: 'Most popular platform',
    fullGuideLink: 'Read the complete wallet setup guide',

    // Risks
    risksTitle: 'Understand the Risks',
    risk1Bold: 'Leverage amplifies losses',
    risk1Text: '— The same 10x that turns 5% into 50% gains also turns 5% losses into 50% losses',
    risk2Bold: 'Liquidation is real',
    risk2Text: '— Your position can be closed automatically if it moves against you enough',
    risk3Bold: 'Funding rates cost money',
    risk3Text: '— Holding positions costs money every few hours, especially on popular trades',
    risk4Bold: 'No ownership',
    risk4Text: '— You\'re trading price exposure, not actual shares. No dividends, no voting rights',

    // CTA
    ctaTitle: 'Ready to Try It?',
    ctaDesc: 'Start with $50 and low leverage. See what 24/7 stock trading feels like.',
    ctaButton: 'Start on Hyperliquid',
    compareAll: 'Compare All Platforms',
    polandGuide: 'Poland Trading Guide',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is the difference between equity perps and regular stock trading?',
        answer: 'Equity perps let you trade with leverage (up to 200x), 24/7, without owning actual shares. Regular stocks require full capital, trade only during market hours, and give you ownership rights like dividends and voting.'
      },
      {
        question: 'How much money do I need to start trading equity perps?',
        answer: 'You can start with as little as $10-50 on most platforms. However, we recommend starting with at least $100-500 to have adequate margin and avoid immediate liquidation on small price moves.'
      },
      {
        question: 'Are equity perps legal in Poland?',
        answer: 'Equity perps exist in a regulatory gray area. Most platforms are decentralized and don\'t require KYC. Legality varies by jurisdiction. Polish residents should be aware these platforms typically operate outside Polish regulatory frameworks. Consult a tax advisor.'
      },
      {
        question: 'What happens if my position gets liquidated?',
        answer: 'When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won\'t owe additional money. Some platforms have insurance funds to prevent socialized losses.'
      },
      {
        question: 'Can I trade equity perps on weekends?',
        answer: 'Yes! Most platforms like Hyperliquid and Lighter offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price.'
      },
      {
        question: 'What are funding rates and why do they matter?',
        answer: 'Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. If you hold a position, you either pay or receive funding every 1-8 hours depending on the platform.'
      }
    ],

    // Back link
    backToCompare: 'Compare platforms',

    // Poland specific
    polandCta: 'Trade from Poland Guide',
  }
};

export default function CzymSaEquityPerpetuals() {
  const [lang, setLang] = useState<'pl' | 'en'>('pl');
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const t = translations[lang];
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: lang === 'pl' ? "Czym Sa Equity Perpetuals? Kompletny Przewodnik dla Poczatkujacych" : "What Are Equity Perpetuals? Complete Beginner Guide",
    description: lang === 'pl' ? "Dowiedz sie czym sa equity perpetuals, jak dzialaja i dlaczego traderzy ich uzywaja. Przewodnik po polsku." : "Learn what equity perpetuals are, how they work, and why traders use them.",
    author: { "@type": "Organization", name: "Compare Equity Perps" },
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString(),
    inLanguage: lang === 'pl' ? 'pl-PL' : 'en-US',
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://compareequityperps.com/blog/czym-sa-equity-perpetuals"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen">
        {/* HERO SECTION - Poland red/white theme */}
        <section className="relative overflow-hidden">
          {/* Polish flag-inspired gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            {/* Language Toggle & Breadcrumbs */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <nav className="text-sm text-gray-500">
                <Link href="/" className="hover:text-white">{t.home}</Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="hover:text-white">{t.learn}</Link>
                <span className="mx-2">/</span>
                <span className="text-red-400">{t.current}</span>
              </nav>

              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-gray-700 transition-colors text-sm"
              >
                <span className={lang === 'pl' ? 'text-white font-semibold' : 'text-gray-400'}>PL</span>
                <span className="text-gray-600">/</span>
                <span className={lang === 'en' ? 'text-white font-semibold' : 'text-gray-400'}>EN</span>
              </button>
            </div>

            <div className="max-w-4xl">
              {/* Badge with Poland colors */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <span className="text-red-400 text-sm font-medium">{t.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                {t.heroTitle1}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-red-400">
                  {t.heroTitle2}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t.heroDesc} <span className="text-white font-semibold">{t.heroStocks}</span>
                <span className="text-red-400 font-semibold"> {t.heroTime}</span>
                <span className="text-white font-semibold"> {t.heroLeverage}</span>
                {t.heroEnd}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-red-400">{t.stat1Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat1Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat1Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-400">{t.stat2Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat2Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat2Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{t.stat3Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat3Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat3Sub}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#simple-explanation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold text-lg hover:from-red-400 hover:to-red-500 transition-all shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105"
                >
                  {t.learnMore}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href={hyperliquid?.referralUrl}
                  target="_blank"
                  rel="noopener sponsored"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 border border-gray-700 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-all"
                >
                  {t.startTrading}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE EXPLANATION */}
        <section id="simple-explanation" className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.simpleTitle} <span className="text-red-400">{t.simpleTitle2}</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t.simpleDesc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t.thinkOfIt}</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">1.</span>
                      <span>{t.step1} <strong className="text-white">{t.step1Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">2.</span>
                      <span>{t.step2} <strong className="text-white">{t.step2Bold}</strong> {t.step2End}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">3.</span>
                      <span>{t.step3} <strong className="text-white">{t.step3Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl">4.</span>
                      <span>{t.step4} <strong className="text-green-400">{t.step4Bold}</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">{t.positionTitle}</div>
                    <div className="text-4xl font-black text-white mb-1">NVDA-PERP</div>
                    <div className="text-green-400 text-xl font-bold">{t.positionLong}</div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">{t.positionMargin}</span>
                        <span className="text-white">$100</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">{t.positionSize}</span>
                        <span className="text-white">$1,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">{t.positionPnl}</span>
                        <span className="text-green-400">+$50.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-8">
              {t.neverExpire} <strong className="text-white">{t.neverExpireBold}</strong>. {t.neverExpireEnd}
            </p>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section id="benefits" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.benefitsTitle} <span className="text-green-400">{t.benefitsTitle2}</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t.benefitsDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit 1 - 24/7 */}
              <div className="group bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit1Title}</h3>
                <p className="text-gray-400">{t.benefit1Desc}</p>
              </div>

              {/* Benefit 2 - Leverage */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit2Title}</h3>
                <p className="text-gray-400">{t.benefit2Desc}</p>
              </div>

              {/* Benefit 3 - Short Selling */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit3Title}</h3>
                <p className="text-gray-400">{t.benefit3Desc}</p>
              </div>

              {/* Benefit 4 - No KYC */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit4Title}</h3>
                <p className="text-gray-400">{t.benefit4Desc}</p>
              </div>

              {/* Benefit 5 - Self-Custody */}
              <div className="group bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit5Title}</h3>
                <p className="text-gray-400">{t.benefit5Desc}</p>
              </div>

              {/* Benefit 6 - Instant Settlement */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit6Title}</h3>
                <p className="text-gray-400">{t.benefit6Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.howItWorksTitle} <span className="text-red-400">{t.howItWorksTitle2}</span>
              </h2>
              <p className="text-gray-400 text-lg">
                {t.howItWorksDesc}
              </p>
            </div>

            <div className="space-y-8">
              {/* Oracle Pricing */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-xl">{t.oracle1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.oracleTitle}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.oracleDesc} <strong className="text-white">{t.oracleDescBold}</strong>
                      {t.oracleDesc2}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t.oracleUpdate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding Rates */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">{t.funding1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.fundingTitle}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.fundingDesc} <strong className="text-white">{t.fundingDescBold}</strong> {t.fundingDesc2}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-semibold">{t.fundingAbove}</div>
                        <div className="text-gray-500 text-sm">{t.fundingAboveDesc}</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-red-400 font-semibold">{t.fundingBelow}</div>
                        <div className="text-gray-500 text-sm">{t.fundingBelowDesc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leverage & Liquidation */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">{t.leverage1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.leverageTitle}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.leverageDesc} <strong className="text-white">{t.leverageDescBold}</strong> {t.leverageDesc2}
                      <strong className="text-white">{t.leverageDescBold2}</strong> {t.leverageDesc3}
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <p className="text-yellow-400 text-sm">
                        <strong>{t.leverageTip}</strong> {t.leverageTipText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GETTING STARTED SECTION */}
        <section id="getting-started" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-400 font-medium">{t.gettingStartedBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.gettingStartedTitle} <span className="text-green-400">{t.gettingStartedTitle2}</span>
              </h2>
              <p className="text-gray-400 text-lg">
                {t.gettingStartedDesc}
              </p>
            </div>

            {/* Step 1 - Wallet Setup (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-red-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-red-500/50 transition-colors"
                onClick={() => setWalletExpanded(!walletExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                    <p className="text-gray-400">{t.step1Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400 text-sm font-medium hidden sm:block">
                      {walletExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-red-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {walletExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                    {/* What is a wallet explainer */}
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
                      <h4 className="text-red-400 font-semibold mb-2">{t.walletExplainTitle}</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {t.walletExplainDesc} <strong className="text-white">{t.walletExplainBold}</strong>{t.walletExplainDesc2}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#128274;</div>
                          <span className="text-gray-400">{t.walletFeature1}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#127381;</div>
                          <span className="text-gray-400">{t.walletFeature2}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#9889;</div>
                          <span className="text-gray-400">{t.walletFeature3}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#127757;</div>
                          <span className="text-gray-400">{t.walletFeature4}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-4">{t.walletSetupTitle}</h4>
                        <ol className="space-y-3 text-gray-300">
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">1</span>
                            <span>{t.walletStep1} <a href="https://rabby.io" target="_blank" rel="noopener" className="text-red-400 hover:text-red-300 underline">{t.walletStep1Link}</a> {t.walletStep1End}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">2</span>
                            <span>{t.walletStep2}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">3</span>
                            <span>{t.walletStep3}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">4</span>
                            <div>
                              <strong className="text-white">{t.walletStep4}</strong>
                              <p className="text-gray-500 text-xs mt-1">{t.walletStep4Warning}</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-5">
                        <h4 className="text-white font-semibold mb-3">{t.watchVideo}</h4>
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                          <iframe
                            src="https://www.youtube.com/embed/_ouAzSQJiM0"
                            title="How to Set Up a Wallet"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <a
                          href="https://rabby.io"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold text-sm hover:bg-red-400 transition-colors"
                        >
                          {t.downloadRabby}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2 - Fund Wallet (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-green-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-colors"
                onClick={() => setFundingExpanded(!fundingExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step2Title}</h3>
                    <p className="text-gray-400">{t.step2Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-sm font-medium hidden sm:block">
                      {fundingExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-green-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {fundingExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-800 pt-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                        <h4 className="text-blue-400 font-semibold mb-2">{t.fromCoinbase}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.coinbaseSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.coinbaseFee}</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                        <h4 className="text-purple-400 font-semibold mb-2">{t.fromKraken}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.krakenSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.krakenFee}</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <h4 className="text-yellow-400 font-semibold mb-2">{t.fromBinance}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.binanceSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.binanceFee}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl">
                      <p className="text-gray-400 text-sm">
                        <strong className="text-white">{t.fundingProTip}</strong> {t.fundingProTipText}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 - Choose Platform & Trade */}
            <div className="mb-8">
              <div className="bg-gray-900 border-2 border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-300 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t.step3Title}</h3>
                    <p className="text-gray-400">{t.step3Desc} <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-red-400 hover:text-red-300">{t.step3DescLink}</a> {t.step3DescEnd}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5">
                    <ol className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</span>
                        <span>{t.tradeStep1} <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-red-400 hover:text-red-300">{t.tradeStep1Link}</a></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</span>
                        <span>{t.tradeStep2}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</span>
                        <span>{t.tradeStep3}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</span>
                        <span>{t.tradeStep4}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">5</span>
                        <span>{t.tradeStep5}</span>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={hyperliquid?.referralUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/50 rounded-2xl hover:border-red-500 transition-all group"
                    >
                      <div className="text-5xl">&#128640;</div>
                      <span className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{t.openHyperliquid}</span>
                      <span className="text-gray-400 text-sm">{t.mostPopular}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Guide Link */}
            <div className="text-center">
              <Link
                href="/blog/wallet-setup-guide"
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium"
              >
                {t.fullGuideLink}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* RISKS SECTION */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">&#9888;&#65039; {t.risksTitle}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk1Bold}</strong> {t.risk1Text}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk2Bold}</strong> {t.risk2Text}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk3Bold}</strong> {t.risk3Text}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk4Bold}</strong> {t.risk4Text}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA - Poland themed */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-red-500/20 via-white/10 to-red-500/20 border border-red-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

              <div className="relative">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                  {t.ctaTitle}
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                  {t.ctaDesc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={hyperliquid?.referralUrl}
                    target="_blank"
                    rel="noopener sponsored"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold text-xl hover:from-red-400 hover:to-red-500 transition-all shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105"
                  >
                    {t.ctaButton}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-gray-800 border border-gray-700 text-white rounded-2xl font-semibold hover:bg-gray-700 transition-all"
                  >
                    {t.compareAll}
                  </Link>
                </div>

                {/* Poland-specific CTA */}
                <div className="mt-6">
                  <Link
                    href="/blog/trade-us-stocks-from-poland"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium"
                  >
                    &#127477;&#127473; {t.polandCta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">{t.faqTitle}</h2>

            <div className="space-y-3">
              {t.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="font-medium text-white pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        faqOpenIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {faqOpenIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="py-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.backToCompare}
          </Link>
        </div>
      </article>
    </>
  );
}
