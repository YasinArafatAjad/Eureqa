import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import FeaturedCourses from '../components/FeaturedCourses';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <>
      <SEOHelmet
        title="হোম"
        description="বাংলাদেশের সেরা অনলাইন কোর্স প্ল্যাটফর্ম। বিশেষজ্ঞ প্রশিক্ষকদের কাছ থেকে শিখুন এবং আপনার ক্যারিয়ারকে এগিয়ে নিয়ে যান।"
        keywords="অনলাইন কোর্স, শিক্ষা, প্রশিক্ষণ, স্কিল ডেভেলপমেন্ট, ক্যারিয়ার, বাংলাদেশ"
        url="/"
        type="website"
      />
      <HeroSection />
      <Categories />
      <FeaturedCourses />
      <Statistics />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default HomePage;