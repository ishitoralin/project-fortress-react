import dynamic from 'next/dynamic'; //因為server端不會有window物件，有必要在client端的時候才進行渲染。

import CUICard from '../customUI/cui-card';
import LogoIcon from '@/assets/logo';
import styles from '@/styles/homepage.module.css';
import drawBorder from '@/styles/drawBorder.module.css';
import Image from 'next/image';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

import { scrollData } from '@/pages/index';

const SectionMap = dynamic(
  () => import('@/components/index-page/section-map'),
  {
    ssr: false,
  }
);

const ShopTemplate = ({ className }) => {
  return (
    <div className={className}>
      <h2>線上商城</h2>
      <div className={styles['card-box']}>
        <CUICard sx={{ width: '20vw', height: '60vh' }}>
          {/* <Image alt="product-img" /> */}
        </CUICard>
        <CUICard sx={{ width: '20vw', height: '60vh' }}></CUICard>
        <CUICard sx={{ width: '20vw', height: '60vh' }}></CUICard>
        <CUICard sx={{ width: '20vw', height: '60vh' }}></CUICard>
      </div>
    </div>
  );
};

const ScrollContent = () => {
  const scroll = useScroll();
  const [draw, setDraw] = useState(false);
  const [sectionTwoDelta, setSectionTwoDelta] = useState(0);
  const [imgSectionDelta, setImgSectionDelta] = useState(0);
  useFrame(() => {
    setSectionTwoDelta(scroll.range(0.5 / 12, 1 / 12));
    const inSectionTwo = scroll.range(2 / 12, 1 / 12);
    setDraw(inSectionTwo < 1 && inSectionTwo > 0);

    const inSectionThreeFour = scroll.range(2 / 12, 2 / 12);
    scrollData.setSection(
      inSectionThreeFour < 1 && inSectionThreeFour > 0 ? '3&4' : null
    );

    const inSectionFive = scroll.range(3.875 / 12, 3 / 12);
    scroll.horizontal = inSectionFive < 1 && inSectionFive > 0;

    const inImgSection = scroll.range(1.5 / 12, 1.3 / 12);
    setImgSectionDelta(inImgSection);

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
        <ShopTemplate className={styles['section-shop']} />
      </section>
      <section className={styles['section-two']}>
        <h1
          className={`${styles['fade-in']}`}
          style={{
            '--o': `${sectionTwoDelta}`,
          }}
        >
          全台灣最大的複合式健身房
        </h1>
      </section>
      <section
        className={`${styles['section-three']} ${styles['fade-in']}`}
        style={{
          '--o': `${imgSectionDelta + 0.15}`,
        }}
      >
        <div
          className={`${styles['block']} ${drawBorder[draw ? 'draw-ccw' : '']}`}
        >
          <div
            className={`${styles['img-box']} ${styles['go-transform']}`}
            style={{
              '--x': `${imgSectionDelta * -2.5}rem`,
              '--y': `${imgSectionDelta * 2}rem`,
            }}
          >
            <Image
              fill
              className={`${styles['go-transform']}`}
              style={{
                '--s': `${imgSectionDelta / 2 + 1}`,
                '--o': `${imgSectionDelta}`,
              }}
              alt="coaches-img"
              src={`${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/coach/coachs-img/nick.jpg`}
            />
          </div>
          <div
            className={`${styles['img-box']} ${styles['go-transform']}`}
            style={{
              '--x': `${imgSectionDelta * 10}rem`,
              '--y': `${imgSectionDelta * 10}rem`,
            }}
          >
            <Image
              fill
              className={`${styles['go-transform']}`}
              style={{
                '--s': `${imgSectionDelta / 2 + 1}`,
              }}
              alt="coaches-img"
              src={`${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/coach/coachs-img/emily.jpg`}
            />
          </div>
          <h2 style={{ '--r': `${imgSectionDelta * 10}rem` }}>專業師資</h2>
        </div>
        <div
          className={`${styles['block']} ${drawBorder[draw ? 'draw-cw' : '']}`}
        >
          <div
            className={`${styles['img-box']} ${styles['go-transform']}`}
            style={{
              '--x': `${imgSectionDelta * 9}rem`,
              '--y': `${imgSectionDelta * 2}rem`,
            }}
          >
            <Image
              fill
              className={`${styles['go-transform']}`}
              style={{
                '--s': `${imgSectionDelta / 2 + 1}`,
                '--o': `${imgSectionDelta}`,
              }}
              alt="coaches-img"
              src={`${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/lesson/lessons-img/female-body-sculpting.jpg`}
            />
          </div>
          <div
            className={`${styles['img-box']} ${styles['go-transform']}`}
            style={{
              '--x': `${imgSectionDelta * -3.5}rem`,
              '--y': `${imgSectionDelta * 10}rem`,
            }}
          >
            <Image
              fill
              className={`${styles['go-transform']}`}
              style={{
                '--s': `${imgSectionDelta / 2 + 1}`,
              }}
              alt="coaches-img"
              src={`${process.env.NEXT_PUBLIC_BACKEND_PORT}/imgs/lesson/lessons-img/dead-lift.jpg`}
            />
          </div>
          <h2 style={{ '--l': `${imgSectionDelta * 10}rem` }}>多元課程</h2>
        </div>
      </section>
      <ShopTemplate className={styles['section-four']} />
      <section className={styles['section-empty']}>
        <h2>test</h2>
      </section>
      <section className={styles['section-empty']}>
        <h2>test</h2>
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
