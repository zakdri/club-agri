'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
require(path.join(root, 'assets/club-data.js'));
const output = path.join(root, 'dist');
fs.mkdirSync(output, { recursive: true });
for (const page of globalThis.ClubData.navigation) {
  fs.copyFileSync(path.join(root, page.file), path.join(output, page.file));
}
// Allowlist deployment files: never publish source briefs, QA, or project notes.
for (const asset of ['club-react.js', 'club-react.js.LEGAL.txt', 'club-data.js', 'club-view.js', 'club-app.js', 'club-styles.css', 'homepage.css', 'fonts', 'icons', 'images', 'videos']) {
  fs.cpSync(path.join(root, 'assets', asset), path.join(output, 'assets', asset), { recursive: true });
}
fs.writeFileSync(path.join(output, '.nojekyll'), '');
console.log('Packaged static client preview in dist/ (10 HTML files and local assets).');
