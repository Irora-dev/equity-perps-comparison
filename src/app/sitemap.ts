import { platforms } from '@/data/platforms';
import { stocks } from '@/data/stocks';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://compareequityperps.com';

  const platformPages = platforms.map((platform) => ({
    url: `${baseUrl}/blog/${platform.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Individual stock pages - high priority SEO pages
  const stockPages = stocks.map((stock) => ({
    url: `${baseUrl}/stocks/${stock.ticker.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'hourly' as const, // Funding rates update frequently
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/stocks`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...stockPages,
    ...platformPages,
  ];
}
