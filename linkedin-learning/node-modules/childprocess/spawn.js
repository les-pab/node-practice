/**
 * The child_process module provides the ability to spawn subprocesses in a manner that is similar,
 * but not identical, to popen(3). This capability is primarily provided by the child_process.spawn() function.
 *
 * The child_process.spawn() method spawns a new process using the given command, with command-line arguments in
 * args. If omitted, args defaults to an empty array. If the shell option is enabled, do not pass unsanitized user
 * input to this function. Any input containing shell metacharacters may be used to trigger arbitrary command execution.
 *
 * A third argument may be used to specify additional options, with these defaults:
 * const defaults = {
 *  cwd: undefined,
 *  env: process.env
 * }
 * Use cwd to specify the working directory from which the process is spawned (defaults to inheriting the current working directory).
 * If given but path does not exist, the child process emits an ENOENT error and exits immediately. ENOENT is also emitted when the
 * command does not exist.
 * Use env to specify environment variables that will be visible to the new process, the default is process.env.
 */
const { spawn } = require('child_process');

const cp = spawn('node', ['sayings']);

cp.stdout.on('data', (data) => {
  console.log(`stdout: ${data.toString()}`);
});

cp.on('close', () => {
  console.log('child_process has ended.');
  process.exit();
});

setTimeout(() => {
  cp.stdin.write('stop');
}, 4000);
