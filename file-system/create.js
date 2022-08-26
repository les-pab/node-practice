/**
 * The fs module provides a lot of very useful functionality for interacting with
 * the file system in a way modeled on standard POSIX functions.
 *
 * All the system operations have synchronous, callback, and
 * promise-based forms, and are accessible using both CommonJS syntax
 * and ES6 Modules (ESM)
 */
const { createInterface } = require('readline');
const rl = createInterface(process.stdin, process.stdout);
const fs = require('fs');

const md = `
Sample Markdown Title
=====================

Sample subtitle
---------------

* point
* point
* point
`;

/**
 * The writeFile(file, data[,options], callback) method asynchronously write data to the file,
 * replacing the file if it already exists. data can be a string or a Buffer.
 *
 * * When file is a descriptor, the behavior is similar to calling write() directly (which is recommended).
 *
 * * The encoding option is ignored if data is buffer.
 */
// fs.writeFile('sample.md', md.trim(), (err) => {
//   if (err) console.error(err);

//   console.log('The file has been saved!');
// });

const person = {
  name: '',
  sayings: [],
};

rl.question('What is a name of a real person?: ', (answer) => {
  person.name = answer;

  const { name, sayings } = person;

  /**
   * Similar to the writeFile(), the writeFileSync() method synchronously write data to the file,
   * replacing the file if it already exists. data can be a string or a Buffer.
   */
  fs.writeFileSync(`${name}.md`, `${name}\n=================\n\n`);

  rl.setPrompt(`What would ${name} say?: `);
  rl.prompt();

  rl.on('line', (saying) => {
    if (saying.toLowerCase().trim() === 'exit') {
      rl.close();
    }

    sayings.push(saying.trim());

    /**
     * The appendFile(path, data[,options], callback) method asynchronously appends data to a file,
     * creating the file if it does not yet exits. data can be a string or a Buffer.
     */
    fs.appendFile(`${name}.md`, `* ${saying.trim()}\n`, (err) => {
      if (err) console.error(err);
    });

    rl.setPrompt(`What else would ${name} say? (Type 'exit' to leave): `);
    rl.prompt();
  });

  rl.on('close', () => {
    console.log('%s is a real person that says %j', name, sayings);
    process.exit();
  });
});
