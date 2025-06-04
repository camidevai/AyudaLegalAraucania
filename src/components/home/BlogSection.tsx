import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/content';

const BlogSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <h2 className="section-heading">Blog Jurídico</h2>
            <p className="max-w-2xl text-gray-600 mt-4">
              Artículos informativos sobre temas legales de interés, redactados para brindarle orientación clara y accesible.
            </p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0 inline-flex items-center text-primary-500 hover:text-primary-700 transition-colors">
            Ver todas las publicaciones <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              variants={item}
              className="card hover:shadow-xl"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{post.category}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-bold text-primary-500 mb-2 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-accent-500 hover:text-accent-700 transition-colors"
                >
                  Leer más <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;