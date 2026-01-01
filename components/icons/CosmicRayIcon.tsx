interface CosmicRayIconProps {
  className?: string;
}

export default function CosmicRayIcon({ className = '' }: CosmicRayIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Red gradient for danger */}
        <linearGradient id="cosmicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>

        {/* Radial glow for radiation */}
        <radialGradient id="cosmicGlow" cx="50%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#DC2626" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#B91C1C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#991B1B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow from space */}
      <circle cx="50" cy="20" r="40" fill="url(#cosmicGlow)" opacity="0.6" />

      {/* Sun/cosmic source at top */}
      <circle
        cx="50"
        cy="20"
        r="8"
        fill="url(#cosmicGradient)"
        stroke="#DC2626"
        strokeWidth="1"
      />

      {/* UV/Cosmic rays shooting down */}
      {/* Ray 1 - center */}
      <line
        x1="50"
        y1="28"
        x2="50"
        y2="75"
        stroke="url(#cosmicGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polygon
        points="50,75 48,70 52,70"
        fill="url(#cosmicGradient)"
      />

      {/* Ray 2 - left */}
      <line
        x1="42"
        y1="26"
        x2="35"
        y2="70"
        stroke="url(#cosmicGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <polygon
        points="35,70 34,65 37,67"
        fill="url(#cosmicGradient)"
      />

      {/* Ray 3 - right */}
      <line
        x1="58"
        y1="26"
        x2="65"
        y2="70"
        stroke="url(#cosmicGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <polygon
        points="65,70 63,67 66,65"
        fill="url(#cosmicGradient)"
      />

      {/* Ray 4 - far left */}
      <line
        x1="38"
        y1="24"
        x2="20"
        y2="65"
        stroke="url(#cosmicGradient)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Ray 5 - far right */}
      <line
        x1="62"
        y1="24"
        x2="80"
        y2="65"
        stroke="url(#cosmicGradient)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Damaged cell/DNA at bottom */}
      {/* Cell membrane - irregular/damaged */}
      <ellipse
        cx="50"
        cy="82"
        rx="15"
        ry="12"
        fill="none"
        stroke="url(#cosmicGradient)"
        strokeWidth="1.5"
        strokeDasharray="3,2"
        opacity="0.9"
      />

      {/* Broken DNA helix inside cell */}
      <path
        d="M 42,78 Q 46,76 50,78 T 58,78"
        fill="none"
        stroke="#DC2626"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 42,86 Q 46,88 50,86 T 58,86"
        fill="none"
        stroke="#DC2626"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Broken connection lines */}
      <line x1="44" y1="78" x2="44" y2="83" stroke="#B91C1C" strokeWidth="1" />
      <line x1="50" y1="78" x2="50" y2="83" stroke="#B91C1C" strokeWidth="1" strokeDasharray="2,2" />
      <line x1="56" y1="78" x2="56" y2="83" stroke="#B91C1C" strokeWidth="1" />

      {/* Mutation/cancer indicators - small irregular cells */}
      <circle cx="68" cy="80" r="3" fill="#DC2626" opacity="0.7" />
      <circle cx="72" cy="85" r="2.5" fill="#B91C1C" opacity="0.7" />
      <circle cx="32" cy="80" r="3" fill="#DC2626" opacity="0.7" />
      <circle cx="28" cy="85" r="2.5" fill="#B91C1C" opacity="0.7" />

      {/* Warning symbol particles along rays */}
      <circle cx="50" cy="45" r="1.5" fill="#DC2626" opacity="0.8" />
      <circle cx="48" cy="55" r="1.5" fill="#B91C1C" opacity="0.8" />
      <circle cx="52" cy="60" r="1.5" fill="#DC2626" opacity="0.8" />
      <circle cx="40" cy="50" r="1" fill="#DC2626" opacity="0.6" />
      <circle cx="60" cy="50" r="1" fill="#DC2626" opacity="0.6" />
    </svg>
  );
}

