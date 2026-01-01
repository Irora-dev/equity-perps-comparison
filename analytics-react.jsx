/**
 * GA4 Analytics React Hooks
 * For Next.js / React applications
 * 
 * Usage:
 * 1. Wrap your app with <AnalyticsProvider measurementId="G-XXXXXXXXXX">
 * 2. Use hooks: const { trackAffiliateClick } = useAnalytics()
 */

import { createContext, useContext, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router'; // Remove if not using Next.js

// ===========================================
// TYPES (for TypeScript - remove if using plain JS)
// ===========================================

/**
 * @typedef {Object} AnalyticsContextValue
 * @property {function} trackAffiliateClick
 * @property {function} trackComparisonStarted
 * @property {function} trackCalculatorUsed
 * @property {function} trackTableSort
 * @property {function} trackFilterApplied
 * @property {function} trackSearch
 * @property {function} trackFaqExpanded
 * @property {function} trackPlatformExpand
 * @property {function} trackTabSwitch
 * @property {function} trackCtaClick
 */

// ===========================================
// CONTEXT
// ===========================================

const AnalyticsContext = createContext(null);

// ===========================================
// PROVIDER COMPONENT
// ===========================================

export function AnalyticsProvider({ children, measurementId, debug = false }) {
  const router = useRouter?.(); // Optional chaining for non-Next.js apps

  // Initialize GA4
  useEffect(() => {
    if (!measurementId) {
      console.warn('[Analytics] No measurement ID provided');
      return;
    }

    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    gtag('js', new Date());
    gtag('config', measurementId, {
      debug_mode: debug,
      send_page_view: false, // We'll handle this manually for SPAs
    });

    if (debug) {
      console.log('[Analytics] Initialized with:', measurementId);
    }

    return () => {
      document.head.removeChild(script);
    };
  }, [measurementId, debug]);

  // Track page views on route change (Next.js)
  useEffect(() => {
    if (!router) return;

    const handleRouteChange = (url) => {
      gtag('event', 'page_view', {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      });
    };

    router.events?.on('routeChangeComplete', handleRouteChange);
    return () => router.events?.off('routeChangeComplete', handleRouteChange);
  }, [router]);

  // Helper to get page type
  const getPageType = useCallback(() => {
    const path = window.location.pathname;
    if (path === '/') return 'homepage';
    if (path.startsWith('/platforms/') && path.split('/').length > 3) return 'platform_review';
    if (path.startsWith('/platforms')) return 'platforms_index';
    if (path.startsWith('/compare/') && path.includes('-vs-')) return 'comparison';
    if (path.startsWith('/compare')) return 'compare_index';
    if (path.startsWith('/guides/')) return 'guide';
    return 'other';
  }, []);

  // Core tracking function
  const track = useCallback((eventName, params = {}) => {
    if (typeof gtag === 'undefined') {
      console.warn('[Analytics] gtag not ready');
      return;
    }

    const enrichedParams = {
      ...params,
      page_type: getPageType(),
      page_path: window.location.pathname,
    };

    gtag('event', eventName, enrichedParams);

    if (debug) {
      console.log('[Analytics] Event:', eventName, enrichedParams);
    }
  }, [getPageType, debug]);

  // ===========================================
  // TRACKING FUNCTIONS
  // ===========================================

  const trackAffiliateClick = useCallback(({ platform, location, buttonText, position, comparisonPair }) => {
    track('affiliate_click', {
      platform_name: platform?.toLowerCase(),
      link_location: location,
      button_text: buttonText,
      position,
      comparison_pair: comparisonPair,
    });
  }, [track]);

  const trackPlatformExpand = useCallback(({ platform, sectionExpanded }) => {
    track('platform_expand', {
      platform_name: platform?.toLowerCase(),
      section_expanded: sectionExpanded,
    });
  }, [track]);

  const trackComparisonStarted = useCallback(({ platforms }) => {
    track('comparison_started', {
      platforms_selected: platforms.map(p => p.toLowerCase()).join(','),
      selection_count: platforms.length,
    });
  }, [track]);

  const trackComparisonCompleted = useCallback(({ platforms, timeSeconds, scrolledToBottom }) => {
    track('comparison_completed', {
      platforms_compared: platforms.map(p => p.toLowerCase()).join(','),
      time_on_comparison: timeSeconds,
      scrolled_to_bottom: scrolledToBottom,
    });
  }, [track]);

  const trackCalculatorUsed = useCallback(({ calculatorType, tradeSizeUsd, platforms, winner }) => {
    const sizeBucket = tradeSizeUsd < 100 ? '0-100'
                     : tradeSizeUsd < 1000 ? '100-1000'
                     : tradeSizeUsd < 5000 ? '1000-5000'
                     : tradeSizeUsd < 10000 ? '5000-10000'
                     : '10000+';

    track('calculator_used', {
      calculator_type: calculatorType,
      trade_size_bucket: sizeBucket,
      platforms_calculated: platforms.map(p => p.toLowerCase()).join(','),
      result_winner: winner?.toLowerCase(),
    });
  }, [track]);

  const trackTableSort = useCallback(({ column, direction }) => {
    track('table_sort', {
      sort_column: column,
      sort_direction: direction,
    });
  }, [track]);

  const trackFilterApplied = useCallback(({ filterType, filterValue, resultsCount }) => {
    track('filter_applied', {
      filter_type: filterType,
      filter_value: filterValue,
      results_count: resultsCount,
    });
  }, [track]);

  const trackSearch = useCallback(({ term, resultsCount }) => {
    track('search', {
      search_term: term,
      results_count: resultsCount,
    });
  }, [track]);

  const trackSearchResultClick = useCallback(({ term, position, resultType }) => {
    track('search_result_click', {
      search_term: term,
      result_position: position,
      result_type: resultType,
    });
  }, [track]);

  const trackFaqExpanded = useCallback(({ questionTopic }) => {
    track('faq_expanded', {
      question_topic: questionTopic,
    });
  }, [track]);

  const trackTabSwitch = useCallback(({ tabName, platform }) => {
    track('tab_switch', {
      tab_name: tabName,
      platform_name: platform?.toLowerCase(),
    });
  }, [track]);

  const trackCtaClick = useCallback(({ text, location, destination }) => {
    track('internal_cta_click', {
      cta_text: text,
      cta_location: location,
      destination,
    });
  }, [track]);

  const trackExternalClick = useCallback(({ resourceType, destinationDomain }) => {
    track('external_resource_click', {
      resource_type: resourceType,
      destination_domain: destinationDomain,
    });
  }, [track]);

  const value = {
    track,
    trackAffiliateClick,
    trackPlatformExpand,
    trackComparisonStarted,
    trackComparisonCompleted,
    trackCalculatorUsed,
    trackTableSort,
    trackFilterApplied,
    trackSearch,
    trackSearchResultClick,
    trackFaqExpanded,
    trackTabSwitch,
    trackCtaClick,
    trackExternalClick,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

// ===========================================
// MAIN HOOK
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
  const trackedRef = useRef(new Set());

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
  const trackedRef = useRef(new Set());

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

/**
 * Track comparison page engagement
 */
export function useComparisonTracking(platforms) {
  const { trackComparisonCompleted } = useAnalytics();
  const startTimeRef = useRef(Date.now());
  const scrolledToBottomRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTop >= docHeight - 100) {
        scrolledToBottomRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track on unmount (page leave)
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const timeSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
      trackComparisonCompleted({
        platforms,
        timeSeconds,
        scrolledToBottom: scrolledToBottomRef.current,
      });
    };
  }, [platforms, trackComparisonCompleted]);
}

// ===========================================
// COMPONENT EXAMPLES
// ===========================================

/**
 * Tracked affiliate button component
 */
export function AffiliateButton({ 
  platform, 
  href, 
  location, 
  position,
  comparisonPair,
  children,
  className,
  ...props 
}) {
  const { trackAffiliateClick } = useAnalytics();

  const handleClick = () => {
    trackAffiliateClick({
      platform,
      location,
      buttonText: typeof children === 'string' ? children : platform,
      position,
      comparisonPair,
    });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener sponsored"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Tracked FAQ accordion component
 */
export function TrackedFaq({ questionTopic, question, children }) {
  const { trackFaqExpanded } = useAnalytics();
  const [isOpen, setIsOpen] = useState(false);
  const hasTrackedRef = useRef(false);

  const handleToggle = () => {
    if (!isOpen && !hasTrackedRef.current) {
      trackFaqExpanded({ questionTopic });
      hasTrackedRef.current = true;
    }
    setIsOpen(!isOpen);
  };

  return (
    <details open={isOpen} onClick={handleToggle}>
      <summary>{question}</summary>
      {children}
    </details>
  );
}

// ===========================================
// USAGE EXAMPLE (in _app.js or layout)
// ===========================================

/*
// pages/_app.js (Next.js)
import { AnalyticsProvider } from '../lib/analytics-react';

function MyApp({ Component, pageProps }) {
  return (
    <AnalyticsProvider 
      measurementId="G-XXXXXXXXXX"
      debug={process.env.NODE_ENV === 'development'}
    >
      <Component {...pageProps} />
    </AnalyticsProvider>
  );
}

export default MyApp;
*/

/*
// In a comparison page component
import { useAnalytics, useScrollTracking, useTimeTracking, AffiliateButton } from '../lib/analytics-react';

export default function ComparisonPage({ platforms }) {
  const { trackTableSort, trackFilterApplied } = useAnalytics();
  
  // Auto-track scroll and time
  useScrollTracking();
  useTimeTracking();

  const handleSort = (column, direction) => {
    trackTableSort({ column, direction });
    // ... do the actual sort
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('fees', 'asc')}>Fees</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map((platform, index) => (
            <tr key={platform.slug}>
              <td>{platform.fees}</td>
              <td>
                <AffiliateButton
                  platform={platform.slug}
                  href={platform.affiliateUrl}
                  location="comparison_table"
                  position={index + 1}
                >
                  Visit {platform.name} →
                </AffiliateButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
*/

export default useAnalytics;
