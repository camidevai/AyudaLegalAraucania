import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Users } from 'lucide-react';
import { testimonials } from '../../data/content';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50"></div>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231e293b' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100/80 backdrop-blur-sm rounded-full text-primary-600 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Testimonios de Clientes
          </div>
          <h2 className="section-heading-center">Lo Que Dicen Mis Clientes</h2>
          <p className="max-w-3xl mx-auto text-secondary-600 text-lg leading-relaxed">
            La satisfacción de mis clientes es el mejor testimonio de mi compromiso
            con la excelencia legal y resultados excepcionales.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              currentTestimonial === index && (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="card p-8 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-100/30 to-primary-100/30 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>

                    {/* Quote icon */}
                    <motion.div
                      className="relative mb-8"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Quote className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Stars rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 300 }}
                        >
                          <Star className="w-5 h-5 text-accent-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial content */}
                    <motion.p
                      className="text-xl md:text-2xl text-secondary-700 leading-relaxed mb-8 font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      "{testimonial.content}"
                    </motion.p>

                    {/* Client info */}
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      {testimonial.image && (
                        <div className="relative mr-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-16 w-16 rounded-2xl object-cover shadow-md"
                          />
                          <div className="absolute inset-0 rounded-2xl ring-2 ring-accent-400/20"></div>
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-primary-600 text-lg">{testimonial.name}</h4>
                        <p className="text-secondary-500 font-medium">{testimonial.position}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Modern Navigation Controls */}
          <motion.div
            className="flex justify-center items-center mt-12 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Previous Button */}
            <motion.button
              onClick={prevTestimonial}
              className="group p-3 rounded-2xl bg-white/80 backdrop-blur-sm shadow-soft border border-white/20 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
              aria-label="Testimonial anterior"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`relative transition-all duration-300 ${
                    currentTestimonial === index
                      ? 'w-8 h-3'
                      : 'w-3 h-3'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className={`w-full h-full rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                      : 'bg-secondary-300 hover:bg-secondary-400'
                  }`} />

                  {/* Active indicator glow */}
                  {currentTestimonial === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary-500/30 blur-sm"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextTestimonial}
              className="group p-3 rounded-2xl bg-white/80 backdrop-blur-sm shadow-soft border border-white/20 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
              aria-label="Siguiente testimonial"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="mt-8 max-w-md mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="h-1 bg-secondary-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-secondary-500">
              <span>{currentTestimonial + 1}</span>
              <span>{testimonials.length}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;