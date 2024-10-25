import React, { useState } from 'react';
import StyledHeading from '../components/StyledHeading';
import HomeIcon from '../images/home.png';
import OfficeIcon from '../images/office.png';
import WrenchIcon from '../images/wrench.png';
import DesignIcon from '../images/design.png';
import RenovationIcon from '../images/renovation.png';
import ConsultationIcon from '../images/consultation.png';

const ServicesSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="services" className="p-16 bg-gray-50 text-gray-800">
      {/* Nagłówek sekcji */}
      <div className="text-center mb-12">
        <StyledHeading>Specjalizacja</StyledHeading>
        <p className="mt-4 text-lg text-gray-600">
          Z nami zrealizujesz każdy projekt budowlany – od planowania po finalizację. Sprawdź nasze usługi.
        </p>
      </div>

      {/* Karty specjalizacji */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { icon: HomeIcon, title: 'Budowa domów jednorodzinnych', description: 'Tworzymy nowoczesne, trwałe i przyjazne dla środowiska domy, spełniając oczekiwania naszych klientów.' },
          { icon: OfficeIcon, title: 'Budynki komercyjne', description: 'Projektujemy i budujemy obiekty komercyjne dostosowane do potrzeb każdego biznesu.' },
          { icon: WrenchIcon, title: 'Remonty i wykończenia wnętrz', description: 'Zapewniamy kompleksowe remonty i wykończenia wnętrz z dbałością o najmniejsze detale.' }
        ].map((service, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 cursor-pointer"
            onClick={() => toggleExpand(index)}
            onKeyDown={(e) => e.key === 'Enter' && toggleExpand(index)}
            role="button"
            tabIndex="0"
            aria-expanded={expanded === index}
          >
            <img src={service.icon} alt={`Ikona - ${service.title}`} className="w-16 h-16 mb-4 mx-auto opacity-90" loading="lazy" />
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

            {/* Treść podstawowa karty */}
            <p className="text-gray-700 mb-4 transition-all duration-300 ease-in-out">
              {expanded === index ? service.description : `${service.description.slice(0, 60)}...`}
            </p>

            {/* Dodatkowe informacje pokazane po kliknięciu */}
            {expanded === index && (
              <div className="mt-2 text-gray-600">
                <p className="text-sm">Nasza oferta obejmuje również konsultacje, projektowanie i pełne wsparcie na każdym etapie projektu.</p>
              </div>
            )}

            {/* Ikona rozwijania */}
            <div
              className={`absolute bottom-4 right-4 text-yellow-500 transform transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`}
              aria-label={expanded === index ? "Pokaż mniej o usłudze" : "Pokaż więcej o usłudze"}
            >
              ▼
            </div>
          </div>
        ))}
      </div>

      {/* Dodatkowe specjalizacje */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {[{ icon: DesignIcon, title: 'Projektowanie wnętrz', description: 'Tworzymy funkcjonalne i estetyczne wnętrza dostosowane do potrzeb klienta.' },
          { icon: RenovationIcon, title: 'Renowacje', description: 'Modernizujemy wnętrza i budynki, dbając o każdy detal.' },
          { icon: ConsultationIcon, title: 'Konsultacje techniczne', description: 'Zapewniamy pełne wsparcie techniczne na każdym etapie budowy.' }
        ].map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:translate-y-2 cursor-pointer">
            <img src={service.icon} alt={`Ikona - ${service.title}`} className="w-12 h-12 mb-4 mx-auto" loading="lazy" />
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;







