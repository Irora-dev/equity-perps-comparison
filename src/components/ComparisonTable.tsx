import { platforms, featureLabels, featureDescriptions, type Platform } from '@/data/platforms';

interface ComparisonTableProps {
  filteredPlatforms?: Platform[] | null;
}

export default function ComparisonTable({ filteredPlatforms }: ComparisonTableProps) {
  const displayPlatforms = filteredPlatforms ?? platforms;
  const features = Object.keys(featureLabels) as Array<keyof Platform['features']>;

  if (filteredPlatforms && filteredPlatforms.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No platforms match your search.</p>
        <p className="text-gray-500 text-sm mt-2">Try different keywords like &quot;zero fees&quot; or &quot;high leverage&quot;</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm sticky left-0 bg-gray-950 z-10">
              Feature
            </th>
            {displayPlatforms.map((platform) => (
              <th
                key={platform.id}
                className="py-4 px-3 text-center min-w-[100px]"
              >
                <div className="flex flex-col items-center gap-1">
                  <span
                    className="font-semibold text-white text-sm"
                    style={{ color: platform.color }}
                  >
                    {platform.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {platform.maxLeverage}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={feature}
              className={`border-b border-gray-800/50 hover:bg-gray-900/50 transition-colors ${
                index % 2 === 0 ? 'bg-gray-900/20' : ''
              }`}
            >
              <td className="py-4 px-4 sticky left-0 bg-gray-950 z-10">
                <div className="flex flex-col">
                  <span className="text-gray-300 font-medium text-sm">
                    {featureLabels[feature]}
                  </span>
                  <span className="text-xs text-gray-500 mt-0.5">
                    {featureDescriptions[feature]}
                  </span>
                </div>
              </td>
              {displayPlatforms.map((platform) => (
                <td key={platform.id} className="py-4 px-3 text-center">
                  {platform.features[feature] ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20">
                      <svg
                        className="w-4 h-4 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20">
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
            <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>Supported</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20">
            <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
          <span>Not supported</span>
        </div>
      </div>
    </div>
  );
}
