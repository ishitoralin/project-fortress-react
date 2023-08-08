import { Suspense, useEffect, useRef } from 'react';
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

const basicScale = 2.75;

const clamp = (x, min, max) => Math.min(Math.max(x, min), max);

const HomePage = () => {
  const lenRef = useRef();

  useEffect(() => {
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

    let lenScale = 1;
    let trans = 0.005;
    window.addEventListener('mousemove', trackPointer);
    const intervalId = window.setInterval(() => {
      trans = lenScale > 1.2 ? -0.005 : lenScale < 0.8 ? 0.005 : trans;
      lenRef.current.style.setProperty('--s', (lenScale += trans));
    }, 10);

    return () => {
      window.removeEventListener(trackPointer);
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
          <ScrollControls pages={8} damping={0.35}>
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
