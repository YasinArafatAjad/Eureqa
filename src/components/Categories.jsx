import React from 'react';
import { motion } from 'framer-motion';
import { Code, Megaphone, Palette, Briefcase, Globe, Calculator } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useThemeContext } from '../context/ThemeContext';

const Categories = () => {
  const { t } = useLanguage();
  const { darkMode } = useThemeContext();

  const categories = [
    {
      icon: Code,
      title: t('webDevelopment'),
      courses: '120+ কোর্স',
      color: 'from-blue-500 to-blue-600',
      bgImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-blue-50',
      darkBgColor: 'bg-blue-900/20'
    },
    {
      icon: Megaphone,
      title: t('digitalMarketing'),
      courses: '85+ কোর্স',
      color: 'from-green-500 to-green-600',
      bgImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-green-50',
      darkBgColor: 'bg-green-900/20'
    },
    {
      icon: Palette,
      title: t('graphicsDesign'),
      courses: '95+ কোর্স',
      color: 'from-purple-500 to-purple-600',
      bgImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-purple-50',
      darkBgColor: 'bg-purple-900/20'
    },
    {
      icon: Calculator,
      title: t('programming'),
      courses: '150+ কোর্স',
      color: 'from-emerald-500 to-emerald-600',
      bgImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-emerald-50',
      darkBgColor: 'bg-emerald-900/20'
    },
    {
      icon: Briefcase,
      title: t('business'),
      courses: '70+ কোর্স',
      color: 'from-yellow-500 to-yellow-600',
      bgImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-yellow-50',
      darkBgColor: 'bg-yellow-900/20'
    },
    {
      icon: Globe,
      title: t('language'),
      courses: '60+ কোর্স',
      color: 'from-indigo-500 to-indigo-600',
      bgImage: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-indigo-50',
      darkBgColor: 'bg-indigo-900/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with Fixed Attachment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <motion.circle
            cx="100"
            cy="100"
            r="50"
            fill="rgba(34, 197, 94, 0.1)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle
            cx="1100"
            cy="200"
            r="30"
            fill="rgba(59, 130, 246, 0.1)"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.path
            d="M0,600 Q300,500 600,600 T1200,600"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className={`relative z-10 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              {t('categoriesTitle')}
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              আপনার পছন্দের বিষয়ে দক্ষতা অর্জন করুন
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.bgImage})` }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/80' : 'bg-white/90'} group-hover:bg-opacity-95 transition-all duration-300`} />
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="text-2xl"
                    >
                      📚
                    </motion.div>
                  </div>

                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-primary-600 transition-colors duration-300`}>
                    {category.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 flex-grow`}>
                    {category.courses}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300"
                  >
                    কোর্স দেখুন
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl"
                  whileHover={{
                    borderColor: "rgba(34, 197, 94, 0.5)",
                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Categories;