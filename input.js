let connection;
const stdin = process.stdin;

const handleUserInput = function () {
  stdin.on('data', function(key) {
   if ( key === '\u0003') { process.exit(); }
  });
  stdin.on('data', function(key) {
    if ( key === 'w') { connection.write('Move: up') }
   });
   stdin.on('data', function(key) {
    if ( key === 'a') { connection.write('Move: left') }
   });
   stdin.on('data', function(key) {
    if ( key === 'd') { connection.write('Move: right') }
   });
   stdin.on('data', function(key) {
    if ( key === 's') { connection.write('Move: down') }
   });  
   stdin.on('data', function(key) {
    if ( key === 'q') { connection.write('Say: Pika') }
   }); 
};
const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();

  return stdin;
}

module.exports = {setupInput};