import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { resetPassword } = useAuth();
  const { darkMode } = useThemeContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      setError('ইমেইল পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <SEOHelmet
        title="পাসওয়ার্ড রিসেট"
        description="আপনার Eureqa অ্যাকাউন্টের পাসওয়ার্ড রিসেট করুন। ইমেইলের মাধ্যমে নতুন পাসওয়ার্ড সেট করুন।"
        keywords="পাসওয়ার্ড রিসেট, ভুলে যাওয়া পাসওয়ার্ড, অ্যাকাউন্ট রিকভারি"
        url="/forgot-password"
      />

      {/* Left Side - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200)'
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
              চিন্তা নেই!
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              আমরা আপনাকে সাহায্য করব আপনার অ্যাকাউন্টে ফিরে আসতে
            </p>
            <div className="text-center">
              <div className="text-6xl mb-4">🔐</div>
              <p className="text-lg opacity-90">
                নিরাপদ এবং সহজ পাসওয়ার্ড রিসেট
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Reset Form */}
      <div className={`w-full lg:w-1/2 flex items-center justify-center p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Back to Login */}
          <Link
            to="/login"
            className={`inline-flex items-center ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} mb-8 transition-colors duration-200`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            লগইনে ফিরে যান
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

          {!success ? (
            <>
              <div className="mb-8">
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  পাসওয়ার্ড রিসেট
                </h2>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  আপনার ইমেইল ঠিকানা দিন, আমরা পাসওয়ার্ড রিসেট লিংক পাঠাব
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200`}
                      placeholder="your@email.com"
                    />
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
                      পাঠানো হচ্ছে...
                    </div>
                  ) : (
                    'রিসেট লিংক পাঠান'
                  )}
                </motion.button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                ইমেইল পাঠানো হয়েছে!
              </h2>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                আমরা <strong>{email}</strong> এ একটি পাসওয়ার্ড রিসেট লিংক পাঠিয়েছি। 
                আপনার ইমেইল চেক করুন এবং নির্দেশনা অনুসরণ করুন।
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                ইমেইল পাননি? স্প্যাম ফোল্ডার চেক করুন অথবা কয়েক মিনিট পর আবার চেষ্টা করুন।
              </p>
            </motion.div>
          )}

          <div className="mt-8 text-center">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              পাসওয়ার্ড মনে আছে?{' '}
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

export default ForgotPasswordPage;