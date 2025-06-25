import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useThemeContext } from '../context/ThemeContext';
import { Menu, X, Search, ShoppingCart, User, Moon, Sun, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { darkMode, toggleTheme } = useThemeContext();
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-zinc-100 border-gray-200'} border-b transition-colors duration-300 py-2`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary-600" />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>+880 1234-567890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary-600" />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>info@eureqa.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary-600" />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>ঢাকা, বাংলাদেশ</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="কোর্স খুঁজুন..."
                    className={`${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-900'} w-64 pl-10 pr-4 py-2 border rounded-lg focus:ring-0 outline-none focus:ring-primary-500`}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 relative`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </motion.button>

              {currentUser && (
                <div className="flex items-center space-x-2">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      to="/dashboard"
                      className={`p-2 rounded-lg ${location.pathname === '/dashboard' ? 'text-primary-600' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 block`}
                    >
                      <User className="h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
              )}

             
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-primary-600" />
              <select
                value={currentLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                className={`${darkMode ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-white text-gray-600 border-gray-300'} border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              >
                <option value="bn">বাংলা</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopNavbar;