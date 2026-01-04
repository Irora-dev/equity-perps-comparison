'use client';

import { useState } from 'react';
import Link from 'next/link';

type Country = 'kenya' | 'tanzania' | 'ghana' | 'uganda' | 'nigeria' | 'senegal' | 'ivory-coast' | 'cameroon';
type MobileService = 'mpesa' | 'mtn-momo' | 'airtel-money' | 'orange-money';

interface ConversionPath {
  platform: string;
  steps: string[];
  estimatedTime: string;
  fees: string;
  minAmount: string;
  recommended: boolean;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
}

interface MobileServiceInfo {
  name: string;
  shortName: string;
  color: string;
  bgColor: string;
  borderColor: string;
  countries: Country[];
  paths: ConversionPath[];
}

interface CountryInfo {
  name: string;
  currency: string;
  flag: string;
  services: MobileService[];
  bestPlatform: string;
  notes: string[];
}

const mobileServices: Record<MobileService, MobileServiceInfo> = {
  'mpesa': {
    name: 'M-Pesa',
    shortName: 'M-Pesa',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    countries: ['kenya', 'tanzania'],
    paths: [
      {
        platform: 'Binance P2P',
        steps: [
          'Create/login to Binance account (KYC required)',
          'Go to P2P Trading > Buy > USDT',
          'Filter by M-Pesa payment method',
          'Select a seller with 95%+ completion rate',
          'Enter amount and place order',
          'Send M-Pesa to seller\'s phone number',
          'Confirm payment in Binance',
          'Receive USDT, convert to USDC in Spot'
        ],
        estimatedTime: '15-30 minutes',
        fees: '0% platform fee + 1-3% P2P spread',
        minAmount: '~$10 USD',
        recommended: true,
        difficulty: 'Easy'
      },
      {
        platform: 'Yellow Card',
        steps: [
          'Download Yellow Card app',
          'Complete KYC verification',
          'Select Buy > USDC',
          'Choose M-Pesa as payment',
          'Enter amount in KES/TZS',
          'Send M-Pesa payment',
          'USDC arrives in Yellow Card wallet',
          'Withdraw to external wallet'
        ],
        estimatedTime: '10-20 minutes',
        fees: '1-2% spread',
        minAmount: '~$5 USD',
        recommended: true,
        difficulty: 'Easy'
      },
      {
        platform: 'Paxful',
        steps: [
          'Create Paxful account',
          'Complete identity verification',
          'Browse USDT offers accepting M-Pesa',
          'Start trade with verified seller',
          'Send M-Pesa payment',
          'Wait for seller confirmation',
          'Convert USDT to USDC on exchange'
        ],
        estimatedTime: '20-45 minutes',
        fees: '1% + 2-5% P2P spread',
        minAmount: '$10 USD',
        recommended: false,
        difficulty: 'Medium'
      }
    ]
  },
  'mtn-momo': {
    name: 'MTN Mobile Money',
    shortName: 'MTN MoMo',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    countries: ['ghana', 'uganda', 'nigeria', 'cameroon', 'ivory-coast'],
    paths: [
      {
        platform: 'Binance P2P',
        steps: [
          'Create/login to Binance account',
          'Navigate to P2P Trading section',
          'Select Buy > USDT > MTN Mobile Money',
          'Choose seller with high completion rate',
          'Place order and note payment details',
          'Send MTN MoMo to seller',
          'Mark payment as complete',
          'Receive USDT, swap to USDC'
        ],
        estimatedTime: '15-30 minutes',
        fees: '0% platform fee + 1-3% spread',
        minAmount: '~$10 USD',
        recommended: true,
        difficulty: 'Easy'
      },
      {
        platform: 'Yellow Card',
        steps: [
          'Install Yellow Card app',
          'Register and verify identity',
          'Select Buy cryptocurrency',
          'Choose USDC and MTN MoMo',
          'Enter local currency amount',
          'Complete MTN MoMo payment',
          'USDC credited to wallet',
          'Withdraw to trading platform'
        ],
        estimatedTime: '10-25 minutes',
        fees: '1-2% spread',
        minAmount: '~$5 USD',
        recommended: true,
        difficulty: 'Easy'
      },
      {
        platform: 'Luno (Ghana/Nigeria)',
        steps: [
          'Download Luno app',
          'Complete verification',
          'Deposit via MTN MoMo',
          'Buy USDC directly',
          'Withdraw to wallet'
        ],
        estimatedTime: '15-30 minutes',
        fees: '1.5-2%',
        minAmount: '~$1 USD',
        recommended: false,
        difficulty: 'Easy'
      }
    ]
  },
  'airtel-money': {
    name: 'Airtel Money',
    shortName: 'Airtel',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    countries: ['kenya', 'uganda', 'tanzania', 'nigeria'],
    paths: [
      {
        platform: 'Binance P2P',
        steps: [
          'Access Binance P2P marketplace',
          'Select Buy > USDT',
          'Filter for Airtel Money payment',
          'Review seller ratings and terms',
          'Initiate trade and send Airtel Money',
          'Confirm payment in chat',
          'Receive USDT in Binance wallet',
          'Convert USDT to USDC'
        ],
        estimatedTime: '15-35 minutes',
        fees: '0% + 1-4% spread',
        minAmount: '~$10 USD',
        recommended: true,
        difficulty: 'Easy'
      },
      {
        platform: 'Yellow Card',
        steps: [
          'Open Yellow Card app',
          'Verify your account',
          'Select USDC purchase',
          'Pay with Airtel Money',
          'Receive USDC instantly',
          'Transfer to trading wallet'
        ],
        estimatedTime: '10-20 minutes',
        fees: '1-2%',
        minAmount: '~$5 USD',
        recommended: true,
        difficulty: 'Easy'
      }
    ]
  },
  'orange-money': {
    name: 'Orange Money',
    shortName: 'Orange',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    countries: ['senegal', 'ivory-coast', 'cameroon'],
    paths: [
      {
        platform: 'Binance P2P',
        steps: [
          'Register on Binance',
          'Complete KYC verification',
          'Go to P2P > Buy USDT',
          'Filter by Orange Money',
          'Select trusted seller',
          'Send Orange Money payment',
          'Confirm and receive USDT',
          'Swap USDT for USDC'
        ],
        estimatedTime: '20-40 minutes',
        fees: '0% + 2-5% spread',
        minAmount: '~$10 USD',
        recommended: true,
        difficulty: 'Medium'
      },
      {
        platform: 'Yellow Card',
        steps: [
          'Download Yellow Card',
          'Complete verification process',
          'Select crypto to buy',
          'Pay via Orange Money',
          'Receive crypto in app',
          'Withdraw to external wallet'
        ],
        estimatedTime: '15-30 minutes',
        fees: '1.5-3%',
        minAmount: '~$5 USD',
        recommended: true,
        difficulty: 'Easy'
      },
      {
        platform: 'Local P2P (Telegram/WhatsApp)',
        steps: [
          'Find trusted local traders',
          'Verify trader reputation',
          'Agree on rate and amount',
          'Send Orange Money first',
          'Receive USDC to wallet',
          'Use escrow if available'
        ],
        estimatedTime: '30-60 minutes',
        fees: '3-8% spread',
        minAmount: 'Varies',
        recommended: false,
        difficulty: 'Advanced'
      }
    ]
  }
};

const countries: Record<Country, CountryInfo> = {
  kenya: {
    name: 'Kenya',
    currency: 'KES',
    flag: '🇰🇪',
    services: ['mpesa', 'airtel-money'],
    bestPlatform: 'Binance P2P or Yellow Card',
    notes: [
      'M-Pesa is by far the most popular method',
      'Very active P2P market with competitive rates',
      'Yellow Card has direct M-Pesa integration'
    ]
  },
  tanzania: {
    name: 'Tanzania',
    currency: 'TZS',
    flag: '🇹🇿',
    services: ['mpesa', 'airtel-money'],
    bestPlatform: 'Binance P2P',
    notes: [
      'M-Pesa (Vodacom) dominates the market',
      'Fewer P2P sellers than Kenya',
      'Consider buying USDT first, then converting'
    ]
  },
  ghana: {
    name: 'Ghana',
    currency: 'GHS',
    flag: '🇬🇭',
    services: ['mtn-momo', 'airtel-money'],
    bestPlatform: 'Binance P2P or Yellow Card',
    notes: [
      'MTN MoMo is the dominant payment method',
      'Very active crypto trading community',
      'Yellow Card popular for direct purchases'
    ]
  },
  uganda: {
    name: 'Uganda',
    currency: 'UGX',
    flag: '🇺🇬',
    services: ['mtn-momo', 'airtel-money'],
    bestPlatform: 'Binance P2P',
    notes: [
      'Both MTN MoMo and Airtel Money widely accepted',
      'Growing P2P market',
      'Compare rates between services'
    ]
  },
  nigeria: {
    name: 'Nigeria',
    currency: 'NGN',
    flag: '🇳🇬',
    services: ['mtn-momo'],
    bestPlatform: 'Binance P2P or Yellow Card',
    notes: [
      'Bank transfers often more common than MoMo',
      'Very large and active P2P market',
      'Multiple platform options available',
      'Consider using bank transfer for larger amounts'
    ]
  },
  senegal: {
    name: 'Senegal',
    currency: 'XOF',
    flag: '🇸🇳',
    services: ['orange-money'],
    bestPlatform: 'Binance P2P or Yellow Card',
    notes: [
      'Orange Money is the primary mobile money service',
      'XOF (CFA Franc) used across West Africa',
      'Smaller P2P market - verify sellers carefully'
    ]
  },
  'ivory-coast': {
    name: 'Ivory Coast',
    currency: 'XOF',
    flag: '🇨🇮',
    services: ['orange-money', 'mtn-momo'],
    bestPlatform: 'Binance P2P',
    notes: [
      'Orange Money and MTN MoMo both available',
      'CFA Franc shared with other WAEMU countries',
      'Growing crypto adoption'
    ]
  },
  cameroon: {
    name: 'Cameroon',
    currency: 'XAF',
    flag: '🇨🇲',
    services: ['orange-money', 'mtn-momo'],
    bestPlatform: 'Binance P2P',
    notes: [
      'Both Orange Money and MTN MoMo popular',
      'Central African CFA Franc (XAF)',
      'Check for available P2P sellers before trading'
    ]
  }
};

const platformComparison = [
  {
    name: 'Binance P2P',
    pros: ['0% trading fees', 'Highest liquidity', 'Escrow protection', 'Most payment options'],
    cons: ['Full KYC required', 'Can be complex for beginners'],
    bestFor: 'Experienced traders, best rates',
    rating: 4.8
  },
  {
    name: 'Yellow Card',
    pros: ['Direct mobile money integration', 'Simple interface', 'Fast transactions', 'Good support'],
    cons: ['Slightly higher spread', 'Limited to Africa'],
    bestFor: 'Beginners, quick purchases',
    rating: 4.6
  },
  {
    name: 'Paxful',
    pros: ['Many payment options', 'Gift card support', 'Good for small amounts'],
    cons: ['Higher fees', 'Slower transactions', 'Some scam risk'],
    bestFor: 'Alternative payment methods',
    rating: 4.0
  }
];

const safetyTips = {
  do: [
    'Only trade on established platforms with escrow',
    'Verify seller completion rate (95%+ recommended)',
    'Check seller trade volume (100+ trades is good)',
    'Keep all transaction records and screenshots',
    'Start with small test transactions',
    'Double-check wallet addresses before sending',
    'Use official mobile money apps only'
  ],
  dont: [
    'Never trade outside the platform',
    'Never release crypto before payment clears',
    'Avoid sellers with low ratings or new accounts',
    'Do not share OTP or PIN codes',
    'Never mention "crypto" in payment notes',
    'Avoid urgent or pressuring sellers',
    'Do not skip the escrow system'
  ]
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert Mobile Money to USDC in Africa',
  description: 'Step-by-step guide to convert M-Pesa, MTN Mobile Money, Airtel Money, and Orange Money to USDC cryptocurrency.',
  totalTime: 'PT30M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '10'
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Choose a Platform',
      text: 'Select Binance P2P, Yellow Card, or another supported exchange based on your country and mobile money service.'
    },
    {
      '@type': 'HowToStep',
      name: 'Complete Verification',
      text: 'Register and complete KYC verification on your chosen platform.'
    },
    {
      '@type': 'HowToStep',
      name: 'Find a Seller',
      text: 'Browse P2P listings and select a verified seller accepting your mobile money service.'
    },
    {
      '@type': 'HowToStep',
      name: 'Make Payment',
      text: 'Send mobile money payment to the seller using M-Pesa, MTN MoMo, Airtel Money, or Orange Money.'
    },
    {
      '@type': 'HowToStep',
      name: 'Receive USDC',
      text: 'Once payment is confirmed, receive USDT and convert to USDC, or receive USDC directly on Yellow Card.'
    }
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Mobile Money Account' },
    { '@type': 'HowToTool', name: 'Crypto Exchange Account' },
    { '@type': 'HowToTool', name: 'Crypto Wallet' }
  ]
};

export default function MobileMoneyToUSDCPage() {
  const [selectedCountry, setSelectedCountry] = useState<Country>('kenya');
  const [selectedService, setSelectedService] = useState<MobileService>('mpesa');

  const country = countries[selectedCountry];
  const service = mobileServices[selectedService];

  // Update service when country changes if current service not available
  const handleCountryChange = (newCountry: Country) => {
    setSelectedCountry(newCountry);
    const countryServices = countries[newCountry].services;
    if (!countryServices.includes(selectedService)) {
      setSelectedService(countryServices[0]);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 relative overflow-hidden">
          {/* African-inspired decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-red-500/10 rounded-full blur-3xl" />

          <div className="max-w-4xl mx-auto text-center relative">
            <nav className="text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-400">Mobile Money to USDC</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-400 font-medium">Africa Mobile Money Guide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Convert <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-400 to-red-400">Mobile Money</span>
              <br />
              to USDC
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Step-by-step guides for M-Pesa, MTN MoMo, Airtel Money, and Orange Money.
              Convert your local mobile money to crypto and start trading.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                <div className="text-2xl font-bold text-emerald-400">4</div>
                <div className="text-slate-400 text-sm">Mobile Services</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                <div className="text-2xl font-bold text-amber-400">8</div>
                <div className="text-slate-400 text-sm">Countries Covered</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                <div className="text-2xl font-bold text-red-400">15-30</div>
                <div className="text-slate-400 text-sm">Minutes Avg</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">~$10</div>
                <div className="text-slate-400 text-sm">Minimum</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Services Overview */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Supported Mobile Money Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {(Object.entries(mobileServices) as [MobileService, MobileServiceInfo][]).map(([key, svc]) => (
                <div
                  key={key}
                  className={`${svc.bgColor} border ${svc.borderColor} rounded-xl p-5 transition-transform hover:scale-105`}
                >
                  <h3 className={`text-lg font-bold ${svc.color} mb-2`}>{svc.name}</h3>
                  <p className="text-slate-400 text-sm mb-3">
                    Available in {svc.countries.length} countries
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {svc.countries.map(c => (
                      <span key={c} className="text-lg" title={countries[c].name}>
                        {countries[c].flag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Country/Service Selector */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Find Your Conversion Path</h2>
            <p className="text-slate-400 text-center mb-8">Select your country and mobile money service to see the best options</p>

            {/* Country Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-3">Select Your Country</label>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(countries) as [Country, CountryInfo][]).map(([key, c]) => (
                  <button
                    key={key}
                    onClick={() => handleCountryChange(key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      selectedCountry === key
                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-300 mb-3">Select Mobile Money Service</label>
              <div className="flex flex-wrap gap-2">
                {country.services.map(svcKey => {
                  const svc = mobileServices[svcKey];
                  return (
                    <button
                      key={svcKey}
                      onClick={() => setSelectedService(svcKey)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedService === svcKey
                          ? `${svc.bgColor.replace('/10', '')} ${svc.color} border-2 ${svc.borderColor}`
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {svc.shortName}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Country Info Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{country.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                  <p className="text-slate-400">Currency: {country.currency} | Best Platform: {country.bestPlatform}</p>
                </div>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <h4 className="text-amber-400 font-semibold mb-2">Country Notes</h4>
                <ul className="space-y-1">
                  {country.notes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-amber-400 mt-0.5">*</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Conversion Paths */}
            <div className="space-y-6">
              <h3 className={`text-2xl font-bold ${service.color}`}>
                {service.name} to USDC - Conversion Methods
              </h3>

              {service.paths.map((path, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 rounded-2xl border ${path.recommended ? service.borderColor : 'border-slate-700/50'} overflow-hidden`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h4 className="text-xl font-bold text-white">{path.platform}</h4>
                        {path.recommended && (
                          <span className={`px-2 py-1 ${service.bgColor} ${service.color} text-xs font-bold rounded-full`}>
                            Recommended
                          </span>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        path.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-400' :
                        path.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {path.difficulty}
                      </span>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-slate-400 text-xs mb-1">Time</div>
                        <div className="text-white font-semibold">{path.estimatedTime}</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-slate-400 text-xs mb-1">Fees</div>
                        <div className="text-white font-semibold text-sm">{path.fees}</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-slate-400 text-xs mb-1">Minimum</div>
                        <div className="text-white font-semibold">{path.minAmount}</div>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-2">
                      <h5 className="text-slate-300 font-medium mb-3">Step-by-Step:</h5>
                      <ol className="space-y-2">
                        {path.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <span className={`w-6 h-6 rounded-full ${service.bgColor} ${service.color} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                              {i + 1}
                            </span>
                            <span className="text-sm">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Comparison */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Comparison</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {platformComparison.map((platform, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-amber-400">*</span>
                      <span className="text-white font-bold">{platform.rating}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-emerald-400 text-sm font-semibold mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {platform.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-emerald-400">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-red-400 text-sm font-semibold mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {platform.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-red-400">-</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <span className="text-slate-400 text-xs">Best For:</span>
                    <p className="text-white font-medium text-sm">{platform.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">P2P Safety Guide</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Do This</h3>
                <ul className="space-y-3">
                  {safetyTips.do.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="text-emerald-400 font-bold">+</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">Avoid This</h3>
                <ul className="space-y-3">
                  {safetyTips.dont.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="text-red-400 font-bold">x</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Warning Box */}
            <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">!</span>
                <div>
                  <h4 className="text-amber-400 font-bold mb-2">Important Reminder</h4>
                  <p className="text-slate-300">
                    Cryptocurrency regulations vary by country. Always check your local laws before trading.
                    Never invest more than you can afford to lose, and always use official apps and verified platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Which platform has the best rates?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">v</span>
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  Binance P2P typically offers the best rates due to its high liquidity and 0% platform fees.
                  However, rates vary by seller and time of day. For convenience, Yellow Card offers competitive
                  rates with a simpler process. Always compare rates across platforms before making large transactions.
                </div>
              </details>

              <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">How long does verification take?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">v</span>
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  Verification times vary: Binance typically takes 10-30 minutes for basic KYC. Yellow Card
                  often completes verification within a few hours. Some platforms may take up to 24-48 hours
                  during busy periods. Have your ID and a clear selfie ready to speed up the process.
                </div>
              </details>

              <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Can I buy USDC directly or do I need USDT first?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">v</span>
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  On Yellow Card, you can often buy USDC directly. On Binance P2P, USDT has more liquidity,
                  so you may get better rates buying USDT first and then converting to USDC in the spot market
                  (conversion is free or nearly free). Either way, you will end up with USDC for trading.
                </div>
              </details>

              <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">What if my mobile money payment fails?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">v</span>
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  If your payment fails, do not mark it as complete on the platform. Contact the seller via
                  the platform chat, provide any error messages, and cancel the order if needed. The crypto
                  in escrow will be returned to the seller. You can then try again with another seller or
                  troubleshoot your mobile money account first.
                </div>
              </details>

              <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Is it safe to use P2P trading?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">v</span>
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  Yes, when using reputable platforms with escrow protection like Binance P2P and Yellow Card.
                  The escrow system holds the crypto until both parties confirm the transaction. Always verify
                  seller ratings, never trade outside the platform, and follow the safety tips above. Start
                  with small amounts until you are comfortable with the process.
                </div>
              </details>

              <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 group">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">What is the minimum amount I can convert?</span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">v</span>
                </summary>
                <div className="px-6 pb-6 text-slate-300">
                  Minimums vary by platform and seller. Yellow Card allows purchases from around $5 USD equivalent.
                  Binance P2P typically starts at $10 USD, though individual sellers may set higher minimums.
                  Check the specific limits for your chosen platform and payment method.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-red-500/20 rounded-2xl p-8 border border-amber-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Trading?
              </h2>
              <p className="text-xl text-slate-300 mb-6">
                Once you have USDC, you can trade equity perpetuals 24/7 on decentralized platforms.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/start"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Start Trading Now
                </Link>
                <Link
                  href="/blog/wallet-setup-guide"
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Wallet Setup Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 px-4 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/blog/trade-us-stocks-from-kenya" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-emerald-500/50 transition-colors">
                <span className="text-xs font-medium text-emerald-400">Kenya</span>
                <h3 className="text-white font-medium mt-1">Trade US Stocks from Kenya</h3>
                <p className="text-slate-500 text-sm mt-1">Complete guide for Kenyan traders</p>
              </Link>
              <Link href="/blog/trade-us-stocks-from-nigeria" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-amber-500/50 transition-colors">
                <span className="text-xs font-medium text-amber-400">Nigeria</span>
                <h3 className="text-white font-medium mt-1">Trade US Stocks from Nigeria</h3>
                <p className="text-slate-500 text-sm mt-1">NGN to USDC conversion guide</p>
              </Link>
              <Link href="/blog/p2p-usdc-guide" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-red-500/50 transition-colors">
                <span className="text-xs font-medium text-red-400">Global</span>
                <h3 className="text-white font-medium mt-1">Global P2P Guide</h3>
                <p className="text-slate-500 text-sm mt-1">P2P methods worldwide</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
