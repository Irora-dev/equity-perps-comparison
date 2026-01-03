export const nativeLang = 'th';
export const nativeName = 'ไทย';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Thailand',

    // Hero
    badge: 'Thailand Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Thailand',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert THB to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '฿1,750',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time ICT',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Thai Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🚫',
        title: 'No Complex Requirements',
        desc: 'Skip the complicated US brokerage approval process. No foreign account restrictions. Trade as much as you want.'
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert THB → USDC and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade Any Time',
        desc: 'US markets open at 8:30pm ICT. With equity perps, trade whenever you want - morning, afternoon, or 2am.'
      },
      {
        icon: '💰',
        title: 'Start with ฿1,750',
        desc: 'Most US brokers need $500+ minimum. Here, start with just ฿1,750-2,000 and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Thailand today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Thailand'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert THB to USDC',
    step2Desc: 'Use Binance P2P, Bitkub, or bank transfer',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert THB:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'Best rates, most liquidity',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with THB (PromptPay/Bank)', 'Convert USDT → USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    bitkub: {
      title: 'Bitkub',
      desc: 'Thai exchange, easy PromptPay',
      steps: ['Deposit THB via PromptPay', 'Buy USDT', 'Transfer to Binance (low fee)', 'Convert USDT → USDC', 'Withdraw to Rabby']
    },
    satangpro: {
      title: 'Satang Pro',
      desc: 'Thai exchange, bank transfer',
      steps: ['Deposit THB via bank', 'Buy USDC directly', 'Withdraw to Rabby', '(Higher fees but simpler)']
    },
    proTip: 'Pro tip:',
    proTipText: 'Binance P2P usually has the best THB rates. Use PromptPay for instant transfers. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed THB → USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from Thailand using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by Thai SEC as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many Thai traders use these platforms, but you should understand the regulatory landscape and consult a tax professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Thailand?',
        answer: 'Yes, profits from trading are likely taxable in Thailand. They may be classified as capital gains or personal income depending on your trading frequency. Maintain records of all trades and consult a tax advisor familiar with crypto/derivatives taxation in Thailand.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as ฿1,750-2,000 ($50-60). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during Thai market hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night ICT. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on a Thai exchange (Bitkub, Satang Pro, Binance) to convert THB to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Thailand Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Thai traders. Check them out:",
    guides: [
      { icon: '฿', title: 'Convert THB to USDC', desc: 'Step-by-step with Binance P2P, Bitkub', href: '/blog/convert-thb-to-usdc' },
      { icon: '💰', title: 'Trade with ฿2,000', desc: 'Small account strategy guide', href: '/blog/trade-stocks-with-2000-baht' },
      { icon: '⚖️', title: 'Is It Legal in Thailand?', desc: 'Regulations, taxes, and compliance', href: '/blog/equity-perps-legal-thailand' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Thai traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just ฿1,750.',
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
      { tag: 'FUNDING', title: 'Convert THB to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-thb-to-usdc' },
      { tag: 'GUIDE', title: 'Trade with ฿2,000', desc: 'Small account strategy', href: '/blog/trade-stocks-with-2000-baht' },
      { tag: 'LEGAL', title: 'Is It Legal in Thailand?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-thailand' }
    ]
  },
  th: {
    // Breadcrumb
    home: 'หน้าหลัก',
    blog: 'บล็อก',
    pageTitle: 'เทรดหุ้นสหรัฐจากประเทศไทย',

    // Hero
    badge: 'คู่มือประเทศไทย',
    noBrokerBadge: 'ไม่ต้องใช้โบรกเกอร์',
    heroTitle1: 'เทรดหุ้นสหรัฐ',
    heroTitle2: 'จากประเทศไทย',
    heroDesc: 'เข้าถึง NVDA, TSLA, AAPL และหุ้นสหรัฐ 50+ ตัวโดยไม่ต้องมีบัญชีโบรกเกอร์สหรัฐ แปลง THB เป็น USDC และเริ่มเทรดใน',
    heroDescHighlight: '15 นาที',
    startTrading: 'เริ่มเทรดเลย',
    howItWorks: 'วิธีการทำงาน',

    // Quick Stats
    statMinimumValue: '฿1,750',
    statMinimum: 'ขั้นต่ำเริ่มต้น',
    statTimeValue: '24/7',
    statTime: 'ทุกเวลา ICT',
    statStocksValue: '50+',
    statStocks: 'หุ้นสหรัฐ',
    statKycValue: 'ไม่ต้อง KYC',
    statKyc: 'บนแพลตฟอร์มเทรด',

    // Why Section
    whyTitle: 'ทำไมเทรดเดอร์ไทยเลือก Equity Perps',
    whyCards: [
      {
        icon: '🚫',
        title: 'ไม่มีข้อกำหนดซับซ้อน',
        desc: 'ข้ามขั้นตอนการอนุมัติโบรกเกอร์สหรัฐที่ซับซ้อน ไม่มีข้อจำกัดบัญชีต่างประเทศ เทรดได้ตามต้องการ'
      },
      {
        icon: '⚡',
        title: 'เข้าถึงทันที',
        desc: 'ไม่ต้องรอหลายสัปดาห์เพื่ออนุมัติโบรกเกอร์สหรัฐ แปลง THB → USDC และเริ่มเทรดได้ในวันเดียวกัน'
      },
      {
        icon: '🕐',
        title: 'เทรดได้ทุกเวลา',
        desc: 'ตลาดสหรัฐเปิด 20:30 น. ICT กับ equity perps เทรดได้ทุกเมื่อ - เช้า บ่าย หรือตี 2'
      },
      {
        icon: '💰',
        title: 'เริ่มต้นที่ ฿1,750',
        desc: 'โบรกเกอร์สหรัฐส่วนใหญ่ต้องการขั้นต่ำ $500+ ที่นี่เริ่มด้วย ฿1,750-2,000 และใช้ leverage เพื่อควบคุมตำแหน่งที่ใหญ่ขึ้น'
      }
    ],

    // Get Started Section
    stepByStep: 'คู่มือทีละขั้นตอน',
    getStartedTitle: 'เริ่มต้นใน 15 นาที',
    getStartedDesc: 'ทำตามขั้นตอนเหล่านี้เพื่อเริ่มเทรดหุ้นสหรัฐจากประเทศไทยวันนี้',

    // Step 1: Wallet
    step1Title: 'ตั้งค่ากระเป๋าดิจิทัลของคุณ',
    step1Desc: 'ฟรี ใช้เวลา 2 นาที และทำครั้งเดียว',
    walletExplainTitle: 'กระเป๋าดิจิทัลคืออะไร?',
    walletExplainDesc: 'ลองคิดว่ามันเหมือน',
    walletExplainHighlight: 'บัญชีธนาคารดิจิทัลที่คุณควบคุมเอง',
    walletExplainDesc2: ' แทนที่ธนาคารจะถือเงินของคุณ คุณถือเองโดยใช้ส่วนขยายเบราว์เซอร์ง่ายๆ',
    walletFeatures: ['คุณควบคุมเอง', 'ฟรีทั้งหมด', 'ตั้งค่า 2 นาที', 'ใช้งานได้ในไทย'],
    walletSetupTitle: 'วิธีตั้งค่า:',
    walletSteps: [
      { text: 'ไปที่', link: 'rabby.io' },
      { text: 'คลิก "Download" และเพิ่มลง Chrome/Brave' },
      { text: 'คลิก "Create New Wallet" และตั้งรหัสผ่าน' },
      { text: 'เขียน recovery phrase 12 คำของคุณ', warning: 'เก็บไว้อย่างปลอดภัยและอย่าแชร์!' }
    ],
    watchVideo: 'ดู: คู่มือตั้งค่า 2 นาที',

    // Step 2: Funding
    step2Title: 'แปลง THB เป็น USDC',
    step2Desc: 'ใช้ Binance P2P, Bitkub, หรือโอนผ่านธนาคาร',
    fundingIntro: 'คุณต้องมี USDC (stablecoin มูลค่า $1) เพื่อเทรด นี่คือวิธีที่ดีที่สุดในการแปลง THB:',
    binanceP2P: {
      title: 'Binance P2P',
      desc: 'เรทดีที่สุด สภาพคล่องมากที่สุด',
      steps: ['เปิดแอป Binance', 'ไปที่ P2P Trading', 'ซื้อ USDT ด้วย THB (PromptPay/ธนาคาร)', 'แปลง USDT → USDC', 'ถอนไปยัง Rabby (Arbitrum)']
    },
    bitkub: {
      title: 'Bitkub',
      desc: 'ตลาดแลกเปลี่ยนไทย PromptPay ง่าย',
      steps: ['ฝาก THB ผ่าน PromptPay', 'ซื้อ USDT', 'โอนไป Binance (ค่าธรรมเนียมต่ำ)', 'แปลง USDT → USDC', 'ถอนไปยัง Rabby']
    },
    satangpro: {
      title: 'Satang Pro',
      desc: 'ตลาดแลกเปลี่ยนไทย โอนผ่านธนาคาร',
      steps: ['ฝาก THB ผ่านธนาคาร', 'ซื้อ USDC โดยตรง', 'ถอนไปยัง Rabby', '(ค่าธรรมเนียมสูงกว่าแต่ง่ายกว่า)']
    },
    proTip: 'เคล็ดลับ:',
    proTipText: 'Binance P2P มักมีเรท THB ดีที่สุด ใช้ PromptPay สำหรับโอนทันที ซื้อ USDT ก่อน (สภาพคล่องมากกว่า) แล้วแปลงเป็น USDC บน Binance (ฟรี)',
    seeDetailedGuide: 'ดูคู่มือ THB → USDC พร้อมภาพหน้าจอ',

    // Step 3: Trade
    step3Title: 'เริ่มเทรด',
    step3Desc: 'เชื่อมต่อกับ Hyperliquid และเทรดหุ้นสหรัฐ 50+ ตัว',
    tradeSteps: [
      { text: 'ไปที่', linkText: 'app.hyperliquid.xyz' },
      { text: 'คลิก "Connect" และเลือก Rabby Wallet' },
      { text: 'คลิก "Deposit" และ bridge USDC ของคุณ' },
      { text: 'ค้นหาหุ้น (NVDA, TSLA, AAPL) และเปิดตำแหน่ง!' }
    ],
    openHyperliquid: 'เปิด Hyperliquid (ลดค่าธรรมเนียม 4%)',

    // Popular Stocks
    popularStocksTitle: 'หุ้นสหรัฐยอดนิยมที่มี',
    viewAllStocks: 'ดูหุ้นทั้งหมด 50+ ตัว →',
    hot: 'HOT',

    // FAQ
    faqTitle: 'คำถามที่พบบ่อย',
    faqs: [
      {
        question: 'การเทรดหุ้นสหรัฐจากไทยโดยใช้ equity perps ถูกกฎหมายไหม?',
        answer: 'Equity perpetuals อยู่ในพื้นที่กฎระเบียบสีเทา ไม่ได้ถูกควบคุมโดยชัดเจนจาก ก.ล.ต. เนื่องจากทำงานบนแพลตฟอร์มกระจายศูนย์ คุณไม่ได้ซื้อหุ้นสหรัฐโดยตรง - คุณเทรดการเปิดรับราคาผ่านสัญญาสังเคราะห์ เทรดเดอร์ไทยหลายคนใช้แพลตฟอร์มเหล่านี้ แต่คุณควรเข้าใจภูมิทัศน์กฎระเบียบและปรึกษาผู้เชี่ยวชาญด้านภาษี'
      },
      {
        question: 'ต้องจ่ายภาษีจากกำไร equity perps ในไทยไหม?',
        answer: 'ใช่ กำไรจากการเทรดน่าจะต้องเสียภาษีในประเทศไทย อาจจัดเป็นกำไรจากทุนหรือรายได้บุคคลขึ้นอยู่กับความถี่ในการเทรด เก็บบันทึกการเทรดทั้งหมดและปรึกษาที่ปรึกษาภาษีที่คุ้นเคยกับการเก็บภาษี crypto/derivatives ในไทย'
      },
      {
        question: 'ต้องใช้เงินขั้นต่ำเท่าไหร่?',
        answer: 'คุณสามารถเริ่มต้นด้วยเงินเพียง ฿1,750-2,000 ($50-60) ด้วย leverage สิ่งนี้ให้การเปิดรับหุ้นมูลค่า $500-3,000 เราแนะนำให้เริ่มต้นน้อยๆ เพื่อเรียนรู้แพลตฟอร์ม'
      },
      {
        question: 'เทรดได้ในช่วงเวลาตลาดไทยไหม?',
        answer: 'ได้! Equity perps เทรดได้ 24/7 คุณสามารถเทรดหุ้นสหรัฐได้ทุกเวลา - เช้า เย็น หรือดึก ICT ไม่มีข้อจำกัดเวลาเทรด'
      },
      {
        question: 'ต้องทำ KYC ไหม?',
        answer: 'แพลตฟอร์มเทรด (เช่น Hyperliquid) ไม่ต้องการ KYC อย่างไรก็ตาม คุณจะต้อง KYC บนตลาดแลกเปลี่ยนไทย (Bitkub, Satang Pro, Binance) เพื่อแปลง THB เป็น USDC ในตอนแรก'
      }
    ],

    // More Guides
    moreGuidesTitle: 'คู่มือประเทศไทยเพิ่มเติม',
    moreGuidesDesc: 'เราได้สร้างคู่มือโดยเฉพาะสำหรับเทรดเดอร์ไทย ลองดู:',
    guides: [
      { icon: '฿', title: 'แปลง THB เป็น USDC', desc: 'ทีละขั้นตอนกับ Binance P2P, Bitkub', href: '/blog/convert-thb-to-usdc' },
      { icon: '💰', title: 'เทรดด้วย ฿2,000', desc: 'คู่มือกลยุทธ์บัญชีเล็ก', href: '/blog/trade-stocks-with-2000-baht' },
      { icon: '⚖️', title: 'ถูกกฎหมายในไทยไหม?', desc: 'กฎระเบียบ ภาษี และการปฏิบัติตาม', href: '/blog/equity-perps-legal-thailand' },
      { icon: '🤝', title: 'คู่มือ P2P Trading', desc: 'วิธี P2P ทั่วโลกและเคล็ดลับความปลอดภัย', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'เริ่มเทรดหุ้นสหรัฐวันนี้',
    ctaDesc: 'เข้าร่วมเทรดเดอร์ไทยหลายพันคนที่เข้าถึง NVDA, TSLA และหุ้นสหรัฐ 50+ ตัว 24/7 ไม่ต้องใช้โบรกเกอร์สหรัฐ เริ่มด้วย ฿1,750 เท่านั้น',
    getStartedCta: 'เริ่มต้นเลย (ลดค่าธรรมเนียม 4%)',

    // Free Notice
    freeNotice: 'เว็บไซต์นี้',
    freeNotice2: 'ฟรี 100%',
    freeNotice3: ' สำหรับใช้เปรียบเทียบแพลตฟอร์มที่ดีที่สุดในการเทรดหุ้น 24/7 เมื่อคุณสมัครผ่านลิงก์ของเราไปยังแพลตฟอร์มเช่น',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'และ',
    freeNotice6: 'Lighter',
    freeNotice7: ' คุณจะได้รับ',
    freeNotice8: 'ส่วนลด 4% ค่าธรรมเนียมเทรด',
    freeNotice9: ' ด้วยรหัสแนะนำของเรา สิ่งนี้ช่วยสนับสนุนเว็บไซต์ในขณะที่ช่วยคุณประหยัดเงินในทุกการเทรด',

    // Related
    relatedTitle: 'คู่มือที่เกี่ยวข้อง',
    relatedGuides: [
      { tag: 'การฝากเงิน', title: 'แปลง THB เป็น USDC', desc: 'ทีละขั้นตอนพร้อมภาพหน้าจอ', href: '/blog/convert-thb-to-usdc' },
      { tag: 'คู่มือ', title: 'เทรดด้วย ฿2,000', desc: 'กลยุทธ์บัญชีเล็ก', href: '/blog/trade-stocks-with-2000-baht' },
      { tag: 'กฎหมาย', title: 'ถูกกฎหมายในไทยไหม?', desc: 'ภาพรวมกฎระเบียบ', href: '/blog/equity-perps-legal-thailand' }
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
