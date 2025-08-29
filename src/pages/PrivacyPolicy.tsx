import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, AlertCircle, Mail, Phone } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Política de Privacidad | Protección de Datos Personales";
  }, []);

  const sections = [
    {
      icon: Shield,
      title: "Información General",
      content: "Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales de conformidad con la Ley 19.628 sobre Protección de los Datos Personales de Chile."
    },
    {
      icon: FileText,
      title: "Datos que Recopilamos",
      content: "Recopilamos información personal que usted nos proporciona voluntariamente, incluyendo nombre, correo electrónico, teléfono, dirección y detalles sobre su consulta legal."
    },
    {
      icon: Eye,
      title: "Uso de la Información",
      content: "Utilizamos sus datos personales exclusivamente para brindarle servicios legales, responder a sus consultas, programar citas y mantener comunicación profesional relacionada con su caso."
    },
    {
      icon: Lock,
      title: "Protección de Datos",
      content: "Implementamos medidas de seguridad técnicas y organizacionales apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción."
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
                <Shield className="h-12 w-12 text-accent-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidad</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Protección y tratamiento de datos personales conforme a la legislación chilena
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
                  <AlertCircle className="h-6 w-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary-700 mb-2">Última actualización: Enero 2025</h3>
                    <p className="text-primary-600">
                      Esta política cumple con la Ley 19.628 sobre Protección de los Datos Personales de Chile y 
                      establece nuestro compromiso con la privacidad y seguridad de su información personal.
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
              {/* Responsable del Tratamiento */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">1. Responsable del Tratamiento de Datos</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    El responsable del tratamiento de sus datos personales es:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Nombre:</strong> [Nombre del Abogado]</p>
                    <p><strong>RUT:</strong> [RUT del profesional]</p>
                    <p><strong>Dirección:</strong> Edificio Capital, Antonio Varas #989, Of. 1202, Temuco</p>
                    <p><strong>Teléfono:</strong> +56 9 8224 3242</p>
                    <p><strong>Email:</strong> Ayuda.legal.araucania@gmail.com</p>
                  </div>
                </div>
              </motion.section>

              {/* Datos Recopilados */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">2. Datos Personales que Recopilamos</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Datos de Identificación:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Nombre completo</li>
                      <li>RUT o documento de identidad</li>
                      <li>Fecha de nacimiento</li>
                      <li>Nacionalidad</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Datos de Contacto:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Dirección postal</li>
                      <li>Teléfono móvil y fijo</li>
                      <li>Correo electrónico</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Datos Profesionales y Legales:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Información sobre su consulta legal</li>
                      <li>Documentos relacionados con su caso</li>
                      <li>Historial de comunicaciones</li>
                      <li>Datos financieros relacionados con honorarios</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Finalidad del Tratamiento */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">3. Finalidad del Tratamiento</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">Sus datos personales son tratados con las siguientes finalidades:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Prestación de servicios jurídicos y asesoría legal</li>
                    <li>Gestión de consultas y comunicaciones</li>
                    <li>Programación y seguimiento de citas</li>
                    <li>Elaboración de documentos legales</li>
                    <li>Facturación y cobranza de honorarios</li>
                    <li>Cumplimiento de obligaciones legales y profesionales</li>
                    <li>Archivo y conservación de expedientes</li>
                  </ul>
                </div>
              </motion.section>

              {/* Base Legal */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">4. Base Legal del Tratamiento</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">El tratamiento de sus datos personales se basa en:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Consentimiento:</strong> Usted ha otorgado su consentimiento libre, específico e informado</li>
                    <li><strong>Ejecución contractual:</strong> Necesario para la prestación de servicios legales contratados</li>
                    <li><strong>Obligación legal:</strong> Cumplimiento de deberes profesionales del abogado según la legislación vigente</li>
                    <li><strong>Interés legítimo:</strong> Gestión administrativa y comercial del despacho jurídico</li>
                  </ul>
                </div>
              </motion.section>

              {/* Derechos del Titular */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">5. Sus Derechos como Titular de Datos</h2>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Conforme a la Ley 19.628, usted tiene los siguientes derechos sobre sus datos personales:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Derecho de Acceso</h3>
                      <p className="text-blue-700 text-sm">
                        Conocer qué datos personales tenemos sobre usted y cómo los utilizamos.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">Derecho de Rectificación</h3>
                      <p className="text-green-700 text-sm">
                        Solicitar la corrección de datos inexactos o incompletos.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-yellow-800 mb-2">Derecho de Cancelación</h3>
                      <p className="text-yellow-700 text-sm">
                        Solicitar la eliminación de sus datos cuando ya no sean necesarios.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-2">Derecho de Oposición</h3>
                      <p className="text-purple-700 text-sm">
                        Oponerse al tratamiento de sus datos en determinadas circunstancias.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-3">¿Cómo ejercer sus derechos?</h3>
                    <p className="text-gray-700 mb-4">
                      Para ejercer cualquiera de estos derechos, puede contactarnos a través de:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-primary-500 mr-2" />
                        <span className="text-gray-700">Ayuda.legal.araucania@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary-500 mr-2" />
                        <span className="text-gray-700">+56 9 8224 3242</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Seguridad */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">6. Medidas de Seguridad</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Implementamos medidas de seguridad técnicas, organizacionales y legales para proteger sus datos:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="p-4 bg-red-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Lock className="h-8 w-8 text-red-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Técnicas</h3>
                      <p className="text-gray-600 text-sm">
                        Encriptación, firewalls, acceso restringido y copias de seguridad.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Organizacionales</h3>
                      <p className="text-gray-600 text-sm">
                        Capacitación del personal y políticas internas de seguridad.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Legales</h3>
                      <p className="text-gray-600 text-sm">
                        Acuerdos de confidencialidad y cumplimiento normativo.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Conservación de Datos */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">7. Conservación de Datos</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Conservamos sus datos personales durante el tiempo necesario para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Cumplir con las finalidades para las cuales fueron recopilados</li>
                    <li>Satisfacer obligaciones legales y profesionales (mínimo 5 años según normativa del Colegio de Abogados)</li>
                    <li>Resolver posibles reclamaciones o disputas legales</li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6">
                    <p className="text-amber-800">
                      <strong>Importante:</strong> Una vez vencidos los plazos de conservación, procederemos a la eliminación
                      segura de sus datos personales, salvo que exista una obligación legal que requiera su conservación.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Transferencia de Datos */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">8. Transferencia de Datos</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Sus datos personales pueden ser compartidos únicamente en las siguientes circunstancias:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Con su consentimiento expreso</li>
                    <li>Con terceros necesarios para la prestación del servicio (peritos, notarios, tribunales)</li>
                    <li>Cuando sea requerido por autoridades competentes</li>
                    <li>Para cumplir obligaciones legales o profesionales</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    <strong>Compromiso:</strong> No vendemos, alquilamos ni compartimos sus datos personales con fines comerciales.
                  </p>
                </div>
              </motion.section>

              {/* Cookies y Tecnologías */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">9. Cookies y Tecnologías de Seguimiento</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Nuestro sitio web utiliza cookies y tecnologías similares para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Mejorar la funcionalidad del sitio web</li>
                    <li>Analizar el tráfico y uso del sitio</li>
                    <li>Personalizar su experiencia de navegación</li>
                    <li>Recordar sus preferencias</li>
                  </ul>
                  <p className="text-gray-700">
                    Puede configurar su navegador para rechazar cookies, aunque esto puede afectar
                    la funcionalidad de nuestro sitio web.
                  </p>
                </div>
              </motion.section>

              {/* Modificaciones */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">10. Modificaciones a esta Política</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento.
                    Las modificaciones serán comunicadas a través de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Publicación en nuestro sitio web</li>
                    <li>Notificación por correo electrónico (cuando sea aplicable)</li>
                    <li>Comunicación directa en caso de cambios sustanciales</li>
                  </ul>
                  <p className="text-gray-700">
                    Le recomendamos revisar periódicamente esta política para mantenerse informado
                    sobre cómo protegemos su información.
                  </p>
                </div>
              </motion.section>

              {/* Contacto */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-500 mb-6">11. Contacto</h2>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Si tiene preguntas, dudas o desea ejercer sus derechos sobre sus datos personales,
                    puede contactarnos a través de:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary-500 mr-3" />
                      <span className="text-gray-700">Ayuda.legal.araucania@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary-500 mr-3" />
                      <span className="text-gray-700">+56 9 8224 3242</span>
                    </div>
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">
                        Edificio Capital, Antonio Varas #989, Of. 1202, Temuco, Chile
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded border-l-4 border-primary-500">
                    <p className="text-sm text-gray-600">
                      <strong>Tiempo de respuesta:</strong> Nos comprometemos a responder sus consultas
                      relacionadas con datos personales en un plazo máximo de 10 días hábiles.
                    </p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tiene Dudas sobre sus Datos Personales?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Estamos comprometidos con la transparencia y protección de su privacidad.
                Contáctenos para cualquier consulta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:Ayuda.legal.araucania@gmail.com" className="btn-accent">
                  Enviar Consulta
                </a>
                <a href="/contacto" className="btn bg-white text-primary-500 hover:bg-gray-100">
                  Más Información
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
