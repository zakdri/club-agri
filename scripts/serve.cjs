'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'..');
const port = Number(process.argv[2] || 4180);
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'application/javascript; charset=utf-8', '.jpg':'image/jpeg', '.png':'image/png', '.woff2':'font/woff2', '.ttf':'font/ttf' };
const server = http.createServer((request,response) => {
  try {
    const name = decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    const file = path.resolve(root,'.' + (name === '/' ? '/index.html' : name));
    if (!file.startsWith(root+path.sep) || !types[path.extname(file)] || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      response.writeHead(404);response.end('Not found');return;
    }
    response.writeHead(200,{'Content-Type':types[path.extname(file)],'Cache-Control':'no-store'});
    fs.createReadStream(file).pipe(response);
  } catch (_) { response.writeHead(400);response.end('Bad request'); }
});
server.listen(port,'127.0.0.1',() => console.log('Club AGRI preview: http://127.0.0.1:' + port));
server.on('error',error => { console.error(error.message);process.exitCode=1; });
