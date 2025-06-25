import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Upload, 
  Download,
  Star,
  Users,
  DollarSign,
  Calendar,
  Video,
  FileText,
  Image as ImageIcon
} from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

const CourseManagement = () => {
  const { darkMode } = useThemeContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'সম্পূর্ণ ওয়েব ডেভেলপমেন্ট কোর্স',
      instructor: 'জামিল হাসান',
      students: 450,
      rating: 4.8,
      price: 5999,
      status: 'published',
      createdAt: '২০২৪-০১-১৫',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'প্রোগ্রামিং',
      duration: '৪৮ ঘন্টা',
      lessons: 120
    },
    {
      id: 2,
      title: 'ডিজিটাল মার্কেটিং মাস্টারক্লাস',
      instructor: 'ফাতিমা খান',
      students: 320,
      rating: 4.9,
      price: 4999,
      status: 'published',
      createdAt: '২০২৪-০১-১০',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'মার্কেটিং',
      duration: '৩৫ ঘন্টা',
      lessons: 85
    },
    {
      id: 3,
      title: 'গ্রাফিক ডিজাইন প্রো কোর্স',
      instructor: 'রাহুল আহমেদ',
      students: 280,
      rating: 4.7,
      price: 3999,
      status: 'draft',
      createdAt: '২০২৪-০১-০৮',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'ডিজাইন',
      duration: '৩০ ঘন্টা',
      lessons: 75
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const CourseCard = ({ course }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300`}
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            course.status === 'published' 
              ? 'bg-green-100 text-green-800' 
              : course.status === 'draft'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {course.status === 'published' ? 'প্রকাশিত' : 
             course.status === 'draft' ? 'খসড়া' : 'বন্ধ'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 line-clamp-2`}>
          {course.title}
        </h3>
        
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
          প্রশিক্ষক: {course.instructor}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-blue-500 mr-2" />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {course.students} শিক্ষার্থী
            </span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-2" />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {course.rating} রেটিং
            </span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-green-500 mr-2" />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              ৳{course.price.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center">
            <Video className="h-4 w-4 text-purple-500 mr-2" />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {course.lessons} লেসন
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center">
            <Edit className="h-4 w-4 mr-1" />
            সম্পাদনা
          </button>
          <button className={`px-3 py-2 rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border transition-colors duration-200`}>
            <Eye className="h-4 w-4" />
          </button>
          <button className={`px-3 py-2 rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border transition-colors duration-200`}>
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            কোর্স ব্যবস্থাপনা
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            আপনার সকল কোর্স পরিচালনা করুন
          </p>
        </div>
        
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border transition-colors duration-200 flex items-center`}
          >
            <Download className="h-4 w-4 mr-2" />
            এক্সপোর্ট
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateModal(true)}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            নতুন কোর্স
          </motion.button>
        </div>
      </div>

      {/* Filters */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border p-6`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="কোর্স বা প্রশিক্ষক খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            >
              <option value="all">সব স্ট্যাটাস</option>
              <option value="published">প্রকাশিত</option>
              <option value="draft">খসড়া</option>
              <option value="archived">আর্কাইভ</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              মোট: {filteredCourses.length} টি কোর্স
            </span>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <BookOpen className={`h-16 w-16 ${darkMode ? 'text-gray-600' : 'text-gray-400'} mx-auto mb-4`} />
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
            কোন কোর্স পাওয়া যায়নি
          </h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            আপনার প্রথম কোর্স তৈরি করুন অথবা ফিল্টার পরিবর্তন করুন
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateModal(true)}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
          >
            নতুন কোর্স তৈরি করুন
          </motion.button>
        </motion.div>
      )}

      {/* Create Course Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                নতুন কোর্স তৈরি করুন
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  কোর্সের নাম *
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  placeholder="কোর্সের নাম লিখুন"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    ক্যাটেগরি *
                  </label>
                  <select className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}>
                    <option>প্রোগ্রামিং</option>
                    <option>ডিজাইন</option>
                    <option>মার্কেটিং</option>
                    <option>ব্যবসা</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    মূল্য (৳) *
                  </label>
                  <input
                    type="number"
                    className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  কোর্সের বিবরণ *
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none`}
                  placeholder="কোর্সের বিস্তারিত বিবরণ লিখুন"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  কোর্সের ছবি
                </label>
                <div className={`border-2 border-dashed ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg p-6 text-center`}>
                  <ImageIcon className={`h-12 w-12 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mx-auto mb-4`} />
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                    ছবি আপলোড করতে ক্লিক করুন
                  </p>
                  <input type="file" className="hidden" accept="image/*" />
                  <button
                    type="button"
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    ছবি নির্বাচন করুন
                  </button>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className={`px-6 py-3 rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border transition-colors duration-200`}
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                >
                  কোর্স তৈরি করুন
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CourseManagement;