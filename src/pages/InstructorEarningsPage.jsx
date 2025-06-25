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
  DollarSign,
  TrendingUp,
  Calendar,
  Download,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Search
} from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const InstructorEarningsPage = () => {
  const { darkMode } = useThemeContext();
  const [timeRange, setTimeRange] = useState('6months');
  const [paymentFilter, setPaymentFilter] = useState('all');

  // Sample data
  const earningsData = [
    { month: 'জুলাই', gross: 50000, net: 45000, commission: 5000 },
    { month: 'আগস্ট', gross: 58000, net: 52200, commission: 5800 },
    { month: 'সেপ্টেম্বর', gross: 53000, net: 47700, commission: 5300 },
    { month: 'অক্টোবর', gross: 72000, net: 64800, commission: 7200 },
    { month: 'নভেম্বর', gross: 65000, net: 58500, commission: 6500 },
    { month: 'ডিসেম্বর', gross: 80000, net: 72000, commission: 8000 }
  ];

  const courseEarningsData = [
    { name: 'ওয়েব ডেভেলপমেন্ট', earnings: 180000, students: 450, avgPrice: 5999 },
    { name: 'রিয়্যাক্ট জেএস', earnings: 128000, students: 320, avgPrice: 4999 },
    { name: 'নোড জেএস', earnings: 112000, students: 280, avgPrice: 4599 },
    { name: 'জাভাস্ক্রিপ্ট', earnings: 152000, students: 380, avgPrice: 3999 }
  ];

  const paymentMethodsData = [
    { name: 'বিকাশ', value: 45, color: '#e91e63' },
    { name: 'নগদ', value: 30, color: '#ff9800' },
    { name: 'ব্যাংক ট্রান্সফার', value: 20, color: '#2196f3' },
    { name: 'অন্যান্য', value: 5, color: '#9c27b0' }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'earning',
      description: 'ওয়েব ডেভেলপমেন্ট কোর্স বিক্রয়',
      amount: 5999,
      date: '২০২৪-০১-২৮',
      status: 'completed',
      method: 'বিকাশ'
    },
    {
      id: 2,
      type: 'earning',
      description: 'রিয়্যাক্ট জেএস কোর্স বিক্রয়',
      amount: 4999,
      date: '২০২৪-০১-২৭',
      status: 'completed',
      method: 'নগদ'
    },
    {
      id: 3,
      type: 'withdrawal',
      description: 'ব্যাংক অ্যাকাউন্টে উত্তোলন',
      amount: -25000,
      date: '২০২৪-০১-২৫',
      status: 'pending',
      method: 'ব্যাংক ট্রান্সফার'
    },
    {
      id: 4,
      type: 'earning',
      description: 'নোড জেএস কোর্স বিক্রয়',
      amount: 4599,
      date: '২০২৪-০১-২৪',
      status: 'completed',
      method: 'বিকাশ'
    },
    {
      id: 5,
      type: 'commission',
      description: 'প্ল্যাটফর্ম কমিশন',
      amount: -600,
      date: '২০২৪-০১-২৪',
      status: 'completed',
      method: 'অটো ডেডাক্ট'
    }
  ];

  const stats = [
    {
      title: 'মোট আয়',
      value: '৳৩,৭৮,০০০',
      icon: DollarSign,
      color: 'text-green-600',
      bg: 'bg-green-50',
      change: '+24%',
      trend: 'up'
    },
    {
      title: 'এই মাসের আয়',
      value: '৳৮০,০০০',
      icon: TrendingUp,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      change: '+23%',
      trend: 'up'
    },
    {
      title: 'উপলব্ধ ব্যালেন্স',
      value: '৳৪৫,০০০',
      icon: Wallet,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      change: '+৳১২,০০০',
      trend: 'up'
    },
    {
      title: 'পেন্ডিং পেমেন্ট',
      value: '৳১৮,০০০',
      icon: CreditCard,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      change: '+৳৫,০০০',
      trend: 'up'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { label: 'সম্পন্ন', color: 'bg-green-100 text-green-800' },
      pending: { label: 'অপেক্ষমাণ', color: 'bg-yellow-100 text-yellow-800' },
      failed: { label: 'ব্যর্থ', color: 'bg-red-100 text-red-800' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'earning':
        return <ArrowUpRight className="h-4 w-4 text-green-600" />;
      case 'withdrawal':
        return <ArrowDownRight className="h-4 w-4 text-blue-600" />;
      case 'commission':
        return <ArrowDownRight className="h-4 w-4 text-red-600" />;
      default:
        return <DollarSign className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <SEOHelmet
        title="আয়ের রিপোর্ট - প্রশিক্ষক ড্যাশবোর্ড"
        description="আপনার সকল আয়ের বিস্তারিত রিপোর্ট দেখুন। কোর্স বিক্রয়, কমিশন এবং পেমেন্টের ইতিহাস ট্র্যাক করুন।"
        keywords="প্রশিক্ষক আয়, কোর্স বিক্রয়, পেমেন্ট রিপোর্ট, আয়ের পরিসংখ্যান"
        url="/instructor/earnings"
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
                আয়ের রিপোর্ট
              </h1>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                আপনার সকল আয় এবং পেমেন্টের বিস্তারিত দেখুন
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

        {/* Earnings Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm mb-8`}
        >
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            মাসিক আয়ের ট্রেন্ড
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={earningsData}>
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
              <Line type="monotone" dataKey="gross" stroke="#22c55e" strokeWidth={3} name="মোট আয়" />
              <Line type="monotone" dataKey="net" stroke="#3b82f6" strokeWidth={3} name="নেট আয়" />
              <Line type="monotone" dataKey="commission" stroke="#ef4444" strokeWidth={3} name="কমিশন" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Course Earnings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              কোর্স অনুযায়ী আয়
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseEarningsData}>
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
                <Bar dataKey="earnings" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
          >
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              পেমেন্ট মেথড বিতরণ
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentMethodsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {paymentMethodsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              সাম্প্রতিক লেনদেন
            </h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="লেনদেন খুঁজুন..."
                  className={`pl-10 pr-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                />
              </div>
              <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value)}
                className={`px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              >
                <option value="all">সব ধরনের</option>
                <option value="earning">আয়</option>
                <option value="withdrawal">উত্তোলন</option>
                <option value="commission">কমিশন</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    ধরন
                  </th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    বিবরণ
                  </th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    পরিমাণ
                  </th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    তারিখ
                  </th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    মেথড
                  </th>
                  <th className={`text-left py-3 px-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    স্ট্যাটাস
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        {getTransactionIcon(transaction.type)}
                      </div>
                    </td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-white' : 'text-gray-900'} font-medium`}>
                      {transaction.description}
                    </td>
                    <td className={`py-3 px-4 font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}৳{Math.abs(transaction.amount).toLocaleString()}
                    </td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {transaction.date}
                    </td>
                    <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {transaction.method}
                    </td>
                    <td className="py-3 px-4">
                      {getStatusBadge(transaction.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              ১০টির মধ্যে ১-৫টি দেখানো হচ্ছে
            </p>
            <div className="flex space-x-2">
              <button className={`px-3 py-1 rounded border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors duration-200`}>
                পূর্ববর্তী
              </button>
              <button className={`px-3 py-1 rounded border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors duration-200`}>
                পরবর্তী
              </button>
            </div>
          </div>
        </motion.div>

        {/* Withdrawal Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm mt-8`}
        >
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            টাকা উত্তোলন
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                উত্তোলনের পরিমাণ
              </label>
              <input
                type="number"
                placeholder="৳ পরিমাণ লিখুন"
                className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                পেমেন্ট মেথড
              </label>
              <select className={`w-full px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}>
                <option>বিকাশ</option>
                <option>নগদ</option>
                <option>ব্যাংক ট্রান্সফার</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300">
                উত্তোলনের অনুরোধ
              </button>
            </div>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-4`}>
            * ন্যূনতম উত্তোলনের পরিমাণ ৳১,০০০। উত্তোলনের জন্য ২-৩ কার্যদিবস সময় লাগতে পারে।
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InstructorEarningsPage;