import { useEffect, useState } from "react";
import { nav, profile } from "../data/content";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is currently in the middle of the screen.
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--stuck" : ""}`}>
      <div className="nav__inner wrap">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true">
            OR
          </span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav__icon nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`burger ${open ? "burger--x" : ""}`} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>
    </header>
  );
}
