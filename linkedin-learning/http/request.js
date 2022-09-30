/**
 * The HTTPS module provides a way of making Node.js transfer data over
 * HTTP TLS/SSL protocol, which is the secure HTTP protocol.
 */
const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'en.wikipedia.org',
  port: 443,
  path: '/wiki/Philippines',
  method: 'GET',
};

/**
 * The request(options[, callback]) || request(url[, options][,callback]) method makes a request
 * to a secure web server.
 *
 * * Options can be an object, a string or a URL object. If options is a string, it is
 * * automatically parsed with new URL(). If it is a URL object, it will be automatically converted
 * * to an ordinary option object.
 *
 * * request() returns an instance of the http.ClientRequest class. The ClientRequest instance is a
 * * writable stream.
 */
const req = https.request(options, (res) => {
  let responseBody = '';

  console.log('Response from server started...');
  console.log(`Server status: ${res.statusCode}`);
  console.log('Response Headers: %j', res.headers);

  res.setEncoding('utf-8');

  res.once('data', (chunk) => {
    console.log(chunk);
  });

  res.on('data', (chunk) => {
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  });

  res.on('end', () => {
    fs.writeFile('philippines.html', responseBody, (err) => {
      if (err) throw err;

      console.log('File Downloaded');
    });
  });
});

req.on('error', (err) => {
  if (err) console.error(err);
});

req.end();
