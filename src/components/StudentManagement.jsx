import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Users,
  Mail,
  Phone,
  Calendar,
  Award,
  BookOpen,
  TrendingUp,
  MessageSquare,
  MoreVertical,
  Eye,
  Ban,
  CheckCircle
} from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

const StudentManagement = () => {
  const { darkMode } = useThemeContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    {
      id: 1,
      name: 'আহমেদ হাসান',
      email: 'ahmed@example.com',
      phone: '+880 1234-567890',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      enrolledCourses: 3,
      completedCourses: 1,
      totalProgress: 65,
      joinDate: '২০২৪-০১-১৫',
      lastActive: '২ ঘন্টা আগে',
      status: 'active',
      totalSpent: 15000,
      certificates: 1
    },
    {
      id: 2,
      name: 'ফাতিমা খাতুন',
      email: 'fatima@example.com',
      phone: '+880 1987-654321',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      enrolledCourses: 5,
      completedCourses: 3,
      totalProgress: 80,
      joinDate: '২০২৪-০১-১০',
      lastActive: '১ দিন আগে',
      status: 'active',
      totalSpent: 25000,
      certificates: 3
    },
    {
      id: 3,
      name: 'রাহুল রায়',
      email: 'rahul@example.com',
      phone: '+880 1555-666777',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      enrolledCourses: 2,
      completedCourses: 0,
      totalProgress: 25,
      joinDate: '২০২৪-০১-০৮',
      lastActive: '৩ দিন আগে',
      status: 'inactive',
      totalSpent: 8000,
      certificates: 0
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const StudentCard = ({ student }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 p-6`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {student.name}
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {student.email}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            student.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {student.status === 'active' ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
          </span>
          <button className={`p-1 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}>
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-4 w-4 text-blue-500" />
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {student.enrolledCourses} কোর্স
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="h-4 w-4 text-yellow-500" />
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {student.certificates} সার্টিফিকেট
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {student.totalProgress}% সম্পূর্ণ
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-purple-500" />
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {student.joinDate}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            সামগ্রিক অগ্রগতি
          </span>
          <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {student.totalProgress}%
          </span>
        </div>
        <div className={`w-full bg-gray-200 rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${student.totalProgress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            মোট খরচ: <span className="font-semibold text-green-600">৳{student.totalSpent.toLocaleString()}</span>
          </p>
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            শেষ সক্রিয়: {student.lastActive}
          </p>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedStudent(student)}
            className="bg-primary-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-primary-700 transition-colors duration-200 flex items-center"
          >
            <Eye className="h-3 w-3 mr-1" />
            দেখুন
          </button>
          <button className={`px-3 py-1 rounded-lg text-sm ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border transition-colors duration-200`}>
            <MessageSquare className="h-3 w-3" />
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
            শিক্ষার্থী ব্যবস্থাপনা
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            আপনার কোর্সের শিক্ষার্থীদের তথ্য এবং অগ্রগতি দেখুন
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            মোট শিক্ষার্থী: {filteredStudents.length}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'মোট শিক্ষার্থী', value: students.length, icon: Users, color: 'text-blue-600' },
          { title: 'সক্রিয় শিক্ষার্থী', value: students.filter(s => s.status === 'active').length, icon: CheckCircle, color: 'text-green-600' },
          { title: 'গড় অগ্রগতি', value: `${Math.round(students.reduce((acc, s) => acc + s.totalProgress, 0) / students.length)}%`, icon: TrendingUp, color: 'text-purple-600' },
          { title: 'মোট সার্টিফিকেট', value: students.reduce((acc, s) => acc + s.certificates, 0), icon: Award, color: 'text-yellow-600' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm`}
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
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border p-6`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="শিক্ষার্থী খুঁজুন..."
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
              <option value="active">সক্রিয়</option>
              <option value="inactive">নিষ্ক্রিয়</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                শিক্ষার্থীর বিস্তারিত তথ্য
              </h3>
              <button
                onClick={() => setSelectedStudent(null)}
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Basic Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={selectedStudent.avatar}
                  alt={selectedStudent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedStudent.name}
                  </h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedStudent.email}
                  </p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedStudent.phone}
                  </p>
                </div>
              </div>

              {/* Progress Overview */}
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                <h5 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                  অগ্রগতির সারসংক্ষেপ
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>ভর্তিকৃত কোর্স</p>
                    <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedStudent.enrolledCourses}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>সম্পূর্ণ কোর্স</p>
                    <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedStudent.completedCourses}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>মোট খরচ</p>
                    <p className={`text-lg font-bold text-green-600`}>
                      ৳{selectedStudent.totalSpent.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>সার্টিফিকেট</p>
                    <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedStudent.certificates}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                  বার্তা পাঠান
                </button>
                <button className={`px-4 py-2 rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border transition-colors duration-200`}>
                  ব্লক করুন
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default StudentManagement;