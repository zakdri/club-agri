'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'..');
require(path.join(root,'assets/club-data.js'));
require(path.join(root,'assets/club-view.js'));
const data = globalThis.ClubData;
const view = globalThis.ClubView;

for (const page of data.navigation) {
  const noscript = '<noscript><nav class="container noscript-nav" aria-label="Navigation">' + data.navigation.map(n => '<a href="' + n.file + '">' + view.tr(n.label,'fr') + '</a>').join('') + '</nav><style>.filters,.menu-toggle,[data-expand-activities]{display:none}.noscript-nav{display:flex;flex-wrap:wrap;gap:20px;padding-block:20px}</style></noscript>';
  const html = '<!doctype html>\n<html lang="fr" dir="ltr">\n<head>\n' +
    '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
    '<meta name="robots" content="noindex,nofollow">\n<title>Club AGRI | ' + view.tr(page.label,'fr') + '</title>\n' +
    '<meta name="description" content="' + view.tr(data.text.description,'fr') + '">\n' +
    '<meta name="theme-color" content="#153f32">\n<link rel="preload" href="assets/fonts/poppins.ttf" as="font" type="font/ttf" crossorigin>\n' +
    '<link rel="stylesheet" href="assets/icons/css/all.min.css">\n<link rel="stylesheet" href="assets/club-styles.css?v=1">\n' +
    '<style>body.dialog-open{overflow:hidden}</style>\n</head>\n<body id="top" data-page="' + page.id + '">\n' + noscript +
    '\n<div id="site">' + view.render('fr',page.id,true) + '</div>\n' +
    '<script src="assets/club-data.js?v=1" defer></script>\n<script src="assets/club-view.js?v=1" defer></script>\n<script src="assets/club-app.js?v=1" defer></script>\n</body>\n</html>\n';
  fs.writeFileSync(path.join(root,page.file),html);
}
console.log('Built ' + data.navigation.length + ' static pages. Only the homepage has editorial content.');
