'use client';

/**
 * GA4 Analytics for Next.js App Router
 * Measurement ID: G-6X38MMTJQV
 */

import { createContext, useContext, useEffect, useCallback, useRef, ReactNode } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// ===========================================
// TYPES
// ===========================================

interface AnalyticsContextValue {
  track: (eventName: string, params?: Record<string, unknown>) => void;
  trackAffiliateClick: (params: AffiliateClickParams) => void;
  trackSearch: (params: SearchParams) => void;
  trackCalculatorUsed: (params: CalculatorParams) => void;
  trackTableSort: (params: TableSortParams) => void;
  trackFilterApplied: (params: FilterParams) => void;
  trackPlatformExpand: (params: PlatformExpandParams) => void;
  trackCtaClick: (params: CtaClickParams) => void;
}

interface AffiliateClickParams {
  platform: string;
  location: string;
  buttonText?: string;
  position?: number;
  comparisonPair?: string;
}

interface SearchParams {
  term: string;
  resultsCount: number;
}

interface CalculatorParams {
  calculatorType: string;
  tradeSizeUsd?: number;
  platforms?: string[];
  winner?: string;
}

interface TableSortParams {
  column: string;
  direction: string;
}

interface FilterParams {
  filterType: string;
  filterValue: string;
  resultsCount: number;
}

interface PlatformExpandParams {
  platform: string;
  sectionExpanded: string;
}

interface CtaClickParams {
  text: string;
  location: string;
  destination: string;
}

// Extend Window for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// ===========================================
// CONSTANTS
// ===========================================

const GA4_MEASUREMENT_ID = 'G-6X38MMTJQV';
const DEBUG = process.env.NODE_ENV === 'development';

// ===========================================
// CONTEXT
// ===========================================

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);

// ===========================================
// PROVIDER
// ===========================================

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route change
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });

      if (DEBUG) {
        console.log('[Analytics] Page view:', pathname);
      }
    }
  }, [pathname, searchParams]);

  // Helper to get page type
  const getPageType = useCallback(() => {
    if (pathname === '/') return 'homepage';
    if (pathname === '/blog') return 'blog_index';
    if (pathname.includes('-vs-')) return 'comparison';
    if (pathname.includes('calculator')) return 'calculator';
    if (pathname.includes('tracker')) return 'tracker';
    if (pathname.startsWith('/blog/')) return 'platform_review';
    return 'other';
  }, [pathname]);

  // Core tracking function
  const track = useCallback((eventName: string, params: Record<string, unknown> = {}) => {
    if (typeof window.gtag === 'undefined') {
      if (DEBUG) console.warn('[Analytics] gtag not ready');
      return;
    }

    const enrichedParams = {
      ...params,
      page_type: getPageType(),
      page_path: pathname,
    };

    window.gtag('event', eventName, enrichedParams);

    if (DEBUG) {
      console.log('[Analytics] Event:', eventName, enrichedParams);
    }
  }, [getPageType, pathname]);

  // ===========================================
  // TRACKING FUNCTIONS
  // ===========================================

  const trackAffiliateClick = useCallback(({ platform, location, buttonText, position, comparisonPair }: AffiliateClickParams) => {
    track('affiliate_click', {
      platform_name: platform?.toLowerCase(),
      link_location: location,
      button_text: buttonText,
      position,
      comparison_pair: comparisonPair,
    });
  }, [track]);

  const trackSearch = useCallback(({ term, resultsCount }: SearchParams) => {
    track('search', {
      search_term: term,
      results_count: resultsCount,
    });
  }, [track]);

  const trackCalculatorUsed = useCallback(({ calculatorType, tradeSizeUsd, platforms, winner }: CalculatorParams) => {
    const sizeBucket = !tradeSizeUsd ? undefined
      : tradeSizeUsd < 100 ? '0-100'
      : tradeSizeUsd < 1000 ? '100-1000'
      : tradeSizeUsd < 5000 ? '1000-5000'
      : tradeSizeUsd < 10000 ? '5000-10000'
      : '10000+';

    track('calculator_used', {
      calculator_type: calculatorType,
      trade_size_bucket: sizeBucket,
      platforms_calculated: platforms?.map(p => p.toLowerCase()).join(','),
      result_winner: winner?.toLowerCase(),
    });
  }, [track]);

  const trackTableSort = useCallback(({ column, direction }: TableSortParams) => {
    track('table_sort', {
      sort_column: column,
      sort_direction: direction,
    });
  }, [track]);

  const trackFilterApplied = useCallback(({ filterType, filterValue, resultsCount }: FilterParams) => {
    track('filter_applied', {
      filter_type: filterType,
      filter_value: filterValue,
      results_count: resultsCount,
    });
  }, [track]);

  const trackPlatformExpand = useCallback(({ platform, sectionExpanded }: PlatformExpandParams) => {
    track('platform_expand', {
      platform_name: platform?.toLowerCase(),
      section_expanded: sectionExpanded,
    });
  }, [track]);

  const trackCtaClick = useCallback(({ text, location, destination }: CtaClickParams) => {
    track('internal_cta_click', {
      cta_text: text,
      cta_location: location,
      destination,
    });
  }, [track]);

  const value: AnalyticsContextValue = {
    track,
    trackAffiliateClick,
    trackSearch,
    trackCalculatorUsed,
    trackTableSort,
    trackFilterApplied,
    trackPlatformExpand,
    trackCtaClick,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

// ===========================================
// HOOK
// ===========================================

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}

// ===========================================
// AUTO-TRACKING HOOKS
// ===========================================

/**
 * Track scroll depth automatically
 */
export function useScrollTracking() {
  const { track } = useAnalytics();
  const trackedRef = useRef(new Set<number>());

  useEffect(() => {
    const milestones = [25, 50, 75, 100];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = Math.round((scrollTop / docHeight) * 100);

      milestones.forEach(milestone => {
        if (percentage >= milestone && !trackedRef.current.has(milestone)) {
          trackedRef.current.add(milestone);
          track('scroll_depth', {
            depth_percentage: milestone,
            depth_pixels: Math.round(scrollTop),
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [track]);
}

/**
 * Track time on page automatically
 */
export function useTimeTracking() {
  const { track } = useAnalytics();
  const trackedRef = useRef(new Set<number>());

  useEffect(() => {
    const intervals = [30, 60, 120, 300];
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);

      intervals.forEach(interval => {
        if (elapsed >= interval && !trackedRef.current.has(interval)) {
          trackedRef.current.add(interval);
          track('time_engaged', { engaged_seconds: interval });
        }
      });

      if (elapsed > Math.max(...intervals)) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [track]);
}

export default useAnalytics;
