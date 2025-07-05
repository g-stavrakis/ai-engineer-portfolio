import React from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container className="py-8">
      {/* Avatar and Tagline */}
      <div className="flex flex-col items-center mb-8 px-2 text-center">
        <div className="w-24 h-24 rounded-full bg-zinc-200 dark:bg-zinc-700 mb-4 flex items-center justify-center text-4xl">
          {/* Avatar Placeholder */}
          <span role="img" aria-label="Avatar">🧑‍💻</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">An AI Engineer exploring the world of AI in a mission to provide value to others through creative solutions for everyday problems! <span className="block text-base font-normal mt-2">We have the tools, lets use them and let others do their magic!</span></h1>
      </div>

      {/* Animated Nav Containers (placeholders) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 px-2">
        <Card
          className="flex flex-col items-center justify-center h-32 sm:h-36 md:h-40 cursor-pointer hover:shadow-lg transition-shadow w-full"
          onClick={() => navigate('/work')}
          tabIndex={0}
          role="button"
          aria-label="Go to Work Experience"
        >
          <span className="text-lg sm:text-xl font-semibold mb-2">Work Experience</span>
          <span className="text-zinc-500 text-sm sm:text-base">See my professional journey</span>
        </Card>
        <Card
          className="flex flex-col items-center justify-center h-32 sm:h-36 md:h-40 cursor-pointer hover:shadow-lg transition-shadow w-full"
          onClick={() => navigate('/projects')}
          tabIndex={0}
          role="button"
          aria-label="Go to Projects"
        >
          <span className="text-lg sm:text-xl font-semibold mb-2">Projects</span>
          <span className="text-zinc-500 text-sm sm:text-base">Explore my projects with AI</span>
        </Card>
        <Card
          className="flex flex-col items-center justify-center h-32 sm:h-36 md:h-40 cursor-pointer hover:shadow-lg transition-shadow w-full"
          onClick={() => navigate('/articles')}
          tabIndex={0}
          role="button"
          aria-label="Go to Articles"
        >
          <span className="text-lg sm:text-xl font-semibold mb-2">Articles</span>
          <span className="text-zinc-500 text-sm sm:text-base">Read my latest articles</span>
        </Card>
      </div>

      {/* About Me Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center mb-12 px-2">
        <div className="w-40 h-40 sm:w-48 sm:h-64 bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-lg rounded-xl mb-4 md:mb-0 shrink-0">
          &lt;My Image&gt;
        </div>
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-bold mb-2">Few words about me</h2>
          <p className="text-zinc-700 dark:text-zinc-300 max-w-xl text-sm sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      {/* Contact Form Placeholder */}
      <Card className="max-w-lg mx-auto w-full px-2">
        <h2 className="text-base sm:text-lg font-bold mb-2">Contact</h2>
        <p className="mb-4 text-sm sm:text-base">I have got just what you need. <span className="font-semibold underline">Lets talk.</span></p>
        {/* Contact form will go here */}
        <div className="flex flex-col gap-2">
          <input className="border rounded px-3 py-2 text-sm sm:text-base" placeholder="Name" />
          <input className="border rounded px-3 py-2 text-sm sm:text-base" placeholder="Email" />
          <textarea className="border rounded px-3 py-2 text-sm sm:text-base" placeholder="Message" rows={3} />
          <button className="bg-blue-600 text-white rounded px-4 py-2 mt-2 hover:bg-blue-700 transition text-sm sm:text-base">Submit</button>
        </div>
      </Card>
    </Container>
  );
};

export default Home; 