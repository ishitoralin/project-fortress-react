import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from '@/styles/member.module.css';
import { Typography } from '@mui/material';
const linkDetail = [
  { href: '/member', title: '會員資料' },
  { href: '/member/my-products', title: '收藏商品' },
  { href: '/member/my-courses', title: '收藏課程' },
  { href: '/member/my-orders', title: '我的訂單' },
];
export default function MemberSubNav() {
  const [route, setRoute] = useState();
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRoute(router?.route?.split('/member/')[1]);
    }
  });

  return (
    <section className={`${styles['sub-nav-section']}`}>
      <div className={`${styles['sub-nav-container']}`}>
        {linkDetail.map((el, i) => (
          <Link
            href={`${el.href}`}
            key={i}
            className={`${styles['sub-nav-link']}`}
          >
            {route === el?.href?.split('/member/')[1] && (
              <motion.div
                layoutId="sub-nav-active"
                className={`${styles['sub-nav-active']}`}
              />
            )}
            <h6 className={`${styles['sub-nav-title']}`}>{el.title}</h6>
          </Link>
        ))}
      </div>
    </section>
  );
}
