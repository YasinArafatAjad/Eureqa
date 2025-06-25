import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Clock, TrendingUp, User, Settings, Bell, LogOut, Menu, X, Globe, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useThemeContext } from '../context/ThemeContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const UserDashboard = () => {
  const { currentUser, logout } = useAuth();
  const { darkMode, toggleTheme } = useThemeContext();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserProfile();
  }, [currentUser]);

  const stats = [
    { title: 'চলমান কোর্স', value: '5', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'সম্পূর্ণ কোর্স', value: '12', icon: Award, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'মোট ঘণ্টা', value: '156', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'সার্টিফিকেট', value: '8', icon: Award, color: 'text-yellow-600', bg: 'bg-yellow-50' }
  ];

  const recentCourses = [
    {
      title: 'রিয়্যাক্ট জেএস মাস্টার কোর্স',
      progress: 75,
      instructor: 'জামিল হাসান',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'ডিজিটাল মার্কেটিং বেসিক্স',
      progress: 45,
      instructor: 'ফাতিমা খান',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'গ্রাফিক ডিজাইন ফান্ডামেন্টাল',
      progress: 90,
      instructor: 'রাহুল আহমেদ',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const menuItems = [
    { id: 'overview', label: 'ওভারভিউ', icon: TrendingUp },
    { id: 'courses', label: 'আমার কোর্স', icon: BookOpen },
    { id: 'progress', label: 'অগ্রগতি', icon: Clock },
    { id: 'certificates', label: 'সার্টিফিকেট', icon: Award },
    { id: 'settings', label: 'সেটিংস', icon: Settings }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

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
                    {userProfile?.name || currentUser?.displayName || 'ব্যবহারকারী'}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    শিক্ষার্থী
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
        <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 flex-shrink-0`}>
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
                  স্বাগতম, {userProfile?.name || currentUser?.displayName || 'ব্যবহারকারী'}!
                </h1>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  আপনার শিক্ষার অগ্রগতি দেখুন
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
                  3
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Courses */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                চলমান কোর্সসমূহ
              </h3>
              <div className="space-y-4">
                {recentCourses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                        {course.title}
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                        {course.instructor}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                        {course.progress}% সম্পূর্ণ
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                সাম্প্রতিক কার্যকলাপ
              </h3>
              <div className="space-y-4">
                {[
                  { action: 'নতুন কোর্স সম্পূর্ণ', course: 'রিয়্যাক্ট জেএস মাস্টার কোর্স', time: '২ ঘন্টা আগে' },
                  { action: 'সার্টিফিকেট অর্জন', course: 'জাভাস্ক্রিপ্ট বেসিক্স', time: '১ দিন আগে' },
                  { action: 'কোর্স শুরু', course: 'নোড জেএস ব্যাকএন্ড', time: '৩ দিন আগে' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {activity.action}
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {activity.course}
                      </p>
                    </div>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
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

export default UserDashboard;