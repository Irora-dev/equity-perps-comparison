'use client';

import { useState } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level?: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  title?: string;
}

export default function TableOfContents({ items, title = "Table of Contents" }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 my-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{title}</h2>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ol className="mt-4 space-y-2">
          {items.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors ${
                  item.level === 2 ? 'pl-4 text-sm' : ''
                }`}
              >
                <span className="text-cyan-500/50 text-sm">{index + 1}.</span>
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
