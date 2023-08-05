import dynamic from 'next/dynamic'; //因為server端不會有window物件，有必要在client端的時候才進行渲染。
const SectionMap = dynamic(
  () => import('@/components/index-page/section-map'),
  {
    ssr: false,
  }
);

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

const basicScale = 2.75;

const HomePage = () => {
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          backgroundColor: '#222',
        }}
      >
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
              <section
                style={{
                  position: 'relative',
                  width: '100vw',
                  height: '100vh',
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '4rem',
                    left: '4rem',
                  }}
                >
                  <LogoIcon width={240} height={80} />
                </div>
                <h1
                  style={{
                    position: 'absolute',
                    fontSize: '3rem',
                    top: '50%',
                    right: '8rem',
                    color: 'white',
                  }}
                >
                  為你的身體築一座堡壘
                </h1>
              </section>
              <section style={{ position: 'relative', height: '100vh' }}>
                <h1
                  style={{
                    position: 'absolute',
                    fontSize: '3rem',
                    top: '30%',
                    right: '10%',
                    color: 'white',
                  }}
                >
                  全台灣最大的複合式健身房
                </h1>
              </section>
              <section style={{ position: 'relative', height: '100vh' }}>
                <h1
                  style={{
                    position: 'absolute',
                    fontSize: '3rem',
                    top: '50%',
                    right: '10%',
                    color: 'white',
                  }}
                >
                  全台灣最大的複合式健身房
                </h1>
              </section>
              <SectionMap />
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
