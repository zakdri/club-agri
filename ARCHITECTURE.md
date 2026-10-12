# Club AGRI — Architecture

## Scope

Independent static website at `D:\Club Agri`. FOS-Agri is a read-only design reference. Do not edit its site or add the Club link until the client asks after completion.

Phase 1 contains a complete homepage for design/content review and nine secondary pages with a translated title, shared header and footer only. Their editorial bodies remain empty until homepage approval.

## Technology

The homepage migrated to React 19.3 at the user's explicit request on 2026-10-12. React and React DOM provide shared components, state and hydration; esbuild compiles JSX at build time. The output remains static, with no backend, database, registration, payment or booking system. Relative paths support GitHub Pages subdirectory hosting and opening index.html directly. No runtime CDN is required.

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
src/club.jsx                React homepage and reusable header/footer/page shell
src/language.jsx            Shared translation context and bidi-safe text
src/motion.jsx              Accessible reveal, counter and scrolling helpers
src/video-background.jsx    Viewport-aware, muted video without visible controls
src/main.jsx                Hydrates the prerendered homepage
assets/club-react.js         Generated production bundle, do not edit manually
assets/homepage.css          Homepage-only styles, videos and timeline
assets/videos/              Supplied hero and football background videos
assets/club-view.js          Retained static renderer for empty secondary pages
assets/club-app.js           Retained behavior for empty secondary pages
assets/club-styles.css       Independent responsive visual system
assets/images/              Local photographs, documented provenance
scripts/build-pages.cjs     React prerender, bundle and static HTML generation
scripts/serve.cjs           Local preview only; not a production backend
docs/CONTENT_REVIEW.md      Missing data and editorial/translation validation
docs/MEDIA_SOURCES.md       Photo origin and publication requirements
qa/                         Local verification evidence (ignored by Git)
```

## Data and rendering

Each item has one stable ID and explicit French, Arabic and Amazigh labels/content. There are no independent language-specific item arrays and no French translation fallback. Brand and pack names remain unchanged.

The Node build prerenders complete French homepage HTML from the same React component tree used in the browser. React hydrates that tree and updates language/UI state without replacing the page or restarting video elements on language changes. Images, timeline, statistics and all 14 activities remain available without JavaScript. Secondary pages still use the retained static renderer; their generated files have no editorial changes.

Menu routes, filters, packs, schools and media come from the shared data file. Edit source files, then run `node scripts/build-pages.cjs`; do not hand-edit generated HTML.

## Languages and accessibility

French `fr` and Amazigh `zgh` use LTR. Arabic `ar` uses RTL with logical CSS properties. Numbers are isolated in LTR bdi elements. Every user-facing control and accessibility label is translated. Store language under the Club-specific localStorage key `club-agri.language`.

Use native dialog elements for menu/gallery, visible keyboard focus, minimum 44px targets, semantic controls and reduced-motion support. No invisible global search triggers.

## Visual direction

White backgrounds, deep green for FOS-Agri filiation, teal for primary actions, coral and pale green as secondary accents. Typography uses Poppins, Tajawal and Noto Sans Tifinagh stored locally. Hero and packs use user-supplied video with dark overlays for readable text; the entrance photograph is the hero fallback. No unofficial Club emblem is invented. Homepage effects use native browser animations with reduced-motion support.

## Approval and publication

All pages are noindex during review. The user requested a GitHub Pages client preview and confirmed permission to publish the current photos/videos on 2026-10-12. Only generated HTML and required assets enter the Pages deployment artifact. No external registration or invented prices/documents. Actualities are absent until real entries are provided. Secondary pages stay empty. Contact information, future legal pages and Arabic/Amazigh translations still require review before a final production release.

## Commands

`npm ci` installs the three approved packages using the lockfile.

`node scripts/build-pages.cjs` generates the ten pages and bundles the React homepage. `npm run build` invokes it.

`node scripts/serve.cjs 4180` starts an optional localhost preview. The site also opens directly using index.html; no server is necessary for normal use.

Keep commits focused and summarize changed files. Stop after homepage review delivery until the client validates content and visual direction.
