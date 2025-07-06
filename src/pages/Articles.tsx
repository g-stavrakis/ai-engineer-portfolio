import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';

interface ArticleItem {
  title: string;
  image: string;
  publisher: string;
  date: string;
  summary: string;
}

const getImageUrl = (filename: string) => {
  try {
    return new URL(`../assets/images/${filename}`, import.meta.url).href;
  } catch {
    return '';
  }
};

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);

  useEffect(() => {
    import('@/data/articles.json').then((data) => setArticles(data.default || data));
  }, []);

  return (
    <Container className="py-8 px-2">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((item, idx) => (
          <Card key={idx} className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-32 h-48 bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center rounded mb-4 md:mb-0 overflow-hidden">
              {item.image ? (
                <img src={getImageUrl(item.image)} alt={item.title} className="object-cover w-full h-full" onError={e => (e.currentTarget.style.display = 'none')} />
              ) : (
                <span className="text-zinc-500">No Image</span>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-xs text-zinc-500 mb-1">Published on: {item.date} by {item.publisher}</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{item.summary}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Articles; 