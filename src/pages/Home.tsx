import React from 'react';
import Hero from '../components/home/Hero';
import PracticeAreasSection from '../components/home/PracticeAreasSection';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogSection from '../components/home/BlogSection';
import FAQSection from '../components/home/FAQSection';
import ContactSection from '../components/home/ContactSection';

const Home: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = "Abogado Profesional | Servicios Legales de Excelencia";
  }, []);

  return (
    <div>
      <Hero />
      <AboutSection />
      <PracticeAreasSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Home;