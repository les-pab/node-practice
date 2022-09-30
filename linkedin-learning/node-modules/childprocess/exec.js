/**
 * The child_process module provides the ability to spawn subprocesses in a manner that is similar,
 * but not identical, to popen(3). This capability is primarily provided by the child_process.spawn() function.
 *
 * The child_process.exec() spawns a shell then executes the command within that shell, buffering any generated output.
 * The command string passed to the exec function is processed directly by the shell and special characters (vary based on shell)
 * need to be dealt with accordingly.
 *
 * If a callback function is provided, it is called with the arguments (error, stdout, stderror). On success, error will return null.
 * On error, error will be an instance of Error. The error code property will be the exit code of the process. By convention, any exit
 * code other than 0 indicates an error. error.signal will be the signal that terminated the process.
 * The stdout and stderror arguments passed to the callback will contain the stdout and stderror output of the child_process. By default
 * Node.js will decode the output as UTF-8 and pass strings to the callback. The encoding option can be used to specify character encoding
 * used to decode the stdout and stderror. If encoding is buffer, or an unrecognized character encoding, Buffer objects will be passed to
 * the callback instead.
 */

const { exec } = require('child_process');

exec('ls', (error, stdout, stderror) => {
  if (error) {
    throw error;
  }

  console.log('List of file(s)/directories: ');
  console.log(stdout);
});
