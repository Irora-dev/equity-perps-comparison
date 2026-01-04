'use client';

import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Translation object with both Portuguese and English versions
const translations = {
  pt: {
    // Meta
    pageTitle: 'Como Converter BRL para USDC',
    pageDescription: 'Guia completo para converter Real Brasileiro (BRL) para USDC usando PIX. Compare Binance P2P, Mercado Bitcoin e Foxbit com instrucoes passo a passo.',

    // Breadcrumb
    home: 'Inicio',
    blog: 'Blog',
    currentPage: 'Converter BRL para USDC',

    // Hero
    badge: 'Guia Brasil',
    badgeYear: '2026',
    heroTitle: 'Como Converter BRL para USDC',
    heroSubtitle: 'Guia Completo com PIX',
    heroDesc: 'Converta Real Brasileiro para USDC de forma rapida e segura usando PIX. Compare as melhores plataformas e siga nosso guia passo a passo.',

    // Stats
    stats: [
      { value: 'R$50', label: 'Minimo' },
      { value: '< 30min', label: 'Tempo Medio' },
      { value: 'PIX', label: 'Mais Rapido' },
      { value: '0-1%', label: 'Taxas' },
    ],

    // Intro
    introTitle: 'Por Que Converter BRL para USDC?',
    introDesc: 'USDC e uma stablecoin atrelada ao dolar americano, essencial para negociar em plataformas descentralizadas como Hyperliquid. Veja as vantagens:',
    introCards: [
      {
        icon: '💱',
        title: 'Protecao Cambial',
        desc: 'Mantenha seu dinheiro em dolar digital sem taxas de banco ou IOF.'
      },
      {
        icon: '⚡',
        title: 'Transferencias Rapidas',
        desc: 'Envie USDC para qualquer lugar do mundo em minutos, 24/7.'
      },
      {
        icon: '📈',
        title: 'Acesso a Trading',
        desc: 'Use USDC para negociar acoes americanas, cripto e mais.'
      },
      {
        icon: '🔒',
        title: 'Seguranca',
        desc: 'USDC e auditado e regulamentado, com lastro 1:1 em dolar.'
      }
    ],

    // Comparison Table
    comparisonTitle: 'Comparacao de Metodos',
    comparisonSubtitle: 'Escolha a melhor opcao para seu perfil',
    tableHeaders: {
      platform: 'Plataforma',
      fee: 'Taxa',
      speed: 'Velocidade',
      minAmount: 'Minimo',
      paymentMethods: 'Metodos de Pagamento',
      best: 'Melhor Para'
    },
    platforms: [
      {
        name: 'Binance P2P',
        fee: '0%',
        feeColor: 'text-green-400',
        speed: '5-30 min',
        minAmount: '~R$50',
        paymentMethods: ['PIX', 'TED', 'Banco do Brasil', 'Itau', 'Bradesco', 'Nubank'],
        best: 'Melhores taxas e liquidez',
        recommended: true
      },
      {
        name: 'Mercado Bitcoin',
        fee: '0.3-0.7%',
        feeColor: 'text-yellow-400',
        speed: '10-60 min',
        minAmount: 'R$50',
        paymentMethods: ['PIX', 'TED'],
        best: 'Simplicidade e confianca',
        recommended: false
      },
      {
        name: 'Foxbit',
        fee: '0.25-0.5%',
        feeColor: 'text-yellow-400',
        speed: '10-60 min',
        minAmount: 'R$20',
        paymentMethods: ['PIX', 'TED'],
        best: 'Menor valor minimo',
        recommended: false
      }
    ],

    // Step by Step Sections
    stepByStepTitle: 'Guia Passo a Passo',
    stepByStepSubtitle: 'Instrucoes detalhadas para cada plataforma',

    // Binance P2P Steps
    binanceTitle: 'Binance P2P',
    binanceRecommended: 'Recomendado',
    binanceDesc: 'Maior liquidez e melhores taxas para BRL',
    binanceSteps: [
      {
        title: 'Criar Conta na Binance',
        details: [
          'Acesse binance.com e clique em "Registrar"',
          'Use seu email e crie uma senha forte',
          'Complete a verificacao de identidade (KYC)',
          'Envie documento (RG ou CNH) e selfie'
        ]
      },
      {
        title: 'Acessar P2P Trading',
        details: [
          'No app ou site, clique em "Comprar Cripto"',
          'Selecione "P2P Trading"',
          'Escolha "Comprar" e selecione "USDC"',
          'Defina a moeda como "BRL"'
        ]
      },
      {
        title: 'Selecionar Vendedor',
        details: [
          'Filtre por metodo de pagamento: PIX',
          'Escolha vendedor com taxa de conclusao > 95%',
          'Verifique se aceita seu banco',
          'Confira a taxa de cambio oferecida'
        ]
      },
      {
        title: 'Realizar Pagamento via PIX',
        details: [
          'Insira o valor em BRL que deseja converter',
          'Clique em "Comprar USDC"',
          'Copie a chave PIX do vendedor',
          'Faca o PIX pelo app do seu banco',
          'Volte a Binance e clique "Transferencia Feita"'
        ]
      },
      {
        title: 'Receber USDC',
        details: [
          'Aguarde o vendedor confirmar o pagamento',
          'USDC sera creditado na sua conta Binance',
          'Tempo medio: 5-15 minutos',
          'Se houver problema, abra disputa na plataforma'
        ]
      }
    ],

    // Mercado Bitcoin Steps
    mercadoBitcoinTitle: 'Mercado Bitcoin',
    mercadoBitcoinDesc: 'Exchange brasileira confiavel e regulamentada',
    mercadoBitcoinSteps: [
      {
        title: 'Criar Conta',
        details: [
          'Acesse mercadobitcoin.com.br',
          'Clique em "Criar Conta"',
          'Complete o cadastro com CPF',
          'Faca a verificacao de identidade'
        ]
      },
      {
        title: 'Depositar BRL via PIX',
        details: [
          'No painel, clique em "Depositar"',
          'Selecione "PIX" como metodo',
          'Copie a chave PIX ou QR Code',
          'Faca a transferencia pelo seu banco'
        ]
      },
      {
        title: 'Comprar USDC',
        details: [
          'Apos o deposito cair, va em "Negociar"',
          'Selecione o par "USDC/BRL"',
          'Insira o valor e confirme a compra',
          'USDC sera creditado instantaneamente'
        ]
      },
      {
        title: 'Sacar para Carteira',
        details: [
          'Va em "Sacar" e selecione USDC',
          'Escolha a rede (Arbitrum recomendado)',
          'Cole o endereco da sua carteira Rabby',
          'Confirme o saque'
        ]
      }
    ],

    // Foxbit Steps
    foxbitTitle: 'Foxbit',
    foxbitDesc: 'Exchange brasileira com menor valor minimo',
    foxbitSteps: [
      {
        title: 'Criar Conta',
        details: [
          'Acesse foxbit.com.br',
          'Clique em "Abrir Conta"',
          'Preencha seus dados e CPF',
          'Complete a verificacao de identidade'
        ]
      },
      {
        title: 'Depositar BRL',
        details: [
          'Clique em "Depositar"',
          'Escolha PIX ou TED',
          'Siga as instrucoes para transferir',
          'Deposito via PIX e instantaneo'
        ]
      },
      {
        title: 'Comprar USDC',
        details: [
          'Acesse a area de negociacao',
          'Selecione USDC',
          'Defina o valor em BRL',
          'Confirme a compra'
        ]
      },
      {
        title: 'Transferir para Carteira',
        details: [
          'Va em "Sacar"',
          'Selecione USDC e a rede desejada',
          'Insira o endereco da sua carteira',
          'Confirme a transferencia'
        ]
      }
    ],

    // Payment Methods
    paymentMethodsTitle: 'Metodos de Pagamento',
    paymentMethodsSubtitle: 'Como pagar em cada plataforma',
    paymentMethods: [
      {
        name: 'PIX',
        icon: '⚡',
        speed: 'Instantaneo',
        fee: 'Gratis',
        available: 'Todas as plataformas',
        recommended: true,
        description: 'Metodo mais rapido e gratuito. Disponivel 24/7.'
      },
      {
        name: 'TED',
        icon: '🏦',
        speed: '30min - 24h',
        fee: 'Varia por banco',
        available: 'Todas as plataformas',
        recommended: false,
        description: 'Transferencia bancaria tradicional. Funciona em horario comercial.'
      },
      {
        name: 'Banco do Brasil',
        icon: '🟡',
        speed: 'Via PIX/TED',
        fee: 'Conforme banco',
        available: 'Binance P2P',
        recommended: false,
        description: 'Aceito por muitos vendedores P2P.'
      },
      {
        name: 'Itau',
        icon: '🟠',
        speed: 'Via PIX/TED',
        fee: 'Conforme banco',
        available: 'Binance P2P',
        recommended: false,
        description: 'Um dos bancos mais aceitos no P2P.'
      },
      {
        name: 'Bradesco',
        icon: '🔴',
        speed: 'Via PIX/TED',
        fee: 'Conforme banco',
        available: 'Binance P2P',
        recommended: false,
        description: 'Amplamente aceito por vendedores.'
      },
      {
        name: 'Nubank',
        icon: '💜',
        speed: 'Via PIX',
        fee: 'Gratis',
        available: 'Binance P2P',
        recommended: true,
        description: 'PIX instantaneo e gratuito. Muito popular entre traders.'
      }
    ],

    // Pro Tips
    proTipsTitle: 'Dicas Pro',
    proTipsSubtitle: 'Maximize suas conversoes e evite problemas',
    proTips: [
      {
        icon: '💡',
        title: 'Compare Taxas',
        desc: 'Antes de comprar, compare as taxas de cambio entre varios vendedores. Diferenca de 1% pode ser significativa em valores altos.'
      },
      {
        icon: '🔍',
        title: 'Verifique o Vendedor',
        desc: 'No P2P, sempre escolha vendedores com taxa de conclusao acima de 95% e muitas transacoes completadas.'
      },
      {
        icon: '⏰',
        title: 'Horarios de Pico',
        desc: 'Durante horario comercial brasileiro (9h-18h) ha mais vendedores ativos e melhores taxas.'
      },
      {
        icon: '📱',
        title: 'Use PIX Sempre',
        desc: 'PIX e instantaneo, gratuito e disponivel 24/7. E o metodo mais eficiente para conversao.'
      },
      {
        icon: '🔐',
        title: 'Seguranca',
        desc: 'Nunca negocie fora da plataforma. Use apenas o chat e sistema de pagamento oficial.'
      },
      {
        icon: '📊',
        title: 'Fracionamento',
        desc: 'Para valores altos (>R$10.000), considere dividir em varias transacoes menores.'
      },
      {
        icon: '💾',
        title: 'Guarde Comprovantes',
        desc: 'Mantenha screenshots e comprovantes de todas as transacoes para eventual disputa.'
      },
      {
        icon: '🌐',
        title: 'Rede Correta',
        desc: 'Ao sacar USDC, use rede Arbitrum para taxas mais baixas. Nunca envie para rede errada!'
      }
    ],

    // FAQ
    faqTitle: 'Perguntas Frequentes',
    faqs: [
      {
        q: 'Qual a diferenca entre USDC e USDT?',
        a: 'Ambos sao stablecoins atrelados ao dolar. USDC e emitido pela Circle, mais regulamentado e transparente. USDT (Tether) tem mais liquidez mas menos transparencia. Para trading em DEXs como Hyperliquid, USDC e preferido.'
      },
      {
        q: 'E seguro usar P2P?',
        a: 'Sim, quando feito atraves de plataformas confiaveis como Binance. O sistema de escrow protege comprador e vendedor. O USDC fica retido ate o pagamento ser confirmado.'
      },
      {
        q: 'Quanto tempo demora a conversao?',
        a: 'Com PIX no P2P, geralmente 5-30 minutos. Em exchanges como Mercado Bitcoin, o deposito e instantaneo via PIX e a compra tambem.'
      },
      {
        q: 'Preciso declarar no imposto?',
        a: 'Sim. Transacoes com criptoativos devem ser declaradas a Receita Federal. Mantenha registro de todas as operacoes e consulte um contador.'
      },
      {
        q: 'Qual o valor minimo para converter?',
        a: 'Depende da plataforma: Binance P2P (~R$50), Mercado Bitcoin (R$50), Foxbit (R$20). Recomendamos comecar com valores pequenos para testar.'
      },
      {
        q: 'Posso converter USDC de volta para BRL?',
        a: 'Sim! O processo e o inverso: venda USDC no P2P ou exchange e receba via PIX. As mesmas plataformas funcionam nos dois sentidos.'
      }
    ],

    // CTA
    ctaTitle: 'Pronto para Comecar?',
    ctaDesc: 'Converta BRL para USDC e comece a negociar acoes americanas hoje mesmo.',
    ctaButton: 'Ver Guia de Trading Brasil',
    ctaSecondary: 'Comparar Plataformas',

    // Footer
    lastUpdated: 'Ultima atualizacao: Janeiro 2026',
    disclaimer: 'Este guia e apenas educacional. Criptoativos envolvem riscos. Faca sua propria pesquisa.'
  },
  en: {
    // Meta
    pageTitle: 'How to Convert BRL to USDC',
    pageDescription: 'Complete guide to convert Brazilian Real (BRL) to USDC using PIX. Compare Binance P2P, Mercado Bitcoin, and Foxbit with step-by-step instructions.',

    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    currentPage: 'Convert BRL to USDC',

    // Hero
    badge: 'Brazil Guide',
    badgeYear: '2026',
    heroTitle: 'How to Convert BRL to USDC',
    heroSubtitle: 'Complete Guide with PIX',
    heroDesc: 'Convert Brazilian Real to USDC quickly and safely using PIX. Compare the best platforms and follow our step-by-step guide.',

    // Stats
    stats: [
      { value: 'R$50', label: 'Minimum' },
      { value: '< 30min', label: 'Average Time' },
      { value: 'PIX', label: 'Fastest' },
      { value: '0-1%', label: 'Fees' },
    ],

    // Intro
    introTitle: 'Why Convert BRL to USDC?',
    introDesc: 'USDC is a stablecoin pegged to the US dollar, essential for trading on decentralized platforms like Hyperliquid. See the advantages:',
    introCards: [
      {
        icon: '💱',
        title: 'Currency Protection',
        desc: 'Keep your money in digital dollars without bank fees or IOF tax.'
      },
      {
        icon: '⚡',
        title: 'Fast Transfers',
        desc: 'Send USDC anywhere in the world in minutes, 24/7.'
      },
      {
        icon: '📈',
        title: 'Access to Trading',
        desc: 'Use USDC to trade US stocks, crypto, and more.'
      },
      {
        icon: '🔒',
        title: 'Security',
        desc: 'USDC is audited and regulated, with 1:1 dollar backing.'
      }
    ],

    // Comparison Table
    comparisonTitle: 'Methods Comparison',
    comparisonSubtitle: 'Choose the best option for your profile',
    tableHeaders: {
      platform: 'Platform',
      fee: 'Fee',
      speed: 'Speed',
      minAmount: 'Minimum',
      paymentMethods: 'Payment Methods',
      best: 'Best For'
    },
    platforms: [
      {
        name: 'Binance P2P',
        fee: '0%',
        feeColor: 'text-green-400',
        speed: '5-30 min',
        minAmount: '~R$50',
        paymentMethods: ['PIX', 'TED', 'Banco do Brasil', 'Itau', 'Bradesco', 'Nubank'],
        best: 'Best rates and liquidity',
        recommended: true
      },
      {
        name: 'Mercado Bitcoin',
        fee: '0.3-0.7%',
        feeColor: 'text-yellow-400',
        speed: '10-60 min',
        minAmount: 'R$50',
        paymentMethods: ['PIX', 'TED'],
        best: 'Simplicity and trust',
        recommended: false
      },
      {
        name: 'Foxbit',
        fee: '0.25-0.5%',
        feeColor: 'text-yellow-400',
        speed: '10-60 min',
        minAmount: 'R$20',
        paymentMethods: ['PIX', 'TED'],
        best: 'Lowest minimum',
        recommended: false
      }
    ],

    // Step by Step Sections
    stepByStepTitle: 'Step-by-Step Guide',
    stepByStepSubtitle: 'Detailed instructions for each platform',

    // Binance P2P Steps
    binanceTitle: 'Binance P2P',
    binanceRecommended: 'Recommended',
    binanceDesc: 'Best liquidity and rates for BRL',
    binanceSteps: [
      {
        title: 'Create Binance Account',
        details: [
          'Go to binance.com and click "Register"',
          'Use your email and create a strong password',
          'Complete identity verification (KYC)',
          'Submit ID document and selfie'
        ]
      },
      {
        title: 'Access P2P Trading',
        details: [
          'On the app or website, click "Buy Crypto"',
          'Select "P2P Trading"',
          'Choose "Buy" and select "USDC"',
          'Set currency to "BRL"'
        ]
      },
      {
        title: 'Select Seller',
        details: [
          'Filter by payment method: PIX',
          'Choose seller with completion rate > 95%',
          'Check if they accept your bank',
          'Check the exchange rate offered'
        ]
      },
      {
        title: 'Make Payment via PIX',
        details: [
          'Enter the BRL amount you want to convert',
          'Click "Buy USDC"',
          'Copy the seller\'s PIX key',
          'Make PIX payment through your bank app',
          'Return to Binance and click "Transfer Made"'
        ]
      },
      {
        title: 'Receive USDC',
        details: [
          'Wait for seller to confirm payment',
          'USDC will be credited to your Binance account',
          'Average time: 5-15 minutes',
          'If there\'s an issue, open dispute on platform'
        ]
      }
    ],

    // Mercado Bitcoin Steps
    mercadoBitcoinTitle: 'Mercado Bitcoin',
    mercadoBitcoinDesc: 'Trusted and regulated Brazilian exchange',
    mercadoBitcoinSteps: [
      {
        title: 'Create Account',
        details: [
          'Go to mercadobitcoin.com.br',
          'Click "Create Account"',
          'Complete registration with CPF',
          'Complete identity verification'
        ]
      },
      {
        title: 'Deposit BRL via PIX',
        details: [
          'On dashboard, click "Deposit"',
          'Select "PIX" as method',
          'Copy PIX key or QR Code',
          'Make transfer through your bank'
        ]
      },
      {
        title: 'Buy USDC',
        details: [
          'After deposit clears, go to "Trade"',
          'Select "USDC/BRL" pair',
          'Enter amount and confirm purchase',
          'USDC will be credited instantly'
        ]
      },
      {
        title: 'Withdraw to Wallet',
        details: [
          'Go to "Withdraw" and select USDC',
          'Choose network (Arbitrum recommended)',
          'Paste your Rabby wallet address',
          'Confirm withdrawal'
        ]
      }
    ],

    // Foxbit Steps
    foxbitTitle: 'Foxbit',
    foxbitDesc: 'Brazilian exchange with lowest minimum',
    foxbitSteps: [
      {
        title: 'Create Account',
        details: [
          'Go to foxbit.com.br',
          'Click "Open Account"',
          'Fill in your details and CPF',
          'Complete identity verification'
        ]
      },
      {
        title: 'Deposit BRL',
        details: [
          'Click "Deposit"',
          'Choose PIX or TED',
          'Follow instructions to transfer',
          'PIX deposit is instant'
        ]
      },
      {
        title: 'Buy USDC',
        details: [
          'Access trading area',
          'Select USDC',
          'Set BRL amount',
          'Confirm purchase'
        ]
      },
      {
        title: 'Transfer to Wallet',
        details: [
          'Go to "Withdraw"',
          'Select USDC and desired network',
          'Enter your wallet address',
          'Confirm transfer'
        ]
      }
    ],

    // Payment Methods
    paymentMethodsTitle: 'Payment Methods',
    paymentMethodsSubtitle: 'How to pay on each platform',
    paymentMethods: [
      {
        name: 'PIX',
        icon: '⚡',
        speed: 'Instant',
        fee: 'Free',
        available: 'All platforms',
        recommended: true,
        description: 'Fastest and free method. Available 24/7.'
      },
      {
        name: 'TED',
        icon: '🏦',
        speed: '30min - 24h',
        fee: 'Varies by bank',
        available: 'All platforms',
        recommended: false,
        description: 'Traditional bank transfer. Works during business hours.'
      },
      {
        name: 'Banco do Brasil',
        icon: '🟡',
        speed: 'Via PIX/TED',
        fee: 'Per bank',
        available: 'Binance P2P',
        recommended: false,
        description: 'Accepted by many P2P sellers.'
      },
      {
        name: 'Itau',
        icon: '🟠',
        speed: 'Via PIX/TED',
        fee: 'Per bank',
        available: 'Binance P2P',
        recommended: false,
        description: 'One of the most accepted banks in P2P.'
      },
      {
        name: 'Bradesco',
        icon: '🔴',
        speed: 'Via PIX/TED',
        fee: 'Per bank',
        available: 'Binance P2P',
        recommended: false,
        description: 'Widely accepted by sellers.'
      },
      {
        name: 'Nubank',
        icon: '💜',
        speed: 'Via PIX',
        fee: 'Free',
        available: 'Binance P2P',
        recommended: true,
        description: 'Instant and free PIX. Very popular among traders.'
      }
    ],

    // Pro Tips
    proTipsTitle: 'Pro Tips',
    proTipsSubtitle: 'Maximize your conversions and avoid problems',
    proTips: [
      {
        icon: '💡',
        title: 'Compare Rates',
        desc: 'Before buying, compare exchange rates between multiple sellers. A 1% difference can be significant on large amounts.'
      },
      {
        icon: '🔍',
        title: 'Verify Seller',
        desc: 'In P2P, always choose sellers with completion rate above 95% and many completed transactions.'
      },
      {
        icon: '⏰',
        title: 'Peak Hours',
        desc: 'During Brazilian business hours (9am-6pm) there are more active sellers and better rates.'
      },
      {
        icon: '📱',
        title: 'Always Use PIX',
        desc: 'PIX is instant, free, and available 24/7. It\'s the most efficient method for conversion.'
      },
      {
        icon: '🔐',
        title: 'Security',
        desc: 'Never trade outside the platform. Only use official chat and payment system.'
      },
      {
        icon: '📊',
        title: 'Split Large Amounts',
        desc: 'For high values (>R$10,000), consider splitting into multiple smaller transactions.'
      },
      {
        icon: '💾',
        title: 'Keep Receipts',
        desc: 'Maintain screenshots and receipts of all transactions for potential disputes.'
      },
      {
        icon: '🌐',
        title: 'Correct Network',
        desc: 'When withdrawing USDC, use Arbitrum network for lower fees. Never send to wrong network!'
      }
    ],

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What\'s the difference between USDC and USDT?',
        a: 'Both are stablecoins pegged to the dollar. USDC is issued by Circle, more regulated and transparent. USDT (Tether) has more liquidity but less transparency. For trading on DEXs like Hyperliquid, USDC is preferred.'
      },
      {
        q: 'Is P2P safe?',
        a: 'Yes, when done through reliable platforms like Binance. The escrow system protects buyer and seller. USDC is held until payment is confirmed.'
      },
      {
        q: 'How long does conversion take?',
        a: 'With PIX on P2P, usually 5-30 minutes. On exchanges like Mercado Bitcoin, deposit is instant via PIX and purchase is also instant.'
      },
      {
        q: 'Do I need to declare for taxes?',
        a: 'Yes. Crypto transactions must be declared to Receita Federal (Brazilian IRS). Keep records of all operations and consult an accountant.'
      },
      {
        q: 'What\'s the minimum amount to convert?',
        a: 'Depends on platform: Binance P2P (~R$50), Mercado Bitcoin (R$50), Foxbit (R$20). We recommend starting with small amounts to test.'
      },
      {
        q: 'Can I convert USDC back to BRL?',
        a: 'Yes! The process is reversed: sell USDC on P2P or exchange and receive via PIX. The same platforms work both ways.'
      }
    ],

    // CTA
    ctaTitle: 'Ready to Get Started?',
    ctaDesc: 'Convert BRL to USDC and start trading US stocks today.',
    ctaButton: 'See Brazil Trading Guide',
    ctaSecondary: 'Compare Platforms',

    // Footer
    lastUpdated: 'Last updated: January 2026',
    disclaimer: 'This guide is educational only. Crypto assets involve risks. Do your own research.'
  }
};

// JSON-LD Schema in Portuguese
const getJsonLdSchema = (lang: 'pt' | 'en') => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": lang === 'pt' ? "Como Converter BRL para USDC" : "How to Convert BRL to USDC",
  "description": lang === 'pt'
    ? "Guia completo para converter Real Brasileiro (BRL) para USDC usando PIX, Binance P2P, Mercado Bitcoin e Foxbit."
    : "Complete guide to convert Brazilian Real (BRL) to USDC using PIX, Binance P2P, Mercado Bitcoin and Foxbit.",
  "image": "https://compareequityperps.com/images/brl-usdc-guide.png",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "BRL",
    "value": "50"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": lang === 'pt' ? "Conta bancaria brasileira" : "Brazilian bank account"
    },
    {
      "@type": "HowToSupply",
      "name": lang === 'pt' ? "Documento de identidade (RG ou CNH)" : "ID document (RG or CNH)"
    },
    {
      "@type": "HowToSupply",
      "name": lang === 'pt' ? "Smartphone com app de banco" : "Smartphone with bank app"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "PIX"
    },
    {
      "@type": "HowToTool",
      "name": "Binance P2P"
    },
    {
      "@type": "HowToTool",
      "name": "Mercado Bitcoin"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": lang === 'pt' ? "Criar conta na plataforma" : "Create platform account",
      "text": lang === 'pt'
        ? "Registre-se na Binance, Mercado Bitcoin ou Foxbit e complete a verificacao de identidade."
        : "Register on Binance, Mercado Bitcoin or Foxbit and complete identity verification."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": lang === 'pt' ? "Acessar area de compra" : "Access purchase area",
      "text": lang === 'pt'
        ? "Navegue ate a secao de compra de criptomoedas ou P2P Trading."
        : "Navigate to the cryptocurrency purchase section or P2P Trading."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": lang === 'pt' ? "Selecionar USDC e metodo de pagamento" : "Select USDC and payment method",
      "text": lang === 'pt'
        ? "Escolha USDC como criptomoeda e PIX como forma de pagamento."
        : "Choose USDC as cryptocurrency and PIX as payment method."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": lang === 'pt' ? "Realizar pagamento via PIX" : "Make payment via PIX",
      "text": lang === 'pt'
        ? "Faca a transferencia PIX para a chave fornecida e confirme o pagamento."
        : "Make PIX transfer to the provided key and confirm payment."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": lang === 'pt' ? "Receber USDC" : "Receive USDC",
      "text": lang === 'pt'
        ? "Apos confirmacao, o USDC sera creditado na sua conta. Transfira para sua carteira se desejar."
        : "After confirmation, USDC will be credited to your account. Transfer to your wallet if desired."
    }
  ],
  "inLanguage": lang === 'pt' ? "pt-BR" : "en-US"
});

export default function ComoConverterBRLParaUSDC() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = translations[lang];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>('binance');

  return (
    <>
      <Head>
        <title>{t.pageTitle} | Compare Equity Perps</title>
        <meta name="description" content={t.pageDescription} />
        <meta name="keywords" content="converter BRL USDC, como comprar USDC Brasil, PIX USDC, Binance P2P Brasil, Mercado Bitcoin USDC, Foxbit USDC" />
        <link rel="canonical" href="https://compareequityperps.com/blog/como-converter-brl-para-usdc" />
        <meta property="og:title" content={t.pageTitle} />
        <meta property="og:description" content={t.pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={lang === 'pt' ? 'pt_BR' : 'en_US'} />
        <html lang={lang === 'pt' ? 'pt-BR' : 'en'} />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLdSchema(lang)) }}
      />

      <div className="min-h-screen bg-gray-950">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Brazil flag colors gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-gray-950 to-yellow-500/20" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

          {/* Language Toggle */}
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1 bg-gray-800/70 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
              <button
                onClick={() => setLang('pt')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  lang === 'pt'
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                Portugues
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  lang === 'en'
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                English
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
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
                {t.badge}
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full border border-yellow-500/30">
                {t.badgeYear}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-2xl text-green-400 font-semibold mb-6">
              {t.heroSubtitle}
            </p>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              {t.heroDesc}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.stats.map((stat, i) => (
                <div key={i} className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Convert Section */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.introTitle}</h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">{t.introDesc}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {t.introCards.map((card, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/30 transition-colors">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.comparisonTitle}</h2>
            <p className="text-gray-400 text-center mb-10">{t.comparisonSubtitle}</p>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.tableHeaders.platform}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.tableHeaders.fee}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.tableHeaders.speed}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.tableHeaders.minAmount}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.tableHeaders.best}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {t.platforms.map((platform, i) => (
                      <tr key={i} className="hover:bg-gray-800/30 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-white font-semibold">{platform.name}</span>
                          {platform.recommended && (
                            <span className="ml-2 text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/30">
                              {lang === 'pt' ? 'Recomendado' : 'Recommended'}
                            </span>
                          )}
                        </td>
                        <td className={`px-6 py-4 font-semibold ${platform.feeColor}`}>{platform.fee}</td>
                        <td className="px-6 py-4 text-gray-300">{platform.speed}</td>
                        <td className="px-6 py-4 text-gray-300">{platform.minAmount}</td>
                        <td className="px-6 py-4 text-gray-400 text-sm">{platform.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Payment Methods Row */}
              <div className="border-t border-gray-800 p-6">
                <h4 className="text-white font-semibold mb-4">{t.tableHeaders.paymentMethods}</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {t.platforms.map((platform, i) => (
                    <div key={i}>
                      <p className="text-gray-400 text-sm mb-2">{platform.name}:</p>
                      <div className="flex flex-wrap gap-1">
                        {platform.paymentMethods.map((method, j) => (
                          <span key={j} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Section */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.stepByStepTitle}</h2>
            <p className="text-gray-400 text-center mb-10">{t.stepByStepSubtitle}</p>

            {/* Platform Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setExpandedPlatform('binance')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  expandedPlatform === 'binance'
                    ? 'bg-yellow-500 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Binance P2P
              </button>
              <button
                onClick={() => setExpandedPlatform('mercado')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  expandedPlatform === 'mercado'
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Mercado Bitcoin
              </button>
              <button
                onClick={() => setExpandedPlatform('foxbit')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  expandedPlatform === 'foxbit'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Foxbit
              </button>
            </div>

            {/* Binance P2P Steps */}
            {expandedPlatform === 'binance' && (
              <div className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">B</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.binanceTitle}</h3>
                    <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                      {t.binanceRecommended}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{t.binanceDesc}</p>

                <div className="space-y-4">
                  {t.binanceSteps.map((step, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                          {i + 1}
                        </div>
                        <h4 className="text-white font-semibold">{step.title}</h4>
                      </div>
                      <ul className="space-y-2 pl-11">
                        {step.details.map((detail, j) => (
                          <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">-</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mercado Bitcoin Steps */}
            {expandedPlatform === 'mercado' && (
              <div className="bg-gray-900 border-2 border-purple-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">MB</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.mercadoBitcoinTitle}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{t.mercadoBitcoinDesc}</p>

                <div className="space-y-4">
                  {t.mercadoBitcoinSteps.map((step, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {i + 1}
                        </div>
                        <h4 className="text-white font-semibold">{step.title}</h4>
                      </div>
                      <ul className="space-y-2 pl-11">
                        {step.details.map((detail, j) => (
                          <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-purple-400 mt-1">-</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Foxbit Steps */}
            {expandedPlatform === 'foxbit' && (
              <div className="bg-gray-900 border-2 border-orange-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">F</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.foxbitTitle}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{t.foxbitDesc}</p>

                <div className="space-y-4">
                  {t.foxbitSteps.map((step, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {i + 1}
                        </div>
                        <h4 className="text-white font-semibold">{step.title}</h4>
                      </div>
                      <ul className="space-y-2 pl-11">
                        {step.details.map((detail, j) => (
                          <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-orange-400 mt-1">-</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.paymentMethodsTitle}</h2>
            <p className="text-gray-400 text-center mb-10">{t.paymentMethodsSubtitle}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.paymentMethods.map((method, i) => (
                <div
                  key={i}
                  className={`bg-gray-900 border rounded-xl p-5 transition-colors ${
                    method.recommended
                      ? 'border-green-500/50 hover:border-green-500'
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold">{method.name}</h3>
                      {method.recommended && (
                        <span className="text-xs text-green-400">{lang === 'pt' ? 'Recomendado' : 'Recommended'}</span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-1 text-sm mb-3">
                    <p className="text-gray-400">
                      <span className="text-gray-500">{lang === 'pt' ? 'Velocidade:' : 'Speed:'}</span> <span className="text-white">{method.speed}</span>
                    </p>
                    <p className="text-gray-400">
                      <span className="text-gray-500">{lang === 'pt' ? 'Taxa:' : 'Fee:'}</span> <span className="text-green-400">{method.fee}</span>
                    </p>
                    <p className="text-gray-400">
                      <span className="text-gray-500">{lang === 'pt' ? 'Disponivel:' : 'Available:'}</span> <span className="text-gray-300">{method.available}</span>
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-green-900/20 to-yellow-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
                <span className="text-green-400 font-medium">{t.proTipsTitle}</span>
              </span>
              <p className="text-gray-400">{t.proTipsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {t.proTips.map((tip, i) => (
                <div key={i} className="bg-gray-900/80 border border-gray-800 rounded-xl p-5 hover:border-green-500/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{tip.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{tip.title}</h3>
                      <p className="text-gray-400 text-sm">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">{t.faqTitle}</h2>

            <div className="space-y-4">
              {t.faqs.map((faq, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="text-white font-medium pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-green-400 flex-shrink-0 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === i && (
                    <div className="px-5 pb-5 text-gray-400">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-500/20 to-yellow-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">{t.ctaDesc}</p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog/trade-us-stocks-from-brazil"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all shadow-lg shadow-green-500/25"
                >
                  {t.ctaButton}
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700 transition-all border border-gray-700"
                >
                  {t.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-sm mb-2">{t.lastUpdated}</p>
            <p className="text-gray-600 text-xs">{t.disclaimer}</p>
          </div>
        </section>
      </div>
    </>
  );
}
