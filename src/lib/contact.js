// ---------------------------------------------------------------
// Email address handling, kept away from bulk scrapers.
//
// The address is stored base64-encoded so the literal string never appears
// in the source or in the built JavaScript bundle. Crucially, the encoded
// form contains no "@", so the usual harvesting approach — fetch the page
// or the bundle over plain HTTP and run an email regex over the text —
// comes back with nothing.
//
// This is not encryption and it isn't meant to be. A scraper that runs a
// real browser will still see the address once React renders it. The point
// is to be a poor target for the cheap, high-volume harvesters, while
// keeping the address visible, selectable and readable by a screen reader
// for the humans who are actually meant to get in touch.
//
// To change the address:
//   node -e "console.log(Buffer.from('new@address.com').toString('base64'))"
// and paste the result below.
// ---------------------------------------------------------------

const ENCODED = "b2xpdmVyLnJvZGF4QGdtYWlsLmNvbQ==";

let cached = null;

export function emailAddress() {
  if (cached !== null) return cached;
  try {
    cached = atob(ENCODED);
  } catch {
    // Never render a half-broken address if atob is unavailable.
    cached = "";
  }
  return cached;
}

export function mailtoHref(subject) {
  const address = emailAddress();
  if (!address) return undefined;
  return subject
    ? `mailto:${address}?subject=${encodeURIComponent(subject)}`
    : `mailto:${address}`;
}
