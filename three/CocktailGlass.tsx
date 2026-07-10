"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Cocktail low-poly procedurale (nessun modello .glb necessario):
 * coppa a cono, gambo, base, "liquido" arancio tramonto e fetta d'arancia.
 * Ruota lentamente su se stesso, con un leggero galleggiamento.
 */
export default function CocktailGlass() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.35;
  });

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} />
      <pointLight position={[-4, 2, -2]} intensity={0.6} color="#FF7A59" />

      <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.6}>
        <group ref={group} scale={1.15} position={[0, -0.3, 0]}>
          {/* Coppa (cono aperto, vetro) */}
          <mesh position={[0, 0.9, 0]}>
            <coneGeometry args={[1.15, 1.3, 24, 1, true]} />
            <meshStandardMaterial
              color="#BEE7EC"
              transparent
              opacity={0.32}
              roughness={0.08}
              metalness={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Liquido arancio tramonto */}
          <mesh position={[0, 1.0, 0]}>
            <coneGeometry args={[0.98, 1.0, 24]} />
            <meshStandardMaterial color="#FF7A59" roughness={0.25} />
          </mesh>

          {/* Superficie del liquido */}
          <mesh position={[0, 1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.98, 24]} />
            <meshStandardMaterial color="#F5A25D" roughness={0.2} />
          </mesh>

          {/* Gambo */}
          <mesh position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.07, 0.07, 1.0, 12]} />
            <meshStandardMaterial color="#BEE7EC" transparent opacity={0.5} roughness={0.1} />
          </mesh>

          {/* Base */}
          <mesh position={[0, -0.65, 0]}>
            <cylinderGeometry args={[0.55, 0.6, 0.08, 24]} />
            <meshStandardMaterial color="#BEE7EC" transparent opacity={0.5} roughness={0.1} />
          </mesh>

          {/* Fetta d'arancia sul bordo */}
          <mesh position={[0.95, 1.62, 0]} rotation={[0, 0, Math.PI / 8]}>
            <cylinderGeometry args={[0.28, 0.28, 0.06, 20]} />
            <meshStandardMaterial color="#F5A25D" roughness={0.5} />
          </mesh>

          {/* Cannuccia */}
          <mesh position={[-0.4, 1.7, 0]} rotation={[0, 0, Math.PI / 7]}>
            <cylinderGeometry args={[0.045, 0.045, 1.5, 10]} />
            <meshStandardMaterial color="#4EC5C1" roughness={0.4} />
          </mesh>
        </group>
      </Float>
    </>
  );
}
