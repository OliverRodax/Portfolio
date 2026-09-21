import { profile, languages } from "../data/content";
import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  return (
    <section className="section section--tint" id="about">
      <div className="wrap about">
        <Reveal className="about__head">
          <p className="eyebrow">about me</p>
          <h2 className="section-title">
            I build <span className="marker">embedded</span> things
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__prose" delay={80}>
            {profile.blurb.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          <Reveal className="about__side" delay={160}>
            <div className="about__box">
              <h3 className="about__box-title">Languages I speak</h3>
              <ul className="about__langs">
                {languages.map((l) => (
                  <li key={l.name}>
                    <strong>{l.name}</strong>
                    <span>{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
