export default function FiveGIcon({ className = 'h-12 w-12' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="5g-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <radialGradient id="5g-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DC2626" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#991B1B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow effect */}
      <circle cx="50" cy="50" r="45" fill="url(#5g-glow)" />

      {/* Cell tower base */}
      <rect x="45" y="70" width="10" height="25" fill="url(#5g-grad)" />
      <polygon points="40,70 60,70 55,60 45,60" fill="url(#5g-grad)" />

      {/* Tower structure */}
      <path
        d="M 47 60 L 50 20 L 53 60"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
      />

      {/* Antenna */}
      <circle cx="50" cy="18" r="3" fill="#DC2626" />
      <line x1="50" y1="15" x2="50" y2="10" stroke="#DC2626" strokeWidth="2" />

      {/* Radiation waves - multiple layers */}
      {/* Inner waves */}
      <path
        d="M 50 25 Q 35 25, 30 35"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M 50 25 Q 65 25, 70 35"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />

      {/* Middle waves */}
      <path
        d="M 50 25 Q 30 25, 22 40"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 50 25 Q 70 25, 78 40"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* Outer waves */}
      <path
        d="M 50 25 Q 25 25, 15 45"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 50 25 Q 75 25, 85 45"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />

      {/* Danger indicators - small radiation symbols */}
      <circle cx="30" cy="35" r="2" fill="#DC2626" />
      <circle cx="70" cy="35" r="2" fill="#DC2626" />
      <circle cx="22" cy="40" r="2" fill="#DC2626" />
      <circle cx="78" cy="40" r="2" fill="#DC2626" />
      <circle cx="15" cy="45" r="2" fill="#DC2626" />
      <circle cx="85" cy="45" r="2" fill="#DC2626" />

      {/* 5G label */}
      <text
        x="50"
        y="92"
        textAnchor="middle"
        fill="#DC2626"
        fontSize="10"
        fontWeight="bold"
      >
        5G
      </text>
    </svg>
  );
}

