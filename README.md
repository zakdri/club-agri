# Club AGRI

Independent website for Club de l'Agriculture, Rabat. Current scope: homepage proposal in French, Arabic and Amazigh, with nine empty secondary pages.

The homepage uses React 19.3, with complete HTML prerendered for static hosting. Install build dependencies once with `npm ci`, then run `npm run build` and `npm run preview` for http://127.0.0.1:4180/. The generated site requires no production server or installed dependencies. Opening `index.html` directly remains supported.

Edit homepage React components in `src/`, shared content in `assets/club-data.js`, and homepage styling in `assets/homepage.css`. The existing charter remains in `assets/club-styles.css`. Run `node scripts/build-pages.cjs` (or `npm run build`) after source edits to refresh the HTML and `assets/club-react.js`; never edit that bundle by hand.

The hero plays the supplied Club AGRI video; the packs section plays the supplied football video. Both are muted, loop inline, load on entering the viewport and pause off-screen. Translated pause/play controls remain available. Reduced motion, data-saving and slow connections use still images unless the visitor explicitly starts playback. Animations use the browser's Web Animations API and IntersectionObserver.

The nine secondary pages keep their existing static implementation and empty bodies. React Header, Footer, LanguageProvider and motion helpers are ready for their future migration after approval. See docs/HOMEPAGE_UPDATE.md for the brief comparison and verification.

Read ARCHITECTURE.md, AGENTS.md and docs/CONTENT_REVIEW.md before extending the project. The homepage content and graphic direction must be approved before secondary pages are developed.

Nothing in this project modifies the FOS-Agri website. Its Club button will be updated separately when this site is ready and published.
