export default function EnergyIcon({ className = 'h-12 w-12' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="energy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
        <radialGradient id="energy-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Glow effect */}
      <circle cx="50" cy="50" r="40" fill="url(#energy-glow)" />
      {/* Lightning bolt / energy burst */}
      <path
        d="M 50 10 L 35 45 L 50 45 L 40 90 L 70 50 L 55 50 L 65 10 Z"
        fill="url(#energy-grad)"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Sparkle points */}
      <circle cx="30" cy="25" r="2" fill="#FCD34D" />
      <circle cx="70" cy="30" r="2.5" fill="#FCD34D" />
      <circle cx="25" cy="70" r="2" fill="#F97316" />
      <circle cx="75" cy="75" r="2" fill="#F97316" />
    </svg>
  );
}
