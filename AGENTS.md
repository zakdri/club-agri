# Club AGRI project instructions

Read README.md, ARCHITECTURE.md, docs/CONTENT_REVIEW.md and docs/MEDIA_SOURCES.md before editing.

Keep the project independent at D:\Club Agri. Never edit FOS-Agri as part of this project. Its eventual button link is a separate task after Club completion.

Use React for the homepage and shared future components, as explicitly requested on 2026-10-12. Keep the output static HTML/CSS/JavaScript with relative GitHub Pages-compatible paths. React, React DOM and esbuild are the approved dependencies. Do not add a backend, database, authentication, payments or booking.

Build only the homepage. The nine secondary pages retain their header, translated title and footer with no editorial content until explicit homepage approval.

Keep one shared item model with stable IDs and explicit FR/AR/ZGH translations, including nested content and accessibility labels. Arabic is RTL; isolate numeric/Latin sequences appropriately. Never use French fallback for newly visible Arabic/Amazigh content.

Do not invent prices, pack benefits, dates, contacts, PDFs or membership rules. Real photos require provenance and publication rights. Translations are drafts until client review.

Use apply_patch for source changes. Regenerate HTML using scripts/build-pages.cjs. Verify mobile/desktop and all languages, including touch targets, numeric direction and hidden dialog content. Make focused commits and list changed files after commits.
