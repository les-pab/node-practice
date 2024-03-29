'use strict';
const { EventEmitter } = require('events');

process.nextTick(console.log, 'passed!');

const ee = new EventEmitter();

ee.on('error', (err) => {
  console.log(`Got an error: ${err.message}`);
});

ee.emit('error', Error('timeout'));
