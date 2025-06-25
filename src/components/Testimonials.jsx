import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

const Testimonials = () => {
  const { darkMode } = useThemeContext();

  const testimonials = [
    {
      id: 1,
      name: 'রাহুল হাসান',
      role: 'ওয়েব ডেভেলপার',
      company: 'টেক সলিউশন বিডি',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Eureqa থেকে ওয়েব ডেভেলপমেন্ট শিখে আমার জীবনটাই পাল্টে গেছে। এখন আমি একটি ভালো কোম্পানিতে কাজ করছি এবং স্বাবলম্বী হয়েছি।'
    },
    {
      id: 2,
      name: 'ফাতিমা খাতুন',
      role: 'ডিজিটাল মার্কেটার',
      company: 'ফ্রিল্যান্সার',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'ডিজিটাল মার্কেটিং কোর্সটি অসাধারণ ছিল। প্রশিক্ষক খুবই দক্ষ এবং সব কিছু খুব সহজভাবে বুঝিয়েছেন। এখন আমি মাসে লক্ষ টাকা আয় করছি।'
    },
    {
      id: 3,
      name: 'মোঃ করিম উদ্দিন',
      role: 'গ্রাফিক ডিজাইনার',
      company: 'ক্রিয়েটিভ এজেন্সি',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'গ্রাফিক ডিজাইন কোর্সটি আমার স্বপ্নকে বাস্তব করতে সাহায্য করেছে। প্র্যাক্টিক্যাল প্রজেক্ট এবং ব্যক্তিগত গাইডেন্স পেয়েছি যা অমূল্য।'
    },
    {
      id: 4,
      name: 'নাদিয়া আক্তার',
      role: 'ব্যবসায়ী',
      company: 'অনলাইন শপ',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'ব্যবসায়িক দক্ষতা কোর্সটি করার পর আমার অনলাইন ব্যবসা দ্বিগুণ হয়েছে। প্রতিটি মডিউল খুবই কার্যকর এবং বাস্তবধর্মী।'
    },
    {
      id: 5,
      name: 'তানভীর ইসলাম',
      role: 'সফটওয়্যার ইঞ্জিনিয়ার',
      company: 'গুগল',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'প্রোগ্রামিং কোর্সগুলো অত্যন্ত উন্নতমানের। প্রশিক্ষকদের অভিজ্ঞতা এবং শেখানোর পদ্ধতি অসাধারণ। এখন আমি গুগলে কাজ করি।'
    },
    {
      id: 6,
      name: 'সাকিবা আহমেদ',
      role: 'ইংরেজি প্রশিক্ষক',
      company: 'শিক্ষা প্রতিষ্ঠান',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'ইংরেজি ভাষা কোর্সটি আমার আত্মবিশ্বাস বাড়িয়েছে। এখন আমি নিজেই একজন ইংরেজি প্রশিক্ষক হিসেবে কাজ করছি।'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Fixed Attachment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Floating Quote Marks */}
          <motion.g
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 5, 0, -5, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path d="M100,150 Q110,140 120,150 Q110,160 100,150 M130,150 Q140,140 150,150 Q140,160 130,150" 
                  fill="rgba(34, 197, 94, 0.2)" />
          </motion.g>

          <motion.g
            animate={{
              y: [20, -20, 20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <path d="M1000,200 Q1010,190 1020,200 Q1010,210 1000,200 M1030,200 Q1040,190 1050,200 Q1040,210 1030,200" 
                  fill="rgba(59, 130, 246, 0.2)" />
          </motion.g>

          {/* Animated Stars */}
          {[...Array(8)].map((_, i) => (
            <motion.g
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              <path d={`M${150 + i * 130},${100 + (i % 3) * 150} L${155 + i * 130},${110 + (i % 3) * 150} L${160 + i * 130},${100 + (i % 3) * 150} L${155 + i * 130},${90 + (i % 3) * 150} Z`} 
                    fill="rgba(251, 191, 36, 0.3)" />
            </motion.g>
          ))}

          {/* Flowing Lines */}
          <motion.path
            d="M0,600 Q300,550 600,600 T1200,600"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className={`relative z-10 ${darkMode ? 'bg-gray-800/95' : 'bg-gray-50/95'} backdrop-blur-sm transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              শিক্ষার্থীদের মতামত
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              আমাদের সফল শিক্ষার্থীরা কী বলছেন
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`${darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-lg rounded-2xl p-8 border shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Quote Icon */}
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="absolute top-4 right-4"
                >
                  <Quote className="h-8 w-8 text-primary-600 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                </motion.div>

                {/* Rating */}
                <div className="flex items-center mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1 + i * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed relative z-10`}>
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center relative z-10">
                  <div className="relative">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "rgba(34, 197, 94, 0.3)",
                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className={`${darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-lg rounded-2xl p-8 border inline-block relative overflow-hidden`}>
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-blue-400/10"
                animate={{
                  x: [-100, 100, -100],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="flex items-center justify-center space-x-8 relative z-10">
                {[
                  { value: "4.9/5", label: "গড় রেটিং" },
                  { value: "25K+", label: "সন্তুষ্ট শিক্ষার্থী" },
                  { value: "98%", label: "কোর্স সমাপনী" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold text-primary-600"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.5 + index * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {item.value}
                    </motion.div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;