import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  hideHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullWidth = false, hideHeader = false }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {!hideHeader && <Header />}
      <main className={`${fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6'} ${hideHeader ? 'pt-0' : 'pt-24'} pb-12 flex-grow`}>
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
