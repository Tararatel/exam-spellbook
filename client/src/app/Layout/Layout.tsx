import React from 'react';
import { Outlet } from 'react-router';
import Footer from '@/widgets/Footer/ui/Footer';
import Header from '@/widgets/Header/ui/Header';

function Layout(): React.JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
