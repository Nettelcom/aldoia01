import React from 'react';

const Carousel: React.FC = () => {
  return (
    <div className="mt-12 flex flex-col items-center lg:items-start">              
      <div className="inline-flex items-center text-lg rounded-full bg-purple-100 px-4 py-0 font-medium text-black-800 mb-6">
        <span className="animate-pulse mr-1.5">●</span> Herramientas con Inteligencia Artificial que utilizamos para dar vida a tus proyectos:
      </div>
      <div className="relative w-full h-64 overflow-hidden bg-gradient-to-r from-white via-transparent to-white">
        <div className="absolute inset-0 flex items-center justify-start space-x-12 animate-carousel pl-8" style={{ width: '200%' }}>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/bolt.jpg" alt="Bolt IA" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/windsurf.png" alt="WindSurf IA" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/trae.png" alt="Trae IA" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/hostgator.png" alt="Hostgator" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/hostinger.png" alt="Hostinger" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/gemini.jpg" alt="Gemini" className="w-full h-full object-cover" />
          </div>
          {/* Duplicamos las imágenes para un efecto de carrusel infinito */}
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/bolt.jpg" alt="Bolt IA" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/windsurf.png" alt="WindSurf IA" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/trae.png" alt="Trae IA" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/hostgator.png" alt="Hostgator" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/hostinger.png" alt="Hostinger" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-60 h-36">
            <img src="/img/gemini.jpg" alt="Gemini" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;