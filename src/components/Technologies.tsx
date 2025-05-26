import React from 'react';
import Card from './Card';
import { Cpu, Layers, BarChart3, Brain } from 'lucide-react';

type TechCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => {
  return (
    <Card glassEffect className="p-6 border border-white/20 h-full group hover:bg-white/20 transition-all">
      <div className="text-white mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </Card>
  );
};

const Technologies: React.FC = () => {
  const technologies = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Aprendizaje Automático",
      description: "Utilizamos algoritmos avanzados de ML para crear sistemas inteligentes que aprenden y se adaptan a las necesidades de tu negocio.",
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Procesamiento de Lenguaje Natural",
      description: "Nuestras herramientas de PLN permiten una comprensión del texto similar a la humana para chatbots, generación de contenido y análisis de sentimientos.",
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Visión por Computadora",
      description: "Implementamos sistemas de reconocimiento visual para clasificación de imágenes, detección de objetos y realidad aumentada.",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Análisis Predictivo",
      description: "Aprovecha tus datos con análisis impulsado por IA para pronosticar tendencias y tomar decisiones basadas en datos.",
    },
  ];

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-indigo-700 to-indigo-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-400 rounded-full filter blur-2xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-teal-300">Tecnologías</span> de IA que Utilizamos
          </h2>
          <p className="text-lg text-white/80">
            Aprovechamos las tecnologías de inteligencia artificial de vanguardia para ofrecer
            soluciones innovadoras para los desafíos de tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center py-6 px-8">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Proyectos Completados</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center py-6 px-8">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Tecnologías de IA</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center py-6 px-8">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Satisfacción del Cliente</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center py-6 px-8">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;