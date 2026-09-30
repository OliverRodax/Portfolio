import { profile, currentAge } from "../data/content";
import { mailtoHref } from "../lib/contact";
import { ArrowIcon } from "./Icons";
import "./Hero.css";

/* Three things a reader is looking for in the first screen: who this is,
   what they do, and whether they are available. In that order, no detours. */
const currently = [
  {
    label: "Studying",
    value: "Electronics & technical informatics, HTL Mödling",
  },
  {
    label: "Building",
    value: "Project Alpine — a smartwatch on a PCB of my own design",
  },
  {
    label: "Looking for",
    value: "An internship in embedded or software development",
  },
];

export default function Hero() {
  const age = currentAge();

  return (
    <section className="hero" id="top">
      <div className="hero__inner wrap">
        <h1 className="hero__name">{profile.name}</h1>

        <p className="hero__role">{profile.role}</p>

        <p className="hero__place meta">
          {profile.school} · {profile.location} · {age}
        </p>

        <p className="hero__intro">{profile.intro}</p>

        <div className="hero__actions">
          <a className="btn" href="#projects">
            View projects
            <ArrowIcon dir="down" />
          </a>
          <a className="btn btn--ghost" href={mailtoHref()}>
            Get in touch
            <ArrowIcon />
          </a>
        </div>

        <div className="hero__now">
          <p className="section-label">Currently</p>

          <dl className="hero__now-grid">
            {currently.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <p className="hero__stats">
            Three internships · 30+ repositories · Two smartwatches
          </p>
        </div>
      </div>
    </section>
  );
}
