import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, Briefcase, Scale } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Sobre El Abogado | Servicios Legales de Excelencia";
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-500 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668857/pexels-photo-5668857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Sobre El Abogado</h2>
          <p className="text-xl max-w-2xl text-white">
            Más de 15 años dedicados a la excelencia legal y el servicio jurídico personalizado.
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-primary-500 rounded-lg z-0"></div>
                <img 
                  src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Abogado profesional" 
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-accent-500 rounded-lg z-0"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading">Trayectoria Profesional</h2>
              <p className="text-gray-700 mb-6">
                Licenciado en Ciencias Jurídicas por la Universidad de Chile, con un Magíster en Derecho de los Negocios por la Universidad Adolfo Ibáñez y estudios de especialización en Derecho Procesal en la Universidad de los Andes.
              </p>
              <p className="text-gray-700 mb-6">
                Mi carrera profesional comenzó en uno de los estudios jurídicos más prestigiosos de Santiago, donde adquirí una sólida formación en litigación y asesoría corporativa. Posteriormente, fundé mi propio estudio jurídico con el objetivo de ofrecer un servicio más personalizado y cercano a mis clientes.
              </p>
              <p className="text-gray-700 mb-6">
                A lo largo de mi trayectoria, he representado con éxito a particulares y empresas en casos complejos de diversa índole, logrando resultados favorables incluso en situaciones de alta dificultad jurídica.
              </p>

              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-primary-500 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-primary-500 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Casos Exitosos</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-primary-500 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Clientes Corporativos</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-primary-500 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Tasa de Éxito</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading inline-block mx-auto">Valores Profesionales</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              Mi ejercicio profesional se sustenta en principios sólidos que garantizan una representación legal de la más alta calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <Scale className="h-12 w-12 mx-auto text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-primary-500 mb-3">Integridad</h3>
              <p className="text-gray-600">
                Compromiso inquebrantable con la ética profesional y la honestidad en cada aspecto de la representación legal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <Award className="h-12 w-12 mx-auto text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-primary-500 mb-3">Excelencia</h3>
              <p className="text-gray-600">
                Búsqueda constante de los más altos estándares de calidad jurídica en cada caso y situación.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <Briefcase className="h-12 w-12 mx-auto text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-primary-500 mb-3">Profesionalismo</h3>
              <p className="text-gray-600">
                Dedicación absoluta a defender sus intereses con seriedad, confidencialidad y eficacia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <Clock className="h-12 w-12 mx-auto text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-primary-500 mb-3">Compromiso</h3>
              <p className="text-gray-600">
                Responsabilidad y disponibilidad permanente para atender las necesidades legales de mis clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading inline-block mx-auto">Conozca a Su Abogado</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              En este video le explico mi enfoque profesional y cómo puedo ayudarle con sus necesidades legales.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="w-full aspect-video bg-gray-200">
                {/* Placeholder for video - in production replace with actual video component */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary-700 bg-opacity-75">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-accent-500 ml-1"></div>
                      </div>
                    </div>
                    <p className="text-xl mb-2">Video de presentación profesional</p>
                    <p className="text-sm">Haga clic para reproducir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesita Asesoría Legal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estoy a su disposición para atender su caso con la dedicación y profesionalismo que merece.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+56912345678" className="btn-accent">
              Llame ahora
            </a>
            <a href="/contacto" className="btn bg-white text-primary-500 hover:bg-gray-100">
              Agende una consulta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;