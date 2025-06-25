import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const UnauthorizedPage = () => {
  const { darkMode } = useThemeContext();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center px-4`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Shield className="h-12 w-12 text-red-600" />
        </motion.div>

        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
          অনুমতি নেই
        </h1>
        
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-md mx-auto`}>
          দুঃখিত, এই পেজটি দেখার জন্য আপনার যথেষ্ট অনুমতি নেই।
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            হোমে ফিরে যান
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UnauthorizedPage;