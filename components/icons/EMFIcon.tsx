export default function EMFIcon({ className = 'h-12 w-12' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="emf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <radialGradient id="emf-field" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#B91C1C" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#991B1B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background field */}
      <circle cx="50" cy="50" r="48" fill="url(#emf-field)" />

      {/* Electromagnetic field lines - vertical */}
      <path
        d="M 20 10 Q 20 50, 20 90"
        stroke="#DC2626"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 35 10 Q 35 50, 35 90"
        stroke="#DC2626"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 50 10 Q 50 50, 50 90"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M 65 10 Q 65 50, 65 90"
        stroke="#DC2626"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 80 10 Q 80 50, 80 90"
        stroke="#DC2626"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />

      {/* Electromagnetic field lines - horizontal */}
      <path
        d="M 10 20 Q 50 20, 90 20"
        stroke="#B91C1C"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 10 35 Q 50 35, 90 35"
        stroke="#B91C1C"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 10 50 Q 50 50, 90 50"
        stroke="#B91C1C"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M 10 65 Q 50 65, 90 65"
        stroke="#B91C1C"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 10 80 Q 50 80, 90 80"
        stroke="#B91C1C"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />

      {/* Central disruption point */}
      <circle cx="50" cy="50" r="8" fill="url(#emf-grad)" opacity="0.9" />
      <circle cx="50" cy="50" r="5" fill="#DC2626" />

      {/* Disruption waves emanating from center */}
      <circle
        cx="50"
        cy="50"
        r="15"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
        strokeDasharray="3,3"
      />
      <circle
        cx="50"
        cy="50"
        r="25"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
        strokeDasharray="3,3"
      />
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="#DC2626"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        strokeDasharray="3,3"
      />

      {/* Warning arrows pointing inward */}
      <polygon
        points="15,50 20,47 20,53"
        fill="#DC2626"
        opacity="0.8"
      />
      <polygon
        points="85,50 80,47 80,53"
        fill="#DC2626"
        opacity="0.8"
      />
      <polygon
        points="50,15 47,20 53,20"
        fill="#DC2626"
        opacity="0.8"
      />
      <polygon
        points="50,85 47,80 53,80"
        fill="#DC2626"
        opacity="0.8"
      />
    </svg>
  );
}

