"use client";

import { Suspense, useRef, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView } from "framer-motion";
import { useThreeEnabled } from "@/lib/hooks";

/**
 * Wrapper comune per tutte le scene 3D:
 * - monta il Canvas solo quando è in viewport (lazy);
 * - su mobile / dispositivi lenti / prefers-reduced-motion mostra
 *   il `fallback` statico al posto della scena;
 * - limita il device pixel ratio per le performance.
 */
export default function ThreeStage({
  children,
  fallback = null,
  className = "",
  camera = { position: [0, 0, 6] as [number, number, number], fov: 45 },
}: {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov: number };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useThreeEnabled();
  const inView = useInView(ref, { margin: "200px" });

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {enabled && inView ? (
        <Canvas
          camera={camera}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>{children}</Suspense>
        </Canvas>
      ) : (
        fallback
      )}
    </div>
  );
}
