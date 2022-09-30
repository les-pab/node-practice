/**
 * The fs module provides a lot of very useful functionality for interacting with
 * the file system in a way modeled on standard POSIX functions.
 *
 * All the system operations have synchronous, callback, and
 * promise-based forms, and are accessible using both CommonJS syntax
 * and ES6 Modules (ESM)
 */
const { existsSync, mkdir } = require('fs');

/**
 * The existsSync(path) method tests whether or not the given path exists by checking with the
 * file system synchronously.
 */
if (existsSync('testdir')) {
  console.log('Directory already exists!');
  process.exit();
}

/**
 * The mkdir(path[, options], callback) method asynchronously creates a directory.
 *
 * * The callback is given a possible exception and, if recursive is true, the first directory
 * * path created, the first directory path created, (err[, path]). path can still be undefined when
 * * recursive is true, if no directory is created.
 *
 * * The optional options argument can be an integer specifying mode (permission and sticky bits),
 * * or an object with a mode property and a recursive property indicating whether parent directories
 * * should be created. Calling fs.mkdir() when path is a directory that exists results in an error
 * * only when recursive is false.
 */
mkdir('testdir', (err) => {
  if (err) console.error(err);

  console.log('Directory created!');
});
