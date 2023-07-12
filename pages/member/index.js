import React from 'react';
import MemberCenterLayout from '@/components/layout/memberCenterLayout';
// import styles from '@/styles/member.module.css';

export default function Index() {
  // return <section className={`${styles.container}`}></section>;
  return <div>123</div>;
}
Index.getLayout = (page) => <MemberCenterLayout>{page}</MemberCenterLayout>;
