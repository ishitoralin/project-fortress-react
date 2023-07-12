import React from 'react';
import MemberSubNav from './memberSubNav';
import Navbar from './navbar';
import Footer from './footer';

export default function MemberCenterLayout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ height: 'var(--nav-height)' }}></div>
      <main>
        <div
          style={{
            position: 'relative',
            minHeight: 'calc(100vh - var(--nav-height) - var(--footer-height))',
          }}
        >
          <MemberSubNav />
          <>{children}</>
          <Footer />
        </div>
      </main>
    </>
  );
}
