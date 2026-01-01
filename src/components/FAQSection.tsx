'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="my-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
            >
              <span className="font-medium text-white pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
