/**
 * The fs module provides a lot of very useful functionality for interacting with
 * the file system in a way modeled on standard POSIX functions.
 *
 * All the system operations have synchronous, callback, and
 * promise-based forms, and are accessible using both CommonJS syntax
 * and ES6 Modules (ESM)
 */
const { createReadStream } = require('fs');

/**
 * The createReadStream(path[, options]) method opens a file/stream and reads the contents of a file
 */
const stream = createReadStream('./testdir/renamed.json', 'utf-8');

let data = '';

stream.once('data', () => {
  console.log('Started reading file...');
  console.log('=======================');
});

stream.on('data', (chunk) => {
  process.stdout.write(`chunk: ${chunk.length} \n`);
  data += chunk;
});

stream.on('end', () => {
  console.log('=========================');
  console.log(`Length of file: ${data.length}`);
  console.log('=========================');
  console.log('Finished reading file...');
});
