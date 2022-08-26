/**
 * The fs module provides a lot of very useful functionality for interacting with
 * the file system in a way modeled on standard POSIX functions.
 *
 * All the system operations have synchronous, callback, and
 * promise-based forms, and are accessible using both CommonJS syntax
 * and ES6 Modules (ESM)
 */
const { readdirSync, rmdir, unlinkSync } = require('fs');

/**
 * The readdir(path[, options], callback) method reads the contents of a directory asynchronously.
 *
 * The callback gets two arguments (err, files) where files is an array of the names of the files
 * in the directory excluding '.' and '..'
 *
 * The readdirSync(path[, options]) method reads the contents of a directory synchronously.
 */
readdirSync('./testdir/emptydir').forEach((file) => {
  unlinkSync(`./testdir/emptydir/${file}`);
});

/**
 * The rmdir(path[, options], callback) method asynchronously deletes a directory, which must be empty.
 *
 * * Using rmdir() on a file results in an ENOENT error on Windows and an ENOTDIR on POSIX.
 *
 * * To get a behavior similar to the rm -rf Unix command, use rm() method.
 */
rmdir('./testdir/emptydir', (err) => {
  if (err) throw err;

  console.log('Directory removed successfully.');
});
