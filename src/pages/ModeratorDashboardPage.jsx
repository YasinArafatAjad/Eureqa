import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import ModeratorDashboard from '../components/ModeratorDashboard';

const ModeratorDashboardPage = () => {
  return (
    <>
      <SEOHelmet
        title="মডারেটর ড্যাশবোর্ড"
        description="কন্টেন্ট এবং ব্যবহারকারী ব্যবস্থাপনা। কোর্স রিভিউ, ব্যবহারকারী মডারেশন এবং রিপোর্ট পরিচালনা করুন।"
        keywords="মডারেটর ড্যাশবোর্ড, কন্টেন্ট মডারেশন, কোর্স রিভিউ, ব্যবহারকারী মডারেশন, রিপোর্ট ব্যবস্থাপনা"
        url="/moderator-dashboard"
        type="website"
      />
      <ModeratorDashboard />
    </>
  );
};

export default ModeratorDashboardPage;