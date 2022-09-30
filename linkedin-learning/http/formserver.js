/**
 * The HTTP module allows Node.js to transfer data over the Hyper Text
 * Transfer Protocol
 */
const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    switch (req.method) {
      case 'GET':
        /**
         * The pipe() method is used to take a readable stream and connect it to a writable stream.
         */
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./public/form.html', 'utf-8').pipe(res);
        break;
      case 'POST':
        let body = '';

        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', () => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(`
          <!DOCTYPE html>
          <html>
            <body>
              <h2>Form Results</h2>
          
              <span>${body}</span>
            </body>
          </html>
          `);
        });
        break;
    }
  })
  .listen(3000);

console.log('Form server listening on port 3000...');
