import { skills } from "../data/content";
import { Doodle } from "./Doodles";
import Reveal from "./Reveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal className="sk__head">
          <p className="eyebrow">what I know</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-intro">
            The languages, tools and hardware I have worked with so far, from
            school and from my own projects.
          </p>
        </Reveal>

        <div className="sk__grid">
          {skills.map((group, i) => (
            <Reveal className="sk__card" key={group.group} delay={i * 70}>
              <div className="sk__card-head">
                <span className="sk__icon">
                  <Doodle kind={group.doodle} size={22} />
                </span>
                <h3>{group.group}</h3>
              </div>

              <ul className="sk__items">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="sk__name">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
