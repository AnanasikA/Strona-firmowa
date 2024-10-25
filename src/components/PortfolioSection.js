import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import StyledHeading from '../components/StyledHeading';

//import projektów

import Project1 from '../images/project1.jpg';
import Project2 from '../images/project2.jpg';
import Project3 from '../images/project3.jpg';
import Project4 from '../images/project4.jpg';
import Project5 from '../images/project5.jpg';
import Project6 from '../images/project6.jpg';

// Import zdjęć budowlanych
import BuildHome1 from '../images/images-house1.jpg';
import BuildHome2 from '../images/images-house2.jpg';
import BuildHome3 from '../images/images-house1.jpg';
import BuildOffice1 from '../images/images-office1.jpg';
import BuildOffice2 from '../images/images-office2.jpg';
import BuildOffice3 from '../images/images-office3.jpg';
import BuildHotel1 from '../images/images-hotel1.jpg';
import BuildHotel2 from '../images/images-hotel2.jpg';
import BuildHotel3 from '../images/images-hotel3.jpg';
import BuildEstate1 from '../images/images-estate1.jpg';
import BuildEstate2 from '../images/images-estate2.jpg';
import BuildEstate3 from '../images/images-estate3.jpg';
import BuildMall1 from '../images/images-mall1.jpg';
import BuildMall2 from '../images/images-mall2.jpg';
import BuildMall3 from '../images/images-mall3.jpg';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Dom jednorodzinny w Warszawie",
      category: "Budowa domów",
      location: "Warszawa, Polska",
      description: "Nowoczesny dom o wysokim standardzie wykończenia.",
      details: "Projekt obejmował nowoczesne rozwiązania energetyczne, dużą ilość przeszkleń oraz ekologiczne materiały.",
      images: [Project1, BuildHome1, BuildHome2, BuildHome3],
      rating: 4.5,
      tags: ["Ekologiczne materiały", "Nowoczesne technologie", "Energooszczędność"]
    },
    {
      id: 2,
      title: "Biura dla firmy XYZ",
      category: "Budynki komercyjne",
      location: "Kraków, Polska",
      description: "Przestronne i nowoczesne biura w centrum miasta.",
      details: "Kompleksowa realizacja biur z elementami industrialnymi i przeszklonymi przestrzeniami wspólnymi.",
      images: [Project2, BuildOffice1, BuildOffice2, BuildOffice3],
      rating: 4.8,
      tags: ["Industrialne wnętrza", "Przestrzenie wspólne", "Przeszklone biura"]
    },
    {
      id: 3,
      title: "Remont zabytkowej kamienicy",
      category: "Renowacja",
      location: "Poznań, Polska",
      description: "Renowacja zabytkowego budynku z zachowaniem stylu.",
      details: "Zabytkowa kamienica została odnowiona z zachowaniem oryginalnych detali i stylu architektonicznego.",
      images: [ Project3, BuildHotel1, BuildHotel2, BuildHotel3],
      rating: 4.7,
      tags: ["Zabytkowe detale", "Styl architektoniczny", "Konserwacja"]
    },
    {
      id: 4,
      title: "Hotel nad morzem",
      category: "Budynki komercyjne",
      location: "Gdańsk, Polska",
      description: "Luksusowy hotel z widokiem na morze, oferujący nowoczesne udogodnienia.",
      details: "Projekt obejmował budowę hotelu z basenem i tarasami widokowymi.",
      images: [Project4, BuildEstate1, BuildEstate2, BuildEstate3],
      rating: 4.9,
      tags: ["Luksusowe wnętrza", "Widok na morze", "Nowoczesne udogodnienia"]
    },
    {
      id: 5,
      title: "Nowoczesne osiedle mieszkaniowe",
      category: "Budowa osiedli",
      location: "Wrocław, Polska",
      description: "Nowoczesne osiedle składające się z energooszczędnych mieszkań.",
      details: "Kompleksowa budowa osiedla mieszkaniowego z zielonymi strefami i infrastrukturą.",
      images: [Project5, BuildMall1, BuildMall2, BuildMall3],
      rating: 4.6,
      tags: ["Nowoczesne budownictwo", "Energooszczędność", "Zielone strefy"]
    },
    {
      id: 6,
      title: "Centrum handlowe",
      category: "Budynki komercyjne",
      location: "Łódź, Polska",
      description: "Nowoczesne centrum handlowe z szeroką ofertą sklepów i restauracji.",
      details: "Projekt obejmował budowę centrum handlowego z dużą ilością przestrzeni handlowych i rozrywkowych.",
      images: [Project6, BuildMall1, BuildMall2, BuildMall3],
      rating: 4.4,
      tags: ["Nowoczesne centrum", "Przestrzenie handlowe", "Rozrywka"]
    }
  ];


  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => setSelectedProject(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section id="portfolio" className="p-12 bg-gray-100 text-gray-800">
      <div className="mb-12">
        <StyledHeading>Portfolio</StyledHeading>
        <p className="mt-4 text-lg text-gray-600 text-center">
            Przedstawiamy nasze najlepsze projekty, które realizowaliśmy z pełnym zaangażowaniem i pasją. Zobacz, co możemy dla Ciebie stworzyć.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between h-full"
            onClick={() => openModal(project)}
          >
            <div>
              <img src={project.images[0]} alt={`Zdjęcie projektu - ${project.title}`} className="w-full h-48 object-cover rounded-lg mb-4" loading="lazy" />
              <div className="min-h-[60px]">
                <h3 className="text-2xl font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                  {project.title}
                </h3>
              </div>
              <div className="min-h-[80px]">
                <p className="text-gray-500 text-sm">{project.category} • {project.location}</p>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: Math.floor(project.rating) }, (_, i) => (
                    <AiFillStar key={i} />
                  ))}
                  {project.rating % 1 !== 0 && <AiFillStar className="opacity-50" />}
                </div>
                <span className="ml-2 text-gray-600">({project.rating})</span>
              </div>
            </div>
            <button className="relative inline-block px-8 py-3 font-semibold text-yellow-500 border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out mt-auto">
              Dowiedz się więcej
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={closeModal} aria-label="Zamknij modal">
              &times;
            </button>
            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`Zdjęcie projektu - ${selectedProject.title}`}
                className="w-full h-96 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <button onClick={prevImage} aria-label="Poprzednie zdjęcie" className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-2xl">&lt;</button>
              <button onClick={nextImage} aria-label="Następne zdjęcie" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-2xl">&gt;</button>
            </div>
            <h3 className="text-3xl font-semibold mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{selectedProject.category} • {selectedProject.location}</p>
            <p className="text-gray-700">{selectedProject.details}</p>
            <button
              className="relative inline-block px-8 py-3 font-semibold text-yellow-500 border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out mt-6"
              onClick={closeModal}
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;






