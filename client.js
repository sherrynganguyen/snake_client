const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  console.log('you ded cuz you idled')
  // interpret incoming data as text
  conn.on('connect', () => {
    conn.write('Successfully connected to game server')
    conn.write('Name: SN')
    setInterval(() => {
      conn.write('Move: right')
    }, 500)  
    setInterval(() => {
      conn.write('Move: up')
    }, 500)
    setInterval(() => {
      conn.write('Move: left')
    }, 500)
  })
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = {connect};