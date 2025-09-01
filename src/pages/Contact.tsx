import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { sendCompleteEmailFlow, prepareTemplateParams } from '../utils/emailjs';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contacto | Servicios Legales de Excelencia";
  }, []);

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
      const templateParams = prepareTemplateParams(formData, 'Formulario de Contacto Principal');

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
                    <a href="tel:+56982243242" className="text-lg text-accent-500 hover:text-accent-700">
                      +56 9 8224 3242
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-500 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-500 text-lg">Email</h4>
                    <a href="mailto:Ayuda.legal.araucania@gmail.com" className="text-lg text-accent-500 hover:text-accent-700">
                      Ayuda.legal.araucania@gmail.com
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
                      Edificio Capital, Antonio Varas #989<br />
                      Oficina 1202, Temuco
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
                      <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
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
                    <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Área de consulta *
                    </label>
                    <select
                      id="subject"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Descripción de su caso *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
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

      {/* Map Section - Placeholder */}
      <section className="py-10 bg-gray-50">
        <div className="container-custom">
          <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-96 bg-gray-200 relative">
            <iframe
              src="https://maps.google.com/maps?q=Antonio+Varas+989,+Temuco,+Chile&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Oficina - Edificio Capital, Antonio Varas #989, Of. 1202, Temuco"
              className="absolute inset-0"
            ></iframe>

            {/* Overlay con información de contacto */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Nuestra Oficina</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Edificio Capital<br />
                    Antonio Varas #989, Of. 1202<br />
                    Temuco, Chile
                  </p>
                  <div className="flex items-center text-xs text-primary-600">
                    <Phone className="h-3 w-3 mr-1" />
                    <span>+56 9 8224 3242</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón para abrir en Google Maps */}
            <div className="absolute bottom-4 right-4">
              <a
                href="https://maps.google.com/?q=Antonio+Varas+989,+Temuco,+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center shadow-lg"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="section-heading inline-block mx-auto mb-6">Cómo Llegar</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Nuestra oficina está ubicada en el centro de Temuco, con fácil acceso en transporte público y privado.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start mb-4">
                  <MapPin className="h-6 w-6 text-primary-500 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-primary-500 mb-2">Dirección Exacta</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Edificio Capital</strong><br />
                      Antonio Varas #989, Oficina 1202<br />
                      Temuco, Región de La Araucanía<br />
                      Chile
                    </p>
                    <p className="text-sm text-gray-600">
                      Piso 12, Oficina 1202
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start mb-4">
                  <Clock className="h-6 w-6 text-primary-500 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-primary-500 mb-2">Horarios de Atención</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes:</span>
                        <span className="font-medium">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados:</span>
                        <span className="font-medium">9:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos:</span>
                        <span className="font-medium text-red-600">Cerrado</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      * Atención con cita previa
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;