import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, MessageSquare, Flag, Settings, Bell, LogOut, Menu, X, User, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useThemeContext } from '../context/ThemeContext';

const ModeratorDashboard = () => {
  const { currentUser, logout } = useAuth();
  const { darkMode, toggleTheme } = useThemeContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { title: 'মোট ব্যবহারকারী', value: '2,543', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'অনুমোদিত কোর্স', value: '156', icon: BookOpen, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'নতুন রিপোর্ট', value: '12', icon: Flag, color: 'text-red-600', bg: 'bg-red-50' },
    { title: 'পেন্ডিং রিভিউ', value: '8', icon: MessageSquare, color: 'text-yellow-600', bg: 'bg-yellow-50' }
  ];

  const pendingReviews = [
    {
      type: 'কোর্স',
      title: 'Advanced React Development',
      instructor: 'জন ডো',
      status: 'পেন্ডিং',
      date: '২০২৪-০১-১৫'
    },
    {
      type: 'রিপোর্ট',
      title: 'অনুপযুক্ত কন্টেন্ট',
      reporter: 'জেন স্মিথ',
      status: 'নতুন',
      date: '২০২৪-০১-১৪'
    },
    {
      type: 'ব্যবহারকারী',
      title: 'প্রশিক্ষক আবেদন',
      applicant: 'আহমেদ আলী',
      status: 'পেন্ডিং',
      date: '২০২৪-০১-১৩'
    }
  ];

  const menuItems = [
    { id: 'overview', label: 'ড্যাশবোর্ড', icon: Users },
    { id: 'users', label: 'ব্যবহারকারী', icon: Users },
    { id: 'courses', label: 'কোর্স রিভিউ', icon: BookOpen },
    { id: 'reports', label: 'রিপোর্ট', icon: Flag },
    { id: 'reviews', label: 'পেন্ডিং রিভিউ', icon: MessageSquare },
    { id: 'settings', label: 'সেটিংস', icon: Settings }
  ];

  return (
    <div className={`h-screen flex ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className={`ml-2 text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Eureqa
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          > 
            <X className={`h-6 w-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-6 mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="ml-3">
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {currentUser?.displayName || 'মডারেটর'}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    মডারেটর
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-1 px-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* View Site Button */}
            <div className="mt-8 px-6">
              <Link
                to="/"
                className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-primary-600 text-white hover:bg-primary-700'}`}
              >
                <Eye className="h-5 w-5 mr-3" />
                সাইট দেখুন
              </Link>
            </div>
          </nav>

          {/* Logout Button */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
            <button 
              onClick={logout}
              className={`w-full flex items-center px-3 py-2 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} transition-colors duration-200`}
            >
              <LogOut className="h-5 w-5 mr-3" />
              লগআউট
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden mr-4"
              >
                <Menu className={`h-6 w-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  মডারেটর ড্যাশবোর্ড
                </h1>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  কন্টেন্ট এবং ব্যবহারকারী ব্যবস্থাপনা
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors duration-200`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              
              <button className={`p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors duration-200 relative`}>
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  5
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                      {stat.title}
                    </p>
                    <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${darkMode ? 'text-gray-300' : stat.color}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pending Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm mb-8`}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              পেন্ডিং রিভিউ
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      ধরন
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      শিরোনাম
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      জমাদানকারী
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      স্ট্যাটাস
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      তারিখ
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      অ্যাকশন
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pendingReviews.map((item, index) => (
                    <tr key={index} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.type}
                      </td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium`}>
                        {item.title}
                      </td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.instructor || item.reporter || item.applicant}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'পেন্ডিং' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.date}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                            অনুমোদন
                          </button>
                          <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                            প্রত্যাখ্যান
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm text-center`}
            >
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                ব্যবহারকারী ব্যবস্থাপনা
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                ব্যবহারকারীদের প্রোফাইল এবং অনুমতি পরিচালনা করুন
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                ব্যবস্থাপনা করুন
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm text-center`}
            >
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                কোর্স রিভিউ
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                নতুন কোর্স এবং কন্টেন্ট রিভিউ করুন
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                রিভিউ করুন
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm text-center`}
            >
              <Flag className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                রিপোর্ট পরিচালনা
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                ব্যবহারকারীদের রিপোর্ট এবং অভিযোগ দেখুন
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                রিপোর্ট দেখুন
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ModeratorDashboard;