import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '@/components/hh/model';

const HomePage = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 5, 0]} />
        <Suspense>
          <Model position={[0, 0, 0]} scale={1.5} />
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
