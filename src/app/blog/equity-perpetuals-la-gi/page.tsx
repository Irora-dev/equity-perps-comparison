'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

// Translation content
const content = {
  vi: {
    // Meta
    langCode: 'vi',
    langName: 'Tiếng Việt',
    altLang: 'English',

    // Breadcrumbs
    home: 'Trang chủ',
    learn: 'Học hỏi',
    current: 'Equity Perpetuals Là Gì',

    // Badge
    badge: 'Hướng Dẫn Cho Người Mới',

    // Hero
    heroTitle1: 'Equity Perpetuals',
    heroTitle2: 'Là Gì?',
    heroSubtitle: 'Hãy tưởng tượng bạn giao dịch',
    heroStocks: 'Tesla, Nvidia và Apple',
    heroTime: 'lúc 2 giờ sáng thứ Bảy',
    heroLeverage: 'với đòn bẩy 50x',
    heroSubtitleEnd: 'Không cần môi giới. Không cần phê duyệt. Chỉ có bạn và thị trường.',

    // Quick Stats
    stat1Title: 'Giờ Mỗi Ngày',
    stat1Sub: '7 ngày một tuần',
    stat2Title: 'Đòn Bẩy Tối Đa',
    stat2Sub: 'Hiệu quả vốn cao',
    stat3Title: 'Cổ Phiếu Có Sẵn',
    stat3Sub: 'Top cổ phiếu Mỹ',

    // CTA
    learnMore: 'Tìm Hiểu Thêm',
    startTrading: 'Bắt Đầu Giao Dịch',

    // Simple Explanation
    simpleTitle: 'Giải Thích',
    simpleTitleHighlight: 'Đơn Giản',
    simpleDesc: 'Equity perpetual là một hợp đồng theo dõi giá cổ phiếu. Chỉ vậy thôi.',
    thinkOfIt: 'Hãy nghĩ như thế này:',
    step1: 'Bạn nghĩ',
    step1Bold: 'NVDA sẽ tăng',
    step2: 'Bạn mở một',
    step2Bold: 'vị thế long',
    step2End: 'với $100',
    step3: 'Với đòn bẩy 10x, bạn kiểm soát',
    step3Bold: '$1,000 giá trị cổ phiếu',
    step4: 'NVDA tăng 5% = bạn lãi',
    step4Bold: '$50 (lợi nhuận 50%)',
    positionLabel: 'Vị Thế Của Bạn',
    longLabel: 'Long 10x',
    marginLabel: 'Ký Quỹ',
    positionSizeLabel: 'Kích Thước Vị Thế',
    unrealizedPnL: 'Lãi/Lỗ Chưa Thực Hiện',
    noExpiry: 'Không giống hợp đồng tương lai thông thường, perpetuals',
    noExpiryBold: 'không bao giờ hết hạn',
    noExpiryEnd: 'Giữ 5 phút hay 5 tháng đều được.',

    // Benefits
    benefitsTitle: 'Tại Sao Trader',
    benefitsTitleHighlight: 'Chuyển Sang',
    benefitsDesc: 'Equity perps giải quyết những khó khăn lớn nhất của giao dịch cổ phiếu truyền thống',

    benefit1Title: 'Giao Dịch 24/7',
    benefit1Desc: 'Thị trường không bao giờ đóng cửa. Giao dịch Tesla lúc nửa đêm, Apple vào Chủ nhật, Nvidia vào Giáng sinh. Phản ứng với tin tức ngay lập tức, không phải sáng hôm sau.',

    benefit2Title: 'Đòn Bẩy Lên Đến 200x',
    benefit2Desc: 'Kiểm soát $10,000 cổ phiếu với $50. Khuếch đại lợi nhuận (và thua lỗ). Hiệu quả vốn cao hơn nhiều so với tài khoản margin truyền thống.',

    benefit3Title: 'Bán Khống Dễ Dàng',
    benefit3Desc: 'Nghĩ cổ phiếu sẽ giảm? Bán khống ngay lập tức. Không cần mượn cổ phiếu, không phí khó mượn, không hạn chế. Chỉ cần nhấn bán.',

    benefit4Title: 'Không Yêu Cầu KYC',
    benefit4Desc: 'Không tải CMND. Không chờ phê duyệt. Không thu thập dữ liệu cá nhân. Kết nối ví và bắt đầu giao dịch trong vài phút.',

    benefit5Title: 'Tự Quản Lý Tài Sản',
    benefit5Desc: 'Tiền của bạn ở trong ví của bạn. Không có môi giới giữ tiền. Không đóng băng. Không giới hạn rút tiền. Bạn kiểm soát tài sản của mình.',

    benefit6Title: 'Thanh Toán Tức Thì',
    benefit6Desc: 'Không phải chờ T+2. Lợi nhuận có sẵn ngay lập tức. Đóng vị thế và rút về ví trong vài giây.',

    // How It Works
    howItWorksTitle: 'Cách Hoạt Động',
    howItWorksTitleHighlight: 'Thực Sự',
    howItWorksDesc: 'Cơ chế đằng sau equity perpetuals giải thích đơn giản',

    oracle1: 'Oracle Cung Cấp Giá',
    oracle1Desc: 'Equity perps theo dõi giá cổ phiếu thực bằng',
    oracle1Bold: 'oracles',
    oracle1Desc2: '— các dịch vụ lấy dữ liệu giá trực tiếp từ sàn chứng khoán và đưa lên blockchain. Các nhà cung cấp như Pyth tổng hợp giá từ nhiều nguồn để đảm bảo độ chính xác.',
    oracle1Update: 'Cập nhật mỗi giây trong giờ giao dịch',

    funding2: 'Funding Rate Giữ Giá Cân Bằng',
    funding2Desc: 'Mỗi 1-8 giờ, trader trả hoặc nhận',
    funding2Bold: 'funding',
    funding2Desc2: 'dựa trên việc giá perp cao hơn hay thấp hơn giá oracle. Nếu perps giao dịch cao hơn spot, longs trả shorts (đẩy giá xuống). Điều này giữ giá perp theo sát giá cổ phiếu thực.',
    fundingPerp: 'Perp > Spot',
    fundingPerpDesc: 'Longs trả shorts',
    fundingSpot: 'Perp < Spot',
    fundingSpotDesc: 'Shorts trả longs',

    leverage3: 'Đòn Bẩy & Thanh Lý',
    leverage3Desc: '',
    leverage3Bold1: 'Ký quỹ',
    leverage3Desc2: 'của bạn là tài sản thế chấp cho vị thế. Với đòn bẩy 10x, biến động ngược 10% sẽ xóa sạch ký quỹ. Trước khi điều đó xảy ra, bạn bị',
    leverage3Bold2: 'thanh lý',
    leverage3Desc3: '— vị thế tự động đóng để ngăn thua lỗ thêm.',
    leverageTip: 'Mẹo:',
    leverageTipDesc: 'Bắt đầu với đòn bẩy 2-5x. Nhiều người mới dùng 20x+ và bị thanh lý trong biến động bình thường. Đòn bẩy thấp = nhiều không gian hơn để sai.',

    // Getting Started
    gettingStartedBadge: 'Dưới 10 Phút',
    gettingStartedTitle: 'Thiết Lập Trong',
    gettingStartedTitleHighlight: '3 Bước Đơn Giản',
    gettingStartedDesc: 'Không cần đơn đăng ký. Không chờ phê duyệt. Không số dư tối thiểu.',

    step1Title: 'Thiết Lập Ví Điện Tử',
    step1Desc: 'Miễn phí, mất 2 phút, và chỉ làm một lần',
    showDetails: 'Xem Chi Tiết',
    hideDetails: 'Ẩn Chi Tiết',

    walletWhat: 'Ví điện tử là gì?',
    walletWhatDesc: 'Hãy nghĩ như một',
    walletWhatBold: 'tài khoản ngân hàng số',
    walletWhatDesc2: 'mà bạn hoàn toàn kiểm soát. Thay vì ngân hàng giữ tiền, bạn tự giữ bằng một tiện ích mở rộng trình duyệt đơn giản.',
    walletFeature1: 'Bạn kiểm soát',
    walletFeature2: 'Hoàn toàn miễn phí',
    walletFeature3: 'Cài đặt 2 phút',
    walletFeature4: 'Hoạt động toàn cầu',

    walletSetupTitle: 'Cách thiết lập:',
    walletStep1: 'Vào',
    walletStep1Link: 'rabby.io',
    walletStep1End: '(ví chúng tôi khuyên dùng)',
    walletStep2: 'Nhấn "Download" và thêm vào trình duyệt (Chrome, Firefox, v.v.)',
    walletStep3: 'Nhấn "Create New Wallet" và đặt mật khẩu',
    walletStep4: 'Ghi lại 12 từ khôi phục',
    walletStep4Warn: 'Đây như mật khẩu chính — giữ an toàn và không bao giờ chia sẻ!',

    walletVideoTitle: 'Xem: Hướng Dẫn Cài Đặt 2 Phút',
    walletVideoDesc: 'Video này hướng dẫn từng bước. Làm theo và ví của bạn sẽ sẵn sàng ngay.',
    walletDownload: 'Tải Rabby',

    step2Title: 'Nạp USDC',
    step2Desc: 'Chuyển từ Coinbase, Kraken, hoặc Binance — hoặc dùng thẻ',

    fromCoinbase: 'Từ Coinbase',
    coinbaseStep1: '1. Vào Send/Receive',
    coinbaseStep2: '2. Chọn USDC',
    coinbaseStep3: '3. Dán địa chỉ Rabby',
    coinbaseStep4: '4. Chọn mạng',
    coinbaseStep4Bold: 'Arbitrum',
    coinbaseStep5: '5. Xác nhận gửi',
    coinbaseFee: 'Phí: ~$0.10 trên Arbitrum',

    fromKraken: 'Từ Kraken',
    krakenStep1: '1. Vào Funding → Withdraw',
    krakenStep2: '2. Tìm USDC',
    krakenStep3: '3. Thêm địa chỉ Rabby',
    krakenStep4: '4. Chọn',
    krakenStep4Bold: 'Arbitrum One',
    krakenStep5: '5. Xác nhận với 2FA',
    krakenFee: 'Phí: ~$1-3',

    fromBinance: 'Từ Binance',
    binanceStep1: '1. Wallet → Withdraw',
    binanceStep2: '2. Chọn USDC',
    binanceStep3: '3. Dán địa chỉ Rabby',
    binanceStep4: '4. Mạng:',
    binanceStep4Bold: 'Arbitrum',
    binanceStep5: '5. Hoàn thành xác minh',
    binanceFee: 'Phí: ~$0.50',

    fundingTip: 'Mẹo:',
    fundingTipDesc: 'Luôn dùng mạng Arbitrum để phí thấp nhất. Bắt đầu với $50-100 để thử. Tiền về trong 1-5 phút.',

    step3Title: 'Chọn Nền Tảng & Bắt Đầu Giao Dịch',
    step3Desc: 'Chọn sàn equity perps — chúng tôi khuyên',
    step3DescHighlight: 'Hyperliquid',
    step3DescEnd: 'cho người mới',

    platformStep1: 'Vào',
    platformStep2: 'Nhấn "Connect" và chọn Rabby Wallet',
    platformStep3: 'Nạp USDC vào nền tảng',
    platformStep4: 'Tìm cổ phiếu (ví dụ: NVDA-PERP)',
    platformStep5: 'Chọn Long hoặc Short, đặt đòn bẩy, và giao dịch!',

    openPlatform: 'Mở Hyperliquid',
    platformPopular: 'Nền tảng phổ biến nhất',

    fullGuide: 'Đọc hướng dẫn thiết lập ví đầy đủ',

    // Risks
    risksTitle: 'Hiểu Rủi Ro',
    risk1: 'Đòn bẩy khuếch đại thua lỗ',
    risk1Desc: '— Cùng 10x biến 5% thành 50% lãi cũng biến 5% lỗ thành 50% lỗ',
    risk2: 'Thanh lý là thật',
    risk2Desc: '— Vị thế có thể tự động đóng nếu đi ngược đủ nhiều',
    risk3: 'Funding rate tốn tiền',
    risk3Desc: '— Giữ vị thế tốn tiền mỗi vài giờ, đặc biệt với giao dịch phổ biến',
    risk4: 'Không sở hữu',
    risk4Desc: '— Bạn giao dịch biến động giá, không phải cổ phiếu thực. Không cổ tức, không quyền biểu quyết',

    // Final CTA
    ctaTitle: 'Sẵn Sàng Thử?',
    ctaDesc: 'Bắt đầu với $50 và đòn bẩy thấp. Xem giao dịch cổ phiếu 24/7 như thế nào.',
    ctaButton: 'Bắt Đầu Trên Hyperliquid',
    ctaSecondary: 'So Sánh Các Nền Tảng',
    ctaTertiary: 'Xem Hướng Dẫn Cho Việt Nam',

    // FAQ
    faq1Q: 'Sự khác biệt giữa equity perps và giao dịch cổ phiếu thông thường là gì?',
    faq1A: 'Equity perps cho phép bạn giao dịch với đòn bẩy (lên đến 200x), 24/7, mà không sở hữu cổ phiếu thực. Cổ phiếu thông thường cần toàn bộ vốn, chỉ giao dịch trong giờ thị trường, và cho bạn quyền sở hữu như cổ tức và biểu quyết.',

    faq2Q: 'Tôi cần bao nhiêu tiền để bắt đầu giao dịch equity perps?',
    faq2A: 'Bạn có thể bắt đầu với $10-50 trên hầu hết các nền tảng. Tuy nhiên, chúng tôi khuyên bắt đầu với ít nhất $100-500 để có ký quỹ đủ và tránh thanh lý ngay lập tức khi giá biến động nhỏ.',

    faq3Q: 'Equity perps có hợp pháp không?',
    faq3A: 'Equity perps tồn tại trong vùng xám pháp lý. Hầu hết các nền tảng là phi tập trung và không yêu cầu KYC. Tính hợp pháp khác nhau theo quốc gia. Người dùng Việt Nam nên tự tìm hiểu quy định địa phương.',

    faq4Q: 'Điều gì xảy ra nếu vị thế của tôi bị thanh lý?',
    faq4A: 'Khi vị thế bị thanh lý, ký quỹ của bạn được dùng để đóng vị thế và bù lỗ. Bạn mất ký quỹ đã nạp nhưng không nợ thêm tiền. Một số nền tảng có quỹ bảo hiểm để ngăn lỗ xã hội hóa.',

    faq5Q: 'Tôi có thể giao dịch equity perps vào cuối tuần không?',
    faq5A: 'Có, hầu hết các nền tảng như Hyperliquid và Lighter cho phép giao dịch 24/7. Tuy nhiên, giá có thể ít biến động hơn vào cuối tuần vì thị trường chứng khoán truyền thống đóng cửa và oracle dùng giá đóng cửa cuối cùng.',

    faq6Q: 'Funding rate là gì và tại sao quan trọng?',
    faq6A: 'Funding rate là các khoản thanh toán định kỳ giữa trader long và short để giữ giá perp khớp với giá spot. Nếu bạn giữ vị thế, bạn sẽ trả hoặc nhận funding mỗi 1-8 giờ tùy nền tảng.',

    // Back
    backLink: 'So sánh nền tảng',
  },
  en: {
    // Meta
    langCode: 'en',
    langName: 'English',
    altLang: 'Tiếng Việt',

    // Breadcrumbs
    home: 'Home',
    learn: 'Learn',
    current: 'What Are Equity Perpetuals',

    // Badge
    badge: 'Beginner Guide',

    // Hero
    heroTitle1: 'What Are',
    heroTitle2: 'Equity Perpetuals?',
    heroSubtitle: 'Imagine trading',
    heroStocks: 'Tesla, Nvidia, and Apple',
    heroTime: 'at 2am on a Saturday',
    heroLeverage: 'with 50x leverage',
    heroSubtitleEnd: 'No broker. No approval. Just you and the markets.',

    // Quick Stats
    stat1Title: 'Hours a Day',
    stat1Sub: '7 days a week',
    stat2Title: 'Max Leverage',
    stat2Sub: 'Capital efficient',
    stat3Title: 'Stocks Available',
    stat3Sub: 'Top US equities',

    // CTA
    learnMore: 'Learn More',
    startTrading: 'Start Trading Now',

    // Simple Explanation
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
    positionLabel: 'Your Position',
    longLabel: 'Long 10x',
    marginLabel: 'Margin',
    positionSizeLabel: 'Position Size',
    unrealizedPnL: 'Unrealized P&L',
    noExpiry: 'Unlike regular futures, perpetuals',
    noExpiryBold: 'never expire',
    noExpiryEnd: 'Hold for 5 minutes or 5 months.',

    // Benefits
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

    // How It Works
    howItWorksTitle: 'How It',
    howItWorksTitleHighlight: 'Actually',
    howItWorksDesc: 'The mechanics behind equity perpetuals in plain English',

    oracle1: 'Oracle Price Feeds',
    oracle1Desc: 'Equity perps track real stock prices using',
    oracle1Bold: 'oracles',
    oracle1Desc2: '— services that pull live price data from stock exchanges and deliver it on-chain. Providers like Pyth aggregate prices from multiple sources to ensure accuracy.',
    oracle1Update: 'Updated every second during market hours',

    funding2: 'Funding Rates Keep Prices Aligned',
    funding2Desc: 'Every 1-8 hours, traders pay or receive',
    funding2Bold: 'funding',
    funding2Desc2: 'based on whether the perp price is above or below the oracle price. If perps trade above spot, longs pay shorts (pushing price down). This keeps perp prices closely tracking real stock prices.',
    fundingPerp: 'Perp > Spot',
    fundingPerpDesc: 'Longs pay shorts',
    fundingSpot: 'Perp < Spot',
    fundingSpotDesc: 'Shorts pay longs',

    leverage3: 'Leverage & Liquidation',
    leverage3Desc: 'Your',
    leverage3Bold1: 'margin',
    leverage3Desc2: 'is the collateral backing your position. With 10x leverage, a 10% adverse move would wipe out your margin. Before that happens, you get',
    leverage3Bold2: 'liquidated',
    leverage3Desc3: '— your position is automatically closed to prevent further losses.',
    leverageTip: 'Pro tip:',
    leverageTipDesc: 'Start with 2-5x leverage. Many beginners use 20x+ and get liquidated on normal volatility. Lower leverage = more room to be wrong.',

    // Getting Started
    gettingStartedBadge: 'Less Than 10 Minutes',
    gettingStartedTitle: 'Get Set Up in',
    gettingStartedTitleHighlight: '3 Simple Steps',
    gettingStartedDesc: 'No application forms. No approval wait. No minimum balance.',

    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    showDetails: 'Show Details',
    hideDetails: 'Hide Details',

    walletWhat: 'What is a digital wallet?',
    walletWhatDesc: 'Think of it like a',
    walletWhatBold: 'digital bank account',
    walletWhatDesc2: 'that you fully control. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
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
    walletStep4Warn: 'This is like a master password — keep it safe and never share it!',

    walletVideoTitle: 'Watch: 2-Minute Setup Guide',
    walletVideoDesc: 'This video walks you through every step. Follow along and you\'ll have your wallet ready in no time.',
    walletDownload: 'Download Rabby',

    step2Title: 'Fund with USDC',
    step2Desc: 'Transfer from Coinbase, Kraken, or Binance — or use card',

    fromCoinbase: 'From Coinbase',
    coinbaseStep1: '1. Go to Send/Receive',
    coinbaseStep2: '2. Select USDC',
    coinbaseStep3: '3. Paste your Rabby address',
    coinbaseStep4: '4. Choose',
    coinbaseStep4Bold: 'Arbitrum',
    coinbaseStep5: '5. Confirm send',
    coinbaseFee: 'Fee: ~$0.10 on Arbitrum',

    fromKraken: 'From Kraken',
    krakenStep1: '1. Go to Funding → Withdraw',
    krakenStep2: '2. Search USDC',
    krakenStep3: '3. Add your Rabby address',
    krakenStep4: '4. Select',
    krakenStep4Bold: 'Arbitrum One',
    krakenStep5: '5. Confirm with 2FA',
    krakenFee: 'Fee: ~$1-3',

    fromBinance: 'From Binance',
    binanceStep1: '1. Wallet → Withdraw',
    binanceStep2: '2. Select USDC',
    binanceStep3: '3. Paste your Rabby address',
    binanceStep4: '4. Network:',
    binanceStep4Bold: 'Arbitrum',
    binanceStep5: '5. Complete verification',
    binanceFee: 'Fee: ~$0.50',

    fundingTip: 'Pro tip:',
    fundingTipDesc: 'Always use Arbitrum network for lowest fees. Start with $50-100 to test. Funds arrive in 1-5 minutes.',

    step3Title: 'Choose a Platform & Start Trading',
    step3Desc: 'Pick an equity perps venue — we recommend',
    step3DescHighlight: 'Hyperliquid',
    step3DescEnd: 'for beginners',

    platformStep1: 'Go to',
    platformStep2: 'Click "Connect" and select Rabby Wallet',
    platformStep3: 'Deposit your USDC to the platform',
    platformStep4: 'Search for a stock (e.g., NVDA-PERP)',
    platformStep5: 'Choose Long or Short, set leverage, and trade!',

    openPlatform: 'Open Hyperliquid',
    platformPopular: 'Most popular platform',

    fullGuide: 'Read the complete wallet setup guide',

    // Risks
    risksTitle: 'Understand the Risks',
    risk1: 'Leverage amplifies losses',
    risk1Desc: '— The same 10x that turns 5% into 50% gains also turns 5% losses into 50% losses',
    risk2: 'Liquidation is real',
    risk2Desc: '— Your position can be closed automatically if it moves against you enough',
    risk3: 'Funding rates cost money',
    risk3Desc: '— Holding positions costs money every few hours, especially on popular trades',
    risk4: 'No ownership',
    risk4Desc: '— You\'re trading price exposure, not actual shares. No dividends, no voting rights',

    // Final CTA
    ctaTitle: 'Ready to Try It?',
    ctaDesc: 'Start with $50 and low leverage. See what 24/7 stock trading feels like.',
    ctaButton: 'Start on Hyperliquid',
    ctaSecondary: 'Compare All Platforms',
    ctaTertiary: 'View Vietnam Guide',

    // FAQ
    faq1Q: 'What is the difference between equity perps and regular stock trading?',
    faq1A: 'Equity perps let you trade with leverage (up to 200x), 24/7, without owning actual shares. Regular stocks require full capital, trade only during market hours, and give you ownership rights like dividends and voting.',

    faq2Q: 'How much money do I need to start trading equity perps?',
    faq2A: 'You can start with as little as $10-50 on most platforms. However, we recommend starting with at least $100-500 to have adequate margin and avoid immediate liquidation on small price moves.',

    faq3Q: 'Are equity perps legal?',
    faq3A: 'Equity perps exist in a regulatory gray area. Most platforms are decentralized and don\'t require KYC. Legality varies by jurisdiction. Vietnamese users should research local regulations.',

    faq4Q: 'What happens if my position gets liquidated?',
    faq4A: 'When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won\'t owe additional money. Some platforms have insurance funds to prevent socialized losses.',

    faq5Q: 'Can I trade equity perps on weekends?',
    faq5A: 'Yes, most platforms like Hyperliquid and Lighter offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price.',

    faq6Q: 'What are funding rates and why do they matter?',
    faq6A: 'Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. If you hold a position, you either pay or receive funding every 1-8 hours depending on the platform.',

    // Back
    backLink: 'Compare platforms',
  }
};

export default function EquityPerpetualsLaGi() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const t = content[lang];
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": lang === 'vi' ? "Equity Perpetuals Là Gì? Hướng Dẫn Đầy Đủ Cho Người Mới" : "What Are Equity Perpetuals? Complete Beginner Guide",
    "description": lang === 'vi'
      ? "Tìm hiểu equity perpetuals là gì, cách hoạt động, và tại sao trader sử dụng chúng. Hướng dẫn tiếng Việt đầy đủ."
      : "Learn what equity perpetuals are, how they work, and why traders use them. Complete guide in Vietnamese.",
    "author": { "@type": "Organization", "name": "Compare Equity Perps" },
    "inLanguage": lang === 'vi' ? "vi-VN" : "en-US",
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://compareequityperps.com/blog/equity-perpetuals-la-gi"
    }
  };

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen">
        {/* HERO SECTION - Vietnam Colors */}
        <section className="relative overflow-hidden">
          {/* Animated Background - Red/Yellow Vietnam theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            {/* Language Toggle */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {t.altLang}
              </button>
            </div>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">{t.home}</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">{t.learn}</Link>
              <span className="mx-2">/</span>
              <span className="text-yellow-400">{t.current}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Badge - Vietnam Red */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <span className="text-red-400 text-sm font-medium">{t.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                {t.heroTitle1}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400">
                  {t.heroTitle2}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t.heroSubtitle} <span className="text-white font-semibold">{t.heroStocks}</span>{' '}
                <span className="text-yellow-400 font-semibold">{t.heroTime}</span>{' '}
                <span className="text-red-400 font-semibold">{t.heroLeverage}</span>. {t.heroSubtitleEnd}
              </p>

              {/* Quick Stats - Vietnam themed */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-yellow-400">24</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat1Title}</div>
                    <div className="text-gray-500 text-sm">{t.stat1Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-red-400">200x</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat2Title}</div>
                    <div className="text-gray-500 text-sm">{t.stat2Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-yellow-400">50+</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat3Title}</div>
                    <div className="text-gray-500 text-sm">{t.stat3Sub}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Vietnam themed */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#simple-explanation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-yellow-400 hover:to-red-400 transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105"
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
                {t.simpleTitle} <span className="text-yellow-400">{t.simpleTitleHighlight}</span> {lang === 'vi' ? '' : 'Explanation'}
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
                      <span className="text-yellow-400 text-xl">1.</span>
                      <span>{t.step1} <strong className="text-white">{t.step1Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-400 text-xl">2.</span>
                      <span>{t.step2} <strong className="text-white">{t.step2Bold}</strong> {t.step2End}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-400 text-xl">3.</span>
                      <span>{t.step3} <strong className="text-white">{t.step3Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-400 text-xl">4.</span>
                      <span>{t.step4} <strong className="text-green-400">{t.step4Bold}</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">{t.positionLabel}</div>
                    <div className="text-4xl font-black text-white mb-1">NVDA-PERP</div>
                    <div className="text-green-400 text-xl font-bold">{t.longLabel}</div>
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
                        <span className="text-gray-500">{t.unrealizedPnL}</span>
                        <span className="text-green-400">+$50.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-8">
              {t.noExpiry} <strong className="text-white">{t.noExpiryBold}</strong>. {t.noExpiryEnd}
            </p>
          </div>
        </section>

        {/* BENEFITS SECTION - Vietnam themed */}
        <section id="benefits" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.benefitsTitle} <span className="text-red-400">{t.benefitsTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t.benefitsDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit 1 - 24/7 */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit1Title}</h3>
                <p className="text-gray-400">{t.benefit1Desc}</p>
              </div>

              {/* Benefit 2 - Leverage */}
              <div className="group bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit2Title}</h3>
                <p className="text-gray-400">{t.benefit2Desc}</p>
              </div>

              {/* Benefit 3 - Short Selling */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit3Title}</h3>
                <p className="text-gray-400">{t.benefit3Desc}</p>
              </div>

              {/* Benefit 4 - No KYC */}
              <div className="group bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit4Title}</h3>
                <p className="text-gray-400">{t.benefit4Desc}</p>
              </div>

              {/* Benefit 5 - Self Custody */}
              <div className="group bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit5Title}</h3>
                <p className="text-gray-400">{t.benefit5Desc}</p>
              </div>

              {/* Benefit 6 - Instant Settlement */}
              <div className="group bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                {t.howItWorksTitle} <span className="text-yellow-400">{t.howItWorksTitleHighlight}</span> {lang === 'vi' ? '' : 'Works'}
              </h2>
              <p className="text-gray-400 text-lg">
                {t.howItWorksDesc}
              </p>
            </div>

            <div className="space-y-8">
              {/* Oracle Pricing */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.oracle1}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.oracle1Desc} <strong className="text-white">{t.oracle1Bold}</strong>{t.oracle1Desc2}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t.oracle1Update}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding Rates */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.funding2}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.funding2Desc} <strong className="text-white">{t.funding2Bold}</strong> {t.funding2Desc2}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-semibold">{t.fundingPerp}</div>
                        <div className="text-gray-500 text-sm">{t.fundingPerpDesc}</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-red-400 font-semibold">{t.fundingSpot}</div>
                        <div className="text-gray-500 text-sm">{t.fundingSpotDesc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leverage & Liquidation */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.leverage3}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.leverage3Desc}<strong className="text-white">{t.leverage3Bold1}</strong> {t.leverage3Desc2} <strong className="text-white">{t.leverage3Bold2}</strong>{t.leverage3Desc3}
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <p className="text-yellow-400 text-sm">
                        <strong>{t.leverageTip}</strong> {t.leverageTipDesc}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-400 font-medium">{t.gettingStartedBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.gettingStartedTitle} <span className="text-yellow-400">{t.gettingStartedTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg">
                {t.gettingStartedDesc}
              </p>
            </div>

            {/* Step 1 - Wallet Setup (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-yellow-500/50 transition-colors"
                onClick={() => setWalletExpanded(!walletExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                    <p className="text-gray-400">{t.step1Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400 text-sm font-medium hidden sm:block">
                      {walletExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-yellow-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
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
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
                      <h4 className="text-yellow-400 font-semibold mb-2">{t.walletWhat}</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {t.walletWhatDesc} <strong className="text-white">{t.walletWhatBold}</strong> {t.walletWhatDesc2}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#128274;</div>
                          <span className="text-gray-400">{t.walletFeature1}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#127775;</div>
                          <span className="text-gray-400">{t.walletFeature2}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#9889;</div>
                          <span className="text-gray-400">{t.walletFeature3}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">&#127760;</div>
                          <span className="text-gray-400">{t.walletFeature4}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-4">{t.walletSetupTitle}</h4>
                        <ol className="space-y-3 text-gray-300">
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">1</span>
                            <span>{t.walletStep1} <a href="https://rabby.io" target="_blank" rel="noopener" className="text-yellow-400 hover:text-yellow-300 underline">{t.walletStep1Link}</a> {t.walletStep1End}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">2</span>
                            <span>{t.walletStep2}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">3</span>
                            <span>{t.walletStep3}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">4</span>
                            <div>
                              <strong className="text-white">{t.walletStep4}</strong>
                              <p className="text-gray-500 text-xs mt-1">{t.walletStep4Warn}</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-5">
                        <h4 className="text-white font-semibold mb-3">{t.walletVideoTitle}</h4>
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
                          {t.walletVideoDesc}
                        </p>
                        <a
                          href="https://rabby.io"
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition-colors"
                        >
                          {t.walletDownload}
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
                className="bg-gray-900 border-2 border-red-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-red-500/50 transition-colors"
                onClick={() => setFundingExpanded(!fundingExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step2Title}</h3>
                    <p className="text-gray-400">{t.step2Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400 text-sm font-medium hidden sm:block">
                      {fundingExpanded ? t.hideDetails : t.showDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-red-400 transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
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
                          <li>{t.coinbaseStep1}</li>
                          <li>{t.coinbaseStep2}</li>
                          <li>{t.coinbaseStep3}</li>
                          <li>{t.coinbaseStep4} <strong className="text-white">{t.coinbaseStep4Bold}</strong></li>
                          <li>{t.coinbaseStep5}</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.coinbaseFee}</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                        <h4 className="text-purple-400 font-semibold mb-2">{t.fromKraken}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          <li>{t.krakenStep1}</li>
                          <li>{t.krakenStep2}</li>
                          <li>{t.krakenStep3}</li>
                          <li>{t.krakenStep4} <strong className="text-white">{t.krakenStep4Bold}</strong></li>
                          <li>{t.krakenStep5}</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.krakenFee}</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <h4 className="text-yellow-400 font-semibold mb-2">{t.fromBinance}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          <li>{t.binanceStep1}</li>
                          <li>{t.binanceStep2}</li>
                          <li>{t.binanceStep3}</li>
                          <li>{t.binanceStep4} <strong className="text-white">{t.binanceStep4Bold}</strong></li>
                          <li>{t.binanceStep5}</li>
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.binanceFee}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl">
                      <p className="text-gray-400 text-sm">
                        <strong className="text-white">{t.fundingTip}</strong> {t.fundingTipDesc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 - Choose Platform & Trade */}
            <div className="mb-8">
              <div className="bg-gray-900 border-2 border-yellow-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t.step3Title}</h3>
                    <p className="text-gray-400">{t.step3Desc} <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-yellow-400 hover:text-yellow-300">{t.step3DescHighlight}</a> {t.step3DescEnd}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5">
                    <ol className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">1</span>
                        <span>{t.platformStep1} <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-yellow-400 hover:text-yellow-300">app.hyperliquid.xyz</a></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">2</span>
                        <span>{t.platformStep2}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">3</span>
                        <span>{t.platformStep3}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">4</span>
                        <span>{t.platformStep4}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-sm font-bold flex-shrink-0">5</span>
                        <span>{t.platformStep5}</span>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={hyperliquid?.referralUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-yellow-500/20 to-red-500/10 border-2 border-yellow-500/50 rounded-2xl hover:border-yellow-500 transition-all group"
                    >
                      <div className="text-5xl">&#128640;</div>
                      <span className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{t.openPlatform}</span>
                      <span className="text-gray-400 text-sm">{t.platformPopular}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Guide Link */}
            <div className="text-center">
              <Link
                href="/blog/wallet-setup-guide"
                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium"
              >
                {t.fullGuide}
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
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-red-400 mb-4">&#9888;&#65039; {t.risksTitle}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk1}</strong>{t.risk1Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk2}</strong>{t.risk2Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk3}</strong>{t.risk3Desc}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">&#8226;</span>
                  <span><strong className="text-white">{t.risk4}</strong>{t.risk4Desc}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA - Vietnam themed */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500/20 via-red-500/20 to-yellow-500/20 border border-yellow-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />

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
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-500 to-red-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-yellow-400 hover:to-red-400 transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105"
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
                    {t.ctaSecondary}
                  </Link>
                </div>

                <div className="mt-6">
                  <Link
                    href="/vietnam"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium"
                  >
                    {t.ctaTertiary}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Custom implementation with Vietnam styling */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {lang === 'vi' ? 'Câu Hỏi Thường Gặp' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="text-white font-medium pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-yellow-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-400">{faq.a}</p>
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
