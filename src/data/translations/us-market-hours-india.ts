export const nativeLang = 'hi';
export const nativeName = 'हिन्दी';
export const isRTL = false;

// US Market Holidays 2025-2026
export const marketHolidays = [
  { date: '2025-01-01', name: "New Year's Day", nameHi: 'नव वर्ष दिवस' },
  { date: '2025-01-20', name: 'Martin Luther King Jr. Day', nameHi: 'मार्टिन लूथर किंग जूनियर दिवस' },
  { date: '2025-02-17', name: "Presidents' Day", nameHi: 'राष्ट्रपति दिवस' },
  { date: '2025-04-18', name: 'Good Friday', nameHi: 'गुड फ्राइडे' },
  { date: '2025-05-26', name: 'Memorial Day', nameHi: 'स्मृति दिवस' },
  { date: '2025-06-19', name: 'Juneteenth', nameHi: 'जूनटींथ' },
  { date: '2025-07-04', name: 'Independence Day', nameHi: 'स्वतंत्रता दिवस' },
  { date: '2025-09-01', name: 'Labor Day', nameHi: 'श्रम दिवस' },
  { date: '2025-11-27', name: 'Thanksgiving Day', nameHi: 'थैंक्सगिविंग दिवस' },
  { date: '2025-12-25', name: 'Christmas Day', nameHi: 'क्रिसमस दिवस' },
  { date: '2026-01-01', name: "New Year's Day", nameHi: 'नव वर्ष दिवस' },
  { date: '2026-01-19', name: 'Martin Luther King Jr. Day', nameHi: 'मार्टिन लूथर किंग जूनियर दिवस' },
  { date: '2026-02-16', name: "Presidents' Day", nameHi: 'राष्ट्रपति दिवस' },
  { date: '2026-04-03', name: 'Good Friday', nameHi: 'गुड फ्राइडे' },
  { date: '2026-05-25', name: 'Memorial Day', nameHi: 'स्मृति दिवस' },
  { date: '2026-06-19', name: 'Juneteenth', nameHi: 'जूनटींथ' },
  { date: '2026-07-03', name: 'Independence Day (Observed)', nameHi: 'स्वतंत्रता दिवस (मनाया गया)' },
  { date: '2026-09-07', name: 'Labor Day', nameHi: 'श्रम दिवस' },
  { date: '2026-11-26', name: 'Thanksgiving Day', nameHi: 'थैंक्सगिविंग दिवस' },
  { date: '2026-12-25', name: 'Christmas Day', nameHi: 'क्रिसमस दिवस' },
];

export const translations = {
  en: {
    // Breadcrumb
    home: 'Home',
    blog: 'Blog',
    pageTitle: 'US Market Hours in IST',

    // Hero
    badge: 'India Tool',
    liveBadge: 'Live Clock',
    heroTitle1: 'US Stock Market Hours',
    heroTitle2: 'in Indian Time (IST)',
    heroDesc: 'Real-time clock showing when US markets are open. Never miss a trading opportunity with our live ET to IST converter.',

    // Market Status
    marketOpen: 'US MARKET IS OPEN',
    marketClosed: 'US MARKET IS CLOSED',
    preMarketOpen: 'PRE-MARKET IS OPEN',
    afterHoursOpen: 'AFTER-HOURS IS OPEN',
    holiday: 'MARKET HOLIDAY',
    weekend: 'WEEKEND - MARKET CLOSED',

    // Countdown
    opensIn: 'Opens in',
    closesIn: 'Closes in',
    nextSession: 'Next session',
    preMarket: 'Pre-market',
    regularHours: 'Regular hours',
    afterHours: 'After-hours',

    // Time labels
    currentTimeET: 'Current Time (ET)',
    currentTimeIST: 'Current Time (IST)',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',

    // Market Sessions
    sessionsTitle: 'US Market Trading Sessions',
    sessionsDesc: 'All times converted from Eastern Time (ET) to Indian Standard Time (IST)',

    preMarketSession: {
      name: 'Pre-Market Session',
      etTime: '4:00 AM - 9:30 AM ET',
      istTime: '2:30 PM - 8:00 PM IST',
      desc: 'Early trading before the main session. Lower liquidity but first to react to overnight news.',
      icon: '🌅'
    },
    regularSession: {
      name: 'Regular Trading Hours',
      etTime: '9:30 AM - 4:00 PM ET',
      istTime: '8:00 PM - 2:30 AM IST',
      desc: 'Main trading session with highest liquidity and tightest spreads. Most trading happens here.',
      icon: '☀️'
    },
    afterHoursSession: {
      name: 'After-Hours Session',
      etTime: '4:00 PM - 8:00 PM ET',
      istTime: '2:30 AM - 6:30 AM IST',
      desc: 'Extended hours after market close. Trade on earnings releases and late-breaking news.',
      icon: '🌙'
    },

    // 24/7 Perps Section
    perpsTitle: 'Trade US Stocks 24/7 with Equity Perps',
    perpsDesc: 'While US stock markets close, equity perpetuals trade around the clock.',
    perpsFeatures: [
      {
        icon: '🌏',
        title: '24/7 Trading',
        desc: 'Trade NVDA, TSLA, AAPL any time - 3 AM, Sunday afternoon, or during US holidays.'
      },
      {
        icon: '⚡',
        title: 'React to News Instantly',
        desc: "When news breaks at 4 AM IST, you don't have to wait until 8 PM for US markets to open."
      },
      {
        icon: '📅',
        title: 'No Market Holidays',
        desc: 'Trade during Thanksgiving, Christmas, or any US holiday. Crypto markets never sleep.'
      },
      {
        icon: '🇮🇳',
        title: 'Perfect for India',
        desc: 'US regular hours (8 PM - 2:30 AM IST) can be inconvenient. With perps, trade during Indian daytime.'
      }
    ],
    perpsComparison: {
      title: 'Traditional vs Equity Perps',
      traditional: {
        label: 'Traditional Markets',
        hours: '6.5 hours/day',
        weekly: '32.5 hours/week',
        color: 'red'
      },
      perps: {
        label: 'Equity Perps',
        hours: '24 hours/day',
        weekly: '168 hours/week',
        color: 'green'
      }
    },
    startTradingPerps: 'Start Trading 24/7',

    // Holiday Calendar
    holidaysTitle: '2025-2026 US Market Holiday Calendar',
    holidaysDesc: 'US stock markets are closed on these days. Equity perps remain open.',
    holidaysNote: 'Note: Markets may close early (1 PM ET) the day before some holidays.',
    perpsOpenNote: 'Equity perps trade 24/7, including all holidays',

    // Timeline Visual
    timelineTitle: '24-Hour Trading Timeline (IST)',
    timelineDesc: 'When each session is active in Indian time',

    // Quick Reference
    quickRefTitle: 'Quick Reference',
    quickRefItems: [
      { label: 'IST is UTC+5:30', value: 'Does not observe DST' },
      { label: 'ET is UTC-5 (Winter) / UTC-4 (Summer)', value: 'DST: Mar-Nov' },
      { label: 'IST to ET difference', value: '10.5 hours (9.5 during DST)' },
    ],
    dstNote: 'When the US observes Daylight Saving Time (March to November), all times shift by 1 hour earlier in IST.',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What time does the US stock market open in India?',
        answer: 'The US stock market opens at 8:00 PM IST (9:30 AM ET) for regular trading hours. Pre-market trading starts at 2:30 PM IST (4:00 AM ET). During US Daylight Saving Time (March-November), times shift 1 hour earlier.'
      },
      {
        question: 'What time does the US stock market close in India?',
        answer: 'The US stock market closes at 2:30 AM IST (4:00 PM ET) for regular trading. After-hours trading continues until 6:30 AM IST (8:00 PM ET). This means Indian traders often need to stay up late or wake early for US market hours.'
      },
      {
        question: 'Can I trade US stocks during Indian market hours (9:15 AM - 3:30 PM IST)?',
        answer: 'Traditional US stock markets are closed during Indian market hours. However, equity perpetuals allow you to trade US stock exposure 24/7, including during Indian daytime. This is why many Indian traders use platforms like Hyperliquid.'
      },
      {
        question: 'What is the best time to trade US stocks from India?',
        answer: 'The first hour after US market open (8:00 PM - 9:00 PM IST) and last hour before close (1:30 AM - 2:30 AM IST) typically have the highest volatility and liquidity. For Indian traders who prefer daytime trading, equity perps offer 24/7 access.'
      },
      {
        question: 'Do US market hours change?',
        answer: 'Yes, during US Daylight Saving Time (second Sunday of March to first Sunday of November), all US market hours shift 1 hour earlier for Indian traders. Pre-market starts at 1:30 PM IST instead of 2:30 PM IST.'
      },
      {
        question: 'What happens to equity perps when US markets are closed?',
        answer: 'Equity perpetuals continue trading 24/7, even when US markets are closed. Prices may move based on global news, after-hours earnings, or sentiment. This allows traders to react to events without waiting for US market open.'
      }
    ],

    // CTA
    ctaTitle: 'Trade US Stocks Anytime from India',
    ctaDesc: "Don't limit yourself to US market hours. Trade NVDA, TSLA, AAPL 24/7 with equity perpetuals.",
    ctaButton: 'Start Trading 24/7',

    // Related
    relatedTitle: 'Related India Guides',
    relatedGuides: [
      { tag: 'GUIDE', title: 'Trade US Stocks from India', desc: 'Complete setup guide', href: '/blog/trade-us-stocks-from-india' },
      { tag: 'FUNDING', title: 'Convert INR to USDC', desc: 'Step-by-step with WazirX', href: '/blog/convert-inr-to-usdc' },
      { tag: 'LEGAL', title: 'Is It Legal in India?', desc: 'Regulatory overview', href: '/blog/equity-perps-legal-india' }
    ],

    // Misc
    today: 'Today',
    tomorrow: 'Tomorrow',
    closed: 'Closed',
    open: 'Open',
  },
  hi: {
    // Breadcrumb
    home: 'होम',
    blog: 'ब्लॉग',
    pageTitle: 'US मार्केट टाइमिंग IST में',

    // Hero
    badge: 'भारत टूल',
    liveBadge: 'लाइव क्लॉक',
    heroTitle1: 'US स्टॉक मार्केट का समय',
    heroTitle2: 'भारतीय समय (IST) में',
    heroDesc: 'US मार्केट कब खुले हैं यह दिखाने वाली रियल-टाइम क्लॉक। हमारे लाइव ET से IST कन्वर्टर के साथ कोई ट्रेडिंग अवसर न चूकें।',

    // Market Status
    marketOpen: 'US मार्केट खुला है',
    marketClosed: 'US मार्केट बंद है',
    preMarketOpen: 'प्री-मार्केट खुला है',
    afterHoursOpen: 'आफ्टर-आवर्स खुला है',
    holiday: 'मार्केट छुट्टी',
    weekend: 'वीकेंड - मार्केट बंद',

    // Countdown
    opensIn: 'खुलने में',
    closesIn: 'बंद होने में',
    nextSession: 'अगला सेशन',
    preMarket: 'प्री-मार्केट',
    regularHours: 'रेगुलर आवर्स',
    afterHours: 'आफ्टर-आवर्स',

    // Time labels
    currentTimeET: 'वर्तमान समय (ET)',
    currentTimeIST: 'वर्तमान समय (IST)',
    hours: 'घंटे',
    minutes: 'मिनट',
    seconds: 'सेकंड',

    // Market Sessions
    sessionsTitle: 'US मार्केट ट्रेडिंग सेशन',
    sessionsDesc: 'सभी समय Eastern Time (ET) से Indian Standard Time (IST) में कन्वर्ट किए गए',

    preMarketSession: {
      name: 'प्री-मार्केट सेशन',
      etTime: '4:00 AM - 9:30 AM ET',
      istTime: '2:30 PM - 8:00 PM IST',
      desc: 'मुख्य सेशन से पहले जल्दी ट्रेडिंग। कम लिक्विडिटी लेकिन रात भर की खबरों पर पहले प्रतिक्रिया।',
      icon: '🌅'
    },
    regularSession: {
      name: 'रेगुलर ट्रेडिंग आवर्स',
      etTime: '9:30 AM - 4:00 PM ET',
      istTime: '8:00 PM - 2:30 AM IST',
      desc: 'सबसे ज्यादा लिक्विडिटी और टाइट स्प्रेड वाला मुख्य ट्रेडिंग सेशन। ज्यादातर ट्रेडिंग यहां होती है।',
      icon: '☀️'
    },
    afterHoursSession: {
      name: 'आफ्टर-आवर्स सेशन',
      etTime: '4:00 PM - 8:00 PM ET',
      istTime: '2:30 AM - 6:30 AM IST',
      desc: 'मार्केट बंद होने के बाद एक्सटेंडेड आवर्स। अर्निंग रिलीज़ और लेट-ब्रेकिंग न्यूज़ पर ट्रेड करें।',
      icon: '🌙'
    },

    // 24/7 Perps Section
    perpsTitle: 'इक्विटी पर्प्स से US स्टॉक्स 24/7 ट्रेड करें',
    perpsDesc: 'जब US स्टॉक मार्केट बंद होते हैं, इक्विटी परपेचुअल्स चौबीसों घंटे ट्रेड होते हैं।',
    perpsFeatures: [
      {
        icon: '🌏',
        title: '24/7 ट्रेडिंग',
        desc: 'NVDA, TSLA, AAPL किसी भी समय ट्रेड करें - रात 3 बजे, रविवार दोपहर, या US छुट्टियों के दौरान।'
      },
      {
        icon: '⚡',
        title: 'न्यूज़ पर तुरंत प्रतिक्रिया',
        desc: 'जब IST सुबह 4 बजे खबर आती है, तो आपको US मार्केट खुलने के लिए रात 8 बजे तक इंतजार नहीं करना पड़ता।'
      },
      {
        icon: '📅',
        title: 'कोई मार्केट हॉलिडे नहीं',
        desc: 'थैंक्सगिविंग, क्रिसमस, या किसी भी US हॉलिडे के दौरान ट्रेड करें। क्रिप्टो मार्केट्स कभी नहीं सोते।'
      },
      {
        icon: '🇮🇳',
        title: 'भारत के लिए परफेक्ट',
        desc: 'US रेगुलर आवर्स (8 PM - 2:30 AM IST) असुविधाजनक हो सकते हैं। पर्प्स के साथ, भारतीय दिन के समय ट्रेड करें।'
      }
    ],
    perpsComparison: {
      title: 'ट्रेडिशनल vs इक्विटी पर्प्स',
      traditional: {
        label: 'ट्रेडिशनल मार्केट्स',
        hours: '6.5 घंटे/दिन',
        weekly: '32.5 घंटे/सप्ताह',
        color: 'red'
      },
      perps: {
        label: 'इक्विटी पर्प्स',
        hours: '24 घंटे/दिन',
        weekly: '168 घंटे/सप्ताह',
        color: 'green'
      }
    },
    startTradingPerps: '24/7 ट्रेडिंग शुरू करें',

    // Holiday Calendar
    holidaysTitle: '2025-2026 US मार्केट हॉलिडे कैलेंडर',
    holidaysDesc: 'इन दिनों US स्टॉक मार्केट बंद रहते हैं। इक्विटी पर्प्स खुले रहते हैं।',
    holidaysNote: 'नोट: कुछ छुट्टियों से एक दिन पहले मार्केट जल्दी (1 PM ET) बंद हो सकते हैं।',
    perpsOpenNote: 'इक्विटी पर्प्स 24/7 ट्रेड होते हैं, सभी छुट्टियों सहित',

    // Timeline Visual
    timelineTitle: '24-घंटे ट्रेडिंग टाइमलाइन (IST)',
    timelineDesc: 'भारतीय समय में प्रत्येक सेशन कब एक्टिव है',

    // Quick Reference
    quickRefTitle: 'त्वरित संदर्भ',
    quickRefItems: [
      { label: 'IST है UTC+5:30', value: 'DST नहीं मनाता' },
      { label: 'ET है UTC-5 (शीत) / UTC-4 (ग्रीष्म)', value: 'DST: मार्च-नवंबर' },
      { label: 'IST से ET अंतर', value: '10.5 घंटे (DST के दौरान 9.5)' },
    ],
    dstNote: 'जब US डेलाइट सेविंग टाइम (मार्च से नवंबर) मनाता है, सभी समय IST में 1 घंटा पहले शिफ्ट हो जाते हैं।',

    // FAQ
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqs: [
      {
        question: 'भारत में US स्टॉक मार्केट किस समय खुलता है?',
        answer: 'US स्टॉक मार्केट रेगुलर ट्रेडिंग आवर्स के लिए 8:00 PM IST (9:30 AM ET) पर खुलता है। प्री-मार्केट ट्रेडिंग 2:30 PM IST (4:00 AM ET) पर शुरू होती है। US डेलाइट सेविंग टाइम (मार्च-नवंबर) के दौरान, समय 1 घंटा पहले शिफ्ट हो जाते हैं।'
      },
      {
        question: 'भारत में US स्टॉक मार्केट किस समय बंद होता है?',
        answer: 'US स्टॉक मार्केट रेगुलर ट्रेडिंग के लिए 2:30 AM IST (4:00 PM ET) पर बंद होता है। आफ्टर-आवर्स ट्रेडिंग 6:30 AM IST (8:00 PM ET) तक जारी रहती है। इसका मतलब है कि भारतीय ट्रेडर्स को अक्सर US मार्केट आवर्स के लिए देर तक जागना या जल्दी उठना पड़ता है।'
      },
      {
        question: 'क्या मैं भारतीय मार्केट आवर्स (9:15 AM - 3:30 PM IST) के दौरान US स्टॉक्स ट्रेड कर सकता हूं?',
        answer: 'भारतीय मार्केट आवर्स के दौरान ट्रेडिशनल US स्टॉक मार्केट्स बंद रहते हैं। हालांकि, इक्विटी परपेचुअल्स आपको 24/7 US स्टॉक एक्सपोज़र ट्रेड करने की अनुमति देते हैं, जिसमें भारतीय दिन का समय भी शामिल है। यही कारण है कि कई भारतीय ट्रेडर्स Hyperliquid जैसे प्लेटफॉर्म का उपयोग करते हैं।'
      },
      {
        question: 'भारत से US स्टॉक्स ट्रेड करने का सबसे अच्छा समय क्या है?',
        answer: 'US मार्केट खुलने के बाद पहला घंटा (8:00 PM - 9:00 PM IST) और बंद होने से पहले आखिरी घंटा (1:30 AM - 2:30 AM IST) में आमतौर पर सबसे ज्यादा वोलैटिलिटी और लिक्विडिटी होती है। भारतीय ट्रेडर्स के लिए जो दिन में ट्रेडिंग पसंद करते हैं, इक्विटी पर्प्स 24/7 एक्सेस प्रदान करते हैं।'
      },
      {
        question: 'क्या US मार्केट आवर्स बदलते हैं?',
        answer: 'हां, US डेलाइट सेविंग टाइम (मार्च के दूसरे रविवार से नवंबर के पहले रविवार) के दौरान, सभी US मार्केट आवर्स भारतीय ट्रेडर्स के लिए 1 घंटा पहले शिफ्ट हो जाते हैं। प्री-मार्केट 2:30 PM IST के बजाय 1:30 PM IST पर शुरू होता है।'
      },
      {
        question: 'US मार्केट्स बंद होने पर इक्विटी पर्प्स का क्या होता है?',
        answer: 'इक्विटी परपेचुअल्स 24/7 ट्रेड होते रहते हैं, US मार्केट्स बंद होने पर भी। कीमतें ग्लोबल न्यूज़, आफ्टर-आवर्स अर्निंग्स, या सेंटीमेंट के आधार पर मूव हो सकती हैं। यह ट्रेडर्स को US मार्केट खुलने का इंतजार किए बिना इवेंट्स पर प्रतिक्रिया करने की अनुमति देता है।'
      }
    ],

    // CTA
    ctaTitle: 'भारत से कभी भी US स्टॉक्स ट्रेड करें',
    ctaDesc: 'खुद को US मार्केट आवर्स तक सीमित न रखें। इक्विटी परपेचुअल्स के साथ 24/7 NVDA, TSLA, AAPL ट्रेड करें।',
    ctaButton: '24/7 ट्रेडिंग शुरू करें',

    // Related
    relatedTitle: 'संबंधित भारत गाइड्स',
    relatedGuides: [
      { tag: 'गाइड', title: 'भारत से US स्टॉक्स ट्रेड करें', desc: 'पूरी सेटअप गाइड', href: '/blog/trade-us-stocks-from-india' },
      { tag: 'फंडिंग', title: 'INR को USDC में बदलें', desc: 'WazirX के साथ स्टेप-बाय-स्टेप', href: '/blog/convert-inr-to-usdc' },
      { tag: 'कानूनी', title: 'क्या यह भारत में कानूनी है?', desc: 'नियामक अवलोकन', href: '/blog/equity-perps-legal-india' }
    ],

    // Misc
    today: 'आज',
    tomorrow: 'कल',
    closed: 'बंद',
    open: 'खुला',
  }
};
