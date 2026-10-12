# Verification — 2026-10-10

## React homepage update — 2026-10-12

- React 19.3 homepage build with complete prerendered HTML passes. npm dependency audit reports no vulnerabilities.
- FR/AR/ZGH at 360, 390, 768 and 1440 px: no horizontal overflow or clipped visible headings, text or controls. All visible interactive targets meet 44px with a 0.01px browser rounding tolerance. Fixed homepage logo height and a short Amazigh desktop-navigation link width.
- Three-language interactions pass: five filters, six/fourteen activity expansion, pack selection/clear, ten-link translated menu, Escape dismissal/focus restoration, gallery keyboard navigation and RTL arrow order.
- Both supplied videos decode and play in Chromium. Pause/restart, off-screen pause, inline muted playback and translated labels pass in all languages. Numeric statistics/timeline remain LTR-isolated in Arabic.
- Reduced-motion reload: no video source is requested automatically and no animation runs. Save-data fallback and explicit playback override pass.
- HTTP MP4 byte ranges return 206 with the correct content type and length; invalid ranges return 416.
- JavaScript disabled at 390px: complete statistics, three timeline entries, all fourteen activities, photo backgrounds and no overflow. Direct-file HTML works with and without JavaScript; React language switching works from file access.
- Fresh browser checks record no JavaScript exceptions, hydration errors or missing media. The local favicon request is suppressed on the homepage.
- Nine secondary HTML pages have no Git content diff and retain their noindex/title-only scope.

Checks and current screenshots are local in ignored qa/ and output/playwright/. Original DOCX/MP4 inputs are unchanged. Native-browser tests do not constitute professional Arabic/Amazigh review or confirmation of publication rights. The earlier checks below describe the pre-migration implementation.

## Automated browser checks

Bundled Playwright/Chromium was used without installing project dependencies.

- Homepage: French, Arabic and Amazigh at widths 360, 390, 768 and 1440 px (12 layouts).
- No horizontal overflow, visible text clipping, missing loaded image or JavaScript exception in those layouts.
- Navigation dialog has the same ten IDs in all languages.
- Arabic layout uses RTL while numeric statistics remain LTR-isolated.
- Nine secondary routes checked in all three languages (27 combinations): title only in main, no article, paragraph or form, and noindex metadata.
- Business filter returns restaurant, motel and meeting rooms. Expand/collapse switches between 6 and 14 activities.
- Pack selection and clearing, native menu dialog, gallery next control, Escape close and focus restoration checked.
- Header/home anchors animate for 420 ms; browser observation recorded 26 distinct scroll positions.
- Reduced-motion preference skips scroll animation.
- Direct file access with JavaScript disabled renders the homepage and all 14 activities without overflow at 390 px.
- Source JavaScript syntax checks pass; static build produces exactly ten pages.

Screenshots and detailed machine reports are stored locally in qa/ and intentionally ignored by Git. These checks establish rendering and interaction behavior, not linguistic approval or publication rights.

## Review boundaries

Homepage is ready for client review, not a published production site. Arabic and Amazigh copy needs linguistic review. Source facts, official identity, media permissions, Club contact information and pack conditions need confirmation as listed in CONTENT_REVIEW.md.

No FOS-Agri file was edited. No remote repository or public deployment was created.
