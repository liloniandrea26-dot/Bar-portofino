"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Cursor personalizzato a forma di piccola onda/ombrellone.
 * Attivo solo su desktop (pointer: fine) e solo dentro le zone
 * marcate con l'attributo `data-cursor-zone` (le sezioni hero).
 */
export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    if (!fine || reduced) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const zone = (e.target as HTMLElement | null)?.closest("[data-cursor-zone]");
      setActive(Boolean(zone));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [fine, reduced, x, y]);

  if (!fine || reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/50 backdrop-blur-sm">
        {/* Piccola onda */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M2 14c2.5-2 5-2 7.5 0s5 2 7.5 0 4-1.5 5 0M2 19c2.5-2 5-2 7.5 0s5 2 7.5 0 4-1.5 5 0"
            stroke="#4EC5C1"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M12 3c-3.5 0-6 2.7-6 6h12c0-3.3-2.5-6-6-6z" fill="#FF7A59" />
          <rect x="11.4" y="8" width="1.2" height="4.5" rx="0.6" fill="#fff" />
        </svg>
      </div>
    </motion.div>
  );
}
