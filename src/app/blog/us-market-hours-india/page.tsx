'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { platforms } from '@/data/platforms';
import { LanguageToggle } from '@/components/LanguageToggle';
import { translations, marketHolidays, nativeLang, nativeName } from '@/data/translations/us-market-hours-india';

// Market session times in ET (Eastern Time)
const SESSIONS = {
  preMarket: { startHour: 4, startMinute: 0, endHour: 9, endMinute: 30 },
  regular: { startHour: 9, startMinute: 30, endHour: 16, endMinute: 0 },
  afterHours: { startHour: 16, startMinute: 0, endHour: 20, endMinute: 0 },
};

type MarketStatus = 'preMarket' | 'regular' | 'afterHours' | 'closed' | 'holiday' | 'weekend';

function getETTime(): Date {
  // Get current time in ET
  const now = new Date();
  const etString = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
  return new Date(etString);
}

function getISTTime(): Date {
  // Get current time in IST
  const now = new Date();
  const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  return new Date(istString);
}

function isHoliday(date: Date): { isHoliday: boolean; holidayName?: string } {
  const dateStr = date.toISOString().split('T')[0];
  const holiday = marketHolidays.find(h => h.date === dateStr);
  return { isHoliday: !!holiday, holidayName: holiday?.name };
}

function getMarketStatus(etTime: Date): { status: MarketStatus; holidayName?: string } {
  const day = etTime.getDay();

  // Weekend check
  if (day === 0 || day === 6) {
    return { status: 'weekend' };
  }

  // Holiday check
  const holidayCheck = isHoliday(etTime);
  if (holidayCheck.isHoliday) {
    return { status: 'holiday', holidayName: holidayCheck.holidayName };
  }

  const hours = etTime.getHours();
  const minutes = etTime.getMinutes();
  const timeValue = hours * 60 + minutes;

  const preMarketStart = SESSIONS.preMarket.startHour * 60 + SESSIONS.preMarket.startMinute;
  const regularStart = SESSIONS.regular.startHour * 60 + SESSIONS.regular.startMinute;
  const regularEnd = SESSIONS.regular.endHour * 60 + SESSIONS.regular.endMinute;
  const afterHoursEnd = SESSIONS.afterHours.endHour * 60 + SESSIONS.afterHours.endMinute;

  if (timeValue >= preMarketStart && timeValue < regularStart) {
    return { status: 'preMarket' };
  } else if (timeValue >= regularStart && timeValue < regularEnd) {
    return { status: 'regular' };
  } else if (timeValue >= regularEnd && timeValue < afterHoursEnd) {
    return { status: 'afterHours' };
  }

  return { status: 'closed' };
}

function getNextSessionTime(etTime: Date, status: MarketStatus): { session: string; time: Date } {
  const nextDay = new Date(etTime);

  if (status === 'closed') {
    // If before pre-market today
    const hours = etTime.getHours();
    if (hours < 4) {
      nextDay.setHours(4, 0, 0, 0);
      return { session: 'preMarket', time: nextDay };
    }
    // After all sessions, next day pre-market
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(4, 0, 0, 0);
    // Skip weekends
    while (nextDay.getDay() === 0 || nextDay.getDay() === 6) {
      nextDay.setDate(nextDay.getDate() + 1);
    }
    return { session: 'preMarket', time: nextDay };
  }

  if (status === 'weekend' || status === 'holiday') {
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(4, 0, 0, 0);
    // Skip weekends and holidays
    while (nextDay.getDay() === 0 || nextDay.getDay() === 6 || isHoliday(nextDay).isHoliday) {
      nextDay.setDate(nextDay.getDate() + 1);
    }
    return { session: 'preMarket', time: nextDay };
  }

  if (status === 'preMarket') {
    nextDay.setHours(9, 30, 0, 0);
    return { session: 'regular', time: nextDay };
  }

  if (status === 'regular') {
    nextDay.setHours(16, 0, 0, 0);
    return { session: 'afterHours', time: nextDay };
  }

  if (status === 'afterHours') {
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(4, 0, 0, 0);
    // Skip weekends
    while (nextDay.getDay() === 0 || nextDay.getDay() === 6) {
      nextDay.setDate(nextDay.getDate() + 1);
    }
    return { session: 'preMarket', time: nextDay };
  }

  return { session: 'preMarket', time: nextDay };
}

function formatCountdown(ms: number): { hours: number; minutes: number; seconds: number } {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds };
}

// Google Ads conversion tracking for Hyperliquid clicks
function trackHyperliquidClick(url: string) {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17848310269/Zf82CIWA-9sbEP2z3r5C',
      'event_callback': () => {
        window.location.href = url;
      }
    });
    setTimeout(() => {
      window.location.href = url;
    }, 1000);
  } else {
    window.location.href = url;
  }
}

export default function USMarketHoursIndia() {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const t = translations[lang];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const [etTime, setEtTime] = useState<Date | null>(null);
  const [istTime, setIstTime] = useState<Date | null>(null);
  const [marketStatus, setMarketStatus] = useState<{ status: MarketStatus; holidayName?: string }>({ status: 'closed' });
  const [countdown, setCountdown] = useState<{ hours: number; minutes: number; seconds: number }>({ hours: 0, minutes: 0, seconds: 0 });
  const [nextSession, setNextSession] = useState<string>('preMarket');

  const hyperliquid = platforms.find(p => p.id === 'hyperliquid');

  useEffect(() => {
    const updateTime = () => {
      const et = getETTime();
      const ist = getISTTime();
      setEtTime(et);
      setIstTime(ist);

      const status = getMarketStatus(et);
      setMarketStatus(status);

      const next = getNextSessionTime(et, status.status);
      setNextSession(next.session);

      const diff = next.time.getTime() - et.getTime();
      setCountdown(formatCountdown(Math.max(0, diff)));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (marketStatus.status) {
      case 'regular': return 'bg-green-500';
      case 'preMarket': return 'bg-yellow-500';
      case 'afterHours': return 'bg-purple-500';
      default: return 'bg-red-500';
    }
  };

  const getStatusText = () => {
    switch (marketStatus.status) {
      case 'regular': return t.marketOpen;
      case 'preMarket': return t.preMarketOpen;
      case 'afterHours': return t.afterHoursOpen;
      case 'holiday': return `${t.holiday}: ${marketStatus.holidayName}`;
      case 'weekend': return t.weekend;
      default: return t.marketClosed;
    }
  };

  const getNextSessionText = () => {
    switch (nextSession) {
      case 'preMarket': return t.preMarket;
      case 'regular': return t.regularHours;
      case 'afterHours': return t.afterHours;
      default: return t.preMarket;
    }
  };

  const isMarketActive = ['regular', 'preMarket', 'afterHours'].includes(marketStatus.status);

  // Get upcoming holidays (next 6)
  const today = new Date().toISOString().split('T')[0];
  const upcomingHolidays = marketHolidays.filter(h => h.date >= today).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-950 to-orange-500/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="absolute top-4 right-4 z-10">
          <LanguageToggle currentLang={lang} nativeLang={nativeLang} nativeName={nativeName} onToggle={(l) => setLang(l as 'en' | 'hi')} />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{t.pageTitle}</span>
          </nav>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">{t.badge}</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {t.liveBadge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            {t.heroTitle1}
            <br />
            <span className="text-orange-400">{t.heroTitle2}</span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl">
            {t.heroDesc}
          </p>

          {/* Live Clock and Status */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Current Times */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.currentTimeET}
                  </div>
                  <div className="text-3xl font-mono font-bold text-white">
                    {etTime ? etTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }) : '--:--:--'}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    {etTime ? etTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : '---'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.currentTimeIST}
                  </div>
                  <div className="text-3xl font-mono font-bold text-orange-400">
                    {istTime ? istTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }) : '--:--:--'}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    {istTime ? istTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : '---'}
                  </div>
                </div>
              </div>
            </div>

            {/* Market Status */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${getStatusColor()}`}>
                <span className={`w-3 h-3 rounded-full ${isMarketActive ? 'animate-pulse bg-white' : 'bg-white/50'}`} />
                <span className="font-bold text-white">{getStatusText()}</span>
              </div>

              <div className="text-gray-400 text-sm mb-2">
                {isMarketActive ? t.closesIn : t.opensIn}: <span className="text-white font-medium">{getNextSessionText()}</span>
              </div>

              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-white">{String(countdown.hours).padStart(2, '0')}</div>
                  <div className="text-gray-500 text-xs">{t.hours}</div>
                </div>
                <div className="text-2xl font-bold text-gray-600">:</div>
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-white">{String(countdown.minutes).padStart(2, '0')}</div>
                  <div className="text-gray-500 text-xs">{t.minutes}</div>
                </div>
                <div className="text-2xl font-bold text-gray-600">:</div>
                <div className="text-center">
                  <div className="text-3xl font-mono font-bold text-white">{String(countdown.seconds).padStart(2, '0')}</div>
                  <div className="text-gray-500 text-xs">{t.seconds}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Sessions */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">{t.sessionsTitle}</h2>
          <p className="text-gray-400 text-center mb-8">{t.sessionsDesc}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pre-Market */}
            <div className={`bg-gray-900 border rounded-xl p-6 transition-all ${marketStatus.status === 'preMarket' ? 'border-yellow-500 ring-2 ring-yellow-500/20' : 'border-gray-800'}`}>
              <div className="text-4xl mb-4">{t.preMarketSession.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{t.preMarketSession.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">ET:</span>
                  <span className="text-gray-300 font-mono">{t.preMarketSession.etTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">IST:</span>
                  <span className="text-yellow-400 font-mono font-bold">{t.preMarketSession.istTime}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{t.preMarketSession.desc}</p>
              {marketStatus.status === 'preMarket' && (
                <div className="mt-4 px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  {t.open}
                </div>
              )}
            </div>

            {/* Regular */}
            <div className={`bg-gray-900 border rounded-xl p-6 transition-all ${marketStatus.status === 'regular' ? 'border-green-500 ring-2 ring-green-500/20' : 'border-gray-800'}`}>
              <div className="text-4xl mb-4">{t.regularSession.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{t.regularSession.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">ET:</span>
                  <span className="text-gray-300 font-mono">{t.regularSession.etTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">IST:</span>
                  <span className="text-green-400 font-mono font-bold">{t.regularSession.istTime}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{t.regularSession.desc}</p>
              {marketStatus.status === 'regular' && (
                <div className="mt-4 px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  {t.open}
                </div>
              )}
            </div>

            {/* After-Hours */}
            <div className={`bg-gray-900 border rounded-xl p-6 transition-all ${marketStatus.status === 'afterHours' ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-800'}`}>
              <div className="text-4xl mb-4">{t.afterHoursSession.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{t.afterHoursSession.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">ET:</span>
                  <span className="text-gray-300 font-mono">{t.afterHoursSession.etTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">IST:</span>
                  <span className="text-purple-400 font-mono font-bold">{t.afterHoursSession.istTime}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{t.afterHoursSession.desc}</p>
              {marketStatus.status === 'afterHours' && (
                <div className="mt-4 px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  {t.open}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 24-Hour Timeline Visual */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">{t.timelineTitle}</h2>
          <p className="text-gray-400 text-center mb-8">{t.timelineDesc}</p>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Hour labels */}
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24].map(h => (
                  <span key={h}>{h === 24 ? '0' : h}:00</span>
                ))}
              </div>

              {/* Timeline bar */}
              <div className="relative h-12 bg-gray-800 rounded-lg overflow-hidden">
                {/* Pre-market: 2:30 PM - 8:00 PM IST (14.5 to 20) */}
                <div
                  className="absolute h-full bg-yellow-500/30 border-l-2 border-r-2 border-yellow-500"
                  style={{ left: `${(14.5/24)*100}%`, width: `${(5.5/24)*100}%` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-yellow-400 text-xs font-medium">
                    Pre-Market
                  </div>
                </div>

                {/* Regular: 8:00 PM - 2:30 AM IST (20 to 24 + 0 to 2.5) */}
                <div
                  className="absolute h-full bg-green-500/30 border-l-2 border-green-500"
                  style={{ left: `${(20/24)*100}%`, width: `${(4/24)*100}%` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-green-400 text-xs font-medium">
                    Regular
                  </div>
                </div>
                <div
                  className="absolute h-full bg-green-500/30 border-r-2 border-green-500"
                  style={{ left: '0%', width: `${(2.5/24)*100}%` }}
                />

                {/* After-hours: 2:30 AM - 6:30 AM IST (2.5 to 6.5) */}
                <div
                  className="absolute h-full bg-purple-500/30 border-l-2 border-r-2 border-purple-500"
                  style={{ left: `${(2.5/24)*100}%`, width: `${(4/24)*100}%` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-purple-400 text-xs font-medium">
                    After-Hours
                  </div>
                </div>

                {/* Current time indicator */}
                {istTime && (
                  <div
                    className="absolute w-0.5 h-full bg-orange-500 z-10"
                    style={{ left: `${((istTime.getHours() + istTime.getMinutes()/60)/24)*100}%` }}
                  >
                    <div className="absolute -top-6 -left-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-4 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500/30 border border-yellow-500 rounded" />
                  <span className="text-gray-400">Pre-Market (2:30 PM - 8:00 PM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500/30 border border-green-500 rounded" />
                  <span className="text-gray-400">Regular (8:00 PM - 2:30 AM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500/30 border border-purple-500 rounded" />
                  <span className="text-gray-400">After-Hours (2:30 AM - 6:30 AM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <span className="text-gray-400">Current Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Perps Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
              <span className="text-cyan-400 font-medium">24/7</span>
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">{t.perpsTitle}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.perpsDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {t.perpsFeatures.map((feature, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">{t.perpsComparison.title}</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
                <div className="text-gray-400 text-sm mb-2">{t.perpsComparison.traditional.label}</div>
                <div className="text-4xl font-bold text-red-400 mb-1">{t.perpsComparison.traditional.hours}</div>
                <div className="text-gray-500 text-sm">{t.perpsComparison.traditional.weekly}</div>
                <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500/50 rounded-full" style={{ width: '19%' }} />
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                <div className="text-gray-400 text-sm mb-2">{t.perpsComparison.perps.label}</div>
                <div className="text-4xl font-bold text-green-400 mb-1">{t.perpsComparison.perps.hours}</div>
                <div className="text-gray-500 text-sm">{t.perpsComparison.perps.weekly}</div>
                <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500/50 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => hyperliquid?.referralUrl && trackHyperliquidClick(hyperliquid.referralUrl)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
            >
              {t.startTradingPerps}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Holiday Calendar */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">{t.holidaysTitle}</h2>
          <p className="text-gray-400 text-center mb-8">{t.holidaysDesc}</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {upcomingHolidays.map((holiday, i) => {
              const date = new Date(holiday.date + 'T12:00:00');
              const isUpcoming = new Date(holiday.date) > new Date();

              return (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-white font-medium">{lang === 'hi' ? holiday.nameHi : holiday.name}</div>
                      <div className="text-gray-400 text-sm">
                        {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${isUpcoming ? 'bg-red-500/20 text-red-400' : 'bg-gray-700 text-gray-400'}`}>
                      {t.closed}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-400 text-center">
              {t.holidaysNote}
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 text-sm text-green-400 text-center">
              {t.perpsOpenNote}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">{t.quickRefTitle}</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {t.quickRefItems.map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-white font-medium mb-1">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
            <p className="text-yellow-400 text-sm">{t.dstNote}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.faqTitle}</h2>

          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-orange-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
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

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/20 to-cyan-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">{t.ctaDesc}</p>
            <button
              onClick={() => hyperliquid?.referralUrl && trackHyperliquidClick(hyperliquid.referralUrl)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-lg hover:from-orange-400 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/25 cursor-pointer"
            >
              {t.ctaButton}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">{t.relatedTitle}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {t.relatedGuides.map((guide, i) => (
              <Link key={i} href={guide.href} className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-orange-500/50 transition-colors">
                <span className={`text-xs font-medium ${i === 0 ? 'text-orange-400' : i === 1 ? 'text-green-400' : 'text-yellow-400'}`}>{guide.tag}</span>
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
