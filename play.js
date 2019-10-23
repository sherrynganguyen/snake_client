
const {connect} = require('./client');
const {setupInput} = require('./input');
// const connection = require('./input');
/**
 * Establishes connection with the game server
 */


console.log('Connecting ...');
// connect();
setupInput(connect());
