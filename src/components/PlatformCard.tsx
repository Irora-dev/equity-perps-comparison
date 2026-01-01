import Link from 'next/link';
import { type Platform } from '@/data/platforms';
import ReferralButton from './ReferralButton';

interface PlatformCardProps {
  platform: Platform;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const featureCount = Object.values(platform.features).filter(Boolean).length;

  return (
    <article className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all h-full flex flex-col">
      {/* Header - fixed height */}
      <div className="h-[4.5rem] mb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <h3
              className="text-xl font-bold"
              style={{ color: platform.color }}
            >
              {platform.name}
            </h3>
            {platform.beta && (
              <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">
                BETA
              </span>
            )}
          </div>
          <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 flex-shrink-0 ml-2">
            {platform.chain}
          </span>
        </div>
        <p className="text-gray-400 text-sm mt-1 line-clamp-2">{platform.tagline}</p>
      </div>

      {/* Description - fixed height */}
      <div className="h-[4.5rem] mb-4">
        <p className="text-gray-300 text-sm line-clamp-3">
          {platform.description}
        </p>
      </div>

      {/* Stats grid - fixed height */}
      <div className="h-[4rem] mb-4">
        <div className="grid grid-cols-2 gap-3 text-sm h-full">
          <div className="bg-gray-800/50 rounded-lg p-3">
            <span className="text-gray-500 block text-xs">Max Leverage</span>
            <span className="text-white font-semibold">{platform.maxLeverage}</span>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <span className="text-gray-500 block text-xs">Features</span>
            <span className="text-white font-semibold">{featureCount}/10</span>
          </div>
        </div>
      </div>

      {/* Highlights - fixed height */}
      <div className="h-[5.5rem] mb-4">
        <span className="text-xs text-gray-500 uppercase tracking-wider">Highlights</span>
        <ul className="mt-2 space-y-1">
          {platform.pros.slice(0, 3).map((pro, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="line-clamp-1">{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Assets - fixed height */}
      <div className="h-[4.5rem] mb-6">
        <span className="text-xs text-gray-500 uppercase tracking-wider">Supported Assets</span>
        <div className="mt-2 flex flex-wrap gap-1 overflow-hidden">
          {platform.supportedAssets.slice(0, 4).map((asset) => (
            <span
              key={asset}
              className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400"
            >
              {asset}
            </span>
          ))}
          {platform.supportedAssets.length > 4 && (
            <span className="px-2 py-1 text-xs text-gray-500">
              +{platform.supportedAssets.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Buttons - pushed to bottom */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <ReferralButton
          href={platform.referralUrl}
          platformName={platform.name}
          color={platform.color}
          className="flex-1 text-sm"
        />
        <Link
          href={`/blog/${platform.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
        >
          Read Review
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
