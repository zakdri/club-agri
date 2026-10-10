# Club AGRI — Architecture

## Scope

Independent static website at `D:\Club Agri`. FOS-Agri is a read-only design reference. Do not edit its site or add the Club link until the client asks after completion.

Phase 1 contains a complete homepage for design/content review and nine secondary pages with a translated title, shared header and footer only. Their editorial bodies remain empty until homepage approval.

## Technology

Plain HTML, CSS and JavaScript. No dependencies, framework, backend, database, registration, payment or booking system. Relative paths support GitHub Pages subdirectory hosting and opening index.html directly.

## Files

```text
index.html                  Generated complete homepage
le-club.html                Empty secondary page
packs.html                  Empty secondary page
prestations.html            Empty secondary page
cours-plannings.html        Empty secondary page
experiences.html            Empty secondary page
ecoles-enfants.html         Empty secondary page
galerie.html                Empty secondary page
reglements.html             Empty secondary page
adhesion.html               Empty secondary page
assets/club-data.js          Shared IDs, FR/AR/ZGH content, activity metadata
assets/club-view.js          Shared pure HTML renderer; runs in Node and browser
assets/club-app.js           Language, dialogs, filters, pack selection, scrolling
assets/club-styles.css       Independent responsive visual system
assets/images/              Local photographs, documented provenance
scripts/build-pages.cjs     Dependency-free static HTML generation
scripts/serve.cjs           Local preview only; not a production backend
docs/CONTENT_REVIEW.md      Missing data and editorial/translation validation
docs/MEDIA_SOURCES.md       Photo origin and publication requirements
qa/                         Local verification evidence (ignored by Git)
```

## Data and rendering

Each item has one stable ID and explicit French, Arabic and Amazigh labels/content. There are no independent language-specific item arrays and no French translation fallback. Brand and pack names remain unchanged.

The Node build generates complete French HTML, including visible homepage content, for progressive enhancement. Browser JavaScript uses the same renderer for live language switching and UI states. Images and content remain available without JavaScript; the no-script activity list includes all items.

Menu routes, filters, packs, schools and media come from the shared data file. Edit source files, then run `node scripts/build-pages.cjs`; do not hand-edit generated HTML.

## Languages and accessibility

French `fr` and Amazigh `zgh` use LTR. Arabic `ar` uses RTL with logical CSS properties. Numbers are isolated in LTR bdi elements. Every user-facing control and accessibility label is translated. Store language under the Club-specific localStorage key `club-agri.language`.

Use native dialog elements for menu/gallery, visible keyboard focus, minimum 44px targets, semantic controls and reduced-motion support. No invisible global search triggers.

## Visual direction

White backgrounds, deep green for FOS-Agri filiation, teal for primary actions, coral and pale green as secondary accents. Typography uses Poppins, Tajawal and Noto Sans Tifinagh stored locally. Hero uses an authentic entrance photo; no unofficial Club emblem is invented.

## Approval and publication

All pages are noindex during review. No public deployment, no external registration, no invented prices or documents. Actualities are absent until real entries are provided. Secondary pages stay empty. Contact information and future legal pages require client input. Media rights and Arabic/Amazigh translations require review before public publication.

## Commands

`node scripts/build-pages.cjs` generates the ten pages.

`node scripts/serve.cjs 4180` starts an optional localhost preview. The site also opens directly using index.html; no server is necessary for normal use.

Keep commits focused and summarize changed files. Stop after homepage review delivery until the client validates content and visual direction.
