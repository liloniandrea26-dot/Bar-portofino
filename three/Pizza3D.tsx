"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Pizza low-poly procedurale (nessun modello .glb necessario):
 * base, cornicione, pomodoro, "mozzarella" e foglie di basilico.
 * Ruota lentamente su se stessa con un leggero galleggiamento.
 */
export default function Pizza3D() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.3;
  });

  // Posizioni pseudo-casuali ma stabili per mozzarella e basilico
  const toppings = useMemo(() => {
    const rand = (seed: number) => {
      const x = Math.sin(seed * 999) * 10000;
      return x - Math.floor(x);
    };
    return Array.from({ length: 14 }, (_, i) => {
      const angle = rand(i + 1) * Math.PI * 2;
      const radius = 0.25 + rand(i + 20) * 1.15;
      return {
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius,
        scale: 0.16 + rand(i + 40) * 0.12,
        basil: i % 4 === 0,
        rot: rand(i + 60) * Math.PI,
      };
    });
  }, []);

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 4]} intensity={1.5} color="#FFF4E0" />
      <pointLight position={[-4, 3, -2]} intensity={0.5} color="#C9AF8B" />

      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={group} rotation={[0.5, 0, 0.06]} scale={1.05}>
          {/* Base della pizza */}
          <mesh>
            <cylinderGeometry args={[1.8, 1.85, 0.14, 40]} />
            <meshStandardMaterial color="#EAD9BE" roughness={0.75} />
          </mesh>

          {/* Cornicione (toro ruotato in orizzontale) */}
          <mesh position={[0, 0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.72, 0.15, 12, 40]} />
            <meshStandardMaterial color="#F5A25D" roughness={0.7} />
          </mesh>

          {/* Pomodoro */}
          <mesh position={[0, 0.08, 0]}>
            <cylinderGeometry args={[1.58, 1.58, 0.05, 40]} />
            <meshStandardMaterial color="#E2542E" roughness={0.55} />
          </mesh>

          {/* Mozzarella e basilico */}
          {toppings.map((t, i) =>
            t.basil ? (
              <mesh key={i} position={[t.x, 0.13, t.z]} rotation={[0, t.rot, 0]}>
                <boxGeometry args={[t.scale * 1.4, 0.02, t.scale]} />
                <meshStandardMaterial color="#3E7C4F" roughness={0.6} flatShading />
              </mesh>
            ) : (
              <mesh key={i} position={[t.x, 0.12, t.z]} scale={[1, 0.35, 1]}>
                <sphereGeometry args={[t.scale, 10, 8]} />
                <meshStandardMaterial color="#FDFBF6" roughness={0.4} flatShading />
              </mesh>
            ),
          )}
        </group>
      </Float>
    </>
  );
}
