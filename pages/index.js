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
  Stage,
  Sky,
  Stars,
  OrbitControls,
  Lightformer,
} from '@react-three/drei';
import {
  Bar,
  PlateLG,
  PlateMD,
  PlateSM,
  PlateXL,
  PlateXS,
  Collar,
  BarBell,
} from '@/components/hh/model';

import LogoIcon from '@/assets/logo';

const basicScale = 2.75;

const HomePage = () => {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          backgroundColor: '#222',
        }}
      >
        <Suspense>
          <Canvas>
            <Environment preset="studio" />
            <ambientLight preset="rembrandt" intensity={2} />
            <directionalLight intensity={2} position={[50, 5, 50]} />
            <group scale={basicScale}>
              <PlateLG position={[0.48, 0, 0]} rotation={[0, 0.5, 0]} />
              <PlateLG position={[0.33, 0.33, 0]} rotation={[-0.33, 0.33, 0]} />
              <PlateLG
                position={[-0.33, 0.33, 0]}
                rotation={[-0.33, -0.33, 0]}
              />
              <PlateLG position={[0, 0.48, 0]} rotation={[-0.5, 0, 0]} />
              <PlateLG
                position={[-0.33, -0.33, 0]}
                rotation={[0.33, -0.33, 0]}
              />
              <PlateLG position={[0, -0.48, 0]} rotation={[0.5, 0, 0]} />
              <PlateLG position={[0.33, -0.33, 0]} rotation={[0.33, 0.33, 0]} />
              <PlateLG position={[-0.48, 0, 0]} rotation={[0, -0.5, 0]} />
            </group>
            {/* <BarBell
              scale={basicScale}
              position={[-1.5, 0, 0]}
              rotation={[0, 1, 0.5]}
            /> */}
            <OrbitControls enableZoom={false} />
          </Canvas>
        </Suspense>
      </div>
      <section
        style={{
          position: 'relative',
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
          <LogoIcon width={270} height={90} />
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
    </>
  );
};

HomePage.getLayout = (page) => <>{page}</>;

export default HomePage;
