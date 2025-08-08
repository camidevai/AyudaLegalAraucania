import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Cases from './pages/Cases';
//import Blog from './pages/Blog';
import Contact from './pages/Contact';
//import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CodeOfEthics from './pages/CodeOfEthics';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="sobre-mi" element={<About />} />
        <Route path="areas-practica" element={<PracticeAreas />} />
        <Route path="casos" element={<Cases />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="terminos-condiciones" element={<TermsConditions />} />
        <Route path="codigo-etica" element={<CodeOfEthics />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;