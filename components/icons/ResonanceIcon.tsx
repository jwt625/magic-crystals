export default function ResonanceIcon({ className = 'h-12 w-12' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="resonance-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      {/* Center point */}
      <circle cx="50" cy="50" r="5" fill="url(#resonance-grad)" />
      {/* Concentric waves */}
      <circle
        cx="50"
        cy="50"
        r="15"
        stroke="url(#resonance-grad)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <circle
        cx="50"
        cy="50"
        r="25"
        stroke="url(#resonance-grad)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="url(#resonance-grad)"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#resonance-grad)"
        strokeWidth="2"
        fill="none"
        opacity="0.2"
      />
      {/* Sine wave overlay */}
      <path
        d="M 10 50 Q 20 35, 30 50 T 50 50 T 70 50 T 90 50"
        stroke="#3B82F6"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
