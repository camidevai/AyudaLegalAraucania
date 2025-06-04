import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contacto | Servicios Legales de Excelencia";
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary-500 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contacto</h2>
          <p className="text-xl max-w-2xl text-white">
            Estoy a su disposición para resolver sus inquietudes legales. Contácteme por cualquiera de los siguientes canales.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="section-heading">Información de Contacto</h2>
              <p className="text-gray-600 mb-8">
                Si prefiere una comunicación directa, puede contactarme a través de los siguientes medios:
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary-500 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-500 text-lg">Teléfono</h4>
                    <a href="tel:+56912345678" className="text-lg text-accent-500 hover:text-accent-700">
                      +56 9 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-500 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-500 text-lg">Email</h4>
                    <a href="mailto:consultas@abogadoprofesional.cl" className="text-lg text-accent-500 hover:text-accent-700">
                      consultas@abogadoprofesional.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-500 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-500 text-lg">Dirección</h4>
                    <p className="text-gray-600">
                      Oficina en Santiago Centro, Región Metropolitana<br />
                      (Dirección exacta proporcionada al agendar cita)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-500 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-500 text-lg">Horario de Atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00 hrs.<br />
                      Sábados: 10:00 - 14:00 hrs. (previa cita)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-primary-500 mb-6">Envíe su Consulta</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                      Área de consulta
                    </label>
                    <select id="area" className="input-field">
                      <option value="">Seleccione un área</option>
                      <option value="civil">Derecho Civil</option>
                      <option value="penal">Derecho Penal</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="familia">Derecho de Familia</option>
                      <option value="comercial">Derecho Comercial</option>
                      <option value="inmobiliario">Derecho Inmobiliario</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Descripción de su caso *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Describa brevemente su situación legal..."
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" required />
                      <span className="text-sm text-gray-600">
                        Acepto la política de privacidad y el tratamiento de mis datos para ser contactado.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Enviar consulta
                    <Send className="h-4 w-4 ml-2" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-10 bg-gray-50">
        <div className="container-custom">
          <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-96 bg-gray-200">
            <div className="h-full w-full flex items-center justify-center bg-primary-100 text-primary-500">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="text-xl font-medium">Mapa de ubicación</p>
                <p className="text-sm text-gray-600">Santiago Centro, Región Metropolitana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;