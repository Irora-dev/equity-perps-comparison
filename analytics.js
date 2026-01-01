/**
 * GA4 Analytics Tracking Utility
 * Equity Perps Comparisonator
 * 
 * Usage:
 * 1. Replace 'G-XXXXXXXXXX' with your GA4 Measurement ID
 * 2. Import and use: import { analytics } from './analytics.js'
 * 3. Call: analytics.affiliateClick({ platform: 'drift', location: 'comparison_table' })
 */

// ===========================================
// CONFIGURATION
// ===========================================

const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your ID

const CONFIG = {
  debug: false, // Set to true during development
  sendPageViews: true,
  cookieFlags: 'SameSite=None;Secure',
};

// ===========================================
// INITIALIZATION
// ===========================================

/**
 * Initialize GA4 - call this once when your app loads
 */
export function initializeGA4() {
  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  gtag('js', new Date());
  
  // Configure GA4 with options
  gtag('config', GA4_MEASUREMENT_ID, {
    debug_mode: CONFIG.debug,
    send_page_view: CONFIG.sendPageViews,
    cookie_flags: CONFIG.cookieFlags,
  });

  if (CONFIG.debug) {
    console.log('[Analytics] GA4 initialized with ID:', GA4_MEASUREMENT_ID);
  }
}

// ===========================================
// HELPER FUNCTIONS
// ===========================================

/**
 * Send an event to GA4
 */
function sendEvent(eventName, params = {}) {
  if (typeof gtag === 'undefined') {
    console.warn('[Analytics] gtag not initialized. Call initializeGA4() first.');
    return;
  }

  // Add common parameters
  const enrichedParams = {
    ...params,
    timestamp: new Date().toISOString(),
    page_path: window.location.pathname,
    page_url: window.location.href,
  };

  gtag('event', eventName, enrichedParams);

  if (CONFIG.debug) {
    console.log('[Analytics] Event sent:', eventName, enrichedParams);
  }
}

/**
 * Get current page type from URL
 */
function getPageType() {
  const path = window.location.pathname;
  if (path === '/') return 'homepage';
  if (path.startsWith('/platforms/') && path.split('/').length > 3) return 'platform_review';
  if (path.startsWith('/platforms')) return 'platforms_index';
  if (path.startsWith('/compare/') && path.includes('-vs-')) return 'comparison';
  if (path.startsWith('/compare')) return 'compare_index';
  if (path.startsWith('/guides/')) return 'guide';
  if (path.startsWith('/fees')) return 'fees';
  return 'other';
}

// ===========================================
// CORE REVENUE EVENTS
// ===========================================

export const analytics = {
  
  /**
   * Track affiliate link clicks (PRIMARY CONVERSION)
   * 
   * @param {Object} params
   * @param {string} params.platform - Platform slug (e.g., 'drift', 'gmx')
   * @param {string} params.location - Where on page (e.g., 'comparison_table', 'sidebar', 'hero')
   * @param {string} [params.buttonText] - CTA text clicked
   * @param {number} [params.position] - Position in list/table (1-indexed)
   * @param {string} [params.comparisonPair] - If on vs page (e.g., 'drift_vs_kwenta')
   */
  affiliateClick({ platform, location, buttonText = null, position = null, comparisonPair = null }) {
    sendEvent('affiliate_click', {
      platform_name: platform.toLowerCase(),
      link_location: location,
      page_type: getPageType(),
      button_text: buttonText,
      position: position,
      comparison_pair: comparisonPair,
    });
  },

  /**
   * Track platform card/row expansion
   */
  platformExpand({ platform, sectionExpanded }) {
    sendEvent('platform_expand', {
      platform_name: platform.toLowerCase(),
      page_type: getPageType(),
      section_expanded: sectionExpanded,
    });
  },

  /**
   * Track platform focus/hover (for engagement depth)
   */
  platformFocus({ platform, durationMs }) {
    const bucket = durationMs < 2000 ? '0-2s' 
                 : durationMs < 5000 ? '2-5s'
                 : durationMs < 10000 ? '5-10s'
                 : '10s+';
    
    sendEvent('platform_focus', {
      platform_name: platform.toLowerCase(),
      focus_duration_bucket: bucket,
      focus_duration_ms: durationMs,
    });
  },

  // ===========================================
  // COMPARISON EVENTS
  // ===========================================

  /**
   * Track when user starts a comparison
   */
  comparisonStarted({ platforms }) {
    sendEvent('comparison_started', {
      platforms_selected: platforms.map(p => p.toLowerCase()).join(','),
      selection_count: platforms.length,
    });
  },

  /**
   * Track comparison completion
   */
  comparisonCompleted({ platforms, timeOnPageSeconds, scrolledToBottom = false }) {
    sendEvent('comparison_completed', {
      platforms_compared: platforms.map(p => p.toLowerCase()).join(','),
      time_on_comparison: timeOnPageSeconds,
      scrolled_to_bottom: scrolledToBottom,
    });
  },

  /**
   * Track head-to-head page views
   */
  vsPageView({ platformA, platformB }) {
    sendEvent('vs_page_view', {
      platform_a: platformA.toLowerCase(),
      platform_b: platformB.toLowerCase(),
      comparison_pair: `${platformA.toLowerCase()}_vs_${platformB.toLowerCase()}`,
    });
  },

  // ===========================================
  // CALCULATOR & TOOL EVENTS
  // ===========================================

  /**
   * Track fee calculator usage
   */
  calculatorUsed({ calculatorType, tradeSizeUsd, platforms, winner = null }) {
    // Bucket trade sizes for privacy
    const sizeBucket = tradeSizeUsd < 100 ? '0-100'
                     : tradeSizeUsd < 1000 ? '100-1000'
                     : tradeSizeUsd < 5000 ? '1000-5000'
                     : tradeSizeUsd < 10000 ? '5000-10000'
                     : tradeSizeUsd < 50000 ? '10000-50000'
                     : '50000+';

    sendEvent('calculator_used', {
      calculator_type: calculatorType,
      trade_size_bucket: sizeBucket,
      platforms_calculated: platforms.map(p => p.toLowerCase()).join(','),
      result_winner: winner?.toLowerCase() || null,
    });
  },

  /**
   * Track funding rate checker usage
   */
  fundingChecked({ asset, platforms }) {
    sendEvent('funding_checked', {
      asset: asset.toUpperCase(),
      platforms_viewed: platforms.map(p => p.toLowerCase()).join(','),
    });
  },

  /**
   * Track position size calculator
   */
  positionCalculatorUsed({ leverage, asset }) {
    sendEvent('position_calculator_used', {
      leverage_selected: leverage,
      asset: asset.toUpperCase(),
    });
  },

  // ===========================================
  // CONTENT ENGAGEMENT EVENTS
  // ===========================================

  /**
   * Track scroll depth milestones
   */
  scrollDepth({ percentage, pixels }) {
    sendEvent('scroll_depth', {
      page_type: getPageType(),
      depth_percentage: percentage,
      depth_pixels: pixels,
    });
  },

  /**
   * Track time engaged on page
   */
  timeEngaged({ seconds, platform = null }) {
    sendEvent('time_engaged', {
      page_type: getPageType(),
      engaged_seconds: seconds,
      platform_name: platform?.toLowerCase() || null,
    });
  },

  /**
   * Track table interactions
   */
  tableSort({ column, direction }) {
    sendEvent('table_sort', {
      sort_column: column,
      sort_direction: direction,
      page_type: getPageType(),
    });
  },

  /**
   * Track filter usage
   */
  filterApplied({ filterType, filterValue, resultsCount }) {
    sendEvent('filter_applied', {
      filter_type: filterType,
      filter_value: filterValue,
      results_count: resultsCount,
      page_type: getPageType(),
    });
  },

  /**
   * Track tab switches
   */
  tabSwitch({ tabName, platform = null }) {
    sendEvent('tab_switch', {
      tab_name: tabName,
      platform_name: platform?.toLowerCase() || null,
      page_type: getPageType(),
    });
  },

  // ===========================================
  // SEARCH EVENTS
  // ===========================================

  /**
   * Track site search
   */
  search({ term, resultsCount }) {
    sendEvent('search', {
      search_term: term,
      results_count: resultsCount,
    });
  },

  /**
   * Track search result click
   */
  searchResultClick({ term, position, resultType }) {
    sendEvent('search_result_click', {
      search_term: term,
      result_position: position,
      result_type: resultType,
    });
  },

  // ===========================================
  // NAVIGATION EVENTS
  // ===========================================

  /**
   * Track internal CTA clicks
   */
  ctaClick({ text, location, destination }) {
    sendEvent('internal_cta_click', {
      cta_text: text,
      cta_location: location,
      destination: destination,
    });
  },

  /**
   * Track navigation clicks
   */
  navigationClick({ navType, destination }) {
    sendEvent('navigation_click', {
      nav_type: navType, // 'breadcrumb', 'header', 'footer', 'sidebar'
      destination: destination,
    });
  },

  // ===========================================
  // TRUST & SOCIAL PROOF EVENTS
  // ===========================================

  /**
   * Track review/testimonial views
   */
  reviewViewed({ reviewType, platform, sentiment = null }) {
    sendEvent('review_viewed', {
      review_type: reviewType,
      platform_name: platform?.toLowerCase() || null,
      review_sentiment: sentiment,
    });
  },

  /**
   * Track FAQ expansion
   */
  faqExpanded({ questionTopic }) {
    sendEvent('faq_expanded', {
      question_topic: questionTopic,
      page_type: getPageType(),
    });
  },

  /**
   * Track external resource clicks (non-affiliate)
   */
  externalResourceClick({ resourceType, destinationDomain }) {
    sendEvent('external_resource_click', {
      resource_type: resourceType, // 'documentation', 'social', 'news'
      destination_domain: destinationDomain,
      link_context: getPageType(),
    });
  },

  // ===========================================
  // ERROR TRACKING
  // ===========================================

  /**
   * Track errors (404, failed loads, etc.)
   */
  error({ errorType, errorMessage, context = null }) {
    sendEvent('site_error', {
      error_type: errorType,
      error_message: errorMessage,
      error_context: context,
    });
  },

  // ===========================================
  // CUSTOM PAGE VIEW (for SPAs)
  // ===========================================

  /**
   * Track page views manually (useful for SPAs)
   */
  pageView({ title = null, path = null }) {
    gtag('event', 'page_view', {
      page_title: title || document.title,
      page_location: window.location.href,
      page_path: path || window.location.pathname,
      page_type: getPageType(),
    });
  },

  // ===========================================
  // USER PROPERTIES
  // ===========================================

  /**
   * Set user properties (call once when you identify the user)
   */
  setUserProperties({ returningVisitor = false, preferredPlatform = null }) {
    gtag('set', 'user_properties', {
      returning_visitor: returningVisitor,
      preferred_platform: preferredPlatform?.toLowerCase() || null,
    });
  },
};

// ===========================================
// AUTO-TRACKING UTILITIES
// ===========================================

/**
 * Auto-track scroll depth - call once on page load
 */
export function setupScrollTracking() {
  const milestones = [25, 50, 75, 100];
  const tracked = new Set();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = Math.round((scrollTop / docHeight) * 100);

    milestones.forEach(milestone => {
      if (percentage >= milestone && !tracked.has(milestone)) {
        tracked.add(milestone);
        analytics.scrollDepth({
          percentage: milestone,
          pixels: Math.round(scrollTop),
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
}

/**
 * Auto-track time on page - call once on page load
 */
export function setupTimeTracking() {
  const intervals = [30, 60, 120, 300]; // seconds
  const tracked = new Set();
  let startTime = Date.now();
  let isVisible = true;

  // Pause timer when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isVisible = false;
    } else {
      isVisible = true;
      startTime = Date.now() - (tracked.size > 0 ? Math.max(...tracked) * 1000 : 0);
    }
  });

  const timer = setInterval(() => {
    if (!isVisible) return;
    
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    
    intervals.forEach(interval => {
      if (elapsed >= interval && !tracked.has(interval)) {
        tracked.add(interval);
        analytics.timeEngaged({ seconds: interval });
      }
    });

    // Stop checking after max interval
    if (elapsed > Math.max(...intervals)) {
      clearInterval(timer);
    }
  }, 1000);

  return () => clearInterval(timer);
}

/**
 * Auto-track all affiliate links with data attributes
 * Add data-affiliate="platform-name" to your links
 */
export function setupAffiliateLinkTracking() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-affiliate]');
    if (!link) return;

    analytics.affiliateClick({
      platform: link.dataset.affiliate,
      location: link.dataset.location || 'unknown',
      buttonText: link.textContent?.trim(),
      position: link.dataset.position ? parseInt(link.dataset.position) : null,
      comparisonPair: link.dataset.comparison || null,
    });
  });
}

/**
 * Auto-track outbound links
 */
export function setupOutboundLinkTracking() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="http"]');
    if (!link) return;
    
    const url = new URL(link.href);
    if (url.hostname === window.location.hostname) return;
    
    // Skip if it's an affiliate link (handled separately)
    if (link.dataset.affiliate) return;

    analytics.externalResourceClick({
      resourceType: 'outbound_link',
      destinationDomain: url.hostname,
    });
  });
}

// ===========================================
// QUICK SETUP FUNCTION
// ===========================================

/**
 * Initialize everything at once
 */
export function setupAnalytics() {
  initializeGA4();
  setupScrollTracking();
  setupTimeTracking();
  setupAffiliateLinkTracking();
  setupOutboundLinkTracking();
  
  if (CONFIG.debug) {
    console.log('[Analytics] All tracking initialized');
  }
}

export default analytics;
