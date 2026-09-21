/* Hand-drawn odds and ends. All inline SVG — no icon library,
   because half the charm is that the lines aren't perfectly straight. */

export function Squiggle({ className = "", width = 180 }) {
  return (
    <svg
      className={className}
      width={width}
      height="14"
      viewBox="0 0 180 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 9C22 3 26 11 46 8s24-7 44-3 26 9 46 5 22-6 40-2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Star({ size = 18, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2.5c.6 4.6 2.2 6.6 7 7.4-4.7.9-6.3 2.9-7 7.5-.7-4.6-2.3-6.6-7-7.5 4.8-.8 6.4-2.8 7-7.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Arrow({ className = "" }) {
  return (
    <svg
      className={className}
      width="58"
      height="46"
      viewBox="0 0 58 46"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 3c9 16 20 28 46 33"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M38 32c5 1.7 9 3 12 4-2 2-4 5-6 9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Little category marks for the skill cards. */
export function Doodle({ kind, size = 26, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    className,
  };

  if (kind === "code")
    return (
      <svg {...common}>
        <path d="M8.5 7.5 3.5 12l5 4.5M15.5 7.5 20.5 12l-5 4.5M13.5 4.5l-3 15" />
      </svg>
    );

  if (kind === "globe")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.6" />
        <path d="M3.5 12h17M12 3.4c2.4 2.6 3.5 5.6 3.5 8.6s-1.1 6-3.5 8.6c-2.4-2.6-3.5-5.6-3.5-8.6s1.1-6 3.5-8.6Z" />
      </svg>
    );

  if (kind === "chip")
    return (
      <svg {...common}>
        <rect x="7" y="7" width="10" height="10" rx="1.6" />
        <path d="M10 3.5v3M14 3.5v3M10 17.5v3M14 17.5v3M3.5 10h3M3.5 14h3M17.5 10h3M17.5 14h3" />
      </svg>
    );

  return (
    <svg {...common}>
      <path d="M14.5 5.5a3.8 3.8 0 0 0 4.9 4.9l-8 8a2.6 2.6 0 1 1-3.7-3.7l8-8a3.8 3.8 0 0 0-1.2-1.2Z" />
    </svg>
  );
}

/* Wavy divider between the darker and lighter bands. */
export function WaveDivider({ flip = false }) {
  return (
    <svg
      className={`wave ${flip ? "wave--flip" : ""}`}
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 26c140-22 260 16 420 12s250-30 410-24 270 32 400 24 210-22 210-22V48H0Z" />
    </svg>
  );
}
