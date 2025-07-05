import React from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';

const Articles: React.FC = () => {
  return (
    <Container className="py-8 px-2">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-32 h-48 bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center rounded mb-4 md:mb-0">
            <span className="text-zinc-500">&lt;Article Image&gt;</span>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-1">Article Title</h2>
            <p className="text-xs text-zinc-500 mb-1">Published on: date by Publisher</p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </Card>
        <Card className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-32 h-48 bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center rounded mb-4 md:mb-0">
            <span className="text-zinc-500">&lt;Article Image&gt;</span>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-1">Article Title</h2>
            <p className="text-xs text-zinc-500 mb-1">Published on: date by Publisher</p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Articles; 