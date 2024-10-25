import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-gray-900 text-white py-4 px-6 shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            TwojaFirma
          </Link>
        </div>

        {/* Nawigacja dla większych ekranów */}
        <nav className="hidden md:flex space-x-6">
          {[
            { section: 'home', label: 'Strona główna' },
            { section: 'about', label: 'O nas' },
            { section: 'services', label: 'Usługi' },
            { section: 'portfolio', label: 'Portfolio' },
            { section: 'contact', label: 'Kontakt' }
          ].map(({ section, label }) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="relative group text-lg cursor-pointer transition duration-300 focus:outline-none"
              onClick={() => setIsMenuOpen(false)} // Zamknij menu po kliknięciu
            >
              {label}
              {/* Animowane podkreślenie */}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Ikona menu dla urządzeń mobilnych */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-400 hover:text-teal-400 transition duration-300"
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobilne menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 text-white p-4 shadow-lg fixed w-full top-16 left-0 z-40">
          {[
            { section: 'home', label: 'Strona główna' },
            { section: 'about', label: 'O nas' },
            { section: 'services', label: 'Usługi' },
            { section: 'portfolio', label: 'Portfolio' },
            { section: 'contact', label: 'Kontakt' }
          ].map(({ section, label }) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="block py-2 text-lg hover:text-teal-400 transition duration-300 cursor-pointer focus:outline-none"
              onClick={() => {
                setIsMenuOpen(false); // Zamknij menu po kliknięciu
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

