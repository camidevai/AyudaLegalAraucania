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

      {/* Logo Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Logo superior izquierda */}
        <motion.div
          className="absolute top-16 left-8 opacity-5"
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [0.8, 1, 0.8],
            rotate: [-15, -10, -15]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img
            src="/img/logotipo.png"
            alt=""
            className="w-40 h-40 object-contain"
          />
        </motion.div>

        {/* Logo superior derecha */}
        <motion.div
          className="absolute top-32 right-12 opacity-5"
          initial={{ opacity: 0, scale: 0.6, rotate: 20 }}
          animate={{
            opacity: [0.05, 0.08, 0.05],
            scale: [0.6, 0.8, 0.6],
            rotate: [20, 25, 20]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <img
            src="/img/logotipo.png"
            alt=""
            className="w-32 h-32 object-contain"
          />
        </motion.div>

        {/* Logo centro izquierda */}
        <motion.div
          className="absolute top-1/2 left-4 opacity-5 transform -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
          animate={{
            opacity: [0.05, 0.12, 0.05],
            scale: [0.4, 0.6, 0.4],
            rotate: [-30, -25, -30],
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <img
            src="/img/logotipo.png"
            alt=""
            className="w-28 h-28 object-contain"
          />
        </motion.div>

        {/* Logo inferior derecha */}
        <motion.div
          className="absolute bottom-24 right-8 opacity-5"
          initial={{ opacity: 0, scale: 0.7, rotate: 10 }}
          animate={{
            opacity: [0.05, 0.09, 0.05],
            scale: [0.7, 0.9, 0.7],
            rotate: [10, 15, 10]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <img
            src="/img/logotipo.png"
            alt=""
            className="w-36 h-36 object-contain"
          />
        </motion.div>

        {/* Logo centro superior */}
        <motion.div
          className="absolute top-20 left-1/2 opacity-5 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{
            opacity: [0.05, 0.07, 0.05],
            scale: [0.5, 0.7, 0.5],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <img
            src="/img/logotipo.png"
            alt=""
            className="w-24 h-24 object-contain"
          />
        </motion.div>

        {/* Logo inferior izquierda */}
        <motion.div
          className="absolute bottom-16 left-16 opacity-5"
          initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
          animate={{
            opacity: [0.05, 0.11, 0.05],
            scale: [0.6, 0.8, 0.6],
            rotate: [-25, -20, -25],
            x: [-5, 5, -5]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        >
          <img
            src="/img/logotipo.png"
            alt=""
            className="w-30 h-30 object-contain"
          />
        </motion.div>

        {/* Logo centro derecha */}
        <motion.div
          className="absolute top-2/3 right-4 opacity-5"
          initial={{ opacity: 0, scale: 0.4, rotate: 35 }}
          animate={{
            opacity: [0.05, 0.08, 0.05],
            scale: [0.4, 0.6, 0.4],
            rotate: [35, 40, 35]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        >
          <img
            src="/img/logotipo.png"
            alt=""
            className="w-26 h-26 object-contain"
          />
        </motion.div>
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
                href="tel:+56982243242"
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

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Premium Consulta Gratuita Section */}
            <div className="relative max-w-2xl mx-auto">
              {/* Professional Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400/30 via-primary-400/20 to-accent-500/30 rounded-[3rem] blur-3xl scale-110 animate-pulse"></div>

              {/* Main Professional Card */}
              <motion.div
                className="relative bg-gradient-to-br from-white/20 via-white/15 to-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border-2 border-white/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 35px 60px -12px rgba(0,0,0,0.5)",
                  borderColor: "rgba(255,255,255,0.6)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Premium Floating Icons */}
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center shadow-2xl z-20 border-2 border-white/30"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      "0 20px 40px -12px rgba(211, 156, 46, 0.4)",
                      "0 25px 50px -12px rgba(211, 156, 46, 0.6)",
                      "0 20px 40px -12px rgba(211, 156, 46, 0.4)"
                    ]
                  }}
                  transition={{
                    hover: { type: "spring", stiffness: 400 },
                    default: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Shield className="w-10 h-10 text-white drop-shadow-lg" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-2xl z-20 border-2 border-white/30"
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      "0 20px 40px -12px rgba(99, 102, 241, 0.4)",
                      "0 25px 50px -12px rgba(99, 102, 241, 0.6)",
                      "0 20px 40px -12px rgba(99, 102, 241, 0.4)"
                    ]
                  }}
                  transition={{
                    hover: { type: "spring", stiffness: 400 },
                    default: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                  }}
                >
                  <Award className="w-8 h-8 text-white drop-shadow-lg" />
                </motion.div>

                {/* Premium Content Container */}
                <div className="relative">
                  {/* Image Spotlight Effect */}
                  <div className="relative group">
                    {/* Dynamic Background Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent-400/40 via-white/20 to-primary-400/40 rounded-3xl blur-xl"
                      animate={{
                        background: [
                          "linear-gradient(to right, rgba(211, 156, 46, 0.4), rgba(255, 255, 255, 0.2), rgba(99, 102, 241, 0.4))",
                          "linear-gradient(to right, rgba(99, 102, 241, 0.4), rgba(255, 255, 255, 0.3), rgba(211, 156, 46, 0.4))",
                          "linear-gradient(to right, rgba(211, 156, 46, 0.4), rgba(255, 255, 255, 0.2), rgba(99, 102, 241, 0.4))"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <motion.div
                      className="relative bg-white/25 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/50 shadow-inner"
                      whileHover={{
                        backgroundColor: "rgba(255,255,255,0.35)",
                        borderColor: "rgba(255,255,255,0.7)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src="/consultaGratuita.png"
                        alt="Consulta Gratuita - Asesorías Legales Profesionales"
                        className="w-full h-auto max-h-96 object-contain rounded-2xl shadow-2xl"
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.4,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{
                          scale: 1.05,
                          rotateY: 3,
                          rotateX: 1,
                          filter: "brightness(1.1)"
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Professional Accent Elements */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                    <div className="w-8 h-2 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Decorative Elements */}
              <motion.div
                className="absolute -top-12 left-1/4 w-6 h-6 bg-accent-400/70 rounded-full shadow-lg"
                animate={{
                  y: [-15, 15, -15],
                  opacity: [0.4, 0.9, 0.4],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-10 right-1/4 w-8 h-8 bg-primary-400/60 rounded-full shadow-lg"
                animate={{
                  y: [15, -15, 15],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1.2, 0.8, 1.2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              <motion.div
                className="absolute top-1/3 -left-8 w-4 h-4 bg-accent-300/60 rounded-full shadow-md"
                animate={{
                  x: [-8, 8, -8],
                  opacity: [0.3, 0.9, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-1/3 -right-10 w-5 h-5 bg-primary-300/50 rounded-full shadow-md"
                animate={{
                  x: [10, -10, 10],
                  opacity: [0.4, 1, 0.4],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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