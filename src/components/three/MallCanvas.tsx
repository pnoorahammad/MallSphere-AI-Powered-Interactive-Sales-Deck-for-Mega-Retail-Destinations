"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AbstractMall = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#D4AF37" wireframe />
        </mesh>
      </Float>
      
      {/* Surrounding particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Sphere key={i} args={[0.05]} position={[
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ]}>
          <meshBasicMaterial color="#E5E4E2" transparent opacity={0.5} />
        </Sphere>
      ))}
    </group>
  );
};

export const MallCanvas = () => {
  return (
    <div className="h-[600px] w-full cursor-grab active:cursor-grabbing">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="#D4AF37" />
        <AbstractMall />
      </Canvas>
    </div>
  );
};
