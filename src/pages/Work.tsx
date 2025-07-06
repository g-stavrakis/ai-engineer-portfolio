import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';

interface WorkItem {
  type: string;
  title: string;
  company: string;
  logo: string;
  dates: string;
  bullets: string[];
}

const getImageUrl = (filename: string) => {
  try {
    return new URL(`../assets/images/${filename}`, import.meta.url).href;
  } catch {
    return '';
  }
};

const Work: React.FC = () => {
  const [workData, setWorkData] = useState<WorkItem[]>([]);

  useEffect(() => {
    import('@/data/work.json').then((data) => setWorkData(data.default || data));
  }, []);

  const grouped = workData.reduce<{ [key: string]: WorkItem[] }>((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <Container className="py-8 px-2">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Work Experience</h1>
      {Object.entries(grouped).map(([type, items]) => (
        <div key={type} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 capitalize">{type === 'work' ? 'Work' : 'Freelancing'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <Card key={idx}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center text-2xl overflow-hidden">
                    {item.logo ? (
                      <img src={getImageUrl(item.logo)} alt={item.company} className="w-8 h-8 object-contain" onError={e => (e.currentTarget.style.display = 'none')} />
                    ) : (
                      <span>{item.company[0]}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-zinc-500 text-sm">{item.company}</p>
                    <p className="text-zinc-400 text-xs">{item.dates}</p>
                  </div>
                </div>
                <ul className="list-disc pl-6 text-sm text-zinc-700 dark:text-zinc-300">
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Work; 