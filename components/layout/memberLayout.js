import React from 'react';
import Layout from './layout';
import MemberSubNav from './memberSubNav';

export default function MemberLayout({ children }) {
  return (
    <Layout>
      <MemberSubNav>{children}</MemberSubNav>
    </Layout>
  );
}
