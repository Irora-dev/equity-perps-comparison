export const nativeLang = 'el';
export const nativeName = 'Ελληνικά';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Greece',

    // Hero
    badge: 'Greece Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Greece',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert EUR to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '~€45',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time EET',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Greek Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🇪🇺',
        title: 'EU-Friendly Access',
        desc: 'No need for US brokerage accounts or complex foreign paperwork. Trade US stocks using EUR from your Greek bank via SEPA transfers.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert EUR to USDC via Binance or Kraken and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade After Hours',
        desc: 'US markets are only open 16:30-23:00 EET. With equity perps, trade whenever you want - morning, afternoon, or midnight.'
      },
      {
        icon: '💰',
        title: 'Start with ~€45',
        desc: 'Most US brokers need $500+ minimum. Here, start with just ~€45 (~$50 USDC) and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Greece today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Greece'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert EUR to USDC',
    step2Desc: 'Use Binance, Kraken, or Coinbase with SEPA',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert EUR:',
    binanceP2P: {
      title: 'Binance with SEPA',
      desc: 'Best for most Greek traders',
      steps: ['Create Binance account', 'Deposit EUR via SEPA', 'Buy USDC with EUR', 'Withdraw to Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Kraken Exchange',
      desc: 'Alternative for larger amounts',
      steps: ['Create Kraken account', 'Deposit EUR via SEPA', 'Buy USDC with EUR', 'Withdraw to Rabby (Arbitrum)']
    },
    coindcx: {
      title: 'Coinbase',
      desc: 'EU-regulated, user-friendly',
      steps: ['Create Coinbase account', 'Deposit EUR via SEPA', 'Buy USDC directly', '(Higher fees but simpler)']
    },
    proTip: 'Pro tip:',
    proTipText: 'SEPA transfers from Piraeus Bank, Alpha Bank, Eurobank, or National Bank of Greece typically arrive within 1-2 business days.',
    seeDetailedGuide: 'See detailed EUR to USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from Greece using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by Greek authorities as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many Greek traders use these platforms, but you should understand the regulatory landscape and consult a tax professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Greece?',
        answer: 'Yes, profits from trading are likely taxable in Greece. They may be classified as capital gains or other income depending on your situation. Maintain records of all trades and consult a tax advisor familiar with crypto/derivatives taxation in Greece.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as ~€45 (~$50 USDC). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade outside US market hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night EET. There's no restriction on trading hours, unlike traditional brokers."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on an exchange (Binance, Kraken, Coinbase) to convert EUR to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Greece Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Greek traders. Check them out:",
    guides: [
      { icon: '€', title: 'Convert EUR to USDC', desc: 'Step-by-step with SEPA transfers', href: '/blog/convert-eur-to-usdc' },
      { icon: '💰', title: 'Trade with €50', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-50-euros' },
      { icon: '⚖️', title: 'Is It Legal in Greece?', desc: 'Regulations, taxes, and compliance', href: '/blog/equity-perps-legal-greece' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Greek traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just ~€45.',
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
      { tag: 'FUNDING', title: 'Convert EUR to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-eur-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with €50', desc: 'Small account strategy', href: '/blog/trade-stocks-with-50-euros' },
      { tag: 'LEGAL', title: 'Is It Legal in Greece?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-greece' }
    ]
  },
  el: {
    // Breadcrumb
    home: 'Αρχική',
    blog: 'Ιστολόγιο',
    pageTitle: 'Κάντε Trading Αμερικανικές Μετοχές από την Ελλάδα',

    // Hero
    badge: 'Οδηγός Ελλάδας',
    noBrokerBadge: 'Χωρίς Χρηματιστή',
    heroTitle1: 'Κάντε Trading Αμερικανικές Μετοχές',
    heroTitle2: 'από την Ελλάδα',
    heroDesc: 'Αποκτήστε πρόσβαση σε NVDA, TSLA, AAPL και 50+ αμερικανικές μετοχές χωρίς λογαριασμό χρηματιστηρίου ΗΠΑ. Μετατρέψτε EUR σε USDC και ξεκινήστε το trading σε',
    heroDescHighlight: '15 λεπτά',
    startTrading: 'Ξεκινήστε το Trading Τώρα',
    howItWorks: 'Πώς Λειτουργεί',

    // Quick Stats
    statMinimumValue: '~€45',
    statMinimum: 'Ελάχιστο για να ξεκινήσετε',
    statTimeValue: '24/7',
    statTime: 'Οποιαδήποτε ώρα EET',
    statStocksValue: '50+',
    statStocks: 'Αμερικανικές Μετοχές',
    statKycValue: 'Χωρίς KYC',
    statKyc: 'Στην Πλατφόρμα Trading',

    // Why Section
    whyTitle: 'Γιατί οι Έλληνες Traders Επιλέγουν τα Equity Perps',
    whyCards: [
      {
        icon: '🇪🇺',
        title: 'Φιλική προς την ΕΕ Πρόσβαση',
        desc: 'Χωρίς ανάγκη για λογαριασμούς χρηματιστηρίου ΗΠΑ ή περίπλοκα ξένα έγγραφα. Κάντε trading αμερικανικές μετοχές χρησιμοποιώντας EUR από την ελληνική σας τράπεζα μέσω SEPA.'
      },
      {
        icon: '⚡',
        title: 'Άμεση Πρόσβαση',
        desc: 'Χωρίς αναμονή εβδομάδων για έγκριση χρηματιστηρίου ΗΠΑ. Μετατρέψτε EUR σε USDC μέσω Binance ή Kraken και ξεκινήστε το trading την ίδια μέρα.'
      },
      {
        icon: '🕐',
        title: 'Trading Εκτός Ωρών',
        desc: 'Οι αμερικανικές αγορές είναι ανοιχτές μόνο 16:30-23:00 EET. Με τα equity perps, κάντε trading όποτε θέλετε - πρωί, απόγευμα ή μεσάνυχτα.'
      },
      {
        icon: '💰',
        title: 'Ξεκινήστε με ~€45',
        desc: 'Οι περισσότεροι χρηματιστές ΗΠΑ χρειάζονται ελάχιστο $500+. Εδώ, ξεκινήστε με μόλις ~€45 (~$50 USDC) και χρησιμοποιήστε μόχλευση για μεγαλύτερες θέσεις.'
      }
    ],

    // Get Started Section
    stepByStep: 'Οδηγός Βήμα-Βήμα',
    getStartedTitle: 'Ξεκινήστε σε 15 Λεπτά',
    getStartedDesc: 'Ακολουθήστε αυτά τα βήματα για να ξεκινήσετε το trading αμερικανικών μετοχών από την Ελλάδα σήμερα.',

    // Step 1: Wallet
    step1Title: 'Δημιουργήστε το Ψηφιακό σας Πορτοφόλι',
    step1Desc: 'Δωρεάν, διαρκεί 2 λεπτά, το κάνετε μόνο μία φορά',
    walletExplainTitle: 'Τι είναι το ψηφιακό πορτοφόλι;',
    walletExplainDesc: 'Σκεφτείτε το σαν',
    walletExplainHighlight: 'ψηφιακό τραπεζικό λογαριασμό που ελέγχετε εσείς',
    walletExplainDesc2: '. Αντί η τράπεζα να κρατά τα χρήματά σας, τα κρατάτε εσείς χρησιμοποιώντας μια απλή επέκταση browser.',
    walletFeatures: ['Εσείς το ελέγχετε', 'Εντελώς δωρεάν', '2 λεπτά εγκατάσταση', 'Λειτουργεί στην Ελλάδα'],
    walletSetupTitle: 'Πώς να το ρυθμίσετε:',
    walletSteps: [
      { text: 'Πηγαίνετε στο', link: 'rabby.io' },
      { text: 'Κάντε κλικ στο "Download" και προσθέστε το στον Chrome/Brave' },
      { text: 'Κάντε κλικ στο "Create New Wallet" και ορίστε κωδικό' },
      { text: 'Σημειώστε τη φράση ανάκτησης 12 λέξεων', warning: 'Κρατήστε την ασφαλή και μην τη μοιραστείτε ποτέ!' }
    ],
    watchVideo: 'Δείτε: Οδηγός Εγκατάστασης 2 Λεπτών',

    // Step 2: Funding
    step2Title: 'Μετατρέψτε EUR σε USDC',
    step2Desc: 'Χρησιμοποιήστε Binance, Kraken ή Coinbase με SEPA',
    fundingIntro: 'Χρειάζεστε USDC (ένα stablecoin αξίας $1) για trading. Οι καλύτεροι τρόποι μετατροπής EUR:',
    binanceP2P: {
      title: 'Binance με SEPA',
      desc: 'Καλύτερο για τους περισσότερους Έλληνες traders',
      steps: ['Δημιουργήστε λογαριασμό Binance', 'Καταθέστε EUR μέσω SEPA', 'Αγοράστε USDC με EUR', 'Αναλάβετε στο Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Ανταλλακτήριο Kraken',
      desc: 'Εναλλακτική για μεγαλύτερα ποσά',
      steps: ['Δημιουργήστε λογαριασμό Kraken', 'Καταθέστε EUR μέσω SEPA', 'Αγοράστε USDC με EUR', 'Αναλάβετε στο Rabby (Arbitrum)']
    },
    coindcx: {
      title: 'Coinbase',
      desc: 'Ρυθμισμένο στην ΕΕ, φιλικό',
      steps: ['Δημιουργήστε λογαριασμό Coinbase', 'Καταθέστε EUR μέσω SEPA', 'Αγοράστε USDC απευθείας', '(Υψηλότερα τέλη αλλά απλούστερο)']
    },
    proTip: 'Συμβουλή:',
    proTipText: 'Οι μεταφορές SEPA από Τράπεζα Πειραιώς, Alpha Bank, Eurobank ή Εθνική Τράπεζα συνήθως φτάνουν εντός 1-2 εργάσιμων ημερών.',
    seeDetailedGuide: 'Δείτε αναλυτικό οδηγό EUR σε USDC με screenshots',

    // Step 3: Trade
    step3Title: 'Ξεκινήστε το Trading',
    step3Desc: 'Συνδεθείτε στο Hyperliquid και κάντε trading 50+ αμερικανικές μετοχές',
    tradeSteps: [
      { text: 'Πηγαίνετε στο', linkText: 'app.hyperliquid.xyz' },
      { text: 'Κάντε κλικ στο "Connect" και επιλέξτε Rabby Wallet' },
      { text: 'Κάντε κλικ στο "Deposit" και γεφυρώστε τα USDC σας' },
      { text: 'Αναζητήστε μετοχή (NVDA, TSLA, AAPL) και ανοίξτε θέση!' }
    ],
    openHyperliquid: 'Ανοίξτε το Hyperliquid (4% Έκπτωση Τελών)',

    // Popular Stocks
    popularStocksTitle: 'Δημοφιλείς Διαθέσιμες Αμερικανικές Μετοχές',
    viewAllStocks: 'Δείτε όλες τις 50+ μετοχές →',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Συχνές Ερωτήσεις',
    faqs: [
      {
        question: 'Είναι νόμιμο να κάνω trading αμερικανικές μετοχές από την Ελλάδα με equity perps;',
        answer: 'Τα equity perpetuals υπάρχουν σε μια ρυθμιστική γκρίζα ζώνη. Δεν ρυθμίζονται ρητά από τις ελληνικές αρχές καθώς λειτουργούν σε αποκεντρωμένες πλατφόρμες. Δεν αγοράζετε απευθείας αμερικανικές μετοχές - κάνετε trading έκθεση στην τιμή μέσω συνθετικών συμβολαίων. Πολλοί Έλληνες traders χρησιμοποιούν αυτές τις πλατφόρμες, αλλά θα πρέπει να κατανοήσετε το ρυθμιστικό τοπίο και να συμβουλευτείτε φοροτεχνικό.'
      },
      {
        question: 'Πρέπει να πληρώσω φόρο στα κέρδη από equity perps στην Ελλάδα;',
        answer: 'Ναι, τα κέρδη από trading είναι πιθανόν φορολογητέα στην Ελλάδα. Μπορεί να ταξινομηθούν ως κεφαλαιακά κέρδη ή άλλο εισόδημα ανάλογα με την περίπτωσή σας. Διατηρήστε αρχεία όλων των συναλλαγών και συμβουλευτείτε φοροτεχνικό εξοικειωμένο με τη φορολογία crypto/παραγώγων στην Ελλάδα.'
      },
      {
        question: 'Ποιο είναι το ελάχιστο ποσό για να ξεκινήσω;',
        answer: 'Μπορείτε να ξεκινήσετε με μόλις ~€45 (~$50 USDC). Με μόχλευση, αυτό σας δίνει έκθεση σε μετοχές αξίας $500-3,000. Προτείνουμε να ξεκινήσετε μικρά για να μάθετε την πλατφόρμα.'
      },
      {
        question: 'Μπορώ να κάνω trading εκτός ωρών αμερικανικής αγοράς;',
        answer: 'Ναι! Τα equity perps λειτουργούν 24/7. Μπορείτε να κάνετε trading αμερικανικές μετοχές οποιαδήποτε στιγμή - πρωί, βράδυ ή αργά τη νύχτα EET. Δεν υπάρχει περιορισμός στις ώρες trading, σε αντίθεση με τους παραδοσιακούς χρηματιστές.'
      },
      {
        question: 'Απαιτείται KYC;',
        answer: 'Οι πλατφόρμες trading (όπως το Hyperliquid) δεν απαιτούν KYC. Ωστόσο, θα χρειαστεί να ολοκληρώσετε KYC σε ένα ανταλλακτήριο (Binance, Kraken, Coinbase) για να μετατρέψετε αρχικά EUR σε USDC.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Περισσότεροι Οδηγοί για την Ελλάδα',
    moreGuidesDesc: 'Δημιουργήσαμε αναλυτικούς οδηγούς ειδικά για Έλληνες traders. Δείτε τους:',
    guides: [
      { icon: '€', title: 'Μετατροπή EUR σε USDC', desc: 'Βήμα-βήμα με μεταφορές SEPA', href: '/blog/convert-eur-to-usdc' },
      { icon: '💰', title: 'Trading με €50', desc: 'Οδηγός στρατηγικής μικρού λογαριασμού', href: '/blog/trade-stocks-with-50-euros' },
      { icon: '⚖️', title: 'Είναι Νόμιμο στην Ελλάδα;', desc: 'Κανονισμοί, φόροι και συμμόρφωση', href: '/blog/equity-perps-legal-greece' },
      { icon: '🤝', title: 'Οδηγός P2P Trading', desc: 'Παγκόσμιες μέθοδοι P2P και συμβουλές ασφαλείας', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Ξεκινήστε το Trading Αμερικανικών Μετοχών Σήμερα',
    ctaDesc: 'Ενταχθείτε σε χιλιάδες Έλληνες traders με πρόσβαση σε NVDA, TSLA και 50+ αμερικανικές μετοχές 24/7. Χωρίς χρηματιστή ΗΠΑ. Ξεκινήστε με μόλις ~€45.',
    getStartedCta: 'Ξεκινήστε Τώρα (4% Έκπτωση Τελών)',

    // Free Notice
    freeNotice: 'Αυτός ο ιστότοπος είναι',
    freeNotice2: '100% δωρεάν',
    freeNotice3: ' για χρήση για σύγκριση των καλύτερων πλατφορμών για trading μετοχών 24/7. Όταν εγγραφείτε μέσω των συνδέσμων μας σε πλατφόρμες όπως',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'και',
    freeNotice6: 'Lighter',
    freeNotice7: ', λαμβάνετε',
    freeNotice8: '4% έκπτωση στα τέλη trading',
    freeNotice9: ' με τον κωδικό παραπομπής μας. Αυτό βοηθά να υποστηρίξετε τον ιστότοπο ενώ εξοικονομείτε χρήματα σε κάθε συναλλαγή.',

    // Related
    relatedTitle: 'Σχετικοί Οδηγοί',
    relatedGuides: [
      { tag: 'ΧΡΗΜΑΤΟΔΟΤΗΣΗ', title: 'Μετατροπή EUR σε USDC', desc: 'Βήμα-βήμα με screenshots', href: '/blog/convert-eur-to-usdc' },
      { tag: 'ΟΔΗΓΟΣ', title: 'Trading με €50', desc: 'Στρατηγική μικρού λογαριασμού', href: '/blog/trade-stocks-with-50-euros' },
      { tag: 'ΝΟΜΙΚΑ', title: 'Είναι Νόμιμο στην Ελλάδα;', desc: 'Ρυθμιστική επισκόπηση', href: '/blog/equity-perps-legal-greece' }
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
