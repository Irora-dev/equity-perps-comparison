export const nativeLang = 'pt';
export const nativeName = 'Portugues';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Brazil',

    // Hero
    badge: 'Brazil Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Brazil',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert BRL to USDC with PIX and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: 'R$250',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time BRT',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Brazilian Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '⚡',
        title: 'PIX Instant Payments',
        desc: 'Fund your account in seconds with PIX - Brazil\'s instant payment system. Buy USDC via P2P and start trading immediately.'
      },
      {
        icon: '🚫',
        title: 'No IOF Tax',
        desc: 'Unlike international transfers through banks, crypto purchases avoid the IOF tax. Keep more of your money for trading.'
      },
      {
        icon: '🕐',
        title: 'Perfect Timezone',
        desc: 'US markets close at 5pm BRT - trade after work! With equity perps, trade 24/7 including weekends and holidays.'
      },
      {
        icon: '💰',
        title: 'Start with R$250',
        desc: 'Traditional brokers like XP and Avenue need more capital. Here, start with just R$250 (~$50) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Brazil today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Brazil'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert BRL to USDC',
    step2Desc: 'Use Binance P2P or Bybit P2P with PIX',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert BRL:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Best rates, most liquidity',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDC with BRL (PIX)', 'Choose a seller with good ratings', 'Withdraw to Rabby (Arbitrum)']
    },
    bybitP2P: {
      title: 'Bybit P2P',
      desc: 'Good alternative, competitive rates',
      steps: ['Open Bybit app', 'Go to P2P Trading', 'Buy USDC with BRL (PIX)', 'Choose a verified seller', 'Withdraw to Rabby (Arbitrum)']
    },
    mercadoBitcoin: {
      title: 'Mercado Bitcoin',
      desc: 'Brazilian exchange, TED/PIX',
      steps: ['Deposit BRL via TED or PIX', 'Buy USDC directly', 'Withdraw to Rabby', '(Higher fees but simpler)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Binance P2P usually has the best BRL rates. PIX is instant and free - look for sellers with high completion rates.',
    seeDetailedGuide: 'See detailed BRL to USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from Brazil using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by CVM (Brazilian SEC) as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many Brazilian traders use these platforms, but you should understand the regulatory landscape and consult a tax professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Brazil?',
        answer: 'Yes, profits from trading are likely taxable in Brazil. They should be reported to Receita Federal. Crypto gains above R$35,000/month are subject to capital gains tax. Maintain records of all trades and consult a contador familiar with crypto taxation.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as R$250 (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during Brazilian market hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, afternoon, or late night BRT. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on an exchange (Binance, Bybit, Mercado Bitcoin) to convert BRL to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Brazil Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Brazilian traders. Check them out:",
    guides: [
      { icon: 'R$', title: 'Convert BRL to USDC', desc: 'Step-by-step with PIX and P2P', href: '/blog/convert-brl-to-usdc' },
      { icon: '💰', title: 'Trade with R$250', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-250-reais' },
      { icon: '⚖️', title: 'Is It Legal in Brazil?', desc: 'Regulations, taxes, and compliance', href: '/blog/equity-perps-legal-brazil' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Brazilian traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just R$250.',
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
      { tag: 'FUNDING', title: 'Convert BRL to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-brl-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with R$250', desc: 'Small account strategy', href: '/blog/trade-stocks-with-250-reais' },
      { tag: 'LEGAL', title: 'Is It Legal in Brazil?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-brazil' }
    ]
  },
  pt: {
    // Breadcrumb
    home: 'Inicio',
    blog: 'Blog',
    pageTitle: 'Negocie Acoes Americanas do Brasil',

    // Hero
    badge: 'Guia Brasil',
    noBrokerBadge: 'Sem Corretora',
    heroTitle1: 'Negocie Acoes Americanas',
    heroTitle2: 'Do Brasil',
    heroDesc: 'Acesse NVDA, TSLA, AAPL e mais de 50 acoes americanas sem conta em corretora dos EUA. Converta BRL para USDC com PIX e comece a negociar em',
    heroDescHighlight: '15 minutos',
    startTrading: 'Comece a Negociar',
    howItWorks: 'Como Funciona',

    // Quick Stats
    statMinimumValue: 'R$250',
    statMinimum: 'Minimo para Comecar',
    statTimeValue: '24/7',
    statTime: 'Qualquer Hora BRT',
    statStocksValue: '50+',
    statStocks: 'Acoes Americanas',
    statKycValue: 'Sem KYC',
    statKyc: 'Na Plataforma de Trading',

    // Why Section
    whyTitle: 'Por Que Traders Brasileiros Escolhem Equity Perps',
    whyCards: [
      {
        icon: '⚡',
        title: 'Pagamentos Instantaneos com PIX',
        desc: 'Financie sua conta em segundos com PIX - o sistema de pagamentos instantaneos do Brasil. Compre USDC via P2P e comece a negociar imediatamente.'
      },
      {
        icon: '🚫',
        title: 'Sem IOF',
        desc: 'Diferente de transferencias internacionais via bancos, compras de cripto evitam o IOF. Mantenha mais dinheiro para negociar.'
      },
      {
        icon: '🕐',
        title: 'Fuso Horario Perfeito',
        desc: 'Mercados americanos fecham as 17h BRT - negocie apos o trabalho! Com equity perps, negocie 24/7 incluindo fins de semana e feriados.'
      },
      {
        icon: '💰',
        title: 'Comece com R$250',
        desc: 'Corretoras tradicionais como XP e Avenue precisam de mais capital. Aqui, comece com apenas R$250 (~$50) e use alavancagem para controlar posicoes maiores.'
      }
    ],

    // Get Started Section
    stepByStep: 'Guia Passo a Passo',
    getStartedTitle: 'Comece em 15 Minutos',
    getStartedDesc: 'Siga estes passos para comecar a negociar acoes americanas do Brasil hoje.',

    // Step 1: Wallet
    step1Title: 'Configure Sua Carteira Digital',
    step1Desc: 'Gratis, leva 2 minutos, e voce so faz isso uma vez',
    walletExplainTitle: 'O que e uma carteira digital?',
    walletExplainDesc: 'Pense nela como uma',
    walletExplainHighlight: 'conta bancaria digital que voce controla',
    walletExplainDesc2: '. Em vez de um banco guardar seu dinheiro, voce mesmo guarda usando uma simples extensao do navegador.',
    walletFeatures: ['Voce controla', 'Totalmente gratis', '2 min de setup', 'Funciona no Brasil'],
    walletSetupTitle: 'Como configurar:',
    walletSteps: [
      { text: 'Va para', link: 'rabby.io' },
      { text: 'Clique em "Download" e adicione ao Chrome/Brave' },
      { text: 'Clique em "Create New Wallet" e defina uma senha' },
      { text: 'Anote sua frase de recuperacao de 12 palavras', warning: 'Guarde em seguranca e nunca compartilhe!' }
    ],
    watchVideo: 'Assista: Guia de Setup de 2 Minutos',

    // Step 2: Funding
    step2Title: 'Converta BRL para USDC',
    step2Desc: 'Use Binance P2P ou Bybit P2P com PIX',
    fundingIntro: 'Voce precisa de USDC (uma stablecoin que vale $1) para negociar. Aqui estao as melhores formas de converter BRL:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Melhores taxas, maior liquidez',
      steps: ['Abra o app da Binance', 'Va para P2P Trading', 'Compre USDC com BRL (PIX)', 'Escolha um vendedor com boas avaliacoes', 'Saque para Rabby (Arbitrum)']
    },
    bybitP2P: {
      title: 'Bybit P2P',
      desc: 'Boa alternativa, taxas competitivas',
      steps: ['Abra o app da Bybit', 'Va para P2P Trading', 'Compre USDC com BRL (PIX)', 'Escolha um vendedor verificado', 'Saque para Rabby (Arbitrum)']
    },
    mercadoBitcoin: {
      title: 'Mercado Bitcoin',
      desc: 'Exchange brasileira, TED/PIX',
      steps: ['Deposite BRL via TED ou PIX', 'Compre USDC diretamente', 'Saque para Rabby', '(Taxas maiores mas mais simples)']
    },
    proTip: 'Dica pro:',
    proTipText: 'Binance P2P geralmente tem as melhores taxas em BRL. PIX e instantaneo e gratuito - procure vendedores com alta taxa de conclusao.',
    seeDetailedGuide: 'Veja guia detalhado de BRL para USDC com screenshots',

    // Step 3: Trade
    step3Title: 'Comece a Negociar',
    step3Desc: 'Conecte ao Hyperliquid e negocie mais de 50 acoes americanas',
    tradeSteps: [
      { text: 'Va para', linkText: 'app.hyperliquid.xyz' },
      { text: 'Clique em "Connect" e selecione Rabby Wallet' },
      { text: 'Clique em "Deposit" e faca bridge do seu USDC' },
      { text: 'Busque uma acao (NVDA, TSLA, AAPL) e abra uma posicao!' }
    ],
    openHyperliquid: 'Abrir Hyperliquid (4% de Desconto)',

    // Popular Stocks
    popularStocksTitle: 'Acoes Americanas Populares Disponiveis',
    viewAllStocks: 'Ver todas as 50+ acoes',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Perguntas Frequentes',
    faqs: [
      {
        question: 'E legal negociar acoes americanas do Brasil usando equity perps?',
        answer: 'Equity perpetuals existem em uma area cinza regulatoria. Nao sao explicitamente regulados pela CVM pois operam em plataformas descentralizadas. Voce nao esta comprando acoes americanas diretamente - esta negociando exposicao de preco atraves de contratos sinteticos. Muitos traders brasileiros usam essas plataformas, mas voce deve entender o cenario regulatorio e consultar um profissional de impostos.'
      },
      {
        question: 'Preciso pagar imposto sobre lucros de equity perps no Brasil?',
        answer: 'Sim, lucros de trading provavelmente sao tributaveis no Brasil. Devem ser reportados a Receita Federal. Ganhos de cripto acima de R$35.000/mes estao sujeitos a imposto sobre ganhos de capital. Mantenha registros de todas as operacoes e consulte um contador familiarizado com tributacao de cripto.'
      },
      {
        question: 'Qual o valor minimo para comecar?',
        answer: 'Voce pode comecar com apenas R$250 (~$50). Com alavancagem, isso da exposicao de $500-3.000 em acoes. Recomendamos comecar pequeno para aprender a plataforma.'
      },
      {
        question: 'Posso negociar durante o horario do mercado brasileiro?',
        answer: 'Sim! Equity perps negociam 24/7. Voce pode negociar acoes americanas a qualquer momento - manha, tarde ou madrugada BRT. Nao ha restricao de horario.'
      },
      {
        question: 'KYC e necessario?',
        answer: 'As plataformas de trading (como Hyperliquid) nao exigem KYC. Porem, voce precisara completar KYC em uma exchange (Binance, Bybit, Mercado Bitcoin) para converter BRL em USDC inicialmente.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Mais Guias Brasil',
    moreGuidesDesc: 'Criamos guias detalhados especificamente para traders brasileiros. Confira:',
    guides: [
      { icon: 'R$', title: 'Converter BRL para USDC', desc: 'Passo a passo com PIX e P2P', href: '/blog/convert-brl-to-usdc' },
      { icon: '💰', title: 'Negocie com R$250', desc: 'Guia de estrategia para conta pequena', href: '/blog/trade-stocks-with-250-reais' },
      { icon: '⚖️', title: 'E Legal no Brasil?', desc: 'Regulamentacao, impostos e compliance', href: '/blog/equity-perps-legal-brazil' },
      { icon: '🤝', title: 'Guia de Trading P2P', desc: 'Metodos P2P globais e dicas de seguranca', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Comece a Negociar Acoes Americanas Hoje',
    ctaDesc: 'Junte-se a milhares de traders brasileiros acessando NVDA, TSLA e mais de 50 acoes americanas 24/7. Sem corretora americana. Comece com apenas R$250.',
    getStartedCta: 'Comece Agora (4% de Desconto)',

    // Free Notice
    freeNotice: 'Este site e',
    freeNotice2: '100% gratuito',
    freeNotice3: ' para comparar as melhores plataformas para negociar acoes 24/7. Quando voce se cadastra atraves dos nossos links para plataformas como',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'e',
    freeNotice6: 'Lighter',
    freeNotice7: ', voce ganha',
    freeNotice8: '4% de desconto nas taxas de trading',
    freeNotice9: ' com nosso codigo de referencia. Isso ajuda a manter o site enquanto economiza seu dinheiro em cada operacao.',

    // Related
    relatedTitle: 'Guias Relacionados',
    relatedGuides: [
      { tag: 'FUNDING', title: 'Converter BRL para USDC', desc: 'Passo a passo com screenshots', href: '/blog/convert-brl-to-usdc' },
      { tag: 'GUIA', title: 'Negocie com R$250', desc: 'Estrategia para conta pequena', href: '/blog/trade-stocks-with-250-reais' },
      { tag: 'LEGAL', title: 'E Legal no Brasil?', desc: 'Visao geral regulatoria', href: '/blog/equity-perps-legal-brazil' }
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
