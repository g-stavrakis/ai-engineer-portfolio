import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-center gap-8 py-4 border-b">
      <Link to="/">Home</Link>
      <Link to="/work">Work Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/articles">Articles</Link>
    </nav>
  );
};

export default Navbar; 