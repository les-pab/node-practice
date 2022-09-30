/**
 * The HTTP module allows Node.js to transfer data over the Hyper Text
 * Transfer Protocol
 */
const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    console.log(`${req.method} request for ${req.url}`);

    if (req.url !== '/') {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 File Not Found');
    }

    fs.readFile('./public/index.html', 'utf-8', (err, html) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    });
  })
  .listen(3000);

console.log('Server listening on port 3000...');
