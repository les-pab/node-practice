/**
 * The HTTP module allows Node.js to transfer data over the Hyper Text
 * Transfer Protocol
 */
const http = require('http');

/**
 * The createServer([options][, requestListener]) method creates a server on your computer and
 * returns a new instance of http.Server
 */
const server = http.createServer((req, res) => {
  /**
   * The writeHead(statusCode, headers) method sends a response header to the request.
   *
   * * headers may be an Array where the keys and values are on the same list.
   */
  res.writeHead(200, { 'Content-Type': 'text/html' });

  /**
   * The end(chunk) method signals that no more data will be written to the Writable.
   *
   * * The optional chunk and encoding arguments allow one final additional chunk of data
   * * to be written immediately before closing the stream.
   */
  res.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>HTML Response</title>
        </head>
        <body>
            <h1>Serving HTML Text</h1>
            <p>${req.url}</p>
            <p>${req.method}</p>
        </body>
    </html>
  `);
});

/**
 * Start a server listening for connections. A net.Server can be a TCP or
 * an IPC server depending on what it listens to.
 */
server.listen(3000);

console.log('Server listening on port 3000...');
