import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Bell, Gift } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { darkMode } = useThemeContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Fixed Attachment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/85' : 'bg-primary-600/90'}`}></div>
      </div>

      {/* Animated SVG Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 600" fill="none">
          {/* Floating Email Icons */}
          <motion.g
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, 0, -10, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <rect x="100" y="100" width="40" height="30" rx="5" fill="rgba(255, 255, 255, 0.1)" />
            <path d="M100 105 L120 120 L140 105" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" fill="none" />
          </motion.g>

          <motion.g
            animate={{
              y: [20, -20, 20],
              x: [-10, 10, -10]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <rect x="1000" y="150" width="35" height="25" rx="4" fill="rgba(255, 255, 255, 0.08)" />
            <path d="M1000 155 L1017.5 167 L1035 155" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" fill="none" />
          </motion.g>

          {/* Animated Waves */}
          <motion.path
            d="M0,400 Q300,350 600,400 T1200,400 L1200,600 L0,600 Z"
            fill="rgba(255, 255, 255, 0.05)"
            animate={{
              d: [
                "M0,400 Q300,350 600,400 T1200,400 L1200,600 L0,600 Z",
                "M0,420 Q300,370 600,420 T1200,420 L1200,600 L0,600 Z",
                "M0,400 Q300,350 600,400 T1200,400 L1200,600 L0,600 Z"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={i}
              cx={200 + i * 150}
              cy={200 + (i % 2) * 100}
              r="3"
              fill="rgba(255, 255, 255, 0.3)"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Newsletter Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 15 }}
            className={`w-20 h-20 ${darkMode ? 'bg-primary-600' : 'bg-white'} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg relative overflow-hidden`}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
            <Mail className={`h-10 w-10 ${darkMode ? 'text-white' : 'text-primary-600'} relative z-10`} />
          </motion.div>

          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            নতুন কোর্সের আপডেট পান
          </motion.h2>
          
          <motion.p 
            className="text-xl text-green-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং নতুন কোর্স, অফার এবং শিক্ষামূলক টিপস পান
          </motion.p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Bell,
                title: 'নতুন কোর্সের তথ্য',
                description: 'সবার আগে জানুন'
              },
              {
                icon: Gift,
                title: 'বিশেষ ছাড়',
                description: 'শুধুমাত্র সাবস্ক্রাইবারদের জন্য'
              },
              {
                icon: Mail,
                title: 'শিক্ষামূলক টিপস',
                description: 'সাপ্তাহিক গাইড'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <benefit.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                <p className="text-green-100 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেইল অ্যাড্রেস"
                  className={`w-full px-6 py-4 rounded-xl ${darkMode ? 'bg-gray-800/80 border-gray-700 text-gray-300' : 'bg-white/90 border-gray-300 text-gray-900'} border backdrop-blur-sm focus:ring-4 focus:ring-white/20 focus:border-transparent text-lg transition-all duration-300`}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent"
                  whileFocus={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`${darkMode ? 'bg-primary-600 hover:bg-primary-700' : 'bg-gray-900 hover:bg-gray-800'} text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 relative overflow-hidden group`}
              >
                <span className="relative z-10">সাবস্ক্রাইব করুন</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/90 backdrop-blur-sm text-white px-8 py-4 rounded-xl inline-block font-semibold text-lg border border-green-400/30"
            >
              ✅ সফলভাবে সাবস্ক্রাইব হয়েছে!
            </motion.div>
          )}

          <motion.p 
            className="text-green-100 text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            আমরা আপনার তথ্য সুরক্ষিত রাখি। যেকোনো সময় আনসাবস্ক্রাইব করতে পারেন।
          </motion.p>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 flex items-center justify-center space-x-6"
          >
            {[
              { number: "15K+", label: "সাবস্ক্রাইবার" },
              { number: "সাপ্তাহিক", label: "আপডেট" },
              { number: "০ স্প্যাম", label: "গ্যারান্টি" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-white">{item.number}</div>
                <div className="text-green-100 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;