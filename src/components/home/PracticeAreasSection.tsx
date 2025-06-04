import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Scale, Gavel, Briefcase, Users, Building, Home, ArrowUpRight } from 'lucide-react';
import { practiceAreas } from '../../data/content';

const getIcon = (iconName: string) => {
  const iconClasses = "h-12 w-12 text-primary-500 group-hover:text-primary-600 transition-colors duration-300";
  switch (iconName) {
    case 'scale': return <Scale className={iconClasses} />;
    case 'gavel': return <Gavel className={iconClasses} />;
    case 'briefcase': return <Briefcase className={iconClasses} />;
    case 'users': return <Users className={iconClasses} />;
    case 'building': return <Building className={iconClasses} />;
    case 'home': return <Home className={iconClasses} />;
    default: return <Scale className={iconClasses} />;
  }
};

const PracticeAreasSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100/80 backdrop-blur-sm rounded-full text-primary-600 text-sm font-medium mb-6">
            <Scale className="w-4 h-4 mr-2" />
            Especialidades Legales
          </div>
          <h2 className="section-heading-center">Áreas de Práctica</h2>
          <p className="max-w-3xl mx-auto text-secondary-600 text-lg leading-relaxed">
            Ofrecemos asesoría legal especializada en diversas áreas del derecho,
            con un enfoque personalizado y estratégico para cada cliente.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              variants={item}
              className="group"
              id={area.id}
            >
              <div className="card h-full p-6">
                <div className="mb-4">
                  {getIcon(area.icon)}
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <Link
                  to={`/areas-practica#${area.id}`}
                  className="inline-flex items-center text-accent-500 hover:text-accent-700"
                >
                  Saber más <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/areas-practica" className="btn-outline">
            Ver todas las áreas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;