'use client';

interface LanguageToggleProps {
  currentLang: string;
  nativeLang: string;
  nativeName: string;
  onToggle: (lang: string) => void;
}

export function LanguageToggle({ currentLang, nativeLang, nativeName, onToggle }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1 bg-gray-800/70 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
      <button
        onClick={() => onToggle('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          currentLang === 'en'
            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
        }`}
      >
        English
      </button>
      <button
        onClick={() => onToggle(nativeLang)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          currentLang === nativeLang
            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
        }`}
      >
        {nativeName}
      </button>
    </div>
  );
}
