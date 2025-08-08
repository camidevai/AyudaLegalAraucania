import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, Clock, DollarSign } from 'lucide-react';

const TermsConditions: React.FC = () => {
  useEffect(() => {
    document.title = "Términos y Condiciones | Servicios Legales Profesionales";
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "Servicios Legales",
      content: "Definición y alcance de los servicios jurídicos ofrecidos, incluyendo asesoría, representación y consultoría legal."
    },
    {
      icon: DollarSign,
      title: "Honorarios",
      content: "Estructura de honorarios profesionales, formas de pago y condiciones económicas para la prestación de servicios."
    },
    {
      icon: Scale,
      title: "Responsabilidades",
      content: "Derechos y obligaciones tanto del cliente como del profesional durante la relación contractual."
    },
    {
      icon: Clock,
      title: "Plazos y Términos",
      content: "Tiempos de respuesta, duración de servicios y procedimientos para modificaciones o terminación del contrato."
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
                <FileText className="h-12 w-12 text-accent-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Términos y Condiciones</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Condiciones generales para la prestación de servicios jurídicos profesionales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-2">Última actualización: Enero 2025</h3>
                    <p className="text-primary-600">
                      Estos términos y condiciones regulan la relación contractual entre el cliente y el profesional 
                      del derecho para la prestación de servicios jurídicos.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-primary-100 rounded-lg mr-4">
                      <section.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-500">{section.title}</h3>
                  </div>
                  <p className="text-gray-600">{section.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Detailed Sections */}
            <div className="space-y-12">
              {/* Definiciones */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">1. Definiciones</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>"El Abogado":</strong> Se refiere al profesional del derecho que presta los servicios jurídicos.</li>
                      <li><strong>"El Cliente":</strong> Persona natural o jurídica que contrata los servicios legales.</li>
                      <li><strong>"Servicios":</strong> Todas las actividades jurídicas, asesorías y representaciones legales prestadas.</li>
                      <li><strong>"Contrato":</strong> El acuerdo entre las partes para la prestación de servicios legales.</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Servicios */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">2. Servicios Ofrecidos</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">Los servicios jurídicos incluyen, pero no se limitan a:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Asesoría Legal:</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Consultas jurídicas</li>
                        <li>Análisis de documentos</li>
                        <li>Opiniones legales</li>
                        <li>Estrategias jurídicas</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Representación Legal:</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Litigios judiciales</li>
                        <li>Negociaciones</li>
                        <li>Mediaciones</li>
                        <li>Arbitrajes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Honorarios */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">3. Honorarios y Pagos</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Estructura de Honorarios:</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-700">
                      <li>Los honorarios se establecen según la complejidad del caso</li>
                      <li>Pueden ser por hora, suma alzada o éxito</li>
                      <li>Se informan claramente antes del inicio del servicio</li>
                      <li>Incluyen IVA cuando corresponda</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3">Condiciones de Pago:</h3>
                    <ul className="list-disc list-inside space-y-2 text-green-700">
                      <li>Pago anticipado para consultas iniciales</li>
                      <li>Provisión de fondos para gastos procesales</li>
                      <li>Facturación mensual para servicios continuos</li>
                      <li>Plazo de pago: 30 días desde la emisión de la factura</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Obligaciones del Cliente */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">4. Obligaciones del Cliente</h2>
                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>Proporcionar información veraz y completa sobre su caso</li>
                    <li>Entregar toda la documentación relevante</li>
                    <li>Pagar los honorarios en los plazos acordados</li>
                    <li>Colaborar activamente en el desarrollo del caso</li>
                    <li>Informar cambios relevantes en su situación</li>
                    <li>Respetar las recomendaciones profesionales</li>
                  </ul>
                </div>
              </motion.section>

              {/* Obligaciones del Abogado */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">5. Obligaciones del Abogado</h2>
                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>Actuar con diligencia y competencia profesional</li>
                    <li>Mantener absoluta confidencialidad</li>
                    <li>Informar periódicamente sobre el estado del caso</li>
                    <li>Cumplir con los plazos procesales</li>
                    <li>Actuar en el mejor interés del cliente</li>
                    <li>Cumplir con el código de ética profesional</li>
                  </ul>
                </div>
              </motion.section>

              {/* Confidencialidad */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">6. Confidencialidad</h2>
                <div className="space-y-4">
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                    <p className="text-amber-800 mb-4">
                      <strong>Secreto Profesional:</strong> Toda la información proporcionada por el cliente
                      está protegida por el secreto profesional del abogado.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-amber-700">
                      <li>La información no será divulgada a terceros sin autorización</li>
                      <li>Se mantiene incluso después de terminada la relación profesional</li>
                      <li>Solo se puede revelar cuando la ley lo exija expresamente</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Limitación de Responsabilidad */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">7. Limitación de Responsabilidad</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    El abogado no garantiza resultados específicos, ya que estos dependen de múltiples factores
                    incluyendo decisiones judiciales, cambios legislativos y circunstancias del caso.
                  </p>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-3">Exclusiones:</h3>
                    <ul className="list-disc list-inside space-y-2 text-red-700">
                      <li>Decisiones adversas de tribunales</li>
                      <li>Cambios en la legislación aplicable</li>
                      <li>Información incompleta o falsa del cliente</li>
                      <li>Circunstancias imprevistas o de fuerza mayor</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Terminación del Contrato */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">8. Terminación del Contrato</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Por el Cliente:</h3>
                      <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                        <li>En cualquier momento con aviso previo</li>
                        <li>Debe pagar servicios prestados</li>
                        <li>Debe cubrir gastos incurridos</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">Por el Abogado:</h3>
                      <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                        <li>Por incumplimiento del cliente</li>
                        <li>Por conflicto de intereses</li>
                        <li>Con aviso previo razonable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Ley Aplicable */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">9. Ley Aplicable y Jurisdicción</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Estos términos y condiciones se rigen por las leyes de la República de Chile.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Jurisdicción:</strong> Tribunales de Temuco, Chile</li>
                      <li><strong>Normativa aplicable:</strong> Código Civil, Código de Procedimiento Civil, Código de Ética Profesional</li>
                      <li><strong>Resolución de conflictos:</strong> Mediación preferente, arbitraje o tribunales ordinarios</li>
                    </ul>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-500 text-white">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tiene Dudas sobre Nuestros Términos?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Estamos disponibles para aclarar cualquier aspecto de nuestros términos y condiciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:Ayuda.legal.araucania@gmail.com" className="btn-accent">
                  Consultar Términos
                </a>
                <a href="/contacto" className="btn bg-white text-primary-500 hover:bg-gray-100">
                  Agendar Reunión
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
