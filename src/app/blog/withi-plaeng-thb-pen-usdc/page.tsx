'use client';

import { useState } from 'react';
import Link from 'next/link';

// Translation object with Thai and English content
const translations = {
  th: {
    // Meta & Breadcrumb
    home: 'หน้าหลัก',
    blog: 'บล็อก',
    pageTitle: 'วิธีแปลง THB เป็น USDC',

    // Hero
    badge: 'คู่มือประเทศไทย',
    fundingBadge: 'คู่มือการฝากเงิน',
    heroTitle: 'วิธีแปลง THB เป็น USDC',
    heroSubtitle: 'คู่มือฉบับสมบูรณ์',
    heroDesc: 'คู่มือฉบับสมบูรณ์สำหรับการแปลงเงินบาทเป็น USDC เพื่อเทรด equity perps เปรียบเทียบวิธีการ ค่าธรรมเนียม และรับคำแนะนำทีละขั้นตอน',

    // Comparison Table
    compareTitle: 'เปรียบเทียบวิธีการ',
    methodCol: 'วิธีการ',
    feesCol: 'ค่าธรรมเนียม',
    speedCol: 'ความเร็ว',
    minAmountCol: 'ขั้นต่ำ',
    bestForCol: 'เหมาะสำหรับ',
    bestRates: 'เรทดีที่สุด',
    mostPopular: 'ยอดนิยมที่สุด',
    directUsdc: 'USDC โดยตรง',
    bitkubBestFor: 'ผู้เริ่มต้น, PromptPay',
    binanceBestFor: 'เรทดี, เทรดเดอร์ประจำ',
    satangBestFor: 'USDC โดยตรง, ง่าย',
    recommendation: 'คำแนะนำ:',
    recommendationText: 'ใช้ Bitkub สำหรับการเริ่มต้นที่ง่ายที่สุดด้วย PromptPay หรือ Binance P2P สำหรับเรทที่ดีที่สุด ซื้อ USDT ก่อน (ผู้ขายเยอะกว่า) แล้วแปลงเป็น USDC ฟรีบน Binance',

    // Step by Step Instructions
    instructionsTitle: 'คำแนะนำทีละขั้นตอน',

    // Bitkub Method
    bitkubTitle: 'วิธี Bitkub (ยอดนิยมที่สุด)',
    bitkubStep1Title: 'สร้างบัญชี Bitkub',
    bitkubStep1Desc: 'ไปที่ bitkub.com และสมัครสมาชิก ยืนยันตัวตน KYC ด้วยบัตรประชาชน',
    bitkubStep1Note: 'KYC ปกติใช้เวลา 1-24 ชั่วโมงในการยืนยัน',
    bitkubStep2Title: 'ฝากเงินบาทผ่าน PromptPay',
    bitkubStep2List: ['ไปที่ "กระเป๋า" → "ฝากบาท"', 'เลือก PromptPay เป็นวิธีการชำระเงิน', 'สแกน QR Code ด้วยแอปธนาคารของคุณ', 'เงินเข้าบัญชีทันที!'],
    bitkubStep2Note: 'PromptPay รองรับทุกธนาคารใหญ่: กสิกร, กรุงเทพ, ไทยพาณิชย์, กรุงไทย',
    bitkubStep3Title: 'ซื้อ USDT',
    bitkubStep3List: ['ไปที่ "ซื้อขาย" → ค้นหา "USDT/THB"', 'คลิก "ซื้อ" และใส่จำนวนเงินบาท', 'ยืนยันการซื้อ'],
    bitkubStep4Title: 'โอนไป Binance (ค่าธรรมเนียมต่ำ)',
    bitkubStep4List: ['สร้างบัญชี Binance ถ้ายังไม่มี', 'คัดลอกที่อยู่ USDT (TRC20) จาก Binance', 'ใน Bitkub ไปที่ "ถอน" → เลือก USDT', 'วางที่อยู่และเลือกเครือข่าย TRC20'],
    bitkubStep4Note: 'ค่าธรรมเนียมถอน USDT ผ่าน TRC20 ต่ำมาก (~1 USDT)',
    bitkubStep5Title: 'แปลง USDT เป็น USDC (ฟรี)',
    bitkubStep5List: ['บน Binance ไปที่ "Trade" → "Convert"', 'จาก: USDT → ไปยัง: USDC', 'ใส่จำนวนและคลิก "Preview Conversion"', 'ยืนยัน — ฟรีและทันที!'],
    bitkubStep6Title: 'ถอน USDC ไปกระเป๋าของคุณ',
    bitkubStep6List: ['ไปที่ "Wallet" → "Withdraw"', 'เลือก USDC', 'วางที่อยู่กระเป๋า Rabby ของคุณ', 'เลือกเครือข่าย: Arbitrum One (ค่าธรรมเนียมต่ำสุด ~$0.10)'],
    bitkubStep6Note: 'สำคัญ: ใช้เครือข่าย Arbitrum เสมอสำหรับค่าธรรมเนียมต่ำที่สุด เงินถึงใน 1-5 นาที',

    // Binance P2P Method
    binanceTitle: 'วิธี Binance P2P (เรทดีที่สุด)',
    binanceStep1Title: 'สร้างบัญชี Binance',
    binanceStep1Desc: 'ไปที่ binance.com และสมัครสมาชิก ยืนยันตัวตน KYC',
    binanceStep1Note: 'KYC ปกติใช้เวลา 10-30 นาทีในการยืนยัน',
    binanceStep2Title: 'ไปที่ P2P Trading',
    binanceStep2Desc: 'เปิดแอป Binance → คลิก "P2P" หรือไปที่ "Trade" → "P2P"',
    binanceStep2Note: 'P2P หมายถึงคุณซื้อโดยตรงจากผู้ใช้อื่น',
    binanceStep3Title: 'ซื้อ USDT ด้วย THB',
    binanceStep3List: ['เลือก Buy → USDT', 'เลือกวิธีชำระเงิน: PromptPay (เร็วที่สุด) หรือโอนผ่านธนาคาร', 'ใส่จำนวนเงินบาท', 'เลือกผู้ขายที่มีอัตราความสำเร็จสูง (98%+) และออเดอร์เยอะ', 'คลิก "Buy" และทำตามคำแนะนำการชำระเงิน'],
    binanceStep3Tip: 'ทำไมต้อง USDT ก่อน?',
    binanceStep3TipText: 'ผู้ขายเยอะกว่า = เรทดีกว่า คุณจะแปลงเป็น USDC ในขั้นตอนถัดไป (ฟรี)',
    binanceStep4Title: 'แปลง USDT เป็น USDC (ฟรี)',
    binanceStep4List: ['ไปที่ "Trade" → "Convert"', 'จาก: USDT → ไปยัง: USDC', 'ใส่จำนวนและคลิก "Preview Conversion"', 'ยืนยัน — ฟรีและทันที!'],
    binanceStep5Title: 'ถอน USDC ไปกระเป๋าของคุณ',
    binanceStep5List: ['ไปที่ "Wallet" → "Withdraw"', 'เลือก USDC', 'วางที่อยู่กระเป๋า Rabby ของคุณ', 'เลือกเครือข่าย: Arbitrum One (ค่าธรรมเนียมต่ำสุด ~$0.10)', 'ยืนยันด้วย 2FA'],
    binanceStep5Note: 'สำคัญ: ใช้เครือข่าย Arbitrum เสมอสำหรับค่าธรรมเนียมต่ำที่สุด',

    // Satang Pro Method
    satangTitle: 'วิธี Satang Pro (USDC โดยตรง)',
    satangStep1Title: 'สร้างบัญชี Satang Pro',
    satangStep1Desc: 'ดาวน์โหลดแอป Satang Pro หรือไปที่ satang.pro ยืนยันตัวตน KYC',
    satangStep2Title: 'ฝากเงินบาท',
    satangStep2List: ['ไปที่ "Wallet" → "Deposit THB"', 'เลือกโอนผ่านธนาคาร', 'โอนเงินตามรายละเอียดที่ให้มา'],
    satangStep2Note: 'รองรับธนาคารกสิกร, กรุงเทพ, ไทยพาณิชย์, กรุงไทย',
    satangStep3Title: 'ซื้อ USDC โดยตรง',
    satangStep3List: ['ไปที่ "Trade" → ค้นหา "USDC/THB"', 'ใส่จำนวนและซื้อ', 'คุณมี USDC โดยตรงแล้ว!'],
    satangStep4Title: 'ถอนไปกระเป๋า',
    satangStep4List: ['ไปที่ "Wallet" → "Withdraw"', 'เลือก USDC', 'ใส่ที่อยู่กระเป๋า Rabby ของคุณ', 'เลือกเครือข่าย Arbitrum ถ้ามี (หรือ Ethereum)'],
    satangNote: 'หมายเหตุ:',
    satangNoteText: 'Satang Pro เป็นวิธีที่ง่ายที่สุดแต่ค่าธรรมเนียมสูงกว่า เหมาะสำหรับจำนวนเงินน้อยหรือถ้าต้องการประสบการณ์ที่ง่ายที่สุด',

    // Example Calculation
    exampleTitle: 'ตัวอย่าง: แปลง ฿10,000',
    exampleFrom: '฿10,000 บาท',
    exampleTo: '~283 USDT (ที่ ฿35.3/USDT)',
    exampleConvert: '283 USDT → 283 USDC (แปลงฟรี)',
    exampleFee: 'ค่าธรรมเนียมถอน',
    exampleFeeValue: '~$0.10 (Arbitrum)',
    exampleReceive: 'คุณได้รับ',
    exampleReceiveValue: '~$282.90 USDC',

    // Payment Methods
    paymentTitle: 'วิธีชำระเงินที่รองรับ',
    paymentPromptPay: 'PromptPay',
    paymentPromptPayDesc: 'ฝากทันทีจากทุกธนาคารไทย สแกน QR Code ด้วยแอปธนาคาร',
    paymentKBank: 'ธนาคารกสิกรไทย',
    paymentKBankDesc: 'K PLUS app, โอนผ่านธนาคาร, บัตรเดบิต',
    paymentBBL: 'ธนาคารกรุงเทพ',
    paymentBBLDesc: 'Bualuang mBanking, โอนผ่านธนาคาร',
    paymentSCB: 'ธนาคารไทยพาณิชย์',
    paymentSCBDesc: 'SCB EASY app, โอนผ่านธนาคาร',
    paymentKTB: 'ธนาคารกรุงไทย',
    paymentKTBDesc: 'Krungthai NEXT app, โอนผ่านธนาคาร',

    // Pro Tips
    tipsTitle: 'เคล็ดลับสำหรับเทรดเดอร์ไทย',
    tip1Title: 'ใช้ PromptPay สำหรับการฝากทันที',
    tip1Desc: 'PromptPay เป็นวิธีที่เร็วที่สุด ฝากทันทีและใช้งานได้ทุกธนาคารใหญ่ในประเทศไทย ไม่มีค่าธรรมเนียมการโอน',
    tip2Title: 'ซื้อ USDT ก่อนเสมอ',
    tip2Desc: 'USDT มีสภาพคล่องมากกว่าและเรทดีกว่าในประเทศไทย ซื้อ USDT ก่อนแล้วแปลงเป็น USDC บน Binance (ฟรี)',
    tip3Title: 'เลือกผู้ขายที่ยืนยันแล้ว',
    tip3Desc: 'บน P2P มองหาผู้ขายที่มีอัตราความสำเร็จ 98%+ และออเดอร์ 500+ ออเดอร์มาก = น่าเชื่อถือกว่า',
    tip4Title: 'เก็บบันทึกการทำรายการ',
    tip4Desc: 'จับภาพหน้าจอการซื้อขาย P2P และการโอนทั้งหมด คุณจะต้องใช้สำหรับวัตถุประสงค์ด้านภาษีและในกรณีที่มีข้อพิพาท',
    tip5Title: 'เทรดในเวลาทำการธนาคาร',
    tip5Desc: 'การซื้อขาย P2P เร็วที่สุดเมื่อธนาคารไทยเปิด (9:00-18:00 น.) PromptPay ใช้ได้ 24/7 แต่การโอนผ่านธนาคารอาจช้าลงตอนกลางคืน',
    tip6Title: 'เริ่มต้นด้วยจำนวนน้อย',
    tip6Desc: 'สำหรับการทำธุรกรรมครั้งแรก เริ่มด้วย ฿1,000-2,000 เพื่อเรียนรู้กระบวนการ เมื่อสบายใจแล้วค่อยเพิ่มจำนวน',

    // CTA
    ctaTitle: 'พร้อมแปลงบาทแล้วหรือยัง?',
    ctaDesc: 'เมื่อคุณมี USDC ในกระเป๋าแล้ว คุณพร้อมที่จะเริ่มเทรดหุ้นสหรัฐ 24/7',
    ctaButton: 'ต่อไป: เริ่มเทรด',
    ctaWallet: 'ตั้งค่ากระเป๋าก่อน',

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
  },
  en: {
    // Meta & Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'Convert THB to USDC',

    // Hero
    badge: 'Thailand Guide',
    fundingBadge: 'Funding Guide',
    heroTitle: 'How to Convert THB to USDC',
    heroSubtitle: 'Complete Guide',
    heroDesc: 'The complete guide to converting Thai Baht to USDC for trading equity perps. Compare methods, fees, and get step-by-step instructions.',

    // Comparison Table
    compareTitle: 'Compare Methods',
    methodCol: 'Method',
    feesCol: 'Fees',
    speedCol: 'Speed',
    minAmountCol: 'Min Amount',
    bestForCol: 'Best For',
    bestRates: 'Best Rates',
    mostPopular: 'Most Popular',
    directUsdc: 'Direct USDC',
    bitkubBestFor: 'Beginners, PromptPay',
    binanceBestFor: 'Best rates, regular traders',
    satangBestFor: 'Direct USDC, simplicity',
    recommendation: 'Recommendation:',
    recommendationText: 'Use Bitkub for the easiest start with PromptPay, or Binance P2P for the best rates. Buy USDT first (more sellers), then convert to USDC for free on Binance.',

    // Step by Step Instructions
    instructionsTitle: 'Step-by-Step Instructions',

    // Bitkub Method
    bitkubTitle: 'Bitkub Method (Most Popular)',
    bitkubStep1Title: 'Create Bitkub Account',
    bitkubStep1Desc: 'Go to bitkub.com and sign up. Complete KYC verification with your Thai ID card.',
    bitkubStep1Note: 'KYC usually takes 1-24 hours to verify',
    bitkubStep2Title: 'Deposit THB via PromptPay',
    bitkubStep2List: ['Go to "Wallet" → "Deposit THB"', 'Select PromptPay as payment method', 'Scan QR code with your bank app', 'Funds arrive instantly!'],
    bitkubStep2Note: 'PromptPay supports all major Thai banks: Kasikorn, Bangkok Bank, SCB, Krungthai',
    bitkubStep3Title: 'Buy USDT',
    bitkubStep3List: ['Go to "Trade" → Search "USDT/THB"', 'Click "Buy" and enter THB amount', 'Confirm purchase'],
    bitkubStep4Title: 'Transfer to Binance (Low Fee)',
    bitkubStep4List: ['Create Binance account if you don\'t have one', 'Copy USDT address (TRC20) from Binance', 'In Bitkub go to "Withdraw" → Select USDT', 'Paste address and select TRC20 network'],
    bitkubStep4Note: 'USDT withdrawal via TRC20 has very low fees (~1 USDT)',
    bitkubStep5Title: 'Convert USDT to USDC (Free)',
    bitkubStep5List: ['On Binance go to "Trade" → "Convert"', 'From: USDT → To: USDC', 'Enter amount and click "Preview Conversion"', 'Confirm — this is free and instant!'],
    bitkubStep6Title: 'Withdraw USDC to Your Wallet',
    bitkubStep6List: ['Go to "Wallet" → "Withdraw"', 'Select USDC', 'Paste your Rabby wallet address', 'Select network: Arbitrum One (lowest fees ~$0.10)'],
    bitkubStep6Note: 'Important: Always use Arbitrum network for lowest fees. Funds arrive in 1-5 minutes.',

    // Binance P2P Method
    binanceTitle: 'Binance P2P Method (Best Rates)',
    binanceStep1Title: 'Create Binance Account',
    binanceStep1Desc: 'Go to binance.com and sign up. Complete KYC verification.',
    binanceStep1Note: 'KYC usually takes 10-30 minutes to verify',
    binanceStep2Title: 'Go to P2P Trading',
    binanceStep2Desc: 'Open Binance app → Click "P2P" or go to "Trade" → "P2P"',
    binanceStep2Note: 'P2P means you\'re buying directly from other users',
    binanceStep3Title: 'Buy USDT with THB',
    binanceStep3List: ['Select Buy → USDT', 'Choose payment method: PromptPay (fastest) or Bank Transfer', 'Enter amount in THB', 'Pick a seller with high completion rate (98%+) and many orders', 'Click "Buy" and follow payment instructions'],
    binanceStep3Tip: 'Why USDT first?',
    binanceStep3TipText: 'More sellers = better rates. You\'ll convert to USDC in the next step (free).',
    binanceStep4Title: 'Convert USDT to USDC (Free)',
    binanceStep4List: ['Go to "Trade" → "Convert"', 'From: USDT → To: USDC', 'Enter amount and click "Preview Conversion"', 'Confirm — this is free and instant!'],
    binanceStep5Title: 'Withdraw USDC to Your Wallet',
    binanceStep5List: ['Go to "Wallet" → "Withdraw"', 'Select USDC', 'Paste your Rabby wallet address', 'Select network: Arbitrum One (lowest fees ~$0.10)', 'Confirm with 2FA'],
    binanceStep5Note: 'Important: Always use Arbitrum network for lowest fees.',

    // Satang Pro Method
    satangTitle: 'Satang Pro Method (Direct USDC)',
    satangStep1Title: 'Create Satang Pro Account',
    satangStep1Desc: 'Download Satang Pro app or go to satang.pro. Complete KYC verification.',
    satangStep2Title: 'Deposit THB',
    satangStep2List: ['Go to "Wallet" → "Deposit THB"', 'Choose bank transfer', 'Transfer according to provided details'],
    satangStep2Note: 'Supports Kasikorn, Bangkok Bank, SCB, Krungthai',
    satangStep3Title: 'Buy USDC Directly',
    satangStep3List: ['Go to "Trade" → Search "USDC/THB"', 'Enter amount and buy', 'You now have USDC directly!'],
    satangStep4Title: 'Withdraw to Wallet',
    satangStep4List: ['Go to "Wallet" → "Withdraw"', 'Select USDC', 'Enter your Rabby wallet address', 'Select Arbitrum network if available (or Ethereum)'],
    satangNote: 'Note:',
    satangNoteText: 'Satang Pro is the simplest method but has higher fees. Good for small amounts or if you want the easiest experience.',

    // Example Calculation
    exampleTitle: 'Example: Converting ฿10,000',
    exampleFrom: '฿10,000 THB',
    exampleTo: '~283 USDT (at ฿35.3/USDT)',
    exampleConvert: '283 USDT → 283 USDC (free conversion)',
    exampleFee: 'Withdrawal fee',
    exampleFeeValue: '~$0.10 (Arbitrum)',
    exampleReceive: 'You receive',
    exampleReceiveValue: '~$282.90 USDC',

    // Payment Methods
    paymentTitle: 'Supported Payment Methods',
    paymentPromptPay: 'PromptPay',
    paymentPromptPayDesc: 'Instant deposits from any Thai bank. Scan QR with your bank app.',
    paymentKBank: 'Kasikorn Bank',
    paymentKBankDesc: 'K PLUS app, bank transfer, debit card',
    paymentBBL: 'Bangkok Bank',
    paymentBBLDesc: 'Bualuang mBanking, bank transfer',
    paymentSCB: 'SCB',
    paymentSCBDesc: 'SCB EASY app, bank transfer',
    paymentKTB: 'Krungthai Bank',
    paymentKTBDesc: 'Krungthai NEXT app, bank transfer',

    // Pro Tips
    tipsTitle: 'Pro Tips for Thai Traders',
    tip1Title: 'Use PromptPay for Instant Deposits',
    tip1Desc: 'PromptPay is the fastest method. Instant deposits and works with all major Thai banks. No transfer fees.',
    tip2Title: 'Always Buy USDT First',
    tip2Desc: 'USDT has more liquidity and better rates in Thailand. Buy USDT first, then convert to USDC on Binance (free).',
    tip3Title: 'Pick Verified Sellers',
    tip3Desc: 'On P2P, look for sellers with 98%+ completion rate and 500+ orders. Higher order count = more reliable.',
    tip4Title: 'Keep Transaction Records',
    tip4Desc: 'Screenshot all P2P trades and transfers. You\'ll need these for tax purposes and in case of any disputes.',
    tip5Title: 'Trade During Banking Hours',
    tip5Desc: 'P2P trades are fastest when Thai banks are open (9am-6pm). PromptPay works 24/7 but bank transfers may be slower at night.',
    tip6Title: 'Start with Small Amounts',
    tip6Desc: 'For your first transaction, start with ฿1,000-2,000 to learn the process. Once comfortable, increase amounts.',

    // CTA
    ctaTitle: 'Ready to Convert THB?',
    ctaDesc: 'Once you have USDC in your wallet, you\'re ready to start trading US stocks 24/7.',
    ctaButton: 'Continue: Start Trading',
    ctaWallet: 'Set Up Wallet First',

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
  }
};

const methods = [
  {
    id: 'bitkub',
    name: 'Bitkub',
    color: 'blue',
    rating: 'mostPopular',
    fees: '~0.25%',
    speed: '5-30 min',
    minAmount: '฿100',
  },
  {
    id: 'binance',
    name: 'Binance P2P',
    color: 'yellow',
    rating: 'bestRates',
    fees: '~0.1-0.5%',
    speed: '5-15 min',
    minAmount: '฿500',
  },
  {
    id: 'satang',
    name: 'Satang Pro',
    color: 'purple',
    rating: 'directUsdc',
    fees: '~1-2%',
    speed: '15-45 min',
    minAmount: '฿100',
  },
];

export default function ConvertTHBtoUSDC() {
  const [lang, setLang] = useState<'th' | 'en'>('th');
  const [selectedMethod, setSelectedMethod] = useState('bitkub');
  const t = translations[lang];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'วิธีแปลง THB เป็น USDC',
    description: 'คู่มือฉบับสมบูรณ์สำหรับการแปลงเงินบาทไทยเป็น USDC สำหรับการเทรด equity perps เปรียบเทียบ Bitkub, Binance P2P และ Satang Pro',
    inLanguage: 'th-TH',
    totalTime: 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'THB',
      value: '100'
    },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'สร้างบัญชีที่ Bitkub หรือ Binance',
        text: 'สมัครสมาชิกและยืนยันตัวตน KYC ด้วยบัตรประชาชนไทย'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'ฝากเงินบาทผ่าน PromptPay',
        text: 'ใช้ PromptPay สำหรับการฝากทันที หรือโอนผ่านธนาคารกสิกร กรุงเทพ ไทยพาณิชย์ หรือกรุงไทย'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'ซื้อ USDT',
        text: 'ซื้อ USDT ด้วยเงินบาท USDT มีสภาพคล่องมากกว่าในประเทศไทย'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'แปลง USDT เป็น USDC',
        text: 'บน Binance แปลง USDT เป็น USDC ฟรีผ่านฟีเจอร์ Convert'
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'ถอน USDC ไปกระเป๋าของคุณ',
        text: 'ถอน USDC ไปยังกระเป๋า Rabby ของคุณผ่านเครือข่าย Arbitrum สำหรับค่าธรรมเนียมต่ำที่สุด'
      }
    ],
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Bitkub - ตลาดแลกเปลี่ยนคริปโตไทยที่ได้รับความนิยมมากที่สุด'
      },
      {
        '@type': 'HowToTool',
        name: 'Binance P2P - เรทดีที่สุด'
      },
      {
        '@type': 'HowToTool',
        name: 'Satang Pro - ซื้อ USDC โดยตรง'
      },
      {
        '@type': 'HowToTool',
        name: 'PromptPay - ระบบชำระเงินทันทีของไทย'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero - Thailand Flag Colors */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-gray-950 to-red-600/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />

        {/* Language Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-gray-800/70 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('th')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                lang === 'th'
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              ไทย
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{t.pageTitle}</span>
          </nav>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">Thailand</span>
            <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">{t.fundingBadge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {t.heroTitle}
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-8 px-4">
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
                      <span className="text-white font-medium">{method.name}</span>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                        method.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        method.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {t[method.rating as keyof typeof t] as string}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{method.fees}</td>
                    <td className="py-4 px-4 text-gray-300">{method.speed}</td>
                    <td className="py-4 px-4 text-gray-300">{method.minAmount}</td>
                    <td className="py-4 px-4 text-gray-400 text-sm">
                      {method.id === 'bitkub' && t.bitkubBestFor}
                      {method.id === 'binance' && t.binanceBestFor}
                      {method.id === 'satang' && t.satangBestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <p className="text-blue-400 text-sm">
              <strong>{t.recommendation}</strong> {t.recommendationText}
            </p>
          </div>
        </div>
      </section>

      {/* Method Selector */}
      <section className="py-8 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.instructionsTitle}</h2>

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
                {method.name}
              </button>
            ))}
          </div>

          {/* Bitkub Instructions */}
          {selectedMethod === 'bitkub' && (
            <div className="bg-gray-900 border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-6">{t.bitkubTitle}</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.bitkubStep1Title}</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      {t.bitkubStep1Desc}
                    </p>
                    <p className="text-gray-500 text-xs">{t.bitkubStep1Note}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.bitkubStep2Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.bitkubStep2List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 p-3 bg-blue-500/10 rounded-lg">
                      <p className="text-blue-400 text-xs">{t.bitkubStep2Note}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.bitkubStep3Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.bitkubStep3List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.bitkubStep4Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.bitkubStep4List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 p-3 bg-blue-500/10 rounded-lg">
                      <p className="text-blue-400 text-xs">{t.bitkubStep4Note}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.bitkubStep5Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.bitkubStep5List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">6</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.bitkubStep6Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.bitkubStep6List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 p-3 bg-green-500/10 rounded-lg">
                      <p className="text-green-400 text-xs">
                        <strong>{t.bitkubStep6Note}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{t.exampleTitle}</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between text-gray-300">
                    <span>{t.exampleFrom}</span>
                    <span className="text-gray-500">→</span>
                    <span>{t.exampleTo}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>{t.exampleConvert}</span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>{t.exampleFee}</span>
                    <span></span>
                    <span>{t.exampleFeeValue}</span>
                  </div>
                  <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700">
                    <span>{t.exampleReceive}</span>
                    <span></span>
                    <span>{t.exampleReceiveValue}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Binance P2P Instructions */}
          {selectedMethod === 'binance' && (
            <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-6">{t.binanceTitle}</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.binanceStep1Title}</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      {t.binanceStep1Desc}
                    </p>
                    <p className="text-gray-500 text-xs">{t.binanceStep1Note}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.binanceStep2Title}</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      {t.binanceStep2Desc}
                    </p>
                    <p className="text-gray-500 text-xs">{t.binanceStep2Note}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.binanceStep3Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.binanceStep3List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 p-3 bg-yellow-500/10 rounded-lg">
                      <p className="text-yellow-400 text-xs">
                        <strong>{t.binanceStep3Tip}</strong> {t.binanceStep3TipText}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.binanceStep4Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.binanceStep4List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-gray-900 font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.binanceStep5Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.binanceStep5List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 p-3 bg-green-500/10 rounded-lg">
                      <p className="text-green-400 text-xs">
                        <strong>{t.binanceStep5Note}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{t.exampleTitle}</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between text-gray-300">
                    <span>{t.exampleFrom}</span>
                    <span className="text-gray-500">→</span>
                    <span>{t.exampleTo}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>{t.exampleConvert}</span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>{t.exampleFee}</span>
                    <span></span>
                    <span>{t.exampleFeeValue}</span>
                  </div>
                  <div className="flex justify-between text-white font-medium pt-2 border-t border-gray-700">
                    <span>{t.exampleReceive}</span>
                    <span></span>
                    <span>{t.exampleReceiveValue}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Satang Pro Instructions */}
          {selectedMethod === 'satang' && (
            <div className="bg-gray-900 border border-purple-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-6">{t.satangTitle}</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.satangStep1Title}</h4>
                    <p className="text-gray-400 text-sm">
                      {t.satangStep1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.satangStep2Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.satangStep2List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 p-3 bg-purple-500/10 rounded-lg">
                      <p className="text-purple-400 text-xs">{t.satangStep2Note}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.satangStep3Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.satangStep3List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t.satangStep4Title}</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {t.satangStep4List.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <p className="text-yellow-400 text-sm">
                  <strong>{t.satangNote}</strong> {t.satangNoteText}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.paymentTitle}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* PromptPay */}
            <div className="bg-gray-900 border border-blue-500/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{t.paymentPromptPay}</h3>
                  <span className="text-xs text-green-400">Instant</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{t.paymentPromptPayDesc}</p>
            </div>

            {/* Kasikorn Bank */}
            <div className="bg-gray-900 border border-green-500/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 font-bold">K</div>
                <div>
                  <h3 className="text-white font-semibold">{t.paymentKBank}</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{t.paymentKBankDesc}</p>
            </div>

            {/* Bangkok Bank */}
            <div className="bg-gray-900 border border-blue-500/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold">BBL</div>
                <div>
                  <h3 className="text-white font-semibold">{t.paymentBBL}</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{t.paymentBBLDesc}</p>
            </div>

            {/* SCB */}
            <div className="bg-gray-900 border border-purple-500/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">SCB</div>
                <div>
                  <h3 className="text-white font-semibold">{t.paymentSCB}</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{t.paymentSCBDesc}</p>
            </div>

            {/* Krungthai Bank */}
            <div className="bg-gray-900 border border-cyan-500/30 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">KTB</div>
                <div>
                  <h3 className="text-white font-semibold">{t.paymentKTB}</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{t.paymentKTBDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">{t.tipsTitle}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t.tip1Title}</h3>
              <p className="text-gray-400 text-sm">{t.tip1Desc}</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t.tip2Title}</h3>
              <p className="text-gray-400 text-sm">{t.tip2Desc}</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t.tip3Title}</h3>
              <p className="text-gray-400 text-sm">{t.tip3Desc}</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t.tip4Title}</h3>
              <p className="text-gray-400 text-sm">{t.tip4Desc}</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t.tip5Title}</h3>
              <p className="text-gray-400 text-sm">{t.tip5Desc}</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{t.tip6Title}</h3>
              <p className="text-gray-400 text-sm">{t.tip6Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500/20 to-red-500/20 border border-red-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/trade-us-stocks-from-thailand"
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
                {t.ctaWallet}
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
