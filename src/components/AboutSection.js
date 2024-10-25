import React from 'react';
import { Link } from 'react-scroll';
import SafetyIcon from '../images/safety.png';
import TimelinessIcon from '../images/timeliness.png';
import QualityIcon from '../images/quality.png';
import StyledHeading from '../components/StyledHeading';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-gray-50 text-gray-700 flex flex-col justify-center items-center px-6 py-16">
      {/* Nagłówek i opis */}
      <div className="text-center mb-16">
        <StyledHeading>O nas</StyledHeading>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed font-light">
          Zajmujemy się kompleksową realizacją projektów budowlanych, dbając o jakość, bezpieczeństwo i spełnianie najwyższych standardów. Naszym priorytetem jest zadowolenie klienta. Tworzymy przyszłość, zapewniając doskonałość na każdym etapie.
        </p>
      </div>

      {/* Kluczowe wartości z ikonami PNG */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center max-w-7xl mx-auto">
        <div className="p-8 bg-white shadow-xl rounded-lg transition-all duration-300 flex flex-col items-center border border-transparent hover:border-blue-500 transform hover:scale-105">
          <img src={SafetyIcon} alt="Ikona przedstawiająca bezpieczeństwo" loading="lazy" className="w-20 h-20 mb-6" />
          <h3 className="text-xl font-semibold text-gray-900">Bezpieczeństwo</h3>
          <p className="mt-2 text-gray-700">Dbamy o bezpieczeństwo na każdym etapie budowy, zapewniając zgodność z przepisami.</p>
        </div>
        <div className="p-8 bg-white shadow-xl rounded-lg transition-all duration-300 flex flex-col items-center border border-transparent hover:border-yellow-500 transform hover:scale-105">
          <img src={TimelinessIcon} alt="Ikona przedstawiająca terminowość" loading="lazy" className="w-20 h-20 mb-6" />
          <h3 className="text-xl font-semibold text-gray-900">Terminowość</h3>
          <p className="mt-2 text-gray-700">Dzięki profesjonalnemu zarządzaniu projektami zawsze dotrzymujemy terminów.</p>
        </div>
        <div className="p-8 bg-white shadow-xl rounded-lg transition-all duration-300 flex flex-col items-center border border-transparent hover:border-green-500 transform hover:scale-105">
          <img src={QualityIcon} alt="Ikona przedstawiająca jakość" loading="lazy" className="w-20 h-20 mb-6" />
          <h3 className="text-xl font-semibold text-gray-900">Jakość</h3>
          <p className="mt-2 text-gray-700">Używamy wyłącznie najwyższej jakości materiałów, aby zapewnić trwałość i estetykę.</p>
        </div>
      </div>

      {/* Liczniki */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h4 className="text-4xl font-bold text-gray-900">500+</h4>
          <p className="text-gray-700 mt-2">Zakończonych projektów</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h4 className="text-4xl font-bold text-gray-900">20+</h4>
          <p className="text-gray-700 mt-2">Lat doświadczenia</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h4 className="text-4xl font-bold text-gray-900">100%</h4>
          <p className="text-gray-700 mt-2">Zadowolonych klientów</p>
        </div>
      </div>

      {/* Cytat lub motto firmy */}
      <div className="mt-16 py-8 px-10 rounded-lg shadow-lg max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-200 to-gray-300 border-l-4 border-teal-400">
        <p className="text-2xl italic font-light text-gray-800">
          „Budujemy nie tylko obiekty, ale i zaufanie. Każdy projekt to nowa historia sukcesu.”
        </p>
      </div>

      <div className="mt-12">
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="px-8 py-3 bg-transparent border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out"
        >
          Zobacz nasze projekty
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;


