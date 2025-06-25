import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import MainNavbar from './MainNavbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  if (isDashboard) {
    return <Outlet />;
  }

  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;