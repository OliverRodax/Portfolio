import { profile, languages } from "../data/content";
import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  return (
    <section className="section section--tint" id="about">
      <div className="wrap about">
        <Reveal className="section-head">
          <p className="section-label">About</p>
          <h2 className="section-title">Embedded systems, mostly</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__prose" delay={60}>
            {profile.blurb.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          <Reveal className="about__side" delay={120}>
            <h3 className="about__side-title section-label">Languages</h3>
            <ul className="about__langs">
              {languages.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}</strong>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
