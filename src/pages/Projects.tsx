import React from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';

const Projects: React.FC = () => {
  return (
    <Container className="py-8 px-2">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <img src="/nottingham-robotics.png" alt="Project 1" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-lg font-semibold mb-2">Project 1: Masters Dissertation</h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">My official Masters dissertation topic was: 'The force-torque characterization of the physical properties of objects using tactile and visual perception with the aid of a collaborative robot.' This project focused on using both tactile and computer vision, together with robotics to determine the physical properties of objects. The aim of this field of research is to bridge the gap between human sense and machine perception.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">Python</span>
            <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">PyTorch</span>
            <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">OpenCV</span>
            <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">ROS</span>
          </div>
          <a href="#" className="text-blue-600 hover:underline text-sm">GitHub</a>
        </Card>
        <Card>
          <img src="/nottingham-robotics.png" alt="Project 2" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-lg font-semibold mb-2">Project 2: Something else</h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-2">My official Masters dissertation topic was: 'The force-torque characterization of the physical properties of objects using tactile and visual perception with the aid of a collaborative robot.' This project focused on using both tactile and computer vision, together with robotics to determine the physical properties of objects. The aim of this field of research is to bridge the gap between human sense and machine perception.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">Python</span>
            <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">PyTorch</span>
            <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">OpenCV</span>
            <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">ROS</span>
          </div>
          <a href="#" className="text-blue-600 hover:underline text-sm">GitHub</a>
        </Card>
      </div>
    </Container>
  );
};

export default Projects; 