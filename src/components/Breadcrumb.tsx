import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schemas';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const baseUrl = 'https://compareequityperps.com';

  const schemaItems = items.map((item) => ({
    name: item.name,
    url: `${baseUrl}${item.href}`,
  }));

  const schema = generateBreadcrumbSchema(schemaItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-1">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {index === items.length - 1 ? (
                <span className="text-gray-400">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
