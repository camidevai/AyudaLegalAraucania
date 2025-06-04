import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, BookOpen, Shield, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="section-heading">Sobre el Abogado</h2>
            <p className="text-gray-700 mb-6">
              Con más de 15 años de experiencia en el ámbito jurídico, me especializo en ofrecer soluciones legales efectivas y personalizadas para cada cliente. Mi trayectoria incluye la representación exitosa en casos complejos de diversas áreas del derecho.
            </p>
            <p className="text-gray-700 mb-8">
              Mi enfoque combina un profundo conocimiento técnico con una atención humana y cercana. Entiendo que cada caso es único y merece una estrategia legal personalizada que proteja sus intereses y derechos.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Award className="h-5 w-5 text-accent-500 mt-1 mr-2" />
                <div>
                  <h4 className="font-bold text-primary-500">Excelencia</h4>
                  <p className="text-sm text-gray-600">Máximos estándares de calidad profesional</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-accent-500 mt-1 mr-2" />
                <div>
                  <h4 className="font-bold text-primary-500">Especialización</h4>
                  <p className="text-sm text-gray-600">Conocimiento actualizado y específico</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-accent-500 mt-1 mr-2" />
                <div>
                  <h4 className="font-bold text-primary-500">Confidencialidad</h4>
                  <p className="text-sm text-gray-600">Protección total de su información</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-accent-500 mt-1 mr-2" />
                <div>
                  <h4 className="font-bold text-primary-500">Compromiso</h4>
                  <p className="text-sm text-gray-600">Dedicación absoluta a su caso</p>
                </div>
              </div>
            </div>

            <Link to="/sobre-mi" className="btn-primary">
              Conocer más
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-primary-500 rounded-lg z-0"></div>
              <img 
                src="/img/julioFotoPrincipal.jpeg"
                alt="Abogado profesional" 
                className="rounded-lg shadow-xl relative z-10 w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-accent-500 rounded-lg z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;