# GA4 Analytics Setup for Equity Perps Comparisonator

Complete analytics implementation for tracking affiliate conversions, user engagement, and content performance.

## Quick Start

### Option 1: Vanilla JavaScript (Static Sites / Netlify)

1. Copy `analytics.js` to your project
2. Replace `G-XXXXXXXXXX` with your GA4 Measurement ID
3. Import and initialize:

```html
<script type="module">
  import { setupAnalytics, analytics } from './analytics.js';
  
  // Initialize on page load
  setupAnalytics();
</script>
```

### Option 2: React / Next.js

1. Copy `analytics-react.jsx` to your `lib/` folder
2. Wrap your app:

```jsx
// pages/_app.js
import { AnalyticsProvider } from '../lib/analytics-react';

function MyApp({ Component, pageProps }) {
  return (
    <AnalyticsProvider measurementId="G-XXXXXXXXXX">
      <Component {...pageProps} />
    </AnalyticsProvider>
  );
}
```

3. Use in components:

```jsx
import { useAnalytics, AffiliateButton } from '../lib/analytics-react';

function PlatformCard({ platform }) {
  const { trackPlatformExpand } = useAnalytics();
  
  return (
    <div onClick={() => trackPlatformExpand({ platform: platform.slug, sectionExpanded: 'details' })}>
      <AffiliateButton
        platform={platform.slug}
        href={platform.affiliateUrl}
        location="platform_card"
      >
        Visit {platform.name}
      </AffiliateButton>
    </div>
  );
}
```

### Option 3: Simple HTML (No Build Tools)

Copy the contents of `ga4-head-snippet.html` into your `<head>` tag.

---

## Files Included

| File | Use Case |
|------|----------|
| `analytics.js` | Vanilla JS module - works anywhere |
| `analytics-react.jsx` | React hooks + provider pattern |
| `ga4-head-snippet.html` | Drop-in HTML for simple sites |
| `README.md` | This file |

---

## Events Reference

### Primary Conversions (Mark These in GA4)

| Event | Purpose | Key Parameters |
|-------|---------|----------------|
| `affiliate_click` | User clicks out to a platform | `platform_name`, `link_location`, `position` |
| `calculator_used` | User submits a fee calculator | `calculator_type`, `trade_size_bucket`, `result_winner` |
| `comparison_completed` | User finishes viewing a comparison | `platforms_compared`, `time_on_comparison` |

### Engagement Events

| Event | Purpose | Key Parameters |
|-------|---------|----------------|
| `platform_expand` | User expands platform details | `platform_name`, `section_expanded` |
| `scroll_depth` | User scrolls through content | `depth_percentage`, `depth_pixels` |
| `time_engaged` | User spends time on page | `engaged_seconds` |
| `table_sort` | User sorts comparison table | `sort_column`, `sort_direction` |
| `filter_applied` | User filters results | `filter_type`, `filter_value`, `results_count` |
| `tab_switch` | User switches tabs | `tab_name`, `platform_name` |

### Discovery Events

| Event | Purpose | Key Parameters |
|-------|---------|----------------|
| `search` | User searches site | `search_term`, `results_count` |
| `search_result_click` | User clicks search result | `search_term`, `result_position` |
| `faq_expanded` | User opens FAQ item | `question_topic` |
| `internal_cta_click` | User clicks internal CTA | `cta_text`, `destination` |

---

## GA4 Configuration Steps

### 1. Create Custom Dimensions

In GA4: Admin → Custom Definitions → Create custom dimensions

| Dimension Name | Scope | Event Parameter |
|---------------|-------|-----------------|
| Platform Name | Event | `platform_name` |
| Page Type | Event | `page_type` |
| Link Location | Event | `link_location` |
| Comparison Pair | Event | `comparison_pair` |
| Calculator Type | Event | `calculator_type` |

### 2. Mark Conversions

In GA4: Admin → Conversions → New conversion event

Add these events:
- `affiliate_click` ✅
- `calculator_used` ✅  
- `comparison_completed` ✅

### 3. Create Audiences

In GA4: Admin → Audiences → New audience

**High Intent Non-Converters:**
```
Include users when:
  Event: calculator_used OR comparison_completed
Exclude users when:
  Event: affiliate_click
```

**Platform-Specific Interest:**
```
Include users when:
  Event: affiliate_click
  Parameter: platform_name equals "drift"
```

### 4. Link to Search Console

In GA4: Admin → Product Links → Search Console → Link

---

## Data Attributes for Auto-Tracking

The vanilla JS version auto-tracks links with data attributes:

```html
<a 
  href="https://drift.trade/?ref=yourcode"
  data-affiliate="drift"
  data-location="comparison_table"
  data-position="1"
  data-comparison="drift_vs_kwenta"
>
  Visit Drift →
</a>
```

All affiliate links with `data-affiliate` are automatically tracked.

---

## Debugging

### Enable Debug Mode

**Vanilla JS:**
```javascript
// In analytics.js, set:
const CONFIG = {
  debug: true,
  // ...
};
```

**React:**
```jsx
<AnalyticsProvider measurementId="G-XXX" debug={true}>
```

### GA4 DebugView

1. Install "Google Analytics Debugger" Chrome extension
2. Enable the extension
3. Go to GA4 → Admin → DebugView
4. Interact with your site and watch events appear in real-time

### Common Issues

**Events not appearing:**
- Check browser console for errors
- Verify measurement ID is correct
- Ensure gtag script loaded (Network tab)
- Check ad blocker isn't blocking

**Parameters missing:**
- Verify custom dimensions are created in GA4
- Check event is sending parameters (DebugView)
- Allow 24-48 hours for data to appear in reports

---

## Reports to Build

Once you have data flowing, create these explorations in GA4:

### Affiliate Performance Report
- Dimensions: `platform_name`, `link_location`
- Metrics: Event count, Users
- Filter: Event name = `affiliate_click`

### Content Effectiveness
- Dimensions: Page path
- Metrics: Users, `affiliate_click` count
- See which pages drive conversions

### Conversion Funnel
- Steps: `comparison_started` → `calculator_used` → `affiliate_click`
- See where users drop off

---

## Privacy Considerations

- Trade sizes are bucketed, not exact values
- No PII is collected
- Consider adding cookie consent for GDPR compliance
- Add to your privacy policy that you use Google Analytics

---

## Questions?

This implementation covers the core tracking needs for an affiliate comparison site. Adjust event names and parameters as needed for your specific use case.
