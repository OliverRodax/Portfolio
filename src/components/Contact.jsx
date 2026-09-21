import { profile } from "../data/content";
import { mailtoHref } from "../lib/contact";
import { Squiggle, Star } from "./Doodles";
import Reveal from "./Reveal";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section section--tint ct" id="contact">
      <div className="wrap">
        <Reveal className="ct__card">
          <Star size={26} className="ct__star ct__star--1" />
          <Star size={16} className="ct__star ct__star--2" />

          <p className="eyebrow">get in touch</p>

          <h2 className="ct__title">
            Looking for an{" "}
            <span className="ct__underline">
              internship
              <Squiggle width={230} />
            </span>
          </h2>

          <p className="ct__text">
            In embedded systems or software development. If you want to know
            more about any of the projects here, or you have a question, write
            me. I answer every email.
          </p>

          <div className="ct__actions">
            <a className="btn" href={mailtoHref()}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect
                  x="2.8"
                  y="4.8"
                  width="18.4"
                  height="14.4"
                  rx="2.4"
                  stroke="currentColor"
                  strokeWidth="1.9"
                />
                <path
                  d="m3.6 6.6 8.4 6 8.4-6"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {profile.email}
            </a>

            <a
              className="btn btn--ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49l-.01-1.9c-2.84.62-3.44-1.2-3.44-1.2-.47-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.11 2.99.85.09-.66.36-1.11.65-1.37-2.27-.26-4.66-1.14-4.66-5.06 0-1.12.4-2.03 1.05-2.75-.1-.26-.45-1.3.1-2.71 0 0 .86-.28 2.81 1.05a9.7 9.7 0 0 1 5.12 0c1.95-1.33 2.81-1.05 2.81-1.05.56 1.41.21 2.45.1 2.71.66.72 1.05 1.63 1.05 2.75 0 3.93-2.39 4.8-4.67 5.05.37.32.7.94.7 1.9l-.01 2.81c0 .27.18.6.7.49A10.2 10.2 0 0 0 12 1.8Z" />
              </svg>
              @{profile.githubHandle}
            </a>
          </div>

          <p className="ct__ps hand">German or English, both fine.</p>
        </Reveal>
      </div>
    </section>
  );
}
