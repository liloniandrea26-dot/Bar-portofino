"use client";

import { useState } from "react";

/**
 * Mostra una foto da /public/photos. Se il file non esiste ancora,
 * mostra un segnaposto elegante con il path atteso, così è chiaro
 * quale foto va aggiunta — il gioco non si rompe mai.
 */
export default function PhotoFrame({
  src,
  alt = "Un nostro ricordo",
  className = "",
  placeholderEmoji = "📸",
}: {
  src: string | null | undefined;
  alt?: string;
  className?: string;
  placeholderEmoji?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-blush via-rosa/30 to-oro/30 p-6 text-center ${className}`}
      >
        <span className="text-4xl">{placeholderEmoji}</span>
        <span className="font-game text-sm font-semibold text-vino/70">
          Qui ci andrà una foto ✨
        </span>
        {src && (
          <code className="rounded-md bg-white/60 px-2 py-0.5 text-[10px] text-vino/60">
            {src}
          </code>
        )}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`rounded-2xl object-cover shadow-lg ring-4 ring-white ${className}`}
    />
  );
}
