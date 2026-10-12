# Club AGRI

Independent website for Club de l'Agriculture, Rabat. Current scope: homepage proposal in French, Arabic and Amazigh, with nine empty secondary pages.

Client preview: https://zakdri.github.io/club-agri/
Repository: https://github.com/zakdri/club-agri

All ten pages use React 19.3, with complete HTML prerendered for static hosting. The `.html` files are generated output, not the source implementation; React code lives in `src/`. Install build dependencies once with `npm ci`, then run `npm run build` and `npm run preview` for http://127.0.0.1:4180/. The generated site requires no production server or installed dependencies. Opening `index.html` directly remains supported.

Edit homepage React components in `src/`, shared content in `assets/club-data.js`, and homepage styling in `assets/homepage.css`. The existing charter remains in `assets/club-styles.css`. Run `node scripts/build-pages.cjs` (or `npm run build`) after source edits to refresh the HTML and `assets/club-react.js`; never edit that bundle by hand.

The hero plays the supplied Club AGRI video; the packs section plays the supplied football video. Both have direct sources with native muted autoplay and inline looping, including without JavaScript. There are no visible video controls or background photos, and neither clip is paused by viewport, connection or motion-preference checks. Playback resumes after returning to the tab or the first visitor gesture if a browser blocks autoplay. Browsers may still suspend hidden tabs or restrict autoplay independently of the website. Section animations use the browser's Web Animations API and IntersectionObserver and continue to respect reduced motion.

`npm run package` prepares `dist/` with only the generated pages and required assets. The GitHub Pages workflow builds and publishes that folder on a push to `main`. Project notes, the original Word brief, raw duplicate video inputs, and QA files are excluded from the website artifact. All pages retain `noindex` for client review.

The nine secondary pages use the same React Header, Footer, LanguageProvider and page shell as the homepage. `src/pages/empty-page.jsx` renders only their translated title until homepage approval. No editorial content is added. The legacy `assets/club-view.js` and `assets/club-app.js` are retired reference files; neither is used by the build or shipped in fresh deployments. See docs/HOMEPAGE_UPDATE.md for the brief comparison and verification.

Read ARCHITECTURE.md, AGENTS.md and docs/CONTENT_REVIEW.md before extending the project. The homepage content and graphic direction must be approved before secondary pages are developed.

Nothing in this project modifies the FOS-Agri website. Its Club button will be updated separately when this site is ready and published.
