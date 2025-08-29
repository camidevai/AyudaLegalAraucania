import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Cases: React.FC = () => {
  useEffect(() => {
    document.title = "Casos Destacados | Ayuda Legal Araucanía";
  }, []);

  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (cardId: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  // Casos reales anonimizados y coherentes con los servicios publicados por Ayuda Legal.
  // Fuente base (no se muestran aquí por confidencialidad): documentos institucionales compartidos.
  const cases = [
    {
      id: 1,
      title: "Suspensión Condicional del Procedimiento",
      category: "Derecho Penal",
      description:
        "Se obtuvo suspensión condicional para imputado sin antecedentes por un hecho de menor entidad. Se acordaron condiciones proporcionales (fijación de domicilio y programa breve de intervención), evitando juicio oral y afectación de antecedentes.",
      outcome: "Causa finalizada sin condena ni antecedentes",
      year: "2024",
      image: "/img/casos/Suspension_condicional_del_procedimiento.png"
    },
    {
      id: 2,
      title: "Acuerdo Reparatorio en Delito Patrimonial",
      category: "Derecho Penal",
      description:
        "Mediación jurídica que culminó en acuerdo reparatorio integral con la víctima (indemnización y plan de pago), logrando el sobreseimiento definitivo y evitando estigmatización del proceso penal.",
      outcome: "Sobreseimiento por cumplimiento del acuerdo",
      year: "2023",
      image: "/img/casos/acuerdo_reparatorio_en_delito_patrimonia.png"
    },
    {
      id: 3,
      title: "Pensión de Alimentos y Cumplimiento Efectivo",
      category: "Derecho de Familia",
      description:
        "Gestión integral de demanda de alimentos con medidas de apremio oportunas y liquidación retroactiva. Se aseguró pensión mensual y pago de deuda en cuotas fiscalizadas por el tribunal.",
      outcome: "Aumento de pensión + pago de retroactivos",
      year: "2025",
      image: "/img/casos/pensión_de_alimentos_y_cumplimiento_efectivo.png"
    },
    {
      id: 4,
      title: "Cuidado Personal y Régimen Comunicacional",
      category: "Derecho de Familia",
      description:
        "Estrategia centrada en el interés superior del niño con informes psicosociales y plan parental escalonado. Se obtuvo cuidado personal a favor del representante y régimen comunicacional progresivo para el otro progenitor.",
      outcome: "Sentencia favorable con plan parental",
      year: "2024",
      image: "/img/casos/cuidado_personal_y_regimen_comunicacional.png"
    },
    {
      id: 5,
      title: "Autorización de Viaje Internacional de Menor",
      category: "Derecho de Familia",
      description:
        "Tramitación expedita de autorización judicial ante negativa del otro progenitor. Se acreditó itinerario, garantías de retorno y vínculos familiares, logrando resolución dentro de los plazos del viaje.",
      outcome: "Autorización concedida en tiempo útil",
      year: "2023",
      image: "/img/casos/autorizacion_de_viaje_internacional_de_enor.png"
    },
    {
      id: 6,
      title: "Divorcio de Mutuo Acuerdo con Compensación",
      category: "Derecho de Familia",
      description:
        "Negociación previa y presentación conjunta con propuesta de compensación económica equilibrada. Trámite breve con sentencia ejecutoriada sin incidencias.",
      outcome: "Divorcio y compensación homologada",
      year: "2024",
      image: "/img/casos/divorcio_de_mutuo_acuerdo.png"
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-500 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Casos Destacados</h2>
          <p className="text-xl max-w-2xl text-white">
            Muestras representativas de resultados obtenidos por nuestro equipo. Detalles sensibles fueron anonimizados por confidencialidad.
          </p>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading inline-block mx-auto">Experiencia Comprobada</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              Cada caso fue abordado por especialistas en su área, aplicando estrategias oportunas para proteger derechos y tiempos procesales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => {
              const isExpanded = expandedCards.has(case_.id);
              return (
                <motion.div
                  key={case_.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`card overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col ${
                    isExpanded ? 'h-auto' : 'h-full'
                  }`}
                >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={case_.image}
                    alt={case_.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 rounded-full text-sm font-medium">
                      {case_.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm">
                      {case_.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start mb-4">
                    <Scale className="h-8 w-8 text-primary-500 mr-3 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-primary-500 line-clamp-2 leading-tight">{case_.title}</h3>
                  </div>
                  <div className="flex-grow mb-6">
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 'auto' }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-4'}`}>
                        {case_.description}
                      </p>
                    </motion.div>
                    <button
                      onClick={() => toggleCard(case_.id)}
                      className="mt-2 text-primary-500 hover:text-primary-700 text-sm font-medium inline-flex items-center transition-colors duration-200 hover:bg-primary-50 px-2 py-1 rounded-md"
                    >
                      {isExpanded ? (
                        <>
                          Ver menos <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-200" />
                        </>
                      ) : (
                        <>
                          Ver más <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Footer section - always at bottom */}
                  <div className="mt-auto">
                    <div className="border-t border-gray-200 pt-4 mb-4">
                      <div className="flex items-start mb-4 min-h-[2.5rem]">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-green-700 line-clamp-2 leading-tight">{case_.outcome}</span>
                      </div>
                    </div>
                    <a
                      href={`/contacto?consulta=${encodeURIComponent(case_.category)}`}
                      className="btn-primary btn-uniform inline-flex items-center w-full justify-center hover:scale-105 transition-transform duration-300 group"
                    >
                      <span className="line-clamp-1 flex-1 text-center">Consultar sobre {case_.category.toLowerCase()}</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </a>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>

          <p className="text-xs text-gray-500 mt-8">
            * Aviso: Los casos se presentan de forma genérica y sin datos identificatorios para resguardar la privacidad de las partes.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesita Representación Legal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Cada caso es único y merece una atención personalizada. Analicemos su situación y definamos la mejor estrategia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+56982243242" className="btn-accent">
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
