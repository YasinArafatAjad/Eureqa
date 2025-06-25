import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, BookOpen, Award, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const InstructorsPage = () => {
  const { darkMode } = useThemeContext();

  const instructors = [
    {
      id: 1,
      name: 'জামিল হাসান',
      title: 'সিনিয়র ওয়েব ডেভেলপার',
      company: 'Google',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.9,
      students: 15000,
      courses: 25,
      experience: '8+ বছর',
      location: 'ঢাকা, বাংলাদেশ',
      specialties: ['React', 'Node.js', 'JavaScript', 'MongoDB'],
      bio: 'গুগলে সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার হিসেবে কাজ করছেন। ৮ বছরের অভিজ্ঞতা নিয়ে ওয়েব ডেভেলপমেন্ট শেখাচ্ছেন।',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 2,
      name: 'ফাতিমা খান',
      title: 'ডিজিটাল মার্কেটিং এক্সপার্ট',
      company: 'Facebook',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      students: 12000,
      courses: 18,
      experience: '6+ বছর',
      location: 'চট্টগ্রাম, বাংলাদেশ',
      specialties: ['SEO', 'Social Media', 'Content Marketing', 'PPC'],
      bio: 'ফেসবুকে মার্কেটিং ম্যানেজার। ডিজিটাল মার্কেটিং এ ৬ বছরের অভিজ্ঞতা এবং বিভিন্ন ব্র্যান্ডের সাথে কাজ করেছেন।',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 3,
      name: 'রাহুল আহমেদ',
      title: 'UI/UX ডিজাইনার',
      company: 'Adobe',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
      students: 8500,
      courses: 15,
      experience: '5+ বছর',
      location: 'সিলেট, বাংলাদেশ',
      specialties: ['Photoshop', 'Illustrator', 'Figma', 'UI Design'],
      bio: 'অ্যাডোবিতে প্রোডাক্ট ডিজাইনার। গ্রাফিক্স এবং UI/UX ডিজাইনে বিশেষজ্ঞ। আন্তর্জাতিক প্রজেক্টে কাজ করেছেন।',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 4,
      name: 'নাদিয়া রহমান',
      title: 'বিজনেস কনসালট্যান্ট',
      company: 'McKinsey & Company',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.9,
      students: 6000,
      courses: 12,
      experience: '10+ বছর',
      location: 'ঢাকা, বাংলাদেশ',
      specialties: ['Strategy', 'Leadership', 'Finance', 'Operations'],
      bio: 'ম্যাকিনসিতে সিনিয়র পার্টনার। ব্যবসায়িক কৌশল এবং নেতৃত্ব উন্নয়নে ১০ বছরের অভিজ্ঞতা।',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 5,
      name: 'তানভীর ইসলাম',
      title: 'সফটওয়্যার আর্কিটেক্ট',
      company: 'Microsoft',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      students: 18000,
      courses: 30,
      experience: '12+ বছর',
      location: 'ঢাকা, বাংলাদেশ',
      specialties: ['Python', 'Java', 'System Design', 'Cloud'],
      bio: 'মাইক্রোসফটে প্রিন্সিপাল সফটওয়্যার আর্কিটেক্ট। প্রোগ্রামিং এবং সিস্টেম ডিজাইনে ১২ বছরের অভিজ্ঞতা।',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 6,
      name: 'সাকিবা আহমেদ',
      title: 'ইংরেজি ভাষা বিশেষজ্ঞ',
      company: 'British Council',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.9,
      students: 10000,
      courses: 20,
      experience: '7+ বছর',
      location: 'ঢাকা, বাংলাদেশ',
      specialties: ['IELTS', 'TOEFL', 'Business English', 'Grammar'],
      bio: 'ব্রিটিশ কাউন্সিলে সিনিয়র ইংরেজি প্রশিক্ষক। IELTS এবং TOEFL প্রস্তুতিতে বিশেষজ্ঞ।',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <SEOHelmet
        title="আমাদের প্রশিক্ষকগণ"
        description="বিশ্বমানের অভিজ্ঞ প্রশিক্ষকদের কাছ থেকে শিখুন। Google, Facebook, Microsoft এর এক্সপার্টদের সাথে আপনার স্কিল ডেভেলপ করুন।"
        keywords="অভিজ্ঞ প্রশিক্ষক, এক্সপার্ট ইন্সট্রাক্টর, ওয়েব ডেভেলপমেন্ট প্রশিক্ষক, ডিজিটাল মার্কেটিং এক্সপার্ট"
        url="/instructors"
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
            আমাদের প্রশিক্ষকগণ
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            বিশ্বমানের অভিজ্ঞ প্রশিক্ষকদের কাছ থেকে শিখুন
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'মোট প্রশিক্ষক', value: '200+', icon: Users },
            { label: 'গড় অভিজ্ঞতা', value: '8+ বছর', icon: Award },
            { label: 'গড় রেটিং', value: '4.8/5', icon: Star },
            { label: 'মোট শিক্ষার্থী', value: '50K+', icon: BookOpen }
          ].map((stat, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border text-center`}
            >
              <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl overflow-hidden shadow-lg border group cursor-pointer transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Instructor Image */}
              <div className="relative">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold text-gray-800">{instructor.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                  {instructor.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-1">{instructor.title}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  {instructor.company}
                </p>

                {/* Location */}
                <div className="flex items-center mb-4">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {instructor.location}
                  </span>
                </div>

                {/* Bio */}
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                  {instructor.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {instructor.students.toLocaleString()}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      শিক্ষার্থী
                    </div>
                  </div>
                  <div>
                    <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {instructor.courses}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      কোর্স
                    </div>
                  </div>
                  <div>
                    <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {instructor.experience}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      অভিজ্ঞতা
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.slice(0, 3).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                    {instructor.specialties.length > 3 && (
                      <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                        +{instructor.specialties.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={instructor.social.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={instructor.social.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={instructor.social.website}
                      className="text-gray-400 hover:text-green-600 transition-colors duration-200"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors duration-300"
                  >
                    প্রোফাইল দেখুন
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join as Instructor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={`mt-16 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-8 border text-center`}
        >
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            প্রশিক্ষক হিসেবে যোগ দিন
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            আপনার জ্ঞান শেয়ার করুন এবং হাজারো শিক্ষার্থীর জীবন পরিবর্তন করুন
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-colors duration-300"
          >
            আবেদন করুন
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default InstructorsPage;