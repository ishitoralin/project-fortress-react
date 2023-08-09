import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
} from '@react-three/drei';

import styles from '@/styles/homepage.module.css';
import BarBell from '@/components/hh/BarBell';
import ScrollContent from '@/components/hh/ScrollContent';

export const scrollData = {
  section: null,
  setSection(n) {
    this.section = n;
  },
};

const clamp = (x, min, max) => Math.min(Math.max(x, min), max);

const HomePage = () => {
  const lenRef = useRef();

  useEffect(() => {
    lenRef.current.style.setProperty('--s', 0);
    let isFire = false;
    const trackPointer = (event) => {
      lenRef.current.style.setProperty(
        '--x',
        `${clamp(event.clientX - 50, 25, window.innerWidth - 125)}px`
      );
      lenRef.current.style.setProperty(
        '--y',
        `${clamp(event.clientY - 50, 25, window.innerHeight - 125)}px`
      );
    };

    window.addEventListener('mousemove', () => (isFire = true), { once: true });
    window.addEventListener('mousemove', trackPointer);

    const intervalId = window.setInterval(() => {
      if (!isFire) return;
      const lenScale = lenRef.current.style.getPropertyValue('--s');
      lenRef.current.style.setProperty(
        '--s',
        scrollData.section === '3&4' ? 0 : lenScale === '0.9' ? 1.25 : 0.9
      );
    }, 1000);

    return () => {
      window.removeEventListener('mousemove', trackPointer);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div ref={lenRef} className={styles['len']}></div>
      <div className={styles['main-box']}>
        <Canvas>
          <Environment preset="studio" />
          <ambientLight preset="rembrandt" intensity={2} />
          <directionalLight intensity={2} position={[50, 50, 50]} />
          <ScrollControls pages={12} damping={0.35}>
            <Suspense>
              <BarBell
                scale={4}
                position={[-1, -0.75, 0.5]}
                rotation={[0, 1.55, -0.2]}
              />
            </Suspense>
            <Scroll html>
              <ScrollContent />
            </Scroll>
          </ScrollControls>
          {/* <OrbitControls enableZoom={false} /> */}
        </Canvas>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => <>{page}</>;

export default HomePage;
