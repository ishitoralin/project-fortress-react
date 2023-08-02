import { useGLTF } from '@react-three/drei';

export function Bar(props) {
  const { nodes, materials } = useGLTF('/3d-object/gym_props._barberll.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['bar_c.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['bar_2_c.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials['bar_a.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials['bar_b.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials['bolt.001']}
      />
    </group>
  );
}

export function PlateXS(props) {
  const { nodes, materials } = useGLTF('/3d-object/gym_props._barberll.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials['1.25kg_b']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['1.25kg_a']}
      />
    </group>
  );
}

export function PlateLG(props) {
  const { nodes, materials } = useGLTF('/3d-object/gym_props._barberll.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['10kg_b']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials['10kg_a']}
      />
    </group>
  );
}

export function PlateXL(props) {
  const { nodes, materials } = useGLTF('/3d-object/gym_props._barberll.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials['15kg_b']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials['15kg_a']}
      />
    </group>
  );
}

export function PlateSM(props) {
  const { nodes, materials } = useGLTF('/3d-object/gym_props._barberll.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['2.5kg_b']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials['2.5kg_a']}
      />
    </group>
  );
}

export function PlateMD(props) {
  const { nodes, materials } = useGLTF('/3d-object/gym_props._barberll.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials['5kg_b']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials['5kg_a']}
      />
    </group>
  );
}

export function Collar(props) {
  const { nodes, materials } = useGLTF('/3d-object/gym_props._barberll.glb');

  return <group {...props} dispose={null}>
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.clamp}
        position={[0.711, 0, -0.468]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={0.01}
      />
  </group>;
}

useGLTF.preload('/3d-object/gym_props._barberll.glb');
