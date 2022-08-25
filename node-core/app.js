/** 
* The process.argv property is a built-in api of the process module
* that stores all command-line arguments when you issue the command 
* to start the NodeJS process.

* * eg: 
* *   node index.js Nathan 18
* *  node index.js --fname Nathan --age 18

* * More information on the process object here:
* * https://nodejs.org/docs/latest/api/process.html
*/

const grab = (flag) => {
  let index = process.argv.indexOf(flag);
  return index === -1 ? null : process.argv[index + 1];
};

const fname = grab("--fname");
const age = grab("--age");

console.log(`Process Argument Variables: ${process.argv}`);
console.log(`Arguments name: ${fname}, age: ${age}`);
