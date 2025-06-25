import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import UserDashboard from '../components/UserDashboard';

const UserDashboardPage = () => {
  return (
    <>
      <SEOHelmet
        title="শিক্ষার্থী ড্যাশবোর্ড"
        description="আপনার শিক্ষার অগ্রগতি দেখুন। কোর্স ট্র্যাক করুন, সার্টিফিকেট দেখুন এবং আপনার শিক্ষার পরিসংখ্যান পর্যবেক্ষণ করুন।"
        keywords="শিক্ষার্থী ড্যাশবোর্ড, শিক্ষার অগ্রগতি, কোর্স ট্র্যাকিং, সার্টিফিকেট, পরিসংখ্যান"
        url="/user-dashboard"
        type="website"
      />
      <UserDashboard />
    </>
  );
};

export default UserDashboardPage;