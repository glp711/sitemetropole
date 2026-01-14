import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { MobileMenuProvider } from '@/contexts/MobileMenuContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollToTop();

  return (
    <MobileMenuProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </MobileMenuProvider>
  );
};

export default Layout;