import { useEffect, useRef, useState } from "react";

/* Fades a block in the first time it scrolls into view.
   Respects prefers-reduced-motion via the CSS in index.css. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);
  // Without IntersectionObserver there is nothing to wait for, so start visible.
  const [shown, setShown] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
