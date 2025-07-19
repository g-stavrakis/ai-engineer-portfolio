import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectItem {
  title: string;
  image?: string;
  description: string;
  github: string;
  images?: string[];
  tech?: string[];
  tags?: string[];
}

const getImageUrl = (filename: string) => {
  try {
    return new URL(`../assets/images/${filename}`, import.meta.url).href;
  } catch {
    return '';
  }
};

// Dynamically import all SVGs from the icons folder (same as Work.tsx)
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

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    import('../data/projects.json').then((data) => setProjects(data.default || data));
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] py-8 px-2">
      {/* Section Title styled like Articles */}
      <h2 className="text-center text-gray-500 tracking-widest text-2xl sm:text-3xl font-extrabold mb-10 uppercase border-b-2 border-teal-300 w-fit mx-auto pb-2">PROJECTS</h2>
      {/* Projects List */}
      <div className="flex flex-col gap-16">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full"
            style={{ zIndex: 1 }}
          >
            {/* Angled Background */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                zIndex: 0,
                background: '#b6e0e0',
                clipPath: idx % 2 === 0
                  ? 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)'
                  : 'polygon(0 0, 100% 8%, 100% 100%, 0 92%)',
              }}
            />
            {/* Project Card Content */}
            <div className="relative z-10 max-w-3xl mx-auto py-8">
              <div className="flex flex-col items-center p-6 pt-10 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-blue-900 dark:via-zinc-800 dark:to-blue-800 rounded-2xl shadow-md transition-transform duration-200 hover:scale-102 hover:shadow-xl">
                {/* Images Row */}
                <div className="flex flex-row items-center justify-center gap-4 mb-4 w-full">
                  {/* Project Images Grid */}
                  <div className="flex flex-row gap-4">
                    {(item.images || []).map((img, i) => (
                      img ? (
                        <img
                          key={i}
                          src={getImageUrl(img)}
                          alt={item.title + ' image ' + (i + 1)}
                          className="h-40 w-72 object-contain rounded bg-white border border-zinc-200 shadow"
                          onError={e => (e.currentTarget.style.display = 'none')}
                        />
                      ) : (
                        <div key={i} className="h-40 w-72 bg-zinc-200 rounded flex items-center justify-center text-zinc-400">No Image</div>
                      )
                    ))}
                  </div>
                </div>
                {/* Project Title */}
                <h2 className="text-xl font-semibold mb-2 text-center">{item.title}</h2>
                {/* Tech stack icons row (from tech key) */}
                <div className="flex flex-row items-center justify-center gap-2 mb-2">
                  {item.tech?.map((tech, i) =>
                    techIcons[tech.toLowerCase()] ? (
                      <img key={i} src={techIcons[tech.toLowerCase()]} alt={tech} className="w-7 h-7" />
                    ) : null
                  )}
                </div>
                {/* Description */}
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2 text-center">{item.description}</p>
                {/* Tags row (styled like Articles.tsx, now at the bottom) */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex justify-center gap-2 flex-wrap mb-2 mt-4">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-gray-100 text-zinc-700 text-xs font-semibold shadow-sm border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700">{tag}</span>
                    ))}
                  </div>
                )}
                {/* GitHub Link */}
                <a href={item.github} className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
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