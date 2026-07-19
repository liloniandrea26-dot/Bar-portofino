/** Normalizza un testo per confronti "gentili": minuscole, niente accenti,
 *  spazi multipli compressi, niente punteggiatura ai bordi. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Confronto "gentile" tra la risposta digitata e le risposte accettate */
export function matchesAnswer(input: string, answers: string[]): boolean {
  const n = normalize(input);
  return n.length > 0 && answers.some((a) => normalize(a) === n);
}

/** Fisher-Yates shuffle (non muta l'array originale) */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** RNG deterministico (mulberry32) per generazioni ripetibili (es. labirinto) */
export function seededRandom(seed: number): () => number {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

/** True se la stringa è ancora un [PLACEHOLDER] non compilato */
export function isPlaceholder(text: string | null | undefined): boolean {
  return !text || text.trim().startsWith("[");
}
