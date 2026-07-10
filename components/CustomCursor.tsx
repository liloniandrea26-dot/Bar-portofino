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
        {/* Piccola fetta di pizza */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 22 4 7c2.5-1.9 5.2-3 8-3s5.5 1.1 8 3l-8 15z" fill="#C9AF8B" />
          <path d="M4 7c2.5-1.9 5.2-3 8-3s5.5 1.1 8 3l-1.2 2.2C16.6 7.6 14.4 6.8 12 6.8S7.4 7.6 5.2 9.2L4 7z" fill="#9A6B3F" />
          <circle cx="10.5" cy="11" r="1.3" fill="#FDFCF9" />
          <circle cx="14" cy="13.5" r="1.1" fill="#FDFCF9" />
          <circle cx="11.6" cy="16.5" r="1" fill="#FDFCF9" />
        </svg>
      </div>
    </motion.div>
  );
}
