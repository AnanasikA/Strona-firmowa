import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/themeSlice';
import BackgroundImage from './images/background.jpg';

function App() {
  const aosInitialized = useRef(false);
  useEffect(() => {
    if (!aosInitialized.current) {
      AOS.init({
        duration: 800,
        offset: 100,
        once: true,
      });
      aosInitialized.current = true;
    }
  }, []);

  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div className={`${darkMode ? 'dark' : ''} relative`}>
      
      {/* Obraz tła */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        aria-hidden="true"
      ></div>

      {/* Nakładka półprzezroczysta */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10" aria-hidden="true"></div>

      {/* Główna zawartość strony */}
      <div className="relative z-20">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded"
          aria-label={darkMode ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
        >
          {darkMode ? 'Jasny motyw' : 'Ciemny motyw'}
        </button>

        <Header />
        <WelcomeSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;



