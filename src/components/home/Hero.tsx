import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-accent-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent-400/30 rounded-full blur-lg"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/90 via-transparent to-primary-600/90"></div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30"
            >
              <Award className="w-4 h-4 mr-2" />
              +15 años de experiencia legal
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Defensa Legal
              <br />
              <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                De Excelencia
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Servicios jurídicos especializados con resultados comprobados.
              Su caso merece la mejor representación legal y estrategia personalizada.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="tel:+56912345678"
                className="btn-accent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Llámanos Ahora
              </a>
              <a
                href="#consulta"
                className="btn-glass"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Consulta Gratuita
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-300">500+</div>
                <div className="text-sm text-white/80">Casos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-300">15+</div>
                <div className="text-sm text-white/80">Años Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-300">98%</div>
                <div className="text-sm text-white/80">Satisfacción</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Modern Card with Legal Elements */}
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Floating Legal Icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="text-center text-white">
                  <motion.div
                    className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-transparent border-l-white ml-1"></div>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4">Consulta Gratuita</h3>
                  <p className="text-white/80 mb-6">
                    Evaluación profesional de su caso sin compromiso
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center text-sm">
                      <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                      Análisis detallado del caso
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                      Estrategia legal personalizada
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <div className="w-2 h-2 bg-accent-400 rounded-full mr-3"></div>
                      Sin costos ocultos
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-8 left-1/4 w-4 h-4 bg-accent-400/60 rounded-full"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-6 right-1/3 w-6 h-6 bg-primary-400/40 rounded-full"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 md:h-24"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="white"
            transform="translate(0, 10)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;