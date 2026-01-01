import Link from 'next/link';

interface Article {
  title: string;
  href: string;
  description: string;
  category: 'guide' | 'comparison' | 'review' | 'tool';
}

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
}

const categoryColors = {
  guide: 'text-green-400',
  comparison: 'text-purple-400',
  review: 'text-yellow-400',
  tool: 'text-cyan-400',
};

const categoryLabels = {
  guide: 'Guide',
  comparison: 'Comparison',
  review: 'Review',
  tool: 'Tool',
};

export default function RelatedArticles({ articles, title = "Related Articles" }: RelatedArticlesProps) {
  return (
    <section className="my-12 pt-8 border-t border-gray-800">
      <h2 className="text-xl font-bold text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group p-4 bg-gray-900/30 border border-gray-800/50 rounded-lg hover:border-gray-700 hover:bg-gray-900/50 transition-all"
          >
            <span className={`text-xs font-medium ${categoryColors[article.category]}`}>
              {categoryLabels[article.category]}
            </span>
            <h3 className="text-white font-semibold mt-1 group-hover:text-cyan-400 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
