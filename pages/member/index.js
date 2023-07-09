import React from 'react';
import MemberLayout from '@/components/layout/memberLayout';
// import styles from '@/styles/member.module.css';

export default function Index() {
  // return <section className={`${styles.container}`}></section>;
  return <div>123</div>;
}
Index.getLayout = (page) => <MemberLayout>(page)</MemberLayout>;
