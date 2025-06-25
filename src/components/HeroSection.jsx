import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Users, Award, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useThemeContext } from '../context/ThemeContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const { darkMode } = useThemeContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/80' : 'bg-gradient-to-br from-green-900/70 via-emerald-800/60 to-green-700/70'}`}></div>
      </div>

      {/* Animated SVG Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <motion.path
            d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
            fill="rgba(34, 197, 94, 0.1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,500 Q400,300 800,500 T1200,500 L1200,800 L0,800 Z"
            fill="rgba(16, 185, 129, 0.05)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 left-16 w-12 h-12 bg-primary-400/20 rounded-lg backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-400/30 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              বাংলাদেশের #১ অনলাইন শিক্ষা প্ল্যাটফর্ম
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              {t('heroTitle')}
              <motion.span 
                className="text-green-400"
                animate={{ 
                  scale: [1, 1.1, 1],
                  textShadow: [
                    "0 0 0px rgba(34, 197, 94, 0)",
                    "0 0 20px rgba(34, 197, 94, 0.5)",
                    "0 0 0px rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ।
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              {t('heroSubtitle')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">{t('startLearning')}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white/10"
              >
                <Play className="h-5 w-5" />
                {t('exploreCourses')}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Users, count: '50K+', label: 'শিক্ষার্থী' },
                { icon: BookOpen, count: '1000+', label: 'কোর্স' },
                { icon: Award, count: '100+', label: 'প্রশিক্ষক' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <stat.icon className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <motion.div 
                    className="text-2xl font-bold text-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  >
                    {stat.count}
                  </motion.div>
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                
                {/* Course Preview */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">ওয়েব ডেভেলপমেন্ট</h3>
                      <p className="text-gray-300 text-sm">৪৮ ঘন্টার কোর্স</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>অগ্রগতি</span>
                      <span>৭৫%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 2, delay: 1.5 }}
                      />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {[
                      "ইন্টারঅ্যাক্টিভ লেসন",
                      "প্র্যাক্টিক্যাল প্রজেক্ট",
                      "লাইভ সাপোর্ট"
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2 + index * 0.2 }}
                        className="flex items-center text-gray-200"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Award className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  x: [-5, 5, -5]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Users className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </div>
  );
};

export default HeroSection;