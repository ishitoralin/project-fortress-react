import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Stage } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import {
  Bar,
  PlateLG,
  PlateMD,
  PlateSM,
  PlateXL,
  PlateXS,
  Collar,
} from '@/components/hh/model';

const basicScale = 2.75;

const HomePage = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Canvas>
        {/* <Environment preset="city" /> */}
        <Suspense>
          <pointLight intensity={10} position={[1, 5, 5]} />
          <directionalLight intensity={10} position={[50, 5, 50]} />
          <Stage preset={'rembrandt'} environment={'city'}>
            <Bar
              scale={basicScale}
              position={[-2, -0.5, 0.75]}
              rotation={[0, 1, 0]}
            />
            <PlateXL
              scale={basicScale}
              position={[-1, -0.5, 1]}
              rotation={[0.1, 0.5, 0]}
            />
          </Stage>
        </Suspense>
        {/* <mesh position={[0, 1, 0]}>
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

HomePage.getLayout = (page) => <>{page}</>;

export default HomePage;
