import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scale } from 'lucide-react';

const Cases: React.FC = () => {
  useEffect(() => {
    document.title = "Casos Destacados | Servicios Legales de Excelencia";
  }, []);

  const cases = [
    {
      id: 1,
      title: "Litigio Comercial Exitoso",
      category: "Derecho Comercial",
      description: "Representación exitosa de una empresa mediana en un complejo litigio comercial, logrando una resolución favorable que protegió los intereses del cliente.",
      outcome: "Resolución favorable con compensación económica significativa",
      year: "2024"
    },
    {
      id: 2,
      title: "Defensa en Caso Laboral",
      category: "Derecho Laboral",
      description: "Defensa efectiva en un caso de despido injustificado, asegurando una compensación justa para el trabajador afectado.",
      outcome: "Acuerdo beneficioso para ambas partes",
      year: "2023"
    },
    {
      id: 3,
      title: "Resolución de Disputa Inmobiliaria",
      category: "Derecho Civil",
      description: "Mediación exitosa en un conflicto de propiedad, evitando un costoso proceso judicial y alcanzando un acuerdo satisfactorio.",
      outcome: "Acuerdo extrajudicial favorable",
      year: "2023"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-500 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6  text-white">Casos Destacados</h2>
          <p className="text-xl max-w-2xl text-white ">
            Una muestra de casos exitosos que demuestran nuestra experiencia y compromiso con los resultados.
          </p>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading inline-block mx-auto">Experiencia Comprobada</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              Estos casos representan una pequeña muestra de nuestra trayectoria profesional. Por razones de confidencialidad, se omiten detalles específicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <motion.div
                key={case_.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Scale className="h-8 w-8 text-primary-500 mr-3" />
                    <span className="text-sm font-medium text-accent-500">{case_.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-3">{case_.title}</h3>
                  <p className="text-gray-600 mb-4">{case_.description}</p>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-primary-500 font-medium">{case_.outcome}</span>
                      <span className="text-gray-500">{case_.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesita Representación Legal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Cada caso es único y merece una atención personalizada. Permítame analizar su situación y proponer la mejor estrategia legal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+56912345678" className="btn-accent">
              Llame ahora
            </a>
            <a href="/contacto" className="btn bg-white text-primary-500 hover:bg-gray-100 group">
              Agendar consulta
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;