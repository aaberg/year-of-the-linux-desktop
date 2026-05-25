# AGENTS.md

## Repo Shape

- This is a static presentation repo, not an app package; there is no `package.json`, build step, test runner, or dependency install.
- The deck entrypoint is `Presentation/index.html`; open it directly in a browser to review slides.
- Presentation behavior lives in `Presentation/slides.js`; styling and the 16:10 slide canvas live in `Presentation/styles.css`.
- `year-of-the-linux-desktop-outline.md` is the source outline, but the live deck has evolved beyond it.

## Slide Conventions

- Keep the main talk content in Norwegian, but preserve the talk title as English: `Year of the Linux Desktop?`.
- Slides are plain `<section class="slide">` elements; order in `Presentation/index.html` is the slide order.
- Navigation is driven by counting `.slide` elements in `slides.js`; if adding/removing slides, update the static footer fallback count in `Presentation/index.html` too.
- The deck is designed for a normal 16:10 screen via `.deck { aspect-ratio: 16 / 10; }`; avoid layouts that only work on 16:9.
- Keep slide text sparse and presentation-oriented; use speaker phrasing, not paragraph-heavy prose.

## Assets

- The Sonat footer logo is referenced from `../resources/sonat-logo-footer.svg` because the deck is under `Presentation/`.
- Slide-specific images currently live under `Presentation/resources/`, including filenames with spaces; keep quoted paths intact in HTML/CSS.
- Current image assets include `Linux cup.jpeg`, `Lenovo X1 Carbon.png`, `Screenshot Fedora.png`, and `Screenshot after a day of use.png`.

## Verification

- Run `node --check Presentation/slides.js` after JavaScript edits.
- For HTML/CSS changes, verify visually by opening `Presentation/index.html`; there is no automated renderer or linter in this repo.
