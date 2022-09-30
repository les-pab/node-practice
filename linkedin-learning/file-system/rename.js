/**
 * The fs module provides a lot of very useful functionality for interacting with
 * the file system in a way modeled on standard POSIX functions.
 *
 * All the system operations have synchronous, callback, and
 * promise-based forms, and are accessible using both CommonJS syntax
 * and ES6 Modules (ESM)
 */
const { rename, renameSync } = require('fs');

/**
 * The rename(oldPath, newPath) method renames a file from the oldPath to the newPath
 * asynchronously.
 *
 * * If newPath already exists, it will be automatically be replaced.
 */
rename('./sampledir/sample.csv', './testdir/renamed.csv', (err) => {
  if (err) console.error(err);

  console.log('sample.csv file moved/renamed successfully.');
});

/**
 * The renameSync(oldPath, newPath) method renames a file from the oldPath to the newPath
 * synchronously.
 */
renameSync('./sampledir/sample.json', './testdir/renamed.json');
console.log('sample.json file moved/renamed successfully.');
