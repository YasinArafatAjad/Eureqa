import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import AdminDashboard from '../components/AdminDashboard';

const AdminDashboardPage = () => {
  return (
    <>
      <SEOHelmet
        title="অ্যাডমিন ড্যাশবোর্ড"
        description="সিস্টেম ওভারভিউ এবং ব্যবস্থাপনা। ব্যবহারকারী, কোর্স, রেভিনিউ এবং সিস্টেম পরিসংখ্যান পরিচালনা করুন।"
        keywords="অ্যাডমিন ড্যাশবোর্ড, সিস্টেম ব্যবস্থাপনা, ব্যবহারকারী ব্যবস্থাপনা, রেভিনিউ ট্র্যাকিং, সিস্টেম পরিসংখ্যান"
        url="/admin-dashboard"
        type="website"
      />
      <AdminDashboard />
    </>
  );
};

export default AdminDashboardPage;