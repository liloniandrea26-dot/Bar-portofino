"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const BLUE = new THREE.Color("#14557E");
const CORAL = new THREE.Color("#FF7A59");

/**
 * Onda 3D animata (piano con MeshDistortMaterial di drei) usata come
 * sfondo della sezione tramonto: il colore vira lentamente dal blu
 * Adriatico all'arancio corallo, come il mare al calare del sole.
 */
export default function SunsetWave() {
  const material = useRef<any>(null);

  useFrame((state) => {
    if (!material.current) return;
    // oscillazione lenta blu <-> corallo
    const t = (Math.sin(state.clock.elapsedTime * 0.25) + 1) / 2;
    material.current.color.copy(BLUE).lerp(CORAL, t * 0.75);
  });

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[2, 4, 5]} intensity={0.9} />

      <mesh rotation={[-0.9, 0, 0]} position={[0, -1.2, 0]} scale={[7, 5, 1]}>
        <planeGeometry args={[2, 2, 48, 48]} />
        <MeshDistortMaterial
          ref={material}
          distort={0.35}
          speed={2}
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>
    </>
  );
}
