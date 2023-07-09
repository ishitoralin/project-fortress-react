import React from 'react';
import MemberLayout from '@/components/layout/memberLayout';
import styles from '@/styles/member.module.css';
import Logo from '@/assets/logo';
import { MAIN_BLACK } from '@/assets/color-code';
import { Typography } from '@mui/material';
import Link from 'next/link';
import AuthLink from '@/components/member/auth/auth-link';
export default function Login() {
  return (
    <>
      <div className={`${styles.bg}`}></div>
      <div className={`${styles['panel-section']}`}>
        <div>
          <Logo fill={MAIN_BLACK} className={styles.logo} />
        </div>
        <div className={styles['right-panel']}>
          <Typography variant="h4">登入帳號</Typography>
          {['sign-up', 'forgot-password'].map((el) => (
            <AuthLink key={el} path={el} />
          ))}
        </div>
      </div>
    </>
  );
}
Login.getLayout = (page) => <MemberLayout>{page}</MemberLayout>;
