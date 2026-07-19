"use client";

import dynamic from "next/dynamic";

// Il gioco vive interamente lato client (localStorage, animazioni, canvas):
// disabilitiamo l'SSR per evitare mismatch di idratazione.
const GameEngine = dynamic(() => import("@/components/GameEngine"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-dvh items-center justify-center bg-notte">
      <div className="animate-heartbeat text-5xl">💛</div>
    </div>
  ),
});

export default function Home() {
  return <GameEngine />;
}
