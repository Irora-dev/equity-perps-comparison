export const nativeLang = 'vi';
export const nativeName = 'Tiếng Việt';
export const isRTL = false;

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Trade US Stocks from Vietnam',

    // Hero
    badge: 'Vietnam Guide',
    noBrokerBadge: 'No Broker Needed',
    heroTitle1: 'Trade US Stocks',
    heroTitle2: 'From Vietnam',
    heroDesc: 'Access NVDA, TSLA, AAPL and 50+ US stocks without a US brokerage account. Convert VND to USDC and start trading in',
    heroDescHighlight: '15 minutes',
    startTrading: 'Start Trading Now',
    howItWorks: 'How It Works',

    // Quick Stats
    statMinimumValue: '1,250,000₫',
    statMinimum: 'Minimum to Start',
    statTimeValue: '24/7',
    statTime: 'Any Time ICT',
    statStocksValue: '50+',
    statStocks: 'US Stocks',
    statKycValue: 'No KYC',
    statKyc: 'On Trading Platform',

    // Why Section
    whyTitle: 'Why Vietnamese Traders Choose Equity Perps',
    whyCards: [
      {
        icon: '🚫',
        title: 'No Capital Controls',
        desc: "Bypass traditional forex restrictions and foreign investment limits. Trade US stocks freely without complex approval processes."
      },
      {
        icon: '⚡',
        title: 'Instant Access',
        desc: 'No waiting weeks for US brokerage approval. Convert VND → USDC and start trading the same day.'
      },
      {
        icon: '🕐',
        title: 'Trade at Night',
        desc: 'US markets open at 8pm ICT. With equity perps, trade whenever you want - morning, afternoon, or 2am.'
      },
      {
        icon: '💰',
        title: 'Start with 1.25M₫',
        desc: 'Most US brokers need $500+ minimum. Here, start with just ~$50 in VND and use leverage to control larger positions.'
      }
    ],

    // Get Started Section
    stepByStep: 'Step-by-Step Guide',
    getStartedTitle: 'Get Started in 15 Minutes',
    getStartedDesc: 'Follow these steps to start trading US stocks from Vietnam today.',

    // Step 1: Wallet
    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainHighlight: 'digital bank account you control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
    walletFeatures: ['You control it', 'Completely free', '2 min setup', 'Works in Vietnam'],
    walletSetupTitle: "Here's how to set it up:",
    walletSteps: [
      { text: 'Go to', link: 'rabby.io' },
      { text: 'Click "Download" and add to Chrome/Brave' },
      { text: 'Click "Create New Wallet" and set a password' },
      { text: 'Write down your 12-word recovery phrase', warning: 'Keep it safe and never share it!' }
    ],
    watchVideo: 'Watch: 2-Minute Setup Guide',

    // Step 2: Funding
    step2Title: 'Convert VND to USDC',
    step2Desc: 'Use Binance P2P with MoMo, ZaloPay, or bank transfer',
    fundingIntro: 'You need USDC (a stablecoin worth $1) to trade. Here are the best ways to convert VND:',
    binanceP2P: {
      title: 'Binance P2P with MoMo',
      desc: 'Most popular, best rates',
      steps: ['Open Binance app', 'Go to P2P Trading', 'Buy USDT with VND (MoMo)', 'Convert USDT → USDC', 'Withdraw to Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'ZaloPay Method',
      desc: 'Alternative e-wallet option',
      steps: ['Use Binance P2P', 'Select ZaloPay payment', 'Buy USDT with VND', 'Convert USDT → USDC', 'Withdraw to Rabby']
    },
    coindcx: {
      title: 'Bank Transfer',
      desc: 'Vietcombank, Techcombank, MB Bank',
      steps: ['Use Binance P2P', 'Select bank transfer', 'Buy USDC directly', 'Withdraw to Rabby', '(Slightly slower but reliable)']
    },
    proTip: 'Pro tip:',
    proTipText: 'MoMo on Binance P2P usually has the best VND rates. Buy USDT first (more liquidity), then convert to USDC on Binance (free).',
    seeDetailedGuide: 'See detailed VND → USDC guide with screenshots',

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
        question: 'Is it legal to trade US stocks from Vietnam using equity perps?',
        answer: "Equity perpetuals exist in a regulatory gray area. They are not explicitly regulated by the State Securities Commission as they operate on decentralized platforms. You're not directly buying US stocks - you're trading price exposure through synthetic contracts. Many Vietnamese traders use these platforms, but you should understand the regulatory landscape and consult a tax professional."
      },
      {
        question: 'Do I need to pay tax on profits from equity perps in Vietnam?',
        answer: 'Tax regulations for crypto and derivatives trading in Vietnam are still evolving. Profits may be subject to personal income tax. Maintain records of all trades and consult a local tax advisor familiar with digital asset taxation.'
      },
      {
        question: "What's the minimum amount I need to start?",
        answer: 'You can start with as little as 1,250,000₫ (~$50). With leverage, this gives you exposure to $500-3,000 worth of stocks. We recommend starting small to learn the platform.'
      },
      {
        question: 'Can I trade during Vietnam market hours?',
        answer: "Yes! Equity perps trade 24/7. You can trade US stocks at any time - morning, evening, or late night ICT. There's no restriction on trading hours."
      },
      {
        question: 'Is KYC required?',
        answer: "The trading platforms (like Hyperliquid) don't require KYC. However, you'll need to complete KYC on Binance to use P2P trading to convert VND to USDC initially."
      }
    ],

    // More Guides
    moreGuidesTitle: 'More Vietnam Guides',
    moreGuidesDesc: "We've created detailed guides specifically for Vietnamese traders. Check them out:",
    guides: [
      { icon: '₫', title: 'Convert VND to USDC', desc: 'Step-by-step with MoMo, Binance P2P', href: '/blog/convert-local-currency-to-usdc' },
      { icon: '💰', title: 'Trade with Small Capital', desc: 'Small account strategy guide', href: '/blog/small-account-trading-guide' },
      { icon: '⚖️', title: 'Understanding the Risks', desc: 'Risk management and best practices', href: '/blog/equity-perps-risk-guide' },
      { icon: '🤝', title: 'P2P Trading Guide', desc: 'Global P2P methods and safety tips', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Start Trading US Stocks Today',
    ctaDesc: 'Join thousands of Vietnamese traders accessing NVDA, TSLA, and 50+ US stocks 24/7. No US broker needed. Start with just 1,250,000₫.',
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
      { tag: 'FUNDING', title: 'Convert Local Currency to USDC', desc: 'Step-by-step with screenshots', href: '/blog/convert-local-currency-to-usdc' },
      { tag: 'GUIDE', title: 'Small Account Trading', desc: 'Start with minimal capital', href: '/blog/small-account-trading-guide' },
      { tag: 'SAFETY', title: 'P2P Trading Safety', desc: 'Best practices guide', href: '/blog/p2p-usdc-guide' }
    ]
  },
  vi: {
    // Breadcrumb
    home: 'Trang chủ',
    blog: 'Blog',
    pageTitle: 'Giao dịch cổ phiếu Mỹ từ Việt Nam',

    // Hero
    badge: 'Hướng dẫn Việt Nam',
    noBrokerBadge: 'Không cần môi giới',
    heroTitle1: 'Giao dịch cổ phiếu Mỹ',
    heroTitle2: 'Từ Việt Nam',
    heroDesc: 'Truy cập NVDA, TSLA, AAPL và 50+ cổ phiếu Mỹ mà không cần tài khoản môi giới Mỹ. Đổi VND sang USDC và bắt đầu giao dịch trong',
    heroDescHighlight: '15 phút',
    startTrading: 'Bắt đầu giao dịch ngay',
    howItWorks: 'Cách thức hoạt động',

    // Quick Stats
    statMinimumValue: '1,250,000₫',
    statMinimum: 'Tối thiểu để bắt đầu',
    statTimeValue: '24/7',
    statTime: 'Mọi lúc ICT',
    statStocksValue: '50+',
    statStocks: 'Cổ phiếu Mỹ',
    statKycValue: 'Không KYC',
    statKyc: 'Trên nền tảng giao dịch',

    // Why Section
    whyTitle: 'Tại sao nhà giao dịch Việt Nam chọn Equity Perps',
    whyCards: [
      {
        icon: '🚫',
        title: 'Không giới hạn vốn',
        desc: 'Vượt qua các hạn chế ngoại hối truyền thống và giới hạn đầu tư nước ngoài. Giao dịch cổ phiếu Mỹ tự do mà không cần quy trình phê duyệt phức tạp.'
      },
      {
        icon: '⚡',
        title: 'Truy cập ngay lập tức',
        desc: 'Không cần chờ hàng tuần để được phê duyệt môi giới Mỹ. Đổi VND → USDC và bắt đầu giao dịch ngay trong ngày.'
      },
      {
        icon: '🕐',
        title: 'Giao dịch ban đêm',
        desc: 'Thị trường Mỹ mở cửa lúc 8 giờ tối ICT. Với equity perps, giao dịch bất cứ khi nào bạn muốn - sáng, chiều, hoặc 2 giờ sáng.'
      },
      {
        icon: '💰',
        title: 'Bắt đầu với 1,25 triệu₫',
        desc: 'Hầu hết các môi giới Mỹ cần tối thiểu $500+. Ở đây, bắt đầu chỉ với ~$50 VND và sử dụng đòn bẩy để kiểm soát vị thế lớn hơn.'
      }
    ],

    // Get Started Section
    stepByStep: 'Hướng dẫn từng bước',
    getStartedTitle: 'Bắt đầu trong 15 phút',
    getStartedDesc: 'Làm theo các bước này để bắt đầu giao dịch cổ phiếu Mỹ từ Việt Nam ngay hôm nay.',

    // Step 1: Wallet
    step1Title: 'Thiết lập ví điện tử của bạn',
    step1Desc: 'Miễn phí, mất 2 phút, và bạn chỉ cần làm một lần',
    walletExplainTitle: 'Ví điện tử là gì?',
    walletExplainDesc: 'Hãy nghĩ về nó như một',
    walletExplainHighlight: 'tài khoản ngân hàng số mà bạn kiểm soát',
    walletExplainDesc2: '. Thay vì ngân hàng giữ tiền của bạn, bạn tự giữ nó bằng một tiện ích mở rộng trình duyệt đơn giản.',
    walletFeatures: ['Bạn kiểm soát', 'Hoàn toàn miễn phí', '2 phút cài đặt', 'Hoạt động tại VN'],
    walletSetupTitle: 'Cách thiết lập:',
    walletSteps: [
      { text: 'Truy cập', link: 'rabby.io' },
      { text: 'Nhấp "Download" và thêm vào Chrome/Brave' },
      { text: 'Nhấp "Create New Wallet" và đặt mật khẩu' },
      { text: 'Ghi lại cụm từ khôi phục 12 từ của bạn', warning: 'Giữ an toàn và không bao giờ chia sẻ!' }
    ],
    watchVideo: 'Xem: Hướng dẫn cài đặt 2 phút',

    // Step 2: Funding
    step2Title: 'Đổi VND sang USDC',
    step2Desc: 'Sử dụng Binance P2P với MoMo, ZaloPay hoặc chuyển khoản ngân hàng',
    fundingIntro: 'Bạn cần USDC (một stablecoin trị giá $1) để giao dịch. Đây là những cách tốt nhất để đổi VND:',
    binanceP2P: {
      title: 'Binance P2P với MoMo',
      desc: 'Phổ biến nhất, tỷ giá tốt nhất',
      steps: ['Mở ứng dụng Binance', 'Đến P2P Trading', 'Mua USDT bằng VND (MoMo)', 'Đổi USDT → USDC', 'Rút về Rabby (Arbitrum)']
    },
    wazirx: {
      title: 'Phương thức ZaloPay',
      desc: 'Tùy chọn ví điện tử thay thế',
      steps: ['Sử dụng Binance P2P', 'Chọn thanh toán ZaloPay', 'Mua USDT bằng VND', 'Đổi USDT → USDC', 'Rút về Rabby']
    },
    coindcx: {
      title: 'Chuyển khoản ngân hàng',
      desc: 'Vietcombank, Techcombank, MB Bank',
      steps: ['Sử dụng Binance P2P', 'Chọn chuyển khoản ngân hàng', 'Mua USDC trực tiếp', 'Rút về Rabby', '(Chậm hơn một chút nhưng đáng tin cậy)']
    },
    proTip: 'Mẹo pro:',
    proTipText: 'MoMo trên Binance P2P thường có tỷ giá VND tốt nhất. Mua USDT trước (thanh khoản cao hơn), sau đó đổi sang USDC trên Binance (miễn phí).',
    seeDetailedGuide: 'Xem hướng dẫn chi tiết VND → USDC với ảnh chụp màn hình',

    // Step 3: Trade
    step3Title: 'Bắt đầu giao dịch',
    step3Desc: 'Kết nối với Hyperliquid và giao dịch 50+ cổ phiếu Mỹ',
    tradeSteps: [
      { text: 'Truy cập', linkText: 'app.hyperliquid.xyz' },
      { text: 'Nhấp "Connect" và chọn Rabby Wallet' },
      { text: 'Nhấp "Deposit" và bridge USDC của bạn' },
      { text: 'Tìm kiếm cổ phiếu (NVDA, TSLA, AAPL) và mở vị thế!' }
    ],
    openHyperliquid: 'Mở Hyperliquid (Giảm 4% phí)',

    // Popular Stocks
    popularStocksTitle: 'Cổ phiếu Mỹ phổ biến có sẵn',
    viewAllStocks: 'Xem tất cả 50+ cổ phiếu →',
    hot: 'HOT',

    // FAQ
    faqTitle: 'Câu hỏi thường gặp',
    faqs: [
      {
        question: 'Giao dịch cổ phiếu Mỹ từ Việt Nam bằng equity perps có hợp pháp không?',
        answer: 'Equity perpetuals tồn tại trong vùng xám pháp lý. Chúng không được Ủy ban Chứng khoán Nhà nước quy định rõ ràng vì hoạt động trên các nền tảng phi tập trung. Bạn không mua trực tiếp cổ phiếu Mỹ - bạn đang giao dịch tiếp xúc giá thông qua các hợp đồng tổng hợp. Nhiều nhà giao dịch Việt Nam sử dụng các nền tảng này, nhưng bạn nên hiểu bối cảnh pháp lý và tham khảo ý kiến chuyên gia thuế.'
      },
      {
        question: 'Tôi có cần đóng thuế lợi nhuận từ equity perps tại Việt Nam không?',
        answer: 'Quy định thuế cho giao dịch crypto và derivatives tại Việt Nam vẫn đang phát triển. Lợi nhuận có thể chịu thuế thu nhập cá nhân. Lưu giữ hồ sơ tất cả các giao dịch và tham khảo ý kiến tư vấn thuế địa phương quen thuộc với thuế tài sản số.'
      },
      {
        question: 'Số tiền tối thiểu cần để bắt đầu là bao nhiêu?',
        answer: 'Bạn có thể bắt đầu chỉ với 1,250,000₫ (~$50). Với đòn bẩy, điều này cho bạn tiếp xúc với cổ phiếu trị giá $500-3,000. Chúng tôi khuyên bắt đầu nhỏ để học nền tảng.'
      },
      {
        question: 'Tôi có thể giao dịch trong giờ thị trường Việt Nam không?',
        answer: 'Có! Equity perps giao dịch 24/7. Bạn có thể giao dịch cổ phiếu Mỹ bất cứ lúc nào - sáng, tối, hoặc khuya ICT. Không có hạn chế về giờ giao dịch.'
      },
      {
        question: 'KYC có bắt buộc không?',
        answer: 'Các nền tảng giao dịch (như Hyperliquid) không yêu cầu KYC. Tuy nhiên, bạn sẽ cần hoàn thành KYC trên Binance để sử dụng giao dịch P2P đổi VND sang USDC ban đầu.'
      }
    ],

    // More Guides
    moreGuidesTitle: 'Thêm hướng dẫn Việt Nam',
    moreGuidesDesc: 'Chúng tôi đã tạo các hướng dẫn chi tiết dành riêng cho nhà giao dịch Việt Nam. Hãy xem:',
    guides: [
      { icon: '₫', title: 'Đổi VND sang USDC', desc: 'Từng bước với MoMo, Binance P2P', href: '/blog/convert-local-currency-to-usdc' },
      { icon: '💰', title: 'Giao dịch với vốn nhỏ', desc: 'Hướng dẫn chiến lược tài khoản nhỏ', href: '/blog/small-account-trading-guide' },
      { icon: '⚖️', title: 'Hiểu về rủi ro', desc: 'Quản lý rủi ro và thực hành tốt nhất', href: '/blog/equity-perps-risk-guide' },
      { icon: '🤝', title: 'Hướng dẫn giao dịch P2P', desc: 'Phương thức P2P toàn cầu và mẹo an toàn', href: '/blog/p2p-usdc-guide' }
    ],

    // CTA
    ctaTitle: 'Bắt đầu giao dịch cổ phiếu Mỹ ngay hôm nay',
    ctaDesc: 'Tham gia cùng hàng ngàn nhà giao dịch Việt Nam đang truy cập NVDA, TSLA và 50+ cổ phiếu Mỹ 24/7. Không cần môi giới Mỹ. Bắt đầu chỉ với 1,250,000₫.',
    getStartedCta: 'Bắt đầu ngay (Giảm 4% phí)',

    // Free Notice
    freeNotice: 'Trang web này',
    freeNotice2: '100% miễn phí',
    freeNotice3: ' để sử dụng so sánh các nền tảng tốt nhất để giao dịch cổ phiếu 24/7. Khi bạn đăng ký qua liên kết của chúng tôi đến các nền tảng như',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'và',
    freeNotice6: 'Lighter',
    freeNotice7: ', bạn nhận được',
    freeNotice8: 'giảm 4% phí giao dịch',
    freeNotice9: ' với mã giới thiệu của chúng tôi. Điều này giúp hỗ trợ trang web đồng thời tiết kiệm tiền cho bạn trên mỗi giao dịch.',

    // Related
    relatedTitle: 'Hướng dẫn liên quan',
    relatedGuides: [
      { tag: 'NẠP TIỀN', title: 'Đổi tiền địa phương sang USDC', desc: 'Từng bước với ảnh chụp màn hình', href: '/blog/convert-local-currency-to-usdc' },
      { tag: 'HƯỚNG DẪN', title: 'Giao dịch tài khoản nhỏ', desc: 'Bắt đầu với vốn tối thiểu', href: '/blog/small-account-trading-guide' },
      { tag: 'AN TOÀN', title: 'An toàn giao dịch P2P', desc: 'Hướng dẫn thực hành tốt nhất', href: '/blog/p2p-usdc-guide' }
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
