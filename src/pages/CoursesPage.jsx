import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Users, Star, BookOpen } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const CoursesPage = () => {
  const { darkMode } = useThemeContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

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
      category: 'programming',
      level: 'বিগিনার'
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
      category: 'marketing',
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
      category: 'design',
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
      category: 'business',
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
      category: 'language',
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
      category: 'programming',
      level: 'বিগিনার'
    }
  ];

  const categories = [
    { value: 'all', label: 'সব ক্যাটেগরি' },
    { value: 'programming', label: 'প্রোগ্রামিং' },
    { value: 'marketing', label: 'মার্কেটিং' },
    { value: 'design', label: 'ডিজাইন' },
    { value: 'business', label: 'ব্যবসা' },
    { value: 'language', label: 'ভাষা' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <SEOHelmet
        title="সকল কোর্সসমূহ"
        description="১৫০০+ অনলাইন কোর্স। ওয়েব ডেভেলপমেন্ট, ডিজিটাল মার্কেটিং, গ্রাফিক্স ডিজাইন, প্রোগ্রামিং এবং আরও অনেক বিষয়ে শিখুন।"
        keywords="অনলাইন কোর্স, ওয়েব ডেভেলপমেন্ট কোর্স, ডিজিটাল মার্কেটিং কোর্স, গ্রাফিক্স ডিজাইন কোর্স, প্রোগ্রামিং কোর্স"
        url="/courses"
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
            সকল কোর্সসমূহ
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            আপনার পছন্দের কোর্স খুঁজে নিন
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border p-6 mb-8`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="কোর্স খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            >
              <option value="popular">জনপ্রিয়তা</option>
              <option value="rating">রেটিং</option>
              <option value="price-low">দাম (কম থেকে বেশি)</option>
              <option value="price-high">দাম (বেশি থেকে কম)</option>
            </select>
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl overflow-hidden shadow-lg border group cursor-pointer transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-semibold text-gray-800">
                  {course.level}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-primary-600 transition-colors duration-300`}>
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
                    className={`px-4 py-3 rounded-xl ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border-2 transition-colors duration-300`}
                  >
                    <BookOpen className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              কোন কোর্স পাওয়া যায়নি
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              অন্য কিছু খুঁজে দেখুন
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;