'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'..');
const port = Number(process.argv[2] || 4180);
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'application/javascript; charset=utf-8', '.jpg':'image/jpeg', '.png':'image/png', '.woff2':'font/woff2', '.ttf':'font/ttf', '.mp4':'video/mp4' };
const server = http.createServer((request,response) => {
  try {
    const name = decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    const file = path.resolve(root,'.' + (name === '/' ? '/index.html' : name));
    if (!file.startsWith(root+path.sep) || !types[path.extname(file)] || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      response.writeHead(404);response.end('Not found');return;
    }
    const size = fs.statSync(file).size;
    const headers = { 'Content-Type':types[path.extname(file)], 'Cache-Control':'no-store', 'Accept-Ranges':'bytes' };
    if (request.headers.range) {
      const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.range);
      if (!range || (!range[1] && !range[2])) { response.writeHead(416, { 'Content-Range':`bytes */${size}` }); response.end(); return; }
      const start = range[1] ? Number(range[1]) : Math.max(0, size - Number(range[2]));
      const end = range[1] && range[2] ? Math.min(Number(range[2]), size - 1) : size - 1;
      if (start >= size || end < start) { response.writeHead(416, { 'Content-Range':`bytes */${size}` }); response.end(); return; }
      response.writeHead(206, { ...headers, 'Content-Range':`bytes ${start}-${end}/${size}`, 'Content-Length':end - start + 1 });
      if (request.method === 'HEAD') response.end(); else fs.createReadStream(file, { start, end }).pipe(response);
      return;
    }
    response.writeHead(200, { ...headers, 'Content-Length':size });
    if (request.method === 'HEAD') response.end(); else fs.createReadStream(file).pipe(response);
  } catch (_) { response.writeHead(400);response.end('Bad request'); }
});
server.listen(port,'127.0.0.1',() => console.log('Club AGRI preview: http://127.0.0.1:' + port));
server.on('error',error => { console.error(error.message);process.exitCode=1; });
