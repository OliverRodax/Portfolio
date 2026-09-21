import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { impressum } from "../data/content";
import { emailAddress, mailtoHref } from "../lib/contact";
import "./Impressum.css";

/* The Impressum opens as a modal from the footer, but it lives at
   #impressum so the link can be shared and opened directly. Using a native
   <dialog> means Escape, focus trapping and the backdrop come for free. */
export default function Impressum() {
  const ref = useRef(null);
  const [open, setOpen] = useState(
    () => typeof window !== "undefined" && window.location.hash === "#impressum",
  );

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === "#impressum");
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  const clearHash = () => {
    if (window.location.hash === "#impressum") {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  };

  // Escape closes a <dialog> natively, without going through any of our
  // handlers. These events put React back in step when that happens.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const onNativeClose = () => {
      setOpen(false);
      clearHash();
    };

    dialog.addEventListener("close", onNativeClose);
    dialog.addEventListener("cancel", onNativeClose);
    return () => {
      dialog.removeEventListener("close", onNativeClose);
      dialog.removeEventListener("cancel", onNativeClose);
    };
  }, []);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Both handlers drive the element directly rather than relying on the state
  // change alone. If anything ever closed the dialog without React noticing,
  // `open` would still be true and a state-only toggle would be a no-op that
  // leaves the trigger dead.
  const openDialog = (event) => {
    event.preventDefault();
    if (window.location.hash !== "#impressum") {
      window.history.pushState(null, "", "#impressum");
    }
    setOpen(true);
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
  };

  const close = () => {
    setOpen(false);
    const dialog = ref.current;
    if (dialog?.open) dialog.close();
    clearHash();
  };

  // The trigger sits inline in the footer paragraph, so it has to stay
  // phrasing content. The dialog is block content and is portalled to
  // <body>: nesting it in the <p> made the parser reparent it, which
  // detached the ref and silently broke every handler.
  const dialog = (
    <dialog
        ref={ref}
        className="imp"
        lang="de"
        aria-labelledby="impressum-title"
        onClick={(event) => {
          // A click on the dialog element itself is a click on the backdrop.
          if (event.target === ref.current) close();
        }}
      >
        <div className="imp__inner">
          <button
            type="button"
            className="imp__close"
            onClick={close}
            aria-label="Impressum schließen"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <p className="eyebrow">rechtliches</p>
          <h2 id="impressum-title" className="imp__title">
            Impressum
          </h2>
          <p className="imp__sub">
            Offenlegung gemäß § 25 Mediengesetz und Angaben gemäß § 5 E-Commerce-Gesetz
          </p>

          <dl className="imp__list">
            <div>
              <dt>Medieninhaber und Herausgeber</dt>
              <dd>{impressum.owner}</dd>
            </div>

            <div>
              <dt>Anschrift</dt>
              <dd>
                {impressum.street}
                <br />
                {impressum.city}
                <br />
                {impressum.country}
              </dd>
            </div>

            <div>
              <dt>Kontakt</dt>
              <dd>
                <a href={mailtoHref()}>{emailAddress()}</a>
              </dd>
            </div>

            <div>
              <dt>Für den Inhalt verantwortlich</dt>
              <dd>{impressum.contentResponsibility}</dd>
            </div>

            <div>
              <dt>Unternehmensgegenstand</dt>
              <dd>{impressum.purpose}</dd>
            </div>
          </dl>

          <h3 className="imp__h3">Haftung für Inhalte</h3>
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
            jedoch keine Gewähr übernommen werden.
          </p>

          <h3 className="imp__h3">Haftung für Links</h3>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich.
          </p>

          <h3 className="imp__h3">Urheberrecht</h3>
          <p>
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem
            österreichischen Urheberrecht. Der Quellcode der hier gezeigten
            Projekte steht unter den jeweils im Repository angegebenen
            Bedingungen.
          </p>

          <h3 className="imp__h3">Datenschutz</h3>
          <p>
            Diese Website verwendet keine Cookies, bindet keine externen
            Analyse- oder Tracking-Dienste ein und erhebt keine
            personenbezogenen Daten. Schriften werden von Google Fonts geladen,
            wobei die IP-Adresse an Google übertragen wird.
          </p>

          <button type="button" className="btn imp__done" onClick={close}>
            Schließen
          </button>
        </div>
    </dialog>
  );

  return (
    <>
      <a className="imp__trigger" href="#impressum" onClick={openDialog}>
        Impressum
      </a>
      {createPortal(dialog, document.body)}
    </>
  );
}
