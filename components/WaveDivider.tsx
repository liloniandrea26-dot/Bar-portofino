/**
 * Divisore a onda tra le sezioni.
 * `color` è la classe testo Tailwind del colore della sezione VERSO cui si raccorda.
 */
export default function WaveDivider({
  color = "text-cream",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-12 w-full md:h-20 ${flip ? "rotate-180" : ""} ${color} ${className}`}
    >
      <path
        d="M0,48 C180,80 360,8 540,24 C720,40 900,88 1080,64 C1260,40 1350,16 1440,32 L1440,80 L0,80 Z"
        fill="currentColor"
      />
    </svg>
  );
}
