import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useThemeContext } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { darkMode, toggleTheme } = useThemeContext();
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { key: 'home', label: t('home'), path: '/' },
    { key: 'courses', label: t('courses'), path: '/courses' },
    { key: 'categories', label: t('categories'), path: '/categories' },
    { key: 'instructors', label: t('instructors'), path: '/instructors' },
    { key: 'about', label: t('about'), path: '/about' },
    { key: 'contact', label: t('contact'), path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-50 transition-colors duration-300 py-2`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className={`ml-2 text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Eureqa
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.key} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  to={item.path}
                  className={`${isActive(item.path)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : darkMode
                        ? 'text-gray-300 hover:text-primary-500'
                        : 'text-gray-700 hover:text-primary-600'
                    } pb-1 transition-colors duration-200 font-medium`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`${isActive(item.path)
                    ? 'text-primary-600 bg-primary-50'
                    : darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  } block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}

            {!currentUser && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'} transition-colors duration-200`}
                >
                  লগইন
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 mt-2"
                >
                  নিবন্ধন
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
    </motion.nav >
  );
};

export default MainNavbar;