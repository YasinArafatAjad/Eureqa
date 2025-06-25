import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  BookOpen,
  Users,
  Award,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { t } = useLanguage();
  const { darkMode } = useThemeContext();

  const footerLinks = {
    company: [
      { label: 'আমাদের সম্পর্কে', href: '#' },
      { label: 'ক্যারিয়ার', href: '#' },
      { label: 'প্রেস', href: '#' },
      { label: 'ব্লগ', href: '#' }
    ],
    courses: [
      { label: 'ওয়েব ডেভেলপমেন্ট', href: '#' },
      { label: 'ডিজিটাল মার্কেটিং', href: '#' },
      { label: 'গ্রাফিক্স ডিজাইন', href: '#' },
      { label: 'প্রোগ্রামিং', href: '#' }
    ],
    support: [
      { label: 'সাহায্য কেন্দ্র', href: '#' },
      { label: 'যোগাযোগ', href: '#' },
      { label: 'প্রাইভেসি পলিসি', href: '#' },
      { label: 'শর্তাবলী', href: '#' }
    ],
    resources: [
      { label: 'ফ্রি কোর্স', href: '#' },
      { label: 'ওয়েবিনার', href: '#' },
      { label: 'ই-বুক', href: '#' },
      { label: 'সার্টিফিকেট', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  const stats = [
    { icon: Users, count: '50K+', label: 'শিক্ষার্থী' },
    { icon: BookOpen, count: '1.5K+', label: 'কোর্স' },
    { icon: Award, count: '200+', label: 'প্রশিক্ষক' }
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-900'} text-white relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary-600/10 rounded-full filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-600/10 rounded-full filter blur-xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">E</span>
                  </div>
                  <span className="ml-3 text-2xl font-bold">Eureqa</span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  বাংলাদেশের অগ্রণী অনলাইন শিক্ষা প্ল্যাটফর্ম। আমরা মানসম্মত শিক্ষা এবং দক্ষতা উন্নয়নে প্রতিশ্রুতিবদ্ধ।
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-300">+880 1234-567890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-300">info@eureqa.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-300">ঢাকা, বাংলাদেশ</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Company Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-6">কোম্পানি</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Course Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-6">কোর্সসমূহ</h3>
                  <ul className="space-y-3">
                    {footerLinks.courses.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Support Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-6">সহায়তা</h3>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Resource Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold mb-6">রিসোর্স</h3>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group"
              >
                <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 mb-4 md:mb-0"
            >
              <span>© 2024 Eureqa. সকল অধিকার সংরক্ষিত।</span>
              <Heart className="h-4 w-4 text-red-500 mx-2" />
              <span>বাংলাদেশে তৈরি</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 mr-2">আমাদের ফলো করুন:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-lg bg-gray-800 text-gray-400 ${social.color} transition-colors duration-200`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 pt-6 border-t border-gray-800 text-center"
          >
            <p className="text-gray-400 text-sm">
              🏆 বাংলাদেশের সেরা অনলাইন শিক্ষা প্ল্যাটফর্ম | 
              🎓 ISO 9001:2015 সার্টিফাইড | 
              🔒 SSL সুরক্ষিত
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;