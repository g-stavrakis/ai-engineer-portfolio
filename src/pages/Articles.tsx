import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import phoneFrame from '@/assets/images/phone-frame.png';
import articleMask from '@/assets/images/article-mask.svg';
import { useNavigate } from 'react-router-dom';

interface ArticleItem {
  title: string;
  image: string;
  publisher: string;
  date: string;
  summary: string;
  tags?: string[];
  url: string; // Added url field
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
  const navigate = useNavigate();

  useEffect(() => {
    import('@/data/articles.json').then((data) => {
      const loaded = data.default || data;
      console.log('Loaded articles:', loaded);
      setArticles(loaded);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] py-8 px-2">
      <h2 className="text-center text-gray-500 tracking-widest text-2xl sm:text-3xl font-extrabold mb-10 uppercase border-b-2 border-teal-300 w-fit mx-auto pb-2">ARTICLES</h2>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {articles.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
            style={{ display: 'block' }}
          >
            <div className="relative flex flex-col md:flex-row items-center gap-6 rounded-2xl p-10 shadow-sm min-h-[220px] md:min-h-[220px] bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-blue-900 dark:via-zinc-800 dark:to-blue-800 transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
              <div className="flex-shrink-0 flex items-end justify-center rounded-xl overflow-hidden bg-transparent" style={{width: '170px', height: '180px'}}>
                <div className="relative w-full h-full flex items-end justify-center">
                  {/* White background behind phone frame */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] h-[95%] bg-white z-0 rounded-xl" />
                  {/* Article image inside phone */}
                  {item.image ? (
                    <div style={{width: '80%', height: '80%', position: 'absolute', left: '10%', bottom: '0', zIndex: 1}}>
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.title}
                        style={{
                          WebkitMaskImage: `url(${articleMask})`,
                          maskImage: `url(${articleMask})`,
                          WebkitMaskRepeat: 'no-repeat',
                          maskRepeat: 'no-repeat',
                          WebkitMaskSize: '100% 100%',
                          maskSize: '100% 100%',
                          WebkitMaskPosition: 'center',
                          maskPosition: 'center',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          borderRadius: 0
                        }}
                      />
                    </div>
                  ) : (
                    <span className="text-zinc-400 relative z-20 flex items-center justify-center w-full h-full">&lt;Article Image&gt;</span>
                  )}
                  {/* Phone frame on top */}
                  <img src={phoneFrame} alt="Phone Frame" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto object-contain z-20 pointer-events-none" style={{maxHeight: '100%'}} />
                </div>
              </div>
              <div className="flex-1 text-left flex flex-col justify-between h-full pr-2">
                <div className="flex flex-col justify-start h-full">
                  <div className="font-bold text-base md:text-lg mb-1">{item.title}</div>
                  <div className="text-xs text-gray-600 mb-2">Published on: {item.date} by {item.publisher}</div>
                  <div className="text-sm text-gray-700 leading-relaxed mb-3">{item.summary}</div>
                </div>
                {item.tags && item.tags.length > 0 && (
                  <div className="absolute bottom-6 right-8 flex gap-2 flex-wrap">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-gray-400 text-white text-xs font-semibold shadow-sm">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
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

export default Articles; 