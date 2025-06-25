import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import InstructorDashboard from '../components/InstructorDashboard';

const InstructorDashboardPage = () => {
  return (
    <>
      <SEOHelmet
        title="প্রশিক্ষক ড্যাশবোর্ড"
        description="আপনার কোর্স এবং শিক্ষার্থীদের ব্যবস্থাপনা করুন। আয়ের পরিসংখ্যান, কোর্স পারফরমেন্স এবং শিক্ষার্থীদের অগ্রগতি দেখুন।"
        keywords="প্রশিক্ষক ড্যাশবোর্ড, কোর্স ব্যবস্থাপনা, শিক্ষার্থী ব্যবস্থাপনা, আয়ের পরিসংখ্যান, কোর্স পারফরমেন্স"
        url="/instructor-dashboard"
        type="website"
      />
      <InstructorDashboard />
    </>
  );
};

export default InstructorDashboardPage;