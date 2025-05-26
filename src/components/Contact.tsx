import React from 'react';
import Button from './Button';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Contáctanos <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Ahora</span>
              </h2>
              <p className="text-gray-600 mb-8">
                ¿Listo para transformar tu presencia digital? Completa el formulario y nuestro equipo te responderá en menos de 24 horas.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    placeholder="¿Cómo podemos ayudarte?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                
                <Button variant="primary" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
            
            {/* Contact info */}
            <div className="flex flex-col">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Correo</p>
                      <p className="font-medium">info@aldoia.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Teléfono</p>
                      <p className="font-medium">+51 (1) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-lg mr-4">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">ChatBot</p>
                      <p className="font-medium">Disponibilidad 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
                <h3 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-lg mb-2">¿Cuánto tiempo toma un proyecto típico?</h4>
                    <p className="text-gray-600">La mayoría de los proyectos se completan en 1 semana, dependiendo de su complejidad y alcance.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg mb-2">¿Ofrecen mantenimiento continuo?</h4>
                    <p className="text-gray-600">Sí, ofrecemos varios paquetes de mantenimiento para mantener sus productos digitales actualizados.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg mb-2">¿Puedo ver ejemplos de sus integraciones con IA?</h4>
                    <p className="text-gray-600">¡Por supuesto! Revisa nuestra sección de portafolio o contáctanos para una demo personalizada.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;