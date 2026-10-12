# Homepage update 2026-10-12

## Continuous video playback correction

After reporting a hero still image and paused packs clip, the user explicitly requested video-only backgrounds and continuous playback for both clips. Removed the background img/poster elements and all viewport, connection and reduced-motion video gates. Both video tags now include direct src, autoplay, muted, loop, playsinline and preload attributes in the prerendered HTML. Native playback works without JavaScript; React adds retries on media readiness, returning to the tab, or visitor gestures if autoplay is blocked. Language changes preserve the same video nodes. Site CSS/bundle versions were bumped to avoid retaining the previous playback code in caches. Browser autoplay restrictions and hidden-tab suspension remain outside website control. Earlier entries below describe superseded implementations.

## Subsequent client-preview request

The user then requested removal of the visible video pause/play controls and a GitHub Pages link to show the client. Both controls are removed. Autoplay remains muted and viewport-aware; reduced-motion, save-data and slow-connection users receive still backgrounds. The user explicitly confirmed permission to publish the current photos and both videos. `.github/workflows/pages.yml` builds and publishes only the allowlisted `dist/` website artifact; local review notes and source inputs stay outside that artifact. Earlier descriptions below record the initial React migration.

## Requested changes

The user requested React/modern animation support, the supplied Club AGRI.mp4 in the hero, football.mp4 behind the packs section, and a homepage comparison against Proposition maquette club.docx. This explicit request supersedes the previous no-framework restriction. Club AGRI stays independent; no FOS-Agri files are touched.

## Comparison against the original Word brief

- Dynamic video hero: implemented with the supplied clip, a still fallback and translated pause/play controls. No automatic sound.
- Animated headline and section entrances: implemented with native browser animations; reduced motion disables them.
- Animated key figures: implemented for 8, 10+ and 40+, keeping final accessible values and no-JS content.
- Three-event timeline: now explicitly presents more than 40 years of history, complete renovation and inauguration in 2022, without inventing a founding date.
- Four lifestyle packs: retained equal-level cards, distinct colors and animated hover. Added the requested football background without creating unsupported benefits or prices.
- Activities: all fourteen equipment/service entries and five functional filters retained. Infirmerie and Mosquée stay separate from the disciplines.
- Children's schools: three schools, ages and weekly frequency retained; added a translated enquiry link to practical information. An authorized photograph of the actual schools is still needed for the requested family photography.
- Gallery: four photographs and keyboard-accessible lightbox retained. The current homepage videos cover the supplied media; event/course gallery categories await matching authentic media.
- Membership: existing editorial orientation and pack selection retained; actual online registration remains outside approved scope.
- Footer: location and quick links retained. Address, contact details, map destination, social links and legal information require verified input.
- News carousel, advantages buttons and tariff PDFs: intentionally absent because no real news, approved advantages or PDFs have been supplied. The illustrative Ginseng example is not a confirmed commercial promise.
- Motel and meeting room capacities: 13 rooms/6 suites and 25 people appear in the document, but the prior content-review decision requires confirmation before those figures are displayed.

## Architecture and future pages

React 19.3 + React DOM, bundled with esbuild. The generated homepage contains complete HTML and hydrates from the same JSX components. Language data is still one explicit FR/AR/ZGH model. Header, Footer, LanguageProvider, bidi-safe Text, motion helpers and PageShell are reusable for future pages. Current secondary pages retain their old implementation and empty editorial bodies until approval.

No router dependency or server is needed; `.html` routes and relative media paths continue to work under a GitHub Pages subdirectory. The local preview adds byte-range support for seeking MP4 media.

## Media behavior

Both backgrounds play muted and loop inline only when their section is on-screen. They pause when off-screen or the document is hidden. Reduced motion, data saving and slow connections prevent automatic loading/playback; an explicit play action can override that preference. Unsupported/blocked video keeps a still image. Pausing freezes the loaded video frame. Language changes preserve each video node and playback position.

## Checks

Run `npm run build` to regenerate the site. Current browser evidence and checks are stored in ignored `qa/` and `output/playwright/`. See docs/VERIFICATION.md for the current results. Source documents and original MP4 files are unchanged.
