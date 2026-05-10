export function SkylineLineArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 140" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="square">
        <path d="M0 130 H600" />
        <path d="M30 130 V90 H60 V130" />
        <path d="M70 130 V70 L82 56 L94 70 V130" />
        <path d="M110 130 V100 H140 V80 H160 V130" />
        {/* Burj Khalifa silhouette */}
        <path
          d="M300 130 L300 28 L304 14 L306 6 L308 14 L312 28 L312 130 Z"
          fill="currentColor"
          fillOpacity="0.06"
        />
        <path d="M300 130 L300 28 L304 14 L306 6 L308 14 L312 28 L312 130" />
        <path d="M286 130 V60 L300 60" />
        <path d="M326 130 V60 L312 60" />
        <path d="M340 130 V90 H370 V130" />
        <path d="M380 130 V70 H410 V130" />
        <path d="M430 130 V100 H460 V80 H480 V130" />
        <path d="M500 130 V90 H530 V130" />
        <path d="M540 130 V110 H570 V130" />
      </g>
    </svg>
  );
}

export function CourtLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 220" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1">
        <rect x="20" y="20" width="360" height="180" />
        <line x1="20" y1="110" x2="380" y2="110" />
        <line x1="200" y1="20" x2="200" y2="200" />
        <rect x="80" y="60" width="240" height="100" />
        <line x1="80" y1="110" x2="320" y2="110" />
      </g>
    </svg>
  );
}

export function MotionArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" fill="none" className={className} aria-hidden>
      <path
        d="M10 170 C 90 30, 280 20, 390 140"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeDasharray="4 6"
        className="draw-arc"
      />
    </svg>
  );
}

export function RacketCurve({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 280" fill="none" className={className} aria-hidden>
      <ellipse cx="120" cy="100" rx="92" ry="96" stroke="currentColor" strokeWidth="1.25" />
      <ellipse
        cx="120"
        cy="100"
        rx="78"
        ry="82"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.6"
      />
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.55">
        <line x1="44" y1="100" x2="196" y2="100" />
        <line x1="60" y1="50" x2="180" y2="50" />
        <line x1="60" y1="150" x2="180" y2="150" />
        <line x1="120" y1="6" x2="120" y2="194" />
        <line x1="80" y1="22" x2="80" y2="178" />
        <line x1="160" y1="22" x2="160" y2="178" />
      </g>
      <path d="M120 196 L120 270" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function StringPattern({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`string-pattern ${className}`} />;
}
