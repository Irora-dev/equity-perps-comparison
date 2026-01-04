'use client';

import { useState } from 'react';
import Link from 'next/link';

// Translation object
const translations = {
  pt: {
    // Meta
    pageTitle: 'Estimador de Tempo PIX para USDC',
    pageDescription: 'Calcule o tempo e taxas para converter Real (BRL) para USDC via PIX. Compare Binance P2P, Mercado Bitcoin e NovaDAX.',

    // Breadcrumb
    home: 'Inicio',
    blog: 'Blog',
    currentPage: 'Tempo PIX para USDC',

    // Hero
    badge: 'Brasil',
    badgeYear: '2026',
    heroTitle: 'Estimador de Tempo',
    heroHighlight: 'PIX para USDC',
    heroDesc: 'Descubra quanto tempo leva para converter Real Brasileiro para USDC usando PIX. Compare metodos, taxas e tempos estimados.',

    // PIX Section
    pixTitle: 'O que e o PIX?',
    pixDesc: 'O PIX e o sistema de pagamentos instantaneos do Brasil, lancado pelo Banco Central em novembro de 2020. Funciona 24 horas por dia, 7 dias por semana, com transferencias que levam segundos.',
    pixFeatures: [
      { icon: '24/7', title: 'Disponivel Sempre', desc: 'Funciona a qualquer hora, todos os dias, inclusive feriados' },
      { icon: '10s', title: 'Super Rapido', desc: 'Transferencias completadas em ate 10 segundos' },
      { icon: 'R$0', title: 'Gratis para PF', desc: 'Sem taxas para pessoas fisicas na maioria dos bancos' },
      { icon: '150M+', title: 'Uso Massivo', desc: 'Mais de 150 milhoes de chaves PIX cadastradas' },
    ],

    // Calculator
    calcTitle: 'Calculadora de Tempo e Taxas',
    calcSubtitle: 'Selecione o metodo e valor para ver estimativas',
    amountLabel: 'Valor em BRL',
    methodLabel: 'Metodo de Conversao',
    selectMethod: 'Selecione um metodo',

    // Results
    resultsTitle: 'Resultado Estimado',
    estimatedTime: 'Tempo Estimado',
    estimatedFees: 'Taxas Estimadas',
    youReceive: 'Voce Recebe (aprox.)',
    exchangeRate: 'Cotacao BRL/USD',
    steps: 'Etapas',

    // Methods
    methods: {
      binance: {
        name: 'Binance P2P via PIX',
        time: '5-15 min',
        timeMin: 5,
        timeMax: 15,
        feePercent: 0.5,
        feeRange: '0-2%',
        description: 'Compre USDT/USDC diretamente de outros usuarios usando PIX',
        rating: 'Mais Rapido',
        color: 'yellow',
        steps: [
          'Acessar Binance P2P',
          'Escolher vendedor com PIX',
          'Fazer PIX para o vendedor',
          'Vendedor libera USDC',
          'Sacar para carteira'
        ]
      },
      mercadoBitcoin: {
        name: 'Mercado Bitcoin',
        time: '10-30 min',
        timeMin: 10,
        timeMax: 30,
        feePercent: 1.5,
        feeRange: '1-2%',
        description: 'Exchange brasileira regulamentada com deposito via PIX',
        rating: 'Mais Confiavel',
        color: 'purple',
        steps: [
          'Depositar BRL via PIX',
          'Aguardar credito (instantaneo)',
          'Comprar USDC no book',
          'Solicitar saque',
          'Receber na carteira'
        ]
      },
      novadax: {
        name: 'NovaDAX',
        time: '10-20 min',
        timeMin: 10,
        timeMax: 20,
        feePercent: 1.0,
        feeRange: '0.5-1.5%',
        description: 'Exchange com boas taxas e suporte em portugues',
        rating: 'Bom Custo-Beneficio',
        color: 'cyan',
        steps: [
          'Depositar BRL via PIX',
          'Credito instantaneo',
          'Comprar USDC',
          'Sacar para wallet',
          'Confirmacao na rede'
        ]
      },
      directExchange: {
        name: 'Exchange Direta',
        time: '15-60 min',
        timeMin: 15,
        timeMax: 60,
        feePercent: 2.5,
        feeRange: '2-4%',
        description: 'Compra direta com cartao ou servicos como Moonpay',
        rating: 'Mais Simples',
        color: 'green',
        steps: [
          'Acessar servico de compra',
          'Inserir dados do cartao/PIX',
          'Verificacao de seguranca',
          'Processamento',
          'Receber USDC na carteira'
        ]
      }
    },

    // Comparison Table
    comparisonTitle: 'Comparacao de Metodos',
    tableHeaders: {
      method: 'Metodo',
      time: 'Tempo',
      fees: 'Taxas',
      minAmount: 'Minimo',
      best: 'Melhor Para'
    },
    bestFor: {
      binance: 'Traders frequentes',
      mercadoBitcoin: 'Quem quer seguranca',
      novadax: 'Equilibrio geral',
      directExchange: 'Iniciantes'
    },

    // Step by Step
    stepByStepTitle: 'Guia Passo a Passo',
    stepByStepSubtitle: 'Instrucoes detalhadas para cada metodo',

    // Binance Steps
    binanceSteps: [
      {
        title: 'Acesse o P2P na Binance',
        details: [
          'Abra o app da Binance ou acesse binance.com',
          'Va em "Comprar Cripto" > "P2P Trading"',
          'Selecione "Comprar" e escolha USDC ou USDT',
          'Filtre por pagamento: PIX'
        ]
      },
      {
        title: 'Escolha um Vendedor',
        details: [
          'Procure vendedores com taxa de conclusao > 95%',
          'Verifique o numero de transacoes (quanto mais, melhor)',
          'Compare as taxas de cambio oferecidas',
          'Escolha um que aceite seu banco'
        ]
      },
      {
        title: 'Faca o Pagamento via PIX',
        details: [
          'Insira o valor em BRL que deseja converter',
          'Clique em "Comprar" para iniciar a ordem',
          'Copie a chave PIX do vendedor',
          'Faca o PIX pelo app do seu banco',
          'Volte e clique "Pagamento Feito"'
        ]
      },
      {
        title: 'Receba seu USDC',
        details: [
          'Aguarde o vendedor confirmar (geralmente 5-15 min)',
          'USDC sera creditado na sua conta Binance',
          'Se houver demora, use o chat ou abra disputa',
          'Pronto! Pode sacar para sua carteira'
        ]
      }
    ],

    // Tips
    tipsTitle: 'Dicas para Conversao Mais Rapida',
    tips: [
      {
        icon: '9-18h',
        title: 'Horario Comercial',
        desc: 'P2P tem mais vendedores ativos durante horario comercial brasileiro (9h-18h)'
      },
      {
        icon: '95%+',
        title: 'Vendedores Confiaveis',
        desc: 'Escolha vendedores com taxa de conclusao acima de 95% e muitas transacoes'
      },
      {
        icon: 'ARB',
        title: 'Rede Arbitrum',
        desc: 'Ao sacar USDC, use a rede Arbitrum para taxas mais baixas (~$0.10)'
      },
      {
        icon: 'R$',
        title: 'Valores Menores',
        desc: 'Comece com valores pequenos para testar o processo antes de grandes quantias'
      }
    ],

    // FAQ
    faqTitle: 'Perguntas Frequentes',
    faqs: [
      {
        q: 'O PIX e seguro para comprar cripto?',
        a: 'Sim, o PIX e extremamente seguro pois e regulamentado pelo Banco Central. Em plataformas como Binance P2P, ha sistema de escrow que protege ambas as partes.'
      },
      {
        q: 'Por que o tempo varia tanto?',
        a: 'O tempo depende da disponibilidade de vendedores (P2P), horario do dia, volume da plataforma e velocidade de confirmacao na blockchain ao sacar.'
      },
      {
        q: 'Qual metodo tem menor taxa?',
        a: 'Binance P2P geralmente oferece as menores taxas (0-2%), pois voce negocia direto com outros usuarios. Exchanges tradicionais cobram spread e taxas de trading.'
      },
      {
        q: 'Posso usar PIX de qualquer banco?',
        a: 'Sim! PIX funciona com qualquer banco brasileiro - Nubank, Inter, Itau, Bradesco, Santander, Caixa, etc. Todos sao aceitos.'
      },
      {
        q: 'Preciso de KYC para usar esses servicos?',
        a: 'Sim, todos os servicos listados exigem verificacao de identidade (KYC) com CPF e documentos. Isso e exigido por regulamentacao brasileira.'
      },
      {
        q: 'E se o vendedor no P2P nao liberar?',
        a: 'Se voce fez o pagamento e o vendedor nao liberar, abra uma disputa na plataforma. A Binance tem equipe de suporte que analisa os comprovantes e resolve.'
      }
    ],

    // CTA
    ctaTitle: 'Pronto para Converter?',
    ctaDesc: 'Transforme seus Reais em USDC e comece a negociar acoes americanas 24/7.',
    ctaButton: 'Guia Completo BRL para USDC',
    ctaSecondary: 'Trading no Brasil',

    // Footer
    lastUpdated: 'Ultima atualizacao: Janeiro 2026',
    disclaimer: 'Valores e tempos sao estimativas. Taxas de cambio variam em tempo real.',
    rateNote: 'Cotacao aproximada para referencia'
  },
  en: {
    // Meta
    pageTitle: 'PIX to USDC Time Estimator',
    pageDescription: 'Calculate time and fees to convert Brazilian Real (BRL) to USDC via PIX. Compare Binance P2P, Mercado Bitcoin and NovaDAX.',

    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    currentPage: 'PIX to USDC Time',

    // Hero
    badge: 'Brazil',
    badgeYear: '2026',
    heroTitle: 'Time Estimator',
    heroHighlight: 'PIX to USDC',
    heroDesc: 'Find out how long it takes to convert Brazilian Real to USDC using PIX. Compare methods, fees and estimated times.',

    // PIX Section
    pixTitle: 'What is PIX?',
    pixDesc: 'PIX is Brazil\'s instant payment system, launched by the Central Bank in November 2020. It works 24 hours a day, 7 days a week, with transfers that take seconds.',
    pixFeatures: [
      { icon: '24/7', title: 'Always Available', desc: 'Works anytime, every day, including holidays' },
      { icon: '10s', title: 'Super Fast', desc: 'Transfers completed in up to 10 seconds' },
      { icon: 'R$0', title: 'Free for Individuals', desc: 'No fees for individuals at most banks' },
      { icon: '150M+', title: 'Massive Adoption', desc: 'Over 150 million PIX keys registered' },
    ],

    // Calculator
    calcTitle: 'Time & Fee Calculator',
    calcSubtitle: 'Select method and amount to see estimates',
    amountLabel: 'Amount in BRL',
    methodLabel: 'Conversion Method',
    selectMethod: 'Select a method',

    // Results
    resultsTitle: 'Estimated Result',
    estimatedTime: 'Estimated Time',
    estimatedFees: 'Estimated Fees',
    youReceive: 'You Receive (approx.)',
    exchangeRate: 'BRL/USD Rate',
    steps: 'Steps',

    // Methods
    methods: {
      binance: {
        name: 'Binance P2P via PIX',
        time: '5-15 min',
        timeMin: 5,
        timeMax: 15,
        feePercent: 0.5,
        feeRange: '0-2%',
        description: 'Buy USDT/USDC directly from other users using PIX',
        rating: 'Fastest',
        color: 'yellow',
        steps: [
          'Access Binance P2P',
          'Choose seller with PIX',
          'Make PIX payment',
          'Seller releases USDC',
          'Withdraw to wallet'
        ]
      },
      mercadoBitcoin: {
        name: 'Mercado Bitcoin',
        time: '10-30 min',
        timeMin: 10,
        timeMax: 30,
        feePercent: 1.5,
        feeRange: '1-2%',
        description: 'Regulated Brazilian exchange with PIX deposits',
        rating: 'Most Trusted',
        color: 'purple',
        steps: [
          'Deposit BRL via PIX',
          'Wait for credit (instant)',
          'Buy USDC on orderbook',
          'Request withdrawal',
          'Receive in wallet'
        ]
      },
      novadax: {
        name: 'NovaDAX',
        time: '10-20 min',
        timeMin: 10,
        timeMax: 20,
        feePercent: 1.0,
        feeRange: '0.5-1.5%',
        description: 'Exchange with good rates and Portuguese support',
        rating: 'Best Value',
        color: 'cyan',
        steps: [
          'Deposit BRL via PIX',
          'Instant credit',
          'Buy USDC',
          'Withdraw to wallet',
          'Network confirmation'
        ]
      },
      directExchange: {
        name: 'Direct Exchange',
        time: '15-60 min',
        timeMin: 15,
        timeMax: 60,
        feePercent: 2.5,
        feeRange: '2-4%',
        description: 'Direct purchase with card or services like Moonpay',
        rating: 'Simplest',
        color: 'green',
        steps: [
          'Access purchase service',
          'Enter card/PIX details',
          'Security verification',
          'Processing',
          'Receive USDC in wallet'
        ]
      }
    },

    // Comparison Table
    comparisonTitle: 'Methods Comparison',
    tableHeaders: {
      method: 'Method',
      time: 'Time',
      fees: 'Fees',
      minAmount: 'Minimum',
      best: 'Best For'
    },
    bestFor: {
      binance: 'Frequent traders',
      mercadoBitcoin: 'Security-focused',
      novadax: 'Overall balance',
      directExchange: 'Beginners'
    },

    // Step by Step
    stepByStepTitle: 'Step-by-Step Guide',
    stepByStepSubtitle: 'Detailed instructions for each method',

    // Binance Steps
    binanceSteps: [
      {
        title: 'Access Binance P2P',
        details: [
          'Open Binance app or go to binance.com',
          'Go to "Buy Crypto" > "P2P Trading"',
          'Select "Buy" and choose USDC or USDT',
          'Filter by payment: PIX'
        ]
      },
      {
        title: 'Choose a Seller',
        details: [
          'Look for sellers with completion rate > 95%',
          'Check number of transactions (more is better)',
          'Compare exchange rates offered',
          'Choose one that accepts your bank'
        ]
      },
      {
        title: 'Make PIX Payment',
        details: [
          'Enter BRL amount you want to convert',
          'Click "Buy" to start the order',
          'Copy the seller\'s PIX key',
          'Make PIX through your bank app',
          'Return and click "Payment Made"'
        ]
      },
      {
        title: 'Receive Your USDC',
        details: [
          'Wait for seller confirmation (usually 5-15 min)',
          'USDC will be credited to your Binance account',
          'If delayed, use chat or open dispute',
          'Done! You can withdraw to your wallet'
        ]
      }
    ],

    // Tips
    tipsTitle: 'Tips for Faster Conversion',
    tips: [
      {
        icon: '9-6pm',
        title: 'Business Hours',
        desc: 'P2P has more active sellers during Brazilian business hours (9am-6pm BRT)'
      },
      {
        icon: '95%+',
        title: 'Trusted Sellers',
        desc: 'Choose sellers with completion rate above 95% and many transactions'
      },
      {
        icon: 'ARB',
        title: 'Arbitrum Network',
        desc: 'When withdrawing USDC, use Arbitrum network for lower fees (~$0.10)'
      },
      {
        icon: 'R$',
        title: 'Smaller Amounts',
        desc: 'Start with small amounts to test the process before large sums'
      }
    ],

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Is PIX safe for buying crypto?',
        a: 'Yes, PIX is extremely secure as it\'s regulated by Brazil\'s Central Bank. On platforms like Binance P2P, there\'s an escrow system that protects both parties.'
      },
      {
        q: 'Why does time vary so much?',
        a: 'Time depends on seller availability (P2P), time of day, platform volume, and blockchain confirmation speed when withdrawing.'
      },
      {
        q: 'Which method has the lowest fees?',
        a: 'Binance P2P usually offers the lowest fees (0-2%), as you trade directly with other users. Traditional exchanges charge spread and trading fees.'
      },
      {
        q: 'Can I use PIX from any bank?',
        a: 'Yes! PIX works with any Brazilian bank - Nubank, Inter, Itau, Bradesco, Santander, Caixa, etc. All are accepted.'
      },
      {
        q: 'Do I need KYC to use these services?',
        a: 'Yes, all listed services require identity verification (KYC) with CPF and documents. This is required by Brazilian regulation.'
      },
      {
        q: 'What if the P2P seller doesn\'t release?',
        a: 'If you made payment and seller doesn\'t release, open a dispute on the platform. Binance has support team that reviews evidence and resolves it.'
      }
    ],

    // CTA
    ctaTitle: 'Ready to Convert?',
    ctaDesc: 'Turn your Brazilian Reais into USDC and start trading US stocks 24/7.',
    ctaButton: 'Complete BRL to USDC Guide',
    ctaSecondary: 'Trading from Brazil',

    // Footer
    lastUpdated: 'Last updated: January 2026',
    disclaimer: 'Values and times are estimates. Exchange rates vary in real-time.',
    rateNote: 'Approximate rate for reference'
  }
};

// JSON-LD Schema
const getJsonLdSchema = (lang: 'pt' | 'en') => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": lang === 'pt' ? "Estimador de Tempo PIX para USDC" : "PIX to USDC Time Estimator",
  "description": lang === 'pt'
    ? "Calcule quanto tempo leva para converter Real Brasileiro para USDC usando PIX"
    : "Calculate how long it takes to convert Brazilian Real to USDC using PIX",
  "url": "https://compareequityperps.com/blog/pix-para-usdc-tempo",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Organization",
    "name": "Compare Equity Perps"
  },
  "featureList": [
    lang === 'pt' ? "Comparacao de metodos de conversao" : "Conversion methods comparison",
    lang === 'pt' ? "Calculadora de tempo e taxas" : "Time and fee calculator",
    lang === 'pt' ? "Guia passo a passo" : "Step-by-step guide"
  ],
  "inLanguage": lang === 'pt' ? "pt-BR" : "en-US"
});

const getFAQSchema = (lang: 'pt' | 'en') => {
  const t = translations[lang];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
};

export default function PIXParaUSDCTempo() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [selectedMethod, setSelectedMethod] = useState<string>('binance');
  const [amount, setAmount] = useState<number>(1000);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedStep, setExpandedStep] = useState<number>(0);

  // Approximate BRL/USD rate (would be fetched from API in production)
  const [brlUsdRate] = useState<number>(5.05);

  const t = translations[lang];
  const methodsData = t.methods;
  const currentMethod = methodsData[selectedMethod as keyof typeof methodsData];

  // Calculate estimates
  const feeAmount = amount * (currentMethod.feePercent / 100);
  const netAmount = amount - feeAmount;
  const usdcAmount = netAmount / brlUsdRate;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLdSchema(lang)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(lang)) }}
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
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30 flex items-center gap-2">
                <span className="text-lg">🇧🇷</span> {t.badge}
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full border border-yellow-500/30">
                {t.badgeYear}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              {t.heroTitle}
              <br />
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                {t.heroHighlight}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              {t.heroDesc}
            </p>

            {/* Exchange Rate Display */}
            <div className="inline-flex items-center gap-3 bg-gray-900/80 border border-gray-700 rounded-xl px-5 py-3 backdrop-blur-sm">
              <span className="text-gray-400">{t.exchangeRate}:</span>
              <span className="text-2xl font-bold text-white">R$ {brlUsdRate.toFixed(2)}</span>
              <span className="text-xs text-gray-500">{t.rateNote}</span>
            </div>
          </div>
        </section>

        {/* PIX Explanation Section */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{t.pixTitle}</h2>
              </div>
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl">{t.pixDesc}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.pixFeatures.map((feature, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-green-500/30 transition-colors">
                  <div className="text-3xl font-black text-green-400 mb-2">{feature.icon}</div>
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.calcTitle}</h2>
            <p className="text-gray-400 text-center mb-10">{t.calcSubtitle}</p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Panel */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                {/* Amount Input */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    {t.amountLabel}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 font-bold">R$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value) || 0)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl py-4 pl-14 pr-4 text-white text-2xl font-bold focus:outline-none focus:border-green-500 transition-colors"
                      min="0"
                    />
                  </div>
                  {/* Quick amounts */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {[500, 1000, 2500, 5000, 10000].map((val) => (
                      <button
                        key={val}
                        onClick={() => setAmount(val)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          amount === val
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                      >
                        R${val.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Method Selector */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    {t.methodLabel}
                  </label>
                  <div className="space-y-3">
                    {Object.entries(methodsData).map(([key, method]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedMethod(key)}
                        className={`w-full p-4 rounded-xl border transition-all text-left ${
                          selectedMethod === key
                            ? method.color === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/50' :
                              method.color === 'purple' ? 'bg-purple-500/10 border-purple-500/50' :
                              method.color === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/50' :
                              'bg-green-500/10 border-green-500/50'
                            : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white font-semibold">{method.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            method.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                            method.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                            method.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {method.rating}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">{method.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span className="text-gray-500">{method.time}</span>
                          <span className="text-gray-500">{method.feeRange}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-green-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">{t.resultsTitle}</h3>

                {/* Time Estimate */}
                <div className="bg-gray-900/80 rounded-xl p-5 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">{t.estimatedTime}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      currentMethod.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                      currentMethod.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                      currentMethod.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {currentMethod.name}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white">{currentMethod.timeMin}-{currentMethod.timeMax}</span>
                    <span className="text-xl text-gray-400">min</span>
                  </div>
                  {/* Visual Time Bar */}
                  <div className="mt-3 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        currentMethod.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                        currentMethod.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-400' :
                        currentMethod.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-cyan-400' :
                        'bg-gradient-to-r from-green-500 to-green-400'
                      }`}
                      style={{ width: `${(1 - currentMethod.timeMax / 60) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Fee Estimate */}
                <div className="bg-gray-900/80 rounded-xl p-5 mb-4">
                  <div className="text-gray-400 mb-2">{t.estimatedFees}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-yellow-400">R$ {feeAmount.toFixed(2)}</span>
                    <span className="text-gray-500">({currentMethod.feeRange})</span>
                  </div>
                </div>

                {/* USDC Estimate */}
                <div className="bg-gray-900/80 rounded-xl p-5 mb-6">
                  <div className="text-gray-400 mb-2">{t.youReceive}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-green-400">${usdcAmount.toFixed(2)}</span>
                    <span className="text-xl text-gray-400">USDC</span>
                  </div>
                </div>

                {/* Steps Preview */}
                <div>
                  <div className="text-gray-400 text-sm mb-3">{t.steps}:</div>
                  <div className="space-y-2">
                    {currentMethod.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          currentMethod.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                          currentMethod.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                          currentMethod.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {i + 1}
                        </div>
                        <span className="text-gray-300 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.comparisonTitle}</h2>
            <p className="text-gray-400 text-center mb-10">{t.calcSubtitle}</p>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.tableHeaders.method}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.tableHeaders.time}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.tableHeaders.fees}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.tableHeaders.minAmount}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">{t.tableHeaders.best}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">{methodsData.binance.name}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">
                            {methodsData.binance.rating}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-green-400 font-semibold">{methodsData.binance.time}</td>
                      <td className="px-6 py-4 text-gray-300">{methodsData.binance.feeRange}</td>
                      <td className="px-6 py-4 text-gray-300">~R$50</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{t.bestFor.binance}</td>
                    </tr>
                    <tr className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">{methodsData.mercadoBitcoin.name}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">
                            {methodsData.mercadoBitcoin.rating}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-yellow-400 font-semibold">{methodsData.mercadoBitcoin.time}</td>
                      <td className="px-6 py-4 text-gray-300">{methodsData.mercadoBitcoin.feeRange}</td>
                      <td className="px-6 py-4 text-gray-300">R$50</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{t.bestFor.mercadoBitcoin}</td>
                    </tr>
                    <tr className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">{methodsData.novadax.name}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                            {methodsData.novadax.rating}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-green-400 font-semibold">{methodsData.novadax.time}</td>
                      <td className="px-6 py-4 text-gray-300">{methodsData.novadax.feeRange}</td>
                      <td className="px-6 py-4 text-gray-300">R$30</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{t.bestFor.novadax}</td>
                    </tr>
                    <tr className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold">{methodsData.directExchange.name}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                            {methodsData.directExchange.rating}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-orange-400 font-semibold">{methodsData.directExchange.time}</td>
                      <td className="px-6 py-4 text-gray-300">{methodsData.directExchange.feeRange}</td>
                      <td className="px-6 py-4 text-gray-300">R$100</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{t.bestFor.directExchange}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">{t.stepByStepTitle}</h2>
            <p className="text-gray-400 text-center mb-10">{t.stepByStepSubtitle}</p>

            <div className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">B</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Binance P2P</h3>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                    {lang === 'pt' ? 'Recomendado' : 'Recommended'}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {t.binanceSteps.map((step, i) => (
                  <div key={i} className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
                    <button
                      onClick={() => setExpandedStep(expandedStep === i ? -1 : i)}
                      className="w-full p-5 flex items-center gap-3 hover:bg-gray-800/80 transition-colors"
                    >
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <h4 className="text-white font-semibold text-left flex-1">{step.title}</h4>
                      <svg
                        className={`w-5 h-5 text-yellow-400 transition-transform ${expandedStep === i ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedStep === i && (
                      <div className="px-5 pb-5">
                        <ul className="space-y-2 pl-11">
                          {step.details.map((detail, j) => (
                            <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                              <span className="text-yellow-400 mt-1">-</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-green-900/20 to-yellow-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">{t.tipsTitle}</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {t.tips.map((tip, i) => (
                <div key={i} className="bg-gray-900/80 border border-gray-800 rounded-xl p-5 hover:border-green-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-green-500/30">
                      <span className="text-green-400 font-bold text-sm">{tip.icon}</span>
                    </div>
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
                  href="/blog/como-converter-brl-para-usdc"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all shadow-lg shadow-green-500/25"
                >
                  {t.ctaButton}
                </Link>
                <Link
                  href="/blog/trade-us-stocks-from-brazil"
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
