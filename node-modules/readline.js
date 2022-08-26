/**
 * Node.js follows the CommonJS module system, and the builtin require function is the easiest
 * way to include modules that exist in separate files. The basic functionality of require is that
 * it reads a JavaScript file, executes the file, and then proceeds to return the exports object.
 *
 * The ReadLine Module in Node.js allows the reading of input stream line by line. This module wraps
 * up the process standard output and process standard input objects. Readline module makes it easier
 * for input and output given by the user.
 */
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const person = {
  name: '',
  sayings: [],
};
/**
 * The question() method is used for asking questions from the user and reading their reply (output).
 * The firs parameter is used to ask the question and the second parameter is a callback function which
 * will take the output from the user as its parameter.
 */
rl.question('What is a name of a real person?: ', (answer) => {
  person.name = answer;

  const { name, sayings } = person;
  /**
   * The setPrompt() method is used to set a particular statement to the console.
   * The prompt() method is for displaying the statement that was set using the setPrompt() method.
   */
  rl.setPrompt(`What would ${name} say?: `);
  rl.prompt();

  /**
   * rl.one('line', handler) is a an event that will fire when the user submits an answer
   */
  rl.on('line', (saying) => {
    if (saying.toLowerCase().trim() === 'exit') {
      rl.close();
    }

    sayings.push(saying.trim());

    rl.setPrompt(`What else would ${name} say? (Type 'exit' to leave): `);
    rl.prompt();
  });

  /**
   * rl.one('close', handler) is a an event that will fire when a close event happens
   */
  rl.on('close', () => {
    console.log(
      '%s is a real person that says %j',
      person.name,
      person.sayings
    );
    process.exit();
  });
});
