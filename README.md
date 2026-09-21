# Oliver Rodax — Portfolio

A hand-built personal site. React + Vite, plain CSS, no UI framework.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Editing your content

**Everything you'd want to change lives in [`src/data/content.js`](src/data/content.js).**
Your name, intro, internships, education, projects, skills and contact details are
all plain JavaScript objects in that one file. You should never need to touch a
component to update a fact.

A few notes on that file:

- Your age on the site is **computed from `BIRTHDAY`**, so it will never go stale.
- `projects` is the featured list, shown as cards in the order you write them.
  A project with `url: null` is treated as a private repository: it still gets a
  full card, but with a "Private repository" marker instead of a GitHub link.
- `smallStuff` is the drawer underneath — school exercises, experiments and
  abandoned things. Each entry takes an optional one-line `note`.
- `skills` groups are plain lists of strings, with no ranking attached. Add or
  remove entries as you pick things up.

## What's deliberately *not* on this site

Your street address and phone number. A portfolio is a public, scrapeable page,
so it carries your email and GitHub only. Share the rest directly with people
who ask.

## The email address

It lives base64-encoded in [`src/lib/contact.js`](src/lib/contact.js) and is decoded
in the browser at runtime, so the plain address is **not** in the HTML or the
JavaScript bundle. The encoded form has no `@` in it, which means the standard
harvesting trick — fetch the page over plain HTTP and run an email regex across
it — finds nothing.

To verify after a build:

```bash
grep -rhoE "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" dist/   # expect: no output
```

To change the address:

```bash
node -e "console.log(Buffer.from('new@address.com').toString('base64'))"
```

and paste the result into `ENCODED` in that file.

This stops bulk harvesters, not a scraper driving a real browser — once React
renders, the address is in the DOM. That's a deliberate trade: the address stays
visible, selectable and readable by a screen reader for the people who are
actually meant to contact you.

## Structure

```
src/
  data/content.js        all of your actual content
  components/
    Nav.jsx              sticky nav with scroll-spy
    Hero.jsx             name, tagline, the pinned "currently" note
    About.jsx            prose + languages
    Experience.jsx       internship timeline + education
    Projects.jsx         project cards + the smaller-things drawer
    Skills.jsx           four skill groups with honest levels
    Contact.jsx          email + GitHub
    Footer.jsx
    Reveal.jsx           fade-in-on-scroll wrapper
    Doodles.jsx          the hand-drawn SVG bits
  index.css              design tokens and base styles
```

## Theming

Colours are CSS custom properties on `:root` in `src/index.css`. The site is
light-only by design — there is no dark mode and no theme toggle.

The teal is the same one your CV has been using — that was on purpose.
