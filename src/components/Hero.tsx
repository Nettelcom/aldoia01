import React from 'react';
import { ArrowRight, Code, Layout, Smartphone } from 'lucide-react';
import Button from './Button';
import Carousel from './Carousel';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-teal-50 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-50 to-transparent"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-100 rounded-full blur-2xl opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Transformamos tus Ideas en</span>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Soluciones Digitales
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Desarrollamos sitios web y aplicaciones móviles innovadoras utilizando las últimas tecnologías de Inteligencia Artificial, 
              entregando soluciones excepcionales que materializan tu visión.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button variant="primary" size="lg" withArrow>
                Comienza tu Proyecto
              </Button>
              <Button variant="outline" size="lg">
                Explora Nuestro Portafolio
              </Button>
            </div>
            
            {/* Trust badges */}
           
          </div>
          
          {/* Hero image/illustration */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-2 border border-gray-100 max-w-md mx-auto">
              <div className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]">               
                  <img src="/img/tecnologia.avif" alt="Bolt IA" className="w-full h-full object-cover" />                
              </div>
              
              {/* Floating feature cards */}
              <div className="absolute -left-16 top-1/4 bg-white rounded-lg shadow-lg p-4 flex items-center animate-float">
                <div className="bg-purple-100 rounded-full p-2 mr-3">
                  <Layout className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Diseño Web</p>
                  <p className="text-xs text-gray-500">Diseños Impactantes</p>
                </div>
              </div>
              
              <div className="absolute -right-16 top-1/4 bg-white rounded-lg shadow-lg p-4 flex items-center animate-float-delayed">
                <div className="bg-teal-100 rounded-full p-2 mr-3">
                  <Smartphone className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium">Aplicaciones Móviles</p>
                  <p className="text-xs text-gray-500">iOS y Android</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-16 bg-white rounded-lg shadow-lg p-4 flex items-center animate-float-slow">
                <div className="bg-indigo-100 rounded-full p-2 mr-3">
                  <Code className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium">Integración de IA</p>
                  <p className="text-xs text-gray-500">Soluciones Inteligentes</p>
                </div>
              </div>

              <div className="absolute -right-8 -bottom-4 bg-white rounded-lg shadow-lg p-4 flex items-center animate-float-delayed">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <Code className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Sistemas Integrados</p>
                  <p className="text-xs text-gray-500">Soluciones Empresariales</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 right-10 w-40 h-40 bg-teal-200 rounded-full blur-2xl opacity-40"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative mt-12">
        <Carousel />
      </div>
    </section>
  );
};

export default Hero;