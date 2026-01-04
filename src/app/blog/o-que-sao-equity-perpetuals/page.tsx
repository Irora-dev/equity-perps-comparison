'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';
import { LanguageToggle } from '@/components/LanguageToggle';

const translations = {
  pt: {
    // Breadcrumb
    home: 'Inicio',
    blog: 'Blog',
    pageTitle: 'O Que Sao Equity Perpetuals',

    // Hero
    badge: 'Guia para Iniciantes',
    title1: 'O Que Sao',
    title2: 'Equity Perpetuals?',
    subtitle: 'Imagine negociar',
    subtitleStocks: 'Tesla, Nvidia e Apple',
    subtitleTime: 'as 2 da manha de sabado',
    subtitleLeverage: 'com 50x de alavancagem',
    subtitleEnd: '. Sem corretora. Sem aprovacao. Apenas voce e os mercados.',

    // Quick Stats
    stat1Value: '24',
    stat1Label: 'Horas por Dia',
    stat1Sub: '7 dias por semana',
    stat2Value: '200x',
    stat2Label: 'Alavancagem Maxima',
    stat2Sub: 'Eficiencia de capital',
    stat3Value: '50+',
    stat3Label: 'Acoes Disponiveis',
    stat3Sub: 'Principais acoes americanas',

    // CTAs
    learnMore: 'Saiba Mais',
    startTrading: 'Comece a Negociar',

    // Simple Explanation Section
    simpleTitle: 'A Explicacao',
    simpleTitleHighlight: 'Simples',
    simpleDesc: 'Um equity perpetual e um contrato que acompanha o preco de uma acao. So isso.',
    thinkOfIt: 'Pense assim:',
    step1: 'Voce acha que a',
    step1Bold: 'NVDA vai subir',
    step2: 'Voce abre uma',
    step2Bold: 'posicao comprada',
    step2End: 'com $100',
    step3: 'Com 10x de alavancagem, voce controla',
    step3Bold: '$1.000 de exposicao',
    step4: 'NVDA sobe 5% = voce ganha',
    step4Bold: '$50 (50% de retorno)',
    positionTitle: 'Sua Posicao',
    positionType: 'Long 10x',
    marginLabel: 'Margem',
    positionSizeLabel: 'Tamanho da Posicao',
    pnlLabel: 'P&L Nao Realizado',
    neverExpire: 'Diferente de futuros tradicionais, perpetuos',
    neverExpireBold: 'nunca expiram',
    neverExpireEnd: '. Mantenha por 5 minutos ou 5 meses.',

    // Benefits Section
    benefitsTitle: 'Por Que Traders Estao',
    benefitsTitleHighlight: 'Migrando',
    benefitsDesc: 'Equity perps resolvem as maiores frustracoes do trading tradicional de acoes',

    benefit1Title: 'Negocie 24/7',
    benefit1Desc: 'Mercados nunca fecham. Negocie Tesla a meia-noite, Apple no domingo, Nvidia no Natal. Reaja a noticias em tempo real, nao na manha seguinte.',

    benefit2Title: 'Ate 200x de Alavancagem',
    benefit2Desc: 'Controle $10.000 em acoes com $50. Amplifique seus ganhos (e perdas). Muito mais eficiente em capital que contas de margem tradicionais.',

    benefit3Title: 'Venda a Descoberto Facil',
    benefit3Desc: 'Acha que uma acao vai cair? Va short instantaneamente. Sem emprestar acoes, sem taxas de emprestimo, sem restricoes. So clique vender.',

    benefit4Title: 'Sem KYC Necessario',
    benefit4Desc: 'Sem upload de identidade. Sem esperar aprovacao. Sem dados pessoais coletados. Conecte sua carteira e comece a negociar em minutos.',

    benefit5Title: 'Auto-Custodia',
    benefit5Desc: 'Seus fundos ficam na sua carteira. Sem corretora guardando seu dinheiro. Sem bloqueios. Sem limites de saque. Voce controla seus ativos.',

    benefit6Title: 'Liquidacao Instantanea',
    benefit6Desc: 'Sem espera de T+2. Lucros disponiveis imediatamente. Feche uma posicao e saque para sua carteira em segundos.',

    // How It Works Section
    howItWorksTitle: 'Como',
    howItWorksTitleHighlight: 'Realmente',
    howItWorksTitleEnd: 'Funciona',
    howItWorksDesc: 'A mecanica por tras dos equity perpetuals em portugues simples',

    howItWorks1Title: 'Feeds de Preco Oracle',
    howItWorks1Desc1: 'Equity perps acompanham precos reais de acoes usando',
    howItWorks1Bold: 'oraculos',
    howItWorks1Desc2: '- servicos que puxam dados de preco ao vivo de bolsas de valores e entregam na blockchain. Provedores como Pyth agregam precos de multiplas fontes para garantir precisao.',
    howItWorks1Note: 'Atualizado a cada segundo durante o horario de mercado',

    howItWorks2Title: 'Taxas de Funding Mantem Precos Alinhados',
    howItWorks2Desc: 'A cada 1-8 horas, traders pagam ou recebem',
    howItWorks2Bold: 'funding',
    howItWorks2Desc2: 'baseado em se o preco do perp esta acima ou abaixo do preco oracle. Se perps negociam acima do spot, longs pagam shorts (empurrando o preco para baixo). Isso mantem os precos dos perps acompanhando de perto os precos reais das acoes.',
    howItWorks2Above: 'Perp > Spot',
    howItWorks2AboveDesc: 'Longs pagam shorts',
    howItWorks2Below: 'Perp < Spot',
    howItWorks2BelowDesc: 'Shorts pagam longs',

    howItWorks3Title: 'Alavancagem e Liquidacao',
    howItWorks3Desc1: 'Sua',
    howItWorks3Bold1: 'margem',
    howItWorks3Desc2: 'e a garantia que suporta sua posicao. Com 10x de alavancagem, um movimento adverso de 10% zeraria sua margem. Antes disso acontecer, voce e',
    howItWorks3Bold2: 'liquidado',
    howItWorks3Desc3: '- sua posicao e automaticamente fechada para prevenir mais perdas.',
    howItWorks3Tip: 'Dica pro:',
    howItWorks3TipDesc: 'Comece com 2-5x de alavancagem. Muitos iniciantes usam 20x+ e sao liquidados em volatilidade normal. Menor alavancagem = mais margem para erro.',

    // Getting Started Section
    getStartedBadge: 'Menos de 10 Minutos',
    getStartedTitle: 'Configure em',
    getStartedTitleHighlight: '3 Passos Simples',
    getStartedDesc: 'Sem formularios. Sem espera de aprovacao. Sem saldo minimo.',

    step1Title: 'Configure Sua Carteira Digital',
    step1Desc: 'Gratis, leva 2 minutos, e voce so faz isso uma vez',
    step1Show: 'Mostrar Detalhes',
    step1Hide: 'Ocultar Detalhes',
    walletExplainTitle: 'O que e uma carteira digital?',
    walletExplainDesc1: 'Pense nela como uma',
    walletExplainBold: 'conta bancaria digital',
    walletExplainDesc2: 'que voce controla totalmente. Em vez de um banco guardar seu dinheiro, voce mesmo guarda usando uma simples extensao do navegador.',
    walletFeature1: 'Voce controla',
    walletFeature2: 'Totalmente gratis',
    walletFeature3: '2 min de setup',
    walletFeature4: 'Funciona globalmente',
    walletSetupTitle: 'Como configurar:',
    walletStep1: 'Va para',
    walletStep1Link: 'rabby.io',
    walletStep1End: '(e a carteira que recomendamos)',
    walletStep2: 'Clique em "Download" e adicione ao seu navegador (Chrome, Firefox, etc.)',
    walletStep3: 'Clique em "Create New Wallet" e defina uma senha',
    walletStep4: 'Anote sua frase de recuperacao de 12 palavras',
    walletStep4Warning: 'Isso e como uma senha mestra - guarde em seguranca e nunca compartilhe!',
    watchVideo: 'Assista: Guia de Setup de 2 Minutos',
    watchVideoDesc: 'Este video mostra cada passo. Siga junto e sua carteira estara pronta rapidinho.',
    downloadRabby: 'Baixar Rabby',

    step2Title: 'Financie com USDC',
    step2Desc: 'Transfira da Coinbase, Kraken ou Binance - ou use PIX',
    step2Show: 'Mostrar Detalhes',
    step2Hide: 'Ocultar Detalhes',
    fromCoinbase: 'Da Coinbase',
    coinbaseSteps: ['Va para Enviar/Receber', 'Selecione USDC', 'Cole seu endereco Rabby', 'Escolha rede Arbitrum', 'Confirme envio'],
    coinbaseFee: 'Taxa: ~$0.10 na Arbitrum',
    fromKraken: 'Da Kraken',
    krakenSteps: ['Va para Funding > Withdraw', 'Busque USDC', 'Adicione seu endereco Rabby', 'Selecione Arbitrum One', 'Confirme com 2FA'],
    krakenFee: 'Taxa: ~$1-3',
    fromBinance: 'Da Binance',
    binanceSteps: ['Carteira > Sacar', 'Selecione USDC', 'Cole seu endereco Rabby', 'Rede: Arbitrum', 'Complete verificacao'],
    binanceFee: 'Taxa: ~$0.50',
    fundingProTip: 'Dica pro:',
    fundingProTipDesc: 'Sempre use a rede Arbitrum para taxas mais baixas. Comece com $50-100 para testar. Fundos chegam em 1-5 minutos.',

    step3Title: 'Escolha uma Plataforma e Comece a Negociar',
    step3Desc: 'Escolha uma plataforma de equity perps - recomendamos',
    step3DescLink: 'Hyperliquid',
    step3DescEnd: 'para iniciantes',
    step3Step1: 'Va para',
    step3Step1Link: 'app.hyperliquid.xyz',
    step3Step2: 'Clique em "Connect" e selecione Rabby Wallet',
    step3Step3: 'Deposite seu USDC na plataforma',
    step3Step4: 'Busque uma acao (ex: NVDA-PERP)',
    step3Step5: 'Escolha Long ou Short, defina alavancagem, e negocie!',
    openHyperliquid: 'Abrir Hyperliquid',
    mostPopular: 'Plataforma mais popular',
    readFullGuide: 'Leia o guia completo de configuracao de carteira',

    // Risks Section
    risksTitle: 'Entenda os Riscos',
    risk1Title: 'Alavancagem amplifica perdas',
    risk1Desc: '- Os mesmos 10x que transformam 5% em 50% de ganho tambem transformam 5% de perda em 50% de perda',
    risk2Title: 'Liquidacao e real',
    risk2Desc: '- Sua posicao pode ser fechada automaticamente se mover contra voce o suficiente',
    risk3Title: 'Taxas de funding custam dinheiro',
    risk3Desc: '- Manter posicoes custa dinheiro a cada algumas horas, especialmente em trades populares',
    risk4Title: 'Sem propriedade',
    risk4Desc: '- Voce esta negociando exposicao de preco, nao acoes reais. Sem dividendos, sem direitos de voto',

    // CTA Section
    ctaTitle: 'Pronto para Experimentar?',
    ctaDesc: 'Comece com $50 e alavancagem baixa. Veja como e negociar acoes 24/7.',
    ctaButton: 'Comece na Hyperliquid',
    ctaCompare: 'Compare Todas as Plataformas',
    ctaBrazil: 'Guia para Brasileiros',

    // FAQ Section
    faqTitle: 'Perguntas Frequentes',

    // Back Link
    backLink: 'Comparar plataformas',
  },
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Learn',
    pageTitle: 'What Are Equity Perpetuals',

    // Hero
    badge: 'Beginner Guide',
    title1: 'What Are',
    title2: 'Equity Perpetuals?',
    subtitle: 'Imagine trading',
    subtitleStocks: 'Tesla, Nvidia, and Apple',
    subtitleTime: 'at 2am on a Saturday',
    subtitleLeverage: 'with 50x leverage',
    subtitleEnd: '. No broker. No approval. Just you and the markets.',

    // Quick Stats
    stat1Value: '24',
    stat1Label: 'Hours a Day',
    stat1Sub: '7 days a week',
    stat2Value: '200x',
    stat2Label: 'Max Leverage',
    stat2Sub: 'Capital efficient',
    stat3Value: '50+',
    stat3Label: 'Stocks Available',
    stat3Sub: 'Top US equities',

    // CTAs
    learnMore: 'Learn More',
    startTrading: 'Start Trading Now',

    // Simple Explanation Section
    simpleTitle: 'The',
    simpleTitleHighlight: 'Simple',
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
    positionType: 'Long 10x',
    marginLabel: 'Margin',
    positionSizeLabel: 'Position Size',
    pnlLabel: 'Unrealized P&L',
    neverExpire: 'Unlike regular futures, perpetuals',
    neverExpireBold: 'never expire',
    neverExpireEnd: '. Hold for 5 minutes or 5 months.',

    // Benefits Section
    benefitsTitle: 'Why Traders Are',
    benefitsTitleHighlight: 'Switching',
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

    // How It Works Section
    howItWorksTitle: 'How It',
    howItWorksTitleHighlight: 'Actually',
    howItWorksTitleEnd: 'Works',
    howItWorksDesc: 'The mechanics behind equity perpetuals in plain English',

    howItWorks1Title: 'Oracle Price Feeds',
    howItWorks1Desc1: 'Equity perps track real stock prices using',
    howItWorks1Bold: 'oracles',
    howItWorks1Desc2: '- services that pull live price data from stock exchanges and deliver it on-chain. Providers like Pyth aggregate prices from multiple sources to ensure accuracy.',
    howItWorks1Note: 'Updated every second during market hours',

    howItWorks2Title: 'Funding Rates Keep Prices Aligned',
    howItWorks2Desc: 'Every 1-8 hours, traders pay or receive',
    howItWorks2Bold: 'funding',
    howItWorks2Desc2: 'based on whether the perp price is above or below the oracle price. If perps trade above spot, longs pay shorts (pushing price down). This keeps perp prices closely tracking real stock prices.',
    howItWorks2Above: 'Perp > Spot',
    howItWorks2AboveDesc: 'Longs pay shorts',
    howItWorks2Below: 'Perp < Spot',
    howItWorks2BelowDesc: 'Shorts pay longs',

    howItWorks3Title: 'Leverage & Liquidation',
    howItWorks3Desc1: 'Your',
    howItWorks3Bold1: 'margin',
    howItWorks3Desc2: 'is the collateral backing your position. With 10x leverage, a 10% adverse move would wipe out your margin. Before that happens, you get',
    howItWorks3Bold2: 'liquidated',
    howItWorks3Desc3: '- your position is automatically closed to prevent further losses.',
    howItWorks3Tip: 'Pro tip:',
    howItWorks3TipDesc: 'Start with 2-5x leverage. Many beginners use 20x+ and get liquidated on normal volatility. Lower leverage = more room to be wrong.',

    // Getting Started Section
    getStartedBadge: 'Less Than 10 Minutes',
    getStartedTitle: 'Get Set Up in',
    getStartedTitleHighlight: '3 Simple Steps',
    getStartedDesc: 'No application forms. No approval wait. No minimum balance.',

    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    step1Show: 'Show Details',
    step1Hide: 'Hide Details',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc1: 'Think of it like a',
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
    walletStep4Warning: 'This is like a master password - keep it safe and never share it!',
    watchVideo: 'Watch: 2-Minute Setup Guide',
    watchVideoDesc: 'This video walks you through every step. Follow along and you\'ll have your wallet ready in no time.',
    downloadRabby: 'Download Rabby',

    step2Title: 'Fund with USDC',
    step2Desc: 'Transfer from Coinbase, Kraken, or Binance - or use card',
    step2Show: 'Show Details',
    step2Hide: 'Hide Details',
    fromCoinbase: 'From Coinbase',
    coinbaseSteps: ['Go to Send/Receive', 'Select USDC', 'Paste your Rabby address', 'Choose Arbitrum network', 'Confirm send'],
    coinbaseFee: 'Fee: ~$0.10 on Arbitrum',
    fromKraken: 'From Kraken',
    krakenSteps: ['Go to Funding > Withdraw', 'Search USDC', 'Add your Rabby address', 'Select Arbitrum One', 'Confirm with 2FA'],
    krakenFee: 'Fee: ~$1-3',
    fromBinance: 'From Binance',
    binanceSteps: ['Wallet > Withdraw', 'Select USDC', 'Paste your Rabby address', 'Network: Arbitrum', 'Complete verification'],
    binanceFee: 'Fee: ~$0.50',
    fundingProTip: 'Pro tip:',
    fundingProTipDesc: 'Always use Arbitrum network for lowest fees. Start with $50-100 to test. Funds arrive in 1-5 minutes.',

    step3Title: 'Choose a Platform & Start Trading',
    step3Desc: 'Pick an equity perps venue - we recommend',
    step3DescLink: 'Hyperliquid',
    step3DescEnd: 'for beginners',
    step3Step1: 'Go to',
    step3Step1Link: 'app.hyperliquid.xyz',
    step3Step2: 'Click "Connect" and select Rabby Wallet',
    step3Step3: 'Deposit your USDC to the platform',
    step3Step4: 'Search for a stock (e.g., NVDA-PERP)',
    step3Step5: 'Choose Long or Short, set leverage, and trade!',
    openHyperliquid: 'Open Hyperliquid',
    mostPopular: 'Most popular platform',
    readFullGuide: 'Read the complete wallet setup guide',

    // Risks Section
    risksTitle: 'Understand the Risks',
    risk1Title: 'Leverage amplifies losses',
    risk1Desc: '- The same 10x that turns 5% into 50% gains also turns 5% losses into 50% losses',
    risk2Title: 'Liquidation is real',
    risk2Desc: '- Your position can be closed automatically if it moves against you enough',
    risk3Title: 'Funding rates cost money',
    risk3Desc: '- Holding positions costs money every few hours, especially on popular trades',
    risk4Title: 'No ownership',
    risk4Desc: '- You\'re trading price exposure, not actual shares. No dividends, no voting rights',

    // CTA Section
    ctaTitle: 'Ready to Try It?',
    ctaDesc: 'Start with $50 and low leverage. See what 24/7 stock trading feels like.',
    ctaButton: 'Start on Hyperliquid',
    ctaCompare: 'Compare All Platforms',
    ctaBrazil: 'Guide for Brazilians',

    // FAQ Section
    faqTitle: 'Frequently Asked Questions',

    // Back Link
    backLink: 'Compare platforms',
  }
};

const faqs = {
  pt: [
    {
      question: "Qual e a diferenca entre equity perps e trading tradicional de acoes?",
      answer: "Equity perps permitem negociar com alavancagem (ate 200x), 24/7, sem possuir acoes reais. Acoes tradicionais exigem capital total, negociam apenas em horario comercial, e dao direitos de propriedade como dividendos e voto."
    },
    {
      question: "Quanto dinheiro preciso para comecar a negociar equity perps?",
      answer: "Voce pode comecar com apenas $10-50 na maioria das plataformas. Porem, recomendamos comecar com pelo menos $100-500 para ter margem adequada e evitar liquidacao imediata em pequenos movimentos de preco."
    },
    {
      question: "Equity perps sao legais?",
      answer: "Equity perps existem em uma area cinza regulatoria. A maioria das plataformas e descentralizada e nao exige KYC. A legalidade varia por jurisdicao. Residentes do Brasil devem estar cientes de que essas plataformas geralmente operam fora de estruturas regulatorias tradicionais."
    },
    {
      question: "O que acontece se minha posicao for liquidada?",
      answer: "Quando sua posicao e liquidada, sua margem e usada para fechar a posicao e cobrir perdas. Voce perde sua margem depositada mas nao devera dinheiro adicional. Algumas plataformas tem fundos de seguro para prevenir perdas socializadas."
    },
    {
      question: "Posso negociar equity perps nos fins de semana?",
      answer: "Sim, a maioria das plataformas como Hyperliquid e Lighter oferecem trading 24/7. Porem, precos podem ser menos volateis nos fins de semana ja que mercados de acoes tradicionais estao fechados e oraculos usam o ultimo preco de fechamento."
    },
    {
      question: "O que sao taxas de funding e por que importam?",
      answer: "Taxas de funding sao pagamentos periodicos entre traders long e short que mantem precos dos perps alinhados com precos spot. Se voce mantem uma posicao, voce paga ou recebe funding a cada 1-8 horas dependendo da plataforma."
    }
  ],
  en: [
    {
      question: "What is the difference between equity perps and regular stock trading?",
      answer: "Equity perps let you trade with leverage (up to 200x), 24/7, without owning actual shares. Regular stocks require full capital, trade only during market hours, and give you ownership rights like dividends and voting."
    },
    {
      question: "How much money do I need to start trading equity perps?",
      answer: "You can start with as little as $10-50 on most platforms. However, we recommend starting with at least $100-500 to have adequate margin and avoid immediate liquidation on small price moves."
    },
    {
      question: "Are equity perps legal?",
      answer: "Equity perps exist in a regulatory gray area. Most platforms are decentralized and don't require KYC. Legality varies by jurisdiction. Brazilian residents should be aware these platforms typically operate outside traditional regulatory frameworks."
    },
    {
      question: "What happens if my position gets liquidated?",
      answer: "When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won't owe additional money. Some platforms have insurance funds to prevent socialized losses."
    },
    {
      question: "Can I trade equity perps on weekends?",
      answer: "Yes, most platforms like Hyperliquid and Lighter offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price."
    },
    {
      question: "What are funding rates and why do they matter?",
      answer: "Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. If you hold a position, you either pay or receive funding every 1-8 hours depending on the platform."
    }
  ]
};

export default function OQueSaoEquityPerpetuals() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const t = translations[lang];
  const currentFaqs = faqs[lang];
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "O Que Sao Equity Perpetuals? Guia Completo para Iniciantes",
    description: "Aprenda o que sao equity perpetuals, como funcionam e por que traders os utilizam. Guia completo em portugues.",
    author: { "@type": "Organization", name: "Compare Equity Perps" },
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString(),
    inLanguage: "pt-BR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://compareequityperps.com/blog/o-que-sao-equity-perpetuals"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: currentFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="min-h-screen">
        {/* HERO SECTION - Brazil Colors */}
        <section className="relative overflow-hidden">
          {/* Animated Background with Green/Yellow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Language Toggle */}
          <div className="absolute top-4 right-4 z-10">
            <LanguageToggle
              currentLang={lang}
              nativeLang="pt"
              nativeName="Portugues"
              onToggle={(l) => setLang(l as 'pt' | 'en')}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">{t.home}</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">{t.blog}</Link>
              <span className="mx-2">/</span>
              <span className="text-green-400">{t.pageTitle}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <span className="text-green-400 text-sm font-medium">{t.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                {t.title1}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-green-400">
                  {t.title2}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t.subtitle} <span className="text-white font-semibold">{t.subtitleStocks}</span>
                <span className="text-green-400 font-semibold"> {t.subtitleTime}</span>
                <span className="text-yellow-400 font-semibold"> {t.subtitleLeverage}</span>{t.subtitleEnd}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-green-400">{t.stat1Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat1Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat1Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-yellow-400">{t.stat2Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat2Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat2Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-green-400">{t.stat3Value}</span>
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-yellow-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-green-400 hover:to-yellow-400 transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
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

        {/* WHAT IS IT - Simple Explainer */}
        <section id="simple-explanation" className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.simpleTitle} <span className="text-green-400">{t.simpleTitleHighlight}</span> Explanation
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
                      <span className="text-green-400 text-xl">1.</span>
                      <span>{t.step1} <strong className="text-white">{t.step1Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">2.</span>
                      <span>{t.step2} <strong className="text-white">{t.step2Bold}</strong> {t.step2End}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">3.</span>
                      <span>{t.step3} <strong className="text-white">{t.step3Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">4.</span>
                      <span>{t.step4} <strong className="text-green-400">{t.step4Bold}</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">{t.positionTitle}</div>
                    <div className="text-4xl font-black text-white mb-1">NVDA-PERP</div>
                    <div className="text-green-400 text-xl font-bold">{t.positionType}</div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">{t.marginLabel}</span>
                        <span className="text-white">$100</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">{t.positionSizeLabel}</span>
                        <span className="text-white">$1,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">{t.pnlLabel}</span>
                        <span className="text-green-400">+$50.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-8">
              {t.neverExpire} <strong className="text-white">{t.neverExpireBold}</strong>{t.neverExpireEnd}
            </p>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section id="benefits" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.benefitsTitle} <span className="text-green-400">{t.benefitsTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t.benefitsDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit 1 - 24/7 */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit1Title}</h3>
                <p className="text-gray-400">{t.benefit1Desc}</p>
              </div>

              {/* Benefit 2 - Leverage */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit2Title}</h3>
                <p className="text-gray-400">{t.benefit2Desc}</p>
              </div>

              {/* Benefit 3 - Short Selling */}
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="group bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit5Title}</h3>
                <p className="text-gray-400">{t.benefit5Desc}</p>
              </div>

              {/* Benefit 6 - Instant Settlement */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                {t.howItWorksTitle} <span className="text-green-400">{t.howItWorksTitleHighlight}</span> {t.howItWorksTitleEnd}
              </h2>
              <p className="text-gray-400 text-lg">
                {t.howItWorksDesc}
              </p>
            </div>

            <div className="space-y-8">
              {/* Oracle Pricing */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howItWorks1Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.howItWorks1Desc1} <strong className="text-white">{t.howItWorks1Bold}</strong> {t.howItWorks1Desc2}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t.howItWorks1Note}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding Rates */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howItWorks2Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.howItWorks2Desc} <strong className="text-white">{t.howItWorks2Bold}</strong> {t.howItWorks2Desc2}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-semibold">{t.howItWorks2Above}</div>
                        <div className="text-gray-500 text-sm">{t.howItWorks2AboveDesc}</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-red-400 font-semibold">{t.howItWorks2Below}</div>
                        <div className="text-gray-500 text-sm">{t.howItWorks2BelowDesc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leverage & Liquidation */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howItWorks3Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.howItWorks3Desc1} <strong className="text-white">{t.howItWorks3Bold1}</strong> {t.howItWorks3Desc2} <strong className="text-white">{t.howItWorks3Bold2}</strong> {t.howItWorks3Desc3}
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <p className="text-yellow-400 text-sm">
                        <strong>{t.howItWorks3Tip}</strong> {t.howItWorks3TipDesc}
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
                <span className="text-green-400 font-medium">{t.getStartedBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.getStartedTitle} <span className="text-green-400">{t.getStartedTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg">
                {t.getStartedDesc}
              </p>
            </div>

            {/* Step 1 - Wallet Setup (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-green-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-green-500/50 transition-colors"
                onClick={() => setWalletExpanded(!walletExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                    <p className="text-gray-400">{t.step1Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-sm font-medium hidden sm:block">
                      {walletExpanded ? t.step1Hide : t.step1Show}
                    </span>
                    <svg
                      className={`w-6 h-6 text-green-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
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
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                      <h4 className="text-green-400 font-semibold mb-2">{t.walletExplainTitle}</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {t.walletExplainDesc1} <strong className="text-white">{t.walletExplainBold}</strong> {t.walletExplainDesc2}
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
                          <div className="text-lg mb-1">&#127758;</div>
                          <span className="text-gray-400">{t.walletFeature4}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-4">{t.walletSetupTitle}</h4>
                        <ol className="space-y-3 text-gray-300">
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">1</span>
                            <span>{t.walletStep1} <a href="https://rabby.io" target="_blank" rel="noopener" className="text-green-400 hover:text-green-300 underline">{t.walletStep1Link}</a> {t.walletStep1End}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">2</span>
                            <span>{t.walletStep2}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">3</span>
                            <span>{t.walletStep3}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">4</span>
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
                            title="How to Set Up a Wallet for Trading Equity Perps"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <p className="text-gray-500 text-xs mb-3">
                          {t.watchVideoDesc}
                        </p>
                        <a
                          href="https://rabby.io"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-green-400 transition-colors"
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
                className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-yellow-500/50 transition-colors"
                onClick={() => setFundingExpanded(!fundingExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step2Title}</h3>
                    <p className="text-gray-400">{t.step2Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400 text-sm font-medium hidden sm:block">
                      {fundingExpanded ? t.step2Hide : t.step2Show}
                    </span>
                    <svg
                      className={`w-6 h-6 text-yellow-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
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
                        <strong className="text-white">{t.fundingProTip}</strong> {t.fundingProTipDesc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 - Choose Platform & Trade */}
            <div className="mb-8">
              <div className="bg-gray-900 border-2 border-green-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t.step3Title}</h3>
                    <p className="text-gray-400">{t.step3Desc} <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-green-400 hover:text-green-300">{t.step3DescLink}</a> {t.step3DescEnd}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5">
                    <ol className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">1</span>
                        <span>{t.step3Step1} <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-green-400 hover:text-green-300">{t.step3Step1Link}</a></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">2</span>
                        <span>{t.step3Step2}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">3</span>
                        <span>{t.step3Step3}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">4</span>
                        <span>{t.step3Step4}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold flex-shrink-0">5</span>
                        <span>{t.step3Step5}</span>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={hyperliquid?.referralUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-green-500/20 to-yellow-500/10 border-2 border-green-500/50 rounded-2xl hover:border-green-400 transition-all group"
                    >
                      <div className="text-5xl">&#128640;</div>
                      <span className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{t.openHyperliquid}</span>
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
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium"
              >
                {t.readFullGuide}
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
                  <span><strong className="text-white">{t.risk1Title}</strong> {t.risk1Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk2Title}</strong> {t.risk2Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk3Title}</strong> {t.risk3Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk4Title}</strong> {t.risk4Desc}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-green-500/20 via-yellow-500/10 to-green-500/20 border border-green-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />

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
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-yellow-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-green-400 hover:to-yellow-400 transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
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
                    {t.ctaCompare}
                  </Link>
                </div>

                <div className="mt-6">
                  <Link
                    href="/blog/trade-us-stocks-from-brazil"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium"
                  >
                    &#127463;&#127479; {t.ctaBrazil}
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
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">{t.faqTitle}</h2>

            <div className="space-y-3">
              {currentFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="font-medium text-white pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-green-400 flex-shrink-0 transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
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

                  {expandedFaq === index && (
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
            {t.backLink}
          </Link>
        </div>
      </article>
    </>
  );
}
