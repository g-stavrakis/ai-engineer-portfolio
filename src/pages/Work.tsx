import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

interface WorkItem {
  type: string;
  title: string;
  company: string;
  logo: string;
  dates: string;
  bullets: string[];
  tech?: string[]; // Add tech array
}

const getImageUrl = (filename: string) => {
  try {
    return new URL(`../assets/images/${filename}`, import.meta.url).href;
  } catch {
    return '';
  }
};

// Dynamically import all SVGs from the icons folder
const iconFiles = import.meta.glob('../assets/icons/*.svg', { eager: true, query: '?url', import: 'default' });
const techIcons: Record<string, string> = {
  python: iconFiles['../assets/icons/python.svg'] as string,
  git: iconFiles['../assets/icons/git.svg'] as string,
  azure: iconFiles['../assets/icons/azure.svg'] as string,
  azureai: iconFiles['../assets/icons/azureai.svg'] as string,
  databricks: iconFiles['../assets/icons/databricks.svg'] as string,
  docker: iconFiles['../assets/icons/docker.svg'] as string,
  huggingface: iconFiles['../assets/icons/huggingface.svg'] as string,
  langchain: iconFiles['../assets/icons/langchain.svg'] as string,
  langgraph: iconFiles['../assets/icons/langgraph.svg'] as string,
  notion: iconFiles['../assets/icons/notion.svg'] as string,
  openai: iconFiles['../assets/icons/openai.svg'] as string,
  postgresql: iconFiles['../assets/icons/postgresql.svg'] as string,
  postman: iconFiles['../assets/icons/postman.svg'] as string,
  streamlit: iconFiles['../assets/icons/streamlit.svg'] as string,
  unstructured: iconFiles['../assets/icons/unstructured.svg'] as string,
};

const Work: React.FC = () => {
  const navigate = useNavigate();
  const [workData, setWorkData] = useState<WorkItem[]>([]);

  useEffect(() => {
    import('../data/work.json').then((data) => setWorkData(data.default || data));
  }, []);

  const grouped = workData.reduce<{ [key: string]: WorkItem[] }>((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#fafafa] py-8 px-2">
      <h2 className="text-center text-gray-500 tracking-widest text-2xl sm:text-3xl font-extrabold mb-10 uppercase border-b-2 border-teal-300 w-fit mx-auto pb-2">WORK EXPERIENCE</h2>
      {Object.entries(grouped).map(([type, items]) => (
        <div key={type} className="mb-8">
          <h3 className={`text-teal-700 text-lg sm:text-xl font-bold mb-4 capitalize tracking-wide text-center`}>{type === 'work' ? 'Work Experience' : 'Freelancing'}</h3>
          {/* Carousel container */}
          <div className="overflow-x-auto scrollbar-hide px-8 py-12 snap-x snap-mandatory">
            {(() => {
              // Calculate the max number of bullets for this row
              const maxBullets = Math.max(...items.map(i => i.bullets.length));
              return (
                <div className={`flex flex-row gap-6 min-w-full${items.length === 1 ? ' justify-center' : ''} items-stretch`}>
                  {items.map((item, idx) => {
                    // Only add extra padding to the IBM card
                    let extraPadding = {};
                    if (item.company === 'IBM') {
                      const padRows = maxBullets - item.bullets.length;
                      if (padRows > 0) {
                        extraPadding = { paddingBottom: `${padRows * 24}px` };
                      }
                    }
                    return (
                      <div className="flex-shrink-0 w-full sm:w-[45vw] max-w-[600px] snap-start h-full" key={idx}>
                        <Card className="h-full flex flex-col w-full">
                          <div className="flex flex-col items-center p-6 pt-10 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-blue-900 dark:via-zinc-800 dark:to-blue-800 rounded-2xl shadow-md transition-transform duration-200 hover:scale-102 hover:shadow-xl h-full w-full">
                            {/* Logo at top center */}
                            <div className="w-24 h-24 bg-white rounded-full shadow flex items-center justify-center mb-4 -mt-16 border-4 border-zinc-100 dark:border-zinc-700">
                              {item.logo ? (
                                <img src={getImageUrl(item.logo)} alt={item.company} className="w-16 h-16 object-contain" onError={e => (e.currentTarget.style.display = 'none')} />
                              ) : (
                                <span className="text-4xl font-bold text-zinc-400">{item.company[0]}</span>
                              )}
                            </div>
                            {/* Title and Company */}
                            <h3 className="text-xl font-bold text-center mb-1 mt-2">{item.title}</h3>
                            <p className="text-teal-600 dark:text-teal-400 text-center font-semibold text-lg mb-2">{item.company}</p>
                            {/* Tech icons row (dynamic) */}
                            <div className="flex flex-row items-center justify-center gap-2 mb-2">
                              {item.tech?.map((tech, i) =>
                                techIcons[tech] ? (
                                  <img key={i} src={techIcons[tech]} alt={tech} className="w-7 h-7" />
                                ) : null
                              )}
                            </div>
                            {/* Dates */}
                            <p className="text-xs text-zinc-400 uppercase tracking-wide text-center mb-4">{item.dates}</p>
                            {/* Bullets */}
                            <ul className="list-disc pl-4 text-sm text-zinc-700 dark:text-zinc-300 text-left w-full" style={extraPadding}>
                              {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>
                          </div>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      ))}
      {/* Home button at the end of the page */}
      <div className="flex justify-center mt-12 mb-4">
        <button
          onClick={() => navigate('/')}
          className="rounded-full bg-teal-400 hover:bg-teal-500 transition-colors w-14 h-14 flex items-center justify-center shadow-lg"
          aria-label="Go to Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Work; 