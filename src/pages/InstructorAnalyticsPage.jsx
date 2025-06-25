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
  Area,
  RadialBarChart,
  RadialBar
} from 'recharts';
import {
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
  Star,
  Clock,
  Globe,
  Download,
  Calendar,
  Filter
} from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const InstructorAnalyticsPage = () => {
  const { darkMode } = useThemeContext();
  const [timeRange, setTimeRange] = useState('6months');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  // Sample data
  const revenueData = [
    { month: 'জুলাই', revenue: 45000, students: 120, courses: 3, views: 2400 },
    { month: 'আগস্ট', revenue: 52000, students: 145, courses: 4, views: 2800 },
    { month: 'সেপ্টেম্বর', revenue: 48000, students: 135, courses: 4, views: 2600 },
    { month: 'অক্টোবর', revenue: 65000, students: 180, courses: 5, views: 3200 },
    { month: 'নভেম্বর', revenue: 58000, students: 165, courses: 5, views: 3000 },
    { month: 'ডিসেম্বর', revenue: 72000, students: 210, courses: 6, views: 3800 }
  ];

  const coursePerformanceData = [
    { name: 'ওয়েব ডেভেলপমেন্ট', students: 450, completion: 85, rating: 4.8, revenue: 180000 },
    { name: 'রিয়্যাক্ট জেএস', students: 320, completion: 78, rating: 4.9, revenue: 128000 },
    { name: 'নোড জেএস', students: 280, completion: 82, rating: 4.7, revenue: 112000 },
    { name: 'জাভাস্ক্রিপ্ট', students: 380, completion: 75, rating: 4.6, revenue: 152000 }
  ];

  const studentDemographics = [
    { name: '১৮-২৫', value: 35, color: '#3b82f6' },
    { name: '২৬-৩৫', value: 40, color: '#10b981' },
    { name: '৩৬-৪৫', value: 20, color: '#f59e0b' },
    { name: '৪৫+', value: 5, color: '#ef4444' }
  ];

  const geographicData = [
    { country: 'বাংলাদেশ', students: 650, percentage: 65 },
    { country: 'ভারত', students: 200, percentage: 20 },
    { country: 'পাকিস্তান', students: 80, percentage: 8 },
    { country: 'যুক্তরাষ্ট্র', students: 40, percentage: 4 },
    { country: 'অন্যান্য', students: 30, percentage: 3 }
  ];

  const engagementData = [
    { day: 'রবি', views: 1200, engagement: 75 },
    { day: 'সোম', views: 1800, engagement: 82 },
    { day: 'মঙ্গল', views: 1600, engagement: 78 },
    { day: 'বুধ', views: 2000, engagement: 85 },
    { day: 'বৃহ', views: 1900, engagement: 80 },
    { day: 'শুক্র', views: 1400, engagement: 72 },
    { day: 'শনি', views: 1100, engagement: 68 }
  ];

  const completionRateData = [
    { name: 'সম্পূর্ণ', value: 68, color: '#22c55e' },
    { name: 'চলমান', value: 22, color: '#3b82f6' },
    { name: 'বন্ধ', value: 10, color: '#ef4444' }
  ];

  const stats = [
    { 
      title: 'মোট আয়', 
      value: '৳৩,৪০,০০০', 
      icon: DollarSign, 
      color: 'text-green-600', 
      bg: 'bg-green-50',
      change: '+24%',
      trend: 'up'
    },
    { 
      title: 'মোট শিক্ষার্থী', 
      value: '1,430', 
      icon: Users, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50',
      change: '+18%',
      trend: 'up'
    },
    { 
      title: 'কোর্স সমাপনী হার', 
      value: '68%', 
      icon: BookOpen, 
      color: 'text-purple-600', 
      bg: 'bg-purple-50',
      change: '+5%',
      trend: 'up'
    },
    { 
      title: 'গড় রেটিং', 
      value: '4.8', 
      icon: Star, 
      color: 'text-yellow-600', 
      bg: 'bg-yellow-50',
      change: '+0.2',
      trend: 'up'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <SEOHelmet
        title="অ্যানালিটিক্স - প্রশিক্ষক ড্যাশবোর্ড"
        description="আপনার কোর্সের বিস্তারিত অ্যানালিটিক্স দেখুন। শিক্ষার্থীদের অগ্রগতি, আয়ের পরিসংখ্যান এবং কোর্সের পারফরম্যান্স ট্র্যাক করুন।"
        keywords="প্রশিক্ষক অ্যানালিটিক্স, কোর্স পারফরম্যান্স, শিক্ষার্থী পরিসংখ্যান, আয়ের রিপোর্ট"
        url="/instructor/analytics"
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
                অ্যানালিটিক্স
              </h1>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                আপনার কোর্সের বিস্তারিত পারফরম্যান্স দেখুন
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className={`px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              >
                <option value="1month">গত ১ মাস</option>
                <option value="3months">গত ৩ মাস</option>
                <option value="6months">গত ৬ মাস</option>
                <option value="1year">গত ১ বছর</option>
              </select>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                রিপোর্ট ডাউনলোড
              </button>
            </div>
          </div>
        </motion.div>

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
                  <p className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
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

        {/* Revenue & Students Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm mb-8`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              আয় এবং শিক্ষার্থী ট্রেন্ড
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedMetric('revenue')}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedMetric === 'revenue'
                    ? 'bg-primary-600 text-white'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                আয়
              </button>
              <button
                onClick={() => setSelectedMetric('students')}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedMetric === 'students'
                    ? 'bg-primary-600 text-white'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                শিক্ষার্থী
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
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
              <Area 
                type="monotone" 
                dataKey={selectedMetric} 
                stroke="#22c55e" 
                fill="#22c55e" 
                fillOpacity={0.3} 
                strokeWidth={3} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Course Performance */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              কোর্স পারফরম্যান্স
            </h3>
            <ResponsiveContainer width="100%" height={300}>
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
          </motion.div>

          {/* Student Demographics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              শিক্ষার্থীদের বয়স বিতরণ
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={studentDemographics}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {studentDemographics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              সাপ্তাহিক এনগেজমেন্ট
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="day" stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                    border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="views" stroke="#8b5cf6" strokeWidth={3} />
                <Line type="monotone" dataKey="engagement" stroke="#f59e0b" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Completion Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              কোর্স সমাপনী হার
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={completionRateData}>
                <RadialBar dataKey="value" cornerRadius={10} fill="#22c55e" />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {completionRateData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: item.color }}></div>
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.name}
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
        >
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            ভৌগোলিক বিতরণ
          </h3>
          <div className="space-y-4">
            {geographicData.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-primary-600 mr-3" />
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {country.country}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} w-16 text-right`}>
                    {country.students}
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} w-12 text-right`}>
                    {country.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InstructorAnalyticsPage;