import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Users, 
  Star, 
  DollarSign,
  Play,
  Pause,
  BarChart3,
  MessageSquare,
  Upload,
  Download
} from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const InstructorCoursesPage = () => {
  const { darkMode } = useThemeContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const courses = [
    {
      id: 1,
      title: 'সম্পূর্ণ ওয়েব ডেভেলপমেন্ট কোর্স',
      description: 'HTML, CSS, JavaScript, React এবং Node.js দিয়ে সম্পূর্ণ ওয়েব ডেভেলপমেন্ট শিখুন',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'published',
      students: 450,
      rating: 4.8,
      reviews: 89,
      revenue: '৳১,৮০,০০০',
      price: '৳৫,৯৯৯',
      lessons: 48,
      duration: '52 ঘন্টা',
      lastUpdated: '২০২৪-০১-১৫',
      category: 'প্রোগ্রামিং'
    },
    {
      id: 2,
      title: 'রিয়্যাক্ট জেএস মাস্টার কোর্স',
      description: 'আধুনিক React.js এবং Redux দিয়ে ইন্টারঅ্যাক্টিভ ওয়েব অ্যাপ্লিকেশন তৈরি করুন',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'published',
      students: 320,
      rating: 4.9,
      reviews: 67,
      revenue: '৳১,২৮,০০০',
      price: '৳৪,৯৯৯',
      lessons: 36,
      duration: '40 ঘন্টা',
      lastUpdated: '২০২৪-০১-১০',
      category: 'প্রোগ্রামিং'
    },
    {
      id: 3,
      title: 'নোড জেএস ব্যাকএন্ড ডেভেলপমেন্ট',
      description: 'Node.js, Express.js এবং MongoDB দিয়ে শক্তিশালী ব্যাকএন্ড API তৈরি করুন',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'published',
      students: 280,
      rating: 4.7,
      reviews: 54,
      revenue: '৳১,১২,০০০',
      price: '৳৪,৫৯৯',
      lessons: 32,
      duration: '35 ঘন্টা',
      lastUpdated: '২০২৪-০১-০৮',
      category: 'প্রোগ্রামিং'
    },
    {
      id: 4,
      title: 'অ্যাডভান্সড জাভাস্ক্রিপ্ট',
      description: 'ES6+, Async/Await, Promises এবং আধুনিক JavaScript ফিচার শিখুন',
      image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'draft',
      students: 0,
      rating: 0,
      reviews: 0,
      revenue: '৳০',
      price: '৳৩,৯৯৯',
      lessons: 24,
      duration: '28 ঘন্টা',
      lastUpdated: '২০২৪-০১-২০',
      category: 'প্রোগ্রামিং'
    },
    {
      id: 5,
      title: 'ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট',
      description: 'MERN স্ট্যাক দিয়ে সম্পূর্ণ ওয়েব অ্যাপ্লিকেশন তৈরি করুন',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'review',
      students: 0,
      rating: 0,
      reviews: 0,
      revenue: '৳০',
      price: '৳৭,৯৯৯',
      lessons: 60,
      duration: '65 ঘন্টা',
      lastUpdated: '২০২৪-০১-২২',
      category: 'প্রোগ্রামিং'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      published: { label: 'প্রকাশিত', color: 'bg-green-100 text-green-800' },
      draft: { label: 'খসড়া', color: 'bg-yellow-100 text-yellow-800' },
      review: { label: 'পর্যালোচনায়', color: 'bg-blue-100 text-blue-800' },
      rejected: { label: 'প্রত্যাখ্যাত', color: 'bg-red-100 text-red-800' }
    };
    
    const config = statusConfig[status] || statusConfig.draft;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <SEOHelmet
        title="আমার কোর্সসমূহ - প্রশিক্ষক ড্যাশবোর্ড"
        description="আপনার সকল কোর্স পরিচালনা করুন। নতুন কোর্স তৈরি করুন, বিদ্যমান কোর্স সম্পাদনা করুন এবং আপনার শিক্ষার্থীদের অগ্রগতি ট্র্যাক করুন।"
        keywords="প্রশিক্ষক কোর্স, কোর্স ব্যবস্থাপনা, অনলাইন শিক্ষা, কোর্স তৈরি"
        url="/instructor/courses"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                আমার কোর্সসমূহ
              </h1>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                আপনার সকল কোর্স পরিচালনা করুন
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              নতুন কোর্স তৈরি করুন
            </motion.button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border p-6 mb-8`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

            <div className="relative">
              <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              >
                <option value="all">সব স্ট্যাটাস</option>
                <option value="published">প্রকাশিত</option>
                <option value="draft">খসড়া</option>
                <option value="review">পর্যালোচনায়</option>
                <option value="rejected">প্রত্যাখ্যাত</option>
              </select>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            >
              <option value="recent">সাম্প্রতিক</option>
              <option value="popular">জনপ্রিয়তা</option>
              <option value="revenue">আয়</option>
              <option value="rating">রেটিং</option>
            </select>

            <div className="flex space-x-2">
              <button className={`flex-1 px-4 py-2 border rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors duration-200 flex items-center justify-center`}>
                <Upload className="h-4 w-4 mr-2" />
                আপলোড
              </button>
              <button className={`flex-1 px-4 py-2 border rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors duration-200 flex items-center justify-center`}>
                <Download className="h-4 w-4 mr-2" />
                এক্সপোর্ট
              </button>
            </div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 left-4">
                  {getStatusBadge(course.status)}
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-sm">
                  {course.lessons} লেসন
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} line-clamp-2 flex-1`}>
                    {course.title}
                  </h3>
                </div>

                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 line-clamp-2`}>
                  {course.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-blue-500 mr-2" />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {course.students} শিক্ষার্থী
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {course.rating || 'N/A'} ({course.reviews})
                    </span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-green-500 mr-2" />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {course.revenue}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Play className="h-4 w-4 text-purple-500 mr-2" />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {course.price}
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    আপডেট: {course.lastUpdated}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    সম্পাদনা
                  </motion.button>
                  
                  <button className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}>
                    <Eye className="h-4 w-4" />
                  </button>
                  
                  <button className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}>
                    <BarChart3 className="h-4 w-4" />
                  </button>
                  
                  <button className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors duration-300`}>
                    <MessageSquare className="h-4 w-4" />
                  </button>
                  
                  <button className="px-3 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors duration-300">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              কোন কোর্স পাওয়া যায়নি
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
              আপনার প্রথম কোর্স তৈরি করুন এবং শিক্ষার্থীদের সাথে আপনার জ্ঞান শেয়ার করুন
            </p>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300">
              নতুন কোর্স তৈরি করুন
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InstructorCoursesPage;