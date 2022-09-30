/**
 * The fs module provides a lot of very useful functionality for interacting with
 * the file system in a way modeled on standard POSIX functions.
 *
 * All the system operations have synchronous, callback, and
 * promise-based forms, and are accessible using both CommonJS syntax
 * and ES6 Modules (ESM)
 */
const fs = require('fs');
const path = require('path');

/**
 * The readFile() method asynchronously reads the entire contents of a file, that has a callback
 * function with two arguments (err, data), where data is the contents of the file and err is an
 * error.
 *
 * Another argument for the readFile is the encoding, if no encoding is specified then the raw
 * buffer is returned.
 */
fs.readFile('./sampledir/sample.json', 'utf-8', (err, contents) => {
  if (err) console.error(err);

  console.log(`${contents} \n`);
});

/**
 * * NOTE: The readFileSync() method reads the contents of the file synchronously.
 * *       When the path is a directory, the behavior of fs.readFile() and fs.readFileSync()
 * *       is platform-specific. On macOS, Linux, and Windows, an error will be returned.
 * *       On FreeBSD, a representation of the directory's contents will be returned
 */
const contents = fs.readFileSync('./sampledir/sample.json', 'utf-8');
console.log(`${contents} \n`);

fs.readdir('./sampledir', (err, files) => {
  if (err) console.error(err);

  files.forEach((fileName) => {
    const file = path.join(__dirname, 'sampledir', fileName);

    /**
     * statSync() method returns an object that provides information about a file synchronously.
     */
    const stats = fs.statSync(file);

    /**
     * isFile() method returns true if the fs.Stats object describes a regular file.
     */
    if (stats.isFile() && fileName !== '.DS_Store') {
      fs.readFile(file, 'utf-8', (err, contents) => {
        if (err) console.error(err);

        console.log(`${contents} \n`);
      });
    }
  });
});
