import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, Gavel, Briefcase, Users, Building, Home, ArrowRight } from 'lucide-react';
import { practiceAreas } from '../data/content';

const getIcon = (iconName: string, size: number = 16) => {
  switch (iconName) {
    case 'scale': return <Scale className={`h-${size} w-${size} text-primary-500`} />;
    case 'gavel': return <Gavel className={`h-${size} w-${size} text-primary-500`} />;
    case 'briefcase': return <Briefcase className={`h-${size} w-${size} text-primary-500`} />;
    case 'users': return <Users className={`h-${size} w-${size} text-primary-500`} />;
    case 'building': return <Building className={`h-${size} w-${size} text-primary-500`} />;
    case 'home': return <Home className={`h-${size} w-${size} text-primary-500`} />;
    default: return <Scale className={`h-${size} w-${size} text-primary-500`} />;
  }
};

const PracticeAreas: React.FC = () => {
  useEffect(() => {
    document.title = "Áreas de Práctica | Servicios Legales de Excelencia";
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-500 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Áreas de Práctica</h2>
          <p className="text-xl max-w-2xl text-white">
            Especialización y experiencia en diversas áreas del derecho para brindarle la mejor asesoría legal.
          </p>
        </div>
      </section>

      {/* Areas Detail */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading inline-block mx-auto">Nuestras Especialidades</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              Ofrecemos un servicio integral en las siguientes áreas del derecho, con un enfoque personalizado para cada cliente.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {practiceAreas.map((area, index) => (
              <motion.div 
                key={area.id}
                id={area.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[2fr_1fr]' : 'lg:grid-cols-[1fr_2fr] lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      {getIcon(area.icon, 12)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-500">{area.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-lg">
                    {area.description}
                  </p>

                  {area.id === 'derecho-civil' && (
                    <>
                      <p className="text-gray-700 mb-6">
                        El derecho civil regula las relaciones entre particulares, incluyendo contratos, propiedad, obligaciones y responsabilidad civil. Mi enfoque en esta área incluye:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                        <li>Redacción y revisión de contratos civiles y mercantiles</li>
                        <li>Reclamaciones por incumplimiento contractual</li>
                        <li>Litigios sobre responsabilidad civil extracontractual</li>
                        <li>Asesoría en temas de propiedad y derechos reales</li>
                        <li>Representación en procedimientos judiciales civiles</li>
                      </ul>
                    </>
                  )}

                  {area.id === 'derecho-penal' && (
                    <>
                      <p className="text-gray-700 mb-6">
                        El derecho penal se ocupa de los delitos y sus consecuencias jurídicas. Mi servicio en esta área comprende:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                        <li>Defensa legal en todas las etapas del proceso penal</li>
                        <li>Representación en casos de delitos económicos</li>
                        <li>Defensa en delitos contra las personas</li>
                        <li>Asesoría en responsabilidad penal empresarial</li>
                        <li>Representación de víctimas de delitos</li>
                      </ul>
                    </>
                  )}

                  {/* Similar detailed information for other practice areas */}
                  {area.id === 'derecho-laboral' && (
                    <>
                      <p className="text-gray-700 mb-6">
                        El derecho laboral regula las relaciones entre empleadores y trabajadores. Mis servicios incluyen:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                        <li>Asesoría en contratación y despidos</li>
                        <li>Negociación de indemnizaciones laborales</li>
                        <li>Representación en juicios laborales</li>
                        <li>Asesoría en derechos y obligaciones laborales</li>
                        <li>Consultoría en cumplimiento normativo laboral para empresas</li>
                      </ul>
                    </>
                  )}

                  <a
                    href="/contacto"
                    className="btn-primary inline-flex items-center"
                  >
                    Consultar sobre {area.title.toLowerCase()}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>

                <div className={`${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={`https://images.pexels.com/photos/${index % 6 + 5668853}/pexels-photo-${index % 6 + 5668853}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                      alt={area.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesita Asesoría Legal Especializada?</h2>
              <p className="text-xl mb-8 lg:mb-0">
                Contacte conmigo para discutir su caso y desarrollar la estrategia legal más adecuada para sus necesidades.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-wrap gap-4 justify-center lg:justify-end">
              <a href="tel:+56912345678" className="btn-accent">
                Llame ahora
              </a>
              <a href="/contacto" className="btn bg-white text-primary-500 hover:bg-gray-100">
                Agende una consulta
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;