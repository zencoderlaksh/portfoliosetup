import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleBackground = () => {
  const pointsRef = useRef();

  // Rotate particles for an immersive effect
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  // Generate random points in a sphere
  const particles = new Float32Array(
    Array.from({ length: 1000 }).flatMap(
      () => THREE.MathUtils.randFloatSpread(2).toFixed(3) * 3
    )
  );

  return (
    <Points ref={pointsRef} positions={particles}>
      <PointMaterial color="#00bcd4" size={0.05} sizeAttenuation />
    </Points>
  );
};

const AnimatedBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} className="absolute inset-0">
      <ParticleBackground />
    </Canvas>
  );
};

export default AnimatedBackground;
