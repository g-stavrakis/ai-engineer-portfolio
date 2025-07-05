import React from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';

const Work: React.FC = () => {
  return (
    <Container className="py-8 px-2">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Work Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center text-2xl">🏢</div>
            <div>
              <h2 className="text-lg font-semibold">Machine Learning Engineer</h2>
              <p className="text-zinc-500 text-sm">Key Three Data</p>
              <p className="text-zinc-400 text-xs">Sep 2022 - Aug 2024</p>
            </div>
          </div>
          <ul className="list-disc pl-6 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Worked as a consultant for Key Three Data on a project aimed at developing an automated platform for converting first-person video to scene analytics.</li>
            <li>Specialized in machine learning algorithms, clustering and analysis.</li>
            <li>Deployed machine learning algorithms and integrated systems onto the Google Cloud Platform.</li>
          </ul>
        </Card>
        <Card>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center text-2xl">💼</div>
            <div>
              <h2 className="text-lg font-semibold">Freelance ML Engineer</h2>
              <p className="text-zinc-500 text-sm">Key Three Data</p>
              <p className="text-zinc-400 text-xs">Sep 2022 - Aug 2024</p>
            </div>
          </div>
          <ul className="list-disc pl-6 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Worked as a consultant for Key Three Data on a project aimed at developing an automated platform for converting first-person video to scene analytics.</li>
            <li>Specialized in machine learning algorithms, clustering and analysis.</li>
            <li>Deployed machine learning algorithms and integrated systems onto the Google Cloud Platform.</li>
          </ul>
        </Card>
      </div>
    </Container>
  );
};

export default Work; 