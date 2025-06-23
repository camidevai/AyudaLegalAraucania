import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Users, Calendar, Award, ArrowRight, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const InAction: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const audienceImages = [
    {
      src: '/img/audiencias/CapturaUno.png',
      alt: 'Audiencia Virtual - Sesión 1'
    },
    {
      src: '/img/audiencias/CapturaDospng',
      alt: 'Audiencia Virtual - Sesión 2'
    },
    {
      src: '/img/audiencias/CapturaTres.png',
      alt: 'Audiencia Virtual - Sesión 3'
    },
    {
      src: '/img/audiencias/CapturaCuatro.png',
      alt: 'Audiencia Virtual - Sesión 4'
    }
  ];

  const stats = [
    { number: '150+', label: 'Audiencias Exitosas', icon: Users },
    { number: '95%', label: 'Casos Ganados', icon: Award },
    { number: '24/7', label: 'Disponibilidad', icon: Calendar }
  ];

  const scrollToSlide = (direction: 'prev' | 'next') => {
    if (!carouselRef.current) return;

    const slideWidth = carouselRef.current.children[0]?.clientWidth || 0;
    const gap = 32; // 2rem gap
    const scrollAmount = slideWidth + gap;

    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % audienceImages.length);
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      setCurrentIndex((prev) => (prev - 1 + audienceImages.length) % audienceImages.length);
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const goToSlide = (index: number) => {
    if (!carouselRef.current) return;

    const slideWidth = carouselRef.current.children[0]?.clientWidth || 0;
    const gap = 32;
    const scrollAmount = (slideWidth + gap) * index;

    setCurrentIndex(index);
    carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-primary-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-accent-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 mr-2" />
            En Tiempo Real
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Defendiendo Sus Derechos
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              En Acción
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Participando activamente en audiencias virtuales para defender los derechos de nuestros clientes.
            Comprometidos con la excelencia legal en cada representación.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</div>
              <div className="text-secondary-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <motion.h3
              className="text-2xl font-bold text-secondary-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Galería de Audiencias
            </motion.h3>

            <div className="flex space-x-3">
              <motion.button
                onClick={() => scrollToSlide('prev')}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSlide('next')}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-secondary-600 hover:text-primary-600 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Carousel */}
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              ref={carouselRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {audienceImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        whileHover={{ scale: 1.02 }}
                      />

                      {/* Simple Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-center text-white">
                            <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                              Ver imagen completa
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Professional Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Audiencia Virtual
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {audienceImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-secondary-300 hover:bg-secondary-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+56982243242"
              className="btn-primary"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Agendar Consulta
            </a>
            <a
              href="#casos"
              className="btn-outline"
            >
              Ver Más Casos
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal for enlarged images */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={audienceImages[selectedImage].src}
                alt={audienceImages[selectedImage].title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InAction;
