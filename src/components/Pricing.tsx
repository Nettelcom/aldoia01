import React from 'react';
import Card from './Card';
import Button from './Button';
import { Check } from 'lucide-react';

type PricingPlanProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
};

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  description, 
  features,
  isPopular = false
}) => {
  return (
    <Card className={`p-8 flex flex-col h-full ${isPopular ? 'border-2 border-purple-500 relative' : ''}`}>
      {isPopular && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Más Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-baseline mb-2">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 ml-2">/proyecto</span>}
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant={isPopular ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
      >Empezar Ahora
      </Button>
    </Card>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Básico",
      price: "S/.100",
      description: "Perfecto para sitios web de pequeñas empresas",
      features: [
        "Diseño web responsivo",
        "Hasta 5 páginas",
        "Configuración básica de SEO",
        "Formulario de contacto",
        "Diseño adaptable a móviles",
        "30 días de soporte"
      ]
    },
    {
      name: "Premium",
      price: "S/.500",
      description: "Ideal para negocios en crecimiento",
      features: [
        "Todo lo del plan Básico",
        "Aplicación web personalizada",
        "Integración de CMS",
        "Funcionalidad de comercio electrónico",
        "Chatbot básico con IA",
        "90 días de soporte",
        "Optimización de rendimiento"
      ],
      isPopular: true
    },
    {
      name: "Empresarial",
      price: "Personalizado",
      description: "Para proyectos a gran escala",
      features: [
        "Todo lo del plan Premium",
        "Desarrollo de aplicación móvil personalizada",
        "Integración avanzada de IA",
        "Desarrollo de API",
        "Panel de análisis personalizado",
        "1 año de soporte prioritario",
        "Gerente de cuenta dedicado"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precios Simples y <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Transparentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Elige el plan que se ajuste a las necesidades de tu proyecto. Todos los planes incluyen nuestro enfoque de diseño potenciado por IA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas una solución personalizada?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Entendemos que cada proyecto es único. Contáctanos para obtener una cotización
            personalizada según tus requisitos específicos.
          </p>
          <Button variant="secondary" size="lg">
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;