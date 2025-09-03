import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, Heart, Shield, Users, Award, CheckCircle, Star, Gavel } from 'lucide-react';

const CodeOfEthics: React.FC = () => {
  useEffect(() => {
    document.title = "Código de Ética Profesional | Compromiso con la Excelencia Legal";
  }, []);

  const principles = [
    {
      icon: Scale,
      title: "Integridad",
      description: "Actuamos con honestidad y transparencia en todas nuestras relaciones profesionales.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Confidencialidad",
      description: "Protegemos la información de nuestros clientes con el más alto nivel de discreción.",
      color: "green"
    },
    {
      icon: Users,
      title: "Respeto",
      description: "Tratamos a todos los clientes, colegas y terceros con dignidad y consideración.",
      color: "purple"
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos comprometemos con la mejora continua y la prestación de servicios de calidad superior.",
      color: "amber"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compromiso Social",
      description: "Contribuimos al acceso a la justicia y al desarrollo de nuestra comunidad."
    },
    {
      icon: Gavel,
      title: "Justicia",
      description: "Defendemos el estado de derecho y promovemos la equidad en todos nuestros actos."
    },
    {
      icon: Star,
      title: "Responsabilidad",
      description: "Asumimos las consecuencias de nuestras decisiones y actuamos con diligencia profesional."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-500 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
                <Scale className="h-12 w-12 text-accent-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Código de Ética Profesional</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Nuestro compromiso inquebrantable con los más altos estándares éticos y profesionales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading inline-block mx-auto mb-6">Principios Fundamentales</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estos principios guían cada aspecto de nuestra práctica profesional y definen 
                nuestro compromiso con la excelencia ética.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`p-6 bg-${principle.color}-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center`}>
                  <principle.icon className={`h-12 w-12 text-${principle.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-4">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Ethics */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary-500 mb-6">Compromisos Éticos Específicos</h2>
              <p className="text-lg text-gray-600">
                Nuestro código de ética se basa en las normas del Colegio de Abogados de Chile 
                y las mejores prácticas internacionales.
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Con los Clientes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-primary-500 mb-6 flex items-center">
                  <Users className="h-8 w-8 mr-3" />
                  Compromiso con los Clientes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Deberes Fundamentales:</h4>
                    <ul className="space-y-2">
                      {[
                        "Actuar siempre en el mejor interés del cliente",
                        "Mantener absoluta confidencialidad",
                        "Proporcionar asesoría competente y diligente",
                        "Informar regularmente sobre el progreso del caso"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Transparencia:</h4>
                    <ul className="space-y-2">
                      {[
                        "Honorarios claros y justos",
                        "Comunicación honesta sobre expectativas",
                        "Revelación de posibles conflictos de interés",
                        "Explicación clara de riesgos y alternativas"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Con la Profesión */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-primary-500 mb-6 flex items-center">
                  <Scale className="h-8 w-8 mr-3" />
                  Compromiso con la Profesión
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Nos comprometemos a mantener y elevar los estándares de la profesión legal:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-primary-50 rounded-lg">
                      <Award className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                      <h4 className="font-semibold text-primary-700 mb-2">Formación Continua</h4>
                      <p className="text-sm text-primary-600">
                        Actualización constante en conocimientos legales y mejores prácticas.
                      </p>
                    </div>
                    <div className="text-center p-4 bg-accent-50 rounded-lg">
                      <Users className="h-8 w-8 text-accent-500 mx-auto mb-3" />
                      <h4 className="font-semibold text-accent-700 mb-2">Colaboración</h4>
                      <p className="text-sm text-accent-600">
                        Respeto y cooperación con colegas y otros profesionales del derecho.
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Gavel className="h-8 w-8 text-green-500 mx-auto mb-3" />
                      <h4 className="font-semibold text-green-700 mb-2">Integridad</h4>
                      <p className="text-sm text-green-600">
                        Conducta ejemplar que honre la dignidad de la profesión legal.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading inline-block mx-auto mb-6">Valores Institucionales</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estos valores definen nuestra identidad profesional y guían nuestras decisiones diarias.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="p-4 bg-primary-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-20 bg-primary-500 text-white">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <Scale className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nuestro Compromiso Ético</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100">
                Nos comprometemos a mantener estos estándares éticos en cada caso, cada consulta y cada
                interacción profesional. Su confianza es nuestro mayor activo.
              </p>
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-white/20">
                <p className="text-lg italic text-white font-medium">
                  "La ética no es solo lo que hacemos cuando otros nos observan,
                  sino lo que hacemos cuando nadie está mirando."
                </p>
                <p className="text-sm mt-4 text-gray-200 font-medium">
                  - Principio fundamental de nuestra práctica profesional
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a href="/contacto" className="btn bg-accent-500 text-white hover:bg-accent-400 shadow-lg hover:shadow-xl transition-all duration-300">
                  Conocer Más
                </a>
                <a href="/sobre-mi" className="btn bg-white text-primary-600 hover:bg-gray-50 hover:text-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                  Nuestro Equipo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeOfEthics;
