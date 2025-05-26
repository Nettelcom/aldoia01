import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { ExternalLink } from 'lucide-react';

type PortfolioItemProps = {
  image: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  image,
  category,
  title,
  description,
  tags,
}) => {
  return (
    <Card className="group overflow-hidden h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <Button variant="primary" size="sm" className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-sm text-purple-600 font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  const filters = ['Todos', 'Diseño Web', 'Apps Móviles', 'Soluciones de IA'];
  
  const portfolioItems = [
    {
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Diseño Web",
      title: "Plataforma de Comercio Electrónico",
      description: "Una plataforma moderna de comercio electrónico con recomendaciones de productos impulsadas por IA y experiencias de compra personalizadas.",
      tags: ["React", "Node.js", "IA", "E-commerce"],
    },
    {
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Apps Móviles",
      title: "App de Seguimiento Vehicular",
      description: "Sistema de monitoreo en tiempo real para flotas de vehículos con GPS, análisis de rutas y reportes de rendimiento.",
      tags: ["React Native", "GPS", "IoT", "Logística"],
    },
    {
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Soluciones de IA",
      title: "Generador Inteligente de Contenido",
      description: "Herramienta de creación de contenido impulsada por IA que genera textos de marketing optimizados según las pautas de la marca.",
      tags: ["IA", "PLN", "Contenido", "Marketing"],
    },
    {
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Diseño Web",
      title: "Sistema Integrado de Gestión",
      description: "Sistema integral que combina gestión financiera, análisis predictivo en tiempo real, control de procesos empresariales y monitoreo inteligente de recursos.",
      tags: ["TypeScript", "ERP", "BI", "Gestión", "Dashboard"],
    },
    {
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Apps Móviles",
      title: "Compañero de Viaje",
      description: "Aplicación de planificación de viajes con recomendaciones basadas en IA para destinos, alojamientos y actividades.",
      tags: ["Swift", "Kotlin", "Mapas", "Viajes"],
    },
    {
      image: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Soluciones de IA",
      title: "Asistente Virtual de Compras",
      description: "Asistente virtual de compras que ayuda a los usuarios a encontrar productos usando lenguaje natural y búsqueda visual.",
        tags: ["Visión por Computadora", "PLN", "Retail", "Búsqueda"],
    },
  ];
  
  const filteredItems = activeFilter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestro <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Portafolio</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explora nuestros últimos proyectos y descubre cómo hemos ayudado a las empresas a transformar su presencia digital.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              image={item.image}
              category={item.category}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;