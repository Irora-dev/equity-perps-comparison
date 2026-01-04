'use client';

import { useState } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';
import { LanguageToggle } from '@/components/LanguageToggle';

// Translation object with Thai and English content
const translations = {
  th: {
    // Breadcrumbs
    home: 'หน้าหลัก',
    learn: 'เรียนรู้',
    breadcrumb: 'Equity Perpetuals คืออะไร',

    // Hero
    badge: 'คู่มือเริ่มต้น',
    title: 'Equity Perpetuals',
    titleHighlight: 'คืออะไร?',
    subtitle: 'ลองคิดว่าเทรด',
    subtitleStocks: 'Tesla, Nvidia, และ Apple',
    subtitleTime: 'ตอนตี 2 วันเสาร์',
    subtitleLeverage: 'ด้วย 50x leverage',
    subtitleEnd: 'ไม่ต้องมีโบรกเกอร์ ไม่ต้องรออนุมัติ แค่คุณกับตลาด',

    // Quick Stats
    stat1Value: '24',
    stat1Label: 'ชั่วโมงต่อวัน',
    stat1Sub: '7 วันต่อสัปดาห์',
    stat2Value: '200x',
    stat2Label: 'เลเวอเรจสูงสุด',
    stat2Sub: 'ใช้ทุนน้อย',
    stat3Value: '50+',
    stat3Label: 'หุ้นให้เทรด',
    stat3Sub: 'หุ้นสหรัฐชั้นนำ',

    // CTA Buttons
    learnMore: 'เรียนรู้เพิ่มเติม',
    startTrading: 'เริ่มเทรดเลย',

    // Simple Explanation
    simpleTitle: 'คำอธิบาย',
    simpleTitleHighlight: 'แบบง่าย',
    simpleDesc: 'Equity perpetual คือสัญญาที่ติดตามราคาหุ้น แค่นั้นเอง',
    thinkOfIt: 'ลองคิดแบบนี้:',
    step1: 'คุณคิดว่า',
    step1Bold: 'NVDA จะขึ้น',
    step2: 'คุณเปิด',
    step2Bold: 'long position',
    step2End: 'ด้วย $100',
    step3: 'ด้วย 10x leverage คุณคุมสถานะ',
    step3Bold: '$1,000',
    step4: 'NVDA ขึ้น 5% = คุณได้',
    step4Bold: '$50 (50% กำไร)',
    positionLabel: 'สถานะของคุณ',
    marginLabel: 'มาร์จิ้น',
    positionSizeLabel: 'ขนาดสถานะ',
    unrealizedLabel: 'กำไร/ขาดทุนยังไม่ปิด',
    neverExpire: 'ไม่เหมือน futures ทั่วไป perpetuals',
    neverExpireBold: 'ไม่มีวันหมดอายุ',
    neverExpireEnd: 'ถือได้ 5 นาที หรือ 5 เดือน',

    // Benefits
    benefitsTitle: 'ทำไมเทรดเดอร์',
    benefitsTitleHighlight: 'เปลี่ยนมาใช้',
    benefitsDesc: 'Equity perps แก้ปัญหาใหญ่ที่สุดของการเทรดหุ้นแบบเดิม',

    benefit1Title: 'เทรด 24/7',
    benefit1Desc: 'ตลาดไม่เคยปิด เทรด Tesla ตอนเที่ยงคืน Apple วันอาทิตย์ Nvidia วันคริสต์มาส ตอบสนองข่าวได้ทันที ไม่ต้องรอเช้าวันรุ่งขึ้น',

    benefit2Title: 'เลเวอเรจสูงถึง 200x',
    benefit2Desc: 'คุมหุ้น $10,000 ด้วย $50 ขยายกำไร (และขาดทุน) ใช้ทุนอย่างมีประสิทธิภาพกว่าบัญชี margin แบบเดิมมาก',

    benefit3Title: 'ขายชอร์ตง่าย',
    benefit3Desc: 'คิดว่าหุ้นจะลง? ชอร์ตได้ทันที ไม่ต้องยืมหุ้น ไม่มีค่าธรรมเนียมหุ้นหายาก ไม่มีข้อจำกัด แค่กด sell',

    benefit4Title: 'ไม่ต้อง KYC',
    benefit4Desc: 'ไม่ต้องอัปโหลดบัตรประชาชน ไม่ต้องรออนุมัติ ไม่มีการเก็บข้อมูลส่วนตัว เชื่อมต่อ wallet แล้วเริ่มเทรดได้ในไม่กี่นาที',

    benefit5Title: 'เก็บเงินเอง',
    benefit5Desc: 'เงินอยู่ใน wallet ของคุณ ไม่มีโบรกเกอร์ถือเงิน ไม่มีการอายัด ไม่มีขีดจำกัดการถอน คุณควบคุมทรัพย์สินเอง',

    benefit6Title: 'ชำระทันที',
    benefit6Desc: 'ไม่ต้องรอ T+2 กำไรพร้อมใช้งานทันที ปิดสถานะแล้วถอนเข้า wallet ได้ในไม่กี่วินาที',

    // How It Works
    howTitle: 'มันทำงาน',
    howTitleHighlight: 'ยังไง',
    howDesc: 'กลไกเบื้องหลัง equity perpetuals อธิบายง่ายๆ',

    how1Title: 'ออราเคิล (Oracle) ป้อนราคา',
    how1Desc: 'Equity perps ติดตามราคาหุ้นจริงโดยใช้',
    how1Bold: 'ออราเคิล',
    how1Desc2: '- บริการที่ดึงข้อมูลราคาสดจากตลาดหุ้นมาบนบล็อกเชน ผู้ให้บริการอย่าง Pyth รวบรวมราคาจากหลายแหล่งเพื่อความแม่นยำ',
    how1Check: 'อัปเดตทุกวินาทีในช่วงตลาดเปิด',

    how2Title: 'Funding Rate รักษาราคาให้ตรง',
    how2Desc: 'ทุก 1-8 ชั่วโมง เทรดเดอร์จ่ายหรือรับ',
    how2Bold: 'funding',
    how2Desc2: 'ขึ้นอยู่กับว่าราคา perp อยู่สูงหรือต่ำกว่าราคาออราเคิล ถ้า perp เทรดสูงกว่า spot คนถือ long จ่ายให้คน short (ดันราคาลง) ทำให้ราคา perp ตามราคาหุ้นจริงอย่างใกล้ชิด',
    how2PerpAbove: 'Perp > Spot',
    how2LongPay: 'Long จ่าย Short',
    how2PerpBelow: 'Perp < Spot',
    how2ShortPay: 'Short จ่าย Long',

    how3Title: 'เลเวอเรจ และ Liquidation',
    how3Desc: 'มาร์จิ้น',
    how3Desc2: 'ของคุณคือหลักประกันค้ำสถานะ ด้วย 10x leverage การเคลื่อนไหวผิดทาง 10% จะล้างมาร์จิ้นหมด ก่อนจะเกิดขึ้น คุณจะถูก',
    how3Bold: 'liquidate',
    how3Desc3: '- สถานะถูกปิดอัตโนมัติเพื่อป้องกันขาดทุนเพิ่ม',
    how3Tip: 'เคล็ดลับ:',
    how3TipText: 'เริ่มด้วย 2-5x leverage มือใหม่หลายคนใช้ 20x+ แล้วโดน liquidate จากความผันผวนปกติ leverage ต่ำ = พื้นที่ผิดพลาดมากขึ้น',

    // Getting Started
    getStartedBadge: 'น้อยกว่า 10 นาที',
    getStartedTitle: 'เริ่มต้นใน',
    getStartedTitleHighlight: '3 ขั้นตอนง่ายๆ',
    getStartedDesc: 'ไม่ต้องกรอกใบสมัคร ไม่ต้องรออนุมัติ ไม่มีขั้นต่ำ',

    step1Title: 'ตั้งค่า Digital Wallet',
    step1Desc: 'ฟรี ใช้เวลา 2 นาที ทำครั้งเดียว',
    step1ShowDetails: 'แสดงรายละเอียด',
    step1HideDetails: 'ซ่อนรายละเอียด',

    walletExplainTitle: 'Digital wallet คืออะไร?',
    walletExplainDesc: 'คิดว่ามันเหมือน',
    walletExplainBold: 'บัญชีธนาคารดิจิทัลที่คุณควบคุมเอง',
    walletExplainDesc2: 'แทนที่ธนาคารจะถือเงิน คุณถือเองโดยใช้ส่วนขยายเบราว์เซอร์ง่ายๆ',
    walletFeature1: 'คุณควบคุมเอง',
    walletFeature2: 'ฟรีทั้งหมด',
    walletFeature3: 'ตั้งค่า 2 นาที',
    walletFeature4: 'ใช้งานได้ทั่วโลก',
    walletSetupTitle: 'วิธีตั้งค่า:',
    walletStep1: 'ไปที่',
    walletStep1Link: 'rabby.io',
    walletStep1End: '(wallet ที่เราแนะนำ)',
    walletStep2: 'คลิก "Download" และเพิ่มลงเบราว์เซอร์ (Chrome, Firefox ฯลฯ)',
    walletStep3: 'คลิก "Create New Wallet" และตั้งรหัสผ่าน',
    walletStep4Bold: 'เขียน recovery phrase 12 คำของคุณ',
    walletStep4Warning: 'นี่คือรหัสผ่านหลัก - เก็บไว้อย่างปลอดภัยและอย่าแชร์!',
    walletVideoTitle: 'ดู: คู่มือตั้งค่า 2 นาที',
    walletVideoDesc: 'วิดีโอนี้จะพาคุณผ่านทุกขั้นตอน ทำตามแล้ว wallet จะพร้อมใช้งานในเวลาไม่นาน',
    downloadRabby: 'ดาวน์โหลด Rabby',

    step2Title: 'เติมเงินด้วย USDC',
    step2Desc: 'โอนจาก Binance, Bitkub หรือใช้บัตร',

    fundCoinbase: 'จาก Coinbase',
    fundCoinbaseSteps: ['ไปที่ Send/Receive', 'เลือก USDC', 'วางที่อยู่ Rabby ของคุณ', 'เลือกเครือข่าย Arbitrum', 'ยืนยันการส่ง'],
    fundCoinbaseFee: 'ค่าธรรมเนียม: ~$0.10 บน Arbitrum',

    fundBinance: 'จาก Binance',
    fundBinanceSteps: ['ไปที่ Wallet -> Withdraw', 'เลือก USDC', 'วางที่อยู่ Rabby ของคุณ', 'Network: Arbitrum', 'ยืนยันด้วย 2FA'],
    fundBinanceFee: 'ค่าธรรมเนียม: ~$0.50',

    fundBitkub: 'จาก Bitkub',
    fundBitkubSteps: ['ฝาก THB ผ่าน PromptPay', 'ซื้อ USDT แล้วโอนไป Binance', 'แปลง USDT -> USDC', 'ถอนไปยัง Rabby (Arbitrum)'],
    fundBitkubFee: 'รวมค่าธรรมเนียม: ~$1-3',

    fundTip: 'เคล็ดลับ:',
    fundTipText: 'ใช้เครือข่าย Arbitrum เสมอเพื่อค่าธรรมเนียมต่ำสุด เริ่มด้วย $50-100 เพื่อทดสอบ เงินมาถึงใน 1-5 นาที',

    step3Title: 'เลือกแพลตฟอร์มและเทรด',
    step3Desc: 'เลือกแพลตฟอร์ม equity perps - เราแนะนำ Hyperliquid สำหรับมือใหม่',
    tradeStep1: 'ไปที่',
    tradeStep1Link: 'app.hyperliquid.xyz',
    tradeStep2: 'คลิก "Connect" และเลือก Rabby Wallet',
    tradeStep3: 'ฝาก USDC ของคุณเข้าแพลตฟอร์ม',
    tradeStep4: 'ค้นหาหุ้น (เช่น NVDA-PERP)',
    tradeStep5: 'เลือก Long หรือ Short ตั้ง leverage แล้วเทรด!',
    openHyperliquid: 'เปิด Hyperliquid',
    popularPlatform: 'แพลตฟอร์มยอดนิยม',

    fullGuideLink: 'อ่านคู่มือตั้งค่า wallet ฉบับเต็ม',

    // Risks
    risksTitle: 'เข้าใจความเสี่ยง',
    risk1Bold: 'เลเวอเรจขยายขาดทุน',
    risk1Text: '- 10x ที่เปลี่ยน 5% เป็นกำไร 50% ก็เปลี่ยน 5% ขาดทุนเป็น 50% ขาดทุนเหมือนกัน',
    risk2Bold: 'Liquidation เกิดขึ้นจริง',
    risk2Text: '- สถานะถูกปิดอัตโนมัติถ้าเคลื่อนไหวผิดทางมากพอ',
    risk3Bold: 'Funding rates มีค่าใช้จ่าย',
    risk3Text: '- การถือสถานะมีค่าใช้จ่ายทุกไม่กี่ชั่วโมง โดยเฉพาะเทรดที่นิยม',
    risk4Bold: 'ไม่ได้เป็นเจ้าของ',
    risk4Text: '- คุณเทรดการเปิดรับราคา ไม่ใช่หุ้นจริง ไม่มีเงินปันผล ไม่มีสิทธิ์ลงคะแนน',

    // CTA
    ctaTitle: 'พร้อมลองแล้ว?',
    ctaDesc: 'เริ่มด้วย $50 และ leverage ต่ำ ดูว่าการเทรดหุ้น 24/7 เป็นยังไง',
    ctaButton: 'เริ่มที่ Hyperliquid',
    ctaCompare: 'เปรียบเทียบทุกแพลตฟอร์ม',
    ctaThailand: 'คู่มือเทรดจากประเทศไทย',

    // FAQ
    faqTitle: 'คำถามที่พบบ่อย',
    faqs: [
      {
        question: 'Equity perps ต่างจากการเทรดหุ้นปกติยังไง?',
        answer: 'Equity perps ให้คุณเทรดด้วย leverage (สูงถึง 200x), 24/7 โดยไม่ต้องเป็นเจ้าของหุ้นจริง หุ้นปกติต้องใช้ทุนเต็ม เทรดได้เฉพาะเวลาตลาดเปิด และให้สิทธิ์ความเป็นเจ้าของเช่น เงินปันผล และสิทธิ์ลงคะแนน'
      },
      {
        question: 'ต้องใช้เงินเท่าไหร่เริ่มเทรด equity perps?',
        answer: 'คุณสามารถเริ่มด้วยเงินเพียง $10-50 บนแพลตฟอร์มส่วนใหญ่ อย่างไรก็ตาม เราแนะนำให้เริ่มด้วยอย่างน้อย $100-500 เพื่อมี margin เพียงพอและหลีกเลี่ยงการถูก liquidate ทันทีจากการเคลื่อนไหวราคาเล็กน้อย'
      },
      {
        question: 'Equity perps ถูกกฎหมายไหม?',
        answer: 'Equity perps อยู่ในพื้นที่กฎระเบียบสีเทา แพลตฟอร์มส่วนใหญ่เป็นแบบกระจายศูนย์และไม่ต้องการ KYC ความถูกกฎหมายแตกต่างกันตามเขตอำนาจศาล ผู้อาศัยในสหรัฐควรทราบว่าแพลตฟอร์มเหล่านี้มักดำเนินการนอกกรอบกฎระเบียบของสหรัฐ'
      },
      {
        question: 'ถ้าสถานะโดน liquidate จะเกิดอะไรขึ้น?',
        answer: 'เมื่อสถานะถูก liquidate margin ของคุณจะถูกใช้ปิดสถานะและครอบคลุมขาดทุน คุณสูญเสีย margin ที่ฝากไว้แต่ไม่ต้องเป็นหนี้เพิ่มเติม บางแพลตฟอร์มมีกองทุนประกันเพื่อป้องกันการแบ่งขาดทุน'
      },
      {
        question: 'เทรด equity perps วันหยุดได้ไหม?',
        answer: 'ได้! แพลตฟอร์มส่วนใหญ่เช่น Hyperliquid และ Lighter เปิดให้เทรด 24/7 อย่างไรก็ตาม ราคาอาจผันผวนน้อยกว่าในวันหยุดเพราะตลาดหุ้นแบบเดิมปิดและออราเคิลใช้ราคาปิดล่าสุด'
      },
      {
        question: 'Funding rates คืออะไรและสำคัญยังไง?',
        answer: 'Funding rates คือการจ่ายเงินระหว่างเทรดเดอร์ long และ short เป็นระยะๆ เพื่อรักษาราคา perp ให้ตรงกับราคา spot ถ้าคุณถือสถานะ คุณจะจ่ายหรือรับ funding ทุก 1-8 ชั่วโมงขึ้นอยู่กับแพลตฟอร์ม'
      }
    ],

    // Back Link
    backToCompare: 'เปรียบเทียบแพลตฟอร์ม',
  },
  en: {
    // Breadcrumbs
    home: 'Home',
    learn: 'Learn',
    breadcrumb: 'What Are Equity Perpetuals',

    // Hero
    badge: 'Beginner Guide',
    title: 'What Are',
    titleHighlight: 'Equity Perpetuals?',
    subtitle: 'Imagine trading',
    subtitleStocks: 'Tesla, Nvidia, and Apple',
    subtitleTime: 'at 2am on a Saturday',
    subtitleLeverage: 'with 50x leverage',
    subtitleEnd: 'No broker. No approval. Just you and the markets.',

    // Quick Stats
    stat1Value: '24',
    stat1Label: 'Hours a Day',
    stat1Sub: '7 days a week',
    stat2Value: '200x',
    stat2Label: 'Max Leverage',
    stat2Sub: 'Capital efficient',
    stat3Value: '50+',
    stat3Label: 'Stocks Available',
    stat3Sub: 'Top US equities',

    // CTA Buttons
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
    marginLabel: 'Margin',
    positionSizeLabel: 'Position Size',
    unrealizedLabel: 'Unrealized P&L',
    neverExpire: 'Unlike regular futures, perpetuals',
    neverExpireBold: 'never expire',
    neverExpireEnd: '. Hold for 5 minutes or 5 months.',

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
    howTitle: 'How It',
    howTitleHighlight: 'Actually',
    howDesc: 'The mechanics behind equity perpetuals in plain English',

    how1Title: 'Oracle Price Feeds',
    how1Desc: 'Equity perps track real stock prices using',
    how1Bold: 'oracles',
    how1Desc2: '- services that pull live price data from stock exchanges and deliver it on-chain. Providers like Pyth aggregate prices from multiple sources to ensure accuracy.',
    how1Check: 'Updated every second during market hours',

    how2Title: 'Funding Rates Keep Prices Aligned',
    how2Desc: 'Every 1-8 hours, traders pay or receive',
    how2Bold: 'funding',
    how2Desc2: 'based on whether the perp price is above or below the oracle price. If perps trade above spot, longs pay shorts (pushing price down). This keeps perp prices closely tracking real stock prices.',
    how2PerpAbove: 'Perp > Spot',
    how2LongPay: 'Longs pay shorts',
    how2PerpBelow: 'Perp < Spot',
    how2ShortPay: 'Shorts pay longs',

    how3Title: 'Leverage & Liquidation',
    how3Desc: 'Your',
    how3Desc2: 'is the collateral backing your position. With 10x leverage, a 10% adverse move would wipe out your margin. Before that happens, you get',
    how3Bold: 'liquidated',
    how3Desc3: '- your position is automatically closed to prevent further losses.',
    how3Tip: 'Pro tip:',
    how3TipText: 'Start with 2-5x leverage. Many beginners use 20x+ and get liquidated on normal volatility. Lower leverage = more room to be wrong.',

    // Getting Started
    getStartedBadge: 'Less Than 10 Minutes',
    getStartedTitle: 'Get Set Up in',
    getStartedTitleHighlight: '3 Simple Steps',
    getStartedDesc: 'No application forms. No approval wait. No minimum balance.',

    step1Title: 'Set Up Your Digital Wallet',
    step1Desc: 'Free, takes 2 minutes, and you only do this once',
    step1ShowDetails: 'Show Details',
    step1HideDetails: 'Hide Details',

    walletExplainTitle: 'What is a digital wallet?',
    walletExplainDesc: 'Think of it like a',
    walletExplainBold: 'digital bank account you fully control',
    walletExplainDesc2: '. Instead of a bank holding your money, you hold it yourself using a simple browser extension.',
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
    walletStep4Bold: 'Write down your 12-word recovery phrase',
    walletStep4Warning: 'This is like a master password - keep it safe and never share it!',
    walletVideoTitle: 'Watch: 2-Minute Setup Guide',
    walletVideoDesc: 'This video walks you through every step. Follow along and you\'ll have your wallet ready in no time.',
    downloadRabby: 'Download Rabby',

    step2Title: 'Fund with USDC',
    step2Desc: 'Transfer from Coinbase, Binance, or Bitkub - or use card',

    fundCoinbase: 'From Coinbase',
    fundCoinbaseSteps: ['Go to Send/Receive', 'Select USDC', 'Paste your Rabby address', 'Choose Arbitrum network', 'Confirm send'],
    fundCoinbaseFee: 'Fee: ~$0.10 on Arbitrum',

    fundBinance: 'From Binance',
    fundBinanceSteps: ['Go to Wallet -> Withdraw', 'Select USDC', 'Paste your Rabby address', 'Network: Arbitrum', 'Confirm with 2FA'],
    fundBinanceFee: 'Fee: ~$0.50',

    fundBitkub: 'From Bitkub',
    fundBitkubSteps: ['Deposit THB via PromptPay', 'Buy USDT then transfer to Binance', 'Convert USDT -> USDC', 'Withdraw to Rabby (Arbitrum)'],
    fundBitkubFee: 'Total fees: ~$1-3',

    fundTip: 'Pro tip:',
    fundTipText: 'Always use Arbitrum network for lowest fees. Start with $50-100 to test. Funds arrive in 1-5 minutes.',

    step3Title: 'Choose a Platform & Start Trading',
    step3Desc: 'Pick an equity perps venue - we recommend Hyperliquid for beginners',
    tradeStep1: 'Go to',
    tradeStep1Link: 'app.hyperliquid.xyz',
    tradeStep2: 'Click "Connect" and select Rabby Wallet',
    tradeStep3: 'Deposit your USDC to the platform',
    tradeStep4: 'Search for a stock (e.g., NVDA-PERP)',
    tradeStep5: 'Choose Long or Short, set leverage, and trade!',
    openHyperliquid: 'Open Hyperliquid',
    popularPlatform: 'Most popular platform',

    fullGuideLink: 'Read the complete wallet setup guide',

    // Risks
    risksTitle: 'Understand the Risks',
    risk1Bold: 'Leverage amplifies losses',
    risk1Text: '- The same 10x that turns 5% into 50% gains also turns 5% losses into 50% losses',
    risk2Bold: 'Liquidation is real',
    risk2Text: '- Your position can be closed automatically if it moves against you enough',
    risk3Bold: 'Funding rates cost money',
    risk3Text: '- Holding positions costs money every few hours, especially on popular trades',
    risk4Bold: 'No ownership',
    risk4Text: '- You\'re trading price exposure, not actual shares. No dividends, no voting rights',

    // CTA
    ctaTitle: 'Ready to Try It?',
    ctaDesc: 'Start with $50 and low leverage. See what 24/7 stock trading feels like.',
    ctaButton: 'Start on Hyperliquid',
    ctaCompare: 'Compare All Platforms',
    ctaThailand: 'Thailand Trading Guide',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is the difference between equity perps and regular stock trading?',
        answer: 'Equity perps let you trade with leverage (up to 200x), 24/7, without owning actual shares. Regular stocks require full capital, trade only during market hours, and give you ownership rights like dividends and voting.'
      },
      {
        question: 'How much money do I need to start trading equity perps?',
        answer: 'You can start with as little as $10-50 on most platforms. However, we recommend starting with at least $100-500 to have adequate margin and avoid immediate liquidation on small price moves.'
      },
      {
        question: 'Are equity perps legal?',
        answer: 'Equity perps exist in a regulatory gray area. Most platforms are decentralized and don\'t require KYC. Legality varies by jurisdiction. US residents should be aware these platforms typically operate outside US regulatory frameworks.'
      },
      {
        question: 'What happens if my position gets liquidated?',
        answer: 'When your position is liquidated, your margin is used to close the position and cover losses. You lose your deposited margin but won\'t owe additional money. Some platforms have insurance funds to prevent socialized losses.'
      },
      {
        question: 'Can I trade equity perps on weekends?',
        answer: 'Yes, most platforms like Hyperliquid and Lighter offer 24/7 trading. However, prices may be less volatile on weekends since traditional stock markets are closed and oracles use the last closing price.'
      },
      {
        question: 'What are funding rates and why do they matter?',
        answer: 'Funding rates are periodic payments between long and short traders that keep perp prices aligned with spot prices. If you hold a position, you either pay or receive funding every 1-8 hours depending on the platform.'
      }
    ],

    // Back Link
    backToCompare: 'Compare platforms',
  }
};

export default function EquityPerpetualsKhueArai() {
  const [lang, setLang] = useState<'th' | 'en'>('th');
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [fundingExpanded, setFundingExpanded] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const t = translations[lang];
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Equity Perpetuals คืออะไร? คู่มือเริ่มต้นฉบับสมบูรณ์",
    "description": "เรียนรู้ว่า equity perpetuals คืออะไร ทำงานยังไง และทำไมเทรดเดอร์ถึงใช้มัน คู่มือภาษาไทยฉบับสมบูรณ์สำหรับมือใหม่",
    "author": { "@type": "Organization", "name": "Compare Equity Perps" },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString(),
    "inLanguage": "th",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://compareequityperps.com/blog/equity-perpetuals-khue-arai"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="min-h-screen">
        {/* HERO SECTION - Thailand Colors */}
        <section className="relative overflow-hidden">
          {/* Blue/Red/White Thailand-inspired Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Language Toggle */}
          <div className="absolute top-4 right-4 z-10">
            <LanguageToggle
              currentLang={lang}
              nativeLang="th"
              nativeName="ไทย"
              onToggle={(l) => setLang(l as 'th' | 'en')}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">{t.home}</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">{t.learn}</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-400">{t.breadcrumb}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                <span className="text-red-400 text-sm font-medium">🇹🇭 {t.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                {t.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-red-400">
                  {t.titleHighlight}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t.subtitle} <span className="text-white font-semibold">{t.subtitleStocks}</span>
                <span className="text-blue-400 font-semibold"> {t.subtitleTime}</span>
                <span className="text-red-400 font-semibold"> {t.subtitleLeverage}</span>. {t.subtitleEnd}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-gray-900/80 border border-blue-500/30 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">{t.stat1Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat1Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat1Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-white/20 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{t.stat2Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat2Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat2Sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-900/80 border border-red-500/30 rounded-xl px-4 py-3">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold text-red-400">{t.stat3Value}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.stat3Label}</div>
                    <div className="text-gray-500 text-sm">{t.stat3Sub}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#simple-explanation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-white to-red-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-blue-400 hover:to-red-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
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

        {/* SIMPLE EXPLANATION */}
        <section id="simple-explanation" className="py-20 px-4 bg-gray-950 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.simpleTitle} <span className="text-blue-400">{t.simpleTitleHighlight}</span> Explanation
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
                      <span className="text-blue-400 text-xl">1.</span>
                      <span>{t.step1} <strong className="text-white">{t.step1Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">2.</span>
                      <span>{t.step2} <strong className="text-white">{t.step2Bold}</strong> {t.step2End}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">3.</span>
                      <span>{t.step3} <strong className="text-white">{t.step3Bold}</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">4.</span>
                      <span>{t.step4} <strong className="text-green-400">{t.step4Bold}</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">{t.positionLabel}</div>
                    <div className="text-4xl font-black text-white mb-1">NVDA-PERP</div>
                    <div className="text-green-400 text-xl font-bold">Long 10x</div>
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
                        <span className="text-gray-500">{t.unrealizedLabel}</span>
                        <span className="text-green-400">+$50.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-8">
              {t.neverExpire} <strong className="text-white">{t.neverExpireBold}</strong>{t.neverExpireEnd}
            </p>
          </div>
        </section>

        {/* BENEFITS SECTION - Thailand Colors */}
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
              {/* Benefit 1 - Trade 24/7 */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit1Title}</h3>
                <p className="text-gray-400">{t.benefit1Desc}</p>
              </div>

              {/* Benefit 2 - Leverage */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit2Title}</h3>
                <p className="text-gray-400">{t.benefit2Desc}</p>
              </div>

              {/* Benefit 3 - Short Selling */}
              <div className="group bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit3Title}</h3>
                <p className="text-gray-400">{t.benefit3Desc}</p>
              </div>

              {/* Benefit 4 - No KYC */}
              <div className="group bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.benefit4Title}</h3>
                <p className="text-gray-400">{t.benefit4Desc}</p>
              </div>

              {/* Benefit 5 - Self-Custody */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                {t.howTitle} <span className="text-blue-400">{t.howTitleHighlight}</span> Works
              </h2>
              <p className="text-gray-400 text-lg">
                {t.howDesc}
              </p>
            </div>

            <div className="space-y-8">
              {/* Oracle Pricing */}
              <div className="bg-gray-900/50 border border-blue-500/30 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.how1Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.how1Desc} <strong className="text-white">{t.how1Bold}</strong>{t.how1Desc2}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t.how1Check}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funding Rates */}
              <div className="bg-gray-900/50 border border-white/20 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.how2Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.how2Desc} <strong className="text-white">{t.how2Bold}</strong> {t.how2Desc2}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                        <div className="text-green-400 font-semibold">{t.how2PerpAbove}</div>
                        <div className="text-gray-500 text-sm">{t.how2LongPay}</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                        <div className="text-red-400 font-semibold">{t.how2PerpBelow}</div>
                        <div className="text-gray-500 text-sm">{t.how2ShortPay}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leverage & Liquidation */}
              <div className="bg-gray-900/50 border border-red-500/30 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.how3Title}</h3>
                    <p className="text-gray-400 mb-4">
                      {t.how3Desc} <strong className="text-white">margin</strong> {t.how3Desc2} <strong className="text-white">{t.how3Bold}</strong>{t.how3Desc3}
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                      <p className="text-yellow-400 text-sm">
                        <strong>{t.how3Tip}</strong> {t.how3TipText}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-400 font-medium">{t.getStartedBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.getStartedTitle} <span className="text-green-400">{t.getStartedTitleHighlight}</span>
              </h2>
              <p className="text-gray-400 text-lg">
                {t.getStartedDesc}
              </p>
            </div>

            {/* Step 1 - Wallet Setup (Expandable) */}
            <div className="mb-6">
              <div
                className="bg-gray-900 border-2 border-blue-500/30 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-500/50 transition-colors"
                onClick={() => setWalletExpanded(!walletExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step1Title}</h3>
                    <p className="text-gray-400">{t.step1Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 text-sm font-medium hidden sm:block">
                      {walletExpanded ? t.step1HideDetails : t.step1ShowDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-blue-400 transition-transform ${walletExpanded ? 'rotate-180' : ''}`}
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
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
                      <h4 className="text-blue-400 font-semibold mb-2">{t.walletExplainTitle}</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        {t.walletExplainDesc} <strong className="text-white">{t.walletExplainBold}</strong>{t.walletExplainDesc2}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">🔐</div>
                          <span className="text-gray-400">{t.walletFeature1}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">🆓</div>
                          <span className="text-gray-400">{t.walletFeature2}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">⚡</div>
                          <span className="text-gray-400">{t.walletFeature3}</span>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                          <div className="text-lg mb-1">🌍</div>
                          <span className="text-gray-400">{t.walletFeature4}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-4">{t.walletSetupTitle}</h4>
                        <ol className="space-y-3 text-gray-300">
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold flex-shrink-0">1</span>
                            <span>{t.walletStep1} <a href="https://rabby.io" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">{t.walletStep1Link}</a> {t.walletStep1End}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold flex-shrink-0">2</span>
                            <span>{t.walletStep2}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold flex-shrink-0">3</span>
                            <span>{t.walletStep3}</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold flex-shrink-0">4</span>
                            <div>
                              <strong className="text-white">{t.walletStep4Bold}</strong>
                              <p className="text-gray-500 text-xs mt-1">{t.walletStep4Warning}</p>
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
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm hover:bg-blue-400 transition-colors"
                        >
                          {t.downloadRabby}
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
                className="bg-gray-900 border-2 border-white/30 rounded-2xl overflow-hidden cursor-pointer hover:border-white/50 transition-colors"
                onClick={() => setFundingExpanded(!fundingExpanded)}
              >
                <div className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-200 flex items-center justify-center text-gray-900 font-black text-2xl flex-shrink-0">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{t.step2Title}</h3>
                    <p className="text-gray-400">{t.step2Desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white text-sm font-medium hidden sm:block">
                      {fundingExpanded ? t.step1HideDetails : t.step1ShowDetails}
                    </span>
                    <svg
                      className={`w-6 h-6 text-white transition-transform ${fundingExpanded ? 'rotate-180' : ''}`}
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
                        <h4 className="text-blue-400 font-semibold mb-2">{t.fundCoinbase}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.fundCoinbaseSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.fundCoinbaseFee}</p>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                        <h4 className="text-yellow-400 font-semibold mb-2">{t.fundBinance}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.fundBinanceSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.fundBinanceFee}</p>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                        <h4 className="text-red-400 font-semibold mb-2">{t.fundBitkub}</h4>
                        <ol className="text-sm text-gray-300 space-y-1">
                          {t.fundBitkubSteps.map((step, i) => (
                            <li key={i}>{i + 1}. {step}</li>
                          ))}
                        </ol>
                        <p className="text-xs text-gray-500 mt-2">{t.fundBitkubFee}</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl">
                      <p className="text-gray-400 text-sm">
                        <strong className="text-white">{t.fundTip}</strong> {t.fundTipText}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 - Choose Platform & Trade */}
            <div className="mb-8">
              <div className="bg-gray-900 border-2 border-red-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-black text-2xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{t.step3Title}</h3>
                    <p className="text-gray-400">{t.step3Desc}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-5">
                    <ol className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">1</span>
                        <span>{t.tradeStep1} <a href={hyperliquid?.referralUrl} target="_blank" rel="noopener sponsored" className="text-red-400 hover:text-red-300">{t.tradeStep1Link}</a></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">2</span>
                        <span>{t.tradeStep2}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">3</span>
                        <span>{t.tradeStep3}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">4</span>
                        <span>{t.tradeStep4}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">5</span>
                        <span>{t.tradeStep5}</span>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={hyperliquid?.referralUrl}
                      target="_blank"
                      rel="noopener sponsored"
                      className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/50 rounded-2xl hover:border-red-500 transition-all group"
                    >
                      <div className="text-5xl">🚀</div>
                      <span className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{t.openHyperliquid}</span>
                      <span className="text-gray-400 text-sm">{t.popularPlatform}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Guide Link */}
            <div className="text-center">
              <Link
                href="/blog/wallet-setup-guide"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                {t.fullGuideLink}
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
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">⚠️ {t.risksTitle}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk1Bold}</strong>{t.risk1Text}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk2Bold}</strong>{t.risk2Text}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk3Bold}</strong>{t.risk3Text}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">•</span>
                  <span><strong className="text-white">{t.risk4Bold}</strong>{t.risk4Text}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 via-white/10 to-red-500/20 border border-blue-500/30 rounded-3xl p-12 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
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
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 via-white to-red-500 text-gray-900 rounded-2xl font-bold text-xl hover:from-blue-400 hover:to-red-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
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
                    {t.ctaCompare}
                  </Link>
                </div>

                {/* Thailand Guide Link */}
                <div className="mt-6">
                  <Link
                    href="/blog/trade-us-stocks-from-thailand"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium"
                  >
                    🇹🇭 {t.ctaThailand}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.faqTitle}</h2>
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
                      className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
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

        {/* Back Link */}
        <div className="py-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.backToCompare}
          </Link>
        </div>
      </article>
    </>
  );
}
