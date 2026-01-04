'use client';

import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const translations = {
  vi: {
    // Meta & SEO
    pageTitle: 'Cach Doi VND Sang USDC',
    metaDescription: 'Huong dan chi tiet cach doi VND sang USDC de giao dich co phieu My. So sanh Binance P2P, Remitano, VNDC voi MoMo, ZaloPay, chuyen khoan ngan hang.',

    // Breadcrumb
    home: 'Trang chu',
    blog: 'Blog',
    currentPage: 'Cach Doi VND Sang USDC',

    // Hero
    badge: 'Huong Dan Viet Nam',
    fundingBadge: 'Nap Tien',
    heroTitle: 'Cach Doi VND Sang USDC',
    heroSubtitle: 'Huong dan day du de doi Dong Viet Nam sang USDC cho giao dich co phieu My. So sanh cac phuong thuc, phi va huong dan tung buoc.',
    lastUpdated: 'Cap nhat: Thang 1, 2025',

    // Table Section
    compareTitle: 'So Sanh Cac Phuong Thuc',
    tableHeaders: {
      method: 'Phuong thuc',
      fees: 'Phi',
      speed: 'Toc do',
      minAmount: 'Toi thieu',
      bestFor: 'Phu hop nhat'
    },
    recommendation: 'Khuyen nghi:',
    recommendationText: 'Su dung Binance P2P de co ty gia tot nhat. Mua USDT truoc (nhieu nguoi ban hon), sau do doi sang USDC mien phi tren Binance.',

    // Methods
    methods: [
      {
        id: 'binance',
        name: 'Binance P2P',
        rating: 'Ty gia tot nhat',
        fees: '~0.1-0.5%',
        speed: '5-15 phut',
        minAmount: '500,000d',
        bestFor: 'Ty gia tot nhat, giao dich thuong xuyen',
        color: 'yellow',
        pros: ['Ty gia VND tot nhat', 'Thanh khoan cao', 'Nhieu phuong thuc thanh toan', 'Doi USDT→USDC mien phi'],
        cons: ['Can tai khoan Binance da KYC', 'P2P co the kho hieu luc dau'],
      },
      {
        id: 'remitano',
        name: 'Remitano',
        rating: 'De nhat',
        fees: '~1-2%',
        speed: '10-30 phut',
        minAmount: '200,000d',
        bestFor: 'Nguoi moi bat dau, so tien nho',
        color: 'blue',
        pros: ['Giao dien tieng Viet', 'Ho tro khach hang dia phuong', 'De su dung', 'Nhieu phuong thuc thanh toan'],
        cons: ['Phi cao hon P2P', 'Can rut USDC sau do'],
      },
      {
        id: 'vndc',
        name: 'VNDC',
        rating: 'Stablecoin Viet Nam',
        fees: '~0.5-1%',
        speed: '5-20 phut',
        minAmount: '100,000d',
        bestFor: 'Stablecoin ban dia',
        color: 'red',
        pros: ['Stablecoin Viet Nam', 'Doi VND truc tiep', 'Tich hop vi dia phuong'],
        cons: ['Can doi VNDC→USDC', 'Thanh khoan thap hon'],
      },
    ],

    // Step by step
    stepByStepTitle: 'Huong Dan Tung Buoc',

    // Binance P2P Steps
    binanceTitle: 'Phuong Thuc Binance P2P (Ty Gia Tot Nhat)',
    binanceSteps: [
      {
        title: 'Tao tai khoan Binance',
        desc: 'Truy cap binance.com va dang ky. Hoan thanh xac minh KYC (CMND/CCCD).',
        note: 'KYC thuong mat 10-30 phut de xac minh'
      },
      {
        title: 'Vao Giao Dich P2P',
        desc: 'Mo ung dung Binance → Nhan "P2P" hoac vao "Trade" → "P2P"',
        note: 'P2P co nghia la ban dang mua truc tiep tu nguoi dung khac'
      },
      {
        title: 'Mua USDT bang VND',
        items: [
          'Chon Mua → USDT',
          'Chon phuong thuc thanh toan: MoMo (nhanh nhat), ZaloPay hoac Chuyen khoan ngan hang',
          'Nhap so tien bang VND',
          'Chon nguoi ban co ty le hoan thanh cao (98%+) va nhieu don hang',
          'Nhan "Mua" va lam theo huong dan thanh toan'
        ],
        tip: 'Tai sao USDT truoc?',
        tipText: 'Nhieu nguoi ban hon = ty gia tot hon. Ban se doi sang USDC o buoc tiep theo (mien phi).'
      },
      {
        title: 'Doi USDT sang USDC (Mien phi)',
        items: [
          'Vao "Trade" → "Convert"',
          'Tu: USDT → Den: USDC',
          'Nhap so luong va nhan "Preview Conversion"',
          'Xac nhan - day la mien phi va tuc thoi!'
        ]
      },
      {
        title: 'Rut USDC ve Vi cua ban',
        items: [
          'Vao "Wallet" → "Withdraw"',
          'Chon USDC',
          'Dan dia chi vi Rabby cua ban',
          'Chon mang: Arbitrum One (phi thap nhat ~$0.10)',
          'Xac nhan voi 2FA'
        ],
        tip: 'Quan trong:',
        tipText: 'Luon su dung mang Arbitrum de phi thap nhat. Tien ve trong 1-5 phut.'
      }
    ],

    // Remitano Steps
    remitanoTitle: 'Phuong Thuc Remitano (De Nhat)',
    remitanoSteps: [
      {
        title: 'Tao tai khoan Remitano',
        desc: 'Tai ung dung Remitano hoac truy cap remitano.com. Hoan thanh KYC voi CMND/CCCD.'
      },
      {
        title: 'Nap VND qua MoMo/ZaloPay/Ngan hang',
        items: [
          'Vao "Mua ban" → "Mua"',
          'Chon USDT hoac USDC',
          'Chon phuong thuc thanh toan (MoMo, ZaloPay, Vietcombank, Techcombank, VPBank)',
          'Nhap so tien va thanh toan'
        ],
        note: 'Ho tro tieng Viet, ho tro khach hang dia phuong'
      },
      {
        title: 'Rut USDC ve Vi',
        items: [
          'Vao "Vi" → "Rut"',
          'Chon USDC',
          'Nhap dia chi vi Rabby cua ban',
          'Chon mang Arbitrum neu co (hoac Ethereum)',
          'Xac nhan rut tien'
        ]
      }
    ],
    remitanoNote: 'Tai sao chon Remitano?',
    remitanoNoteText: 'Giao dien tieng Viet hoan toan, ho tro khach hang 24/7 bang tieng Viet. Tot cho nguoi moi bat dau.',

    // VNDC Steps
    vndcTitle: 'Phuong Thuc VNDC (Stablecoin Viet Nam)',
    vndcSteps: [
      {
        title: 'Tao tai khoan VNDC',
        desc: 'Tai ung dung VNDC hoac truy cap vndc.io. Hoan thanh xac minh KYC.'
      },
      {
        title: 'Nap VND va mua VNDC',
        items: [
          'Nap VND qua chuyen khoan ngan hang',
          'Mua VNDC (1 VNDC = 1 VND)',
          'VNDC la stablecoin Viet Nam'
        ]
      },
      {
        title: 'Doi VNDC sang USDC',
        items: [
          'Su dung tinh nang swap tren VNDC',
          'Hoac chuyen VNDC sang san giao dich ho tro (Binance, OKX)',
          'Doi VNDC → USDT → USDC'
        ],
        note: 'Mat them buoc doi nhung la stablecoin ban dia'
      },
      {
        title: 'Rut USDC ve Vi',
        items: [
          'Rut USDC ve vi Rabby cua ban',
          'Su dung mang Arbitrum de phi thap'
        ]
      }
    ],
    vndcNote: 'Luu y:',
    vndcNoteText: 'VNDC la stablecoin Viet Nam nen de hieu ve mat gia tri. Tuy nhien can them buoc doi sang USDC.',

    // Payment Methods Section
    paymentMethodsTitle: 'Phuong Thuc Thanh Toan Duoc Ho Tro',
    paymentMethods: [
      {
        name: 'MoMo',
        icon: 'M',
        color: 'pink',
        desc: 'Vi dien tu pho bien nhat VN',
        speed: 'Tuc thoi',
        availability: 'Binance P2P, Remitano'
      },
      {
        name: 'ZaloPay',
        icon: 'Z',
        color: 'blue',
        desc: 'Vi dien tu tich hop Zalo',
        speed: 'Tuc thoi',
        availability: 'Binance P2P, Remitano'
      },
      {
        name: 'Vietcombank',
        icon: 'V',
        color: 'green',
        desc: 'Ngan hang lon nhat VN',
        speed: '5-15 phut',
        availability: 'Tat ca nen tang'
      },
      {
        name: 'Techcombank',
        icon: 'T',
        color: 'red',
        desc: 'Ngan hang so hang dau',
        speed: '5-15 phut',
        availability: 'Tat ca nen tang'
      },
      {
        name: 'VPBank',
        icon: 'VP',
        color: 'green',
        desc: 'Ngan hang pho bien',
        speed: '5-15 phut',
        availability: 'Tat ca nen tang'
      },
      {
        name: 'Chuyen khoan',
        icon: 'CK',
        color: 'gray',
        desc: 'Chuyen khoan lien ngan hang',
        speed: '10-30 phut',
        availability: 'Tat ca nen tang'
      }
    ],

    // Example calculation
    exampleTitle: 'Vi du: Doi 5,000,000d',
    exampleRows: [
      { from: '5,000,000d VND', to: '~198 USDT (ty gia ~25,250d/USDT)' },
      { from: '198 USDT', to: '198 USDC (doi mien phi)' },
      { from: 'Phi rut', to: '~$0.10 (Arbitrum)' },
      { from: 'Ban nhan duoc', to: '~$197.90 USDC', highlight: true }
    ],

    // Pro Tips
    proTipsTitle: 'Meo Pro cho Nha Giao Dich Viet Nam',
    proTips: [
      {
        icon: '💰',
        title: 'Su dung P2P de ty gia tot nhat',
        desc: 'Binance P2P thuong co ty gia tot hon 0.5-1% so voi ty gia san. Voi 10 trieu dong, tiet kiem 50,000-100,000d.'
      },
      {
        icon: '⏰',
        title: 'Giao dich trong gio lam viec',
        desc: 'Giao dich P2P nhanh nhat khi ngan hang VN hoat dong (8h-17h). MoMo/ZaloPay hoat dong 24/7 nhung chuyen khoan co the cham vao ban dem.'
      },
      {
        icon: '🔒',
        title: 'Chon nguoi ban da xac minh',
        desc: 'Tren P2P, tim nguoi ban co ty le hoan thanh 98%+ va 500+ don hang. So don hang cao hon = dang tin cay hon.'
      },
      {
        icon: '📱',
        title: 'Luu giu ho so giao dich',
        desc: 'Chup man hinh tat ca giao dich P2P va chuyen tien. Ban se can nhung thu nay cho muc dich thue va trong truong hop co tranh chap.'
      }
    ],

    // CTA
    ctaTitle: 'San sang doi VND?',
    ctaDesc: 'Khi ban co USDC trong vi, ban da san sang bat dau giao dich co phieu My 24/7.',
    ctaButton: 'Tiep tuc: Bat dau Giao dich',
    ctaSecondary: 'Thiet lap Vi truoc',

    // Footer notice
    freeNotice: 'Trang web nay',
    freeNotice2: '100% mien phi',
    freeNotice3: ' de su dung so sanh cac nen tang tot nhat de giao dich co phieu 24/7. Khi ban dang ky qua lien ket cua chung toi den cac nen tang nhu',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'va',
    freeNotice6: 'Lighter',
    freeNotice7: ', ban nhan duoc',
    freeNotice8: 'giam 4% phi giao dich',
    freeNotice9: ' voi ma gioi thieu cua chung toi. Dieu nay giup ho tro trang web dong thoi tiet kiem tien cho ban tren moi giao dich.',
  },
  en: {
    // Meta & SEO
    pageTitle: 'How to Convert VND to USDC',
    metaDescription: 'Complete guide on how to convert Vietnamese Dong to USDC for trading US stocks. Compare Binance P2P, Remitano, VNDC with MoMo, ZaloPay, bank transfer.',

    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    currentPage: 'Convert VND to USDC',

    // Hero
    badge: 'Vietnam Guide',
    fundingBadge: 'Funding Guide',
    heroTitle: 'How to Convert VND to USDC',
    heroSubtitle: 'The complete guide to converting Vietnamese Dong to USDC for trading US stocks. Compare methods, fees, and get step-by-step instructions.',
    lastUpdated: 'Updated: January 2025',

    // Table Section
    compareTitle: 'Compare Methods',
    tableHeaders: {
      method: 'Method',
      fees: 'Fees',
      speed: 'Speed',
      minAmount: 'Min Amount',
      bestFor: 'Best For'
    },
    recommendation: 'Recommendation:',
    recommendationText: 'Use Binance P2P for the best rates. Buy USDT first (more sellers), then convert to USDC for free on Binance.',

    // Methods
    methods: [
      {
        id: 'binance',
        name: 'Binance P2P',
        rating: 'Best Rates',
        fees: '~0.1-0.5%',
        speed: '5-15 min',
        minAmount: '500,000d',
        bestFor: 'Best rates, regular traders',
        color: 'yellow',
        pros: ['Best VND rates', 'High liquidity', 'Many payment options', 'Free USDT→USDC conversion'],
        cons: ['Need Binance account with KYC', 'P2P can be intimidating at first'],
      },
      {
        id: 'remitano',
        name: 'Remitano',
        rating: 'Easiest',
        fees: '~1-2%',
        speed: '10-30 min',
        minAmount: '200,000d',
        bestFor: 'Beginners, small amounts',
        color: 'blue',
        pros: ['Vietnamese interface', 'Local customer support', 'Easy to use', 'Multiple payment methods'],
        cons: ['Higher fees than P2P', 'Need to withdraw USDC after'],
      },
      {
        id: 'vndc',
        name: 'VNDC',
        rating: 'Vietnam Stablecoin',
        fees: '~0.5-1%',
        speed: '5-20 min',
        minAmount: '100,000d',
        bestFor: 'Local stablecoin',
        color: 'red',
        pros: ['Vietnamese stablecoin', 'Direct VND conversion', 'Local wallet integration'],
        cons: ['Need to swap VNDC→USDC', 'Lower liquidity'],
      },
    ],

    // Step by step
    stepByStepTitle: 'Step-by-Step Instructions',

    // Binance P2P Steps
    binanceTitle: 'Binance P2P Method (Best Rates)',
    binanceSteps: [
      {
        title: 'Create Binance Account',
        desc: 'Go to binance.com and sign up. Complete KYC verification (ID card).',
        note: 'KYC usually takes 10-30 minutes to verify'
      },
      {
        title: 'Go to P2P Trading',
        desc: 'Open Binance app → Click "P2P" or go to "Trade" → "P2P"',
        note: 'P2P means you are buying directly from other users'
      },
      {
        title: 'Buy USDT with VND',
        items: [
          'Select Buy → USDT',
          'Choose payment method: MoMo (fastest), ZaloPay or Bank Transfer',
          'Enter amount in VND',
          'Pick a seller with high completion rate (98%+) and many orders',
          'Click "Buy" and follow payment instructions'
        ],
        tip: 'Why USDT first?',
        tipText: 'More sellers = better rates. You will convert to USDC in the next step (free).'
      },
      {
        title: 'Convert USDT to USDC (Free)',
        items: [
          'Go to "Trade" → "Convert"',
          'From: USDT → To: USDC',
          'Enter amount and click "Preview Conversion"',
          'Confirm - this is free and instant!'
        ]
      },
      {
        title: 'Withdraw USDC to Your Wallet',
        items: [
          'Go to "Wallet" → "Withdraw"',
          'Select USDC',
          'Paste your Rabby wallet address',
          'Select network: Arbitrum One (lowest fees ~$0.10)',
          'Confirm with 2FA'
        ],
        tip: 'Important:',
        tipText: 'Always use Arbitrum network for lowest fees. Funds arrive in 1-5 minutes.'
      }
    ],

    // Remitano Steps
    remitanoTitle: 'Remitano Method (Easiest)',
    remitanoSteps: [
      {
        title: 'Create Remitano Account',
        desc: 'Download Remitano app or visit remitano.com. Complete KYC with ID card.'
      },
      {
        title: 'Deposit VND via MoMo/ZaloPay/Bank',
        items: [
          'Go to "Buy/Sell" → "Buy"',
          'Select USDT or USDC',
          'Choose payment method (MoMo, ZaloPay, Vietcombank, Techcombank, VPBank)',
          'Enter amount and pay'
        ],
        note: 'Vietnamese support, local customer service'
      },
      {
        title: 'Withdraw USDC to Wallet',
        items: [
          'Go to "Wallet" → "Withdraw"',
          'Select USDC',
          'Enter your Rabby wallet address',
          'Select Arbitrum network if available (or Ethereum)',
          'Confirm withdrawal'
        ]
      }
    ],
    remitanoNote: 'Why choose Remitano?',
    remitanoNoteText: 'Full Vietnamese interface, 24/7 Vietnamese customer support. Great for beginners.',

    // VNDC Steps
    vndcTitle: 'VNDC Method (Vietnamese Stablecoin)',
    vndcSteps: [
      {
        title: 'Create VNDC Account',
        desc: 'Download VNDC app or visit vndc.io. Complete KYC verification.'
      },
      {
        title: 'Deposit VND and Buy VNDC',
        items: [
          'Deposit VND via bank transfer',
          'Buy VNDC (1 VNDC = 1 VND)',
          'VNDC is a Vietnamese stablecoin'
        ]
      },
      {
        title: 'Swap VNDC to USDC',
        items: [
          'Use swap feature on VNDC',
          'Or transfer VNDC to supporting exchange (Binance, OKX)',
          'Swap VNDC → USDT → USDC'
        ],
        note: 'Extra step to swap but it is a local stablecoin'
      },
      {
        title: 'Withdraw USDC to Wallet',
        items: [
          'Withdraw USDC to your Rabby wallet',
          'Use Arbitrum network for lowest fees'
        ]
      }
    ],
    vndcNote: 'Note:',
    vndcNoteText: 'VNDC is a Vietnamese stablecoin so easier to understand value. However requires extra step to swap to USDC.',

    // Payment Methods Section
    paymentMethodsTitle: 'Supported Payment Methods',
    paymentMethods: [
      {
        name: 'MoMo',
        icon: 'M',
        color: 'pink',
        desc: 'Most popular e-wallet in VN',
        speed: 'Instant',
        availability: 'Binance P2P, Remitano'
      },
      {
        name: 'ZaloPay',
        icon: 'Z',
        color: 'blue',
        desc: 'Zalo integrated e-wallet',
        speed: 'Instant',
        availability: 'Binance P2P, Remitano'
      },
      {
        name: 'Vietcombank',
        icon: 'V',
        color: 'green',
        desc: 'Largest bank in VN',
        speed: '5-15 min',
        availability: 'All platforms'
      },
      {
        name: 'Techcombank',
        icon: 'T',
        color: 'red',
        desc: 'Leading digital bank',
        speed: '5-15 min',
        availability: 'All platforms'
      },
      {
        name: 'VPBank',
        icon: 'VP',
        color: 'green',
        desc: 'Popular bank',
        speed: '5-15 min',
        availability: 'All platforms'
      },
      {
        name: 'Bank Transfer',
        icon: 'BT',
        color: 'gray',
        desc: 'Interbank transfer',
        speed: '10-30 min',
        availability: 'All platforms'
      }
    ],

    // Example calculation
    exampleTitle: 'Example: Converting 5,000,000d',
    exampleRows: [
      { from: '5,000,000d VND', to: '~198 USDT (at ~25,250d/USDT)' },
      { from: '198 USDT', to: '198 USDC (free conversion)' },
      { from: 'Withdrawal fee', to: '~$0.10 (Arbitrum)' },
      { from: 'You receive', to: '~$197.90 USDC', highlight: true }
    ],

    // Pro Tips
    proTipsTitle: 'Pro Tips for Vietnamese Traders',
    proTips: [
      {
        icon: '💰',
        title: 'Use P2P for Best Rates',
        desc: 'Binance P2P typically offers rates 0.5-1% better than exchange rates. For 10 million VND, that is 50,000-100,000d saved.'
      },
      {
        icon: '⏰',
        title: 'Trade During Banking Hours',
        desc: 'P2P trades are fastest when VN banks are open (8am-5pm). MoMo/ZaloPay work 24/7 but transfers may be slower at night.'
      },
      {
        icon: '🔒',
        title: 'Pick Verified Sellers',
        desc: 'On P2P, look for sellers with 98%+ completion rate and 500+ orders. Higher order count = more reliable.'
      },
      {
        icon: '📱',
        title: 'Keep Transaction Records',
        desc: 'Screenshot all P2P trades and transfers. You will need these for tax purposes and in case of any disputes.'
      }
    ],

    // CTA
    ctaTitle: 'Ready to Convert VND?',
    ctaDesc: 'Once you have USDC in your wallet, you are ready to start trading US stocks 24/7.',
    ctaButton: 'Continue: Start Trading',
    ctaSecondary: 'Set Up Wallet First',

    // Footer notice
    freeNotice: 'This site is',
    freeNotice2: '100% free',
    freeNotice3: ' to use for comparing the best platforms to trade stocks 24/7. When you sign up through our links to platforms like',
    freeNotice4: 'Hyperliquid',
    freeNotice5: 'and',
    freeNotice6: 'Lighter',
    freeNotice7: ', you get a',
    freeNotice8: '4% discount on trading fees',
    freeNotice9: ' with our referral code. This helps support the site while saving you money on every trade.',
  }
};

export default function CachDoiVNDSangUSDC() {
  const [selectedMethod, setSelectedMethod] = useState('binance');
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const t = translations[lang];

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': lang === 'vi' ? 'Cach Doi VND Sang USDC' : 'How to Convert VND to USDC',
    'description': lang === 'vi'
      ? 'Huong dan chi tiet cach doi Dong Viet Nam (VND) sang USDC de giao dich co phieu My tren cac nen tang phi tap trung.'
      : 'Complete guide on converting Vietnamese Dong (VND) to USDC for trading US stocks on decentralized platforms.',
    'image': 'https://equityperps.com/og-vietnam-guide.png',
    'totalTime': 'PT15M',
    'estimatedCost': {
      '@type': 'MonetaryAmount',
      'currency': 'VND',
      'value': '500000'
    },
    'supply': [
      {
        '@type': 'HowToSupply',
        'name': lang === 'vi' ? 'Dong Viet Nam (VND)' : 'Vietnamese Dong (VND)'
      },
      {
        '@type': 'HowToSupply',
        'name': lang === 'vi' ? 'Vi Rabby' : 'Rabby Wallet'
      }
    ],
    'tool': [
      {
        '@type': 'HowToTool',
        'name': 'Binance App'
      },
      {
        '@type': 'HowToTool',
        'name': 'MoMo'
      },
      {
        '@type': 'HowToTool',
        'name': 'ZaloPay'
      }
    ],
    'step': [
      {
        '@type': 'HowToStep',
        'name': lang === 'vi' ? 'Tao tai khoan Binance' : 'Create Binance Account',
        'text': lang === 'vi' ? 'Dang ky tai Binance va hoan thanh KYC' : 'Sign up at Binance and complete KYC',
        'position': 1
      },
      {
        '@type': 'HowToStep',
        'name': lang === 'vi' ? 'Mua USDT tren P2P' : 'Buy USDT on P2P',
        'text': lang === 'vi' ? 'Su dung MoMo, ZaloPay hoac chuyen khoan ngan hang de mua USDT' : 'Use MoMo, ZaloPay or bank transfer to buy USDT',
        'position': 2
      },
      {
        '@type': 'HowToStep',
        'name': lang === 'vi' ? 'Doi USDT sang USDC' : 'Convert USDT to USDC',
        'text': lang === 'vi' ? 'Su dung tinh nang Convert tren Binance (mien phi)' : 'Use Convert feature on Binance (free)',
        'position': 3
      },
      {
        '@type': 'HowToStep',
        'name': lang === 'vi' ? 'Rut USDC ve vi' : 'Withdraw USDC to wallet',
        'text': lang === 'vi' ? 'Rut USDC ve vi Rabby qua mang Arbitrum' : 'Withdraw USDC to Rabby wallet via Arbitrum network',
        'position': 4
      }
    ],
    'inLanguage': lang === 'vi' ? 'vi-VN' : 'en',
    'author': {
      '@type': 'Organization',
      'name': 'Equity Perps'
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-gray-950 to-yellow-500/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />

        {/* Language Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-gray-800/70 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('vi')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                lang === 'vi'
                  ? 'bg-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              Tieng Viet
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{t.currentPage}</span>
          </nav>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">{t.badge}</span>
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full">{t.fundingBadge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {t.heroTitle}
          </h1>

          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            {t.heroSubtitle}
          </p>

          <p className="text-sm text-gray-500">{t.lastUpdated}</p>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.compareTitle}</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.method}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.fees}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.speed}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.minAmount}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.tableHeaders.bestFor}</th>
                </tr>
              </thead>
              <tbody>
                {t.methods.map(method => (
                  <tr key={method.id} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                    <td className="py-4 px-4">
                      <span className="text-white font-medium">{method.name}</span>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                        method.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        method.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {method.rating}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{method.fees}</td>
                    <td className="py-4 px-4 text-gray-300">{method.speed}</td>
                    <td className="py-4 px-4 text-gray-300">{method.minAmount}</td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{method.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <p className="text-yellow-400 text-sm">
              <strong>{t.recommendation}</strong> {t.recommendationText}
            </p>
          </div>
        </div>
      </section>

      {/* Method Selector & Step-by-Step */}
      <section className="py-8 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.stepByStepTitle}</h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {t.methods.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`px-5 py-3 rounded-xl font-medium transition-all ${
                  selectedMethod === method.id
                    ? method.color === 'yellow' ? 'bg-yellow-500 text-gray-900' :
                      method.color === 'blue' ? 'bg-blue-500 text-white' :
                      'bg-red-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {method.name}
              </button>
            ))}
          </div>

          {/* Binance P2P Instructions */}
          {selectedMethod === 'binance' && (
            <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-6">{t.binanceTitle}</h3>

              <div className="space-y-6">
                {t.binanceSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                      {step.desc && <p className="text-gray-400 text-sm mb-2">{step.desc}</p>}
                      {step.note && <p className="text-gray-500 text-xs mb-2">{step.note}</p>}
                      {step.items && (
                        <ul className="text-gray-400 text-sm space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i}>&#8226; {item}</li>
                          ))}
                        </ul>
                      )}
                      {step.tip && (
                        <div className="mt-3 p-3 bg-yellow-500/10 rounded-lg">
                          <p className="text-yellow-400 text-xs">
                            <strong>{step.tip}</strong> {step.tipText}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{t.exampleTitle}</h4>
                <div className="text-sm space-y-1">
                  {t.exampleRows.map((row, i) => (
                    <div key={i} className={`flex justify-between ${row.highlight ? 'text-white font-medium pt-2 border-t border-gray-700' : 'text-gray-300'}`}>
                      <span>{row.from}</span>
                      <span>{row.to}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Remitano Instructions */}
          {selectedMethod === 'remitano' && (
            <div className="bg-gray-900 border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-6">{t.remitanoTitle}</h3>

              <div className="space-y-6">
                {t.remitanoSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                      {step.desc && <p className="text-gray-400 text-sm mb-2">{step.desc}</p>}
                      {step.note && <p className="text-gray-500 text-xs mb-2">{step.note}</p>}
                      {step.items && (
                        <ul className="text-gray-400 text-sm space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i}>&#8226; {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 rounded-xl">
                <p className="text-blue-400 text-sm">
                  <strong>{t.remitanoNote}</strong> {t.remitanoNoteText}
                </p>
              </div>
            </div>
          )}

          {/* VNDC Instructions */}
          {selectedMethod === 'vndc' && (
            <div className="bg-gray-900 border border-red-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-6">{t.vndcTitle}</h3>

              <div className="space-y-6">
                {t.vndcSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                      {step.desc && <p className="text-gray-400 text-sm mb-2">{step.desc}</p>}
                      {step.note && <p className="text-gray-500 text-xs mb-2">{step.note}</p>}
                      {step.items && (
                        <ul className="text-gray-400 text-sm space-y-1">
                          {step.items.map((item, i) => (
                            <li key={i}>&#8226; {item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <p className="text-yellow-400 text-sm">
                  <strong>{t.vndcNote}</strong> {t.vndcNoteText}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.paymentMethodsTitle}</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {t.paymentMethods.map((method, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                    method.color === 'pink' ? 'bg-pink-500/20 text-pink-400' :
                    method.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                    method.color === 'green' ? 'bg-green-500/20 text-green-400' :
                    method.color === 'red' ? 'bg-red-500/20 text-red-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{method.name}</h3>
                    <p className="text-gray-500 text-xs">{method.desc}</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{method.speed}</span>
                  <span className="text-gray-500">{method.availability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.proTipsTitle}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {t.proTips.map((tip, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-yellow-500/30 transition-colors">
                <div className="text-2xl mb-3">{tip.icon}</div>
                <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-400 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-red-500/20 to-yellow-500/20 border border-red-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">{t.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/trade-us-stocks-from-vietnam"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold hover:from-red-400 hover:to-red-500 transition-colors shadow-lg shadow-red-500/25"
              >
                {t.ctaButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/blog/wallet-setup-guide"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Site + Referral Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.freeNotice} <span className="text-white font-medium">{t.freeNotice2}</span>{t.freeNotice3} <span className="text-cyan-400">{t.freeNotice4}</span> {t.freeNotice5} <span className="text-cyan-400">{t.freeNotice6}</span>{t.freeNotice7} <span className="text-green-400 font-semibold">{t.freeNotice8}</span>{t.freeNotice9}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
