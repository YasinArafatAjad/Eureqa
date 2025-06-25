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
  Cell
} from 'recharts';
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  Settings,
  Bell,
  LogOut,
  Shield,
  Database,
  Activity,
  Menu,
  X,
  User,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useThemeContext } from '../context/ThemeContext';

const AdminDashboard = () => {
  const { currentUser, logout } = useAuth();
  const { darkMode, toggleTheme } = useThemeContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sample data for charts
  const salesData = [
    { month: 'জানু', sales: 120000, courses: 45, users: 1200 },
    { month: 'ফেব', sales: 190000, courses: 52, users: 1450 },
    { month: 'মার্চ', sales: 150000, courses: 48, users: 1300 },
    { month: 'এপ্রিল', sales: 250000, courses: 61, users: 1800 },
    { month: 'মে', sales: 220000, courses: 58, users: 1650 },
    { month: 'জুন', sales: 300000, courses: 70, users: 2100 }
  ];

  const pieData = [
    { name: 'ওয়েব ডেভেলপমেন্ট', value: 35, color: '#3b82f6' },
    { name: 'ডিজিটাল মার্কেটিং', value: 25, color: '#10b981' },
    { name: 'গ্রাফিক ডিজাইন', value: 20, color: '#8b5cf6' },
    { name: 'প্রোগ্রামিং', value: 20, color: '#f59e0b' }
  ];

  const stats = [
    { title: 'মোট শিক্ষার্থী', value: '25,543', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', change: '+12%' },
    { title: 'সক্রিয় কোর্স', value: '1,256', icon: BookOpen, color: 'text-green-600', bg: 'bg-green-50', change: '+8%' },
    { title: 'মাসিক আয়', value: '৳3,45,000', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50', change: '+15%' },
    { title: 'নতুন নিবন্ধন', value: '1,324', icon: TrendingUp, color: 'text-red-600', bg: 'bg-red-50', change: '+22%' }
  ];

  const recentActivities = [
    { action: 'নতুন কোর্স যোগ', details: 'Advanced React Development', time: '৫ মিনিট আগে', type: 'course' },
    { action: 'ব্যবহারকারী নিবন্ধন', details: 'জন ডো', time: '১০ মিনিট আগে', type: 'user' },
    { action: 'পেমেন্ট সম্পন্ন', details: '৳৫,৯৯৯', time: '১৫ মিনিট আগে', type: 'payment' },
    { action: 'কোর্স সম্পূর্ণ', details: 'JavaScript Fundamentals', time: '২০ মিনিট আগে', type: 'completion' },
    { action: 'নতুন প্রশিক্ষক', details: 'সারা আহমেদ', time: '৩০ মিনিট আগে', type: 'instructor' }
  ];

  const menuItems = [
    { id: 'overview', label: 'ড্যাশবোর্ড', icon: TrendingUp },
    { id: 'analytics', label: 'অ্যানালিটিক্স', icon: BarChart },
    { id: 'users', label: 'ব্যবহারকারী', icon: Users },
    { id: 'courses', label: 'কোর্স ব্যবস্থাপনা', icon: BookOpen },
    { id: 'revenue', label: 'রেভিনিউ', icon: DollarSign },
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
                    {currentUser?.displayName || 'অ্যাডমিন'}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    অ্যাডমিন
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
                  অ্যাডমিন ড্যাশবোর্ড
                </h1>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  সিস্টেম ওভারভিউ এবং ব্যবস্থাপনা
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
                  8
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                মাসিক রেভিনিউ ট্রেন্ড
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
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
                  <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Course Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                কোর্স ক্যাটেগরি বিতরণ
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                সাম্প্রতিক কার্যকলাপ
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'course' ? 'bg-blue-500' :
                      activity.type === 'user' ? 'bg-green-500' :
                      activity.type === 'payment' ? 'bg-purple-500' :
                      activity.type === 'completion' ? 'bg-yellow-500' :
                      'bg-red-500'
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

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                সিস্টেম স্ট্যাটাস
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'সার্ভার স্ট্যাটাস', status: 'অনলাইন', icon: Activity, color: 'text-green-500' },
                  { name: 'ডাটাবেস', status: 'স্বাভাবিক', icon: Database, color: 'text-green-500' },
                  { name: 'নিরাপত্তা', status: 'সুরক্ষিত', icon: Shield, color: 'text-green-500' },
                  { name: 'ব্যাকআপ', status: 'সম্পন্ন', icon: Settings, color: 'text-blue-500' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.name}
                      </span>
                    </div>
                    <span className={`text-sm font-medium ${item.color}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
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

export default AdminDashboard;