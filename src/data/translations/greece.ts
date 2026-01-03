export const translations = {
  en: {
    badge: "Guide for Greek Traders",
    heroTitle1: "Trade US Stocks",
    heroTitle2: "from Greece",
    heroDesc: "Access NVIDIA, Tesla, Apple with EUR. Start with €45. Trade 24/7 with SEPA.",
    comparePlatforms: "Compare Platforms",
    howItWorks: "How It Works",

    // What are Equity Perps section
    whatArePerpsTitle: "What Are Equity Perpetuals?",
    whatArePerpsSubtitle: "A new way for Greek traders to access US stock markets",
    whatArePerpsContent: "Equity perpetuals (or \"perps\") are derivative contracts that track the price of US stocks like Tesla, Nvidia, and Apple. Unlike traditional stock trading through a Greek broker, equity perps let you trade 24/7 from anywhere in Greece using just a digital wallet and USDC stablecoins.",
    whatArePerpsHow: "How it works:",
    whatArePerpsSteps: [
      "Perps track real stock prices using price feeds (oracles) from major exchanges",
      "You can go long (bet price goes up) or short (bet price goes down)",
      "Use leverage to control larger positions with less capital",
      "Trade anytime — markets never close, even on weekends and holidays",
    ],
    whatArePerpsCta: "No US brokerage account needed. No KYC. Just connect a wallet and start trading.",

    // Why Equity Perps section
    whyPerpsTitle: "Why Greek Traders Choose Equity Perps",
    whyPerpsSubtitle: "Compared to traditional Greek brokerages",
    whyPerpsReasons: [
      {
        icon: '🌍',
        title: 'Global Access from Greece',
        desc: 'Trade US stocks without opening a US brokerage account. No SSN required, no complex foreign account paperwork. Works with Greek bank accounts via SEPA.',
      },
      {
        icon: '🕐',
        title: '24/7 Trading',
        desc: 'Traditional US markets are only open 16:30-23:00 EET. Equity perps trade around the clock — react to Tesla earnings at midnight or trade NVIDIA on Sunday morning.',
      },
      {
        icon: '📈',
        title: 'Up to 50x Leverage',
        desc: 'Control a $5,000 Tesla position with just $100. Traditional Greek brokers offer limited leverage on US stocks. Start small and scale up as you learn.',
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
      { icon: '💰', title: 'Start with €45', desc: '~$50 USDC minimum' },
      { icon: '🕐', title: '24/7 Trading', desc: 'Trade anytime EET' },
      { icon: '🏦', title: 'SEPA Ready', desc: 'EUR bank transfers' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Your keys, your coins' },
    ],

    // Enhanced Getting Started section
    getStartedTitle: "How to Get Started",
    getStartedSubtitle: "Complete guide for Greek traders — takes about 15 minutes",

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
    step2Subtitle: "Convert EUR to USDC using Binance or Kraken",
    step2Methods: [
      {
        name: 'Binance with SEPA (Recommended)',
        description: 'Buy USDC with EUR from your Greek bank',
        steps: [
          'Create a Binance account (free)',
          'Deposit EUR via SEPA from your bank',
          'Buy USDC with your EUR balance',
          'Withdraw USDC to your Rabby wallet on Arbitrum',
        ],
        tip: 'Always use Arbitrum network for lowest fees (~€0.10)',
      },
      {
        name: 'Kraken Exchange',
        description: 'Alternative for larger amounts',
        steps: [
          'Create a Kraken account',
          'Deposit EUR via SEPA transfer',
          'Buy USDC with EUR',
          'Withdraw USDC to Rabby on Arbitrum',
        ],
        tip: 'SEPA transfers typically arrive within 1-2 business days',
      },
    ],
    step2MinAmount: "Start with €45 (~$50 USDC)",
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
      { t: 'Convert EUR to USDC', d: 'Use Binance or Kraken with SEPA transfer.' },
      { t: 'Choose a Platform', d: 'Compare platforms.', l: '/', lt: 'Compare' },
      { t: 'Connect Wallet', d: 'Use MetaMask or Rabby.' },
      { t: 'Start Trading', d: 'Begin with 2-3x leverage.' },
    ],
    paymentTitle: "Greece Payment Methods",
    digitalPayments: "Banks",
    banks: "Exchanges",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { question: 'Do I need a US brokerage account?', answer: 'No. Equity perps are synthetic derivatives that track US stock prices. You trade with USDC on decentralized platforms — no US broker, no SSN, no complex foreign account paperwork.' },
      { question: 'Is this legal in Greece?', answer: 'Equity perps exist in a regulatory gray area. They are decentralized derivatives not specifically regulated in Greece. You are responsible for reporting any trading profits for tax purposes.' },
      { question: 'How do I convert EUR to USDC?', answer: 'The easiest way is through Binance or Kraken with a SEPA transfer from your Greek bank. Piraeus Bank, Alpha Bank, Eurobank, and National Bank of Greece all support SEPA.' },
      { question: "What's the minimum to start?", answer: 'You can start with as little as €45 (~$50 USDC). Fractional trading means you can trade any US stock regardless of its price — no need to buy a full share.' },
      { question: 'What payment methods work from Greece?', answer: 'SEPA transfers from Greek banks are the most common method. Piraeus Bank, Alpha Bank, Eurobank, and National Bank of Greece all work well.' },
      { question: 'How is this different from eToro or Degiro?', answer: 'Unlike Greek brokers, equity perps offer: 24/7 trading (not just US market hours), up to 50x leverage (vs 5x typical), no KYC required, self-custody of funds, and easier short selling.' },
    ],
    ctaTitle: "Ready to Trade US Stocks?",
    ctaDesc: "Join thousands of Greek traders accessing US markets 24/7.",
    freeNotice: "This site is",
    freeNotice2: "100% free",
    freeNotice3: ". Get",
    freeNotice4: "4% off fees",
    freeNotice5: "through our links.",
  },
  el: {
    badge: "Οδηγός για Έλληνες Traders",
    heroTitle1: "Κάντε Trading σε Αμερικανικές Μετοχές",
    heroTitle2: "από την Ελλάδα",
    heroDesc: "Αποκτήστε πρόσβαση σε NVIDIA, Tesla, Apple με EUR. Ξεκινήστε με €45. Trading 24/7 με SEPA.",
    comparePlatforms: "Συγκρίνετε Πλατφόρμες",
    howItWorks: "Πώς Λειτουργεί",

    // What are Equity Perps section
    whatArePerpsTitle: "Τι είναι τα Equity Perpetuals;",
    whatArePerpsSubtitle: "Ένας νέος τρόπος για Έλληνες traders να αποκτήσουν πρόσβαση στις αμερικανικές αγορές",
    whatArePerpsContent: "Τα Equity perpetuals (ή \"perps\") είναι παράγωγα συμβόλαια που παρακολουθούν την τιμή αμερικανικών μετοχών όπως Tesla, Nvidia και Apple. Σε αντίθεση με το παραδοσιακό trading μετοχών μέσω ελληνικού χρηματιστή, τα equity perps σας επιτρέπουν να κάνετε trading 24/7 από οπουδήποτε στην Ελλάδα χρησιμοποιώντας μόνο ένα ψηφιακό πορτοφόλι και stablecoins USDC.",
    whatArePerpsHow: "Πώς λειτουργεί:",
    whatArePerpsSteps: [
      "Τα perps παρακολουθούν πραγματικές τιμές μετοχών χρησιμοποιώντας price feeds (oracles) από μεγάλα χρηματιστήρια",
      "Μπορείτε να πάτε long (στοίχημα ότι η τιμή ανεβαίνει) ή short (στοίχημα ότι η τιμή πέφτει)",
      "Χρησιμοποιήστε μόχλευση για να ελέγξετε μεγαλύτερες θέσεις με λιγότερο κεφάλαιο",
      "Κάντε trading οποτεδήποτε — οι αγορές δεν κλείνουν ποτέ, ακόμα και τα Σαββατοκύριακα και τις αργίες",
    ],
    whatArePerpsCta: "Δεν χρειάζεται λογαριασμός χρηματιστηρίου στις ΗΠΑ. Χωρίς KYC. Απλά συνδέστε το πορτοφόλι σας και ξεκινήστε.",

    // Why Equity Perps section
    whyPerpsTitle: "Γιατί οι Έλληνες Traders Επιλέγουν τα Equity Perps",
    whyPerpsSubtitle: "Σε σύγκριση με τα παραδοσιακά ελληνικά χρηματιστήρια",
    whyPerpsReasons: [
      {
        icon: '🌍',
        title: 'Παγκόσμια Πρόσβαση από την Ελλάδα',
        desc: 'Κάντε trading αμερικανικές μετοχές χωρίς να ανοίξετε λογαριασμό σε αμερικανικό χρηματιστήριο. Δεν απαιτείται SSN, χωρίς περίπλοκα έγγραφα. Λειτουργεί με ελληνικούς τραπεζικούς λογαριασμούς μέσω SEPA.',
      },
      {
        icon: '🕐',
        title: 'Trading 24/7',
        desc: 'Οι παραδοσιακές αμερικανικές αγορές είναι ανοιχτές μόνο 16:30-23:00 EET. Τα Equity perps λειτουργούν όλο το 24ωρο — αντιδράστε στα αποτελέσματα της Tesla τα μεσάνυχτα ή κάντε trading NVIDIA την Κυριακή το πρωί.',
      },
      {
        icon: '📈',
        title: 'Έως 50x Μόχλευση',
        desc: 'Ελέγξτε μια θέση Tesla αξίας $5,000 με μόλις $100. Οι παραδοσιακοί Έλληνες χρηματιστές προσφέρουν περιορισμένη μόχλευση. Ξεκινήστε μικρά και κλιμακώστε καθώς μαθαίνετε.',
      },
      {
        icon: '⚡',
        title: 'Εύκολο Short Selling',
        desc: 'Νομίζετε ότι μια μετοχή θα πέσει; Κάντε short αμέσως. Χωρίς δανεισμό μετοχών, χωρίς προμήθειες, χωρίς περιορισμούς. Απλά κάντε κλικ πώληση και κερδίστε από τις πτώσεις.',
      },
      {
        icon: '🔐',
        title: 'Self-Custody',
        desc: 'Τα κεφάλαιά σας παραμένουν στο πορτοφόλι σας. Κανένας χρηματιστής δεν κρατά τα χρήματά σας. Χωρίς όρια αναλήψεων. Χωρίς πάγωμα λογαριασμού. Εσείς ελέγχετε πλήρως τα περιουσιακά σας στοιχεία.',
      },
      {
        icon: '💨',
        title: 'Άμεση Εκκαθάριση',
        desc: 'Χωρίς αναμονή T+2. Κλείστε μια θέση και τα κέρδη σας είναι διαθέσιμα αμέσως. Ανάληψη στο πορτοφόλι σας σε δευτερόλεπτα, όχι μέρες.',
      },
    ],

    // Quick benefits (original)
    benefits: [
      { icon: '💰', title: 'Ξεκινήστε με €45', desc: '~$50 USDC ελάχιστο' },
      { icon: '🕐', title: 'Trading 24/7', desc: 'Κάντε trading οποιαδήποτε ώρα' },
      { icon: '🏦', title: 'SEPA Έτοιμο', desc: 'Τραπεζικές μεταφορές EUR' },
      { icon: '🔐', title: 'Self-Custody', desc: 'Τα κλειδιά σας, τα νομίσματά σας' },
    ],

    // Enhanced Getting Started section
    getStartedTitle: "Πώς να Ξεκινήσετε",
    getStartedSubtitle: "Πλήρης οδηγός για Έλληνες traders — διαρκεί περίπου 15 λεπτά",

    step1Title: "Δημιουργήστε το Ψηφιακό σας Πορτοφόλι",
    step1Subtitle: "Δωρεάν, διαρκεί 2 λεπτά, το κάνετε μόνο μία φορά",
    step1WhatIsWallet: "Τι είναι το ψηφιακό πορτοφόλι;",
    step1WhatIsWalletDesc: "Σκεφτείτε το σαν έναν ψηφιακό τραπεζικό λογαριασμό που ελέγχετε πλήρως εσείς. Αντί η τράπεζα να κρατά τα χρήματά σας, τα κρατάτε εσείς χρησιμοποιώντας μια απλή επέκταση browser.",
    step1Features: [
      { icon: '🔐', text: 'Εσείς το ελέγχετε' },
      { icon: '🆓', text: 'Εντελώς δωρεάν' },
      { icon: '⚡', text: '2 λεπτά εγκατάσταση' },
      { icon: '🌍', text: 'Λειτουργεί παγκοσμίως' },
    ],
    step1Instructions: [
      'Πηγαίνετε στο rabby.io (το πορτοφόλι που προτείνουμε)',
      'Κάντε κλικ στο "Download" και προσθέστε το στον browser σας (Chrome, Firefox, κλπ.)',
      'Κάντε κλικ στο "Create New Wallet" και ορίστε έναν κωδικό',
      'Σημειώστε τη φράση ανάκτησης 12 λέξεων — κρατήστε την ασφαλή και μην τη μοιραστείτε ποτέ!',
    ],
    step1VideoTitle: "Δείτε: Οδηγός Εγκατάστασης 2 Λεπτών",
    step1Done: "Έχω ρυθμίσει το πορτοφόλι μου",

    step2Title: "Χρηματοδοτήστε το Πορτοφόλι σας με USDC",
    step2Subtitle: "Μετατρέψτε EUR σε USDC χρησιμοποιώντας Binance ή Kraken",
    step2Methods: [
      {
        name: 'Binance με SEPA (Προτεινόμενο)',
        description: 'Αγοράστε USDC με EUR από την ελληνική σας τράπεζα',
        steps: [
          'Δημιουργήστε λογαριασμό Binance (δωρεάν)',
          'Καταθέστε EUR μέσω SEPA από την τράπεζά σας',
          'Αγοράστε USDC με το υπόλοιπο EUR σας',
          'Αναλάβετε USDC στο πορτοφόλι Rabby σας στο Arbitrum',
        ],
        tip: 'Χρησιμοποιήστε πάντα το δίκτυο Arbitrum για τα χαμηλότερα τέλη (~€0.10)',
      },
      {
        name: 'Ανταλλακτήριο Kraken',
        description: 'Εναλλακτική για μεγαλύτερα ποσά',
        steps: [
          'Δημιουργήστε λογαριασμό Kraken',
          'Καταθέστε EUR μέσω SEPA μεταφοράς',
          'Αγοράστε USDC με EUR',
          'Αναλάβετε USDC στο Rabby στο Arbitrum',
        ],
        tip: 'Οι μεταφορές SEPA συνήθως φτάνουν εντός 1-2 εργάσιμων ημερών',
      },
    ],
    step2MinAmount: "Ξεκινήστε με €45 (~$50 USDC)",
    step2Done: "Έχω χρηματοδοτήσει το πορτοφόλι μου",

    step3Title: "Συνδεθείτε στο Hyperliquid και Κάντε Trading",
    step3Subtitle: "Η πιο δημοφιλής πλατφόρμα για equity perps",
    step3Instructions: [
      'Πηγαίνετε στο app.hyperliquid.xyz',
      'Κάντε κλικ στο "Connect" και επιλέξτε Rabby Wallet',
      'Καταθέστε τα USDC σας στην πλατφόρμα',
      'Αναζητήστε μια μετοχή (π.χ., NVDA-PERP, TSLA-PERP)',
      'Επιλέξτε Long (τιμή πάνω) ή Short (τιμή κάτω)',
      'Ρυθμίστε τη μόχλευση (ξεκινήστε με 2-3x)',
      'Εισάγετε το μέγεθος θέσης και κάντε κλικ trade!',
    ],
    step3Tip: "Ξεκινήστε με μικρές θέσεις (5-10% του λογαριασμού σας) ενώ μαθαίνετε.",
    step3Cta: "Ξεκινήστε Trading στο Hyperliquid",

    // Risk Warning
    riskTitle: "Κατανοήστε τους Κινδύνους",
    riskWarnings: [
      { title: 'Η μόχλευση ενισχύει τις απώλειες', desc: 'Η ίδια μόχλευση 10x που μετατρέπει το 5% κέρδος σε 50%, μετατρέπει επίσης το 5% ζημία σε 50% ζημία.' },
      { title: 'Η εκκαθάριση είναι πραγματική', desc: 'Η θέση σας μπορεί να κλείσει αυτόματα αν κινηθεί αρκετά εναντίον σας.' },
      { title: 'Τα funding rates κοστίζουν', desc: 'Η διατήρηση θέσεων κοστίζει χρήματα κάθε λίγες ώρες, ειδικά σε δημοφιλείς συναλλαγές.' },
      { title: 'Χωρίς ιδιοκτησία', desc: 'Κάνετε trading έκθεση στην τιμή, όχι πραγματικές μετοχές. Χωρίς μερίσματα, χωρίς δικαιώματα ψήφου.' },
    ],

    // Original sections
    stepsTitle: "Ξεκινήστε σε 4 Βήματα",
    steps: [
      { t: 'Μετατρέψτε EUR σε USDC', d: 'Χρησιμοποιήστε Binance ή Kraken με SEPA μεταφορά.' },
      { t: 'Επιλέξτε Πλατφόρμα', d: 'Συγκρίνετε πλατφόρμες.', l: '/', lt: 'Σύγκριση' },
      { t: 'Συνδέστε Πορτοφόλι', d: 'Χρησιμοποιήστε MetaMask ή Rabby.' },
      { t: 'Ξεκινήστε το Trading', d: 'Ξεκινήστε με 2-3x μόχλευση.' },
    ],
    paymentTitle: "Μέθοδοι Πληρωμής Ελλάδας",
    digitalPayments: "Τράπεζες",
    banks: "Ανταλλακτήρια",
    faqTitle: "Συχνές Ερωτήσεις",
    faqs: [
      { question: 'Χρειάζομαι λογαριασμό χρηματιστή στις ΗΠΑ;', answer: 'Όχι. Τα Equity perps είναι συνθετικά παράγωγα που παρακολουθούν τις τιμές αμερικανικών μετοχών. Κάνετε trading με USDC σε αποκεντρωμένες πλατφόρμες — χωρίς αμερικανικό χρηματιστή, χωρίς SSN, χωρίς περίπλοκα έγγραφα.' },
      { question: 'Είναι νόμιμο στην Ελλάδα;', answer: 'Τα Equity perps υπάρχουν σε μια γκρίζα ρυθμιστική ζώνη. Είναι αποκεντρωμένα παράγωγα που δεν ρυθμίζονται συγκεκριμένα στην Ελλάδα. Είστε υπεύθυνοι για τη δήλωση τυχόν κερδών από trading για φορολογικούς σκοπούς.' },
      { question: 'Πώς μετατρέπω EUR σε USDC;', answer: 'Ο ευκολότερος τρόπος είναι μέσω Binance ή Kraken με SEPA μεταφορά από την ελληνική σας τράπεζα. Η Τράπεζα Πειραιώς, Alpha Bank, Eurobank και Εθνική Τράπεζα υποστηρίζουν SEPA.' },
      { question: 'Ποιο είναι το ελάχιστο για να ξεκινήσω;', answer: 'Μπορείτε να ξεκινήσετε με μόλις €45 (~$50 USDC). Το κλασματικό trading σημαίνει ότι μπορείτε να κάνετε trading οποιαδήποτε αμερικανική μετοχή ανεξάρτητα από την τιμή της — δεν χρειάζεται να αγοράσετε ολόκληρη μετοχή.' },
      { question: 'Ποιες μέθοδοι πληρωμής λειτουργούν από την Ελλάδα;', answer: 'Οι μεταφορές SEPA από ελληνικές τράπεζες είναι η πιο κοινή μέθοδος. Η Τράπεζα Πειραιώς, Alpha Bank, Eurobank και Εθνική Τράπεζα λειτουργούν όλες καλά.' },
      { question: 'Πώς διαφέρει αυτό από το eToro ή το Degiro;', answer: 'Σε αντίθεση με τους Έλληνες χρηματιστές, τα equity perps προσφέρουν: trading 24/7 (όχι μόνο ώρες αγοράς ΗΠΑ), έως 50x μόχλευση (vs τυπικό 5x), χωρίς KYC, self-custody κεφαλαίων και ευκολότερο short selling.' },
    ],
    ctaTitle: "Έτοιμοι να Κάνετε Trading Αμερικανικές Μετοχές;",
    ctaDesc: "Ενταχθείτε σε χιλιάδες Έλληνες traders με πρόσβαση στις αμερικανικές αγορές 24/7.",
    freeNotice: "Αυτός ο ιστότοπος είναι",
    freeNotice2: "100% δωρεάν",
    freeNotice3: ". Πάρτε",
    freeNotice4: "4% έκπτωση",
    freeNotice5: "μέσω των συνδέσμων μας.",
  },
};

export const digitalPayments = ['Piraeus Bank', 'Alpha Bank', 'Eurobank', 'National Bank of Greece'];
export const banksList = ['Binance', 'Kraken', 'Coinbase', 'Bitstamp'];
export const nativeLang = 'el';
export const nativeName = 'Ελληνικά';
export const popularStocks = ['NVDA', 'TSLA', 'AAPL', 'META', 'MSFT', 'AMZN'];
