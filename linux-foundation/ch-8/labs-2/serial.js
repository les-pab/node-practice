'use strict';
const { promisify } = require('util');

const executeFunction = (func) => {
  func();
};

const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A');
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B');
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C');
  }, 125);
};

// Promisify the operations
const opAPromise = promisify(opA);
const opBPromise = promisify(opB);
const opCPromise = promisify(opC);

// Execute the operations in serial order
opAPromise()
  .then((resultA) => {
    print(null, resultA);
    return opBPromise();
  })
  .then((resultB) => {
    print(null, resultB);
    return opCPromise();
  })
  .then((resultC) => {
    print(null, resultC);
  })
  .catch((err) => {
    print(err);
  });
