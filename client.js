const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.149',
    port: 50541
  });
  console.log('you ded cuz you idled')
  // interpret incoming data as text
  conn.on('connect', () => {
    conn.write('Successfully connected to game server')
    conn.write('Name: SN')
  })
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = {connect};