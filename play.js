
const {connect} = require('./client');
/**
 * Establishes connection with the game server
 */


console.log('Connecting ...');
connect();
const handleUserInput = function (i) {
  if ( i === '\u0003') {
    return;
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

