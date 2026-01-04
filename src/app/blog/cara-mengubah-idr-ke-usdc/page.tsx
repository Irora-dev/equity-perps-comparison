'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LanguageToggle } from '@/components/LanguageToggle';

// Translation object for Indonesian (id) and English (en)
const translations = {
  id: {
    // Meta & Navigation
    home: 'Beranda',
    blog: 'Blog',
    pageTitle: 'Cara Mengubah IDR ke USDC',
    badge: 'Indonesia',
    fundingBadge: 'Panduan Pendanaan',

    // Hero Section
    heroTitle: 'Cara Mengubah IDR ke USDC',
    heroSubtitle: 'Panduan Lengkap untuk Trader Indonesia',
    heroDesc: 'Pelajari cara mengubah Rupiah ke USDC dengan biaya terendah untuk trading equity perps. Bandingkan metode, biaya, dan dapatkan panduan langkah demi langkah.',

    // Quick Stats
    statMinimumValue: 'Rp50.000',
    statMinimum: 'Minimum',
    statTimeValue: '5-30 menit',
    statTime: 'Waktu Proses',
    statFeesValue: '0-0.5%',
    statFees: 'Biaya',
    statMethodsValue: '7+',
    statMethods: 'Metode Pembayaran',

    // Comparison Table
    compareTitle: 'Bandingkan Metode',
    methodCol: 'Metode',
    feesCol: 'Biaya',
    speedCol: 'Kecepatan',
    minAmountCol: 'Min. Jumlah',
    bestForCol: 'Cocok Untuk',
    recommendedTag: 'Direkomendasikan',
    localTag: 'Exchange Lokal',
    popularTag: 'Populer',

    // Methods
    indodax: {
      name: 'Indodax',
      fees: '0.25-0.3%',
      speed: '15-30 menit',
      minAmount: 'Rp50.000',
      bestFor: 'Trader lokal, transfer bank mudah',
      rating: 'Exchange Terbesar',
      desc: 'Exchange crypto terbesar di Indonesia dengan volume tinggi',
      pros: ['Transfer bank lokal langsung', 'Volume trading tinggi', 'Biaya rendah', 'Dukungan bahasa Indonesia'],
      cons: ['Perlu KYC lengkap', 'Penarikan USDC memerlukan waktu'],
    },
    tokocrypto: {
      name: 'Tokocrypto',
      fees: '0.1-0.2%',
      speed: '10-20 menit',
      minAmount: 'Rp50.000',
      bestFor: 'Biaya terendah, terintegrasi Binance',
      rating: 'Biaya Terendah',
      desc: 'Platform trading dengan integrasi Binance Indonesia',
      pros: ['Biaya trading sangat rendah', 'Terintegrasi dengan Binance', 'Antarmuka modern', 'Banyak pasangan trading'],
      cons: ['Likuiditas lebih rendah dari Indodax', 'Verifikasi bisa memakan waktu'],
    },
    binanceP2P: {
      name: 'Binance P2P',
      fees: '0-0.5%',
      speed: '5-15 menit',
      minAmount: 'Rp100.000',
      bestFor: 'Rate terbaik, fleksibel',
      rating: 'Rate Terbaik',
      desc: 'Trading langsung dengan seller menggunakan IDR',
      pros: ['Rate terbaik di pasar', 'Banyak metode pembayaran', 'Tanpa biaya platform', 'Escrow aman'],
      cons: ['Perlu akun Binance dengan KYC', 'P2P bisa membingungkan untuk pemula'],
    },

    // Recommendation Box
    recommendationTitle: 'Rekomendasi',
    recommendationText: 'Gunakan Indodax untuk kemudahan transfer bank lokal, atau Binance P2P untuk rate terbaik. Beli USDT dulu (lebih banyak seller), lalu konversi ke USDC gratis.',

    // Step-by-Step
    stepByStepTitle: 'Panduan Langkah demi Langkah',
    selectMethod: 'Pilih metode',

    // Indodax Steps
    indodaxSteps: [
      {
        title: 'Buat Akun Indodax',
        desc: 'Kunjungi indodax.com dan daftar. Selesaikan verifikasi KYC dengan KTP dan foto selfie.',
        note: 'Verifikasi biasanya memakan waktu 1-24 jam'
      },
      {
        title: 'Deposit IDR',
        desc: 'Buka menu "Wallet" lalu "Deposit IDR". Pilih metode pembayaran: Transfer Bank (BCA, Mandiri, BNI, BRI) atau E-wallet (GoPay, OVO, DANA).',
        note: 'Transfer bank minimal Rp50.000, e-wallet biasanya lebih tinggi'
      },
      {
        title: 'Beli USDT',
        desc: 'Setelah IDR masuk, buka menu "Trade". Cari pasangan USDT/IDR. Masukkan jumlah dan klik "Beli".',
        note: 'Beli USDT dulu karena lebih likuid, bisa dikonversi ke USDC nanti'
      },
      {
        title: 'Konversi ke USDC',
        desc: 'Buka menu "Convert" atau trade USDT ke USDC. Jika tidak ada pasangan langsung, kirim USDT ke Binance untuk konversi gratis.',
        note: 'Konversi USDT ke USDC biasanya gratis di exchange besar'
      },
      {
        title: 'Tarik USDC ke Wallet',
        desc: 'Buka "Wallet" lalu "Withdraw". Pilih USDC, masukkan alamat wallet Rabby/MetaMask Anda. Pilih jaringan Arbitrum untuk biaya terendah (~$0.10).',
        note: 'Selalu gunakan jaringan Arbitrum untuk biaya paling murah'
      }
    ],

    // Tokocrypto Steps
    tokocryptoSteps: [
      {
        title: 'Buat Akun Tokocrypto',
        desc: 'Kunjungi tokocrypto.com dan daftar. Lakukan verifikasi KYC dengan dokumen identitas.',
        note: 'Proses verifikasi sekitar 1-2 hari kerja'
      },
      {
        title: 'Deposit IDR',
        desc: 'Pilih menu "Wallet" lalu "Deposit". Pilih transfer bank atau e-wallet untuk menambah saldo IDR.',
        note: 'Bank transfer biasanya lebih cepat di jam kerja'
      },
      {
        title: 'Beli USDT/USDC',
        desc: 'Buka menu "Trade" dan cari pasangan IDR. Beli USDT atau USDC langsung.',
        note: 'Tokocrypto punya pasangan USDC/IDR langsung'
      },
      {
        title: 'Transfer ke Binance (Opsional)',
        desc: 'Jika ingin rate lebih baik, gunakan fitur transfer ke Binance yang terintegrasi.',
        note: 'Transfer ke Binance gratis dan instan'
      },
      {
        title: 'Tarik ke Wallet Pribadi',
        desc: 'Withdraw USDC ke wallet Anda menggunakan jaringan Arbitrum atau BSC.',
        note: 'Cek biaya withdrawal sebelum memilih jaringan'
      }
    ],

    // Binance P2P Steps
    binanceP2PSteps: [
      {
        title: 'Buat Akun Binance',
        desc: 'Kunjungi binance.com dan daftar. Selesaikan verifikasi KYC dengan KTP/Paspor.',
        note: 'KYC Binance biasanya selesai dalam 10-30 menit'
      },
      {
        title: 'Buka P2P Trading',
        desc: 'Buka aplikasi Binance, klik "P2P" atau buka menu "Trade" lalu pilih "P2P".',
        note: 'P2P artinya Anda beli langsung dari pengguna lain'
      },
      {
        title: 'Beli USDT dengan IDR',
        desc: 'Pilih "Buy" lalu "USDT". Pilih metode pembayaran: GoPay, OVO, DANA, atau Transfer Bank. Masukkan jumlah, pilih seller dengan rating tinggi (98%+), lalu klik "Buy".',
        note: 'Pilih seller dengan completion rate tinggi dan banyak order'
      },
      {
        title: 'Bayar dan Konfirmasi',
        desc: 'Lakukan pembayaran sesuai instruksi seller. Setelah transfer, klik "Mark as Paid". Tunggu seller melepas USDT ke akun Anda.',
        note: 'Jangan pernah cancel setelah transfer - hubungi customer service jika ada masalah'
      },
      {
        title: 'Konversi USDT ke USDC (Gratis)',
        desc: 'Buka menu "Trade" lalu "Convert". Pilih From: USDT, To: USDC. Masukkan jumlah dan konfirmasi.',
        note: 'Konversi di Binance gratis dan instan!'
      },
      {
        title: 'Tarik USDC ke Wallet',
        desc: 'Buka "Wallet" lalu "Withdraw". Pilih USDC, paste alamat wallet Anda, pilih jaringan Arbitrum One. Konfirmasi dengan 2FA.',
        note: 'Biaya withdrawal Arbitrum sekitar $0.10, dana sampai 1-5 menit'
      }
    ],

    // Payment Methods Section
    paymentMethodsTitle: 'Metode Pembayaran yang Didukung',
    paymentMethodsDesc: 'Berbagai cara untuk deposit IDR ke exchange',
    bankTransfer: 'Transfer Bank',
    eWallet: 'E-Wallet',

    // Pro Tips
    proTipsTitle: 'Tips Pro untuk Trader Indonesia',
    tips: [
      {
        icon: '💰',
        title: 'Gunakan P2P untuk Rate Terbaik',
        desc: 'Binance P2P biasanya menawarkan rate 0.5-1% lebih baik dari exchange. Untuk Rp1.000.000, itu Rp5.000-10.000 yang dihemat.'
      },
      {
        icon: '⏰',
        title: 'Trading di Jam Kerja',
        desc: 'P2P paling cepat saat jam kerja bank (09.00-17.00 WIB). Transfer bank di luar jam kerja bisa lebih lambat.'
      },
      {
        icon: '🔒',
        title: 'Pilih Seller Terverifikasi',
        desc: 'Di P2P, pilih seller dengan completion rate 98%+ dan 500+ orders. Semakin banyak transaksi, semakin terpercaya.'
      },
      {
        icon: '📱',
        title: 'Simpan Bukti Transaksi',
        desc: 'Screenshot semua transaksi P2P dan transfer. Berguna untuk bukti pajak dan jika ada sengketa.'
      },
      {
        icon: '🌐',
        title: 'Gunakan Jaringan Arbitrum',
        desc: 'Selalu pilih Arbitrum saat withdraw USDC. Biaya hanya ~$0.10 dibanding $5-10 di Ethereum.'
      },
      {
        icon: '🔄',
        title: 'Beli USDT, Konversi ke USDC',
        desc: 'Lebih banyak seller USDT di P2P = rate lebih baik. Konversi ke USDC gratis di Binance/exchange besar.'
      }
    ],

    // Example Conversion
    exampleTitle: 'Contoh: Mengubah Rp1.000.000',
    exampleSteps: [
      { from: 'Rp1.000.000 IDR', to: '~62.5 USDT (rate Rp16.000/USDT)', arrow: true },
      { from: '62.5 USDT', to: '62.5 USDC (konversi gratis)', arrow: true },
      { from: 'Biaya withdrawal', to: '~$0.10 (Arbitrum)', arrow: false },
      { from: 'Anda terima', to: '~$62.40 USDC', arrow: false, highlight: true },
    ],

    // FAQ
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
      {
        question: 'Apakah trading crypto legal di Indonesia?',
        answer: 'Ya, trading crypto legal di Indonesia dan diatur oleh Bappebti (Badan Pengawas Perdagangan Berjangka Komoditi). Exchange seperti Indodax dan Tokocrypto sudah terdaftar resmi.'
      },
      {
        question: 'Metode pembayaran apa yang paling cepat?',
        answer: 'GoPay, OVO, dan DANA biasanya paling cepat (instan). Transfer bank seperti BCA dan Mandiri juga cepat di jam kerja (biasanya 5-15 menit).'
      },
      {
        question: 'Apa perbedaan USDT dan USDC?',
        answer: 'Keduanya stablecoin senilai $1. USDT (Tether) lebih populer di P2P Indonesia. USDC (Circle) lebih terregulasi. Untuk trading di DEX seperti Hyperliquid, keduanya bisa digunakan. Anda bisa konversi gratis di exchange besar.'
      },
      {
        question: 'Berapa lama proses withdrawal USDC?',
        answer: 'Withdrawal ke jaringan Arbitrum biasanya memakan waktu 1-5 menit setelah konfirmasi 2FA. Jaringan Ethereum bisa memakan waktu 5-15 menit.'
      },
      {
        question: 'Apa yang harus dilakukan jika seller P2P tidak melepas crypto?',
        answer: 'Jangan panik. Buka dispute/sengketa di platform, lampirkan bukti pembayaran. Tim support akan menyelidiki dan melepas dana ke pihak yang benar. Inilah mengapa penting menyimpan bukti transaksi.'
      },
      {
        question: 'Apakah ada pajak untuk trading crypto di Indonesia?',
        answer: 'Ya, Indonesia mengenakan pajak 0.1% PPh dan 0.11% PPN untuk transaksi crypto. Pajak ini biasanya sudah termasuk dalam biaya trading di exchange lokal yang terdaftar.'
      }
    ],

    // CTA Section
    ctaTitle: 'Siap Trading Saham AS?',
    ctaDesc: 'Setelah memiliki USDC di wallet, Anda siap trading saham AS 24/7 tanpa broker tradisional.',
    ctaButton: 'Mulai Trading Sekarang',
    ctaSecondary: 'Panduan Trading Indonesia',

    // Footer Notice
    freeNotice: 'Situs ini',
    freeNotice2: '100% gratis',
    freeNotice3: ' untuk membandingkan platform trading saham terbaik 24/7. Ketika Anda mendaftar melalui link kami ke platform seperti ',
    freeNotice4: 'Hyperliquid',
    freeNotice5: ' dan ',
    freeNotice6: 'Lighter',
    freeNotice7: ', Anda mendapat ',
    freeNotice8: 'diskon 4% biaya trading',
    freeNotice9: ' dengan kode referral kami. Ini membantu mendukung situs sambil menghemat uang Anda di setiap trade.',

    // Related Guides
    relatedTitle: 'Panduan Terkait',
    relatedGuides: [
      {
        href: '/blog/trade-us-stocks-from-indonesia',
        tag: 'Trading',
        title: 'Trading Saham AS dari Indonesia',
        desc: 'Panduan lengkap untuk trader Indonesia'
      },
      {
        href: '/blog/wallet-setup-guide',
        tag: 'Wallet',
        title: 'Setup Wallet Crypto',
        desc: 'Cara setup Rabby/MetaMask'
      },
      {
        href: '/blog/p2p-usdc-guide',
        tag: 'P2P',
        title: 'Panduan P2P Global',
        desc: 'Tips P2P untuk berbagai negara'
      }
    ],
  },
  en: {
    // Meta & Navigation
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Convert IDR to USDC',
    badge: 'Indonesia',
    fundingBadge: 'Funding Guide',

    // Hero Section
    heroTitle: 'How to Convert IDR to USDC',
    heroSubtitle: 'Complete Guide for Indonesian Traders',
    heroDesc: 'Learn how to convert Indonesian Rupiah to USDC with the lowest fees for trading equity perps. Compare methods, fees, and get step-by-step instructions.',

    // Quick Stats
    statMinimumValue: 'Rp50,000',
    statMinimum: 'Minimum',
    statTimeValue: '5-30 min',
    statTime: 'Processing Time',
    statFeesValue: '0-0.5%',
    statFees: 'Fees',
    statMethodsValue: '7+',
    statMethods: 'Payment Methods',

    // Comparison Table
    compareTitle: 'Compare Methods',
    methodCol: 'Method',
    feesCol: 'Fees',
    speedCol: 'Speed',
    minAmountCol: 'Min. Amount',
    bestForCol: 'Best For',
    recommendedTag: 'Recommended',
    localTag: 'Local Exchange',
    popularTag: 'Popular',

    // Methods
    indodax: {
      name: 'Indodax',
      fees: '0.25-0.3%',
      speed: '15-30 min',
      minAmount: 'Rp50,000',
      bestFor: 'Local traders, easy bank transfers',
      rating: 'Largest Exchange',
      desc: 'Indonesia\'s largest crypto exchange with high volume',
      pros: ['Direct local bank transfers', 'High trading volume', 'Low fees', 'Indonesian language support'],
      cons: ['Full KYC required', 'USDC withdrawal takes time'],
    },
    tokocrypto: {
      name: 'Tokocrypto',
      fees: '0.1-0.2%',
      speed: '10-20 min',
      minAmount: 'Rp50,000',
      bestFor: 'Lowest fees, Binance integrated',
      rating: 'Lowest Fees',
      desc: 'Trading platform with Binance Indonesia integration',
      pros: ['Very low trading fees', 'Integrated with Binance', 'Modern interface', 'Many trading pairs'],
      cons: ['Lower liquidity than Indodax', 'Verification can take time'],
    },
    binanceP2P: {
      name: 'Binance P2P',
      fees: '0-0.5%',
      speed: '5-15 min',
      minAmount: 'Rp100,000',
      bestFor: 'Best rates, flexible',
      rating: 'Best Rates',
      desc: 'Trade directly with sellers using IDR',
      pros: ['Best market rates', 'Many payment methods', 'No platform fees', 'Secure escrow'],
      cons: ['Need Binance account with KYC', 'P2P can be confusing for beginners'],
    },

    // Recommendation Box
    recommendationTitle: 'Recommendation',
    recommendationText: 'Use Indodax for easy local bank transfers, or Binance P2P for the best rates. Buy USDT first (more sellers), then convert to USDC for free.',

    // Step-by-Step
    stepByStepTitle: 'Step-by-Step Guide',
    selectMethod: 'Select method',

    // Indodax Steps
    indodaxSteps: [
      {
        title: 'Create Indodax Account',
        desc: 'Visit indodax.com and sign up. Complete KYC verification with ID card and selfie.',
        note: 'Verification usually takes 1-24 hours'
      },
      {
        title: 'Deposit IDR',
        desc: 'Open "Wallet" menu then "Deposit IDR". Choose payment method: Bank Transfer (BCA, Mandiri, BNI, BRI) or E-wallet (GoPay, OVO, DANA).',
        note: 'Bank transfer minimum Rp50,000, e-wallet usually higher'
      },
      {
        title: 'Buy USDT',
        desc: 'After IDR arrives, open "Trade" menu. Search for USDT/IDR pair. Enter amount and click "Buy".',
        note: 'Buy USDT first as it\'s more liquid, convert to USDC later'
      },
      {
        title: 'Convert to USDC',
        desc: 'Open "Convert" menu or trade USDT for USDC. If no direct pair, send USDT to Binance for free conversion.',
        note: 'USDT to USDC conversion is usually free on major exchanges'
      },
      {
        title: 'Withdraw USDC to Wallet',
        desc: 'Open "Wallet" then "Withdraw". Select USDC, enter your Rabby/MetaMask wallet address. Choose Arbitrum network for lowest fees (~$0.10).',
        note: 'Always use Arbitrum network for the cheapest fees'
      }
    ],

    // Tokocrypto Steps
    tokocryptoSteps: [
      {
        title: 'Create Tokocrypto Account',
        desc: 'Visit tokocrypto.com and sign up. Complete KYC verification with identity documents.',
        note: 'Verification takes about 1-2 business days'
      },
      {
        title: 'Deposit IDR',
        desc: 'Select "Wallet" menu then "Deposit". Choose bank transfer or e-wallet to add IDR balance.',
        note: 'Bank transfers are usually faster during business hours'
      },
      {
        title: 'Buy USDT/USDC',
        desc: 'Open "Trade" menu and search for IDR pairs. Buy USDT or USDC directly.',
        note: 'Tokocrypto has direct USDC/IDR pair'
      },
      {
        title: 'Transfer to Binance (Optional)',
        desc: 'For better rates, use the integrated Binance transfer feature.',
        note: 'Transfer to Binance is free and instant'
      },
      {
        title: 'Withdraw to Personal Wallet',
        desc: 'Withdraw USDC to your wallet using Arbitrum or BSC network.',
        note: 'Check withdrawal fees before selecting network'
      }
    ],

    // Binance P2P Steps
    binanceP2PSteps: [
      {
        title: 'Create Binance Account',
        desc: 'Visit binance.com and sign up. Complete KYC verification with ID/Passport.',
        note: 'Binance KYC usually completes within 10-30 minutes'
      },
      {
        title: 'Open P2P Trading',
        desc: 'Open Binance app, click "P2P" or go to "Trade" menu and select "P2P".',
        note: 'P2P means you buy directly from other users'
      },
      {
        title: 'Buy USDT with IDR',
        desc: 'Select "Buy" then "USDT". Choose payment method: GoPay, OVO, DANA, or Bank Transfer. Enter amount, select seller with high rating (98%+), then click "Buy".',
        note: 'Choose sellers with high completion rate and many orders'
      },
      {
        title: 'Pay and Confirm',
        desc: 'Make payment according to seller instructions. After transfer, click "Mark as Paid". Wait for seller to release USDT to your account.',
        note: 'Never cancel after transfer - contact customer service if issues arise'
      },
      {
        title: 'Convert USDT to USDC (Free)',
        desc: 'Open "Trade" menu then "Convert". Select From: USDT, To: USDC. Enter amount and confirm.',
        note: 'Conversion on Binance is free and instant!'
      },
      {
        title: 'Withdraw USDC to Wallet',
        desc: 'Open "Wallet" then "Withdraw". Select USDC, paste your wallet address, choose Arbitrum One network. Confirm with 2FA.',
        note: 'Arbitrum withdrawal fee is about $0.10, funds arrive in 1-5 minutes'
      }
    ],

    // Payment Methods Section
    paymentMethodsTitle: 'Supported Payment Methods',
    paymentMethodsDesc: 'Various ways to deposit IDR to exchanges',
    bankTransfer: 'Bank Transfer',
    eWallet: 'E-Wallet',

    // Pro Tips
    proTipsTitle: 'Pro Tips for Indonesian Traders',
    tips: [
      {
        icon: '💰',
        title: 'Use P2P for Best Rates',
        desc: 'Binance P2P typically offers rates 0.5-1% better than exchanges. For Rp1,000,000, that\'s Rp5,000-10,000 saved.'
      },
      {
        icon: '⏰',
        title: 'Trade During Banking Hours',
        desc: 'P2P trades are fastest during banking hours (9AM-5PM WIB). Bank transfers outside hours can be slower.'
      },
      {
        icon: '🔒',
        title: 'Choose Verified Sellers',
        desc: 'On P2P, pick sellers with 98%+ completion rate and 500+ orders. More transactions = more trustworthy.'
      },
      {
        icon: '📱',
        title: 'Keep Transaction Records',
        desc: 'Screenshot all P2P trades and transfers. Useful for tax documentation and in case of disputes.'
      },
      {
        icon: '🌐',
        title: 'Use Arbitrum Network',
        desc: 'Always choose Arbitrum when withdrawing USDC. Fees are only ~$0.10 compared to $5-10 on Ethereum.'
      },
      {
        icon: '🔄',
        title: 'Buy USDT, Convert to USDC',
        desc: 'More USDT sellers on P2P = better rates. Convert to USDC for free on Binance/major exchanges.'
      }
    ],

    // Example Conversion
    exampleTitle: 'Example: Converting Rp1,000,000',
    exampleSteps: [
      { from: 'Rp1,000,000 IDR', to: '~62.5 USDT (rate Rp16,000/USDT)', arrow: true },
      { from: '62.5 USDT', to: '62.5 USDC (free conversion)', arrow: true },
      { from: 'Withdrawal fee', to: '~$0.10 (Arbitrum)', arrow: false },
      { from: 'You receive', to: '~$62.40 USDC', arrow: false, highlight: true },
    ],

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Is crypto trading legal in Indonesia?',
        answer: 'Yes, crypto trading is legal in Indonesia and regulated by Bappebti (Commodity Futures Trading Regulatory Agency). Exchanges like Indodax and Tokocrypto are officially registered.'
      },
      {
        question: 'Which payment method is fastest?',
        answer: 'GoPay, OVO, and DANA are usually the fastest (instant). Bank transfers like BCA and Mandiri are also fast during business hours (usually 5-15 minutes).'
      },
      {
        question: 'What\'s the difference between USDT and USDC?',
        answer: 'Both are stablecoins worth $1. USDT (Tether) is more popular in Indonesian P2P. USDC (Circle) is more regulated. For trading on DEXs like Hyperliquid, both work. You can convert for free on major exchanges.'
      },
      {
        question: 'How long does USDC withdrawal take?',
        answer: 'Withdrawal to Arbitrum network usually takes 1-5 minutes after 2FA confirmation. Ethereum network can take 5-15 minutes.'
      },
      {
        question: 'What if P2P seller doesn\'t release crypto?',
        answer: 'Don\'t panic. Open a dispute on the platform, attach payment proof. Support team will investigate and release funds to the rightful party. This is why keeping transaction records is important.'
      },
      {
        question: 'Are there taxes on crypto trading in Indonesia?',
        answer: 'Yes, Indonesia imposes 0.1% income tax and 0.11% VAT on crypto transactions. These taxes are usually included in trading fees on registered local exchanges.'
      }
    ],

    // CTA Section
    ctaTitle: 'Ready to Trade US Stocks?',
    ctaDesc: 'Once you have USDC in your wallet, you\'re ready to trade US stocks 24/7 without traditional brokers.',
    ctaButton: 'Start Trading Now',
    ctaSecondary: 'Indonesia Trading Guide',

    // Footer Notice
    freeNotice: 'This site is',
    freeNotice2: '100% free',
    freeNotice3: ' to use for comparing the best platforms to trade stocks 24/7. When you sign up through our links to platforms like ',
    freeNotice4: 'Hyperliquid',
    freeNotice5: ' and ',
    freeNotice6: 'Lighter',
    freeNotice7: ', you get a ',
    freeNotice8: '4% discount on trading fees',
    freeNotice9: ' with our referral code. This helps support the site while saving you money on every trade.',

    // Related Guides
    relatedTitle: 'Related Guides',
    relatedGuides: [
      {
        href: '/blog/trade-us-stocks-from-indonesia',
        tag: 'Trading',
        title: 'Trade US Stocks from Indonesia',
        desc: 'Complete guide for Indonesian traders'
      },
      {
        href: '/blog/wallet-setup-guide',
        tag: 'Wallet',
        title: 'Crypto Wallet Setup',
        desc: 'How to setup Rabby/MetaMask'
      },
      {
        href: '/blog/p2p-usdc-guide',
        tag: 'P2P',
        title: 'Global P2P Guide',
        desc: 'P2P tips for various countries'
      }
    ],
  }
};

// JSON-LD Schema for SEO
const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'Cara Mengubah IDR ke USDC',
  'description': 'Panduan lengkap cara mengubah Rupiah Indonesia (IDR) ke USDC untuk trading equity perps. Bandingkan Indodax, Tokocrypto, dan Binance P2P.',
  'inLanguage': 'id',
  'countryOfOrigin': {
    '@type': 'Country',
    'name': 'Indonesia'
  },
  'totalTime': 'PT30M',
  'estimatedCost': {
    '@type': 'MonetaryAmount',
    'currency': 'IDR',
    'value': '50000'
  },
  'step': [
    {
      '@type': 'HowToStep',
      'name': 'Buat Akun Exchange',
      'text': 'Daftar di Indodax, Tokocrypto, atau Binance dan selesaikan verifikasi KYC'
    },
    {
      '@type': 'HowToStep',
      'name': 'Deposit IDR',
      'text': 'Deposit Rupiah menggunakan transfer bank (BCA, Mandiri, BNI, BRI) atau e-wallet (GoPay, OVO, DANA)'
    },
    {
      '@type': 'HowToStep',
      'name': 'Beli USDT',
      'text': 'Beli USDT dengan IDR di exchange atau melalui P2P trading'
    },
    {
      '@type': 'HowToStep',
      'name': 'Konversi ke USDC',
      'text': 'Konversi USDT ke USDC secara gratis di exchange'
    },
    {
      '@type': 'HowToStep',
      'name': 'Tarik ke Wallet',
      'text': 'Tarik USDC ke wallet pribadi menggunakan jaringan Arbitrum untuk biaya terendah'
    }
  ],
  'tool': [
    {
      '@type': 'HowToTool',
      'name': 'Indodax'
    },
    {
      '@type': 'HowToTool',
      'name': 'Tokocrypto'
    },
    {
      '@type': 'HowToTool',
      'name': 'Binance P2P'
    }
  ],
  'supply': [
    {
      '@type': 'HowToSupply',
      'name': 'Rupiah Indonesia (IDR)'
    },
    {
      '@type': 'HowToSupply',
      'name': 'KTP atau dokumen identitas'
    }
  ]
};

export default function CaraMengubahIDRKeUSDC() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const t = translations[lang];
  const [selectedMethod, setSelectedMethod] = useState<'indodax' | 'tokocrypto' | 'binanceP2P'>('indodax');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const methods = [
    { id: 'indodax' as const, data: t.indodax, color: 'blue', tagColor: 'bg-blue-500/20 text-blue-400' },
    { id: 'tokocrypto' as const, data: t.tokocrypto, color: 'purple', tagColor: 'bg-purple-500/20 text-purple-400' },
    { id: 'binanceP2P' as const, data: t.binanceP2P, color: 'yellow', tagColor: 'bg-yellow-500/20 text-yellow-400' },
  ];

  const getSteps = () => {
    switch (selectedMethod) {
      case 'indodax': return t.indodaxSteps;
      case 'tokocrypto': return t.tokocryptoSteps;
      case 'binanceP2P': return t.binanceP2PSteps;
    }
  };

  const getMethodColor = () => {
    switch (selectedMethod) {
      case 'indodax': return { bg: 'bg-blue-500', border: 'border-blue-500/30', text: 'text-blue-400' };
      case 'tokocrypto': return { bg: 'bg-purple-500', border: 'border-purple-500/30', text: 'text-purple-400' };
      case 'binanceP2P': return { bg: 'bg-yellow-500', border: 'border-yellow-500/30', text: 'text-yellow-400' };
    }
  };

  const colors = getMethodColor();

  return (
    <div className="min-h-screen bg-gray-950">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background with Indonesia flag colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-gray-950 to-white/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        {/* Language Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <LanguageToggle
            currentLang={lang}
            nativeLang="id"
            nativeName="Bahasa"
            onToggle={(l) => setLang(l as 'id' | 'en')}
          />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{t.pageTitle}</span>
          </nav>

          {/* Badges */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">{t.badge}</span>
            <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">{t.fundingBadge}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-red-400 font-semibold mb-6">{t.heroSubtitle}</p>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            {t.heroDesc}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-900/80 border border-red-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statMinimumValue}</div>
              <div className="text-gray-400 text-sm">{t.statMinimum}</div>
            </div>
            <div className="bg-gray-900/80 border border-red-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statTimeValue}</div>
              <div className="text-gray-400 text-sm">{t.statTime}</div>
            </div>
            <div className="bg-gray-900/80 border border-red-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statFeesValue}</div>
              <div className="text-gray-400 text-sm">{t.statFees}</div>
            </div>
            <div className="bg-gray-900/80 border border-red-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{t.statMethodsValue}</div>
              <div className="text-gray-400 text-sm">{t.statMethods}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.compareTitle}</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.methodCol}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.feesCol}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.speedCol}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.minAmountCol}</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">{t.bestForCol}</th>
                </tr>
              </thead>
              <tbody>
                {methods.map(method => (
                  <tr key={method.id} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                    <td className="py-4 px-4">
                      <span className="text-white font-medium">{method.data.name}</span>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${method.tagColor}`}>
                        {method.data.rating}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{method.data.fees}</td>
                    <td className="py-4 px-4 text-gray-300">{method.data.speed}</td>
                    <td className="py-4 px-4 text-gray-300">{method.data.minAmount}</td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{method.data.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recommendation Box */}
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="text-red-400 text-sm">
              <strong>{t.recommendationTitle}:</strong> {t.recommendationText}
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">{t.paymentMethodsTitle}</h2>
          <p className="text-gray-400 mb-6">{t.paymentMethodsDesc}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Bank Transfers */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🏦</span>
                {t.bankTransfer}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {['BCA', 'Mandiri', 'BNI', 'BRI'].map(bank => (
                  <div key={bank} className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <span className="text-white font-medium">{bank}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* E-Wallets */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">📱</span>
                {t.eWallet}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {['GoPay', 'OVO', 'DANA'].map(wallet => (
                  <div key={wallet} className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <span className={`font-medium ${
                      wallet === 'GoPay' ? 'text-green-400' :
                      wallet === 'OVO' ? 'text-purple-400' :
                      'text-blue-400'
                    }`}>{wallet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Instructions */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.stepByStepTitle}</h2>

          {/* Method Selector */}
          <div className="flex flex-wrap gap-3 mb-8">
            {methods.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`px-5 py-3 rounded-xl font-medium transition-all ${
                  selectedMethod === method.id
                    ? method.color === 'yellow' ? 'bg-yellow-500 text-gray-900' :
                      method.color === 'blue' ? 'bg-blue-500 text-white' :
                      'bg-purple-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {method.data.name}
              </button>
            ))}
          </div>

          {/* Steps */}
          <div className={`bg-gray-900 ${colors.border} border-2 rounded-2xl p-6`}>
            <h3 className={`text-xl font-bold ${colors.text} mb-6`}>
              {methods.find(m => m.id === selectedMethod)?.data.name} - {methods.find(m => m.id === selectedMethod)?.data.rating}
            </h3>

            <div className="space-y-6">
              {getSteps().map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center ${selectedMethod === 'binanceP2P' ? 'text-gray-900' : 'text-white'} font-bold flex-shrink-0`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{step.desc}</p>
                    <p className="text-gray-500 text-xs">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Example Conversion */}
            <div className="mt-8 p-4 bg-gray-800 rounded-xl">
              <h4 className="text-white font-semibold mb-3">{t.exampleTitle}</h4>
              <div className="text-sm space-y-2">
                {t.exampleSteps.map((step, index) => (
                  <div key={index} className={`flex justify-between ${step.highlight ? 'text-white font-medium pt-2 border-t border-gray-700' : 'text-gray-300'}`}>
                    <span>{step.from}</span>
                    <span>{step.arrow ? '→' : ''}</span>
                    <span>{step.to}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.proTipsTitle}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.tips.map((tip, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-red-500/30 transition-colors">
                <div className="text-2xl mb-3">{tip.icon}</div>
                <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-400 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.faqTitle}</h2>

          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-red-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-red-500/20 to-white/5 border border-red-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/trade-us-stocks-from-indonesia"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-lg hover:from-red-400 hover:to-red-500 transition-all shadow-lg shadow-red-500/25"
              >
                {t.ctaButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/blog/trade-us-stocks-from-indonesia"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition-colors border border-gray-700"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Site Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.freeNotice} <span className="text-white font-medium">{t.freeNotice2}</span>{t.freeNotice3}
              <span className="text-cyan-400">{t.freeNotice4}</span>{t.freeNotice5}
              <span className="text-cyan-400">{t.freeNotice6}</span>{t.freeNotice7}
              <span className="text-green-400 font-semibold">{t.freeNotice8}</span>{t.freeNotice9}
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">{t.relatedTitle}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {t.relatedGuides.map((guide, i) => (
              <Link
                key={i}
                href={guide.href}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors"
              >
                <span className={`text-xs font-medium ${
                  i === 0 ? 'text-red-400' : i === 1 ? 'text-cyan-400' : 'text-yellow-400'
                }`}>{guide.tag}</span>
                <h3 className="text-white font-medium mt-1">{guide.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
