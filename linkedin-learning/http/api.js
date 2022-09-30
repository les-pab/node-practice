/**
 * The HTTP module allows Node.js to transfer data over the Hyper Text
 * Transfer Protocol
 */
const http = require('http');
const users = require('./public/users.json');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(JSON.stringify(users));
  })
  .listen(3000);

console.log('Server listening on port 3000...');
