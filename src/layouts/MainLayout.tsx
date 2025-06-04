import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ScrollToTop from '../components/utils/ScrollToTop';

const MainLayout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating page load with modern timing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <ScrollToTop />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #f59e0b 100%)'
            }}
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3 }
            }}
          >
            <div className="text-white text-xl">Cargando...</div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="flex flex-col min-h-screen relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Header />
            <main className="flex-grow relative">
              <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;