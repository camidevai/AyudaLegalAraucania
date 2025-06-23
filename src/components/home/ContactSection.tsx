import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="consulta" className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">Agenda Tu Consulta</h2>
            <p className="text-gray-700 mb-8">
              Complete el formulario y me pondré en contacto a la brevedad para coordinar una reunión personalizada.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-500 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 text-lg">Contacto Telefónico</h4>
                  <p className="text-gray-600">Disponible de lunes a viernes de 9:00 a 18:00 hrs.</p>
                  <a href="tel:+56982243242" className="text-lg font-medium text-accent-500 hover:text-accent-700">
                    +56 9 8224 3242
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-500 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 text-lg">Correo Electrónico</h4>
                  <p className="text-gray-600">Respuesta en un máximo de 24 horas hábiles.</p>
                  <a href="mailto:Ayuda.legal.araucania@gmail.com" className="text-lg font-medium text-accent-500 hover:text-accent-700">
                    Ayuda.legal.araucania@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-500 rounded-full p-3 mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-500 text-lg">Horario de Atención</h4>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00 hrs.</p>
                  <p className="text-gray-600">Sábados: 10:00 - 14:00 hrs. (previa cita)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary-500 mb-6">Formulario de Contacto</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
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
                    rows={4}
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
  );
};

export default ContactSection;