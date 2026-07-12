"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Particelle che simulano granelli di sabbia fluttuanti nell'hero.
 * Reagiscono dolcemente al movimento del mouse (parallax).
 */
export default function SandParticles({ count = 900 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5; // z
      speeds[i] = 0.15 + Math.random() * 0.45;
    }
    return { positions, speeds };
  }, [count]);

  useFrame((state, delta) => {
    const pts = points.current;
    if (!pts) return;

    const pos = pts.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      // deriva lenta verso l'alto, come sabbia sollevata dalla brezza
      pos[i * 3 + 1] += speeds[i] * delta * 0.4;
      pos[i * 3] += Math.sin(state.clock.elapsedTime * speeds[i]) * delta * 0.08;
      if (pos[i * 3 + 1] > 4) pos[i * 3 + 1] = -4;
    }
    pts.geometry.attributes.position.needsUpdate = true;

    // parallax morbido guidato dal mouse
    pts.rotation.y = THREE.MathUtils.lerp(pts.rotation.y, state.pointer.x * 0.15, 0.04);
    pts.rotation.x = THREE.MathUtils.lerp(pts.rotation.x, -state.pointer.y * 0.1, 0.04);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#D8C6A2"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
