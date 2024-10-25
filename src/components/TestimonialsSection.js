import React, { useState } from 'react';
import StyledHeading from '../components/StyledHeading';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; 
import ClientImage1 from '../images/client1.jpg';
import ClientImage2 from '../images/client2.jpg';
import ClientImage3 from '../images/client3.jpg';
import ClientImage4 from '../images/client4.jpg';
import ClientImage5 from '../images/client5.jpg';

const testimonials = [
  {
    id: 1,
    text: "Współpraca z tą firmą była niezwykle profesjonalna. Zespół wykazał się ogromnym zaangażowaniem i kreatywnością, dostarczając projekt na czas i spełniając wszystkie nasze oczekiwania. Na pewno będziemy współpracować ponownie.",
    author: "Anna Kowalska",
    image: ClientImage1,
  },
  {
    id: 2,
    text: "Jestem bardzo zadowolony z usług tej firmy. Projekt został zrealizowany zgodnie z harmonogramem, a jakość pracy była na najwyższym poziomie. Komunikacja była szybka i skuteczna. Polecam każdemu!",
    author: "Jan Nowak",
    image: ClientImage2,
  },
  {
    id: 3,
    text: "Doskonała współpraca, profesjonalizm w każdym calu. Zespół nie tylko zrealizował nasz projekt, ale także doradził najlepsze rozwiązania techniczne. Wynik końcowy przeszedł nasze oczekiwania.",
    author: "Katarzyna Malinowska",
    image: ClientImage3,
  },
  {
    id: 4,
    text: "Firma dostarczyła projekt na czas i w pełni spełniła nasze oczekiwania. Zdecydowanie polecam ich usługi, zarówno pod kątem jakości pracy, jak i komunikacji. Dziękujemy za wspaniałą współpracę!",
    author: "Tomasz Wiśniewski",
    image: ClientImage4,
  },
  {
    id: 5,
    text: "Świetna współpraca, zespół wykazał się dużym profesjonalizmem i zaangażowaniem. Zawsze dostępni, otwarci na wszelkie sugestie. Efekt końcowy był doskonały, zdecydowanie polecam!",
    author: "Ewa Zielińska",
    image: ClientImage5,
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => setIndex((index + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="p-12 bg-gradient-to-b from-gray-50 to-gray-200 text-gray-800">
        <div className="mb-12">
            <StyledHeading>Opinie Klientów</StyledHeading>
            <p className="mt-4 text-lg text-gray-600 text-center">
                Poznaj opinie naszych zadowolonych klientów, którzy zaufali nam i skorzystali z naszych usług budowlanych.
            </p>
        </div>

      <div className="max-w-2xl mx-auto text-center relative">
        {/* Strzałki po lewej i prawej stronie */}
        <button
          onClick={prevTestimonial}
          aria-label="Poprzednia opinia"
          className="absolute left-[-70px] top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-300 hidden md:flex"
        >
          <AiOutlineLeft size={30} />
        </button>

        <div className="w-full p-8 bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
          {/* Zdjęcie autora opinii */}
          <div className="flex justify-center mb-4">
            <img
              src={testimonials[index].image}
              alt={`Zdjęcie autora opinii - ${testimonials[index].author}`}
              className="w-24 h-24 rounded-full object-cover shadow-md"
              loading="lazy"
            />
          </div>
          <p className="italic text-xl text-gray-600">"{testimonials[index].text}"</p>
          <p className="mt-4 font-semibold text-gray-900">- {testimonials[index].author}</p>
        </div>

        <button
          onClick={nextTestimonial}
          aria-label="Następna opinia"
          className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-300 hidden md:flex"
        >
          <AiOutlineRight size={30} />
        </button>
      </div>

      {/* Wskaźniki */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-yellow-500' : 'bg-gray-300'} transition duration-300 cursor-pointer`}
            onClick={() => setIndex(i)}
            onKeyDown={(e) => e.key === 'Enter' && setIndex(i)}
            tabIndex="0"
            aria-label={`Wybierz opinię ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;




