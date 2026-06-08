// Usage: node serve.js <dir> <port>
const http = require('http');
const fs   = require('fs');
const path = require('path');

const dir  = path.resolve(process.argv[2] || '.');
const port = parseInt(process.argv[3] || '3000', 10);

const mime = {
  '.html': 'text/html', '.css': 'text/css',
  '.js':   'application/javascript', '.json': 'application/json',
  '.png':  'image/png',  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',  '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.mp4':  'video/mp4',  '.webm': 'video/webm',  '.ogg': 'video/ogg',
  '.woff': 'font/woff',  '.woff2': 'font/woff2',  '.ttf': 'font/ttf',
};

http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') url = '/index.html';
  const file = path.join(dir, url);
  if (!file.startsWith(dir)) { res.writeHead(403); return res.end(); }

  fs.stat(file, (err, stat) => {
    if (err) { res.writeHead(err.code === 'ENOENT' ? 404 : 500); return res.end(); }

    const contentType = mime[path.extname(file)] || 'application/octet-stream';
    const total = stat.size;
    const rangeHeader = req.headers['range'];

    // Range request support (required for video seeking/streaming)
    if (rangeHeader) {
      const [startStr, endStr] = rangeHeader.replace('bytes=', '').split('-');
      const start = parseInt(startStr, 10);
      const end   = endStr ? parseInt(endStr, 10) : Math.min(start + 1024 * 1024, total - 1);
      res.writeHead(206, {
        'Content-Type':  contentType,
        'Content-Range': `bytes ${start}-${end}/${total}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': end - start + 1,
      });
      fs.createReadStream(file, { start, end }).pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Type':  contentType,
        'Accept-Ranges': 'bytes',
        'Content-Length': total,
      });
      fs.createReadStream(file).pipe(res);
    }
  });
}).listen(port, () => console.log(`Serving ${dir} → http://localhost:${port}`));
