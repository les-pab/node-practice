/**
 * The fs module provides a lot of very useful functionality for interacting with
 * the file system in a way modeled on standard POSIX functions.
 *
 * All the system operations have synchronous, callback, and
 * promise-based forms, and are accessible using both CommonJS syntax
 * and ES6 Modules (ESM)
 */
const { unlink, unlinkSync } = require('fs');

/**
 * The unlink(path, callback) method asynchronously removes a file or symbolic link.
 * No arguments other than a possible exception are given to the completion callback.
 *
 * * This method will not work on a directory.
 */
unlink('./sampledir/innerdir/sample.csv', (err) => {
  if (err) console.error(err);

  console.log('sample.csv has been removed successfully.');
});

/**
 * The unlinkSync(path) method synchronously removes a file or symbolic link.
 * No arguments other than a possible exception are given to the completion callback.
 */
try {
  unlinkSync('./sampledir/innerdir/sample.json');
  console.log('sample.json has been removed successfully.');
} catch (err) {
  console.error(err);
}
