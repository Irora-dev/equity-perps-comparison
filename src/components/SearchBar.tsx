'use client';

import { useState, useMemo, useRef } from 'react';
import { platforms, featureLabels, type Platform } from '@/data/platforms';
import { useAnalytics } from '@/lib/analytics';

interface SearchBarProps {
  onSearchResults: (results: Platform[] | null) => void;
}

export default function SearchBar({ onSearchResults }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const { trackSearch } = useAnalytics();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const searchSuggestions = useMemo(() => [
    'zero fees',
    'high leverage',
    '24/7 trading',
    'US stocks',
    'index products',
    'exotic markets',
    'mobile app',
    'API access',
  ], []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);

    if (!searchQuery.trim()) {
      onSearchResults(null);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();

    const results = platforms.filter((platform) => {
      // Search in platform name
      if (platform.name.toLowerCase().includes(lowerQuery)) return true;

      // Search in description
      if (platform.description.toLowerCase().includes(lowerQuery)) return true;

      // Search in tagline
      if (platform.tagline.toLowerCase().includes(lowerQuery)) return true;

      // Search in chain
      if (platform.chain.toLowerCase().includes(lowerQuery)) return true;

      // Search in supported assets
      if (platform.supportedAssets.some(asset =>
        asset.toLowerCase().includes(lowerQuery)
      )) return true;

      // Search in features
      for (const [key, label] of Object.entries(featureLabels)) {
        if (label.toLowerCase().includes(lowerQuery)) {
          if (platform.features[key as keyof Platform['features']]) {
            return true;
          }
        }
      }

      // Search for specific feature keywords
      const featureKeywords: Record<string, keyof Platform['features']> = {
        'zero fee': 'zeroFees',
        'no fee': 'zeroFees',
        'free': 'zeroFees',
        'custody': 'selfCustody',
        'self custody': 'selfCustody',
        'non-custodial': 'selfCustody',
        '24/7': 'trading24_7',
        '24 7': 'trading24_7',
        'always': 'trading24_7',
        'leverage': 'highLeverage',
        '50x': 'highLeverage',
        '100x': 'highLeverage',
        'stock': 'usStockPerps',
        'us stock': 'usStockPerps',
        'equity': 'equityPerps',
        'index': 'indexProducts',
        'nasdaq': 'indexProducts',
        'exotic': 'exoticMarkets',
        'collectible': 'exoticMarkets',
        'mobile': 'mobileApp',
        'app': 'mobileApp',
        'api': 'apiAccess',
        'programmatic': 'apiAccess',
      };

      for (const [keyword, feature] of Object.entries(featureKeywords)) {
        if (lowerQuery.includes(keyword) && platform.features[feature]) {
          return true;
        }
      }

      return false;
    });

    // Sort by relevance (name match first, then feature matches)
    results.sort((a, b) => {
      const aNameMatch = a.name.toLowerCase().includes(lowerQuery) ? 1 : 0;
      const bNameMatch = b.name.toLowerCase().includes(lowerQuery) ? 1 : 0;
      return bNameMatch - aNameMatch;
    });

    onSearchResults(results.length > 0 ? results : []);

    // Track search with debounce to avoid tracking every keystroke
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      trackSearch({
        term: searchQuery,
        resultsCount: results.length,
      });
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search features... (e.g., 'zero fees', 'high leverage', 'TSLA')"
          className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {!query && (
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          {searchSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => handleSearch(suggestion)}
              className="px-3 py-1 text-sm bg-gray-800 text-gray-400 rounded-full hover:bg-gray-700 hover:text-white transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {query && (
        <button
          onClick={() => handleSearch('')}
          className="mt-2 text-sm text-gray-500 hover:text-white transition-colors"
        >
          Clear search
        </button>
      )}
    </div>
  );
}
