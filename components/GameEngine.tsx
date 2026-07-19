"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import IntroScreen from "@/components/IntroScreen";
import LevelMap from "@/components/LevelMap";
import LevelShell from "@/components/LevelShell";
import WinOverlay from "@/components/WinOverlay";
import FinaleTransition from "@/components/FinaleTransition";
import { config } from "@/content.config";
import { FINALE_LEVEL, TOTAL_LEVELS, useProgress, type Screen } from "@/lib/store";

import Level01 from "@/components/levels/Level01";
import Level02 from "@/components/levels/Level02";
import Level03 from "@/components/levels/Level03";
import Level04 from "@/components/levels/Level04";
import Level05 from "@/components/levels/Level05";
import Level06 from "@/components/levels/Level06";
import Level07 from "@/components/levels/Level07";
import Level08 from "@/components/levels/Level08";
import Level09 from "@/components/levels/Level09";
import Level10 from "@/components/levels/Level10";
import Level11 from "@/components/levels/Level11";
import Level12 from "@/components/levels/Level12";
import Level13 from "@/components/levels/Level13";
import Level14 from "@/components/levels/Level14";
import Level15 from "@/components/levels/Level15";
import Level16 from "@/components/levels/Level16";
import Level17 from "@/components/levels/Level17";
import Level18 from "@/components/levels/Level18";
import Level19 from "@/components/levels/Level19";
import Level20 from "@/components/levels/Level20";
import Level21 from "@/components/levels/Level21";
import Level22 from "@/components/levels/Level22";

export type LevelProps = { onWin: () => void };

/** Registro centrale: componente + titolo + ricordo di ogni livello */
const LEVELS: Record<
  number,
  {
    Component: React.ComponentType<LevelProps>;
    title: string;
    memory: string;
    memoryPhoto: string | null;
  }
> = {
  1: { Component: Level01, title: config.level01.title, memory: config.level01.memory, memoryPhoto: config.level01.memoryPhoto },
  2: { Component: Level02, title: config.level02.title, memory: config.level02.memory, memoryPhoto: config.level02.memoryPhoto },
  3: { Component: Level03, title: config.level03.title, memory: config.level03.memory, memoryPhoto: config.level03.memoryPhoto },
  4: { Component: Level04, title: config.level04.title, memory: config.level04.memory, memoryPhoto: config.level04.memoryPhoto },
  5: { Component: Level05, title: config.level05.title, memory: config.level05.memory, memoryPhoto: config.level05.memoryPhoto },
  6: { Component: Level06, title: config.level06.title, memory: config.level06.memory, memoryPhoto: config.level06.memoryPhoto },
  7: { Component: Level07, title: config.level07.title, memory: config.level07.memory, memoryPhoto: config.level07.memoryPhoto },
  8: { Component: Level08, title: config.level08.title, memory: config.level08.memory, memoryPhoto: config.level08.memoryPhoto },
  9: { Component: Level09, title: config.level09.title, memory: config.level09.memory, memoryPhoto: config.level09.memoryPhoto },
  10: { Component: Level10, title: config.level10.title, memory: config.level10.memory, memoryPhoto: config.level10.memoryPhoto },
  11: { Component: Level11, title: config.level11.title, memory: config.level11.memory, memoryPhoto: config.level11.memoryPhoto },
  12: { Component: Level12, title: config.level12.title, memory: config.level12.memory, memoryPhoto: config.level12.memoryPhoto },
  13: { Component: Level13, title: config.level13.title, memory: config.level13.memory, memoryPhoto: config.level13.memoryPhoto },
  14: { Component: Level14, title: config.level14.title, memory: config.level14.memory, memoryPhoto: config.level14.memoryPhoto },
  15: { Component: Level15, title: config.level15.title, memory: config.level15.memory, memoryPhoto: config.level15.memoryPhoto },
  16: { Component: Level16, title: config.level16.title, memory: config.level16.memory, memoryPhoto: config.level16.memoryPhoto },
  17: { Component: Level17, title: config.level17.title, memory: config.level17.memory, memoryPhoto: config.level17.memoryPhoto },
  18: { Component: Level18, title: config.level18.title, memory: config.level18.memory, memoryPhoto: config.level18.memoryPhoto },
  19: { Component: Level19, title: config.level19.title, memory: config.level19.memory, memoryPhoto: config.level19.memoryPhoto },
  20: { Component: Level20, title: config.level20.title, memory: config.level20.memory, memoryPhoto: config.level20.memoryPhoto },
  21: { Component: Level21, title: config.level21.title, memory: config.level21.memory, memoryPhoto: config.level21.memoryPhoto },
};

/**
 * Router centrale del gioco: intro → mappa → livelli → finale.
 * La progressione è in Zustand + localStorage (lib/store.ts), quindi
 * chiudendo il browser si riprende da dove si era rimasti.
 */
export default function GameEngine() {
  const { introSeen, markIntroSeen, markCompleted } = useProgress();
  const [screen, setScreen] = useState<Screen>(introSeen ? "map" : "intro");
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [won, setWon] = useState(false);

  function openLevel(level: number) {
    setCurrentLevel(level);
    setWon(false);
    setScreen("level");
  }

  function handleContinue() {
    if (currentLevel === null) return;
    markCompleted(currentLevel);
    setWon(false);
    if (currentLevel === TOTAL_LEVELS) {
      // Dopo il livello 21: sequenza speciale, poi la lettera
      setScreen("finale-transition");
    } else {
      setCurrentLevel(null);
      setScreen("map");
    }
  }

  function backToMap() {
    setCurrentLevel(null);
    setWon(false);
    setScreen("map");
  }

  const levelDef = currentLevel !== null && currentLevel <= TOTAL_LEVELS ? LEVELS[currentLevel] : null;

  // Ogni schermata anima il proprio ingresso; il cambio schermata è un fade-in
  // del nuovo contenuto (niente exit-animation annidate che possono bloccarsi).
  return (
    <>
      {screen === "intro" && (
        <IntroScreen
          onStart={() => {
            markIntroSeen();
            setScreen("map");
          }}
        />
      )}

      {screen === "map" && (
        <motion.div
          key="map"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <LevelMap onSelectLevel={openLevel} />
        </motion.div>
      )}

      {screen === "level" && currentLevel !== null && levelDef && (
        <motion.div
          key={`level-${currentLevel}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <LevelShell level={currentLevel} title={levelDef.title} onBack={backToMap}>
            <levelDef.Component onWin={() => setWon(true)} />
          </LevelShell>
        </motion.div>
      )}

      {screen === "level" && currentLevel !== null && levelDef && (
        <WinOverlay
          open={won}
          level={currentLevel}
          memory={levelDef.memory}
          memoryPhoto={levelDef.memoryPhoto}
          onContinue={handleContinue}
        />
      )}

      {screen === "level" && currentLevel === FINALE_LEVEL && (
        <motion.div
          key="finale"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Level22
            onDone={() => {
              markCompleted(FINALE_LEVEL);
              backToMap();
            }}
          />
        </motion.div>
      )}

      {screen === "finale-transition" && (
        <motion.div
          key="finale-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FinaleTransition
            onDone={() => {
              setCurrentLevel(FINALE_LEVEL);
              setScreen("level");
            }}
          />
        </motion.div>
      )}
    </>
  );
}
