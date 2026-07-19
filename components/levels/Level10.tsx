"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { config } from "@/content.config";
import { seededRandom } from "@/lib/utils";

const CELLS = 6; // celle del labirinto per lato
const N = CELLS * 2 + 1; // dimensione griglia (muri inclusi)

/** Genera un labirinto perfetto (sempre risolvibile) con backtracking */
function generateMaze(): boolean[][] {
  const rand = seededRandom(20260726); // seme fisso: stesso labirinto per tutti
  // true = muro
  const wall: boolean[][] = Array.from({ length: N }, () => Array(N).fill(true));
  const visited: boolean[][] = Array.from({ length: CELLS }, () => Array(CELLS).fill(false));
  const stack: [number, number][] = [[0, 0]];
  visited[0][0] = true;
  wall[1][1] = false;
  while (stack.length) {
    const [cr, cc] = stack[stack.length - 1];
    const neighbors = (
      [
        [cr - 1, cc],
        [cr + 1, cc],
        [cr, cc - 1],
        [cr, cc + 1],
      ] as [number, number][]
    ).filter(([r, c]) => r >= 0 && r < CELLS && c >= 0 && c < CELLS && !visited[r][c]);
    if (neighbors.length === 0) {
      stack.pop();
      continue;
    }
    const [nr, nc] = neighbors[Math.floor(rand() * neighbors.length)];
    visited[nr][nc] = true;
    // abbatti il muro tra le due celle
    wall[cr + nr + 1][cc + nc + 1] = false;
    wall[nr * 2 + 1][nc * 2 + 1] = false;
    stack.push([nr, nc]);
  }
  return wall;
}

/** LIVELLO 10 — Labirinto: guida lei (🐶) fino al cuore */
export default function Level10({ onWin }: { onWin: () => void }) {
  const maze = useMemo(generateMaze, []);
  const [pos, setPos] = useState<[number, number]>([1, 1]);
  const [trail, setTrail] = useState<Set<string>>(new Set(["1,1"]));
  const [won, setWon] = useState(false);
  const goal: [number, number] = [N - 2, N - 2];
  const touchStart = useRef<[number, number] | null>(null);

  const move = useCallback(
    (dr: number, dc: number) => {
      if (won) return;
      setPos(([r, c]) => {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nr >= N || nc < 0 || nc >= N || maze[nr][nc]) return [r, c];
        setTrail((t) => new Set(t).add(`${nr},${nc}`));
        if (nr === goal[0] && nc === goal[1]) {
          setWon(true);
          window.setTimeout(onWin, 1200);
        }
        return [nr, nc];
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [maze, won, onWin]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const map: Record<string, [number, number]> = {
        ArrowUp: [-1, 0],
        ArrowDown: [1, 0],
        ArrowLeft: [0, -1],
        ArrowRight: [0, 1],
      };
      if (map[e.key]) {
        e.preventDefault();
        move(...map[e.key]);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move]);

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        Porta {config.her.nickname} {config.level10.playerEmoji} fino al cuore{" "}
        {config.level10.goalEmoji} — frecce, swipe o pulsanti!
      </p>

      <div
        className="mx-auto grid w-full max-w-sm touch-none gap-0 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white"
        style={{ gridTemplateColumns: `repeat(${N}, minmax(0, 1fr))` }}
        onTouchStart={(e) => {
          touchStart.current = [e.touches[0].clientX, e.touches[0].clientY];
        }}
        onTouchEnd={(e) => {
          if (!touchStart.current) return;
          const dx = e.changedTouches[0].clientX - touchStart.current[0];
          const dy = e.changedTouches[0].clientY - touchStart.current[1];
          if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return;
          if (Math.abs(dx) > Math.abs(dy)) move(0, dx > 0 ? 1 : -1);
          else move(dy > 0 ? 1 : -1, 0);
          touchStart.current = null;
        }}
      >
        {maze.map((row, r) =>
          row.map((isWall, c) => {
            const here = pos[0] === r && pos[1] === c;
            const isGoal = r === goal[0] && c === goal[1];
            const visited = trail.has(`${r},${c}`);
            return (
              <div
                key={`${r},${c}`}
                className={`relative flex aspect-square items-center justify-center ${
                  isWall ? "bg-emerald-700" : "bg-emerald-50"
                }`}
              >
                {!isWall && visited && !here && (
                  <span className="text-[8px] opacity-40">🐾</span>
                )}
                {isGoal && !here && (
                  <span className="animate-heartbeat text-sm">{config.level10.goalEmoji}</span>
                )}
                {here && (
                  <motion.span
                    layoutId="player"
                    className="z-10 text-sm"
                    transition={{ duration: 0.12 }}
                  >
                    {won ? "💞" : config.level10.playerEmoji}
                  </motion.span>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* D-pad per mobile */}
      {!won && (
        <div className="mx-auto grid w-40 grid-cols-3 gap-1.5">
          <div />
          <button className="btn-soft !px-0 !py-2" onClick={() => move(-1, 0)} aria-label="su">⬆️</button>
          <div />
          <button className="btn-soft !px-0 !py-2" onClick={() => move(0, -1)} aria-label="sinistra">⬅️</button>
          <button className="btn-soft !px-0 !py-2" onClick={() => move(1, 0)} aria-label="giù">⬇️</button>
          <button className="btn-soft !px-0 !py-2" onClick={() => move(0, 1)} aria-label="destra">➡️</button>
        </div>
      )}
      {won && (
        <motion.p
          className="text-center font-game text-xl font-extrabold text-oro"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          Vi siete trovati! Come sempre 💞
        </motion.p>
      )}
    </div>
  );
}
