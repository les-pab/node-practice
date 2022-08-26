/**
 * The fs module provides a lot of very useful functionality for interacting with
 * the file system in a way modeled on standard POSIX functions.
 *
 * All the system operations have synchronous, callback, and
 * promise-based forms, and are accessible using both CommonJS syntax
 * and ES6 Modules (ESM)
 */
const { createWriteStream } = require('fs');
const { createInterface } = require('readline');
const rl = createInterface(process.stdin, process.stdout);

const person = {
  name: '',
  sayings: [],
};

rl.question('What is a name of a real person?: ', (answer) => {
  person.name = answer;

  const { name, sayings } = person;

  /**
   * The createWriteStream(path[, options]) method creates a writable stream in a very simple manner.
   * After a call to this method with a filepath, you have a writeable stream to work with.
   */
  const stream = createWriteStream(`${name}.md`);

  /**
   * The write(chunk[, encoding][,callback]) method writes some data to the stream, and calls the
   * supplied callback once the data has been fully handled
   */
  stream.write(`=================\nName: ${name}\n=================\n\n`);

  rl.setPrompt(`What would ${name} say?: `);
  rl.prompt();

  stream.write(`=================\nSayings: \n=================\n\n`);

  rl.on('line', (saying) => {
    if (saying.toLowerCase().trim() === 'exit') {
      stream.close();
      rl.close();
    }

    sayings.push(saying.trim());

    stream.write(`* ${saying.trim()}\n`);

    rl.setPrompt(`What else would ${name} say? (Type 'exit' to leave): `);
    rl.prompt();
  });

  rl.on('close', () => {
    console.log('%s is a real person that says %j', name, sayings);
    process.exit();
  });
});
