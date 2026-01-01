export default function QuantumNoiseIcon({ className = 'h-12 w-12' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="qnoise-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
        <radialGradient id="qnoise-chaos" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DC2626" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Chaotic background */}
      <circle cx="50" cy="50" r="45" fill="url(#qnoise-chaos)" />

      {/* Disrupted quantum states - chaotic particles */}
      <circle cx="25" cy="25" r="3" fill="#DC2626" opacity="0.8" />
      <circle cx="75" cy="25" r="2.5" fill="#B91C1C" opacity="0.7" />
      <circle cx="25" cy="75" r="2" fill="#DC2626" opacity="0.6" />
      <circle cx="75" cy="75" r="3.5" fill="#B91C1C" opacity="0.9" />
      <circle cx="15" cy="50" r="2" fill="#DC2626" opacity="0.5" />
      <circle cx="85" cy="50" r="2.5" fill="#B91C1C" opacity="0.7" />
      <circle cx="50" cy="15" r="2" fill="#DC2626" opacity="0.6" />
      <circle cx="50" cy="85" r="3" fill="#B91C1C" opacity="0.8" />

      {/* Erratic wave patterns - representing quantum noise */}
      <path
        d="M 10 30 L 15 25 L 20 35 L 25 20 L 30 40 L 35 25 L 40 30"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 60 30 L 65 35 L 70 20 L 75 40 L 80 25 L 85 35 L 90 30"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 30 60 L 25 65 L 20 70 L 25 80 L 30 75 L 35 85 L 40 70"
        stroke="#B91C1C"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 70 60 L 75 70 L 80 65 L 85 80 L 90 70 L 85 75"
        stroke="#B91C1C"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* Central disrupted atom */}
      <circle cx="50" cy="50" r="6" fill="url(#qnoise-grad)" />

      {/* Chaotic electron orbits - broken and irregular */}
      <path
        d="M 50 30 Q 70 40, 70 50 Q 70 60, 50 70"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        strokeDasharray="5,3"
      />
      <path
        d="M 50 70 Q 30 60, 30 50 Q 30 40, 50 30"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        strokeDasharray="5,3"
      />
      <path
        d="M 30 50 Q 40 30, 50 30 Q 60 30, 70 50"
        stroke="#B91C1C"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
        strokeDasharray="4,4"
      />
      <path
        d="M 70 50 Q 60 70, 50 70 Q 40 70, 30 50"
        stroke="#B91C1C"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
        strokeDasharray="4,4"
      />

      {/* Interference patterns - zigzag lines */}
      <path
        d="M 35 45 L 40 40 L 45 45 L 50 40 L 55 45 L 60 40 L 65 45"
        stroke="#DC2626"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 35 55 L 40 60 L 45 55 L 50 60 L 55 55 L 60 60 L 65 55"
        stroke="#DC2626"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />

      {/* Random noise particles scattered */}
      <circle cx="40" cy="35" r="1.5" fill="#DC2626" opacity="0.8" />
      <circle cx="60" cy="35" r="1" fill="#B91C1C" opacity="0.6" />
      <circle cx="40" cy="65" r="1.5" fill="#DC2626" opacity="0.7" />
      <circle cx="60" cy="65" r="1" fill="#B91C1C" opacity="0.5" />
      <circle cx="35" cy="50" r="1" fill="#DC2626" opacity="0.6" />
      <circle cx="65" cy="50" r="1.5" fill="#B91C1C" opacity="0.7" />
    </svg>
  );
}

