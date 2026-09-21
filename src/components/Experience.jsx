import { experience, education } from "../data/content";
import Reveal from "./Reveal";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="xp__head">
          <p className="eyebrow">internships</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-intro">
            Three one-month internships so far. Two at Hamburger GmbH in Pitten
            and one at IAGNG Gas Analytics in Weikersdorf. The second time at
            Hamburger was meant to be IT support again and turned into a month
            of writing Python.
          </p>
        </Reveal>

        <ol className="xp__list">
          {experience.map((job, i) => (
            <Reveal as="li" className="xp__item" key={job.year + job.org} delay={i * 90}>
              <div className="xp__marker" aria-hidden="true">
                <span className="xp__bead" />
              </div>

              <div className="xp__body">
                <div className="xp__meta">
                  <span className="xp__year">{job.year}</span>
                  <span className="xp__duration">{job.duration}</span>
                </div>

                <h3 className="xp__role">{job.role}</h3>
                <p className="xp__org">
                  {job.org} <span aria-hidden="true">·</span> {job.place}
                </p>

                <ul className="xp__points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <div className="xp__tags">
                  {job.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="edu" delay={120}>
          <h3 className="edu__title">
            <span className="hand">and school</span>
          </h3>

          <ul className="edu__list">
            {education.map((e) => (
              <li key={e.org}>
                <span className="edu__year">{e.year}</span>
                <div>
                  <strong>{e.title}</strong>
                  <span className="edu__org">{e.org}</span>
                  {e.note && <p className="edu__note">{e.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
