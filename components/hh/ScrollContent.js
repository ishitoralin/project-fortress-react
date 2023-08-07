import dynamic from 'next/dynamic'; //因為server端不會有window物件，有必要在client端的時候才進行渲染。

import LogoIcon from '@/assets/logo';
import styles from '@/styles/homepage.module.css';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

const SectionMap = dynamic(
  () => import('@/components/index-page/section-map'),
  {
    ssr: false,
  }
);

const ScrollContent = () => {
  const scroll = useScroll();
  const [draw, setDraw] = useState('');
  useFrame(() => {
    setDraw(scroll.range(2 / 8, 1 / 8) > 0 ? 'draw-border' : '');
  });

  return (
    <>
      <section className={styles['section-one']}>
        <div className={styles['logoBox']}>
          <LogoIcon width={240} height={80} />
        </div>
        <h1>為你的身體築一座堡壘</h1>
      </section>
      <section className={styles['section-two']}>
        <h1>全台灣最大的複合式健身房</h1>
      </section>
      <section className={styles['section-three']}>
        <div className={styles['block'] + ' ' + styles[draw]}>
          <h2>專業師資</h2>
        </div>
        <div className={styles['block'] + ' ' + styles[draw]}>
          <h2>多元課程</h2>
        </div>
      </section>
      <section className={styles['section-four']}>
        <h2>全台據點</h2>
        <SectionMap />
      </section>
    </>
  );
};

export default ScrollContent;
