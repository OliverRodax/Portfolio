import { profile } from "../data/content";
import { mailtoHref } from "../lib/contact";
import Impressum from "./Impressum";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="wrap ft__inner">
        <p className="ft__meta">
          © {year} {profile.name}
        </p>

        <p className="ft__meta">
          <a href={profile.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>{" "}
          · <a href={mailtoHref()}>Email</a> · <Impressum />
        </p>
      </div>
    </footer>
  );
}
