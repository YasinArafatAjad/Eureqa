import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HeadphonesIcon } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const ContactPage = () => {
  const { darkMode } = useThemeContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'ফোন',
      details: ['+880 1234-567890', '+880 9876-543210'],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'ইমেইল',
      details: ['info@eureqa.com', 'support@eureqa.com'],
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      title: 'ঠিকানা',
      details: ['১২৩ ধানমন্ডি, ঢাকা-১২০৫', 'বাংলাদেশ'],
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'কার্যসময়',
      details: ['সকাল ৯টা - রাত ৯টা', 'রবিবার - বৃহস্পতিবার'],
      color: 'text-purple-600'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'লাইভ চ্যাট',
      description: 'তাৎক্ষণিক সাহায্যের জন্য',
      action: 'চ্যাট শুরু করুন',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: HeadphonesIcon,
      title: 'ফোন সাপোর্ট',
      description: '২৪/৭ ফোন সাপোর্ট',
      action: 'কল করুন',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'ইমেইল সাপোর্ট',
      description: 'বিস্তারিত সমস্যার জন্য',
      action: 'ইমেইল পাঠান',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <SEOHelmet
        title="যোগাযোগ করুন"
        description="Eureqa এর সাথে যোগাযোগ করুন। আমরা আপনার সেবায় সর্বদা প্রস্তুত। ফোন, ইমেইল বা লাইভ চ্যাটের মাধ্যমে সাহায্য নিন।"
        keywords="যোগাযোগ, সাহায্য, সাপোর্ট, কাস্টমার সার্ভিস, Eureqa যোগাযোগ"
        url="/contact"
        type="website"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            যোগাযোগ করুন
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            আমরা আপনার সেবায় সর্বদা প্রস্তুত
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border text-center hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`w-12 h-12 ${info.color} bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <info.icon className={`h-6 w-6 ${info.color}`} />
              </div>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-8 border`}
          >
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              আমাদের কাছে লিখুন
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                      placeholder="আপনার পূর্ণ নাম"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      ইমেইল ঠিকানা *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    বিষয় *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="আপনার বার্তার বিষয়"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    বার্তা *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none`}
                    placeholder="আপনার বার্তা লিখুন..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      পাঠানো হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      বার্তা পাঠান
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  বার্তা পাঠানো হয়েছে!
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Support Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              অন্যান্য সাহায্য
            </h2>

            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border cursor-pointer hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center mr-4`}>
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                      {option.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                      {option.description}
                    </p>
                    <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                      {option.action} →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* FAQ Link */}
            <motion.div
              whileHover={{ y: -5 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border text-center`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                সাধারণ প্রশ্নাবলী
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                আপনার প্রশ্নের উত্তর এখানে পেতে পারেন
              </p>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300">
                FAQ দেখুন
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} text-center mb-8`}>
            আমাদের অবস্থান
          </h2>
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-4 border`}>
            <div className="h-64 bg-gray-300 rounded-xl flex items-center justify-center">
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                [Google Maps এর স্থান]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;