import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Target, Heart, Lightbulb, Globe, Shield } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';
import SEOHelmet from '../components/SEOHelmet';

const AboutPage = () => {
  const { darkMode } = useThemeContext();

  const values = [
    {
      icon: Target,
      title: 'আমাদের লক্ষ্য',
      description: 'বাংলাদেশের প্রতিটি মানুষের কাছে মানসম্মত শিক্ষা পৌঁছে দেওয়া এবং দক্ষ জনশক্তি তৈরি করা।'
    },
    {
      icon: Heart,
      title: 'আমাদের মূল্যবোধ',
      description: 'শিক্ষার্থীদের সফলতাই আমাদের সফলতা। আমরা বিশ্বাস করি শিক্ষা সবার অধিকার।'
    },
    {
      icon: Lightbulb,
      title: 'আমাদের দৃষ্টিভঙ্গি',
      description: 'একটি শিক্ষিত ও দক্ষ বাংলাদেশ গড়ে তোলা যেখানে প্রতিটি মানুষ তার স্বপ্ন পূরণ করতে পারে।'
    }
  ];

  const features = [
    {
      icon: Globe,
      title: 'বিশ্বমানের শিক্ষা',
      description: 'আন্তর্জাতিক মানের কোর্স এবং প্রশিক্ষণ'
    },
    {
      icon: Users,
      title: 'অভিজ্ঞ প্রশিক্ষক',
      description: 'ইন্ডাস্ট্রি এক্সপার্ট এবং অভিজ্ঞ প্রশিক্ষকগণ'
    },
    {
      icon: Shield,
      title: 'সার্টিফিকেশন',
      description: 'ইন্ডাস্ট্রি স্বীকৃত সার্টিফিকেট'
    },
    {
      icon: BookOpen,
      title: 'লাইফটাইম এক্সেস',
      description: 'একবার কিনলে সারাজীবন এক্সেস'
    }
  ];

  const team = [
    {
      name: 'মোঃ রফিকুল ইসলাম',
      role: 'প্রতিষ্ঠাতা ও সিইও',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'MIT থেকে কম্পিউটার সায়েন্সে পিএইচডি। ১৫ বছরের টেক ইন্ডাস্ট্রি অভিজ্ঞতা।'
    },
    {
      name: 'ড. ফারিহা খান',
      role: 'একাডেমিক ডিরেক্টর',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'ঢাকা বিশ্ববিদ্যালয়ের শিক্ষা বিভাগের প্রফেসর। শিক্ষা গবেষণায় ২০ বছরের অভিজ্ঞতা।'
    },
    {
      name: 'তানভীর আহমেদ',
      role: 'টেকনোলজি ডিরেক্টর',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'গুগল এবং মাইক্রোসফটে কাজ করেছেন। ফুল স্ট্যাক ডেভেলপমেন্ট এক্সপার্ট।'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'সন্তুষ্ট শিক্ষার্থী' },
    { number: '1,500+', label: 'কোর্স' },
    { number: '200+', label: 'প্রশিক্ষক' },
    { number: '95%', label: 'সফলতার হার' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <SEOHelmet
        title="আমাদের সম্পর্কে"
        description="Eureqa হলো বাংলাদেশের অগ্রণী অনলাইন শিক্ষা প্ল্যাটফর্ম। আমাদের লক্ষ্য প্রতিটি বাংলাদেশীর কাছে মানসম্মত শিক্ষা পৌঁছে দেওয়া।"
        keywords="Eureqa সম্পর্কে, অনলাইন শিক্ষা প্ল্যাটফর্ম, বাংলাদেশ, শিক্ষা, প্রশিক্ষণ, দক্ষতা উন্নয়ন"
        url="/about"
        type="website"
      />
      {/* Hero Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              আমাদের সম্পর্কে
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              Eureqa হলো বাংলাদেশের অগ্রণী অনলাইন শিক্ষা প্ল্যাটফর্ম। আমাদের লক্ষ্য হলো 
              প্রতিটি বাংলাদেশীর কাছে মানসম্মত শিক্ষা পৌঁছে দেওয়া এবং তাদের স্বপ্নের ক্যারিয়ার 
              গড়তে সাহায্য করা।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {stat.number}
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              আমাদের মূল্যবোধ
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              যে নীতিমালার উপর ভিত্তি করে আমরা কাজ করি
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} rounded-2xl p-8 border text-center`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                  {value.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              কেন Eureqa বেছে নেবেন?
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              আমাদের বিশেষত্বসমূহ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 border text-center hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              আমাদের টিম
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              যারা Eureqa কে এগিয়ে নিয়ে যাচ্ছেন
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-12 border`}
          >
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              আমাদের অঙ্গীকার
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8`}>
              আমরা প্রতিশ্রুতিবদ্ধ যে, প্রতিটি শিক্ষার্থী যেন তার স্বপ্নের ক্যারিয়ার গড়তে পারে। 
              আমাদের প্ল্যাটফর্মে শুধু কোর্স নয়, পাবেন সম্পূর্ণ ক্যারিয়ার গাইডেন্স, 
              ইন্ডাস্ট্রি কানেকশন এবং লাইফটাইম সাপোর্ট।
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-colors duration-300"
            >
              আমাদের সাথে যোগ দিন
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;