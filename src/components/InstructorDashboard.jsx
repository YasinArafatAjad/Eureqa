import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import {
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  User,
  Eye,
  Star,
  MessageSquare,
  Award,
  Calendar,
  Video,
  FileText,
  Upload,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useThemeContext } from '../context/ThemeContext';

const InstructorDashboard = () => {
  const { currentUser, logout } = useAuth();
  const { darkMode, toggleTheme } = useThemeContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  // Sample data for charts
  const revenueData = [
    { month: 'জানু', revenue: 45000, students: 120 },
    { month: 'ফেব', revenue: 52000, students: 145 },
    { month: 'মার্চ', revenue: 48000, students: 135 },
    { month: 'এপ্রিল', revenue: 61000, students: 180 },
    { month: 'মে', revenue: 58000, students: 165 },
    { month: 'জুন', revenue: 72000, students: 210 }
  ];

  const coursePerformanceData = [
    { name: 'ওয়েব ডেভেলপমেন্ট', students: 450, rating: 4.8, revenue: 180000 },
    { name: 'রিয়্যাক্ট কোর্স', students: 320, rating: 4.9, revenue: 128000 },
    { name: 'জাভাস্ক্রিপ্ট বেসিক', students: 280, rating: 4.7, revenue: 84000 },
    { name: 'নোড জেএস', students: 150, rating: 4.6, revenue: 75000 }
  ];

  const enrollmentTrendData = [
    { week: 'সপ্তাহ ১', enrollments: 25 },
    { week: 'সপ্তাহ ২', enrollments: 32 },
    { week: 'সপ্তাহ ৩', enrollments: 28 },
    { week: 'সপ্তাহ ৪', enrollments: 45 },
    { week: 'সপ্তাহ ৫', enrollments: 38 },
    { week: 'সপ্তাহ ৬', enrollments: 52 }
  ];

  const stats = [
    { title: 'মোট শিক্ষার্থী', value: '2,543', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', change: '+12%' },
    { title: 'সক্রিয় কোর্স', value: '15', icon: BookOpen, color: 'text-green-600', bg: 'bg-green-50', change: '+2' },
    { title: 'মাসিক আয়', value: '৳৭২,০০০', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50', change: '+18%' },
    { title: 'গড় রেটিং', value: '4.8', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-50', change: '+0.2' }
  ];

  const recentActivities = [
    { action: 'নতুন শিক্ষার্থী ভর্তি', details: 'রিয়্যাক্ট কোর্সে ২৫ জন নতুন শিক্ষার্থী', time: '৫ মিনিট আগে', type: 'enrollment' },
    { action: 'কোর্স রিভিউ', details: 'জাভাস্ক্রিপ্ট কোর্সে ৫ স্টার রিভিউ', time: '১৫ মিনিট আগে', type: 'review' },
    { action: 'পেমেন্ট প্রাপ্ত', details: '৳১৫,০০০ আয় এই সপ্তাহে', time: '১ ঘন্টা আগে', type: 'payment' },
    { action: 'নতুন প্রশ্ন', details: 'ওয়েব ডেভেলপমেন্ট কোর্সে ৩টি নতুন প্রশ্ন', time: '২ ঘন্টা আগে', type: 'question' }
  ];

  const myCourses = [
    {
      id: 1,
      title: 'সম্পূর্ণ ওয়েব ডেভেলপমেন্ট কোর্স',
      students: 450,
      rating: 4.8,
      revenue: '৳১,৮০,০০০',
      status: 'published',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'রিয়্যাক্ট জেএস মাস্টার কোর্স',
      students: 320,
      rating: 4.9,
      revenue: '৳১,২৮,০০০',
      status: 'published',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'জাভাস্ক্রিপ্ট ফান্ডামেন্টাল',
      students: 280,
      rating: 4.7,
      revenue: '৳৮৪,০০০',
      status: 'published',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      title: 'নোড জেএস ব্যাকএন্ড ডেভেলপমেন্ট',
      students: 0,
      rating: 0,
      revenue: '৳০',
      status: 'draft',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const menuItems = [
    { id: 'overview', label: 'ড্যাশবোর্ড', icon: TrendingUp },
    { id: 'courses', label: 'আমার কোর্স', icon: BookOpen },
    { id: 'analytics', label: 'অ্যানালিটিক্স', icon: BarChart },
    { id: 'students', label: 'শিক্ষার্থী', icon: Users },
    { id: 'reviews', label: 'রিভিউ', icon: MessageSquare },
    { id: 'earnings', label: 'আয়', icon: DollarSign },
    { id: 'settings', label: 'সেটিংস', icon: Settings }
  ];

  const handleCreateCourse = () => {
    navigate('/create-course');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      <p className="text-sm text-green-600 font-medium">
                        {stat.change} গত মাসের তুলনায়
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : stat.bg}`}>
                      <stat.icon className={`h-6 w-6 ${darkMode ? 'text-gray-300' : stat.color}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
              >
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                  মাসিক আয়ের ট্রেন্ড
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                    <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                    <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                        border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                        borderRadius: '8px'
                      }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Enrollment Trend */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
              >
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                  সাপ্তাহিক ভর্তির ট্রেন্ড
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={enrollmentTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                    <XAxis dataKey="week" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                    <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                        border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                        borderRadius: '8px'
                      }}
                    />
                    <Line type="monotone" dataKey="enrollments" stroke="#10b981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                সাম্প্রতিক কার্যকলাপ
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'enrollment' ? 'bg-blue-500' :
                      activity.type === 'review' ? 'bg-yellow-500' :
                      activity.type === 'payment' ? 'bg-green-500' :
                      'bg-purple-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {activity.action}
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {activity.details}
                      </p>
                    </div>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case 'courses':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                আমার কোর্সসমূহ
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCreateCourse}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center"
              >
                <Plus className="h-5 w-5 mr-2" />
                নতুন কোর্স তৈরি করুন
              </motion.button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300`}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                        {course.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {course.status === 'published' ? 'প্রকাশিত' : 'খসড়া'}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>শিক্ষার্থী:</span>
                        <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{course.students}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>রেটিং:</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {course.rating || 'N/A'}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>আয়:</span>
                        <span className={`font-medium text-green-600`}>{course.revenue}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center">
                        <Edit className="h-4 w-4 mr-1" />
                        সম্পাদনা
                      </button>
                      <button className={`px-3 py-2 rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border transition-colors duration-200`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'analytics':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              বিস্তারিত অ্যানালিটিক্স
            </h2>
            
            {/* Course Performance Chart */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                কোর্স পারফরমেন্স
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={coursePerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="name" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                      border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm text-center`}>
                <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  সর্বোচ্চ রেটিং
                </h4>
                <p className="text-3xl font-bold text-yellow-500">4.9</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>রিয়্যাক্ত কোর্স</p>
              </div>
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm text-center`}>
                <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  সর্বোচ্চ আয়
                </h4>
                <p className="text-3xl font-bold text-green-500">৳১,৮০,০০০</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>ওয়েব ডেভেলপমেন্ট</p>
              </div>
              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm text-center`}>
                <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  সর্বোচ্চ ভর্তি
                </h4>
                <p className="text-3xl font-bold text-blue-500">450</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>ওয়েব ডেভেলপমেন্ট</p>
              </div>
            </div>
          </motion.div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              আসছে শীঘ্রই...
            </h2>
          </div>
        );
    }
  };

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
                    {currentUser?.displayName || 'প্রশিক্ষক'}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    প্রশিক্ষক
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-1 px-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                    activeTab === item.id
                      ? 'bg-primary-600 text-white'
                      : darkMode
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
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
                  প্রশিক্ষক ড্যাশবোর্ড
                </h1>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  আপনার কোর্স এবং শিক্ষার্থীদের ব্যবস্থাপনা করুন
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
                  6
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {renderContent()}
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

export default InstructorDashboard;