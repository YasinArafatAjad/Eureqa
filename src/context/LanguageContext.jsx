import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  bn: {
    // Navigation
    home: 'হোম',
    courses: 'কোর্সসমূহ',
    categories: 'ক্যাটেগরিসমূহ',
    instructors: 'প্রশিক্ষকগণ',
    about: 'আমাদের সম্পর্কে',
    contact: 'যোগাযোগ',
    login: 'লগইন',
    register: 'নিবন্ধন',
    dashboard: 'ড্যাশবোর্ড',
    
    // Hero Section
    heroTitle: 'আপনার স্বপ্নের দক্ষতা অর্জন করুন',
    heroSubtitle: 'বিশেষজ্ঞ প্রশিক্ষকদের কাছ থেকে শিখুন এবং আপনার ক্যারিয়ারকে এগিয়ে নিয়ে যান',
    startLearning: 'শেখা শুরু করুন',
    exploreCourses: 'কোর্স দেখুন',
    
    // Categories
    categoriesTitle: 'জনপ্রিয় ক্যাটেগরিসমূহ',
    webDevelopment: 'ওয়েব ডেভেলপমেন্ট',
    digitalMarketing: 'ডিজিটাল মার্কেটিং',
    graphicsDesign: 'গ্রাফিক্স ডিজাইন',
    programming: 'প্রোগ্রামিং',
    business: 'ব্যবসা',
    language: 'ভাষা',
    
    // Courses
    featuredCoursesTitle: 'ফিচার কোর্সসমূহ',
    viewCourse: 'কোর্স দেখুন',
    enrollNow: 'এখনই ভর্তি হন',
    students: 'শিক্ষার্থী',
    rating: 'রেটিং',
    
    // Statistics
    studentsEnrolled: 'নিবন্ধিত শিক্ষার্থী',
    coursesAvailable: 'উপলব্ধ কোর্স',
    expertInstructors: 'দক্ষ প্রশিক্ষক',
    successRate: 'সফলতার হার',
    
    // Footer
    aboutUs: 'আমাদের সম্পর্কে',
    quickLinks: 'দ্রুত লিংক',
    support: 'সাহায্য',
    followUs: 'আমাদের ফলো করুন',
    
    // Dashboard
    welcomeBack: 'স্বাগতম',
    myCourses: 'আমার কোর্সসমূহ',
    progress: 'অগ্রগতি',
    achievements: 'অর্জনসমূহ',
    settings: 'সেটিংস',
  },
  en: {
    // Navigation
    home: 'Home',
    courses: 'Courses',
    categories: 'Categories',
    instructors: 'Instructors',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    
    // Hero Section
    heroTitle: 'Master Skills for Your Dream Career',
    heroSubtitle: 'Learn from expert instructors and advance your career with our comprehensive courses',
    startLearning: 'Start Learning',
    exploreCourses: 'Explore Courses',
    
    // Categories
    categoriesTitle: 'Popular Categories',
    webDevelopment: 'Web Development',
    digitalMarketing: 'Digital Marketing',
    graphicsDesign: 'Graphics Design',
    programming: 'Programming',
    business: 'Business',
    language: 'Language',
    
    // Courses
    featuredCoursesTitle: 'Featured Courses',
    viewCourse: 'View Course',
    enrollNow: 'Enroll Now',
    students: 'Students',
    rating: 'Rating',
    
    // Statistics
    studentsEnrolled: 'Students Enrolled',
    coursesAvailable: 'Courses Available',
    expertInstructors: 'Expert Instructors',
    successRate: 'Success Rate',
    
    // Footer
    aboutUs: 'About Us',
    quickLinks: 'Quick Links',
    support: 'Support',
    followUs: 'Follow Us',
    
    // Dashboard
    welcomeBack: 'Welcome Back',
    myCourses: 'My Courses',
    progress: 'Progress',
    achievements: 'Achievements',
    settings: 'Settings',
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('bn');

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};