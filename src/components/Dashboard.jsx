import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  User,
  BookOpen,
  Users,
  TrendingUp,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  Award,
  Clock,
  DollarSign,
  Eye,
  Star,
  Download
} from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userRole, setUserRole] = useState('user'); // user, admin, moderator
  const { darkMode, toggleTheme } = useThemeContext();

  // Sample data for charts
  const salesData = [
    { month: 'জানু', sales: 12000, courses: 45 },
    { month: 'ফেব', sales: 19000, courses: 52 },
    { month: 'মার্চ', sales: 15000, courses: 48 },
    { month: 'এপ্রিল', sales: 25000, courses: 61 },
    { month: 'মে', sales: 22000, courses: 58 },
    { month: 'জুন', sales: 30000, courses: 70 }
  ];

  const pieData = [
    { name: 'ওয়েব ডেভেলপমেন্ট', value: 35, color: '#dc2626' },
    { name: 'ডিজিটাল মার্কেটিং', value: 25, color: '#ef4444' },
    { name: 'গ্রাফিক ডিজাইন', value: 20, color: '#f87171' },
    { name: 'প্রোগ্রামিং', value: 20, color: '#fca5a5' }
  ];

  const getUserMenu = () => {
    const baseMenu = [
      { id: 'overview', label: 'ওভারভিউ', icon: BarChart },
      { id: 'courses', label: 'আমার কোর্স', icon: BookOpen },
      { id: 'progress', label: 'অগ্রগতি', icon: TrendingUp },
      { id: 'certificates', label: 'সার্টিফিকেট', icon: Award },
      { id: 'settings', label: 'সেটিংস', icon: Settings }
    ];

    if (userRole === 'admin' || userRole === 'moderator') {
      return [
        { id: 'overview', label: 'ড্যাশবোর্ড', icon: BarChart },
        { id: 'analytics', label: 'অ্যানালিটিক্স', icon: TrendingUp },
        { id: 'users', label: 'ব্যবহারকারী', icon: Users },
        { id: 'courses', label: 'কোর্স ব্যবস্থাপনা', icon: BookOpen },
        { id: 'revenue', label: 'রেভিনিউ', icon: DollarSign },
        { id: 'settings', label: 'সেটিংস', icon: Settings }
      ];
    }

    return baseMenu;
  };

  const menuItems = getUserMenu();

  const stats = userRole === 'user' ? [
    { title: 'চলমান কোর্স', value: '5', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'সম্পূর্ণ কোর্স', value: '12', icon: Award, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'মোট ঘণ্টা', value: '156', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'সার্টিফিকেট', value: '8', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-50' }
  ] : [
    { title: 'মোট শিক্ষার্থী', value: '12,543', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'সক্রিয় কোর্স', value: '156', icon: BookOpen, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'মাসিক আয়', value: '৳2,45,000', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'নতুন নিবন্ধন', value: '324', icon: TrendingUp, color: 'text-red-600', bg: 'bg-red-50' }
  ];

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
                    </div>
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : stat.bg}`}>
                      <stat.icon className={`h-6 w-6 ${darkMode ? 'text-gray-300' : stat.color}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts */}
            {(userRole === 'admin' || userRole === 'moderator') && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
                >
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                    মাসিক বিক্রয়
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
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
                      <Bar dataKey="sales" fill="#dc2626" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>

                {/* Pie Chart */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
                >
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                    কোর্স বিতরণ
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
            )}

            {/* Recent Activity */}
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
        );

      case 'courses':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {userRole === 'user' ? 'আমার কোর্সসমূহ' : 'কোর্স ব্যবস্থাপনা'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((course) => (
                <div key={course} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}>
                  <div className="h-32 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg mb-4"></div>
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    কোর্স {course}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    কোর্সের বিবরণ এখানে থাকবে...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-semibold">৭৫% সম্পূর্ণ</span>
                    <button className="text-primary-600 hover:text-primary-700">
                      চালিয়ে যান →
                    </button>
                  </div>
                </div>
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
              অ্যানালিটিক্স
            </h2>
            
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                ট্রেন্ড অ্যানালিসিস
              </h3>
              <ResponsiveContainer width="100%" height={400}>
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
                  <Line type="monotone" dataKey="sales" stroke="#dc2626" strokeWidth={3} />
                  <Line type="monotone" dataKey="courses" stroke="#059669" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
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
    <div className={`h-screen flex ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
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
                    জন ডো
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {userRole === 'admin' ? 'অ্যাডমিন' : userRole === 'moderator' ? 'মডারেটর' : 'শিক্ষার্থী'}
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

            {/* Role Switcher for Demo */}
            <div className="mt-8 px-6">
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                ভূমিকা পরিবর্তন (ডেমো)
              </label>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              >
                <option value="user">শিক্ষার্থী</option>
                <option value="moderator">মডারেটর</option>
                <option value="admin">অ্যাডমিন</option>
              </select>
            </div>
          </nav>

          {/* Logout Button */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
            <button className={`w-full flex items-center px-3 py-2 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} transition-colors duration-200`}>
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
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' :  'text-gray-900'}`}>
                ড্যাশবোর্ড
              </h1>
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
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
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

export default Dashboard;