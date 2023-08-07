import dynamic from 'next/dynamic'; //因為server端不會有window物件，有必要在client端的時候才進行渲染。

import styles from '@/styles/homepage.module.css';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
} from '@react-three/drei';

import LogoIcon from '@/assets/logo';
import BarBell from '@/components/hh/BarBell';

const SectionMap = dynamic(
  () => import('@/components/index-page/section-map'),
  {
    ssr: false,
  }
);

const basicScale = 2.75;

const HomePage = () => {
  return (
    <>
      <div className={styles['main-box']}>
        <Canvas>
          <Environment preset="studio" />
          <ambientLight preset="rembrandt" intensity={2} />
          <directionalLight intensity={2} position={[50, 50, 50]} />
          <ScrollControls pages={8} damping={0.35}>
            <Suspense>
              <BarBell
                scale={4}
                position={[-1, -0.75, 0.5]}
                rotation={[0, 1.55, -0.2]}
              />
            </Suspense>

            <Scroll html>
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
                <div>
                  <h2>專業師資</h2>
                </div>
                <div>
                  <h2>多元課程</h2>
                </div>
              </section>
              <section style={{ textAlign: 'center' }}>
                <h1 style={{ display: 'inline-block', color: 'white' }}>
                  全台據點
                </h1>
                <SectionMap />
              </section>
            </Scroll>
          </ScrollControls>
          {/* <BarBell
              scale={basicScale}
              position={[-1.5, 0, 0]}
              rotation={[0, 1, 0.5]}
            />
            <CatmullRomLine
              points={[
                [0, 0, 0],
                [1, 1, 1],
                [-1.5, 0, 0],
              ]} // Array of Points
              color="white" // Default
              lineWidth={5} // In pixels (default)
            /> */}
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => <>{page}</>;

export default HomePage;
