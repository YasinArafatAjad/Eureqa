import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useThemeContext } from '../context/ThemeContext';

const Statistics = () => {
  const { t } = useLanguage();
  const { darkMode } = useThemeContext();

  const stats = [
    {
      icon: Users,
      count: '50,000+',
      label: t('studentsEnrolled'),
      description: 'সক্রিয় শিক্ষার্থী',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      count: '1,500+',
      label: t('coursesAvailable'),
      description: 'বিভিন্ন বিষয়ে',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      count: '200+',
      label: t('expertInstructors'),
      description: 'অভিজ্ঞ প্রশিক্ষক',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      count: '95%',
      label: t('successRate'),
      description: 'সফলতার হার',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      {/* Background Image with Fixed Attachment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'}`}></div>
      </div>

      {/* Animated SVG Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 600" fill="none">
          {/* Animated Lines */}
          <motion.path
            d="M0,300 Q300,100 600,300 T1200,300"
            stroke="rgba(34, 197, 94, 0.3)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,400 Q400,200 800,400 T1200,400"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Floating Geometric Shapes */}
          <motion.circle
            cx="200"
            cy="150"
            r="40"
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
          <motion.rect
            x="1000"
            y="100"
            width="60"
            height="60"
            fill="rgba(168, 85, 247, 0.1)"
            animate={{
              rotate: [0, 45, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.polygon
            points="100,500 150,450 200,500 150,550"
            fill="rgba(59, 130, 246, 0.1)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            আমাদের অর্জনসমূহ
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            সংখ্যায় আমাদের সাফল্যের গল্প
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Background Card */}
              <div className={`${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-lg rounded-2xl p-8 border text-center shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />

                <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <motion.div 
                    className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.2 + 0.5
                    }}
                  >
                    {stat.count}
                  </motion.div>
                  
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-2`}>
                    {stat.label}
                  </h3>
                  
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                    {stat.description}
                  </p>
                </motion.div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderImage: `linear-gradient(45deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]}) 1`,
                    boxShadow: `0 0 30px rgba(34, 197, 94, 0.3)`
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className={`${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-green-50/80 border-green-200'} backdrop-blur-lg rounded-2xl p-8 border inline-block relative overflow-hidden`}>
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10"
              animate={{
                x: [-100, 100, -100],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                🏆 বাংলাদেশের #১ অনলাইন শিক্ষা প্ল্যাটফর্ম
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
                আমাদের শিক্ষার্থীরা সারাদেশে সফল ক্যারিয়ার গড়ছেন
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;