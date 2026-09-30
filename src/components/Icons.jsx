/* A small set of line icons, all on the same 24px grid with the same
   stroke weight, so they read as one family rather than as decoration. */

export function Icon({ kind, size = 20, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
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
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.4 2.6 3.5 5.5 3.5 8.5s-1.1 5.9-3.5 8.5c-2.4-2.6-3.5-5.5-3.5-8.5s1.1-5.9 3.5-8.5Z" />
      </svg>
    );

  if (kind === "chip")
    return (
      <svg {...common}>
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M10 3.5v3M14 3.5v3M10 17.5v3M14 17.5v3M3.5 10h3M3.5 14h3M17.5 10h3M17.5 14h3" />
      </svg>
    );

  return (
    <svg {...common}>
      <path d="M14.5 5.5a3.8 3.8 0 0 0 4.9 4.9l-8 8a2.6 2.6 0 1 1-3.7-3.7l8-8a3.8 3.8 0 0 0-1.2-1.2Z" />
    </svg>
  );
}

export function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49l-.01-1.9c-2.84.62-3.44-1.2-3.44-1.2-.47-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.11 2.99.85.09-.66.36-1.11.65-1.37-2.27-.26-4.66-1.14-4.66-5.06 0-1.12.4-2.03 1.05-2.75-.1-.26-.45-1.3.1-2.71 0 0 .86-.28 2.81 1.05a9.7 9.7 0 0 1 5.12 0c1.95-1.33 2.81-1.05 2.81-1.05.56 1.41.21 2.45.1 2.71.66.72 1.05 1.63 1.05 2.75 0 3.93-2.39 4.8-4.67 5.05.37.32.7.94.7 1.9l-.01 2.81c0 .27.18.6.7.49A10.2 10.2 0 0 0 12 1.8Z" />
    </svg>
  );
}

export function MailIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m3.8 6.6 8.2 5.8 8.2-5.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon({ size = 14, dir = "right" }) {
  const d =
    dir === "down"
      ? "M12 4.5v15M12 19.5 5.5 13M12 19.5 18.5 13"
      : "M4.5 12h15M13 5.5 19.5 12 13 18.5";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LockIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8.3 10.5V7.7a3.7 3.7 0 0 1 7.4 0v2.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
