
const {connect} = require('./client');
/**
 * Establishes connection with the game server
 */


console.log('Connecting ...');
connect();
const handleUserInput = function () {
  stdin.on('input', key);
  if ( key === '\u0003') {
    process.exit();
  }
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserinput()
  return stdin;
}

