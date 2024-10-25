import React from 'react';
import { Link } from 'react-scroll';
import BackgroundImage from '../images/construction-bg.jpg';

const WelcomeSection = () => {
  return (
    <section
      id="home"
      className="h-screen w-full bg-cover bg-center relative flex items-center justify-center text-white text-center"
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundAttachment: 'fixed' }}
    >
      {/* Warstwa półprzezroczysta */}
      <div className="absolute inset-0 bg-black bg-opacity-60" aria-hidden="true"></div>

      {/* Treść sekcji */}
      <div className="relative z-10 p-8 max-w-3xl">
        <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">
          Budujemy solidne fundamenty dla Twojej przyszłości
        </h1>
        <p className="mt-4 text-lg italic text-gray-300 drop-shadow-md max-w-lg mx-auto">
          Od lat oferujemy kompleksowe usługi budowlane na najwyższym poziomie, specjalizując się w realizacji projektów dostosowanych do indywidualnych potrzeb klientów.
        </p>
        <div className="mt-6 flex flex-col md:flex-row md:justify-center gap-4">
          <Link to="portfolio" smooth={true} duration={500} aria-label="Przejdź do naszych projektów">
            <button className="px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out">
              Zobacz nasze projekty
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500} aria-label="Skontaktuj się z nami">
            <button className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out">
              Skontaktuj się z nami
            </button>
          </Link>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          <p className="max-w-md mx-auto">
            Wspieramy Cię na każdym etapie - od projektu po realizację. Naszym priorytetem jest jakość i terminowość.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;



