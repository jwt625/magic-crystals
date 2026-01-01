export default function QuantumIcon({ className = 'h-12 w-12' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="quantum-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      {/* Atom nucleus */}
      <circle cx="50" cy="50" r="8" fill="url(#quantum-grad)" />
      {/* Electron orbits */}
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        stroke="url(#quantum-grad)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        stroke="url(#quantum-grad)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
        transform="rotate(60 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        stroke="url(#quantum-grad)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
        transform="rotate(120 50 50)"
      />
      {/* Electrons */}
      <circle cx="85" cy="50" r="4" fill="#6366F1" />
      <circle cx="15" cy="50" r="4" fill="#6366F1" />
      <circle cx="67.5" cy="80" r="4" fill="#8B5CF6" />
    </svg>
  );
}
