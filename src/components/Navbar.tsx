import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-center gap-4 sm:gap-6 md:gap-8 py-3 sm:py-4 border-b">
      <Link to="/" className="text-sm sm:text-base hover:text-teal-600 transition-colors">Home</Link>
      <Link to="/work" className="text-sm sm:text-base hover:text-teal-600 transition-colors">Work Experience</Link>
      <Link to="/projects" className="text-sm sm:text-base hover:text-teal-600 transition-colors">Projects</Link>
      <Link to="/articles" className="text-sm sm:text-base hover:text-teal-600 transition-colors">Articles</Link>
    </nav>
  );
};

export default Navbar; 