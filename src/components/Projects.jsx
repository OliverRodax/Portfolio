import { projects, smallStuff, liveSites, profile } from "../data/content";
import { GithubIcon, LockIcon, ExternalIcon } from "./Icons";
import Reveal from "./Reveal";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section section--tint" id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="section-label">Selected work</p>
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
              delay={(i % 3) * 70}
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

              {p.note && <p className="pj__note">{p.note}</p>}

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
                  <ExternalIcon />
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
          <h3 className="pj__small-title section-label">Running live</h3>

          <ul className="pj__small-list">
            {liveSites.map((s) => (
              <li key={s.host}>
                <a
                  href={`https://${s.host}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="pj__small-name">{s.name}</span>
                  <em className="pj__small-lang">{s.host}</em>
                </a>
                <p className="pj__small-note">{s.note}</p>
              </li>
            ))}
          </ul>

          <h3 className="pj__small-title section-label pj__small-gap">Smaller things</h3>

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
            <GithubIcon size={16} />
            All of it on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
