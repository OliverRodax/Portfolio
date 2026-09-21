import { skills } from "../data/content";
import { Doodle } from "./Doodles";
import Reveal from "./Reveal";
import "./Skills.css";

const LEVEL_LABEL = {
  "hands-on": "hands-on",
  comfortable: "comfortable",
  learning: "learning",
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal className="sk__head">
          <p className="eyebrow">what I know</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-intro">
            Every item says how far I actually got with it. Learning means I
            have built something with it and still keep the documentation open
            while I work.
          </p>
        </Reveal>

        <div className="sk__legend" aria-hidden="true">
          <span className="sk__key sk__key--hands">hands-on</span>
          <span className="sk__key sk__key--comf">comfortable</span>
          <span className="sk__key sk__key--learn">learning</span>
        </div>

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
                  <li key={item.name} className={`sk--${item.level.replace(/\s/g, "")}`}>
                    <span className="sk__name">{item.name}</span>
                    <span className="sk__level">{LEVEL_LABEL[item.level]}</span>
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
