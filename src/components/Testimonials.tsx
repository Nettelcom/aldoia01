import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Card from './Card';

type TestimonialProps = {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
};

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  position, 
  company, 
  avatar,
  rating
}) => {
  return (
    <Card className="p-8 h-full flex flex-col">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-6 flex-1">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-gray-500">{position}, {company}</div>
        </div>
      </div>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Trabajar con AldoIA transformó nuestro negocio. Su enfoque de diseño web basado en IA nos permitió crear un sitio web que superó nuestras expectativas y mejoró significativamente nuestras tasas de conversión.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      quote: "La aplicación móvil que desarrollaron para nosotros ha recibido excelentes comentarios de nuestros usuarios. Su atención al detalle y su enfoque en la experiencia del usuario marcaron la diferencia.",
      author: "Michael Chen",
      position: "Product Manager",
      company: "FitLife",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      quote: "Sus servicios de integración de IA nos ayudaron a automatizar la atención al cliente, reduciendo los tiempos de respuesta y mejorando la satisfacción. El equipo fue profesional y experto en todo momento.",
      author: "Jessica Martinez",
      position: "Customer Experience Lead",
      company: "ServiceHub",
      avatar: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    },
    {
      quote: "AldoIA nos ayudó a reimaginar nuestra plataforma de comercio electrónico con recomendaciones basadas en IA. Desde su lanzamiento, hemos visto un aumento del 40 % en el valor promedio de los pedidos.",
      author: "David Wilson",
      position: "E-commerce Director",
      company: "StyleShop",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      quote: "La experiencia del equipo, tanto en diseño como en tecnología de IA, es inigualable. Crearon un sitio web atractivo que, además, cumple excepcionalmente bien con las necesidades de nuestro negocio.",
      author: "Amanda Patel",
      position: "COO",
      company: "InnovateX",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
  ];
  
  const totalSlides = Math.ceil(testimonials.length / 3);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const visibleTestimonials = testimonials.slice(
    currentSlide * 3,
    Math.min((currentSlide + 1) * 3, testimonials.length)
  );

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testimonios de <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-lg text-gray-600">
            No solo tome nuestra palabra. Esto es lo que nuestros clientes dicen sobre trabajar con nosotros.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            ))}
          </div>
          
          {totalSlides > 1 && (
            <div className="flex justify-center mt-12 space-x-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;