const Person = require('./Person');

const john = new Person('John Doe');
john.on('speak', (said) => {
  console.log(`${john.name} said, "${said}"`);
});
john.emit('speak', "I am, therefore I'm not");

const jane = new Person('Jane Doe');
jane.on('speak', (said) => {
  console.log(`${jane.name} said, "${said}"`);
});
jane.emit('speak', "I am, therefore I'm not");
