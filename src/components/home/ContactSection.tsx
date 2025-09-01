import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendCompleteEmailFlow, prepareTemplateParams } from '../../utils/emailjs';

const ContactSection: React.FC = () => {
  // Estados para el formulario
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Preparar parámetros del template
      const templateParams = prepareTemplateParams(formData, 'Formulario de Consulta Rápida');

      // Enviar tanto la notificación como la respuesta automática
      const result = await sendCompleteEmailFlow(templateParams);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          from_name: '',
          from_email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Error en el envío de emails');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-700">¡Mensaje enviado exitosamente! Nos contactaremos pronto.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-red-700">Error al enviar el mensaje. Por favor, intente nuevamente.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="from_name_contact" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="from_name_contact"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone_contact" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone_contact"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="from_email_contact" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="from_email_contact"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="subject_contact" className="block text-sm font-medium text-gray-700 mb-1">
                    Área de consulta *
                  </label>
                  <select
                    id="subject_contact"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Seleccione un área</option>
                    <option value="Derecho Civil">Derecho Civil</option>
                    <option value="Derecho Penal">Derecho Penal</option>
                    <option value="Derecho Laboral">Derecho Laboral</option>
                    <option value="Derecho de Familia">Derecho de Familia</option>
                    <option value="Derecho Comercial">Derecho Comercial</option>
                    <option value="Derecho Inmobiliario">Derecho Inmobiliario</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message_contact" className="block text-sm font-medium text-gray-700 mb-1">
                    Descripción de su caso *
                  </label>
                  <textarea
                    id="message_contact"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Describa brevemente su situación legal..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div>
                  <label className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" required disabled={isSubmitting} />
                    <span className="text-sm text-gray-600">
                      Acepto la <a href="/politica-privacidad" className="text-primary-500 hover:underline">política de privacidad</a> y el tratamiento de mis datos para ser contactado.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar consulta
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
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