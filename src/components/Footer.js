import React from 'react';
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Sekcja kontaktowa z mapą */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Znajdź nas</h3>
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160989891!2d-74.25987684859879!3d40.69714942257406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5a6d2cbbb%3A0x5f9adf5f3f9b5a7e!2sNew%20York%2C%20USA!5e0!3m2!1spl!2spl!4v1638393076070!5m2!1spl!2spl"
            allowFullScreen=""
            loading="lazy"
            title="Mapa lokalizacji"
            aria-label="Mapa lokalizacji naszej firmy"
          ></iframe>
        </div>

        {/* Logo i krótki opis */}
        <div>
          <h2 className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text">
            TwojaFirma
          </h2>
          <p className="mt-4 text-gray-400">
            TwojaFirma to dynamiczna firma oferująca nowoczesne rozwiązania budowlane i inżynieryjne. Nasza siedziba mieści się w centrum miasta. Znajdź nas na mapie lub skontaktuj się z nami!
          </p>
        </div>

        {/* Ikony społecznościowe */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Śledź nas</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition duration-300">
              <AiOutlineFacebook size={28} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition duration-300">
              <AiOutlineTwitter size={28} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition duration-300">
              <AiOutlineInstagram size={28} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition duration-300">
              <AiOutlineLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Prawa autorskie */}
      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TwojaFirma. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;


