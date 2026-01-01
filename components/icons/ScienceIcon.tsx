export default function ScienceIcon({ className = 'h-12 w-12' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="science-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      {/* Microscope base */}
      <rect x="30" y="85" width="40" height="5" fill="url(#science-grad)" />
      {/* Microscope body */}
      <path
        d="M 45 85 L 45 60 L 55 60 L 55 85"
        fill="url(#science-grad)"
        opacity="0.8"
      />
      {/* Microscope arm */}
      <path
        d="M 50 60 L 50 30 L 65 20 L 70 25 L 55 35 L 55 60"
        fill="url(#science-grad)"
      />
      {/* Eyepiece */}
      <circle cx="50" cy="25" r="6" fill="#6366F1" />
      <circle cx="50" cy="25" r="3" fill="#3B82F6" />
      {/* Objective lens */}
      <rect x="43" y="80" width="14" height="5" fill="#3B82F6" rx="2" />
      {/* Sample slide */}
      <rect x="35" y="75" width="30" height="3" fill="#8B5CF6" opacity="0.6" />
      {/* Light rays */}
      <line
        x1="50"
        y1="75"
        x2="40"
        y2="65"
        stroke="#FCD34D"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="50"
        y1="75"
        x2="60"
        y2="65"
        stroke="#FCD34D"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  );
}
