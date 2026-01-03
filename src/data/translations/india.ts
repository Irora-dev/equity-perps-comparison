export const nativeLang = 'hi';
export const nativeName = 'हिन्दी';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from India',

    // Hero
    badge: 'India Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From India',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert INR to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '₹4,000',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time IST',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Indian Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🚫',
        title: 'No LRS Limits',
        desc: "The $250,000/year Liberalised Remittance Scheme limit doesn't apply. Trade as much as you want without RBI restrictions."
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert INR → USDC and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade at Night',
        desc: 'US markets open at 7pm IST. With equity perps, trade whenever you want - morning, afternoon, or 2am.'
      },
      {
        icon: '💰',
        title: 'Start with ₹4,000',
        desc: 'Most US brokers need $500+ minimum. Here, start with just ₹4,000-5,000 and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from India today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in India'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert INR to USDC',
    step2Desc: 'Use WazirX, CoinDCX, or Binance P2P',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert INR:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Best rates, most liquidity',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with INR (UPI/IMPS)', 'Convert USDT → USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'WazirX',
      desc: 'Indian exchange, easy UPI',
      steps: ['Deposit INR via UPI', 'Buy USDT', 'Transfer to Binance (free)', 'Convert USDT → USDC', 'Withdraw to Rabby']
    },
    coindcx: {
      title: 'CoinDCX',
      desc: 'Indian exchange, bank transfer',
      steps: ['Deposit INR via bank', 'Buy USDC directly', 'Withdraw to Rabby', '(Higher fees but simpler)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Binance P2P usually has the best INR rates. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed INR → USDC guide with screenshots',

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
    viewAllStocks: 'View all 50+ stocks →',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Is it legal to trade US stocks from India using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by SEBI as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many Indian traders use these platforms, but you should understand the regulatory landscape and consult a tax professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in India?',
        answer: 'Yes, profits from trading are likely taxable in India. They may be classified as capital gains or business income depending on your trading frequency. Maintain records of all trades and consult a CA familiar with crypto/derivatives taxation.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as ₹4,000-5,000 ($50-60). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during Indian market hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night IST. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on an Indian exchange (WazirX, CoinDCX, Binance) to convert INR to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More India Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Indian traders. Check them out:",
    guides: [
      { icon: '₹', title: 'Convert INR to USDC', desc: 'Step-by-step with WazirX, Binance P2P', href: '/blog/convert-inr-to-usdc' },
      { icon: '💰', title: 'Trade with ₹5,000', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-5000-rupees' },
      { icon: '⚖️', title: 'Is It Legal in India?', desc: 'Regulations, taxes, and compliance', href: '/blog/equity-perps-legal-india' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Indian traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just ₹4,000.',
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
      { tag: 'FUNDING', title: 'Convert INR to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-inr-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with ₹5,000', desc: 'Small account strategy', href: '/blog/trade-stocks-with-5000-rupees' },
      { tag: 'LEGAL', title: 'Is It Legal in India?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-india' }
    ]
  },
  hi: {
    // Breadcrumb
    home: 'होम',
    blog: 'ब्लॉग',
    pageTitle: 'भारत से US स्टॉक्स ट्रेड करें',

    // Hero
    badge: 'भारत गाइड',
    noBrokerBadge: 'ब्रोकर की जरूरत नहीं',
    heroTitle1: 'US स्टॉक्स ट्रेड करें',
    heroTitle2: 'भारत से',
    heroDesc: 'US ब्रोकरेज अकाउंट के बिना NVDA, TSLA, AAPL और 50+ US स्टॉक्स एक्सेस करें। INR को USDC में बदलें और ट्रेडिंग शुरू करें',
    heroDescHighlight: '15 मिनट में',
    startTrading: 'अभी ट्रेडिंग शुरू करें',
    howItWorks: 'कैसे काम करता है',

    // Quick Stats
    statMinimumValue: '₹4,000',
    statMinimum: 'शुरू करने के लिए न्यूनतम',
    statTimeValue: '24/7',
    statTime: 'किसी भी समय IST',
    statStocksValue: '50+',
    statStocks: 'US स्टॉक्स',
    statKycValue: 'No KYC',
    statKyc: 'ट्रेडिंग प्लेटफॉर्म पर',

    // Why Section
    whyTitle: 'भारतीय ट्रेडर्स इक्विटी पर्प्स क्यों चुनते हैं',
    whyCards: [
      {
        icon: '🚫',
        title: 'LRS लिमिट नहीं',
        desc: '$250,000/वर्ष की लिबरलाइज्ड रेमिटेंस स्कीम लिमिट लागू नहीं होती। RBI प्रतिबंधों के बिना जितना चाहें ट्रेड करें।'
      },
      {
        icon: '⚡',
        title: 'तुरंत एक्सेस',
        desc: 'US ब्रोकरेज अप्रूवल के लिए हफ्तों इंतजार नहीं। INR → USDC कन्वर्ट करें और उसी दिन ट्रेडिंग शुरू करें।'
      },
      {
        icon: '🕐',
        title: 'रात में ट्रेड करें',
        desc: 'US मार्केट्स शाम 7 बजे IST पर खुलते हैं। इक्विटी पर्प्स के साथ, जब चाहें ट्रेड करें - सुबह, दोपहर, या रात 2 बजे।'
      },
      {
        icon: '💰',
        title: '₹4,000 से शुरू करें',
        desc: 'ज्यादातर US ब्रोकर्स को $500+ न्यूनतम चाहिए। यहां, सिर्फ ₹4,000-5,000 से शुरू करें और बड़ी पोजीशन कंट्रोल करने के लिए लीवरेज का उपयोग करें।'
      }
    ],

    // Get Started Section
    stepByStep: 'स्टेप-बाय-स्टेप गाइड',
    getStartedTitle: '15 मिनट में शुरू करें',
    getStartedDesc: 'आज ही भारत से US स्टॉक्स ट्रेडिंग शुरू करने के लिए इन स्टेप्स को फॉलो करें।',

    // Step 1: Wallet
    step1Title: 'अपना डिजिटल वॉलेट सेट करें',
    step1Desc: 'फ्री, 2 मिनट में हो जाता है, और यह सिर्फ एक बार करना है',
    walletExplainTitle: 'डिजिटल वॉलेट क्या है?',
    walletExplainDesc: 'इसे एक',
    walletExplainHighlight: 'डिजिटल बैंक अकाउंट की तरह समझें जिसे आप कंट्रोल करते हैं',
    walletExplainDesc2: '। बैंक के पास आपका पैसा रखने के बजाय, आप इसे खुद एक सिंपल ब्राउज़र एक्सटेंशन का उपयोग करके रखते हैं।',
    walletFeatures: ['आप कंट्रोल करते हैं', 'पूरी तरह फ्री', '2 मिनट सेटअप', 'भारत में काम करता है'],
    walletSetupTitle: 'इसे सेट करने का तरीका:',
    walletSteps: [
      { text: 'जाएं', link: 'rabby.io' },
      { text: '"Download" पर क्लिक करें और Chrome/Brave में जोड़ें' },
      { text: '"Create New Wallet" पर क्लिक करें और पासवर्ड सेट करें' },
      { text: 'अपना 12-शब्द रिकवरी फ्रेज़ लिख लें', warning: 'इसे सुरक्षित रखें और कभी शेयर न करें!' }
    ],
    watchVideo: 'देखें: 2-मिनट सेटअप गाइड',

    // Step 2: Funding
    step2Title: 'INR को USDC में बदलें',
    step2Desc: 'WazirX, CoinDCX, या Binance P2P का उपयोग करें',
    fundingIntro: 'ट्रेड करने के लिए आपको USDC (एक स्टेबलकॉइन जो $1 के बराबर है) चाहिए। INR कन्वर्ट करने के सबसे अच्छे तरीके:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'सबसे अच्छे रेट्स, सबसे ज्यादा लिक्विडिटी',
      steps: ['Binance ऐप खोलें', 'P2P Trading पर जाएं', 'INR से USDT खरीदें (UPI/IMPS)', 'USDT → USDC कन्वर्ट करें', 'Rabby में विड्रॉ करें (Arbitrum)']
    },
    wazirx: {
      title: 'WazirX',
      desc: 'भारतीय एक्सचेंज, आसान UPI',
      steps: ['UPI से INR जमा करें', 'USDT खरीदें', 'Binance में ट्रांसफर करें (फ्री)', 'USDT → USDC कन्वर्ट करें', 'Rabby में विड्रॉ करें']
    },
    coindcx: {
      title: 'CoinDCX',
      desc: 'भारतीय एक्सचेंज, बैंक ट्रांसफर',
      steps: ['बैंक से INR जमा करें', 'सीधे USDC खरीदें', 'Rabby में विड्रॉ करें', '(ज्यादा फीस पर सिंपल)']
    },
    proTip: 'प्रो टिप:',
    proTipText: 'Binance P2P में आमतौर पर सबसे अच्छे INR रेट्स मिलते हैं। पहले USDT खरीदें (ज्यादा लिक्विडिटी), फिर Binance पर USDC में कन्वर्ट करें (फ्री)।',
    seeDetailedGuide: 'स्क्रीनशॉट्स के साथ विस्तृत INR → USDC गाइड देखें',

    // Step 3: Trade
    step3Title: 'ट्रेडिंग शुरू करें',
    step3Desc: 'Hyperliquid से कनेक्ट करें और 50+ US स्टॉक्स ट्रेड करें',
    tradeSteps: [
      { text: 'जाएं', linkText: 'app.hyperliquid.xyz' },
      { text: '"Connect" पर क्लिक करें और Rabby Wallet चुनें' },
      { text: '"Deposit" पर क्लिक करें और अपना USDC ब्रिज करें' },
      { text: 'स्टॉक सर्च करें (NVDA, TSLA, AAPL) और पोजीशन खोलें!' }
    ],
    openHyperliquid: 'Hyperliquid खोलें (4% फीस छूट)',

    // Popular Stocks
    popularStocksTitle: 'उपलब्ध लोकप्रिय US स्टॉक्स',
    viewAllStocks: 'सभी 50+ स्टॉक्स देखें →',
    hot: 'HOT',

    // FAQ
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: [
      {
        question: 'क्या भारत से इक्विटी पर्प्स का उपयोग करके US स्टॉक्स ट्रेड करना कानूनी है?',
        answer: 'इक्विटी परपेचुअल्स एक नियामक ग्रे एरिया में मौजूद हैं। SEBI द्वारा इन्हें स्पष्ट रूप से विनियमित नहीं किया गया है क्योंकि ये विकेंद्रीकृत प्लेटफॉर्म पर काम करते हैं। आप सीधे US स्टॉक्स नहीं खरीद रहे हैं - आप सिंथेटिक कॉन्ट्रैक्ट्स के माध्यम से प्राइस एक्सपोज़र ट्रेड कर रहे हैं। कई भारतीय ट्रेडर इन प्लेटफॉर्म्स का उपयोग करते हैं, लेकिन आपको नियामक परिदृश्य को समझना चाहिए और टैक्स प्रोफेशनल से परामर्श करना चाहिए।'
      },
      {
        question: 'क्या मुझे भारत में इक्विटी पर्प्स से होने वाले मुनाफे पर टैक्स देना होगा?',
        answer: 'हां, ट्रेडिंग से होने वाले मुनाफे पर भारत में टैक्स लगने की संभावना है। आपकी ट्रेडिंग फ्रीक्वेंसी के आधार पर इन्हें कैपिटल गेन्स या बिजनेस इनकम के रूप में वर्गीकृत किया जा सकता है। सभी ट्रेड्स का रिकॉर्ड रखें और क्रिप्टो/डेरिवेटिव्स टैक्सेशन से परिचित CA से परामर्श करें।'
      },
      {
        question: 'शुरू करने के लिए न्यूनतम राशि कितनी चाहिए?',
        answer: 'आप ₹4,000-5,000 ($50-60) जितनी कम राशि से शुरू कर सकते हैं। लीवरेज के साथ, यह आपको $500-3,000 मूल्य के स्टॉक्स का एक्सपोज़र देता है। हम प्लेटफॉर्म सीखने के लिए छोटी राशि से शुरू करने की सलाह देते हैं।'
      },
      {
        question: 'क्या मैं भारतीय मार्केट के समय में ट्रेड कर सकता हूं?',
        answer: 'हां! इक्विटी पर्प्स 24/7 ट्रेड होते हैं। आप किसी भी समय US स्टॉक्स ट्रेड कर सकते हैं - सुबह, शाम, या देर रात IST। ट्रेडिंग के समय पर कोई प्रतिबंध नहीं है।'
      },
      {
        question: 'क्या KYC जरूरी है?',
        answer: 'ट्रेडिंग प्लेटफॉर्म (जैसे Hyperliquid) को KYC की जरूरत नहीं है। हालांकि, INR को USDC में शुरू में कन्वर्ट करने के लिए आपको भारतीय एक्सचेंज (WazirX, CoinDCX, Binance) पर KYC पूरा करना होगा।'
      }
    ],

    // More Guides
    moreGuidesTitle: 'और भारत गाइड्स',
    moreGuidesDesc: 'हमने भारतीय ट्रेडर्स के लिए विस्तृत गाइड्स बनाई हैं। इन्हें देखें:',
    guides: [
      { icon: '₹', title: 'INR को USDC में बदलें', desc: 'WazirX, Binance P2P के साथ स्टेप-बाय-स्टेप', href: '/blog/convert-inr-to-usdc' },
      { icon: '💰', title: '₹5,000 से ट्रेड करें', desc: 'छोटे अकाउंट स्ट्रेटेजी गाइड', href: '/blog/trade-stocks-with-5000-rupees' },
      { icon: '⚖️', title: 'क्या यह भारत में कानूनी है?', desc: 'नियम, टैक्स, और अनुपालन', href: '/blog/equity-perps-legal-india' },
      { icon: '🤝', title: 'P2P ट्रेडिंग गाइड', desc: 'ग्लोबल P2P मेथड्स और सेफ्टी टिप्स', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'आज ही US स्टॉक्स ट्रेडिंग शुरू करें',
    ctaDesc: 'हजारों भारतीय ट्रेडर्स के साथ जुड़ें जो 24/7 NVDA, TSLA, और 50+ US स्टॉक्स एक्सेस कर रहे हैं। US ब्रोकर की जरूरत नहीं। सिर्फ ₹4,000 से शुरू करें।',
    getStartedCta: 'अभी शुरू करें (4% फीस छूट)',

    // Free Notice
    freeNotice: 'यह साइट',
    freeNotice2: '100% फ्री',
    freeNotice3: ' है 24/7 स्टॉक्स ट्रेड करने के लिए सबसे अच्छे प्लेटफॉर्म्स की तुलना करने के लिए। जब आप',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'और',
    freeNotice6: 'Lighter',
    freeNotice7: ' जैसे प्लेटफॉर्म्स पर हमारे लिंक्स से साइन अप करते हैं, तो आपको',
    freeNotice8: 'ट्रेडिंग फीस पर 4% छूट',
    freeNotice9: ' हमारे रेफरल कोड के साथ मिलती है। यह साइट को सपोर्ट करने में मदद करता है और हर ट्रेड पर आपके पैसे बचाता है।',

    // Related
    relatedTitle: 'संबंधित गाइड्स',
    relatedGuides: [
      { tag: 'फंडिंग', title: 'INR को USDC में बदलें', desc: 'स्क्रीनशॉट्स के साथ स्टेप-बाय-स्टेप', href: '/blog/convert-inr-to-usdc' },
      { tag: 'गाइड', title: '₹5,000 से ट्रेड करें', desc: 'छोटे अकाउंट स्ट्रेटेजी', href: '/blog/trade-stocks-with-5000-rupees' },
      { tag: 'कानूनी', title: 'क्या यह भारत में कानूनी है?', desc: 'नियामक अवलोकन', href: '/blog/equity-perps-legal-india' }
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
