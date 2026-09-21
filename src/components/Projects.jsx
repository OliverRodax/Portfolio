import { projects, smallStuff, profile } from "../data/content";
import Reveal from "./Reveal";
import "./Projects.css";

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49l-.01-1.9c-2.84.62-3.44-1.2-3.44-1.2-.47-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.11 2.99.85.09-.66.36-1.11.65-1.37-2.27-.26-4.66-1.14-4.66-5.06 0-1.12.4-2.03 1.05-2.75-.1-.26-.45-1.3.1-2.71 0 0 .86-.28 2.81 1.05a9.7 9.7 0 0 1 5.12 0c1.95-1.33 2.81-1.05 2.81-1.05.56 1.41.21 2.45.1 2.71.66.72 1.05 1.63 1.05 2.75 0 3.93-2.39 4.8-4.67 5.05.37.32.7.94.7 1.9l-.01 2.81c0 .27.18.6.7.49A10.2 10.2 0 0 0 12 1.8Z" />
    </svg>
  );
}

function LockIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4.8"
        y="10.4"
        width="14.4"
        height="9.6"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M8.2 10.4V7.6a3.8 3.8 0 0 1 7.6 0v2.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section section--tint" id="projects">
      <div className="wrap">
        <Reveal className="pj__head">
          <p className="eyebrow">what I built</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-intro">
            These are the projects I would want to talk about, in roughly that
            order. Three of them are private repositories, either company work
            or not finished yet, so there is no link on those.
          </p>
        </Reveal>

        <div className="pj__grid">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              className="pj__card"
              key={p.name}
              delay={(i % 3) * 80}
            >
              <h3 className="pj__name">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer noopener">
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </h3>

              <p className="pj__blurb">{p.blurb}</p>

              {p.note && <p className="pj__note hand">{p.note}</p>}

              <div className="pj__stack">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>

              {p.url ? (
                <a
                  className="pj__link"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubIcon />
                  {p.repo}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ) : (
                <p className="pj__link pj__link--private">
                  <LockIcon />
                  Private repository
                </p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="pj__small">
          <h3 className="pj__small-title">
            <span className="hand">smaller things</span>
          </h3>

          <ul className="pj__small-list">
            {smallStuff.map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noreferrer noopener">
                  <span className="pj__small-name">{s.name}</span>
                  <em className="pj__small-lang">{s.lang}</em>
                </a>
                {s.note && <p className="pj__small-note">{s.note}</p>}
              </li>
            ))}
          </ul>

          <a
            className="btn btn--ghost pj__all"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon size={17} />
            All of it on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
