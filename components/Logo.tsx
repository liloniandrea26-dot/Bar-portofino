import Link from "next/link";

/** Logo testuale + icona onda/ombrellone */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${light ? "text-white" : "text-deep"}`}
      aria-label="Portofino Beach Bar — Home"
    >
      {/* Icona: ombrellone stilizzato su onda */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500 group-hover:rotate-12"
      >
        <path
          d="M20 4C12 4 6 10 6 17h28c0-7-6-13-14-13z"
          fill="#FF7A59"
        />
        <path d="M20 4c-3 0-5.5 5.8-5.5 13h11C25.5 9.8 23 4 20 4z" fill="#F5A25D" />
        <rect x="19" y="16" width="2" height="15" rx="1" fill="currentColor" />
        <path
          d="M4 33c3-2.5 6-2.5 9 0s6 2.5 9 0 6-2.5 9 0 4.5 1.5 5 1"
          stroke="#4EC5C1"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-tight">Portofino</span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] opacity-80">
          Beach Bar
        </span>
      </span>
    </Link>
  );
}
