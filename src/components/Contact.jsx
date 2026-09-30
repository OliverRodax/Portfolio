import { profile } from "../data/content";
import { mailtoHref } from "../lib/contact";
import { GithubIcon, MailIcon } from "./Icons";
import Reveal from "./Reveal";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section section--tint ct" id="contact">
      <div className="wrap">
        <Reveal className="ct__inner">
          <div className="ct__lead">
            <p className="section-label">Contact</p>
            <h2 className="ct__title">
              Looking for an <span className="ct__accent">internship</span>
            </h2>
            <p className="ct__text">
              In embedded systems or software development. If you want to know
              more about any of the projects here, or you have a question,
              write me. I answer every email.
            </p>
            <p className="ct__note">German or English, both fine.</p>
          </div>

          <div className="ct__actions">
            <a className="btn" href={mailtoHref()}>
              <MailIcon />
              {profile.email}
            </a>

            <a
              className="btn btn--ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon />
              @{profile.githubHandle}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
