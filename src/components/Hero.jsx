import { profile, currentAge } from "../data/content";
import { mailtoHref } from "../lib/contact";
import { Squiggle, Star, Arrow } from "./Doodles";
import "./Hero.css";

export default function Hero() {
  const age = currentAge();

  return (
    <section className="hero" id="top">
      <div className="hero__inner wrap">
        <div className="hero__text">
          <p className="hero__hi">
            <Star size={15} className="hero__star" />
            Hi, I&apos;m
          </p>

          <h1 className="hero__name">
            Oliver
            <br />
            Rodax
            <Squiggle className="hero__squiggle" width={230} />
          </h1>

          <p className="hero__role">
            {age}, {profile.role} at{" "}
            <span className="marker">{profile.school}</span>, based in{" "}
            {profile.location}.
          </p>

          <p className="hero__tagline hand">&ldquo;{profile.tagline}&rdquo;</p>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="btn" href="#projects">
              See what I&apos;ve built
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 4.5v15M12 19.5 5.5 13M12 19.5 18.5 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="btn btn--ghost" href={mailtoHref()}>
              Say hello
            </a>
          </div>
        </div>

        {/* A workbench sticky-note. The "photo" slot, minus the photo. */}
        <aside className="hero__card" aria-label="Quick facts">
          <span className="hero__tape hero__tape--l" aria-hidden="true" />
          <span className="hero__tape hero__tape--r" aria-hidden="true" />

          <p className="hero__card-title hand">currently</p>

          <ul className="hero__facts">
            <li>
              <span className="hero__dot" aria-hidden="true" />
              <div>
                <strong>Studying</strong>
                <span>Electronics &amp; technical informatics, HTL Mödling</span>
              </div>
            </li>
            <li>
              <span className="hero__dot hero__dot--clay" aria-hidden="true" />
              <div>
                <strong>Building</strong>
                <span>Project Alpine, a smartwatch with my own PCB</span>
              </div>
            </li>
            <li>
              <span className="hero__dot hero__dot--honey" aria-hidden="true" />
              <div>
                <strong>Looking for</strong>
                <span>An internship in embedded or software development</span>
              </div>
            </li>
          </ul>

          <p className="hero__card-foot">
            3 internships · 30+ repos · 2 smartwatches
          </p>
        </aside>

        <Arrow className="hero__arrow" />
      </div>
    </section>
  );
}
