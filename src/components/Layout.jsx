// components/Layout.jsx
import React from 'react';
import Header from './Header'; // Adjust import paths to match your project
import Footer from './Footer';
import SocialLinks from './SocialLinks';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;