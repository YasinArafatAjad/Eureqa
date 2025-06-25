import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useThemeContext } from '../context/ThemeContext';

const FeaturedCourses = () => {
  const { t } = useLanguage();
  const { darkMode } = useThemeContext();

  const courses = [
    {
      id: 1,
      title: 'সম্পূর্ণ ওয়েব ডেভেলপমেন্ট কোর্স',
      instructor: 'জামিল হাসান',
      price: '৳৫,৯৯৯',
      originalPrice: '৳৮,৯৯৯',
      rating: 4.8,
      students: 1250,
      duration: '৪৮ ঘন্টা',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'প্রোগ্রামিং',
      level: 'বিগিনার',
      featured: true
    },
    {
      id: 2,
      title: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
      instructor: 'ফাতিমা খান',
      price: '৳৪,৯৯৯',
      originalPrice: '৳৭,৯৯৯',
      rating: 4.9,
      students: 890,
      duration: '৩৫ ঘন্টা',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'মার্কেটিং',
      level: 'ইন্টারমিডিয়েট'
    },
    {
      id: 3,
      title: 'গ্রাফিক ডিজাইন প্রো কোর্স',
      instructor: 'রাহুল আহমেদ',
      price: '৳৩,৯৯৯',
      originalPrice: '৳৬,৯৯৯',
      rating: 4.7,
      students: 650,
      duration: '৩০ ঘন্টা',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'ডিজাইন',
      level: 'বিগিনার'
    },
    {
      id: 4,
      title: 'ব্যবসায়িক দক্ষতা উন্নয়ন',
      instructor: 'নাদিয়া রহমান',
      price: '৳২,৯৯৯',
      originalPrice: '৳৪,৯৯৯',
      rating: 4.6,
      students: 420,
      duration: '২৫ ঘন্টা',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'ব্যবসা',
      level: 'অল লেভেল'
    },
    {
      id: 5,
      title: 'ইংরেজি ভাষা শিক্ষা',
      instructor: 'মিঃ রবার্ট জনসন',
      price: '৳৩,৫৯৯',
      originalPrice: '৳৫,৯৯৯',
      rating: 4.8,
      students: 1100,
      duration: '৪০ ঘন্টা',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'ভাষা',
      level: 'সব স্তর'
    },
    {
      id: 6,
      title: 'প্রোগ্রামিং ফান্ডামেন্টাল',
      instructor: 'তানভীর ইসলাম',
      price: '৳৪,৫৯৯',
      originalPrice: '৳৬,৯৯৯',
      rating: 4.9,
      students: 980,
      duration: '৫৫ ঘন্টা',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'প্রোগ্রামিং',
      level: 'বিগিনার'
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
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            {t('featuredCoursesTitle')}
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            আমাদের সবচেয়ে জনপ্রিয় এবং উচ্চ রেটিং প্রাপ্ত কোর্সসমূহ
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl overflow-hidden shadow-lg border group cursor-pointer transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {course.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ফিচার
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-semibold text-gray-800">
                  {course.level}
                </div>

                <div className="absolute bottom-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  {course.category}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2`}>
                  {course.title}
                </h3>

                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  প্রশিক্ষক: {course.instructor}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className={`ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className={`ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {course.students}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className={`ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">
                      {course.price}
                    </span>
                    <span className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'} line-through`}>
                      {course.originalPrice}
                    </span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-sm font-semibold">
                    ৩৩% ছাড়
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-300"
                  >
                    এখনই কিনুন
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-3 rounded-xl ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border-2 transition-colors duration-300`}
                  >
                    <BookOpen className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-white'} border-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300`}
          >
            সকল কোর্স দেখুন
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;