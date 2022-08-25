/**
 * Much of the Node.js core API is built around idiomatic asynchronous event-driven architecture
 * in which certain kinds of objects (called "emitters") emit named events that cause
 * Function objects ("listeners") to be called.
 *
 * All objects that emit events are instances of the EventEmitter class that allows these objects
 * to expose an eventEmitter.on() function that allows one or more functions to be attached to named events
 * emitted by the object.
 * 
 * The util module provides access to some utility function such as:
        debuglog(): Writes debug messages to the error object
        deprecate(): Marks the specified function as deprecated
        format(): Formats the specified string, using the specified arguments
        ! inherits(): Inherits methods from one function into another
        inspect(): Inspects the specified object and returns the object as a string
 */
const EventEmitter = require('events').EventEmitter;

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const john = new Person('John Doe');

john.on('speak', (said) => {
  console.log(`${john.name} said, "${said}"`);
});

john.emit('speak', "I am, therefore I'm not");
