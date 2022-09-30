/** 
* The process.stdout property is a stream connected to stdout.
* * Sample use of the process.stdout property using write to print data on the console:

* *   process.stdout.write("Hello World");

* The process.stdin property is an inbuilt application programming interface of the process module 
* which listens for the user input. The stdin property of the process object is a Readable Stream. 
* It uses on() function to listen for the event.


* More information on the process object here:
* https://nodejs.org/docs/latest/api/process.html
*/

const questions = [
  'What is your name?',
  'What is your favorite hobby?',
  'What is your preferred programming language?',
];

const answers = [];

/**
 * * NOTE: Both methods - console.log and process.stdout.write have a basic definition to write or print
 * *      data on the console the only slight difference is that console.log implements process.stdout.write.
 */
const ask = (index) => {
  process.stdout.write(`\nQuestion ${index}:\n${questions[index]}`);
  process.stdout.write(` > `);
};

/**
 * * NOTE: process.stdin.on("data", handler) listens for a data event (when a user types a data
 * *      into the terminal and hits Enter) on the process object and triggers a callback function
 */
process.stdin.on('data', (data) => {
  answers.push(data.toString().trim());

  if (answers.length >= questions.length) {
    process.exit();
  }

  ask(answers.length);
});

/**
 * * NOTE: process.on("exit", handler) listens for an exit event on the process object and triggers
 * *       a callback function
 */
process.on('exit', () => {
  process.stdout.write(
    `\nGo ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later.`
  );
});

ask(0);
