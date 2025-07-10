import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import { useNavigate } from 'react-router-dom';

interface ProjectItem {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  github: string;
}

const getImageUrl = (filename: string) => {
  try {
    return new URL(`../assets/images/${filename}`, import.meta.url).href;
  } catch {
    return '';
  }
};

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    import('@/data/projects.json').then((data) => setProjects(data.default || data));
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] py-8 px-2">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, idx) => (
          <Card key={idx}>
            {item.image ? (
              <img src={getImageUrl(item.image)} alt={item.title} className="w-full h-40 object-cover rounded mb-4" onError={e => (e.currentTarget.style.display = 'none')} />
            ) : (
              <div className="w-full h-40 bg-zinc-200 dark:bg-zinc-700 rounded mb-4 flex items-center justify-center text-zinc-400">No Image</div>
            )}
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">{item.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {item.techStack.map((tech, i) => (
                <span key={i} className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
            <a href={item.github} className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Card>
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

export default Projects; 