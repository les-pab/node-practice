const SAYINGS = [
  'You may delay, but time will not',
  'Tell me and I forget. Teach me and I remember. Involve me and I learn',
  'It takes many good deeds to build a good reputation, and only one bad one lose it.',
  'Early to bed and early to rise makes a man healthy, wealthy, and wise.',
];

const interval = setInterval(() => {
  const randomIndex = Math.floor(Math.random() * SAYINGS.length);
  process.stdout.write(`${SAYINGS[randomIndex]} \n`);
}, 1000);

process.stdin.on('data', (data) => {
  console.log(`stdin Data received -> ${data.toString().trim()}`);
  clearInterval();
  process.exit();
});
