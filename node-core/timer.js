const WAIT_TIME = 3000;
const WAIT_INTERVAL = 10;

let currentTime = 0;
let percentWaited = 0;

const loadingPercent = (percent) => {
  //clearLine() clears the last line inside a terminal
  process.stdout.clearLine();
  //cursorTo(0) moves the cursor back to the beginning of the line
  process.stdout.cursorTo(0);
  process.stdout.write(`Loading: ${percent}%...`);
};

/**
* * NOTE: setInterval() takes a function argument that will run an infinite number of time with a given 
* *       millisecond delay as the second argument. Just like setTimeout(), additional arguments can be added
* *       beyond the delay, and these will be passed on to the function call.
*/
const interval = setInterval(() => {
  currentTime += WAIT_INTERVAL;
  percentWaited = Math.floor((currentTime / WAIT_TIME) * 100);
  loadingPercent(percentWaited);
}, WAIT_INTERVAL);

/**
* * NOTE: setTimeout() can be used to schedule code execution after a designated amount of milliseconds.
* *       This function is similar to window.setTimeout() from the browser JavaScript API, however a 
* *       function is used to execute as its first argument and the millisecond delay defined as a \
* *       number as a second argument.
*/
setTimeout(() => {
  clearInterval(interval);
  loadingPercent(100);
}, WAIT_TIME);

loadingPercent(percentWaited);
