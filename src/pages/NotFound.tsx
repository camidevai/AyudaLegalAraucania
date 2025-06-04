import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Página no encontrada | Servicios Legales de Excelencia";
  }, []);

  return (
    <div className="min-h-screen pt-20 flex items-center">
      <div className="container-custom text-center py-20">
        <h1 className="text-6xl md:text-8xl font-bold text-primary-500 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Página no encontrada</h2>
        <p className="text-xl text-gray-600 max-w-xl mx-auto mb-8">
          Lo sentimos, la página que está buscando no existe o ha sido trasladada.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home className="mr-2 h-5 w-5" />
            Volver al inicio
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-outline"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;