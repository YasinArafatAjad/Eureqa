import React from 'react';
import { motion } from 'framer-motion';
import { Code, Megaphone, Palette, Briefcase, Globe, Calculator, ArrowRight } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const CategoriesPage = () => {
  const { darkMode } = useThemeContext();

  const categories = [
    {
      icon: Code,
      title: 'ওয়েব ডেভেলপমেন্ট',
      description: 'HTML, CSS, JavaScript, React, Node.js এবং আরও অনেক কিছু শিখুন',
      courses: '120+ কোর্স',
      students: '15,000+ শিক্ষার্থী',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      darkBgColor: 'bg-blue-900/20'
    },
    {
      icon: Megaphone,
      title: 'ডিজিটাল মার্কেটিং',
      description: 'SEO, SEM, Social Media Marketing, Content Marketing শিখুন',
      courses: '85+ কোর্স',
      students: '12,000+ শিক্ষার্থী',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      darkBgColor: 'bg-green-900/20'
    },
    {
      icon: Palette,
      title: 'গ্রাফিক্স ডিজাইন',
      description: 'Photoshop, Illustrator, UI/UX Design, Logo Design শিখুন',
      courses: '95+ কোর্স',
      students: '10,000+ শিক্ষার্থী',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      darkBgColor: 'bg-purple-900/20'
    },
    {
      icon: Calculator,
      title: 'প্রোগ্রামিং',
      description: 'Python, Java, C++, Data Structures, Algorithms শিখুন',
      courses: '150+ কোর্স',
      students: '20,000+ শিক্ষার্থী',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      darkBgColor: 'bg-red-900/20'
    },
    {
      icon: Briefcase,
      title: 'ব্যবসা',
      description: 'Entrepreneurship, Management, Finance, Leadership শিখুন',
      courses: '70+ কোর্স',
      students: '8,000+ শিক্ষার্থী',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      darkBgColor: 'bg-yellow-900/20'
    },
    {
      icon: Globe,
      title: 'ভাষা',
      description: 'ইংরেজি, আরবি, হিন্দি, চাইনিজ ভাষা শিখুন',
      courses: '60+ কোর্স',
      students: '6,000+ শিক্ষার্থী',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      darkBgColor: 'bg-indigo-900/20'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <SEOHelmet
        title="কোর্স ক্যাটেগরিসমূহ"
        description="বিভিন্ন বিষয়ে কোর্স খুঁজুন। ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, গ্রাফিক্স ডিজাইন, প্রোগ্রামিং, ব্যবসা এবং ভাষা শিক্ষার কোর্স।"
        keywords="কোর্স ক্যাটেগরি, ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, গ্রাফিক্স ডিজাইন, প্রোগ্রামিং, ব্যবসা, ভাষা শিক্ষা"
        url="/categories"
        type="website"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            কোর্স ক্যাটেগরিসমূহ
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            আপনার আগ্রহের বিষয় অনুযায়ী কোর্স খুঁজে নিন
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${darkMode ? category.darkBgColor : category.bgColor} ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-2xl p-8 border cursor-pointer group transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-primary-600 transition-colors duration-300`}>
                {category.title}
              </h3>

              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                {category.description}
              </p>

              {/* Stats */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    কোর্স সংখ্যা:
                  </span>
                  <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {category.courses}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    শিক্ষার্থী:
                  </span>
                  <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {category.students}
                  </span>
                </div>
              </div>

              {/* Action */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300"
              >
                কোর্স দেখুন
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Popular Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} text-center mb-8`}>
            জনপ্রিয় স্কিলসমূহ
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'JavaScript', 'Python', 'Digital Marketing', 'UI/UX Design',
              'Node.js', 'WordPress', 'SEO', 'Photoshop', 'Data Science',
              'Machine Learning', 'Mobile App Development', 'Blockchain'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-white text-gray-700 border-gray-200'} border cursor-pointer hover:border-primary-500 hover:text-primary-600 transition-all duration-300`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesPage;