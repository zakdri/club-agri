'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'..');
require(path.join(root,'assets/club-data.js'));
const data = globalThis.ClubData;
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[character]));
const french = value => {
  if (!value || typeof value.fr !== 'string') throw new Error('Missing French translation');
  return escapeHtml(value.fr);
};
const esbuild = require('esbuild');
const React = require('react');
const { renderToString } = require('react-dom/server');
// One component tree produces prerendered HTML and the browser React bundle.
const compiled = esbuild.buildSync({
  entryPoints: [path.join(root, 'src/club.jsx')], bundle: true, write: false,
  platform: 'node', format: 'cjs', jsx: 'automatic', external: ['react', 'react-dom'],
});
const Module = require('node:module');
const ssr = new Module(path.join(root, 'src/club-ssr.cjs'), module);
ssr.filename = path.join(root, 'src/club-ssr.cjs');
ssr.paths = Module._nodeModulePaths(root);
ssr._compile(compiled.outputFiles[0].text, ssr.filename);
esbuild.buildSync({
  entryPoints: [path.join(root, 'src/main.jsx')], bundle: true, minify: true,
  platform: 'browser', format: 'iife', jsx: 'automatic', target: ['es2020'],
  define: { 'process.env.NODE_ENV': '"production"' },
  outfile: path.join(root, 'assets/club-react.js'), legalComments: 'linked',
});

for (const page of data.navigation) {
  const noscript = '<noscript><nav class="container noscript-nav" aria-label="Navigation">' + data.navigation.map(n => '<a href="' + n.file + '">' + french(n.label) + '</a>').join('') + '</nav><style>.filters,.menu-toggle,[data-expand-activities]{display:none}.noscript-nav{display:flex;flex-wrap:wrap;gap:20px;padding-block:20px}</style></noscript>';
  const content = renderToString(React.createElement(ssr.exports.ClubApp, { page: page.id }));
  const html = '<!doctype html>\n<html lang="fr" dir="ltr">\n<head>\n' +
    '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
    '<meta name="robots" content="noindex,nofollow">\n<title>Club AGRI | ' + french(page.label) + '</title>\n' +
    '<meta name="description" content="' + french(data.text.description) + '">\n' +
    '<meta name="theme-color" content="#153f32">\n<link rel="preload" href="assets/fonts/poppins.ttf" as="font" type="font/ttf" crossorigin>\n' +
    '<link rel="stylesheet" href="assets/icons/css/all.min.css">\n<link rel="stylesheet" href="assets/club-styles.css?v=1">\n' +
    '<link rel="stylesheet" href="assets/homepage.css?v=4">\n<link rel="icon" href="data:,">\n' +
    '<style>body.dialog-open{overflow:hidden}</style>\n</head>\n<body id="top" data-page="' + page.id + '">\n' + noscript +
    '\n<div id="site">' + content + '</div>\n' +
    '<script src="assets/club-react.js?v=4" defer></script>\n</body>\n</html>\n';
  fs.writeFileSync(path.join(root,page.file),html);
}
console.log('Prerendered ' + data.navigation.length + ' React pages. Only the homepage has editorial content.');
