import { skills } from "../data/content";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="section-label">Toolbox</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-intro">
            The languages, tools and hardware I have worked with so far, from
            school and from my own projects.
          </p>
        </Reveal>

        <div className="sk__grid">
          {skills.map((group, i) => (
            <Reveal className="sk__card" key={group.group} delay={i * 60}>
              <div className="sk__card-head">
                <Icon kind={group.icon} size={18} className="sk__icon" />
                <h3>{group.group}</h3>
              </div>

              <ul className="sk__items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
