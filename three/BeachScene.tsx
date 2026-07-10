"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Scena spiaggia stilizzata: fila di ombrelloni + lettino, low-poly procedurali.
 * Animazione di ingresso (scale) e leggero parallax camera col mouse.
 */

function Umbrella({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <group position={position}>
      {/* Palo */}
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 1.8, 8]} />
        <meshStandardMaterial color="#F7F1E3" roughness={0.6} />
      </mesh>
      {/* Telo del'ombrellone */}
      <mesh position={[0, 1.85, 0]}>
        <coneGeometry args={[0.85, 0.5, 8]} />
        <meshStandardMaterial color={color} roughness={0.55} flatShading />
      </mesh>
      {/* Puntale */}
      <mesh position={[0, 2.2, 0]}>
        <coneGeometry args={[0.03, 0.15, 6]} />
        <meshStandardMaterial color="#F7F1E3" />
      </mesh>
    </group>
  );
}

function Lounger({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0, -0.4, 0]}>
      {/* Seduta */}
      <mesh position={[0, 0.22, 0]}>
        <boxGeometry args={[0.6, 0.08, 1.4]} />
        <meshStandardMaterial color="#4EC5C1" roughness={0.5} />
      </mesh>
      {/* Schienale inclinato */}
      <mesh position={[0, 0.45, -0.75]} rotation={[-0.7, 0, 0]}>
        <boxGeometry args={[0.6, 0.08, 0.65]} />
        <meshStandardMaterial color="#4EC5C1" roughness={0.5} />
      </mesh>
      {/* Gambe */}
      {([[-0.25, 0.55], [0.25, 0.55], [-0.25, -0.55], [0.25, -0.55]] as const).map(([x, z], i) => (
        <mesh key={i} position={[x, 0.09, z]}>
          <cylinderGeometry args={[0.03, 0.03, 0.18, 8]} />
          <meshStandardMaterial color="#F7F1E3" />
        </mesh>
      ))}
    </group>
  );
}

export default function BeachScene() {
  const group = useRef<THREE.Group>(null);
  const progress = useRef(0);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    // ingresso: scala da 0 a 1 con easing
    progress.current = Math.min(1, progress.current + delta * 0.8);
    const eased = 1 - Math.pow(1 - progress.current, 3);
    g.scale.setScalar(eased);

    // parallax camera leggero col mouse
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.6, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1.2 + state.pointer.y * 0.3, 0.04);
    state.camera.lookAt(0, 0.8, 0);

    // leggero dondolio degli ombrelloni, come mossi dalla brezza
    g.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.012;
  });

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFF4E0" />

      <group ref={group}>
        {/* Sabbia */}
        <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[6, 32]} />
          <meshStandardMaterial color="#EAD9BE" roughness={1} />
        </mesh>

        {/* Fila di ombrelloni */}
        <Umbrella position={[-2.4, 0, -1.2]} color="#FF7A59" />
        <Umbrella position={[0, 0, -0.4]} color="#F5A25D" />
        <Umbrella position={[2.4, 0, -1.4]} color="#FF7A59" />

        {/* Lettini */}
        <Lounger position={[-1.2, 0, 0.9]} />
        <Lounger position={[1.4, 0, 0.7]} />
      </group>
    </>
  );
}
