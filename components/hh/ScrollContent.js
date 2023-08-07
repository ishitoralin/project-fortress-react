import dynamic from 'next/dynamic'; //因為server端不會有window物件，有必要在client端的時候才進行渲染。

import LogoIcon from '@/assets/logo';
import styles from '@/styles/homepage.module.css';
import drawBorder from '@/styles/drawBorder.module.css';
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
  const [draw, setDraw] = useState(false);
  useFrame(() => {
    const inSectionTwo = scroll.range(2 / 8, 1 / 8);
    setDraw(inSectionTwo < 1 && inSectionTwo > 0);
    // Math.random() * 1 < 0.05 &&
    //   console.log(`X:${pointer.x * 50 + 50}%`, `Y:${pointer.y * 50 + 50}%`);
    // lenRef.current.style.setProperty('--x', `${pointer.x * 50 + 50}%`);
    // lenRef.current.style.setProperty('--y', `${pointer.y * -50 + 50}%`);
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
        <div
          className={`${styles['block']} ${drawBorder[draw ? 'draw-ccw' : '']}`}
        >
          <h2>專業師資</h2>
        </div>
        <div
          className={`${styles['block']} ${drawBorder[draw ? 'draw-cw' : '']}`}
        >
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
