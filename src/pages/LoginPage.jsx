import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signin } = useAuth();
  const { darkMode } = useThemeContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const from = location.state?.from?.pathname || '/dashboard';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signin(formData.email, formData.password);
      navigate(from, { replace: true });
    } catch (error) {
      setError('ইমেইল বা পাসওয়ার্ড ভুল হয়েছে');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <SEOHelmet
        title="লগইন"
        description="আপনার Eureqa অ্যাকাউন্টে লগইন করুন এবং আপনার শিক্ষার যাত্রা চালিয়ে যান।"
        keywords="লগইন, সাইন ইন, অ্যাকাউন্ট, Eureqa লগইন"
        url="/login"
      />

      {/* Left Side - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200)'
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
              আবার স্বাগতম!
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              আপনার শিক্ষার যাত্রা চালিয়ে যান এবং নতুন দক্ষতা অর্জন করুন
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm opacity-90">সক্রিয় শিক্ষার্থী</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1500+</div>
                <div className="text-sm opacity-90">কোর্স</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className={`w-full lg:w-1/2 flex items-center justify-center p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
              লগইন করুন
            </h2>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              আপনার অ্যাকাউন্টে প্রবেশ করুন
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
                ইমেইল ঠিকানা
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
                পাসওয়ার্ড
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className={`ml-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  আমাকে মনে রাখুন
                </span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
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
                  লগইন হচ্ছে...
                </div>
              ) : (
                'লগইন করুন'
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              নতুন অ্যাকাউন্ট?{' '}
              <Link
                to="/register"
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              >
                নিবন্ধন করুন
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;