import React from 'react';
import { Layout, Smartphone, Code, Lightbulb, Zap, PenTool } from 'lucide-react';
import Card from './Card';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  bgColor: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  accentColor,
  bgColor
}) => {
  return (
    <Card className="p-6 h-full group hover:translate-y-[-8px]">
      <div className={`${bgColor} rounded-full p-4 inline-block mb-4 transition-all duration-300 group-hover:scale-110`}>
        <div className={`${accentColor}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Diseño de Sitios Web",
      description: "Sitios web hermosos y adaptables que cautivan a tu audiencia y aumentan las conversiones, personalizados según tu identidad de marca.",
      accentColor: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Desarrollo de Apps Móviles",
      description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android con experiencias de usuario intuitivas.",
      accentColor: "text-teal-600",
      bgColor: "bg-teal-100"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Integración de IA",
      description: "Implementamos soluciones de IA de vanguardia para automatizar procesos, analizar datos y mejorar la experiencia del usuario.",
      accentColor: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Diseño UX/UI",
      description: "Diseño centrado en el usuario que crea experiencias intuitivas y agradables que mantienen a los usuarios regresando.",
      accentColor: "text-amber-600",
      bgColor: "bg-amber-100"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Optimización de Rendimiento",
      description: "Acelera tus productos digitales con nuestros servicios expertos de optimización para una carga más rápida y mejor posicionamiento.",
      accentColor: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Marca Personalizada",
      description: "Desarrolla una identidad visual única que te diferencie de la competencia y conecte con tu audiencia.",
      accentColor: "text-blue-600",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-lg text-gray-600">
            Aprovechamos la inteligencia artificial para ofrecer experiencias digitales excepcionales
            adaptadas a las necesidades únicas de tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              accentColor={service.accentColor}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;