import dynamic from 'next/dynamic'; //因為server端不會有window物件，有必要在client端的時候才進行渲染。

import LogoIcon from '@/assets/logo';
import styles from '@/styles/homepage.module.css';
import drawBorder from '@/styles/drawBorder.module.css';
import Image from 'next/image';
import { useScroll, ScrollControls, Scroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

import { scrollData } from '@/pages/index';

const SectionMap = dynamic(
  () => import('@/components/index-page/section-map'),
  {
    ssr: false,
  }
);

let once = false;

const ScrollContent = ({ horizontal, setHorizontal }) => {
  const scroll = useScroll();
  const [draw, setDraw] = useState(false);
  const [imgScale, setImgScale] = useState();
  const [titleOffset, setTitleOffset] = useState();
  useFrame(() => {
    const inSectionTwo = scroll.range(2 / 8, 1 / 8);
    setDraw(inSectionTwo < 1 && inSectionTwo > 0);

    const inSectionThreeFour = scroll.range(2 / 8, 2 / 8);
    scrollData.setSection(
      inSectionThreeFour < 1 && inSectionThreeFour > 0 ? '3&4' : null
    );

    const inSectionFive = scroll.range(3.75 / 8, 3 / 8);
    scroll.horizontal = inSectionFive < 1 && inSectionFive > 0;
    setHorizontal(inSectionFive < 1 && inSectionFive > 0);
    setImgScale(scroll.range(1.5 / 8, 0.75 / 8) / 2);
    setTitleOffset(scroll.range(1.5 / 8, 0.75 / 8) * 10);
    // Math.random() * 1 < 0.025 && console.log(scrollData.section);
    //   console.log(`X:${pointer.x * 50 + 50}%`, `Y:${pointer.y * 50 + 50}%`);
  });

  return (
    <>
      <section className={styles['section-one']}>
        <div className={styles['logoBox']}>
          <LogoIcon width={240} height={80} />
        </div>
        <h1>為你的身體築一座堡壘</h1>
        <div className={styles['section-shop']}>
          <h2>線上商城</h2>
        </div>
      </section>
      <section className={styles['section-two']}>
        <h1>全台灣最大的複合式健身房</h1>
      </section>
      <section className={styles['section-three']}>
        <div
          className={`${styles['block']} ${drawBorder[draw ? 'draw-ccw' : '']}`}
        >
          <div className={`${styles['img-box']}`}>
            <Image
              fill
              style={{
                '--s': imgScale,
              }}
              alt="coaches-img"
              src={`${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/coach/coachs-img/emily.jpg`}
            />
          </div>
          <h2 style={{ '--r': `${titleOffset}rem` }}>專業師資</h2>
        </div>
        <div
          className={`${styles['block']} ${drawBorder[draw ? 'draw-cw' : '']}`}
        >
          <div className={`${styles['img-box']}`}>
            <Image
              fill
              style={{
                '--s': imgScale,
              }}
              alt="lessons-img"
              src={`${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/lesson/lessons-img/dead-lift.jpg`}
            />
          </div>
          <h2 style={{ '--l': `${titleOffset}rem` }}>多元課程</h2>
        </div>
      </section>
      <section className={styles['section-four']}>
        <h2>線上商城</h2>
      </section>
      <section className={styles['section-five']}>
        <h2>全台據點</h2>
        <SectionMap />
      </section>
      {/* {horizontal && (
        <ScrollControls
          horizontal
          style={{ border: '2px solid red', zIndex: 100 }}
        >
          <Scroll html>
            <section className={styles['section-test']}>
              <h1>i love siaobao</h1>
            </section>
          </Scroll>
        </ScrollControls>
      )} */}
    </>
  );
};

export default ScrollContent;
