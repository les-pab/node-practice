/**
 * The fs module provides a lot of very useful functionality for interacting with
 * the file system in a way modeled on standard POSIX functions.
 *
 * All the system operations have synchronous, callback, and
 * promise-based forms, and are accessible using both CommonJS syntax
 * and ES6 Modules (ESM)
 */

const fs = require('fs');

/**
 * The readdir() method reads the contents of the directory asynchronously, that has a callback
 * function with two arguments (err, files) where files is an array of the names of the files
 * in the directory excluding '.' and '..', while err is an error.
 */
fs.readdir('./sampledir', (err, files) => {
  if (err) console.error(err);

  console.log(`${files} \n`);
});

console.log('Reading files...');

/**
 * * NOTE: Similar to the readdir() method, the readdirSync() method reads the contents of the
 * * directory synchronously, blocking the single Node.js thread.
 */
const files = fs.readdirSync('./sampledir');
console.log(`${files} \n`);
