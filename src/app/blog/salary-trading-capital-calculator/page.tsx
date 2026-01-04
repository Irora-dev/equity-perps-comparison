'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';

type Language = 'en' | 'hi';
type RiskTolerance = 'conservative' | 'moderate' | 'aggressive';

const translations = {
  en: {
    title: 'Salary to Trading Capital Calculator',
    subtitle: 'Calculate how much of your monthly salary you can safely allocate to trading. Includes emergency fund planning, savings breakdown, and position sizing.',
    toolBadge: 'Tool',
    interactiveBadge: 'Interactive',
    indiaFocusBadge: 'India Focus',

    // Input Section
    configureTitle: 'Your Monthly Finances',
    monthlySalary: 'Monthly Salary (INR)',
    monthlyExpenses: 'Monthly Expenses (INR)',
    existingEmergencyFund: 'Existing Emergency Fund (INR)',
    monthsOfExpensesSaved: 'months of expenses saved',
    riskTolerance: 'Risk Tolerance for Trading',

    // Risk Levels
    conservative: 'Conservative',
    conservativeDesc: '5% of discretionary income',
    moderate: 'Moderate',
    moderateDesc: '10% of discretionary income',
    aggressive: 'Aggressive',
    aggressiveDesc: '20% of discretionary income',

    // Results Section
    breakdownTitle: 'Monthly Allocation Breakdown',
    monthlyIncome: 'Monthly Income',
    monthlyExpensesLabel: 'Monthly Expenses',
    discretionaryIncome: 'Discretionary Income',
    emergencyFundAllocation: 'Emergency Fund Allocation',
    emergencyFundNote: 'Until you have 6 months expenses saved',
    savingsInvestment: 'Savings/Investment',
    tradingCapital: 'Trading Capital',
    perMonth: 'per month',

    // USDC Section
    usdcConversion: 'USDC Equivalent',
    usdcRate: 'Current Rate',
    yourTradingCapital: 'Your Trading Capital',

    // Position Sizing
    positionSizing: 'Position Sizing at Different Leverage',
    leverage: 'Leverage',
    positionSize: 'Position Size',
    liquidationMove: 'Liquidation Move',
    risk: 'Risk',

    // Financial Health
    financialHealthTitle: 'Financial Health Checklist',
    checklistSubtitle: 'Complete these before trading with real money',
    emergencyFundCheck: 'Emergency Fund (6 months expenses)',
    emergencyFundDesc: 'Have 6 months of living expenses saved in a liquid account',
    noHighInterestDebt: 'No High-Interest Debt',
    noHighInterestDebtDesc: 'Pay off credit cards and personal loans first (>12% APR)',
    healthInsurance: 'Health Insurance',
    healthInsuranceDesc: 'Have adequate health coverage for yourself and dependents',
    termInsurance: 'Term Life Insurance',
    termInsuranceDesc: 'If you have dependents, ensure they are protected',
    retirementSavings: 'Retirement Contributions',
    retirementSavingsDesc: 'Contributing to EPF/PPF/NPS before trading',
    affordToLose: 'Money You Can Lose',
    affordToLoseDesc: 'This trading capital will not affect your lifestyle if lost',

    // Salary Context
    salaryContext: 'Indian Salary Context',
    averageSalaries: 'Average Monthly Salaries in India (2024)',
    fresher: 'Fresher (0-2 years)',
    midLevel: 'Mid-Level (3-5 years)',
    senior: 'Senior (5-10 years)',
    lead: 'Lead/Manager (10+ years)',

    // Disclaimer
    disclaimerTitle: 'Important Disclaimer',
    disclaimer1: 'Only trade with money you can afford to lose completely.',
    disclaimer2: 'Past performance does not guarantee future results. Leveraged trading carries substantial risk.',
    disclaimer3: 'This calculator is for educational purposes only. Consult a financial advisor before making investment decisions.',
    disclaimer4: 'Never borrow money to trade. Never use rent/EMI money for trading.',

    // CTA
    ctaTitle: 'Ready to Start Trading?',
    ctaSubtitle: 'Start small, learn the platform, then gradually increase your allocation.',
    startTrading: 'Start Trading on Hyperliquid',
    learnRisks: 'Understand the Risks First',

    // Related
    relatedTools: 'Related Tools',
    pnlSimulator: 'PnL Simulator',
    pnlSimulatorDesc: 'Simulate profit/loss scenarios',
    liquidationCalc: 'Liquidation Calculator',
    liquidationCalcDesc: 'Find your liquidation price',
    feeCalc: 'Fee Calculator',
    feeCalcDesc: 'Compare trading costs',

    // Footer
    freeNotice: 'This site is 100% free to use for comparing the best platforms to trade stocks 24/7. When you sign up through our links, you get a 4% discount on trading fees with our referral code.',
  },
  hi: {
    title: 'सैलरी से ट्रेडिंग कैपिटल कैलकुलेटर',
    subtitle: 'अपनी मासिक सैलरी से ट्रेडिंग के लिए कितना allocate करना सुरक्षित है, यह कैलकुलेट करें। इमरजेंसी फंड प्लानिंग, सेविंग्स breakdown, और पोजीशन साइज़िंग शामिल है।',
    toolBadge: 'टूल',
    interactiveBadge: 'इंटरैक्टिव',
    indiaFocusBadge: 'भारत फोकस',

    // Input Section
    configureTitle: 'आपकी मासिक आय',
    monthlySalary: 'मासिक सैलरी (INR)',
    monthlyExpenses: 'मासिक खर्च (INR)',
    existingEmergencyFund: 'मौजूदा इमरजेंसी फंड (INR)',
    monthsOfExpensesSaved: 'महीने के खर्च बचाए हुए',
    riskTolerance: 'ट्रेडिंग के लिए रिस्क टॉलरेंस',

    // Risk Levels
    conservative: 'कंज़र्वेटिव',
    conservativeDesc: 'विवेकाधीन आय का 5%',
    moderate: 'मॉडरेट',
    moderateDesc: 'विवेकाधीन आय का 10%',
    aggressive: 'एग्रेसिव',
    aggressiveDesc: 'विवेकाधीन आय का 20%',

    // Results Section
    breakdownTitle: 'मासिक आवंटन विवरण',
    monthlyIncome: 'मासिक आय',
    monthlyExpensesLabel: 'मासिक खर्च',
    discretionaryIncome: 'विवेकाधीन आय',
    emergencyFundAllocation: 'इमरजेंसी फंड आवंटन',
    emergencyFundNote: 'जब तक 6 महीने के खर्च बचत न हो',
    savingsInvestment: 'बचत/निवेश',
    tradingCapital: 'ट्रेडिंग कैपिटल',
    perMonth: 'प्रति माह',

    // USDC Section
    usdcConversion: 'USDC समतुल्य',
    usdcRate: 'वर्तमान रेट',
    yourTradingCapital: 'आपका ट्रेडिंग कैपिटल',

    // Position Sizing
    positionSizing: 'विभिन्न लीवरेज पर पोजीशन साइज़',
    leverage: 'लीवरेज',
    positionSize: 'पोजीशन साइज़',
    liquidationMove: 'लिक्विडेशन मूव',
    risk: 'जोखिम',

    // Financial Health
    financialHealthTitle: 'वित्तीय स्वास्थ्य चेकलिस्ट',
    checklistSubtitle: 'असली पैसों से ट्रेड करने से पहले इन्हें पूरा करें',
    emergencyFundCheck: 'इमरजेंसी फंड (6 महीने के खर्च)',
    emergencyFundDesc: '6 महीने के जीवन खर्च एक लिक्विड अकाउंट में बचाएं',
    noHighInterestDebt: 'कोई हाई-इंटरेस्ट डेट नहीं',
    noHighInterestDebtDesc: 'पहले क्रेडिट कार्ड और पर्सनल लोन चुकाएं (>12% APR)',
    healthInsurance: 'हेल्थ इंश्योरेंस',
    healthInsuranceDesc: 'खुद और आश्रितों के लिए पर्याप्त हेल्थ कवरेज रखें',
    termInsurance: 'टर्म लाइफ इंश्योरेंस',
    termInsuranceDesc: 'अगर आश्रित हैं, तो उनकी सुरक्षा सुनिश्चित करें',
    retirementSavings: 'रिटायरमेंट योगदान',
    retirementSavingsDesc: 'ट्रेडिंग से पहले EPF/PPF/NPS में योगदान करें',
    affordToLose: 'खोने की क्षमता वाला पैसा',
    affordToLoseDesc: 'यह ट्रेडिंग कैपिटल खोने से आपकी जीवनशैली प्रभावित नहीं होगी',

    // Salary Context
    salaryContext: 'भारतीय सैलरी संदर्भ',
    averageSalaries: 'भारत में औसत मासिक सैलरी (2024)',
    fresher: 'फ्रेशर (0-2 साल)',
    midLevel: 'मिड-लेवल (3-5 साल)',
    senior: 'सीनियर (5-10 साल)',
    lead: 'लीड/मैनेजर (10+ साल)',

    // Disclaimer
    disclaimerTitle: 'महत्वपूर्ण अस्वीकरण',
    disclaimer1: 'केवल उस पैसे से ट्रेड करें जिसे आप पूरी तरह खो सकते हैं।',
    disclaimer2: 'पिछला प्रदर्शन भविष्य के परिणामों की गारंटी नहीं देता। लीवरेज्ड ट्रेडिंग में काफी जोखिम है।',
    disclaimer3: 'यह कैलकुलेटर केवल शैक्षिक उद्देश्यों के लिए है। निवेश निर्णय लेने से पहले वित्तीय सलाहकार से परामर्श करें।',
    disclaimer4: 'ट्रेड करने के लिए कभी उधार न लें। किराए/EMI के पैसे से कभी ट्रेड न करें।',

    // CTA
    ctaTitle: 'ट्रेडिंग शुरू करने के लिए तैयार?',
    ctaSubtitle: 'छोटे से शुरू करें, प्लेटफॉर्म सीखें, फिर धीरे-धीरे अपना आवंटन बढ़ाएं।',
    startTrading: 'Hyperliquid पर ट्रेडिंग शुरू करें',
    learnRisks: 'पहले जोखिम समझें',

    // Related
    relatedTools: 'संबंधित टूल्स',
    pnlSimulator: 'PnL सिमुलेटर',
    pnlSimulatorDesc: 'प्रॉफिट/लॉस सिनेरियो सिमुलेट करें',
    liquidationCalc: 'लिक्विडेशन कैलकुलेटर',
    liquidationCalcDesc: 'अपना लिक्विडेशन प्राइस खोजें',
    feeCalc: 'फी कैलकुलेटर',
    feeCalcDesc: 'ट्रेडिंग कॉस्ट की तुलना करें',

    // Footer
    freeNotice: 'यह साइट स्टॉक्स को 24/7 ट्रेड करने के लिए सबसे अच्छे प्लेटफॉर्म की तुलना करने के लिए 100% मुफ्त है। जब आप हमारे लिंक से साइन अप करते हैं, तो आपको हमारे रेफरल कोड से ट्रेडिंग फीस पर 4% की छूट मिलती है।',
  },
};

const riskPercentages: Record<RiskTolerance, number> = {
  conservative: 0.05,
  moderate: 0.10,
  aggressive: 0.20,
};

const salaryBenchmarks = [
  { level: 'fresher', range: '25,000 - 50,000' },
  { level: 'midLevel', range: '50,000 - 1,00,000' },
  { level: 'senior', range: '1,00,000 - 2,50,000' },
  { level: 'lead', range: '2,50,000 - 5,00,000+' },
];

const leverageLevels = [
  { leverage: 1, risk: 'low' },
  { leverage: 3, risk: 'low' },
  { leverage: 5, risk: 'medium' },
  { leverage: 10, risk: 'medium' },
  { leverage: 20, risk: 'high' },
  { leverage: 50, risk: 'high' },
];

export default function SalaryTradingCapitalCalculator() {
  const [language, setLanguage] = useState<Language>('en');
  const [monthlySalary, setMonthlySalary] = useState<number>(75000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(40000);
  const [existingEmergencyFund, setExistingEmergencyFund] = useState<number>(100000);
  const [riskTolerance, setRiskTolerance] = useState<RiskTolerance>('moderate');

  const [checklist, setChecklist] = useState({
    emergencyFund: false,
    noHighInterestDebt: false,
    healthInsurance: false,
    termInsurance: false,
    retirementSavings: false,
    affordToLose: false,
  });

  const t = translations[language];
  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  const INR_TO_USD = 83.5;

  const calculations = useMemo(() => {
    const discretionaryIncome = Math.max(0, monthlySalary - monthlyExpenses);

    // Target emergency fund = 6 months of expenses
    const targetEmergencyFund = monthlyExpenses * 6;
    const emergencyFundGap = Math.max(0, targetEmergencyFund - existingEmergencyFund);
    const monthsToFullEmergencyFund = emergencyFundGap > 0 ? Math.ceil(emergencyFundGap / (discretionaryIncome * 0.3)) : 0;

    // Emergency fund allocation (30% of discretionary until target met)
    const emergencyFundAllocation = emergencyFundGap > 0
      ? Math.min(discretionaryIncome * 0.3, emergencyFundGap)
      : 0;

    // Remaining after emergency fund
    const afterEmergency = discretionaryIncome - emergencyFundAllocation;

    // Trading allocation based on risk tolerance
    const tradingPercent = riskPercentages[riskTolerance];
    const tradingCapitalINR = afterEmergency * tradingPercent;
    const tradingCapitalUSD = tradingCapitalINR / INR_TO_USD;

    // Savings allocation (remaining after trading)
    const savingsAllocation = afterEmergency - tradingCapitalINR;

    // Months of expenses currently saved
    const monthsSaved = monthlyExpenses > 0 ? existingEmergencyFund / monthlyExpenses : 0;

    return {
      discretionaryIncome,
      emergencyFundAllocation,
      savingsAllocation,
      tradingCapitalINR,
      tradingCapitalUSD,
      monthsSaved,
      targetEmergencyFund,
      emergencyFundGap,
      monthsToFullEmergencyFund,
    };
  }, [monthlySalary, monthlyExpenses, existingEmergencyFund, riskTolerance]);

  const formatINR = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(value);
  };

  const checklistComplete = Object.values(checklist).filter(Boolean).length;
  const totalChecklistItems = Object.keys(checklist).length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Salary to Trading Capital Calculator',
    description: 'Calculate how much of your monthly salary you can safely allocate to trading with emergency fund planning and position sizing.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Monthly salary input in INR',
      'Risk tolerance levels (Conservative, Moderate, Aggressive)',
      'Emergency fund planning',
      'USDC conversion',
      'Position sizing at different leverage levels',
      'Financial health checklist',
      'Hindi/English bilingual support',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-gray-950 to-green-500/10" />
        <div className="max-w-4xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{language === 'en' ? 'Salary Trading Calculator' : 'सैलरी ट्रेडिंग कैलकुलेटर'}</span>
          </nav>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">{t.toolBadge}</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">{t.interactiveBadge}</span>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full">{t.indiaFocusBadge}</span>
            </div>

            {/* Language Toggle */}
            <div className="flex bg-gray-800 rounded-lg p-0.5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-orange-500 text-gray-900'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  language === 'hi'
                    ? 'bg-green-500 text-gray-900'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-6">{t.configureTitle}</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column - Inputs */}
              <div className="space-y-6">
                {/* Monthly Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {t.monthlySalary}: <span className="text-white">{formatINR(monthlySalary)}</span>
                  </label>
                  <input
                    type="range"
                    min="15000"
                    max="500000"
                    step="5000"
                    value={monthlySalary}
                    onChange={(e) => setMonthlySalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatINR(15000)}</span>
                    <span>{formatINR(500000)}</span>
                  </div>
                </div>

                {/* Monthly Expenses */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {t.monthlyExpenses}: <span className="text-white">{formatINR(monthlyExpenses)}</span>
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max={monthlySalary}
                    step="5000"
                    value={Math.min(monthlyExpenses, monthlySalary)}
                    onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatINR(10000)}</span>
                    <span>{formatINR(monthlySalary)}</span>
                  </div>
                </div>

                {/* Existing Emergency Fund */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {t.existingEmergencyFund}: <span className="text-white">{formatINR(existingEmergencyFund)}</span>
                    <span className="text-gray-500 text-xs ml-2">
                      ({calculations.monthsSaved.toFixed(1)} {t.monthsOfExpensesSaved})
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    step="10000"
                    value={existingEmergencyFund}
                    onChange={(e) => setExistingEmergencyFund(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatINR(0)}</span>
                    <span>{formatINR(1000000)}</span>
                  </div>
                </div>

                {/* Risk Tolerance */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">{t.riskTolerance}</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setRiskTolerance('conservative')}
                      className={`p-3 rounded-xl text-center transition-all ${
                        riskTolerance === 'conservative'
                          ? 'bg-green-500/20 border-2 border-green-500 text-green-400'
                          : 'bg-gray-800 border-2 border-gray-700 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <div className="font-semibold text-sm">{t.conservative}</div>
                      <div className="text-xs mt-1 opacity-75">{t.conservativeDesc}</div>
                    </button>
                    <button
                      onClick={() => setRiskTolerance('moderate')}
                      className={`p-3 rounded-xl text-center transition-all ${
                        riskTolerance === 'moderate'
                          ? 'bg-orange-500/20 border-2 border-orange-500 text-orange-400'
                          : 'bg-gray-800 border-2 border-gray-700 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <div className="font-semibold text-sm">{t.moderate}</div>
                      <div className="text-xs mt-1 opacity-75">{t.moderateDesc}</div>
                    </button>
                    <button
                      onClick={() => setRiskTolerance('aggressive')}
                      className={`p-3 rounded-xl text-center transition-all ${
                        riskTolerance === 'aggressive'
                          ? 'bg-red-500/20 border-2 border-red-500 text-red-400'
                          : 'bg-gray-800 border-2 border-gray-700 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <div className="font-semibold text-sm">{t.aggressive}</div>
                      <div className="text-xs mt-1 opacity-75">{t.aggressiveDesc}</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Results */}
              <div className="bg-gray-800/50 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-4">{t.breakdownTitle}</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-400">{t.monthlyIncome}</span>
                    <span className="text-white font-medium">{formatINR(monthlySalary)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-400">{t.monthlyExpensesLabel}</span>
                    <span className="text-red-400 font-medium">-{formatINR(monthlyExpenses)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-400">{t.discretionaryIncome}</span>
                    <span className="text-white font-semibold">{formatINR(calculations.discretionaryIncome)}</span>
                  </div>

                  {calculations.emergencyFundAllocation > 0 && (
                    <div className="py-2 border-b border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">{t.emergencyFundAllocation}</span>
                        <span className="text-yellow-400 font-medium">-{formatINR(calculations.emergencyFundAllocation)}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{t.emergencyFundNote}</p>
                    </div>
                  )}

                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-400">{t.savingsInvestment}</span>
                    <span className="text-blue-400 font-medium">{formatINR(calculations.savingsAllocation)}</span>
                  </div>

                  <div className="py-4 bg-gradient-to-r from-orange-500/10 to-green-500/10 rounded-lg px-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">{t.tradingCapital}</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                          {formatINR(calculations.tradingCapitalINR)}
                        </span>
                        <p className="text-gray-400 text-sm">{t.perMonth}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* USDC Conversion */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">{t.usdcConversion}</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-bold">$</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{t.usdcRate}</p>
                    <p className="text-white font-medium">1 USDC = {formatINR(INR_TO_USD)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/20 to-green-500/20 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-1">{t.yourTradingCapital}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">{formatUSD(calculations.tradingCapitalUSD)}</span>
                  <span className="text-gray-400">USDC</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">{t.perMonth}</p>
              </div>
            </div>
          </div>

          {/* Position Sizing */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-2">{t.positionSizing}</h2>
            <p className="text-gray-400 text-sm mb-6">
              {language === 'en'
                ? `With ${formatUSD(calculations.tradingCapitalUSD)} monthly trading capital`
                : `${formatUSD(calculations.tradingCapitalUSD)} मासिक ट्रेडिंग कैपिटल के साथ`
              }
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">{t.leverage}</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">{t.positionSize}</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">{t.liquidationMove}</th>
                    <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">{t.risk}</th>
                  </tr>
                </thead>
                <tbody>
                  {leverageLevels.map((level) => {
                    const positionSize = calculations.tradingCapitalUSD * level.leverage;
                    const liquidationMove = (100 / level.leverage).toFixed(1);

                    return (
                      <tr key={level.leverage} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                        <td className="py-3 px-4">
                          <span className="text-white font-medium">{level.leverage}x</span>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <span className="text-white font-medium">{formatUSD(positionSize)}</span>
                            <p className="text-gray-500 text-xs">{formatINR(positionSize * INR_TO_USD)}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`font-medium ${
                            level.risk === 'low' ? 'text-green-400' :
                            level.risk === 'medium' ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            -{liquidationMove}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            level.risk === 'low' ? 'bg-green-500/20 text-green-400' :
                            level.risk === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'
                          }`}>
                            {level.risk === 'low' ? (language === 'en' ? 'Low' : 'कम') :
                             level.risk === 'medium' ? (language === 'en' ? 'Medium' : 'मध्यम') :
                             (language === 'en' ? 'High' : 'उच्च')}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {riskTolerance === 'aggressive' && (
              <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400 text-sm">
                  {language === 'en'
                    ? 'Warning: Aggressive allocation (20%) means larger potential losses. Start with conservative allocation until you have consistent profits.'
                    : 'चेतावनी: एग्रेसिव आवंटन (20%) का मतलब बड़ा संभावित नुकसान है। जब तक लगातार मुनाफा न हो, कंज़र्वेटिव आवंटन से शुरू करें।'
                  }
                </p>
              </div>
            )}
          </div>

          {/* Financial Health Checklist */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-white">{t.financialHealthTitle}</h2>
              <span className={`text-sm font-medium ${
                checklistComplete === totalChecklistItems ? 'text-green-400' : 'text-yellow-400'
              }`}>
                {checklistComplete}/{totalChecklistItems}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">{t.checklistSubtitle}</p>

            <div className="space-y-4">
              {Object.entries(checklist).map(([key, value]) => (
                <label
                  key={key}
                  className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                    value ? 'bg-green-500/10 border border-green-500/30' : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setChecklist(prev => ({ ...prev, [key]: e.target.checked }))}
                    className="mt-1 w-5 h-5 rounded border-gray-600 text-green-500 focus:ring-green-500 focus:ring-offset-gray-900"
                  />
                  <div className="flex-1">
                    <p className={`font-medium ${value ? 'text-green-400' : 'text-white'}`}>
                      {t[`${key}` as keyof typeof t]}
                    </p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      {t[`${key}Desc` as keyof typeof t]}
                    </p>
                  </div>
                  {value && (
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </label>
              ))}
            </div>

            {checklistComplete < totalChecklistItems && (
              <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-400 text-sm">
                  {language === 'en'
                    ? `Complete ${totalChecklistItems - checklistComplete} more item(s) before trading with real money.`
                    : `असली पैसों से ट्रेड करने से पहले ${totalChecklistItems - checklistComplete} और आइटम पूरा करें।`
                  }
                </p>
              </div>
            )}
          </div>

          {/* Salary Context */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-2">{t.salaryContext}</h2>
            <p className="text-gray-400 text-sm mb-6">{t.averageSalaries}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {salaryBenchmarks.map((benchmark) => (
                <div key={benchmark.level} className="bg-gray-800/50 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">{t[benchmark.level as keyof typeof t]}</p>
                  <p className="text-white font-semibold mt-1">{benchmark.range}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-red-400 font-bold mb-3">{t.disclaimerTitle}</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">1.</span>
                    <span>{t.disclaimer1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">2.</span>
                    <span>{t.disclaimer2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">3.</span>
                    <span>{t.disclaimer3}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">4.</span>
                    <span className="font-semibold text-red-400">{t.disclaimer4}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-500/20 to-green-500/20 border border-orange-500/30 rounded-2xl p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-gray-400 mb-6">{t.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={hyperliquid?.referralUrl}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-gray-900 rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                {t.startTrading}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/blog/equity-perps-risks"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-colors"
              >
                {t.learnRisks}
              </Link>
            </div>
          </div>

          {/* Related Tools */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">{t.relatedTools}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/blog/pnl-simulator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                <span className="text-purple-400 text-xs font-medium">SIMULATOR</span>
                <h3 className="text-white font-medium mt-1">{t.pnlSimulator}</h3>
                <p className="text-gray-500 text-sm mt-1">{t.pnlSimulatorDesc}</p>
              </Link>
              <Link href="/blog/liquidation-calculator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors">
                <span className="text-red-400 text-xs font-medium">CALCULATOR</span>
                <h3 className="text-white font-medium mt-1">{t.liquidationCalc}</h3>
                <p className="text-gray-500 text-sm mt-1">{t.liquidationCalcDesc}</p>
              </Link>
              <Link href="/blog/fee-calculator" className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-colors">
                <span className="text-green-400 text-xs font-medium">CALCULATOR</span>
                <h3 className="text-white font-medium mt-1">{t.feeCalc}</h3>
                <p className="text-gray-500 text-sm mt-1">{t.feeCalcDesc}</p>
              </Link>
            </div>
          </div>

          {/* Free Site Notice */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.freeNotice}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
