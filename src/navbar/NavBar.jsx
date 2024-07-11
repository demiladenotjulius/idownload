import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSvg from './iDownload.svg';
import menuSvg from './Menu.svg'; 
import MainContent from './MainContent';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {  // Only toggle if open, ensuring it closes on link click
      setIsOpen(false);
    }
  };

  return (
    <div>
      <nav className="bg-gray-100 p-4 lg:flex md:flex md:items-center fixed top-0 w-full z-10">
        <div className="flex items-center justify-between lg:ml-12 ml-2">
          <Link to="/" className="text-white text-xl font-bold" onClick={toggleMenu}>
            <img src={logoSvg} alt="Logo" className="h-8 w-auto" />
          </Link>
          <button
            className="block lg:hidden text-white focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}  // Direct toggle for the button
          >
            <img src={menuSvg} alt="Menu" className="h-10 w-10" />
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} mt-4 lg:flex lg:mt-0`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4 md:ml-[500px] uppercase">
            <li><Link to="/" className="text-black hover:text-red-300" onClick={toggleMenu}>Instagram</Link></li>
            <li><Link to="/twitter" className="text-black hover:text-blue-300" onClick={toggleMenu}>TWITTER</Link></li>
            <li><Link to="/post" className="text-black hover:text-red-300 lg:ml-24" onClick={toggleMenu}>INSTAPOST</Link></li>
            <li><Link to="/tweets" className="text-black hover:text-blue-300 lg:ml-24" onClick={toggleMenu}>TWEET</Link></li>
            <li><Link to="/history" className="text-black hover:text-purple-300 lg:ml-24" onClick={toggleMenu}>History</Link></li>
          </ul>
        </div>
      </nav>

      <MainContent isOpen={isOpen} />
    </div>
  );
}

export default App;
