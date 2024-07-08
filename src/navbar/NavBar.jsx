import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSvg from './iDownload.svg';
import menuSvg from './Menu.svg'; 
import MainContent from './MainContent';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-gray-100 p-4 lg:flex md:flex md:items-center fixed top-0 w-full z-10">
        <div className="flex items-center justify-between lg:ml-12 ml-2">
          <Link to="/" className="text-white text-xl font-bold">
            <img src={logoSvg} alt="Logo" className="h-8 w-auto" />
          </Link>
          <button
            className="block lg:hidden text-white focus:outline-none p-2"
            onClick={toggleMenu}
          >
            <img src={menuSvg} alt="Menu" className="h-10 w-10" />
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} mt-4 lg:flex lg:mt-0`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4 md:ml-[500px] uppercase">
            <li><Link to="/" className="text-black hover:text-blue-300">Home</Link></li>
            <li><Link to="/blog" className="text-black hover:text-blue-300 lg:ml-24">Blog</Link></li>
            <li><Link to="/download" className="text-black hover:text-blue-300 lg:ml-24">Download</Link></li>
            <li><Link to="/about" className="text-black hover:text-blue-300 lg:ml-24">Media Lib</Link></li>
          </ul>
        </div>
      </nav>

      <MainContent isOpen={isOpen} />
    </div>
  );
}

export default App;
