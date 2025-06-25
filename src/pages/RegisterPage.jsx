import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, Eye, EyeOff, Shield, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAdminCode, setShowAdminCode] = useState(false);
  const { signup } = useAuth();
  const { darkMode } = useThemeContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'user',
    adminCode: ''
  });

  // Admin/Moderator access codes
  const ACCESS_CODES = {
    admin: 'ADMIN2024',
    moderator: 'MOD2024'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');

    // Show admin code field when admin or moderator is selected
    if (e.target.name === 'role') {
      setShowAdminCode(e.target.value === 'admin' || e.target.value === 'moderator');
      if (e.target.value === 'user' || e.target.value === 'instructor') {
        setFormData(prev => ({ ...prev, adminCode: '' }));
      }
    }
  };

  const validateAdminCode = (role, code) => {
    if (role === 'admin' && code !== ACCESS_CODES.admin) {
      return 'অবৈধ অ্যাডমিন কোড';
    }
    if (role === 'moderator' && code !== ACCESS_CODES.moderator) {
      return 'অবৈধ মডারেটর কোড';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (formData.password !== formData.confirmPassword) {
        setError('পাসওয়ার্ড মিলছে না');
        return;
      }

      // Validate admin/moderator code if required
      if (formData.role === 'admin' || formData.role === 'moderator') {
        const codeError = validateAdminCode(formData.role, formData.adminCode);
        if (codeError) {
          setError(codeError);
          return;
        }
      }

      await signup(formData.email, formData.password, {
        name: formData.name,
        phone: formData.phone,
        role: formData.role
      });
      
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <SEOHelmet
        title="নিবন্ধন"
        description="Eureqa তে নিবন্ধন করুন এবং আপনার শিক্ষার যাত্রা শুরু করুন। হাজারো কোর্স এবং বিশেষজ্ঞ প্রশিক্ষকদের সাথে যুক্ত হন।"
        keywords="নিবন্ধন, সাইন আপ, অ্যাকাউন্ট তৈরি, Eureqa নিবন্ধন"
        url="/register"
      />

      {/* Left Side - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-primary-800/90"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">
              আপনার যাত্রা শুরু করুন
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              বিশেষজ্ঞ প্রশিক্ষকদের কাছ থেকে শিখুন এবং আপনার স্বপ্নের ক্যারিয়ার গড়ুন
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">✓</span>
                </div>
                <span>১৫০০+ প্রিমিয়াম কোর্স</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">✓</span>
                </div>
                <span>বিশেষজ্ঞ প্রশিক্ষকগণ</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">✓</span>
                </div>
                <span>লাইফটাইম এক্সেস</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className={`w-full lg:w-1/2 flex items-center justify-center p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} overflow-y-auto`}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Back to Home */}
          <Link
            to="/"
            className={`inline-flex items-center ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} mb-8 transition-colors duration-200`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            হোমে ফিরে যান
          </Link>

          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <span className={`ml-3 text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Eureqa
            </span>
          </div>

          <div className="mb-8">
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              নিবন্ধন করুন
            </h2>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              আপনার অ্যাকাউন্ট তৈরি করুন
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                পূর্ণ নাম *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                  placeholder="আপনার পূর্ণ নাম"
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                ইমেইল ঠিকানা *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                ফোন নম্বর
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                  placeholder="আপনার ফোন নম্বর"
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                ভূমিকা *
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
              >
                <option value="user">শিক্ষার্থী</option>
                <option value="instructor">প্রশিক্ষক</option>
                <option value="moderator">মডারেটর</option>
                <option value="admin">অ্যাডমিন</option>
              </select>
            </div>

            {showAdminCode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  {formData.role === 'admin' ? 'অ্যাডমিন কোড' : 'মডারেটর কোড'} *
                </label>
                <div className="relative">
                  <Shield className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    name="adminCode"
                    value={formData.adminCode}
                    onChange={handleChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                    placeholder={`${formData.role === 'admin' ? 'অ্যাডমিন' : 'মডারেটর'} কোড লিখুন`}
                  />
                </div>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                  {formData.role === 'admin' ? 'অ্যাডমিন' : 'মডারেটর'} হিসেবে নিবন্ধনের জন্য বিশেষ কোড প্রয়োজন
                </p>
              </motion.div>
            )}

            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                পাসওয়ার্ড *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-12 py-3 border rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                  placeholder="আপনার পাসওয়ার্ড"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                পাসওয়ার্ড নিশ্চিত করুন *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className={`w-full pl-10 pr-12 py-3 border rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                  placeholder="পাসওয়ার্ড পুনরায় লিখুন"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-primary-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-300 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  নিবন্ধন হচ্ছে...
                </div>
              ) : (
                'নিবন্ধন করুন'
              )}
            </motion.button>
          </form>

          {/* Access Codes Info */}
          <div className={`mt-6 p-4 rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'} border`}>
            <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-blue-900'} mb-2`}>
              বিশেষ ভূমিকার জন্য এক্সেস কোড:
            </h4>
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-800'} space-y-1`}>
              <p><strong>অ্যাডমিন কোড:</strong> ADMIN2024</p>
              <p><strong>মডারেটর কোড:</strong> MOD2024</p>
              <p className="text-xs mt-2 opacity-75">
                (ডেমো উদ্দেশ্যে - প্রোডাকশনে এগুলো গোপন রাখা হবে)
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
              <Link
                to="/login"
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              >
                লগইন করুন
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;