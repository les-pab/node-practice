/**
 * The HTTPS module provids a way of making Node.js transfer data over
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
