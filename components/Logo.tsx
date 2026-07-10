import Link from "next/link";

/**
 * Logo testuale + icona fetta di pizza stilizzata.
 * Il nome del locale arriva dal dizionario ([DA CONFERMARE] finché
 * il cliente non fornisce il nome reale).
 */
export default function Logo({
  name,
  tagline,
  href,
  light = false,
}: {
  name: string;
  tagline: string;
  href: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-2.5 ${light ? "text-white" : "text-ink"}`}
      aria-label={`${name} — Home`}
    >
      {/* Icona: fetta di pizza stilizzata */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500 group-hover:rotate-12"
      >
        {/* Fetta */}
        <path d="M20 36 5 10c4.5-3.5 9.8-5.5 15-5.5S30.5 6.5 35 10L20 36z" fill="#C9AF8B" />
        {/* Crosta */}
        <path
          d="M5 10c4.5-3.5 9.8-5.5 15-5.5S30.5 6.5 35 10l-2 3.4C29 10.5 24.6 9 20 9s-9 1.5-13 4.4L5 10z"
          fill="#9A6B3F"
        />
        {/* Condimenti */}
        <circle cx="17" cy="17" r="2.4" fill="#FDFCF9" />
        <circle cx="24" cy="20" r="2" fill="#FDFCF9" />
        <circle cx="19.5" cy="26" r="1.8" fill="#FDFCF9" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-tight">{name}</span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] opacity-80">
          {tagline}
        </span>
      </span>
    </Link>
  );
}
